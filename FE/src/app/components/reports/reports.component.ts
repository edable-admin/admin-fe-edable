import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { OrganisationService } from 'src/app/services/firebase/organisation-service/organisation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemService } from 'src/app/services/firebase/item-service/item.service';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Timestamp } from 'firebase/firestore';
import { WebdatarocksComponent } from 'ng-webdatarocks';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  displayedColumns: string[] = ["name"];
  fileName: string = "";
  pivotTableData: any;
  selectedOrg: Organisation;
  orgData: MatTableDataSource<Organisation>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('reportTable') reportTable: WebdatarocksComponent;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    private ofs: OrganisationService,
    private ifs: ItemService,
    private tfs: TransactionService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initSelectedOrg();
    this.getOrgs();
  }

  getOrgs() {
    this.ofs.getOrgs().subscribe(orgs => {
      this.pivotTableData = orgs as Organisation[];
      this.orgData = new MatTableDataSource(orgs as Organisation[]);
      this.orgData.paginator = this.paginator;
      this.orgData.sort = this.sort;
    });
  }

  //Customise the toolbar to change the filename when exporting reports
  customiseToolbar(toolbar) {
    const tabs = toolbar.getTabs();

    toolbar.getTabs = () => {
      const exportButton = tabs[3]
      const exportToHTML = exportButton.menu[1];
      const exportToExcel = exportButton.menu[2];
      const exportToPDF = exportButton.menu[3];

      exportToHTML.handler = () => {
        this.reportTable.webDataRocks
          .exportTo('html', {
            filename: this.fileName
          })
      };

      exportToExcel.handler = () => {
        this.reportTable.webDataRocks
          .exportTo('excel', {
            filename: this.fileName
          })
      };

      exportToPDF.handler = () => {
        this.reportTable.webDataRocks
          .exportTo('pdf', {
            filename: this.fileName
          })
      };

      return tabs
    }
  }

  setTableData(dataSource: any[], reportType: string, title: string, fileName: string) {

    if (dataSource.length <= 0 || dataSource === null || dataSource === undefined) {
      let message = ""
      switch (reportType) {
        case "Items":
          message = `${this.selectedOrg.name} has no donation items`;
          break;
        case "Donations":
          message = `${this.selectedOrg.name} has no general donations`;
          break;

        default:
          break;
      }
      this.clearTable();
      this.snackBar.open(message);
      return;
    }

    this.fileName = fileName;

    this.reportTable.webDataRocks.setReport({
      dataSource: {
        data: dataSource,
      },
      options: {
        grid: {
          title: title,
          type: "flat",
          showTotals: "on",
          showGrandTotals: "on"
        }
      }
    });
  }

  loadOrgItems() {
    if (this.selectedOrg.id === '') {
      this.snackBar.open("No organisation selected");
      return;
    }

    this.ifs.getItems(this.selectedOrg.id).subscribe((itemData) => {

      let orgItems = itemData as ItemGetModel[];

      const data: ItemCSVModel[] = orgItems.map((item: ItemGetModel) => {
        const newItem: ItemCSVModel = {
          Name: item.name,
          Created_At: item.createdAt.toDate().toLocaleDateString(),
          Initial_Price: item.initialPrice,
          Total_Donations_Value: item.totalDonationsValue,
          Amount_Remaining: Math.max(0, (item.initialPrice - item.totalDonationsValue)),
          Is_Funded: item.totalDonationsValue >= item.initialPrice,
          Date_Completed: item.dateCompleted?.toDate().toLocaleTimeString(),
          Active_Status: item.activeStatus
        }
        return newItem
      });
      this.setTableData(data, "Items", `${this.selectedOrg.name}'s Donation Items`, `${this.selectedOrg.name} Donation Item Report`);
      this.accordion.closeAll();
    });
  }

  loadGeneralDonations() {
    if (this.selectedOrg.id === '') {
      this.snackBar.open("No organisation selected");
      return;
    }

    this.tfs.getOrgGeneralDonations(this.selectedOrg.id).then((resp) => {

      let donations: GeneralDonations[] = [];

      resp.forEach((resp) => {
        donations.push(resp.data() as GeneralDonations);
      });

      const data: DonationCSVModel[] = donations.map((item) => {
        const newItem: DonationCSVModel = {
          Donation_Date: item.donationDate,
          Donor_Public_Name: item.donorPublicName,
          Comment: item.comment,
          Is_Subscribed: item.IsSubscribed,
          Is_Refunded: item.IsRefunded,
          Amount: item.amount
        }
        return newItem;
      });

      this.setTableData(data, "Donations", `${this.selectedOrg.name}'s General Donations`, `${this.selectedOrg.name} General Donation Report`);
      this.accordion.closeAll();
    });
  }

  clearTable() {
    this.accordion.closeAll();
    this.fileName = "";

    this.reportTable.webDataRocks.setReport({
      dataSource: {
        data: null,
      },
      options: {
        grid: {
          title: "",
          type: "flat",
          showTotals: "on",
          showGrandTotals: "on"
        }
      }
    });
  }

  selectRow(org) {
    if (this.selectedOrg.id === org.id) {
      this.initSelectedOrg();
      return;
    }

    this.selectedOrg = org;
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
      website: '',
    };
  }

  applyFilter(event: Event) {
    this.initSelectedOrg();
    const filterValue = (event.target as HTMLInputElement).value;
    this.orgData.filter = filterValue.trim().toLowerCase();

    if (this.orgData.paginator) {
      this.orgData.paginator.firstPage();
    }
  }

  onPivotReady(pivot: WebDataRocks.Pivot): void {
    console.log('[ready] WebdatarocksPivotModule', this.reportTable);
  }
}
interface ItemCSVModel {
  Name: string;
  Initial_Price: number;
  Total_Donations_Value: number;
  Amount_Remaining: number;
  Is_Funded: boolean;
  Active_Status: boolean;
  Created_At?: string;
  Date_Completed?: string;
}
interface ItemGetModel {
  summary: string;
  description: string;
  id?: string;
  name: string;
  initialPrice: number;
  totalDonationsValue: number;
  activeStatus: boolean;
  orgID: string;
  img: string;
  createdAt?: Timestamp;
  dateCompleted?: Timestamp;
}
interface DonationCSVModel {
  Donation_Date: Date,
  Amount: number,
  Donor_Public_Name: String,
  Comment: string,
  Is_Subscribed: boolean,
  Is_Refunded: boolean
}