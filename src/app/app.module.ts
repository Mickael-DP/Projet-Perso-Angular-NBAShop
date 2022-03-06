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
import { SearchComponent } from './search/search.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR' // 'de-DE' for Germany, 'fr-FR' for France ...
  },
  ],
  bootstrap: [AppComponent],
  exports: [
    SortByDatePipe
  ]
})
export class AppModule { }
