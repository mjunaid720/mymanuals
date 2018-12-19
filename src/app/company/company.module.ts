import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { AddrepresentativeComponent } from './addrepresentative/addrepresentative.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddServiceProviderComponent } from './add-service-provider/add-service-provider.component';

@NgModule({
  declarations: [AddrepresentativeComponent, HeaderComponent, FooterComponent, AddServiceProviderComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
      FormsModule,
      HttpClientModule
  ]
})
export class CompanyModule {

}
