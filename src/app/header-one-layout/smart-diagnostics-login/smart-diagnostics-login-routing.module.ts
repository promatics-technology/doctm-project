import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartDiagnosticsLoginComponent } from './smart-diagnostics-login.component';

const routes: Routes = [
	{
		path: '',
        component: SmartDiagnosticsLoginComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartDiagnosticsLoginRoutingModule { }
