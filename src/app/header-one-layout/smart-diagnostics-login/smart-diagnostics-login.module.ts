import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartDiagnosticsLoginRoutingModule } from './smart-diagnostics-login-routing.module';
import { SmartDiagnosticsLoginComponent } from './smart-diagnostics-login.component';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
@NgModule({
  imports: [
    CommonModule,
    SmartDiagnosticsLoginRoutingModule,
    FormsModule,
	ReactiveFormsModule,
	RecaptchaModule.forRoot()
  ],
  declarations: [SmartDiagnosticsLoginComponent]
})
export class SmartDiagnosticsLoginModule { }
