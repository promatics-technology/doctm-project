import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartAssistantNewAppointmentComponent } from './smart-assistant-new-appointment.component';

const routes: Routes = [
	{
		path: '',
		component: SmartAssistantNewAppointmentComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartAssistantNewAppointmentRoutingModule { }
