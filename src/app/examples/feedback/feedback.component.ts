import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  allFeedback: Array<any> = [];

  constructor(private server: FeedbackService, private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
    this.server.getFeedback().subscribe((data: any) => {
      this.allFeedback = data
      console.log(this.allFeedback)
    })
  }
  onSubmit(f: NgForm){
    let user= JSON.parse(window.localStorage.getItem('id'));
    let firstName  =  window.localStorage.getItem('firstName');
    let lastName  =  window.localStorage.getItem('lastName');
    console.log(user);
    console.log(f.value);
    const obj = {
      clientName: firstName + ' ' + lastName,
      clientId: user,
      text: f.value.text,
    }
    console.log(obj);
    this.server.addFeedback(obj).subscribe((res)=>{
      
      console.log(res);
    },
    (error) => {
    console.log(error);
    })
  }

}
