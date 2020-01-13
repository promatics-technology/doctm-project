import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DischargePatientComponent } from './discharge-patient.component';

const routes: Routes = [
	{
		path: '',
		component: DischargePatientComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DischargePatientRoutingModule { }
