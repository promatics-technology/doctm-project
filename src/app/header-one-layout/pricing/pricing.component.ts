import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service'
import { MatFormFieldModule, MatInputModule } from '@angular/material'
declare var $:any;
@Component({
	selector: 'app-pricing',
	templateUrl: './pricing.component.html',
	styleUrls: ['./pricing.component.css']
})

export class PricingComponent implements OnInit {
	
	getFaqData
	loading
	oneMonth
	sixMonths
	oneYear
	oneMonthPrice
	sixMonthsPrice
	oneYearPrice
	returnStatus
	totalAmount
	monthlyAmount
	quarterlyAmount
	yearlyAmount
	finalPrice
	quarterly
	yearly
	monthly
	monthlyPurchaseData=[]
	yearlyPurchaseData=[]
	quarterlyPurchaseData=[]
	
	constructor(private toastr: ToastrService,
		private userService: UserService,) { }

	ngOnInit() {
		this.returnStatus = []
		this.getFaq()
		this.totalAmount = 0
		this.monthlyAmount = 0
		this.quarterlyAmount = 0
		this.yearlyAmount = 0

		$('#kk1 ul li').click(function(){
			$('#kk2 ul li input').removeAttr('checkbox');
		});
	}
	getFaq(){
		this.oneMonth = []
		this.sixMonths = []
		this.oneYear = []
		this.oneMonthPrice = 0
		this.sixMonthsPrice = 0
		this.oneYearPrice = 0
		this.getFaqData =[]
		this.loading = true
		var arr
		this.userService.GetPricing().subscribe(data => {
			console.log(data);
			arr = data.data
			this.getFaqData = arr.pricing_object
			console.log(this.getFaqData)
			for (var i = 0; i < this.getFaqData.length; i++) {
				if(this.getFaqData[i].name == "monthly"){
					this.oneMonth.push(this.getFaqData[i].services)
					// this.oneMonthPrice += parseFloat(this.getFaqData[i].finalPrice)
				}else if(this.getFaqData[i].name == "quarterly"){
					this.sixMonths.push(this.getFaqData[i].services)
					// this.sixMonthsPrice += parseFloat(this.getFaqData[i].finalPrice)
				}
				else if(this.getFaqData[i].name == "yearly"){
					this.oneYear.push(this.getFaqData[i].services)
					// this.oneYearPrice += parseFloat(this.getFaqData[i].finalPrice)
				}
			}
			console.log(this.oneMonth)
			console.log(this.sixMonths)
			console.log(this.oneYear)
			this.loading = false;
		}, err => {
			console.log(err);
		})
	}
	getData(data){
		if(isNaN(data)){
			return 0
		}else if(data % 1 != 0){
			return data.toFixed(2)
		}else{
			return data
		}
	}
	oneMonthData(data, e:any, list){
		console.log(list);
		this.yearlyAmount=0
		this.quarterlyAmount=0
		this.yearly=false;
		this.quarterly=false;
		//console.log(data);
		if(!e.target.checked){
			this.monthlyAmount-=data;
			console.log(this.monthlyAmount)
			list.monthly=true;
			list.quarterly = false;
			list.yearly = false;
			var index = this.monthlyPurchaseData.indexOf(list.services_name);
			if (index > -1) {
				this.monthlyPurchaseData.splice(index, 1);
			}
			//this.monthlyPurchaseData.push(list.type);
			this.yearlyPurchaseData=[];
			this.quarterlyPurchaseData=[];
		}
		if(e.target.checked){

			this.monthlyAmount += data
			console.log(this.monthlyAmount)
			list.monthly=true;
			list.quarterly = false;
			list.yearly = false;
			this.monthlyPurchaseData.push(list.services_name);
			this.yearlyPurchaseData=[];
			this.quarterlyPurchaseData=[];

		}
		
		for (var x = 0; x < this.sixMonths.length; x++) {
			
			this.sixMonths[x].quarterly = false;
			
		}
		for (var x = 0; x < this.oneYear.length; x++) {
			
			this.oneYear[x].yearly = false;
			
		}
		
		
	}
	sixMonthData(data, e:any, list){
		console.log(list);
		this.yearlyAmount=0
		this.monthlyAmount=0
		list.yearly=false;
		list.monthly=false;
		list.quarterly=true;
		if(!e.target.checked){
			this.quarterlyAmount -=data 
			var index = this.quarterlyPurchaseData.indexOf(list.services_name);
			if (index > -1) {
				this.quarterlyPurchaseData.splice(index, 1);
			}
			//this.monthlyPurchaseData.push(list.type);
			this.yearlyPurchaseData=[];
			this.monthlyPurchaseData=[];
		}
		if(e.target.checked){
			list.yearly=false;
			list.monthly=false;
			list.quarterly=true;
			this.quarterlyAmount += data
			this.quarterlyPurchaseData.push(list.services_name);
			this.yearlyPurchaseData=[];
			this.monthlyPurchaseData=[];
		}
		
		for (var i = 0; i < this.oneMonth.length; i++) {
			
			this.oneMonth[i].monthly = false;
			
		}
		for (var x = 0; x < this.oneYear.length; x++) {
			
			this.oneYear[x].yearly = false;
			
		}
		
		console.log(this.sixMonths);
	}
	oneYearData(data, e:any, list){
		console.log(list);
		this.quarterlyAmount=0
		this.monthlyAmount=0
		list.quarterly=false;
		list.monthly=false;
		list.yearly=true;
		if(!e.target.checked){
			this.yearlyAmount -= data
			var index = this.yearlyPurchaseData.indexOf(list.services_name);
			if (index > -1) {
				this.yearlyPurchaseData.splice(index, 1);
			}
			//this.monthlyPurchaseData.push(list.type);
			this.quarterlyPurchaseData=[];
			this.monthlyPurchaseData=[];
			
		}
		if(e.target.checked){
			list.quarterly=false;
			list.monthly=false;
			list.yearly=true;
			this.yearlyAmount += data
			this.yearlyPurchaseData.push(list.services_name);
			this.quarterlyPurchaseData=[];
			this.monthlyPurchaseData=[];
		}
		
		for (var x = 0; x < this.oneMonth.length; x++) {
			
			this.oneMonth[x].monthly = false;
			
		}
		for (var x = 0; x < this.sixMonths.length; x++) {
			
			this.sixMonths[x].quarterly = false;
			
		}
	}
	monthlySubscribe(){
		console.log(this.monthlyAmount)
		this.selectClass()
	}
	quaterlySubscribe(){
		console.log(this.quarterlyAmount)
		this.selectClass()
	}
	yearlySubscribe(){
		console.log(this.yearlyAmount)
		this.selectClass()
	}
	checkPlan(){
		return false;
	}
	selectClass(){
		//document.getElementById("parent").style.opacity = "0";
		if($('#myModalConf').length){
			$('#myModalConf').modal('show');
		}
		if(this.yearlyPurchaseData.length >0){
			console.log(this.yearlyPurchaseData);
			localStorage['purchased_data']=this.yearlyPurchaseData
		}
		if(this.quarterlyPurchaseData.length >0){
			console.log(this.quarterlyPurchaseData);
			localStorage['purchased_data']=this.quarterlyPurchaseData
		}
		if(this.monthlyPurchaseData.length >0){
			console.log(this.monthlyPurchaseData);
			localStorage['purchased_data']=this.monthlyPurchaseData
		}
	}

}
