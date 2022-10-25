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

    let privateRawData: any;
    let generalDonationData:any;
    let ItemDonationData:any;
    let reportData: ReportCSVModel[] = [];
    let orgID: string = '';
    let donationTypeRaw: string = '';

    // get requestss
    await this.fs.firestore.collectionGroup('Private').get().then((resp) => { privateRawData = resp });
    await this.fs.firestore.collectionGroup('GeneralDonations').get().then((resp) => { generalDonationData = resp });
    await this.fs.firestore.collectionGroup('ItemsDonations').get().then((resp) => { ItemDonationData = resp });

    // iterate through private data and match with item/general
    privateRawData.docs.forEach((resp) => {
      let privateData: PrivateData = resp.data() as PrivateData;
      let publicDataUnclean:any;

      // Matching items donations to private data
      if (resp.ref.parent.parent.parent.id === 'ItemsDonations') {
        orgID = resp.ref.parent.parent.parent.parent.parent.parent.id;
        ItemDonationData.forEach(e => {
          if (e.ref.id == resp.ref.parent.parent.id) {
            donationTypeRaw = 'Item Donation';
            publicDataUnclean = e;
          }
        });
      }
      else { // MAtching general donation to private data
        orgID = resp.ref.parent.parent.parent.parent.id;
        generalDonationData.forEach(e => {
          if (e.ref.id === resp.ref.parent.parent.id) {
            donationTypeRaw = 'General Donation'
            publicDataUnclean = e;
          }
        });
      }
      if (publicDataUnclean != undefined) {
        let publicData: PublicData = publicDataUnclean.data() as PublicData;
        let newReferral: ReportCSVModel = {
          orgID: orgID,
          donationType:donationTypeRaw,
          IsRefunded:publicData.IsRefunded,
          IsSubscribed:publicData.IsSubscribed,
          amount:publicData.amount,
          comment:publicData.comment,
          donationDate:publicData.donationDate.toDate().toLocaleDateString(),
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
      }
      
    });
    return reportData;
  }


}
