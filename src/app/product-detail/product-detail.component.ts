import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product.model.";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  myProduct!: Product;
  id!: number

  constructor(
    private route: ActivatedRoute,
    private productsService:ProductsService

  ) {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id'])
    })
  }

  ngOnInit(): void {
    this.myProduct = this.productsService.getOneProduct(this.id)
  }

}
