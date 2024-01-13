import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {


  constructor(private http: HttpClient) { }

  public getAllPlanDetails(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/plan/getAllPlan`);
  }

  public createPlanDetails(json: any): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/plan/create`, json);
  }
  public updatePlanDetails(updateID: any, json: any): Observable<any> {
    return this.http.put<any>(`${environment.apiBaseUrl}/plan/update/${updateID}`, json);
  }
  public getParticularPlan(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/plan/${id}`);
  }
  public  planDelete(deleteUID:any): Observable<any> {
    return this.http.delete<any>(`${environment.apiBaseUrl}/plan/delete/${deleteUID}`);
  }
}
