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
  
    constructor( private ClientService: ClientService,
        private router: Router) { }

    ngOnInit():void {}
    onSubmit(f: NgForm) {
       console.log(f.value)
       if(f.value.passwordConf === f.value.password ){
        this.ClientService.createRegister(f.value).subscribe(
            (res) => {
              console.log(res);
              this.router.navigateByUrl('/signin');
            },
            (error) => {
              console.log(error);
            }
          );
       }else 
        f.value.passwordConf = "" ;
       alert("Repeat again please")
        
      }
}
