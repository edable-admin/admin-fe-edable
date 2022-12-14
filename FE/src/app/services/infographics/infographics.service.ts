import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Item } from 'src/app/models/Item';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { TransactionService } from '../firebase/transaction-service/transaction.service';

@Injectable({
  providedIn: 'root'
})
export class InfographicsService {

  constructor(
    public fs: AngularFirestore,
    public ts: TransactionService
  ) { }


  groupBy = (xs, key) => {
    return xs.reduce(function (rv, x) {
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
        monthYear: `${donMonth + 1}/${donYear}`,
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
        monthYear: month,
        amount: groupedMonthlyDonations[month].reduce((prev, curr) => prev + curr.amount, 0)
      })
    })

    return monthlyTotals

  }

  //-------------------------- Item Donations -------------------//
  generateItemDonations(itemDonations: ItemDonations[], startDate?: Date, endDate?: Date) {

    let itemDon: ItemDonations[] = [];


    const filterItemDonations = () => {
      let filterItemDonations: ItemDonations[];
      //check that the start date is less than the end date and that they both exist
      if (startDate?.getTime() < endDate?.getTime()) {

        //filters to get the Item donations for that range and Item donation was not refunded
        filterItemDonations = itemDonations
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

        filterItemDonations = itemDonations
          .filter(
            don => don.donationDate.toMillis() >= startOfTheYear.getTime() &&
              don.donationDate.toMillis() <= endOfTheYear.getTime() &&
              !don.IsRefunded
        );

      }
      return filterItemDonations;

    }

    itemDon = filterItemDonations();

    let monthlyItemDonations = itemDon.map(don => {

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
    monthlyItemDonations = monthlyItemDonations.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year
      } else {
        return a.month - b.month
      }
    })

    monthlyItemDonations = monthlyItemDonations.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year
      } else {
        return a.month - b.month
      }
    })

    //gets all the unique month/year values and are put in an array
    const itemMonthYear = [...new Set(monthlyItemDonations.map(item => item.monthYear))];


    let monthlyTotals: any = [];

    //group by the year
    let groupedMonthlyDonations = this.groupBy(monthlyItemDonations, "monthYear");



    itemMonthYear.forEach(month => {

      monthlyTotals.push({
        monthYear:month,
        amount:groupedMonthlyDonations[month].reduce((prev, curr) => prev + curr.amount, 0)
      })
    })

    return monthlyTotals

  }


//------------------------- Get item Donation Data for an Organisation ---------------------//
  async getGraphDataOrgItemsDonations(items: Item[], org: Organisation, startDate?: Date, endDate?: Date) {
    // Get ItemDonations from the database
    let graphDataItemsDonations: any = await Promise.all(items.map(async item => {
      //get item donations for org
      return (await this.ts.getOrgItemDonations(org.id, item.id))
        .docs.map(doc => {
          return {
            itemId: item.id,
            itemName: item.name,
            amount: doc.data()["amount"],
            donationDate: doc.data()["donationDate"],
            IsRefunded: doc.data()["IsRefunded"]
          }
        })
    }))

    //filter date range and refunded amounts
    let currentYear = new Date();
    let startOfTheYear = new Date(`${currentYear.getFullYear()}-01-01`);
    let endOfTheYear = new Date(`${currentYear.getFullYear()}-12-31`);

    //check if start and end date are valid
    if (startDate?.getTime() <= endDate?.getTime()) {
      graphDataItemsDonations = graphDataItemsDonations.map(itemGroup => {
        return itemGroup.filter(item => {
          return !item.IsRefunded && item.donationDate.toDate() >= startDate && item.donationDate.toDate() <= endDate
        })
      })

    } else {

      //if start and end date are not inputed or incorrect values get the current
      // years donations
      graphDataItemsDonations = graphDataItemsDonations.map((itemGroup) => {
        return itemGroup.filter((item) =>
          !item.IsRefunded &&
          item.donationDate.toDate() >= startOfTheYear && item.donationDate.toDate() <= endOfTheYear
        )
      })
    }

    //convert to date field to local date string
    graphDataItemsDonations = graphDataItemsDonations.map((itemGroup: any) => {
      return itemGroup.map((item) => {
        return {
          ...item,
          donationDate: item.donationDate.toDate().toLocaleDateString().split("/").reverse().join("-")
        }
      })
    })





    //Group each item by date
    graphDataItemsDonations = graphDataItemsDonations.map((itemGroup) => {

      return this.groupBy(itemGroup, "donationDate")
    })



    //Sum donation groups
    graphDataItemsDonations = graphDataItemsDonations.map((itemGroup) => {
      return Object.keys(itemGroup).map((key) => {
        return {
          itemName: itemGroup[key][0].itemName,
          donationDate: key,
          amount: itemGroup[key].reduce((prev, cur) => prev + cur.amount, 0)
        }
      })
    })

    //colour pallet
    const selectColor = (number) => {
      const hue = number * 137.508;
      return `hsl(${hue},50%,75%)`;
    }

    // add to dataset
    let dataset: any[] = []

    graphDataItemsDonations.forEach((itemGroup, i) => {
      if (itemGroup[0]?.itemName) {
        dataset.push({
          label: itemGroup[0]?.itemName,
          data: itemGroup.map((item) => {
            return {
              x: item.donationDate,
              y: item.amount
            }
          }),
          borderColor: selectColor(i),
          backgroundColor: selectColor(i),
          pointStyle: 'circle',
          pointRadius: 6
        })
      }
    })

    // let labels = graphDataItemsDonations.flat();
    // labels = labels.sort((a, b) => a.donationSort - b.donationSort);
    //labels = [...new Set(labels.map(item => item.donationDate))];
    const graphData = {
      //labels: labels,
      dataset: dataset
    }
    return graphData;
  }


  //------------------------ Create Scatter Chart for an Organisations Item Donations --------------//
  async createScatterOrgItemDonations(items?: Item[], org?: Organisation, startDate?: Date, endDate?: Date) {

    const chartData = await this.getGraphDataOrgItemsDonations(items, org, startDate, endDate);
    let chart = new Chart("item-donations-graph", {
      type: 'bubble',
      data: {
        //labels: chartData.labels,
        datasets:
          chartData.dataset
      },
      options: {
        layout: {
          padding: 10
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            }
          }
        },
        interaction: {
          mode: 'point'
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                let label = `${context.dataset.label}: $${context.parsed.y}`;
                return label;
              }
            }
          },
          legend: {
            position: 'top',
            align: 'start',
            labels: {
              textAlign: 'left',
              padding: 30,
              boxWidth: 15,
            }
          },
          title: {
            text: `${org.name} Item Donations`,
            display: true
          },

        }
      }

    })

    return chart;
  }
//------------------------ Create Scatter Chart for an Organisations Item Donations --------------//
  async createMobileScatterOrgItemDonations(items?: Item[], org?: Organisation, startDate?: Date, endDate?: Date) {

    const chartData = await this.getGraphDataOrgItemsDonations(items, org, startDate, endDate);
    let chart = new Chart("item-donations-graph-mobile", {
      type: 'bubble',
      data: {
        //labels: chartData.labels,
        datasets:
          chartData.dataset
      },
      options: {
        layout: {
          padding:10
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            type: 'time',
            time: {
              unit:'day'
            }
          }
        },
        interaction: {
          mode: 'point'
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                let label = `${context.dataset.label}: $${context.parsed.y}`;
                return label;
              }
            }
          },
          legend: {
            display:false
            // maxHeight:400,
            // position: 'bottom',
            // align:'start',
            // labels: {
            //   textAlign: 'left',
            //   padding: 30,
            //   boxWidth: 15,
            // }
          },
          title: {
            text: `${org.name} Item Donations`,
            display:true
          },

        }
      }

    })

    return chart;
  }

  async getReferralData(orgs: Organisation[]): Promise<ReferralGraphData[]> {

    let referralGraphData: ReferralGraphData[] = [];
    let orgId: string = '';
    let howHeard: string = '';
    let referrals: string[] = [];

    await this.fs.firestore.collectionGroup('Private')
      .get()
      .then((resp) => {

        resp.docs.forEach((resp) => {

          if (resp.ref.parent.parent.parent.id === 'ItemsDonations') {
            orgId = resp.ref.parent.parent.parent.parent.parent.parent.id;
          }
          else {
            orgId = resp.ref.parent.parent.parent.parent.id;
          }

          let org = orgs.find(item => {
            return item.id === orgId;
          });


          let privateData: PrivateData = resp.data() as PrivateData;

          if ((privateData.howHeard === '' || privateData.howHeard === undefined) && (privateData.howHeardOther === '' || privateData.howHeardOther === undefined)) {
            howHeard = 'Unknown';
          } else if ((privateData.howHeard === '' || privateData.howHeard === undefined) && (privateData.howHeardOther !== '' || privateData !== undefined)) {
            howHeard = privateData.howHeardOther;
          } else {
            howHeard = privateData.howHeard;
          }

          let newReferral: ReferralGraphData = {
            orgId: orgId,
            orgName: org.name,
            howHeard: howHeard
          };

          referralGraphData.push(newReferral);
        });
      });

    return referralGraphData;
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

export interface PrivateData {
  IsAnon: boolean;
  agreeToContact: boolean;
  email: string;
  howHeard: string;
  howHeardOther: string;
  mailingAddress: string;
  name: string;
  paypalTransactionId: string;
  phoneNumber: string;
}
export interface ReferralGraphData {
  orgId: string;
  orgName: string;
  howHeard: string;
}