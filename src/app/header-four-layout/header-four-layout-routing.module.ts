import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderFourLayoutComponent } from './header-four-layout.component';

const routes: Routes = [
  {
        path: '',
        component: HeaderFourLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard-ipd' },
            { path: 'dashboard-ipd', loadChildren: './dashboardipd/dashboardipd.module#DashboardipdModule' },
            { path: 'ipd-book', loadChildren: './ipdbook/ipdbook.module#IpdbookModule' },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderFourLayoutRoutingModule { }