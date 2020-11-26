import { Component,Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  template: `  <div class="modal-header" id="modalSocial">
  <h3 class="modal-title text-center">test</h3>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
  <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body"> 
<div class="card-img">
  <p>test</p>
</div>
  <div class="card-body">
      <h3>test</h3>
</div>
<div class="modal-footer">
  <div class="left-side">
      <button type="button" class="btn btn-default btn-link" (click)="activeModal.close(item)" > Add to my cart </button>
  </div>
 
</div>
`
  
})
export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-modal-purchase',
  templateUrl: './modal-purchase.component.html'
})

export class NgbdModalComponent {

  constructor(private modalService: NgbModal) {}
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
}
}
