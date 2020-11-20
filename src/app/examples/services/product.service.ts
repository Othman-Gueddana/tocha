import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5000/products/';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }


private async request(method: string, url: string, data?: any) {
   const result = this.http.request(method, url, { body: data,responseType: 'json', observe: 'body'});  
       return new Promise((resolve, reject) => { 
                result.subscribe(resolve, reject); 
              });    }
    getProducts() {  
          return this.request('GET', `${baseUrl}/products`);  
          }
        }