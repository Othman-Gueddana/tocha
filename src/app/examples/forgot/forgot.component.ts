import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private ClientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    if(f.value.passwordConf === f.value.newPassword ){
     this.ClientService.changePass(f.value).subscribe(
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
