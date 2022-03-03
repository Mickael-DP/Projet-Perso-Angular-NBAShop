import {Component, OnInit} from '@angular/core';
import {HeaderService} from "./services/header.service";
import {ProductsService} from "./services/product.service";
import {Header} from "./models/header.model";
import {Product} from "./models/product.model.";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  header!: Header;
  products!: Product[];

  constructor(
    private headerService: HeaderService,
    private productsService: ProductsService
  ) { }
  ngOnInit() {
    this.header = this.headerService.getHeader();
    this.products = this.productsService.getAllProducts();
  }

  }
