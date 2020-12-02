import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5000/livraisons/';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http: HttpClient) {}

  addLivraison(data):Observable<any> {
   console.log(data)
   return this.http.post(baseUrl + 'register' , data);
  }
}
