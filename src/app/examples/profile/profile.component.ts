import { Component, OnInit } from '@angular/core';
import { } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  
    category: string = "";
    status: string = "";
    constructor( private ProductService: ProductService,
        private router: Router) { }

    ngOnInit() {}
    addCategory(f:NgForm) {
      this.category = f.value.category
      this.status = f.value.category
    }

    onSubmit(f: NgForm) {
       
        let user = JSON.parse(window.localStorage.getItem('id'));
         console.log(user)
        console.log(f.value)
        const obj = {
           name:f.value.name,
           oldPrice:f.value.oldPrice,
           newPrice:f.value.newPrice,
           description:f.value.description,
           category:this.category,
           image:"img-url",
           ownerId:user,
           expireddate:f.value.expireddate,
           creationDate:f.value.creationDate,
           quantity:f.value.quantity,
           device:f.value.device,
           humanKind:f.value.humanKind,
           type:f.value.type,
        }
        if(this.category === 'food'){
            this.ProductService.addFood(obj).subscribe((res)=>{
                console.log(obj)
            console.log(res);
              },
              (error) => {
                console.log(error)
            })
        }
         else if(this.category === 'clothes'){
            this.ProductService.addClothes(obj).subscribe((res)=>{
                console.log(res);
              },
              (error) => {
                console.log(error)
            })
        }
        else if(this.category === 'fourniture'){
            this.ProductService.addFourni(obj).subscribe((res)=>{
                console.log(res);
              },
              (error) => {
                console.log(error)
            })
        }
        else if(this.category === 'electronics'){
            this.ProductService.addElec(obj).subscribe((res)=>{
                console.log(res);
              },
              (error) => {
                console.log(error)
            })
        }
        else if(this.category === 'houseHold'){
            this.ProductService.addHouse(obj).subscribe((res)=>{
                console.log(res);
              },
              (error) => {
                console.log(error)
            })
        }
        else if(this.category === 'cleaning'){
            this.ProductService.addClean(obj).subscribe((res)=>{
                console.log(res);
              },
              (error) => {
                console.log(error)
            })
        }
    }
}
