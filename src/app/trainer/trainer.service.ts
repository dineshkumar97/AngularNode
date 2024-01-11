import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {


  constructor(private http: HttpClient) { }

  public getAllTrainerDetails(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/trainer/getAllDetails`);
  }

  public createTrainerDetails(json: any): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/trainer/create`, json);
  }
  public updateTrainerDetails(updateID: any, json: any): Observable<any> {
    return this.http.put<any>(`${environment.apiBaseUrl}/trainer/update/${updateID}`, json);
  }
  public getParticularTrainer(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/trainer/${id}`);
  }
  public  trainerDelete(deleteUID:any): Observable<any> {
    return this.http.delete<any>(`${environment.apiBaseUrl}/trainer/delete/${deleteUID}`);
  }
}
