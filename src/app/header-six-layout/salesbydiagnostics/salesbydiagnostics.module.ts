import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesbydiagnosticsRoutingModule } from './salesbydiagnostics-routing.module';
import { SalesbydiagnosticsComponent } from './salesbydiagnostics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import {NumberToWords} from './number-to-words';

@NgModule({
  imports: [
    CommonModule,
    SalesbydiagnosticsRoutingModule,
    FormsModule,
	ReactiveFormsModule,
	MatTableModule,
	MatInputModule,
	MatSortModule,
	MatFormFieldModule,
	MatAutocompleteModule,
	MatDialogModule
  ],
  declarations: [SalesbydiagnosticsComponent, NumberToWords]
})
export class SalesbydiagnosticsModule { }
