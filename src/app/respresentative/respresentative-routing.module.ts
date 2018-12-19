import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import {ViewProductComponent} from './view-product/view-product.component';
import {ViewManualRecordComponent} from './view-manual-record/view-manual-record.component';

const routes: Routes = [
  {
    path: '',
    component: AddProductComponent
  },
  {
    path: 'viewproduct',
    component: ViewProductComponent
  },
  {
    path: 'viewmanual/:id',
    component: ViewManualRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RespresentativeRoutingModule { }
