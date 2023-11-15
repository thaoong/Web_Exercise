import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerhttpService {
  private _url:string="./assets/data/customers.json";
  constructor(private _http: HttpClient) { }
  getCustomers():Observable<ICustomer[]>{ 
  return this._http.get<ICustomer[]>(this._url)
}
}
