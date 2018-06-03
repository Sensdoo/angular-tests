import {Component, OnDestroy, OnInit} from '@angular/core';

import {BillService} from '../shared/services/bill.service';
import { combineLatest} from 'rxjs/observable/combineLatest';
import {Bill} from '../shared/models/bill.model';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'sens-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private billService: BillService) { }

  ngOnInit() {
    // объеденяем два асинхронных запроса, записываем результат в переменную
    // для отпски от события, для экономии памяти
    this.subscription = this.billService.getBill().combineLatest(
      this.billService.getCurrency()
    ).subscribe((data: [Bill, any]) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
