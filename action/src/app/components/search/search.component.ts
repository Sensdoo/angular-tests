import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categories: string[];
  formModel: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder) {}

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
    this.formModel = this.fb.group({
      'title': [null, Validators.minLength(3)],
      'price': [null, this.positiveNumberValidator],
      'category': [-1]
    });
  }

  positiveNumberValidator(control: FormControl): any {
    if (!control.value) { return null; }
    const price = parseInt(control.value);
    return price === null || typeof price === 'number' && price > 0 ? null : {positivenumber: true};
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}
