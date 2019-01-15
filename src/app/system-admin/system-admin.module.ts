import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { SystemAdminComponent } from './system-admin.component';

@NgModule({
  declarations: [SystemAdminComponent],
  imports: [
    CommonModule,
    SystemAdminRoutingModule
  ]
})
export class SystemAdminModule { }
