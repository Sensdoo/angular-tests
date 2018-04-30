import {Component, Input, OnInit} from '@angular/core';
import {AddressService} from '../../service/address.service';
import {ActivatedRoute} from '@angular/router';
import {Address} from '../../service/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressID: number;
  address: Address;
  addresses: Address[];

  constructor(private route: ActivatedRoute, private addressService: AddressService) {
    this.addressID = route.snapshot.params['id'];
    this.addresses = addressService.getAddresses();

    for (let i = 0; i < this.addresses.length; i++) {

      console.log(this.addresses[i].id);
      console.log(this.addressID);
      if (this.addresses[i].id === this.addressID) {
        this.address = this.addresses[i];
      }
    }
  }

  ngOnInit() {

  }

}
