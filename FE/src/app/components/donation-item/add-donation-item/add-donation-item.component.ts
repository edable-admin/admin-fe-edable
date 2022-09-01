import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/DialogData';


@Component({
  selector: 'app-add-donation-item',
  templateUrl: './add-donation-item.component.html',
  styleUrls: ['./add-donation-item.component.scss']
})
export class AddDonationItemComponent {
  constructor(
      public dialogRef: MatDialogRef<AddDonationItemComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  //---------- Function to upload an image for the donation item --------------//

  
  //-------------------------------------------------------------------//

  onNoClick(): void {
      this.dialogRef.close();
  }
}
