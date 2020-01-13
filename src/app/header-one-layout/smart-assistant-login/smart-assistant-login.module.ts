import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartAssistantLoginRoutingModule } from './smart-assistant-login-routing.module';
import { SmartAssistantLoginComponent } from './smart-assistant-login.component';

import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../../providers/user.service';
import { RecaptchaModule } from 'ng-recaptcha';
@NgModule({
  imports: [
    CommonModule,
    SmartAssistantLoginRoutingModule,
    FormsModule,
	ReactiveFormsModule,
  RecaptchaModule.forRoot()
  ],
  declarations: [
  	SmartAssistantLoginComponent,
  ],
  providers: [UserService]
})
export class SmartAssistantLoginModule { }