import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPrescriptionPadComponent } from './dashboard-prescription-pad.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardPrescriptionPadComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPrescriptionPadRoutingModule { }
