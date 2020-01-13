import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import * as $ from 'jquery';
@Component({
	selector: 'app-opd',
	templateUrl: './opd.component.html',
	styleUrls: ['./opd.component.css']
})
export class OpdComponent implements OnInit {
	activatedtab=0
	doctorData
	totalCollection
	totalPrescriptions
	freqPatientPercentage
	newPatientsPrercenatge
	oldPatients
	avgTime
	opdPharmacySales
	opdDiagonsSales
	ipdfinalTotal
	pharmacyConversion
	diagnosisConversion
	ipdConversion
	fromDate = new Date()
	toDate = new Date()
	loading
	//timeana//
	countMonday
	countTuesday
	countWednesday
	countThursday
	countFriday
	countSaturday
	countSunday
	avgCtuPercentage
	totalHours
	totalTimeUtilizedHours
	totalTimeUtilizedMin
	totalMin
	totalOpdCollArray
	totalOpdOrderArray
	datesArray
	newPatientArray
	oldPatientsArray
	pharmacyArray
	diaonosisArray
	ipdArray
	newPatients
	avgTimeArray
	pharmacyTrueArray
	diagnosticsTrueArray
	ipdDateArray
	ipdSalesArray
	ipdConversionArray
	timeArray
	timeDateArray
	newIpdConArray
	opdPhrmacyProfit
	admissionRate
	ipdOccupancy
	totalGeneralBeds
	totalPrivateBeds
	totalSemiPrivateBeds
	doctorArray
	pharmacyProfitArray
	occupencyArray
	admissionArray
	newTotalSalesArray
	opdCollectionTrend
	newPatientTrend
	ctuTrend
	TimePerPatient
	timePerPatientArray
	timePatientTrend
	pharmacyTrends
	diagnosticsTrends
	ipdTrends
	totalOrderTrends
	oldPatientTrend
	///////////////////////Score variables///////////////////
	minusTen
	five
	fifteen
	fifty
	sixty
	seventyFive
	zero
	thirty
	minusThirty
	one
	ten
	twentyFive

	/////////////// score Weighted variables //////////////
	prescWeighted
	collectionWeighted
	ctuWeighted
	avgTimeWeighted
	newPatientWeighted
	oldPatientWeighted
	pharmacySalesWeighted
	pharmacyProfitWeighted
	pharmacyRatioWeighted
	diagnosisSalesWeighted
	diagnosisRationWeighted
	ipdSalesWeighted
	occWeighted
	admissionWeighted
	divideByFour
	divideByTen
	avgTimeScore
	overAllRating
	//////////////////end ///////////////////

	////////
	opdCollectionScore
	newPatientScore
	oldPatientScore
	pharmacyScores
	diagnosticsScores
	totalOrderScores
	ipdScore
	ctuScore
	opdCollectionWeighted
	pharmacyWeighted
	diagnosisWeighted
	ipdWeighted
	PharmacyprofitTrends
	PharmacyconversionTrend
	diagnosticsConversionTrends
	avgTimeTrends
	showDataOnGraph
	showDateOnGraph
	///////////////////////End Score Variables///////////////
	value = ""
	showChartNow:boolean
	showChartOpdNow:boolean

	constructor(private userService: UserService, private toastr: ToastrService,private datePipe: DatePipe) { 
		
	}

	ngOnInit() {
		this.doctorData = JSON.parse(localStorage['doctorDetails'])
		console.log(this.doctorData)

		///////////////////// j query code start
		// $('.li-1').click(function({
			
		// }));
		///////////////////// j query code end
		this.newPatientArray = []
		this.oldPatientsArray = []
		this.minusTen = -10
		this.five = 5
		this.fifteen = 15
		this.fifty = 50
		this.sixty = 60
		this.seventyFive = 75
		this.zero = 0
		this.thirty = 30
		this.minusThirty = -30
		this.one = 1
		this.ten = 10
		this.twentyFive = 25

		/////////////////////////
		this.prescWeighted = 0.5
		this.collectionWeighted = 0.1
		this.ctuWeighted = 0.1
		this.avgTimeWeighted = 0.1
		this.newPatientWeighted = 0.1
		this.oldPatientWeighted = 0.1
		this.pharmacySalesWeighted = 0.5
		this.pharmacyProfitWeighted = 0.25
		this.pharmacyRatioWeighted = 0.25
		this.diagnosisSalesWeighted = 0.7
		this.diagnosisRationWeighted = 0.3
		this.ipdSalesWeighted = 0.5
		this.occWeighted = 0.25
		this.admissionWeighted = 0.25
		this.opdCollectionWeighted = 0
		this.divideByFour = 4
		this.divideByTen = 10
		this.overAllRating = 0
		this.showDataOnGraph = ""
		this.showDateOnGraph = ""
		this.showChartNow = false
		this.showChartOpdNow = false
		this.activatetab(3)
	}
	public lineChartData:Array<any> = [
		{data: [], label: 'Total Sales'},
	];
	public lineChartLabels: Array < any > = [];
	public lineChartLabels2:Array<any> =[]

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

	activatetab(ii){
		this.activatedtab=ii
		var object
		object = {}
		var date = new Date()
		object.doctm_clinic_id = this.doctorData.doctm_clinic_id
		object.end_date = new Date()
		if (ii == 0) {
			object.start_date = date
		} else if (ii == 3) {
			object.start_date = new Date(date.setMonth(date.getMonth() - 1))
		} else if (ii == 4) {
			object.start_date = new Date(date.setMonth(date.getMonth() - 3))
		} else if (ii == 5) {
			object.start_date = new Date(date.setMonth(date.getMonth() - 6))
		} else if (ii == 6) {
			object.start_date = new Date(date.setFullYear(date.getFullYear() - 1))
		} else if (ii == 7) {
			object.start_date = new Date()
			object.maximum = true
		}
		this.fromDate = new Date(object.start_date)
		this.toDate = new Date(object.end_date)
		console.log(object)
		var localFreqArray = []
		this.totalCollection = 0
		this.totalPrescriptions = 0
		this.freqPatientPercentage = 0
		this.newPatientsPrercenatge = 0
		this.oldPatients = 0
		this.avgTime = 0
		this.opdPharmacySales = 0
		this.opdDiagonsSales = 0
		this.ipdfinalTotal = 0
		this.pharmacyConversion = 0
		this.diagnosisConversion = 0
		this.ipdConversion = 0
		this.opdPhrmacyProfit = 0
		this.admissionRate = 0
		this.ipdOccupancy = 0
		this.totalGeneralBeds = 0
		this.totalPrivateBeds = 0
		this.totalSemiPrivateBeds = 0
		this.doctorArray = []
		this.newTotalSalesArray = []
		
		//this.IpdAnalytics(object)
		
		this.timeAnalytics(object)
		//this.MyClinicScore(object)
	}
	MyClinicScore(object){
		var localFreqArray = []
		this.userService.MyClinicScore(object).subscribe((data)=>{
			console.log(data)
			if(data.response){
				var avgTimeTotal = 0
				this.newPatients = 0
				var pharmacyTrue = 0
				var diagnosticsTrue = 0
				var	maxArray = []
				this.totalOpdCollArray = []
				this.totalOpdOrderArray = []
				this.datesArray = []
				this.newPatientArray = []
				this.oldPatientsArray = []
				this.pharmacyArray = []
				this.diaonosisArray = []
				this.ipdArray = []
				this.avgTimeArray = []
				this.pharmacyTrueArray = []
				this.diagnosticsTrueArray = []
				this.pharmacyProfitArray = []
				this.avgTimeScore = 0
				this.pharmacyWeighted = 0
				this.diagnosisWeighted= 0
				this.overAllRating = 0
				this.oldPatientTrend = 0
				//this.newPatients = data.dataRegistrations.length 
				var addTime = 0
				//this.totalPrescriptions = data.data1.length
				for (var i = 0; i < data.data.length; i++) {
					var totalPatientSeconds = 0
					var totalTimeInSeconds = 0
					//var addTime = 0
					for (var j = 0; j < data.data[i].total_sales.length; j++) {
						this.newTotalSalesArray.push(data.data[i].total_sales[j])
						this.totalPrescriptions++
						if(data.data[i].total_sales[j].registration.fee){
							this.totalCollection += parseInt(data.data[i].total_sales[j].registration.fee)
						}
						this.opdPharmacySales += data.data[i].total_sales[j].pharmacy_sales
						this.opdDiagonsSales += data.data[i].total_sales[j].investigation_cost
						this.opdPhrmacyProfit += data.data[i].total_sales[j].pharmacy_sales - data.data[i].total_sales[j].pharmacy_cost
						avgTimeTotal += data.data[i].total_sales[j].registration.hourIntoMin 
					 	totalPatientSeconds = (data.data[i].total_sales[j].precription.minutes * 60 + (data.data[i].total_sales[j].precription.seconds)) / 3600
                        totalTimeInSeconds += data.data[i].total_sales[j].precription.minutes * 60 + (data.data[i].total_sales[j].precription.seconds)
                        addTime += data.data[i].total_sales[j].precription.minutes * 60 + (data.data[i].total_sales[j].precription.seconds)
						maxArray.push(this.datePipe.transform(data.data[i].total_sales[j].createdAt, 'yyyy-MM-dd'))
						if(data.data[i].total_sales[j].registration.lastVisit.status == true){
							this.oldPatients++
						}
						if(data.data[i].total_sales[j].registration.lastVisit.status == false){
							this.newPatients++
						}
						if(data.data[i].total_sales[j].diagnostics){
							diagnosticsTrue++
						}
						if(data.data[i].total_sales[j].pharmacy){
							pharmacyTrue++
						}
					}
				}
				 addTime += totalPatientSeconds
				console.log(this.totalPrescriptions)
				this.avgTime = (addTime/60)/ (this.totalPrescriptions)
				this.freqPatientPercentage = (this.oldPatients*100)/ (this.totalPrescriptions)
				this.newPatientsPrercenatge = (this.newPatients*100)/(this.totalPrescriptions)
				this.pharmacyConversion = (pharmacyTrue*100)/this.totalPrescriptions
				this.diagnosisConversion = (diagnosticsTrue*100)/this.totalPrescriptions
				/////////////////////////////New and Old patient Unique Array////////////////////
				// var localUniqueArray = []
				// for (var i = 0; i < data.data.length; i++) {
				// 	var boolean = false
				// 	for (var j = 0; j < data.data[i].total_sales.length; j++) {
				// 		for (var a = 0; a < localUniqueArray.length; a++) {
				// 			if(localUniqueArray[a].name == data.data[i].total_sales.registration.pateintName &&
				// 				localUniqueArray[a].name == data.data[i].total_sales.registration.pateintPhone){
				// 				boolean = true
				// 				break;
				// 			}
				// 		}
				// 		if(boolean == false){
				// 			if(data.data[i].total_sales.registration.lastVisit.status==false){
				// 				this.newPatients++
				// 			}else{
				// 				this.oldPatients++
				// 			}
				// 		}
				// 	}
				// }

				/////////////////////////////End New and Old patient Unique Array///////////////
				var newMaxArray = []
				newMaxArray.push(maxArray[0])
				for (var i = 0; i < maxArray.length; i++) {
					var boolean = false
					for (var j = 0; j < newMaxArray.length; j++) {
						if (maxArray[i] == newMaxArray[j]) {
							boolean = true
							break
						}
					}
					if (boolean == false) {
						newMaxArray.push(maxArray[i])
					}
				}
				for (var i = 0; i < newMaxArray.length; i++) {
					var total_prep_amount: number = 0
					var total_prep_orders: number = 0
					var new_patients: number = 0
					var old_patient: number = 0
					var pharmacy_sales:number = 0
					var dignostics_sales:number = 0
					var avg_time:number = 0
					var pharmacy_true:number = 0
					var diagnostics_true:number = 0
					var pharmacy_profit:number = 0
					for (var j = 0; j < data.data.length; j++) {
						var totalPatientSeconds = 0
						var totalTimeInSeconds = 0
						var addTime = 0
						for (var k = 0; k < data.data[j].total_sales.length; k++) {
							if (newMaxArray[i] == this.datePipe.transform(data.data[j].total_sales[k].createdAt, 'yyyy-MM-dd')) {
								//avg_time += data.data[j].total_sales[k].registration.hourIntoMin 
								totalPatientSeconds = (data.data[j].total_sales[k].precription.minutes * 60 + (data.data[j].total_sales[k].precription.seconds)) / 3600
		                        totalTimeInSeconds += data.data[j].total_sales[k].precription.minutes * 60 + (data.data[j].total_sales[k].precription.seconds)
		                        addTime += data.data[j].total_sales[k].precription.minutes * 60 + (data.data[j].total_sales[k].precription.seconds)
								//total_prep_amount += data.data[j].total_sales[k].pharmacy_sales+data.data[j].total_sales[k].investigation_cost
								if(data.data[j].total_sales[k].registration.fee){
									total_prep_amount += parseInt(data.data[j].total_sales[k].registration.fee)
								}
								total_prep_orders++
								if(data.data[j].total_sales[k].registration.lastVisit.status == true){
									old_patient++
								}else{
									new_patients++
								}
								if(data.data[j].total_sales[k].pharmacy == true){
									pharmacy_sales += data.data[j].total_sales[k].pharmacy_sales
									pharmacy_profit += data.data[j].total_sales[k].pharmacy_sales-data.data[j].total_sales[k].pharmacy_cost
									pharmacy_true++
								}
								if(data.data[j].total_sales[k].diagnostics == true){
									dignostics_sales += data.data[j].total_sales[k].investigation_cost
									diagnostics_true++
								}
							}
						}
					}
					this.totalOpdCollArray.push(total_prep_amount)
					this.totalOpdOrderArray.push(total_prep_orders)
					this.newPatientArray.push(new_patients)
					this.oldPatientsArray.push(old_patient)
					this.pharmacyArray.push(pharmacy_sales)
					this.diaonosisArray.push(dignostics_sales)
					this.datesArray.push(newMaxArray[i])
					this.pharmacyProfitArray.push(pharmacy_profit)
					this.avgTimeArray.push(totalTimeInSeconds)
					this.pharmacyTrueArray.push(this.getData((pharmacy_true*100)/this.totalPrescriptions))
					this.diagnosticsTrueArray.push(this.getData((diagnostics_true*100)/this.totalPrescriptions))
				}
				//////////////chart/////////////
				this.lineChartData = [{
					data: this.totalOpdCollArray,
					label: 'Total Sales'
				}];
				var newDateArray11 =[]
				this.lineChartLabels = this.datesArray
				for (var i = 0; i < this.datesArray.length; i++) {
					newDateArray11.push(this.datesArray[i])
				}
				this.opdCollectionTrend = this.getTrends(this.totalOpdCollArray)
				this.newPatientTrend = this.getTrends(this.newPatientArray)
				this.oldPatientTrend = this.getTrends(this.oldPatientsArray)
				this.pharmacyTrends = this.getTrends(this.pharmacyArray)
				this.diagnosticsTrends = this.getTrends(this.diaonosisArray)
				this.totalOrderTrends = this.getTrends(this.totalOpdOrderArray)			
				this.PharmacyprofitTrends  = this.getTrends(this.pharmacyProfitArray)
				this.PharmacyconversionTrend = this.getTrends(this.pharmacyTrueArray)
				this.diagnosticsConversionTrends = this.getTrends(this.diagnosticsTrueArray)
				this.avgTimeTrends = this.getTrends(this.avgTimeArray)
				console.log(this.newPatientArray)
				if(this.oldPatientTrend == Infinity){
					this.oldPatientTrend = 1/this.oldPatientTrend
				}
				//this.getTrends(this.totalOpdCollArray)
				this.sortSales(newDateArray11, this.totalOpdCollArray)
				this.sortOrder(newDateArray11, this.totalOpdOrderArray)
				this.sortNewPatient(newDateArray11, this.newPatientArray)
				this.sortOldPatient(newDateArray11, this.oldPatientsArray)
				this.sortPharmacy(newDateArray11, this.pharmacyArray)
				this.sortDiagnosis(newDateArray11, this.diaonosisArray)
				this.sortTimeArray(newDateArray11, this.avgTimeArray)
				this.sortpharmacyTrueArray(newDateArray11, this.pharmacyTrueArray)
				this.sortdiagnosticsTrueArray(newDateArray11, this.diagnosticsTrueArray)
				this.sortPharmacyProfitArray(newDateArray11, this.pharmacyProfitArray)

				/////////end chart///////////
				////////////////////Calculate Score///////////////////
				var profitscore = 0
				var PharmacyconversionScore = 0
				var diagnosticsConversionScore = 0
				profitscore = this.getScore(this.PharmacyprofitTrends, this.five, this.five, this.ten, this.ten, this.twentyFive, this.twentyFive)
				PharmacyconversionScore = this.getScore(this.PharmacyconversionTrend, this.fifty, this.fifty, this.sixty, this.sixty, this.seventyFive, this.seventyFive)
				diagnosticsConversionScore = this.getScore(this.diagnosticsConversionTrends, this.fifty, this.fifty, this.sixty, this.sixty, this.seventyFive, this.seventyFive)
				this.avgTimeScore = this.getScore(this.avgTimeTrends, this.thirty, this.zero, this.thirty, this.minusThirty, this.zero, this.minusThirty)
				this.opdCollectionScore = this.getScore(this.opdCollectionTrend, this.minusTen, this.minusTen, this.five, this.five, this.fifteen, this.fifteen)
				this.newPatientScore = this.getScore(this.newPatientTrend, this.one, this.one, this.five, this.five, this.ten, this.ten)
				this.oldPatientScore = this.getScore(this.oldPatientTrend, this.ten, this.ten, this.thirty, this.thirty, this.fifty, this.fifty)
				this.pharmacyScores = this.getScore(this.pharmacyTrends, this.minusTen, this.minusTen, this.five, this.five, this.fifteen, this.fifteen)
				this.diagnosticsScores = this.getScore(this.diagnosticsTrends, this.minusTen, this.minusTen, this.five, this.five, this.fifteen, this.fifteen)
				this.totalOrderScores = this.getScore(this.totalOrderTrends, this.minusTen, this.minusTen, this.five, this.five, this.fifteen, this.fifteen)

				////////////////////Over all rating/////////
				this.overAllRating  = 0
				this.opdCollectionWeighted = this.getData((((this.totalOrderScores*this.prescWeighted)+(this.opdCollectionScore*this.collectionWeighted)+
					(this.newPatientScore*this.newPatientWeighted)+(this.oldPatientScore*this.oldPatientWeighted)+(this.ctuScore*this.ctuWeighted)+
					(this.avgTimeScore*this.avgTimeWeighted))*this.divideByFour)/this.divideByTen)	

				this.pharmacyWeighted = this.getData(((this.pharmacyScores*this.pharmacySalesWeighted)+(profitscore*this.pharmacyProfitWeighted)+
					(PharmacyconversionScore*this.pharmacyRatioWeighted)*this.divideByFour)/this.divideByTen)

				this.diagnosisWeighted = this.getData(((this.diagnosticsScores*this.diagnosisSalesWeighted)+(diagnosticsConversionScore+this.diagnosisRationWeighted)*
					this.divideByFour)/this.divideByTen)

				// console.log(parseInt(this.opdCollectionWeighted + this.pharmacyWeighted + this.diagnosisWeighted + this.ipdWeighted))
				// console.log(parseFloat(this.opdCollectionWeighted) + parseFloat(this.pharmacyWeighted) + parseFloat(this.diagnosisWeighted) + parseFloat(this.ipdWeighted))
				// console.log(this.ipdWeighted/4)
				this.overAllRating = this.getData((parseFloat(this.opdCollectionWeighted)+parseFloat(this.pharmacyWeighted)+parseFloat(this.diagnosisWeighted)+parseFloat(this.ipdWeighted))/this.divideByFour)

				/////////////////////End Score //////////////////////
			}
			this.loading = false
		},err=>{	
			console.log(err)
		})

	}
	IpdAnalytics(object){
		var maxArray1 = []
		this.ipdDateArray = []
		this.ipdSalesArray = []
		this.ipdConversionArray = []
		this.newIpdConArray = []
		this.occupencyArray = []
		this.admissionArray = []
		var patientAdmitted = 0
		//object.smart_ipd_id = this.doctorData.smart_ipd_id
		this.ipdfinalTotal = 0
		var totalIpdLength = 0
		var dispanseLenght = 0
		this.ipdScore = 0
		this.ipdWeighted = 0
		this.userService.IpdAnalytics(object).subscribe((result)=>{
			console.log(result)
			
			dispanseLenght = result.dataDispensed.length
			this.doctorArray = result.dataDoctors
			for (var i = 0; i < result.data.length; i++) {
				for (var j = 0; j < result.data[i].dataIpd.length; j++) {
					patientAdmitted++
					totalIpdLength += result.data[i].dataIpd.length
					maxArray1.push(this.datePipe.transform(result.data[i].dataIpd[j].createdAt, 'yyyy/MM/dd'))
					if(result.data[i].dataIpd[j].total_bill){
						this.ipdfinalTotal += result.data[i].dataIpd[j].total_bill	
					}
				}
			}
			for (var i = 0; i < this.doctorArray.length; i++) {
				if(this.doctorArray[i].type_of_doctor=="admin_doctor"){
					this.totalGeneralBeds+=this.doctorArray[i].clinic_services.general_beds
					this.totalPrivateBeds+= this.doctorArray[i].clinic_services.private_beds
					this.totalSemiPrivateBeds+= this.doctorArray[i].clinic_services.semi_private_beds
					break;
				}
			}
			this.ipdOccupancy = (patientAdmitted*100)/(this.totalGeneralBeds + this.totalPrivateBeds + this.totalSemiPrivateBeds)
			this.ipdConversion = (totalIpdLength*100)/result.dataDispensed.length
			this.admissionRate = (patientAdmitted*100)/dispanseLenght
			var newMaxArray1 = []
				newMaxArray1.push(maxArray1[0])
				for (var i = 0; i < maxArray1.length; i++) {
					var boolean = false
					for (var j = 0; j < newMaxArray1.length; j++) {
						if (maxArray1[i] == newMaxArray1[j]) {
							boolean = true
							break
						}
					}
					if (boolean == false) {
						newMaxArray1.push(maxArray1[i])
					}
				}
				for (var i = 0; i < newMaxArray1.length; i++) {
					var total_ipd_amount:number = 0
					var ipd_conversion:number = 0
					var dispense_patient:number = 0
					var patient_admitted:number = 0
					for (var j = 0; j < result.data.length; j++) {
						for (var k = 0; k < result.data[j].dataIpd.length; k++) {
							if (newMaxArray1[i] == this.datePipe.transform(result.data[j].dataIpd[k].createdAt, 'yyyy/MM/dd')) {
								dispense_patient++
								patient_admitted++
								if(result.data[j].dataIpd[k].total_bill	){
									total_ipd_amount+=result.data[j].dataIpd[k].total_bill	
								}

							}
						}
					}
					this.admissionArray.push(this.getData((patient_admitted*100)/dispanseLenght))
					this.occupencyArray.push(this.getData((patient_admitted*100)/(this.totalGeneralBeds + this.totalPrivateBeds + this.totalSemiPrivateBeds)))
					this.ipdDateArray.push(newMaxArray1[i])
					this.ipdSalesArray.push(total_ipd_amount)
					this.ipdConversionArray.push(this.getData((dispense_patient*100)/dispanseLenght))
				}
				var testDateArray = []
				var testDateArray2 =[]
				for (var i = 0; i < this.ipdDateArray.length; i++) {
					this.newIpdConArray.push(this.datePipe.transform(this.ipdDateArray[i],'dd-MM-yy'))
					testDateArray.push(this.datePipe.transform(this.ipdDateArray[i],'dd-MM-yy'))
					testDateArray2.push(this.datePipe.transform(this.ipdDateArray[i],'dd-MM-yy'))
				}
				//console.log(this.ipdSalesArray)	
				var occRatioTrends
				var admissionTrends
				this.ipdTrends = this.getTrends(this.ipdSalesArray)
				occRatioTrends = this.getTrends(this.newIpdConArray)
				admissionTrends = this.getTrends(this.admissionArray)

				///////////// score///////////////////
				var occRatioScore = 0
				var admissionScore = 0
				occRatioScore = this.getScore(occRatioTrends, this.minusTen, this.minusTen, this.five, this.five, this.fifteen, this.fifteen)
				admissionScore = this.getScore(admissionTrends, this.one, this.one, this.five, this.five, this.ten, this.ten)
				this.ipdScore = this.getScore(this.ipdTrends, this.minusTen, this.minusTen, this.five, this.five, this.fifteen, this.fifteen)
				////////////end Score////////////////
				this.sortAdmissionArray(testDateArray, this.admissionArray)
				this.sortIpdSalesArray(this.ipdDateArray, this.ipdSalesArray)
				this.sortIpdConversionArray(this.newIpdConArray, this.ipdConversionArray)
				this.sortOccupencyArray(testDateArray2, this.occupencyArray)

				///////////////////////Score////
				this.ipdWeighted = this.getData(((this.ipdScore*this.ipdSalesWeighted)+(occRatioTrends*this.occWeighted)+
					(admissionScore*this.admissionWeighted)*this.divideByFour)/this.divideByTen)
				///////////////////////end score////////
		},err=>{
			console.log(err)
		})
	}
	timeAnalytics(object){
		this.countMonday = 0
		this.countTuesday = 0
		this.countWednesday = 0
		this.countThursday = 0
		this.countFriday = 0
		this.countSaturday = 0
		this.countSunday = 0
		var localDateArray = []
		this.avgCtuPercentage = 0
		this.totalHours = 0
		this.totalTimeUtilizedHours = 0
		this.totalTimeUtilizedMin = 0
		this.totalMin = 0
		var totalPatients = 0
		this.timeArray = []
		this.timeDateArray = []
		this.TimePerPatient = 0
		this.timePerPatientArray = []
		this.timePatientTrend = 0
		this.ctuScore = 0
		var dispense_patient = 0
		//this.loadingMyClinicScore = true
		this.loading = true
		this.userService.TimeAnalyticsClinic(object).subscribe((result)=>{
			console.log(result)
			
			if (result.response) {
				
				for (var i = 0; i < result.dataTotalPatientsDischarged.length; i++) {
					dispense_patient += result.dataTotalPatientsDischarged[i].data.length
				}
				console.log(dispense_patient)
				if (result.totalTimeInSeconds.length > 0) {
					this.totalTimeUtilizedHours = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) / 3600)
					this.totalTimeUtilizedMin = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) % 3600)
					this.totalTimeUtilizedMin = Math.floor(this.totalTimeUtilizedMin / 60)
				}
				var avgTotalPatientSeconds = 0
				var addTime = 0
				var totalTimeInSeconds = 0
				if (result.dataTotalPatientsDischarged.length > 0) {
					 for (var i = 0; i < result.dataTotalPatientsDischarged.length; i++) {
                        var totalPatientSeconds
                        totalPatientSeconds = 0
                        this.timeDateArray.push(this.datePipe.transform(result.dataTotalPatientsDischarged[i].data[0].createAt, 'yyyy-MM-dd'))
                        for (var j = 0; j < result.dataTotalPatientsDischarged[i].data.length; j++) {
                            totalPatients++
                            totalPatientSeconds = (result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)) / 3600
                            totalTimeInSeconds += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)
                            addTime += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)
                        }
                        avgTotalPatientSeconds = (totalPatientSeconds / result.dataTotalPatientsDischarged[i].data.length) * 60
                        addTime += totalPatientSeconds
                        this.timeArray.push(totalPatientSeconds.toFixed(3))
                        this.timePerPatientArray.push(totalTimeInSeconds/60)
                    }
					///////////// hours logic /////////////////////////////
					var daysOfYear = [];
					for (var d = this.fromDate; d <= this.toDate; d.setDate(d.getDate() + 1)) {
						daysOfYear.push(new Date(d));
					}
					for (var i = 0; i < daysOfYear.length; i++) {
						daysOfYear[i]
						localDateArray.push(this.datePipe.transform(daysOfYear[i], 'EEEE'))
					}
					for (var i = 0; i < localDateArray.length; i++) {
						if (localDateArray[i] == "Monday") {
							this.countMonday++
						} else if (localDateArray[i] == "Tuesday") {
							this.countTuesday++
						} else if (localDateArray[i] == "Wednesday") {
							this.countWednesday++
						} else if (localDateArray[i] == "Thursday") {
							this.countThursday++
						} else if (localDateArray[i] == "Friday") {
							this.countFriday++
						} else if (localDateArray[i] == "Saturday") {
							this.countSaturday++
						} else if (localDateArray[i] == "Sunday") {
							this.countSunday++
						}
					}
					var total_diff: number = 0
					for (var j = 0; j < this.doctorData.consultation_schedule.length; j++) {
						var min_diff: number = 0
						var hour_diff: number = 0
						for (var k = 0; k < this.doctorData.consultation_schedule[j].shifts.length; k++) {
							min_diff += parseInt(this.doctorData.consultation_schedule[j].shifts[k].toTime.minute) - parseInt(this.doctorData.consultation_schedule[j].shifts[k].fromTime.minute)
							hour_diff += parseInt(this.doctorData.consultation_schedule[j].shifts[k].toTime.hour) - parseInt(this.doctorData.consultation_schedule[j].shifts[k].fromTime.hour)
							total_diff = min_diff + (hour_diff * 60)
						}
						if (this.doctorData.consultation_schedule[j].Monday == true) {
							this.totalMin += (this.countMonday * total_diff)
						}
						if (this.doctorData.consultation_schedule[j].Tuesday == true) {
							this.totalMin += (this.countTuesday * total_diff)
						}
						if (this.doctorData.consultation_schedule[j].Wednesday == true) {
							this.totalMin += (this.countWednesday * total_diff)
						}
						if (this.doctorData.consultation_schedule[j].Thursday == true) {
							this.totalMin += (this.countThursday * total_diff)
						}
						if (this.doctorData.consultation_schedule[j].Friday == true) {
							this.totalMin += (this.countFriday * total_diff)
						}
						if (this.doctorData.consultation_schedule[j].Saturday == true) {
							this.totalMin += (this.countSaturday * total_diff)
						}
						if (this.doctorData.consultation_schedule[j].Sunday == true) {
							this.totalMin += (this.countSunday * total_diff)
						}
					}
					this.totalHours = this.totalMin / 60
					this.totalHours = Math.trunc(this.totalHours)
					this.totalMin = this.totalMin % 60
	                var timeperpat = 0
	                console.log(totalTimeInSeconds,dispense_patient)
					timeperpat = totalTimeInSeconds/dispense_patient
					console.log(timeperpat)
					var min = parseInt(this.getData(this.getData(timeperpat)/60))
	                var sec = parseInt(this.getData(this.getData(timeperpat)%60))
	                this.TimePerPatient = min +":"+sec
					///////////////////////////////////////////////////////
				}
				console.log(this.timeArray)
				this.avgCtuPercentage = (addTime * 100) / (this.totalHours*3600)
				this.timePatientTrend = this.getTrends(this.timePerPatientArray)
				this.ctuTrend = this.getTrends(this.timeArray)
				this.ctuScore = this.getScore(this.ctuTrend, this.fifty, this.fifty, this.sixty, this.sixty, this.seventyFive, this.seventyFive)
				console.log(this.ctuScore)
                this.timeSort(this.timeDateArray, this.timeArray);
                
			}
			// this.loadingTwo = true
			this.IpdAnalytics(object)
			// this.loadingTwo =false
			this.MyClinicScore(object)
			
		},err=>{
			console.log(err)
		})
	}
	getChart(id){
		if(id==1){
			this.lineChartData = [{
				data: this.totalOpdOrderArray,
				label: 'Total Prescriptions'
			}];
			console.log(this.lineChartLabels)
			this.lineChartLabels = this.datesArray
			this.showDataOnGraph ="Prescriptions" 
			this.showDateOnGraph = this.datePipe.transform(new Date(this.fromDate), 'dd/MM/yyyy'), this.datePipe.transform(new Date(this.toDate), 'dd/MM/yyyy')
		}
		else if(id==2){
			this.lineChartData = [{
				data: this.totalOpdCollArray,
				label: 'Total Sales'
			}];
		
			this.lineChartLabels = this.datesArray
			this.showDataOnGraph ="Sales" 
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==3){
			this.lineChartData = [{
				data: this.oldPatientsArray,
				label: 'Frequent Patients'
			}];
		
			this.lineChartLabels = this.datesArray
			this.showDataOnGraph ="Frequent Patients"
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==4){
			this.lineChartData = [{
				data: this.newPatientArray,
				label: 'New Patients'
			}];
		
			this.lineChartLabels = this.datesArray
			this.showDataOnGraph ="New Patients"
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==5){
			this.lineChartData = [{
				data: this.pharmacyArray,
				label: 'Total Sales'
			}];
		
			this.lineChartLabels = this.datesArray
			this.showDataOnGraph ="Sales"
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==6){
			this.lineChartData = [{
				data: this.diaonosisArray,
				label: 'Total Sales'
			}];
		
			this.lineChartLabels = this.datesArray
			this.showDataOnGraph ="Sales"
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==7){
			this.lineChartData = [{
				data: this.avgTimeArray,
				label: 'Avg CTU Time'
			}];
		
			this.lineChartLabels = this.datesArray
			this.showDataOnGraph ="Avg CTU Time"
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==8){
			this.lineChartData = [{
				data: this.pharmacyTrueArray,
				label: 'Pharmacy Conversion'
			}];
		
			this.lineChartLabels = this.datesArray
			this.showDataOnGraph ="Conversion"
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==9){
			this.lineChartData = [{
				data: this.diagnosticsTrueArray,
				label: 'Diagnostics Conversion'
			}];
		
			this.lineChartLabels = this.datesArray
			this.showDataOnGraph ="Conversion"
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==10){
			this.lineChartData = [{
				data: this.ipdSalesArray,
				label: 'Total Sales'
			}];
			var newDateArrayIpd = []
			for (var i = 0; i < this.ipdDateArray.length; i++) {
				newDateArrayIpd.push(this.datePipe.transform(this.ipdDateArray[i],'dd-MM-yy'))
			}
			this.lineChartLabels2 = newDateArrayIpd
			this.showDataOnGraph ="Sales"
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==11){
			this.lineChartData = [{
				data: this.ipdConversionArray,
				label: 'Total Conversion'
			}]
			this.lineChartLabels2 = this.newIpdConArray
			this.showDataOnGraph ="Conversion"
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==12){
			this.lineChartData = [{
                data: this.timeArray,
                label: 'Total Hours'
            }];
            var newDateArrayIpd = []
            for (var i = 0; i < this.timeDateArray.length; i++) {
				newDateArrayIpd.push(this.datePipe.transform(this.timeDateArray[i],'dd-MM-yy'))
			}
			this.lineChartLabels = newDateArrayIpd		
			this.showDataOnGraph ="Hours"	
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==13){
			this.lineChartData = [{
				data: this.pharmacyProfitArray,
				label: 'Pharmacy Profit'
			}];
		
			this.lineChartLabels = this.datesArray
			this.showDataOnGraph ="Profit"
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==14){
			this.lineChartData = [{
				data: this.admissionArray,
				label: 'Admission Rate'
			}];
		
			// var newDateArrayIpd = []
			// for (var i = 0; i < this.ipdDateArray.length; i++) {
			// 	newDateArrayIpd.push(this.datePipe.transform(this.ipdDateArray[i],'dd-MM-yy'))
			// }
			this.lineChartLabels2 = this.newIpdConArray
			this.showDataOnGraph ="Admission Rate"
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
		else if(id==15){
			this.lineChartData = [{
				data: this.occupencyArray,
				label: 'Total Occupency'
			}]
			this.lineChartLabels2 = this.newIpdConArray
			this.showDataOnGraph ="Occupency"
			this.showDateOnGraph = this.datePipe.transform(this.fromDate, 'dd/MM/yyyy'), this.datePipe.transform(this.toDate, 'dd/MM/yyyy')
		}
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
		}else if(data%1!=0){
			return data.toFixed(2)
		}else{
			return data
		}
	}
	getClassMap(data, i) {
		if (data.outOfStation) {
			return 'out'
		} else {
			if (i % 2 == 0) {
				return 'cstm-tr-3'
			} else {
				return 'cstm-tr-3 evn'
			}
		}
	}
	sortSales(a, b){
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
		// }  
		var newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels = newDateArray
	}
	sortOrder(a, b){
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
		// }  
		var newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels = newDateArray
	}
	sortNewPatient(a,b){

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
		// }  
		var newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels = newDateArray
	}
	sortOldPatient(a,b){

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
		// }  
		var newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels = newDateArray
	}
	sortPharmacy(a,b){

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
		// }  
		var newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels = newDateArray
	}
	sortDiagnosis(a,b){

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
		// }  
		var newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels = newDateArray
	}
	sortAvgTime(a,b){

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
		// }  
		var newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels = newDateArray
	}
	sortTimeArray(a,b){

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
		// }  
		var newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels = newDateArray
	}
	sortpharmacyTrueArray(a,b){

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
		// }  
		var newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels = newDateArray
	}
	sortdiagnosticsTrueArray(a,b){

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
		// }  
		var newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels = newDateArray
	}
	sortIpdSalesArray(a,b){

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
		// }  
		var newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels2 = newDateArray
	}
	sortIpdConversionArray(a,b){

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
		// }  
		// var newDateArray = []
		// for (var i = 0; i < a.length; i++) {
		// 	newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		// }
		this.lineChartLabels2 = a
	}
	timeSort(a,b){
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
		// }  
		var newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels = newDateArray
	}
	sortPharmacyProfitArray(a,b){
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
		// }  
		let newDateArray = []
		for (var i = 0; i < a.length; i++) {
			newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		}
		this.lineChartLabels = newDateArray
	}
	sortAdmissionArray(a,b){
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
		this.lineChartLabels = a
	}
	sortOccupencyArray(a,b){
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
		// }  
		// var newDateArray = []
		// for (var i = 0; i < a.length; i++) {
		// 	newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yy'))
		// }
		 this.lineChartLabels = a
	}


	tabClicked(){
		$('.tabs-new-sum li').removeClass('active');
		$('.li-2').addClass('active');
	}
	tabClicked2(){
		$('.tabs-new-sum li').removeClass('active');
		$('.li-3').addClass('active');
	}
	tabClicked3(){
		$('.tabs-new-sum li').removeClass('active');
		$('.li-4').addClass('active');
	}
	getTrends(totalOpdCollArray){
		var X = 0
		var Y = 0
		var xMinusX = []
		var yMinusY = []
		var xMinusXSquare = []
		var xMinusXIntoyMinusY = []
		var xMinusXIntoyMinusYPlus = 0
		var xMinusXSquarePlus = 0
		var m:number = 0
		var b:number = 0
		var Y1:number = 0
		var Yn:number = 0
		var percentageChange:number = 0
		//totalOpdCollArray = [34,30,29,15,25,30,33,12,25,20,13,19,15,14,6,6,3,10,6,6,9,12,5]
		var arr = []
		for (var i = 0; i < totalOpdCollArray.length; i++) {
			arr.push(parseFloat(totalOpdCollArray[i]))
		}
		for (var i = 0; i < arr.length; i++) {
			X += i+1
			Y += arr[i]
		}
		X = X/arr.length
		Y = Y/arr.length
		for (var i = 0; i < arr.length; i++) {
			xMinusX.push((i+1)-(X))
			yMinusY.push(arr[i]-Y)
		}
		for (var i = 0; i < xMinusX.length; i++) {
			xMinusXSquare.push(xMinusX[i]*xMinusX[i])
			xMinusXIntoyMinusY.push(xMinusX[i]*yMinusY[i])
		}
		for (var i = 0; i < xMinusXSquare.length; i++) {
			xMinusXIntoyMinusYPlus += xMinusXIntoyMinusY[i]
			xMinusXSquarePlus += xMinusXSquare[i]
		}
		m = parseFloat(this.getData(xMinusXIntoyMinusYPlus/xMinusXSquarePlus))

		b = Y-(m*X)
		Y1 = (m*1)+b
		Yn = (m*arr.length)+b
		percentageChange = parseFloat(this.getData(((Yn-Y1)*100)/Y1))
		//console.log( arr.length,m,b,Y1,Yn, percentageChange)
		return percentageChange
	}
	getScore(putScore, one, two, three, four, five, six){
		var score = 0
		if(putScore<=one){
			score = 1
		}else if(one<=two && two>=three){
			score = 2
		}else if(three<=four && four>=five){
			score = 3
		}else if(five>=six){
			score = 4
		}
		//console.log(score)
		return score
	}
	getNotes(note){
		if(note<=3){
			this.value = ""
			return "POOR"
		}
		else if(note<=5){
			this.value = "avr"
			return "AVERAGE"
		}else if(note<=8){
			this.value = "good"
			return "GOOD"
		}else if(note<9){
			this.value = "exe"
			return "EXCELLENT"
		}

	}
	showChart(){
		this.showChartNow = true
	}
	showChartOpd(){
		this.showChartOpdNow = true
	}
	

}
