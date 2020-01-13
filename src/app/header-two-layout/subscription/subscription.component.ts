import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
declare var $


@Component({
	selector: 'app-subscription',
	templateUrl: './subscription.component.html',
	styleUrls: ['./subscription.component.css'],
	providers: [UserService]
})
export class SubscriptionComponent implements OnInit {
	loading
	isTrial=false;
	currentDays=0;
	purchaseDetail=[]
	doctorData
	currentPlan
	currentService=[]
	plain_amount=0
	data_saved=false
	gst_amount=0
	total_amt=0
	max_price=0
	services=[]
	expiryDate
	adminDoctor
	gst
	compareDate
	subscriptionInfo
	dd
	th
	month
	year
	subscriptionData
	start_date
	end_date
	left_days
	plan
	plans
	subTotal=0
	constructor(private router: Router,private toastr: ToastrService, private userService: UserService, private datePipe: DatePipe) {
		this.doctorData = JSON.parse(localStorage['doctorDetails'])
		//is.GetDoctorDataById();
		//this.fetchPricing1(1);
		
		this.adminDoctor = JSON.parse(localStorage['doctorsOfSameClinic'])
		console.log(this.adminDoctor)  
		this.GetDoctorDataById();
		this.fetchPricing1(1);
	}

	ngOnInit() {
		localStorage.removeItem('plan_data');
		
		var someDate = new Date();
		var numberOfDaysToAdd = 7;
		someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
		var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		this.dd = someDate.getDate();
		this.th=this.nth(this.dd);
		this.month = mlist[someDate.getMonth()];
		this.year = someDate.getFullYear();
		this.subTotal=0;
		this.left_days=7;
		
		this.doctorData = JSON.parse(localStorage['doctorDetails'])
		console.log('doctorDataaa');
		console.log(this.doctorData);
		this.services.push('SmartClinic');
		
		if(localStorage['subscription_info']){
			//alert(localStorage['subscription_info']);
			if(this.isJson(localStorage['subscription_info'])){
				
				this.subscriptionInfo=JSON.parse(localStorage['subscription_info'])
				console.log(this.subscriptionInfo)
				if(this.subscriptionInfo){
					this.isTrial=this.subscriptionInfo.is_trial;
				}
				if(this.subscriptionInfo){
					this.subTotal=this.subscriptionInfo.plan_id;
				}
				var date2=new Date();
				if(this.subscriptionInfo){
					var date1= new Date(this.subscriptionInfo.trial_last_date);
				}
				var Difference_In_Time = date1.getTime() - date2.getTime();
				
				// To calculate the no. of days between two dates 
				var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
				this.left_days=Math.round(Difference_In_Days);
			}else{
				this.subscriptionInfo=localStorage['subscription_info']
			}
			// this.subscriptionInfo=JSON.parse(localStorage['subscription_info'])
			this.expiryDate=this.subscriptionInfo.trial_last_date;
			
			someDate = new Date(this.expiryDate);
			//mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
			this.dd = someDate.getDate();
			this.th=this.nth(this.dd);
			this.month = mlist[someDate.getMonth()];
			this.year = someDate.getFullYear();
			this.subTotal=0;
			var currentDate=new Date().getTime();
			var startDate = currentDate;
			var endDate = Date.parse(this.expiryDate);
			var timeDiff = endDate - startDate;
			var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
			this.left_days=daysDiff;
			
			this.subTotal=this.subscriptionInfo.plan_id;
			var date2=new Date();
			var date1= new Date(this.subscriptionInfo.trial_last_date);
			var Difference_In_Time = date1.getTime() - date2.getTime(); 
			
			// To calculate the no. of days between two dates 
			var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
			this.left_days=Math.round(Difference_In_Days);
		}
		
		this.currentPlan=this.subscriptionInfo.subscription_id;
		
		
		console.log('---- Doctor Data ----');
		console.log(this.doctorData)
		if(!this.doctorData.clinic_services){
			this.doctorData.clinic_services=[];
		}
		//this.services.push({'Item': 'Smart Clinic', 'Price':'Not Subscribed'});'
		
		if(this.doctorData.clinic_services.Clinic_Diagnostics){
			this.services.push('SmartDiagnostics');
		}
		if(this.doctorData.clinic_services.Clinic_Pharmacy){
			this.services.push('SmartPharmacy');
		}
		if(this.doctorData.clinic_services.Clinic_IPD){
			this.services.push('SmartIPD');
		} 
		this.adminDoctor = JSON.parse(localStorage['doctorsOfSameClinic'])
		console.log(this.adminDoctor)  
		// this.compareDate = new Date(this.date.setDate(this.date.getDate()+6))
		// this.fetchSubscription()
		this.GetDoctorDataById();
		this.doctorData = JSON.parse(localStorage['doctorDetails'])
		console.log('Subscription Information:');
		console.log(this.doctorData.subscription_id);
		this.fetchPricing1(1);
		this.currentService=this.services;
		this.currentDays=this.left_days;
		
	}
	isJson(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}
	openChangePopUp(){
		//alert(this.currentPlan);
		var price=0;
		var mrp=0;
		//this.purchaseDetail=[];
		for (let s of this.services) {
			price+=this.getAmount(s);
			mrp+=parseFloat(this.getMRP(s));
			
			//discount=price*parseInt(this.getDiscount(s))/100;
			//mrp=price-discount;
		}
		this.subTotal=price;
		this.max_price=mrp;
		if(this.currentPlan=='quarterly' || this.currentPlan=='Quarterly'){	
			this.left_days=90;
			var someDate = new Date();
			var numberOfDaysToAdd = 90;
			someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
			var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
			this.dd = someDate.getDate();
			this.th=this.nth(this.dd);
			this.month = mlist[someDate.getMonth()];
			this.year = someDate.getFullYear();
		}
		
		if(this.currentPlan=='monthly' || this.currentPlan=='Monthly'){	
			this.left_days=30;
			var someDate = new Date();
			var numberOfDaysToAdd = 30;
			someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
			var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
			this.dd = someDate.getDate();
			this.th=this.nth(this.dd);
			this.month = mlist[someDate.getMonth()];
			this.year = someDate.getFullYear();
		}
		
		if(this.currentPlan=='yearly' || this.currentPlan=='Yearly'){	
			this.left_days=365;
			var someDate = new Date();
			var numberOfDaysToAdd = 365;
			someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
			var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
			this.dd = someDate.getDate();
			this.th=this.nth(this.dd);
			this.month = mlist[someDate.getMonth()];
			this.year = someDate.getFullYear();
		}
		this.plain_amount=price;
		$('#myModal').modal('show');
		
		
	}
	saveData(flag){
		if(flag==0){
			this.services=[];
			this.data_saved=false;
			$('#myModal').modal('hide');
			this.currentPlan="trial";
			var someDate = new Date();
			var numberOfDaysToAdd = this.currentDays;
			someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
			var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
			this.dd = someDate.getDate();
			this.th=this.nth(this.dd);
			this.month = mlist[someDate.getMonth()];
			this.year = someDate.getFullYear();
			this.subTotal=0;
			if(this.subscriptionInfo){
				this.subTotal=this.subscriptionInfo.plan_id;
				var date2=new Date();
				var date1= new Date(this.subscriptionInfo.trial_last_date);
				var Difference_In_Time = date1.getTime() - date2.getTime(); 
				var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
				this.left_days=this.currentDays;
				this.currentPlan=this.subscriptionInfo.subscription_id;
			}
			this.services.push('SmartClinic');
			if(this.doctorData.clinic_services.Clinic_Diagnostics){
				this.services.push('SmartDiagnostics');
			}
			if(this.doctorData.clinic_services.Clinic_Pharmacy){
				this.services.push('SmartPharmacy');
			}
			if(this.doctorData.clinic_services.Clinic_IPD){
				this.services.push('SmartIPD');
			} 
			//this.services=this.currentService;
		}else{
			this.data_saved=true;
			console.log(this.services);
			
			var mrp=0;
			var price=0;
			var discount=0;
			for (let s of this.services) {
				price+=this.getAmount(s);
				mrp+=parseFloat(this.getMRP(s));
				//discount=price*parseInt(this.getDiscount(s))/100;
				//mrp=price-discount;
			}
			//this.subTotal=price;
			this.plain_amount=price;
			this.max_price=mrp;
			console.log('PRICE IS :'+price);
			$('#myModal').modal('hide');
			//console.log('DISCOUNTED PRICE IS :'+mrp);
			
		}
		
	}
	getDiscount1(service){
		
		var item=this.plan.services.filter(function (el) {
			return el.services_name == service;
		}); 
		console.log(this.plan);
		//return 0;
		if(this.plan.name=='monthly'){
			return item[0].monthlyDiscount;
		}
		if(this.plan.name=='quarterly'){
			return item[0].quarterDiscount;
		}
		if(this.plan.name=='yearly'){
			return item[0].annualDiscount;
		}  
		
	}
	
	getAmount(service){
		//  alert(this.currentPlan);
		if(this.currentPlan!='trial'){
			var item=this.plan.services.filter(function (el) {
				return el.services_name == service;
			}); 
			console.log(this.plan);
			if(this.plan.name=='monthly'){
				return item[0].monthlyPlan;
			}
			if(this.plan.name=='quarterly'){
				return item[0].quarterPlan;
			}
			if(this.plan.name=='yearly'){
				return item[0].annualPlan;
			}  
		}else{
			return 0;
		}
	}
	
	getMRP(service){
		if(this.currentPlan!='trial'){
			var item=this.plan.services.filter(function (el) {
				return el.services_name == service;
			}); 
			console.log(this.plan);
			if(this.plan.name=='monthly'){
				return item[0].baseRate;
			}
			if(this.plan.name=='quarterly'){
				return 3*item[0].baseRate;
			}
			if(this.plan.name=='yearly'){
				return 12*item[0].baseRate;
			}  
		}else{
			return 0;
		}
	}
	
	
	bigService(service){
		console.log('Under big service');
		console.log(service);
		if(service.includes('Assistant')){
			return true;
		}else{
			return false;
		}  
	}
	
	
	fetchPricing(event){
		// alert(this.currentPlan);
		this.services=[];
		this.subTotal=0;
		var days=0;
		this.userService.GetPricingListing().subscribe(data => {
			console.log(data.data.pricing_object);
			this.gst=data.data.gst;
			if(this.currentPlan=='Monthly'){
				this.plan=data.data.pricing_object.filter(function(item) {
					return item.name == "monthly";
				});
				//alert('here');
				//alert(JSON.stringify(this.plan));
				this.plan=this.plan[0];
				console.log(this.plan);
				days=30;
				this.left_days=days;
				var someDate = new Date();
				var numberOfDaysToAdd = days;
				someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
				var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
				this.dd = someDate.getDate();
				this.th=this.nth(this.dd);
				this.month = mlist[someDate.getMonth()];
				this.year = someDate.getFullYear();
			}
			if(this.currentPlan=='Quarterly'){
				//	alert('monthly1');
				this.plan=data.data.pricing_object.filter(function(item) {
					return item.name == "quarterly";
				});
				this.plan=this.plan[0];
				console.log(this.plan);
				//this.services=this.doctorData.services_purchased;
				days=90;
				this.left_days=days;
				var someDate = new Date();
				var numberOfDaysToAdd = days;
				someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
				
				var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
				this.dd = someDate.getDate();
				this.th=this.nth(this.dd);
				this.month = mlist[someDate.getMonth()];
				this.year = someDate.getFullYear();
			}
			if(this.currentPlan=='Yearly'){
				this.plan=data.data.pricing_object.filter(function(item) {
					return item.name == "yearly";
				});
				this.plan=this.plan[0];
				console.log(this.plan);
				//this.services=this.doctorData.services_purchased;
				days=365;
				this.left_days=days;
				var someDate = new Date();
				var numberOfDaysToAdd = days;
				someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
				
				var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
				this.dd = someDate.getDate();
				this.th=this.nth(this.dd);
				this.month = mlist[someDate.getMonth()];
				this.year = someDate.getFullYear();
			}
			
		});
		
		
		
		
		
	}
	
	
	fetchPricing1(event){
		//alert(this.currentPlan);
		//this.services=[];
		//  this.subTotal=0;
		var days=0;
		this.userService.GetPricingListing().subscribe(data => {
			console.log(data.data.pricing_object);
			this.gst=data.data.gst;
			if(this.currentPlan=='Monthly'){
				this.plan=data.data.pricing_object.filter(function(item) {
					return item.name == "monthly";
				});
				this.plan=this.plan[0];
				//this.currentService=this.plan;
				console.log(this.plan);
				//days=30;
				//this.left_days=days;
				var someDate = new Date();
				var numberOfDaysToAdd = this.left_days;
				someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
				var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
				this.dd = someDate.getDate();
				this.th=this.nth(this.dd);
				this.month = mlist[someDate.getMonth()];
				this.year = someDate.getFullYear();
			}
			if(this.currentPlan=='Quarterly'){
				//	alert('monthly1');
				this.plan=data.data.pricing_object.filter(function(item) {
					return item.name == "quarterly";
				});
				this.plan=this.plan[0];
				//this.currentService=this.plan;
				console.log(this.plan);
				//this.services=this.doctorData.services_purchased;
				//days=90;
				//	this.left_days=days;
				var someDate = new Date();
				var numberOfDaysToAdd = this.left_days;
				someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
				
				var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
				this.dd = someDate.getDate();
				this.th=this.nth(this.dd);
				this.month = mlist[someDate.getMonth()];
				this.year = someDate.getFullYear();
			}
			if(this.currentPlan=='Yearly'){
				this.plan=data.data.pricing_object.filter(function(item) {
					return item.name == "yearly";
				});
				this.plan=this.plan[0];
				//this.currentService=this.plan;
				console.log(this.plan);
				//this.services=this.doctorData.services_purchased;
				//days=365;
				//this.left_days=days;
				var someDate = new Date();
				var numberOfDaysToAdd = this.left_days;
				someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
				
				var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
				this.dd = someDate.getDate();
				this.th=this.nth(this.dd);
				this.month = mlist[someDate.getMonth()];
				this.year = someDate.getFullYear();
			}
			
		});
	}
	
