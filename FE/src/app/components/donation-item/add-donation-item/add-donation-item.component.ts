import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { serverTimestamp } from 'firebase/firestore';
import { DialogData } from 'src/app/models/DialogData';
import { ItemService } from 'src/app/services/firebase/item-service/item.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-donation-item',
  templateUrl: './add-donation-item.component.html',
  styleUrls: ['./add-donation-item.component.scss'],
})
export class AddDonationItemComponent {
  donationItemForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddDonationItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private itemService: ItemService,
    private formBuilder: FormBuilder
  ) {
    this.donationItemForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      summary: new FormControl('', Validators.required),
      initialPrice: new FormControl('', [
        Validators.required,
        Validators.required,
        Validators.min(0.01),
      ]),
      activeStatus: new FormControl(true)
    });
  }

  //---------- Function to get image from image dialogBox --------------//
  getImageFromChild(file: any) {
    this.data.file = file;
  }
  //-------------------------------------------------------------------//

  onNoClick(): void {
    this.dialogRef.close();
  }

  async onAdd() {
    if (!this.donationItemForm.valid) return;

    let item = {
      name: this.donationItemForm.get('name').value,
      activeStatus: this.donationItemForm.get('activeStatus').value,
      description: this.donationItemForm.get('description').value,
      summary: this.donationItemForm.get('summary').value,
      initialPrice: this.donationItemForm.get('initialPrice').value,
      createdAt: serverTimestamp(),
      img: '',
      totalDonationsValue: 0,
      dateCompleted: null,
      orgID: this.data.id,
    };

    let itemRef = this.itemService.addItem(this.data.id, item);

    this.dialogRef.close({ file: this.data.file, itemRef: itemRef });
  }
}
