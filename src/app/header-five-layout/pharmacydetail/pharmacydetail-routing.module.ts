import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacydetailComponent } from './pharmacydetail.component';

const routes: Routes = [
	{
		path: '',
		component: PharmacydetailComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacydetailRoutingModule { }
