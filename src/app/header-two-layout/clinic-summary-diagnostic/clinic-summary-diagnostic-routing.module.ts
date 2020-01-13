import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClinicSummaryDiagnosticComponent} from './clinic-summary-diagnostic.component'
const routes: Routes = [
	{
		path:'',
		component: ClinicSummaryDiagnosticComponent,
	}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicSummaryDiagnosticRoutingModule { }
