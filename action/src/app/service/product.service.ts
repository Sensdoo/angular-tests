import { Injectable } from '@angular/core';
import { Product } from './poduct';
import {Review} from './review';

@Injectable()
export class ProductService {

  getProducts(): Product[] {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
  }

  getReviewsById(productId: number): Review[] {
    return reviews
      .filter((r => r.productId === productId))
      .map(r => new Review(r.id, r.productId, <Date>Date.parse(r.timestamp), r.user, r.rating, r.comment));
  }
}

const products = [
  {
    'id': 0,
    'title': 'First Product',
    'price': 24.99,
    'rating': 4.3,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Second Product',
    'price': 64.99,
    'rating': 3.3,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'categories': ['books']
  }
];

const reviews = [
  {
    'id': 0,
    'productId': 0,
    'timestamp': '2018-05-06T00:50:00+00:00',
    'user': 'User 1',
    'rating': 5,
    'comment': 'Aenean vestibulum velit id placerrat posuere. Praesent... '
  },
  {
    'id': 1,
    'productId': 0,
    'timestamp': '2018-05-06T00:52:00+00:00',
    'user': 'User 2',
    'rating': 3,
    'comment': 'Aenean vestibulum velit id placerrat posuere. Praesent... '
  },
];
