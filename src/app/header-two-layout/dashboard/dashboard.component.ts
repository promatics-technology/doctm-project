import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { DatePipe } from '@angular/common';
import {Router} from '@angular/router';
declare var $
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	doctorData
	referrals: number
	subscriptionData=<any>{}
	adminDoctor
	expiryDate
	isExpired:boolean
	dd
	th
	month
	year
	left_days
	subscriptionInfo
	today = new Date()
	date = new Date()
	checkTrial:boolean
	appointments_today:number
	compareDate
	start_date
	end_date
	subTotal
	trialData
	constructor(private router: Router,private toastr: ToastrService, private userService: UserService, private datePipe: DatePipe) {
		this.subscriptionData.subscription={'start_at':'30-05-2019',
		'current_end':'30-05-2010',
		'status':'active'}
		//this.subscriptionData.subscription={}
		this.subscriptionData.subscription.start_at="30-05-2019"
		//this.subscriptionData.subscription.current_end="30-05-2020"
		this.subscriptionData.subscription.status="active"
	}

	ngOnInit() {
		//alert(localStorage['subscription_info']);
		var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		if(this.IsJsonString(localStorage['doctorDetails'])){
			this.doctorData = JSON.parse(localStorage['doctorDetails'])
		}else{
			if(localStorage['doctorDetails']){
				this.doctorData = localStorage['doctorDetails'];
			}
		}
		
		if(localStorage['doctorsOfSameClinic']){
			// console.log('Doctors of same clinic');
			// console.log(localStorage['doctorsOfSameClinic']);
			this.adminDoctor = JSON.parse(localStorage['doctorsOfSameClinic'])
		}
		// console.log(this.adminDoctor) 
		//console.log(this.adminDoctor.clinic_details.clinic_name);
		if(!this.adminDoctor.clinic_details.clinic_name){
			this.toastr.warning('Looks like the main admin doctor is not connected with us anymore. Please associate your account with other clinic by providing Clinic Id.', 'Warning')
			this.router.navigate(['/header-two-layout/edit-profile/edit_profile']);
		} 
		this.compareDate = new Date(this.date.setDate(this.date.getDate()+6))
		this.GetSevenDaysTrialSubscription()
		this.FindReferralPatients()
		this.fetchSubscription()
		
		
		
	}
	
	
	ngDoCheck() {
		if(localStorage['subscription_info']){
			
			if(this.isJson(localStorage['subscription_info'])){
				this.subscriptionInfo=JSON.parse(localStorage['subscription_info'])
			}else{
				this.subscriptionInfo=localStorage['subscription_info']
			}
			if(this.subscriptionInfo){
				this.expiryDate=this.subscriptionInfo.trial_last_date;
			}
			var someDate = new Date(this.expiryDate);
			var today=new Date();
			if(someDate.getTime()<today.getTime()){
				this.isExpired=true
			}else{
				this.isExpired=false
				
			}
			//alert(someDate);
			//alert(today);
			//alert(this.isExpired);
			var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
			this.dd = someDate.getDate();
			this.th=this.nth(this.dd);
			this.month = mlist[someDate.getMonth()];
			this.year = someDate.getFullYear();
		}
		// console.log('Expiry Time:');
		// console.log(someDate.getTime());
		// console.log('Today Time:');
		// console.log(today.getTime());
		
		
	}
	isJson(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
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
	IsJsonString(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

	FindReferralPatients(){
		let ob = {
			doctorData: this.doctorData,
			object: {maximum: true }
		}
		this.userService.FindReferralPatients(ob).subscribe((data)=>{
			// console.log(data)
			if(data.response){
				this.referrals = data.dataReferralFrom.length
				this.appointments_today=data.appointmentsToday.length;
			}
		},err=>{
			console.log(err)
		})
	}
	SevenDaysTrialSubscription(){
		for (var i = 0; i < this.trialData.length; i++) {
			if(this.trialData[i].doctor_id == this.adminDoctor._id){
				this.toastr.warning('You already used trail plan', 'Warning')
				return
				
			}
			break
		}
		let ob = {
			doctor_id: this.adminDoctor._id,
			start_date: this.today,
			free_plan: 'free'
		}
		this.userService.SevenDaysTrialSubscription(ob).subscribe((data)=>{
			// console.log(data)
			this.toastr.success(data.message,'Success')
			$("#myModal").modal("hide");
			this.ngOnInit()
		},err=>{
			console.log(err)
		})
	}

	GetSevenDaysTrialSubscription(){
		this.userService.GetSevenDaysTrialSubscription().subscribe((data)=>{
			// console.log(data)
			if(data.response){
				this.trialData = data.data
				for (var i = 0; i < data.data.length; i++) {
					// console.log(data.data[i].start_date , this.compareDate)
					if(this.adminDoctor._id == data.data[i].doctor_id){
						if(data.data[i].free_plan == 'free'){
							this.checkTrial = true
						}
					} 
					if(this.datePipe.transform(data.data[i].start_date, 'dd/MM/yyyy') > this.datePipe.transform(this.compareDate, 'dd/MM/yyy')){
						this.checkTrial = false
					}
				}
			}

		},err=>{
			console.log(err)
		})
	}
	
	
	fetchSubscription(){
		// this.loading=true
		var ob={doctor_id:this.doctorData._id};
		this.userService.fetchSubscription(ob).subscribe((data)=>{
			//this.loading=false;
			// console.log(data)
			if(1){
				
				//  this.subscriptionData = data
				this.subscriptionData.subscription={'start_at':'30-05-2019',
				'current_end':'30-05-2010',
				'status':'active'}
				this.subscriptionData.subscription.start_at="30-05-2019"
				this.subscriptionData.subscription.current_end="30-05-2020"
				this.subscriptionData.subscription.status="active"
				
				if(this.subscriptionData.subscription.start_at){
					this.start_date=new Date(this.subscriptionData.subscription.start_at*1000);
					this.start_date = this.start_date.toGMTString();
				/* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
				this.start_date = this.start_date.toLocaleDateString('in-IN', options)(); */
				
			}
			//alert(this.subscriptionData.subscription.start_at);
			//alert(this.subscriptionData.subscription.status);
			if(this.subscriptionData.subscription.current_end){
				this.end_date=new Date(this.subscriptionData.subscription.current_end*1000);
				this.end_date = this.end_date.toGMTString();
				/* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
				this.end_date = this.end_date.toLocaleDateString('in-IN', options); */
			}
			if(this.subscriptionData){
				if(this.subscriptionData.purchaseInformation){
					this.subscriptionData.purchaseInformation.forEach(purchase=>{
						if(purchase.Price){
							this.subTotal+=parseFloat(purchase.Price);
						}
					})
				}
			}
		}

	},err=>{
		console.log(err)
	})
	}

}
