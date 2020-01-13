import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardConsultationInvestigationComponent } from './dashboard-consultation-investigation.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardConsultationInvestigationComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardConsultationInvestigationRoutingModule { }
