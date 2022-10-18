import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl } from '@angular/forms';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Item } from 'src/app/models/Item';
import { Organisation } from 'src/app/models/Organisation/Organisation';

@Component({
  selector: 'app-infographics-section',
  templateUrl: './infographics-section.component.html',
  styleUrls: ['./infographics-section.component.scss']
})
export class InfographicsSectionComponent implements OnInit, OnChanges {

  @Input() items: Item[];
  @Input() org: Organisation;
  @Input() allOrgsGeneralDonationData:GeneralDonations[];

  constructor(
  ) { }

  infoGraphicsOptions: any[] = ['Item Donations', 'General Donations'];
  infoGraphicsControl = new FormControl(this.infoGraphicsOptions[0]);

  ngOnInit(): void {

  }

  ngOnChanges(changes) {
    if(changes['items']){
      console.log(this.items)
    }

    if(changes['allOrgsGeneralDonationData']){
      console.log(this.allOrgsGeneralDonationData)
    }
  }

}
