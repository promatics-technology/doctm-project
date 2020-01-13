import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component'
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
	FormsModule,
	ReactiveFormsModule
  ],
  declarations: [SubscriptionComponent]
})
export class SubscriptionModule { }
