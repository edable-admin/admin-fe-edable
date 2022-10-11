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

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit, AfterViewInit {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  itemDonDataSource:MatTableDataSource<ItemDonations>;
  generalDonDataSource:MatTableDataSource<GeneralDonations>;
  displayedColumns: string[] = ['donationDate', 'donorPublicName', 'amount', 'orgName', 'IsSubscribed']; 
  itemsDisplayedColumns: string[] = ['donationDate', 'donorPublicName', 'amount', 'orgName', 'IsRefunded']; 
  
  dataSource?:any[];
  constructor(
    public ts:TransactionService,
    public fs: OrganisationService

    ) { 

    }
  ngAfterViewInit(): void {
    
  }
  
  

  

  ngOnInit(): void {
    this.getItemDonations()
    this.getAllGenDonations();
  //         this.dataSource = [{
  //       IsSubscribed: true,
  //       donorPublicName: 'Wade',
  //       donationDate: new Date("2022-10-11"),
  //       amount: 30,
  //       orgName: "Social Moments"
  //     },
  //     {
  //       IsSubscribed: false,
  //       donorPublicName: 'Wade',
  //       donationDate: new Date("2022-09-20"),
  //       amount: 50,
  //       orgName: 'EdAble'
  //     }
  //    ]
  //  //this.getAllGenDonations();
  //  this.generalDonDataSource = new MatTableDataSource(this.dataSource);
   
  //  this.generalDonDataSource.paginator = this.paginator; 
   
   
    
    
    

    // console.log(this.generalDonDataSource)
    // this.dataSource.forEach(element => {
    //   if (element.IsSubscribed) {
    //     element.IsSubscribed = "check_circle_outline"
    //   }
    //   else if (!element.IsSubscribed) {
    //     element.IsSubscribed = "highlight_off"
    //   }

    // });
  
  }



  //-------------------- Get all item donations ---------------------------------\\
  async getItemDonations() {
    let orgs: any[];
    let itemDonations: any;
    await this.fs.getAllOrgs()
      .get()
      .then(
         (snap) => {
          orgs = snap.docs.map(
            (org) => { return { ...org.data() as object, id:org.id } }
          )
        }
    )
    
    itemDonations = (await (await this.ts.getItemDonations()).docs.map(
      (itemDon) => {
        let orgID = itemDon.ref.parent.parent.parent.parent.id;
        
        let org = orgs.find((org) => {
          return org.id == orgID;
        })
        console.log(itemDon)
        return { orgName: org.name, ...itemDon.data()}
      }
    ))

  }

  
  //-------------------- Get All General Donations for --------------------------\\

  async getAllGenDonations() {
    let orgs: any[];
    let generalDonations: any;
   
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

        let orgID = genDon.ref.parent.parent.id;

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
   
    this.generalDonDataSource = new MatTableDataSource(generalDonations);
    this.generalDonDataSource.paginator = this.paginator;
    this.generalDonDataSource.sort = this.sort;
  }

  
}
