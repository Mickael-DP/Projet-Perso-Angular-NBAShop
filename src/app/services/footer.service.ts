import { Injectable } from '@angular/core';
import { Footer } from '../models/footer.model';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  footer: Footer = new Footer('NBA StoreFR', 'By Mickael DALLE PASQUALINE');

  getFooter(): Footer {
    return this.footer;
  }
}
