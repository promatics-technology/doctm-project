import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionDetailsComponent } from './subscription-details.component'
import { SubscriptionDetailsRoutingModule } from './subscription-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionDetailsRoutingModule
  ],
  declarations: [SubscriptionDetailsComponent]
})
export class SubscriptionDetailsModule { }
