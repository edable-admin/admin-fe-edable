import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Item, ItemDonationsData, ViewItemFinancialDetails, ViewItemInformation } from 'src/app/models/Item';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';

@Component({
  selector: 'app-donation-item-table',
  templateUrl: './donation-item-table.component.html',
  styleUrls: ['./donation-item-table.component.scss']
})
export class DonationItemTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<ItemDonationsData>;

  @Input() itemFinancialDetails:ViewItemFinancialDetails;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['donorPublicName', 'amount', 'donationDate'];

  constructor(public ts: TransactionService) {
  }

  getOrgItemData() {
    let data:ItemDonationsData[] = []
    this.ts.getOrgItemDonations(this.itemFinancialDetails.orgID,this.itemFinancialDetails.itemID).then(snap => snap.forEach(
      doc => data.push(doc.data() as ItemDonationsData)
    )).finally(() => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
    this.getOrgItemData();
  }
}
