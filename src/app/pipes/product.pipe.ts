import { Pipe, PipeTransform } from '@angular/core';
import { Product} from "../models/product.model.";

@Pipe({ name: 'sortByDate' })
export class SortByDatePipe implements PipeTransform {
  transform(products: Product[], order?: any) {
    let desc = !(order && order === 'asc');
    return products.sort((a, b) => {
      if (desc) return b.createdDate.getTime() - a.createdDate.getTime()
      else return a.createdDate.getTime() - b.createdDate.getTime()
    });
  }
}
