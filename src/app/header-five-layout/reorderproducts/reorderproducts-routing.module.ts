import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReorderproductsComponent } from './reorderproducts.component';

const routes: Routes = [
	{
		path: '',
		component: ReorderproductsComponent
	}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReorderproductsRoutingModule { }
