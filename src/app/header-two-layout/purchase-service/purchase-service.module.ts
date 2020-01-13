import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PurchaseServiceComponent} from './purchase-service.component'
import { PurchaseServiceRoutingModule } from './purchase-service-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PurchaseServiceRoutingModule
  ],
  declarations: [PurchaseServiceComponent]
})
export class PurchaseServiceModule { }
