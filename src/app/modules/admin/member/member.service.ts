import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {


  constructor(private http: HttpClient) { }

  getAllMemberDetails(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/member/getAllDetails`);
  }

  
  createMember(jsonMember:any): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/member/create`,jsonMember);
  }
  getParticularMember(id:any): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/member/${id}`);
  }
  memberUpdate(updateID:any,json:any): Observable<any> {
    return this.http.put<any>(`${environment.apiBaseUrl}/member/update/${updateID}`,json);
  }

  memberDelete(deleteUID:any): Observable<any> {
    return this.http.delete<any>(`${environment.apiBaseUrl}/member/delete/${deleteUID}`);
  }
}
