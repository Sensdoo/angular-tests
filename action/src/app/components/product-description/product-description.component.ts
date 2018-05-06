import { Component, OnInit } from '@angular/core';
import {Product} from '../../service/poduct';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {

  product: Product;

  constructor(private productService: ProductService) {}
}
