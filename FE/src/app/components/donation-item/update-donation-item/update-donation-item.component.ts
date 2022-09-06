import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/DialogData';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-donation-item.component.html',
  styleUrls: ['./update-donation-item.component.scss']
})
export class UpdateItemsComponent {
  editItemForm = this.fb.group({
    id:[this.data.id],
    name: [this.data.name, Validators.required],
    summary: [this.data.summary, Validators.maxLength(90)],
    description: [this.data.description],
    initialPrice: [this.data.initialPrice, [Validators.required,Validators.min(0.01)]],
    activeStatus:[this.data.activeStatus, Validators.required]
  });

  constructor(
    public dialogRef: MatDialogRef<UpdateItemsComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
    ) {}

//---------- Function to get image from image dialogBox --------------//
    getImageFromChild(file: any) {
      this.data.file = file;
  }
//-------------------------------------------------------------------//

  onSubmit(): void {
    console.log()
    //console.log(this.editItemForm.controls['initialPrice'].errors)
    if(this.editItemForm.valid){
      this.dialogRef.close({file:this.data.file,item:this.editItemForm.value})
    }

  }

  onCancel(){
    this.dialogRef.close()
  }
}
