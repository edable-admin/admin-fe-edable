import { HttpClient } from "@angular/common/http";
import { Component, Inject, Input } from "@angular/core";
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
        public http: HttpClient,
    ) { }

    showWarning: boolean;
    isDisabled: boolean;

    message: string


    onNoClick(): void {
        this.dialogRef.close(false);
    }
    cancelDelete() {
        this.dialogRef.close(false);
    }
    confirmDelete(data) {
        if ((data.totalDonationItems > 0 && data.totalDonations > 0) || data.totalDonations > 0) {
            this.showWarning = true;
            this.message = data.name + " has donation records and cannot be deleted"
            this.isDisabled = !this.isDisabled
        }
        else if (data.totalDonationItems > 0) {
            this.showWarning = true;
            this.message = data.name + " has donation items and cannot be deleted"
            this.isDisabled = !this.isDisabled;
        }
        else {
            this.showWarning = false;
            this.dialogRef.close(true);
        }
    }
}
