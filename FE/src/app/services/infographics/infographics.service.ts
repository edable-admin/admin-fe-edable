import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Item } from 'src/app/models/Item';
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
  async getGraphDataOrgItemsDonations(items: Item[], org: Organisation, startDate?:Date, endDate?:Date) {

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

    //flaten object
    //https://stackoverflow.com/questions/29158723/javascript-flattening-an-array-of-arrays-of-objects
    graphDataItemsDonations = [].concat.apply([], graphDataItemsDonations)

    //filter out donations that have been refunded
    graphDataItemsDonations = graphDataItemsDonations.filter((don: any) => !don.IsRefunded)

    //sort item donations by date
    graphDataItemsDonations = graphDataItemsDonations.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year
      } else {
        return a.month - b.month
      }
    })

    //filter date range
    if (startDate?.getTime() < endDate?.getTime()) {
      graphDataItemsDonations = graphDataItemsDonations
        .filter((don:any) =>
          don.donationDate.toMillis() >= startDate.getTime() &&
          don.donationDate.toMillis() <= endDate.getTime())
    } else {
      let currentYear = new Date();
      let startOfTheYear = new Date(`${currentYear.getFullYear()}-01-01`);
      let endOfTheYear = new Date(`${currentYear.getFullYear()}-12-31`);

      graphDataItemsDonations = graphDataItemsDonations
        .filter((don:any) =>
          don.donationDate.toMillis() >= startOfTheYear.getTime() &&
          don.donationDate.toMillis() <= endOfTheYear.getTime())
    }

    //create monthYear item property to help group items
    graphDataItemsDonations = graphDataItemsDonations.map((item: any) => {

      return {
        ...item,
        monthYear: `${item.donationDate.toDate().getMonth() + 1}/${item.donationDate.toDate().getFullYear()}`,
        monthYearItem:`${item.donationDate.toDate().getMonth() + 1}/${item.donationDate.toDate().getFullYear()}-${item.itemId}`
      }
    })

    //gets all the unique month/year values and are put in an array
    const monthYearItem = [...new Set(graphDataItemsDonations.map((item: any) => item.monthYearItem))];


    let groupedItems = this.groupBy(graphDataItemsDonations, ["monthYearItem"])

    let monthlyTotals: any = [];

    //calculate totals
    monthYearItem.forEach((myi: any) => {
      monthlyTotals.push({
        itemId: groupedItems[myi][0].itemId,
        itemName:groupedItems[myi][0].itemName,
        monthYear:groupedItems[myi][0].monthYear,
        amount:groupedItems[myi].reduce((prev,curr) => prev + curr.amount,0)
      })
    })

    return graphDataItemsDonations;

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
