import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartPharmacyLoginRoutingModule } from './smart-pharmacy-login-routing.module';
import { SmartPharmacyLoginComponent } from './smart-pharmacy-login.component';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
@NgModule({
  imports: [
    CommonModule,
    SmartPharmacyLoginRoutingModule,
    FormsModule,
	ReactiveFormsModule,
	RecaptchaModule.forRoot()
  ],
  declarations: [SmartPharmacyLoginComponent]
})
export class SmartPharmacyLoginModule { }
