import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Product} from '../../service/poduct';
import {Review} from '../../service/review';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export default class ProductDetailComponent {

  product: Product;
  reviews: Review[];

  constructor(route: ActivatedRoute, productService: ProductService) {
    const prodId: number = +(route.snapshot.params['productId']);
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsById(this.product.id);
   }
}
