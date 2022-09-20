import { Component, Input, OnInit } from '@angular/core';
import { ViewItemInformation } from 'src/app/models/Item';

@Component({
  selector: 'app-view-item-details',
  templateUrl: './view-item-details.component.html',
  styleUrls: ['./view-item-details.component.scss']
})
export class ViewItemDetailsComponent implements OnInit {
  @Input() itemInformation:ViewItemInformation;

  constructor() { }

  ngOnInit(): void {
  }

}
