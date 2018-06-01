import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../models/bill.model';

@Injectable()
export class BillService {

  private billUrl = 'http://192.168.1.39:3000/bill';
  private currencyUrl = 'http://api.fixer.io/latest?base=';

  constructor(private http: HttpClient) {}

  getBill(): Observable<Bill> {
    return this.http.get<Bill>(this.billUrl);
  }

  getCurrency(base: string = 'RUB'): Observable<any> {
    return this.http.get<any>(this.currencyUrl + base);
  }
}
