import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var topBarToggle: any;
declare var switchToggle: any;
declare var profileToggle: any;
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

  constructor(private router: Router) { }

  topBarMenu() {
    topBarToggle();
  }

  switchBtn() {
    switchToggle();
  }
  profileChange() {
    profileToggle();
  }


  routingEvent(event: any) {
     if (event == 'Trainer') {
      this.router.navigate(['/trainer/trainer-list'])
    } else {
      this.router.navigate(['/login'])
      localStorage.clear();
    }
  }

}
