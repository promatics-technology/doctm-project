import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
	selector: 'app-dashboard-consultation-investigation',
	templateUrl: './dashboard-consultation-investigation.component.html',
	styleUrls: ['./dashboard-consultation-investigation.component.css']
})
export class DashboardConsultationInvestigationComponent implements OnInit {
	activatedtab
	doctorData
	loading
	dataArray
	otherSales
	doctorArray
	generalPatient
	privatepatient
	semiPrivatePatient
	totalGeneralBeds
	totalPrivateBeds
	totalSemiPrivateBeds
	totalAdmissionHours
	finalTotal
	totalAvgBill
	ipdLength
	patientDischarge
	patientAdmitted
	patientAdmittedPercentage
	patientDischargedPercentage
	patientDischargelength
	patientAdmittedlength
	patientAdmittedOccupency
	admisssionRate
	DocWiseTotal
	dataDispense
	fromDate = new Date()
	toDate = new Date()
	fromDate1 = new Date()
	toDate1= new Date()
	newDate = new Date()
	settings = {
		bigBanner: true,
		timePicker: false,
		format: 'dd-MMM-yyyy',
		defaultOpen: false
	}
	dataDischarge
	// totalAvgHours
	constructor(private userService: UserService, private toastr: ToastrService) { }

	ngOnInit() {
		this.doctorData = JSON.parse(localStorage['doctorDetails'])
		this.activatedtab = 0
		this.generalPatient = []
		this.privatepatient = []
		this.semiPrivatePatient = []
		this.dataArray = []
		this.dataDispense = []
		this.newDate.setDate(this.newDate.getDate()+1)
        this.fromDate1.setDate(this.fromDate1.getDate()-6)
		this.activatetab(1)
	}

	getDoctorFirstName(doctor){
		var doc = doctor.split(" ")
		return doc[0]
	}
	
	activatetab(i){
		this.activatedtab= i
		this.generalPatient = []
		this.privatepatient = []
		this.semiPrivatePatient = []
		this.doctorArray = []
		this.dataArray = []
		this.totalGeneralBeds = 0
		this.totalSemiPrivateBeds = 0
		this.totalPrivateBeds = 0
		this.totalAdmissionHours=0
		this.DocWiseTotal = 0
		this.totalAvgBill = 0
		this.ipdLength = 0
		this.patientDischarge = 0
		this.patientAdmitted = 0
		this.patientAdmittedlength = 0
		this.patientAdmittedOccupency = 0
		this.patientAdmittedPercentage = 0
		this.patientDischargedPercentage = 0
		this.finalTotal = 0
		this.admisssionRate = 0
		this.dataDispense =[]
		this.dataDischarge = []
		// this.totalAvgHours=0
		var object
		object ={}
		var date = new Date()
		object.doctm_clinic_id = this.doctorData.doctm_clinic_id
		object.end_date= new Date()
		if(i==0){
			object.start_date = date
		}
		else if (i==1) {
			object.start_date = new Date(date.setDate(date.getDate()-6))
		}
		else if(i==2){
			object.start_date = new Date(date.setDate(date.getDate()-13))
		}
		else if(i==3){
			object.start_date = new Date(date.setMonth(date.getMonth()-1))
		}
		else if(i==4){
			object.start_date =new Date(date.setMonth(date.getMonth()-3))
		}
		else if(i==5){
			object.start_date = new Date(date.setMonth(date.getMonth()-6))
		}
		else if(i==6){
			object.start_date = new Date(date.setFullYear(date.getFullYear()-1))
		}
		else if(i==7){
			object.start_date = new Date()
			object.maximum = true
		}
		this.fromDate = new Date(object.start_date)
		this.toDate = new Date(object.end_date)
		this.loading=true
		this.userService.IpdAnalytics(object).subscribe((result)=>{
			console.log(result)
			this.doctorArray = result.dataDoctors
			if(result.response){
				this.dataArray = result.data
				this.dataDispense = result.dataDispensed
				this.dataDischarge = result.dataDischarge
				for (var i = 0; i < this.dataArray.length; i++) {
					this.dataArray[i].total_bill = 0
					this.dataArray[i].admissionHours = 0
					this.ipdLength+=this.dataArray[i].dataIpd.length
					for (var j = 0; j < this.dataArray[i].dataIpd.length; j++) {
						this.patientAdmitted++
						this.patientAdmittedlength++
						if(this.dataArray[i].dataIpd[j].duration_days || this.dataArray[i].dataIpd[j].duration_hours){
							this.dataArray[i].admissionHours += (this.dataArray[i].dataIpd[j].duration_days*24)+(this.dataArray[i].dataIpd[j].duration_hours)		
						}
						if(this.dataArray[i].dataIpd[j].total_bill){
							this.dataArray[i].total_bill+=this.dataArray[i].dataIpd[j].total_bill	
							this.DocWiseTotal+=this.dataArray[i].dataIpd[j].total_bill
						}
						if(this.dataArray[i].dataIpd[j].type=="general"){
							this.generalPatient.push(this.dataArray[i].dataIpd[j])
						}else if(this.dataArray[i].dataIpd[j].type=="private"){
							this.privatepatient.push(this.dataArray[i].dataIpd[j])
						}else{
							this.semiPrivatePatient.push(this.dataArray[i].dataIpd[j])
						}
					}
					this.totalAdmissionHours += this.dataArray[i].admissionHours					
				}
				for (var i = 0; i < this.dataDischarge.length; i++) {
					for (var j = 0; j < this.dataDischarge[i].dataIpd.length; j++) {
						this.patientDischarge++					
					}
				}

				for (var i = 0; i < this.dataArray.length; i++) {
					this.finalTotal+= this.dataArray[i].total_bill
					this.totalAvgBill+=(this.dataArray[i].total_bill/this.ipdLength)
				}
				for (var i = 0; i < this.doctorArray.length; i++) {
					if(this.doctorArray[i].type_of_doctor=="admin_doctor"){
						this.totalGeneralBeds+=this.doctorArray[i].clinic_services.general_beds
						this.totalPrivateBeds+= this.doctorArray[i].clinic_services.private_beds
						this.totalSemiPrivateBeds+= this.doctorArray[i].clinic_services.semi_private_beds
						break;
					}
				}
			}
			this.patientAdmittedPercentage = (this.patientAdmitted*100)/this.ipdLength
			this.patientDischargedPercentage = (this.patientDischarge*100)/this.ipdLength
			this.patientAdmittedOccupency = (this.patientAdmittedlength*100)/(this.totalGeneralBeds+this.totalPrivateBeds+this.totalSemiPrivateBeds)
			this.admisssionRate = (this.patientAdmittedlength*100)/this.dataDispense.length
			if(this.doctorArray.length>this.dataArray.length){
				for (var i = 0; i < this.doctorArray.length; i++) {
					var boolean = false
					for (var j = 0; j < this.dataArray.length; j++) {
						if(this.doctorArray[i]._id.toString() == this.dataArray[j]._id.toString()){
							boolean = true
							break		
						}
					}
					if(boolean == false){
						this.dataArray.push({
							_id: this.doctorArray[i]._id,
							dataIpd:[]
						})
					}
				}
			}
			this.getDoctorId(0)
			this.loading=false
		},err=>{
			console.log(err)
		})
	}
	getDoctorId(id){
		this.generalPatient = []
		this.privatepatient = []
		this.semiPrivatePatient = []
		this.totalAdmissionHours=0
		this.DocWiseTotal = 0
		this.totalAvgBill = 0
		this.ipdLength = 0
		this.patientDischarge = 0
		this.patientAdmitted = 0
		this.patientAdmittedPercentage = 0
		this.patientDischargedPercentage = 0
		this.admisssionRate = 0
		var localDataArray = []
		var rate = 0
		if(id==0){
			localDataArray = this.dataArray
			rate = this.dataDispense.length
		}else{
			for (var i = 0; i < this.dataDischarge.length; i++) {
				if(this.dataDischarge._id == id){
					for (var j = 0; j < this.dataDischarge[i].dataIpd.length; j++) {
						this.patientDischarge++					
					}
				}
			}
			for (var i = 0; i < this.dataArray.length; i++) {
				if(this.dataArray[i]._id == id){
					localDataArray.push(this.dataArray[i])
					break;
				}
			}	
			for (var j= 0; j<this.dataDispense.length;j++) {
					if(localDataArray[0]._id == this.dataDispense[j].doctor_id){
					rate++
				}
			}	
		}
		for (var i = 0; i < localDataArray.length; i++) {
			this.ipdLength += localDataArray[i].dataIpd.length
			localDataArray[i].total_bill = 0
			localDataArray[i].admissionHours = 0

			for (var j = 0; j < localDataArray[i].dataIpd.length; j++) {
				this.patientAdmitted++
				if(localDataArray[i].dataIpd[j].duration_days || localDataArray[i].dataIpd[j].duration_hours){
					localDataArray[i].admissionHours += (localDataArray[i].dataIpd[j].duration_days*24)+(localDataArray[i].dataIpd[j].duration_hours)		
				}
				if(localDataArray[i].dataIpd[j].total_bill){
					localDataArray[i].total_bill+=localDataArray[i].dataIpd[j].total_bill	
					this.DocWiseTotal+=localDataArray[i].dataIpd[j].total_bill
				}
				if(localDataArray[i].dataIpd[j].type=="general"){
					this.generalPatient.push(localDataArray[i].dataIpd[j])
				}else if(localDataArray[i].dataIpd[j].type=="private"){
					this.privatepatient.push(localDataArray[i].dataIpd[j])
				}else{
					this.semiPrivatePatient.push(localDataArray[i].dataIpd[j])
				}
				if(localDataArray[i].dataIpd[j].discharge){
					this.patientDischarge++
				}
			}
			this.totalAdmissionHours += localDataArray[i].admissionHours
			
			// for (var k = 0; k < this.dataDispense.length; k++) {
			// 	if(localDataArray[i]._id == this.dataDispense[k].doctor_id){
			// 		rate++
			// 	}
			// }
		}
		this.admisssionRate = (this.patientAdmitted*100)/rate
		this.patientAdmittedPercentage = (this.patientAdmitted*100)/this.ipdLength
		this.patientDischargedPercentage = (this.patientDischarge*100)/this.ipdLength
		for (var i = 0; i < localDataArray.length; i++) {
			this.totalAvgBill+=(localDataArray[i].total_bill/this.ipdLength)
		}
	}

	go(){
		this.activatedtab = 0
		this.generalPatient = []
		this.privatepatient = []
		this.semiPrivatePatient = []
		this.doctorArray = []
		this.dataArray = []
		this.totalGeneralBeds = 0
		this.totalSemiPrivateBeds = 0
		this.totalPrivateBeds = 0
		this.totalAdmissionHours=0
		this.DocWiseTotal = 0
		this.totalAvgBill = 0
		this.ipdLength = 0
		this.patientDischarge = 0
		this.patientAdmitted = 0
		this.patientAdmittedlength = 0
		this.patientAdmittedOccupency = 0
		this.patientAdmittedPercentage = 0
		this.patientDischargedPercentage = 0
		this.finalTotal = 0
		this.admisssionRate = 0
		this.dataDispense =[]
		this.dataDischarge = []
		var object 
		object = {}
		object.doctm_clinic_id = this.doctorData.doctm_clinic_id
		object.start_date = this.fromDate1
		object.end_date = this.toDate1
		console.log(object)
		if(new Date(this.toDate1).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
            this.toastr.warning("Invalid date selected","Warning")
            return
        }
        if(new Date(this.fromDate1).setHours(0,0,0,0) !> new Date(this.toDate1).setHours(0,0,0,0)){
          this.toastr.warning("Invalid date selected","Warning")
            return
        }
		this.loading=true
		this.userService.IpdAnalytics(object).subscribe((result)=>{
			console.log(result)
			this.doctorArray = result.dataDoctors
			if(result.response){
				this.dataArray = result.data
				this.dataDispense = result.dataDispensed
				this.dataDischarge = result.dataDischarge
				for (var i = 0; i < this.dataArray.length; i++) {
					this.dataArray[i].total_bill = 0
					this.dataArray[i].admissionHours = 0
					this.ipdLength+=this.dataArray[i].dataIpd.length
					for (var j = 0; j < this.dataArray[i].dataIpd.length; j++) {
						this.patientAdmitted++
						this.patientAdmittedlength++
						if(this.dataArray[i].dataIpd[j].duration_days || this.dataArray[i].dataIpd[j].duration_hours){
							this.dataArray[i].admissionHours += (this.dataArray[i].dataIpd[j].duration_days*24)+(this.dataArray[i].dataIpd[j].duration_hours)		
						}
						if(this.dataArray[i].dataIpd[j].total_bill){
							this.dataArray[i].total_bill+=this.dataArray[i].dataIpd[j].total_bill	
							this.DocWiseTotal+=this.dataArray[i].dataIpd[j].total_bill
						}
						if(this.dataArray[i].dataIpd[j].type=="general"){
							this.generalPatient.push(this.dataArray[i].dataIpd[j])
						}else if(this.dataArray[i].dataIpd[j].type=="private"){
							this.privatepatient.push(this.dataArray[i].dataIpd[j])
						}else{
							this.semiPrivatePatient.push(this.dataArray[i].dataIpd[j])
						}
					}
					this.totalAdmissionHours += this.dataArray[i].admissionHours					
				}

				for (var i = 0; i < this.dataDischarge.length; i++) {
					for (var j = 0; j < this.dataDischarge[i].dataIpd.length; j++) {
						this.patientDischarge++					
					}
				}

				for (var i = 0; i < this.dataArray.length; i++) {
					this.finalTotal+= this.dataArray[i].total_bill
					this.totalAvgBill+=(this.dataArray[i].total_bill/this.ipdLength)
				}
				for (var i = 0; i < this.doctorArray.length; i++) {
					if(this.doctorArray[i].type_of_doctor=="admin_doctor"){
						this.totalGeneralBeds+=this.doctorArray[i].clinic_services.general_beds
						this.totalPrivateBeds+= this.doctorArray[i].clinic_services.private_beds
						this.totalSemiPrivateBeds+= this.doctorArray[i].clinic_services.semi_private_beds
						break;
					}
				}
			}
			this.patientAdmittedPercentage = (this.patientAdmitted*100)/this.ipdLength
			this.patientDischargedPercentage = (this.patientDischarge*100)/this.ipdLength
			this.patientAdmittedOccupency = (this.patientAdmittedlength*100)/(this.totalGeneralBeds+this.totalPrivateBeds+this.totalSemiPrivateBeds)
			this.admisssionRate = (this.patientAdmittedlength*100)/this.dataDispense.length
			if(this.doctorArray.length>this.dataArray.length){
				for (var i = 0; i < this.doctorArray.length; i++) {
					var boolean = false
					for (var j = 0; j < this.dataArray.length; j++) {
						if(this.doctorArray[i]._id.toString() == this.dataArray[j]._id.toString()){
							boolean = true
							break		
						}
					}
					if(boolean == false){
						this.dataArray.push({
							_id: this.doctorArray[i]._id,
							dataIpd:[]
						})
					}
				}
			}
			this.loading=false
		},err=>{
			console.log(err)
		})
	}

	getClass(i){
		if (i==this.activatedtab) {
			return 'active'
		}else if (i<this.activatedtab) {
			return 'completed'
		}

	}
	getData(data){
		if(isNaN(data)){
			return 0
		}else if(data==Infinity){
			return 0	
		}else if(data % 1 != 0){
		return data.toFixed(2)
		}else{
			return data
		}
	}

	getDoctorName(id){
		for (var i = 0; i < this.doctorArray.length; i++) {
			if(this.doctorArray[i]._id == id){
				return (this.doctorArray[i].first_name)
			}
		}
	}
	
}
