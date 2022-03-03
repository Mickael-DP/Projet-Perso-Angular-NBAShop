import { Injectable } from '@angular/core';
import { Header } from '../models/header.model';

@Injectable({
  providedIn: 'root'
})

export class HeaderService {
  header: Header[] = [
    new Header(
      "NBA StoreFR",
      "https://www.finder.com/global/images/providers/nbastore-transparent-logo-232x140px.png",
    ),
  ];

  getAllHeader(): Header[] {
    return this.header;
  }

}
