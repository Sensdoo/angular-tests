import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../service/poduct';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {

  products: Array<Product> = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

}
