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
    food: string = "";
    clothes: string = "";
    four: string = "";
    elec: string = "";
    house: string = "";
    clean: string = "";


    constructor( private ProductService: ProductService,
        private router: Router) { }

    ngOnInit() {}
    onSubmit(f: NgForm) {
        if(f.value.category === 'food'){
            this.ProductService.addFood(f.value).subscribe((res)=>{
             this.food= "y";
            console.log(res);
              },
              (error) => {
                console.log(error)
            })
        }
        if(f.value.category === 'clothes'){
            this.ProductService.addClothes(f.value).subscribe((res)=>{
                this.category = "y"
                this.clothes = "y"
                console.log(res);
              },
              (error) => {
                console.log(error)
            })
        }
        if(f.value.category === 'fourniture'){
            this.ProductService.addFourni(f.value).subscribe((res)=>{
                this.category = "y"

                this.four = "y"
                console.log(res);
              },
              (error) => {
                console.log(error)
            })
        }
        if(f.value.category === 'electronics'){
            this.ProductService.addElec(f.value).subscribe((res)=>{
                this.category = "y"

                this.elec = "y"
                console.log(res);
              },
              (error) => {
                console.log(error)
            })
        }
        if(f.value.category === 'houseHold'){
            this.ProductService.addHouse(f.value).subscribe((res)=>{
                this.category = "y"

                this.house = "y"
                console.log(res);
              },
              (error) => {
                console.log(error)
            })
        }
        if(f.value.category === 'cleaning'){
            this.ProductService.addClean(f.value).subscribe((res)=>{
                this.category = "y"

                this.clean = "y"
                console.log(res);
              },
              (error) => {
                console.log(error)
            })
        }
    }
}
