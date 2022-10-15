import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';
import { InfographicsService } from 'src/app/services/infographics/infographics.service';

@Component({
  selector: 'app-infograph-org-items-donations',
  templateUrl: './infograph-org-items-donations.component.html',
  styleUrls: ['./infograph-org-items-donations.component.scss']
})

export class InfographItemsDonationsComponent implements OnInit {
  @Input() items:Item[] = [];
  @Input() org: Organisation;



  constructor(
    public is: InfographicsService
  ) { }

  ngOnInit(): void {
  }

  async itemCheck() {
    let test = this.is.getGraphDataOrgItemsDonations(this.items, this.org);
    //console.log(await test)

  }

}
