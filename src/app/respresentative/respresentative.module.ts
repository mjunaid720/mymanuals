import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RespresentativeRoutingModule } from './respresentative-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewManualRecordComponent } from './view-manual-record/view-manual-record.component';

@NgModule({
  declarations: [AddProductComponent, HeaderComponent, FooterComponent, ViewProductComponent, ViewManualRecordComponent],
  imports: [
    CommonModule,
    RespresentativeRoutingModule,
    FormsModule
  ]
})
export class RespresentativeModule { }
