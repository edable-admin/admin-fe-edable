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
import { ItemService } from 'src/app/services/firebase/item.service'
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddDonationItemComponent } from '../donation-item/add-donation-item/add-donation-item.component';
import { RemoveDonationItemComponent } from '../donation-item/remove-donation-item/remove-donation-item.component';
import { UpdateItemsComponent } from '../donation-item/update-donation-item/update-donation-item.component';
import { serverTimestamp } from 'firebase/firestore';


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
  donationItemName: string | undefined;
  donationItemSummary: boolean = true;
  donationItemDescription: string | undefined;
  donationItemInitialPrice: number | undefined;
  donationItemImage: string | undefined;
  donationItemOrganisationID: string | undefined;
  donationItemID: string | undefined;
  displayedColumns: string[] = ['name', 'totalDonationItems', 'totalDonations'];
  selectedOrg: Organisation;
  activeItems: Item[];
  orgData: any;
  cleanOrgData: any;
  selectedOrgData: any;
  items: Item[] = [];

  activeStatusToggle: boolean = true;

  getOrgsSubscription: Subscription;

  getItemsSubscription: Subscription;

  //snackbar variables
  message: string;


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    public http: HttpClient,
    public storage: AngularFireStorage,
    public fs: FirebaseService,
    public _snackBar: MatSnackBar,
    public ifs: ItemService

  ) { }

  ngOnDestroy(): void {
    this.getOrgsSubscription.unsubscribe();
    this.getItemsSubscription.unsubscribe();

  }

  ngOnInit(): void {
    //this.ifs.addItem('4H9O58oiEH0D88AXZEUF',{name:"hi",activeStatus:false,description:"hi",summary:"hi",initialPrice:20,createdAt:serverTimestamp(), img:"",totalDonations:0, dateCompleted:null})
    this.getOrgs();
    this.initSelectedOrg();

  }

  initSelectedOrg() {
    this.selectedOrg = {
      id: '',
      ABN: '',
      activeStatus: true,
      description: '',
      img: '',
      name: '',
      phone: '',
      summary: '',
      totalDonationItems: 0,
      totalDonations: 0,
      website: ''
    }
  }


  //add form validation
  addDonationItemDialog(): void {
    const dialogRef = this.dialog.open(AddDonationItemComponent, {
      width: '730px',
      data: {
        id: this.selectedOrg.id,
        file:this.file
      },
    });

    dialogRef.afterClosed().subscribe(async (result: any) => {

      if (result) {

        this.fs.uploadImage(this.selectedOrg.id,result.file,result.itemRef)

        //   this.fs.addDonationItem(result).then ((response) => {
        //     this.openSnackBar(response.message)
        // })
      }
    });
  }

  removeDonationItemDialog(itemID: string, itemName : string): void {
    const dialogRef = this.dialog.open(RemoveDonationItemComponent, {
      width: '730px',
      data: {
        itemID: itemID,
        id: this.selectedOrg.id,
        itemName: itemName,
      },
    });

    dialogRef.afterClosed().subscribe(async (result: any) => {
      //----------------------------- Remove a Donation Item --------------------------//
      // if (result === true) {

      //   this.fs.removeDonationItem(this.selectedOrg.id).then((response) => {
      //     this.openSnackBar(response.message)
      //   })
      // }
    });
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
        this.fs.addOrganisation(result).then((response) => {
          this.openSnackBar(response.message)
        })
      }
    });
  }

  // Open dialog box to edit organisations
  editOrgDialog(): void {
    const dialogRef = this.dialog.open(EditOrganisationDialog, {
      width: '730px',
      data: {
        id: this.selectedOrg.id,
        name: this.selectedOrg.name,
        summary: this.selectedOrg.summary,
        description: this.selectedOrg.description,
        activeStatus: this.selectedOrg.activeStatus,
        ABN: this.selectedOrg.ABN,
        phone: this.selectedOrg.phone,
        website: this.selectedOrg.website,
        img: this.selectedOrg.img,
        totalDonationItems: this.selectedOrg.totalDonationItems,
        totalDonations: this.selectedOrg.totalDonations,
      },
    });

    // runs after dialog closes. updates org
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {

        const orgReq: Organisation = {
          id: result.id,
          ABN: result.ABN,
          description: result.description ? result.description : "",
          name: result.name ? result.name : "",
          phone: result.phone ? result.phone : "",
          summary: result.summary ? result.summary : "",
          website: result.website ? result.website : "",
          img: result.img ? result.img : "",
          totalDonationItems: result.totalDonationItems ? result.totalDonationItems : 0,
          totalDonations: result.totalDonations ? result.totalDonations : 0,
          activeStatus: result.activeStatus
        }

        this.fs.editOrganisation(this.selectedOrg.id, orgReq)
          .then((resp) => {
            this.selectedOrg = resp
            this.openSnackBar(resp.name + " Edited Successfully")

            if (result?.file) {
              this.fs.uploadImage(this.selectedOrg.id, result.file)
            }
          })
      }
    });
  }

  removeOrgDialog(): void {
    const dialogRef = this.dialog.open(RemoveOrganisationDialog, {
      width: '730px',
      data: {
        id: this.selectedOrg.id,
        name: this.selectedOrg.name,
        totalDonationItems: this.selectedOrg.totalDonationItems,
        totalDonations: this.selectedOrg.totalDonations
      },
    });

    dialogRef.afterClosed().subscribe((result) => {

      if (result === true) {

        this.fs.removeOrganisation(this.selectedOrg.id).then((response) => {
          this.openSnackBar(response.message)
        })
      }
    });
  }

  toggleActiveStatus() {
    this.initSelectedOrg();
    this.activeStatusToggle = !this.activeStatusToggle;
    this.getOrgsSubscription.unsubscribe()
    this.getItemsSubscription.unsubscribe()
    this.getOrgsSubscription = this.fs.getOrgs(this.activeStatusToggle)
      .subscribe(
        orgs => {
          this.orgData = new MatTableDataSource(orgs);
          this.orgData.paginator = this.paginator;
          this.orgData.sort = this.sort;
          this.orgData.filterPredicate = function (data, filter: string): boolean {
            return data.name.trim().toLowerCase().includes(filter) ||
              data.totalDonations.toString().trim().toLowerCase().includes(filter) ||
              data.totalDonationItems.toString().trim().toLowerCase().includes(filter);
          };
        })

  }

  // Function to update item called in the dialog component 
  openItemUpdateDialog(item: Item): void{
  const dialogRef = this.dialog.open(UpdateItemsComponent, {
    maxWidth: '90vw',
    width:'500px',
    height:'fit-content',
    maxHeight:'90vh',
    data: {
      item:item,org:this.selectedOrg.id
    }
  });

  dialogRef.afterClosed().subscribe((res) => {
  })
}

  getOrgs() {

    this.getOrgsSubscription = this.fs.getOrgs(this.activeStatusToggle)
      .subscribe(orgs => {
        this.orgData = new MatTableDataSource(orgs);
        this.orgData.paginator = this.paginator;
        this.orgData.sort = this.sort;
        this.orgData.filterPredicate = function (data, filter: string): boolean {
          return data.name.trim().toLowerCase().includes(filter) ||
            data.totalDonations.toString().trim().toLowerCase().includes(filter) ||
            data.totalDonationItems.toString().trim().toLowerCase().includes(filter);
        };
      })
  }

  //-------------------- GET ITEMS --------------------\\
  getItems(orgID) {
    this.getItemsSubscription = this.ifs.getItems(orgID)
      .subscribe(items => {
        this.items = items as Item[]
      })
  }

  //-------------------- GET ITEMS --------------------\\
  applyFilter(event: Event) {
    this.initSelectedOrg();
    const filterValue = (event.target as HTMLInputElement).value;
    this.orgData.filter = filterValue.trim().toLowerCase();

    if (this.orgData.paginator) {
      this.orgData.paginator.firstPage();
    }
  }

  // selected row of org table
  selectRow(orgData) {

    if (this.selectedOrg.id === orgData.id) {
      this.initSelectedOrg();
      this.getItemsSubscription.unsubscribe()

      return;
    }
    this.selectedOrg = orgData;
    this.activeItems = this.items.filter((item) => {
      return item.orgID === orgData.id;
    });

    this.getItems(this.selectedOrg.id);
  }

  //Snackbar
  openSnackBar(message) {
    this._snackBar.open(message);
  }
}
