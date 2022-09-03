import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { serverTimestamp } from 'firebase/firestore';
import { DialogData } from 'src/app/models/DialogData';
import { ItemService } from 'src/app/services/firebase/item.service';


@Component({
  selector: 'app-add-donation-item',
  templateUrl: './add-donation-item.component.html',
  styleUrls: ['./add-donation-item.component.scss']
})
export class AddDonationItemComponent {


  constructor(
      public dialogRef: MatDialogRef<AddDonationItemComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private itemService: ItemService
  ) { }

  //---------- Function to upload an image for the donation item --------------//


  //-------------------------------------------------------------------//

  onNoClick(): void {
      this.dialogRef.close();
  }

    async onAdd() {
      let item = {
        name: this.data.donationItemName,
        activeStatus: false,
        description: this.data.donationItemDescription,
        summary: this.data.donationItemSummary,
        initialPrice: this.data.donationItemInitialPrice,
        createdAt: serverTimestamp(),
        img: "INSERT ITEM IMAGE UPLOAD COMPONENT",
        totalDonations: this.data.donationItemTotalDonations,
        dateCompleted: null,
        orgID: this.data.id,
      };

        this.itemService.addItem(this.data.id, item);
        this.dialogRef.close();
  }
}
