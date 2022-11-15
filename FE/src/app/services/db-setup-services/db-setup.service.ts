import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { mockData } from 'src/app/services/db-setup-services/mock-data';
import { CreateOrgModel, GeneralDonation, PrivateDonorDetails } from 'src/app/models/MockDataModels';
import { Item } from 'src/app/models/Item';


@Injectable({
  providedIn: 'root'
})
export class DbSetupService {

  constructor(
    public storage:AngularFireStorage,
    public fs:AngularFirestore
  ) { }

  createOrganisationsAndItems() {

    let orgs: CreateOrgModel[] = mockData;
    let org: CreateOrgModel;


    //Loops through every organisation
    orgs.forEach((orgObj) => {

      //destructure values form total functions
      const { itemCount: totalItemDonationsCount, valueCount: totalItemDonationsValue } = this.calcTotalOrgItemDonations(orgObj);
      const { totalGeneralDonationsValue, totalGeneralDonationsCount } = this.calcGeneralDonations(orgObj);
      const totalDonationCount = totalItemDonationsCount + totalGeneralDonationsCount;
      const totalDonationItems = orgObj?.Items?.length ? orgObj?.Items?.length : 0;
      const totalDonationsValue = totalItemDonationsValue + totalGeneralDonationsValue;

      // from the mock data create an org object
      org = {
        name: orgObj.name,
        description: orgObj.description,
        summary: orgObj.summary,
        activeStatus: orgObj.activeStatus,
        ABN: orgObj.ABN,
        phone: orgObj.phone,
        website: orgObj.website,
        img: orgObj.img,
        totalItemDonationsCount: totalItemDonationsCount,
        totalItemDonationsValue: totalItemDonationsValue,
        totalGeneralDonationsValue: totalGeneralDonationsValue,
        totalGeneralDonationsCount: totalGeneralDonationsCount,
        totalDonationCount: totalDonationCount,
        totalDonationItems: totalDonationItems,
        totalDonationsValue: totalDonationsValue
      }

      //create a reference for the new org
      let orgRef = this.fs
        .collection('Organisations')
        .doc().ref

      //Create organisation in the database
      orgRef.set(org).then(() => {

        // Loop over item mock data for that organisation
        orgObj?.Items?.forEach(
          (itemObject) => {
            const { totalDonationCount, totalDonationsValue } = this.calcItemDonations(itemObject);

            //create an item object from mock data
            let item = {
              name: itemObject.name,
              summary: itemObject.summary,
              description: itemObject.description,
              initialPrice: itemObject.initialPrice,
              activeStatus: itemObject.activeStatus,
              dateCompleted: itemObject.dateCompleted,
              createdAt: itemObject.createdAt,
              img: itemObject.img,
              totalDonationCount: totalDonationCount,
              totalDonationsValue: totalDonationsValue
            }
            //create an item reference from the Organisation
            let itemRef = this.fs.collection('Organisations').doc(orgRef.id).collection('Items').doc().ref;

            //create the item in the database
            itemRef.set(item).then(() => {

              //loopover item donations for the item
              itemObject?.itemDonations?.forEach(itemDon => {

                let itemDonation = {
                  IsRefunded: itemDon.IsRefunded,
                  amount: itemDon.amount,
                  comment: itemDon.comment,
                  donationDate: itemDon.donationDate,
                  donorPublicName: itemDon.donorPublicName
                }

                //create a donation reference for an item donation;
                let itemDonationRef = this.fs.collection('Organisations')
                  .doc(orgRef.id)
                  .collection('Items')
                  .doc(itemRef.id)
                  .collection('ItemsDonations').doc()
                  .ref;

                itemDonationRef.set(itemDonation)
              })
            })

            orgObj?.GeneralDonations?.forEach((genDon) => {
              let generalDonations = {
                IsRefunded: genDon.IsRefunded,
                IsSubscribed: genDon.IsSubscribed,
                amount: genDon.amount,
                comment: genDon.comment,
                donationDate: genDon.donationDate,
                donorPublicName: genDon.donorPublicName
              }

              let privateDonor = {
                paypalTransactionId: genDon.private.paypalTransactionId,
                IsAnon: genDon.private.IsAnon,
                agreeToContact: genDon.private.agreeToContact,
                email: genDon.private.email,
                howHeardOther: genDon.private.howHeardOther,
                mailingAddress: genDon.private.mailingAddress,
                name: genDon.private.name,
                phoneNumber: genDon.private.phoneNumber
              }

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

              generalDonationRef.set(generalDonations)
              donorPrivateRef.set(privateDonor)
            })

            orgObj?.VolunteerDonations?.forEach((volDon) => {
              let volRef = this.fs.collection("Organisations")
                .doc(orgRef.id)
                .collection("VolunteerDonations")
                .doc()
                .ref
              volRef.set(volDon);
            })


          })


      })
    })
  }

  calcItemDonations(item) {
    if (item?.itemDonations?.length) {
      const totalDonationCount = item?.itemDonations?.length;
      const totalDonationsValue = item.itemDonations.reduce((prev, curr) => prev + curr.amount, 0)

      return {totalDonationCount:totalDonationCount, totalDonationsValue:totalDonationsValue}

    } else {
      return {totalDonationCount:0, totalDonationsValue:0}
    }


  }

  //calculated the total value of donations along with the item donation count
  calcTotalOrgItemDonations(org) {
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
    let generalDonationsCount = 0;

    generalDonationsValue += org?.GeneralDonations?.map((genDon) => {
      if(!genDon.IsRefunded){
        generalDonationsCount += 1;

        return genDon.amount;

      }else{
        return 0;
      }
    })
    .reduce((prev,curr) => prev + curr, 0);

    return {totalGeneralDonationsValue: generalDonationsValue ? generalDonationsValue : 0, totalGeneralDonationsCount: generalDonationsCount ? generalDonationsCount : 0}

  }

  calcItemsTotal(){

    //maps through all orgs
    let itemTotals = mockData.map((org) => {

      //maps through each item
      return org?.Items?.map(item => {

        //maps through each item donation
        let itemDonObj = item?.itemDonations?.map((itemDon) => {

          //if donation is not refunded
          if(!itemDon?.IsRefunded){

            //return the donation values and add a count
            return { itemValue: itemDon.amount, itemCount: 1};

          }else{

            //if the donation is refunded do not add values
            return { itemValue: 0, itemCount:0 };
          }
        });

        //create an array and sum items together
        let itemDonValue = itemDonObj?.map(itemVal => itemVal.itemValue)
        .reduce((prev, curr) => prev + curr, 0);

        //create an array and sum items together
        let itemDonCount = itemDonObj?.map(itemCoun => itemCoun.itemCount)
        .reduce((prev, curr) => prev + curr, 0);

        return {
          item:item.name,
          amount:itemDonValue,
          count:itemDonCount
        }


      })
    })
  }


  calculateOrgTotals(){
    let totals = mockData.map((org) => {

      let itemCount = org?.Items?.length;
      let genDonCount = org?.GeneralDonations?.length;

      let totalDonationCount = 0;

      let totalDonationItems = itemCount ? itemCount : 0;
      let totalDonationsValue = 0;

      const {itemCount:totalItemDonationsCount , valueCount:totalItemDonationsValue} = this.calcTotalOrgItemDonations(org);
      const {totalGeneralDonationsValue:totalGeneralDonationsValue , totalGeneralDonationsCount:totalGeneralDonationsCount} = this.calcGeneralDonations(org);

      console.log(totalGeneralDonationsValue)
      console.log(totalGeneralDonationsCount)

      let orgTotal =  {
        org:org.name,
        totalDonationCount:totalGeneralDonationsCount + totalItemDonationsCount,
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
