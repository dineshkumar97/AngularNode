import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http: HttpClient) { }

  getAllEnquiryDetails(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/enquiry/getAllDetails`);
  }

  createEnquiry(jsonEnquiry:any): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/enquiry/create`,jsonEnquiry);
  }

  
  enquiryDelete(deleteUID:any): Observable<any> {
    return this.http.delete<any>(`${environment.apiBaseUrl}/enquiry/delete/${deleteUID}`);
  }

  enquiryUpdate(updateID:any,json:any): Observable<any> {
    return this.http.put<any>(`${environment.apiBaseUrl}/enquiry/update/${updateID}`,json);
  }
}
