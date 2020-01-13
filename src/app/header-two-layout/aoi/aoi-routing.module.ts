import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AoiComponent } from './aoi.component';

const routes: Routes = [
	{
		path: '',
		component: AoiComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AoiRoutingModule { }
