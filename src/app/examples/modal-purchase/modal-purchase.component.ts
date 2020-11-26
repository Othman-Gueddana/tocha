import { Component,Output } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-purchase',
  template: ` <div class="modal fade" id="modal-dialog" tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
  <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <button type="button" 
                      class="close" 
                      data-dismiss="modal" 
                      aria-label="Close"><span aria-hidden="true">&times;</span>
              </button>
              <ng-content select="[head]"></ng-content>
          </div>
          <div class="modal-body">
              <ng-content select="[body]"></ng-content>
          </div>
          <div class="modal-footer">
              <ng-content select="[footer]"></ng-content>
          </div>
      </div>
  </div>
</div>    
`
  
})

export class ModalPurchaseComponent {
    constructor() { }
}
export class NgbdModalContent {
  @Output() public item;
  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit() { }
}
@Component({
  selector: 'app-modal-purchase',
  templateUrl: './modal-purchase.component.html'
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
