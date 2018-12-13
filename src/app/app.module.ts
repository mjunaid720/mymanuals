import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginService} from './login.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthGuardService as AuthGuard} from './auth-guard.service';
import {RepresentativeModule} from './representative/representative.module';
import {ReusableModule} from './reusable/reusable.module';
import {LandingModule} from './landing/landing.module';

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
    path: 'company',
    loadChildren: './company/company.module#CompanyModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'rep',
    loadChildren: './respresentative/respresentative.module#RespresentativeModule'
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
// const routes: Routes = [
//     {
//         path: 'orders',
//         loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardModule'
//     },
//     {
//         path: 'customers',
//         loadChildren: './client-dashboard/client-dashboard.module#ClientDashboardModule'
//     }
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReusableModule,
    LandingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
