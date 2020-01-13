import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesentryRoutingModule } from './salesentry-routing.module';
import { SalesentryComponent } from './salesentry.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NumberToWords} from './number-to-words';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  imports: [
    CommonModule,
    SalesentryRoutingModule,
    FormsModule,
	ReactiveFormsModule,
	MatTableModule,
	MatFormFieldModule,
	MatAutocompleteModule,
  MatDialogModule
  ],
  declarations: [SalesentryComponent, NumberToWords]
})
export class SalesentryModule { }
