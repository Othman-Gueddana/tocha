import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-comp',
  templateUrl: './feedback-comp.component.html',
  styleUrls: ['./feedback-comp.component.css']
})
export class FeedbackCompComponent implements OnInit {

  allFeedback: Array<any> = [];

  constructor(private server: FeedbackService, private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {
    this.server.getFeedback().subscribe((data: any) => {
      this.allFeedback = data
      console.log(this.allFeedback)
    })
  }
}
