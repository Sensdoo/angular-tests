import { Injectable } from '@angular/core';
import { Product } from './poduct';

@Injectable()
export class ProductService {

  products: Product[] = [
    { title: 'prod1', price: 10, rating: 4, description: 'desc 0001' },
    { title: 'prod2', price: 45, rating: 3, description: 'desc 02342f' },
    { title: 'prod3', price: 111, rating: 1, description: 'desc 05646' }
  ];

  constructor() { }

  getProducts(): Array<Product> {
    return this.products;
  }
}

