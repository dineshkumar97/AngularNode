import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  public authTokenSubject = new BehaviorSubject<string | null>(null);
  public checkLogged = new BehaviorSubject<boolean | null>(false);
  public isloggedIn=new BehaviorSubject<boolean | null>(false);
  authLogin(authLogin: any): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/authenticate`, authLogin);
  }

  get authToken(): Observable<string | null> {
    return this.authTokenSubject.asObservable();
  }
  setAuthToken(token: string | null): void {
    this.authTokenSubject.next(token);
  }

  userlist(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/getUserDetails`);
  }



}
