import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesbookdComponent } from './salesbookd.component';

const routes: Routes = [
	{
		path: '',
		component: SalesbookdComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesbookdRoutingModule { }
