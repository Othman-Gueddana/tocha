import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
    <form class="register-form">
    <label>Email</label>
    <div class="input-group form-group-no-border" [ngClass]="{'input-group-focus':focus===true}">
      <div class="input-group-prepend">
        <span class="input-group-text">
            <i class="nc-icon nc-email-85"></i>
        </span>
      </div>

        <input type="text" class="form-control" placeholder="Email" (focus)="focus=true" (blur)="focus=false" >
    </div>

    <label>Password</label>
    <div class="input-group form-group-no-border" [ngClass]="{'input-group-focus':focus1===true}">
      <div class="input-group-prepend">
        <span class="input-group-text">
            <i class="nc-icon nc-key-25"></i>
        </span>
      </div>
        <input type="text" class="form-control" placeholder="Password" (focus)="focus1=true" (blur)="focus1=false" >
    </div>
    <button class="btn btn-danger btn-block btn-round">Register</button>
</form>
    </div>
    `
})
export class NgbdModalContent {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
