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
  addFeedback(data):Observable<any>{
    let obj = {
      text: data.text,
      clientName: data.clientName,
      clientId: data.clientId,
    }
    console.log(data)
    return this.http.post(baseUrl + 'register' , obj);
  }
}
