import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RespresentativeRoutingModule } from './respresentative-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewManualRecordComponent } from './view-manual-record/view-manual-record.component';
import { SendEmailsToAllComponent } from './send-emails-to-all/send-emails-to-all.component';
import {ReusableModule} from '../reusable/reusable.module';
import { ViewServiceProviderComponent } from './view-service-provider/view-service-provider.component';

@NgModule({
  declarations: [AddProductComponent, HeaderComponent, FooterComponent, ViewProductComponent, ViewManualRecordComponent, SendEmailsToAllComponent, ViewServiceProviderComponent],
  imports: [
    CommonModule,
    RespresentativeRoutingModule,
    FormsModule,
    ReusableModule
  ]
})
export class RespresentativeModule { }
