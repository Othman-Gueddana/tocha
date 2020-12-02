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
            // console.log(this.livraisons) 
            this.ClientUsersService.getAllClientUsers().subscribe((result: any) => {
                // this.clients = result
                // for(var i = 0; i < data.length; i++) {
                //     for(var j = 0; j < result.length; j++)
                // }
              })
          })    
    }
}
