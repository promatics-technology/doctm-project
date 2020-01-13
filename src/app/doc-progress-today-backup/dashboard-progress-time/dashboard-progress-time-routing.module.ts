import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardProgressTimeComponent } from './dashboard-progress-time.component'
const routes: Routes = [
{
	path: '',
	component: DashboardProgressTimeComponent
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardProgressTimeRoutingModule { }
