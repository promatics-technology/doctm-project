import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosticsprogressComponent } from './diagnosticsprogress.component';

const routes: Routes = [
	{
		path: '',
		component: DiagnosticsprogressComponent
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosticsprogressRoutingModule { }
