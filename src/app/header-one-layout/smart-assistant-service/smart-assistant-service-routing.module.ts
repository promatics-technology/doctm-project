import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartAssistantServiceComponent } from './smart-assistant-service.component'

const routes: Routes = [
	{
		path:'',
		component: SmartAssistantServiceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartAssistantServiceRoutingModule { }
