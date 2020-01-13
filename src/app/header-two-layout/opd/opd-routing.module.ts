import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpdComponent } from './opd.component';

const routes: Routes = [
	{
		path: '',
		component: OpdComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpdRoutingModule { }
