import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyprogressRoutingModule } from './pharmacyprogress-routing.module';
import { PharmacyprogressComponent } from './pharmacyprogress.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
  CommonModule,
  PharmacyprogressRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  MatTableModule,
  MatInputModule,
  MatSortModule,
  MatDialogModule
  ],
  declarations: [PharmacyprogressComponent]
})
export class PharmacyprogressModule { }
