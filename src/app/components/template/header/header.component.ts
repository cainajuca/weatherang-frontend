import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // talvez tirar a atribuicao
  @Input() page?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
