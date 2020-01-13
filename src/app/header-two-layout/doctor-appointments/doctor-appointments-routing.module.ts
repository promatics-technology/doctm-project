import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DoctorAppointmentsComponent} from './doctor-appointments.component'
const routes: Routes = [
{
		path: '',
		component: DoctorAppointmentsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorAppointmentsRoutingModule { }
