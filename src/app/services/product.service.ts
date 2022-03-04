import { Injectable } from '@angular/core';
import { Product} from "../models/product.model.";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    new Product(
      "Maillot NBA Ja Morant Memphis Grizzlies Nike Icon Edition",
      "Maillot NBA Ja Morant pour homme",
      "https://cdn1.basket4ballers.com/126176-thickbox_default/maillot-nba-ja-morant-memphis-grizzlies-nike-icon-edition-cw3670-419.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA Ja Morant Memphis Grizzlies Nike Icon Edition",
      "Maillot NBA Ja Morant pour homme",
      "https://cdn1.basket4ballers.com/126176-thickbox_default/maillot-nba-ja-morant-memphis-grizzlies-nike-icon-edition-cw3670-419.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA Ja Morant Memphis Grizzlies Nike Icon Edition",
      "Maillot NBA Ja Morant pour homme",
      "https://cdn1.basket4ballers.com/126176-thickbox_default/maillot-nba-ja-morant-memphis-grizzlies-nike-icon-edition-cw3670-419.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA Ja Morant Memphis Grizzlies Nike Icon Edition",
      "Maillot NBA Ja Morant pour homme",
      "https://cdn1.basket4ballers.com/126176-thickbox_default/maillot-nba-ja-morant-memphis-grizzlies-nike-icon-edition-cw3670-419.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA Ja Morant Memphis Grizzlies Nike Icon Edition",
      "Maillot NBA Ja Morant pour homme",
      "https://cdn1.basket4ballers.com/126176-thickbox_default/maillot-nba-ja-morant-memphis-grizzlies-nike-icon-edition-cw3670-419.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA Ja Morant Memphis Grizzlies Nike Icon Edition",
      "Maillot NBA Ja Morant pour homme",
      "https://cdn1.basket4ballers.com/126176-thickbox_default/maillot-nba-ja-morant-memphis-grizzlies-nike-icon-edition-cw3670-419.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA Ja Morant Memphis Grizzlies Nike Icon Edition",
      "Maillot NBA Ja Morant pour homme",
      "https://cdn1.basket4ballers.com/126176-thickbox_default/maillot-nba-ja-morant-memphis-grizzlies-nike-icon-edition-cw3670-419.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA Ja Morant Memphis Grizzlies Nike Icon Edition",
      "Maillot NBA Ja Morant pour homme",
      "https://cdn1.basket4ballers.com/126176-thickbox_default/maillot-nba-ja-morant-memphis-grizzlies-nike-icon-edition-cw3670-419.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA Ja Morant Memphis Grizzlies Nike Icon Edition",
      "Maillot NBA Ja Morant pour homme",
      "https://cdn1.basket4ballers.com/126176-thickbox_default/maillot-nba-ja-morant-memphis-grizzlies-nike-icon-edition-cw3670-419.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA Ja Morant Memphis Grizzlies Nike Icon Edition",
      "Maillot NBA Ja Morant pour homme",
      "https://cdn1.basket4ballers.com/126176-thickbox_default/maillot-nba-ja-morant-memphis-grizzlies-nike-icon-edition-cw3670-419.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
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
