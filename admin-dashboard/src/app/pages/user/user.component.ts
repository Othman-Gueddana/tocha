import { Component, OnInit } from '@angular/core';
import { DeleveryService } from '../../services/delevery.service';
import { ClientUsersService } from '../../services/client-users.service';
@Component({
    selector: 'user-cmp',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
    livraisons: Array<any> =[];
    clients: Array<any> =[];
  
    constructor(private DeleveryService: DeleveryService, private ClientUsersService: ClientUsersService) { }
    ngOnInit() {
        this.DeleveryService.getLivraison().subscribe((data: any) => {
            // this.livraisons = data
            this.ClientUsersService.getAllClientUsers().subscribe((result: any) => {
                // this.clients = result 
              })
              console.log(this.clients)
          })    
    }
}
