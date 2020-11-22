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
 
