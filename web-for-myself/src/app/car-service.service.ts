import { Injectable } from '@angular/core';

@Injectable()
export class CarServiceService {

  cars = [
    {name: 'Ford', isSold: false},
    {name: 'Mazda', isSold: true},
    {name: 'Lada', isSold: false},
  ];

  constructor() { }

  addCar(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    });
  }

}
