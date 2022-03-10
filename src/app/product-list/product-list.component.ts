import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model.";
import {ProductsService} from "../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  search: string = '';
  order: string ='';

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
    this.search =""
  }

}
