import { Injectable } from '@angular/core';
import {Address} from './address';

@Injectable()
export class AddressService {

  addresses: Address[] = [
    {id: 1, street: 'Street', house: 1, building: 1},
    {id: 2, street: 'Street', house: 34, building: 2},
    {id: 3, street: 'Street', house: 11, building: 4},
    {id: 4, street: 'Street', house: 6, building: 6},
    {id: 5, street: 'Street', house: 21, building: 2},
    {id: 6, street: 'Street', house: 16, building: 1},
  ];

  constructor() { }

  getAddresses(): Address[] {
    return this.addresses;
  }

  getAddress(id: number): Address {
    return this.addresses.find((item) => item.id === id);
  }
}
