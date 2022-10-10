import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';
import { OrganisationService } from 'src/app/services/firebase/organisation-service/organisation.service';
import { Subscription } from 'rxjs';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  date: string;
  name: string;
  email: string;
  donationItem: string;
  donationAmount: number;
  organisation: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {date: "08/06/2022", name: "Jeff", email: "test@test.com", donationItem: "Flour", donationAmount: 200, organisation: "Barry's Bakehouse"},
//   {date: "08/06/2022", name: "Jeff", email: "test@test.com", donationItem: "Flour", donationAmount: 200, organisation: "Barry's Bakehouse"},
//   {date: "08/06/2022", name: "Jeff", email: "test@test.com", donationItem: "Flour", donationAmount: 200, organisation: "Barry's Bakehouse"},
//   {date: "08/06/2022", name: "Jeff", email: "test@test.com", donationItem: "Flour", donationAmount: 200, organisation: "Barry's Bakehouse"},
//   {date: "08/06/2022", name: "Jeff", email: "test@test.com", donationItem: "Flour", donationAmount: 200, organisation: "Barry's Bakehouse"},
//   {date: "08/06/2022", name: "Jeff", email: "test@test.com", donationItem: "Flour", donationAmount: 200, organisation: "Barry's Bakehouse"},

// ];

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  getItemDonationsSubscription: Subscription;
  itemDonations: ItemDonations[] = [];

  orgData: any = [];
  generalDonDataSource: any;
  displayedColumns: string[] = ['date', 'name', 'donationAmount', 'organisation', 'subscribed'];
  genDonData:any[]=[]

  constructor(
    public ts:TransactionService,
    public fs: OrganisationService

    ) { }

  //dataSource = this.donationData;

  ngOnInit(): void {
   this.getAllGenDonations();
   //this.fs.getOrgsGeneral("3m9Tkk834Wr8HaX7Can3")

   //this.genDonations = {
    //name:this.genDonations.donorPublicName,

  // }
  }

  //-------------------- Get All Orgs --------------------------\\
  async getOrgs(orgID: string) {
    let org:any;

    await this.fs.getOrgsGeneral(orgID)
          .forEach((resp) => {
            org = resp.data()["name"]
        })
    return org;
  }


  //-------------------- Get item donations for singular org --------------------\\
  getOrgItemDonations(orgID:string, ItemID:string) {
        this.ts.getOrgItemDonations(orgID, ItemID).then((resp) => {resp.docs.forEach(resp => resp.data())});
  }

  //-------------------- Get all item donations ---------------------------------\\
  getItemDonations() {
    this.ts.getItemDonations().then((resp) => {resp.docs.forEach(resp => resp.data())});

  }

  //-------------------- Get General Donations for org --------------------------\\
  getOrgGenDonations(orgID:string) {
    this.ts.getOrgGeneralDonations(orgID).then((resp) => {resp.docs.forEach(resp => resp.data())});
  }
  //-------------------- Get All General Donations for --------------------------\\

  async getAllGenDonations() {

    let subImage: string = ""
    let orgs: any[];
    let generalDonations: any[];

    await this.fs.getAllOrgs()
      .get()
      .then(
         (snap) => {
          orgs = snap.docs.map(
            (org) => { return { ...org.data() as object, id:org.id } }
          )
        }
    )

    generalDonations = (await (await this.ts.getGeneralDonations()).docs.map(
      (genDon) => {

        let orgID = genDon.ref.parent.parent.id

        let orgName = orgs.find((org) => {
          
          
          return org.id == orgID
        })

        return { orgName: orgName.name, ...genDon.data()};
      }
    ))

    this.generalDonDataSource = new MatTableDataSource(generalDonations);
    this.generalDonDataSource.paginator = this.paginator;

      console.log(this.generalDonDataSource);
      
  }

//   async getOrgs() {
//     await this.fs.getAllOrgs().then((snap) => {
//       snap.docs.forEach((genDon) => {
//         this.orgData.push({
//           orgName: genDon.data()['name'],
//           orgID: genDon.data()['id'],
//         });
//       });
//     });
//     this.getGeneralDonations();
//   }
//   async getGeneralDonations() {
//     await this.ts.getGeneralDonations().then((snap) => {
//       snap.docs.forEach((genDon) => {
//         this.genData.push({
//           name: genDon.data()['donorPublicName'],
//           amount: genDon.data()['amount'],
//           donationDate: genDon.data()['donationDate'],
//           parentDoc: genDon.ref.parent.parent.id,
//         });
//       });
//     });
//     this.donation();
//   }
//   donation() {
//     this.genData.map((genDon) => {
//       this.orgData.map((org) => {
//         if (genDon.parentDoc === org.orgID) {
//           this.donationData.push({
//             name: genDon.name,
//             amount: genDon.amount,
//             donationDate: genDon.donationDate,
//             orgName: org.orgName,
//           });
//         }
//       });
//     });
//     console.log(this.donationData);
//     this.generalDonDataSource = new MatTableDataSource(this.donationData);
//   }
}
