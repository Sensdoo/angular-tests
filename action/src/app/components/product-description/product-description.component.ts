import { Component } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl} from '@angular/forms';
import {Http} from '@angular/http';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {

  greeting = 'A value';
  flag = false;
  lastStockSymbol: string;
  searchInput: FormControl = new FormControl('');

  constructor(private productService: ProductService, private http: Http) {
    setTimeout(() => {
      this.lastStockSymbol = 'AAPL';
    }, 5000);

    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(stock => this.getStockQuoteFromServer(stock));
  }

  onInputEvent({target}): void {

    console.log(`The input property value = ${target.value}`);
    console.log(`The input attribute value = ${target.getAttribute('value')}`);
    console.log(`The greeting property value = ${this.greeting}`);
  }

  private getStockQuoteFromServer(stock: string) {
    console.log(`The price of ${stock} is ${100 * Math.random()}`);
  }
}
