import { HttpClient } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


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
  styleUrls: ['./organisation.component.scss'],
})
export class AddOrganisationDialog {

  constructor(
    public dialogRef: MatDialogRef<AddOrganisationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss'],
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
  img: string = 'INSERT Image URL';
  displayedColumns: string[] = ['name', 'activeItems', 'donations'];
  dataSource: any;
  selectedRowIndex = '';
  orgs: Organisation[];
  items: Item[];
  activeItems: Item[];
  orgData: any;
  cleanOrgData: any;

  constructor(
    public dialog: MatDialog,
    public http: HttpClient,
  ) {}

  addOrgDialog(): void {
    const dialogRef = this.dialog.open(AddOrganisationDialog, {
      width: '400px',
      data: {
        name: this.name,
        summary: this.summary,
        activeStatus: this.activeStatus,
        ABN: this.ABN,
        phone: this.phone,
        website: this.website,
        img: this.img,
        description: this.description,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.http
        .post(
          'https://dip-challenge.azurewebsites.net/organisation',
          JSON.parse(JSON.stringify(result))
        )
        .subscribe((response) => {
          console.log(response);
          this.getOrgs();
        });
    });
  }

  ngOnInit(): void {
    this.getOrgs();
  }

  getOrgs() {
    this.http
      .get<any>(
        'https://dip-challenge.azurewebsites.net/organisation/dashboard'
      )
      .subscribe({
        next: (resp) => {
          (this.orgData = resp), console.log(resp);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.cleanOrgData = this.orgData.map((item: any) => {
            let org = {
              name: item._fieldsProto.name.stringValue,
              activeItems: 0,
              donations: 0,
            };

            return org;
          });

          console.log(this.cleanOrgData);
        },
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
      this.selectedRowIndex = '';
      this.activeItems = [];
      return;
    }
    this.selectedRowIndex = row.id;
    this.activeItems = this.items.filter((item) => {
      return item.orgID === row.id;
    });
    console.log(this.activeItems);
  }
}
export interface Organisation {
  id: string;
  name: string;
  activeItems?: number;
  inactiveItems: number;
  donations?: number;
}
export interface Item {
  name: string;
  initialPrice: number;
  totalDonations: number;
  activeStatus: boolean;
  orgID: string;
  img: string;
}

