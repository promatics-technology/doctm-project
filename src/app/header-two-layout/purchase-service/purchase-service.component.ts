import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { isDevMode } from '@angular/core';

declare var Razorpay: any;
declare var $

@Component({
	selector: 'app-purchase-service',
	templateUrl: './purchase-service.component.html',
	styleUrls: ['./purchase-service.component.css'],
	providers: [UserService]
})
export class PurchaseServiceComponent implements OnInit {
	loading
	doctorDetail
	grand_total=0
	purchase_summary
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
		this.purchase_summary=JSON.parse(localStorage['purchase_summary']);
		this.grand_total=1000;
		//alert(isDevMode());
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

	getGST(price){
		var p=(price*18)/100;
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
		if(localStorage['purchase_summary']){

			var purchase_info=JSON.parse(localStorage['purchase_summary']);
			console.log(purchase_info);

			var amount=this.purchase_summary.purchase_data.payable+this.purchase_summary.purchase_data.payable*this.purchase_summary.purchase_data.gst/100;
			//alert(amount);
			this.checkOut(this.round(amount)*100);
		}
	/* this.loading = true; 
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
        
            console.log('here');  */
        }

        checkOut(amount){
        	var self=this;

        	var options = {
        		"key": "rzp_test_ZXisTAaZeIwiSh",
        		"amount": amount,
        		"name": "DocTm Solutions.",
        		"description": "DocTm AdOns",
        		"image": "/assets/imgs/logoDoctm.png",
        		"handler": function (response){
        			if(response.razorpay_payment_id){
        				self.loading = true
        				self.updateServices(response);
			   /* var ob={
					  razorpay_customer_id: subs_id,
					  payment_id: response.razorpay_payment_id,
					  services: services_selected,
					  plan_duration:type,
					  doctor_id: self.doctorData._id,
					  total_amount:amount
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
			}) */

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
rzp1.open();
}

showCheckOutForm(amount){
	var self=this;
	var options = {
		"key": "rzp_test_ZXisTAaZeIwiSh",
		"amount": amount,
		"name": "DocTm Solutions.",
		"description": "DocTm AddOns",
		"image": "/assets/imgs/logoDoctm.png",
		"handler": function (response){
			if(response.razorpay_payment_id){
				self.loading = true
				self.updateServices(response);
			   /* var ob={
					  razorpay_customer_id: subs_id,
					  payment_id: response.razorpay_payment_id,
					  services: services_selected,
					  plan_duration:type,
					  doctor_id: self.doctorData._id,
					  total_amount:amount
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
			}) */

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
rzp1.open();
}

updateServices(res){
	console.log(res)
	var ob;
	if(localStorage['purchase_summary']){
		ob=JSON.parse(localStorage['purchase_summary']);
	}else{
		//alert('hereeeeee')
		var diagnostics
		var ipd
		var pharmacy
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
		console.log('uuuuuuuuuuuuuuuu')
		console.log(ob)

	}
	console.log(ob)
	// (parseFloat(this.getAmount(s))*parseFloat(this.gst)/100)
	// round(purchase_summary.purchase_data.payable+purchase_summary.purchase_data.payable*purchase_summary.purchase_data.gst/100)
	var amount1 :any
	var gst1 :any
	amount1 = parseFloat(ob.purchase_data.services[0].amount)
	gst1= parseFloat(ob.purchase_data.gst)
	amount1 = parseFloat(amount1)
	gst1 = parseFloat(gst1)

	var obj = {
		transaction:res.razorpay_payment_id,
		gst:ob.purchase_data.gst,
		gst_amount:((amount1 * gst1)/100),
		total_amt_with_gst:((amount1+(amount1*gst1))/100),
		amount_purchased:parseInt(ob.purchase_data.services[0].amount),
		discount:ob.purchase_data.services[0].discount,
		service:ob.purchase_data.services[0].name,
		clinic_services:ob.toUpdate.clinic_services
	}
	ob.purchedDetails = obj
	console.log(obj)
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

round(num){
	if(num > 0){
		return Math.round(num);
	}
	return num;
}

}


