import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }


  public getSearchMemberList(searchValue:any): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/memberSearch/memberID?memberId=${searchValue}`);
  }

}
