import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesentrydiagnosticsComponent } from './salesentrydiagnostics.component';
const routes: Routes = [
	{
		path: '',
		component: SalesentrydiagnosticsComponent
	}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesentrydiagnosticsRoutingModule { }
