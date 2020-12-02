import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CompServiceService } from '../services/comp-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgot-comp',
  templateUrl: './forgot-comp.component.html',
  styleUrls: ['./forgot-comp.component.css']
})
export class ForgotCompComponent implements OnInit {

  constructor(private CompServiceService:CompServiceService , private router: Router ) { }

 
  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
const car = /[A-Z]/gi
const other = /[@,<,>,?,!,&,|,%,$,£]/
if(f.value.newPassword.match(car)=== null || f.value.newPassword.match(other)===null || f.value.newPassword.length < 8 ){
 Swal.fire ("your newPassword should contain special caracter")  
    
    }else if(f.value.newPassword.match(car)!== null && f.value.newPassword.match(other)!==null && f.value.newPassword.length >= 8 ){
      if(f.value.passwordConf === f.value.newPassword ){
       this.CompServiceService.changePass(f.value).subscribe(
             (res) => {
                 console.log(res);
               },
             (error) => {
                  console.log(error);
               }
            );
     Swal.fire("your new password is updated succsessfuly")
       this.router.navigateByUrl('/signinComp');
      }else {
       Swal.fire("reset new password again")
     }
   }
 }
}