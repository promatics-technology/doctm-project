import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardOngoprescriptionComponent } from './dashboard-ongoprescription.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardOngoprescriptionComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardOngoprescriptionRoutingModule { }
