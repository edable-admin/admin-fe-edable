import { Injectable } from '@angular/core';
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

    console.log(totals)

    return totals;




  }



}
