import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/toster/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private loginService: LoginService, private fb: FormBuilder,private router: Router,
    private toaster:ToasterService,
    ) {

  }

  ngOnInit(): void {
    this.initilization();
  }


  public initilization(): void {
    this.loadLogin();
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

     
    });
    this.loginService.authLogin(login).subscribe({
      next: (posts) => {
        const authToken = posts.token; 
        this.loginService.setAuthToken(authToken);
        sessionStorage.setItem('authToken',authToken);
        this.router.navigate(['/users/enquiry-list']);
        this.toaster.showSuccess(posts.message);
      },
      error: (error) => {
        // this.errorMessage = error;
        this.toaster.showError(error);
      },
    });
  }



}
