/*
  Вместо templateUrl можно укзать template и писать html код прямо в компоненте
  Вместо styleUrls можно укзать styles и писать стили прямо в компоненте
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-l2',
  template: `
    <h2>Single Car</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ratione.</p>
  `,
  styles: [`
    h2 { color: aqua }
  `]
})
export class CarL2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
