import { Component, OnInit } from '@angular/core';
import {Product} from '../../service/poduct';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductService) {
    this.products = productsService.getProducts();
  }

  ngOnInit() {
  }

}
