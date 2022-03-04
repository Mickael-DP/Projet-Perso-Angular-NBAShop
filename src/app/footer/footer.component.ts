import { Component, Input } from '@angular/core';
import {Footer} from "../models/footer.model";
import {FooterService} from "../services/footer.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() footer!: Footer;

  constructor(private footerService: FooterService) { }


}
