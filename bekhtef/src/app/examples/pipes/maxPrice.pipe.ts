import { JsonPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'maxPrice' })
export class MaxPricePipe implements PipeTransform {

    transform(items: any[], selectedPrice: string): any[] {


        if (items.length === 0 || selectedPrice === "0") {
            return items
        }

        const result = items.filter(item => JSON.parse(item["newPrice"]) <= JSON.parse(selectedPrice))
        if(result.length===0){
            return ["not found"]
        }
        return result
    }
}
