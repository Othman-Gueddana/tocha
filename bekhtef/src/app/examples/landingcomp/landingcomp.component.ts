import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal/modal.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-landingcomp',
  templateUrl: './landingcomp.component.html',
  styleUrls: ['./landingcomp.component.css']
})
export class LandingcompComponent implements OnInit {
  focus: any;
  focus1: any;
  allProducts: Array<any> = [];
  products: Array<any> =[];
  startIndex = 0;
  endIndex = 9;
  page = 1;
  productSelected: Number;

  constructor(private server: ProductService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.server.getProducts().subscribe((data: any) => {
      this.allProducts = data
      console.log(this.products)
      this.products = this.allProducts
    })
  }
  open(item) {
    console.log(item)
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.item = item;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });

  }
  updateIndex(pageIndex) {
    this.startIndex = pageIndex * 9;
    this.endIndex = this.startIndex + 9
    document.documentElement.scrollTop = 0;
    this.page = Math.ceil(this.endIndex / 9)
  }

  getArrayFromNumber(length) {
    return new Array(Math.floor(length / 10))
  }

  getCategoriesdata(value: string) {
    console.log(this.products)
    let filtered = this.allProducts.filter(item => item.category === value )
      this.products = filtered
      if(value==="category"){
        this.products = this.allProducts
      }
     
  }
  getPricedata(value: string) {
    let filtered1 = this.allProducts.filter(item => 
      console.log(item.newPrice)
      // item.newPrice <= value
       );
   
          this.products.concat(filtered1)
       if (value ==="Required price"){
         this.products = this.allProducts
       }
  }
}

