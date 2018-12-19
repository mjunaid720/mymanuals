import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrepresentativeComponent } from './addrepresentative/addrepresentative.component';
import {AddServiceProviderComponent} from './add-service-provider/add-service-provider.component';

const routes: Routes = [
    {
        path: '',
        component: AddrepresentativeComponent
    },
    {
      path: 'serviceprovider',
      component: AddServiceProviderComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
