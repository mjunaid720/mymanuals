import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import {ViewProductComponent} from './view-product/view-product.component';

const routes: Routes = [
  {
    path: '',
    component: AddProductComponent
  },
  {
    path: 'viewproduct',
    component: ViewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RespresentativeRoutingModule { }
