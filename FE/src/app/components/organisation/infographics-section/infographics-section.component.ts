import { Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormControl } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Item } from 'src/app/models/Item';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { ReferralGraphData } from 'src/app/services/infographics/infographics.service';

@Component({
  selector: 'app-infographics-section',
  templateUrl: './infographics-section.component.html',
  styleUrls: ['./infographics-section.component.scss']
})
export class InfographicsSectionComponent implements OnInit, OnChanges {

  @Input() items: Item[];
  @Input() org: Organisation;
  @Input() orgGeneralDonationGraphData: any;
  @Input() orgItemDonationGraphData:any;
  @Input() referralData: ReferralGraphData[];
  
  generalInfographicsOptions: string[] = ['General Donations', 'General Referrals', 'Item Donations'];
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
