import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarsService, private router: Router) { }

  ngOnInit() {
    this.carService
      .getCars()
      .subscribe((cars: Car[]) => {
        this.cars = cars;
      });
  }

  openHomePage() {
    this.router.navigate(['/']);
  }
}

interface Car {
  id: number;
  name: string;
  color: string;
}
