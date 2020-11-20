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
  products:any=[]
  constructor(private server:ProductService) { }
  ngOnInit() {
  }
// getProducts(){
//   this.server.getProducts().then((response:any)=>{
//     for(let res of response ){
//       this.products.push({
//         title:res.title,
//         oldPrice:res.oldPrice,
//         newPrice:res.newPrice,
//         description:res.description,
//         category:res.category,
//         image:res.image,
//         ownerId:res.ownerId,
//         expireddate:res.expireddate,
//         creationDate:res.creationDate,
//         quantity:res.quantity,
//         device:res.device,
//         humanKind:res.humanKind,
//         type:res.type,
//       });
//     }
//   })
//   console.log(this.products)
// }
}
