import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { environment } from '../../../environments/environment.prod';
declare var $ :any;
@Component({
	selector: 'app-dashboard-consultation-patient',
	templateUrl: './dashboard-consultation-patient.component.html',
	styleUrls: ['./dashboard-consultation-patient.component.css']
})
export class DashboardConsultationPatientComponent implements OnInit {
	activatedtab=0
	settings = {
		bigBanner: true,
		timePicker: false,
		format: 'dd-MMM-yyyy',
		defaultOpen: false
	}
	fromDate = new Date()
	toDate = new Date()
	fromDate1 = new Date()
	toDate1 = new Date()
	newDate = new Date()
	doctorData
	loading
	totalCollection
	avgCollection
	dateDiff
	feeArray
	maxSaleOfDay
	minSaleOfDay
	maxCollectionDate
	minCollectionDate
	totalPrescriptions
	maxPrescofDay
	minPrescOfDay
	maxPresconDate
	minPresconDate
	totalRegPatients
	newPatients
	totalMale
	totalFemale
	totalMalePercentage
	totalFemalePercentage
	totalWalkIn
	totalEmergency
	totalAppointment
	totalWalkInPercentage
	totalEmergencyPercentage
	totalAppointmentPercentage
	avgAge
	shiftOne:number
	shiftTwo:number 
	shiftThree:number 
	shiftOnepercentage
	shiftTwopercentage
	shiftThreepercentage
	freqPatientArray
	diagnosisArray
	dataReferralTo
	dataReferralFrom
	referralPatientArray
	UniquePatientArray
	uniqueFrequentArray
	TotalOTGPrescriptions
	TotalOTGPrescriptionslength
	medicationDropsArray
	medicationPowderArray
	medicationAerosolsArray
	medicationMouthWashArray
	medicationSolutionArray
	medicationLotionArray
	medicationOintmentArray
	symptomsComplete
	diagnosisComplete
	treatmentComplete
	treatmentArray
	investigationIndicatorComplete
	investigationArray
	surgeryComplete
	surgerySelectedArray
	instructionsComplete
	instructionsSelected
	medicationComplete
	currentVaccinationComplete
	finalCurrentVaccinationArray
	dueVaccinationComplete
	finalDueVaccinationArray
	eyePresComplete
	finalRightOD
	finalLeftOD
	followDaysComplete
	followUpMonth
	followUpDay
	followUpYear
	followUpDays: number = 0
	finalfollowUpDays: number = 0
	followUpDate = new Date()
	minutes
	seconds
	prescription_id
	dispensedPatient
	referDoctorName
	DischargeDate
	finalPreConditions
	bodyIndicatorSelected
	bodyIndicatorComplete
	finalAllergy
	findingsSelected
	symptomsSelected
	diagnosisSelected
	tempMedicationArray
	itemsfinding
	itemsymptoms
	itemsdiagnosis
	treatmentStatus
	investigationStatus
	suregeryOptionsTop
	suregeryOptions
	inputBox
	medication
	medicationStatus
	medicationTabArray
	medicationCapArray
	medicationSypArray
	medicationSuspArray
	medicationEmulsnArray
	medicationInjArray
	medicationCreamArray
	medicationGelArray
	dispensedPatientSelected
	doctorsDetails
	allShiftsClosed
	allShifts
	pateintPicPath
	OldPatientArray
	uploadedPrescriptionPath
	constructor(private userService: UserService, private toastr: ToastrService,private datePipe: DatePipe) { }

	ngOnInit() {
		this.doctorsDetails = {}
		if(localStorage['doctorDetails']){
		this.doctorData = JSON.parse(localStorage['doctorDetails'])

		}
		console.log(this.doctorData)
		if(localStorage['doctorsOfSameClinic']){
		this.doctorsDetails = JSON.parse(localStorage['doctorsOfSameClinic'])  

		}
		console.log(this.doctorsDetails)
		this.shiftOne =0
		this.shiftTwo = 0
		this.shiftThree = 0
		this.newDate.setDate(this.newDate.getDate()+1)
		this.fromDate1.setDate(this.fromDate1.getDate()-6)
		this.freqPatientArray = []
		this.referralPatientArray = []
		this.dataReferralTo = []
		this.dataReferralFrom = []
		this.UniquePatientArray = []
		this.uniqueFrequentArray = []
		this.activatedtab = 0
		this.activatetab(1)
		this.pateintPicPath = environment.patientPic
		var options = { month: 'short' };
		var today = new Date();
		// this.month = today.toLocaleDateString("en-IN", options);
		// this.day = new Date().getDate()
		// this.year = new Date().getFullYear()
		// this.numericMonth = new Date().getMonth()+1
		// this.dataRegistration = []  
		// this.dataAppointment = []
		// this.dataDispensedPatients = []
		// this.lastVisit = []
		// this.countLastVisit = []
		this.dispensedPatient = {}
		this.setAllShiftsForPreview()
		// this.searchRecords = []
		this.uploadedPrescriptionPath =  environment.uploadedPrescriptionPath

	}

	public lineChartData:Array<any> = [
	{data: [], label: 'Collection'},
	// {data: [2500, 3000, 3500, 4000, 4500, 5000, 6500], label: 'Prescription Sales'},
	// {data: [500, 1000, 1200, 1800, 1900, 1999, 2075], label: 'Standalone Sales'}
	];
	public lineChartLabels:Array<any> = [];

	public lineChartData1:Array<any> = [
	{data: [], label: 'Patient'},
	];
	public lineChartLabels1:Array<any> = [];

