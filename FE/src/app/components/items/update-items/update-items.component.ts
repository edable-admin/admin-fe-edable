import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.scss']
})
export class UpdateItemsComponent {
  editItemForm = this.fb.group({
    name: [null, Validators.required],
    summary: [null],
    description: [null],
    initialPrice: [null, [Validators.required,Validators.min(0.01)]],
    activeStatus:[false, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.editItemForm.controls['initialPrice'].errors)
    alert('Thanks!');
  }
}
