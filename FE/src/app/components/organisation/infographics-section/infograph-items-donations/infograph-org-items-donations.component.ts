import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { InfographicsService } from 'src/app/services/infographics/infographics.service';
import { Chart } from 'chart.js';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-infograph-org-items-donations',
  templateUrl: './infograph-org-items-donations.component.html',
  styleUrls: ['./infograph-org-items-donations.component.scss']
})

export class InfographItemsDonationsComponent implements OnInit, OnChanges, OnDestroy {

  @Input() items: Item[] = [];
  @Input() org: Organisation;

  graph!: Chart;



  constructor(
    public is: InfographicsService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.graph) this.graph.destroy();
  }

  ngOnChanges(changes) {
    if (changes['items']) {
      this.createChart()
    }

    if (changes['org']) {
      if (this.org.id === '') {
        if (this.graph) this.graph.destroy();
      }
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
