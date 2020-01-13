import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardSmsComponent } from './dashboard-sms.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardSmsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardSmsRoutingModule { }
