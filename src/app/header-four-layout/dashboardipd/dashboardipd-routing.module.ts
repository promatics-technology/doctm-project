import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardipdComponent } from './dashboardipd.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardipdComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardipdRoutingModule { }


