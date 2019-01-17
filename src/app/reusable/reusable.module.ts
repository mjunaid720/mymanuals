import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableRoutingModule } from './reusable-routing.module';
import { ReusableComponent } from './reusable.component';
import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { EmailComponent } from './email/email.component';
import { ServiceprovideremailComponent } from './serviceprovideremail/serviceprovideremail.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [ReusableComponent, ButtonComponent, SearchComponent, SearchresultComponent, LogoutComponent, EmailComponent, ServiceprovideremailComponent, AdvertisementComponent],
  imports: [
    CommonModule,
    ReusableRoutingModule,
    FormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    SearchComponent,
    ButtonComponent,
    LogoutComponent,
    EmailComponent,
    ServiceprovideremailComponent,
    AdvertisementComponent
]
})
export class ReusableModule { }
