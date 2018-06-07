import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AddressPageComponent } from './address-page/address-page.component';

const routes: Routes = [
	{ path: '', component: SystemComponent, children: [
		{ path: 'search-form', component: SearchFormComponent },
		{ path: 'address-page', component: AddressPageComponent }
	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {}