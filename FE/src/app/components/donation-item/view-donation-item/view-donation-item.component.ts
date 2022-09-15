import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Timestamp } from 'firebase/firestore';
import { Item, ViewItem, ViewItemFinancialDetails, ViewItemInformation } from 'src/app/models/Item';

@Component({
  selector: 'app-view-donation-item',
  templateUrl: './view-donation-item.component.html',
  styleUrls: ['./view-donation-item.component.scss']
})
export class ViewDonationItemComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewDonationItemComponent>,
        @Inject(MAT_DIALOG_DATA) public item:ViewItem,
  ) {
  }

  itemInformation: ViewItemInformation;
  itemFinancialDetails: ViewItemFinancialDetails;


  ngOnInit(): void {

    console.log(this.item)

    this.itemInformation = {
      name:this.item.name,
      description: this.item.description,
      summary: this.item.summary,
      img:this.item.img
    }

    this.itemFinancialDetails = {
      orgID: this.item.orgID,
      itemID:this.item.id,
      name:this.item.name,
      initialPrice:this.item.initialPrice,
      totalDonations:this.item.totalDonations,
      createdAt:this.item.createdAt
    }
    //console.log(this.data.createdAt.toDate().toLocaleDateString())
  }

}
