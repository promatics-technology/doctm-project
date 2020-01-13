import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PharmacydetailRoutingModule } from './pharmacydetail-routing.module';
import { PharmacydetailComponent } from './pharmacydetail.component';

@NgModule({
  imports: [
    CommonModule,
    PharmacydetailRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PharmacydetailComponent]
})
export class PharmacydetailModule { }
