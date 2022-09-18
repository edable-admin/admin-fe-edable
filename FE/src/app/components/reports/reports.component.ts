import { Component, OnInit, ViewChild } from '@angular/core';
import { WebdatarocksComponent } from 'ng-webdatarocks';
import { OrganisationService } from 'src/app/services/firebase/organisation-service/organisation.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  @ViewChild('pivot1') child: WebdatarocksComponent;
  orgData: any;

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
    // console.log(this.ofs.getOrgs("All"));

    let orgs = await this.ofs.getOrgs("All");
    console.log(orgs);

    this.orgData = [{
      "ABN": {
        type: "number"
      },
      "Active Status": {
        type: "string"
      },
      "Description": {
        type: "string"
      },
      "ID": {
        type: "string"
      },
      "Image": {
        type: "string"
      },
      "Name": {
        type: "string"
      },
      "Phone": {
        type: "string"
      },
      "Summary": {
        type: "string"
      },
      "Total Donation Items": {
        type: "number"
      },
      "Total Donations": {
        type: "number"
      },
      "Website": {
        type: "string"
      },
    },
    [11111111111, "True", "Desc", "ID", "ImageURL", "Orgname", "12345", "Summ", 12, 5000],
    [11111111111, "True", "Desc", "ID", "ImageURL", "Orgname", "12345", "Summ", 12, 5000],
    [11111111111, "True", "Desc", "ID", "ImageURL", "Orgname", "12345", "Summ", 12, 5000],
    [11111111111, "True", "Desc", "ID", "ImageURL", "Orgname", "12345", "Summ", 12, 5000],
    ]

    this.child.webDataRocks.setReport({
      dataSource: {
        data: this.orgData,
      },
      slice: {
        rows: [{
          uniqueName: "Total Donation Items"
        }],
        columns: [{
          uniqueName: "Name"
        }],
        measures: [{
          uniqueName: "Total Donations",
          aggregation: "sum"
        }]
      }
    });
  }
  inlineJSON = [{
    "Salary": {
      type: "number"
    },
    "Eye Color": {
      type: "string"
    },
    "Name": {
      type: "string"
    },
    "Gender": {
      type: "string"
    },
    "Country": {
      type: "string"
    },
    "City": {
      type: "string"
    },
    "Birthday": {
      type: "year/month/day"
    },

  },
  [1444, "brown", "Angelina", "female", "Benin", "Porto-Novoa", "1998-10-15"],
  [2000, "blue", "Bryan", "male", "Solomon Islands", "Honiara", "1992-11-02"],
  [4500, "blue", "Bryan", "male", "Solomon Islands", "Honiara", "1997-05-01"],
  [700, "blue", "Palmer", "male", "Puerto Rico", "San Juan", "1976-07-08"],
  [550, "blue", "Christy", "female", "Uruguay", "Montevideo", "1989-12-05"],
  [999, "brown", "John", "male", "Central African Republic", "Bangui", "1968-09-18"]
  ];

}
