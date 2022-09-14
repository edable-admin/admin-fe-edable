import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: string;
  name: string;
  email: string;
  donationItem: string;
  donationAmount: number;
  organisation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: "08/06/2022", name: "Jeff", email: "test@test.com", donationItem: "Flour", donationAmount: 200, organisation: "Barry's Bakehouse"},
  {date: "08/06/2022", name: "Jeff", email: "test@test.com", donationItem: "Flour", donationAmount: 200, organisation: "Barry's Bakehouse"},
  {date: "08/06/2022", name: "Jeff", email: "test@test.com", donationItem: "Flour", donationAmount: 200, organisation: "Barry's Bakehouse"},
  {date: "08/06/2022", name: "Jeff", email: "test@test.com", donationItem: "Flour", donationAmount: 200, organisation: "Barry's Bakehouse"},
  {date: "08/06/2022", name: "Jeff", email: "test@test.com", donationItem: "Flour", donationAmount: 200, organisation: "Barry's Bakehouse"},
  {date: "08/06/2022", name: "Jeff", email: "test@test.com", donationItem: "Flour", donationAmount: 200, organisation: "Barry's Bakehouse"},
  
  
];

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['date', 'name', 'email', 'donationItem', 'donationAmount', 'organisation'];

  constructor() { }

  ngOnInit(): void {
  }

}
