import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/DialogData';
import { FormBuilder, Validators } from '@angular/forms';
import { validateArgCount } from '@firebase/util';

@Component({
    selector: 'add-organisation-dialog.component',
    templateUrl: 'add-organisation-dialog.html',
    styleUrls: ['add-organisation-dialog.scss'],
})
export class AddOrganisationDialog {
    organisationForm;

    constructor(
        public dialogRef: MatDialogRef<AddOrganisationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private _formBuilder: FormBuilder
    ) {
        this.organisationForm = this._formBuilder.group({
            name: [Validators.required],
            description: [Validators.required],
            summary: [Validators.required],
            abn: [Validators.required, Validators.pattern("^(\\d *?){11}$")],
            phone: [Validators.required],
            website: [Validators.required]
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
    test() {
        console.log(this.organisationForm.valid);
        
    }
}