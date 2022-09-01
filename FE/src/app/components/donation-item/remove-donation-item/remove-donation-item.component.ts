import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/DialogData';

@Component({
  selector: 'app-remove-donation-item',
  templateUrl: './remove-donation-item.component.html',
  styleUrls: ['./remove-donation-item.component.scss']
})

export class RemoveDonationItemComponent {
  constructor(
      public dialogRef: MatDialogRef<RemoveDonationItemComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  //---------- Function to upload an image for the donation item --------------//


  //-------------------------------------------------------------------//

  onNoClick(): void {
      this.dialogRef.close();
  }
}

