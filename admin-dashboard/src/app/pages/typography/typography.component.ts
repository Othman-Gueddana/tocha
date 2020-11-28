import { Component, OnInit } from '@angular/core';
import { FeedbackService } from "../../services/feedback.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
    selector: 'typography-cmp',
    templateUrl: 'typography.component.html'
})

export class TypographyComponent implements OnInit{
    feedback: Array<any>= [];

    constructor(private server: FeedbackService, private modalService: NgbModal,private router: Router){}

    ngOnInit():void {

        this.server.getFeedback().subscribe((data: any) => {
            this.feedback = data.reverse();
            console.log(data);
          })
    }
    deleteFeedback(id){
        console.log(id)
        this.server.deleteFeedback(id).subscribe((res)=>{
          console.log(res);
        },
        (error) => {
        console.log(error);
        })
        for(var i=0 ; i< this.feedback.length ; i++){
          if(this.feedback[i].id === id){
            this.feedback=this.feedback.filter((val,i)=>val.id !== id )
          }
        }
      }
 }
