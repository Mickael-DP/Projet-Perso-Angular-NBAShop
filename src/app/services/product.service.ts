import { Injectable } from '@angular/core';
import { Product} from "../models/product.model.";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    new Product(
      "Peluche Harry Potter",
      "Peluche certifiée OEKO-TEX, coton bio issue du commerce équitable, taille 12 cm ",
      "https://cdn1.basket4ballers.com/126176-thickbox_default/maillot-nba-ja-morant-memphis-grizzlies-nike-icon-edition-cw3670-419.jpg\n",
      2300,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Peluche Ronnald Weasley",
      "Peluche certifiée OEKO-TEX, coton bio issue du commerce équitable, taille 12 cm ",
      "https://cdn2.basket4ballers.com/127296-thickbox_default/maillot-nba-lebron-james-los-angeles-lakers-statement-edition-2020-cv9481-513.jpg\n",
      2300,
      0,
      false,
      new Date('2022-02-27'),
      ['XL', 'L']
    )
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  onLikeProduct(product: Product): void {
    if(product.isLiked) {
      product.likes--;
    } else {
      product.likes++;
    }
    product.isLiked = !product.isLiked;
  }


}
