import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { InfographicsService, ReferralGraphData } from 'src/app/services/infographics/infographics.service';

@Component({
  selector: 'app-infographic-referral',
  templateUrl: './infographic-referral.component.html',
  styleUrls: ['./infographic-referral.component.scss']
})
export class InfographicReferralComponent implements OnInit {

  @Input() referralData: ReferralGraphData[];
  @Input() org: Organisation;
  @Input() isGeneral: boolean;
  @Input() showGeneralReferrals: boolean;
  @Input() chartType: string;


  chart!: Chart;
  orgReferrals: ReferralGraphData[];
  referralCounts: any;
  configPie: any;
  configBar: any;
  chartData: any[];
  chartLabels: any[];
  colors: any;

  constructor(
    public is: InfographicsService
  ) { }

  ngOnInit(): void {
    if (this.chart) this.chart.destroy();
  }

  ngOnDestroy(): void {
    if (this.chart) this.chart.destroy();
  }

  ngAfterViewInit() {
    if (this.chart) this.chart.destroy();

    this.createChartConfigs();
    this.createInfographics();
  }


  ngOnChanges(changes) {
    if (this.chart) this.chart.destroy();

    if (changes['org'] || changes['chartType']) {
      this.createInfographics();
    }
  }

  createInfographics() {
    switch (this.chartType) {
      case 'pie':
            this.chart = new Chart('referral-graph', this.configPie);
        break;
      case 'bar':
            this.chart = new Chart('referral-graph', this.configBar);
        break;

      default:
        break;
    }

    if (this.org.id !== '') {
      if(this.chart) this.chart.destroy();
    }
  }

  createChartConfigs() {
    if (this.isGeneral) {
      this.getGeneralReferralData();
    } else {
      this.filterReferralData();
    }

    this.updateColors();

    this.configPie = {
      type: 'pie',
      data: {
        labels: this.chartLabels,
        datasets: [{
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
            text: this.isGeneral ? 'General Referrals Overview' : `${this.org.name}'s Referrals`,
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
        labels: this.chartLabels,
        datasets: [{
          label: 'Referrals',
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
            text: this.isGeneral ? 'General Referrals Overview' : `${this.org.name}'s Referrals`,
            padding: {
              top: 10,
              bottom: 0
            }
          }
        },
      }
    }
  }

  createPieChart() {
    if (this.isGeneral) {
      this.getGeneralReferralData();
    } else {
      this.filterReferralData();
    }

    this.configPie = {
      type: 'pie',
      data: {
        labels: this.chartLabels,
        datasets: [{
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
            text: this.isGeneral ? 'General Referrals Overview' : `${this.org.name}'s Referrals`,
            padding: {
              top: 10,
              bottom: 0
            }
          }
        },
      }
    };

    // this.chart = new Chart('referral-graph', this.configPie);
  }

  createBarGraph() {
    if (this.isGeneral) {
      this.getGeneralReferralData();
    } else {
      this.filterReferralData();
    }

    this.configBar = {
      type: 'bar',
      data: {
        labels: this.chartLabels,
        datasets: [{
          label: 'Referrals',
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
            text: this.isGeneral ? 'General Referrals Overview' : `${this.org.name}'s Referrals`,
            padding: {
              top: 10,
              bottom: 0
            }
          }
        },
      }
    }

    // this.chart = new Chart('referral-graph', this.configBar);
  }

  getGeneralReferralData() {
    const referrals = this.referralData.map(ref => {
      return ref.howHeard;
    });

    this.referralCounts = {};
    this.chartLabels = [];
    this.chartData = [];

    for (let i = 0; i < referrals.length; i++) {
      const element = referrals[i];

      if (this.referralCounts[element]) {
        this.referralCounts[element] += 1;
      } else {
        this.referralCounts[element] = 1;
        this.chartLabels.push(element);
      }
    }

    for (let i = 0; i < this.chartLabels.length; i++) {
      this.chartData.push(this.referralCounts[this.chartLabels[i]]);
    }
  }

  filterReferralData() {
    this.orgReferrals = this.referralData.filter(org => {
      return org.orgId === this.org.id;
    });

    const referrals = this.orgReferrals.map(ref => {
      return ref.howHeard;
    });

    this.referralCounts = {};
    this.chartLabels = [];
    this.chartData = [];

    for (let i = 0; i < referrals.length; i++) {
      const element = referrals[i];

      if (this.referralCounts[element]) {
        this.referralCounts[element] += 1;
      } else {
        this.referralCounts[element] = 1;
        this.chartLabels.push(element);
      }
    }

    for (let i = 0; i < this.chartLabels.length; i++) {
      this.chartData.push(this.referralCounts[this.chartLabels[i]]);
    }
  }

  updateColors() {
    this.colors = this.chartLabels.map((item, i) => this.selectColor(i));
  };

  selectColor(number) {
    const hue = number * 137.508;
    return `hsl(${hue},50%,75%)`;
  }
}
