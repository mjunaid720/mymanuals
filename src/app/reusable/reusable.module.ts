import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableRoutingModule } from './reusable-routing.module';
import { ReusableComponent } from './reusable.component';

@NgModule({
  declarations: [ReusableComponent],
  imports: [
    CommonModule,
    ReusableRoutingModule
  ]
})
export class ReusableModule { }
