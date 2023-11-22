import { JsonPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IDongABankData } from './DongABankData';
import { IDongABankItem } from './DongABankItem';


@Injectable({
  providedIn: 'root'
})
export class DongABankService {

  private _url:string="/exchange/export"
  constructor(private _http: HttpClient) { }
  getDongABankData()
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this._http.get<any>(this._url,requestOptions).pipe(
    map(res=>JSON.parse(res.slice(1,-1)) as IDongABankData),
    retry(3),
    catchError(this.handleError))
    } 
    handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
}
