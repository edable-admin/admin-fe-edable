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
    //this.fs.addItemsForOptionTwo();

    // this.fs.getAllOrganisations()
    //   .valueChanges({ idField: 'ID' })
    // .subscribe(resp => console.log(resp))

    // this.fs.getOrganisationItems('8mSGN5RTY40Hn42NiaH4')
    //   .valueChanges({ idField: 'ID' })
    // .subscribe(resp => console.log(resp))

    //this.fs.getAllItems();
    //this.fs.getAllActiveItems();
    //this.fs.addDonorsForOptiontionOne();

    let donation = {
      agreeToContact: false,
      email: "test@example.com",
      isAnon: false,
      mailingAddress: "16 test st testville",
      name: "Mary Smith",
      phone: "0411342781",
      paidAMT:40
    }

    this.fs.addItemDonation('8mSGN5RTY40Hn42NiaH4',"2TqV3uNW2WKArCguzxCg",donation)
  }

}
