import { Component, Input, OnInit } from '@angular/core';
import { ItemDonationsData, ViewItemFinancialDetails } from 'src/app/models/Item';
import { AngularCsv } from 'angular-csv-ext/dist/Angular-csv';

@Component({
  selector: 'app-export-csv',
  templateUrl: './export-csv.component.html',
  styleUrls: ['./export-csv.component.scss']
})
export class ExportCsvComponent implements OnInit {

  @Input() itemDonationData: ItemDonationsData[] = [];
  @Input() itemFinancialDetails:ViewItemFinancialDetails;

  constructor() { }

  ngOnInit(): void {
  }

  exportCSV() {

    interface itemDonationCSVModel{
      IsRefunded: boolean,
      amount: number,
      comment: string,
      donationDate: string,
      donorPublicName:string
  }

    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: `Item: ${this.itemFinancialDetails.name}`,
      useBom: true,
      noDownload: false,
      headers: ["Donation_Date", "Donor_Public_Name", "Comment", "Amount", "IsRefunded"],
      useHeader: false,
      nullToEmptyString: false,
    };

    //creates the data that will be in the csv
    //converts donation date to format suitable for csv dd/mm/yy
    const data: itemDonationCSVModel[] = this.itemDonationData.map((item: ItemDonationsData) => {
      const newItemDonation: itemDonationCSVModel = {
        donationDate: item.donationDate.toDate().toLocaleDateString(),
        donorPublicName: item.donorPublicName,
        comment: item.comment,
        amount: item.amount,
        IsRefunded: item.IsRefunded
      }
      return newItemDonation;
    })

    // Creates csv file that is downloaded
    new AngularCsv([...data,{colOne:"",colTwo:"",colThree:"Total:",Total:this.itemFinancialDetails.totalDonationsValue}],`Item:${this.itemFinancialDetails.name}`,options)
  }

}
