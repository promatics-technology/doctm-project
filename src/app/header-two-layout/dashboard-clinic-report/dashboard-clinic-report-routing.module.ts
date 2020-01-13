import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardClinicReportComponent } from './dashboard-clinic-report.component';

const routes: Routes = [
	{
		path:'',
		component: DashboardClinicReportComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardClinicReportRoutingModule { }
