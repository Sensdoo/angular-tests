import { Component, OnInit } from '@angular/core';
import {AddressService} from '../../../shared/service/address.service';
import {Address} from '../../../shared/service/address';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  addresses: Address[];
  searchInput: FormControl = new FormControl();
  filterCriteria: string;
  date = new Date();
  address = {
    name: 'name',
    name2: 'name2'
  };

  constructor(private addressService: AddressService) {
  }

  ngOnInit() {
    this.getAddresses();
    // this.addresses = this.addressService.getAddresses();
    // this.searchInput
    //   .valueChanges
    //   .subscribe(value => this.filterCriteria = value);
  }

  getAddresses(): void {
    this.addressService.getAddresses()
      .subscribe(addresses => {
        // console.log(addresses);
        this.addresses = addresses;
      });
  }
}
