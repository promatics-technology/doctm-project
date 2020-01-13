import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReorderbookComponent } from './reorderbook.component';

const routes: Routes = [
	{
		path: '',
		component: ReorderbookComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReorderbookRoutingModule { }
