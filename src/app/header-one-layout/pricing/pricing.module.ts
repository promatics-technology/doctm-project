import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PricingComponent} from './pricing.component'
import { PricingRoutingModule } from './pricing-routing.module';
import { MatFormFieldModule, MatInputModule } from '@angular/material'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PricingRoutingModule,
    MatFormFieldModule,
	MatInputModule,
	FormsModule
  ],
  declarations: [PricingComponent]
})
export class PricingModule { }
