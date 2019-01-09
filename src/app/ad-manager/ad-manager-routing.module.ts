import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAdComponent} from './create-ad/create-ad.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdManagerRoutingModule { }
