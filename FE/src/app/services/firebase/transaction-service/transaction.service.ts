import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item } from 'src/app/models/Item';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(
    public storage: AngularFireStorage,
    public fs: AngularFirestore
  ) {}
  
  

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
      this.fs.collection("Organisations").doc(orgID).collection('GeneralDonations').doc(donationID).update({IsRefunded: transactionReq});

    }

    //------------------------ Edit the "IsRefunded" for Item Donation ----------------------------------\\
    async editItemDonation(orgID: string, itemID:string, donationID: string, transactionReq: ItemDonations["IsRefunded"]) {
      this.fs.collection("Organisations").doc(orgID).collection("Items").doc(itemID).collection('ItemsDonations').doc(donationID).update({IsRefunded: transactionReq});
      return transactionReq;
    }

  //------------------------------------- Get All Orgs -------------------------------------------\\
  getOrgs() {
    const org = this.fs.collection('Organisations').doc();
    const orgRef = org.ref;
  }

}
