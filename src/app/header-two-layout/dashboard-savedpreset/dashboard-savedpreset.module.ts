import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

import { DashboardSavedpresetRoutingModule } from './dashboard-savedpreset-routing.module';
import { DashboardSavedpresetComponent } from './dashboard-savedpreset.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	ReactiveFormsModule,
	TagInputModule,
    DashboardSavedpresetRoutingModule,
    MatDialogModule
  ],
  declarations: [DashboardSavedpresetComponent]
})
export class DashboardSavedpresetModule { }
