import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';
import { Organisation } from 'src/app/models/Organisation/Organisation';

@Component({
  selector: 'app-infographics-all-orgs-general-donations',
  templateUrl: './infographics-all-orgs-general-donations.component.html',
  styleUrls: ['./infographics-all-orgs-general-donations.component.scss']
})
export class InfographicsAllOrgsGeneralDonationsComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  @Input() allOrgsGeneralDonationData:GeneralDonations[];
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


  constructor() { }

  ngOnInit(): void {
    if(this.chart) this.chart.destroy();

    this.chartData = this.allOrgsGeneralDonationData.map((donation: any) => donation.totalGeneralDonationsValue);
    this.chartLabel = this.allOrgsGeneralDonationData.map((donation: any) => donation.name);
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
      plugins: [ChartDataLabels],
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
          datalabels: {
            formatter: (value, context) => {
              const name = context.chart.data.labels[context.dataIndex];
              return [`${name}`];
            },
          },
          title: {
            display: true,
            text: 'General Donations Overview',
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
      plugins: [ChartDataLabels],
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
          datalabels: {
            formatter: (value, context) => {
              const name = context.chart.data.labels[context.dataIndex];
              return [`${name}`];
            },
          },
          title: {
            display: true,
            text: 'General Donations Overview',
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
            text: 'General Donations Overview',
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

  };

  ngOnDestroy(): void {
    if(this.chart) this.chart.destroy();
  }

  ngAfterViewInit(): void {
  }


  ngOnChanges(changes) {

    if (this.chart) this.chart.destroy();

    if (changes['org'] || changes['chartType']) {

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
