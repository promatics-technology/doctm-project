import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriteToUsComponent } from './write-to-us.component';
const routes: Routes = [
	{
		path:'',
		component:WriteToUsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteToUsRoutingModule { }
