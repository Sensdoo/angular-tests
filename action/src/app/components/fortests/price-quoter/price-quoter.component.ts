import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Stock} from '../objects/stock';

@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.css']
})
export class PriceQuoterComponent implements OnInit {
  @Output() buy: EventEmitter<Stock> = new EventEmitter();
  stockSymbol = 'IBM';
  lastPrice: number;

  constructor() {
    setInterval(() => {
      this.lastPrice = 100 * Math.random();
    }, 2000);
  }

  ngOnInit() {
  }

  buyStock() {
    const stockToBuy: Stock = {
      stockSymbol: this.stockSymbol,
      bidPrice: this.lastPrice
    };
    this.buy.emit(stockToBuy);
  }
}
