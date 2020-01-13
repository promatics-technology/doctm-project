import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPresetComponent } from './dashboard-preset.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardPresetComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPresetRoutingModule { }
