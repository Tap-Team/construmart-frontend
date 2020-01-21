import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {CategoriesResolver, ProductResolver} from './shared/resolvers/construmart.resolver';
import {ProductComponent} from './pages/product/product.component';
import {ProductListComponent} from './pages/product-list/product-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent,
    resolve: {
      products: ProductResolver
    }
  },
  {
    path: 'category/:id',
    component: ProductListComponent,
    /*resolve: {
      categories: CategoriesResolver
    }*/
  },
  {
    path: 'product/:id',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
