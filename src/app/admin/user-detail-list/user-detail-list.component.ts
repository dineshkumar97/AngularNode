import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/layout/login/login.service';

@Component({
  selector: 'app-user-detail-list',
  templateUrl: './user-detail-list.component.html',
  styleUrls: ['./user-detail-list.component.scss']
})
export class UserDetailListComponent  implements OnInit {


  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
    this.initilization();
  }

  initilization(): void {
    this.loginService.userlist().subscribe((response: any) => {
      console.log('login,re', response)
    });
  }
}
