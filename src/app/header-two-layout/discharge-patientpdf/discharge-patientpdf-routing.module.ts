import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DischargePatientpdfComponent } from './discharge-patientpdf.component';

const routes: Routes = [
	{
		path: '',
		component: DischargePatientpdfComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DischargePatientpdfRoutingModule { }
