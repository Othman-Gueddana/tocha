import { Component, OnInit , Input } from '@angular/core';
import { ProductService } from '../services/product.service';
//import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  products:[];
  startIndex = 0;
  endIndex = 9;
  $: any
  page = 1
 
  constructor(private server: ProductService , private modalService: NgbModal) { }

  ngOnInit() {
      this.server.getProducts().subscribe(( data: any) => {
          this.products=data
        console.log(this.products)
      })}
      open(item) {
        debugger;
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
 
