import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartIpdServiceComponent } from './smart-ipd-service.component'

const routes: Routes = [
	{
		path:'',
		component: SmartIpdServiceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartIpdServiceRoutingModule { }
