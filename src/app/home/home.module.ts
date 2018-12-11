import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FormsModule} from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ReusableModule} from '../reusable/reusable.module';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [HomeComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReusableModule,
    LightboxModule
  ]
})
export class HomeModule { }
