import { Injectable, Type } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { noSQLData } from './no-sql-data';
import { doc, limit, query, QueryDocumentSnapshot } from 'firebase/firestore';
import { getType } from '@angular/flex-layout/extended/style/style-transforms';
import { EventType } from '@angular/router';
import { throwError, timeout } from 'rxjs';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { Item } from 'src/app/models/Item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    public storage: AngularFireStorage,
    public fs: AngularFirestore
  ) { }

  //------------------------ DONATION ITEMS ------------------------\\

  //------------------------ READ DONATION ITEMS -------------------\\

  getItems(orgID) {
    let items = this.fs
      .collection('Organisations').doc(orgID).collection('Items')
      .valueChanges({ idField: "id" })
    return items

  }

    //------------------------ Add Donation Items ---------------------//
    addItem(orgID: string, item: Item) {

      try {

        const org = this.fs
        .collection('Organisations').doc(orgID)

        const newItem =
        org.collection('Items').doc()

        this.fs.firestore.runTransaction(transaction =>
          transaction.get(org.ref).then((action) => {
            const newTotalDonationItems = action.data()['totalDonationItems'] + 1;
            transaction.update(org.ref, { totalDonationItems: newTotalDonationItems })
            transaction.set(newItem.ref,item)
          })
        )

        console.log('Transaction Success!')
      } catch (e) {

        console.log('Transaction failure:', e)

      }

    }

    //----------------------------------------------------------------//


  //------------------------ DELETE DONATION ITEMS -------------------\\

  async deleteItem(orgID: string, itemID: string): Promise<boolean> {

    //Get item
    const itemDocument = this.fs
      .collection('Organisations')
      .doc(orgID).collection('Items')
      .doc(itemID);

    //Get item donations collection
    const itemDonationColl = itemDocument.collection('ItemsDonations', query => query.limit(1));

    let donations: any;

    await itemDonationColl.ref.get().then(data => {
      donations = data.docs;
    });

    if (donations.length > 0) {
      return false;
    } else {
      itemDocument.delete();

      return true;
    }
  }
}
