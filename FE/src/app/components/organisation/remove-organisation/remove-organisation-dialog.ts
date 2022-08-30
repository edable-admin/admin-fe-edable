import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from 'src/app/models/DialogData';


@Component({
    selector: 'remove-organisation-dialog.component',
    templateUrl: 'remove-organisation-dialog.html',
    styleUrls: ['./remove-organisation-dialog.scss'],
})
export class RemoveOrganisationDialog {
    constructor(
        public dialogRef: MatDialogRef<RemoveOrganisationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        public http: HttpClient

    ) { }

    onNoClick(): void {
        this.dialogRef.close(false);
    }
    cancelDelete() {
        this.dialogRef.close(false);
    }
    confirmDelete() {
        this.dialogRef.close(true);
    }
}
