import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartPharmacyLoginComponent } from './smart-pharmacy-login.component';

const routes: Routes = [
	{
		path: '',
        component: SmartPharmacyLoginComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartPharmacyLoginRoutingModule { }
