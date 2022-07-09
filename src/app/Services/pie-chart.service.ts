import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  catchError,Observable, throwError } from 'rxjs';
import { IPieChart } from '../Models/ipie-chart';

@Injectable({
  providedIn: 'root'
})
export class PieChartService {
  private _url:string="https://localhost:7052/ChartPerMonthPerYear?year=2020"
  constructor(private http:HttpClient) {}
getChart():Observable<IPieChart[]>{
  return this.http.get<IPieChart[]>(this._url).pipe(catchError((err)=>{
    return throwError(err.message||"Server Error")
  }))
}

}