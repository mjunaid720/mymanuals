import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrepresentativeComponent } from './addrepresentative/addrepresentative.component';

const routes: Routes = [
    {
        path: '',
        component: AddrepresentativeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
