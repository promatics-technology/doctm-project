import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardConsultationTimeComponent } from './dashboard-consultation-time.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardConsultationTimeComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardConsultationTimeRoutingModule { }
