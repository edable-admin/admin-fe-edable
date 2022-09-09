import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Response } from 'src/app/models/Response';
import { Item } from 'src/app/models/Item';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    public storage: AngularFireStorage,
    public fs: AngularFirestore
  ) {}
}
