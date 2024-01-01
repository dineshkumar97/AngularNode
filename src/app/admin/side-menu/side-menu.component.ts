import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var sideMenuchangeList: any;
declare var topBarToggle: any;
declare var switchToggle: any;
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  sideMenuChange() {
    sideMenuchangeList();
  }

  topBarMenu() {
    topBarToggle();
  }

  switchBtn() {
    switchToggle();
  }

  routingEvent(event: any) {
    if (event == 'member') {
      this.router.navigate(['/users/member-list'])
    } else if (event == 'Enquiry') {
      this.router.navigate(['/users/enquiry-list'])
    } else {
      this.router.navigate(['/login'])
      localStorage.clear();
    }
  }
}
