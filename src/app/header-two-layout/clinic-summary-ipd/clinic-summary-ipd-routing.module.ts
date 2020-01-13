import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClinicSummaryIpdComponent} from './clinic-summary-ipd.component'
const routes: Routes = [
{
		path:'',
		component: ClinicSummaryIpdComponent,
	}
	];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicSummaryIpdRoutingModule { }
