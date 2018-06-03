import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AddressService} from '../../../shared/service/address.service';
import {ActivatedRoute} from '@angular/router';
import {Address} from '../../../shared/service/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() address: Address;

  constructor() {}

  ngOnInit() {
  }

}
