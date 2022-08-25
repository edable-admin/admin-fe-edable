import { Injectable, Type } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { noSQLData } from './no-sql-data';
import { limit, QueryDocumentSnapshot } from 'firebase/firestore';
import { getType } from '@angular/flex-layout/extended/style/style-transforms';
import { EventType } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public storage:AngularFireStorage,
    public fs:AngularFirestore
  ) { }

  generateNoSQLStructure() {
    const orgRef = this.fs
      .collection('Organisations')
      .doc().ref

    const itemsRef = orgRef
      .collection('Items')
      .doc()

    const itemDonationsRef = itemsRef
      .collection('ItemsDonations')
      .doc()

      const summaryRef = orgRef
      .collection('GeneralDonations')
      .doc('Summary')

      const generalDonations = summaryRef
      .collection('Donations')
      .doc()


    orgRef.set(noSQLData.Organisations[0])
      .then(() => {

        summaryRef.set(noSQLData.GeneralDonationsSummary[0])

      }).then(() => {

        generalDonations.set(noSQLData.GeneralDonations[0])

      }).then(() => {

        itemsRef.set(noSQLData.Items[0])

      }).then(() => {

        itemDonationsRef.set(noSQLData.ItemDonations[0])

      }).then(resp => console.log(resp)).catch(err => console.log(err))



  }

  async removeOrganisation(orgID: string) {

    let IsCanDelete: boolean = true;

    const org = this.fs
      .collection('Organisations')
      .doc(orgID)

    const orgRef = org.ref

    const generalDonationsRef = org
      .collection('GeneralDonations')
      .doc('Summary')
      .collection('Donations', query =>
      query.limit(1))
      .ref


    const ItemsRef = org
      .collection('Items', query =>
      query.limit(1))
      .ref

    return generalDonationsRef
      .get()
      .then((resp: any) => {
        if (resp.docs.length > 0) {
          IsCanDelete = false
        }

        if (IsCanDelete) {
          ItemsRef.get().then((resp: any) => {
            if (IsCanDelete && resp.docs.length === 0) {

              org.delete().then(resp => console.log(resp))

              this.storage.ref(`Organisations/${orgID}/orgLogo`)
              .delete()
              console.log(orgID)
            } else {
              throw(console.error("You can't delete an organisation that has items please delete the items first"))
            }
          }
          )
        }
      })
    //todo
    //check org does not have items
    //check org does not have generalDonations
    //remove image
    // if remove image is successfull
    //then remove org
  }

  addItem(){
    //todo
  }
}
