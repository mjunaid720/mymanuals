import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginService} from './login.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthGuardService as AuthGuard} from './auth-guard.service';
import {ReusableModule} from './reusable/reusable.module';
import {LandingModule} from './landing/landing.module';
import {FooterComponent} from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Globals } from './globals';
import { EditorModule } from '@tinymce/tinymce-angular';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { IgnoreHtmlPipe } from './ignore-html.pipe';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: './signup/signup.module#SignupModule'
  },
  {
    path: 'sysAdmin',
    loadChildren: './system-admin/system-admin.module#SystemAdminModule'
  },
  {
    path: 'company',
    loadChildren: './company/company.module#CompanyModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'rep',
    loadChildren: './respresentative/respresentative.module#RespresentativeModule'
  },
  {
    path: 'sp',
    loadChildren: './service-provider/service-provider.module#ServiceProviderModule'
  },
  {
    path: 'admanager',
    loadChildren: './ad-manager/ad-manager.module#AdManagerModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'result',
    loadChildren: './reusable/reusable.module#ReusableModule'
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateStaticLoader(http, './assets/i18n', '.json');
// }

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IgnoreHtmlPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReusableModule,
    LandingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    EditorModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  exports: [
    TranslateModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [LoginService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule {
}
