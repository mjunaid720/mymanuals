import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { SystemAdminComponent } from './advertisement-list/system-admin.component';
import {FormsModule} from '@angular/forms';
import {ReusableModule} from '../reusable/reusable.module';
import {HeaderComponent} from './header/header.component';
import {StatComponent} from './stat/stat.component';

@NgModule({
  declarations: [SystemAdminComponent, HeaderComponent, StatComponent],
  imports: [
    CommonModule,
    SystemAdminRoutingModule,
    FormsModule,
    ReusableModule
  ]
})
export class SystemAdminModule { }
