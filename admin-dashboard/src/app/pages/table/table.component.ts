import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit {
    products: Array<any> =[];
    constructor(private server: ProductsService) { }
    ngOnInit() {
        this.server.getPro().subscribe((data: any) => {
            this.products = data
          })
          console.log(this.products) 
    }
    delete(id){
        this.server.deleteOneProduct(id).subscribe((data: any) => {
            console.log(data)
        })
        this.products = this.products.filter((val,i)=>val.id !== id)
    }
}
