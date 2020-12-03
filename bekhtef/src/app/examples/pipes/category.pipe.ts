import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Category' })
export class CategoryPipe implements PipeTransform {
    
    transform(items: any[], selectedCategory: string): any[] {
        

        if (items.length === 0 || selectedCategory === "category" ) {
            return items
        }

       const result = items.filter(item=>item["category"]===selectedCategory)
       if(result.length===0){
        return ["not found"]
    }
        return result
    }
}
