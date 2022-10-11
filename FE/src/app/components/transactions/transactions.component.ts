import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';
import { OrganisationService } from 'src/app/services/firebase/organisation-service/organisation.service';
import { Subscription } from 'rxjs';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { StringLike } from '@firebase/util';
import { MatSort } from '@angular/material/sort';
import { MatTab } from '@angular/material/tabs';

export interface PeriodicElement {
  date: string;
  name: string;
  email: string;
  donationItem: string;
  donationAmount: number;
  organisation: string;
}
export interface GeneralDonationData {
  donationDate: Date;
  donorPublicName: String;
  //orgName?: string;
  amount: number;
  orgName: string;
  //IsSubscribed?: any;
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
  @ViewChild(MatSort) sort!: MatSort;
  
  itemDonations: ItemDonations[] = [];
  generalDonDataSource:MatTableDataSource<GeneralDonationData>;
  displayedColumns: string[] = ['donationDate', 'donorPublicName', 'amount', 'orgName', 'IsSubscribed']; 
  dataSource?:any[];
  constructor(
    public ts:TransactionService,
    public fs: OrganisationService

    ) { 

    }
  
  

  

  ngOnInit(): void {


          this.dataSource = [{
        IsSubscribed: true,
        donorPublicName: 'Wade',
        donationDate: new Date("2022-10-11"),
        amount: 30,
        orgName: "Social Moments"
      },
      {
        IsSubscribed: false,
        donorPublicName: 'Wade',
        donationDate: new Date("2022-09-20"),
        amount: 50,
        orgName: 'EdAble'
      }
     ]
   //this.getAllGenDonations();
   this.generalDonDataSource = new MatTableDataSource(this.dataSource);
   this.generalDonDataSource.sort = this.sort;
   this.generalDonDataSource.paginator = this.paginator; 
   
    
    
    
    

    console.log(this.generalDonDataSource)
    this.dataSource.forEach(element => {
      if (element.IsSubscribed) {
        element.IsSubscribed = "check_circle_outline"
      }
      else if (!element.IsSubscribed) {
        element.IsSubscribed = "highlight_off"
      }

    });
  
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
    let generalDonations: any;
    let data: GeneralDonationData;
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

        let org = orgs.find((org) => {
          
          
          return org.id == orgID
        })
       
        
        return { orgName: org.name, ...genDon.data()};
      }
    ))
    this.dataSource = generalDonations;
    
    
    
    
    generalDonations.forEach(element => {
      if (element.IsSubscribed) {
        element.IsSubscribed = "check_circle_outline"
      }
      else if (!element.IsSubscribed) {
        element.IsSubscribed = "highlight_off"
      }
      
    });
   
    //this.generalDonDataSource = new MatTableDataSource(generalDonations);
    //this.generalDonDataSource.paginator = this.paginator; 
    
  
     
   
    
  }
}
