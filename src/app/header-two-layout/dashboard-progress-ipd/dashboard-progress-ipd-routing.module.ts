import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardProgressIpdComponent } from './dashboard-progress-ipd.component'
const routes: Routes = [
	{
		path: '',
		component: DashboardProgressIpdComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardProgressIpdRoutingModule { }
