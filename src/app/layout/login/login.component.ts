import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private loginService: LoginService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initilization();
  }


  public initilization(): void {
    this.loadLogin();
    this.loadUserDetails();

  }

  public loadLogin(): void {
    this.loginForm = this.fb.group({
      useremail: [''],
      userpassword: [''],
    })
  }

  public login(): void {
    const login = {
      email: this.loginForm.value.useremail,
      password: this.loginForm.value.userpassword,
    }
    this.loginService.authLogin(login).subscribe((response: any) => {
      const authToken = response.token; 
      this.loginService.setAuthToken(authToken);
      this.loadUserDetails();
    });
  }

  loadUserDetails(): void {
    this.loginService.userlist().subscribe((response: any) => {
      console.log('login,re', response)
    });
  }

}
