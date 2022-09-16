import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { increment } from '@angular/fire/firestore';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  constructor(
    public storage: AngularFireStorage,
    public fs: AngularFirestore
  ) {}

  getGeneralDonations(orgID: string) {
    let generalDonations = this.fs
      .collection('Organisations')
      .doc(orgID)
      .collection('GeneralDonations')
      .valueChanges({ idField: 'id' });
    return generalDonations;
  }

  getItemsDonations(orgID: string, itemID: string) {
    let itemDonations = this.fs
      .collection('Organisations')
      .doc(orgID)
      .collection('Items')
      .doc(itemID)
      .collection('ItemsDonations')
      .valueChanges({ idField: 'id' });
    return itemDonations;
  }
}
