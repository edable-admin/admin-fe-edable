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

    //Call delete on firebase service. waits for transaction to complete before closing
    await this.itemService.deleteItem(this.data.id, this.data.itemID)
      .then((deleteSuccess) => {
        if (deleteSuccess) {
          this.dialogRef.close(true);
          return;
        } else {          
          //Item cannot be deleted. show warning message
          this.showWarning = true;
          this.isDisabled = true;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}