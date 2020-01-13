import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardpharmacyRoutingModule } from './dashboardpharmacy-routing.module';
import { DashboardpharmacyComponent } from './dashboardpharmacy.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule, MatSortModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
    CommonModule,
    DashboardpharmacyRoutingModule,
    FormsModule,ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule
    ],
    declarations: [DashboardpharmacyComponent]
})
export class DashboardpharmacyModule { }
