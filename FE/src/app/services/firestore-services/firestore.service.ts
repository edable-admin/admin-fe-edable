import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorageReference } from '@angular/fire/compat/storage';
import { DocumentReference, serverTimestamp } from 'firebase/firestore';
import { Item, Organisation } from 'src/app/models/models';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public fs: AngularFirestore
  ) { }

  //This function gets all organisations
  getOrganisations = () => {
    const organisationsCollection = this.fs.collection('Organisations')
      .valueChanges({ idField: "ID" })

    return organisationsCollection
  }

  //This function gets a list of all donation items
  getDonationItems = () => {
    const itemsCollection = this.fs.collection('Items')
      .valueChanges({ idField: "ID" })

    return itemsCollection
  }

  //This function gets a list of the donation items associated with an organisation
  getOrganisationsDonationItems = (orgID: string) => {

    //todo add parameters
    const organisation = this.fs.collection('Organisations').doc(orgID).ref;

    const itemsCollection = this.fs
      .collection('Items', ref => ref.where('orgID', '==', organisation))
      .valueChanges({
        idField: "ID"
      })

    return itemsCollection
  }

  //This function will add organisations to the fs database
  generateMockDate = () => {
    let orgsToAdd =
      [
        {

          name: "Tree's R US",
          summary: "Tree's R US is an organisation specializing in growing, maintaining and selling trees.",
          description: null,
          activeStatus: true,
          ABN: "59683269382",
          phone: "0455683457",
          website: "https://www.treesrus.com.au",
          img: "https://www.treesrus/logo-img.png",
          createdAt: serverTimestamp(),
          updatedAt: null,
          totalDonationItems: 0,
          totalDonations: 0,
        },
        {

          name: "Barry's Bakehouse",
          summary: "Barry's bakehouse provides baked goods and fresh bread daily for local customers. Barry also provides free baked goods to the local nursing home",
          description: null,
          activeStatus: true,
          ABN: "27384372612",
          phone: "0428473288",
          website: "https://www.barriesbakery.com.au",
          img: "https://www.barriesbakery/logo-img.png",
          createdAt: serverTimestamp(),
          updatedAt: null,
          totalDonationItems: 0,
          totalDonations: 0,
        },
        {

          name: "The Phone Zone",
          summary: "The phone zone is a business provding phone repairs and sales.",
          description: null,
          activeStatus: false,
          ABN: "49382719557",
          phone: "0455567982",
          website: "https://www.phonezone.com",
          img: "https://www.phonezone/logo-img.png", createdAt: serverTimestamp(),
          updatedAt: null,
          totalDonationItems: 0,
          totalDonations: 0,
        },
        {

          name: "Social Moments",
          summary: "Provides yummy social treats",
          description: null,
          activeStatus: true,
          ABN: "22999684773",
          phone: "0433958444",
          website: "https://www.socialmoments.com",
          img: "https://www.socialmoments/logo-img.png", createdAt: serverTimestamp(),
          updatedAt: null,
          totalDonationItems: 0,
          totalDonations: 0,
        },
        {

          name: "EdAble Flowers",
          summary: "This organisation grows edible flowers for distribution",
          description: null,
          activeStatus: false,
          ABN: "48588334938",
          phone: "0493959487",
          website: "https://www.edablelfowers.com",
          img: "https://www.edablelfowers/logo-img.png", createdAt: serverTimestamp(),
          updatedAt: null,
          totalDonationItems: 0,
          totalDonations: 0,
        },
        {

          name: "Windy",
          summary: "Windy is a non for profit organization that helps supply small wind turbines to unpriviled families ",
          description: null,
          activeStatus: true,
          ABN: "49557732843",
          phone: "0438827348",
          website: "https://www.Windy.com",
          img: "https://www.Windy/logo-img.png", createdAt: serverTimestamp(),
          updatedAt: null,
          totalDonationItems: 0,
          totalDonations: 0,
        },
        {

          name: "Doin Doughies",
          summary: "Doin Doughies bakes fresh donuts for the town of Narrandera daily",
          description: null,
          activeStatus: false,
          ABN: "46392849511",
          phone: "0489334598",
          website: "https://www.doindoughies.com",
          img: "https://www.doindoughies/logo-img.png", createdAt: serverTimestamp(),
          updatedAt: null,
          totalDonationItems: 0,
          totalDonations: 0,
        }
      ]

    const organisationsCollection = this.fs.collection('/Organisations')

    orgsToAdd.forEach(async (org) => {
      await organisationsCollection.add(org).catch(err => { console.log(err) })
    })
  }

  getOrgRef = (orgID: string) => {
    const orgRef = this.fs.collection('Organisations').doc(orgID).ref;

    return orgRef;
  }

  createItem = (orgID: string) => {
    let orgRef = this.getOrgRef(orgID);
    let newItem: any = {
      name: "donation item",
      initialPrice: 300,
      totalDonation: 0,
      description: null,
      summary: null,
      img: null,
      createdAt: serverTimestamp(),
      dateCompleted: null,
      orgID: orgRef,
      activeStatus: true
    }

    this.fs.collection('Items')
      .add(newItem)
      .then((resp) => {
        this.fs.firestore.runTransaction(transaction =>

          transaction.get(orgRef)
            .then((org: any) => {
              const newDonationItemCount = org.data().totalDonationItems + 1;
              transaction.update(orgRef, { totalDonationItems: newDonationItemCount })
            }).then(() => console.log("transaction completed"))
            .catch((err) => { console.log(err) })
        )
      }).catch(err => console.log(err))


    // this.firestore.collection('Items').add(newItem)
    //   .then(resp => console.log(resp))
    //   .catch(err => console.log(err))
  }

  createOrganisation = (/*org: Organisation*/) => {

    let testOrg = {

      name: "test",
      summary: "test",
      description: null,
      activeStatus: true,
      ABN: "59683269382",
      phone: "0455683457",
      website: "https://www.treesrus.com.au",
      img: "https://www.treesrus/logo-img.png",
      totalDonationItems: 0,
      totalDonations: 0,
      createdAt: serverTimestamp(),
      updatedAt: null
    }

    this.fs.collection("Organisations").add(testOrg)
  }

  updateOrganisation = () => {
    this.fs.collection('Organisations')
      .doc("DXrAVUA8QZ4d1hNYbdJC")
      .update({ description: "hello", summary: "1", updatedAt: serverTimestamp(), activeStatus: true })

  }

  updateItem = () => {
    this.fs.collection('Items')
      .doc("BSubmu2eIhR6H9gwmo65")
      .update({ name: "bob's burgers", description: "a good burger joint" })
  }

  //Example if Items where in subcollection of each organisation
  getItemsSubCollection = () => {
    const org = this.fs.collection('Organisations')
      .doc('2IzLosiLPMRC6nRDF23c')
      .collection('Donations').valueChanges()

    return org;
  }

  //---------------------- Example Calls -------------------------------//
  //this.FirestoreService.getOrganisationsDonationItems("10nnl0uiNsnF5uyyaDYN").subscribe(resp => console.log(resp))
  //this.FirestoreService.createItem("DXrAVUA8QZ4d1hNYbdJC")
  //this.FirestoreService.createOrganisation()
  //this.FirestoreService.generateMockDate();
  //this.FirestoreService.updateOrganisation();
  //this.FirestoreService.updateItem();
  // this.FirestoreService.getItemsSubCollection()
  // .subscribe((resp:any) => {
  //   resp[0].ref.get().then(resp => console.log(resp.data()))
  // })

  //Example of getting documents subCollections Reference
  // this.FirestoreService.getItemsSubCollection()
  // .subscribe((resp:any) => {
  //   resp.forEach((doc: any) => {
  //    doc.ref.get().then((item:any) => console.log(item.data()))
  //  })
  // })

}
