import { HttpClient } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { TaskService } from 'src/app/task.service';

//MAKE THIS ABLE TO CONVERT TO JSON SOMEHOW OR MAKE IT JSONSTRINGIFY

export interface DialogData {
  name: string | undefined;
  summary: string | undefined;
  activeStatus: boolean;
  ABN: string | undefined;
  phone: string | undefined;
  website: string | undefined;
  img: string | undefined;
  description: string | undefined;
}


@Component({
  selector: 'organisation-add-dialog.component',
  templateUrl: 'organisation-add-dialog.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class AddOrganisationDialog {
  // passedvalues: object | undefined;
  // name: string | undefined;
  // description: string | undefined;
  // summary: string | undefined;
  // activeStatus: boolean = true;
  // ABN: string | undefined;
  // phone: string | undefined;
  // website: string | undefined;
  // img: string = "INSERT Image URL";

  constructor(
    public dialogRef: MatDialogRef<AddOrganisationDialog>,
    @Inject(MAT_DIALOG_DATA) public data : DialogData,
    private taskService: TaskService,
  ) {}

  // createNewOrganisation(passedvalues) {
  //   this.taskService.createOrganisation(passedvalues).subscribe((response: any) => {
  //     console.log(passedvalues);
  //   });
  // }

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
  passedvalues: JSON | undefined;
  name: string | undefined;
  description: string | undefined;
  summary: string | undefined;
  activeStatus: boolean = true;
  ABN: string | undefined;
  phone: string | undefined;
  website: string | undefined;
  img: string = "INSERT Image URL";
  displayedColumns: string[] = ['name', 'activeItems', 'donations'];
  dataSource: any;
  selectedRowIndex = "";


  constructor(public dialog: MatDialog, private taskService: TaskService, public http: HttpClient) {
  }


  addOrgDialog(): void {
    const dialogRef = this.dialog.open(AddOrganisationDialog, {
      width: '400px',
      data: {name: this.name, summary: this.summary, activeStatus: this.activeStatus, ABN: this.ABN, phone: this.phone, website: this.website, img: this.img, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.http.post('https://dip-challenge.azurewebsites.net/organisation', JSON.parse(JSON.stringify(result))).subscribe(
        response => {
          console.log(response);
      });
    });
  }



  orgs: Organisation[];
  items: Item[];
  activeItems: Item[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getOrgs();
  }


  getOrgs(){
    this.http.get<any>('https://dip-challenge.azurewebsites.net/organisation/dashboard').subscribe(
      response => {
        console.log(response);
        this.orgs = response;
    });
    }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectRow(row: Organisation) {
    if (this.selectedRowIndex === row.id) {
      this.selectedRowIndex = "";
      this.activeItems = [];
      return;
    }
    this.selectedRowIndex = row.id;
    this.activeItems = this.items.filter(item => { return item.orgID === row.id });
    console.log(this.activeItems);

  }
}
export interface Organisation {
  id: string;
  name: string;
  activeItems: number;
  inactiveItems: number;
  donations: number;
}
export interface Item {
  name: string;
  initialPrice: number;
  totalDonations: number;
  activeStatus: boolean;
  orgID: string;
}
function createNewOrganisation(passedvalues: any) {
  throw new Error('Function not implemented.');
}

