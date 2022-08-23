import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(public authService: AuthService) { }


  //Toggle hamburger menu
  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }
  ngOnInit(): void {
  }

}
