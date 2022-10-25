import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Chart } from 'chart.js';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { InfographicsService } from 'src/app/services/infographics/infographics.service';
import { DonationService } from 'src/app/services/firebase/donation-service/donation.service';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';

@Component({
  selector: 'app-infographics-all-orgs-general-donations-mobile',
  templateUrl: './infographics-all-orgs-general-donations-mobile.component.html',
  styleUrls: ['./infographics-all-orgs-general-donations-mobile.component.scss']
})
export class InfographicsAllOrgsGeneralDonationsMobileComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  @Input() orgGeneralDonationGraphData:any;
  @Input() orgItemDonationGraphData:ItemDonations[];
  @Input() org:Organisation;
  @Input() chartType:string;

  chartData:any[];
  chartLabel:any[];
  chart:Chart;
  colors: any;
  configPolar: any;
  configLine: any;
  configPie: any;
  configBar: any;


  constructor(
    public dfs: DonationService,
    public infoGraphSer: InfographicsService,
  ) { }

  ngOnInit(): void {

    if(this.chart) this.chart.destroy();

    this.chartData = this.orgGeneralDonationGraphData.map((don) => {
      return don.chartData
    });

    this.chartLabel = this.orgGeneralDonationGraphData.map((don) => {
      return don.chartLabel
    });
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
        this.chart = new Chart('all-orgs-gen-don-mobile', this.configPie);

        break;

      case 'line':
        this.chart = new Chart('all-orgs-gen-don-mobile', this.configLine);

        break;

      case 'bar':

        this.chart = new Chart('all-orgs-gen-don-mobile', this.configBar);
        break;

      case 'polar':
        this.chart = new Chart('all-orgs-gen-don-mobile', this.configPolar);
        break;

      default:
        break;
    }

  };

  ngOnDestroy(): void {
    if(this.chart) this.chart.destroy();
  }

  ngAfterViewInit(): void {
  }


  ngOnChanges(changes) {



    if (this.chart) this.chart.destroy();

    if (changes['org'] || changes['chartType'] || changes['IsMobile'] || changes['orgGeneralDonationGraphData']) {


      switch (this.chartType) {
        case 'pie':
          this.chart = new Chart('all-orgs-gen-don-mobile', this.configPie);

          break;

        case 'line':
          this.chart = new Chart('all-orgs-gen-don-mobile', this.configLine);

          break;

        case 'bar':

          this.chart = new Chart('all-orgs-gen-don-mobile', this.configBar);
          break;

        case 'polar':
          this.chart = new Chart('all-orgs-gen-don-mobile', this.configPolar);
          break;

        default:
          break;
      }

      this.chartData = this.orgGeneralDonationGraphData.map((donation: any) => { return donation.chartData });
      this.chartLabel = this.orgGeneralDonationGraphData.map((donation: any) => { return donation.chartLabel });
      this.updateColors();
      this.updateCharts();

      if (this.org.id !== '') {
        if(this.chart) this.chart.destroy();
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

  // pieGraphs() {
  //   this.chart.destroy();
  //   this.mobileChart.destroy();
  //   this.chart = new Chart('canvas', this.configPie);
  //   this.mobileChart = new Chart('mobile', this.configPie);
  //   this.updateCharts();
  // };

  // lineGraphs() {
  //   this.chart.destroy();
  //   this.mobileChart.destroy();
  //   this.chart = new Chart('canvas', this.configLine);
  //   this.mobileChart = new Chart('mobile', this.configLine);
  //   this.updateCharts();
  // };

    // barGraphs() {
  //   this.chart.destroy();
  //   this.mobileChart.destroy();
  //   this.chart = new Chart('canvas', this.configBar);
  //   this.mobileChart = new Chart('mobile', this.configBar);
  //   this.updateCharts();
  // };

    // polarGraphs() {
  //   this.chart.destroy();
  //   this.mobileChart.destroy();
  //   this.chart = new Chart('canvas', this.configPolar);
  //   this.mobileChart = new Chart('mobile', this.configPolar);
  //   this.updateCharts();
  // };

  // getGraphData(orgID) {
  //   this.dfs
  //     .getGeneralDonations(orgID)
  //     .subscribe((resp) => {
  //       let genDonData = this.infoGraphSer.generateGeneralDonations(resp as GeneralDonations[]);
  //       this.chartData = genDonData.map((donation: any) => donation.amount);
  //       this.chartLabel = genDonData.map((donation: any) => donation.monthYear);
  //       this.updateColors();
  //       this.updateCharts();
  //     })
  // };

}
