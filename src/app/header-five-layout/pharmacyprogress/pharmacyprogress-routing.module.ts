import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PharmacyprogressComponent} from './pharmacyprogress.component'

const routes: Routes = [{
	path:'',
	component:PharmacyprogressComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyprogressRoutingModule { }
