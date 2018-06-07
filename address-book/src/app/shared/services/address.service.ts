import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Address } from '../../entities/address.entity';
import { Entrance } from '../../entities/entrance.entity';

@Injectable()
export class AddressService {

  // private addressUrl = 'http://10.0.0.17:3000/addresses/';
  private addressUrl = 'http://192.168.1.39:3000/addresses/';

  constructor(private http: HttpClient) {}

  getAddressId(street: string, house: string, building: string): Observable<Address[]> {
  	return this.http.get<Address[]>(this.addressUrl, {
  	  params: new HttpParams().append('street', street).append('house', house).append('building', building)
  	});
  }

  getAllEntrancesByAddressId(id: number): Observable<Entrance[]> {
    return this.http.get<Entrance[]>(this.addressUrl + id + '/entrances');
  }
}
