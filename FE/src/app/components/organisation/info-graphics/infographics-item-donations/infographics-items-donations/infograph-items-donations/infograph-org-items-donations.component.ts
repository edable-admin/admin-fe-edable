import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';
import { InfographicsService } from 'src/app/services/infographics/infographics.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-infograph-org-items-donations',
  templateUrl: './infograph-org-items-donations.component.html',
  styleUrls: ['./infograph-org-items-donations.component.scss']
})

export class InfographItemsDonationsComponent implements OnInit {
  @Input() items:Item[] = [];
  @Input() org: Organisation;

  graph: any = '';



  constructor(
    public is: InfographicsService
  ) { }

  ngOnInit(): void {
  }

  async itemCheck() {

    //this.is.createScatterOrgItemDonations(this.items, this.org)
    //this.is.createScatterOrgItemDonations(this.items, this.org, new Date('2022-10-15'), new Date('2022-10-15 23:59:59'));
    this.is.createScatterOrgItemDonations(this.items, this.org);
  }

}
