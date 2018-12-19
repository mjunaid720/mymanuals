import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import {ViewProductComponent} from './view-product/view-product.component';
import {ViewManualRecordComponent} from './view-manual-record/view-manual-record.component';
import {SendEmailsToAllComponent} from './send-emails-to-all/send-emails-to-all.component';
import {ViewServiceProviderComponent} from './view-service-provider/view-service-provider.component';

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
  },
  {
    path: 'sendemail',
    component: SendEmailsToAllComponent
  },
  {
    path: 'viewsp',
    component: ViewServiceProviderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RespresentativeRoutingModule { }
