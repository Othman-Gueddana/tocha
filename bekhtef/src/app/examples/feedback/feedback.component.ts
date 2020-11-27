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
  myFeedback: Array<any> = [];
  otherFeedback: Array<any> = [];
  ourData: Array<any> = [];
  clientName : string = '';
  constructor(private server: FeedbackService, private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
    let firstName  =  window.localStorage.getItem('firstName');
    let lastName  =  window.localStorage.getItem('lastName');
    this.clientName = firstName + ' ' + lastName ;
    this.server.getFeedback().subscribe((data: any) => {
       this.ourData = data.reverse()
      for(var i=0; i<this.ourData.length; i++){
        if(this.ourData[i].clientName === this.clientName){
          this.myFeedback.push(this.ourData[i])
        }else 
          this.otherFeedback.push(this.ourData[i])
      }
    })
    console.log(this.myFeedback)
    console.log(this.otherFeedback)
  }
  onSubmit(f: NgForm){
    let user= JSON.parse(window.localStorage.getItem('id'));
   
    console.log(user);
    console.log(f.value);
    const obj = {
      clientName: this.clientName,
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
   window.location.reload();
  }
  deleteFeed(id){
    console.log(id)
    this.server.deleteFeedback(id).subscribe((res)=>{
      
      console.log(res);
    },
    (error) => {
    console.log(error);
    })
    for(var i=0 ; i< this.myFeedback.length ; i++){
      if(this.myFeedback[i].id === id){
        this.myFeedback=this.myFeedback.filter((val,i)=>val.id !== id )
      }
    }
  }
}
