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
    this.getItemDonations();
  }
  //-------------------- GET ITEMS --------------------\\
  getItemDonations() {
    // this.getItemDonationsSubscription = this.ts.getItemDonations("3m9Tkk834Wr8HaX7Can3", "fpWWj0Rrpr3XHMS8ifk2").subscribe((donations) => {
    //   console.log(donations);
    //   this.itemDonations = donations as ItemDonations[];
    // });

    this.ts.getOrgItemDonations("3m9Tkk834Wr8HaX7Can3", "fpWWj0Rrpr3XHMS8ifk2").then((resp) => {resp.docs.forEach(resp => console.log(resp.data()))});
  }

}
