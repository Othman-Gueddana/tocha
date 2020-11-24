import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:5000/feedbacks/';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) {}
  getFeedback(): Observable<any> {
    console.log(baseUrl);
    return this.http.get(baseUrl)
  }
}
