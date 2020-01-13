import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasebookRoutingModule } from './purchasebook-routing.module';
import { PurchasebookComponent } from './purchasebook.component';
import {MatTableModule} from '@angular/material/table';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MatInputModule, MatSortModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
    CommonModule,
    PurchasebookRoutingModule,
    AngularDateTimePickerModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatAutocompleteModule,
    MatDialogModule
    ],
    declarations: [PurchasebookComponent]
})
export class PurchasebookModule { }
