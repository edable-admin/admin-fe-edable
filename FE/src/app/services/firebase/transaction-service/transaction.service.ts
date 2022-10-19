import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/app';
import { Item } from 'src/app/models/Item';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { Timestamp } from 'firebase/firestore';
import { PrivateData, ReferralCSVModel } from 'src/app/models/Reports';
import { query } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(
    public fs: AngularFirestore
  ) { }



  //------------------------ Gets a list of donation items for an organisation -------------------\\
  getItemDonations() {
    const itemDonations = this.fs.firestore
      .collectionGroup('ItemsDonations')
      .get();
    return itemDonations;
  }

  //------------------------ Get Org Item Donations ----------------------------------------------\\
  getOrgItemDonations(orgID: string, itemID: string) {
    const itemDonations = this.fs.firestore
      .collection('Organisations')
      .doc(orgID)
      .collection('Items')
      .doc(itemID)
      .collection('ItemsDonations')
      .orderBy('donationDate','asc')
      .get();
    return itemDonations;
  }

  //------------------------ Get Org General Donations -------------------------------------------\\
  getOrgGeneralDonations(orgID: string) {
    const orgGenDonations = this.fs.firestore
      .collection('Organisations')
      .doc(orgID)
      .collection('GeneralDonations')
      .get();
    return orgGenDonations;
  }

  //------------------------ Get All General Donations -------------------------------------------\\
  async getGeneralDonations() {
    const orgGenDonations = (await this.fs.firestore
      .collectionGroup('GeneralDonations')).get()


    return orgGenDonations;
  }

  //------------------------ Edit the "IsRefunded" for General Donation -------------------------------\\
  async editGenDonation(orgID: string, donationID: string, transactionReq: GeneralDonations["IsRefunded"]) {
    this.fs.collection("Organisations").doc(orgID).collection('GeneralDonations').doc(donationID).update({ IsRefunded: transactionReq });

  }

  //------------------------ Edit the "IsRefunded" for Item Donation ----------------------------------\\
  async editItemDonation(orgID: string, itemID: string, donationID: string, transactionReq: ItemDonations["IsRefunded"]) {
    this.fs.collection("Organisations").doc(orgID).collection("Items").doc(itemID).collection('ItemsDonations').doc(donationID).update({ IsRefunded: transactionReq });
    return transactionReq;
  }

  async getReferralData(): Promise<ReferralCSVModel[]> {

    let privateData: PrivateData[] = [];
    let referralData: ReferralCSVModel[] = [];
    let orgID: string = '';
    let donationType: string = '';


    await this.fs.firestore.collectionGroup('Private')
      .get()
      .then((resp) => {

        resp.docs.forEach((resp) => {

          if (resp.ref.parent.parent.parent.id === 'ItemsDonations') {
            orgID = resp.ref.parent.parent.parent.parent.parent.parent.id;
            donationType = 'Item';
          }
          else {
            orgID = resp.ref.parent.parent.parent.parent.id;
            donationType = 'General';
          }
          let privateData: PrivateData = resp.data() as PrivateData;
          let newReferral: ReferralCSVModel = {
            Org_Name: orgID,
            Donation_Type: donationType,
            Is_Anon: privateData.IsAnon,
            Agree_To_Contact: privateData.agreeToContact,
            Email: privateData.email,
            Referral: privateData.howHeardOther,
            Mailing_Address: privateData.mailingAddress,
            Name: privateData.name,
            Phone_Number: privateData.phoneNumber
          };

          referralData.push(newReferral);
        });
      });

    return referralData;
  }
}
