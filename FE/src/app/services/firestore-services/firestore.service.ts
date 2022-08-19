import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { serverTimestamp } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    public firestore: AngularFirestore
  ) { }

  //This function gets all organisations
  getOrganisations =  () => {
    const organisationsCollection = this.firestore.collection('Organisations')
      .valueChanges({idField:"ID"})

    return organisationsCollection
  }

  //This function gets a list of all donation items
  getDonationItems = () => {
    const itemsCollection = this.firestore.collection('Items')
      .valueChanges({ idField: "ID" })

    return itemsCollection
  }

  //This function gets a list of the donation items associated with an organisation
  getOrganisationsDonationItems = () => {

    //todo add parameters
    const organisation = this.firestore.collection('Organisations').doc('3gbGtrF6KT1vhJ7mtlQS').ref;

    const itemsCollection = this.firestore
    .collection('Items', ref => ref.where('orgID', '==', organisation))
      .valueChanges({
        idField: "ID"
      })

    return itemsCollection
  }

  //This function will add organisations to the firestore database
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
          updatedAt: null
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
          updatedAt: null
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
          updatedAt: null
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
          updatedAt: null
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
          updatedAt: null
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
          updatedAt: null
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
          updatedAt: null
        }
    ]

    const organisationsCollection = this.firestore.collection('/Organisations')

    orgsToAdd.forEach(async (org) => {
      await organisationsCollection.add(org).catch(err => {console.log(err)})
    })
  }



}
