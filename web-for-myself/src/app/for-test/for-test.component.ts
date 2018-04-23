import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-test',
  templateUrl: './for-test.component.html',
  styleUrls: ['./for-test.component.css']
})
export class ForTestComponent implements OnInit {

  jsonText: string = '{ "employees" : [' +
    '{ "firstName":"John", "lastName":"Doe" },' +
    '{ "firstName":"Anna", "lastName":"Smith" },' +
    '{ "firstName":"Peter", "lastName":"Jones" } ]}';

  constructor() { }

  ngOnInit() {
  }

  validateForm() {
    const x = document.forms["myForm"]["fname"].value;
    if (!x) {
      alert('Empty field');
    }
    return false;
  }
}
