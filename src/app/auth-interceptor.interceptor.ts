import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor,HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = sessionStorage.getItem('authToken');
    const requestWithHeaders = req.clone({ setHeaders: {'Content-Type': 'application/json'}});
    if (!!jwt) {
        const authReq = requestWithHeaders.clone({ setHeaders: { Authorization:  `Bearer ${jwt}`} });
        return next.handle(authReq).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401 ||error.status===403) {
              this.router.navigate(['/login'])
              sessionStorage.clear();
            }
            return throwError(error);
          })
        );
    } else {
        return next.handle(requestWithHeaders);

    }
  }
}
