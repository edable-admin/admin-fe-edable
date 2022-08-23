import { HttpClient } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFireStorage } from '@angular/fire/compat/storage';


export interface DialogData {
  id: string | undefined;
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

    //---------- Function to get image from image dialogBox --------------//
    getImageFromChild(file:any){
      this.data.img = file;
    }
    //-------------------------------------------------------------------//

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'organisation-edit-dialog.component',
  templateUrl: 'organisation-edit-dialog.component.html',
  styleUrls: ['./organisation.component.scss'],
})
export class EditOrganisationDialog {

  constructor(
    public dialogRef: MatDialogRef<EditOrganisationDialog>,
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
  id : string | undefined;
  name: string | undefined;
  description: string | undefined;
  summary: string | undefined;
  activeStatus: boolean = true;
  ABN: string | undefined;
  phone: string | undefined;
  website: string | undefined;
  img: string = 'INSERT Image URL';
  totalDonationItems: number;
  totalDonations: number;
  displayedColumns: string[] = ['name', 'activeItems', 'donations'];
  selectedRowIndex = '';
  selectedOrgName='';
  selectedOrgSummary = '';
  selectedOrgDescription='';
  selectedOrgActiveStatus='';
  selectedOrgABN='';
  selectedOrgPhone='';
  selectedOrgWebsite='';
  selectedOrgImg='';
  selectedOrgTotalDonationItems='';
  selectedOrgTotalDonations='';
  activeItems: Item[];
  orgData: any;
  cleanOrgData: any;
  selectedOrgData: any;




  items: Item[] = [
    { name: "Shovel", initialPrice: 50, totalDonations: 10, activeStatus: true, orgID: 'Q1bCdql930HAUejaTStk', img: 'https://i.imgur.com/ioUzxDC.jpeg'},
    { name: "Hose", initialPrice: 60, totalDonations: 5, activeStatus: true, orgID: 'Q1bCdql930HAUejaTStk', img: 'https://i.imgur.com/PFuUHCi.jpeg'},
    { name: "Shovel", initialPrice: 50, totalDonations: 10, activeStatus: true, orgID: 'Q1bCdql930HAUejaTStk', img: 'https://i.imgur.com/ioUzxDC.jpeg'},
    { name: "Hose", initialPrice: 60, totalDonations: 5, activeStatus: true, orgID: 'Q1bCdql930HAUejaTStk', img: 'https://i.imgur.com/PFuUHCi.jpeg'},
    { name: "Shovel", initialPrice: 50, totalDonations: 10, activeStatus: true, orgID: 'Q1bCdql930HAUejaTStk', img: 'https://i.imgur.com/ioUzxDC.jpeg'},
    { name: "Hose", initialPrice: 60, totalDonations: 5, activeStatus: true, orgID: 'Q1bCdql930HAUejaTStk', img: 'https://i.imgur.com/PFuUHCi.jpeg'},
    { name: "Oven", initialPrice: 800, totalDonations: 100, activeStatus: true, orgID: 'Q1bCdql930HAUejaTStk', img:  'https://i.imgur.com/IJ3ehgi.jpeg'},
    { name: "Mixer", initialPrice: 300, totalDonations: 60, activeStatus: true, orgID: 'Q1bCdql930HAUejaTStk', img:  'https://i.imgur.com/BTV0RRM.png'},
    { name: "Polish", initialPrice: 40, totalDonations: 8, activeStatus: true, orgID: 'Q1bCdql930HAUejaTStk', img: 'https://i.imgur.com/4TmqOIi.jpeg' },
    { name: "Shoe laces", initialPrice: 50, totalDonations: 10, activeStatus: true, orgID: 'Q1bCdql930HAUejaTStk', img:  'https://i.imgur.com/Cwtpkj4.jpeg'},
  ]


  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    private storage: AngularFireStorage,
    public http: HttpClient,
  ) {}

  addOrgDialog(): void {
    const dialogRef = this.dialog.open(AddOrganisationDialog, {
      width: '400px',
      maxHeight:'100vh',
      data: {
        name: this.name,
        summary: this.summary,
        description: this.description,
        activeStatus: this.activeStatus,
        ABN: this.ABN,
        phone: this.phone,
        website: this.website,
        img: this.img,
        totalDonationItems: 0,
        totalDonations: 0,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      
      this.http
        .post(
          'https://dip-challenge.azurewebsites.net/organisation',
          JSON.parse(JSON.stringify(result))
        )
        .subscribe((response:any) => {

//--------------- Uploads new org image to org --------------------//
          console.log(response)
          const docRef = response._path.segments[1];
          const collectionRef = response._path.segments[0];
          const image = result.img[0]
          this.storage.upload(`${collectionRef}/${docRef}/orgLogo`,image)
//-----------------------------------------------------------------//

          this.getOrgs();
        });
    });
  }

  editOrgDialog(): void {
    const dialogRef = this.dialog.open(EditOrganisationDialog, {
      width: '400px',
      maxHeight:'100vh',
      data: {
        id: this.selectedRowIndex,
        name: this.selectedOrgName,
        summary: this.selectedOrgSummary,
        description: this.selectedOrgDescription,
        activeStatus: this.selectedOrgActiveStatus,
        ABN: this.selectedOrgABN,
        phone: this.selectedOrgPhone,
        website: this.selectedOrgWebsite,
        img: this.selectedOrgImg,
        totalDonationItems: this.selectedOrgTotalDonationItems,
        totalDonations: this.selectedOrgTotalDonations,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.http
        .put(
          `https://dip-challenge.azurewebsites.net/organisation/${this.selectedRowIndex}`,
          JSON.parse(JSON.stringify(result))
        )
        .subscribe((response) => {
          this.getOrgs();
          this.selectedOrgName = result.name;
          this.selectedOrgSummary = result.summary;
          this.selectedOrgDescription = result.description;
          this.selectedOrgActiveStatus = result.activeStatus;
          this.selectedOrgABN = result.ABN;
          this.selectedOrgPhone = result.phone;
          this.selectedOrgWebsite = result.website;
          this.selectedOrgImg = result.img;
          this.selectedOrgTotalDonationItems = result.activeItems;
          this.selectedOrgTotalDonations = result.donations;
        });
    });
  }

  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getOrgs();
  }

      getOrgs(){
        this.http.get<any>('https://dip-challenge.azurewebsites.net/organisation/dashboard').subscribe(
          response => {
            console.log(response);
            this.orgData = response.map((item: any) => {
              let org = {
              id: item.id,
              name: item.org.name,
              activeItems: item.org.totalDonationItems,
              donations: item.org.totalDonations,
              summary: item.org.summary,
              description: item.org.description,
              activeStatus: item.org.activeStatus,
              ABN:item.org.ABN,
              phone: item.org.phone,
              website: item.org.website,
              img: item.org.img,
              totalDonationItems: item.org.totalDonationItems,
              totalDonations: item.org.totalDonations,
              };
              return org;
            }
            )
          this.orgData = new MatTableDataSource(this.orgData);
          this.orgData.paginator = this.paginator;
          this.orgData.sort = this.sort;
        });
        }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.orgData.filter = filterValue.trim().toLowerCase();

    if (this.orgData.paginator) {
      this.orgData.paginator.firstPage();
    }
  }

  selectRow(orgData) {
    if (this.selectedRowIndex === orgData.id) {
      this.selectedRowIndex = '';
      this.activeItems = [];
      return;
    }
    this.selectedRowIndex = orgData.id;
    this.selectedOrgName=orgData.name;
    this.selectedOrgSummary = orgData.summary;
    this.selectedOrgDescription=orgData.description;
    this.selectedOrgActiveStatus=orgData.activeStatus;
    this.selectedOrgABN=orgData.ABN;
    this.selectedOrgPhone=orgData.phone;
    this.selectedOrgWebsite=orgData.website;
    this.selectedOrgImg=orgData.img;
    this.selectedOrgTotalDonationItems=orgData.activeItems;
    this.selectedOrgTotalDonations=orgData.donations;
    this.activeItems = this.items.filter((item) => {
      return item.orgID === orgData.id;
    });
  }
}
export interface Item {
  name: string;
  initialPrice: number;
  totalDonations: number;
  activeStatus: boolean;
  orgID: string;
  img: string;
}
