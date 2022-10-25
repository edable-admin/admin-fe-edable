import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl } from '@angular/forms';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Item } from 'src/app/models/Item';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { ReferralGraphData } from 'src/app/services/infographics/infographics.service';

@Component({
  selector: 'app-infographics-section-mobile',
  templateUrl: './infographics-section-mobile.component.html',
  styleUrls: ['./infographics-section-mobile.component.scss']
})
export class InfographicsSectionMobileComponent implements OnInit, OnChanges {

  @Input() items: Item[];
  @Input() org: Organisation;
  @Input() orgGeneralDonationGraphData: any;
  @Input() orgItemDonationGraphData: any;
  @Input() IsMobile: any;
  @Input() referralData: ReferralGraphData[];

  showGeneralReferrals: boolean = false;
  generalInfographicsOptions: string[] = ['General Donations', 'Item Donations', 'General Referrals'];
  generalInfographicsControl = new FormControl(this.generalInfographicsOptions[0]);
  infoGraphicsOptions: any[] = ['General Donations', 'Item Donations', 'Referrals'];
  infoGraphicsControl = new FormControl(this.infoGraphicsOptions[0]);
  chartType = ['pie','bar'];
  chartTypeControl = new FormControl(this.chartType[0])

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {
  }

}
