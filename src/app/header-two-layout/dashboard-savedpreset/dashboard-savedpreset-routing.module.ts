import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardSavedpresetComponent } from './dashboard-savedpreset.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardSavedpresetComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardSavedpresetRoutingModule { }
