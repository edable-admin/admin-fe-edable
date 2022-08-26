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

    //gets the organisation
    const org = this.fs
      .collection('Organisations')
      .doc(orgID)

    //gets the reference
    const orgRef = org.ref

    //gets the general donation limited to 1
    const generalDonationsRef = org
      .collection('GeneralDonations')
      .doc('Summary')
      .collection('Donations', query =>
      query.limit(1)).ref


    //gets the item limited to 1
    const itemsRef = org
      .collection('Items', query =>
      query.limit(1))
      .ref

    //todo models
    let generalDonations: any;
    let orgName: any;

    //gets org data and assigns it to orgName
    await orgRef
      .get()
      .then((org) => orgName = org.data()['name'])

    //gets the general donation query
    await generalDonationsRef
      .get()
      .then((donation: any) => {
        generalDonations = donation.docs[0]//.docs[0].data()
      })

    //todo response interface
    let response: any;

    //if there is a general donation in an organisation
    if (generalDonations) {
      response = { message: `${orgName} cannot be deleted as it has general donations`}
      return response;
    }

    let items: any;

    //gets the item query
    await itemsRef
      .get()
      .then((item: any) => {
        items = item.docs[0]
      })

    // if there is an item in the organisation return message
    if (items) {
      response = { message: `${orgName} cannot be deleted as it has donation items`}
      return response;
    }

    //If organisation doesn not have items or donations delete organisations
    org.delete()
    this.storage.ref(`Organisations/${orgID}/orgLogo`)
      .delete()

    let orgs: any = [];

    orgs = await this.getOrgs()

    response = {orgs:orgs, message: `${orgName} deleted`}

    return response;
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

  async getOrgs() {
    let orgs: any = [];

    await this.fs
      .collection('Organisations')
      .ref.get()
      .then(resp => resp.docs.forEach((org: any) => orgs.push({ id: org.id, ...org.data() })))

    return orgs

  }

  //todo models
  async addOrganisation(orgData: any) {

    const orgReq = {
      name: orgData.name ? orgData.name : null,
      summary: orgData.summary ? orgData.summary: null,
      description: orgData.description ? orgData.description: null,
      activeStatus: orgData.activeStatus ? orgData.activeStatus: null,
      ABN: orgData.ABN ? orgData.ABN: null,
      phone: orgData.phone ? orgData.phone: null,
      website: orgData.website ? orgData.website: null,
      img: orgData.img ? orgData.img: null,
      totalDonationItems: 0,
      totalDonations:0
    }

    const img = orgData.file

    let generalDOnationReq = noSQLData.GeneralDonationsSummary[0];

    let orgRef = this.fs
      .collection('Organisations')
      .doc().ref

    let generalDonationsRef = orgRef
      .collection('GeneralDonations')
      .doc('Summary')

    let batch = this.fs.firestore.batch()

    batch.set(orgRef, orgReq)
    batch.set(generalDonationsRef, generalDOnationReq)
    batch.commit()

    let orgs: any = [];

    orgs = await this.getOrgs();

    if (this.checkImageType(img)) {
      this.storage.upload(`Organisations/${orgRef.id}/orgLogo`, img[0])

      return {orgs:orgs,message:`${orgReq.name} and image successfully added`}
    }

    return {orgs:orgs, message:`${orgReq.name} successfully added no image was uploaded`}


  }
}
