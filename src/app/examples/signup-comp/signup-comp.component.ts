import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CompServiceService } from '../services/comp-service.service';
@Component({
  selector: 'app-signup-comp',
  templateUrl: './signup-comp.component.html',
  styleUrls: ['./signup-comp.component.css']
})
export class SignupCompComponent implements OnInit {

  constructor( private CompServiceService: CompServiceService,
    private router: Router) { }

    ngOnInit():void {}
    onSubmit(f: NgForm) {
       console.log(f.value)
       const car = /[A-Z]/gi
       const other = /[@,<,>,?,!,&,|,%,$,£]/
       if(f.value.password.match(car)!== null && f.value.password.match(other)!==null ){
             if(f.value.passwordConf === f.value.password ){
                this.CompServiceService.createRegister(f.value).subscribe(
            (res) => {
              console.log(res);
            },
            (error) => {
              console.log(error);
            }
          );
        alert("your request to create a new account is succsesfuly done , wait for email of acceptation")
          this.router.navigateByUrl('/signinComp');
       }else {
        alert("Repeat again please")
          }
      }else {
        alert("your password should contain speciel caractere")
       }
     }
 }

