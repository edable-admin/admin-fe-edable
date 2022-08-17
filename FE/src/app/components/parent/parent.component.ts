import { Component, Input, OnInit } from '@angular/core';
import { PassingDataService } from 'src/app/services/passing-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  messageToChild = '';

  messageFromChild = "";

  messageFromService!: string;

  getMessage(message: string) {
    this.messageFromChild = message;
    console.log(message);
  }

  sendToChild(message: string) {
    this.messageToChild = message;
  }

  constructor(private data:PassingDataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message:string) => this.messageFromService = message)
  }

}
