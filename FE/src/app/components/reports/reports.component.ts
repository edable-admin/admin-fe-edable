import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { OrganisationService } from 'src/app/services/firebase/organisation-service/organisation.service';
import { AngularCsv } from 'angular-csv-ext/dist/Angular-csv';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemService } from 'src/app/services/firebase/item-service/item.service';
import { Item } from 'src/app/models/Item';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  displayedColumns: string[] = ["name"];
  selectedOrg: Organisation;
  orgData: MatTableDataSource<Organisation>;
  orgItems: Item[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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

  generateItemReport() {

    if (this.selectedOrg.id === '') {
      this.snackBar.open("No organisation selected");
      return;
    }

    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: `${this.selectedOrg.name}'s Donation Items`,
      useBom: true,
      noDownload: false,
      headers: ["Item Name", "Date Listed", "Initial Price", "Total Donations", "Amount Remaining", "Is Funded", "Date Completed", "Active Status"],
      useHeader: false,
      nullToEmptyString: false,
    };

    this.ifs.getItems(this.selectedOrg.id).subscribe((itemData) => {

      this.orgItems = itemData as Item[];

      const data: ItemCSVModel[] = this.orgItems.map((item: Item) => {
        const newItem: ItemCSVModel = {
          name: item.name,
          //TODO: Fix date format from timestamp
          dateCreated: item.createdAt.toString(),
          initialPrice: item.initialPrice,
          totalDonations: item.totalDonations,
          amountRemaining: item.initialPrice - item.totalDonations,
          isFunded: item.totalDonations >= item.initialPrice,
          //TODO: Fix date format from timestamp
          dateCompleted: item.dateCompleted?.toString(),
          activeStatus: item.activeStatus
        }
        return newItem;

      })

      new AngularCsv(data, `${this.selectedOrg.name}'s Donation Item Report`, options);
    });

  }

  generateDonationReport() {

    if (this.selectedOrg.id === '') {
      this.snackBar.open("No organisation selected");
      return;
    }

    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: `${this.selectedOrg.name}'s General Donations`,
      useBom: true,
      noDownload: false,
      headers: ["Donation Date", "Donor Public Name", "Comment", "IsSubscribed", "IsRefunded", "Amount"],
      useHeader: false,
      nullToEmptyString: false,
    };

    let donations: GeneralDonations[] = [];

    this.tfs.getOrgGeneralDonations(this.selectedOrg.id).then((resp) => {
      resp.forEach((resp) => {

        donations.push(resp.data() as GeneralDonations);

      });
      console.log("Database read");

      console.table(donations);


      const data: DonationCSVModel[] = donations.map((item) => {
        const newItem: DonationCSVModel = {
          donationDate: item.donationDate.toDate().toLocaleDateString(),
          donorPublicName: item.donorPublicName,
          comment: item.comment,
          isSubscribed: item.IsSubscribed,
          isRefunded: item.IsRefunded,
          amount: item.paidAMT
        }
        return newItem;
      });
      console.log("Mapped Data");

      console.table(data);
      new AngularCsv(data, `${this.selectedOrg.name}'s General Donations Report`, options);
    });
  }

  getOrgs() {
    this.ofs.getOrgs().subscribe(orgs => {
      this.orgData = new MatTableDataSource(orgs as Organisation[]);
      this.orgData.paginator = this.paginator;
      this.orgData.sort = this.sort;
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
}

interface ItemCSVModel {
  name: string,
  dateCreated?: string,
  initialPrice?: number,
  totalDonations?: number,
  amountRemaining?: number,
  isFunded?: boolean,
  dateCompleted?: string,
  activeStatus?: boolean
}
interface DonationCSVModel {
  donationDate: string,
  donorPublicName: string,
  comment: string,
  isSubscribed: boolean,
  isRefunded: boolean,
  amount: number
}