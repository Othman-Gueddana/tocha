import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  focus: any;
  focus1: any;
  phoneNumber: string = '';
  street: string = '';
  city: string = '';
  codeZip: string = '';
  constructor(private ClientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(f) {
    const id = JSON.parse(window.localStorage.getItem('id'));
    const obj = {
      phoneNumber: this.phoneNumber,
      street: this.street,
      city: this.city,
      codeZip: this.codeZip,
    };
    this.ClientService.modifyInfo(obj, id).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
    alert("Your info is updated successfuly")
    this.router.navigateByUrl('/user-profile');
  }
}
