import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPrescriptionComponent } from './dashboard-prescription.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardPrescriptionComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPrescriptionRoutingModule { }
