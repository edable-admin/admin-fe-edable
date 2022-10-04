import { Component, OnInit } from '@angular/core';
import { DbSetupService } from 'src/app/services/db-setup-services/db-setup.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(public dbs: DbSetupService) { }

  ngOnInit(): void {
  }

}
