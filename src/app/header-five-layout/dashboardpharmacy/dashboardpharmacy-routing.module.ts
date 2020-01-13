import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardpharmacyComponent } from './dashboardpharmacy.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardpharmacyComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardpharmacyRoutingModule { }


