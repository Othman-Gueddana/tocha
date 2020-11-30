import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
const url = 'http://localhost:8080/livraisons/'


@Injectable({
  providedIn: 'root'
})
export class DeleveryService {

  constructor(private http: HttpClient) { }
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
  getLivraison(): Observable<any> {
    return this.http.get(url);
  }
  deleteLivraison(id): Observable<any> {
    return this.http.delete(url + `${id}`)
  }
}
