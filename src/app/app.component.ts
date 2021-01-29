import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  page: string = 'home'

  attPage(nextPage: string) {
    this.page = nextPage
  }
  
}
