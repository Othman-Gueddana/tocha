import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5000/companys';
const baseUrl2 = 'http://localhost:5000/verifyCompanys/'
@Injectable({
  providedIn: 'root'
})
export class CompServiceService {

  constructor(private http: HttpClient) { }
  createLogin(data): Observable<any> {
    return this.http.post(baseUrl + 'login', data);
  }
  createRegister(data): Observable<any> {
    let obj = {
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      email: data.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
    };
    console.log(obj)
    console.log(baseUrl2 + 'register');
    return this.http.post(baseUrl2 + 'register', data);
  }
}
