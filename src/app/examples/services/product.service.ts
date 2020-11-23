import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { throwError , Observable} from 'rxjs';

import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';

const baseUrl = 'http://localhost:5000/verifyProducts/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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
 
  getProducts(): Observable<any>{
    const url = 'http://localhost:5000/products'
    return  this.http
      .get(url).pipe(retry(3), catchError(this.handleError));
  }
  addFood(data):Observable<any>{
    let obj = {
     name:data.name,
     oldPrice:data.oldPrice,
     newPrice: data.newPrice,
     description: data.description,
     category: data.category,
     image: data.image,
     ownerId: data.ownerId,
     expireddate: data.expireddate,
     creationDate: data.creationDate,
     quantity: data.quantity,
    };
    console.log(obj)
    return this.http.post(baseUrl + 'food', data);
  }
  addClean(data):Observable<any>{
    let obj = {
     name:data.name,
     oldPrice:data.oldPrice,
     newPrice: data.newPrice,
     description: data.description,
     category: data.category,
     image: data.image,
     ownerId: data.ownerId,
     expireddate: data.expireddate,
     creationDate: data.creationDate,
     quantity: data.quantity,
     
    };
    console.log(obj)
    return this.http.post(baseUrl + 'clean', data);
  }
  addElec(data):Observable<any>{
    let obj = {
     name:data.name,
     oldPrice:data.oldPrice,
     newPrice: data.newPrice,
     description: data.description,
     category: data.category,
     image: data.image,
     ownerId: data.ownerId,
     creationDate: data.creationDate,
     quantity: data.quantity,
     device: data.device,
    
    };
    console.log(obj)
    return this.http.post(baseUrl + 'elec', data);
  }
  addHouse(data):Observable<any>{
    let obj = {
     name:data.name,
     oldPrice:data.oldPrice,
     newPrice: data.newPrice,
     description: data.description,
     category: data.category,
     image: data.image,
     ownerId: data.ownerId,
     creationDate: data.creationDate,
     quantity: data.quantity,
     device: data.device,
    
    };
    console.log(obj)
    return this.http.post(baseUrl + 'house', data);
  }
  addClothes(data):Observable<any>{
    let obj = {
     name:data.name,
     oldPrice:data.oldPrice,
     newPrice: data.newPrice,
     description: data.description,
     category: data.category,
     image: data.image,
     ownerId: data.ownerId,
     quantity: data.quantity,
     humanKind: data.humanKind,
    };
    console.log(obj)
    return this.http.post(baseUrl + 'clothes', data);
  }
  addFourni(data):Observable<any>{
    let obj = {
     name:data.name,
     oldPrice:data.oldPrice,
     newPrice: data.newPrice,
     description: data.description,
     category: data.category,
     image: data.image,
     ownerId: data.ownerId,
     quantity: data.quantity,
     type: data.type
    };
    console.log(obj)
    return this.http.post(baseUrl + 'fourni', data);
  }
}