	fetchPricing2(event){
		
		//  this.subTotal=0;
		var days=0;
		// alert(this.currentPlan);
		
		this.userService.GetPricingListing().subscribe(data => {
			if(this.currentPlan=='Monthly'){
				//	alert('monthly');
				
				this.plan=data.montly;
				days=30;
				//this.left_days=days;
				var someDate = new Date();
				var numberOfDaysToAdd = days;
				someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
				var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
				this.dd = someDate.getDate();
				this.th=this.nth(this.dd);
				this.month = mlist[someDate.getMonth()];
				this.year = someDate.getFullYear();

				
			}
			if(this.currentPlan=='Quarterly'){
				//	alert('monthly1');
				this.plan=data.quarterly;
				//this.services=this.doctorData.services_purchased;
				days=90;
				//this.left_days=days;
				var someDate = new Date();
				var numberOfDaysToAdd = days;
				someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
				
				var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
				this.dd = someDate.getDate();
				this.th=this.nth(this.dd);
				this.month = mlist[someDate.getMonth()];
				this.year = someDate.getFullYear();
			}
			if(this.currentPlan=='Yearly'){
				this.plan=data.yearly;
				//this.services=this.doctorData.services_purchased;
				days=365;
				//this.left_days=days;
				var someDate = new Date();
				var numberOfDaysToAdd = days;
				someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
				
				var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
				this.dd = someDate.getDate();
				this.th=this.nth(this.dd);
				this.month = mlist[someDate.getMonth()];
				this.year = someDate.getFullYear();
			}
			
		});
	}
	
