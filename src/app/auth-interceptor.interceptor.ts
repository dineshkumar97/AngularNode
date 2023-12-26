import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './layout/login/login.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService,) { }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = this.loginService.authTokenSubject.value;
        const authRequest = jwt
      ? httpRequest.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      : httpRequest;
    return next.handle(authRequest);
  }
}
