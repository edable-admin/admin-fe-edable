import { Component, Input, OnInit } from '@angular/core';
import { ViewItemFinancialDetails, ViewItemInformation } from 'src/app/models/Item';

@Component({
  selector: 'app-view-item-details',
  templateUrl: './view-item-details.component.html',
  styleUrls: ['./view-item-details.component.scss']
})
export class ViewItemDetailsComponent implements OnInit {
  @Input() itemInformation: ViewItemInformation;

  constructor() { }

  ngOnInit(): void {
  }

  onImgError(event:Event) {
    (event.target as HTMLImageElement).src =
      'https://freepikpsd.com/file/2019/10/placeholder-image-png-5-Transparent-Images.png';
  }

}
