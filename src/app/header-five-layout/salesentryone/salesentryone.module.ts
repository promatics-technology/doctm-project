import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesentryoneRoutingModule } from './salesentryone-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { SalesentryoneComponent } from './salesentryone.component';
import { MatFormFieldModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NumberToWords} from './number-to-words';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	imports: [
	CommonModule,
	SalesentryoneRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	MatTableModule,
	MatInputModule,
	MatSortModule,
	MatFormFieldModule,
	MatAutocompleteModule,
	MatDialogModule
	],
	declarations: [SalesentryoneComponent,NumberToWords]
})
export class SalesentryoneModule { }
