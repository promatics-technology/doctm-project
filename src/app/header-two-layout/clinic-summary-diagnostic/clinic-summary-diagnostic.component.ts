import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
declare var $
declare var jsPDF: any; 
export interface SalesBook {
	date:number
	invoice:number
	amount:number
	total_amount:number
	createdAt: string
	id:number
	patient: string
	walkin_patient: boolean
	patient_name: string
	patient_mobile: number
	dispensed_patient_id: {
		registration : {
			pateintName: string
			pateintPhone: number
		},
		doctor_id: string
	}
}
@Component({
	selector: 'app-clinic-summary-diagnostic',
	templateUrl: './clinic-summary-diagnostic.component.html',
	styleUrls: ['./clinic-summary-diagnostic.component.css']
})
export class ClinicSummaryDiagnosticComponent implements OnInit  {
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
	salesBookArray = []
	sortedData = []
	totalAmountSalesBook
	diagnosticsData
	loading
	sortedData1
	dataArray
	otherSales = []

	//
	totalPrescriptions
	totalSales
	totalSalesAmount
	totalConversion
	totalSalesWalkin
	totalSalesDoctorPlusWalkin
	otherSalesPercent
	totalSalesOtherPercent
	totalSalesPerPresPercent
	totalSalesPerPres
	totalProfit
	//
	id
	editcategory
	edittestname
	editrate
	editdiscount
	detailsForm:FormGroup
	testNameSuggestion
	doctorData
	constructor(private UserService: UserService, private toastr: ToastrService, private datePipe: DatePipe,
		public dialog: MatDialog, private formBuilder: FormBuilder) { }

	ngOnInit() {
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
		this.newDate.setDate(this.newDate.getDate()+1)
		this.fromDate1.setDate(this.fromDate1.getDate() - 6)
		this.activatedtab = 0
		this.detailsForm = this.formBuilder.group({
            'category':  [null, Validators.compose([Validators.required,])],
            'discount': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(0),Validators.maxLength(3), Validators.min(0), Validators.max(100)])],
            'rate':  [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*')])],
            'testName': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],

        })
        this.GetSmartDiagnosticsDataAfterLogin()
	}

	GetSmartDiagnosticsDataAfterLogin(){
        let object = {
            smart_diagnostics_id : this.doctorData.smart_diagnostics_id
        }
        this.loading = true
        this.UserService.GetSmartDiagnosticsDataAfterLogin(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
            	var dataToStore = {
                    dataSmartDiagnostics: data.dataSmartDiagnostics,
                    doctorsRegisteredForSmartClinic: data.doctorsRegisteredForSmartClinic,
                    doctorsOfSameClinic: data.doctorsOfSameClinic
                }
            	this.diagnosticsData = dataToStore
            }   
            this.activatetab(1)
			this.TestCatalouge()
			this.getDocData()
        }, err => {
          console.log(err);
        })
    }

	activatetab(i){
		this.activatedtab= i
		var object
		object ={}
		var date = new Date()
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
		this.SalesBook()
	}
	SalesBook() {
		if(new Date(this.toDate).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		if(new Date(this.fromDate1).setHours(0,0,0,0) !> new Date(this.toDate1).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		var object = {
			id: this.diagnosticsData.dataSmartDiagnostics._id,
			start_date: this.fromDate,
			end_date: this.toDate
		}
		this.loading = true
		this.salesBookArray = []
		this.headerClicked = 0
		this.totalAmountSalesBook = 0
		this.sortedData	= []
		this.UserService.SalesEntryBySmartDiagnostics(object).subscribe(data => {
			console.log(data);
			this.loading = false
			if (data.response == true) {
				// this.toastr.success(data.message, "Success")
				this.salesBookArray = data.data
				for (var i = 0; i < this.salesBookArray.length; i++) {
					this.totalAmountSalesBook += this.salesBookArray[i].total_amount
					if (this.salesBookArray[i].walkin_patient) {
						this.salesBookArray[i].patient = this.salesBookArray[i].patient_name
					} else {
						this.salesBookArray[i].patient = this.salesBookArray[i].dispensed_patient_id.registration.pateintName
					}
				}

				this.sortedData = this.salesBookArray.slice();
			} else if (data.response == false) {
				//this.toastr.error(data.message, "Error")
			}
			this.loading = false
		}, err => {
			console.log(err);
		})
	}
	TestCatalouge(){
		if(new Date(this.toDate).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		if(new Date(this.fromDate1).setHours(0,0,0,0) !> new Date(this.toDate1).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		this.sortedData1 = []
		var  array = []
		this.loading = true
		this.UserService.GetTestBySmartDiagnostics(this.diagnosticsData.dataSmartDiagnostics._id).subscribe(data => {
			console.log(data)
			this.loading = false
			if (data.response == true) {
				array = data.data
				for (var i = 0; i < array.length; i++) {
					var total=0
					total += (array[i].rate/100)*array[i].discount
					//this.totalRate+=array[i].rate-total
				}		
				this.sortedData1 = array.slice(); 		
				// this.toastr.success(data.message,"Success")
			} else{
				this.toastr.error(data.message,"Error")
			}      
			this.loading = false
		}, err => {
			console.log(err);
		})
	}
	getDocData(){
		this.dataArray = []
		this.otherSales = []
		this.totalPrescriptions = 0
		this.totalSales = 0
		this.totalSalesAmount = 0
		this.totalConversion = 0
		this.totalSalesWalkin = 0
		this.totalSalesDoctorPlusWalkin = 0
		this.otherSalesPercent = 0
		this.totalSalesOtherPercent = 0
		this.totalSalesPerPresPercent = 0
		this.totalSalesPerPres = 0
		this.totalProfit = 0
		var ob ={
			smart_diagnostics_id : this.diagnosticsData.dataSmartDiagnostics._id 
		}
		this.loading = true
		this.UserService.DiagnosticsProgressToday(ob).subscribe(data => {
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
	sortData(sort: Sort) {
		const data = this.salesBookArray.slice();
		if (!sort.active || sort.direction === '') {
			this.salesBookArray = data;
			return;
		}
		this.salesBookArray = data.sort((a, b) => {
			const isAsc = sort.direction === 'asc';
			switch (sort.active) {
				case 'date':
				return compare(a.createdAt, b.createdAt, isAsc);
				case 'invoice':
				return compare(a.id, b.id, isAsc);
				case 'amount':
				return compare(a.total_amount, b.total_amount, isAsc);
				case 'patient':
				return compare(a.patient, b.patient, isAsc);
				default:
				return 0;
			}
		});
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
		doc.save('Diagnostics-BreakUp'+"("+date+")");
	}
	sortData1(sort: Sort) {
		const data = this.sortedData1.slice();
		if (!sort.active || sort.direction === '') {
			this.sortedData1 = data;
			return;
		}

		this.sortedData1 = data.sort((a, b) => {
			const isAsc = sort.direction === 'asc';
			switch (sort.active) {
				case 'category': return compare(a.category, b.category, isAsc);
				case 'testname': return compare(a.name, b.name, isAsc);
				case 'rate': return compare(a.rate, b.rate, isAsc);
				case 'discount': return compare(a.discount, b.discount, isAsc);
				default: return 0;
			}
		});
	}
	editTest(item){
    	console.log(item)
    	this.id = item.id
    	this.editcategory = item.category
    	this.edittestname = item.name
    	this.editrate = item.rate
    	this.editdiscount = item.discount
    	$("#edit-entry").modal("show");
    }

    UpdateTest(){
    	let object = {
    		id: this.id,
    		update:{
	            category: this.editcategory,
	            name: this.edittestname,
	            rate: this.editrate,
	            discount: this.editdiscount
    		}
        }
        this.loading = true
    	this.UserService.UpdateTestBySmartDiagnostics(object).subscribe(data => {
            console.log(data)
        	this.loading = false
            if (data.response == true) {
            	$("#edit-entry").modal("hide");
            	this.detailsForm.reset()
            	this.ngOnInit()	
                this.toastr.success(data.message,"Success")
            } else{
                this.toastr.error(data.message,"Error")
            }      
        }, err => {
          console.log(err);
        })
    }
    DeleteTest(activity){
        let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            // width: '250px',
            data: activity.name
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == "yes") {
                this.loading = true
                this.UserService.DeleteTestBySmartDiagnostics(activity.id).subscribe(data => {
                    console.log(data);
                    this.loading = false
                    if (data.response == true) {
                        this.toastr.success(data.message, "Success");   
                        this.ngOnInit()
                    } else {
                        this.toastr.error(data.message, "Error");
                    }
                }, err => {
                    console.log(err);
                })
            } else {
                console.log("error or No Thanks button clicked")
            }
        });
    }
     onTextChange(type, suggestion) {
        var type
        if (type == 'PATHOLOGY') {
            type = 'Pathology'
        } else if (type == 'ULTRASOUND') {
            type = 'Ultrasound'
        } else if (type == 'AUDIOMETRY') {
            type = 'Audiometry'
        } else if (type == 'BONE DENSITOMETRY') {
            type = 'Bone densitometry'
        } else if (type == 'DOPPLER STUDIES') {
            type = 'Doppler Studies'
        } else if (type == 'MAMMOGRAPHY') {
            type = 'Mammograaphy'
        } else if (type == 'UROFLOWMETRY') {
            type = 'Uroflowmetry'
        } else if (type == 'Nerve Test') {
            type = 'NERVE TEST'
        } else if (type == 'Eye Tests') {
            type = 'Eye Test'
        }
        this.testNameSuggestion = []
        var object = {
            type: type,
            suggestion: suggestion
        }        
        this.UserService.SearchSuggestion(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.testNameSuggestion = data.data
            }
        }, err => {
            console.log(err);
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
	go(){
		if(new Date(this.toDate1).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		if(new Date(this.fromDate1).setHours(0,0,0,0) !> new Date(this.toDate1).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		this.activatedtab = 0
		this.TestCatalouge()
		this.SalesBook()
		this.getDocData()



		
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
	getDoctorName(id){
		for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
			if(this.diagnosticsData.doctorsRegisteredForSmartClinic[i]._id == id){
				return (this.diagnosticsData.doctorsRegisteredForSmartClinic[i].first_name)
			}
		}
	}

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}