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
  zipCode: string = '';
  id: number = 0;
  constructor(private ClientService: ClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = JSON.parse(window.localStorage.getItem('id'));
    this.ClientService.getInfo().subscribe((data: any) => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].id === this.id) {
          this.phoneNumber = data[i].phoneNumber;
          this.street = data[i].street;
          this.city = data[i].city;
          this.zipCode = data[i].zipCode;
        }
      }
      console.log(data)
    })
  }
  onSubmit(f) {

    const obj = {
      phoneNumber: this.phoneNumber,
      street: this.street,
      city: this.city,
      zipCode: this.zipCode,
    };
    this.ClientService.modifyInfo(obj, this.id).subscribe(
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
