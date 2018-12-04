import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableRoutingModule } from './reusable-routing.module';
import { ReusableComponent } from './reusable.component';
import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [ReusableComponent, ButtonComponent, SearchComponent],
  imports: [
    CommonModule,
    ReusableRoutingModule
  ]
})
export class ReusableModule { }
