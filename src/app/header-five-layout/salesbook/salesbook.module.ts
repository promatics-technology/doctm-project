import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesbookRoutingModule } from './salesbook-routing.module';
import { SalesbookComponent } from './salesbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import {NumberToWords} from './number-to-words';


@NgModule({
  imports: [
    CommonModule,
    SalesbookRoutingModule,
    FormsModule,
	ReactiveFormsModule,
	AngularDateTimePickerModule,
	MatTableModule,
	MatInputModule,
	MatSortModule
  ],
  declarations: [SalesbookComponent, NumberToWords]
})
export class SalesbookModule { 

}
