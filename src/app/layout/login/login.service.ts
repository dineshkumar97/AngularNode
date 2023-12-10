import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  getPosts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/userlist`);
  }

  authLogin(authLogin: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, authLogin);
  }


}
