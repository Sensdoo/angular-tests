import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit, OnChanges {
  private _stockSymbol: string;
  @Input() greeting: string;
  @Input() user: {name: string};
  message = 'Initial message';

  @Input() set stockSymbol(value: string) {
    this._stockSymbol = value;
    if (this._stockSymbol !== undefined) {
      console.log(`${this._stockSymbol} not undefined`);
    }
  }

  get stockSymbol(): string {
    return this._stockSymbol;
  }

  @Input() quantity: number;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

}
