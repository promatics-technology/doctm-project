import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteRecordsRoutingModule } from './delete-records-routing.module';
import { DeleteRecordsComponent } from './delete-records.component'
import { ChartsModule } from 'ng2-charts';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    DeleteRecordsRoutingModule,
    ChartsModule,
    AngularDateTimePickerModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
        FormsModule,
  ReactiveFormsModule,
  ],
  declarations: [DeleteRecordsComponent]
})
export class DeleteRecordsModule { }
