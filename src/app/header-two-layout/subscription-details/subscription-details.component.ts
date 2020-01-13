import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { isDevMode } from '@angular/core';
declare var Razorpay: any;
declare var $
@Component({
  selector: 'app-subscription-details',
  templateUrl: './subscription-details.component.html',
  styleUrls: ['./subscription-details.component.css'],
  providers: [UserService]
})

export class SubscriptionDetailsComponent implements OnInit {
	message = 'Hola Mundo!';

	
  loading
  doctorDetail
  grand_total=0
  doctorData
  Clinic_IPD
  Clinic_Pharmacy
  Clinic_Diagnostics
  prices
  ClinicServicesDetailObject
  plan
  total_amt=0
  constructor(private _location: Location, private router: Router,private route: ActivatedRoute, private toastr: ToastrService, private userService: UserService) { }

  ngOnInit() {
	  	this.doctorData = JSON.parse(localStorage['doctorDetails']);
		this.plan=JSON.parse(localStorage['plan_data']);
		this.grand_total=this.plan.total+(this.plan.total*this.plan.gst/100)
		//alert(isDevMode());
  }
  
  getServicePrice(service){
	  
	var item=this.plan.plan.services.filter(function (el) {
		console.log(el);
	return el.services_name == service;
	});
	console.log(item);
	
	
	 if(this.plan.plan.name=='monthly'){
		 //this.total_amt=this.total_amt+item[0].baseRate;
		return item[0].baseRate;
	}
	if(this.plan.plan.name=='quarterly'){
		 //this.total_amt=this.total_amt+3*item[0].baseRate;
		return 3*item[0].baseRate;
	
	}
		if(this.plan.plan.name=='yearly'){
			// this.total_amt=this.total_amt+12*item[0].baseRate;
		return 12*item[0].baseRate;
		
	} 
	//return item[0].price;
  }
  

  getDiscount(service){
	  
	var item=this.plan.plan.services.filter(function (el) {
	return el.services_name == service;
	});
		console.log(item);
	//return 0;
	 if(this.plan.plan.name=='monthly'){
		return item[0].monthlyDiscount;
	}
	if(this.plan.plan.name=='quarterly'){
		return item[0].quarterDiscount;
	}
		if(this.plan.plan.name=='yearly'){
		return item[0].annualDiscount;
	} 
	  
  }
  
  getAmount(service){
	var item=this.plan.plan.services.filter(function (el) {
	return el.services_name == service;
	});
		console.log(item);
	 if(this.plan.plan.name=='monthly'){
		return item[0].monthlyPlan;
	}
	if(this.plan.plan.name=='quarterly'){
		return item[0].quarterPlan;
	}
		if(this.plan.plan.name=='yearly'){
			return item[0].annualPlan;
	} 
	return 0;
  }
  getDoctorDetail(){
	  this.userService.GetDoctorDetail(this.doctorData.itemId).subscribe(data => {
            console.log(data)
            this.loading = false
            if(data.response == true){
                localStorage['doctorDetails']=JSON.stringify(data.data)
				localStorage['subscription_info']=JSON.stringify(data.data.subscription_id)
                this.router.navigate(['/header-two-layout/dashboard']);
            }
        }, err => {
            console.log(err);
        })
  }
  
   backClicked() {
    this._location.back();
  }
  
