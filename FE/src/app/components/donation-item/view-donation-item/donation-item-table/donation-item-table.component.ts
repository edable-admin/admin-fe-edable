import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ViewItemFinancialDetails, ViewItemInformation } from 'src/app/models/Item';
import { DonationItemTableDataSource, DonationItemTableItem } from './donation-item-table-datasource';

@Component({
  selector: 'app-donation-item-table',
  templateUrl: './donation-item-table.component.html',
  styleUrls: ['./donation-item-table.component.scss']
})
export class DonationItemTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DonationItemTableItem>;
  dataSource: DonationItemTableDataSource;

  @Input() itemFinancialDetails:ViewItemFinancialDetails;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['donor', 'amount', 'date'];

  constructor() {
    this.dataSource = new DonationItemTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
