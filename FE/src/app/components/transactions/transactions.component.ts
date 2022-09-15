import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';
import { Subscription } from 'rxjs';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  getItemDonationsSubscription: Subscription;
  itemDonations: ItemDonations[] = [];
  

  constructor(public ts:TransactionService) { }

  

  ngOnInit(): void {
    this.getOrgItemDonations("3m9Tkk834Wr8HaX7Can3", "fpWWj0Rrpr3XHMS8ifk2");
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
  getGenDonations() {
    this.ts.getGeneralDonations().then((resp) => {resp.docs.forEach(resp => resp.data())});
  }
}
