import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClinicSummaryPharmacyComponent} from './clinic-summary-pharmacy.component'


const routes: Routes = [
	{
		path:'',
		component: ClinicSummaryPharmacyComponent,
	}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicSummaryPharmacyRoutingModule { }
