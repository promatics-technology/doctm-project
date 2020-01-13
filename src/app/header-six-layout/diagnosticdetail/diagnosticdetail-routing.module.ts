import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosticdetailComponent } from './diagnosticdetail.component';

const routes: Routes = [
	{
		path: '',
		component: DiagnosticdetailComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosticdetailRoutingModule { }
