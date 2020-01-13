import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardConsultationPatientComponent } from './dashboard-consultation-patient.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardConsultationPatientComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardConsultationPatientRoutingModule { }
