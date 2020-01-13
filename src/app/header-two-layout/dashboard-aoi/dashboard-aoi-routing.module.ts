import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAoiComponent } from './dashboard-aoi.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardAoiComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAoiRoutingModule { }
