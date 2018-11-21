import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        redirectTo: '',
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
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
