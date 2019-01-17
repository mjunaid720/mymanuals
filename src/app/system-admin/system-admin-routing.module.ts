import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemAdminComponent} from './advertisement-list/system-admin.component';
import {StatComponent} from './stat/stat.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: SystemAdminComponent
  },
  {
    path: 'statistics',
    component: StatComponent
  },{
    path: 'feature-product',
    component: FeaturedProductComponent
  },{
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAdminRoutingModule { }
