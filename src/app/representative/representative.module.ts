import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepresentativeRoutingModule } from './representative-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RepresentativeRoutingModule
  ]
})
export class RepresentativeModule { }