	nth(d) {
		if (d > 3 && d < 21) return 'th'; 
		switch (d % 10) {
			case 1:  return "st";
			case 2:  return "nd";
			case 3:  return "rd";
			default: return "th";
		}
	}
	
	
	updatePricing(data, e:any, list){
		var mrp=0;
		var price=0;
		this.purchaseDetail=[];
		var discount=list.monthlyDiscount;
		if(this.currentPlan=='Quarterly'){
			//mrp=price;
			//discount=price*parseInt(list.quarterDiscount)/100;
			//price=price-discount;
		}
		if(this.currentPlan=='Yearly'){
			//price=price*12;
			//mrp=price;
			//discount=price*parseInt(list.annualDiscount)/100;
			//price=price-discount;
		}
		if(this.currentPlan=='Monthly'){
			//price=price;
			//mrp=price;
			//discount=price*parseInt(list.monthlyDiscount)/100;
			//price=price-discount;
		}
		if(!e.target.checked){
			//alert('not here')
			//	this.plain_amount-=price;
			//this.subTotal-=price;
			//this.max_price-=mrp;
			//alert(this.max_price);
			//  console.log(this.subTotal)
			var index = this.services.indexOf(list.services_name);
			if (index > -1) {
				this.services.splice(index, 1);
			}
			//var index = this.monthlyPurchaseData.indexOf(list.type);
		}
		if(e.target.checked){
			//alert('here');
			this.services.push(list.services_name);
		/* if (this.services.includes(list.services_name) === false){
		  this.services.push(list.services_name);
		} */
		//this.plain_amount+=price;
		//  this.subTotal += price;
		//this.max_price+=mrp;
		//console.log(this.subTotal)
		
		//this.monthlyPurchaseData.push(list.type);
		//this.yearlyPurchaseData=[];
		//this.quarterlyPurchaseData=[];

	}
	for (let s of this.services) {
		price+=this.getAmount(s);
		mrp+=parseFloat(this.getMRP(s));
		this.purchaseDetail.push({
			'doctor_id':this.doctorData._id, 
			'doctm_clinic_id':this.doctorData.doctm_clinic_id, 
			'amount_purchased':this.getAmount(s), 
			'service':s,
			'discount':this.getDiscount(s),
			'gst':this.gst, 
			'gst_amount':(parseFloat(this.getAmount(s))*parseFloat(this.gst)/100),
			'total_amt_with_gst': (parseFloat(this.getAmount(s)) + (parseFloat(this.getAmount(s))*parseFloat(this.gst)/100)),
			'plan_name':this.currentPlan,
			'razorpay_customer_id':'xxxxxxx',
			'doctor_name':this.doctorData.first_name,
			'city':this.doctorData.clinic_details.city,
			'clinic_name':this.doctorData.clinic_details.clinic_name,
			'clinic_services':this.doctorData.clinic_services,
			'profile_image':this.doctorData.profile_image,
			'subscription_id':this.doctorData.subscription_id,
			'subscription_start':this.subscriptionInfo.createdAt,
			'subscription_expire':this.subscriptionInfo.trial_last_date
		});
	}
	localStorage['purchaseDetail']=JSON.stringify(this.purchaseDetail)
	this.subTotal=price;
	this.max_price=mrp;
	console.log(this.purchaseDetail)
	
}
getDiscount(item){
	
	if(this.currentPlan=='Monthly'){
		if(item.monthlyDiscount){
			return item.monthlyDiscount;
		}else{
			return 0;
		}
	}
	
	if(this.currentPlan=='Yearly'){
		if(item.annualDiscount){
			return item.annualDiscount;
		}else{
			return 0;
		}
	}
	
	if(this.currentPlan=='Quarterly'){
		if(item.quarterDiscount){
			return item.quarterDiscount;
		}else{
			return 0;
		}
	}
	return 0;
}

getPrice(price){
	if(this.currentPlan=='Monthly'){
		return price;
	}	
	if(this.currentPlan=='Quarterly'){
		return price*3;
	}	
	if(this.currentPlan=='Yearly'){
		return price*12;
	}	
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
			this.currentPlan="trial";
			console.log('here');
		}

	},err=>{
		console.log(err)
	})
}

save(){
	console.log(this.purchaseDetail);
	if(this.data_saved==true) {
		var ob={
			services: this.services,
			plan: this.plan,
			plan_name:this.plan.name,
			total:this.subTotal,
			gst:this.gst,
			max_price:this.max_price,
			purchase_details:this.purchaseDetail
		}
		localStorage['plan_data']=JSON.stringify(ob);
		
		this.router.navigate(['/header-two-layout/subscription-details']);
	}else{
		//do nothing
	} 
}

checkService(service){
	console.log(service)
	console.log(this.services);
	var index = this.services.indexOf(service);
	if (index > -1) {
		return true;
	}else{
		return false;
	}
}


GetDoctorDataById(){
	this.userService.GetDoctorDataById(this.doctorData._id).subscribe(data => {
		console.log(data)
		if (data.response == true) {
			localStorage['doctorDetails']=JSON.stringify(data.data)
			//console.log(data.data.subscription_id);
			localStorage['subscription_info']=JSON.stringify(data.data.subscription_id)
		}
	}, err => {
		console.log(err);
	})
}

checkDisabled(){
	if(this.services.indexOf('SmartClinic')!=-1){
		return false;
	}else{
		return true;
	}
}


}
