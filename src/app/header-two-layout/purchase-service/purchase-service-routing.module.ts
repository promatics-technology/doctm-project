import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseServiceComponent } from './purchase-service.component'


const routes: Routes = [
	{
		path:'',
		component:PurchaseServiceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseServiceRoutingModule { }
