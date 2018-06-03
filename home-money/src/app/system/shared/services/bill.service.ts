import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../models/bill.model';

@Injectable()
export class BillService {

  // private billUrl = 'http://192.168.1.39:3000/bill';
  private billUrl = 'http://10.0.0.20:3000/bill';
  private currencyUrl = 'http://api.fixer.io/latest?access_key=8ec6558f3d3fd57ba99b73e9c8925921';

  constructor(private http: HttpClient) {}

  getBill(): Observable<Bill> {
    return this.http.get<Bill>(this.billUrl);
  }

  getCurrency(): Observable<any> {
    return this.http.get<any>(this.currencyUrl);
  }
}
