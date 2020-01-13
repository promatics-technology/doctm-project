import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReorderproductsRoutingModule } from './reorderproducts-routing.module';
import { ReorderproductsComponent } from './reorderproducts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
	imports: [
	CommonModule,
	ReorderproductsRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	MatTableModule,
	MatInputModule,
	MatSortModule,
	MatDialogModule
	],
	declarations: [ReorderproductsComponent]
})
export class ReorderproductsModule { }
