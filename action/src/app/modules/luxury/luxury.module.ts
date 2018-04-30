import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryComponent } from './luxury.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'luxury', component: LuxuryComponent}
    ])
  ],
  declarations: [LuxuryComponent]
})
export class LuxuryModule { }
