import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
    /**
     * Transform
     *
     * @param {any[]} items
     * @param {string} searchText
     * @returns {string} status
     */
    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();

        const result = items.filter(it => it.name.toLowerCase().includes(searchText));
        if(result.length===0){
            return ["not found"]
        }
        return result
    }
}
