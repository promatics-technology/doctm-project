import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardConsultationPrescriptionComponent } from './dashboard-consultation-prescription.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardConsultationPrescriptionComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardConsultationPrescriptionRoutingModule { }
