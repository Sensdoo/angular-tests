import {Component, ViewEncapsulation} from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../service/poduct';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  encapsulation: ViewEncapsulation.None
})
export default class ApplicationComponent {
}
