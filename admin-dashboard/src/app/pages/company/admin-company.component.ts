import { Component, OnInit } from '@angular/core';
import { CompanyUsersService } from "../../services/company-users.service"

@Component({
    selector: 'company-app',
    templateUrl: 'admin-company.component.html',
    styleUrls: ['./admin-company.component.scss']
})

export class CompanyComponent implements OnInit {


    allCompanyUsers: Array<any> = [];
    constructor(private service: CompanyUsersService) { }

    ngOnInit() {
        this.service.getCompanyUsers().subscribe((data: any) => {
            this.allCompanyUsers = data;
            console.log(data);
        })
    }
    confirmUser(data) {
        this.service.confirmCompanyUser(data).subscribe((res) => {
            console.log(res)
        },
            (error) => {
                console.log(error);
            });
        this.deleteUser(data);

    }
    deleteUser(data) {
        this.service.deleteCompanyUser(data.id).subscribe((res) => {
            // document.getElementById("myText").innerHTML = res;
            console.log(res)
        },
            (error) => {
                console.log(error);
            });
        location.reload()
    }
}




