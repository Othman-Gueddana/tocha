import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5000/purchases/';
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  
  constructor(private http: HttpClient) { }
  addPurchase(data): Observable<any> {
   console.log(data)
  return this.http.post(baseUrl, data);
}
 getPurchase(data): Observable<any> {
   return this.http.get(baseUrl)
 }
 deleteOne(id): Observable<any> {
   console.log(id)
   return this.http.delete(baseUrl+ `${id}`)
 }
 deleteAll(): Observable<any> {
  
   return this.http.delete(baseUrl)
 }
 delete(): Observable<any> {
 
  return this.http.delete(baseUrl)
}
}
