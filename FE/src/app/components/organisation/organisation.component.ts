import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
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
import { ItemService } from 'src/app/services/firebase/item-service/item.service';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddDonationItemComponent } from '../donation-item/add-donation-item/add-donation-item.component';
import { RemoveDonationItemComponent } from '../donation-item/remove-donation-item/remove-donation-item.component';
import { UpdateItemsComponent } from '../donation-item/update-donation-item/update-donation-item.component';
import { OrganisationService } from 'src/app/services/firebase/organisation-service/organisation.service';
import { ImageService } from 'src/app/services/firebase/image-service/image.service';
import { ViewDonationItemComponent } from '../donation-item/view-donation-item/view-donation-item.component';
import { DonationService } from 'src/app/services/firebase/donation-service/donation.service';
import { Chart, registerables } from 'chart.js';
import { InfographicsService } from 'src/app/services/infographics/infographics.service';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss'],
})
export class OrganisationComponent implements OnInit {
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
  displayedColumns: string[] = ['name', 'totalDonationItems', 'totalDonationsValue'];
  selectedOrg: Organisation;
  activeItems: Item[];
  orgData: any = new MatTableDataSource([]);
  allOrgs: Organisation[] = []
  items: Item[] = [];
  graphData: any;
  cleanGraphData: any;
  chartData: any = [0];
  chartLabel: any = [0];
  chart: any = [];
  mobileChart: any = [];
  testdata: any;
  // donor: any;
  activeStatusFilter: string = 'Active';
  filterValue: string = "";
  configLine: any;
  configPie: any;
  configBar: any;
  configPolar: any;
  colors: any;
  chartType = 'pie';

  activeStatusToggle: boolean = true;

  getOrgsSubscription: Subscription;

  getItemsSubscription: Subscription;

  //snackbar variables
  message: string;

