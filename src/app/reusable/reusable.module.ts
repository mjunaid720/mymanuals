import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableRoutingModule } from './reusable-routing.module';
import { ReusableComponent } from './reusable.component';
import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReusableComponent, ButtonComponent, SearchComponent, SearchresultComponent],
  imports: [
    CommonModule,
    ReusableRoutingModule,
    FormsModule
  ],
  exports: [
    SearchComponent,
    ButtonComponent
]
})
export class ReusableModule { }
