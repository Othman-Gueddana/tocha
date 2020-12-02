import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CompServiceService } from '../services/comp-service.service';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup-comp',
  templateUrl: './signup-comp.component.html',
  styleUrls: ['./signup-comp.component.css']
})
export class SignupCompComponent implements OnInit {
  focus: any;
  focus1: any;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  constructor(private CompServiceService: CompServiceService,
    private fileStorage: AngularFireStorage,
    private router: Router) { }

  ngOnInit(): void { }
  selectedFile(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.fileStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.task
      .snapshotChanges()
      .pipe(finalize(() => (this.downloadURL = this.ref.getDownloadURL())))
      .subscribe();
  }

  onSubmit(f: NgForm) {
    console.log(f.value)
    var img = document.getElementsByTagName('a');

    var imageUrl = img[img.length - 1].innerHTML;

    const car = /[A-Z]/gi
    const other = /[@,<,>,?,!,&,|,%,$,£]/
    if (f.value.password.match(car) !== null && f.value.password.match(other) !== null) {
      if (f.value.passwordConf === f.value.password) {

        const obj = {
          name: f.value.name,
          email: f.value.email,
          password: f.value.password,
          street: f.value.street,
          city: f.value.city,
          zipCode: f.value.zipCode,
          description: f.value.description,
          phoneNumber1: f.value.phoneNumber1,
          phoneNumber2: f.value.phoneNumber2,
          numberPatent: f.value.numberPatent,
          logo: imageUrl
        }

        this.CompServiceService.createRegister(obj).subscribe(
          (res) => {
            console.log(res);
          },
          (error) => {
            console.log(error);
          }
        );
        Swal.fire("your request to create a new account is succsesfuly done , wait for email of acceptation")

        this.router.navigateByUrl('/signinComp');
      } else {

        Swal.fire('Repeat again please')
      }
    } else {
      // alert("your password should contain special caracter")
      Swal.fire("your password should contain special caracter")
    }
  }
}

