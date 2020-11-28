import { Component,Output } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { LivraisonService } from '../services/livraison.service'
import { PurchaseService } from '../services/purchase.service';
@Component({
  selector: 'app-modal-purchase',
  template: ` <div class="test" id="modal-dialog" tabindex="-1" role="dialog" aria-labelledby="modalIdLabel">
  <div class="modal-header" id="modalSocial">
  <h3 class="modal-title text-center">Purchanse</h3>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>      
</div>    
<div class="modal-body"> 
<table style =" font-family: arial, sans-serif;
border-collapse: collapse;
width: 100%;">
    <tr style=" background-color: #dddddd;">
      <th style="  border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;"> Quantity </th>
      <th style="  border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;"> 
      Product's Name </th>
      <th style="  border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;">Price</th>
    </tr>
    <tr style="background-color: #dddddd;" *ngFor="let i of item" >
      <td style="border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;"> 
       {{i.quantity}} 
      </td>
      <td style="border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;">
      {{i.productName}} 
      </td>
      <td style="border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;">
      {{i.price}} 
      </td>
    <tr>
    
  </table>
</div>
<div class="total"> <h3> Total : {{total}} </h3></div>
<div class="modal-footer">
<div class="left-side">
    <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')"> Cancel </button>
</div>
<div class="divider"></div>
<div class="right-side">
    <button type="button" class="btn btn-danger btn-link" (click)="confirm(item)">Confirm purchase</button>
</div>
</div>
`
  
})

 export class ModalPurchaseComponent {
   constructor(public activeModal: NgbActiveModal, private LivraisonService:LivraisonService, private PurchaseService:PurchaseService) { }  
   ngOnInit() { }
   confirm(item){
     console.log(item)
     for(var i=0 ; i<item.length ; i++ ){
      let data = {
        status: item[i].status,
        clientName: item[i].clientName,
        clientId: item[i].clientId,
        productId: item[i].productId,
        productName: item[i].productName,
        price: item[i].price,
        quantity: item[i].quantity,
       }
      this.LivraisonService.addLivraison(data).subscribe((res)=>{
        console.log(res);
      },
      (error) => {
      console.log(error);
      })
     }

    this.PurchaseService.deleteAll().subscribe((res)=>{
      console.log(res);
    },
    (error) => {
    console.log(error);
    })
   window.location.reload()
  }
 }

