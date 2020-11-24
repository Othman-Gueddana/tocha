import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CompServiceService } from '../services/comp-service.service';

@Component({
  selector: 'app-signin-comp',
  templateUrl: './signin-comp.component.html',
  styleUrls: ['./signin-comp.component.css']
})
export class SigninCompComponent implements OnInit {
  registrationForm: FormGroup;
  fieldTextType: boolean;
  user = {
    email: '',
    password: '',
  };
  focus: any;
  focus1: any;
  constructor(private CompServiceService: CompServiceService,
    private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initRegForm();
  }
  login() {
    const data = {
      email: this.user.email,
      password: this.user.password,
    };
    this.CompServiceService.createLogin(data).subscribe(
      (res) => {
        if (res.status === 404) {
         alert('your email is not exist')
        } else if (res.status === 500) {
         alert('wrong password')
        } else {
          console.log(res);
          window.localStorage.setItem('token', res.token);
          window.localStorage.setItem('id', res.id);
          window.localStorage.setItem('firstName', res.firstName);
          window.localStorage.setItem('lastName', res.lastName);
          window.localStorage.setItem('status', res.status);
          this.router.navigateByUrl('/landing');
        }
      },
      (error) => {
        console.log(window.localStorage);
        console.log(error);
      }
    );
  }
  initRegForm() {
    this.registrationForm = this.formbuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}