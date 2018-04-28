import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {

  sellerName: string;

  constructor(route: ActivatedRoute) {
    this.sellerName = route.snapshot.params['id'];
   }

  ngOnInit() {
  }

}
