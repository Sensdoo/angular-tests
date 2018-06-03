import { Component, OnInit } from '@angular/core';
import {Address} from '../../../shared/service/address';
import {AddressService} from '../../../shared/service/address.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  addressID: number;
  address: Address;

  constructor(private addressService: AddressService, private route: ActivatedRoute) {
    this.addressID = Number(route.snapshot.params['id']);
  }

  ngOnInit() {
    // this.address = this.addressService.getAddress(this.addressID);
  }

}
