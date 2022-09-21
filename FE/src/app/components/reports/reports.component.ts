import { Component, OnInit, ViewChild } from '@angular/core';
import { WebdatarocksComponent } from 'ng-webdatarocks';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { OrganisationService } from 'src/app/services/firebase/organisation-service/organisation.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  @ViewChild('pivot1') child: WebdatarocksComponent;
  orgData: any;
  allOrgs: Organisation[] = [];

  constructor(private ofs: OrganisationService) { }

  ngOnInit(): void {
    this.getOrgData();
  }

  onPivotReady(pivot: WebDataRocks.Pivot): void {
    console.log('[ready] WebdatarocksPivotModule', this.child);
  }

  onCustomizeCell(
    cell: WebDataRocks.CellBuilder,
    data: WebDataRocks.CellData
  ): void {
    if (data.isClassicTotalRow) {
      cell.addClass('fm-total-classic-r');
    }
    if (data.isGrandTotalRow) {
      cell.addClass('fm-grand-total-r');
    }
    if (data.isGrandTotalColumn) {
      cell.addClass('fm-grand-total-c');
    }
  }

  onReportComplete(): void {
    this.child.webDataRocks.off('reportcomplete');
    this.child.webDataRocks.setReport({
      dataSource: {
        data: this.orgData,
      },
    });
  }
  async getOrgData() {

    await this.ofs.getOrgs("All").subscribe((resp) => {
      this.orgData = resp as Organisation[];
    });

    // this.orgData = [
    //   {
    //     "Name": {
    //       type: "string"
    //     },
    //     "Active Status": {
    //       type: "string"
    //     },
    //     "Total Donation Items": {
    //       type: "number"
    //     },
    //     "Total Donations": {
    //       type: "number"
    //     },
    //   },
    //   {
    //     "Name": "OrgName1",
    //     "Active Status": "true",
    //     "Total Donation Items": 10,
    //     "Total Donations": 1500
    //   },
    //   {
    //     "Name": "OrgName2",
    //     "Active Status": "false",
    //     "Total Donation Items": 15,
    //     "Total Donations": 900
    //   },
    //   {
    //     "Name": "OrgName3",
    //     "Active Status": "true",
    //     "Total Donation Items": 8,
    //     "Total Donations": 400
    //   },
    //   {
    //     "Name": "OrgName4",
    //     "Active Status": "false",
    //     "Total Donation Items": 6,
    //     "Total Donations": 2000
    //   },
    // ]

    this.child.webDataRocks.setReport({
      dataSource: {
        data: this.orgData,
      }
    });
  }
}