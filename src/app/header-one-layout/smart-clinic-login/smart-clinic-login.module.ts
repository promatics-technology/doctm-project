import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartClinicLoginRoutingModule } from './smart-clinic-login-routing.module';
import { SmartClinicLoginComponent } from './smart-clinic-login.component';

import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../../providers/user.service';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    CommonModule,
    SmartClinicLoginRoutingModule,
    FormsModule,
	ReactiveFormsModule,
  RecaptchaModule.forRoot()
  ],
  declarations: [
  	SmartClinicLoginComponent,
  ],
  providers: [UserService]
})
export class SmartClinicLoginModule { }