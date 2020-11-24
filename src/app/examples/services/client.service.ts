import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5000/clients/';
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
    console.log(baseUrl + 'register');
    return this.http.post(baseUrl + 'register', data);
  }
}