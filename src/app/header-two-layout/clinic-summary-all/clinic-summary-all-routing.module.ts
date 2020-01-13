import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClinicSummaryAllComponent} from './clinic-summary-all.component'
const routes: Routes = [
{
		path:'',
		component: ClinicSummaryAllComponent,
	}
	];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicSummaryAllRoutingModule { }
