import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesentryoneComponent } from './salesentryone.component';
const routes: Routes = [
	{
		path: '',
		component: SalesentryoneComponent
	}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesentryoneRoutingModule { }
