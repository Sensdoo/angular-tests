import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SystemModule } from './system/system.module';
import { AppRoutingModule } from './app-routing.module';
import { StreetService } from './shared/services/street.service';
import { AddressService } from './shared/services/address.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SystemModule
  ],
  providers: [
    StreetService,
    AddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
