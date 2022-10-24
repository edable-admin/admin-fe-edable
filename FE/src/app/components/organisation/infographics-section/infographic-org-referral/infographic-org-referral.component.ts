import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { ReferralGraphData } from 'src/app/services/infographics/infographics.service';

@Component({
  selector: 'app-infographic-org-referral',
  templateUrl: './infographic-org-referral.component.html',
  styleUrls: ['./infographic-org-referral.component.scss']
})
export class InfographicOrgReferralComponent implements OnInit {

  @Input() referralData: ReferralGraphData[];
  @Input() org: Organisation;
  @Input() chartType: string;

  chart!: Chart;
  configPie: any;
  chartData: any[];
  chartLabels: any[];


  constructor() { }

  ngOnInit(): void {
    if (this.chart) this.chart.destroy();
  }

  ngOnDestroy() {
    if (this.chart) this.chart.destroy();
  }

  ngAfterViewInit() {
    if (this.chart) this.chart.destroy();

    this.createChart();
  }

  ngOnChanges(changes) {

    if (changes['org']) {
      if (this.org.id === '') {
        if (this.chart) this.chart.destroy();
      }
      this.createChart();
    }
  }

  createChart() {
    if (this.chart) this.chart.destroy();

    let orgReferrals = this.referralData.filter(org => {
      return org.orgId === this.org.id;
    });

    const referrals = orgReferrals.map(ref => {
      return ref.howHeard;
    });

    let referralCounts = {};
    this.chartLabels = [];
    this.chartData = [];

    for (let i = 0; i < referrals.length; i++) {
      const element = referrals[i];

      if (referralCounts[element]) {
        referralCounts[element] += 1;
      } else {
        referralCounts[element] = 1;
        this.chartLabels.push(element);
      }
    }

    for (let i = 0; i < this.chartLabels.length; i++) {
      this.chartData.push(referralCounts[this.chartLabels[i]]);
    }

    let colors = this.chartLabels.map((item, i) => this.selectColor(i));

    this.configPie = {
      type: 'pie',
      data: {
        labels: this.chartLabels,
        datasets: [{
          hoverOffset: 5,
          data: this.chartData,
          backgroundColor: colors,
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
            text: `${this.org.name}'s Referrals`,
            padding: {
              top: 10,
              bottom: 0
            }
          }
        },
      }
    };
    if (this.chartData.length <= 0) return;

    this.chart = new Chart('org-referral-graph', this.configPie);
  }

  selectColor(number) {
    const hue = number * 137.508;
    return `hsl(${hue},50%,75%)`;
  }

}
