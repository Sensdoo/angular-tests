import { Component } from '@angular/core';
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
  newRating: number;
  newComment: string;
  isReviewHidden = true;

  constructor(route: ActivatedRoute, productService: ProductService) {
    const prodId: number = +(route.snapshot.params['productId']);
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsById(this.product.id);
  }

  addReview() {
    const review = new Review(0, this.product.id, new Date(), 'Anonymous', this.newRating, this.newComment);
    console.log('Adding review ' + JSON.stringify(review));
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);
    this.resetForm();
  }

  private averageRating(reviews: Review[]) {
    const sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  private resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }
}
