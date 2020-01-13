import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartAssistantNewRegisterComponent } from './smart-assistant-new-register.component'

const routes: Routes = [
	{
		path: '',
		component: SmartAssistantNewRegisterComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartAssistantNewRegisterRoutingModule { }
