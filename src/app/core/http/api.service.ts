import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl:string = environment.apiUrl

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    return throwError({status:false,message:error.error.message})
  }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${path}`, { params })
        .pipe(
            catchError(this.handleError)
        );
  }

  post<T>(path: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${path}`, body)
        .pipe(
            catchError(this.handleError)
        );
  }

  put<T>(path: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${path}`, body)
        .pipe(
            catchError(this.handleError)
        );
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${path}`)
        .pipe(
            catchError(this.handleError)
        );
  }
}
