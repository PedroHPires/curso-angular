import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-title title = 'Minha benha' ></app-title>
  <router-outlet></router-outlet>`,
})

export class AppComponent {
  constructor(){

  }

}
