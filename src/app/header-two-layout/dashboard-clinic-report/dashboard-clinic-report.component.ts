import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

import * as jsPDF from 'jspdf';
declare var $

@Component({
  selector: 'app-dashboard-clinic-report',
  templateUrl: './dashboard-clinic-report.component.html',
  styleUrls: ['./dashboard-clinic-report.component.css']
})
export class DashboardClinicReportComponent implements OnInit {	

	fromDate = new Date()
	toDate = new Date()
	fromDate1 = new Date()
	toDate1= new Date()
	newDate = new Date()
	activatedtab
	settings = {
		bigBanner: true,
		timePicker: false,
		format: 'dd-MMM-yyyy',
		defaultOpen: false
	}
	loading
	doctorData
	doctorCollectionArray
	totalCollection
	dateDiff
	dataDoctors
	avgDailyCollection
	avgPatientCollection
	totalPrescriptions
	avgTotalPrescriptions
	patientArray
	newPatientArray
	totalAvgDailyPatients
	totalFreqPatients
	totalMalePatients
	totalFemalePatients
	totalAvgAgePatients
	totalWalkinPatients
	totalAppointmentPatients
	totalEmergencyPatients
	totalCtuUsed
	totalCtuUtilisedPerc
	totalDispensedPatients
	totalAvgTime

	pharmacyDoctors
	totalPharmacySales
	totalPharmacyCost
	totalPharmacyOrders
	totalPharmacyProfit
	totalPharmacyPerPresSale
	overAllPharmacyProfit
	totalPharmacyDispensedPatients
	totalPharmacyPatients
	pharmacyPatientConversion

	stockPurchases
	stockUniqueProducts
	stockProductsAmount

	stockArray
	purchaseValueStock
	saleValueStock
	rpt_content=[]
				

	totalDiagnosticsOrders
	totalDiagnosticsPatients
	totalDiagnosticsSales
	diagnosticsDoctors
	totalDiagnosticsDispensedPatients
	totalDiagnosticsPerPresSale
	diagnosticsPatientConversion

	dataArray
	totalIpdAdmissions
	totalIpdDischarged
	totalIpdBill
	totalIpdHours
	totalIpdAvgBill
	totalGeneralBeds
	totalSemiPrivateBeds
	totalPrivateBeds
	ipdOccupancy

	dataSummaryArray
	patientsArray
	opdCollection
	pharmacySales
	pharmacyProfit
	diagnosticsCollection
	diagnosticsOrders
	ipdCollection
	ipdAdmission
	totalClinicCollection
	patientDetails
	patientDetailsIpd
	uniqueDiagnosticsArray

	radioFull
	adminDoctor
	adminClinicDoctor
  constructor(private userService: UserService, private toastr: ToastrService,private datePipe: DatePipe) { }

  ngOnInit() {
	this.doctorData = JSON.parse(localStorage['doctorDetails'])
	console.log(this.doctorData)
	this.adminDoctor = JSON.parse(localStorage['doctorsOfSameClinic'])
        console.log(this.adminDoctor)
	this.newDate.setDate(this.newDate.getDate()+1)
	this.fromDate1.setDate(this.fromDate1.getDate()-6)
	this.doctorCollectionArray = []
	this.patientArray = []
	this.newPatientArray = []
  	this.radioFull = true	
  	this.activatedtab = 1  
  	this.activatetab(1)
	
	this.rpt_content=[{'col1':'1', 'col2':'OPD Report', 'col3':':', 'col4':'1'}];
	if(this.doctorData.clinic_services.Clinic_Pharmacy==true){
		this.rpt_content.push({'col1':'2', 'col2':'Pharmacy Report', 'col3':':', 'col4':'2'});
	}
	
	if(this.doctorData.clinic_services.Clinic_Diagnostics==true){
		this.rpt_content.push({'col1':'2', 'col2':'Diagnostics Report', 'col3':':', 'col4':'2'});
	}
	
	if(this.doctorData.clinic_services.Clinic_IPD==true){
		this.rpt_content.push({'col1':'2', 'col2':'IPD Report', 'col3':':', 'col4':'2'});
	}
	this.rpt_content.push({'col1':'SR NO', 'col2':'Clinic Summary Report', 'col3':':', 'col4':'Page'});
	this.rpt_content.push({'col1':'SR NO', 'col2':'Annexure-1', 'col3':':', 'col4':'Page'});
	this.rpt_content.push({'col1':'SR NO', 'col2':'Annexure-2', 'col3':':', 'col4':'Page'});
	this.rpt_content.push({'col1':'SR NO', 'col2':'Annexure-3', 'col3':':', 'col4':'Page'});
	}
  activatetab(i){
  	this.activatedtab= i
  	
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
			this.fromDate1 = object.start_date
		}
		else if(i==2){
			object.start_date = new Date(date.setDate(date.getDate()-13))
			this.fromDate1 = object.start_date
		}
		else if(i==3){
			object.start_date = new Date(date.setMonth(date.getMonth()-1))
			this.fromDate1 = object.start_date
		}
		else if(i==4){
			object.start_date =new Date(date.setMonth(date.getMonth()-3))
			this.fromDate1 = object.start_date
		}
		else if(i==5){
			object.start_date = new Date(date.setMonth(date.getMonth()-6))
			this.fromDate1 = object.start_date
		}
		else if(i==6){
			object.start_date = new Date(date.setFullYear(date.getFullYear()-1))
			this.fromDate1 = object.start_date
		}
		else if(i==7){
			object.start_date = new Date()
			object.maximum = true
		}
		this.fromDate = new Date(object.start_date)
		this.toDate = new Date(object.end_date)
		console.log(object)
		this.OPDAnalyticsClinicSummary(object)
		this.PharmacyAnalytics(object)
		this.PurchasesForClinicReport(object)
		this.StockOnTodayForClinicReport(object)
		this.DiagnosticsAnalytics(object)		
		this.IpdAnalytics(object)		
		this.AllClinicSummary(object)
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
		}else if(data % 1 != 0){
			return data.toFixed(2)
		}else{
			return data
		}
	}

	getDoctorName(id){
        for (var i = 0; i < this.dataDoctors.length; i++) {
			if(this.dataDoctors[i]._id == id){
				var name = this.dataDoctors[i].first_name.split(' ')
				return (name[0])
			}
		}
    }

    go(){
    	//this.activatedtab = 0
    	var object 
		object = {}
		object.doctm_clinic_id = this.doctorData.doctm_clinic_id
		object.start_date = this.fromDate1
		object.end_date = this.toDate1
		console.log(object)
		this.OPDAnalyticsClinicSummary(object)
		this.PharmacyAnalytics(object)
		this.PurchasesForClinicReport(object)
		this.StockOnTodayForClinicReport(object)		
		this.DiagnosticsAnalytics(object)
		this.IpdAnalytics(object)				
		this.AllClinicSummary(object)
    }

    OPDAnalyticsClinicSummary(object){
    	this.loading = true
		this.doctorCollectionArray = []
		this.totalCollection = 0
		this.dateDiff = 0
		this.dataDoctors = []
		this.avgDailyCollection = 0
		this.avgPatientCollection = 0
		this.totalPrescriptions = 0
		this.avgTotalPrescriptions = 0
		this.totalAvgDailyPatients = 0
		this.totalFreqPatients = 0
		this.totalMalePatients = 0
		this.totalFemalePatients = 0
		this.totalAvgAgePatients = 0
		this.totalWalkinPatients = 0
		this.totalAppointmentPatients = 0
		this.totalEmergencyPatients = 0
		this.totalCtuUsed = 0
		this.totalCtuUtilisedPerc = 0
		this.totalDispensedPatients = 0
		this.patientArray = []
		this.newPatientArray = []
		this.adminClinicDoctor = []
		this.userService.OPDAnalyticsClinicSummary(object).subscribe((data)=>{
			console.log(data)
			if(data.response){

				this.dataDoctors = data.dataDoctors
				var diff = Math.abs(this.toDate.getTime() - this.fromDate.getTime());
                this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
                this.totalPrescriptions = data.dataDispensed.length+data.dataRegistrations.length
				for (var i = 0; i < this.dataDoctors.length; ++i) {
					if(this.dataDoctors[i].type_of_doctor === 'admin_doctor'){
						this.adminClinicDoctor.push(this.dataDoctors[i])
						break
					}
				}
				console.log(this.adminClinicDoctor)
				for (var i = 0; i < data.dataRegistrations.length; i++) {
					if(data.dataRegistrations[i].fee){
						this.totalCollection +=parseInt(data.dataRegistrations[i].fee)
					}
					var boolean = false
					for (var j = 0; j < this.doctorCollectionArray.length; j++) {
						this.doctorCollectionArray[j].totalSec = 0
						this.doctorCollectionArray[j].dispensed = 0
						if(data.dataRegistrations[i].doctor_id == this.doctorCollectionArray[j].id){
							if(data.dataRegistrations[i].fee){
								this.doctorCollectionArray[j].sales += parseInt(data.dataRegistrations[i].fee)
							}
							this.doctorCollectionArray[j].prescriptions++
							var boolean1 = false
							for (var k = 0; k < this.patientArray.length; k++) {
								if(this.patientArray[k].name==data.dataRegistrations[i].pateintName &&
									this.patientArray[k].phone==data.dataRegistrations[i].pateintPhone){
									this.patientArray[k].lastVisitCount++
									boolean1 = true
									break;
								}
							}
							if(boolean1 == false){
								var count = 0
								if(data.dataRegistrations[i].lastVisit.status){
									this.newPatientArray.push(1)
									count = 1
								}
								this.patientArray.push({
									name: data.dataRegistrations[i].pateintName,
									phone: data.dataRegistrations[i].pateintPhone,
									doctor_id: data.dataRegistrations[i].doctor_id,
									lastVisit: data.dataRegistrations[i].lastVisit.status,
									lastVisitCount: count,
									gender: data.dataRegistrations[i].gender,
									age: data.dataRegistrations[i].age,
									type: data.dataRegistrations[i].type
								})
							}
							boolean = true
						}
					}
					if(boolean == false){
						var count = 0
						if(data.dataRegistrations[i].lastVisit.status){
							this.newPatientArray.push(1)
							count = 1
						}
						var a:number = 0
						if(data.dataRegistrations[i].fee){
							a = parseInt(data.dataRegistrations[i].fee)
						}
						this.doctorCollectionArray.push({
							id: data.dataRegistrations[i].doctor_id,
							sales: a,
							prescriptions: 1,
							dispensed: 0,
							totalSec:0
						})
						this.patientArray.push({
							name: data.dataRegistrations[i].pateintName,
							phone: data.dataRegistrations[i].pateintPhone,
							doctor_id: data.dataRegistrations[i].doctor_id,
							lastVisit: data.dataRegistrations[i].lastVisit.status,
							lastVisitCount: count,
							gender: data.dataRegistrations[i].gender,
							age: data.dataRegistrations[i].age,
							type: data.dataRegistrations[i].type
						})		
					}
				}
				
                for (var i = 0; i < data.dataDispensed.length; i++) {
                	this.totalDispensedPatients++
                	if(data.dataDispensed[i].registration.fee){
						this.totalCollection +=parseInt(data.dataDispensed[i].registration.fee)
                	}
					var boolean = false
					var sale = 0
					for (var j = 0; j < this.doctorCollectionArray.length; j++) {
						if(data.dataDispensed[i].doctor_id == this.doctorCollectionArray[j].id){
							if(data.dataDispensed[i].registration.fee){
								this.doctorCollectionArray[j].sales += parseInt(data.dataDispensed[i].registration.fee)
							}
							this.doctorCollectionArray[j].prescriptions++
							this.doctorCollectionArray[j].dispensed++
							this.doctorCollectionArray[j].totalSec += (data.dataDispensed[i].precription.minutes * 60) + data.dataDispensed[i].precription.seconds 							
							var boolean1 = false
							for (var k = 0; k < this.patientArray.length; k++) {
								if(this.patientArray[k].name==data.dataDispensed[i].registration.pateintName &&
									this.patientArray[k].phone==data.dataDispensed[i].registration.pateintPhone){
									this.patientArray[k].lastVisitCount++
									boolean1 = true
									break;
								}
							}
							if(boolean1 == false){
								var count = 0
								if(data.dataDispensed[i].registration.lastVisit.status){
									this.newPatientArray.push(1)
									count = 1
								}
								this.patientArray.push({
									name: data.dataDispensed[i].registration.pateintName,
									phone: data.dataDispensed[i].registration.pateintPhone,
									doctor_id: data.dataDispensed[i].doctor_id,
									lastVisit: data.dataDispensed[i].registration.lastVisit.status,
									lastVisitCount: count,
									gender: data.dataDispensed[i].registration.gender,
									age: data.dataDispensed[i].registration.age,
									type: data.dataDispensed[i].registration.type
								})
							}
							boolean = true
						}
					}
					if(boolean == false){
						var a:number = 0
						if(data.dataDispensed[i].registration.fee){
							a= parseInt(data.dataDispensed[i].registration.fee)
						}
						this.doctorCollectionArray.push({
							id: data.dataDispensed[i].doctor_id,
							sales: a,
							prescriptions: 1,
							dispensed: 1,
							totalSec: (data.dataDispensed[i].precription.minutes * 60) + data.dataDispensed[i].precription.seconds 
						})		
						var count = 0
						if(data.dataDispensed[i].registration.lastVisit.status){
							this.newPatientArray.push(1)
							count = 1
						}
						this.patientArray.push({
							name: data.dataDispensed[i].registration.pateintName,
							phone: data.dataDispensed[i].registration.pateintPhone,
							doctor_id: data.dataDispensed[i].doctor_id,
							lastVisit: data.dataDispensed[i].registration.lastVisit.status,
							lastVisitCount: count,
							gender: data.dataDispensed[i].registration.gender,
							age: data.dataDispensed[i].registration.age,
							type: data.dataDispensed[i].registration.type
						})
					}
				}
				for (var i = 0; i < this.doctorCollectionArray.length; i++) {
					this.doctorCollectionArray[i].percentage = parseFloat(this.getData((this.doctorCollectionArray[i].sales*100)/this.totalCollection))
					this.doctorCollectionArray[i].avgDailyColl = parseFloat(this.getData((this.doctorCollectionArray[i].sales)/this.dateDiff))
					this.doctorCollectionArray[i].avgColl = parseFloat(this.getData((this.doctorCollectionArray[i].sales)/(data.dataDispensed.length+data.dataRegistrations.length)))
					this.doctorCollectionArray[i].avgDailyPrescription = Math.ceil(this.getData((this.doctorCollectionArray[i].prescriptions)/this.dateDiff)) 
					this.doctorCollectionArray[i].totalPatients = 0
					this.doctorCollectionArray[i].newPatients = 0
					this.doctorCollectionArray[i].frequentPatients = 0
					this.doctorCollectionArray[i].male = 0
					this.doctorCollectionArray[i].female = 0
					this.doctorCollectionArray[i].totalAge = 0
					this.doctorCollectionArray[i].appointment = 0
					this.doctorCollectionArray[i].walkin = 0
					this.doctorCollectionArray[i].emergency = 0					
					this.doctorCollectionArray[i].avgCtu = this.calculateCtu(object,this.doctorCollectionArray[i].totalSec,this.doctorCollectionArray[i].id)
					this.totalCtuUsed += this.doctorCollectionArray[i].totalSec
					var min = parseInt(this.getData(this.getData(this.doctorCollectionArray[i].totalSec/this.doctorCollectionArray[i].dispensed)/60))
					var sec = parseInt(this.getData(this.getData(this.doctorCollectionArray[i].totalSec/this.doctorCollectionArray[i].dispensed)%60))
					this.doctorCollectionArray[i].totalSec = min + " min " + sec + " sec" 

					for (var j = 0; j < this.patientArray.length; j++) {
						if(this.patientArray[j].doctor_id == this.doctorCollectionArray[i].id){
							this.doctorCollectionArray[i].totalPatients++
							this.doctorCollectionArray[i].totalAge += this.patientArray[j].age
							if(this.patientArray[j].lastVisit){
								this.doctorCollectionArray[i].newPatients++
							}
							if(this.patientArray[j].lastVisitCount>=2){
								this.doctorCollectionArray[i].frequentPatients++
							}
							if(this.patientArray[j].gender=="Male"){
								this.doctorCollectionArray[i].male++
							}else if(this.patientArray[j].gender=="Female"){
								this.doctorCollectionArray[i].female++
							}
							if(this.patientArray[j].type=="Walk-in"){
								this.doctorCollectionArray[i].walkin++
							}else if(this.patientArray[j].type=="Appointment"){
								this.doctorCollectionArray[i].appointment++
							}else if(this.patientArray[j].type=="Emergency"){
								this.doctorCollectionArray[i].emergency++
							}
						}
					}
				}
				for (var i = 0; i < this.doctorCollectionArray.length; i++) {
					this.totalAvgAgePatients += this.doctorCollectionArray[i].totalAge
					this.doctorCollectionArray[i].avgDailyPatients = Math.ceil(this.getData(this.doctorCollectionArray[i].totalPatients)/this.dateDiff)
					this.doctorCollectionArray[i].avgAge = Math.ceil(this.getData(this.doctorCollectionArray[i].totalAge)/this.patientArray.length)
					this.totalAvgDailyPatients += this.doctorCollectionArray[i].avgDailyPatients
					this.totalFreqPatients += this.doctorCollectionArray[i].frequentPatients
					this.totalMalePatients += this.doctorCollectionArray[i].male
					this.totalFemalePatients += this.doctorCollectionArray[i].female
					this.totalWalkinPatients += this.doctorCollectionArray[i].walkin
					this.totalAppointmentPatients += this.doctorCollectionArray[i].appointment
					this.totalEmergencyPatients += this.doctorCollectionArray[i].emergency
				}
				this.totalAvgAgePatients = Math.ceil(this.getData(this.totalAvgAgePatients)/this.patientArray.length)
				this.totalCtuUtilisedPerc = this.calculateCtuAllDoctors(object,this.totalCtuUsed)
				var min = parseInt(this.getData(this.getData(this.totalCtuUsed/this.totalDispensedPatients)/60))
				var sec = parseInt(this.getData(this.getData(this.totalCtuUsed/this.totalDispensedPatients)%60))
				this.totalAvgTime = min + " min " + sec + " sec" 
				if (this.doctorCollectionArray.length <  this.dataDoctors.length) {
                    for (var i = 0; i < this.dataDoctors.length; i++) {
                        var boolean = false
                        for (var j = 0; j < this.doctorCollectionArray.length; j++) {
                            if (this.doctorCollectionArray[j].id.toString() == this.dataDoctors[i]._id.toString()) {
                                boolean = true
                                break
                            }
                        }
                        if (boolean == false) {
                            this.doctorCollectionArray.push({
                                id: this.dataDoctors[i]._id,
								avgColl: 0,
								avgDailyColl: 0,
								avgDailyPatients: 0,
								avgAge: 0,
								avgDailyPrescription: 0,
								female: 0,
								frequentPatients: 0,
								male: 0,
								newPatients: 0,
								percentage: 0,
								prescriptions: 0,
								dispensed: 0,
								sales: 0,
								totalAge: 0,
								totalPatients: 0,
								walkin: 0,
								appointment: 0,
								emergency: 0,
								totalSec:0,
								avgCtu:0,
                            })
                        }
                    }
                }
                this.avgDailyCollection = this.totalCollection/this.dateDiff
				this.avgPatientCollection = this.totalCollection/(data.dataDispensed.length+data.dataRegistrations.length)
				this.avgTotalPrescriptions = Math.ceil(this.totalPrescriptions/this.dateDiff)
				
			}
			console.log(this.doctorCollectionArray)
			console.log(this.patientArray)
			this.loading = false
		},err=>{
			console.log(err)
		})
	}

	calculateCtu(object,totalSec,id){
		for (var ii = 0; ii < this.dataDoctors.length; ii++) {
			if(this.dataDoctors[ii]._id == id){
				///////////// hours logic /////////////////////////////
		        var daysOfYear = [];
		        var localDateArray = [];
		        var countMonday: number = 0
				var countTuesday: number = 0
				var countWednesday: number = 0
				var countThursday: number = 0
				var countFriday: number = 0
				var countSaturday: number = 0
				var countSunday: number = 0
		        for (var d = new Date(object.start_date); d <= new Date(object.end_date); d.setDate(d.getDate() + 1)) {
		            daysOfYear.push(new Date(d));
		        }
		        for (var i = 0; i < daysOfYear.length; i++) {
		            localDateArray.push(this.datePipe.transform(daysOfYear[i], 'EEEE'))
		        }
		        for (var i = 0; i < localDateArray.length; i++) {
		            if (localDateArray[i] == "Monday") {
		                countMonday++
		            } else if (localDateArray[i] == "Tuesday") {
		                countTuesday++
		            } else if (localDateArray[i] == "Wednesday") {
		                countWednesday++
		            } else if (localDateArray[i] == "Thursday") {
		                countThursday++
		            } else if (localDateArray[i] == "Friday") {
		                countFriday++
		            } else if (localDateArray[i] == "Saturday") {
		                countSaturday++
		            } else if (localDateArray[i] == "Sunday") {
		                countSunday++
		            }
		        }
		        var total_diff: number = 0
		        var totalMin: number = 0
		        for (var j = 0; j < this.dataDoctors[ii].consultation_schedule.length; j++) {
		            var min_diff: number = 0
		            var hour_diff: number = 0
		            for (var k = 0; k < this.dataDoctors[ii].consultation_schedule[j].shifts.length; k++) {
		                min_diff += parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].toTime.minute) - parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].fromTime.minute)
		                hour_diff += parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].toTime.hour) - parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].fromTime.hour)
		                total_diff = min_diff + (hour_diff * 60)
		            }
		            if (this.dataDoctors[ii].consultation_schedule[j].Monday == true) {
		                totalMin += (countMonday * total_diff)
		            }
		            if (this.dataDoctors[ii].consultation_schedule[j].Tuesday == true) {
		                totalMin += (countTuesday * total_diff)
		            }
		            if (this.dataDoctors[ii].consultation_schedule[j].Wednesday == true) {
		                totalMin += (countWednesday * total_diff)
		            }
		            if (this.dataDoctors[ii].consultation_schedule[j].Thursday == true) {
		                totalMin += (countThursday * total_diff)
		            }
		            if (this.dataDoctors[ii].consultation_schedule[j].Friday == true) {
		                totalMin += (countFriday * total_diff)
		            }
		            if (this.dataDoctors[ii].consultation_schedule[j].Saturday == true) {
		                totalMin += (countSaturday * total_diff)
		            }
		            if (this.dataDoctors[ii].consultation_schedule[j].Sunday == true) {
		                totalMin += (countSunday * total_diff)
		            }
		        }
		        return parseFloat(this.getData((totalSec*100)/(totalMin * 60)))
		        ///////////////////////////////////////////////////////
			}
		}
	}

	calculateCtuAllDoctors(object,totalSec){
		var totalMin: number = 0
		for (var ii = 0; ii < this.dataDoctors.length; ii++) {
			///////////// hours logic /////////////////////////////
	        var daysOfYear = [];
	        var localDateArray = [];
	        var countMonday: number = 0
			var countTuesday: number = 0
			var countWednesday: number = 0
			var countThursday: number = 0
			var countFriday: number = 0
			var countSaturday: number = 0
			var countSunday: number = 0
	        for (var d = new Date(object.start_date); d <= new Date(object.end_date); d.setDate(d.getDate() + 1)) {
	            daysOfYear.push(new Date(d));
	        }
	        for (var i = 0; i < daysOfYear.length; i++) {
	            localDateArray.push(this.datePipe.transform(daysOfYear[i], 'EEEE'))
	        }
	        for (var i = 0; i < localDateArray.length; i++) {
	            if (localDateArray[i] == "Monday") {
	                countMonday++
	            } else if (localDateArray[i] == "Tuesday") {
	                countTuesday++
	            } else if (localDateArray[i] == "Wednesday") {
	                countWednesday++
	            } else if (localDateArray[i] == "Thursday") {
	                countThursday++
	            } else if (localDateArray[i] == "Friday") {
	                countFriday++
	            } else if (localDateArray[i] == "Saturday") {
	                countSaturday++
	            } else if (localDateArray[i] == "Sunday") {
	                countSunday++
	            }
	        }
	        var total_diff: number = 0
	        for (var j = 0; j < this.dataDoctors[ii].consultation_schedule.length; j++) {
	            var min_diff: number = 0
	            var hour_diff: number = 0
	            for (var k = 0; k < this.dataDoctors[ii].consultation_schedule[j].shifts.length; k++) {
	                min_diff += parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].toTime.minute) - parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].fromTime.minute)
	                hour_diff += parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].toTime.hour) - parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].fromTime.hour)
	                total_diff = min_diff + (hour_diff * 60)
	            }
	            if (this.dataDoctors[ii].consultation_schedule[j].Monday == true) {
	                totalMin += (countMonday * total_diff)
	            }
	            if (this.dataDoctors[ii].consultation_schedule[j].Tuesday == true) {
	                totalMin += (countTuesday * total_diff)
	            }
	            if (this.dataDoctors[ii].consultation_schedule[j].Wednesday == true) {
	                totalMin += (countWednesday * total_diff)
	            }
	            if (this.dataDoctors[ii].consultation_schedule[j].Thursday == true) {
	                totalMin += (countThursday * total_diff)
	            }
	            if (this.dataDoctors[ii].consultation_schedule[j].Friday == true) {
	                totalMin += (countFriday * total_diff)
	            }
	            if (this.dataDoctors[ii].consultation_schedule[j].Saturday == true) {
	                totalMin += (countSaturday * total_diff)
	            }
	            if (this.dataDoctors[ii].consultation_schedule[j].Sunday == true) {
	                totalMin += (countSunday * total_diff)
	            }
	        }
	        ///////////////////////////////////////////////////////
		}
	    return parseFloat(this.getData((totalSec*100)/(totalMin * 60)))
	}

	getPdf(){
		$('#clinicReport').printThis({
            debug: false,
            importCSS: true,
            importStyle: true,
            printContainer: true,
            pageTitle: "Reports Doctm",
            removeInline: false,
            printDelay: 333,
            header: null,
            formValues: true
        });
	}

	PharmacyAnalytics(object){
		this.loading = true
		this.totalPharmacySales = 0
		this.totalPharmacyCost = 0
		this.totalPharmacyOrders = 0
		this.totalPharmacyProfit = 0
		this.totalPharmacyPerPresSale = 0
		this.overAllPharmacyProfit = 0
		this.totalPharmacyDispensedPatients = 0
		this.totalPharmacyPatients = 0
		this.pharmacyPatientConversion = 0
		this.patientDetails = []
		this.userService.PharmacyAnalytics(object).subscribe((result) => {
			console.log(result)
			if(result.response){
				this.pharmacyDoctors = result.data
				for (var i = 0; i < this.pharmacyDoctors.length; i++) {
					this.pharmacyDoctors[i].sales = 0
					this.pharmacyDoctors[i].cost = 0
					this.pharmacyDoctors[i].orders = 0
					this.pharmacyDoctors[i].profit = 0
					for (var j = 0; j < this.pharmacyDoctors[i].total_sales.length; j++) {
						this.totalPharmacyPatients++
						if(this.pharmacyDoctors[i].total_sales[j].pharmacy){
							this.totalPharmacyDispensedPatients++
							this.pharmacyDoctors[i].orders++
							this.totalPharmacyOrders++
							this.pharmacyDoctors[i].sales += this.pharmacyDoctors[i].total_sales[j].pharmacy_sales
							this.pharmacyDoctors[i].cost += this.pharmacyDoctors[i].total_sales[j].pharmacy_cost
						}
					}
					this.totalPharmacySales += this.pharmacyDoctors[i].sales
					this.totalPharmacyCost += this.pharmacyDoctors[i].cost
					this.pharmacyDoctors[i].profit = this.pharmacyDoctors[i].sales - this.pharmacyDoctors[i].cost
					this.totalPharmacyProfit += this.pharmacyDoctors[i].profit
				}
				for (var i = 0; i < this.pharmacyDoctors.length; i++) {
					this.pharmacyDoctors[i].salesPerc = this.getData((this.pharmacyDoctors[i].sales/this.totalPharmacySales)*100)
					this.pharmacyDoctors[i].ordersPerc = this.getData((this.pharmacyDoctors[i].orders/this.totalPharmacyOrders)*100)
					this.pharmacyDoctors[i].profitPerc = this.getData((this.pharmacyDoctors[i].profit/this.totalPharmacyProfit)*100)
					this.pharmacyDoctors[i].perPresSale = this.getData(this.pharmacyDoctors[i].sales/this.pharmacyDoctors[i].orders)
				}
				this.totalPharmacyPerPresSale = this.getData(this.totalPharmacySales/this.totalPharmacyOrders)
				this.overAllPharmacyProfit = this.getData(((this.totalPharmacySales-this.totalPharmacyCost)/this.totalPharmacyCost)*100)
				this.pharmacyPatientConversion = this.getData((this.totalPharmacyDispensedPatients/this.totalPharmacyPatients)*100)
				if(this.pharmacyDoctors.length<this.dataDoctors.length){
					for (var i = 0; i < result.dataDoctors.length; i++) {
						var boolean = false
						for (var j = 0; j < this.pharmacyDoctors.length; j++) {
							if(this.pharmacyDoctors[j]._id == result.dataDoctors[i]._id){
								boolean = true
								break;
							}
						}
						if(boolean == false){
							this.pharmacyDoctors.push({
								_id: result.dataDoctors[i]._id,
								sales: 0,
								salesPerc: 0,
								orders: 0,
								ordersPerc: 0,
								profit: 0,
								profitPerc: 0,
								perPresSale: 0
							})
						}
					}
				}
				//for annexure patient detail
				for (var i = 0; i < this.pharmacyDoctors.length; i++) {
					if(this.pharmacyDoctors[i]._id == this.doctorData._id){
						this.patientDetails = this.pharmacyDoctors[i].total_sales
						break
					}
				}
				console.log(this.patientDetails)
			}
			this.loading = false
		},err=>{
			console.log(err)
		})
	}

	PurchasesForClinicReport(object){
		this.loading = true
		this.stockPurchases = 0
		this.stockUniqueProducts = []
		this.stockProductsAmount = 0
		this.userService.PurchasesForClinicReport(object).subscribe((result) => {
			console.log(result)
			if(result.response){
				for (var i = 0; i < result.data.length; i++) {
					this.stockPurchases++
					for (var j = 0; j < result.data[i].stock.length; j++) {
						this.stockProductsAmount += result.data[i].stock[j].amount
						var boolean = false
						for (var k = 0; k < this.stockUniqueProducts.length; k++) {
							if(this.stockUniqueProducts[k].product == result.data[i].stock[j].product
								&& result.data[i].stock[j].type == this.stockUniqueProducts[k].type){
								boolean = true
							}
						}
						if(boolean==false){
							this.stockUniqueProducts.push({
								name: result.data[i].stock[j].product,
								type: result.data[i].stock[j].type
							})
						}
					}
				}
			}
			this.loading = false
		},err=>{
			console.log(err)
		})
	}

	StockOnTodayForClinicReport(object){
		this.loading = true
		this.stockArray = []
		this.purchaseValueStock = 0
		this.saleValueStock = 0
		this.userService.StockOnTodayForClinicReport(object).subscribe((result) => {
			console.log(result)
			if(result.response){
				this.stockArray = result.data
				for (var i = 0; i < this.stockArray.length; i++) {
					this.stockArray[i].stock = this.stockArray[i].total_stock-this.stockArray[i].sold_stock
					this.stockArray[i].newPacking = Math.trunc(this.stockArray[i].stock /(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
					this.stockArray[i].newPackingReminder = this.stockArray[i].stock % (this.stockArray[i].pack_units*this.stockArray[i].pack_quantity)
					this.stockArray[i].present_prate = 0
					if(this.stockArray[i].total_stock>0){
						this.stockArray[i].present_prate = (this.stockArray[i].amount/this.stockArray[i].total_stock)* this.stockArray[i].stock
					}
					this.stockArray[i].profit_percent = Math.ceil(((this.stockArray[i].mrp - this.stockArray[i].p_rate)/this.stockArray[i].p_rate) * 100)
					// this.stockArray[i].present_mrate = Math.ceil(this.stockArray[i].present_prate + ((this.stockArray[i].profit_percent)/100) * this.stockArray[i].present_prate)
					this.stockArray[i].present_mrate = Math.ceil((this.stockArray[i].mrp * this.stockArray[i].stock) /(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
					if(this.stockArray[i].stock == 0){
						this.stockArray[i].cost = 0	
					}else{
						this.stockArray[i].cost = (this.stockArray[i].present_prate / this.stockArray[i].stock) * (this.stockArray[i].pack_units*this.stockArray[i].pack_quantity)
					}
					this.purchaseValueStock += Math.ceil(this.stockArray[i].present_prate)
					this.saleValueStock += Math.ceil(this.stockArray[i].present_mrate) 
				}
			}
			this.loading = false
		},err=>{
			console.log(err)
		})
	}

	DiagnosticsAnalytics(object){
		this.loading = true
		this.diagnosticsDoctors = []
		this.totalDiagnosticsOrders = 0
		this.totalDiagnosticsPatients = 0
		this.totalDiagnosticsSales = 0
		this.totalDiagnosticsDispensedPatients = 0
		this.totalDiagnosticsPerPresSale = 0
		this.diagnosticsPatientConversion = 0
        this.userService.DiagnosticsAnalytics(object).subscribe((result) => {
            console.log(result)
            if (result.response) {
            	this.diagnosticsDoctors = result.data
            	var diagnostics
            	for (var i = 0; i < this.diagnosticsDoctors.length; i++) {

					this.diagnosticsDoctors[i].sales = 0
					this.diagnosticsDoctors[i].orders = 0
					for (var j = 0; j < this.diagnosticsDoctors[i].total_sales.length; j++) {
						this.totalDiagnosticsPatients++
						if(this.diagnosticsDoctors[i].total_sales[j].diagnostics){
							this.totalDiagnosticsDispensedPatients++
							this.diagnosticsDoctors[i].orders++
							this.totalDiagnosticsOrders++
							this.diagnosticsDoctors[i].sales += this.diagnosticsDoctors[i].total_sales[j].investigation_cost
						}
					}
					this.totalDiagnosticsSales += this.diagnosticsDoctors[i].sales
				}
				for (var i = 0; i < this.diagnosticsDoctors.length; i++) {
					this.diagnosticsDoctors[i].salesPerc = this.getData((this.diagnosticsDoctors[i].sales/this.totalDiagnosticsSales)*100)
					this.diagnosticsDoctors[i].ordersPerc = this.getData((this.diagnosticsDoctors[i].orders/this.totalDiagnosticsOrders)*100)
					this.diagnosticsDoctors[i].perPresSale = this.getData(this.diagnosticsDoctors[i].sales/this.diagnosticsDoctors[i].orders)
				}
				this.totalDiagnosticsPerPresSale = this.getData(this.totalDiagnosticsSales/this.totalDiagnosticsOrders)
				this.diagnosticsPatientConversion = this.getData((this.totalDiagnosticsDispensedPatients/this.totalDiagnosticsPatients)*100)
				if(this.diagnosticsDoctors.length<this.dataDoctors.length){
					for (var i = 0; i < result.dataDoctors.length; i++) {
						var boolean = false
						for (var j = 0; j < this.diagnosticsDoctors.length; j++) {
							if(this.diagnosticsDoctors[j]._id == result.dataDoctors[i]._id){
								boolean = true
								break;
							}
						}
						if(boolean == false){
							this.diagnosticsDoctors.push({
								_id: result.dataDoctors[i]._id,
								sales: 0,
								salesPerc: 0,
								orders: 0,
								ordersPerc: 0,
								perPresSale: 0
							})
						}
					}
				}
            }
            this.loading = false
        }, err => {
            console.log(err)
        })
	}

	IpdAnalytics(object){	
		this.loading = true
		this.dataArray = []
		this.totalIpdAdmissions = 0
		this.totalIpdDischarged = 0
		this.totalIpdBill = 0
		this.totalIpdHours = 0
		this.totalIpdAvgBill = 0
		this.totalGeneralBeds = 0
		this.totalSemiPrivateBeds = 0
		this.totalPrivateBeds = 0
		this.ipdOccupancy = 0
		this.patientDetailsIpd = []
		this.userService.IpdAnalytics(object).subscribe((result)=>{
			console.log(result)
			if(result.response){
				this.dataArray = result.dataDoctors
				for (var i = 0; i < this.dataArray.length; i++) {
					if(this.dataArray[i].type_of_doctor=="admin_doctor"){
						this.totalGeneralBeds=this.dataArray[i].clinic_services.general_beds
						this.totalPrivateBeds= this.dataArray[i].clinic_services.private_beds
						this.totalSemiPrivateBeds= this.dataArray[i].clinic_services.semi_private_beds
					}
					this.dataArray[i].patientAdmitted = 0
					this.dataArray[i].total_bill = 0
					this.dataArray[i].admissionHours = 0
					this.dataArray[i].patientsDishcarge = 0
					for (var j = 0; j < result.data.length; j++) {
						if(result.data[j]._id == this.dataArray[i]._id){
							for (var k = 0; k < result.data[j].dataIpd.length; k++) {
								this.dataArray[i].patientAdmitted++
								this.totalIpdAdmissions++
								if(result.data[j].dataIpd[k].total_bill){
									this.dataArray[i].total_bill += result.data[j].dataIpd[k].total_bill
									this.totalIpdBill += this.dataArray[i].total_bill
								}
								if(result.data[j].dataIpd[k].duration_days || result.data[j].dataIpd[k].duration_hours){
									this.dataArray[i].admissionHours += (result.data[j].dataIpd[k].duration_days*24)+(result.data[j].dataIpd[k].duration_hours)		
									this.totalIpdHours += this.dataArray[i].admissionHours
								}
							}
						}
					}
					for (var j = 0; j < result.dataDischarge.length; j++) {
						this.totalIpdDischarged++
						if(result.dataDischarge[j]._id == this.dataArray[i]._id){
							for (var k = 0; k < result.dataDischarge[j].dataIpd.length; k++) {
								this.dataArray[i].patientsDishcarge++
							}
						}
					}
				}
				for (var i = 0; i < this.dataArray.length; i++) {
					if(this.dataArray[i].patientAdmitted==0){
						this.dataArray[i].avgRevenue = 0
					}else{
						this.dataArray[i].avgRevenue = this.getData(this.dataArray[i].total_bill/this.dataArray[i].patientAdmitted)
					}
				}
				this.totalIpdAvgBill = this.getData(this.totalIpdBill/this.totalIpdAdmissions)
				this.ipdOccupancy = this.getData((this.totalIpdAdmissions/(this.totalGeneralBeds+this.totalPrivateBeds+this.totalSemiPrivateBeds))*100)
				//for annexure patient detail
				for (var i = 0; i < result.data.length; i++) {
					if(result.data[i]._id == this.doctorData._id){
						this.patientDetailsIpd = result.data[i].dataIpd
						break
					}
				}
				console.log(this.patientDetailsIpd)
				this.loading = false
			}
		},err=>{
			console.log(err)
		})
	}

	AllClinicSummary(object){
		this.loading = true
		this.dataSummaryArray = []
		this.patientsArray = []
		this.opdCollection = 0
		this.pharmacySales = 0
		this.pharmacyProfit = 0
		this.diagnosticsCollection = 0
		this.diagnosticsOrders = 0
		this.ipdCollection = 0
		this.ipdAdmission = 0
		this.totalClinicCollection = 0
		this.uniqueDiagnosticsArray = []
		this.userService.AllClinicSummary(object).subscribe((data)=>{
			console.log(data)
			if(data.response){
				this.dataDoctors = data.dataDoctors

				// for OPD
				for (var i = 0; i < data.dataRegistrations.length; i++) {
					var boolean = false
					for (var j = 0; j < this.dataSummaryArray.length; j++) {
						if(data.dataRegistrations[i]._id == this.dataSummaryArray[j].doctor_id){
							for (var k = 0; k < data.dataRegistrations[i].data.length; k++) {
								if(data.dataRegistrations[i].data[k].fee){
									this.dataSummaryArray[j].collection += parseInt(data.dataRegistrations[i].data[k].fee)
								}
								this.addPatient(data.dataRegistrations[i].data[k].pateintName,data.dataRegistrations[i].data[k].pateintPhone,data.dataRegistrations[i]._id)
							}
							boolean = true
						}
					}
					if(boolean==false){
						var collection
						collection = 0
						for (var k = 0; k < data.dataRegistrations[i].data.length; k++) {
							this.addPatient(data.dataRegistrations[i].data[k].pateintName,data.dataRegistrations[i].data[k].pateintPhone,data.dataRegistrations[i]._id)
							if(data.dataRegistrations[i].data[k].fee){
								collection += parseInt(data.dataRegistrations[i].data[k].fee)
							}
						}
						this.dataSummaryArray.push({
							doctor_id: data.dataRegistrations[i]._id,
							collection: collection
						})
					}
				}
				for (var i = 0; i < data.dataDispensed.length; i++) {
					var boolean = false
					for (var j = 0; j < this.dataSummaryArray.length; j++) {
						if(data.dataDispensed[i]._id == this.dataSummaryArray[j].doctor_id){
							for (var k = 0; k < data.dataDispensed[i].data.length; k++) {
								this.addPatient(data.dataDispensed[i].data[k].registration.pateintName,data.dataDispensed[i].data[k].registration.pateintPhone,data.dataDispensed[i]._id)
								if(data.dataDispensed[i].data[k].registration.fee){
									this.dataSummaryArray[j].collection += parseInt(data.dataDispensed[i].data[k].registration.fee)
								}
							}
							boolean = true
						}
					}
					if(boolean==false){
						var collection
						collection = 0
						for (var k = 0; k < data.dataDispensed[i].data.length; k++) {
							this.addPatient(data.dataDispensed[i].data[k].registration.pateintName,data.dataDispensed[i].data[k].registration.pateintPhone,data.dataDispensed[i]._id)
							if(data.dataDispensed[i].data[k].registration.fee){
								collection += parseInt(data.dataDispensed[i].data[k].registration.fee)
							}
						}
						this.dataSummaryArray.push({
							doctor_id: data.dataDispensed[i]._id,
							collection: collection
						})
					}
				}

				//for pharmacy
				for (var i = 0; i < data.dataSalesEntryPharmacy.length; i++) {
					data.dataSalesEntryPharmacy[i].doctor_id = this.getDoctorIdPharmacy(data.dataSalesEntryPharmacy[i]._id)
				}
				for (var i = 0; i < data.dataSalesEntryPharmacy.length; i++) {
					var boolean = false
					for (var j = 0; j < this.dataSummaryArray.length; j++) {
						if(data.dataSalesEntryPharmacy[i].doctor_id == this.dataSummaryArray[j].doctor_id){
							this.dataSummaryArray[j].sales = 0
							this.dataSummaryArray[j].cost = 0
							this.dataSummaryArray[j].profit = 0
							for (var k = 0; k < data.dataSalesEntryPharmacy[i].data.length; k++) {
								this.dataSummaryArray[j].sales += data.dataSalesEntryPharmacy[i].data[k].total_amount
								this.dataSummaryArray[j].cost += data.dataSalesEntryPharmacy[i].data[k].cost_amount
								this.dataSummaryArray[j].profit = this.getData(this.dataSummaryArray[j].sales - this.dataSummaryArray[j].cost)
							}
							boolean = true
						}
					}
					if(boolean==false){
						var sales
						sales = 0
						var cost
						cost = 0
						for (var k = 0; k < data.dataSalesEntryPharmacy[i].data.length; k++) {
							sales += data.dataSalesEntryPharmacy[i].data[k].total_amount
							cost += data.dataSalesEntryPharmacy[i].data[k].cost_amount
						}
						var profit = this.getData(sales - cost)
						this.dataSummaryArray.push({
							doctor_id: data.dataSalesEntryPharmacy[i].doctor_id,
							sales: sales,
							profit:profit
						})
					}
				}

				//for diagnostics
				var diagnosticsArray = []
				for (var i = 0; i < data.dataSalesEntryDiagnostics.length; i++) {
					data.dataSalesEntryDiagnostics[i].doctor_id = this.getDoctorIdDiagnostics(data.dataSalesEntryDiagnostics[i]._id)
					for (var j = 0; j < data.dataSalesEntryDiagnostics[i].data.length; j++) {
						for (var k = 0; k < data.dataSalesEntryDiagnostics[i].data[j].tests[0].opt.length; k++) {
							diagnosticsArray.push({
								opt: data.dataSalesEntryDiagnostics[i].data[j].tests[0].opt[k],	
								product: data.dataSalesEntryDiagnostics[i].data[j].tests[0].product[k]	
							})
						}
					}
				}
				for (var i = 0; i < data.dataSalesEntryDiagnostics.length; i++) {
					var boolean = false
					for (var j = 0; j < this.dataSummaryArray.length; j++) {
						if(data.dataSalesEntryDiagnostics[i].doctor_id == this.dataSummaryArray[j].doctor_id){
							this.dataSummaryArray[j].collectionDiagnostics = 0
							this.dataSummaryArray[j].orders = 0
							for (var k = 0; k < data.dataSalesEntryDiagnostics[i].data.length; k++) {
								this.dataSummaryArray[j].orders++
								this.dataSummaryArray[j].collectionDiagnostics += data.dataSalesEntryDiagnostics[i].data[k].total_amount
							}
							boolean = true
						}
					}
					if(boolean==false){
						var sales
						sales = 0
						var orders
						orders = 0
						for (var k = 0; k < data.dataSalesEntryDiagnostics[i].data.length; k++) {
							sales += data.dataSalesEntryDiagnostics[i].data[k].total_amount
							orders++
						}
						this.dataSummaryArray.push({
							doctor_id: data.dataSalesEntryDiagnostics[i].doctor_id,
							collectionDiagnostics:sales,
							orders:orders
						})
					}
				}
				for (var i = 0; i < diagnosticsArray.length; i++) {
					var boolean = false
					for (var j = 0; j < this.uniqueDiagnosticsArray.length; j++) {
						if(diagnosticsArray[i].opt == this.uniqueDiagnosticsArray[j].opt && diagnosticsArray[i].product == this.uniqueDiagnosticsArray[j].product){
							boolean = true
							break
						}
					}
					if(boolean == false){
						this.uniqueDiagnosticsArray.push({
							opt:diagnosticsArray[i].opt,
							product:diagnosticsArray[i].product
						})
					}
				}
				for (var i = 0; i < this.uniqueDiagnosticsArray.length; i++) {
					this.uniqueDiagnosticsArray[i].count = 0
					for (var j = 0; j < diagnosticsArray.length; j++) {
						if(diagnosticsArray[j].opt == this.uniqueDiagnosticsArray[i].opt && diagnosticsArray[j].product == this.uniqueDiagnosticsArray[i].product){
							this.uniqueDiagnosticsArray[i].count++
						}
					}
				}
				console.log(this.uniqueDiagnosticsArray)
				console.log(this.dataSummaryArray)

				// for IPD
				for (var i = 0; i < data.dataIpd.length; i++) {
					var boolean = false
					for (var j = 0; j < this.dataSummaryArray.length; j++) {
						if(data.dataIpd[i]._id == this.dataSummaryArray[j].doctor_id){
							this.dataSummaryArray[j].collectionIpd = 0
							this.dataSummaryArray[j].ordersIpd = 0
							for (var k = 0; k < data.dataIpd[i].dataIpd.length; k++) {
								this.dataSummaryArray[j].ordersIpd++
								if(data.dataIpd[i].dataIpd[k].total_bill){
									this.dataSummaryArray[j].collectionIpd += data.dataIpd[i].dataIpd[k].total_bill
								}
							}
							boolean = true
						}
					}
					if(boolean==false){
						var sales
						sales = 0
						var orders
						orders = 0
						for (var k = 0; k < data.dataIpd[i].dataIpd.length; k++) {
							if(data.dataIpd[i].dataIpd[k].total_bill){
								sales += data.dataIpd[i].dataIpd[k].total_bill
							}
							orders++
						}
						this.dataSummaryArray.push({
							doctor_id: data.dataIpd[i]._id,
							collectionIpd:sales,
							ordersIpd:orders
						})
					}
				}

				for (var i = 0; i < this.dataSummaryArray.length; i++) {
					if(!this.dataSummaryArray[i].collection){
						this.dataSummaryArray[i].collection = 0
					}						
					if(!this.dataSummaryArray[i].collectionDiagnostics){
						this.dataSummaryArray[i].collectionDiagnostics = 0
					}
					if(!this.dataSummaryArray[i].collectionIpd){
						this.dataSummaryArray[i].collectionIpd = 0
					}
					if(!this.dataSummaryArray[i].cost){
						this.dataSummaryArray[i].cost = 0
					}
					if(!this.dataSummaryArray[i].orders){
						this.dataSummaryArray[i].orders = 0
					}
					if(!this.dataSummaryArray[i].ordersIpd){
						this.dataSummaryArray[i].ordersIpd = 0
					}
					if(!this.dataSummaryArray[i].profit){
						this.dataSummaryArray[i].profit = 0
					}
					if(!this.dataSummaryArray[i].sales){
						this.dataSummaryArray[i].sales = 0
					}

					this.dataSummaryArray[i].patients = 0
					for (var j = 0; j < this.patientsArray.length; j++) {
						if(this.patientsArray[j].doctor == this.dataSummaryArray[i].doctor_id){
							this.dataSummaryArray[i].patients++
						}
					}
					this.dataSummaryArray[i].totalCollection = this.dataSummaryArray[i].collection + this.dataSummaryArray[i].sales + this.dataSummaryArray[i].collectionIpd
					this.totalClinicCollection += this.dataSummaryArray[i].totalCollection

					this.opdCollection += this.dataSummaryArray[i].collection
					this.pharmacySales += this.dataSummaryArray[i].sales
					this.pharmacyProfit += parseFloat(this.dataSummaryArray[i].profit)
					this.diagnosticsCollection += this.dataSummaryArray[i].collectionDiagnostics
					this.diagnosticsOrders += this.dataSummaryArray[i].orders
					this.ipdCollection += this.dataSummaryArray[i].collectionIpd
					this.ipdAdmission += this.dataSummaryArray[i].ordersIpd
				}

				//calculating percetages
				for (var i = 0; i < this.dataSummaryArray.length; i++) {
					this.dataSummaryArray[i].collectionPerc = this.getData((this.dataSummaryArray[i].collection *100) / this.opdCollection)
					this.dataSummaryArray[i].patientsPerc = this.getData((this.dataSummaryArray[i].patients *100) / this.patientsArray.length)
					this.dataSummaryArray[i].collectionDiagnosticsPerc = this.getData((this.dataSummaryArray[i].collectionDiagnostics *100) / this.diagnosticsCollection)
					this.dataSummaryArray[i].collectionIpdPerc = this.getData((this.dataSummaryArray[i].collectionIpd *100) / this.ipdCollection)
					this.dataSummaryArray[i].ordersPerc = this.getData((this.dataSummaryArray[i].orders *100) / this.diagnosticsOrders)
					this.dataSummaryArray[i].ordersIpdPerc = this.getData((this.dataSummaryArray[i].ordersIpd *100) / this.ipdAdmission)
					this.dataSummaryArray[i].profitPerc = this.getData((this.dataSummaryArray[i].profit *100) / this.pharmacyProfit)
					this.dataSummaryArray[i].salesPerc = this.getData((this.dataSummaryArray[i].sales *100) / this.pharmacySales)
					this.dataSummaryArray[i].totalCollectionPerc = this.getData((this.dataSummaryArray[i].totalCollection *100) / this.totalClinicCollection)
				}

				if(this.dataSummaryArray.length<this.dataDoctors.length){
					for (var i = 0; i < this.dataDoctors.length; i++) {
						var boolean = false
						for (var j = 0; j < this.dataSummaryArray.length; j++) {
							if(this.dataSummaryArray[j].doctor_id == this.dataDoctors[i]._id){
								boolean = true
								break;
							}
						}
						if(boolean == false){
							this.dataSummaryArray.push({
								collection: 0,
								collectionDiagnostics: 0,
								collectionDiagnosticsPerc: 0,
								collectionIpd: 0,
								collectionIpdPerc: 0,
								collectionPerc: 0,
								cost: 0,
								doctor_id: this.dataDoctors[i]._id,
								orders: 0,
								ordersIpd: 0,
								ordersIpdPerc: 0,
								ordersPerc: 0,
								patients: 0,
								patientsPerc: 0,
								profit: 0,
								profitPerc: 0,
								sales: 0,
								salesPerc: 0,
								totalCollection: 0,
								totalCollectionPerc: 0						
							})
						}
					}
				}
				console.log(this.dataSummaryArray)
			}
			this.loading = false
		},err=>{
			console.log(err)
		})
	}

	addPatient(name,num,doctor){
		for (var i = 0; i < this.patientsArray.length; i++) {
			if(name == this.patientsArray[i].name && num == this.patientsArray[i].num && doctor == this.patientsArray[i].doctor){
				return 
			}
		}
		this.patientsArray.push({
			name:name,
			num:num,
			doctor:doctor
		})
		return 
	}

	getDoctorIdPharmacy(id){
    	for (var i = 0; i < this.dataDoctors.length; i++) {
			if(this.dataDoctors[i].smart_pharmacy_id == id){
				return this.dataDoctors[i]._id
			}
		}
    }

    getDoctorIdDiagnostics(id){
    	for (var i = 0; i < this.dataDoctors.length; i++) {
			if(this.dataDoctors[i].smart_diagnostics_id == id){
				return this.dataDoctors[i]._id
			}
		}
    }

    changeRadio(id){
    	this.radioFull = false
    	if(id==2){
    		this.radioFull = true
    	}
    }

}