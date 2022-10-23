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
    let org: CreateOrgModel;

    //Loops through every organisation
    orgs.forEach( async (orgObj) => {
      // from the mock data create an org object
      org = {
        name:orgObj.name,
        description:orgObj.description,
        summary:orgObj.summary,
        activeStatus:orgObj.activeStatus,
        ABN:orgObj.ABN,
        phone:orgObj.phone,
        website:orgObj.website,
        img:orgObj.img
      }

      // create a reference for the new org
      let orgRef = this.fs
      .collection('Organisations')
        .doc().ref

      let orgTotalDonationCount:number = 0;
      let orgTotalDonationItems:number = 0;
      let orgTotalDonations:number = 0;
      let orgTotalDonationsValue:number = 0;
      let orgTotalGeneralDonationsCount:number = 0;
      let orgTotalGeneralDonationsValue:number = 0;
      let orgTotalItemDonationsCount:number = 0;
      let orgTotalItemDonationsValue:number = 0;

      //Create organisation in the database
      await orgRef.set(org).then( async () => {
        // Loop over item mock data for that organisation
        orgObj?.Items?.forEach(
          async (itemObject) => {

            //count donation items for the org
            orgTotalDonationItems += 1;

            //create an item object from mock data
            let item = {
              name: itemObject.name,
              summary:itemObject.summary,
              description:itemObject.description,
              initialPrice: itemObject.initialPrice,
              activeStatus: itemObject.activeStatus,
              dateCompleted:itemObject.dateCompleted,
              createdAt: itemObject.createdAt,
              img: itemObject.img
          }

            //create an item reference from the Organisation
            let itemRef = this.fs.collection('Organisations').doc(orgRef.id).collection('Items').doc().ref;

            //create the item in the database
            await itemRef.set(item).then( async () => {

              //varibles to calculate the totals for an item's donations
              let totalItemDonationCount: number = 0;
              let totalItemDonationsValue: number = 0;

              //loopover item donations for the item
              itemObject?.itemDonations?.forEach(async itemDon => {

                //update totals
                orgTotalDonations += 1;
                orgTotalItemDonationsCount += 1
                orgTotalDonationCount += 1;
                orgTotalDonationsValue += itemDon.amount;
                totalItemDonationCount += 1;
                totalItemDonationsValue += itemDon.amount;


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

                await itemDonationRef.set(itemDonation)

                await orgRef.update({
                  totalDonationCount:orgTotalDonationCount,
                  totalDonationItems:orgTotalDonationItems,
                  totalDonationsValue:orgTotalDonationsValue,
                  totalGeneralDonationsCount:orgTotalGeneralDonationsCount,
                  totalGeneralDonationsValue:orgTotalGeneralDonationsValue,
                  totalItemDonationsCount:orgTotalItemDonationsCount,
                  totalItemDonationsValue:orgTotalItemDonationsValue
                })

              })

              //updates the sum for the item
            itemRef.update({ totalDonationCount: totalItemDonationCount, totalDonationsValue: totalItemDonationsValue })
            })
          })

          orgObj?.GeneralDonations?.forEach( async (genDon) => {

            orgTotalDonationCount += 1;
            orgTotalDonationsValue += genDon.amount;
            orgTotalGeneralDonationsCount += 1;
            orgTotalGeneralDonationsValue += genDon.amount;


            let generalDonations = {
              IsRefunded: genDon.IsRefunded,
              IsSubscribed: genDon.IsSubscribed,
              amount: genDon.amount,
              comment: genDon.comment,
              donationDate: genDon.donationDate,
              donorPublicName:genDon.donorPublicName
            }

            let privateDonor = {
              paypalTransactionId:genDon.private.paypalTransactionId,
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

            await generalDonationRef.set(generalDonations)
            await donorPrivateRef.set(privateDonor)
          })

          await orgRef.update({
            totalDonationCount:orgTotalDonationCount,
            totalDonationItems:orgTotalDonationItems,
            totalDonationsValue:orgTotalDonationsValue,
            totalGeneralDonationsCount:orgTotalGeneralDonationsCount,
            totalGeneralDonationsValue:orgTotalGeneralDonationsValue,
            totalItemDonationsCount:orgTotalItemDonationsCount,
            totalItemDonationsValue:orgTotalItemDonationsValue
          })

        orgObj?.VolunteerDonations?.forEach(async (volDon) => {
          let volRef = this.fs.collection("Organisations")
            .doc(orgRef.id)
            .collection("VolunteerDonations")
            .doc()
            .ref

          volRef.set(volDon);
        })


      })


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

      const {itemCount:totalItemDonationsCount , valueCount:totalItemDonationsValue} = this.calcItemDonations(org);
      const {totalGeneralDonationsValue:totalGeneralDonationsValue , totalGeneralDonationsCount:totalGeneralDonationsCount} = this.calcGeneralDonations(org);

      // console.log(totalGeneralDonationsValue)
      // console.log(totalGeneralDonationsCount)

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
