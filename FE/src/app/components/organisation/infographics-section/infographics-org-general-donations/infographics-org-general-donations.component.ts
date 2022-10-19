import { Component, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { DonationService } from 'src/app/services/firebase/donation-service/donation.service';
import { InfographicsService } from 'src/app/services/infographics/infographics.service';
import { Chart } from 'chart.js';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';

@Component({
  selector: 'app-infographics-org-general-donations',
  templateUrl: './infographics-org-general-donations.component.html',
  styleUrls: ['./infographics-org-general-donations.component.scss']
})
export class InfographicsOrgGeneralDonationsComponent implements OnChanges, OnDestroy {
  @Input() org: Organisation;
  @Input() orgGeneralDonationGraphData:any;

  chartData: any;
  chartLabel: any;
  colors: any;
  chart: Chart;
  configLine: any;

  constructor(
    public dfs: DonationService,
    public infoGraphSer: InfographicsService,
  ) { }

  ngOnDestroy(): void {
    if (this.chart) this.chart.destroy();

  }


  ngOnChanges(changes) {

    if (this.chart) this.chart.destroy();



      if (this.orgGeneralDonationGraphData) {
        if (this.chart) this.chart.destroy();

        this.chartData = this.orgGeneralDonationGraphData.map((don) => {
          return don.chartData
        });

        this.chartLabel = this.orgGeneralDonationGraphData.map((don) => {
          return don.chartLabel
        });

        if (this.orgGeneralDonationGraphData) {
          this.setUpGenConfig();
          this.chart = new Chart('gen-don-org', this.configLine);
        }
      }



  }

  setUpGenConfig() {
    this.colors = this.chartData.map((item, i) => this.selectColor(i));
    this.configLine = {
      type: 'line',
      data: {
        labels: this.chartLabel,
        datasets: [{
          label: 'Donation Amount',
          backgroundColor: this.colors,
          borderColor: '#3e95cd',
          fill: true,
          data: this.chartData,
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'General Donations Overview',
            padding: {
              top: 10,
              bottom: 0
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Donation Amount [$]'
            }
          },
          x: {
            ticks: {
              autoSkip: false
            },
            title: {
              display: true,
              text: 'Date [MM/YYYY]',
            }
          }
        },
      }
    };
  }

  updateColors() {
    this.colors = this.chartLabel.map((item, i) => this.selectColor(i));
  };

  selectColor(number) {
    const hue = number * 137.508;
    return `hsl(${hue},50%,75%)`;
  }

  updateCharts() {
    this.chart.data.labels = this.chartLabel;
    this.chart.data.datasets[0].data = this.chartData;
    this.chart.data.datasets[0].backgroundColor = this.colors;
  };

}
