//deploy
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-display-environment',
  templateUrl: './display-environment.component.html',
  styleUrls: ['./display-environment.component.scss']
})
export class DisplayEnvironmentComponent implements OnInit {

  envName:string = environment.ENV_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}
