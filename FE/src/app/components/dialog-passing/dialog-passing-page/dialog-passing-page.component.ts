import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EnterNameComponent } from '../enter-name/enter-name.component';
@Component({
  selector: 'app-dialog-passing-page',
  templateUrl: './dialog-passing-page.component.html',
  styleUrls: ['./dialog-passing-page.component.scss']
})
export class DialogPassingPageComponent implements OnInit {
  name!: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(EnterNameComponent,
      {
        data: { name:this.name, question: "Please enter your name" }
      });

      dialogRef.afterClosed().subscribe(result  => {
        this.name = result ;
        console.log(result)
      });
  }

  ngOnInit(): void {

  }

}
