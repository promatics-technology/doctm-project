import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteRecordsComponent } from './delete-records.component'
const routes: Routes = [
	{
		path:'',
		component:DeleteRecordsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteRecordsRoutingModule { }
