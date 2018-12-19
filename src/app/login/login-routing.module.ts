import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { RepresentativeComponent } from './representative/representative.component';
import { CompanyComponent } from './company/company.component';
import {ServiceProviderComponent} from './service-provider/service-provider.component';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'consumer',
        component: ConsumerComponent
    },
    {
        path: 'representative',
        component: RepresentativeComponent
    },
    {
        path: 'admin',
        component: CompanyComponent
    },
    {
      path: 'sp',
      component: ServiceProviderComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
