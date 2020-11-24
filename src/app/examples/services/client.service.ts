import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5000/clients/';
const baseUrl2 = 'http://localhost:5000/verifyClients/'
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {}

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
  modifyInfo(data,id): Observable<any> {
    let obj = {
      address: data.address,
      phoneNumber: data.phoneNumber,
    };
    console.log(obj)
    console.log(baseUrl2 + 'register');
    return this.http.put(baseUrl + `${id}`, data);
  }
  changePass(data): Observable<any> {
    let obj = {
      email: data.email,
      newPassword: data.newPassword,
    };
    console.log(data)
    console.log(baseUrl);
    return this.http.patch(baseUrl + 'password', data);
  }
}