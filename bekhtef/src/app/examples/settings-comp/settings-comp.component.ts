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
  street: string = '';
  city: string = '';
  zipCode: string = '';
  id: number = 0;
  constructor(private CompServiceService: CompServiceService, private router: Router) { }

  ngOnInit(): void {
    this.id = JSON.parse(window.localStorage.getItem('id'));
    this.CompServiceService.getInfo().subscribe((data: any) => {
      for (var i = 0; data.length > 0; i++) {
        if (data[i].id === this.id) {
          this.phoneNumber1 = data[i].phoneNumber;
          this.street = data[i].street;
          this.city = data[i].city;
          this.zipCode = data[i].zipCode;
        }
      }
    })
  }
  onSubmit(f) {

    const obj = {
      phoneNumber1: this.phoneNumber1,
      street: this.street,
      city: this.city,
      zipCode: this.zipCode,
    };
    this.CompServiceService.modifyInfo(obj, this.id).subscribe(
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

