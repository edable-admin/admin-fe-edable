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
  selectedOrgActiveStatus = '';
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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    public http: HttpClient,
    public storage: AngularFireStorage,
    public fs:FirebaseService
  ) { }

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

      const reqOrgBody: any = {
        name: result?.name,
        summary: result?.summary,
        description: result?.description,
        activeStatus: result?.activeStatus,
        ABN: result?.ABN,
        phone: result?.phone,
        website: result?.website,
        img: result?.img,
        file: result?.file,
        totalDonationItems: 0,
        totalDonations: 0,
      }
      //----------------------------- Create an Org --------------------------//
      if (result) {

        await this.fs.addOrganisation(result).then((resp) => {
          this.orgData = new MatTableDataSource(resp.orgs)
          this.orgData.paginator = this.paginator;
          this.orgData.sort = this.sort;
        })

        // this.http
        //   .post(
        //     'https://dip-challenge.azurewebsites.net/organisation',
        //     JSON.parse(JSON.stringify(reqOrgBody))
        //   )
        //   .subscribe({
        //     next: (createOrgResp: any) => {
        //       const image = typeof (result.file) != "undefined" ? result?.file[0] : undefined
        //       console.log(result.file);


        //       if (image) {
        //         //--------------- Uploads new org image to org --------------------//
        //         const docRef = createOrgResp._path.segments[1];
        //         const collectionRef = createOrgResp._path.segments[0];
        //         this.storage.upload(`${collectionRef}/${docRef}/orgLogo`, image)
        //           .then(
        //             (resp) => {
        //               //-------------------------- Update Image URL -----------------------//
        //               let imgRef = this.storage.ref(`Organisations/${docRef}/orgLogo`)

        //               imgRef.getDownloadURL()
        //                 .forEach(
        //                   (imgResp) => {

        //                     reqOrgBody.img = imgResp;

        //                     this.http
        //                       .put(
        //                         `https://dip-challenge.azurewebsites.net/organisation/${docRef}`,
        //                         reqOrgBody
        //                       ).subscribe({
        //                         error: (err) => console.log(err),
        //                         complete: () => { }
        //                       })

        //                   }
        //                 )
        //               //------------------------------------------------------------------//
        //             }
        //           ).then(() => {
        //             this.getOrgs();
        //           })

        //       } else {
        //         this.getOrgs();

        //       }

        //     }
        //   })
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
            this.selectedOrgTotalDonationItems = result.totalDonationItems;
            this.selectedOrgTotalDonations = result.totalDonations;
          });
      }

      const image = result?.file[0];

      if (image) {
        this.storage.upload(`Organisations/${this.selectedRowIndex}/orgLogo`, image)
          .then((resp) => {
            //-------------------------- Update Image URL -----------------------------------//
            let imgRef = this.storage.ref(`Organisations/${this.selectedRowIndex}/orgLogo`)

            let orgReqBody: any = {
              name: result.name,
              summary: result.summary,
              description: result.description,
              activeStatus: result.activeStatus,
              ABN: result.ABN,
              phone: result.phone,
              website: result.website,
              file: result.file,
              totalDonationItems: 0,
              totalDonations: 0,
            }

            imgRef.getDownloadURL()
              .forEach((imgResp) => {
                orgReqBody.img = imgResp;
              }).then(() => {

                this.http
                  .put(
                    `https://dip-challenge.azurewebsites.net/organisation/${this.selectedRowIndex}`,
                    orgReqBody
                  ).subscribe({
                    error: (err) => console.log(err),
                    complete: () => { }
                  })
              })
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

        this.fs
          .removeOrganisation(this.selectedRowIndex)
          //todo popup alert org cannot be deleted
          //todo popup alert org succesfully deleted
          .then(resp => {
            if (resp.orgs) {
              this.orgData = new MatTableDataSource(resp.orgs);
              this.orgData.paginator = this.paginator;
              this.orgData.sort = this.sort;
            }
        })
      }
    });
  }

  getOrgs() {
    this.http
      .get<any>(
        'https://dip-challenge.azurewebsites.net/organisation/dashboard'
      )
      .subscribe((response) => {
        this.orgData = response.map((item: any) => {
          let org = {
            id: item.id,
            name: item.org.name,
            activeItems: item.org.totalDonationItems,
            donations: item.org.totalDonations,
            summary: item.org.summary,
            description: item.org.description,
            activeStatus: item.org.activeStatus,
            ABN: item.org.ABN,
            phone: item.org.phone,
            website: item.org.website,
            img: item.org.img,
            totalDonationItems: item.org.totalDonationItems,
            totalDonations: item.org.totalDonations,
          };
          return org;
        });
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
    this.selectedOrgName = orgData.name;
    this.selectedOrgSummary = orgData.summary;
    this.selectedOrgDescription = orgData.description;
    this.selectedOrgActiveStatus = orgData.activeStatus;
    this.selectedOrgABN = orgData.ABN;
    this.selectedOrgPhone = orgData.phone;
    this.selectedOrgWebsite = orgData.website;
    this.selectedOrgImg = orgData.img;
    this.selectedOrgTotalDonationItems = orgData.activeItems;
    this.selectedOrgTotalDonations = orgData.donations;
    this.activeItems = this.items.filter((item) => {
      return item.orgID === orgData.id;
    });
  }
}
