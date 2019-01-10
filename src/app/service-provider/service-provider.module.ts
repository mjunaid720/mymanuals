import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProviderRoutingModule } from './service-provider-routing.module';
import { SendEmailComponent } from './send-email/send-email.component';
import { ReusableModule } from '../reusable/reusable.module';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [SendEmailComponent, UpdateProfileComponent, HeaderComponent],
  imports: [
    CommonModule,
    ServiceProviderRoutingModule,
    ReusableModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ServiceProviderModule { }
