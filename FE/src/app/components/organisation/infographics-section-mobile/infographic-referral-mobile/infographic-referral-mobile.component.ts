import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { ReferralGraphData, InfographicsService } from 'src/app/services/infographics/infographics.service';

@Component({
  selector: 'app-infographic-referral-mobile',
  templateUrl: './infographic-referral-mobile.component.html',
  styleUrls: ['./infographic-referral-mobile.component.scss']
})
export class InfographicReferralMobileComponent implements OnInit {

  @Input() referralData: ReferralGraphData[];
  @Input() org: Organisation;
  @Input() isGeneral: boolean;
  @Input() showGeneralReferrals: boolean;

  chart!: Chart;
  orgReferrals: ReferralGraphData[];
  referralCounts: any;
  configPie: any;
  chartData: any[];
  chartLabels: any[];
  colors: any;

  constructor(
    public is: InfographicsService
  ) { }

  ngOnInit(): void {
    if (this.chart) this.chart.destroy();

    this.updateColors();
    this.createPieChart();
    
  }

  ngOnChanges(changes) {
    if (this.chart) this.chart.destroy();

    if (changes['org'] || changes['showGeneralReferrals']) {
      this.createPieChart();
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

    this.chart = new Chart('referral-graph-mobile', this.configPie);
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
