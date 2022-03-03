import { Component, Input } from '@angular/core';
import {Header} from "../models/header.model";
import {HeaderService} from "../service/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() header!: Header;

  constructor(private headerService: HeaderService) { }


}
