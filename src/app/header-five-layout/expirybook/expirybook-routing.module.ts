import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpirybookComponent } from './expirybook.component';

const routes: Routes = [
	{
		path: '',
		component: ExpirybookComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpirybookRoutingModule { }
