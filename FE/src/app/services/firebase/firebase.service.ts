import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public storage:AngularFireStorage,
    public fs:AngularFirestore
  ) {}

  removeOrganisation(orgID:string){

    // let orgRef = 
    // this.fs
    // .collection('Organisations')
    // .doc(orgID).ref

    // orgRef.get().then(resp => 
    //   console.log({data:resp.data(),id:resp.id}))

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
