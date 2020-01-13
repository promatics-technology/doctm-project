import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clinic-summary-opd',
  templateUrl: './clinic-summary-opd.component.html',
  styleUrls: ['./clinic-summary-opd.component.css']
})
export class ClinicSummaryOpdComponent implements OnInit {
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
	oldPatientArray
	totalAvgDailyPatients
	totalFreqPatients
	totalMalePatients
	totalFemalePatients
	totalAvgAgePatients
	totalWalkinPatients
	totalAvgCtu
	totalAppointmentPatients
	totalEmergencyPatients
	totalCtuUsed
	totalCtuUtilisedPerc
	totalDispensedPatients
	totalAvgTime

  constructor(private userService: UserService, private toastr: ToastrService,private datePipe: DatePipe) { }

  ngOnInit() {
	this.doctorData = JSON.parse(localStorage['doctorDetails'])
	console.log(this.doctorData)
	this.newDate.setDate(this.newDate.getDate()+1)
	this.fromDate1.setDate(this.fromDate1.getDate()-6)
	this.doctorCollectionArray = []
	this.patientArray = []
	this.newPatientArray = []
	this.oldPatientArray = []
  	this.activatedtab = 1  	
  	this.activatetab(1)
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
		console.log(object)
		var diff = Math.abs(new Date(this.toDate).getTime() - new Date(this.fromDate).getTime());
        this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
		this.OPDAnalyticsClinicSummary(object)
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
    	this.activatedtab = 0
    	var object 
		object = {}
		object.doctm_clinic_id = this.doctorData.doctm_clinic_id
		object.start_date = this.fromDate1
		object.end_date = this.toDate1
		console.log(object)
		var diff = Math.abs(new Date(this.toDate1).getTime() - new Date(this.fromDate1).getTime());
        this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
		this.OPDAnalyticsClinicSummary(object)
    }

    OPDAnalyticsClinicSummary(object){
    	this.loading = true
		this.doctorCollectionArray = []
		this.totalCollection = 0
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
		this.totalAvgCtu = 0
		this.totalAppointmentPatients = 0
		this.totalEmergencyPatients = 0
		this.totalCtuUsed = 0
		this.totalCtuUtilisedPerc = 0
		this.totalDispensedPatients = 0
		this.patientArray = []
		this.newPatientArray = []
		this.oldPatientArray = []
		this.userService.OPDAnalyticsClinicSummary(object).subscribe((data)=>{
			console.log(data)
			if(data.response){
				this.dataDoctors = data.dataDoctors
                this.totalPrescriptions = data.dataDispensed.length+data.dataRegistrations.length

                ///// patient array unique per doctor start ///////////////////

				// for (var i = 0; i < data.dataDispensed.length; i++) {
				// 	this.totalCollection +=parseInt(data.dataDispensed[i].registration.fee)
				// 	var boolean = false
				// 	for (var j = 0; j < this.doctorCollectionArray.length; j++) {
				// 		if(data.dataDispensed[i].doctor_id == this.doctorCollectionArray[j].id){
				// 			this.doctorCollectionArray[j].sales += parseInt(data.dataDispensed[i].registration.fee)
				// 			this.doctorCollectionArray[j].prescriptions++
				// 			var boolean1 = false
				// 			for (var k = 0; k < this.doctorCollectionArray[j].patientArray.length; k++) {
				// 				if(this.doctorCollectionArray[j].patientArray[k].name==data.dataDispensed[i].registration.pateintName &&
				// 					this.doctorCollectionArray[j].patientArray[k].phone==data.dataDispensed[i].registration.pateintPhone){
				// 					boolean1 = true
				// 					break;
				// 				}
				// 			}
				// 			if(boolean1 == false){
				// 				this.doctorCollectionArray[j].patientArray.push({
				// 					name: data.dataDispensed[i].registration.pateintName,
				// 					phone: data.dataDispensed[i].registration.pateintPhone
				// 				})
				// 			}
				// 			boolean = true
				// 		}
				// 	}
				// 	if(boolean == false){
				// 		this.doctorCollectionArray.push({
				// 			id: data.dataDispensed[i].doctor_id,
				// 			sales: parseInt(data.dataDispensed[i].registration.fee),
				// 			prescriptions: 1,
				// 			patientArray: [{
				// 				name: data.dataDispensed[i].registration.pateintName,
				// 				phone: data.dataDispensed[i].registration.pateintPhone
				// 			}]
				// 		})		
				// 	}
				// }
				// for (var i = 0; i < data.dataRegistrations.length; i++) {
				// 	this.totalCollection +=parseInt(data.dataRegistrations[i].fee)
				// 	var boolean = false
				// 	for (var j = 0; j < this.doctorCollectionArray.length; j++) {
				// 		if(data.dataRegistrations[i].doctor_id == this.doctorCollectionArray[j].id){
				// 			this.doctorCollectionArray[j].sales += parseInt(data.dataRegistrations[i].fee)
				// 			this.doctorCollectionArray[j].prescriptions++
				// 			var boolean1 = false
				// 			for (var k = 0; k < this.doctorCollectionArray[j].patientArray.length; k++) {
				// 				if(this.doctorCollectionArray[j].patientArray[k].name==data.dataRegistrations[i].pateintName &&
				// 					this.doctorCollectionArray[j].patientArray[k].phone==data.dataRegistrations[i].pateintPhone){
				// 					boolean1 = true
				// 					break;
				// 				}
				// 			}
				// 			if(boolean1 == false){
				// 				this.doctorCollectionArray[j].patientArray.push({
				// 					name: data.dataRegistrations[i].pateintName,
				// 					phone: data.dataRegistrations[i].pateintPhone
				// 				})
				// 			}
				// 			boolean = true
				// 		}
				// 	}
				// 	if(boolean == false){
				// 		this.doctorCollectionArray.push({
				// 			id: data.dataRegistrations[i].doctor_id,
				// 			sales: parseInt(data.dataRegistrations[i].fee),
				// 			prescriptions: 1,
				// 			patientArray: [{
				// 				name: data.dataRegistrations[i].pateintName,
				// 				phone: data.dataRegistrations[i].pateintPhone
				// 			}]
				// 		})		
				// 	}
				// }
				///// patient array unique per doctor end /////////////

				for (var i = 0; i < data.dataRegistrations.length; i++) {
					if(data.dataRegistrations[i].fee ! = 0){
						this.totalCollection +=parseInt(data.dataRegistrations[i].fee)
					}
					var boolean = false
					for (var j = 0; j < this.doctorCollectionArray.length; j++) {
						this.doctorCollectionArray[j].totalSec = 0
						this.doctorCollectionArray[j].dispensed = 0
						if(data.dataRegistrations[i].doctor_id == this.doctorCollectionArray[j].id){
							if(data.dataRegistrations[i].fee != 0){
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
									this.oldPatientArray.push(1)
									count = 1
								}
								if(data.dataRegistrations[i].lastVisit.status == false){
									this.newPatientArray.push(1)
									
								}
								this.patientArray.push({
									name: data.dataRegistrations[i].pateintName,
									phone: data.dataRegistrations[i].pateintPhone,
									doctor_id: data.dataRegistrations[i].doctor_id,
									lastVisit: data.dataRegistrations[i].lastVisit.status,
									lastVisitCount: count,
									gender: data.dataRegistrations[i].gender,
									age_in_years: data.dataRegistrations[i].age_in_years,
									type: data.dataRegistrations[i].type
								})
							}
							boolean = true
						}
					}
					if(boolean == false){
						var count = 0
						if(data.dataRegistrations[i].lastVisit.status){
							this.oldPatientArray.push(1)
							count = 1
						}
						if(data.dataRegistrations[i].lastVisit.status == false){
							this.newPatientArray.push(1)
							// count = 1
						}
						var a:number = 0
						if(data.dataRegistrations[i].fee !=0){
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
							age_in_years: data.dataRegistrations[i].age_in_years,
							type: data.dataRegistrations[i].type
						})		
					}
				}
				
                for (var i = 0; i < data.dataDispensed.length; i++) {
                	this.totalDispensedPatients++
                	if(data.dataDispensed[i].registration.fee != 0){
						this.totalCollection +=parseInt(data.dataDispensed[i].registration.fee)
                	}
					var boolean = false
					for (var j = 0; j < this.doctorCollectionArray.length; j++) {
						if(data.dataDispensed[i].doctor_id == this.doctorCollectionArray[j].id){
							if(data.dataDispensed[i].registration.fee != 0){
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
									this.oldPatientArray.push(1)
									count = 1
								}
								if(data.dataDispensed[i].registration.lastVisit.status == false){
									this.newPatientArray.push(1)
									// count = 1
								}
								this.patientArray.push({
									name: data.dataDispensed[i].registration.pateintName,
									phone: data.dataDispensed[i].registration.pateintPhone,
									doctor_id: data.dataDispensed[i].doctor_id,
									lastVisit: data.dataDispensed[i].registration.lastVisit.status,
									lastVisitCount: count,
									gender: data.dataDispensed[i].registration.gender,
									age_in_years: data.dataDispensed[i].registration.age_in_years,
									type: data.dataDispensed[i].registration.type
								})
							}
							boolean = true
						}
					}
					if(boolean == false){
						var a:number = 0
						if(data.dataDispensed[i].registration.fee != 0){
							a = parseInt(data.dataDispensed[i].registration.fee)
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
							this.oldPatientArray.push(1)
							count = 1
						}
						if(data.dataDispensed[i].registration.lastVisit.status == false){
							this.newPatientArray.push(1)
							// count = 1
						}
						this.patientArray.push({
							name: data.dataDispensed[i].registration.pateintName,
							phone: data.dataDispensed[i].registration.pateintPhone,
							doctor_id: data.dataDispensed[i].doctor_id,
							lastVisit: data.dataDispensed[i].registration.lastVisit.status,
							lastVisitCount: count,
							gender: data.dataDispensed[i].registration.gender,
							age_in_years: data.dataDispensed[i].registration.age_in_years,
							type: data.dataDispensed[i].registration.type
						})
					}
				}
				console.log(this.patientArray)
				for (var i = 0; i < this.doctorCollectionArray.length; i++) {
					this.doctorCollectionArray[i].percentage = parseFloat(this.getData((this.doctorCollectionArray[i].sales*100)/this.totalCollection))
					this.doctorCollectionArray[i].avgDailyColl = parseFloat(this.getData((this.doctorCollectionArray[i].sales)/this.dateDiff))
					this.doctorCollectionArray[i].avgColl = parseFloat(this.getData((this.doctorCollectionArray[i].sales)/(this.doctorCollectionArray[i].prescriptions)))
					this.doctorCollectionArray[i].avgDailyPrescription = Math.ceil(this.getData((this.doctorCollectionArray[i].prescriptions)/this.dateDiff)) 
					this.doctorCollectionArray[i].totalPatients = 0
					this.doctorCollectionArray[i].newPatients = 0
					this.doctorCollectionArray[i].oldPatients = 0
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
							this.doctorCollectionArray[i].totalAge += this.patientArray[j].age_in_years
							if(this.patientArray[j].lastVisit == false){
								this.doctorCollectionArray[i].newPatients++
							}
							if(this.patientArray[j].lastVisit){
								this.doctorCollectionArray[i].oldPatients++
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
					this.totalAvgCtu += this.doctorCollectionArray[i].avgCtu
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
								oldPatients: 0,
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

}
