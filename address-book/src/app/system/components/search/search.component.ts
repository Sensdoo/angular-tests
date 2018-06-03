import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AddressService} from '../../../shared/service/address.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;
  streets: string[];

  constructor(private addressService: AddressService, private fb: FormBuilder) { }

  ngOnInit() {
    this.streets = this.addressService.getAllStreets();

    this.formModel = this.fb.group({
      'streets': [-1],
      'house': [null],
      'building': [null],
      'entrance': [null],
    });
    console.log(this.streets);
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

}
