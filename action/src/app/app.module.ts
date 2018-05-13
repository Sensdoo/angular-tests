import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductService } from './service/product.service';
import { routing } from './app.routing';
import { LoginGuard } from './login-guard';
import {LuxuryModule} from './modules/luxury/luxury.module';
import {appComponents} from './app-components';
import { FilterPipe } from './pipes/filter.pipe';
import { TestParentComponent } from './components/fortests/test-parent/test-parent.component';
import { TestChildComponent } from './components/fortests/test-child/test-child.component';
import { OrderComponent } from './components/fortests/order/order.component';
import { PriceQuoterComponent } from './components/fortests/price-quoter/price-quoter.component';
import { FormComponent } from './components/fortests/form/form.component';
import { ReactiveFormComponent } from './components/fortests/reactive-form/reactive-form.component';

@NgModule({
  declarations: [ appComponents, FilterPipe, TestParentComponent, TestChildComponent, OrderComponent, PriceQuoterComponent, FormComponent, ReactiveFormComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    LuxuryModule,
    routing
  ],
  providers: [
    ProductService,
    LoginGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
