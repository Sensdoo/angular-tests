import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListComponent} from './components/list/list.component';
import {AddressComponent} from './components/address/address.component';
import {AddressDetailsComponent} from './components/address-details/address-details.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'addressDetails/:id', component: AddressDetailsComponent}
];

export const routing = RouterModule.forRoot(routes);

