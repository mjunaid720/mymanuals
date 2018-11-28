import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ConsumerComponent } from './consumer/consumer.component';
import { RepresentativeComponent } from './representative/representative.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [LoginComponent, ConsumerComponent, RepresentativeComponent, CompanyComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class LoginModule { }
