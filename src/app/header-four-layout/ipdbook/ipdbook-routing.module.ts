import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IpdbookComponent} from './ipdbook.component'


const routes: Routes = [
	{
		path:'',
		component: IpdbookComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpdbookRoutingModule { }
