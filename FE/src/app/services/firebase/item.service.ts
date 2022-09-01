import { Injectable, Type } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { noSQLData } from './no-sql-data';
import { doc, limit, query, QueryDocumentSnapshot } from 'firebase/firestore';
import { getType } from '@angular/flex-layout/extended/style/style-transforms';
import { EventType } from '@angular/router';
import { throwError, timeout } from 'rxjs';
import { Organisation } from 'src/app/models/Organisation/Organisation';


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

  //------------------------ DELETE DONATION ITEMS -------------------\\

  async deleteItem(orgID: string, itemID: string): Promise<boolean> {
    let isSuccess: boolean = false;
    //Get org
    const orgRef = this.fs
      .collection('Organisations')
      .doc(orgID).ref;

    //Get item
    const itemDocument = this.fs
      .collection('Organisations')
      .doc(orgID).collection('Items')
      .doc(itemID);

    //Get donations to an item, limited to 1
    const itemDonationColl = itemDocument.collection('ItemsDonations', query => query.limit(1));

    //Assign the donations to an array
    let donations: any;
    await itemDonationColl.ref.get().then(data => {
      donations = data.docs;
    });
    console.log("donations.length: " + donations.length);
    
    if (donations.length <= 0) {

      this.fs.firestore.runTransaction(transaction =>
        transaction
          .get(orgRef)
          .then((orgDoc: any) => {
            let newItemCount = orgDoc.data().totalDonationItems - 1;
            if (newItemCount < 0) {
              //Dont want negative donation items
              newItemCount = 0;
            }
            console.log("newItemCount: " + newItemCount);
            transaction.update(orgRef, { totalDonationItems: newItemCount })
            transaction.delete(itemDocument.ref);
          }))
        .then((resp) => {
          console.log("response: " + resp);
          isSuccess = true
          console.log("isSuccess .then: " + isSuccess);
        })
        .catch((err) => {
          console.log("error: " + err);
          isSuccess = false;
        });
    }

    console.log("isSuccess end: " + isSuccess);
    
    return isSuccess;
    // if (donations.length > 0) {
    //   return false;
    // } else {
    //   itemDocument.delete();

    //   return true;
    // }
  }
}
