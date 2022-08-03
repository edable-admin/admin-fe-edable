import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PassingDataService } from 'src/app/services/passing-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() messageToParent = new EventEmitter<string>();

  messageFromService!: string;

  messageForAllComponents!: string;

  sendToParent(message: string) {
    this.messageToParent.emit(message);
    console.log(message)
  }

  @Input() messageFromParent = '';

  constructor(private data:PassingDataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message:string) => this.messageFromService = message)
  }

  newMessage(message:string) {
    this.data.changeMessage(message)
  }

}
