import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesbydiagnosticsComponent } from './salesbydiagnostics.component';
const routes: Routes = [
	{
		path: '',
		component: SalesbydiagnosticsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesbydiagnosticsRoutingModule { }
