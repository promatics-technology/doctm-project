import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartIpdloginRoutingModule } from './smart-ipdlogin-routing.module';
import { SmartIpdloginComponent } from './smart-ipdlogin.component';

import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../providers/user.service';
import { RecaptchaModule } from 'ng-recaptcha';
@NgModule({
  imports: [
    CommonModule,
    SmartIpdloginRoutingModule,
    FormsModule,
	ReactiveFormsModule,
	RecaptchaModule.forRoot(),
  ],
  declarations: [SmartIpdloginComponent],
  providers: [UserService]
})
export class SmartIpdloginModule { }