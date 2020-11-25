import { Component, OnInit } from '@angular/core';
import { CompServiceService } from '../services/comp-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings-comp',
  templateUrl: './settings-comp.component.html',
  styleUrls: ['./settings-comp.component.css']
})
export class SettingsCompComponent implements OnInit {
  focus: any;
  focus1: any;
  phoneNumber1: string = '';
  address: string = '';
  constructor(private CompServiceService:CompServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const id = JSON.parse(window.localStorage.getItem('id'));
    const obj = {
      phoneNumber1:this.phoneNumber1,
      address:this.address
    };
    this.CompServiceService.modifyInfo(obj,id).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
    alert("Your info is updated successfuly")
          this.router.navigateByUrl('/profileComp');
  }
}

