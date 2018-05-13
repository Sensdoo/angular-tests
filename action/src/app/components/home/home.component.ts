import { Component, OnInit } from '@angular/core';
import { Product } from '../../service/poduct';
import { ProductService } from '../../service/product.service';
import { FormControl } from '@angular/forms';
// import 'rxjs/add/operator/debounceTime';
// import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: string;

  constructor(private productsService: ProductService) {
    this.products = productsService.getProducts();
    this.titleFilter.valueChanges
      .debounceTime(1000)
      .subscribe(
        value => this.filterCriteria = value,
        error => console.log(error));
  }

  ngOnInit() {
  }

}
