import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockpurchaseComponent } from './stockpurchase.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
	{
		path: '',
		component: StockpurchaseComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockpurchaseRoutingModule { }
