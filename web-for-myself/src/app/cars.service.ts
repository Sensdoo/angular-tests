import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class CarsService {

  constructor(private http: Http) {}

  getCars() {
    return this.http
      .get('http://localhost:3000/cars')
      .map((response: Response) => {
        return response.json();
      });
  }

  addCar(carName: string, color: string) {
    const data = { name: carName, color: color};
    return this.http
      .post('http://localhost:3000/cars', data)
      .map((response: Response) => {
        return response.json();
      });
  }

  setColor(car: any, color: string) {
    car.color = color;
    return this.http
      .put(`http://localhost:3000/cars/${car.id}`, car)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteCar(car: any) {
    return this.http
      .delete(`http://localhost:3000/cars/${car.id}`)
      .map((response: Response) => {
        return response.json();
      });
  }

  // mt() {
  //   return this.http.get('https://spb.db.ertelecom.ru/cgi-bin/ppo/es_webface/mx_rq_interface.login_d');
  // }
}
