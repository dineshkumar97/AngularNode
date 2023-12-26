import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  public authTokenSubject = new BehaviorSubject<string | null>(null);

  authLogin(authLogin: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/authenticate`, authLogin);
  }


  get authToken(): Observable<string | null> {
    return this.authTokenSubject.asObservable();
  }
  setAuthToken(token: string | null): void {
    this.authTokenSubject.next(token);
  }


  userlist(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/getUserDetails`);
  }



}
