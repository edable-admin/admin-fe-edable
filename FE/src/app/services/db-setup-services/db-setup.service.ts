import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { noSQLData } from './no-sql-data';


@Injectable({
  providedIn: 'root'
})
export class DbSetupService {

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

        for (var i = 0; i <= noSQLData.GeneralDonations.length; i++) {
        generalDonations.set(noSQLData.GeneralDonations[0])
        }

      }).then(() => {

        for (var i = 0; i <= noSQLData.Items.length; i++) {
        itemsRef.set(noSQLData.Items[0])
        }

      }).then(() => {
        for (var i = 0; i <= noSQLData.ItemDonations.length; i++) {
        itemDonationsRef.set(noSQLData.ItemDonations[0])
        }

      }).then(resp => console.log(resp)).catch(err => console.log(err))



  }
}
