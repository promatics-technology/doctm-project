import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartassistantComponent } from './smartassistant.component';

const routes: Routes = [
	{
		path: '',
		component: SmartassistantComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartassistantRoutingModule { }
