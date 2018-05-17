import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  // @Input() car;
  id: number;
  name: string;
  color: string;
  year: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.color = this.route.snapshot.queryParams['color'];
    this.year = this.route.snapshot.queryParams['year'];

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.name = params['name'];
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.color = params['color'];
      this.year = params['year'];
    });
  }

  openLadaPage() {
    this.router.navigate(['/cars', 8, 'Lada'], {
      queryParams: {
        color: 'yellow',
        year: 1990
      }
    });
  }
  // getClass() {
  //   return {
  //     'list-group-item-success': !this.car.isSold,
  //     'list-group-item-danger': this.car.isSold,
  //     'list-group-item': true
  //   };
  // }
  //
  // onAction(type: string) {
  //   this.car.isSold = type === 'buy' ? true : false;
  // }
}
