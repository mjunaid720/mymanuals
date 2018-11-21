import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { LeftMenuComponent } from './left-menu/left-menu.component';


const adminRoutes: Routes = [
    { path: '', component: HomeComponent
        // children: [
        //     { path: '', component: LeftMenuComponent }
        // ]
    }
];

@NgModule({
  declarations: [HomeComponent, LeftMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminDashboardModule { }
