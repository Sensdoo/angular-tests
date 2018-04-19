import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {


  cars: [{name: string, year: number}] = [
    {name: 'BMW', year: 2017},
    {name: 'Ford', year: 2015},
    {name: 'Mercedes', year: 2016},
    {name: 'Mazda', year: 2011}
  ];

  constructor() {}

  ngOnInit() {
  }

  getDate(): Date {
    return new Date();
  }

  updateCarList(car: {name: string, year: number }) {
    this.cars.push(car);
  }
}
