import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  public getAllSubscription(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/subscription/getAllSubscription`);
  }

  public createSubscription(json: any): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/subscription/create`, json);
  }
  public updateSubscription(updateID: any, json: any): Observable<any> {
    return this.http.put<any>(`${environment.apiBaseUrl}/subscription/update/${updateID}`, json);
  }
  public getParticularSubscription(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/subscription/${id}`);
  }
  public subscriptionDelete(deleteUID:any): Observable<any> {
    return this.http.delete<any>(`${environment.apiBaseUrl}/subscription/delete/${deleteUID}`);
  }

  public getAllMemberList(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/member/getAllDetails`);
  }

  public getAllPlanDetails(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/plan/getAllPlan`);
  }

}


