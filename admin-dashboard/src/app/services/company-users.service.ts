import { Injectable } from '@angular/core';
import { retry, catchError, last } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';

const baseUrl = 'http://localhost:8080/companys/';
const baseUrl2 = 'http://localhost:8080/verifyCompanys/'
@Injectable({
  providedIn: 'root'
})
export class CompanyUsersService {

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


  getCompanyUsers(): Observable<any> {
    return this.http
      .get(baseUrl2).pipe(retry(3), catchError(this.handleError));
  }

  getAllCompanyUsers(): Observable<any> {
    return this.http
      .get(baseUrl).pipe(retry(3), catchError(this.handleError));
  }
  confirmCompanyUser(data): Observable<any> {

    let obj = {
      name: data.name,
      email: data.email,
      password: data.password,
      street: data.street,
      city: data.city,
      zipCode: data.zipCode,
      description: data.description,
      phoneNumber1: data.phoneNumber1,
      phoneNumber2: data.phoneNumber2,
      numberPatent: data.numberPatent,
      logo: data.logo
    };
    console.log(obj)
    return this.http.post(baseUrl + "register", obj);
  }
  deleteCompanyUser(id): Observable<any> {
    return this.http.delete(baseUrl2 + `${id}`)
  }
}
