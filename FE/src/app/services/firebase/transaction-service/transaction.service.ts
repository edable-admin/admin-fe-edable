import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item } from 'src/app/models/Item';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';

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
  //   let itemDonations = this.fs
  //     .collection('Organisations')
  //     .doc(orgID)
  //     .collection('Items')
  //     .doc(itemID)
  //     .collection('ItemsDonations')      
  //     .valueChanges({ idField: 'id' });
  //     console.log(itemDonations);
  //   return itemDonations;
  // }

  let itemDonations = this.fs.firestore.collectionGroup("ItemsDonations").get();
  return itemDonations;
  }

  getOrgItemDonations(orgID: string, itemID: string) {
    let itemDonations = this.fs.firestore.collection('Organisations')
    .doc(orgID)
    .collection("Items")
    .doc(itemID)
    .collection("ItemsDonations").get();
     return itemDonations;
  }
}
