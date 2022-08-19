import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  organisationName: string;
  summary: string;
  website: string;
  abn: number;
  phone: number;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'organisation-component',
  templateUrl: 'organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class DialogOverviewExample {
  passedvalues: object | undefined;
  organisationName: string | undefined;
  summary: string | undefined;
  website: string | undefined;
  abn: number | undefined;
  phone:  number | undefined;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {organisationName: this.organisationName, summary: this.summary, website: this.website, abn: this.abn, phone: this.phone},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.passedvalues = result;
        });
  }
}

@Component({
  selector: 'organisation-add-dialog.component',
  templateUrl: 'organisation-add-dialog.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent {
  passedvalues: object | undefined;
  organisationName: string | undefined;
  summary: string | undefined;
  website: string | undefined;
  abn: number | undefined;
  phone: number | undefined;


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: {organisationName: this.organisationName, summary: this.summary, website: this.website, abn: this.abn, phone: this.phone},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.passedvalues = result;
    });
  }
  ngOnInit(): void {
  }

}
