import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { noSQLData } from './no-sql-data';
import { mockData } from 'src/app/components/organisation/mock-data';
import { FieldValue, Timestamp } from 'firebase/firestore';
import { CreateOrgModel, GeneralDonation, PrivateDonorDetails } from 'src/app/models/MockDataModels';


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
        //totalDonations:orgObj.totalDonations,
        totalDonationsValue:orgObj.totalDonationsValue,
        totalGeneralDonationsValue:orgObj.totalGeneralDonationsValue,
        totalGeneralDonationsCount:orgObj.totalGeneralDonationsCount,
        totalItemDonationsCount:orgObj.totalItemDonationsCount,
        totalItemDonationsValue:orgObj.totalItemDonationsValue
      }

      //todo make model
      let item:any;

      let itemDonation: any;

      let generalDonations:any;
      let privateDonor: PrivateDonorDetails;

      //create an item reference from the Organisation
      let itemRef = this.fs.collection('Organisations').doc(orgRef.id).collection('Items').doc().ref;

      //create a donation reference for an item donation;
      let itemDonationRef = this.fs.collection('Organisations')
      .doc(orgRef.id)
      .collection('Items')
      .doc(itemRef.id)
      .collection('ItemsDonations').doc()
      .ref;

      // create a general donation reference for a general donation
      let generalDonationRef = this.fs.collection('Organisations')
        .doc(orgRef.id)
        .collection('GeneralDonations')
        .doc().ref;

      let donorPrivateRef = this.fs.collection('Organisations')
        .doc(orgRef.id)
        .collection('GeneralDonations')
        .doc(generalDonationRef.id)
        .collection('Private')
        .doc('Private').ref

      //Create organisation in the database
      orgRef.set(org).then(
        () => {

          // Loop over item mock data for that organisation
          orgObj?.Items?.forEach(
            (itemObject) => {

              //create an item object from mock data
              item = {
                name: itemObject.name,
                summary:itemObject.summary,
                description:itemObject.description,
                initialPrice: itemObject.initialPrice,
                totalDonationCount: itemObject.totalDonationCount,
                //totalDonations: itemObject.totalDonations,
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

                //reset item donation referance
                itemDonationRef = this.fs.collection('Organisations')
                .doc(orgRef.id)
                .collection('Items')
                .doc(itemRef.id)
                .collection('ItemsDonations').doc()
                .ref;
              })




              //reset the item ref to a new reference
              itemRef = this.fs.collection('Organisations').doc(orgRef.id).collection('Items').doc().ref;
            }
          )

          orgObj?.GeneralDonations?.forEach((genDon) => {
            generalDonations = {
              IsRefunded: genDon.IsRefunded,
              IsSubscribed: genDon.IsSubscribed,
              amount: genDon.amount,
              comment: genDon.comment,
              donationDate: genDon.donationDate,
              donorPublicName:genDon.donorPublicName
            }

            privateDonor = {
              IsAnon: genDon.private.IsAnon,
              agreeToContact: genDon.private.agreeToContact,
              email: genDon.private.email,
              howHeard: genDon.private.howHeard,
              mailingAddress: genDon.private.mailingAddress,
              name: genDon.private.name,
              phoneNumber: genDon.private.phoneNumber
            }


            generalDonationRef.set(generalDonations)
            donorPrivateRef.set(privateDonor)

            //reset generalDonationRef
            generalDonationRef = this.fs.collection('Organisations')
            .doc(orgRef.id)
            .collection('GeneralDonations')
              .doc().ref;

            //reset donorPrivateRef
            donorPrivateRef = this.fs.collection('Organisations')
            .doc(orgRef.id)
            .collection('GeneralDonations')
            .doc(generalDonationRef.id)
            .collection('Private')
            .doc('Private').ref

          })

        }
      )
    })




  }

  //calculated the total value of donations along with the item donation count
  calcItemDonations(org){
    let counter = 0;
    let value = 0;


    org?.Items?.forEach((item) => {
      if(item?.itemDonations?.length){
        counter += item.itemDonations.length

        if(item?.itemDonations){
          item?.itemDonations.forEach(don => value += don.amount);
        }
      }
    });

    return {itemCount: counter, valueCount:value};
  }

  calcGeneralDonations(org){
    let generalDonationsValue = 0;
    let generalDonationsCount = org?.GeneralDonations ? org.GeneralDonations.length : 0;

    generalDonationsValue += org?.GeneralDonations?.map(genDon => genDon.amount)
    .reduce((prev,curr) => prev + curr, 0);

    return {totalGeneralDonationsValue: generalDonationsValue ? generalDonationsValue : 0, totalGeneralDonationsCount: generalDonationsCount ? generalDonationsCount : 0}

  }


  calculateOrgTotals(){
    let totals = mockData.map((org) => {

      let itemCount = org?.Items?.length;
      let genDonCount = org?.GeneralDonations?.length;

      let totalDonationCount = 0;

      let totalDonationItems = itemCount ? itemCount : 0;
      let totalDonationsValue = 0;

      const {itemCount:totalItemDonationsCount , valueCount:totalItemDonationsValue} = this.calcItemDonations(org);
      const {totalGeneralDonationsValue:totalGeneralDonationsValue , totalGeneralDonationsCount:totalGeneralDonationsCount} = this.calcGeneralDonations(org);

      // console.log(totalGeneralDonationsValue)
      // console.log(totalGeneralDonationsCount)

      let orgTotal =  {
        org:org.name,
        totalDonationCount:totalDonationCount,
        totalDonationItems:totalDonationItems,
        totalDonationsValue: totalGeneralDonationsValue + totalItemDonationsValue,
        totalGeneralDonationsCount:totalGeneralDonationsCount,
        totalGeneralDonationsValue:totalGeneralDonationsValue,
        totalItemDonationsCount:totalItemDonationsCount,
        totalItemDonationsValue:totalItemDonationsValue
      }

      console.log(orgTotal)





    })
  }
}
