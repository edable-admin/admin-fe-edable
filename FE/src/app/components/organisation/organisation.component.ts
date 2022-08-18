import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent {
  displayedColumns: string[] = ['name', 'activeItems', 'donations'];
  dataSource: MatTableDataSource<Organisation>;
  selectedRowIndex = "";

  orgs: Organisation[] = [
    { id: 'abc123', name: 'Glen\'s Organic Produce', activeItems: 12, inactiveItems: 0, donations: 10000 },
    { id: 'def456', name: 'Social Moments', activeItems: 4, inactiveItems: 0, donations: 600 },
    { id: 'ghi789', name: 'Robert\'s Shoe Store', activeItems: 8, inactiveItems: 0, donations: 900 },
  ];
  items: Item[] = [
    { name: "Shovel", initialPrice: 50, totalDonations: 10, activeStatus: true, orgID: 'abc123' },
    { name: "Hose", initialPrice: 60, totalDonations: 5, activeStatus: true, orgID: 'abc123' },
    { name: "Oven", initialPrice: 800, totalDonations: 100, activeStatus: true, orgID: 'def456' },
    { name: "Mixer", initialPrice: 300, totalDonations: 60, activeStatus: true, orgID: 'def456' },
    { name: "Polish", initialPrice: 40, totalDonations: 8, activeStatus: true, orgID: 'ghi789' },
    { name: "Shoe laces", initialPrice: 50, totalDonations: 10, activeStatus: true, orgID: 'ghi789' },
  ]
  activeItems: Item[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.orgs);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addOrg() {
    console.log("add new org");
  }

  selectRow(row: Organisation) {
    if (this.selectedRowIndex === row.id) {
      this.selectedRowIndex = "";
      this.activeItems = [];
      return;
    }
    this.selectedRowIndex = row.id;
    this.activeItems = this.items.filter(item => { return item.orgID === row.id });
    console.log(this.activeItems);
    
  }
}
export interface Organisation {
  id: string;
  name: string;
  activeItems: number;
  inactiveItems: number;
  donations: number;
}
export interface Item {
  name: string;
  initialPrice: number;
  totalDonations: number;
  activeStatus: boolean;
  orgID: string;
}
