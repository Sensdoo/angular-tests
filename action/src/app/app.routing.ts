import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { SellerInfoComponent } from './components/seller-info/seller-info.component';
import {LoginGuard} from './login-guard';
import {ChatComponent} from './components/chat/chat.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  {path: 'product/:id', component: ProductDetailComponent, canActivate: [LoginGuard],
    children: [
      {path: '', component: ProductDescriptionComponent},
      {path: 'seller/:id', component: SellerInfoComponent}
    ]},
  {path: '**', component: Error404Component}
];

export const routing = RouterModule.forRoot(routes);
