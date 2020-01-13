import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockvaluationComponent } from './stockvaluation.component';

const routes: Routes = [
	{
		path: '',
		component: StockvaluationComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockvaluationRoutingModule { }