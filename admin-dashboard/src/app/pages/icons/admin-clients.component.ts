import { Component } from '@angular/core';
import { ClientUsersService } from "../../services/client-users.service"
@Component({
    selector: 'client-app',
    templateUrl: 'admin-clients.component.html',
    styleUrls: ['./admin-clients.component.scss']
})

export class AdminClientsComponent {

    allClientUsers: Array<any> = [];
    constructor(private service: ClientUsersService) { }

    ngOnInit() {
        this.service.getClientUsers().subscribe((data: any) => {
            this.allClientUsers = data;
            console.log(data);
        })
    }
    confirmUser(data) {
        this.service.confirmClientUser(data).subscribe((res) => {
            console.log(res)
        },
            (error) => {
                console.log(error);
            });
    }
    deleteUser(data) {
        this.service.deleteClientUser(data.id).subscribe((res) => {
            // document.getElementById("myText").innerHTML = res;
            console.log(res)
        },
            (error) => {
                console.log(error);
            });
    }

}
    // addProducts(data) {
    //     this.service.addProducts(data).subscribe((res) => {
    //         console.log(res)
    //         this.deleteOneProduct(data.id)
    //     },
    //         (error) => {
    //             console.log(error);
    //         });

    // }
    // deleteOneProduct(data) {
    //     this.service.deleteOneProduct(data.id).subscribe((res) => {
    //         document.getElementById("myText").innerHTML = res;

    //     },
    //         (error) => {
    //             console.log(error);
    //         });
    // }

