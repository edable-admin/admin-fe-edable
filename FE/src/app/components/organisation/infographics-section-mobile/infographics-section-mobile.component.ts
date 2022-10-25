import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl } from '@angular/forms';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Item } from 'src/app/models/Item';
import { Organisation } from 'src/app/models/Organisation/Organisation';

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




  constructor(
  ) { }

  infoGraphicsOptions: any[] = ['General Donations', 'Item Donations'];
  infoGraphicsControl = new FormControl(this.infoGraphicsOptions[0]);
  chartType = ['pie','line','bar','polar'];
  chartTypeControl = new FormControl(this.chartType[0])

  ngOnInit(): void {

  }

  ngOnChanges() {
  }

}
