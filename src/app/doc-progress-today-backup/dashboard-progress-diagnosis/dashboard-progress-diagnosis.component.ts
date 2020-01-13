import { Component, OnInit } from '@angular/core';
 import { UserService } from '../../providers/user.service';
 import { DatePipe } from '@angular/common';
 import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard-progress-diagnosis',
  templateUrl: './dashboard-progress-diagnosis.component.html',
  styleUrls: ['./dashboard-progress-diagnosis.component.css']
})
export class DashboardProgressDiagnosisComponent implements OnInit {
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
    maxSaleInADay
    totalWalkinProfit
    maxCollectionDate
    minCollectionDate
    maxOrderOfDay
    minOrderOfDay
    minOrderDate
    maxOrderDate
    dateDiff
    totalMale
    totalFemale
    totalMalePercentage
    totalFemalePercentage
    totalWalkInPatientsbyDoc
    totalAppointmentPatients
    totalEmergencyPatients
    totalWalkInPatientsbyDocPercentage
    totalAppointmentPatientsPercentage
    totalEmergencyPatientsPercentage
    avgAge
    newPatient
    prescriptionArray
    totalSalesArray
    standaloneArray
    totalCashAmount
    totalOnlineAmount
    totalWalkinCashAmount
    totalWalkinOnlineAmount
    prescriptionOrdersArray
    totalSalesOrdersArray
    standaloneOrdersArray
    totalPrecOrdersPercentage
    totalOthersOrdersPercentage
    topProfitArray
    fromDate = new Date()
    toDate = new Date()
    fromDate1 = new Date()
    toDate1 = new Date()
    newDate = new Date()
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }
    datesArray

    //CHARTS ////////////
    public lineChartData: Array < any > = [{
            data: [],
            label: 'Total Sales'
        },
        // {data: [], label: 'Prescription Sales'},
        // {data: [], label: 'Standalone Sales'}
    ];
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
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    //charts end /////////

    ////Chart Orders //////////////
    public lineChartData2: Array < any > = [{
            data: [],
            label: 'Total Profit'
        },
        // {data: [], label: 'Prescription Profit'},
        // {data: [], label: 'Standalone Profit'}
    ];
    public lineChartLabels2: Array < any > = [];
    public lineChartOptions2: any = {
        responsive: true,
        legend: {
            display: false,
        }
    };
    public lineChartLegend2: boolean = true;
    public lineChartType2: string = 'line';
    //charts end ////////

    constructor(private userService: UserService, private datePipe: DatePipe, private toastr: ToastrService) {}

    ngOnInit() {
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        console.log(this.doctorData)
        this.activatedtab = 0
        this.newDate.setDate(this.newDate.getDate() + 1)
        this.fromDate1.setDate(this.fromDate1.getDate() - 6)
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
        this.maxSaleInADay = 0
        this.totalWalkinProfit = 0
        this.maxCollectionDate = 0
        this.minCollectionDate = 0
        this.maxOrderOfDay = 0
        this.minOrderOfDay = 0
        this.minOrderDate = 0
        this.maxOrderDate = 0
        this.dateDiff = 0
        this.totalMale = 0
        this.totalFemale = 0
        this.totalMalePercentage = 0
        this.totalFemalePercentage = 0
        this.totalWalkInPatientsbyDoc = 0
        this.totalAppointmentPatients = 0
        this.totalEmergencyPatients = 0
        this.totalWalkInPatientsbyDocPercentage = 0
        this.totalAppointmentPatientsPercentage = 0
        this.totalEmergencyPatientsPercentage = 0
        this.avgAge = 0
        this.newPatient = 0
        this.prescriptionArray = []
        this.totalSalesArray = []
        this.standaloneArray = []
        this.totalCashAmount = 0
        this.totalOnlineAmount = 0
        this.totalWalkinCashAmount = 0
        this.totalWalkinOnlineAmount = 0
        this.prescriptionOrdersArray = []
        this.totalSalesOrdersArray = []
        this.standaloneOrdersArray = []
        this.totalPrecOrdersPercentage = 0
        this.totalOthersOrdersPercentage = 0
        this.topProfitArray = []
        if (i == 1) {
            object.start_date = date
        } 
        // else if (i == 1) {
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
        this.userService.DiagnosticsAnalytics(object).subscribe((result) => {
            console.log(result)
            if (result.response) {
                var walkinTrue = []
                var walkinFalse = []
                for (var i = 0; i < result.data1.length; i++) {
                    if(result.data1[i].walkin_patient){
                        walkinTrue.push(result.data1[i])
                    }else{
                        walkinFalse.push(result.data1[i])
                    }
                }
                console.log(walkinTrue)
                console.log(walkinFalse)
                var maxInData = []
                var maxArray = []
                var maxProfit = []
                var maxOrder = []
                var age = 0
                var latestArray
                this.doctorArray = result.dataDoctors
                console.log(this.doctorArray)
                var total_sales_length = 0
                for (var i = 0; i < result.data.length; i++) {
                    this.totalPatient = result.data.length
                    for (var j = 0; j < result.data[i].total_sales.length; j++) {
                        if (result.data[i].total_sales[j].diagnostics == true) {
                            this.totalPharmacySalesLength++
                            this.totalPharmacySales += result.data[i].total_sales[j].investigation_cost
                            maxInData.push(result.data[i].total_sales[j].investigation_cost)
                            maxArray.push(this.datePipe.transform(result.data[i].total_sales[j].createdAt, 'yyyy-MM-dd'))
                            total_sales_length++
                            if (result.data[i].total_sales[j].payment_mode_diagnostics == 'Cash') {
                                this.totalCashAmount += result.data[i].total_sales[j].investigation_cost
                                this.totalWalkinCashPatient++
                            } else {
                                this.totalOnlineAmount += result.data[i].total_sales[j].investigation_cost
                                this.totalWalkinOnlinePatient++
                            }
                            if (result.data[i].total_sales[j].registration.age) {
                                age += result.data[i].total_sales[j].registration.age
                            }
                            if (result.data[i].total_sales[j].registration.lastVisit.status == false) {
                                this.newPatient++
                            }
                        }
                    }
                    maxOrder.push(result.data[i].total_sales.length)
                }
                for (var i = 0; i < walkinTrue.length; i++) {
                    this.totalWalkinPatient = walkinTrue.length
                    this.totalWalkinSales += walkinTrue[i].total_amount
                    maxProfit.push(walkinTrue[i].total_amount - walkinTrue[i].cost_amount)
                    maxInData.push(walkinTrue[i].total_amount)
                    maxArray.push(this.datePipe.transform(walkinTrue[i].createdAt, 'yyyy-MM-dd'))
                    maxOrder.push(walkinTrue.length)
                    if (walkinTrue[i].payment_mode == 'Cash') {
                        this.totalWalkinCashAmount += walkinTrue[i].total_amount
                        this.totalWalkinCashPatient++
                    } else {
                        this.totalWalkinOnlineAmount += walkinTrue[i].total_amount
                        this.totalWalkinOnlinePatient++
                    }
                }
                var diff = Math.abs(this.toDate.getTime() - this.fromDate.getTime());
                this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
                this.totalWalkinCashPatient = (this.totalWalkinCashPatient * 100) / (total_sales_length + this.totalWalkinPatient)
                this.totalWalkinOnlinePatient = (this.totalWalkinOnlinePatient * 100) / (total_sales_length + this.totalWalkinPatient)
                this.totalPrecOrdersPercentage = (this.totalPharmacySalesLength * 100) / (total_sales_length + this.totalWalkinPatient)
                this.totalOthersOrdersPercentage = (this.totalWalkinPatient * 100) / (total_sales_length + this.totalWalkinPatient)
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
                        if (this.dataArray[i].total_sales[j].diagnostics) {
                            this.dataArray[i].total_sales_amount = this.dataArray[i].total_sales_amount + this.dataArray[i].total_sales[j].investigation_cost

                            this.dataArray[i].true_sales.push(this.dataArray[i].total_sales[j])
                        } else {
                            this.dataArray[i].false_sales.push(this.dataArray[i].total_sales[j])
                        }
                    }
                    this.dataArray[i].conversion = this.dataArray[i].true_sales.length
                    //this.dataArray[i].conversion = this.getData((this.dataArray[i].true_sales.length * 100) / this.dataArray[i].total_sales.length)
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
                this.totalConversion = this.getData((this.totalSales * 100) / this.totalPrescriptions)
                for (var i = 0; i < walkinTrue.length; i++) {
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
                    var total_prep_orders: number = 0
                    for (var j = 0; j < this.dataArray.length; j++) {
                        for (var k = 0; k < this.dataArray[j].total_sales.length; k++) {
                            if (this.dataArray[j].total_sales[k].diagnostics == true) {
                                if (newMaxArray[i] == this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'yyyy-MM-dd')) {
                                    total_prep_amount += this.dataArray[j].total_sales[k].investigation_cost
                                    total_prep_orders++
                                }
                            }
                        }
                    }
                    this.prescriptionOrdersArray.push(total_prep_orders)
                    this.prescriptionArray.push(total_prep_amount)
                    var total_walkin_orders: number = 0
                    for (var l = 0; l < this.otherSales.length; l++) {
                        //total_walkin_orders = (this.otherSales.length)
                        if (newMaxArray[i] == this.datePipe.transform(this.otherSales[l].createdAt, 'yyyy-MM-dd')) {
                            total_walkin_amount += this.otherSales[l].total_amount
                            total_walkin_orders++
                        }
                    }
                    this.standaloneOrdersArray.push(total_walkin_orders)
                    this.standaloneArray.push(total_walkin_amount)
                    this.totalSalesArray.push(total_prep_amount + total_walkin_amount)
                    this.totalSalesOrdersArray.push(total_prep_orders + total_walkin_orders)
                    dateArray.push(newMaxArray[i])
                }
                this.maxSaleOfDay = Math.max(...this.totalSalesArray)
                this.minSaleOfDay = Math.min(...this.totalSalesArray)
                var newMaxValue = -1
                newMaxValue = this.totalSalesArray.findIndex(x => x == this.maxSaleOfDay);
                this.maxCollectionDate = dateArray[newMaxValue]
                var newMinValue = -1
                newMinValue = this.totalSalesArray.findIndex(x => x == this.minSaleOfDay);
                this.minCollectionDate = dateArray[newMinValue]
                /////////// set chart detail ///////////////
                this.lineChartData = [{
                        data: this.totalSalesArray,
                        label: 'Total Sales'
                    },
                ];
                var newDateArray11 = []
                this.datesArray = dateArray
                this.lineChartLabels = this.datesArray
                for (var i = 0; i < dateArray.length; i++) {
                    newDateArray11.push(dateArray[i])
                }
                console.log(newDateArray11)
                /////////// set chart detail ///////////////

                /////////////Chart Profit/////////////////////
                this.maxOrderOfDay = Math.max(...this.totalSalesOrdersArray)
                this.minOrderOfDay = Math.min(...this.totalSalesOrdersArray)
                var newMinOrder = -1
                newMinOrder = this.totalSalesOrdersArray.findIndex(x => x == this.minOrderOfDay);
                this.minOrderDate = dateArray[newMinOrder]
                var newMaxOrder = -1
                newMaxOrder = this.totalSalesOrdersArray.findIndex(x => x == this.maxOrderOfDay);
                this.maxOrderDate = dateArray[newMaxOrder]
                this.lineChartData2 = [{
                    data: this.totalSalesOrdersArray,label: 'Total Orders'},
                ];
                this.lineChartLabels2 = dateArray
                console.log(this.totalSalesOrdersArray)
                /////////////////////////// Date Sort Logic //////////////////////
                this.sortSales(dateArray, this.totalSalesArray)
                this.sortOrders(newDateArray11, this.totalSalesOrdersArray);
                ///////////////////////// End sort Logic ////////////////////////
                //////////////////////////Top 10 Products///////////////////
                var localArray = []
                var localNewArray = []
                for (var i = 0; i < result.data1.length; i++) {
                    for (var j = 0; j < result.data1[i].tests.length; j++) {
                        for (var k = 0; k < result.data1[i].tests[j].amount.length; k++) {
                            var boolean = false
                            for (var a = 0; a < this.topProfitArray.length; a++) {
                                if(result.data1[i].tests[j].opt[k] == this.topProfitArray[a].type &&
                                    result.data1[i].tests[j].product[k]==this.topProfitArray[a].name){
                                    boolean = true
                                }
                            }
                            if (boolean == false) {
                                this.topProfitArray.push({
                                    type: result.data1[i].tests[j].opt[k],
                                    name: result.data1[i].tests[j].product[k],
                                    sales:0,
                                    occurence: 0,
                                    percentage: 0
                                })
                            }
                        }
                    }
                }
                console.log(result.data1)
                console.log(this.topProfitArray)
                for (var a = 0; a < this.topProfitArray.length; a++) {
                    for (var i = 0; i < result.data1.length; i++) {
                        for (var j = 0; j < result.data1[i].tests.length; j++) {
                            for (var k = 0; k < result.data1[i].tests[j].amount.length; k++) {
                                if(result.data1[i].tests[j].opt[k] == this.topProfitArray[a].type &&
                                    result.data1[i].tests[j].product[k]==this.topProfitArray[a].name){
                                    this.topProfitArray[a].occurence++
                                    this.topProfitArray[a].sales+=result.data1[i].tests[j].amount[k]
                                    this.topProfitArray[a].percentage = (this.topProfitArray[a].sales*100)/(this.totalWalkinSales+this.totalPharmacySales)
                                }
                            }
                        }
                    }
                }
                console.log(this.topProfitArray)

                /////////////////////////Top 10 End ///////////////////////
            }
            this.loading = false
        }, err => {
            console.log(err)
        })
    }
    sortOrders(c, d) {
        var swapped1;
        do {
            swapped1 = false;
            for (var j = 0; j < c.length - 1; j++) {
                if (c[j] > c[j + 1]) {
                    var temp = c[j];
                    c[j] = c[j + 1];
                    c[j + 1] = temp;
                    var temp = d[j];
                    d[j] = d[j + 1];
                    d[j + 1] = temp;
                    swapped1 = true;
                }
            }
        } while (swapped1);

        console.log(d)

        var newDateArray1 = []
        for (var i = 0; i < c.length; i++) {
            newDateArray1.push(this.datePipe.transform(c[i], 'dd-MM-yyyy'))
        }
        this.lineChartLabels2 = newDateArray1
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
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'))
        }
        this.lineChartLabels = newDateArray
        console.log(this.datesArray)
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
        this.maxSaleInADay = 0
        this.totalWalkinProfit = 0
        this.maxCollectionDate = 0
        this.minCollectionDate = 0
        this.maxOrderOfDay = 0
        this.minOrderOfDay = 0
        this.minOrderDate = 0
        this.maxOrderDate = 0
        this.dateDiff = 0
        this.totalMale = 0
        this.totalFemale = 0
        this.totalMalePercentage = 0
        this.totalFemalePercentage = 0
        this.totalWalkInPatientsbyDoc = 0
        this.totalAppointmentPatients = 0
        this.totalEmergencyPatients = 0
        this.totalWalkInPatientsbyDocPercentage = 0
        this.totalAppointmentPatientsPercentage = 0
        this.totalEmergencyPatientsPercentage = 0
        this.avgAge = 0
        this.newPatient = 0
        this.prescriptionArray = []
        this.totalSalesArray = []
        this.standaloneArray = []
        this.totalCashAmount = 0
        this.totalOnlineAmount = 0
        this.totalWalkinCashAmount = 0
        this.totalWalkinOnlineAmount = 0
        this.prescriptionOrdersArray = []
        this.totalSalesOrdersArray = []
        this.standaloneOrdersArray = []
        this.totalPrecOrdersPercentage = 0
        this.totalOthersOrdersPercentage = 0
        var object
        object = {}
        object.start_date = this.fromDate1
        object.end_date = this.toDate1
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id
        console.log(object)
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning")
            return
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) !> new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning")
            return
        }
        this.loading = true
        this.userService.DiagnosticsAnalytics(object).subscribe((result) => {
            console.log(result)
            if (result.response) {
                var walkinTrue = []
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
                var age = 0
                var latestArray
                this.doctorArray = result.dataDoctors
                console.log(this.doctorArray)
                var total_sales_length = 0
                for (var i = 0; i < result.data.length; i++) {
                    this.totalPatient = result.data.length
                    for (var j = 0; j < result.data[i].total_sales.length; j++) {
                        if (result.data[i].total_sales[j].diagnostics == true) {
                            this.totalPharmacySalesLength++
                            this.totalPharmacySales += result.data[i].total_sales[j].investigation_cost
                            maxInData.push(result.data[i].total_sales[j].investigation_cost)
                            maxArray.push(this.datePipe.transform(result.data[i].total_sales[j].createdAt, 'yyyy-MM-dd'))
                            total_sales_length++
                            if (result.data[i].total_sales[j].payment_mode_diagnostics == 'Cash') {
                                this.totalCashAmount += result.data[i].total_sales[j].investigation_cost
                                this.totalWalkinCashPatient++
                            } else {
                                this.totalOnlineAmount += result.data[i].total_sales[j].investigation_cost
                                this.totalWalkinOnlinePatient++
                            }
                            if (result.data[i].total_sales[j].registration.age) {
                                age += result.data[i].total_sales[j].registration.age
                            }
                            if (result.data[i].total_sales[j].registration.lastVisit.status == false) {
                                this.newPatient++
                            }
                        }
                    }
                    maxOrder.push(result.data[i].total_sales.length)
                }
                console.log(walkinTrue)
                for (var i = 0; i < walkinTrue.length; i++) {
                    this.totalWalkinPatient = walkinTrue.length
                    this.totalWalkinSales += walkinTrue[i].total_amount
                    maxProfit.push(walkinTrue[i].total_amount - walkinTrue[i].cost_amount)
                    maxInData.push(walkinTrue[i].total_amount)
                    maxArray.push(this.datePipe.transform(walkinTrue[i].createdAt, 'yyyy-MM-dd'))
                    maxOrder.push(walkinTrue.length)
                    if (walkinTrue[i].payment_mode == 'Cash') {
                        this.totalWalkinCashAmount += walkinTrue[i].total_amount
                        this.totalWalkinCashPatient++
                    } else {
                        this.totalWalkinOnlineAmount += walkinTrue[i].total_amount
                        this.totalWalkinOnlinePatient++
                    }
                }
                var diff = Math.abs(this.toDate.getTime() - this.fromDate.getTime());
                this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
                this.totalWalkinCashPatient = (this.totalWalkinCashPatient * 100) / (total_sales_length + this.totalWalkinPatient)
                this.totalWalkinOnlinePatient = (this.totalWalkinOnlinePatient * 100) / (total_sales_length + this.totalWalkinPatient)
                this.totalPrecOrdersPercentage = (this.totalPharmacySalesLength * 100) / (total_sales_length + this.totalWalkinPatient)
                this.totalOthersOrdersPercentage = (this.totalWalkinPatient * 100) / (total_sales_length + this.totalWalkinPatient)
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
                        if (this.dataArray[i].total_sales[j].diagnostics) {
                            this.dataArray[i].total_sales_amount = this.dataArray[i].total_sales_amount + this.dataArray[i].total_sales[j].investigation_cost

                            this.dataArray[i].true_sales.push(this.dataArray[i].total_sales[j])
                        } else {
                            this.dataArray[i].false_sales.push(this.dataArray[i].total_sales[j])
                        }
                    }
                    this.dataArray[i].conversion = this.dataArray[i].true_sales.length
                    //this.dataArray[i].conversion = this.getData((this.dataArray[i].true_sales.length * 100) / this.dataArray[i].total_sales.length)
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
                this.totalConversion = this.getData((this.totalSales * 100) / this.totalPrescriptions)
                for (var i = 0; i < walkinTrue.length; i++) {
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
                    var total_prep_orders: number = 0
                    for (var j = 0; j < this.dataArray.length; j++) {
                        for (var k = 0; k < this.dataArray[j].total_sales.length; k++) {
                            if (this.dataArray[j].total_sales[k].diagnostics == true) {
                                if (newMaxArray[i] == this.datePipe.transform(this.dataArray[j].total_sales[k].createdAt, 'yyyy-MM-dd')) {
                                    total_prep_amount += this.dataArray[j].total_sales[k].investigation_cost
                                    total_prep_orders++
                                }
                            }
                        }
                    }
                    this.prescriptionOrdersArray.push(total_prep_orders)
                    this.prescriptionArray.push(total_prep_amount)
                    var total_walkin_orders: number = 0
                    for (var l = 0; l < this.otherSales.length; l++) {
                        //total_walkin_orders = (this.otherSales.length)
                        if (newMaxArray[i] == this.datePipe.transform(this.otherSales[l].createdAt, 'yyyy-MM-dd')) {
                            total_walkin_amount += this.otherSales[l].total_amount
                            total_walkin_orders++
                        }
                    }
                    this.standaloneOrdersArray.push(total_walkin_orders)
                    this.standaloneArray.push(total_walkin_amount)
                    this.totalSalesArray.push(total_prep_amount + total_walkin_amount)
                    this.totalSalesOrdersArray.push(total_prep_orders + total_walkin_orders)
                    dateArray.push(newMaxArray[i])
                }
                this.maxSaleOfDay = Math.max(...this.totalSalesArray)
                this.minSaleOfDay = Math.min(...this.totalSalesArray)
                var newMaxValue = -1
                newMaxValue = this.totalSalesArray.findIndex(x => x == this.maxSaleOfDay);
                this.maxCollectionDate = dateArray[newMaxValue]
                var newMinValue = -1
                newMinValue = this.totalSalesArray.findIndex(x => x == this.minSaleOfDay);
                this.minCollectionDate = dateArray[newMinValue]
                /////////// set chart detail ///////////////
                this.lineChartData = [{
                        data: this.totalSalesArray,
                        label: 'Total Sales'
                    },
                ];
                var newDateArray11 = []
                this.datesArray = dateArray
                this.lineChartLabels = this.datesArray
                for (var i = 0; i < dateArray.length; i++) {
                    newDateArray11.push(dateArray[i])
                }
                console.log(newDateArray11)
                /////////// set chart detail ///////////////

                /////////////Chart Profit/////////////////////
                this.maxOrderOfDay = Math.max(...this.totalSalesOrdersArray)
                this.minOrderOfDay = Math.min(...this.totalSalesOrdersArray)
                var newMinOrder = -1
                newMinOrder = this.totalSalesOrdersArray.findIndex(x => x == this.minOrderOfDay);
                this.minOrderDate = dateArray[newMinOrder]
                var newMaxOrder = -1
                newMaxOrder = this.totalSalesOrdersArray.findIndex(x => x == this.maxOrderOfDay);
                this.maxOrderDate = dateArray[newMaxOrder]
                this.lineChartData2 = [{
                    data: this.totalSalesOrdersArray,label: 'Total Orders'},
                ];
                this.lineChartLabels2 = dateArray
                console.log(this.totalSalesOrdersArray)
                /////////////////////////// Date Sort Logic //////////////////////
                this.sortSales(dateArray, this.totalSalesArray)
                this.sortOrders(newDateArray11, this.totalSalesOrdersArray);
                ///////////////////////// End sort Logic ////////////////////////
            }
            this.loading = false
        }, err => {
            console.log(err)
        })
    }
    getSorted(abc){
        if(abc==1){
            this.topProfitArray.sort((a, b) => parseInt(b.occurence)-parseInt(a.occurence));
        }else{
            this.topProfitArray.sort((a, b) => parseInt(b.sales)-parseInt(a.sales));
        }
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
