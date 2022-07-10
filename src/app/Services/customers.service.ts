import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private httpclient: HttpClient) {}
  getCustomers(pagenumber?: string, pagesize?: string ): Observable<any> {
    return this.httpclient.get(`https://localhost:7052/Contracts?pagesize=${10}&pagenumber=${1}`);
  }
}
