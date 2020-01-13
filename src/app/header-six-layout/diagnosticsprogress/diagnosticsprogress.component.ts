import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router,ActivatedRoute } from '@angular/router'; 
import { MatRadioChange } from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

declare var $
declare var jsPDF: any; 

@Component({
	selector: 'app-diagnosticsprogress',
	templateUrl: './diagnosticsprogress.component.html',
	styleUrls: ['./diagnosticsprogress.component.css'],
	providers: [UserService]
})
export class DiagnosticsprogressComponent implements OnInit {
	headerClicked
	diagnosticsData
	totalPrescriptions
	totalSales
	totalSalesAmount
	totalConversion
	totalSalesPerPres
	totalSalesWalkin
	totalSalesDoctorPlusWalkin
	loading
	dataArray
	otherSales
	totalProfit
	otherSalesPercent
	totalSalesOtherPercent
	totalSalesPerPresPercent
	today = new Date()
	hoursIST
	minutesIST
	month
	day
	year
	numericMonth
	constructor(private userService: UserService, private toastr: ToastrService) { }

	ngOnInit() {
		this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails'])
		this.dataArray = []
		this.totalPrescriptions = 0
		this.totalSales = 0
		this.totalSalesAmount = 0
		this.totalConversion = 0
		this.totalSalesPerPres = 0
		this.totalSalesWalkin = 0
		this.totalSalesDoctorPlusWalkin = 0
		this.otherSales = []
		this.totalProfit = 0
		this.getDocData()
		this.otherSalesPercent = 0
		this.totalSalesOtherPercent = 0
		this.totalSalesPerPresPercent = 0

		var currentTime = new Date();
		var currentOffset = currentTime.getTimezoneOffset();
		var ISTOffset = 330;
		var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
		this.hoursIST = ISTTime.getHours()
		this.minutesIST = ISTTime.getMinutes()
		setInterval(() => {
			this.getCurrentTime()
		}, 60000);

		var options = {
			month: 'short'
		};
		var today = new Date();
		this.month = today.toLocaleDateString("en-IN", options);
		this.day = new Date().getDate()
		this.year = new Date().getFullYear()
		this.numericMonth = new Date().getMonth() + 1
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

	getData(data){
		if(data % 1 != 0){
			return data.toFixed(2)
		}else{
			return data
		}
	}

	getDoctorName(id){
		for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
			if(this.diagnosticsData.doctorsRegisteredForSmartClinic[i]._id == id){
				return (this.diagnosticsData.doctorsRegisteredForSmartClinic[i].first_name)
			}
		}
	}

