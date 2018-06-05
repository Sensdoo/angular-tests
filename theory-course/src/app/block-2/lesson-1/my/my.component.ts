/*
  Компонент это всегда класс, который содержит декоратор @Component,
  @Component содержит 3 свойства определяющих поведение компонента, импортируется из @angular/core
   и должен быть объявлен в модуле
 */
import { Component } from '@angular/core';

@Component({
  // используется для использования в html
  selector: 'app-my',
  // шаблон который отрисовывается в браузере при использовании селектора <app-my></app-my>
  templateUrl: './my.component.html',
  // стили для html шаблона
  styleUrls: ['./my.component.css']
})
export class MyComponent {}