  getGST(price, gst){
	  var p=(price*gst)/100;
	  return  Math.ceil(p);
  }
  getPayAble(price){
	   var p=(price*18)/100;
	   
	   return  price+Math.ceil(p);
  }
  createSubs(){
	  console.log(this.plan);
  }
  createSubscription(){
	  if(localStorage['clinic_services_object']){
	 
	  console.log(JSON.parse(localStorage['clinic_services_object']));
	  }
	this.loading = true; 
	var services_selected=this.plan.services;
	var plan_type=this.plan.plan.name;
	var amount_payable=this.grand_total;
	var duration=this.plan.plan.name;
	let ob = {
			planName : plan_type,
			description : "Subscription Plan Created for DocTm User-"+services_selected.toString(),
			total_amount :amount_payable*100 ,
			notes:"Dummy doctor data",
			doctor_id:this.doctorData._id,
			duration:duration, 
			services:services_selected
			}
		  this.userService.CreateUserPlan(ob).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.status == true) {
                    this.toastr.success(data.message, 'Success')
                   this.showCheckOutForm(data.subscription_id,services_selected,duration, amount_payable);
				} else {
                    this.toastr.error(data.message, 'Error')
                }
            }, err => {
                console.log(err);
				this.loading = false
            })
        
		console.log('here'); 
  }

  showCheckOutForm(subs_id, services_selected, type, amount){
	 var self=this;
	 
	  var options = {
	  "key": "rzp_test_ZXisTAaZeIwiSh",
	  "subscription_id": subs_id,
	  "name": "DocTm Solutions.",
	  "description": "DocTm "+type+" Plan",
	  "image": "/assets/imgs/logoDoctm.png",
	  "handler": function (response){
		  console.log(response.methods);
		  if(response.razorpay_payment_id){
			   self.loading = true
			   var ob={
					  razorpay_customer_id: subs_id,
					  payment_id: response.razorpay_payment_id,
					  services: services_selected,
					  plan_duration:type,
					  doctor_id: self.doctorData._id,
					  total_amount:amount,
					  purchase_details:self.plan.purchase_details
				     }
			   self.userService.updateDoctorSubscription(ob).subscribe(data => {
               console.log(data)
                if (data.response == true) {
                   self.toastr.success(data.message, 'Success')
				   self.updateServices();
                } else {
                    self.toastr.error(data.message, 'Error')
                }
            }, err => {
                console.log(err);
				self.loading = false
            })
			  
		  }else{
			  self.toastr.error("Something went wrong. Please try again later","Error")
		  }
	//
     
	},
	  "prefill": {
		  "name": this.doctorData.first_name,
		  "email": this.doctorData.email,
		  "method":"netbanking"
	  },
	  "notes": {
		  "note_key": "DocTm Subscription"
	  },
	  "theme": {
		  "color": "#00B0F0"
	  },
	  "external": {
	 wallets: ['paytm','citrus'],
	 handler: function(data) {
	   // write code on how to handle the external wallet here, based on the param 'data'
	   console.log(this, data)
	 }
	}
	};
	var rzp1 = new Razorpay(options);
	rzp1.once('ready', function(response) {
	  console.log(response.methods);
	  // response.methods.netbanking contains list of all banks
	})
	rzp1.open();
	}
	
	updateServices(){
		    var ob;
		   //alert('hereeeeee')
			var diagnostics=false
			var ipd=false
			var pharmacy=false
			if(this.plan.services.indexOf('SmartPharmacy')!=-1){
				pharmacy=true
			}
			if(this.plan.services.indexOf('SmartIPD')!=-1){
				ipd=true
			}
			if(this.plan.services.indexOf('SmartDiagnostics')!=-1){
					diagnostics=true
			}
			
			this.ClinicServicesDetailObject = {
                    
                    Clinic_Diagnostics: diagnostics,
                    Clinic_Pharmacy: pharmacy,
                    Clinic_IPD: ipd,
                   
                }
			let updates = {
                clinic_services: this.ClinicServicesDetailObject
            }
             ob = {
                itemId : this.doctorData.itemId,
                toUpdate : updates
            }
			console.log('uuuuuuuuuuuuuuuu');
			console.log(ob)
			
		
		 this.userService.EditDoctorProfile(ob).subscribe(data => {
                console.log(data)
              //  this.loading = false
                if (data.response == true) {
                    this.toastr.success(data.message, 'You are now successfully connected to subscribed services!')
                    this.GetDoctorDetailAndNavigateToHome()
                } else {
                    this.toastr.error(data.message, 'Error')
                }
            }, err => {
                console.log(err);
            })
	}
	
	 GetDoctorDetailAndNavigateToHome(){
       // this.loading = true
        this.userService.GetDoctorDetail(this.doctorData.itemId).subscribe(data => {
            console.log(data)
            this.loading = false
            if(data.response == true){
                localStorage['doctorDetails']=JSON.stringify(data.data)
                this.router.navigate(['/header-two-layout/subscription']);
            }
        }, err => {
            console.log(err);
        })
    }

}


   