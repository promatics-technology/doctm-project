import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardConsultationDiagnosisComponent } from './dashboard-consultation-diagnosis.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardConsultationDiagnosisComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardConsultationDiagnosisRoutingModule { }
