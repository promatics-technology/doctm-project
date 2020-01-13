import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
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
	loadingMyClinicScore : boolean
	loadingIpdAnalytics : boolean
	locadingTimeAnlaytics : boolean
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
	constructor(private userService: UserService, private toastr: ToastrService,private datePipe: DatePipe) { 
		
	}

	ngOnInit() {
		this.doctorData = JSON.parse(localStorage['doctorDetails'])
		console.log(this.doctorData)
		this.activatetab(3)
	}
	public lineChartData:Array<any> = [
		{data: [], label: 'Total Sales'},
	];
	public lineChartLabels:Array<any> =[]
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
		this.loadingMyClinicScore = true
		this.loadingIpdAnalytics = true
		this.locadingTimeAnlaytics = true
		this.IpdAnalytics(object)
		this.timeAnalytics(object)
		this.MyClinicScore(object)
		
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
				//this.newPatients = data.dataRegistrations.length 
				for (var i = 0; i < data.data.length; i++) {
					for (var j = 0; j < data.data[i].total_sales.length; j++) {
						this.totalPrescriptions++
						this.totalCollection += parseInt(data.data[i].total_sales[j].registration.fee)
						this.opdPharmacySales += data.data[i].total_sales[j].pharmacy_sales
						this.opdDiagonsSales += data.data[i].total_sales[j].investigation_cost
						avgTimeTotal += data.data[i].total_sales[j].registration.hourIntoMin 
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
				this.avgTime = (avgTimeTotal/60)/(this.totalPrescriptions)
				this.freqPatientPercentage = (this.oldPatients*100)/ (this.totalPrescriptions)
				this.newPatientsPrercenatge = (this.newPatients*100)/(this.totalPrescriptions)
				this.pharmacyConversion = (pharmacyTrue*100)/this.totalPrescriptions
				this.diagnosisConversion = (diagnosticsTrue*100)/this.totalPrescriptions

				/////////////Trends//////////////////
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
					for (var j = 0; j < data.data.length; j++) {
						for (var k = 0; k < data.data[j].total_sales.length; k++) {
							if (newMaxArray[i] == this.datePipe.transform(data.data[j].total_sales[k].createdAt, 'yyyy-MM-dd')) {
								avg_time += data.data[j].total_sales[k].registration.hourIntoMin 
								total_prep_amount += data.data[j].total_sales[k].pharmacy_sales+data.data[j].total_sales[k].investigation_cost
								total_prep_orders++
								if(data.data[j].total_sales[k].registration.lastVisit.status == true){
									old_patient++
								}else{
									new_patients++
								}
								if(data.data[j].total_sales[k].pharmacy == true){
									pharmacy_sales += data.data[j].total_sales[k].pharmacy_sales
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
					this.avgTimeArray.push(this.getData((avg_time/60)/(this.totalPrescriptions)))
					this.pharmacyTrueArray.push(this.getData((pharmacy_true*100)/this.totalPrescriptions))
					this.diagnosticsTrueArray.push(this.getData((diagnostics_true*100)/this.totalPrescriptions))
				}
				////////chart/////////////
				this.lineChartData = [{
					data: this.totalOpdCollArray,
					label: 'Total Sales'
				}];
				var newDateArray11 =[]
				//this.lineChartLabels = this.datesArray
				for (var i = 0; i < this.datesArray.length; i++) {
					newDateArray11.push(this.datesArray[i])
				}
				this.sortSales(newDateArray11, this.totalOpdCollArray)
				this.sortOrder(newDateArray11, this.totalOpdOrderArray)
				this.sortNewPatient(newDateArray11, this.newPatientArray)
				this.sortOldPatient(newDateArray11, this.oldPatientsArray)
				this.sortPharmacy(newDateArray11, this.pharmacyArray)
				this.sortDiagnosis(newDateArray11, this.diaonosisArray)
				this.sortAvgTime(newDateArray11, this.avgTimeArray)
				this.sortTimeArray(newDateArray11, this.avgTimeArray)
				this.sortpharmacyTrueArray(newDateArray11, this.pharmacyTrueArray)
				this.sortdiagnosticsTrueArray(newDateArray11, this.diagnosticsTrueArray)
				/////////end chart///////////

				/////////End Trends//////////////////
			}
			this.loadingMyClinicScore = false
		},err=>{	
			console.log(err)
		})

	}
	
	IpdAnalytics(object){
		console.log(object)
		var maxArray1 = []
		this.ipdDateArray = []
		this.ipdSalesArray = []
		this.ipdConversionArray = []
		this.newIpdConArray = []
		//object.smart_ipd_id = this.doctorData.smart_ipd_id
		this.ipdfinalTotal = 0
		var totalIpdLength = 0
		var dispanseLenght = 0
		this.userService.IpdAnalytics(object).subscribe((result)=>{
			console.log(result)
			dispanseLenght = result.dataDispensed.length
			for (var i = 0; i < result.data.length; i++) {
				for (var j = 0; j < result.data[i].dataIpd.length; j++) {
					totalIpdLength += result.data[i].dataIpd.length
					maxArray1.push(this.datePipe.transform(result.data[i].dataIpd[j].createdAt, 'yyyy/MM/dd'))
					if(result.data[i].dataIpd[j].total_bill){
						this.ipdfinalTotal += result.data[i].dataIpd[j].total_bill	
					}
				}
			}
			this.ipdConversion = (totalIpdLength*100)/result.dataDispensed.length
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
					for (var j = 0; j < result.data.length; j++) {
						for (var k = 0; k < result.data[j].dataIpd.length; k++) {
							if (newMaxArray1[i] == this.datePipe.transform(result.data[j].dataIpd[k].createdAt, 'yyyy/MM/dd')) {
								dispense_patient++
								if(result.data[j].dataIpd[k].total_bill	){
									total_ipd_amount+=result.data[j].dataIpd[k].total_bill	
								}
							}
						}
					}
					this.ipdDateArray.push(newMaxArray1[i])
					this.ipdSalesArray.push(total_ipd_amount)
					this.ipdConversionArray.push(this.getData((dispense_patient*100)/dispanseLenght))
				}
				console.log(this.ipdDateArray)
				console.log(this.ipdConversionArray)

				for (var i = 0; i < this.ipdDateArray.length; i++) {
					this.newIpdConArray.push(this.datePipe.transform(this.ipdDateArray[i],'dd-MM-yy'))
				}
				this.sortIpdSalesArray(this.ipdDateArray, this.ipdSalesArray)
				this.sortIpdConversionArray(this.newIpdConArray, this.ipdConversionArray)
			this.loadingIpdAnalytics=false
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
		this.userService.TimeAnalyticsClinic(object).subscribe((result)=>{
			console.log(result)
			if (result.response) {
				if (result.totalTimeInSeconds.length > 0) {
					this.totalTimeUtilizedHours = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) / 3600)
					this.totalTimeUtilizedMin = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) % 3600)
					this.totalTimeUtilizedMin = Math.floor(this.totalTimeUtilizedMin / 60)
				}
				var avgTotalPatientSeconds = 0
				var addTime = 0
				if (result.dataTotalPatientsDischarged.length > 0) {
					 for (var i = 0; i < result.dataTotalPatientsDischarged.length; i++) {
                        var totalPatientSeconds
                        totalPatientSeconds = 0
                        this.timeDateArray.push(this.datePipe.transform(result.dataTotalPatientsDischarged[i].data[0].createAt, 'yyyy-MM-dd'))
                        for (var j = 0; j < result.dataTotalPatientsDischarged[i].data.length; j++) {
                            totalPatients++
                            totalPatientSeconds = (result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)) / 3600
                        }
                        avgTotalPatientSeconds = (totalPatientSeconds / result.dataTotalPatientsDischarged[i].data.length) * 60
                        addTime += totalPatientSeconds
                        this.timeArray.push(totalPatientSeconds.toFixed(3))
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
					///////////////////////////////////////////////////////
				}
				this.avgCtuPercentage = (addTime * 100) / (this.totalHours)
                this.timeSort(this.timeDateArray, this.timeArray);
			}
			this.locadingTimeAnlaytics=false
		},err=>{
			console.log(err)
		})
	}
	getChart(id){
		this.loadingMyClinicScore = true

		if(id==1){
			this.lineChartData = [{
				data: this.totalOpdOrderArray,
				label: 'Total Prescriptions'
			}];
		
			this.lineChartLabels = this.datesArray
		}
		else if(id==2){
			this.lineChartData = [{
				data: this.totalOpdCollArray,
				label: 'Total Sales'
			}];
		
			this.lineChartLabels = this.datesArray
		}
		else if(id==3){
			this.lineChartData = [{
				data: this.oldPatientsArray,
				label: 'Frequent Patients'
			}];
		
			this.lineChartLabels = this.datesArray
		}
		else if(id==4){
			this.lineChartData = [{
				data: this.newPatientArray,
				label: 'New Patients'
			}];
		
			this.lineChartLabels = this.datesArray
		}
		else if(id==5){
			this.lineChartData = [{
				data: this.pharmacyArray,
				label: 'Total Sales'
			}];
		
			this.lineChartLabels = this.datesArray
		}
		else if(id==6){
			this.lineChartData = [{
				data: this.diaonosisArray,
				label: 'Total Sales'
			}];
		
			this.lineChartLabels = this.datesArray
		}
		else if(id==7){
			this.lineChartData = [{
				data: this.avgTimeArray,
				label: 'Avg CTU Time'
			}];
		
			this.lineChartLabels = this.datesArray
		}
		else if(id==8){
			this.lineChartData = [{
				data: this.pharmacyTrueArray,
				label: 'Pharmacy Conversion'
			}];
		
			this.lineChartLabels = this.datesArray
		}
		else if(id==9){
			this.lineChartData = [{
				data: this.diagnosticsTrueArray,
				label: 'Diagnostics Conversion'
			}];
		
			this.lineChartLabels = this.datesArray
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
			console.log(this.lineChartLabels2)
		}
		else if(id==11){
			this.lineChartData = [{
				data: this.ipdConversionArray,
				label: 'Total Conversion'
			}]
			this.lineChartLabels2 = this.newIpdConArray
			console.log(this.lineChartLabels2)
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
			console.log(this.timeArray)
			console.log(newDateArrayIpd)
			
		}

		this.loadingMyClinicScore = false
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
		// this.lineChartLabels2 = newDateArray
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

}
