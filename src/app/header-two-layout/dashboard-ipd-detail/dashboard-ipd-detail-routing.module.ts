import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardIpdDetailComponent } from './dashboard-ipd-detail.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardIpdDetailComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardIpdDetailRoutingModule { }
