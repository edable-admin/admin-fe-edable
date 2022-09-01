import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/DialogData';
import { ItemService } from 'src/app/services/firebase/item.service';

@Component({
  selector: 'app-remove-donation-item',
  templateUrl: './remove-donation-item.component.html',
  styleUrls: ['./remove-donation-item.component.scss']
})

export class RemoveDonationItemComponent {
  showWarning: boolean = false;
  isDisabled: boolean = false;
  constructor(
      public dialogRef: MatDialogRef<RemoveDonationItemComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private itemService: ItemService
  ) { }

  //---------- Function to upload an image for the donation item --------------//


  //-------------------------------------------------------------------//

  onNoClick(): void {
      this.dialogRef.close();
  }
  async onDelete() {
    let itemDeleted = await this.itemService.deleteItem(this.data.id, this.data.itemID);
    
    if (itemDeleted) {
      this.dialogRef.close();
      return;
    }
    this.showWarning = true;
    this.isDisabled = true;
  }
}

