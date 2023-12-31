import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../layout/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {

  }
  canActivate(): boolean{
    if (localStorage.getItem('authToken')) {
      console.log("active")
      return true;
    }
    else {
      console.log("not active")
      localStorage.clear();
      this.router.navigate(['/login'])
      return false;
    }
  }
}