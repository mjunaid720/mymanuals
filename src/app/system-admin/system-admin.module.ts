import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { SystemAdminComponent } from './system-admin.component';
import { StatComponent } from './stat/stat.component';

@NgModule({
  declarations: [SystemAdminComponent, StatComponent],
  imports: [
    CommonModule,
    SystemAdminRoutingModule
  ]
})
export class SystemAdminModule { }
