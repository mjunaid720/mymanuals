import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdManagerRoutingModule } from './ad-manager-routing.module';
import { CreateAdComponent } from './create-ad/create-ad.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [CreateAdComponent, HeaderComponent],
  imports: [
    CommonModule,
    AdManagerRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdManagerModule { }
