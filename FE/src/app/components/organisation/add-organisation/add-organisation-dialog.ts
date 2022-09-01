import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/DialogData';

@Component({
    selector: 'add-organisation-dialog.component',
    templateUrl: 'add-organisation-dialog.html',
    styleUrls: ['add-organisation-dialog.scss'],
})
export class AddOrganisationDialog {
    constructor(
        public dialogRef: MatDialogRef<AddOrganisationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

    //---------- Function to get image from image dialogBox --------------//
    getImageFromChild(file: any) {
        this.data.file = file;
    }
    //-------------------------------------------------------------------//

    onNoClick(): void {
        this.dialogRef.close();
    }
}
