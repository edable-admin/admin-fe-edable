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

        return newItem.ref.id;
      } catch (e) {

        console.log('Transaction failure:', e)

      }
      return null;
    }

    //----------------------------------------------------------------//


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

    //Assign the donations to an array. Array length is max 1 since it was limited in the query
    let donations: any;
    await itemDonationColl.ref.get().then(data => {
      donations = data.docs;
    });
    
    //If item has donation, do not allow deletion
    if (donations.length > 0) {
      return false;
    }

    await this.fs.firestore.runTransaction(transaction =>
      transaction
        .get(orgRef)
        .then((orgDoc: any) => {
          //OPTION: count all org items instead of subtracting to avoid errors
          let newItemCount = orgDoc.data().totalDonationItems - 1;
          if (newItemCount < 0) {
            //Dont want negative donation items. maybe not necessary??
            newItemCount = 0;
          }
          transaction.update(orgRef, { totalDonationItems: newItemCount });
          transaction.delete(itemDocument.ref);
        }))
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
}