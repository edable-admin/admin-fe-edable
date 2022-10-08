import { Injectable } from '@angular/core';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Organisation } from 'src/app/models/Organisation/Organisation';

@Injectable({
  providedIn: 'root'
})
export class InfographicsService {

  constructor() { }

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

  generateGeneralDonations(generalDonations: GeneralDonations[], startDate?: Date, endDate?: Date) {

    let genDon: GeneralDonations[] = [];

    var groupBy = function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };

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
    let groupedMonthlyDonations = groupBy(monthlyGeneralDonations, "monthYear");



    monthYear.forEach(month => {

      monthlyTotals.push({
        monthYear:month,
        amount:groupedMonthlyDonations[month].reduce((prev, curr) => prev + curr.amount, 0)
      })
    })

    return monthlyTotals

  }


}
