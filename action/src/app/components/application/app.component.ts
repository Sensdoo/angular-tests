import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../service/poduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Array<Product> = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

}
