import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AddressService} from '../../service/address.service';
import {ActivatedRoute} from '@angular/router';
import {Address} from '../../service/address';

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
