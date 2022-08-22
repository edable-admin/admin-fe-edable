import { HttpClient } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


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
  selectedRowIndex = '';
  orgs: Organisation[];
  activeItems: Item[];
  orgData: any;
  cleanOrgData: any;
  // dataSource: any;

  items: Item[] = [
    { name: "Shovel", initialPrice: 50, totalDonations: 10, activeStatus: true, orgID: 'EdAble Flowers', img: 'https://i.imgur.com/ioUzxDC.jpeg'},
    { name: "Hose", initialPrice: 60, totalDonations: 5, activeStatus: true, orgID: 'EdAble Flowers', img: 'https://i.imgur.com/PFuUHCi.jpeg'},
    { name: "Shovel", initialPrice: 50, totalDonations: 10, activeStatus: true, orgID: 'EdAble Flowers', img: 'https://i.imgur.com/ioUzxDC.jpeg'},
    { name: "Hose", initialPrice: 60, totalDonations: 5, activeStatus: true, orgID: 'helloooooooo', img: 'https://i.imgur.com/PFuUHCi.jpeg'},
    { name: "Shovel", initialPrice: 50, totalDonations: 10, activeStatus: true, orgID: '2', img: 'https://i.imgur.com/ioUzxDC.jpeg'},
    { name: "Hose", initialPrice: 60, totalDonations: 5, activeStatus: true, orgID: '2', img: 'https://i.imgur.com/PFuUHCi.jpeg'},
    { name: "Oven", initialPrice: 800, totalDonations: 100, activeStatus: true, orgID: 'Doin Doughies', img:  'https://i.imgur.com/IJ3ehgi.jpeg'},
    { name: "Mixer", initialPrice: 300, totalDonations: 60, activeStatus: true, orgID: 'Windy', img:  'https://i.imgur.com/BTV0RRM.png'},
    { name: "Polish", initialPrice: 40, totalDonations: 8, activeStatus: true, orgID: 'Windy', img: 'https://i.imgur.com/4TmqOIi.jpeg' },
    { name: "Shoe laces", initialPrice: 50, totalDonations: 10, activeStatus: true, orgID: 'Windy', img:  'https://i.imgur.com/Cwtpkj4.jpeg'},
  ]


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
      // console.log('The dialog was closed');
      this.http
        .post(
          'https://dip-challenge.azurewebsites.net/organisation',
          JSON.parse(JSON.stringify(result))
        )
        .subscribe((response) => {
          this.getOrgs();
        });
    });
  }

  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;;
  @ViewChild(MatSort) sort: MatSort;

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
          (this.orgData = resp)
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
          this.cleanOrgData = new MatTableDataSource(this.cleanOrgData);
          this.cleanOrgData.paginator = this.paginator;
          this.cleanOrgData.sort = this.sort;
        },
      });
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.cleanOrgData.filter = filterValue.trim().toLowerCase();

    if (this.cleanOrgData.paginator) {
      this.cleanOrgData.paginator.firstPage();
    }
  }

  selectRow(cleanOrgData) {
    if (this.selectedRowIndex === cleanOrgData.name) {
      this.selectedRowIndex = '';
      this.activeItems = [];
      return;
    }
    this.selectedRowIndex = cleanOrgData.name;
    this.activeItems = this.items.filter((item) => {
      return item.orgID === cleanOrgData.name;
    });
    // console.log(this.activeItems);
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

