import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ConsumerComponent } from './consumer/consumer.component';
import { RepresentativeComponent } from './representative/representative.component';
import { CompanyComponent } from './company/company.component';

import { ReusableModule } from '../reusable/reusable.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { AdManagerComponent } from './ad-manager/ad-manager.component';
import { SysAdminComponent} from './sys-admin/sys-admin.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [LoginComponent, ConsumerComponent, RepresentativeComponent, CompanyComponent, ServiceProviderComponent, AdManagerComponent, SysAdminComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReusableModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class LoginModule { }
