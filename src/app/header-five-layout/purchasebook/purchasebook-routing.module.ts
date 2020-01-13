import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchasebookComponent } from './purchasebook.component';

const routes: Routes = [
	{
		path: '',
		component: PurchasebookComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasebookRoutingModule { }
