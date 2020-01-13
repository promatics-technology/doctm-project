import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardStaffManagementComponent } from './dashboard-staff-management.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardStaffManagementComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardStaffManagementRoutingModule { }
