import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CompServiceService } from '../services/comp-service.service';
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
    if(f.value.passwordConf === f.value.newPassword ){
     this.CompServiceService.changePass(f.value).subscribe(
         (res) => {
           console.log(res);
         },
         (error) => {
           console.log(error);
         }
     )
     alert("your new password is update succsessfuly")
     this.router.navigateByUrl('/signin');
   }else {
     alert("reset new password again")
     this.router.navigateByUrl('/forgot');
   }
}
}