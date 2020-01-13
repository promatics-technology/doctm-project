import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartIpdloginComponent } from './smart-ipdlogin.component';

const routes: Routes = [
	{
		path: '',
        component: SmartIpdloginComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartIpdloginRoutingModule { }
