import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { DatePipe } from '@angular/common';
declare var $


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  providers: [UserService]
})
export class SubscriptionComponent implements OnInit {
loading
doctorData
adminDoctor
compareDate
subscriptionData
services=[]
start_date
end_date
subTotal=0
  constructor(private toastr: ToastrService, private userService: UserService, private datePipe: DatePipe) { }

   ngOnInit() {
        
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
		console.log('---- Doctor Data ----');
		console.log(this.doctorData)
		this.services.push({'Item': 'Smart Clinic', 'Price':'Not Subscribed'});
		if(this.doctorData.clinic_services.Clinic_Diagnostics){
		this.services.push({'Item': 'Smart Diagnostics', 'Price':'Not Subscribed'});
		}
		if(this.doctorData.clinic_services.Clinic_Pharmacy){
			this.services.push({'Item': 'Smart Pharmacy', 'Price':'Not Subscribed'});
		}
		if(this.doctorData.clinic_services.Clinic_IPD){
			this.services.push({'Item': 'Smart IPD', 'Price':'Not Subscribed'});
		}
        this.adminDoctor = JSON.parse(localStorage['doctorsOfSameClinic'])
        console.log(this.adminDoctor)  
       // this.compareDate = new Date(this.date.setDate(this.date.getDate()+6))
        this.fetchSubscription()
		
    }
	
	  fetchSubscription(){
		  this.loading=true
		var ob={doctor_id:this.doctorData._id};
        this.userService.fetchSubscription(ob).subscribe((data)=>{
			 this.loading=false;
            console.log(data)
            if(data.response){
                this.subscriptionData = data
				if(this.subscriptionData.subscription.start_at){
				this.start_date=new Date(this.subscriptionData.subscription.start_at*1000);
				this.start_date = this.start_date.toGMTString();
				/* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
				this.start_date = this.start_date.toLocaleDateString('in-IN', options)(); */
				
				}
				//alert(this.subscriptionData.subscription.start_at);
				if(this.subscriptionData.subscription.current_end){
				this.end_date=new Date(this.subscriptionData.subscription.current_end*1000);
				this.end_date = this.end_date.toGMTString();
				/* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
				this.end_date = this.end_date.toLocaleDateString('in-IN', options); */
				}
				this.subscriptionData.purchaseInformation.forEach(purchase=>{
					if(purchase.Price){
						this.subTotal+=parseFloat(purchase.Price);
					}
				})
            }else{
				console.log('here');
			}

        },err=>{
            console.log(err)
        })
    }


}