	getDocData(){
		this.totalProfit = 0
		var ob ={
			smart_diagnostics_id : this.diagnosticsData.dataSmartDiagnostics._id 
		}
		this.loading = true
		this.userService.DiagnosticsProgressToday(ob).subscribe(data => {
			console.log(data)
			if (data.response == true) {
				this.dataArray = data.data
				this.otherSales = data.data1
				for (var i = 0; i < this.dataArray.length; i++) {
					this.dataArray[i].true_sales = []
					this.dataArray[i].false_sales = []
					this.dataArray[i].total_sales_amount = 0
					this.dataArray[i].sales_per_pres = 0
					for (var j = 0; j < this.dataArray[i].total_sales.length; j++) {
						if(this.dataArray[i].total_sales[j].diagnostics){
							this.dataArray[i].total_sales_amount = this.dataArray[i].total_sales_amount + this.dataArray[i].total_sales[j].investigation_cost 

							this.dataArray[i].true_sales.push(this.dataArray[i].total_sales[j])
						}else{
							this.dataArray[i].false_sales.push(this.dataArray[i].total_sales[j])
						}
					}
					this.dataArray[i].conversion = this.getData((this.dataArray[i].true_sales.length * 100) / this.dataArray[i].total_sales.length)
					if(this.dataArray[i].true_sales.length>0){
						this.dataArray[i].sales_per_pres = parseFloat(this.getData(this.dataArray[i].total_sales_amount / this.dataArray[i].true_sales.length))
					}
				}
				for (var i = 0; i < this.dataArray.length; i++) {
					this.totalPrescriptions = this.totalPrescriptions + this.dataArray[i].total_sales.length
					this.totalSales = this.totalSales + this.dataArray[i].true_sales.length
					this.totalSalesAmount = this.totalSalesAmount + this.dataArray[i].total_sales_amount
				}
				this.totalConversion = this.getData((this.totalSales * 100) / this.totalPrescriptions)
				// this.totalSalesPerPres = this.totalSalesPerPres + parseFloat(this.getData(this.totalSalesAmount / this.totalSales))
				//calculate amount for walkin patients//
				for (var i = 0; i < data.data1.length; i++) {
					// this.totalProfit = this.totalProfit + (data.data1[i].total_amount - data.data1[i].cost_amount)
					this.totalSalesWalkin = this.totalSalesWalkin + data.data1[i].total_amount
				}
				this.totalSalesDoctorPlusWalkin = this.getData(this.totalSalesAmount + this.totalSalesWalkin)
				if(this.diagnosticsData.doctorsRegisteredForSmartClinic.length>this.dataArray.length){
					for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
						var boolean = false
						for (var j = 0; j < this.dataArray.length; j++) {
							if(this.diagnosticsData.doctorsRegisteredForSmartClinic[i]._id.toString() == this.dataArray[j]._id.toString()){
								boolean = true
								break		
							}
						}
						if(boolean == false){
							this.dataArray.push({
								_id: this.diagnosticsData.doctorsRegisteredForSmartClinic[i]._id,
								total_sales: [],
								true_sales: [],
								total_sales_amount: 0,
								conversion: 0,
								sales_per_pres: 0
							})
						}
					}
				}
				this.totalSales = this.totalSales + this.otherSales.length
				for (var i = 0; i < this.dataArray.length; i++) {
					this.dataArray[i].totalPrescriptionsPercent = this.getData(this.checkIsNan(this.getPercentage(this.dataArray[i].total_sales.length,this.totalPrescriptions)))
					this.dataArray[i].trueSalesPercent = this.getData(this.checkIsNan(this.getPercentage(this.dataArray[i].true_sales.length,this.totalSales)))
					this.dataArray[i].trueSalesAmtPercent = this.getData(this.checkIsNan(this.getPercentage(this.dataArray[i].total_sales_amount,this.totalSalesDoctorPlusWalkin)))
				}
				this.otherSalesPercent = this.getData(this.checkIsNan(this.getPercentage(this.otherSales.length,this.totalSales)))
				this.totalSalesOtherPercent = this.getData(this.checkIsNan(this.getPercentage(this.totalSalesWalkin,this.totalSalesDoctorPlusWalkin)))
				this.totalSalesPerPresPercent = this.getData(this.checkIsNan(this.totalSalesWalkin/this.otherSales.length))
				this.totalSalesPerPres = parseFloat(this.getData(this.totalSalesDoctorPlusWalkin / this.totalSales))
				console.log(this.dataArray)
			} 
			this.loading = false        
		}, err => {
			console.log(err);
		})
	}

	exportPdf(){
		var head = [
		{ title: 'Doctor Name', dataKey: "Doctor"},
		{ title: 'Prescriptions', dataKey: "Prescriptions"},
		{ title: 'Sales Orders', dataKey: "SalesOrders"},
		{ title: 'Sales Amount', dataKey: "SalesAmount"},
		{ title: 'Conversion', dataKey: "Conversion"},
		{ title: 'Sales/prescription (Rs)', dataKey: "salesPerPrescription"}
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
			ob.Prescriptions = this.dataArray[i].total_sales.length
			ob.SalesOrders = this.dataArray[i].true_sales.length
			ob.SalesAmount = this.dataArray[i].total_sales_amount
			ob.Conversion = this.dataArray[i].conversion+ "%"
			ob.salesPerPrescription = this.dataArray[i].sales_per_pres
			csvData.push(ob)
		}
		csvData.push({
			Doctor: "Other Sales",
			Prescriptions: "N.A",
			SalesOrders: this.otherSales.length,
			SalesAmount: this.checkIsNan(this.totalSalesWalkin),
			Conversion: "N.A",
			salesPerPrescription: this.checkIsNan(this.getData(this.totalSalesWalkin/this.otherSales.length))
		})
		csvData.push({
			Doctor: "Diagnostics Aggregates",
			Prescriptions: this.totalPrescriptions,
			SalesOrders: this.totalSales,
			SalesAmount: this.checkIsNan(this.totalSalesDoctorPlusWalkin),
			Conversion: this.checkIsNan(this.totalConversion) + "%",
			salesPerPrescription: this.checkIsNan(this.totalSalesPerPres)
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
		doc.save('Diagnostics-Progress-Today'+"("+date+")");
	}

	checkIsNan(data){
		if(isNaN(data)){
			return 0
		}else{
			return data
		}
	}
	getPercentage(data,total){
		return ((data*100)/total)
	}

	SendEmailToAdminDoctorForDiagnosticsProgressToday(){
		for (var i = 0; i < this.dataArray.length; i++) {
			this.dataArray[i].drName = this.getDoctorName(this.dataArray[i]._id)
		}
		var clinic_name,email
		for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
			if(this.diagnosticsData.doctorsRegisteredForSmartClinic[i].type_of_doctor == 'admin_doctor'){
				clinic_name = this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_details.clinic_name
				email = this.diagnosticsData.doctorsRegisteredForSmartClinic[i].email
				break 
			}
		}
		var ob ={
			totalPrescriptions: this.totalPrescriptions,
			totalSales: this.totalSales,
			totalSalesDoctorPlusWalkin: this.totalSalesDoctorPlusWalkin,
			totalConversion: this.totalConversion,
			totalSalesPerPres: this.totalSalesPerPres,
			dataArray: this.dataArray,
			otherSales: this.otherSales,
			otherSalesPercent: this.otherSalesPercent,
			totalSalesOtherPercent: this.totalSalesOtherPercent,
			// totalProfit: this.totalProfit,
			totalSalesWalkin: this.totalSalesWalkin,
			totalSalesPerPresPercent: this.totalSalesPerPresPercent,
			clinic_name: clinic_name,
			email: email
		}
		console.log(ob)
		this.loading = true
		this.userService.SendEmailToAdminDoctorForDiagnosticsProgressToday(ob).subscribe(data => {
			console.log(data)
			if(data.response){
				this.toastr.success(data.message,"Success")
			}else{
				this.toastr.error(data.message,"Error")
			}
			this.loading = false        
		}, err => {
			console.log(err);
		})
	}

	getCurrentTime(){
		var currentTime = new Date();
		var currentOffset = currentTime.getTimezoneOffset();
		var ISTOffset = 330;
		var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
		this.hoursIST = ISTTime.getHours()
		this.minutesIST = ISTTime.getMinutes()
	}

	getMin(){
		if(this.minutesIST<10){
			return "0"+this.minutesIST
		}else{
			return this.minutesIST
		}
	}

}
