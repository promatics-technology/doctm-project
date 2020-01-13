import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard-progress-pharmacy',
  templateUrl: './dashboard-progress-pharmacy.component.html',
  styleUrls: ['./dashboard-progress-pharmacy.component.css']
})
export class DashboardProgressPharmacyComponent implements OnInit {
    doctorData
    activatedtab
    totalPatient
    totalWalkinPatient
    loading
    totalWalkinCashPatient: number
    totalWalkinOnlinePatient: number
    totalPharmacySales
    totalWalkinSales
    totalPharmacySalesLength
    maxSaleOfDay
    minSaleOfDay
    prescriptionsSalespercentage
    NonprescriptionsSalespercentage
    totalSalePercentage
    totalNonSalePercentage
    doctorArray
    dataArray
    otherSales
    totalProfit
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
    totalCashAmount
    totalOnlineAmount
    totalWalkinCashAmount
    totalWalkinOnlineAmount
    maxSaleInADay
    totalWalkinProfit
    maxProfitOfDay
    minProfitOfDay
    maxCollectionDate
    minCollectionDate
    maxprofitDate
    minProfitDate
    maxOrderOfDay
    minOrderOfDay
    minOrderDate
    maxOrderDate
    dateDiff
    prescriptionArray
    totalSalesArray
    standaloneArray
    prescriptionProfitArray
    totalSalesProfitArray
    standaloneProfitArray
    prescriptionOrdersArray
    totalSalesOrdersArray
    standaloneOrdersArray
    datesArray
    topProfitArray
    totalProfitPrec
    fromDate = new Date()
    toDate = new Date()
    fromDate1 = new Date()
    toDate1 = new Date()
    newDate = new Date()
    finalTimeMinArray
    fiveMinPatintArray
    fiveMinArray
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }
    //CHARTS ////////////
    public lineChartData: Array < any > = [{
        data: [],
        label: 'Total Sales'
    }];
    public lineChartLabels: Array < any > = [];
    public lineChartOptions: any = {
        responsive: true,
        legend: {
            display: false,
        }
    };
    public lineChartColors: Array < any > = [{ // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }, { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
    }, { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    //charts end /////////
    ////Chart Profit //////////////
    public lineChartData1: Array < any > = [{
        data: [],
        label: 'Total Profit'
    }];
    public lineChartLabels1: Array < any > = [];
    public lineChartOptions1: any = {
        responsive: true,
        legend: {
            display: false,
        }
    };
    public lineChartLegend1: boolean = true;
    public lineChartType1: string = 'line';
    //charts end /////////
    ////Chart Profit //////////////
    public lineChartData2: Array < any > = [{
        data: [],
        label: 'Total Profit'
    }];
    public lineChartLabels2: Array < any > = [];
    public lineChartOptions2: any = {
        responsive: true,
        legend: {
            display: false,
        }
    };
    public lineChartLegend2: boolean = true;
    public lineChartType2: string = 'line';
    //charts end ////////2
    constructor(private userService: UserService, private datePipe: DatePipe, private toastr: ToastrService) {}
    ngOnInit() {
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        console.log(this.doctorData)
        this.newDate.setDate(this.newDate.getDate() + 1)
        this.fromDate1.setDate(this.fromDate1.getDate() - 6)
        this.activatedtab = 0
        this.activatetab(1)
        this.doctorArray = []
        this.dataArray = []
        this.otherSales = []
    }
    // events
    public chartClicked(e: any): void {
        console.log(e);
    }
    public chartHovered(e: any): void {
        console.log(e);
    }
    activatetab(i) {
        this.activatedtab = i
        var object
        object = {}
        var date = new Date()
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id
        object.end_date = new Date()
        this.totalPatient = 0
        this.totalWalkinPatient = 0
        this.totalWalkinCashPatient = 0
        this.totalWalkinOnlinePatient = 0
        this.totalPharmacySales = 0
        this.totalWalkinSales = 0
        this.totalPharmacySalesLength = 0
        this.maxSaleOfDay = 0
        this.minSaleOfDay = 0
        this.prescriptionsSalespercentage = 0
        this.NonprescriptionsSalespercentage = 0
        this.totalSalePercentage = 0
        this.totalNonSalePercentage = 0
        this.totalPrescriptions = 0
        this.totalSales = 0
        this.totalSalesAmount = 0
        this.totalConversion = 0
        this.totalSalesPerPres = 0
        this.totalSalesWalkin = 0
        this.totalProfit = 0
        this.totalSalesDoctorPlusWalkin = 0
        this.otherSalesPercent = 0
        this.totalSalesOtherPercent = 0
        this.totalSalesPerPresPercent = 0
        this.totalCashAmount = 0
        this.totalOnlineAmount = 0
        this.totalWalkinCashAmount = 0
        this.totalWalkinOnlineAmount = 0
        this.maxSaleInADay = 0
        this.totalWalkinProfit = 0
        this.maxProfitOfDay = 0
        this.minProfitOfDay = 0
        this.maxOrderOfDay = 0
        this.minOrderOfDay = 0
        this.dateDiff = 0
        this.prescriptionArray = []
        this.totalSalesArray = []
        this.standaloneArray = []
        this.prescriptionProfitArray = []
        this.totalSalesProfitArray = []
        this.standaloneProfitArray = []
        this.prescriptionOrdersArray = []
        this.totalSalesOrdersArray = []
        this.standaloneOrdersArray = []
        this.topProfitArray = []
        this.totalProfitPrec = 0
        if (i == 1) {
            object.start_date = date
        }
        // } else if (i == 1) {
        //     object.start_date = new Date(date.setDate(date.getDate() - 6))
        // } else if (i == 2) {
        //     object.start_date = new Date(date.setDate(date.getDate() - 13))
        // } else if (i == 3) {
        //     object.start_date = new Date(date.setMonth(date.getMonth() - 1))
        // } else if (i == 4) {
        //     object.start_date = new Date(date.setMonth(date.getMonth() - 3))
        // } else if (i == 5) {
        //     object.start_date = new Date(date.setMonth(date.getMonth() - 6))
        // } else if (i == 6) {
        //     object.start_date = new Date(date.setFullYear(date.getFullYear() - 1))
        // } else if (i == 7) {
        //     object.start_date = new Date()
        //     object.maximum = true
        // }
        //console.log(object)
        this.fromDate = new Date(object.start_date)
        this.toDate = new Date(object.end_date)
        this.loading = true
        this.userService.PharmacyAnalytics(object).subscribe((result) => {
            console.log(result)
            if (result.response) {
                var walkinTrue =[]
                var walkinFalse = []
                for (var i = 0; i < result.data1.length; i++) {
                    if(result.data1[i].walkin_patient){
                        walkinTrue.push(result.data1[i])
                    }else{
                        walkinFalse.push(result.data1[i])
                    }
                }
                var maxInData = []
                var maxArray = []
                var maxProfit = []
                var maxOrder = []
                var total_sales_length = 0
                this.doctorArray = result.dataDoctors
                for (var i = 0; i < result.data.length; i++) {
                    this.totalPatient = result.data.length
                    for (var j = 0; j < result.data[i].total_sales.length; j++) {
                        if (result.data[i].total_sales[j].pharmacy == true) {
                            this.totalPharmacySales += result.data[i].total_sales[j].pharmacy_sales
                            this.totalPharmacySalesLength++;
                            maxInData.push(result.data[i].total_sales[j].pharmacy_sales)
                            maxArray.push(this.datePipe.transform(result.data[i].total_sales[j].createdAt, 'yyyy-MM-dd'))
                            this.totalProfitPrec += result.data[i].total_sales[j].pharmacy_sales - result.data[i].total_sales[j].pharmacy_cost
                            maxProfit.push(result.data[i].total_sales[j].pharmacy_sales - result.data[i].total_sales[j].pharmacy_cost)
                            total_sales_length++;
                            if (result.data[i].total_sales[j].payment_mode_pharmacy == 'Cash') {
                                this.totalCashAmount += result.data[i].total_sales[j].pharmacy_sales
                                this.totalWalkinCashPatient++;
                            } else {
                                this.totalOnlineAmount += result.data[i].total_sales[j].pharmacy_sales
                                this.totalWalkinOnlinePatient++;
                            }
                        }
                    }
                    maxOrder.push(result.data[i].total_sales.length)
                }
                console.log(walkinTrue)
                for (var i = 0; i < walkinTrue.length; i++) {
                    this.totalWalkinPatient = walkinTrue.length
                    this.totalWalkinSales += walkinTrue[i].total_amount
                    this.totalWalkinProfit += walkinTrue[i].total_amount - walkinTrue[i].cost_amount
                    maxProfit.push(walkinTrue[i].total_amount - walkinTrue[i].cost_amount)
                    maxInData.push(walkinTrue[i].total_amount)
                    maxArray.push(this.datePipe.transform(walkinTrue[i].createdAt, 'yyyy-MM-dd'))
                    maxOrder.push(walkinTrue.length)
                    if (walkinTrue[i].payment_mode == 'Cash') {
                        this.totalWalkinCashAmount += walkinTrue[i].total_amount
                        this.totalWalkinCashPatient++;
                    } else {
                        this.totalWalkinOnlineAmount += walkinTrue[i].total_amount
                        this.totalWalkinOnlinePatient++;
                    }
                }
                console.log(this.totalProfitPrec, this.totalWalkinProfit)
                var diff = Math.abs(this.toDate.getTime() - this.fromDate.getTime());
                this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
                this.totalWalkinOnlinePatient = (this.totalWalkinOnlinePatient * 100) / (total_sales_length + this.totalWalkinPatient)
                this.totalWalkinCashPatient = (this.totalWalkinCashPatient * 100) / (total_sales_length + this.totalWalkinPatient)
                this.prescriptionsSalespercentage = (this.totalPharmacySales / (this.totalPharmacySales + this.totalWalkinSales)) * 100
                this.NonprescriptionsSalespercentage = (this.totalWalkinSales / (this.totalPharmacySales + this.totalWalkinSales)) * 100
                this.totalSalePercentage = (this.totalPharmacySalesLength / (this.totalPharmacySalesLength + this.totalWalkinPatient)) * 100
                this.totalNonSalePercentage = (this.totalWalkinPatient / (this.totalPharmacySalesLength + this.totalWalkinPatient)) * 100
                this.dataArray = result.data
                this.otherSales = walkinTrue
                console.log(this.totalPharmacySalesLength)
                for (var i = 0; i < this.dataArray.length; i++) {
                    this.dataArray[i].true_sales = []
                    this.dataArray[i].false_sales = []
                    this.dataArray[i].total_sales_amount = 0
                    this.dataArray[i].sales_per_pres = 0
                    this.dataArray[i].orderPercentage = 0
                    for (var j = 0; j < this.dataArray[i].total_sales.length; j++) {
                        if (this.dataArray[i].total_sales[j].pharmacy) {
                            this.dataArray[i].total_sales_amount = this.dataArray[i].total_sales_amount + this.dataArray[i].total_sales[j].pharmacy_sales
                            this.totalProfit = this.totalProfit + (this.dataArray[i].total_sales[j].pharmacy_sales - this.dataArray[i].total_sales[j].pharmacy_cost)
                            this.dataArray[i].true_sales.push(this.dataArray[i].total_sales[j])
                        } else {
                            this.dataArray[i].false_sales.push(this.dataArray[i].total_sales[j])
                        }
                    }
                    //  this.dataArray[i].conversion = this.getData((this.dataArray[i].true_sales.length * 100) / this.dataArray[i].total_sales.length)
                    this.dataArray[i].conversion = this.dataArray[i].true_sales.length
                    if (this.dataArray[i].true_sales.length > 0) {
                        this.dataArray[i].sales_per_pres = parseFloat(this.getData(this.dataArray[i].total_sales_amount / this.dataArray[i].true_sales.length))
                    }
                }
                for (var i = 0; i < this.dataArray.length; i++) {
                    this.dataArray[i].orderPercentage = (this.dataArray[i].true_sales.length * 100) / this.totalPharmacySalesLength
                    this.totalPrescriptions = this.totalPrescriptions + this.dataArray[i].total_sales.length
                    this.totalSales = this.totalSales + this.dataArray[i].true_sales.length
                    this.totalSalesAmount = this.totalSalesAmount + this.dataArray[i].total_sales_amount
                }
                // this.totalConversion = this.getData((this.totalSales * 100) / this.totalPrescriptions)
                // this.totalSalesPerPres = this.totalSalesPerPres + parseFloat(this.getData(this.totalSalesAmount / this.totalSales))
                //calculate amount for walkin patients//
                for (var i = 0; i < walkinTrue.length; i++) {
                    this.totalProfit = this.totalProfit + (walkinTrue[i].total_amount - walkinTrue[i].cost_amount)
                    this.totalSalesWalkin = this.totalSalesWalkin + walkinTrue[i].total_amount
                }
                this.totalSalesDoctorPlusWalkin = this.getData(this.totalSalesAmount + this.totalSalesWalkin)
                if (this.doctorArray.length > this.dataArray.length) {
                    for (var i = 0; i < this.doctorArray.length; i++) {
                        var boolean = false
                        for (var j = 0; j < this.dataArray.length; j++) {
                            if (this.doctorArray[i]._id.toString() == this.dataArray[j]._id.toString()) {
                                boolean = true
                                break
                            }
                        }
                        if (boolean == false) {
                            this.dataArray.push({
                                _id: this.doctorArray[i]._id,
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
                    this.dataArray[i].totalPrescriptionsPercent = this.getData(this.checkIsNan(this.getPercentage(this.dataArray[i].total_sales.length, this.totalPrescriptions)))
                    this.dataArray[i].trueSalesPercent = this.getData(this.checkIsNan(this.getPercentage(this.dataArray[i].true_sales.length, this.totalSales)))
                    this.dataArray[i].trueSalesAmtPercent = this.getData(this.checkIsNan(this.getPercentage(this.dataArray[i].total_sales_amount, this.totalSalesDoctorPlusWalkin)))
                }
                this.otherSalesPercent = this.getData(this.checkIsNan(this.getPercentage(this.otherSales.length, this.totalSales)))
                this.totalSalesOtherPercent = this.getData(this.checkIsNan(this.getPercentage(this.totalSalesWalkin, this.totalSalesDoctorPlusWalkin)))
                this.totalSalesPerPresPercent = this.getData(this.checkIsNan(this.totalSalesWalkin / this.otherSales.length))
                this.totalSalesPerPres = parseFloat(this.getData(this.totalSalesDoctorPlusWalkin / this.totalSales))
                var dateArray = []
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
                    var total_walkin_amount: number = 0
                    var total_prep_profit_amount: number = 0
                    var total_walkin_profit_amount: number = 0
                    var total_prep_orders: number = 0
                    for (var j = 0; j < this.dataArray.length; j++) {
                        for (var k = 0; k < this.dataArray[j].total_sales.length; k++) {
                            if (this.dataArray[j].total_sales[k].pharmacy == true) {
                                if (newMaxArray[i] == this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'yyyy-MM-dd')) {
                                    total_prep_amount += this.dataArray[j].total_sales[k].pharmacy_sales
                                    total_prep_profit_amount += (this.dataArray[j].total_sales[k].pharmacy_sales - this.dataArray[j].total_sales[k].pharmacy_cost)
                                    total_prep_orders++
                                    total_prep_orders = total_prep_orders + 1
                                }
                            }
                        }
                    }
                    this.prescriptionOrdersArray.push(total_prep_orders)
                    this.prescriptionArray.push(total_prep_amount)
                    this.prescriptionProfitArray.push(total_prep_profit_amount)
                    var total_walkin_orders: number = 0
                    for (var l = 0; l < this.otherSales.length; l++) {
                        //total_walkin_orders = (this.otherSales.length)
                        if (newMaxArray[i] == this.datePipe.transform(this.otherSales[l].createdAt, 'yyyy-MM-dd')) {
                            total_walkin_amount += this.otherSales[l].total_amount
                            total_walkin_profit_amount += (this.otherSales[l].total_amount - this.otherSales[l].cost_amount)
                            total_walkin_orders++
                            total_walkin_orders = total_walkin_orders + 1

                        }
                    }
                    this.standaloneOrdersArray.push(total_walkin_orders)
                    this.standaloneArray.push(total_walkin_amount)
                    this.totalSalesArray.push(total_prep_amount + total_walkin_amount)
                    this.standaloneProfitArray.push(total_walkin_profit_amount)
                    this.totalSalesProfitArray.push(total_prep_profit_amount + total_walkin_profit_amount)
                    this.totalSalesOrdersArray.push(total_prep_orders + total_walkin_orders)
                    dateArray.push(newMaxArray[i])
                }
                this.maxSaleOfDay = Math.max(...this.totalSalesArray)
                this.minSaleOfDay = Math.min(...this.totalSalesArray)
                var newMaxValue = -1
                newMaxValue = this.totalSalesArray.findIndex(x => x == this.maxSaleOfDay);
                this.maxCollectionDate = newMaxArray[newMaxValue]
                var newMinValue = -1
                newMinValue = this.totalSalesArray.findIndex(x => x == this.minSaleOfDay);
                this.minCollectionDate = newMaxArray[newMinValue]
                /////////// set chart detail ///////////////
                this.lineChartData = [{
                    data: this.totalSalesArray,
                    label: 'Total Sales'
                }];
                this.datesArray = dateArray
                this.lineChartLabels = this.datesArray
                /////////// set chart detail ///////////////
                /////////////Chart Profit/////////////////////
                this.maxProfitOfDay = Math.max(...this.totalSalesProfitArray)
                this.minProfitOfDay = Math.min(...this.totalSalesProfitArray)
                this.maxOrderOfDay = Math.max(...this.totalSalesOrdersArray)
                this.minOrderOfDay = Math.min(...this.totalSalesOrdersArray)
                var newMaxProfit = -1
                newMaxProfit = this.totalSalesProfitArray.findIndex(x => x == this.maxProfitOfDay);
                this.maxprofitDate = maxArray[newMaxProfit]
                var newMinProfit = -1
                newMinProfit = this.totalSalesProfitArray.findIndex(x => x == this.minProfitOfDay);
                this.minProfitDate = maxArray[newMinProfit]
                var newMinOrder = -1
                newMinOrder = this.totalSalesOrdersArray.findIndex(x => x == this.minOrderOfDay);
                this.minOrderDate = maxArray[newMinOrder]
                var newMaxOrder = -1
                newMaxOrder = this.totalSalesOrdersArray.findIndex(x => x == this.maxOrderOfDay);
                this.maxOrderDate = maxArray[newMaxOrder]
                this.lineChartData1 = [{
                    data: this.totalSalesProfitArray,
                    label: 'Total Profit'
                }];
                this.lineChartLabels1 = this.datesArray
                this.lineChartData2 = [{
                    data: this.totalSalesOrdersArray,
                    label: 'Total Orders'
                }];
                this.lineChartLabels2 = this.datesArray
                var profitDateArray = []
                var orderDateArray = []
                for (var i = 0; i < dateArray.length; i++) {
                    profitDateArray.push(dateArray[i])
                    orderDateArray.push(dateArray[i])
                }
                /////////////////////////// Map Date Sort Logic //////////////////////
                this.sortSales(dateArray, this.totalSalesArray);
                this.sortProfit(profitDateArray, this.totalSalesProfitArray);
                this.sortOrder(orderDateArray, this.totalSalesOrdersArray);
                ///////////////////////// Map End sort Logic //////////////////////// 

                //////////////////////////Top 10 Products///////////////////
                for (var i = 0; i < result.data1.length; i++) {
                    for (var j = 0; j < result.data1[i].medicines.length; j++) {
                        for (var k = 0; k < result.data1[i].medicines[j].amount.length; k++) {
                            var boolean = false
                            for (var a = 0; a < this.topProfitArray.length; a++) {
                                if(result.data1[i].medicines[j].opt[k] == this.topProfitArray[a].type &&
                                    result.data1[i].medicines[j].product[k]==this.topProfitArray[a].name){
                                    boolean = true
                                }
                            }
                            if (boolean == false) {
                                this.topProfitArray.push({
                                    type: result.data1[i].medicines[j].opt[k],
                                    name: result.data1[i].medicines[j].product[k],
                                    sales:0,
                                    occurence: 0,
                                    percentage: 0,
                                    profit: 0,
                                    profitPer: 0 
                                })
                            }
                        }
                    }
                }
                console.log(result.data1)
                var totalMRP:number = 0
                var totalPrate:number = 0
                for (var a = 0; a < this.topProfitArray.length; a++) {
                    for (var i = 0; i < result.data1.length; i++) {
                        for (var j = 0; j < result.data1[i].medicines.length; j++) {
                            for (var k = 0; k < result.data1[i].medicines[j].amount.length; k++) {
                                if(result.data1[i].medicines[j].opt[k] == this.topProfitArray[a].type &&
                                    result.data1[i].medicines[j].product[k]==this.topProfitArray[a].name){
                                    this.topProfitArray[a].occurence++
                                    this.topProfitArray[a].sales+=result.data1[i].medicines[j].amount[k]
                                    this.topProfitArray[a].percentage = (this.topProfitArray[a].sales*100)/(this.totalWalkinSales+this.totalPharmacySales)
                                    totalPrate = (result.data1[i].medicines[j].medicineStock[k].data.p_rate/(result.data1[i].medicines[j].medicineStock[k].data.pack_units*result.data1[i].medicines[j].medicineStock[k].data.pack_quantity))*result.data1[i].medicines[j].quantity[k]
                                    totalMRP = (result.data1[i].medicines[j].mrp[k])//.data.mrp/(result.data1[i].medicines[j].medicineStock[k].data.pack_units*result.data1[i].medicines[j].medicineStock[k].data.pack_quantity))*result.data1[i].medicines[j].quantity[k]
                                    this.topProfitArray[a].profit += (totalMRP - totalPrate)
                                    this.topProfitArray[a].profitPer =(this.topProfitArray[a].profit*100)/(this.totalProfitPrec+this.totalWalkinProfit)
                                }
                            }
                        }
                    }
                }             
                /////////////////////////Top 10 End ///////////////////////
            }
            this.getFiveMinData()
            this.loading = false
        }, err => {
            console.log(err)
        })
    }
    getFiveMinData(){
        this.finalTimeMinArray = []
        this.fiveMinPatintArray = []
        this.fiveMinArray = []
        var localShiftArray = []
        var ii = localShiftArray[0]
        for (var i = 0; i < this.doctorData.consultation_schedule.length; i++) {
            for (var k = 0; k < this.doctorData.consultation_schedule[i].shifts.length; k++) {
                localShiftArray.push((parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute))
                localShiftArray.push((parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute) )
                this.otherRange((parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].fromTime.minute),
                    (parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.hour)*60)+parseInt(this.doctorData.consultation_schedule[i].shifts[k].toTime.minute),
                    5)
            }
        }
        for (var i = 0; i < this.fiveMinArray.length; i++) {
            var amount_data = 0
            for (var j = 0; j < this.dataArray.length; j++) {
                for (var k = 0; k < this.dataArray[j].total_sales.length; k++) {
                    if(parseInt(this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'HH'))*60+parseInt(this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'mm'))>this.fiveMinArray[i]&&
                        parseInt(this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'HH'))*60+parseInt(this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'mm'))<=this.fiveMinArray[i+1]){
                        amount_data=this.dataArray[j].total_sales[k].pharmacy_sales
                    }
                }
            }
            for (var l = 0; l < this.otherSales.length; l++) {
                if(parseInt(this.datePipe.transform(this.otherSales[l].createdAt, 'HH'))*60+parseInt(this.datePipe.transform(this.otherSales[l].createdAt, 'mm'))>this.fiveMinArray[i]&&
                        parseInt(this.datePipe.transform(this.otherSales[l].createdAt, 'HH'))*60+parseInt(this.datePipe.transform(this.otherSales[l].createdAt, 'mm'))<=this.fiveMinArray[i+1]){
                        amount_data=this.otherSales[l].total_amount
                }
            }
            this.fiveMinPatintArray.push(amount_data)
        }
        for (var i = 0; i < this.fiveMinArray.length; i++) {
            this.finalTimeMinArray.push(Math.trunc(this.fiveMinArray[i]/60) + ":" + Math.trunc(this.fiveMinArray[i]%60))
        }
        console.log(this.fiveMinPatintArray)
        console.log(this.finalTimeMinArray)
        this.lineChartData = [
            {data: this.fiveMinPatintArray, label: 'Sales'},
        ]
        this.lineChartLabels = this.finalTimeMinArray
    }
    otherRange(start, end, step) {
        if (step == undefined) {
            step = 1;
        }
        if (step > 0) {
            for (var i = start; i <= end; i += step) {
                 this.fiveMinArray.push(i);
            }
        } else {
            for (var i = start; i >= end; i += step) {
              this.fiveMinArray.push(i);
            }
        }
         return this.fiveMinArray
    }
    getSorted(abc){
        if(abc==1){
            this.topProfitArray.sort((a, b) => parseInt(b.occurence)-parseInt(a.occurence));
        }else if(abc == 2){
            this.topProfitArray.sort((a, b) => parseInt(b.sales)-parseInt(a.sales));
        }else{
            this.topProfitArray.sort((a, b) => parseInt(b.profit)-parseInt(a.profit));
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
    sortProfit(a, b) {
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
        var newDateArray1 = []
        for (var i = 0; i < a.length; i++) {
            newDateArray1.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'))
        }
        this.lineChartLabels1 = newDateArray1
    }
    sortOrder(a, b) {
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
        var newDateArray3 = []
        for (var i = 0; i < a.length; i++) {
            newDateArray3.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'))
        }
        this.lineChartLabels2 = newDateArray3
    }
    go() {
        this.activatedtab = 0
        this.totalPatient = 0
        this.totalWalkinPatient = 0
        this.totalWalkinCashPatient = 0
        this.totalWalkinOnlinePatient = 0
        this.totalPharmacySales = 0
        this.totalWalkinSales = 0
        this.totalPharmacySalesLength = 0
        this.maxSaleOfDay = 0
        this.minSaleOfDay = 0
        this.prescriptionsSalespercentage = 0
        this.NonprescriptionsSalespercentage = 0
        this.totalSalePercentage = 0
        this.totalNonSalePercentage = 0
        this.totalPrescriptions = 0
        this.totalSales = 0
        this.totalSalesAmount = 0
        this.totalConversion = 0
        this.totalSalesPerPres = 0
        this.totalSalesWalkin = 0
        this.totalProfit = 0
        this.totalSalesDoctorPlusWalkin = 0
        this.otherSalesPercent = 0
        this.totalSalesOtherPercent = 0
        this.totalSalesPerPresPercent = 0
        this.totalCashAmount = 0
        this.totalOnlineAmount = 0
        this.totalWalkinCashAmount = 0
        this.totalWalkinOnlineAmount = 0
        this.maxSaleInADay = 0
        this.totalWalkinProfit = 0
        this.maxProfitOfDay = 0
        this.minProfitOfDay = 0
        this.maxOrderOfDay = 0
        this.minOrderOfDay = 0
        this.dateDiff = 0
        this.prescriptionArray = []
        this.totalSalesArray = []
        this.standaloneArray = []
        this.prescriptionProfitArray = []
        this.totalSalesProfitArray = []
        this.standaloneProfitArray = []
        this.prescriptionOrdersArray = []
        this.totalSalesOrdersArray = []
        this.standaloneOrdersArray = []
        this.topProfitArray = []
        var object
        object = {}
        object.start_date = this.fromDate1
        object.end_date = this.toDate1
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning")
            return
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) ! > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning")
            return
        }
        this.loading = true
        this.userService.PharmacyAnalytics(object).subscribe((result) => {
            console.log(result)
            if (result.response) {
                var walkinTrue =[]
                var walkinFalse = []
                for (var i = 0; i < result.data1.length; i++) {
                    if(result.data1[i].walkin_patient){
                        walkinTrue.push(result.data1[i])
                    }else{
                        walkinFalse.push(result.data1[i])
                    }
                }
                var maxInData = []
                var maxArray = []
                var maxProfit = []
                var maxOrder = []
                var total_sales_length = 0
                this.doctorArray = result.dataDoctors
                for (var i = 0; i < result.data.length; i++) {
                    this.totalPatient = result.data.length
                    for (var j = 0; j < result.data[i].total_sales.length; j++) {
                        if (result.data[i].total_sales[j].pharmacy == true) {
                            this.totalPharmacySales += result.data[i].total_sales[j].pharmacy_sales
                            this.totalPharmacySalesLength++;
                            maxInData.push(result.data[i].total_sales[j].pharmacy_sales)
                            maxArray.push(this.datePipe.transform(result.data[i].total_sales[j].createdAt, 'yyyy-MM-dd'))
                            this.totalProfitPrec += result.data[i].total_sales[j].pharmacy_sales - result.data[i].total_sales[j].pharmacy_cost
                            maxProfit.push(result.data[i].total_sales[j].pharmacy_sales - result.data[i].total_sales[j].pharmacy_cost)
                            total_sales_length++;
                            if (result.data[i].total_sales[j].payment_mode_pharmacy == 'Cash') {
                                this.totalCashAmount += result.data[i].total_sales[j].pharmacy_sales
                                this.totalWalkinCashPatient++;
                            } else {
                                this.totalOnlineAmount += result.data[i].total_sales[j].pharmacy_sales
                                this.totalWalkinOnlinePatient++;
                            }
                        }
                    }
                    maxOrder.push(result.data[i].total_sales.length)
                }
                console.log(walkinTrue)
                for (var i = 0; i < walkinTrue.length; i++) {
                    this.totalWalkinPatient = walkinTrue.length
                    this.totalWalkinSales += walkinTrue[i].total_amount
                    this.totalWalkinProfit += walkinTrue[i].total_amount - walkinTrue[i].cost_amount
                    maxProfit.push(walkinTrue[i].total_amount - walkinTrue[i].cost_amount)
                    maxInData.push(walkinTrue[i].total_amount)
                    maxArray.push(this.datePipe.transform(walkinTrue[i].createdAt, 'yyyy-MM-dd'))
                    maxOrder.push(walkinTrue.length)
                    if (walkinTrue[i].payment_mode == 'Cash') {
                        this.totalWalkinCashAmount += walkinTrue[i].total_amount
                        this.totalWalkinCashPatient++;
                    } else {
                        this.totalWalkinOnlineAmount += walkinTrue[i].total_amount
                        this.totalWalkinOnlinePatient++;
                    }
                }
                console.log(this.totalProfitPrec, this.totalWalkinProfit)
                var diff = Math.abs(new Date(this.toDate).getTime() - new Date(this.fromDate).getTime());
                this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
                this.totalWalkinOnlinePatient = (this.totalWalkinOnlinePatient * 100) / (total_sales_length + this.totalWalkinPatient)
                this.totalWalkinCashPatient = (this.totalWalkinCashPatient * 100) / (total_sales_length + this.totalWalkinPatient)
                this.prescriptionsSalespercentage = (this.totalPharmacySales / (this.totalPharmacySales + this.totalWalkinSales)) * 100
                this.NonprescriptionsSalespercentage = (this.totalWalkinSales / (this.totalPharmacySales + this.totalWalkinSales)) * 100
                this.totalSalePercentage = (this.totalPharmacySalesLength / (this.totalPharmacySalesLength + this.totalWalkinPatient)) * 100
                this.totalNonSalePercentage = (this.totalWalkinPatient / (this.totalPharmacySalesLength + this.totalWalkinPatient)) * 100
                this.dataArray = result.data
                this.otherSales = walkinTrue
                console.log(this.totalPharmacySalesLength)
                for (var i = 0; i < this.dataArray.length; i++) {
                    this.dataArray[i].true_sales = []
                    this.dataArray[i].false_sales = []
                    this.dataArray[i].total_sales_amount = 0
                    this.dataArray[i].sales_per_pres = 0
                    this.dataArray[i].orderPercentage = 0
                    for (var j = 0; j < this.dataArray[i].total_sales.length; j++) {
                        if (this.dataArray[i].total_sales[j].pharmacy) {
                            this.dataArray[i].total_sales_amount = this.dataArray[i].total_sales_amount + this.dataArray[i].total_sales[j].pharmacy_sales
                            this.totalProfit = this.totalProfit + (this.dataArray[i].total_sales[j].pharmacy_sales - this.dataArray[i].total_sales[j].pharmacy_cost)
                            this.dataArray[i].true_sales.push(this.dataArray[i].total_sales[j])
                        } else {
                            this.dataArray[i].false_sales.push(this.dataArray[i].total_sales[j])
                        }
                    }
                    //  this.dataArray[i].conversion = this.getData((this.dataArray[i].true_sales.length * 100) / this.dataArray[i].total_sales.length)
                    this.dataArray[i].conversion = this.dataArray[i].true_sales.length
                    if (this.dataArray[i].true_sales.length > 0) {
                        this.dataArray[i].sales_per_pres = parseFloat(this.getData(this.dataArray[i].total_sales_amount / this.dataArray[i].true_sales.length))
                    }
                }
                for (var i = 0; i < this.dataArray.length; i++) {
                    this.dataArray[i].orderPercentage = (this.dataArray[i].true_sales.length * 100) / this.totalPharmacySalesLength
                    this.totalPrescriptions = this.totalPrescriptions + this.dataArray[i].total_sales.length
                    this.totalSales = this.totalSales + this.dataArray[i].true_sales.length
                    this.totalSalesAmount = this.totalSalesAmount + this.dataArray[i].total_sales_amount
                }
                // this.totalConversion = this.getData((this.totalSales * 100) / this.totalPrescriptions)
                // this.totalSalesPerPres = this.totalSalesPerPres + parseFloat(this.getData(this.totalSalesAmount / this.totalSales))
                //calculate amount for walkin patients//
                for (var i = 0; i < walkinTrue.length; i++) {
                    this.totalProfit = this.totalProfit + (walkinTrue[i].total_amount - walkinTrue[i].cost_amount)
                    this.totalSalesWalkin = this.totalSalesWalkin + walkinTrue[i].total_amount
                }
                this.totalSalesDoctorPlusWalkin = this.getData(this.totalSalesAmount + this.totalSalesWalkin)
                if (this.doctorArray.length > this.dataArray.length) {
                    for (var i = 0; i < this.doctorArray.length; i++) {
                        var boolean = false
                        for (var j = 0; j < this.dataArray.length; j++) {
                            if (this.doctorArray[i]._id.toString() == this.dataArray[j]._id.toString()) {
                                boolean = true
                                break
                            }
                        }
                        if (boolean == false) {
                            this.dataArray.push({
                                _id: this.doctorArray[i]._id,
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
                    this.dataArray[i].totalPrescriptionsPercent = this.getData(this.checkIsNan(this.getPercentage(this.dataArray[i].total_sales.length, this.totalPrescriptions)))
                    this.dataArray[i].trueSalesPercent = this.getData(this.checkIsNan(this.getPercentage(this.dataArray[i].true_sales.length, this.totalSales)))
                    this.dataArray[i].trueSalesAmtPercent = this.getData(this.checkIsNan(this.getPercentage(this.dataArray[i].total_sales_amount, this.totalSalesDoctorPlusWalkin)))
                }
                this.otherSalesPercent = this.getData(this.checkIsNan(this.getPercentage(this.otherSales.length, this.totalSales)))
                this.totalSalesOtherPercent = this.getData(this.checkIsNan(this.getPercentage(this.totalSalesWalkin, this.totalSalesDoctorPlusWalkin)))
                this.totalSalesPerPresPercent = this.getData(this.checkIsNan(this.totalSalesWalkin / this.otherSales.length))
                this.totalSalesPerPres = parseFloat(this.getData(this.totalSalesDoctorPlusWalkin / this.totalSales))
                var dateArray = []
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
                    var total_walkin_amount: number = 0
                    var total_prep_profit_amount: number = 0
                    var total_walkin_profit_amount: number = 0
                    var total_prep_orders: number = 0
                    for (var j = 0; j < this.dataArray.length; j++) {
                        for (var k = 0; k < this.dataArray[j].total_sales.length; k++) {
                            if (this.dataArray[j].total_sales[k].pharmacy == true) {
                                if (newMaxArray[i] == this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'yyyy-MM-dd')) {
                                    total_prep_amount += this.dataArray[j].total_sales[k].pharmacy_sales
                                    total_prep_profit_amount += (this.dataArray[j].total_sales[k].pharmacy_sales - this.dataArray[j].total_sales[k].pharmacy_cost)
                                    total_prep_orders++
                                    total_prep_orders = total_prep_orders + 1
                                }
                            }
                        }
                    }
                    this.prescriptionOrdersArray.push(total_prep_orders)
                    this.prescriptionArray.push(total_prep_amount)
                    this.prescriptionProfitArray.push(total_prep_profit_amount)
                    var total_walkin_orders: number = 0
                    for (var l = 0; l < this.otherSales.length; l++) {
                        //total_walkin_orders = (this.otherSales.length)
                        if (newMaxArray[i] == this.datePipe.transform(this.otherSales[l].createdAt, 'yyyy-MM-dd')) {
                            total_walkin_amount += this.otherSales[l].total_amount
                            total_walkin_profit_amount += (this.otherSales[l].total_amount - this.otherSales[l].cost_amount)
                            total_walkin_orders++
                            total_walkin_orders = total_walkin_orders + 1

                        }
                    }
                    this.standaloneOrdersArray.push(total_walkin_orders)
                    this.standaloneArray.push(total_walkin_amount)
                    this.totalSalesArray.push(total_prep_amount + total_walkin_amount)
                    this.standaloneProfitArray.push(total_walkin_profit_amount)
                    this.totalSalesProfitArray.push(total_prep_profit_amount + total_walkin_profit_amount)
                    this.totalSalesOrdersArray.push(total_prep_orders + total_walkin_orders)
                    dateArray.push(newMaxArray[i])
                }
                this.maxSaleOfDay = Math.max(...this.totalSalesArray)
                this.minSaleOfDay = Math.min(...this.totalSalesArray)
                var newMaxValue = -1
                newMaxValue = this.totalSalesArray.findIndex(x => x == this.maxSaleOfDay);
                this.maxCollectionDate = newMaxArray[newMaxValue]
                var newMinValue = -1
                newMinValue = this.totalSalesArray.findIndex(x => x == this.minSaleOfDay);
                this.minCollectionDate = newMaxArray[newMinValue]
                /////////// set chart detail ///////////////
                this.lineChartData = [{
                    data: this.totalSalesArray,
                    label: 'Total Sales'
                }];
                this.datesArray = dateArray
                this.lineChartLabels = this.datesArray
                /////////// set chart detail ///////////////
                /////////////Chart Profit/////////////////////
                this.maxProfitOfDay = Math.max(...this.totalSalesProfitArray)
                this.minProfitOfDay = Math.min(...this.totalSalesProfitArray)
                this.maxOrderOfDay = Math.max(...this.totalSalesOrdersArray)
                this.minOrderOfDay = Math.min(...this.totalSalesOrdersArray)
                var newMaxProfit = -1
                newMaxProfit = this.totalSalesProfitArray.findIndex(x => x == this.maxProfitOfDay);
                this.maxprofitDate = maxArray[newMaxProfit]
                var newMinProfit = -1
                newMinProfit = this.totalSalesProfitArray.findIndex(x => x == this.minProfitOfDay);
                this.minProfitDate = maxArray[newMinProfit]
                var newMinOrder = -1
                newMinOrder = this.totalSalesOrdersArray.findIndex(x => x == this.minOrderOfDay);
                this.minOrderDate = maxArray[newMinOrder]
                var newMaxOrder = -1
                newMaxOrder = this.totalSalesOrdersArray.findIndex(x => x == this.maxOrderOfDay);
                this.maxOrderDate = maxArray[newMaxOrder]
                this.lineChartData1 = [{
                    data: this.totalSalesProfitArray,
                    label: 'Total Profit'
                }];
                this.lineChartLabels1 = this.datesArray
                this.lineChartData2 = [{
                    data: this.totalSalesOrdersArray,
                    label: 'Total Orders'
                }];
                this.lineChartLabels2 = this.datesArray
                var profitDateArray = []
                var orderDateArray = []
                for (var i = 0; i < dateArray.length; i++) {
                    profitDateArray.push(dateArray[i])
                    orderDateArray.push(dateArray[i])
                }
                /////////////////////////// Map Date Sort Logic //////////////////////
                this.sortSales(dateArray, this.totalSalesArray);
                this.sortProfit(profitDateArray, this.totalSalesProfitArray);
                this.sortOrder(orderDateArray, this.totalSalesOrdersArray);
                ///////////////////////// Map End sort Logic //////////////////////// 

                //////////////////////////Top 10 Products///////////////////
                for (var i = 0; i < result.data1.length; i++) {
                    for (var j = 0; j < result.data1[i].medicines.length; j++) {
                        for (var k = 0; k < result.data1[i].medicines[j].amount.length; k++) {
                            var boolean = false
                            for (var a = 0; a < this.topProfitArray.length; a++) {
                                if(result.data1[i].medicines[j].opt[k] == this.topProfitArray[a].type &&
                                    result.data1[i].medicines[j].product[k]==this.topProfitArray[a].name){
                                    boolean = true
                                }
                            }
                            if (boolean == false) {
                                this.topProfitArray.push({
                                    type: result.data1[i].medicines[j].opt[k],
                                    name: result.data1[i].medicines[j].product[k],
                                    sales:0,
                                    occurence: 0,
                                    percentage: 0,
                                    profit: 0,
                                    profitPer: 0 
                                })
                            }
                        }
                    }
                }
                console.log(result.data1)
                var totalMRP:number = 0
                var totalPrate:number = 0
                for (var a = 0; a < this.topProfitArray.length; a++) {
                    for (var i = 0; i < result.data1.length; i++) {
                        for (var j = 0; j < result.data1[i].medicines.length; j++) {
                            for (var k = 0; k < result.data1[i].medicines[j].amount.length; k++) {
                                if(result.data1[i].medicines[j].opt[k] == this.topProfitArray[a].type &&
                                    result.data1[i].medicines[j].product[k]==this.topProfitArray[a].name){
                                    this.topProfitArray[a].occurence++
                                    this.topProfitArray[a].sales+=result.data1[i].medicines[j].amount[k]
                                    this.topProfitArray[a].percentage = (this.topProfitArray[a].sales*100)/(this.totalWalkinSales+this.totalPharmacySales)
                                    totalPrate = (result.data1[i].medicines[j].medicineStock[k].data.p_rate/(result.data1[i].medicines[j].medicineStock[k].data.pack_units*result.data1[i].medicines[j].medicineStock[k].data.pack_quantity))*result.data1[i].medicines[j].quantity[k]
                                    totalMRP = (result.data1[i].medicines[j].mrp[k])//.data.mrp/(result.data1[i].medicines[j].medicineStock[k].data.pack_units*result.data1[i].medicines[j].medicineStock[k].data.pack_quantity))*result.data1[i].medicines[j].quantity[k]
                                    this.topProfitArray[a].profit += (totalMRP - totalPrate)
                                    this.topProfitArray[a].profitPer =(this.topProfitArray[a].profit*100)/(this.totalProfitPrec+this.totalWalkinProfit)
                                }
                            }
                        }
                    }
                }             
                /////////////////////////Top 10 End ///////////////////////
            }
            this.loading = false
        }, err => {
            console.log(err)
        })
    }
    getClass(i) {
        if (i == this.activatedtab) {
            return 'active'
        } else if (i < this.activatedtab) {
            return 'completed'
        }
    }
    getData(data) {
        if (isNaN(data)) {
            return 0
        } else if (data % 1 != 0) {
            return data.toFixed(2)
        } else {
            return data
        }
    }
    getDoctorName(id) {
        for (var i = 0; i < this.doctorArray.length; i++) {
            if (this.doctorArray[i]._id == id) {
                return (this.doctorArray[i].first_name)
            }
        }
    }
    checkIsNan(data) {
        if (isNaN(data)) {
            return 0
        } else {
            return data
        }
    }
    getPercentage(data, total) {
        return ((data * 100) / total)
    }
    getOrderDate(date) {
        var count: number = 0
        for (var i = 0; i < this.dataArray.length; i++) {
            for (var j = 0; j < this.dataArray[i].total_sales.length; j++) {
                if (new Date(date).setHours(0, 0, 0, 0) == new Date(this.dataArray[i].total_sales[j].createdAt).setHours(0, 0, 0, 0)) {
                    count++;
                }
            }
        }
        return count
    }

    getDataCeil(data) {
        return Math.ceil(data)
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
}
