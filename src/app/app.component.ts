import {Component, OnInit} from '@angular/core';
import {HeaderService} from "./services/header.service";
import {ProductsService} from "./services/product.service";
import {Header} from "./models/header.model";
import {Product} from "./models/product.model.";
import {Footer} from "./models/footer.model";
import {FooterService} from "./services/footer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  header!: Header;
  footer!: Footer;
  products!: Product[];


  constructor(
    private headerService: HeaderService,
    private productsService: ProductsService,
    private footerService: FooterService
  ) { }
  ngOnInit() {
    this.header = this.headerService.getHeader();
    this.footer = this.footerService.getFooter();

  }

  }
