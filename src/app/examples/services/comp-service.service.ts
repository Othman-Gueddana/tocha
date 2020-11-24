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
    console.log('logged in')
  }
  createRegister(data): Observable<any> {
    let obj = {
    name: data.name,
    email: data.email,
    password: data.password,
    address: data.address,
    description: data.description,
    phoneNumber1: data.phoneNumber1,
    phoneNumber2: data.phoneNumber2,
    numberPatent: data.numberPatent,
    logo:data.logo,
    };
    console.log(obj)
    console.log(baseUrl2 + 'register');
    return this.http.post(baseUrl2 + 'register', data);
  }
}
