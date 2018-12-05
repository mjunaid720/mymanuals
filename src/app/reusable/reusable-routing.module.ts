import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchresultComponent } from './searchresult/searchresult.component';

const routes: Routes = [
 
  {
    path:'search/:id',
    component:SearchresultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReusableRoutingModule { }
