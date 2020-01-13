import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupNewComponent} from './signup-new.component'

const routes: Routes = [{
	path :'',
	component:SignupNewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupNewRoutingModule { }
