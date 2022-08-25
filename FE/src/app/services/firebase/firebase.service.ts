import { Injectable, Type } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { noSQLData } from './no-sql-data';
import { limit, QueryDocumentSnapshot } from 'firebase/firestore';
import { getType } from '@angular/flex-layout/extended/style/style-transforms';
import { EventType } from '@angular/router';
import { throwError } from 'rxjs';

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

    const org = this.fs
      .collection('Organisations')
      .doc(orgID)

    const orgRef = org.ref

    const generalDonationsRef = org
      .collection('GeneralDonations')
      .doc('Summary')
      .collection('Donations', query =>
      query.limit(1)).ref


    const itemsRef = org
      .collection('Items', query =>
      query.limit(1))
      .ref

    //todo models
    let generalDonations: any;
    let orgName: any;

    await orgRef
      .get()
      .then((org) => orgName = org.data()['name'])

    await generalDonationsRef
      .get()
      .then((donation: any) => {
        generalDonations = donation.docs[0]//.docs[0].data()
      })

    //todo response interface
    let response: any;

    if (generalDonations) {
      response = { message: `${orgName} cannot be deleted as it has general donations`}
      return response;
    }

    let items: any;

    await itemsRef
      .get()
      .then((item: any) => {
        items = item.docs[0]
      })

    if (items) {
      response = { message: `${orgName} cannot be deleted as it has donation items`}
      return response;
    }

    org.delete()
    this.storage.ref(`Organisations/${orgID}/orgLogo`)
      .delete()

    response = {message: `${orgName} deleted`}

    return response;
  }
}
