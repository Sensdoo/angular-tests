import { Component, OnInit } from '@angular/core';
import {Stock} from '../objects/stock';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})
export class TestParentComponent implements OnInit {

  stock: string;
  stockToBuy: Stock;
  greeting = 'hello';
  user = {name: 'John'};

  constructor() { }

  ngOnInit() {
  }

  onChangeEvent({target}) {
    this.stock = target.value;
  }

  priceQuoteHandler(event: Stock) {
    this.stockToBuy = event;
  }
}
