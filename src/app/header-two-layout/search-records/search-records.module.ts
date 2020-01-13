import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRecordsComponent } from './search-records.component'
import { SearchRecordsRoutingModule } from './search-records-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
@NgModule({
  imports: [
  CommonModule,
  SearchRecordsRoutingModule,
  ChartsModule,
  AngularDateTimePickerModule,
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatDialogModule,
  MatAutocompleteModule,
  ConfirmationPopoverModule.forRoot({
    confirmButtonType: 'danger'
  }),
  ],
  declarations: [SearchRecordsComponent]
})
export class SearchRecordsModule { }
