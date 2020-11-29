import { Component, OnInit } from '@angular/core';
import { CompanyUsersService } from "../services/company-users.service";
import { ClientUsersService } from "../services/client-users.service";
import { ProductsService } from "../services/products.service";

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', class: '' },
    { path: '/products', title: 'Products ', icon: 'nc-bank', class: '' },
    { path: '/clients', title: 'Client Users ', icon: 'nc-diamond', class: '' },
    { path: '/company', title: 'Company Users', icon: 'nc-pin-3', class: '' },
    { path: '/user', title: 'Delivery', icon: 'nc-single-02', class: '' },
    { path: '/table', title: 'Product List', icon: 'nc-tile-56', class: '' },
    { path: '/typography', title: 'Feedback', icon: 'nc-caps-small', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro' },
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    allCompanyUsers: Array<any> = [];
    allClientUsers: Array<any> = [];
    allProducts: Array<any> = [];
    CompanyRequests = 0;
    ClientRequests = 0;
    ProductsRequests = 0;
    public menuItems: any[];
    constructor(private service1: CompanyUsersService, private service2: ClientUsersService, private service3: ProductsService) { }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);

        this.service1.getCompanyUsers().subscribe((data: any) => {
            this.allCompanyUsers = data;
            this.CompanyRequests = this.allCompanyUsers.length
        })
        this.service2.getClientUsers().subscribe((data: any) => {
            this.allClientUsers = data;
            this.ClientRequests = this.allClientUsers.length
        })
        this.service3.getProducts().subscribe((data: any) => {
            this.allProducts = data;
            console.log(data);
            this.ProductsRequests = this.allProducts.length
        });

    }
}
