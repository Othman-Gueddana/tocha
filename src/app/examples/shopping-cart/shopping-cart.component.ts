import { Directive, Component, OnInit, Output } from '@angular/core';
import { PurchaseService } from '../services/purchase.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {
  selected: Array<any> =[];
  purchases: Array<any> =[];
  products: Array<any> =[];
  results: Array<any> =[];
  user: any;
  // count:number=0;
  total:number=0;
  
  constructor( private PurchaseService:PurchaseService,private server: ProductService, private router: Router) { }
 
  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('id'));
    this.PurchaseService.getPurchase(this.user).subscribe((data: any) => {
      console.log(data)
      for(var i=0 ; i<data.length; i++){
         if(this.user === data[i].clientId){
           this.purchases.push(data[i])
          console.log(this.purchases)
      } 
    }
    for(var i=0 ; i<this.purchases.length; i++){
      let id = this.purchases[i].productId
      if(this.selected.includes(id) === false ){
      console.log(this.purchases[i].productId)
      this.selected.push(id)
      this.server.getById(id).subscribe((data:any) => {
      this.products.push(data)
       })
      }
    }
    console.log(this.products)
    })
  }
  changed(value,item){
    console.log(item)
    console.log(value)
  for(var i = 0; i < this.products.length; i++){

    if(item.id === this.products[i].id){
      let count = value
      let result=this.products[i].newPrice * count
      console.log(result)
      if(typeof(this.results[i]) === 'number'){
        this.results[i]=result
      }else
      this.results.push(result)
     this.total = 0 ;
      console.log(this.results)
    }
  }
  
  for(var i=0; i<this.results.length; i++){
    this.total = this.total + this.results[i]
  }
}
 
    
  confirm(){
    if(this.total > 0){
      alert("your purchases is succsesfuly confirmed")
    }else {
      this.router.navigateByUrl('/landing');
    }
  }
  clear(id){
    this.PurchaseService.deleteOne(id).subscribe((data: any) => {
      console.log(data)
  })
  }
  clearAll(){
    this.PurchaseService.deleteAll().subscribe((data: any) => {
      console.log(data)
  })
  }
}

