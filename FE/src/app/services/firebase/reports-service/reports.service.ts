import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(public fs: AngularFirestore) { }

  getItemDonations() {
    const itemDonations = this.fs.firestore
      .collectionGroup('ItemsDonations')
      .get();
    return itemDonations;
  }

  getGeneralDonations() {
    const orgGenDonations = this.fs.firestore
      .collectionGroup('GeneralDonations')
      .get();

    return orgGenDonations;
  }


}
