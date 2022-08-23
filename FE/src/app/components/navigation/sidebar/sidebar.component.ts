import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
