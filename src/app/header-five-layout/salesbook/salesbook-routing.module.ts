import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesbookComponent } from './salesbook.component';

const routes: Routes = [
	{
		path: '',
		component: SalesbookComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesbookRoutingModule { }
