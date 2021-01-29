import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() attHeader = new EventEmitter<string>();

  changeHeader(page: string): void {
    this.attHeader.emit(page)
  }

}
