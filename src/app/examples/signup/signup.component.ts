import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClientService } from '../services/client.service';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  focus: any;
  focus1: any;
    constructor( private ClientService: ClientService,
        private router: Router) { }

    ngOnInit():void {}
    onSubmit(f: NgForm) {
       console.log(f.value)
       if(f.value.passwordConf === f.value.password ){
        this.ClientService.createRegister(f.value).subscribe(
            (res) => {
              console.log(res);
            },
            (error) => {
              console.log(error);
            }
          );
        alert("your request to create a new account is succsesfuly done , wait for email of acceptation")
          this.router.navigateByUrl('/signin');
       }else {
        alert("Repeat again please")
       }
      }
}
