import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosticpurchaseComponent } from './diagnosticpurchase.component';
const routes: Routes = [
	{
		path: '',
		component: DiagnosticpurchaseComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosticpurchaseRoutingModule { }
