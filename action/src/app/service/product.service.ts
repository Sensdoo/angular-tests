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
      .map(r => new Review(r.id, r.productId, <Date>r.timestamp, r.user, r.rating, r.comment));
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
  },
  {
    'id': 2,
    'title': 'Third Product',
    'price': 159.99,
    'rating': 4.0,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'categories': ['tools']
  },
  {
    'id': 3,
    'title': 'More Product',
    'price': 1.99,
    'rating': 5.0,
    'description': 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'categories': ['pen']
  }
];

const reviews = [
  {
    'id': 0,
    'productId': 0,
    'timestamp': new Date('2018-05-05T00:12+00:00'),
    'user': 'User 1',
    'rating': 5,
    'comment': 'Aenean vestibulum velit id placerrat posuere. Praesent... '
  },
  {
    'id': 1,
    'productId': 0,
    'timestamp': new Date('2018-05-05T00:16+00:00'),
    'user': 'User 2',
    'rating': 3,
    'comment': 'Aenean vestibulum velit id placerrat posuere. Praesent... '
  },
];
