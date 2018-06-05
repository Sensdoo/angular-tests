/*
  Модуль это всегда класс, который содержит декоратор @NgModule. Модулей может быть сколько угодно,
  которые могут содержыть свои компонеты, модули и сервисы, но они должны быть имопортированы в основной модуль.
  Так же сюда импортируются модули из Angular. Все добавленые компонеты, модули, сервисы должны иметь импорты.
  @NgModule содержит свойства:
    decorations: массив всех компонентов приложения(если они не объявлены в своих модулях),
    imports: массив созданных модулей и модулей Angular(если они не импортированы в свои модулях),
    providers: массив сервисов дл;
import { CarsComponent } from './block-2/cars/cars.component'я работы с ;
import { CarComponent } from './block-2/car/car.component'сетью, бд итд.(если они не п,
    CarsComponent,
    CarComponentредставлены в свои модулях),
    bootstrap: указывается основной компонент с которого начинается отрисовка приложения, указывается только в основном модуле.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent } from './block-2/lesson-1/my/my.component';
import {CarsL2Component} from './block-2/lesson-2/cars/cars-l2.component';
import {CarL2Component} from './block-2/lesson-2/car/car-l2.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    CarsL2Component,
    CarL2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
