import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateClinicComponent } from './rate-clinic.component'
const routes: Routes = [
{
	path:'',
	component:RateClinicComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RateClinicRoutingModule { }
