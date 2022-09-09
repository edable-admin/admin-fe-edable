import { Component, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/DialogData';
import { Item } from 'src/app/models/Item';
import { ItemService } from 'src/app/services/firebase/item-service/item.service';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-donation-item.component.html',
  styleUrls: ['./update-donation-item.component.scss'],
})
export class UpdateItemsComponent {
  editItemForm = this.fb.group({
    id: [this.data.item.id],
    name: [this.data.item.name, Validators.required],
    summary: [this.data.item.summary, Validators.maxLength(90)],
    description: [this.data.item.description],
    initialPrice: [
      this.data.item.initialPrice,
      [Validators.required, Validators.min(0.01)],
    ],
    activeStatus: [this.data.item.activeStatus, Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<UpdateItemsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private itemService: ItemService,
    private storage: AngularFireStorage
  ) {}

  //---------- Function to get image from image dialogBox --------------//
  getImageFromChild(file: any) {
    this.data.file = file;
  }
  //-------------------------------------------------------------------//

  onSubmit(): void {
    // partial item type needs to be any.
    const updatedItem: any = {
      summary: this.editItemForm.value.id,
      description: this.editItemForm.value.description,
      name: this.editItemForm.value.name,
      initialPrice: this.editItemForm.value.initialPrice,
      activeStatus: this.editItemForm.value.activeStatus,
    };
    if (this.editItemForm.valid) {
      // call item service with updated information
      this.itemService.updateItem(
        this.data.org,
        this.data.item.id,
        updatedItem
      );

      this.dialogRef.close({
        file: this.data.file,
        item: this.editItemForm.value,
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
