import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/DialogData';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'add-organisation-dialog.component',
    templateUrl: 'add-organisation-dialog.html',
    styleUrls: ['add-organisation-dialog.scss'],
})
export class AddOrganisationDialog {
    organisationForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<AddOrganisationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private formBuilder: FormBuilder
    ) {
        this.organisationForm = this.formBuilder.group({
            name: new FormControl('', Validators.required),
            description: ['', Validators.required],
            summary: new FormControl('', Validators.required),
            ABN: new FormControl('', [Validators.required, Validators.pattern("^(\\d *?){11}$")]),
            phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9 ]*$')]),
            website: new FormControl('', Validators.required)
        });
        // this.organisationForm = this.formBuilder.group({
        //     name: ['', Validators.required],
        //     description: ['', Validators.required],
        //     summary: ['', Validators.required],
        //     abn: ['', [Validators.required, Validators.pattern("^(\\d *?){11}$")]],
        //     phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        //     website: ['', Validators.required]
        // });
    }

    //---------- Function to get image from image dialogBox --------------//
    getImageFromChild(file: any) {
        this.data.file = file;
    }
    //-------------------------------------------------------------------//

    onNoClick(): void {
        this.dialogRef.close();
    }
    onSubmit(): void {
        if (!this.organisationForm.valid) return;
    
        this.data.name = this.organisationForm.get('name').value;
        this.data.description = this.organisationForm.get('description').value;
        this.data.summary = this.organisationForm.get('summary').value;
        this.data.ABN = this.organisationForm.get('ABN').value;
        this.data.phone = this.organisationForm.get('phone').value.replace(/\s/g,'');
        this.data.website = this.organisationForm.get('website').value;
        this.dialogRef.close(this.data);
    }
}