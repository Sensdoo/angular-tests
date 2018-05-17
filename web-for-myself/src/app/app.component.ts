import { Component, OnInit } from '@angular/core';
import {CarsService} from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cars: Car[] = [];
  carName = '';
  colors = [
    'red',
    'blue',
    'green',
    'pink',
    'yellow',
    'gray'
  ];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {}

  loadCars() {
    this.carsService.getCars()
      .subscribe((cars: Car[]) => {
        this.cars = cars;
        console.log(cars);
      });
  }

  addCar() {
    this.carsService
      .addCar(this.carName, this.getRandColor())
      .subscribe((car: Car) => {
        this.cars.push(car);
      });
    this.carName = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setColor(car: Car) {
    this.carsService
      .setColor(car, this.getRandColor())
      .subscribe(data => console.log(data));
  }

  deleteCar(car: Car) {
    this.carsService
      .deleteCar(car)
      .subscribe(() => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      });
  }

  // getMT() {
  //   this.carsService.mt()
  //     .subscribe( response => {
  //       console.log(response);
  //     });
  // }

}

interface Car {
  id: number;
  name: string;
  color: string;
}
