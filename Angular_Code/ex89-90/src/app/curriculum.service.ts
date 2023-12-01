import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { ICurriculum } from './curriculum'; 

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private _http: HttpClient) { }
  getCurriculums():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/curriculums",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<ICurriculum>),
      retry(3),
      catchError(this.handleError))
    }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
}

