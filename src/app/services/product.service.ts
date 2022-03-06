import { Injectable } from '@angular/core';
import { Product} from "../models/product.model.";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    new Product(
      "Maillot NBA - Grizzlies ",
      "Maillot NBA Ja Morant pour homme",
      "https://cdn1.basket4ballers.com/126176-thickbox_default/maillot-nba-ja-morant-memphis-grizzlies-nike-icon-edition-cw3670-419.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA - Lakers",
      "Maillot NBA Lebron James pour homme",
      "https://cdn2.basket4ballers.com/127296-thickbox_default/maillot-nba-lebron-james-los-angeles-lakers-statement-edition-2020-cv9481-513.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA - Nets",
      "Maillot NBA Kyrie Irving pour homme",
      "https://cdn2.basket4ballers.com/132831-thickbox_default/maillot-bkn-mnk-df-swgmn-jsy-mmt-21-blue-void-white-irving-kyrie-nba-db4018-400.jpg",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA - Bulls",
      "Maillot NBA Zach Lavine pour homme",
      "https://cdn2.basket4ballers.com/135236-thickbox_default/maillot-nba-zach-lavine-chicago-bulls-nike-city-edition-mixtape-db4021-657.jpg",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA - Warriors",
      "Maillot NBA Stephen Curry pour homme",
      "https://cdn1.basket4ballers.com/135418-thickbox_default/maillot-nba-stephen-curry-golden-state-warriors-nike-city-edition-mixtape-db4027-010.jpg",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA - Mavericks",
      "Maillot NBA Luka Doncic pour homme",
      "https://cdn2.basket4ballers.com/132826-thickbox_default/maillot-nba-luka-doncic-dallas-mavericks-nike-city-edition-mixtape-swingman.jpg\n",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA - 76ers",
      "Maillot NBA Ben Simmons pour homme",
      "https://cdn2.basket4ballers.com/97941-thickbox_default/maillot-ben-simmons-76ers-icon-edition-2020-rush-blue-white-simmons-ben-nba-cw3678-498.jpg",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA - Bucks",
      "Maillot NBA G.Antetokoumpo pour homme",
      "https://cdn1.basket4ballers.com/97545-thickbox_default/maillot-giannis-antetokounmpo-bucks-icon-edition-2020-fir-flat-opal-antetokounmpo-g-nba-cw3672-329.jpg",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA - Hornets",
      "Maillot NBA Lamelo Ball pour homme",
      "https://cdn2.basket4ballers.com/138328-large_default/maillot-nba-lamelo-ball-charlotte-hornets-jordan-icon-edition-swingman.jpg",
      9000,
      0,
      false,
      new Date('2022-02-28'),
      ['XL']
    ),
    new Product(
      "Maillot NBA - Heat",
      "Maillot NBA Jimmy Butler pour homme",
      "https://cdn1.basket4ballers.com/133924-thickbox_default/maillot-nba-jimmy-butler-miami-heat-nike-city-edition-mixtape-swingman.jpg",
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
