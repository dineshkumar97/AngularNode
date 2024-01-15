import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';
import { LoginService } from '../../login.service';
declare var sideMenuchangeList: any;
declare var topBarToggle: any;
declare var switchToggle: any;
declare var profileToggle: any;
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  sideMenuList: Menu[];
  constructor(private router: Router,private loginService:LoginService) { }

  ngOnInit(): void {
    this.inilization();
  }

  public inilization():void{
    this.loadSideMenu();
  }
  public loadSideMenu():void{
    this.loginService.sideMenuList().subscribe((response:any)=>{
      this.sideMenuList = response.message;
    });
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
  profileChange() {
    profileToggle();
  }


  routingEvent(event: any) {
    if (event == 'member') {
      this.router.navigate(['/member/member-list'])
    } else if (event == 'Enquiry') {
      this.router.navigate(['/enquiry/enquiry-list'])
    } else if (event == 'Pricing') {
      this.router.navigate(['/users/pricing'])
    } else if (event == 'About') {
      this.router.navigate(['/users/about'])
    } else if (event == 'Equipment') {
      this.router.navigate(['/equipment/equipment-list'])
    } else if (event == 'Trainer') {
      this.router.navigate(['/trainer/list'])
    } else {
      this.router.navigate(['/login'])
      localStorage.clear();
    }
  }
}
