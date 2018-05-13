import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formModel: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formModel = this.fb.group({
      'username': ['', Validators.required],
      'ssn': ['', this.ssnValidator],
      'passwordsGroup': this.fb.group({
        'password': ['', Validators.minLength(5)],
        'pconfirm': ['']
      }, {validator: this.equalValidator})
    });
  }

  onSubmit() {
      console.log(this.formModel.controls);
  }

  ssnValidator(control: FormControl): any {
    const value = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return valid ? null : {ssn: true};
  }

  // acyncSsnValidator(control: FormControl): Observable<any> {
  //   const value = control.value || '';
  //   const valid = value.match(/^\d{9}$/);
  //   return Observable.of(valid ? null : {ssn: true}).delay(5000);
  // }

  equalValidator({value}: FormGroup): {[key: string]: any} {
    const [first, ...rest] = Object.keys(value || {});
    const valid = rest.every(v => value[v] === value[first]);
    return valid ? null : {equal: true};
  }
}
