import {Component, OnInit} from '@angular/core';
import {HeaderService} from "./service/header.service";
import {Header} from "./models/header.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  header!: Header[];

  constructor(private headerService: HeaderService) { }
  ngOnInit() {
    this.header = this.headerService.getAllHeader();
  }

  }
