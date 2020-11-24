import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  focus: any;
  focus1: any;
  allFeedbacks: Array<any> = [];
  feedback: Array<any> =[];
  startIndex = 0;
  endIndex = 9;
  page = 1

  constructor(private server: FeedbackService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.server.getFeedback().subscribe((data: any) => {
      this.allFeedbacks = data
      console.log(this.feedback)
      this.feedback = this.allFeedbacks
    })
  }

}
