import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { OrganisationService } from 'src/app/services/firebase/organisation-service/organisation.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  displayedColumns: string[] = ["name"];
  selectedOrg: Organisation;
  orgData: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ofs: OrganisationService) { }

  ngOnInit(): void {
    this.initSelectedOrg();
    this.getOrgs();
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

  getOrgs() {
    this.ofs.getOrgs("All").subscribe(orgs => {
      this.orgData = new MatTableDataSource(orgs);
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

  applyFilter(event: Event) {
    // this.initSelectedOrg();
    const filterValue = (event.target as HTMLInputElement).value;
    this.orgData.filter = filterValue.trim().toLowerCase();

    if (this.orgData.paginator) {
      this.orgData.paginator.firstPage();
    }
  }
}
