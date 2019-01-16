import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemAdminComponent } from './system-admin.component';
import { StatComponent } from './stat/stat.component';

const routes: Routes = [
  {
  path: '',
  component: SystemAdminComponent
},{
  path: 'count',
  component: StatComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemAdminRoutingModule { }
