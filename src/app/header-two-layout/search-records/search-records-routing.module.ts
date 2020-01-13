import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchRecordsComponent } from './search-records.component'

const routes: Routes = [
	{
		path:'',
		component:SearchRecordsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRecordsRoutingModule { }
