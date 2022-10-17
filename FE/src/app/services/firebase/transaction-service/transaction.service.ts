import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/app';
import { Item } from 'src/app/models/Item';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { Timestamp } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    public storage: AngularFireStorage,
    public fs: AngularFirestore
  ) { }

  //------------------------ Gets a list of donation items for an organisation -------------------\\
  getItemDonations() {
    let itemDonations = this.fs.firestore.collectionGroup("ItemsDonations").get();
    return itemDonations;
  }

  //------------------------ Get Org Item Donations ----------------------------------------------\\
  getOrgItemDonations(orgID: string, itemID: string) {
    let itemDonations = this.fs.firestore.collection('Organisations')
      .doc(orgID)
      .collection("Items")
      .doc(itemID)
      .collection("ItemsDonations").get();
    return itemDonations;
  }

  //------------------------ Get Org General Donations -------------------------------------------\\
  getOrgGeneralDonations(orgID: string) {
    let orgGenDonations = this.fs.firestore.collection('Organisations')
      .doc(orgID)
      .collection("GeneralDonations").get();
    return orgGenDonations;
  }

  //------------------------ Get All General Donations -------------------------------------------\\
  getGeneralDonations() {
    let orgGenDonations = this.fs.firestore.collectionGroup('GeneralDonations').get();
    return orgGenDonations;
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

interface PrivateData {
  IsAnon: boolean;
  agreeToContact: boolean;
  email: string;
  howHeardOther: string;
  mailingAddress: string;
  name: string;
  paypalTransactionId: string;
  phoneNumber: string;
}
export interface Referral {
  orgId: string;
  donationType: string;
  isAnon: boolean;
  agreeToContact: boolean;
  email: string;
  howHeard: string;
  howHeardOther: string;
  mailingAddress: string; 
  name: string;
  phoneNumber: string;
  amount: number;
  comment: string;
  donationDate: string;
}
export interface ReferralCSVModel {
  Org_Name: string;
  Donation_Type: string;
  Is_Anon: boolean;
  Agree_To_Contact: boolean;
  Email: string;
  Referral: string;
  Mailing_Address: string;
  Name: string;
  Phone_Number: string;
}