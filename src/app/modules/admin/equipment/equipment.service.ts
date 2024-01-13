import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }

  public getAllEquipmentDetails(): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/equipment/getAllDetails`);
  }

  public createEquipmentDetails(json: any): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/equipment/create`, json);
  }
  public updateEquipmentDetails(updateID: any, json: any): Observable<any> {
    return this.http.put<any>(`${environment.apiBaseUrl}/equipment/update/${updateID}`, json);
  }
  public getParticularEquipment(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiBaseUrl}/equipment/${id}`);
  }
  public equipmentDelete(deleteUID: any): Observable<any> {
    return this.http.delete<any>(`${environment.apiBaseUrl}/equipment/delete/${deleteUID}`);
  }
}
