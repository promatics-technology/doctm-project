import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestCatalogueComponent} from './test-catalogue.component'
const routes: Routes = [{
	path:'',
	component:TestCatalogueComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestCatalogueRoutingModule { }
