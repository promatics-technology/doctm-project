import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockpurchaseRoutingModule } from './stockpurchase-routing.module';
import { StockpurchaseComponent } from './stockpurchase.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    StockpurchaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AngularDateTimePickerModule,
    MatDialogModule
  ],
  declarations: [StockpurchaseComponent]
})
export class StockpurchaseModule { }
