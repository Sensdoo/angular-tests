import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListComponent} from './components/list/list.component';
import {AddressComponent} from './components/address/address.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'address/:id', component: AddressComponent}
];

export const routing = RouterModule.forRoot(routes);

