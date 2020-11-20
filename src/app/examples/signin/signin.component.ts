import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
  user = {
    email: '',
    password: '',
  };
  constructor( private ClientService: ClientService,
    private router: Router) {}

  ngOnInit(): void {}
  login() {
    const data = {
      email: this.user.email,
      password: this.user.password,
    };
    this.ClientService.createLogin(data).subscribe(
      (res) => {
        if (res.status === 404) {
         alert('your email is not exist')
        } else if (res.status === 500) {
         alert('wrong password')
        } else {
          console.log(res);
          window.localStorage.setItem('token', res.token);
          window.localStorage.setItem('id', res.id);
          window.localStorage.setItem('email', res.email);
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
}
