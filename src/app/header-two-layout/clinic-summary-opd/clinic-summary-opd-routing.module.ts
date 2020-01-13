import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClinicSummaryOpdComponent} from './clinic-summary-opd.component';
const routes: Routes = [
	{
		path:'',
		component: ClinicSummaryOpdComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicSummaryOpdRoutingModule { }
