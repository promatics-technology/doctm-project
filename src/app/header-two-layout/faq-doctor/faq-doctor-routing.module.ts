import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FaqDoctorComponent} from './faq-doctor.component'
const routes: Routes = [
	{
		path:'',
		component: FaqDoctorComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqDoctorRoutingModule { }
