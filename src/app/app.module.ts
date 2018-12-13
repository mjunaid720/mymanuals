import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginService } from './login.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { ReusableModule } from './reusable/reusable.module';
import { LoginModule } from './login/login.module';
import { FooterComponent } from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

const routes: Routes = [
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
    },
  {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule'
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
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReusableModule,
    LoginModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
