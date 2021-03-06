import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FormsModule} from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ReusableModule} from '../reusable/reusable.module';
import { LightboxModule } from 'ngx-lightbox';
import { RatingComponent } from './rating/rating.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ServiceproviderComponent } from './serviceprovider/serviceprovider.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [HomeComponent, ProductDetailComponent, RatingComponent, UserprofileComponent, ServiceproviderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReusableModule,
    LightboxModule,
    FroalaEditorModule,
    FroalaViewModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }
