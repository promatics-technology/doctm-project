import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

import { DashboardPresetRoutingModule } from './dashboard-preset-routing.module';
import { DashboardPresetComponent } from './dashboard-preset.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TagInputModule,
	ReactiveFormsModule,
    DashboardPresetRoutingModule,
    MatDialogModule
  ],
  declarations: [DashboardPresetComponent]
})
export class DashboardPresetModule { }
