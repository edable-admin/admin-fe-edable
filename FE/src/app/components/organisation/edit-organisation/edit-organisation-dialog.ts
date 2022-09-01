import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from 'src/app/models/DialogData';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'edit-organisation-dialog.component',
    templateUrl: 'edit-organisation-dialog.html',
    styleUrls: ['edit-organisation-dialog.scss'],
})
export class EditOrganisationDialog implements OnInit {
    organisationForm: FormGroup;
    isChecked: boolean;
    name = new FormControl('', Validators.required);
    description = new FormControl('', Validators.required);
    summary = new FormControl('', Validators.required);
    ABN = new FormControl('', [Validators.required, Validators.pattern("^(\\d *?){11}$")]);
    phone = new FormControl('', [Validators.required, Validators.pattern('^[0-9 ]*$')]);
    website = new FormControl('', Validators.required);
    activeStatus = new FormControl(false, Validators.required);

    constructor(
        public dialogRef: MatDialogRef<EditOrganisationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private formBuilder: FormBuilder
    ) {
        this.name.setValue(this.data.name);
        this.description.setValue(this.data.description);
        this.summary.setValue(this.data.summary);
        this.ABN.setValue(this.data.ABN);
        this.phone.setValue(this.data.phone);
        this.website.setValue(this.data.website);
        this.activeStatus.setValue(this.data.activeStatus);
        this.organisationForm = this.formBuilder.group({
            name: this.name,
            description: this.description,
            summary: this.summary,
            ABN: this.ABN,
            phone: this.phone,
            website: this.website,
            activeStatus: this.activeStatus
        });
    }
    ngOnInit(): void {

    }
    onNoClick(): void { 
        this.dialogRef.close();
    }
    //---------- Function to get image from image dialogBox --------------//
    getImageFromChild(file: any) {
        this.data.file = file;
    }
    //-------------------------------------------------------------------//

    toggleOrg(event: any) {
        this.data.activeStatus = event.checked;
    }
    onSubmit(): void {
        if (!this.organisationForm.valid) return;

        this.data.name = this.organisationForm.get('name').value;
        this.data.description = this.organisationForm.get('description').value;
        this.data.summary = this.organisationForm.get('summary').value;
        this.data.ABN = this.organisationForm.get('ABN').value;
        this.data.phone = this.organisationForm.get('phone').value.replace(/\s/g, '');
        this.data.website = this.organisationForm.get('website').value;
        this.dialogRef.close(this.data);
    }
}