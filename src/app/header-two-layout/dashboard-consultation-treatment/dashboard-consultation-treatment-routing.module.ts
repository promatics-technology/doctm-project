import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardConsultationTreatmentComponent } from './dashboard-consultation-treatment.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardConsultationTreatmentComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardConsultationTreatmentRoutingModule { }
