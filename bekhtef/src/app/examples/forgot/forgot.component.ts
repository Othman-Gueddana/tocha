import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClientService } from '../services/client.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private ClientService: ClientService, private router: Router) { }
  focus: any;
  focus1: any;
  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {

    this.ClientService.sendEmailConfig(f.value).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );

    //      const car = /[A-Z]/gi
    //      const other = /[@,<,>,?,!,&,|,%,$,£]/
    //      if(f.value.newPassword.match(car)=== null || f.value.newPassword.match(other)===null || f.value.newPassword.length < 8 ){
    //       Swal.fire ("your newPassword should contain special caracter")

    //      }else if(f.value.newPassword.match(car)!== null && f.value.newPassword.match(other)!==null && f.value.newPassword.length >= 8 ){
    //            if(f.value.passwordConf === f.value.newPassword ){
    //             this.ClientService.changePass(f.value).subscribe(
    //                   (res) => {
    //                       console.log(res);
    //                     },
    //                   (error) => {
    //                        console.log(error);
    //                     }
    //                  );
    //           Swal.fire("your new password is updated succsessfuly")
    //             this.router.navigateByUrl('/signin');
    //            }else {
    //             Swal.fire("reset new password again")
    //           }

    //     }
  }
}