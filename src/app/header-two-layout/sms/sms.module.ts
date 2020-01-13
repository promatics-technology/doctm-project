import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsRoutingModule } from './sms-routing.module';
import { SmsComponent } from './sms.component';
import { UserService } from '../../providers/user.service';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { TagInputModule } from 'ngx-chips';
@NgModule({
	imports: [
	CommonModule,
	SmsRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	HttpModule,
	AngularDateTimePickerModule,
	MatTableModule,
	MatInputModule,
	MatSortModule,
	MatDialogModule,
	TagInputModule,
	MatAutocompleteModule,
	],
	declarations: [SmsComponent],
	providers: [UserService]
})
export class SmsModule { }
