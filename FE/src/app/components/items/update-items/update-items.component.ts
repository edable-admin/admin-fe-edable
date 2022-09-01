import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.scss']
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
        @Inject(MAT_DIALOG_DATA) public data: Item,
    private fb: FormBuilder
    ) {}

  onSubmit(): void {
    console.log()
    //console.log(this.editItemForm.controls['initialPrice'].errors)
    if(this.editItemForm.valid){
      this.dialogRef.close(this.editItemForm.value)
    }

  }

  onCancel(){
    this.dialogRef.close()
  }
}
