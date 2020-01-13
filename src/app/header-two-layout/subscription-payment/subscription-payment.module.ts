import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionPaymentComponent } from './subscription-payment.component'
import { SubscriptionPaymentRoutingModule } from './subscription-payment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionPaymentRoutingModule
  ],
  declarations: [SubscriptionPaymentComponent]
})
export class SubscriptionPaymentModule { }
