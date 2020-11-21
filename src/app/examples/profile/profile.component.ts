import { Component, OnInit } from '@angular/core';
import { } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    constructor( private ProductService: ProductService,
        private router: Router) { }


    ngOnInit() {}
    onSubmit(f: NgForm) {
        
    }
}
