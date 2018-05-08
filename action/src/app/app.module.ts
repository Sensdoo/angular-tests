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


@NgModule({
  declarations: [ appComponents ],
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
