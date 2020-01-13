import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardProgressDiagnosisComponent} from './dashboard-progress-diagnosis.component'
const routes: Routes = [
{
	path: '',
	component: DashboardProgressDiagnosisComponent
}
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardProgressDiagnosisRoutingModule { }
