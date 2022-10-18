import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TransactionService } from 'src/app/services/firebase/transaction-service/transaction.service';
import { OrganisationService } from 'src/app/services/firebase/organisation-service/organisation.service';
import { debounceTime, distinctUntilChanged, fromEvent, merge, Subscription, tap } from 'rxjs';
import { ItemDonations } from 'src/app/models/ItemDonations/ItemDonation';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { StringLike } from '@firebase/util';
import { MatSort } from '@angular/material/sort';
import { MatTab } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemService } from 'src/app/services/firebase/item-service/item.service';
import { Timestamp } from 'firebase/firestore';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionsComponent implements OnInit, AfterViewInit {
  @ViewChild('paginatorFirst') paginatorFirst!: MatPaginator;
  @ViewChild('paginatorSecond') paginatorSecond!: MatPaginator;
  @ViewChild('genTableS') genTableS!: MatSort;
  @ViewChild('itemTableS') itemTableS!: MatSort;

  itemDonDataSource:MatTableDataSource<ItemDonations>;
  generalDonDataSource:MatTableDataSource<GeneralDonations>;
  displayedColumns: string[] = ['donationDate', 'donorPublicName', 'amount', 'orgName', 'IsSubscribed', 'IsRefunded'];
  itemsDisplayedColumns: string[] = ['donationDate', 'donorPublicName','itemName', 'amount', 'orgName', 'IsRefunded'];
  editStatus: boolean = false;


  dataSource?:any[];
  constructor(
    public ts:TransactionService,
    public fs: OrganisationService,
    public Is: ItemService
    ) {

    }
  ngAfterViewInit(): void {
  }


  filterItems(event: Event) {
    const filterValueItem = (event.target as HTMLInputElement).value;
    this.itemDonDataSource.filter = filterValueItem.trim().toLowerCase();

  }
  filterGenDon(event: Event) {
    const filterValueGeneral = (event.target as HTMLInputElement).value;
    this.generalDonDataSource.filter = filterValueGeneral.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.loadTables();
  }

  //-------------------- Load Tables -------------------------------------------\\
  loadTables() {
    this.getItemDonations();
    this.getAllGenDonations();
  }

  changeEditStatus() {
    this.editStatus = !this.editStatus;
  }

  resetEditStatus() {
    this.editStatus = false;
  }

  editGenRefundStatus(orgID, donationID, isRefunded) {
    let newRefundedStatus = !isRefunded;
    this.ts.editGenDonation(orgID, donationID, newRefundedStatus);
    this.getAllGenDonations();
  }

  editItemRefundStatus(orgID, itemID, donationID, isRefunded) {
    let newRefundedStatus = !isRefunded;
    this.ts.editItemDonation(orgID, itemID, donationID, newRefundedStatus);
    this.getItemDonations();
  }

  //-------------------- Get all item donations ---------------------------------\\
  async getItemDonations() {
    let orgs: any[];
    let itemDonations: any;
    await this.fs.getAllOrgs()
      .get()
      .then(
         (snap) => {
          orgs = snap.docs.map(
            (org) => { return { ...org.data() as object, id:org.id } }
          )
        }
    )

    //Gets Items For Item Name
    let items: any[];
    await this.Is.getAllItems().forEach
        (
          (snap) => {
            items = snap.docs.map (
              (item) => {return { ...item.data() as object, id:item.id}}
            )
          }
        )

    itemDonations = (await (await this.ts.getItemDonations()).docs.map(
      (itemDon) => {
        let orgID = itemDon.ref.parent.parent.parent.parent.id;
        let donationID = itemDon.ref.id
        let itemID = itemDon.ref.parent.parent.id;
        let org = orgs.find((org) => {
          return org.id == orgID;
        })
        let item = items.find((item) => {
          return item.id == itemID;
        })
        return { itemID:item.id,  orgID:org.id, donationID: donationID, orgName: org.name, itemName: item.name, ...itemDon.data()}
      }
    ))
    this.itemDonDataSource = new MatTableDataSource(itemDonations);
    this.itemDonDataSource.paginator = this.paginatorSecond;
    this.itemDonDataSource.sort = this.itemTableS;
  }


  //-------------------- Get All General Donations for --------------------------\\

  async getAllGenDonations() {
    let orgs: any[];
    let generalDonations: any;

    await this.fs.getAllOrgs()
      .get()
      .then(
         (snap) => {
          orgs = snap.docs.map(
            (org) => { return { ...org.data() as object, id:org.id } }
          )
        }
    )

    generalDonations = (await (await this.ts.getGeneralDonations()).docs.map(
      (genDon) => {
        let orgID = genDon.ref.parent.parent.id;
        let donationID = genDon.ref.id
        let org = orgs.find((org) => {
          return (org.id == orgID)
        })
        return { orgID:org.id, donationID: donationID, orgName: org.name, ...genDon.data()};
      }
    ))

    generalDonations.forEach(element => {
      if (element.IsSubscribed) {
        element.IsSubscribed = "check_circle_outline"
      }
      else if (!element.IsSubscribed) {
        element.IsSubscribed = "highlight_off"
      }
    });
    this.generalDonDataSource = new MatTableDataSource(generalDonations);
    this.generalDonDataSource.paginator = this.paginatorFirst;
    this.generalDonDataSource.sort = this.genTableS;
  }
}
