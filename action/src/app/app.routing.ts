import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { SellerInfoComponent } from './components/seller-info/seller-info.component';

const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'product/:id', component: ProductDetailComponent,
        children: [
            {path: '', component: ProductDescriptionComponent},
            {path: 'seller/:id', component: SellerInfoComponent}
        ]},
    {path: '**', component: Error404Component}
];

export const routing = RouterModule.forRoot(routes);
