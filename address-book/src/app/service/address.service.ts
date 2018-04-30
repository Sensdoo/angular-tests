import { Injectable } from '@angular/core';
import {Address} from './address';

@Injectable()
export class AddressService {

  addresses: Address[] = [
    {id: 1, street: 'Street1', house: 1, building: 1},
    {id: 2, street: 'Street2', house: 34, building: 2},
    {id: 3, street: 'Street3', house: 11, building: 4},
    {id: 4, street: 'Street4', house: 6, building: 6},
    {id: 5, street: 'Street5', house: 21, building: 2},
    {id: 6, street: 'Street6', house: 16, building: 1},
  ];

  constructor() { }

  getAddresses(): Address[] {
    return this.addresses;
  }
}
