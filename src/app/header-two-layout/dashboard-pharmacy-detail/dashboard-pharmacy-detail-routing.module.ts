import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPharmacyDetailComponent } from './dashboard-pharmacy-detail.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardPharmacyDetailComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPharmacyDetailRoutingModule { }
