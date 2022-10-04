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

  setTableData(dataSource: any[], title: string, fileName: string) {
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
          CreatedAt: item.createdAt.toDate().toLocaleDateString(),
          InitialPrice: item.initialPrice,
          TotalDonationsValue: item.totalDonationsValue,
          AmountRemaining: Math.max(0, (item.initialPrice - item.totalDonationsValue)),
          IsFunded: item.totalDonationsValue >= item.initialPrice,
          DateCompleted: item.dateCompleted?.toDate().toLocaleTimeString(),
          ActiveStatus: item.activeStatus
        }
        return newItem
      });
      this.setTableData(data, `${this.selectedOrg.name}'s Donation Items`, `${this.selectedOrg.name} Donation Item Report`);
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
          DonationDate: item.donationDate.toDate().toLocaleDateString(),
          DonorPublicName: item.donorPublicName,
          Comment: item.comment,
          IsSubscribed: item.IsSubscribed,
          IsRefunded: item.IsRefunded,
          Amount: parseInt(item.paidAMT)
        }
        return newItem;
      });

      this.setTableData(data, `${this.selectedOrg.name}'s General Donations`, `${this.selectedOrg.name} General Donation Report`);

    });
  }

  clearTable() {
    this.setTableData(null, "", "");
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
  InitialPrice: number;
  TotalDonationsValue: number;
  AmountRemaining: number;
  IsFunded: boolean;
  ActiveStatus: boolean;
  CreatedAt?: string;
  DateCompleted?: string;
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
  DonationDate: string,
  Amount: number,
  DonorPublicName: string,
  Comment: string,
  IsSubscribed: boolean,
  IsRefunded: boolean
}