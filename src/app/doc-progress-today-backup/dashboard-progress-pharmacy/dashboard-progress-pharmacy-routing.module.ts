import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardProgressPharmacyComponent } from './dashboard-progress-pharmacy.component'
const routes: Routes = [
{
		path: '',
		component: DashboardProgressPharmacyComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardProgressPharmacyRoutingModule { }
