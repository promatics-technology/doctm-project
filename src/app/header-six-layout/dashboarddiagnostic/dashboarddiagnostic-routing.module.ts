import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboarddiagnosticComponent } from './dashboarddiagnostic.component';

const routes: Routes = [
	{
		path: '',
		component: DashboarddiagnosticComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboarddiagnosticRoutingModule { }
