import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';
declare var $
declare var Razorpay: any;
@Component({
	selector: 'app-sms',
	templateUrl: './sms.component.html',
	styleUrls: ['./sms.component.css'],
	providers: [UserService]
})
export class SmsComponent implements OnInit {
	sendSmsForm: FormGroup
	smsDetails
	doctorData
	loading: boolean
	checkAge
	checkfollowUp
	checkAppointments
	checkFreqPatients
	checkDiagnosis
	buyNow
	shared
	reqData
	getSMSData
	getSMSforDoctor
	noOfSMS:number
	counter:number = 0
	leftSMS:number = 0
	fromDate = new Date()
	fromDate1 = new Date()
	settings = {
		bigBanner: true,
		timePicker: false,
		format: 'dd-MMM-yyyy',
		defaultOpen: false
	}
	doctorDiagnosisDB
	doctorDiagnosisDB1
	itemsdiagnosis
	obj
	dispensedData
	dispensedData1
	constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
		private userService: UserService, private router: Router) {
		this.getData = this.getData.bind(this) 
	}

	ngOnInit() {
		this.shared = {}
		this.buyNow = {}
		this.reqData = {}
		this.reqData.age = ''
		this.doctorData = JSON.parse(localStorage['doctorDetails'])
		this.smsDetails = {}
		this.smsDetails.gender = "All"
	
		this.sendSmsForm = this.formBuilder.group({
			'fromAge': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
				Validators.minLength(1), Validators.maxLength(3), Validators.max(100),
				])],
			'toAge': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
				Validators.minLength(1), Validators.maxLength(3),Validators.max(100)
				])],
			'composeSms': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
			'gender': [],
			'selectOne': [],
			'selectTwo': [],

		})
		this.smsDetails.selectOne = 'Select'
		this.smsDetails.selectTwo = 'Select'
		this.getSMSData = []
		this.buyNow.amount = "Select Amount"
		// this.getdispensedPatients()
		this.AllDoctorDiagnosis()
		this.getSMSPrice()
		this.getSMSDataForDoc()
	}
	getdispensedPatients(){
		var obj={
			doctor_id:this.doctorData._id
		}
		this.userService.FindDispensedPatients(obj).subscribe(data =>{
			if(data.response){
				this.dispensedData = data.data
			}else{
				this.toastr.error(data.message,'Error')
			}

		},err =>{
			console.log(err)
		})
	}

	checkRadio(){
		this.reqData.select5=false
		this.reqData.select6=false
	}
	checkRadio1(){
		this.reqData.select4=false
		this.reqData.select3=false
		this.reqData.select2=false
		this.reqData.select1=false
		this.reqData.select5=true
		this.reqData.select6=false
	}
	checkRadio2(){
		this.reqData.select4=false
		this.reqData.select3=false
		this.reqData.select2=false
		this.reqData.select1=false
		this.reqData.select5=false
		this.reqData.select6=true
	}
	onSubmit(){
		this.obj ={}
		this.obj.doctor_id = this.doctorData._id
		if(this.fromDate && this.reqData.select4){
			this.obj.date_start=''
			this.obj.date_start=this.fromDate
		}
		if(this.fromDate && this.reqData.select4){
			this.obj.date_end=''
			this.obj.date_end=this.fromDate1
		}
		if(this.reqData.gender  && this.reqData.select3){
			this.obj.gender=''
			this.obj.gender=this.reqData.gender
		}
		if(this.reqData.below && this.reqData.select2){
			this.obj.above=''
			this.obj.below=''
			this.obj.type=''
			this.obj.startAge=''
			this.obj.endAge=''
			this.obj.below=this.reqData.below
			this.obj.type=this.reqData.age
		}
		if(this.reqData.above && this.reqData.select2){
			this.obj.below=''
			this.obj.above=''
			this.obj.type=''
			this.obj.startAge=''
			this.obj.endAge=''
			this.obj.above=this.reqData.above
			this.obj.type=this.reqData.age
		}
		if(this.reqData.between && this.reqData.select2){
			this.obj.startAge=''
			this.obj.endAge=''
			this.obj.type=''
			this.obj.above=''
			this.obj.below=''
			this.obj.startAge=this.reqData.between1
			this.obj.endAge=this.reqData.between
			this.obj.type=this.reqData.age
		}
		if(this.itemsdiagnosis && this.reqData.select1){
			this.obj.diagnosis=''
			// var arr=[]
			for (var i = 0; i < this.itemsdiagnosis.length; ++i) {
				this.obj.diagnosis=this.itemsdiagnosis[i].value
			}
			// this.obj.diagnosis=arr
		}
		
		console.log(this.obj)

		this.userService.FindDispensedPatients(this.obj).subscribe(data =>{
			if(data.response){

				this.dispensedData1 = data.data
				this.dispensedData = this.dispensedData1.length
				console.log(this.dispensedData)
				this.toastr.success(data.message,'Success')
				this.ngOnInit()
			}else{
				this.toastr.error(data.message,'Error')
			}

		},err =>{
			console.log(err)
		})

	}
	onSendSMS(){
		var arr = []
		var count=0
		for (var i = 0; i < this.dispensedData1.length; ++i) {
			arr.push(this.dispensedData1[i].registration.pateintPhone)
			count ++
		}
		// this.dispensedData1.forEach(function(item,arr,ind){
			
		// })
		var obj ={
			phoneArray:arr,
			message:''
		}
		if(this.reqData.message){
			obj.message=this.reqData.message
		}
		console.log(obj)
		if(this.noOfSMS >= count){
			this.userService.SendSMSToPatients(obj).subscribe(data =>{
				if(data.response){
					this.toastr.success(data.message,'Success')
					this.ngOnInit()
				}else{
					this.toastr.error(data.message,'Error')
					return
				}
			},err =>{
				console.log(err)
			})
		}else{
			this.toastr.warning('Your current SMS balance is low,You can not send SMS to patients')
			return
		}

	}

	sendSMS(){
		if (this.smsDetails.selectOne == 'Select' || this.smsDetails.selectOne =='') {
			this.smsDetails.selectOne = ''
		}
		if (this.smsDetails.selectTwo == 'Select' || this.smsDetails.selectTwo =='') {
			this.smsDetails.selectTwo = ''
		}
		// console.log(this.smsDetails)

		if(this.checkAppointments){
			this.smsDetails.smart_assistant_id = this.doctorData.smart_assistant_id
		}
		this.counter++
		//this.smsDetails.smart_assistant_id = this.doctorData.smart_assistant_id

		console.log(this.counter)
		this.getSMSDataForDoc()
		this.smsDetails.doctor_id = this.doctorData._id
		console.log(this.smsDetails)
		this.loading = true
		if(this.checkAge){
			this.smsDetails.age = true
			this.userService.SendSms(this.smsDetails).subscribe((data)=>{
				console.log(data)
				///this.patientSelected = data.newUnique.length 
				this.loading = false
			},err=>{    
				console.log(err)
			})
		}
		if(this.checkfollowUp){
			this.smsDetails.followUps = true
			this.userService.SendSms(this.smsDetails).subscribe((data)=>{
				console.log(data)
				///this.patientSelected = data.newUnique.length 
				this.loading = false
			},err=>{    
				console.log(err)
			})
		}
		if(this.checkAppointments){
			this.smsDetails.appointments = true
			this.userService.SendSms(this.smsDetails).subscribe((data)=>{
				console.log(data)
				///this.patientSelected = data.newUnique.length 
				this.loading = false
			},err=>{    
				console.log(err)
			})
		}
		if(this.checkFreqPatients){
			this.smsDetails.freqPatients = true
			this.userService.SendSms(this.smsDetails).subscribe((data)=>{
				console.log(data)
				///this.patientSelected = data.newUnique.length 
				this.loading = false
			},err=>{    
				console.log(err)
			})
		}
		if(this.checkDiagnosis){
			this.smsDetails.diagnosis = true
			this.userService.SendSms(this.smsDetails).subscribe((data)=>{
				console.log(data)
				///this.patientSelected = data.newUnique.length 
				this.loading = false
			},err=>{    
				console.log(err)
			})
		}
	}
	abcd(){
		if(this.checkAge ||this.checkfollowUp ||this.checkAppointments ||this.checkFreqPatients ||this.checkDiagnosis){
			this.userService.SendSms(this.smsDetails).subscribe((data)=>{
				// console.log(data)
				///this.patientSelected = data.newUnique.length 
				this.loading = false
			},err=>{    
				console.log(err)
			})

		}
	}

	initPay ()  {  
		console.log(this.getAmount(this.buyNow.amount))
		if(this.buyNow.amount == "Select Amount" || this.buyNow.amount == undefined || this.buyNow.amount == null || this.buyNow.amount == ''){
			this.toastr.warning('Please Select Amount', 'Warning')
			return
		}
		var self=this;
		var options = {
			"key": "rzp_test_ZXisTAaZeIwiSh",
			// "amount":((this.buyNow==1)?this.shared.totalAmountWithDisocuntBuyNow:this.shared.totalAmountWithDisocunt)*500, // 2000 paise = INR 20
			"amount": parseInt(this.buyNow.amount)*100,
			"name": " SMS Pay",
			"description": "Order #",

			"handler": function (response){
				// console.log(response);

				self.getData(options, response)
				// alert(response.razorpay_payment_id);
				//this.paid();
				//this.shared.addOrder(this.buyNow,response.razorpay_payment_id);     

			},
			"prefill": {
				"name":  this.doctorData.first_name,
				"email": this.doctorData.email,
				"contact":this.doctorData.phone

			},
			"theme": {
				"color": "blue"
			}
		};
		var rzp1 = new Razorpay(options);

		rzp1.open();

	} 

	getData(data, id){
		console.log(data)
		var ob = {
			paymentId: id.razorpay_payment_id,
			amount: (data.amount)/100,
			phone: data.prefill.contact,
			email: data.prefill.email,
			name:data.prefill.name,
			doctm_clinic_id: this.doctorData.doctm_clinic_id,
			sms: this.getAmount(this.buyNow.amount),
			doctor_id: this.doctorData._id
		}
		// console.log(ob)

		this.loading = true
		this.userService.SMSPayment(ob).subscribe((data)=>{
			// console.log(data)
			$("#myModal").modal("hide");
			this.ngOnInit()
			this.loading = false
		},err=>{    
			console.log(err)
		})
	}
	getSMSPrice(){
		this.loading = true
		this.userService.GetSmsPricing().subscribe((data)=>{
			// console.log(data)
			this.getSMSData = data.data
			this.loading = false
		},err=>{    
			console.log(err)
		})
	}
	getAmount(amount){
		for (var i = 0; i < this.getSMSData.length; i++) {
			if(this.getSMSData[i].price == amount){
				return this.getSMSData[i].sms
			}
		}
	}
	getSMSDataForDoc(){
		this.noOfSMS = 0
		this.getSMSforDoctor = []
		this.loading = true
		var obj={
			doctor_id:this.doctorData._id
		}
		this.userService.GetSMSPaymentData(obj).subscribe((data)=>{
			// console.log(data)
			if(data.response){
				for (var i = 0; i < data.data.length; i++) {
					if(data.data[i].status){
						this.noOfSMS += data.data[i].sms
						// data.data[i].usedSMS = this.counter
						// this.leftSMS = this.noOfSMS -data.data[i].usedSMS
					}

			}
			this.getSMSforDoctor = data.data
			console.log(this.getSMSforDoctor)
			}
		
			this.loading = false
		},err=>{    
			console.log(err)
		})
	}
	AllDoctorDiagnosis() {

		this.loading = true
		this.userService.GetAllDoctorDiagnosis().subscribe(data => {
			// console.log(data)
			if (data.response == true) {
				this.doctorDiagnosisDB = data.data
				this.doctorDiagnosisDB1 = data.data


			}else{
				this.toastr.error(data.message,"Error");
				return
			}

		}, err => {
			console.log(err);
		})
	}


	onTextChange(type, suggestion) {

		if (suggestion && suggestion.trim() != '') {
			suggestion = suggestion.toLowerCase()
			this.doctorDiagnosisDB = this.doctorDiagnosisDB1.filter((item) => {    
				let b = item.toLowerCase()
				return (b.indexOf(suggestion) > -1)
			})
		}


	}

}



