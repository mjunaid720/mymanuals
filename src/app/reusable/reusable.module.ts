import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusableRoutingModule } from './reusable-routing.module';
import { ReusableComponent } from './reusable.component';
import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [ReusableComponent, ButtonComponent, SearchComponent, SearchresultComponent, LogoutComponent],
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
