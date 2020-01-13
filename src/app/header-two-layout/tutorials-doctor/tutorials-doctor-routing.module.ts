import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsDoctorComponent } from './tutorials-doctor.component'
const routes: Routes = [
	{
		path:'',
		component:TutorialsDoctorComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialsDoctorRoutingModule { }
