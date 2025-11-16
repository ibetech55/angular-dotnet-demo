import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateMake, IMake } from '../Interfaces/Make';


@Injectable({
  providedIn: 'root'
})
export class MakeService {

  private readonly apiUrl = "http://3.238.1.53:7000/api/brand-microservice";
  constructor(private _httpClient:HttpClient) { }

  public  GetMakes(): Observable<IMake[]>{
    return this._httpClient.get<IMake[]>(`${this.apiUrl}/make`)
  }

  public  CreateMake(values:ICreateMake): Observable<boolean>{
    return this._httpClient.post<boolean>(`${this.apiUrl}/make`, values)
  }
}
