import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPrescriptionViewComponent } from './dashboard-prescription-view.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardPrescriptionViewComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPrescriptionViewRoutingModule { }
