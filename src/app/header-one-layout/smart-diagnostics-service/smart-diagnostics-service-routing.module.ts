import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartDiagnosticsServiceComponent} from './smart-diagnostics-service.component'
const routes: Routes = [
	{
		path:'',
		component: SmartDiagnosticsServiceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartDiagnosticsServiceRoutingModule { }
