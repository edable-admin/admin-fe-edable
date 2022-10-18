import { Component, Input, OnInit } from '@angular/core';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';

@Component({
  selector: 'app-infographics-general-donations',
  templateUrl: './infographics-general-donations.component.html',
  styleUrls: ['./infographics-general-donations.component.scss']
})
export class InfographicsGeneralDonationsComponent implements OnInit {

  @Input() allOrgsGeneralDonationData:GeneralDonations[];

  chartData:any[];
  chartLabel:any[];
  chart: any = [];
  colors: any;


  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges(changes) {
    if(changes['allOrgsGeneralDonationData']){
      console.log(this.allOrgsGeneralDonationData)
    }
  }

  // updateCharts() {
  //   this.chart.data.labels = (this.chartLabel);
  //   this.chart.data.datasets[0].data = (this.chartData);
  //   this.chart.data.datasets[0].backgroundColor = (this.colors);
  //   this.chart.update();
  // };

  //   updateColors() {
  //   this.colors = this.chartLabel.map((item, i) => this.selectColor(i));
  // };

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
