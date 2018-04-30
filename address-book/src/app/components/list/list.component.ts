import { Component, OnInit } from '@angular/core';
import {AddressService} from '../../service/address.service';
import {Address} from '../../service/address';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  addresses: Address[];

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.addresses = this.addressService.getAddresses();
  }

}
