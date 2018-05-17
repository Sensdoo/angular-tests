import { Component, OnInit } from '@angular/core';
import {AddressService} from '../../service/address.service';
import {Address} from '../../service/address';
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

  constructor(private addressService: AddressService) {
  }

  ngOnInit() {
    this.addresses = this.addressService.getAddresses();
    this.searchInput
      .valueChanges
      .subscribe(value => this.filterCriteria = value);
  }

}
