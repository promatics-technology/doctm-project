import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockvaluationRoutingModule } from './stockvaluation-routing.module';
import { StockvaluationComponent } from './stockvaluation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
  CommonModule,
  StockvaluationRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  MatTableModule,
  MatInputModule,
  MatSortModule
  ],
  declarations: [StockvaluationComponent]
})
export class StockvaluationModule { }
