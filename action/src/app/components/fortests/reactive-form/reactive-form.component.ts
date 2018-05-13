import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formModel: FormGroup = new FormGroup({
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl(),
      emails: new FormArray([
        new FormControl()
      ])
    })
  });

  constructor() { }

  ngOnInit() {
  }

}
