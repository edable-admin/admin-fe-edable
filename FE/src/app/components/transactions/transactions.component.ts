import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';
import { OrganisationService } from 'src/app/services/firebase/organisation-service/organisation.service';
import { Subscription } from 'rxjs';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
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
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  getItemDonationsSubscription: Subscription;
  itemDonations: ItemDonations[] = [];
  donationData: any[] = [];

  generalDonDataSource: any;
  displayedColumns: string[] = [
    'date',
    'name',
    'donationAmount',
    'organisation',
  ];
  orgData: any[] = [];
  genData: any[] = [];

  constructor(public ts: TransactionService, public fs: OrganisationService) {}

  ngOnInit() {
    this.getOrgs();
  }

  async getOrgs() {
    await this.fs.getALlORgs().then((snap) => {
      snap.docs.forEach((genDon) => {
        this.orgData.push({
          orgName: genDon.data()['name'],
          orgID: genDon.data()['id'],
        });
      });
    });
    this.getGeneralDonations();
  }
  async getGeneralDonations() {
    await this.ts.getGeneralDonations().then((snap) => {
      snap.docs.forEach((genDon) => {
        this.genData.push({
          name: genDon.data()['donorPublicName'],
          amount: genDon.data()['amount'],
          donationDate: genDon.data()['donationDate'],
          parentDoc: genDon.ref.parent.parent.id,
        });
      });
    });
    this.donation();
  }
  donation() {
    this.genData.map((genDon) => {
      this.orgData.map((org) => {
        if (genDon.parentDoc === org.orgID) {
          this.donationData.push({
            name: genDon.name,
            amount: genDon.amount,
            donationDate: genDon.donationDate,
            orgName: org.orgName,
          });
        }
      });
    });
    console.log(this.donationData);
    this.generalDonDataSource = new MatTableDataSource(this.donationData);
  }
}
