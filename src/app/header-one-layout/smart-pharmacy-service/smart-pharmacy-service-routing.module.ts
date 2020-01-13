import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { SmartPharmacyServiceComponent} from './smart-pharmacy-service.component'

const routes: Routes = [
	{
		path:'',
		component: SmartPharmacyServiceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartPharmacyServiceRoutingModule { }
