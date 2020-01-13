import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { DatePipe } from '@angular/common';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
declare var $
declare var jsPDF: any; 
export interface SalesBook {
	date:number
	invoice:number
	amount:number
	cost:number
	gross:number
	profit:number
	cost_amount:number
	total_amount:number
	total_profit:number
	createdAt: string
	id:number
	patient: string
	patient_mobile:number
	walkin_patient: boolean
	patient_name: string

	dispensed_patient_id: {
		registration : {
			pateintName: string
			pateintPhone:number
			createdAt:string
		},
		doctor_id: string
	}
}
export interface StockPurchaseArray {
	createdAt: string;
	bill_no: number;
	party_name: string;
	amount: number;
	stock: [{
		amount: number;
		createdAt: string;
		bill_no: number;
		party_name: string;
	}];
}
export interface StockValuation {
	product: string;
	type: string;
	batch: string;
	stock: number;
	cost: number
	present_mrate: number
	present_prate:number
	mrp: number
	pack_units:number
	pack_quantity: number
	newPacking: number
	newPackingReminder: number
}
@Component({
	selector: 'app-clinic-summary-pharmacy',
	templateUrl: './clinic-summary-pharmacy.component.html',
	styleUrls: ['./clinic-summary-pharmacy.component.css']
})
export class ClinicSummaryPharmacyComponent implements OnInit {
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
	pharmacyData
	stockPurchaseArray : StockPurchaseArray[]
	sortedData1 : StockPurchaseArray[]
	stockValuation: StockValuation[]
	sortedData2 :StockValuation[]
	stockArray
	totalProducts
	dataArray
	otherSales
	doctorData
	otherSalesPercent
	totalSalesOtherPercent
	totalSalesDoctorPlusWalkin
	totalSalesPerPresPercent
	totalSalesPerPres
	totalPrescriptions
	totalSales
	totalSalesAmount
	totalConversion
	totalSalesWalkin
	totalProfit
	totalAmountPharmacy
	totalCostPricePharmacy
	totalCostPharmacy
	totalBillPurchaseBook
	purchaseValueStock
	salesValueStock
	returnPurchaseArray
	totalPRate
	newTotalCgst
	newATotalSgst
	newTotalDiscount
	totalNetAmount
	reqData
	totalAmountOriginal
	totalRefundAmount
	returnPartyName
	returnBillNo
	totalTr
	returnStatus
	returnQty=[]
	dataDoctors
	constructor(private UserService : UserService,private toastr: ToastrService,private datePipe: DatePipe) { }

	ngOnInit() {
		// this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
		this.doctorData = JSON.parse(localStorage['doctorDetails'])
		this.fromDate1.setDate(this.fromDate1.getDate() - 6)
		this.salesBookArray = []
		this.sortedData	 = []
		this.sortedData2 = []
		this.sortedData1 = []
		this.newDate.setDate(this.newDate.getDate()+1)
		this.activatedtab = 0
		this.activatetab(1)
		
	}
	activatetab(i){
		this.activatedtab= i
		var object
		object ={}
		var date = new Date()
		object.doctm_clinic_id= this.doctorData.doctm_clinic_id,
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
		this.pharamacySalesBook(object)
		this.purchaseBook(object)
		this.getDocData(object)
		this.StockOnToday(object)
	}

	pharamacySalesBook(object) {
		if(new Date(this.toDate).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		if(new Date(this.fromDate1).setHours(0,0,0,0) !> new Date(this.toDate1).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		console.log(object)
		
		this.loading = true
		this.salesBookArray = []
		this.headerClicked = 0
		this.totalAmountPharmacy = 0
		this.totalCostPricePharmacy = 0
		this.totalCostPharmacy = 0
		this.UserService.SalesEntryBySmartPharmacyClinicSummary(object).subscribe(data => {
			console.log(data);
			
			if (data.response == true) {
				// this.toastr.success(data.message, "Success")
				this.salesBookArray = data.data
				for (var i = 0; i < this.salesBookArray.length; i++) {
					this.totalAmountPharmacy += this.salesBookArray[i].total_amount
					this.totalCostPricePharmacy += this.salesBookArray[i].cost_amount
					this.totalCostPharmacy += this.salesBookArray[i].total_amount-this.salesBookArray[i].cost_amount
					if(this.salesBookArray[i].walkin_patient){
						this.salesBookArray[i].patient = this.salesBookArray[i].patient_name
					}else{
						this.salesBookArray[i].patient = this.salesBookArray[i].dispensed_patient_id.registration.pateintName
					}                   
				}
				this.sortedData = this.salesBookArray.slice();
			} else if (data.response == false) {
				// this.toastr.error(data.message, "Error")
			}
			console.log(this.salesBookArray)
			this.loading = false
		}, err => {
			console.log(err);
		})
	}
	purchaseBook(object) {
		this.totalBillPurchaseBook = 0
		if(new Date(this.toDate1).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		if(new Date(this.fromDate1).setHours(0,0,0,0) !> new Date(this.toDate1).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		this.loading = true
		this.stockPurchaseArray = []
		this.sortedData1 = []
		this.headerClicked = 0
		this.UserService.GetStockPurchaseBetweenTwoDatesClinicSummary(object).subscribe(data => {
			console.log(data);
			this.loading = false
			if (data.response == true) {
				// this.toastr.success(data.message, "Success")
				this.stockPurchaseArray = data.data
				for (var i = 0; i < this.stockPurchaseArray.length; i++) {
					this.stockPurchaseArray[i].amount = 0                    
					for (var ii = 0; ii < this.stockPurchaseArray[i].stock.length; ii++) {
						this.totalBillPurchaseBook += this.stockPurchaseArray[i].stock[ii].amount
						this.stockPurchaseArray[i].amount += this.stockPurchaseArray[i].stock[ii].amount
					}
					if(this.stockPurchaseArray[i].amount % 1 != 0){
						this.stockPurchaseArray[i].amount = parseFloat(this.stockPurchaseArray[i].amount.toFixed(2))
					}
				}             
				this.sortedData1 = data.data.sort((a, b) => {
					return compare(a.stock[0].createdAt, b.stock[0].createdAt, false)
				});
				this.sortedData1 = this.stockPurchaseArray.slice();
			} else if (data.response == false) {
				// this.toastr.error(data.message, "Error")
			}
		}, err => {
			console.log(err);
		})
	}
	StockOnToday(object) {
		if(new Date(this.toDate1).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		if(new Date(this.fromDate1).setHours(0,0,0,0) !> new Date(this.toDate1).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		this.stockValuation=[]
		this.totalProducts = []
		this.purchaseValueStock = 0
		this.salesValueStock = 0
		this.loading = true
		this.stockArray = []
		this.UserService.StockOnTodayClinicSummary(object).subscribe(data => {
			console.log(data);
			this.loading = false
			if (data.response == true) {
				// this.toastr.success(data.message, "Success")
				this.stockArray = data.data
				this.stockValuation=data.data
				for (var i = 0; i < this.stockArray.length; i++) {
					this.stockArray[i].stock = this.stockArray[i].total_stock-this.stockArray[i].sold_stock
					this.stockArray[i].newPacking = Math.trunc(this.stockArray[i].stock /(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
					this.stockArray[i].newPackingReminder = this.stockArray[i].stock % (this.stockArray[i].pack_units*this.stockArray[i].pack_quantity)
					// this.stockArray[i].present_prate = Math.ceil(this.stockArray[i].amount*(this.stockArray[i].total_stock-this.stockArray[i].sold_stock)/
					// 				  	(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
					// this.stockArray[i].present_mrate= Math.ceil(this.stockArray[i].mrp*(this.stockArray[i].total_stock-this.stockArray[i].sold_stock)/
					// 				  	(this.stockArray[i].pack_units*this.stockArray[i].pack_quantity))
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
					this.salesValueStock += Math.ceil(this.stockArray[i].present_mrate) 
					if(i==0){
						this.totalProducts.push(this.stockArray[i])
					}
					var boolean = false
					for (var j = 0; j < this.totalProducts.length; j++) {
						if(this.stockArray[i].type== this.totalProducts[j].type && this.stockArray[i].product== this.totalProducts[j].product){
							boolean = true
							break;
						}
					}
					if(boolean == false){
						this.totalProducts.push(this.stockArray[i])		
					}
				}
				var expiryValue: number = 0
				for (var i = 0; i < data.dataExpiry.length; i++) {
					data.dataExpiry[i].stock = data.dataExpiry[i].total_stock-data.dataExpiry[i].sold_stock
					data.dataExpiry[i].present_mrate = Math.ceil((data.dataExpiry[i].mrp * data.dataExpiry[i].stock) /(data.dataExpiry[i].pack_units*data.dataExpiry[i].pack_quantity))
					expiryValue += Math.ceil(data.dataExpiry[i].present_mrate) 
				}		
				this.sortedData2=this.stockValuation.slice()			
			} else {
				// this.toastr.error(data.message, "Error")
			}
		}, err => {
			console.log(err);
		})
	}
	getDocData(object){
		if(new Date(this.toDate1).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		if(new Date(this.fromDate1).setHours(0,0,0,0) !> new Date(this.toDate1).setHours(0,0,0,0)){
			this.toastr.warning("Invalid date selected","Warning")
			return
		}
		this.dataArray = []
		this.otherSales = []
		this.otherSalesPercent = 0
		this.totalSalesOtherPercent = 0
		this.totalSalesDoctorPlusWalkin = 0
		this.totalSalesPerPresPercent = 0
		this.totalSalesPerPres = 0
		this.totalPrescriptions = 0
		this.totalSales = 0
		this.totalSalesWalkin = 0 
		this.totalConversion = 0
		this.totalSalesAmount = 0
		this.totalProfit = 0
		this.loading = true
		this.dataDoctors = []
		this.UserService.PharmacyProgressTodayClinicSummary(object).subscribe(data => {
			console.log(data)
			if (data.response == true) {
				this.dataDoctors = data.dataDoctors
				this.dataArray = data.data
				this.otherSales = data.data1
				for (var i = 0; i < this.dataArray.length; i++) {
					this.dataArray[i].true_sales = []
					this.dataArray[i].false_sales = []
					this.dataArray[i].total_sales_amount = 0
					this.dataArray[i].sales_per_pres = 0
					for (var j = 0; j < this.dataArray[i].total_sales.length; j++) {
						if(this.dataArray[i].total_sales[j].pharmacy){
							this.dataArray[i].total_sales_amount = this.dataArray[i].total_sales_amount + this.dataArray[i].total_sales[j].pharmacy_sales 
							this.totalProfit = this.totalProfit + (this.dataArray[i].total_sales[j].pharmacy_sales - this.dataArray[i].total_sales[j].pharmacy_cost)
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
					this.totalProfit = this.totalProfit + (data.data1[i].total_amount - data.data1[i].cost_amount)
					this.totalSalesWalkin = this.totalSalesWalkin + data.data1[i].total_amount
				}
				this.totalSalesDoctorPlusWalkin = this.getData(this.totalSalesAmount + this.totalSalesWalkin)
				// if(this.pharmacyData.doctorsRegisteredForSmartClinic.length>this.dataArray.length){
				// 	for (var i = 0; i < this.pharmacyData.doctorsRegisteredForSmartClinic.length; i++) {
				// 		var boolean = false
				// 		for (var j = 0; j < this.dataArray.length; j++) {
				// 			if(this.pharmacyData.doctorsRegisteredForSmartClinic[i]._id.toString() == this.dataArray[j]._id.toString()){
				// 				boolean = true
				// 				break		
				// 			}
				// 		}
				// 		if(boolean == false){
				// 			this.dataArray.push({
				// 				_id: this.pharmacyData.doctorsRegisteredForSmartClinic[i]._id,
				// 				total_sales: [],
				// 				true_sales: [],
				// 				total_sales_amount: 0,
				// 				conversion: 0,
				// 				sales_per_pres: 0
				// 			})
				// 		}
				// 	}
				// }
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
			} 
			this.loading = false        
		}, err => {
			console.log(err);
		})
	}
	 getTotalRecord(i) {
        if (this.returnPurchaseArray[i].qty < this.reqData.quantity[i]) {
            this.toastr.warning("Return quantity can't exceed actual quantity", "Warning")
            return
        }
        this.totalPRate = 0
        this.newTotalCgst = 0
        this.newATotalSgst = 0
        this.newTotalDiscount = 0
        this.totalNetAmount = 0
        var rate
        var cgst
        var sgst
        var discount
        if (this.reqData.rate[i] == undefined || this.reqData.rate[i] == "") {
            rate = 0
        } else {
            rate = this.reqData.rate[i]
        }
        if (this.reqData.cgst[i] == undefined || this.reqData.cgst[i] == "") {
            cgst = 0
        } else {
            cgst = this.reqData.cgst[i]
        }
        if (this.reqData.sgst[i] == undefined || this.reqData.sgst[i] == "") {
            sgst = 0
        } else {
            sgst = this.reqData.sgst[i]
        }
        if (this.reqData.discount[i] == undefined || this.reqData.discount[i] == "") {
            discount = 0
        } else {
            discount = this.reqData.discount[i]
        }
        // this.reqData.amount[i] = rate + ((this.reqData.quantity[i] * (((cgst+sgst-discount)/100)*rate)))
        rate = rate * this.reqData.quantity[i]
        this.reqData.amount[i] = rate + (((cgst + sgst - discount) / 100) * rate)
        for (var j = 0; j < this.reqData.rate.length; j++) {
            if (this.reqData.rate[j]) {
                this.totalPRate += this.reqData.rate[j]
            }
        }
        for (var j = 0; j < this.reqData.cgst.length; j++) {
            if (this.reqData.cgst[j]) {
                this.newTotalCgst += this.reqData.cgst[j]
            }
        }
        for (var j = 0; j < this.reqData.sgst.length; j++) {
            if (this.reqData.sgst[j]) {
                if (this.reqData.sgst[j]) {
                    this.newATotalSgst += this.reqData.sgst[j]
                }
            }
        }
        for (var j = 0; j < this.reqData.discount.length; j++) {
            if (this.reqData.discount[j]) {
                this.newTotalDiscount += this.reqData.discount[j]
            }
        }
        for (var j = 0; j < this.reqData.amount.length; j++) {
            if (this.reqData.amount[j]) {
                this.totalNetAmount += this.reqData.amount[j]
            }
        }
        this.totalRefundAmount = 0
        for (var ii = 0; ii < this.returnStatus.length; ii++) {
            if (this.returnStatus[ii] == true) {
                this.totalRefundAmount = this.totalRefundAmount + this.reqData.amount[ii]
            }
        }
        

        // this.totalNetAmount = this.totalNetAmount - this.returnEditable
        // this.partyTotal = Math.ceil(this.totalNetAmount)
    }
	 viewReturnData(item,data){
        console.log(data)
        this.totalAmountOriginal = data.amount
        this.totalRefundAmount = 0
        this.returnPartyName = data.party_name
        this.returnBillNo = data.stock[0].bill_no
        this.totalTr = item
        this.returnPurchaseArray=item
        this.reqData = {}
        this.returnStatus = []
        this.reqData.opt = []
        this.reqData.product = []
        this.reqData.pack1 = []
        this.reqData.pack2 = []
        this.reqData.quantity = []
        this.reqData.mrp = []
        this.reqData.rate = []
        this.reqData.cgst = []
        this.reqData.sgst = []
        this.reqData.discount = []
        this.reqData.amount = []
        this.reqData.batch = []
        this.reqData.month = []
        this.reqData.year = []
        this.reqData.id = []
        for(var i=0;i<item.length;i++){
            this.returnStatus.push(false)
            this.reqData.id.push(item[i].id)
            this.reqData.opt.push(item[i].type)
            this.reqData.product.push(item[i].product)
            this.reqData.pack1.push(item[i].pack_units)
            this.reqData.pack2.push(item[i].pack_quantity)
            var amount = (item[i].amount / item[i].qty) * Math.trunc(item[i].current_stock / (item[i].pack_units * item[i].pack_quantity))
            // this.reqData.amount.push(amount)
            item[i].qty =  Math.trunc(item[i].current_stock / (item[i].pack_units * item[i].pack_quantity))
            // this.reqData.quantity.push(item[i].qty)
            this.reqData.mrp.push(item[i].mrp)
            this.reqData.rate.push(item[i].p_rate)
            this.reqData.cgst.push(item[i].cgst)
            this.reqData.sgst.push(item[i].sgst)
            this.reqData.discount.push(item[i].discount) 
            this.reqData.batch.push(item[i].batch)
            this.reqData.month.push(item[i].month)
            this.reqData.year.push(item[i].year)
            this.returnQty.push(item[i].qty)
        }                 
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
				case 'date': return compare(a.createdAt, b.createdAt, isAsc);
				case 'invoice': return compare(a.id, b.id, isAsc);
				case 'amount': return compare(a.total_amount, b.total_amount, isAsc);
				case 'cost': return compare(a.cost_amount, b.cost_amount, isAsc);
				case 'gross': return compare(a.total_amount-a.cost_amount, b.total_amount-a.cost_amount, isAsc);
				case 'profit': return compare(((a.total_amount-a.cost_amount)*a.cost_amount)/100, ((b.total_amount-b.cost_amount)*b.cost_amount)/100, isAsc); 
				case 'patient': return compare(a.patient, b.patient, isAsc);                
				default: return 0;
			}
		});
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
				case 'createdAt': return compare(a.stock[0].createdAt, b.stock[0].createdAt, isAsc);
				case 'bill_no': return compare(a.stock[0].bill_no, b.stock[0].bill_no, isAsc);
				case 'party_name': return compare(a.party_name, b.party_name, isAsc);
				case 'amount': return compare(a.amount, b.amount, isAsc);
				default: return 0;
			}
		});
	}
	sortData2(sort: Sort) {
		const data = this.sortedData2.slice();
		if (!sort.active || sort.direction === '') {
			this.sortedData2 = data;
			return;
		}

		this.sortedData2 = data.sort((a, b) => {
			const isAsc = sort.direction === 'asc';
			switch (sort.active) {
				case 'product': return compare(a.product, b.product, isAsc);
				case 'type': return compare(a.type, b.type, isAsc);
				case 'batch': return compare(a.batch, b.batch, isAsc);
				case 'stock': return compare(a.stock, b.stock, isAsc);
				case 'p_rate': return compare(a.cost, b.cost, isAsc);
				case 'value': return compare(a.present_mrate, b.present_mrate, isAsc);
				case 'pvalue': return compare(a.present_prate, b.present_prate, isAsc);				
				case 'packing': return compare(a.stock, b.stock, isAsc);
				case 'mrp': return compare(a.mrp, b.mrp, isAsc); 
				default: return 0;
			}
		});
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
		for (var i = 0; i < this.dataDoctors.length; i++) {
			if(this.dataDoctors[i]._id == id){
				return (this.dataDoctors[i].first_name)
			}
		}
	}
	exportPdfProgress(){
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
			ob.Doctor = this.dataArray[i].first_name
			ob.Prescriptions = this.dataArray[i].total_sales.length
			ob.SalesOrders = this.dataArray[i].true_sales.length
			ob.SalesAmount = this.dataArray[i].total_sales_amount
			ob.Conversion = this.dataArray[i].conversion + "%"
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
			Doctor: "Pharmacy Aggregates",
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
		doc.save('Pharmacy-BreakUp'+"("+date+")");
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
		var object
		object = {}
		object.start_date = this.fromDate1
		object.end_date = this.toDate1
		object.doctm_clinic_id= this.doctorData.doctm_clinic_id
		console.log(object)
		this.pharamacySalesBook(object)
		this.purchaseBook(object)
		this.getDocData(object)
		this.StockOnToday(object)
	}
	getReturnStatus(i) {
        if (this.returnStatus[i] == true) {
            return false
        } else {
            return true
        }
    }

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
	return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

