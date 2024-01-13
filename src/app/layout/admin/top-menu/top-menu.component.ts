import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

  constructor(private router: Router) { }

  sideMenuChange() {
    // sideMenuchangeList();
  }

  topBarMenu() {
    // topBarToggle();
  }

  switchBtn() {
    // switchToggle();
  }
  profileChange() {
    // profileToggle();
  }

  routingEvent(event: any) {
    if (event == 'member') {
      this.router.navigate(['/member/member-list'])
    } else if (event == 'Enquiry') {
      this.router.navigate(['/users/enquiry-list'])
    } else if (event == 'Pricing') {
      this.router.navigate(['/users/pricing'])
    } else if (event == 'About') {
      this.router.navigate(['/users/about'])
    } else if (event == 'Equipment') {
      this.router.navigate(['/equipment/equipment-list'])
    } else if (event == 'Trainer') {
      this.router.navigate(['/trainer/trainer-list'])
    } else {
      this.router.navigate(['/login'])
      localStorage.clear();
    }
  }

}
