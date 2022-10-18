import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { InfographicsService } from 'src/app/services/infographics/infographics.service';
import {Chart} from 'chart.js';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-infograph-org-items-donations',
  templateUrl: './infograph-org-items-donations.component.html',
  styleUrls: ['./infograph-org-items-donations.component.scss']
})

export class InfographItemsDonationsComponent implements OnInit, OnChanges {
  @Input() items:Item[] = [];
  @Input() org: Organisation;

  graph!: Chart;



  constructor(
    public is: InfographicsService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if (changes['items']) {
      this.createChart()
    }
  }


  async createChart() {
    if (this.graph) this.graph.destroy();
    if (this.items.length > 0) {
      this.is.createScatterOrgItemDonations(this.items, this.org)
        .then((resp) => {
          this.graph = resp;
        });
    }
  }

}
