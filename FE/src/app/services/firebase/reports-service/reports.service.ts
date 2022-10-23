import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PrivateData, PublicData, ReportCSVModel } from 'src/app/models/Reports';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(public fs: AngularFirestore) { }

  getItemDonations() {
    const itemDonations = this.fs.firestore
      .collectionGroup('ItemsDonations')
      .get();
    return itemDonations;
  }

  getGeneralDonations() {
    const orgGenDonations = this.fs.firestore
      .collectionGroup('GeneralDonations')
      .get();

    return orgGenDonations;
  }

  async getReportData(): Promise<ReportCSVModel[]> {

    let privateData: any;
    let generalDonationData:any;
    let ItemDonationData:any;
    let reportData: ReportCSVModel[] = [];
    let orgID: string = '';
    let donationType: string = '';

    await this.fs.firestore.collectionGroup('Private').get().then((resp) => { privateData = resp });
    console.log(privateData)
    await this.fs.firestore.collectionGroup('GeneralDonations').get().then((resp) => { generalDonationData = resp });
    console.log(generalDonationData)
    // await this.fs.firestore.collectionGroup('ItemDonations').get().then((resp) => { ItemDonationData = resp });
    console.log(ItemDonationData)


    privateData.docs.forEach((resp) => {
      let privateData: PrivateData = resp.data() as PrivateData;
      let publicDataUnclean:any;

      if (resp.ref.parent.parent.parent.id === 'ItemsDonations') {
        orgID = resp.ref.parent.parent.parent.parent.parent.parent.id;
        donationType = 'Item';
        ItemDonationData.forEach(e => {
          if (e.ref.parent.id == resp.ref.parent.parent.id) {
            publicDataUnclean = e;
          }
        });
      }
      else {
        orgID = resp.ref.parent.parent.parent.parent.id;
        donationType = 'General';
        generalDonationData.forEach(e => {
          if (e.ref.parent.id == resp.ref.parent.parent.id) {
            publicDataUnclean = e;
          }
        });
      }

      let publicData: PublicData = publicDataUnclean.data() as PublicData;
      let newReferral: ReportCSVModel = {
        orgID: orgID,
        donationType:donationType,
        IsRefunded:publicData.IsRefunded,
        IsSubscribed:publicData.IsSubscribed,
        amount:publicData.amount,
        comment:publicData.comment,
        donationDate:publicData.donationDate,
        donorPublicName:publicData.donorPublicName,
        IsAnon:privateData.IsAnon,
        agreeToContact:privateData.agreeToContact,
        email:privateData.email,
        howHeardOther:privateData.howHeardOther,
        mailingAddress:privateData.mailingAddress,
        name:privateData.name,
        paypalTransactionId:privateData.paypalTransactionId,
        phoneNumber:privateData.phoneNumber
      };

      reportData.push(newReferral);
    });

    return reportData;
  }


}
