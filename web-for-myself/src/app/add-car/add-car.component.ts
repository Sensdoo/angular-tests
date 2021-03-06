import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  // carName = '';
  // carYear = 2017;
  // @Output() carEmitter = new EventEmitter<{name: string, year: number}>();

  carName = '';

  constructor(private carService: CarServiceService) { }

  ngOnInit() {
  }

  addCar() {
    this.carService.addCar(this.carName);
    this.carName = '';
  }

  // addCar(carNameEl: HTMLInputElement, carYearEl: HTMLInputElement) {
  //   this.carEmitter.emit({
  //     name: carNameEl.value,
  //     year: +carYearEl.value
  //   });

  //   carNameEl.value = '';
  //   carYearEl.value = '2017';
  // }

}
