import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { ProductCardComponent} from "./product-card/product-card.component";
import {SortByDatePipe} from './pipes/product.pipe'
import {HeaderComponent} from "./header/header.component";
import  {FooterComponent} from "./footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FilterByNamePipe} from "./pipes/filterByName.pipe";
import {FormsModule} from "@angular/forms";
import {SortByNamePipe} from "./pipes/sortByName.pipe";
import { ProductListComponent } from './product-list/product-list.component';
import {AppRoutingModule} from "./app-routing.module";
import { ProductDetailComponent } from './product-detail/product-detail.component';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    FilterByNamePipe,
    HeaderComponent,
    FooterComponent,
    SortByNamePipe,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR' // 'de-DE' for Germany, 'fr-FR' for France ...
  },
  ],
  bootstrap: [AppComponent],
  exports: [
    SortByDatePipe,
    FilterByNamePipe,
    SortByNamePipe
  ]
})
export class AppModule { }
