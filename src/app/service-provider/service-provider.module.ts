import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProviderRoutingModule } from './service-provider-routing.module';
import { SendEmailComponent } from './send-email/send-email.component';
import { ReusableModule } from '../reusable/reusable.module';

@NgModule({
  declarations: [SendEmailComponent],
  imports: [
    CommonModule,
    ServiceProviderRoutingModule,
    ReusableModule
  ]
})
export class ServiceProviderModule { }
