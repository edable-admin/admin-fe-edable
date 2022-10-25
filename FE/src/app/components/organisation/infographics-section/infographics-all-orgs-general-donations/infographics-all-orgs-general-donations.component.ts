import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Chart } from 'chart.js';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';

@Component({
  selector: 'app-infographics-all-orgs-general-donations',
  templateUrl: './infographics-all-orgs-general-donations.component.html',
  styleUrls: ['./infographics-all-orgs-general-donations.component.scss']
})
export class InfographicsAllOrgsGeneralDonationsComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  @Input() orgGeneralDonationGraphData: GeneralDonations[];
  @Input() orgItemDonationGraphData: ItemDonations[];
  @Input() org: Organisation;
  @Input() chartType: string;

  chartData: any[];
  chartLabel: any[];
  chart: Chart;
  colors: any;
  configPolar: any;
  configLine: any;
  configPie: any;
  configBar: any;


  constructor() { }

  ngOnInit(): void {
    if (this.chart) this.chart.destroy();

  };

  ngOnDestroy(): void {
    if (this.chart) this.chart.destroy();
  }

  ngAfterViewInit(): void {

    if (this.chart) this.chart.destroy();

    this.chartData = this.orgGeneralDonationGraphData.map((donation: any) => { return donation.chartData });
    this.chartLabel = this.orgGeneralDonationGraphData.map((donation: any) => { return donation.chartLabel });
    this.updateColors();

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
            text: 'Monthly General Donations Overview',
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

    this.configPie = {
      type: 'pie',
      data: {
        labels: this.chartLabel,
        datasets: [{
          label: 'Donation Amount',
          hoverOffset: 5,
          data: this.chartData,
          backgroundColor: this.colors,
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: 10,
        },
        plugins: {
          tooltips: {
            enabled: false
          },
          title: {
            display: true,
            text: 'Monthly General Donations Overview',
            padding: {
              top: 10,
              bottom: 0
            }
          }
        },
      }
    };

    this.configBar = {
      type: 'bar',
      data: {
        labels: this.chartLabel,
        datasets: [{
          label: 'Donation Amount',
          data: this.chartData,
          backgroundColor: this.colors,
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: 10,
        },
        plugins: {
          tooltips: {
            enabled: false
          },
          title: {
            display: true,
            text: 'Monthly General Donations Overview',
            padding: {
              top: 10,
              bottom: 0
            }
          }
        },
      }
    };

    this.configPolar = {
      type: 'polarArea',
      data: {
        labels: this.chartLabel,
        datasets: [{
          label: 'Donation Amount',
          hoverOffset: 5,
          data: this.chartData,
          backgroundColor: this.colors,
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: 10,
        },
        plugins: {
          tooltips: {
            enabled: false
          },
          title: {
            display: true,
            text: 'Monthly General Donations Overview',
            padding: {
              top: 10,
              bottom: 0
            }
          }
        },
      }
    };

    switch (this.chartType) {
      case 'pie':
        this.chart = new Chart('all-orgs-gen-don', this.configPie);

        break;

      case 'line':
        this.chart = new Chart('all-orgs-gen-don', this.configLine);

        break;

      case 'bar':

        this.chart = new Chart('all-orgs-gen-don', this.configBar);
        break;

      case 'polar':
        this.chart = new Chart('all-orgs-gen-don', this.configPolar);
        break;

      default:
        break;
    }
  }


  ngOnChanges(changes) {




    if (this.chart) this.chart.destroy();

    if (changes['org'] || changes['chartType'] || changes['orgGeneralDonationGraphData']) {


      switch (this.chartType) {
        case 'pie':
          this.chart = new Chart('all-orgs-gen-don', this.configPie);

          break;

        case 'line':
          this.chart = new Chart('all-orgs-gen-don', this.configLine);

          break;

        case 'bar':

          this.chart = new Chart('all-orgs-gen-don', this.configBar);
          break;

        case 'polar':
          this.chart = new Chart('all-orgs-gen-don', this.configPolar);
          break;

        default:
          break;
      }

      this.chartData = this.orgGeneralDonationGraphData.map((donation: any) => { return donation.chartData });
      this.chartLabel = this.orgGeneralDonationGraphData.map((donation: any) => { return donation.chartLabel });
      this.updateColors();
      this.updateCharts();
      
      if (this.org.id !== '') {
        if (this.chart) this.chart.destroy();
      }
    }

  }

  updateCharts() {
    this.chart.data.labels = (this.chartLabel);
    this.chart.data.datasets[0].data = (this.chartData);
    this.chart.data.datasets[0].backgroundColor = (this.colors);
    this.chart.update();
  };

  updateColors() {
    this.colors = this.chartLabel.map((item, i) => this.selectColor(i));
  };

  selectColor(number) {
    const hue = number * 137.508;
    return `hsl(${hue},50%,75%)`;
  }

  resetGraphData() {
    this.chartData = [0];
    this.chartLabel = [0];
    this.chart.data.labels = (this.chartLabel);
    this.chart.data.datasets[0].data = (this.chartData);
    this.chart.update();
  };


}
