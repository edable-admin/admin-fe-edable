import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, DocumentData } from '@angular/fire/compat/firestore';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Response } from 'src/app/models/Response';
import { Item } from 'src/app/models/Item';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    public storage:AngularFireStorage,
    public fs:AngularFirestore
  ) { }

  async removeOrganisation(orgID: string) {

    //gets the organisation
    const org = this.fs
      .collection('Organisations')
      .doc(orgID)

    //gets the reference
    const orgRef = org.ref

    const generalDonationsSummary = org
      .collection('GeneralDonations')
      .doc('Summary')

    //gets the general donation limited to 1
    const generalDonationsColl = generalDonationsSummary
      .collection('Donations', query =>
        query.limit(1)
      )

    const generalDonationsRef = generalDonationsColl.ref


    //gets the item limited to 1
    const itemsRef = org
      .collection('Items', query =>
      query.limit(1))
      .ref;


    let orgName: String;

    //gets org data and assigns it to orgName
    await orgRef
      .get()
      .then((org) => orgName = org.data()['name'])


    const generalDonationsQuery = generalDonationsRef.get()
    const generalDonations:GeneralDonations[] = (await generalDonationsQuery).docs.map(x => x.data() as GeneralDonations);

    //todo response interface
    let response: Response;

    //if there is a general donation in an organisation
    if (generalDonations.length > 0) {
      response = { message: `${orgName} cannot be deleted as it has general donations`}
      return response;
    }


    const itemsQuery = itemsRef.get();
    const items = (await itemsQuery).docs.map(x => x.data() as Item)

    // if there is an item in the organisation return message
    if (items.length > 0) {
      response = { message: `${orgName} cannot be deleted as it has donation items`}
      return response;
    }

    //If organisation does not have items or donations delete organisations
    generalDonationsSummary.delete();
    org.delete()

    this.storage.ref(`Organisations/${orgID}/orgLogo`).delete().subscribe({
      error: (err) => console.log(err)
    })


    response = {message: `${orgName} Successfully Deleted`}

    return response;
  }

  getOrgs(activeStatus:boolean) {
    let orgs = this.fs
      .collection('Organisations', query =>
      query.where('activeStatus',"==", activeStatus))
      .valueChanges({idField:"id"})
    return orgs

  }

  async addOrganisation(orgData: Organisation) {
    console.log(orgData)

    const orgReq:Organisation = {
      name: orgData.name ? orgData.name : null,
      summary: orgData.summary ? orgData.summary: null,
      description: orgData.description ? orgData.description: null,
      activeStatus: orgData.activeStatus ? orgData.activeStatus: true,
      ABN: orgData.ABN ? orgData.ABN: null,
      phone: orgData.phone ? orgData.phone: null,
      website: orgData.website ? orgData.website : null,
      img: orgData.img ? orgData.img : null,
      totalDonationItems: 0,
      totalDonations:0
    }

    let generalDonationReq = {
      totalGeneralDonations: 0,
      numberOfDonations:0
    }

    let orgRef = this.fs
      .collection('Organisations')
      .doc().ref

    if (orgData?.file) {
      this.uploadImage(orgRef.id, orgData.file)
    }

    let generalDonationsRef = orgRef
      .collection('GeneralDonations')
      .doc('Summary')

    let batch = this.fs.firestore.batch()

    //adds the org
    batch.set(orgRef, orgReq,{merge:true})

    //adds the general donations subcollection
    batch.set(generalDonationsRef, generalDonationReq)

    //commits the batch
    batch.commit()

    //returns success message
    return {orgRef:orgRef.id,message:`${orgReq.name} Successfully Added`}
  }

  async editOrganisation(orgID: string, organisationReq: Organisation) {

    this.fs.collection('Organisations').doc(orgID)
      .update(organisationReq)

    return organisationReq;
  }

  checkImageType(img: FileList) {
    if (!img) {
      return false;
    }

    const regImage = /image\/.*/g

    if (img.length === 1 && regImage.test(img[0].type)) {
      return true;
    } else {
      return false;
    }

  }

  async uploadImage(orgRef: string, file: FileList, itemRef?: string) {


    let imgLocation = itemRef ? `Organisations/${orgRef}/Items/${itemRef}/itemImg`
      : `Organisations/${orgRef}/orgLogo`;

    let imgURL:string;

    if (this.checkImageType(file)) {

      const org = this.fs.collection('Organisations')
        .doc(orgRef).ref;

      const item = this.fs
        .collection('Organisations')
        .doc(`${orgRef}`)
        .collection('Items')
        .doc(`${itemRef}`).ref;

      await (await this.storage.upload(imgLocation, file[0])).ref
        .getDownloadURL()
        .then(async (url) => {
          if (itemRef) {
            await item.set({img: url}, {merge:true})
          }else{
            await org.set({ img: url }, { merge: true })
          }
          imgURL = url
        }).catch(err => console.log(err));
    }

    return imgURL;
  }

}
