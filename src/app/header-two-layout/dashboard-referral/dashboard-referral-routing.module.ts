import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardReferralComponent } from './dashboard-referral.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardReferralComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardReferralRoutingModule { }
