import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IPieChart } from '../Models/ipie-chart';
import { PieChart } from '../Classes/PieChart';

@Injectable({
  providedIn: 'root',
})
export class PieChartService {
  constructor(private httpclient: HttpClient) {}
  getChart(): Observable<any> {
    return this.httpclient.get('https://localhost:7052/ChartPerMonthPerYear');
  }
  getPieChart(): Observable<any> {
    return this.httpclient.get('https://localhost:7052/CustomerPerService');
  }


}
