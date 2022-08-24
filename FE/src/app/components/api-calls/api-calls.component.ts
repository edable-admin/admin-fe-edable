import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore-services/firestore.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.scss']
})
export class ApiCallsComponent implements OnInit {

  constructor(public fs: FirestoreService) { }

  ngOnInit(): void {
    //this.fs.createOptionOneOrgs();
    //this.fs.addItemsForOptionOne();
    this.fs.addItemsForOptionTwo();
  }

}
