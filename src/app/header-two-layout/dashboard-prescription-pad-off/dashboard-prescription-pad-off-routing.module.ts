import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPrescriptionPadOffComponent } from './dashboard-prescription-pad-off.component'
const routes: Routes = [
	{
		path:'',
		component:DashboardPrescriptionPadOffComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPrescriptionPadOffRoutingModule { }
