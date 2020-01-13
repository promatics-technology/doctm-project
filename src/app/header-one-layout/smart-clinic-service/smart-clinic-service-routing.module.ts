import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartClinicServiceComponent } from './smart-clinic-service.component'

const routes: Routes = [
	{
		path:'',
		component: SmartClinicServiceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartClinicServiceRoutingModule { }
