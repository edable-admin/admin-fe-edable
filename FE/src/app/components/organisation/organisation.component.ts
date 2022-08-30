import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AddOrganisationDialog } from './add-organisation/add-organisation-dialog';
import { EditOrganisationDialog } from './edit-organisation/edit-organisation-dialog';
import { RemoveOrganisationDialog } from './remove-organisation/remove-organisation-dialog';
import { Item } from 'src/app/models/Item';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss'],
})
export class OrganisationComponent {
  passedvalues: JSON | undefined;
  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  summary: string | undefined;
  activeStatus: boolean = true;
  ABN: string | undefined;
  phone: string | undefined;
  website: string | undefined;
  img: string = '';
  file: any;
  totalDonationItems: number;
  totalDonations: number;
  displayedColumns: string[] = ['name', 'activeItems', 'donations'];
  selectedRowIndex = '';
  selectedOrgName = '';
  selectedOrgSummary = '';
  selectedOrgDescription = '';
  selectedOrgActiveStatus = null;
  selectedOrgABN = '';
  selectedOrgPhone = '';
  selectedOrgWebsite = '';
  selectedOrgImg = '';
  selectedOrgTotalDonationItems = '';
  selectedOrgTotalDonations = '';
  activeItems: Item[];
  orgData: any;
  cleanOrgData: any;
  selectedOrgData: any;
  items: Item[] = [];

  activeStatusToggle:boolean = true;

  getOrgsSubscription: Subscription;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    public http: HttpClient,
    public storage: AngularFireStorage,
    public fs:FirebaseService
  ) { }

  ngOnDestroy(): void {
    this.getOrgsSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getOrgs();
  }

  addOrgDialog(): void {
    const dialogRef = this.dialog.open(AddOrganisationDialog, {
      width: '730px',
      data: {
        name: this.name,
        summary: this.summary,
        description: this.description,
        activeStatus: this.activeStatus,
        ABN: this.ABN,
        phone: this.phone,
        website: this.website,
        img: this.img,
        file: this.file,
        totalDonationItems: this.totalDonationItems,
        totalDonations: this.totalDonations,
      },
    });

    dialogRef.afterClosed().subscribe(async (result: any) => {
      //----------------------------- Create an Org --------------------------//
      if (result) {
        console.log(result)
        this.fs.addOrganisation(result)
      }
    });
  }

  editOrgDialog(): void {
    const dialogRef = this.dialog.open(EditOrganisationDialog, {
      width: '730px',
      data: {
        id: this.selectedRowIndex,
        name: this.selectedOrgName,
        summary: this.selectedOrgSummary,
        description: this.selectedOrgDescription,
        activeStatus: this.selectedOrgActiveStatus,
        ABN: this.selectedOrgABN,
        phone: this.selectedOrgPhone,
        website: this.selectedOrgWebsite,
        img: this.img,
        totalDonationItems: this.selectedOrgTotalDonationItems,
        totalDonations: this.selectedOrgTotalDonations,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {

        const orgReq: Organisation = {
          description: result.description ? result.description : "",
          name: result.name ? result.name : "",
          phone: result.phone ? result.phone : "",
          summary: result.summary ? result.summary : "",
          website: result.website ? result.website : "",
          img: result.img ? result.imgs : "",
          totalDonationItems: result.totalDonationItems ? result.totalDonationItems : 0,
          totalDonations:result.totalDonations ? result.totalDonations : 0,
          activeStatus:true
        }

        console.log(orgReq)

        this.fs.editOrganisation(this.selectedRowIndex, orgReq)
          .then((resp) => {

            this.selectedOrgName = resp.name;
            this.selectedOrgSummary = resp.summary;
            this.selectedOrgDescription = resp.description;
            this.selectedOrgActiveStatus = resp.activeStatus;
            this.selectedOrgABN = resp.ABN;
            this.selectedOrgPhone = resp.phone;
            this.selectedOrgWebsite = resp.website;
            this.selectedOrgImg = resp.img;

            if (result?.file) {
              this.fs.uploadImage(this.selectedRowIndex,result.file)
            }
        })
      }
    });
  }

  removeOrgDialog(): void {
    const dialogRef = this.dialog.open(RemoveOrganisationDialog, {
      width: '730px',
      data: {
        id: this.selectedRowIndex,
        name: this.selectedOrgName,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {

      if (result === true) {

        this.fs.removeOrganisation(this.selectedRowIndex)
      }
    });
  }

  toggleActiveStatus(){
    this.activeStatusToggle = !this.activeStatusToggle;
    this.getOrgsSubscription.unsubscribe()
    this.getOrgsSubscription = this.fs.getOrgs(this.activeStatusToggle)
    .subscribe(
      orgs => {
        this.orgData = new MatTableDataSource(orgs);
        this.orgData.paginator = this.paginator;
        this.orgData.sort = this.sort;
    })
    
  }

  getOrgs() {
    this.getOrgsSubscription = this.fs.getOrgs(this.activeStatusToggle)
      .subscribe(orgs => {
            this.orgData = new MatTableDataSource(orgs);
            this.orgData.paginator = this.paginator;
            this.orgData.sort = this.sort;
    })
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
      this.selectedOrgImg = '';
      this.activeItems = [];
      return;
    }
    this.selectedRowIndex = orgData.id;
    this.selectedOrgName = orgData.name;
    this.selectedOrgSummary = orgData.summary;
    this.selectedOrgDescription = orgData.description;
    this.selectedOrgActiveStatus = orgData.activeStatus;
    this.selectedOrgABN = orgData.ABN;
    this.selectedOrgPhone = orgData.phone;
    this.selectedOrgWebsite = orgData.website;
    this.selectedOrgImg = orgData.img;
    this.selectedOrgTotalDonationItems = orgData.totalDonationItems;
    this.selectedOrgTotalDonations = orgData.totalDonations;
    this.activeItems = this.items.filter((item) => {
      return item.orgID === orgData.id;
    });
  }
}
