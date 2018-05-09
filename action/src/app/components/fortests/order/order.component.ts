import {Component, Input, OnInit} from '@angular/core';
import {Stock} from '../objects/stock';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  message = 'Waiting for the orders...';
  private _stock: Stock;
  @Input() set stock(value: Stock) {
    if (value && value.bidPrice !== undefined) {
      this.message = `Placed order to buy 100 shares of ${value.stockSymbol} ay \$${value.bidPrice.toFixed(2)}`;
    }
  }

  get stock(): Stock {
    return this._stock;
  }

  constructor() { }

  ngOnInit() {
  }

}
