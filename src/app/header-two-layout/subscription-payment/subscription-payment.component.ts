import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription-payment',
  templateUrl: './subscription-payment.component.html',
  styleUrls: ['./subscription-payment.component.css']
})
export class SubscriptionPaymentComponent implements OnInit {
itemSelected=false;
  constructor() { }

  ngOnInit() {
  }
 
 
 selectItem(){
	 this.itemSelected=true;
 }
}
