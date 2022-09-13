import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { increment } from '@angular/fire/firestore';
import { Item } from 'src/app/models/Item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(
    public storage: AngularFireStorage,
    public fs: AngularFirestore
  ) {}

  //------------------------ Gets a list of donation items for an organisation -------------------\\

  getItems(orgID: string) {
    let items = this.fs
      .collection('Organisations')
      .doc(orgID)
      .collection('Items')
      .valueChanges({ idField: 'id' });
    return items;
  }

  //------------------------ Add donation items ---------------------//
  addItem(orgID: string, item: Item) {
    try {
      const org = this.fs.collection('Organisations').doc(orgID);

      const newItem = org.collection('Items').doc();

      //Transaction ensures that adding the donation item and the total donation items count update
      //happen together if one fails the other transaction does not happen.
      //A transaction will be retried up to 5 times then rolled back if the failure keeps happening.
      //https://firebase.google.com/docs/firestore/manage-data/transactions
      this.fs.firestore.runTransaction((transaction) =>
        transaction.get(org.ref).then((action) => {
          transaction.update(org.ref, { totalDonationItems: increment(1) });
          transaction.set(newItem.ref, item);
        })
      );

      return newItem.ref.id;
    } catch (e) {
      console.log('Transaction failure:', e);
    }
    return null;
  }

  //------------------------ Delete donation items -------------------\\

  async deleteItem(orgID: string, itemID: string): Promise<boolean> {
    let isSuccess: boolean = false;
    //Get org
    const org = this.fs.collection('Organisations').doc(orgID);

    //Get item
    const itemDocument = this.fs
      .collection('Organisations')
      .doc(orgID)
      .collection('Items')
      .doc(itemID);

    //Get donations to an item, limited to 1
    const itemDonationColl = itemDocument.collection(
      'ItemsDonations',
      (query) => query.limit(1)
    );

    //Assign the donations to an array. Array length is max 1 since it was limited in the query
    let donations: any;
    await itemDonationColl.ref.get().then((data) => {
      donations = data.docs;
    });

    //If item has donation, do not allow deletion
    if (donations.length > 0) {
      return false;
    }

    //Transaction ensures that adding the donation item and the total donation items count update
    //happen together if one fails the other transaction does not happen.
    //A transaction will be retried up to 5 times then rolled back if the failure keeps happening.
    //https://firebase.google.com/docs/firestore/manage-data/transactions
    await this.fs.firestore
      .runTransaction((transaction) =>
        transaction.get(itemDocument.ref).then((item) => {
          if (item.exists) {
            transaction.delete(itemDocument.ref);
            transaction.update(org.ref, { totalDonationItems: increment(-1) });
          }
        })
      )
      .then((resp) => {
        //After item has been successfully deleted
        isSuccess = true;
      })
      .catch((err) => {
        //Any error means item couldn't be deleted
        isSuccess = false;
      });
    return isSuccess;
  }

  //------------------------ Update donation items -------------------\\
  async updateItem(orgID: string, itemID: string, item: any) {
    // Get Item Variable
    const itemDocument = this.fs
      .collection('Organisations')
      .doc(orgID)
      .collection('Items')
      .doc(itemID);

    itemDocument.update(item);

    return true;
  }
}
