import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { noSQLData } from './no-sql-data';
import { mockData } from 'src/app/components/organisation/mock-data';
import { FieldValue, Timestamp } from 'firebase/firestore';

interface Item {
  name: string,
  summary:string,
  description:string,
  initialPrice: number,
  totalDonationCount: number,
  totalDonations: number,
  totalDonationsValue:number,
  activeStatus: boolean,
  img: string,
  dateCompleted?:Timestamp,
  createdAt:FieldValue
}

interface CreateOrgModel {
  name: string,
  description: string,
  summary: string,
  activeStatus: boolean,
  ABN: string,
  phone: string,
  website: string,
  img: string,
  totalDonationCount: number,
  totalDonationItems: number,
  totalDonations: number,
  totalDonationsValue: number,
  totalGeneralDonationsCount: number,
  totalGeneralDonationsValue: number,
  totalItemDonationsCount: number,
  totalItemDonationsValue: number,
  Items?:Item[]

}


@Injectable({
  providedIn: 'root'
})
export class DbSetupService {

  constructor(
    public storage:AngularFireStorage,
    public fs:AngularFirestore
  ) { }

  createOrganisationsAndItems(){
    //gets the number of Organisations
    console.log(mockData.length)

    let orgs:CreateOrgModel[] = mockData;
    let org:CreateOrgModel;

    // orgs.forEach((orgObj) => {
    //   // create a reference for the new org
    //   const orgRef = this.fs
    //   .collection('Organisations')
    //   .doc().ref

    //     org = {
    //     name:orgObj.name,
    //     description:orgObj.description,
    //     summary:orgObj.summary,
    //     activeStatus:orgObj.activeStatus,
    //     ABN:orgObj.ABN,
    //     phone:orgObj.phone,
    //     website:orgObj.website,
    //     img:orgObj.img,
    //     totalDonationCount:orgObj.totalDonationCount,
    //     totalDonationItems:orgObj.totalDonationItems,
    //     totalDonations:orgObj.totalDonations,
    //     totalDonationsValue:orgObj.totalDonationsValue,
    //     totalGeneralDonationsValue:orgObj.totalGeneralDonationsValue,
    //     totalGeneralDonationsCount:orgObj.totalGeneralDonationsCount,
    //     totalItemDonationsCount:orgObj.totalItemDonationsCount,
    //     totalItemDonationsValue:orgObj.totalItemDonationsValue
    //   }

    //   //todo make model
    //   let item:any;
    //   let itemRef = this.fs.collection('Organisations').doc(orgRef.id).collection('Items').doc().ref;

    //   orgRef.set(org).then(
    //     () => {


    //       orgObj.Items.forEach(
    //         (itemObject) => {
    //           item = {
    //             name: itemObject.name,
    //             summary:itemObject.summary,
    //             description:itemObject.description,
    //             initialPrice: itemObject.initialPrice,
    //             totalDonationCount: itemObject.totalDonationCount,
    //             totalDonations: itemObject.totalDonations,
    //             totalDonationsValue:itemObject.totalDonationsValue,
    //             activeStatus: itemObject.activeStatus,
    //             dateCompleted:itemObject.dateCompleted,
    //             createdAt: itemObject.createdAt,
    //             img: itemObject.img
    //           }

    //           itemRef.set(item)

    //           itemRef = this.fs.collection('Organisations').doc(orgRef.id).collection('Items').doc().ref;
    //         }
    //       )

    //     }
    //   )
    // })




  }
}
