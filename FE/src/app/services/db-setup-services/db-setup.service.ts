import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { noSQLData } from './no-sql-data';
import { mockData } from 'src/app/components/organisation/mock-data';
import { FieldValue, Timestamp } from 'firebase/firestore';
import { CreateOrgModel } from 'src/app/models/MockDataModels';


@Injectable({
  providedIn: 'root'
})
export class DbSetupService {

  constructor(
    public storage:AngularFireStorage,
    public fs:AngularFirestore
  ) { }

  createOrganisationsAndItems(){

    let orgs:CreateOrgModel[] = mockData;
    let org:CreateOrgModel;


    //Loops through every organisation
    orgs.forEach((orgObj) => {

      // create a reference for the new org
      const orgRef = this.fs
      .collection('Organisations')
      .doc().ref

        // from the mock data create an org object
        org = {
        name:orgObj.name,
        description:orgObj.description,
        summary:orgObj.summary,
        activeStatus:orgObj.activeStatus,
        ABN:orgObj.ABN,
        phone:orgObj.phone,
        website:orgObj.website,
        img:orgObj.img,
        totalDonationCount:orgObj.totalDonationCount,
        totalDonationItems:orgObj.totalDonationItems,
        totalDonations:orgObj.totalDonations,
        totalDonationsValue:orgObj.totalDonationsValue,
        totalGeneralDonationsValue:orgObj.totalGeneralDonationsValue,
        totalGeneralDonationsCount:orgObj.totalGeneralDonationsCount,
        totalItemDonationsCount:orgObj.totalItemDonationsCount,
        totalItemDonationsValue:orgObj.totalItemDonationsValue
      }

      //todo make model
      let item:any;

      let itemDonation:any;

      //create an item reference from the Organisation
      let itemRef = this.fs.collection('Organisations').doc(orgRef.id).collection('Items').doc().ref;

      //create a donation reference for an item donation;
      let itemDonationRef = this.fs.collection('Organisations')
      .doc(orgRef.id)
      .collection('Items')
      .doc(itemRef.id)
      .collection('ItemsDonations').doc()
      .ref;

      //Create organisation in the database
      orgRef.set(org).then(
        () => {

          // Loop over item mock data for that organisation
          orgObj.Items.forEach(
            (itemObject) => {

              //create an item object from mock data
              item = {
                name: itemObject.name,
                summary:itemObject.summary,
                description:itemObject.description,
                initialPrice: itemObject.initialPrice,
                totalDonationCount: itemObject.totalDonationCount,
                totalDonations: itemObject.totalDonations,
                totalDonationsValue:itemObject.totalDonationsValue,
                activeStatus: itemObject.activeStatus,
                dateCompleted:itemObject.dateCompleted,
                createdAt: itemObject.createdAt,
                img: itemObject.img
              }

              //create the item in the database
              itemRef.set(item)

              //loopover item donations for the item
              itemObject?.itemDonations?.forEach(itemDon => {
                itemDonation = {
                  IsRefunded:itemDon.IsRefunded,
                  amount:itemDon.amount,
                  comment:itemDon.comment,
                  donationDate:itemDon.donationDate,
                  donorPublicName:itemDon.donorPublicName
                }

                  itemDonationRef.set(itemDonation)

              }

                )




              //reset the item ref to a new reference
              itemRef = this.fs.collection('Organisations').doc(orgRef.id).collection('Items').doc().ref;
            }
          )

        }
      )
    })




  }
}
