import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material';
import { DatePipe } from '@angular/common';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
declare var $
declare var jsPDF: any; 
export interface PatientList {
	patientName: string;
	procedure: string;
	consultDoc: string;
	createdAt: string;
	discharge_date: string;
	duration_days: number;
	duration_hours
	id: number;
	total_bill: number;
	product:number;
	first_name: string;
}
@Component({
	selector: 'app-clinic-summary-ipd',
	templateUrl: './clinic-summary-ipd.component.html',
	styleUrls: ['./clinic-summary-ipd.component.css']
})
export class ClinicSummaryIpdComponent implements OnInit  {
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
	headerClicked
	salesBookArray
	sortedData
	loading
	totalOccupancy
	totalBill
	patinetlist
	totalOccupancyDays
	totalOccupancyHours
	// smartIpdData
	doctorData
	dataArray
	otherSales
	patientAdmitted
	patientDischarge
	ipdRevenue
	totalAdmissionHours
	totalPrescriptions
	dataDoctorArray
	constructor(private UserService : UserService,private toastr: ToastrService,
		private datePipe: DatePipe) { }

	ngOnInit() {
		this.doctorData = JSON.parse(localStorage['doctorDetails'])
		console.log(this.doctorData)
		//this.smartIpdData = JSON.parse(localStorage['smartIpdDetails'])
		this.newDate.setDate(this.newDate.getDate()+1)
		this.fromDate1.setDate(this.fromDate1.getDate()-6)
		this.salesBookArray = []
		this.sortedData	 = []
		this.patinetlist = []
		this.activatedtab = 0
		this.activatetab(1)
	}
	activatetab(i){
		this.activatedtab= i
		var object
		object ={}
		var date = new Date()
		object.doctm_clinic_id = this.doctorData.doctm_clinic_id
		//object.smart_ipd_id = this.doctorData.smart_ipd_id
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
		this.DocBreakUp(object)
		this.IpdBook()
	}
	createPdf(){
		
		$('#previewModalPdf').printThis({
			debug: false,
			importCSS: true,
			importStyle: true,
			printContainer: true,
			pageTitle: "Clinic IPD Break Up",
			removeInline: false,
			printDelay: 333,
			header: null,
			formValues: true
		});
	}
	IpdBook(){    
		if(new Date(this.toDate).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		var object = {
			id: this.doctorData.smart_ipd_id,
			start_date: this.fromDate,
			end_date: this.toDate
		}
		this.loading = true
		this.UserService.GetIpdPatientsDataBetweenTwoDates(object).subscribe(data=>{
			console.log(data);
			this.loading = false
			if (data.response==true) {
				// this.toastr.success(data.message,"Success")
				this.totalOccupancy = 0
				this.totalBill = 0
				this.patinetlist = []
				this.sortedData = []
				this.totalOccupancyDays = 0
				this.totalOccupancyHours = 0
				this.patinetlist = data.data
				for (var i = 0; i < this.patinetlist.length; i++) {
					if(this.patinetlist[i].discharge_date){
						this.patinetlist[i].product=(this.patinetlist[i].duration_days*24)+this.patinetlist[i].duration_hours
					}else{
						this.patinetlist[i].product = 0
						this.patinetlist[i].id = null
					}
					this.patinetlist[i].first_name= data.data[i].consultDoc.first_name
					if(data.data[i].total_bill){
						this.totalBill = this.totalBill + data.data[i].total_bill
					}
					if(data.data[i].discharge_date){
						var diff =(new Date(data.data[i].discharge_date).getTime() - new Date(data.data[i].createdAt).getTime()) / 1000;
						diff /= (60 * 60);
						var hoursDifference : number = Math.abs(Math.round(diff))
						this.totalOccupancy = this.totalOccupancy + hoursDifference
					}
				}
				this.sortedData = this.patinetlist.slice();
				this.totalOccupancyDays = Math.trunc(this.totalOccupancy / 24)
				this.totalOccupancyHours = Math.trunc(this.totalOccupancy % 24)
			}
			else if(data.response==false){
				// this.toastr.error(data.message,"Error")
			}
		},err=>{
			console.log(err);
		}) 
	}

	DocBreakUp(object){
		this.dataArray = []
		this.patientAdmitted = 0
		this.patientDischarge = 0
		this.ipdRevenue = 0
		this.totalAdmissionHours = 0
		this.totalPrescriptions = 0
		this.loading =true
		this.UserService.IpdSummaryBreakUp(object).subscribe(data=>{
			console.log(data)
			if (data.response == true) {
				this.dataDoctorArray = data.dataDoctors
				this.dataArray = data.data
				for (var i = 0; i < this.dataArray.length; i++) {
					this.dataArray[i].patientDischarge = []
					this.dataArray[i].patientNotDischarge = []
					this.dataArray[i].totalRevenuePercentage = 0
					this.dataArray[i].admisssionHours = 0
					this.dataArray[i].admisssionHoursPercentage = 0
					this.dataArray[i].total_sales_amount = 0
					var totalHours = 0
					var totalAmount = 0 

					for (var j = 0; j < this.dataArray[i].total_sales.length; j++){
						if(this.dataArray[i].total_sales[j].duration_days || this.dataArray[i].total_sales[j].duration_hours)
							this.dataArray[i].admisssionHours += (this.dataArray[i].total_sales[j].duration_days*24) + this.dataArray[i].total_sales[j].duration_hours
						totalHours += (this.dataArray[i].total_sales[j].duration_days*24) + this.dataArray[i].total_sales[j].duration_hours
						totalAmount += this.dataArray[i].total_sales[j].total_bill
						if(this.dataArray[i].total_sales[j].total_bill){
							this.dataArray[i].total_sales_amount += this.dataArray[i].total_sales[j].total_bill
						}
						if(this.dataArray[i].total_sales[j].discharge==true){
							this.dataArray[i].patientDischarge.push(this.dataArray[i].total_sales[j])
							this.patientDischarge++
						}else{
							this.dataArray[i].patientNotDischarge.push(this.dataArray[i].total_sales[j])
							this.patientAdmitted++
						}
					}
					this.dataArray[i].admisssionHoursPercentage = (this.dataArray[i].admisssionHours*100)/totalHours
					this.dataArray[i].totalRevenuePercentage = (this.dataArray[i].total_sales_amount*100)/totalAmount
				}
				for (var i = 0; i < this.dataArray.length; i++) {
					this.ipdRevenue += this.dataArray[i].total_sales_amount
					this.totalAdmissionHours += this.dataArray[i].admisssionHours
				}
			} 
			this.totalPrescriptions = this.patientDischarge+this.patientAdmitted
			console.log(this.dataArray)
			this.loading = false
		},err=>{
			console.log(err);
		}) 
	}
	sortData(sort: Sort) {
		const data = this.sortedData.slice();
		if (!sort.active || sort.direction === '') {
			this.sortedData = data;
			return;
		}

		this.sortedData = data.sort((a, b) => {
			const isAsc = sort.direction === 'asc';
			switch (sort.active) {
				case 'patientName': return compare(a.patientName, b.patientName, isAsc);
				case 'procedure': return compare(a.procedure, b.procedure, isAsc);
				case 'consultDoc': return compare(a.consultDoc, b.consultDoc, isAsc);
				case 'createdAt': return compare(a.createdAt, b.createdAt, isAsc);
				case 'discharge_date': return compare(a.discharge_date, b.discharge_date, isAsc);
				case 'duration_days': return compare(a.product, b.product, isAsc);
				case 'invoice': return compare(a.id, b.id, isAsc);
				case 'total_bill': return compare(a.total_bill, b.total_bill, isAsc);
				case 'first_name': return compare(a.first_name, b.first_name, isAsc);
				default: return 0;
			}
		});
	}
	go(){
		if(new Date(this.toDate1).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		if(new Date(this.fromDate1).setHours(0,0,0,0) !> new Date(this.toDate1).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		var object
		object={
			doctm_clinic_id: this.doctorData.doctm_clinic_id,
			start_date: this.fromDate1,
			end_date: this.toDate1
		}
		console.log(object)
		this.activatedtab = 0
		this.IpdBook()
		this.DocBreakUp(object)
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
	getTableHeaderClass(id){
		if(this.headerClicked == id){
			return 'selected'
		}else{
			return ''
		}
	}

	setTableHeaderClass(id){
		this.headerClicked = id
	}
	getPercentage(data,total){
		return ((data*100)/total)
	}
	getDoctorName(id){
		for (var i = 0; i < this.dataDoctorArray.length; i++) {
			if(this.dataDoctorArray[i]._id == id){
				var name = this.dataDoctorArray[i].first_name.split(' ')
				return (name[0])
			}
		}
	}

	exportPdf(){
		var head = [
		{ title: 'Consulting Doctor', dataKey: "Doctor"},
		{ title: 'Patients Admitted', dataKey: "admitted"},
		{ title: 'Patients Discharged', dataKey: "dicharge"},
		{ title: 'IPD Revenue (Rs.)	', dataKey: "Amount"},
		{ title: 'Admission Duration (Hrs)', dataKey: "admission"},
		]
		var csvData = []
		var totalDuration
		var dates = []
		for (var i = 0; i < this.dataArray.length; i++) {
			var ob ;
			ob = {}
			ob.id = i+1
			//var date = this.stockValuation[i].createdAt.split('T')
			//ob.updateAt = date[0] + " " +date[1].substr(0,5)
			ob.Doctor = this.getDoctorName(this.dataArray[i]._id)
			ob.admitted = this.dataArray[i].patientNotDischarge.length
			ob.dicharge = this.dataArray[i].patientDischarge.length
			ob.Amount = this.dataArray[i].total_sales_amount
			ob.admission = this.dataArray[i].admisssionHours
			csvData.push(ob)
		}
		csvData.push({
			Doctor: "IPD Aggregates",
			admitted: this.patientAdmitted,
			dicharge: this.patientDischarge,
			Amount: this.getData(this.ipdRevenue),
			admission: this.getData(this.totalAdmissionHours)
		})
		var date = new Date().toJSON().toString().substr(0,10)
		var doc = new jsPDF('p', 'pt');
		doc.autoTable(head, csvData, {
			theme: 'grid',
			styles: {
				overflow: 'linebreak',
			},
			margin: 5,
			fontSize:8,
			tableWidth: 'auto',
			showHeader: 'everyPage'
		});
		doc.save('IPD-BreakUp'+"("+date+")");
	}
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
