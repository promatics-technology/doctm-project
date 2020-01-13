import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartClinicLoginComponent } from './smart-clinic-login.component';

const routes: Routes = [
	{
		path: '',
        component: SmartClinicLoginComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartClinicLoginRoutingModule { }
