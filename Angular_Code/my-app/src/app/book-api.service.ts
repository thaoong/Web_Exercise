import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IBook } from '../app/books'; 

@Injectable({
  providedIn: 'root'
})
export class BookAPIService {
  constructor(private _http: HttpClient) { }
  getBooks():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
    headers:headers,
    responseType:"text"
    }
    return this._http.get<any>("/books",requestOptions).pipe(
    map(res=>JSON.parse(res) as Array<IBook>),
    retry(3),
    catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
  return throwError(()=>new Error(error.message))
  }
}
