import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { OrganisationService } from 'src/app/services/firebase/organisation-service/organisation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemService } from 'src/app/services/firebase/item-service/item.service';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';
import { Donation, GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { WebdatarocksComponent } from 'ng-webdatarocks';
import { MatAccordion } from '@angular/material/expansion';
import { DonationCSVModel, ItemCSVModel, ItemGetModel, ReferralCSVModel } from 'src/app/models/Reports';
import { DatePipe } from '@angular/common';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  displayedColumns: string[] = ["name"];
  fileName: string = "";
  pivotTableData: any;
  orgs: Organisation[];
  selectedOrg: Organisation;
  orgData: MatTableDataSource<Organisation>;
  referralCSVData: ReferralCSVModel[] = [];

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
    this.referralCSVData = [];
    this.initSelectedOrg();
    this.getOrgs();
  }

  getOrgs() {
    this.ofs.getOrgs().subscribe(orgs => {
      this.orgs = orgs as Organisation[];
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
      const exportButton = tabs[3];
      const exportToHTML = exportButton.menu[1];
      const exportToExcel = exportButton.menu[2];
      const exportToPDF = exportButton.menu[3];

      exportToHTML.handler = () => {
        this.reportTable.webDataRocks
          .exportTo('html', {
            filename: this.fileName
          });
      };

      exportToExcel.handler = () => {
        this.reportTable.webDataRocks
          .exportTo('excel', {
            filename: this.fileName
          });
      };

      exportToPDF.handler = () => {
        this.reportTable.webDataRocks
          .exportTo('pdf', {
            filename: this.fileName
          });
      };

      return tabs;
    }
  }

  setTableData(dataSource: any[], reportType: string, title: string, fileName: string) {

    //Display snackbar error message when no data is available
    if (dataSource.length <= 0 || dataSource === null || dataSource === undefined) {
      let message = "";
      switch (reportType) {
        case "Items":
          message = `${this.selectedOrg.name} has no donation items`;
          break;
        case "Donations":
          message = `${this.selectedOrg.name} has no general donations`;
          break;
        case "Referrals":
          message = `No donations`;
          break;

        default:
          break;
      }
      this.clearTable();
      this.snackBar.open(message);
      return;
    }

    this.fileName = fileName;

    //Set the data in the report table
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

    //Get the selected orgs items
    this.ifs.getItems(this.selectedOrg.id).subscribe((itemData) => {

      let orgItems = itemData as ItemGetModel[];

      //Map item data to CSV model
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
        return newItem;
      });

      //Assign data to table
      this.setTableData(data, "Items", `${this.selectedOrg.name}'s Donation Items`, `${this.selectedOrg.name} Donation Item Report`);
      this.accordion.closeAll();
    });
  }

  loadGeneralDonations() {
    if (this.selectedOrg.id === '') {
      this.snackBar.open("No organisation selected");
      return;
    }

    //Get the selectected orgs general donations
    this.tfs.getOrgGeneralDonations(this.selectedOrg.id).then((resp) => {

      let donations: Donation[] = [];

      resp.forEach((resp) => {
        donations.push(resp.data() as Donation);
      });
      console.log("donations");
      
      console.table(donations);
      
      //Map data to CSV model
      const data: DonationCSVModel[] = donations.map((item) => {
        
        const newItem: DonationCSVModel = {
          Donation_Date: item.donationDate.toDate().toLocaleDateString(),
          Donor_Public_Name: item.donorPublicName.toString(),
          Comment: item.comment,
          Is_Subscribed: item.IsSubscribed,
          Is_Refunded: item.IsRefunded,
          Amount: item.amount
        }
        return newItem;
      });

      //Assign data to table
      this.setTableData(data, "Donations", `${this.selectedOrg.name}'s General Donations`, `${this.selectedOrg.name} General Donation Report`);
      this.accordion.closeAll();
    });
  }

  async loadReferralData() {
    
    if (this.referralCSVData.length === 0) {
      await this.getAllReferralData();
    }
    
    if (this.selectedOrg.id === '') {
      this.setTableData(this.referralCSVData, "Referrals", "General Referral Report", "General Referral Report");
      this.accordion.closeAll();
    } else  {
      this.setTableData(this.filterReferralData(), "Referrals", `${this.selectedOrg.name} Referral Report`, `${this.selectedOrg.name} Referral Report`);
      this.accordion.closeAll();
    }
  }

  async getAllReferralData() {

    await this.tfs.getReferralData().then(resp => {

      resp.forEach((resp) => {

        let org = this.orgs.find((org) => {
          return resp.Org_Name === org.id;
        });

        if (org !== null) {
          resp.Org_Name = org.name;
          this.referralCSVData.push(resp);
        }

      });
    });
  }

  filterReferralData(): ReferralCSVModel[] {
    
    const orgReferrals = this.referralCSVData.filter(org => {
      return org.Org_Name === this.selectedOrg.name;
    });
    
    return orgReferrals;
  }

  clearTable() {
    this.accordion.closeAll();
    this.fileName = "";

    //Set table data to null
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

  selectRow(org: Organisation) {
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