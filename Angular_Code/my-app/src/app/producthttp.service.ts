import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProducthttpService {
  private _url="./assets/datasets/products.json"
  constructor(private http:HttpClient) { }
  getProduct():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url)
  }
}