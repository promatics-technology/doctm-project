import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardProgressComponent } from './dashboard-progress.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardProgressComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardProgressRoutingModule { }
