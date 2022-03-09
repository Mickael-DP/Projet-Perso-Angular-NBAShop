import {Component, Input} from '@angular/core';
import {Product} from "../models/product.model.";
import {ProductsService} from "../services/product.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input() myProduct!: Product;
  selected: string = '';
  multiplier: number | undefined

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.onSelectedSize();
  }

  onLike() {
    this.productsService.onLikeProduct(this.myProduct)
  }

  onSelectedSize() {
    this.multiplier = this.selected === 'L' ? 2 : 1;
    this.myProduct.price = this.myProduct.price * this.multiplier;
  }
}
