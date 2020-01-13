import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component'
import { SubscriptionRoutingModule } from './subscription-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SubscriptionRoutingModule
  ],
  declarations: [SubscriptionComponent]
})
export class SubscriptionModule { }
