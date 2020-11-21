import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  products:[]
  constructor(private server:ProductService) { }

  ngOnInit() {
      this.server.getProducts().subscribe(( data: any) => {
          this.products=data
        console.log(this.products)
      })
  }
}
