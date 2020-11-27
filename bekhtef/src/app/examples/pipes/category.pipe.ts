import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Category' })
export class CategoryPipe implements PipeTransform {
    
    transform(items: any[], selectedCategory: string): any[] {
        

        if (items.length === 0 || selectedCategory === "category" ) {
            return items
        }

        return items.filter(item=>item["category"]===selectedCategory)
            
    }
}
