import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceproviderRoutingModule } from './serviceprovider-routing.module';
import { ServiceproviderComponent } from './serviceprovider/serviceprovider.component';

@NgModule({
  declarations: [ServiceproviderComponent],
  imports: [
    CommonModule,
    ServiceproviderRoutingModule
  ]
})
export class ServiceproviderModule { }
