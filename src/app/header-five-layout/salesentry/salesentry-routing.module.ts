import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesentryComponent } from './salesentry.component';

const routes: Routes = [
	{
		path: '',
		component: SalesentryComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesentryRoutingModule { }
