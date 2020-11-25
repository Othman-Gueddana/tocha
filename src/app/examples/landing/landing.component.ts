import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent } from '../modal/modal.component';
import { NgbdModalContent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  allProducts: Array<any> = [];
  products: Array<any> =[];
  startIndex = 0;
  endIndex = 9;
  page = 1
  productSelected: Number

  title = 'angular-text-search-highlight';
  searchText = '';

 constructor(private server: ProductService, private modalService: NgbModal ) { }

  ngAfterContentChecked() {
    if (!this.searchText){
        this.products = this.allProducts
    }
     
  }

  ngOnInit() {
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
      // console.log(item.newPrice)
      item.newPrice <= value
       );
   
          this.products = filtered1
       if (value ==="Required price"){
         this.products = this.allProducts
       }
  }
  async clickOnMe(item,target){
    let filter = this.allProducts.filter(data =>  data.name === item.name)
    this.products = filter;
   
  }
    
}

//   open(content) {
//     this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }

//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return `with: ${reason}`;
//     }
//   }

