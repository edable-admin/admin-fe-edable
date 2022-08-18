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
  // displayedColumns: string[] = ['id', 'name', 'summary', 'activeStatus', 'abn', 'phone', 'website'];
  displayedColumns: string[] = ['name', 'activeItems', 'donations'];
  dataSource: MatTableDataSource<Organisation>;
  // orgs: Organisation[] = [
  //   { id: 'abc123', name: 'EdAble', summary: 'EdAble summary', activeStatus: true, abn: 123456, phone: '0444 444 444', website: 'www.edable.com', img: 'www.edable.com/img.png' },
  //   { id: 'def456', name: 'Social Moments', summary: 'Social Moments summary', activeStatus: false, abn: 11223344, phone: '0411 111 111', website: 'www.socialmoments.com', img: 'www.socialmoments.com/img.png' },
  //   { id: 'ghi789', name: 'Thrift Shop', summary: 'Thrift summary', activeStatus: true, abn: 44556677, phone: '0431 222 222', website: 'www.thriftshop.com', img: 'www.thriftshop.com/img.png' },
  //   { id: 'jkl123', name: 'Glen\'s Organic Produce', summary: 'Glen\'s summary', activeStatus: false, abn: 987654, phone: '0414 444 444', website: 'www.glens.com', img: 'www.glens.com/img.png' },
  //   { id: 'mno456', name: 'Robert\'s Shoe Store', summary: 'Robert\'s summary', activeStatus: true, abn: 123456, phone: '0414 333 333', website: 'www.roberts.com', img: 'www.roberts.com/img.png' },
  // ];
  orgs: Organisation[] = [
    { id: 'abc123', name: 'Glen\'s Organic Produce', activeItems: 12, inactiveItems: 0, donations: 10000 },
    { id: 'def456', name: 'Social Moments', activeItems: 4, inactiveItems: 0, donations: 600 },
    { id: 'ghi789', name: 'Robert\'s Shoe Store', activeItems: 8, inactiveItems: 0, donations: 900 },
  ];

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
  rowClicked(id: number) {
    console.log(id);
    
  }
}
// export interface Organisation {
//   id: string;
//   name: string;
//   summary: string;
//   activeStatus: boolean;
//   abn: number;
//   phone: string;
//   website: string;
//   img: string;
// }
export interface Organisation {
  id: string;
  name: string;
  activeItems: number;
  inactiveItems: number;
  donations: number;
}
