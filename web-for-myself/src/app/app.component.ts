import { Component, OnInit } from '@angular/core';
import { CarServiceService } from './car-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // cars;
  answers = [
    {type: 'yes', text: 'Да'},
    {type: 'no', text: 'Нет'}
  ];

  defaultCountry = 'ru';
  defaultAnswer = 'no';

  constructor(private carService: CarServiceService) {}

  ngOnInit() {
    // this.cars = this.carService.cars;
  }

  submitForm(form: NgForm) {
    console.log(form);
  }
}
