import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }


  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, { body: data, responseType: 'json', observe: 'body' });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getProducts() {
    return  this.http
      .get('http://localhost:5000/products').pipe(retry(3), catchError(this.handleError));
  }
}