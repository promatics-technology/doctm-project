import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OpdHolidayComponent} from './opd-holiday.component'
const routes: Routes = [
	{
		path:'',
		component:OpdHolidayComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpdHolidayRoutingModule { }
