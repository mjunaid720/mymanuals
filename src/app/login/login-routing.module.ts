import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { RepresentativeComponent } from './representative/representative.component';
import { CompanyComponent } from './company/company.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { AdManagerComponent } from './ad-manager/ad-manager.component';
import { SysAdminComponent } from './sys-admin/sys-admin.component';

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
    },
    {
      path: 'ad-manager',
      component: AdManagerComponent
    },
    {
      path: 'sysAdmin',
      component: SysAdminComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
