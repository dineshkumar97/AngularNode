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
    console.log('eee', event)
    if (event == 'user') {
      this.router.navigate(['/users/userDetails'])
    } else if (event == 'create') {
      this.router.navigate(['/users/userCreate'])
    } else {
      this.router.navigate(['/login'])
      localStorage.clear();
    }
  }
}
