import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { AddressService } from '../../shared/services/address.service';
import { Entrance } from '../../entities/entrance.entity';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css']
})
export class AddressPageComponent implements OnInit {

  entrances: Entrance[];

  constructor(
  	private route: ActivatedRoute,
    private router: Router,
  	private addressService: AddressService
  ) { }

  ngOnInit() {
  	this.route.queryParams
      .subscribe((params: Params) => {
        if (params['addressId']) {
          this.addressService.getAllEntrancesByAddressId(params['addressId'])
            .subscribe((entrances: Entrance[]) => {
              this.entrances = entrances;
            });
        }
    });
  }

  onBackClick() {
    this.router.navigate(['/search-form'])
  }
}
