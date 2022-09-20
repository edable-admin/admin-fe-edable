import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';
import { OrganisationService } from 'src/app/services/firebase/organisation-service/organisation.service';
import { Subscription } from 'rxjs';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations'
import { MatTableDataSource } from '@angular/material/table';


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
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  getItemDonationsSubscription: Subscription;
  itemDonations: ItemDonations[] = [];
  
  orgData: any = [];
  generalDonDataSource: any;
  displayedColumns: string[] = ['date', 'name', 'donationAmount', 'organisation'];
  genDonData:any[]=[]
  
  constructor(
    public ts:TransactionService,
    public fs: OrganisationService
    
    ) { }

  //dataSource = this.donationData;

  ngOnInit(): void {
   this.getGenDonations();
   this.fs.getOrgsGeneral("3m9Tkk834Wr8HaX7Can3")
   
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
async getGenDonations() {

    //console.log(await this.getOrgs("3m9Tkk834Wr8HaX7Can3"))

  
    let orgID:string;
    let orgName:string;
    //let genDonData:any[]=[]
    this.ts.getGeneralDonations().then(
      (snap) => {
        snap.docs.forEach(
           (genDon) => {
            async orgID = genDon.ref.parent.parent.id;

            orgName = await this.getOrgs(orgID);
            
            this.genDonData.push({
              ...genDon.data(), orgName:orgName
              
            })
            
          },  
        )
        //console.log(this.genDonData);
        
        this.generalDonDataSource = new MatTableDataSource(this.genDonData)
        
        console.log(this.generalDonDataSource)
      }
     ).finally(() => {     
      
      
      
     })
     
    // this.ts.getGeneralDonations()
    // .then((snapshot) => 
    // {
    //   snapshot.docs.forEach(
    //     (genDon) => {
    //     {
    //       //...resp.data(), 
    //       snapshot.forEach(async (doc) => {          
    //       const docRef = doc.ref;
    //       const genDonoCollection = docRef.parent;
    //       const parent = genDonoCollection.parent;
    //       //console.log(parent.id)
    //       //console.log(await this.getOrgs(parent.id))

    //       let org = await this.getOrgs(parent.id)

    //         // this.genDonations.push(
    //         //   {
    //         //   ...genDon.data(), orgName:org['name']
    //         //   }
    //         // );

    //         //console.log(this.genDonations)
          
          
    //       // .then((org) => {
    //       //   console.log(org.data())
    //       //   this.genDonations.push(
    //       //     {
    //       //     ...genDon.data(), orgName:org.data()['name']
    //       //     }
    //       //   );
    //       // }).finally(() => {
    //       //   //console.log(this.genDonations)
    //       // });

          

          
    //       //this.genDonations.push(resp.data()),
    //     } 
    //     )}
    //     })
    
    // }).finally( () => {
    //   let test: any;
    //   test = new MatTableDataSource(this.genDonations)
    //   //console.log(test)
    // })
    
    
  }
}