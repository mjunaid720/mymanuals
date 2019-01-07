import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SendEmailComponent} from './send-email/send-email.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';

const routes: Routes = [
    {
      path: '',
      component: SendEmailComponent
    },
    {
      path: 'updateprofile',
      component: UpdateProfileComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProviderRoutingModule { }
