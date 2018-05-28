import { Injectable } from '@angular/core';
import {Address} from './address';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AddressService {

  private url = 'http://localhost:3000/addresses';
  private httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  addresses = [];

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.url, this.httpOption);
  }

  // getAddress(id: number): Address {
  //   return this.addresses.find((item) => item.id === id);
  // }

  getAllStreets(): string[] {
    const streets = [];
    this.addresses.forEach(item => {
      streets.push(item.street);
    });

    return streets;
  }
}