	public lineChartOptions:any = {
		responsive: true,
		legend: {
			display: false,
		}
	};
	public lineChartColors:Array<any> = [
	{ // grey
		backgroundColor: 'rgba(148,159,177,0.2)',
		borderColor: 'rgba(148,159,177,1)',
		pointBackgroundColor: 'rgba(148,159,177,1)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	},
	{ // dark grey
		backgroundColor: 'rgba(77,83,96,0.2)',
		borderColor: 'rgba(77,83,96,1)',
		pointBackgroundColor: 'rgba(77,83,96,1)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgba(77,83,96,1)'
	},
	{ // grey
		backgroundColor: 'rgba(148,159,177,0.2)',
		borderColor: 'rgba(148,159,177,1)',
		pointBackgroundColor: 'rgba(148,159,177,1)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	}
	];
	public lineChartLegend:boolean = true;
	public lineChartType:string = 'line';

	// events
	public chartClicked(e:any):void {
		console.log(e);
	}

	public chartHovered(e:any):void {
		console.log(e);
	}

	activatetab(i){
		var object
		this.activatedtab=i
		object ={}
		var date = new Date()
		//object.smart_diagnostics_id = this.doctorData.smart_diagnostics_id
		object.doctor_id = this.doctorData._id
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
		this.totalCollection = 0
		this.avgCollection = 0
		this.dateDiff = 0
		var maxArray = []
		this.feeArray = []
		this.feeArray.push(0)
		this.maxSaleOfDay = 0
		this.minSaleOfDay = 0
		this.maxCollectionDate = 0
		this.minCollectionDate = 0
		this.totalPrescriptions = 0
		this.maxPrescofDay = 0
		this.minPrescOfDay = 0
		this.maxPresconDate = 0
		this.minPresconDate = 0
		this.totalRegPatients = 0
		this.newPatients = 0
		this.totalMale = 0
		this.totalFemale = 0
		this.totalMalePercentage = 0
		this.totalFemalePercentage = 0
		this.totalWalkIn = 0
		this.totalEmergency = 0
		this.totalAppointment = 0
		this.totalWalkInPercentage = 0
		this.totalEmergencyPercentage = 0
		this.totalAppointmentPercentage = 0
		this.shiftOne = 0
		this.shiftTwo = 0
		this.shiftThree = 0
		this.shiftOnepercentage = 0
		this.shiftTwopercentage = 0
		this.shiftThreepercentage = 0
		var totalAge = 0
		this.avgAge = 0
		this.freqPatientArray = []
		var localFreqArray = []
		this.diagnosisArray = []
		this.UniquePatientArray = []
		this.uniqueFrequentArray = []
		this.loading = true	
		this.TotalOTGPrescriptions = []
		this.TotalOTGPrescriptionslength = 0
		var arr = []
		var arrRegistration = []
		this.FindReferralPatients(object)
		this.userService.OPDAnalytics(object).subscribe((data)=>{
			console.log(data)
			if(data.response){
				arr = data.dataDispensed
				console.log(arr)
				this.totalPrescriptions = data.dataDispensed.length
				this.totalRegPatients = data.dataRegistrations.length
				arrRegistration = data.dataRegistrations
				var arr1 = []
				if(arr.length){
					arr.filter(function(item) {
						if(item){
							if(item.registration.isOtg === true){
								// console.log(item.first_name)
								arr1.push(item)
								// this.TotalOTGPrescriptions = item
								// this.TotalOTGPrescriptions.push(item)

							}
						}

					});
				}
				this.TotalOTGPrescriptions = arr1
				this.TotalOTGPrescriptionslength = this.TotalOTGPrescriptions.length
				console.log(this.TotalOTGPrescriptions)
				for (var i = 0; i < data.dataDispensed.length; i++) {
					if(data.dataDispensed[i].registration.fee){
						this.totalCollection += parseFloat(data.dataDispensed[i].registration.fee)
					}

					this.getShift(data.dataDispensed[i].registration.createdAt)
					maxArray.push(this.datePipe.transform(data.dataDispensed[i].createAt, 'yyyy-MM-dd'))
					// if(data.dataDispensed[i].registration.lastVisit.status == false){
						// 	this.newPatients++
						// }
						// if(data.dataDispensed[i].registration.gender == 'Male'){
							// 	this.totalMale++
							// }else{
								// 	this.totalFemale++
								// }
								if(data.dataDispensed[i].registration.type == "Walk-in"){
									this.totalWalkIn++
								}
								else if(data.dataDispensed[i].registration.type == "Emergency"){
									this.totalEmergency++
								}else{
									this.totalAppointment++
								}
								if(data.dataDispensed[i].registration.age){
									totalAge += data.dataDispensed[i].registration.age
								}
								if(data.dataDispensed[i].registration.lastVisit.count){
									localFreqArray.push({
										name: data.dataDispensed[i].registration.pateintName, 
										count: data.dataDispensed[i].registration.lastVisit.count,
										createdAt: data.dataDispensed[i].registration.createdAt, 
										phone: data.dataDispensed[i].registration.pateintPhone
									})
								}
							}
							console.log(this.totalCollection)
							console.log(this.totalCollection)
							for (var i = 0; i < data.dataRegistrations.length; i++) {
								if(data.dataRegistrations[i].fee){
									this.totalCollection += parseFloat(data.dataRegistrations[i].fee)
								}
								this.getShift(data.dataRegistrations[i].createdAt)
								maxArray.push(this.datePipe.transform(data.dataRegistrations[i].createAt, 'yyyy-MM-dd'))
								// if(data.dataRegistrations[i].gender == 'Male'){
									// 	this.totalMale++
									// }else{
										// 	this.totalFemale++
										// }
										if(data.dataRegistrations[i].type == "Walk-in"){
											this.totalWalkIn++
										}
										else if(data.dataRegistrations[i].type == "Emergency"){
											this.totalEmergency++
										}else{
											this.totalAppointment++
										}
										if(data.dataRegistrations[i].age){
											totalAge += data.dataRegistrations[i].age
										}
										if(data.dataRegistrations[i].lastVisit.count){
											localFreqArray.push({
												name: data.dataRegistrations[i].pateintName, 
												count: data.dataRegistrations[i].lastVisit.count,
												createdAt: data.dataRegistrations[i].createdAt, 
												phone: data.dataRegistrations[i].pateintPhone
											})
										}
									}
									console.log(localFreqArray)
									console.log(this.totalCollection)
									////////Unique Patient////////////////
									for (var i = 0; i < data.dataRegistrations.length; i++) {
										var boolean = false
										for (var j = 0; j < this.UniquePatientArray.length; j++) {
											if(this.UniquePatientArray[j].name ==  data.dataRegistrations[i].pateintName &&
												this.UniquePatientArray[j].phone ==  data.dataRegistrations[i].pateintPhone){
												if(data.dataRegistrations[i].lastVisit.status == false){
													this.newPatients++
												}
												boolean = true
												break;
											}
										}
										if (boolean == false) {
											if(data.dataRegistrations[i].lastVisit.status == false){
												this.newPatients++
											}
											if(data.dataRegistrations[i].gender == 'Male'){
												this.totalMale++
											}if(data.dataRegistrations[i].gender == 'Female'){
												this.totalFemale++
											}
											this.UniquePatientArray.push({
												name:data.dataRegistrations[i].pateintName,
												phone: data.dataRegistrations[i].pateintPhone
											})
										}
									}
									console.log(arrRegistration)
									console.log(arr)
									console.log(this.newPatients)
									for (var i = 0; i < data.dataDispensed.length; i++) {
										var boolean = false
										for (var j = 0; j < this.UniquePatientArray.length; j++) {
											if(this.UniquePatientArray[j].name ==  data.dataDispensed[i].registration.pateintName &&
												this.UniquePatientArray[j].phone ==  data.dataDispensed[i].registration.pateintPhone){
												if(data.dataDispensed[i].registration.lastVisit.status == false){
													this.newPatients++
												}
												boolean = true
												break;
											}
										}
										if(boolean == false){
											if(data.dataDispensed[i].registration.lastVisit.status == false){
												this.newPatients++
											}
											if(data.dataDispensed[i].registration.gender == 'Male'){
												this.totalMale++
											}else{
												this.totalFemale++
											}
											this.UniquePatientArray.push({
												name:data.dataDispensed[i].registration.pateintName,
												phone: data.dataDispensed[i].registration.pateintPhone
											})
										}
									}	
									console.log(this.newPatients)			
									///////////End Unique Patient ////////
									//////////Freq Array New/////////////
									for (var i = 0; i < this.UniquePatientArray.length; i++) {
										this.UniquePatientArray[i].count = 0
										for (var j = 0; j < data.dataRegistrations.length; j++) {
											if(this.UniquePatientArray[i].name ==  data.dataRegistrations[j].pateintName &&
												this.UniquePatientArray[i].phone ==  data.dataRegistrations[j].pateintPhone){
												this.UniquePatientArray[i].count++
										}
									}
									for (var j = 0; j < data.dataDispensed.length; j++) {
										if(this.UniquePatientArray[i].name ==  data.dataDispensed[j].registration.pateintName &&
											this.UniquePatientArray[i].phone ==  data.dataDispensed[j].registration.pateintPhone){
											this.UniquePatientArray[i].count++
									}
								}
								// if(this.UniquePatientArray[i].count>2){
									this.uniqueFrequentArray.push({
										name:this.UniquePatientArray[i].name,
										phone:this.UniquePatientArray[i].phone,
										count:this.UniquePatientArray[i].count
									})

								// }
							}
							this.OldPatientArray = 0
							for (var i = 0; i < this.UniquePatientArray.length; ++i) {
								if(parseInt(this.UniquePatientArray[i].count) >=2){
									this.OldPatientArray ++
								}
							}

							console.log(this.OldPatientArray)
							console.log(this.UniquePatientArray)
							
							/////////Endf Freq Array New////////
							this.avgCollection = (this.totalCollection/(data.dataDispensed.length + data.dataRegistrations.length))
							var diff = Math.abs(this.toDate.getTime() - this.fromDate.getTime());
							this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24))+1; 
							this.totalMalePercentage =   (this.totalMale*100)/(this.UniquePatientArray.length)
							this.totalFemalePercentage = (this.totalFemale*100)/(this.UniquePatientArray.length)
							this.totalWalkInPercentage = (this.totalWalkIn*100)/(this.totalPrescriptions + this.totalRegPatients)
							this.totalEmergencyPercentage = (this.totalEmergency*100)/(this.totalPrescriptions + this.totalRegPatients)
							this.totalAppointmentPercentage = (this.totalAppointment*100)/(this.totalPrescriptions + this.totalRegPatients)
							this.avgAge = totalAge/(this.totalPrescriptions + this.totalRegPatients)
							var dateArray = []
							// this.doctorData
							dateArray.push(this.datePipe.transform(this.doctorData.createAt, 'yyyy-MM-dd'))
							var newMaxArray = []
							var prescriptionArray = []
							var patientArray = []
							patientArray.push(0)
							// patientArray.push(this.datePipe.transform(this.doctorData.createAt, 'yyyy-MM-dd')) 
							newMaxArray.push(maxArray[0])
							for (var i = 0; i < maxArray.length; i++) {
								var boolean = false
								for (var j = 0; j < newMaxArray.length; j++) {
									if(maxArray[i]==newMaxArray[j]){
										boolean = true
										break
									}
								}
								if(boolean == false){
									newMaxArray.push(maxArray[i])
								}
							}
							console.log(newMaxArray)
							for (var i = 0; i < newMaxArray.length; i++) {
								var total_fee:number = 0
								var total_reg_fee:number = 0
								var total_prescriptions:number = 0
								var total_patients:number = 0
								var total_reg_patient:number = 0
								for (var j = 0; j < data.dataDispensed.length; j++) {
									if(newMaxArray[i]== this.datePipe.transform(data.dataDispensed[j].createAt, 'yyyy-MM-dd')){
										if(data.dataDispensed[j].registration.fee){
											total_fee += parseInt(data.dataDispensed[j].registration.fee)
											if(data.dataDispensed[j].registration.fee !=0){
												total_prescriptions++
											}
											total_patients++
										}
									}
								}
								for (var k = 0; k < data.dataRegistrations.length; k++) {
									if(newMaxArray[i]== this.datePipe.transform(data.dataRegistrations[k].createAt, 'yyyy-MM-dd')){
										if(data.dataRegistrations[k].fee){
											total_reg_fee += parseInt(data.dataRegistrations[k].fee)   
											if(data.dataRegistrations[k].fee !=0){
												total_prescriptions++
											}
											total_reg_patient++  
										}                                      
									}
								}
								prescriptionArray.push(total_prescriptions)
								
								this.feeArray.push(total_fee + total_reg_fee)

								patientArray.push(total_patients + total_reg_patient)
								dateArray.push(newMaxArray[i])
							}

							console.log(patientArray)
							console.log(total_patients)
							console.log(total_reg_patient)
							////////maxCollection With date////////////
							this.maxSaleOfDay = Math.max(...this.feeArray)
							this.minSaleOfDay = Math.min(...this.feeArray)
							var newMaxValue = -1
							newMaxValue = this.feeArray.findIndex(x => x==this.maxSaleOfDay);
							this.maxCollectionDate = dateArray[newMaxValue]
							var newMinValue = -1
							newMinValue = this.feeArray.findIndex(x => x==this.minSaleOfDay);
							this.minCollectionDate = dateArray[newMinValue]
							/////////End////////////////

							//////////max presc with  date///////
							this.maxPrescofDay = Math.max(...prescriptionArray)
							this.minPrescOfDay = Math.min(...prescriptionArray)
							var newMaxPresc = -1
							newMaxPresc = prescriptionArray.findIndex(x => x==this.maxPrescofDay);
							this.maxPresconDate = dateArray[newMaxPresc]
							var newMinPresc = -1
							newMinPresc = prescriptionArray.findIndex(x => x==this.minPrescOfDay);
							this.minPresconDate = dateArray[newMinPresc]
							// console.log(prescriptionArray)
							// console.log(newMaxArray)
							////////end//////////////
							/////Chart///////
							console.log(this.feeArray)
							this.lineChartData = [
							{data: this.feeArray, label: 'Collection'},
							]
							this.lineChartLabels = dateArray
							//////patient Chart //////////
							this.lineChartData1 = [
							{data: patientArray, label: 'Patients'},
							]
							this.lineChartLabels1 = dateArray
							var patientDateArray = []
							for (var i = 0; i < dateArray.length; i++) {
								patientDateArray.push(dateArray[i])
							}
							/////////////////////////// Date Sort Logic //////////////////////
							this.sortSales(dateArray, this.feeArray);  
							this.sortPatient(patientDateArray, patientArray);  
							///////////////////////// End sort Logic /////////////////////////
							console.log(this.shiftOne,this.shiftTwo,this.shiftThree)
							this.shiftOnepercentage = (this.shiftOne*100)/(this.totalPrescriptions + this.totalRegPatients)
							this.shiftTwopercentage = (this.shiftTwo*100)/(this.totalPrescriptions + this.totalRegPatients)
							this.shiftThreepercentage = (this.shiftThree*100)/(this.totalPrescriptions + this.totalRegPatients)
							var freqPatientArray = []

							for (var i = 0; i < localFreqArray.length; i++) {
								var boolean = false
								for (var j = 0; j < freqPatientArray.length; j++) {
									if(freqPatientArray[j].name == localFreqArray[i].name && freqPatientArray[j].phone == localFreqArray[i].phone){
										boolean = true
										break;
									}
								}
								if(boolean == false){
									freqPatientArray.push({
										name:localFreqArray[i].name,
										count:localFreqArray[i].count,
										phone:localFreqArray[i].phone
									})
								}
							}
							// for (var i = 0; i < freqPatientArray.length; i++) {
								// 	for (var j = 0; j < data.dataRegistrations.length; j++) {
									// 		if(data.dataRegistrations[j].pateintName == freqPatientArray[i].name && 
									// 			data.dataRegistrations[j].pateintPhone == freqPatientArray[i].phone){
										// 			freqPatientArray[i].count++
										// 		}
										// 	}	
										// 	for (var k = 0; k < data.dataDispensed.length; k++) {
											// 		if(freqPatientArray[i].name ==  data.dataDispensed[k].registration.pateintName &&
											// 			freqPatientArray[i].phone ==  data.dataDispensed[k].registration.pateintPhone){
												// 			freqPatientArray[i].count++
												// 		}
												// 	}
												// }
												for (var i = 0; i < freqPatientArray.length; i++) {
													freqPatientArray[i].count=0
													for (var j = 0; j < localFreqArray.length; j++) {
														if(freqPatientArray[i].name ==  localFreqArray[j].name &&
															freqPatientArray[i].phone ==  localFreqArray[j].phone){
															freqPatientArray[i].count++
													}
												}
												if(freqPatientArray[i].count>=3){
													this.freqPatientArray.push({
														name:freqPatientArray[i].name,
														count:freqPatientArray[i].count,
														phone:freqPatientArray[i].phone
													})
												}
											}
											this.freqPatientArray.sort((a, b) => parseInt(b.count)-parseInt(a.count));
											///////////////// top 10 Diagnois///////////////////////
											console.log(data.dataDispensed)
											for (var i = 0; i < data.dataDispensed.length; i++) {
												if(data.dataDispensed[i].precription.diagnosisSelected){
													for (var j = 0; j < data.dataDispensed[i].precription.diagnosisSelected.length; j++) {
														var boolean = false
														for (var k = 0; k < this.diagnosisArray.length; k++) {
															if(this.diagnosisArray[k].value==data.dataDispensed[i].precription.diagnosisSelected[j].display){
																boolean = true
																break;
															}
														}
														if(boolean == false){            
															this.diagnosisArray.push({
																value: data.dataDispensed[i].precription.diagnosisSelected[j].display,
																occurrence: 0,
																percentage: 0
															})    
														}
													}
												}
											}
											for (var k = 0; k < this.diagnosisArray.length; k++) {
												var  count = 0
												var totalLengthDiagnosis = 0
												for (var i = 0; i < data.dataDispensed.length; i++) {
													if(data.dataDispensed[i].precription.diagnosisSelected){
														for (var j = 0; j < data.dataDispensed[i].precription.diagnosisSelected.length; j++) {
															if(data.dataDispensed[i].precription.diagnosisSelected[j].display){
																totalLengthDiagnosis++    
															}
															if(this.diagnosisArray[k].value == data.dataDispensed[i].precription.diagnosisSelected[j].display){
																count++
															}
															this.diagnosisArray[k].occurrence = count
															this.diagnosisArray[k].percentage = (count*100)/totalLengthDiagnosis
														}
													}
												}
											}
											this.diagnosisArray.sort((a, b) => parseInt(b.occurrence)-parseInt(a.occurrence));
											/////////////////End top 10 diagnosis ///////////////////
										}
										this.loading = false
									},err=>{
										console.log(err)
									})

}
openPrescriptionPreview(data){
	this.prescription_id = data.prescription_id
	this.dispensedPatient = data.registration
	console.log(data)
	this.referDoctorName = data.registration.doctor_id
	this.DischargeDate = data.createdAt
	this.finalPreConditions = data.precription.finalPreConditions
	this.bodyIndicatorSelected = data.precription.bodyIndicatorSelected
	this.bodyIndicatorComplete = data.precription.bodyIndicatorComplete
	this.finalAllergy = data.precription.finalAllergy
	this.findingsSelected = data.precription.findingsSelected
	this.symptomsSelected = data.precription.symptomsSelected
	this.diagnosisSelected = data.precription.diagnosisSelected
	this.tempMedicationArray = data.precription.tempMedicationArray
	this.itemsfinding = data.precription.itemsfinding
	this.itemsymptoms = data.precription.itemsymptoms
	this.itemsdiagnosis = data.precription.itemsdiagnosis
	this.treatmentStatus = data.precription.treatmentStatus
	this.investigationStatus = data.precription.investigationStatus
	this.suregeryOptionsTop = data.precription.suregeryOptionsTop
	this.suregeryOptions = data.precription.suregeryOptions
	this.inputBox = data.precription.inputBox
	this.medication = data.precription.medication
	this.medicationStatus = data.precription.medicationStatus
	this.medicationTabArray = data.precription.medicationTabArray
	this.medicationCapArray = data.precription.medicationCapArray
	this.medicationSypArray = data.precription.medicationSypArray
	this.medicationSuspArray = data.precription.medicationSuspArray
	this.medicationEmulsnArray = data.precription.medicationEmulsnArray
	this.medicationInjArray = data.precription.medicationInjArray
	this.medicationCreamArray = data.precription.medicationCreamArray
	this.medicationGelArray = data.precription.medicationGelArray
	this.medicationDropsArray = data.precription.medicationDropsArray
	this.medicationPowderArray = data.precription.medicationPowderArray
	this.medicationAerosolsArray = data.precription.medicationAerosolsArray
	this.medicationMouthWashArray = data.precription.medicationMouthWashArray
	this.medicationSolutionArray = data.precription.medicationSolutionArray
	this.medicationLotionArray = data.precription.medicationLotionArray
	this.medicationOintmentArray = data.precription.medicationOintmentArray
	this.symptomsComplete = data.precription.symptomsComplete
	this.diagnosisComplete = data.precription.diagnosisComplete
	this.treatmentComplete = data.precription.treatmentComplete
	this.treatmentArray = data.precription.treatmentArray
	this.investigationIndicatorComplete = data.precription.investigationIndicatorComplete
	this.investigationArray = data.precription.investigationArray
	this.surgeryComplete = data.precription.surgeryComplete
	this.surgerySelectedArray = data.precription.surgerySelectedArray
	this.instructionsComplete = data.precription.instructionsComplete
	this.instructionsSelected = data.precription.instructionsSelected
	this.medicationComplete = data.precription.medicationComplete
	this.currentVaccinationComplete = data.precription.currentVaccinationComplete
	this.finalCurrentVaccinationArray = data.precription.finalCurrentVaccinationArray
	this.dueVaccinationComplete = data.precription.dueVaccinationComplete
	this.finalDueVaccinationArray = data.precription.finalDueVaccinationArray
	this.eyePresComplete = data.precription.eyePresComplete
	this.finalRightOD = data.precription.finalRightOD
	this.finalLeftOD = data.precription.finalLeftOD
	this.followDaysComplete = data.precription.followDaysComplete
	this.finalfollowUpDays = data.precription.finalfollowUpDays
	this.followUpDate.setDate(new Date(data.createdAt).getDate() + this.finalfollowUpDays);
	console.log(this.followUpDate)
	var options = { month: 'short' };
	this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
	this.followUpDay = this.followUpDate.getDate()
	this.followUpYear = this.followUpDate.getFullYear()
	this.minutes = data.precription.minutes
	this.seconds = data.precription.seconds
	// this.languageOptionSelected = data.precription.languageOptionSelected

	$("#previewModal1").modal("show");
}
dispensedPatientSelectedOpen(list){
	this.dispensedPatientSelected = list
	$('#uploadedPrescriptionModal').modal('show')
}
checkOptionOfPad(value){
	// console.log(this.doctorData)
	if(!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length<1){
		return true
	}else{
		for (var i = 0; i < this.doctorData.pad_customization_options.length; i++) {
			if(this.doctorData.pad_customization_options[i].value == value){
				if(this.doctorData.pad_customization_options[i].status == true){
					return true
				}else{
					return false
				}
			}
		}
	}
}

getFooterText(){
	if(!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length<1){
		return "Not for Medico-Legal Purpose"
	}else{
		return this.doctorData.pad_customization_options[12].text
	}
}

getHeaderText(){
	if(!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length<1){
		return "PLEASE TAKE PRIOR APPOINTMENT"
	}else{
		return this.doctorData.pad_customization_options[8].text
	}
}
setAllShiftsForPreview(){
	this.allShifts = []
	var Mon = false
	var Tue = false
	var Wed = false
	var Thu = false
	var Fri = false
	var Sat = false
	var Sun = false
	for (var i = 0; i < this.doctorData.consultation_schedule.length; i++) {
		var string = ''
		if(this.doctorData.consultation_schedule[i].Monday == true){
			Mon = true
			if(string == ''){
				string = "Mon"
			}else{
				string = string +", "+"Mon"
			}
		}
		if(this.doctorData.consultation_schedule[i].Tuesday == true){
			Tue = true
			if(string == ''){
				string = "Tue"
			}else{
				string = string +", "+"Tue"
			}
		}
		if(this.doctorData.consultation_schedule[i].Wednesday == true){
			Wed = true
			if(string == ''){
				string = "Wed"
			}else{
				string = string +", "+"Wed"
			}
		}
		if(this.doctorData.consultation_schedule[i].Thursday == true){
			Thu = true
			if(string == ''){
				string = "Thu"
			}else{
				string = string +", "+"Thu"
			}
		}
		if(this.doctorData.consultation_schedule[i].Friday == true){
			Fri = true
			if(string == ''){
				string = "Fri"
			}else{
				string = string +", "+"Fri"
			}
		}
		if(this.doctorData.consultation_schedule[i].Saturday == true){
			Sat = true
			if(string == ''){
				string = "Sat"
			}else{
				string = string +", "+"Sat"
			}
		}
		if(this.doctorData.consultation_schedule[i].Sunday == true){
			Sun = true
			if(string == ''){
				string = "Sun"
			}else{
				string = string +", "+"Sun"
			}
		}
		let object = {
			day:string,
			shifts:this.doctorData.consultation_schedule[i].shifts
		}
		this.allShifts.push(object)
	}
	var stringClosed = ''
	this.allShiftsClosed = []
	if(Mon == false){
		if(stringClosed == ''){
			stringClosed = "Mon"
		}else{
			stringClosed = stringClosed +", "+"Mon"
		}                
	}
	if(Tue == false){
		if(stringClosed == ''){
			stringClosed = "Tue"
		}else{
			stringClosed = stringClosed +", "+"Tue"
		}                                
	}
	if(Wed == false){
		if(stringClosed == ''){
			stringClosed = "Wed"
		}else{
			stringClosed = stringClosed +", "+"Wed"
		}                                
	}
	if(Thu == false){
		if(stringClosed == ''){
			stringClosed = "Thu"
		}else{
			stringClosed = stringClosed +", "+"Thu"
		}                                
	}
	if(Fri == false){
		if(stringClosed == ''){
			stringClosed = "Fri"
		}else{
			stringClosed = stringClosed +", "+"Fri"
		}                                
	}
	if(Sat == false){
		if(stringClosed == ''){
			stringClosed = "Sat"
		}else{
			stringClosed = stringClosed +", "+"Sat"
		}                                
	}
	if(Sun == false){
		if(stringClosed == ''){
			stringClosed = "Sun"
		}else{
			stringClosed = stringClosed +", "+"Sun"
		}                                
	}
	if(stringClosed!=''){
		let object = {
			day:stringClosed
		}
		this.allShiftsClosed.push(object)
	}
}
getShift(date){
	var day = this.datePipe.transform(date, 'EEEE')
	var shiftTime : number
	shiftTime = 0
	shiftTime = (new Date(date).getHours() * 60) + new Date(date).getMinutes()
	///console.log(shiftTime)
	for (var i = 0; i < this.doctorData.consultation_schedule.length; i++) {
		if (this.doctorData.consultation_schedule[i].Monday == true && day == 'Monday') {
			for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
				if(k<3){
					var scheduleTime
					scheduleTime = 0
					scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute) 
					var scheduleTimeTo
					scheduleTimeTo = 0
					scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute) 
					if(shiftTime < scheduleTimeTo && shiftTime >= scheduleTime){
						if(k==0){
							this.shiftOne++
						}else if(k==1){
							this.shiftTwo++
						}else {
							this.shiftThree++
						}
					}                
				}                   
			}
		}else if (this.doctorData.consultation_schedule[i].Tuesday == true && day == 'Tuesday') {
			for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
				if(k<3){
					var scheduleTime
					scheduleTime = 0
					scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute) 
					var scheduleTimeTo
					scheduleTimeTo = 0
					scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute) 
					if(shiftTime < scheduleTimeTo && shiftTime >= scheduleTime){
						if(k==0){
							this.shiftOne++
						}else if(k==1){
							this.shiftTwo++
						}else {
							this.shiftThree++
						}
					}                
				}                   
			}
		}else if (this.doctorData.consultation_schedule[i].Wednesday == true && day == 'Wednesday') {
			for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
				if(k<3){
					var scheduleTime
					scheduleTime = 0
					scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute) 
					var scheduleTimeTo
					scheduleTimeTo = 0
					scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute) 
					if(shiftTime < scheduleTimeTo && shiftTime >= scheduleTime){
						if(k==0){
							this.shiftOne++
						}else if(k==1){
							this.shiftTwo++
						}else {
							this.shiftThree++
						}
					}                
				}                   
			}
		}else if (this.doctorData.consultation_schedule[i].Thursday == true && day == 'Thursday') {
			for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
				if(k<3){
					var scheduleTime
					scheduleTime = 0
					scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute) 
					var scheduleTimeTo
					scheduleTimeTo = 0
					scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute) 
					if(shiftTime < scheduleTimeTo && shiftTime >= scheduleTime){
						if(k==0){
							this.shiftOne++
						}else if(k==1){
							this.shiftTwo++
						}else {
							this.shiftThree++
						}
					}                
				}                   
			}
		}else if (this.doctorData.consultation_schedule[i].Friday == true && day == 'Friday') {
			for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
				if(k<3){
					var scheduleTime
					scheduleTime = 0
					scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute) 
					var scheduleTimeTo
					scheduleTimeTo = 0
					scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute) 
					if(shiftTime < scheduleTimeTo && shiftTime >= scheduleTime){
						if(k==0){
							this.shiftOne++
						}else if(k==1){
							this.shiftTwo++
						}else {
							this.shiftThree++
						}
					}                
				}                   
			}
		}else if (this.doctorData.consultation_schedule[i].Saturday == true && day == 'Saturday') {
			for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
				if(k<3){
					var scheduleTime
					scheduleTime = 0
					scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute) 
					var scheduleTimeTo
					scheduleTimeTo = 0
					scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute) 
					if(shiftTime < scheduleTimeTo && shiftTime >= scheduleTime){
						if(k==0){
							this.shiftOne++
						}else if(k==1){
							this.shiftTwo++
						}else {
							this.shiftThree++
						}
					}                
				}                   
			}
		}else if (this.doctorData.consultation_schedule[i].Sunday == true && day == 'Sunday') {
			for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
				if(k<3){
					var scheduleTime
					scheduleTime = 0
					scheduleTime = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute) 
					var scheduleTimeTo
					scheduleTimeTo = 0
					scheduleTimeTo = (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute) 
					if(shiftTime < scheduleTimeTo && shiftTime >= scheduleTime){
						if(k==0){
							this.shiftOne++
						}else if(k==1){
							this.shiftTwo++
						}else {
							this.shiftThree++
						}
					}                
				}                   
			}
		}
	}		
}

getClass(i){
	if (i==this.activatedtab) {
		return 'active'
	}else if (i<this.activatedtab) {
		return 'completed'
	}
}	
sortSales(a, b) {
	var swapped;
	do {
		swapped = false;
		for (var i = 0; i < a.length - 1; i++) {
			if (a[i] > a[i + 1]) {
				var temp = a[i];
				a[i] = a[i + 1];
				a[i + 1] = temp;
				var temp = b[i];
				b[i] = b[i + 1];
				b[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	var newDateArray = []
	for (var i = 0; i < a.length; i++) {
		newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'))
	}
	this.lineChartLabels = newDateArray
}
sortPatient(a, b) {
	var swapped;
	do {
		swapped = false;
		for (var i = 0; i < a.length - 1; i++) {
			if (a[i] > a[i + 1]) {
				var temp = a[i];
				a[i] = a[i + 1];
				a[i + 1] = temp;
				var temp = b[i];
				b[i] = b[i + 1];
				b[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	var newDateArray = []
	for (var i = 0; i < a.length; i++) {
		newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'))
	}
	this.lineChartLabels1 = newDateArray
}

go(){
	this.totalCollection = 0
	this.avgCollection = 0
	this.dateDiff = 0
	var maxArray = []
	this.feeArray = []
	this.maxSaleOfDay = 0
	this.minSaleOfDay = 0
	this.maxCollectionDate = 0
	this.minCollectionDate = 0
	this.totalPrescriptions = 0
	this.maxPrescofDay = 0
	this.minPrescOfDay = 0
	this.maxPresconDate = 0
	this.minPresconDate = 0
	this.totalRegPatients = 0
	this.newPatients = 0
	this.totalMale = 0
	this.totalFemale = 0
	this.totalMalePercentage = 0
	this.totalFemalePercentage = 0
	this.totalWalkIn = 0
	this.totalEmergency = 0
	this.totalAppointment = 0
	this.totalWalkInPercentage = 0
	this.totalEmergencyPercentage = 0
	this.totalAppointmentPercentage = 0
	this.shiftOne = 0
	this.shiftTwo = 0
	this.shiftThree = 0
	this.shiftOnepercentage = 0
	this.shiftTwopercentage = 0
	this.shiftThreepercentage = 0
	var totalAge = 0
	this.avgAge = 0
	this.freqPatientArray = []
	var localFreqArray = []
	this.diagnosisArray = []
	this.UniquePatientArray = []
	this.uniqueFrequentArray = []
	var object 
	object = {}
	object.doctor_id = this.doctorData._id
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
	this.loading = true	
	this.FindReferralPatients(object)
	this.userService.OPDAnalytics(object).subscribe((data)=>{
		console.log(data)
		if(data.response){
			this.totalPrescriptions = data.dataDispensed.length
			this.totalRegPatients = data.dataRegistrations.length
			for (var i = 0; i < data.dataDispensed.length; i++) {
				if(data.dataDispensed[i].registration.fee){
					this.totalCollection += parseInt(data.dataDispensed[i].registration.fee)
				}
				this.getShift(data.dataDispensed[i].registration.createdAt)
				maxArray.push(this.datePipe.transform(data.dataDispensed[i].createAt, 'yyyy-MM-dd'))
				// if(data.dataDispensed[i].registration.lastVisit.status == false){
					// 	this.newPatients++
					// }
					// if(data.dataDispensed[i].registration.gender == 'Male'){
						// 	this.totalMale++
						// }else{
							// 	this.totalFemale++
							// }
							if(data.dataDispensed[i].registration.type == "Walk-in"){
								this.totalWalkIn++
							}
							else if(data.dataDispensed[i].registration.type == "Emergency"){
								this.totalEmergency++
							}else{
								this.totalAppointment++
							}
							if(data.dataDispensed[i].registration.age){
								totalAge += data.dataDispensed[i].registration.age
							}
							if(data.dataDispensed[i].registration.lastVisit.count){
								localFreqArray.push({
									name: data.dataDispensed[i].registration.pateintName, 
									count: data.dataDispensed[i].registration.lastVisit.count,
									createdAt: data.dataDispensed[i].registration.createdAt, 
									phone: data.dataDispensed[i].registration.pateintPhone
								})
							}
						}
						for (var i = 0; i < data.dataRegistrations.length; i++) {
							if(data.dataRegistrations[i].fee){
								this.totalCollection += parseInt(data.dataRegistrations[i].fee)
							}
							this.getShift(data.dataRegistrations[i].createdAt)
							maxArray.push(this.datePipe.transform(data.dataRegistrations[i].createAt, 'yyyy-MM-dd'))
							// if(data.dataRegistrations[i].gender == 'Male'){
								// 	this.totalMale++
								// }else{
									// 	this.totalFemale++
									// }
									if(data.dataRegistrations[i].type == "Walk-in"){
										this.totalWalkIn++
									}
									else if(data.dataRegistrations[i].type == "Emergency"){
										this.totalEmergency++
									}else{
										this.totalAppointment++
									}
									if(data.dataRegistrations[i].age){
										totalAge += data.dataRegistrations[i].age
									}
									if(data.dataRegistrations[i].lastVisit.count){
										localFreqArray.push({
											name: data.dataRegistrations[i].pateintName, 
											count: data.dataRegistrations[i].lastVisit.count,
											createdAt: data.dataRegistrations[i].createdAt, 
											phone: data.dataRegistrations[i].pateintPhone
										})
									}
								}
								////////Unique Patient////////////////
								for (var i = 0; i < data.dataRegistrations.length; i++) {
									var boolean = false
									for (var j = 0; j < this.UniquePatientArray.length; j++) {
										if(this.UniquePatientArray[j].name ==  data.dataRegistrations[i].pateintName &&
											this.UniquePatientArray[j].phone ==  data.dataRegistrations[i].pateintPhone){
											if(data.dataRegistrations[i].lastVisit.status == false){
												this.newPatients++
											}
											boolean = true
											break;
										}
									}
									if (boolean == false) {
										if(data.dataRegistrations[i].lastVisit.status == false){
											this.newPatients++
										}
										if(data.dataRegistrations[i].gender == 'Male'){
											this.totalMale++
										}if(data.dataRegistrations[i].gender == 'Female'){
											this.totalFemale++
										}
										this.UniquePatientArray.push({
											name:data.dataRegistrations[i].pateintName,
											phone: data.dataRegistrations[i].pateintPhone
										})
									}
								}
								for (var i = 0; i < data.dataDispensed.length; i++) {
									var boolean = false
									for (var j = 0; j < this.UniquePatientArray.length; j++) {
										if(this.UniquePatientArray[j].name ==  data.dataDispensed[i].registration.pateintName &&
											this.UniquePatientArray[j].phone ==  data.dataDispensed[i].registration.pateintPhone){
											if(data.dataDispensed[i].registration.lastVisit.status == false){
												this.newPatients++
											}
											boolean = true
											break;
										}
									}
									if(boolean == false){
										if(data.dataDispensed[i].registration.lastVisit.status == false){
											this.newPatients++
										}
										if(data.dataDispensed[i].registration.gender == 'Male'){
											this.totalMale++
										}else{
											this.totalFemale++
										}
										this.UniquePatientArray.push({
											name:data.dataDispensed[i].registration.pateintName,
											phone: data.dataDispensed[i].registration.pateintPhone
										})
									}
								}				
								///////////End Unique Patient ////////
								//////////Freq Array New/////////////
								for (var i = 0; i < this.UniquePatientArray.length; i++) {
									this.UniquePatientArray[i].count = 0
									for (var j = 0; j < data.dataRegistrations.length; j++) {
										if(this.UniquePatientArray[i].name ==  data.dataRegistrations[j].pateintName &&
											this.UniquePatientArray[i].phone ==  data.dataRegistrations[j].pateintPhone){
											this.UniquePatientArray[i].count++
									}
								}
								for (var j = 0; j < data.dataDispensed.length; j++) {
									if(this.UniquePatientArray[i].name ==  data.dataDispensed[j].registration.pateintName &&
										this.UniquePatientArray[i].phone ==  data.dataDispensed[j].registration.pateintPhone){
										this.UniquePatientArray[i].count++
								}
							}
							this.uniqueFrequentArray.push({
								name:this.UniquePatientArray[i].name,
								phone:this.UniquePatientArray[i].phone,
								count:this.UniquePatientArray[i].count
							})
						}
						/////////Endf Freq Array New////////
						this.avgCollection = this.totalCollection/(data.dataDispensed.length + data.dataRegistrations.length)
						var diff = Math.abs(new Date(this.toDate1).getTime() - new Date(this.fromDate1).getTime());
						this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24))+1; 
						this.totalMalePercentage =   (this.totalMale*100)/(this.UniquePatientArray.length)
						this.totalFemalePercentage = (this.totalFemale*100)/(this.UniquePatientArray.length)
						this.totalWalkInPercentage = (this.totalWalkIn*100)/(this.totalPrescriptions + this.totalRegPatients)
						this.totalEmergencyPercentage = (this.totalEmergency*100)/(this.totalPrescriptions + this.totalRegPatients)
						this.totalAppointmentPercentage = (this.totalAppointment*100)/(this.totalPrescriptions + this.totalRegPatients)
						this.avgAge = totalAge/(this.totalPrescriptions + this.totalRegPatients)
						var dateArray = []
						dateArray.push('10-11-2018')
						var newMaxArray = []
						var prescriptionArray = []
						var patientArray = []
						patientArray.push(0)
						newMaxArray.push(maxArray[0])
						for (var i = 0; i < maxArray.length; i++) {
							var boolean = false
							for (var j = 0; j < newMaxArray.length; j++) {
								if(maxArray[i]==newMaxArray[j]){
									boolean = true
									break
								}
							}
							if(boolean == false){
								newMaxArray.push(maxArray[i])
							}
						}
						for (var i = 0; i < newMaxArray.length; i++) {
							var total_fee:number = 0
							var total_reg_fee:number = 0
							var total_prescriptions:number = 0
							var total_patients:number = 0
							var total_reg_patient:number = 0
							for (var j = 0; j < data.dataDispensed.length; j++) {
								if(newMaxArray[i]== this.datePipe.transform(data.dataDispensed[j].createAt, 'yyyy-MM-dd')){
									if(data.dataDispensed[j].registration.fee){
										total_fee += parseInt(data.dataDispensed[j].registration.fee)
										total_prescriptions++
										total_patients++
									}
								}
							}
							for (var k = 0; k < data.dataRegistrations.length; k++) {
								if(newMaxArray[i]== this.datePipe.transform(data.dataRegistrations[k].createAt, 'yyyy-MM-dd')){
									if(data.dataRegistrations[k].fee){
										total_reg_fee += parseInt(data.dataRegistrations[k].fee)   
										total_prescriptions++
										total_reg_patient++  
									}                                      
								}
							}
							prescriptionArray.push(total_prescriptions)
							this.feeArray.push(total_fee + total_reg_fee)
							patientArray.push(total_patients + total_reg_patient)
							dateArray.push(newMaxArray[i])
						}
						console.log(patientArray)
						////////maxCollection With date////////////
						this.maxSaleOfDay = Math.max(...this.feeArray)
						this.minSaleOfDay = Math.min(...this.feeArray)
						var newMaxValue = -1
						newMaxValue = this.feeArray.findIndex(x => x==this.maxSaleOfDay);
						this.maxCollectionDate = dateArray[newMaxValue]
						var newMinValue = -1
						newMinValue = this.feeArray.findIndex(x => x==this.minSaleOfDay);
						this.minCollectionDate = dateArray[newMinValue]
						/////////End////////////////

						//////////max presc with  date///////
						this.maxPrescofDay = Math.max(...prescriptionArray)
						this.minPrescOfDay = Math.min(...prescriptionArray)
						var newMaxPresc = -1
						newMaxPresc = prescriptionArray.findIndex(x => x==this.maxPrescofDay);
						this.maxPresconDate = dateArray[newMaxPresc]
						var newMinPresc = -1
						newMinPresc = prescriptionArray.findIndex(x => x==this.minPrescOfDay);
						this.minPresconDate = dateArray[newMinPresc]
						// console.log(prescriptionArray)
						// console.log(newMaxArray)
						////////end//////////////
						/////Chart///////
						console.log(this.feeArray)
						this.lineChartData = [
						{data: this.feeArray, label: 'Total Collection'},
						]
						this.lineChartLabels = dateArray
						//////patient Chart //////////
						this.lineChartData1 = [
						{data: patientArray, label: 'Total Patients'},
						]
						this.lineChartLabels1 = dateArray
						var patientDateArray = []
						for (var i = 0; i < dateArray.length; i++) {
							patientDateArray.push(dateArray[i])
						}
						/////////////////////////// Date Sort Logic //////////////////////
						this.sortSales(dateArray, this.feeArray);  
						this.sortPatient(patientDateArray, patientArray);  
						///////////////////////// End sort Logic /////////////////////////
						console.log(this.shiftOne,this.shiftTwo,this.shiftThree)
						this.shiftOnepercentage = (this.shiftOne*100)/(this.totalPrescriptions + this.totalRegPatients)
						this.shiftTwopercentage = (this.shiftTwo*100)/(this.totalPrescriptions + this.totalRegPatients)
						this.shiftThreepercentage = (this.shiftThree*100)/(this.totalPrescriptions + this.totalRegPatients)
						var freqPatientArray = []

						for (var i = 0; i < localFreqArray.length; i++) {
							var boolean = false
							for (var j = 0; j < freqPatientArray.length; j++) {
								if(freqPatientArray[j].name == localFreqArray[i].name && freqPatientArray[j].phone == localFreqArray[i].phone){
									boolean = true
									break;
								}
							}
							if(boolean == false){
								freqPatientArray.push({
									name:localFreqArray[i].name,
									count:localFreqArray[i].count,
									phone:localFreqArray[i].phone
								})
							}
						}
						// for (var i = 0; i < freqPatientArray.length; i++) {
							// 	for (var j = 0; j < data.dataRegistrations.length; j++) {
								// 		if(data.dataRegistrations[j].pateintName == freqPatientArray[i].name && 
								// 			data.dataRegistrations[j].pateintPhone == freqPatientArray[i].phone){
									// 			freqPatientArray[i].count++
									// 		}
									// 	}	
									// 	for (var k = 0; k < data.dataDispensed.length; k++) {
										// 		if(freqPatientArray[i].name ==  data.dataDispensed[k].registration.pateintName &&
										// 			freqPatientArray[i].phone ==  data.dataDispensed[k].registration.pateintPhone){
											// 			freqPatientArray[i].count++
											// 		}
											// 	}
											// }
											for (var i = 0; i < freqPatientArray.length; i++) {
												freqPatientArray[i].count=0
												for (var j = 0; j < localFreqArray.length; j++) {
													if(freqPatientArray[i].name ==  localFreqArray[j].name &&
														freqPatientArray[i].phone ==  localFreqArray[j].phone){
														freqPatientArray[i].count++
												}
											}
											if(freqPatientArray[i].count>=2){
												this.freqPatientArray.push({
													name:freqPatientArray[i].name,
													count:freqPatientArray[i].count,
													phone:freqPatientArray[i].phone
												})
											}
										}
										this.freqPatientArray.sort((a, b) => parseInt(b.count)-parseInt(a.count));
										///////////////// top 10 Diagnois///////////////////////
										for (var i = 0; i < data.dataDispensed.length; i++) {
											for (var j = 0; j < data.dataDispensed[i].precription.diagnosisSelected.length; j++) {
												var boolean = false
												for (var k = 0; k < this.diagnosisArray.length; k++) {
													if(this.diagnosisArray[k].value==data.dataDispensed[i].precription.diagnosisSelected[j].display){
														boolean = true
														break;
													}
												}
												if(boolean == false){            
													this.diagnosisArray.push({
														value: data.dataDispensed[i].precription.diagnosisSelected[j].display,
														occurrence: 0,
														percentage: 0
													})    
												}
											}
										}
										for (var k = 0; k < this.diagnosisArray.length; k++) {
											var  count = 0
											var totalLengthDiagnosis = 0
											for (var i = 0; i < data.dataDispensed.length; i++) {
												for (var j = 0; j < data.dataDispensed[i].precription.diagnosisSelected.length; j++) {
													if(data.dataDispensed[i].precription.diagnosisSelected[j].display){
														totalLengthDiagnosis++    
													}
													if(this.diagnosisArray[k].value == data.dataDispensed[i].precription.diagnosisSelected[j].display){
														count++
													}
													this.diagnosisArray[k].occurrence = count
													this.diagnosisArray[k].percentage = (count*100)/totalLengthDiagnosis
												}
											}
										}
										this.diagnosisArray.sort((a, b) => parseInt(b.occurrence)-parseInt(a.occurrence));
										/////////////////End top 10 diagnosis ///////////////////
									}
									this.loading = false
								},err=>{
									console.log(err)
								})
}

getData(data){
	if(isNaN(data)){
		return 0
	}else if(data%1!=0){
		return parseInt(data)
		// return data.toFixed(2)
	}else{
		return data
	}
}
getDataCeil(data){
	return Math.ceil(data)
}
getClassMap(data,i){
	if(data.outOfStation){
		return 'out'
	}else{
		if(i%2==0){
			return 'cstm-tr-3'
		}else{
			return 'cstm-tr-3 evn'
		}
	}
}

FindReferralPatients(object){
	this.dataReferralTo = []
	this.dataReferralFrom = []
	let ob = {
		doctorData: this.doctorData,
		object: object
	}
	this.userService.FindReferralPatients(ob).subscribe((data)=>{
		console.log(data)
		if(data.response){
			this.dataReferralTo = data.dataReferralTo
			this.dataReferralFrom = data.dataReferralFrom
		}
	},err=>{
		console.log(err)
	})
}

viewReferralPatients(status){
	this.referralPatientArray = []
	if(status == 1){
		for (var i = 0; i < this.dataReferralTo.length; i++) {
			this.referralPatientArray.push({
				name: this.dataReferralTo[i].name,
				phone: this.dataReferralTo[i].phone,
				note: this.dataReferralTo[i].note,
				date: this.dataReferralTo[i].createdAt,
				patientName: this.dataReferralTo[i].patient_name
			})
		}
	}else{
		for (var i = 0; i < this.dataReferralFrom.length; i++) {
			this.referralPatientArray.push({
				name: this.dataReferralFrom[i].name,
				phone: this.dataReferralFrom[i].phone,
				note: this.dataReferralFrom[i].note,
				date: this.dataReferralFrom[i].createdAt,
				patientName: this.dataReferralFrom[i].patient_name
			})
		}
	}
}
}