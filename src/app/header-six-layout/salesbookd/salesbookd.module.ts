import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesbookdRoutingModule } from './salesbookd-routing.module';
import { SalesbookdComponent } from './salesbookd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import {NumberToWords} from './number-to-words';

@NgModule({
	imports: [
	CommonModule,
	SalesbookdRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	AngularDateTimePickerModule,
	MatTableModule,
	MatInputModule,
	MatSortModule
	],
	declarations: [SalesbookdComponent,NumberToWords]
})
export class SalesbookdModule { }
