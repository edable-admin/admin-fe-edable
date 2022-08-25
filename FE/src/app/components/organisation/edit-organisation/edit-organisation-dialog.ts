import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from 'src/app/models/DialogData';


@Component({
    selector: 'edit-organisation-dialog.component',
    templateUrl: 'edit-organisation-dialog.html',
    styleUrls: ['edit-organisation-dialog.scss'],
})
export class EditOrganisationDialog {
    constructor(
        public dialogRef: MatDialogRef<EditOrganisationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    //---------- Function to get image from image dialogBox --------------//
    getImageFromChild(file: any) {
        this.data.file = file;
    }
    //-------------------------------------------------------------------//
}