  allOrgsGeneralDonationData:GeneralDonations[];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    public http: HttpClient,
    public storage: AngularFireStorage,
    public ofs: OrganisationService,
    public _snackBar: MatSnackBar,
    public ifs: ItemService,
    public imgService: ImageService,
    public dfs: DonationService,
    public infoGraphSer: InfographicsService,
    public ts: TransactionService
  ) { Chart.register(...registerables) }

  ngOnDestroy(): void {
    // check if there is a selected org base on id value being '' when null org
    if (this.selectedOrg.id != '') {
      this.getOrgsSubscription.unsubscribe();
      this.getItemsSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.getOrgs();
    //this.getGeneralGraphData();
    this.getOrgsGeneralDonationData();
    this.initSelectedOrg();
    //TODO: INSERT GET GRAPH DATA HERE
    // this.colors = this.chartData.map((item, i) => this.selectColor(i));
    // this.configLine = {
    //   type: 'line',
    //   data: {
    //     labels: this.chartLabel,
    //     datasets: [{
    //       label: 'Donation Amount',
    //       backgroundColor: this.colors,
    //       borderColor: '#3e95cd',
    //       fill: true,
    //       data: this.chartData,
    //     }]
    //   },
    //   options: {
    //     maintainAspectRatio: false,
    //     responsive: true,
    //     plugins: {
    //       title: {
    //         display: true,
    //         text: 'General Donations Overview',
    //         padding: {
    //           top: 10,
    //           bottom: 0
    //         },
    //       },
    //     },
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //         title: {
    //           display: true,
    //           text: 'Donation Amount [$]'
    //         }
    //       },
    //       x: {
    //         ticks: {
    //           autoSkip: false
    //         },
    //         title: {
    //           display: true,
    //           text: 'Date [MM/YYYY]',
    //         }
    //       }
    //     },
    //   }
    // };
    // this.configPie = {
    //   type: 'pie',
    //   data: {
    //     labels: this.chartLabel,
    //     datasets: [{
    //       label: 'Donation Amount',
    //       hoverOffset: 5,
    //       data: this.chartData,
    //       backgroundColor: this.colors,
    //     }]
    //   },
    //   plugins: [ChartDataLabels],
    //   options: {
    //     maintainAspectRatio: false,
    //     responsive: true,
    //     layout: {
    //       padding: 10,
    //     },
    //     plugins: {
    //       tooltips: {
    //         enabled: false
    //       },
    //       datalabels: {
    //         formatter: (value, context) => {
    //           const name = context.chart.data.labels[context.dataIndex];
    //           return [`${name}`];
    //         },
    //       },
    //       title: {
    //         display: true,
    //         text: 'General Donations Overview',
    //         padding: {
    //           top: 10,
    //           bottom: 0
    //         }
    //       }
    //     },
    //   }
    // };
    // this.configBar = {
    //   type: 'bar',
    //   data: {
    //     labels: this.chartLabel,
    //     datasets: [{
    //       label: 'Donation Amount',
    //       data: this.chartData,
    //       backgroundColor: this.colors,
    //     }]
    //   },
    //   plugins: [ChartDataLabels],
    //   options: {
    //     maintainAspectRatio: false,
    //     responsive: true,
    //     layout: {
    //       padding: 10,
    //     },
    //     plugins: {
    //       tooltips: {
    //         enabled: false
    //       },
    //       datalabels: {
    //         formatter: (value, context) => {
    //           const name = context.chart.data.labels[context.dataIndex];
    //           return [`${name}`];
    //         },
    //       },
    //       title: {
    //         display: true,
    //         text: 'General Donations Overview',
    //         padding: {
    //           top: 10,
    //           bottom: 0
    //         }
    //       }
    //     },
    //   }
    // };

    // this.configPolar = {
    //   type: 'polarArea',
    //   data: {
    //     labels: this.chartLabel,
    //     datasets: [{
    //       label: 'Donation Amount',
    //       hoverOffset: 5,
    //       data: this.chartData,
    //       backgroundColor: this.colors,
    //     }]
    //   },
    //   options: {
    //     maintainAspectRatio: false,
    //     responsive: true,
    //     layout: {
    //       padding: 10,
    //     },
    //     plugins: {
    //       tooltips: {
    //         enabled: false
    //       },
    //       title: {
    //         display: true,
    //         text: 'General Donations Overview',
    //         padding: {
    //           top: 10,
    //           bottom: 0
    //         }
    //       }
    //     },
    //   }
    // };

    // this.chart = new Chart('canvas', this.configPie);
    // this.mobileChart = new Chart('mobile', this.configPie);
  }

  // changeChart(){
  //   if(this.chartType==='pie'){
  //     this.pieGraphs();
  //   }

  //   if(this.chartType==='line'){
  //     this.lineGraphs();
  //   }

  //   if(this.chartType==='bar'){
  //     this.barGraphs();
  //   }

  //   if(this.chartType==='polar'){
  //     this.polarGraphs();
  //   }
  // }

  onImgError(event) {
    event.target.src =
      'https://freepikpsd.com/file/2019/10/placeholder-image-png-5-Transparent-Images.png';
  }

  initSelectedOrg() {
    this.items = [];
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
      website: '',
    };
  }

  selectColor(number) {
    const hue = number * 137.508;
    return `hsl(${hue},50%,75%)`;
  }

  //add form validation
  addDonationItemDialog(): void {
    const dialogRef = this.dialog.open(AddDonationItemComponent, {
      width: '730px',
      data: {
        id: this.selectedOrg.id,
        file: this.file,
      },
    });

    dialogRef.afterClosed().subscribe(async (result: any) => {
      if (result?.file) {
        this.imgService.uploadImage(
          this.selectedOrg.id,
          result.file,
          result.itemRef
        );

        //   this.ofs.addDonationItem(result).then ((response) => {
        //     this.openSnackBar(response.message)
        // })
      }
    });
  }

  removeDonationItemDialog(itemID: string, itemName: string): void {
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
      if (result?.isDeleted === true) {
        this.storage
          .ref(
            `Organisations/${this.selectedOrg.id}/Items/${result.itemID}/itemImg`
          )
          .delete();

        this.openSnackBar(itemName + ' successfully deleted');
      }
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

        this.ofs.addOrganisation(result).then((response) => {
          this.openSnackBar(response.message);
        });
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
          description: result.description ? result.description : '',
          name: result.name ? result.name : '',
          phone: result.phone ? result.phone : '',
          summary: result.summary ? result.summary : '',
          website: result.website ? result.website : '',
          img: result.img ? result.img : '',
          activeStatus: result.activeStatus,
        };



        this.ofs.editOrganisation(this.selectedOrg.id, orgReq).then((resp) => {
          this.openSnackBar(resp.name + ' Edited Successfully');

          if (result?.file) {
            this.imgService
              .uploadImage(this.selectedOrg.id, result.file)
          }
          this.initSelectedOrg();
        });


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
        totalDonations: this.selectedOrg.totalDonations,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.ofs.removeOrganisation(this.selectedOrg.id).then((response) => {
          this.initSelectedOrg();
          this.openSnackBar(response.message);
        });
      }
    });
  }

  // Function to update item called in the dialog component
  openItemUpdateDialog(item: Item): void {
    const dialogRef = this.dialog.open(UpdateItemsComponent, {
      maxWidth: '90vw',
      width: '500px',
      height: 'fit-content',
      maxHeight: '90vh',
      data: {
        item: item,
        org: this.selectedOrg.id,
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res?.file) {
        this.imgService.uploadImage(this.selectedOrg.id, res.file, res.item.id);
      }
    });
  }

  openViewItemDialog(itemObject: Item) {
    const dialogRef = this.dialog.open(ViewDonationItemComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      height: 'fit-content',
      width: 'max-content',
      data: {
        ...itemObject,
        orgID: this.selectedOrg.id
      }
    });

    // dialogRef.afterClosed().subscribe(() => {
    // });
  }

  getOrgs() {
    this.getOrgsSubscription = this.ofs
      .getOrgs()
      .subscribe((orgs) => {
        //this.infoGraphSer.calculateCombinedTotalsAllOrgs(orgs as Organisation[])
        this.allOrgs = orgs as Organisation[];
        this.orgData = new MatTableDataSource(orgs);
        this.orgData.sort = this.sort;
        this.orgData.paginator = this.paginator;
        this.orgData.filterPredicate =
          (data, filter: string): boolean => {
            return (
              data.activeStatus === this.activeStatus &&
              data.name.trim().toLowerCase().includes(filter) ||
              data.totalDonations
                .toString()
                .trim()
                .toLowerCase()
                .includes(filter) ||
              data.totalDonationItems
                .toString()
                .trim()
                .toLowerCase()
                .includes(filter)
            );
          };
        this.toggleActiveStatus(this.activeStatusFilter)
      });
  };

  getOrgsGeneralDonationData(){
    this.dfs
      .getAllGD()
      .subscribe((resp) => {
        this.allOrgsGeneralDonationData = resp.map((donation: any) => donation);
      });
  }

  // getGeneralGraphData() {
  //   this.dfs
  //     .getAllGD()
  //     .subscribe((resp) => {
  //       this.chartData = resp.map((donation: any) => donation.totalGeneralDonationsValue);
  //       this.chartLabel = resp.map((donation: any) => donation.name);
  //       this.updateColors();
  //       this.updateCharts();
  //     });
  // };

  //-------------------- GET ITEMS --------------------\\
  getItems(orgID) {
    this.getItemsSubscription = this.ifs.getItems(orgID).subscribe((items) => {
      this.items = items as Item[];
    });
  }

  // change active status filter (active/inactive/all)

  toggleActiveStatus(activeStatusFilter: string) {

    // this.resetGraphData();


    if (this.activeStatusFilter !== activeStatusFilter) {
      this.initSelectedOrg();
    }

    let filteredOrgs: Organisation[] = [];

    switch (activeStatusFilter) {
      case "Active":
        // this.getGeneralGraphData();
        filteredOrgs =
          this.allOrgs.filter(org => org.activeStatus === true);
        this.activeStatusFilter = "Active";
        break;
      case 'Inactive':
        // this.getGeneralGraphData();
        filteredOrgs =
          this.allOrgs.filter(org => org.activeStatus === false);
        this.activeStatusFilter = "Inactive";
        break;
      case 'All':
        // this.getGeneralGraphData();
        filteredOrgs =
          this.allOrgs.filter(org => org.activeStatus === true || org.activeStatus === false);
        this.activeStatusFilter = "All";
        break;
      default:
        break;
    }

    this.orgData = new MatTableDataSource(filteredOrgs);
    this.orgData.paginator = this.paginator;
    this.orgData.sort = this.sort;
    this.orgData.filter = this.filterValue;
  }

  //-------------------- GET ITEMS --------------------\\
  applyFilter(event: Event) {
    this.initSelectedOrg();
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim().toLowerCase();
    this.orgData.filter = this.filterValue;

    if (this.orgData.paginator) {
      this.orgData.paginator.firstPage();
    }
  }

  // selected row of org table

  selectRow(orgData) {
    if (this.selectedOrg.id === orgData.id) {
      // this.getGeneralGraphData();
      // this.resetGraphData();
      this.initSelectedOrg();
      this.getItemsSubscription.unsubscribe();
      return;
    }
    //this.getGraphData(orgData.id);
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

  //Org + Items Deselect on pgae change
  changePage(event) {
    this.initSelectedOrg();

  }
}
