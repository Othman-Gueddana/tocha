import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/user', title: 'Shop', icon: 'nc-diamond', class: '' },
    { path: '/table', title: 'Delivery', icon: 'nc-pin-3', class: '' },
    { path: '/dashboard', title: 'Products', icon: 'nc-tile-56', class: '' },
    { path: '/clients', title: 'Client Users', icon: 'nc-single-02', class: '' },
    { path: '/maps', title: 'Company Users', icon: 'nc-bank', class: '' },
    { path: '/notifications', title: 'Messages', icon: 'nc-bell-55', class: '' },
    { path: '/typography', title: 'feedback', icon: 'nc-caps-small', class: '' },
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
