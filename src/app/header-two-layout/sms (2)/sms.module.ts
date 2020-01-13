import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsRoutingModule } from './sms-routing.module';
import { SmsComponent } from './sms.component';
import { UserService } from '../../providers/user.service';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    SmsRoutingModule,
    FormsModule,
	ReactiveFormsModule
  ],
  declarations: [SmsComponent],
  providers: [UserService]
})
export class SmsModule { }
