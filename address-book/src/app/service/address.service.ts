import { Injectable } from '@angular/core';
import {Address} from './address';

@Injectable()
export class AddressService {

  addresses: Address[] = [
    {id: 1, street: 'Udarnikov', house: 1, building: 1},
    {id: 2, street: 'Lazo', house: 34, building: 2},
    {id: 3, street: 'Osipenko', house: 11, building: 4},
    {id: 4, street: 'Коммуны', house: 6, building: 6},
    {id: 5, street: 'Косыгина', house: 21, building: 2},
    {id: 6, street: 'Ириновский', house: 16, building: 1},
  ];

  constructor() { }

  getAddresses(): Address[] {
    return this.addresses;
  }

  getAddress(id: number): Address {
    return this.addresses.find((item) => item.id === id);
  }

  getAllStreets(): string[] {
    const streets = [];
    this.addresses.forEach(item => {
      streets.push(item.street);
    });

    return streets;
  }
}
