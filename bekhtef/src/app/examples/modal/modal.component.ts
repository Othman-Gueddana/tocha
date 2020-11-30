import {Component, Input, Output} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-content',
    template: `  <div class="modal-header" id="modalSocial">
        <h3 class="modal-title text-center">{{item.name}}</h3>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body"> 
    <div class="card-img">
         <img class="img-no-padding" style="max-height:600px;max-width:300px ; margin-left:8%;margin-right:8%;"
            src="{{item.image}}">
    </div>
        <div class="card-body" *ngIf = "item.quantity > 0 ">
            <h3 class="card-title">{{item.name}}</h3>
                <h5 style="color:red"><del>{{item.oldPrice}}</del></h5>
                 <h5 style="color:blue;font-weight: bold;">{{item.newPrice}}</h5>
                 <h5>{{item.description}}</h5>
                 <h5 > Quantity:{{item.quantity}}</h5>
    </div>
      <div class="card-body" *ngIf = "item.quantity === 0 ">
    <h3 class="card-title">{{item.name}}</h3>
        <h5 style="color:red"><del>{{item.oldPrice}}</del></h5>
         <h5 style="color:blue;font-weight: bold;">{{item.newPrice}}</h5>
         <h5>{{item.description}}</h5>
         <h5 style="color:red" > Out Of Stock !!! </h5>
      </div>
    <div class="modal-footer" *ngIf = "item.quantity > 0 " >
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.close(item.id)" > Add to my cart </button>
        </div>
       
    </div>
   `
})
export class NgbdModalContent {
    @Output() public item;
    constructor(public activeModal: NgbActiveModal) {}
    ngOnInit() { }
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {

    constructor(private modalService: NgbModal) {}
    
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
}
