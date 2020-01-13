import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { DatePipe } from '@angular/common';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CustomDialogComponent } from '../../confirmation-popup/custom-dialog/custom-dialog.component'

declare var $
declare var jsPDF: any; // Important

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

@Component({
    selector: 'app-purchasebook',
    templateUrl: './purchasebook.component.html',
    styleUrls: ['./purchasebook.component.css'],
    providers: [UserService]
})
export class PurchasebookComponent implements OnInit {
    toDate = new Date()
    fromDate = new Date()
    newDate = new Date()
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }
    loading
    pharmacyData
    stockPurchaseArray : StockPurchaseArray[]
    totalBill : number
    searchInput
    sortedData : StockPurchaseArray[]
    headerClicked: number
    totalTr
    reqData
    returnStatus = []
    totalAmount: number
    totalCgst: number
    totalSgst: number
    totalDiscount: number
    totalQuantity: number
    totalMrp: number
    totalRate: number
    totalPRate: number
    totalNetAmount: number
    newTotalDiscount: number
    newTotalCgst: number
    newATotalSgst: number
    quantityReturn: number
    productNameSuggestion
    returnQty=[]
    checkQty
    returnPartyName
    returnBillNo
    returnPurchaseArray
    stockToReturn
    calculatedAmount
    copystockToReturn

    totalAmountOriginal: number
    totalRefundAmount: number
    constructor(private UserService : UserService,private toastr: ToastrService, private datePipe: DatePipe, public dialog: MatDialog) { }

    ngOnInit() {
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])

        var dd = this.fromDate.getDate();
        this.fromDate.setDate(1);
        this.fromDate.setMonth(this.fromDate.getMonth()-1);
        this.fromDate.setDate(this.fromDate.getDate()+dd);
        this.newDate.setDate(this.newDate.getDate()+1)
        this.stockPurchaseArray = []
        this.totalBill = 0
        this.viaDate()
        this.returnPurchaseArray=[]
    }

    viaDate() {
        if(new Date(this.toDate).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
            this.toastr.warning("Invalid date selected","Warning")
            return
        }
        var object = {
            id: this.pharmacyData.dataSmartPharmacy._id,
            start_date: this.fromDate,
            end_date: this.toDate
        }
        this.loading = true
        this.stockPurchaseArray = []
        this.sortedData = []
        this.totalBill = 0
        this.headerClicked = 0
        this.checkQty=0
        this.searchInput = null
        this.UserService.GetStockPurchaseBetweenTwoDates(object).subscribe(data => {
            console.log(data);
            this.loading = false
            if (data.response == true) {
                this.toastr.success(data.message, "Success")
                this.stockPurchaseArray = data.data
                for (var i = 0; i < this.stockPurchaseArray.length; i++) {
                    this.stockPurchaseArray[i].amount = 0                    
                    for (var ii = 0; ii < this.stockPurchaseArray[i].stock.length; ii++) {
                        this.totalBill = this.totalBill + this.stockPurchaseArray[i].stock[ii].amount
                        // if(this.totalBill % 1 != 0){
                            // this.totalBill = parseFloat(this.totalBill.toFixed(2))
                            // }
                            this.stockPurchaseArray[i].amount += this.stockPurchaseArray[i].stock[ii].amount
                        }
                        if(this.stockPurchaseArray[i].amount % 1 != 0){
                            this.stockPurchaseArray[i].amount = parseFloat(this.stockPurchaseArray[i].amount.toFixed(2))
                        }
                    }             
                    this.sortedData = data.data.sort((a, b) => {
                        return compare(a.stock[0].createdAt, b.stock[0].createdAt, false)
                    });
                    this.sortedData = this.stockPurchaseArray.slice();
                } else if (data.response == false) {
                    this.toastr.error(data.message, "Error")
                }
            }, err => {
                console.log(err);
            })
    }

    exportPdf(){
        var option = ''
        if (this.searchInput == null || this.searchInput == '' || this.searchInput == undefined) {
            option = ' ('+this.datePipe.transform(this.fromDate, 'dd-MM-yyyy') + " to "+ this.datePipe.transform(this.toDate, 'dd-MM-yyyy')+")"
        }
        var head = [
            { title: '#', dataKey: "id"},
            { title: 'Date'+option, dataKey: "createdAt"},
            { title: 'Bill No.', dataKey: "bill_no"},
            { title: 'Party Name', dataKey: "party_name"},
            { title: 'Bill Value', dataKey: "amount"}
        ]
        var csvData = []
        var totalDuration
        var dates = []
        for (var i = 0; i < this.stockPurchaseArray.length; i++) {
            var ob ;
            ob = {}
            ob.id = i+1
            //let date = this._date.transform(this.invocie.date, 'dd.MM.yyyy HH:mm:ss')
            //var date = this.stockPurchaseArray[i].stock[0].createdAt.split('T')
            ob.createdAt = this.getTimeFiveAndHalfHoursBefore(this.stockPurchaseArray[i].stock[0].createdAt)
            ob.createdAt = this.datePipe.transform(ob.createdAt, 'dd-MM-yyyy, h:mm a');
            ob.bill_no = this.stockPurchaseArray[i].stock[0].bill_no
            ob.party_name = this.stockPurchaseArray[i].stock[0].party_name
            ob.amount = this.stockPurchaseArray[i].amount
            if(ob.amount % 1 != 0){
                ob.amount = ob.amount.toFixed(2)
            }
            csvData.push(ob)

        }
        csvData.push({
            id: "Total",
            createdAt: "",
            bill_no: "",
            party_name: "",
            amount: this.totalBill.toFixed(2)
        })
        var from = new Date(this.fromDate).toJSON().toString().substr(0,10)
        var to = new Date(this.toDate).toJSON().toString().substr(0,10)
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
        doc.save('StockPurchase'+"("+from+" to "+to+")");
    }

    SearchByPartyNameOrBill(){
        if(this.searchInput == null || this.searchInput == '' || this.searchInput == undefined || this.searchInput.trim().length==0){
            this.toastr.warning("Invalid search input","Warning")
        }else{
            var object = {
                id: this.pharmacyData.dataSmartPharmacy._id,
                search: this.searchInput
            }
            this.loading = true
            this.stockPurchaseArray = []
            this.sortedData = []
            this.totalBill = 0
            this.headerClicked = 0
            this.returnQty=[]
            this.UserService.SearchByPartyNameOrBill(object).subscribe(data=>{
                console.log(data);
                this.loading = false
                if (data.response==true) {
                    this.toastr.success(data.message,"Success")
                    this.stockPurchaseArray = data.data
                    for (var i = 0; i < this.stockPurchaseArray.length; i++) {
                        this.stockPurchaseArray[i].amount = 0
                        for (var ii = 0; ii < this.stockPurchaseArray[i].stock.length; ii++) {
                            this.totalBill = this.totalBill + this.stockPurchaseArray[i].stock[ii].amount
                            // if(this.totalBill % 1 != 0){
                                // this.totalBill = parseFloat(this.totalBill.toFixed(2))
                                // }
                                this.stockPurchaseArray[i].amount += this.stockPurchaseArray[i].stock[ii].amount
                            }
                            if(this.stockPurchaseArray[i].amount % 1 != 0){
                                this.stockPurchaseArray[i].amount = parseFloat(this.stockPurchaseArray[i].amount.toFixed(2))
                            }
                        }
                        this.sortedData = data.data.sort((a, b) => {
                            return compare(a.stock[0].createdAt, b.stock[0].createdAt, false)
                        });
                        this.sortedData = this.stockPurchaseArray.slice();
                    }
                    else if(data.response==false){
                        this.toastr.error(data.message,"Error")
                    }
                },err=>{
                    console.log(err);
                }) 
        }
    }

    getTimeFiveAndHalfHoursBefore(date){
        // return (new Date(date).setMinutes ( new Date(date).getMinutes() - 330 ))
        return date
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

    onKey(event: any) {
        if (event.keyCode == 13) {
            this.SearchByPartyNameOrBill()
        }
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
                case 'createdAt': return compare(a.stock[0].createdAt, b.stock[0].createdAt, isAsc);
                case 'bill_no': return compare(a.stock[0].bill_no, b.stock[0].bill_no, isAsc);
                case 'party_name': return compare(a.party_name, b.party_name, isAsc);
                case 'amount': return compare(a.amount, b.amount, isAsc);
                default: return 0;
            }
        });
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
    onTextChangeOfMedName(type, observation) {
        if (type != "") {
            let object = {
                type: type,
                observation: observation
            }
            this.UserService.onTextChangeOfMedName(object).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    this.productNameSuggestion = []
                    this.productNameSuggestion = data.data
                }
            }, err => {
                console.log(err);
            })
        }
    }
    
    getRetunDetails() {
        this.totalAmount = 0
        this.totalCgst = 0
        this.totalSgst = 0
        this.totalDiscount = 0
        this.totalQuantity = 0
        this.totalMrp = 0
        this.totalRate = 0
        this.totalNetAmount = 0
        this.totalPRate = 0
        this.newTotalDiscount = 0
        this.newTotalCgst = 0
        this.newATotalSgst = 0
        this.returnQty=[]
        this.reqData.expiry = []
        this.stockToReturn={}
        this.stockToReturn.opt = []
        this.stockToReturn.product = []
        this.stockToReturn.pack1 = []
        this.stockToReturn.pack2 = []
        this.stockToReturn.quantity = []
        this.stockToReturn.mrp = []
        this.stockToReturn.rate = []
        this.stockToReturn.cgst = []
        this.stockToReturn.sgst = []
        this.stockToReturn.discount = []
        this.stockToReturn.amount = []
        this.stockToReturn.batch = []
        this.stockToReturn.month = []
        this.stockToReturn.year = []
        this.stockToReturn.id = []
        this.stockToReturn.expiry = []
        var originalreturnPurchaseArray = []
        this.totalRefundAmount = 0
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                this.stockToReturn.opt.push(this.reqData.opt[i])
                this.stockToReturn.product.push(this.reqData.product[i])
                this.stockToReturn.pack1.push(this.reqData.pack1[i])
                this.stockToReturn.pack2.push(this.reqData.pack2[i])
                this.stockToReturn.mrp.push(this.reqData.mrp[i])
                this.stockToReturn.rate.push(this.reqData.rate[i])
                this.stockToReturn.cgst.push(this.reqData.cgst[i])
                this.stockToReturn.sgst.push(this.reqData.sgst[i])
                this.stockToReturn.discount.push(this.reqData.discount[i])
                this.stockToReturn.batch.push(this.reqData.batch[i])
                this.stockToReturn.month.push(this.reqData.month[i])
                this.stockToReturn.year.push(this.reqData.year[i])
                this.stockToReturn.id.push(this.reqData.id[i])
                this.stockToReturn.quantity.push(this.reqData.quantity[i])
                this.stockToReturn.amount.push(this.reqData.amount[i])
                this.stockToReturn.expiry.push(this.reqData.expiry[i])
                originalreturnPurchaseArray.push(this.returnPurchaseArray[i])
                this.totalRefundAmount = this.totalRefundAmount + this.reqData.amount[i]
            }
        }
        if(this.stockToReturn.opt.length<1){
            this.toastr.warning("Select something to return","Warning")
            return
        }
        var thisYear = new Date().getFullYear().toString().substr(-2)
        var thisMonth = new Date().getMonth() + 1
        for (var i = 0; i < this.stockToReturn.opt.length; i++) {
            if (this.stockToReturn.opt[i] == '' || this.stockToReturn.opt[i] == null || this.stockToReturn.opt[i] == undefined) {
                this.toastr.warning('Invalid Type', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.stockToReturn.product.length; i++) {
            if (this.stockToReturn.product[i] == '' || this.stockToReturn.product[i] == null || this.stockToReturn.product[i] == undefined) {
                this.toastr.warning('Invalid Product', 'Warning')
                return
            } else if (this.stockToReturn.product[i].trim().length < 1) {
                this.toastr.warning('Invalid Product', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.stockToReturn.pack1.length; i++) {
            if (this.stockToReturn.pack1[i] < 1 || this.stockToReturn.pack1[i] == '' || this.stockToReturn.pack1[i] == null || this.stockToReturn.pack1[i] == undefined) {
                this.toastr.warning('Invalid pack', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.stockToReturn.pack2.length; i++) {
            if (this.stockToReturn.pack2[i] < 1 || this.stockToReturn.pack2[i] == '' || this.stockToReturn.pack2[i] == null || this.stockToReturn.pack2[i] == undefined) {
                this.toastr.warning('Invalid pack', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.stockToReturn.mrp.length; i++) {
            if (this.stockToReturn.mrp[i] < 1 || this.stockToReturn.mrp[i] == '' || this.stockToReturn.mrp[i] == null || this.stockToReturn.mrp[i] == undefined) {
                this.toastr.warning('Invalid mrp', 'Warning')
                return
            } else {
                this.totalMrp += this.stockToReturn.mrp[i]
            }
        }
        for (var i = 0; i < this.stockToReturn.quantity.length; i++) {
            if (this.stockToReturn.quantity[i] < 1 || this.stockToReturn.quantity[i] == '' || this.stockToReturn.quantity[i] == null || this.stockToReturn.quantity[i] == undefined) {
                this.toastr.warning('Invalid quantity', 'Warning')
                return
            } else {
                this.totalQuantity += this.stockToReturn.quantity[i]
            }
        }
        for (var i = 0; i < this.stockToReturn.rate.length; i++) {
            if (this.stockToReturn.rate[i] < 1 || this.stockToReturn.rate[i] == '' || this.stockToReturn.rate[i] == null || this.stockToReturn.rate[i] == undefined) {
                this.toastr.warning('Invalid purchase rate', 'Warning')
                return
            } else {
                this.totalRate += this.stockToReturn.rate[i]
            }
        }
        for (var i = 0; i < this.stockToReturn.amount.length; i++) {
            if (this.stockToReturn.amount[i] < 1 || this.stockToReturn.amount[i] == '' || this.stockToReturn.amount[i] == null || this.stockToReturn.amount[i] == undefined) {
                this.toastr.warning('Invalid Amount', 'Warning')
                return
            } else {
                this.totalAmount += this.stockToReturn.amount[i]
            }
        }
        for (var i = 0; i < this.stockToReturn.batch.length; i++) {
            if (this.stockToReturn.batch[i] == '' || this.stockToReturn.batch[i] == null || this.stockToReturn.batch[i] == undefined) {
                this.toastr.warning('Invalid batch', 'Warning')
                return
            } else if (this.stockToReturn.batch[i].trim().length < 1) {
                this.toastr.warning('Invalid batch', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.stockToReturn.month.length; i++) {
            if (this.stockToReturn.month[i] > 12 || this.stockToReturn.month[i] <= 0 || this.stockToReturn.month[i] == '' || this.stockToReturn.month[i] == null || this.stockToReturn.month[i] == undefined) {
                this.toastr.warning('Invalid month', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.stockToReturn.year.length; i++) {
            if (this.stockToReturn.year[i] < thisYear || this.stockToReturn.year[i] == '' || this.stockToReturn.year[i] == null || this.stockToReturn.year[i] == undefined) {
                this.toastr.warning('Invalid year', 'Warning')
                return
            }
        }
        for(var i=0;i<this.totalTr.length;i++)
        {
            if(this.totalTr[i].qty<this.stockToReturn.quantity[i]){
                this.toastr.warning('Return quantity cant exceed actual quantity', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.stockToReturn.month.length; i++) {
            var currentYear = new Date().getFullYear().toString().substr(-2)
            var currentMonth = new Date().getMonth() + 1
            if(currentMonth<10){
                var expiry = currentYear.toString() + "0" +currentMonth.toString()
            }else{
                var expiry = currentYear.toString() + currentMonth.toString()
            }
            var enteredExpiry = ""

            var date1MonthLater = new Date()
            date1MonthLater.setDate(new Date().getDate() + 30);
            var yearAfter1Month = new Date(date1MonthLater).getFullYear().toString().substr(-2)
            var monthAfter1Month = new Date(date1MonthLater).getMonth() + 1
            if(monthAfter1Month<10){
                var expiryAfter1month = yearAfter1Month.toString() + "0" + monthAfter1Month.toString()
            }else{
                var expiryAfter1month = yearAfter1Month.toString() + monthAfter1Month.toString()
            }
            var calculatedExpiry
            if(this.stockToReturn.month[i]==12){
                var yearCal = this.stockToReturn.year[i] + 1
                calculatedExpiry = yearCal.toString() + "01" 
            }else{
                if (this.stockToReturn.month[i] < 10) {
                    calculatedExpiry = this.stockToReturn.year[i].toString() + "0" + this.stockToReturn.month[i].toString()
                } else {
                    calculatedExpiry = this.stockToReturn.year[i].toString() + this.stockToReturn.month[i].toString()
                }
            }

            if (this.stockToReturn.month[i] < 10) {
                enteredExpiry = this.stockToReturn.year[i].toString() + "0" + this.stockToReturn.month[i].toString()
            } else {
                enteredExpiry = this.stockToReturn.year[i].toString() + this.stockToReturn.month[i].toString()
            }
            this.stockToReturn.expiry.push(parseInt(enteredExpiry))
            if (parseInt(enteredExpiry) < parseInt(expiry)) {
                this.toastr.warning('Invalid expiry', 'Warning')
                return
            } else if (parseInt(calculatedExpiry) == parseInt(expiryAfter1month)) {
                this.toastr.info('Medicine will be expired after a month', 'Warning')
            }
        }
        console.log(originalreturnPurchaseArray)
        for (var i = 0; i < originalreturnPurchaseArray.length; i++) {
            if (originalreturnPurchaseArray[i].qty < this.stockToReturn.quantity[i]) {
                this.toastr.warning("Return quantity can't exceed actual quantity", "Warning")
                return
            }
            
        }
        console.log(this.stockToReturn)
        this.loading = true
        this.UserService.UpdateStockPurchase(this.stockToReturn).subscribe(data => {
            this.loading = false
            console.log(data)
            if (data.response == true) {
                $("#myModal").modal("hide");
                this.toastr.success(data.message, "Success")
                this.ngOnInit()
            } else {
                this.toastr.error(data.message, "Error")
            }
        }, err => {
            console.log(err);
        })
    }
    openConfirmation(activity){
        let dialogRef = this.dialog.open(CustomDialogComponent, {
            data:{
                header:"Confirmation",
                body:"Are you sure you want return this product ?"
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == "yes") {
                this.getRetunDetails()
                // $("#dischargeModal").modal("show");
                // $('textarea').autoResize();
            } else {
                console.log("error or No Thanks button clicked")
            }
        });
    }
    getReturnStatus(i) {
        if (this.returnStatus[i] == true) {
            return false
        } else {
            return true
        }
    }

    getTotalReturn(index) {        
        if (this.returnPurchaseArray[index].qty < this.reqData.quantity[index]) {
            this.toastr.warning("Return quantity can't exceed actual quantity", "Warning")
            return
        }
        this.quantityReturn = 0
        var calculatedAmount = 0
        this.stockToReturn = []
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray[i].amount / this.returnPurchaseArray[i].qty)
                this.quantityReturn = this.quantityReturn + calculatedAmount
                this.returnPurchaseArray[i].qtyReturn = this.returnQty[i]
                this.stockToReturn.push(this.returnPurchaseArray[i])
            }
        }
        this.returnPurchaseArray[index].new_amount = this.returnPurchaseArray[index].amount - this.returnQty[index] * (this.returnPurchaseArray[index].amount / this.returnPurchaseArray[index].qty)
        this.totalRefundAmount = 0
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                this.totalRefundAmount = this.totalRefundAmount + this.reqData.amount[i]
            }
        }
    }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}