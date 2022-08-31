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
    public storage:AngularFireStorage,
    public fs:AngularFirestore
  ) { }
}
