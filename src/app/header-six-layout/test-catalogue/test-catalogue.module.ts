import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCatalogueRoutingModule } from './test-catalogue-routing.module';
import { TestCatalogueComponent } from './test-catalogue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
	imports: [
	CommonModule,
	TestCatalogueRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	MatTableModule,
	MatInputModule,
	MatSortModule,
	MatDialogModule,
	MatAutocompleteModule
	],
	declarations: [TestCatalogueComponent]
})
export class TestCatalogueModule { }
