import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardDiagnosticsDetailComponent } from './dashboard-diagnostics-detail.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardDiagnosticsDetailComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardDiagnosticsDetailRoutingModule { }
