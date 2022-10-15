import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Chart } from 'chart.js';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Item } from 'src/app/models/Item';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { TransactionService } from '../firebase/transaction-service/transaction.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Injectable({
  providedIn: 'root'
})
export class InfographicsService {

  constructor(
    public fs: AngularFirestore,
    public ts: TransactionService
  ) { }


  groupBy = (xs, key) => {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
//------------------------ Totals -----------------------//
  calculateCombinedTotalsAllOrgs(orgs: Organisation[]) {

    let totals = {
      totalDonationCount: 0,
      totalDonationItems: 0,
      totalDonationsValue: 0,
      totalGeneralDonationsCount: 0,
      totalGeneralDonationsValue: 0,
      totalItemDonationsCount: 0,
      totalItemDonationsValue: 0
    }

    orgs.forEach((org) => {

      totals = {
        totalDonationCount: totals.totalDonationCount += org.totalDonationCount,
        totalDonationItems: totals.totalDonationItems += org.totalDonationItems,
        totalDonationsValue: totals.totalDonationsValue += org.totalDonationsValue,
        totalGeneralDonationsCount: totals.totalDonationCount += org.totalDonationCount,
        totalGeneralDonationsValue: totals.totalGeneralDonationsValue += org.totalGeneralDonationsValue,
        totalItemDonationsCount: totals.totalItemDonationsCount += org.totalItemDonationsCount,
        totalItemDonationsValue: totals.totalItemDonationsValue += org.totalItemDonationsValue

      }
    })

    return totals;
  }

//-------------------------- General Donations -------------------//
  generateGeneralDonations(generalDonations: GeneralDonations[], startDate?: Date, endDate?: Date) {

    let genDon: GeneralDonations[] = [];

    const filterDonations = () => {
      let filteredDonations: GeneralDonations[] = [];

      //check that the start date is less than the end date and that they both exist
      if (startDate?.getTime() < endDate?.getTime()) {

        //filters to get the general donations for that range and general donation was not refunded
        filteredDonations = generalDonations
          .filter(don =>
            don.donationDate.toMillis() >= startDate.getTime() &&
            don.donationDate.toMillis() <= endDate.getTime() &&
            !don.IsRefunded
          );
      } else {
        // if date range is empty or incorrect use the current year as a range
        let currentYear = new Date();
        let startOfTheYear = new Date(`${currentYear.getFullYear()}-01-01`);
        let endOfTheYear = new Date(`${currentYear.getFullYear()}-12-31`);

        filteredDonations = generalDonations
          .filter(
            don => don.donationDate.toMillis() >= startOfTheYear.getTime() &&
              don.donationDate.toMillis() <= endOfTheYear.getTime() &&
              !don.IsRefunded
        );

      }

      return filteredDonations;

    }

    genDon = filterDonations();


    let monthlyGeneralDonations = genDon.map(don => {

      let donationDate = don.donationDate.toDate();

      let donMonth = donationDate.getMonth();
      let donYear = donationDate.getFullYear();

      return {
        monthYear:`${donMonth + 1}/${donYear}`,
        month: donMonth + 1,
        year: donationDate.getFullYear(),
        amount: don.amount
      }
    })

    //sort to make sure data is in correct order
    monthlyGeneralDonations = monthlyGeneralDonations.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year
      } else {
        return a.month - b.month
      }
    })

    //gets all the unique month/year values and are put in an array
    const monthYear = [...new Set(monthlyGeneralDonations.map(item => item.monthYear))];

    let monthlyTotals: any = [];

    //group by the year
    let groupedMonthlyDonations = this.groupBy(monthlyGeneralDonations, "monthYear");



    monthYear.forEach(month => {

      monthlyTotals.push({
        monthYear:month,
        amount:groupedMonthlyDonations[month].reduce((prev, curr) => prev + curr.amount, 0)
      })
    })

    return monthlyTotals

  }

//------------------------- Get item Donation Data for an Organisation ---------------------//
  async getGraphDataOrgItemsDonations(items: Item[], org: Organisation, startDate?: Date, endDate?: Date) {

    const selectColor = (number) => {
      const hue = number * 137.508;
      return `hsl(${hue},50%,75%)`;
    }

    let graphDataItemsDonations:any = await Promise.all(items.map(async item => {

      //get item donations for org
      return (await this.ts.getOrgItemDonations(org.id, item.id))
        .docs.map(doc => {
          return {
            itemId:item.id,
            itemName:item.name,
            amount: doc.data()["amount"],
            donationDate: doc.data()["donationDate"],
            month:doc.data()["donationDate"].toDate().getMonth(),
            year:doc.data()["donationDate"].toDate().getFullYear(),
            IsRefunded:doc.data()["IsRefunded"]
          }
        })
    }))

    let dataset:any[] = []
    graphDataItemsDonations.forEach((item, i) => {
      if (item[0]?.itemName) {
        dataset.push(
          {
            label: item[0].itemName,
            data: item.map((don, i) =>
            {
              return {
                y: don?.amount,
                x: don?.donationDate.toDate().toLocaleDateString(),
              }
            }),
            borderColor: selectColor(i),
            backgroundColor: selectColor(i),
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
          }

      )
      }
    })

    graphDataItemsDonations = graphDataItemsDonations.flat();

    let labels = graphDataItemsDonations.map(d => d.donationDate.toDate().toLocaleDateString())

    labels = labels.filter((v, i, a) => a.indexOf(v) === i);

    const graphData = {
      labels: labels,
      dataset:dataset
    }

    return graphData;
  }


//------------------------ Create Scatter Chart for an Organisations Item Donations --------------//
  async createScatterOrgItemDonations(items: Item[], org: Organisation, startDate?: Date, endDate?: Date) {
    const chartData = await this.getGraphDataOrgItemsDonations(items, org, startDate, endDate);
    console.log(chartData)
    let chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: chartData.labels,
        datasets:
          chartData.dataset
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index'
        },
        showLine: false,
        plugins: {
          title: {
            text: `${org.name} Item Donations`,
            display:true
          },

        }
      }

    })

    return Chart;
  }




  //todo add orgID to item donation for querying on donor side better method
  //----------------------- Get all Donation Items based on an itemID list ---------------------//
  // async getAllOrgDonationItems(itemIDList:string[]) {
  //   console.log(itemIDList)

  //   const itemDonations = this.fs
  //     .collectionGroup("ItemsDonations",
  //       query => query.where("orgId", "in", itemIDList)
  //     )
  // }
}
