import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
const baseUrl2 = 'http://localhost:8080/Products/'
const baseUrl = 'http://localhost:8080/verifyProducts/'
const url = 'http://localhost:8080/products/'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  getProducts(): Observable<any> {
    return this.http
      .get(baseUrl).pipe(retry(3), catchError(this.handleError));
  }
  getInsertedProducts(): Observable<any> {
    return this.http
      .get(baseUrl2).pipe(retry(3), catchError(this.handleError));
  }
  addProducts(data): Observable<any> {

    let obj = {
      name: data.name,
      oldPrice: data.oldPrice,
      newPrice: data.newPrice,
      description: data.description,
      category: data.category,
      image: data.image,
      ownerId: data.ownerId,
      expireddate: data.expireddate,
      creationDate: data.creationDate,
      quantity: data.quantity,
      device: data.device,
      humanKind: data.humanKind,
      type: data.type
    };
    console.log(obj)
    return this.http.post(url + "products", obj);
  }
  deleteOneProduct(id): Observable<any> {
    return this.http.delete(baseUrl + `${id}`)
  }
}
