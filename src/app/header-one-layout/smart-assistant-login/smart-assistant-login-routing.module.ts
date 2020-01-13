import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartAssistantLoginComponent } from './smart-assistant-login.component';

const routes: Routes = [
	{
		path: '',
        component: SmartAssistantLoginComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartAssistantLoginRoutingModule { }
