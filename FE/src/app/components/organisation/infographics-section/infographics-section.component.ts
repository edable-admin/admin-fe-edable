import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { Organisation } from 'src/app/models/Organisation/Organisation';

@Component({
  selector: 'app-infographics-section',
  templateUrl: './infographics-section.component.html',
  styleUrls: ['./infographics-section.component.scss']
})
export class InfographicsSectionComponent implements OnInit, OnChanges {

  @Input() items: Item[];
  @Input() org: Organisation;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if (changes['org']) {

    }
  }

}
