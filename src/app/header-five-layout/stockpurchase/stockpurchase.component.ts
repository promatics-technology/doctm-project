import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CustomDialogComponent } from '../../confirmation-popup/custom-dialog/custom-dialog.component'

declare var $ 

@Component({
  selector: 'app-stockpurchase',
  templateUrl: './stockpurchase.component.html',
  styleUrls: ['./stockpurchase.component.css'],
  providers: [UserService]
})
export class StockpurchaseComponent implements OnInit {
    reqData
    totalTr
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
    stockPurchase: FormGroup;
    billFetched: boolean
    billNumberSearch
    returnPurchaseArray
    pharmacyData
    loading
    productNameSuggestion
    returnQty
    returnStatus
    returnEditable: number
    partyTotal: number
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }
    partyNameSuggestion
    stockToReturn
    partyNameNotFound : boolean

    constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private userService: UserService, public dialog: MatDialog) {}
    ngOnInit() {
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
        //akshay
        this.reqData = {}
        this.reqData.opt = []
        this.reqData.opt[0] = ""
        this.reqData.product = []
        this.reqData.product[0] = ""
        this.reqData.pack1 = []
        this.reqData.pack1[0] = "1"
        this.reqData.pack2 = []
        this.reqData.pack2[0] = ""
        this.reqData.quantity = []
        this.reqData.quantity[0] = ""
        this.reqData.mrp = []
        this.reqData.mrp[0] = ""
        this.reqData.rate = []
        this.reqData.rate[0] = ""
        this.reqData.cgst = []
        this.reqData.cgst[0] = ""
        this.reqData.sgst = []
        this.reqData.sgst[0] = ""
        this.reqData.discount = []
        this.reqData.discount[0] = ""
        this.reqData.amount = []
        this.reqData.amount[0] = ""
        this.reqData.batch = []
        this.reqData.batch[0] = ""
        this.reqData.month = []
        this.reqData.month[0] = ""
        this.reqData.year = []
        this.reqData.year[0] = ""
        this.totalTr = [1]
        this.reqData.expiry = []
        this.returnQty = []
        this.returnStatus = []
        this.quantityReturn = 0
        this.returnEditable = 0
        this.billFetched = false

        this.reqData.invoiceDate = new Date()
        this.stockPurchase = this.formBuilder.group({
            'billNumber': [null, Validators.compose([Validators.pattern('^[^ ]+[0-9]*')])],
            'partyName': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ]*')])],
            'invoiceDate': [null, Validators.compose([Validators.required])],
            // 'invoiceNumber': [null, Validators.compose([Validators.pattern('^[^ ]+[0-9]*')])]
        })
        this.stockToReturn =[]
        this.totalNetAmount = 0
        this.partyTotal = 0
        this.partyNameNotFound = true
    }
    addRow() {
        this.totalTr.push(1)
        this.reqData.opt[this.totalTr.length - 1] = ""
        this.reqData.product[this.totalTr.length - 1] = ""
        this.reqData.pack1[this.totalTr.length - 1] = "1"
        this.reqData.pack2[this.totalTr.length - 1] = ""
        this.reqData.quantity[this.totalTr.length - 1] = ""
        this.reqData.mrp[this.totalTr.length - 1] = ""
        this.reqData.rate[this.totalTr.length - 1] = ""
        this.reqData.cgst[this.totalTr.length - 1] = ""
        this.reqData.sgst[this.totalTr.length - 1] = ""
        this.reqData.discount[this.totalTr.length - 1] = ""
        this.reqData.amount[this.totalTr.length - 1] = ""
        this.reqData.batch[this.totalTr.length - 1] = ""
        this.reqData.month[this.totalTr.length - 1] = ""
        this.reqData.year[this.totalTr.length - 1] = ""
    }
    removeRow(i) {
        if (this.totalTr.length == 1) {
            this.totalTr = []
            this.totalTr.push(1)
            this.reqData.opt[0] = ""
            this.reqData.product[0] = ""
            this.reqData.pack1[0] = ""
            this.reqData.pack2[0] = ""
            this.reqData.quantity[0] = ""
            this.reqData.mrp[0] = ""
            this.reqData.rate[0] = ""
            this.reqData.cgst[0] = ""
            this.reqData.sgst[0] = ""
            this.reqData.discount[0] = ""
            this.reqData.amount[0] = ""
            this.reqData.batch[0] = ""
            this.reqData.month[0] = ""
            this.reqData.year[0] = ""
        } else {
            this.totalTr.splice(i, 1)
            this.reqData.opt.splice(i, 1) // = ""
            this.reqData.product.splice(i, 1) // = ""
            this.reqData.pack1.splice(i, 1) // = ""
            this.reqData.pack2.splice(i, 1) // = ""
            this.reqData.quantity.splice(i, 1) // = ""
            this.reqData.mrp.splice(i, 1) // = ""
            this.reqData.rate.splice(i, 1) // = ""
            this.reqData.cgst.splice(i, 1) // = ""
            this.reqData.sgst.splice(i, 1) // = ""
            this.reqData.discount.splice(i, 1) // = ""
            this.reqData.amount.splice(i, 1) // = ""
            this.reqData.batch.splice(i, 1) // = ""
            this.reqData.month.splice(i, 1) // = ""
            this.reqData.year.splice(i, 1) // = ""
        }
    }
    savePurchaseDetails() {
        this.partyTotal=0
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
        this.reqData.expiry = []
        var thisYear = new Date().getFullYear().toString().substr(-2)
        var thisMonth = new Date().getMonth() + 1
        for (var i = 0; i < this.reqData.opt.length; i++) {
            if (this.reqData.opt[i] == '' || this.reqData.opt[i] == null || this.reqData.opt[i] == undefined) {
                this.toastr.warning('Invalid Type', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.reqData.product.length; i++) {
            if (this.reqData.product[i] == '' || this.reqData.product[i] == null || this.reqData.product[i] == undefined) {
                this.toastr.warning('Invalid Product', 'Warning')
                return
            } else if (this.reqData.product[i].trim().length < 1) {
                this.toastr.warning('Invalid Product', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.reqData.pack1.length; i++) {
            this.reqData.pack1[i]=1
            if (this.reqData.pack1[i] < 1 || this.reqData.pack1[i] == '' || this.reqData.pack1[i] == null || this.reqData.pack1[i] == undefined) {
                this.toastr.warning('Invalid pack', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.reqData.pack2.length; i++) {
            if (this.reqData.pack2[i] < 1 || this.reqData.pack2[i] == '' || this.reqData.pack2[i] == null || this.reqData.pack2[i] == undefined) {
                this.toastr.warning('Invalid pack', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.reqData.mrp.length; i++) {
            if (this.reqData.mrp[i] < 1 || this.reqData.mrp[i] == '' || this.reqData.mrp[i] == null || this.reqData.mrp[i] == undefined) {
                this.toastr.warning('Invalid mrp', 'Warning')
                return
            } else {
                this.totalMrp += this.reqData.mrp[i]
            }
        }
        for (var i = 0; i < this.reqData.quantity.length; i++) {
            if (this.reqData.quantity[i] < 0 || this.reqData.quantity[i] == '' || this.reqData.quantity[i] == null || this.reqData.quantity[i] == undefined) {
                this.toastr.warning('Invalid quantity', 'Warning')
                return
            } else {
                this.totalQuantity += this.reqData.quantity[i]
            }
        }
        for (var i = 0; i < this.reqData.rate.length; i++) {
            if (this.reqData.rate[i] < 1 || this.reqData.rate[i] == '' || this.reqData.rate[i] == null || this.reqData.rate[i] == undefined) {
                this.toastr.warning('Invalid purchase rate', 'Warning')
                return
            } else {
                this.totalRate += this.reqData.rate[i]
            }
        }
        for (var i = 0; i < this.reqData.cgst.length; i++) {
          if(this.reqData.cgst[i]<0 )
          {
            this.toastr.warning('Invalid cgst', 'Warning')
            return
          }
        }
        for (var i = 0; i < this.reqData.sgst.length; i++) {
          if(this.reqData.sgst[i]<0)
          {
            this.toastr.warning('Invalid sgst', 'Warning')
            return
          }
        }
        for (var i = 0; i < this.reqData.discount.length; i++) {
          if(this.reqData.discount[i]<0 || this.reqData.discount[i]>100)
          {
            this.toastr.warning('Invalid discount', 'Warning')
            return
          }
        }
        for (var i = 0; i < this.reqData.amount.length; i++) {
            if (this.reqData.amount[i] < 1 || this.reqData.amount[i] == '' || this.reqData.amount[i] == null || this.reqData.amount[i] == undefined) {
                this.toastr.warning('Invalid Amount', 'Warning')
                return
            } else {
                this.totalAmount += this.reqData.amount[i]
            }
        }
        for (var i = 0; i < this.reqData.batch.length; i++) {
            if (this.reqData.batch[i] == '' || this.reqData.batch[i] == null || this.reqData.batch[i] == undefined) {
                this.toastr.warning('Invalid batch', 'Warning')
                return
            } else if (this.reqData.batch[i].trim().length < 1) {
                this.toastr.warning('Invalid batch', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.reqData.month.length; i++) {
            if (this.reqData.month[i] > 12 || this.reqData.month[i] <= 0 || this.reqData.month[i] == '' || this.reqData.month[i] == null || this.reqData.month[i] == undefined) {
                this.toastr.warning('Invalid month', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.reqData.year.length; i++) {
            if (this.reqData.year[i] < thisYear || this.reqData.year[i] == '' || this.reqData.year[i] == null || this.reqData.year[i] == undefined) {
                this.toastr.warning('Invalid year', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.reqData.month.length; i++) {
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
            if(this.reqData.month[i]==12){
                var yearCal = this.reqData.year[i] + 1
                calculatedExpiry = yearCal.toString() + "01" 
            }else{
                if (this.reqData.month[i] < 10) {
                    calculatedExpiry = this.reqData.year[i].toString() + "0" + this.reqData.month[i].toString()
                } else {
                    calculatedExpiry = this.reqData.year[i].toString() + this.reqData.month[i].toString()
                }
            }

            if (this.reqData.month[i] < 10) {
                enteredExpiry = this.reqData.year[i].toString() + "0" + this.reqData.month[i].toString()
            } else {
                enteredExpiry = this.reqData.year[i].toString() + this.reqData.month[i].toString()
            }
            this.reqData.expiry.push(parseInt(enteredExpiry))
            if (parseInt(enteredExpiry) < parseInt(expiry)) {
                this.toastr.warning('Invalid expiry', 'Warning')
                return
            } else if (parseInt(calculatedExpiry) == parseInt(expiryAfter1month)) {
                this.toastr.info('Medicine will be expired after a month', 'Warning')
            }
        }
        this.reqData.smart_pharmacy_id = this.pharmacyData.dataSmartPharmacy._id
        this.totalNetAmount = this.totalNetAmount - this.returnEditable
        this.partyTotal = Math.ceil(this.totalNetAmount)
        this.reqData.stockToReturn = this.stockToReturn
        console.log(this.reqData)
        this.loading = true
        this.userService.CreateStockPurchase(this.reqData).subscribe(data => {
            this.loading = false
            console.log(data)
            if (data.response == true) {
                this.ngOnInit()
                this.toastr.success(data.message, "Success")
            } else {
                this.toastr.error(data.message, "Error")
            }
        }, err => {
            console.log(err);
        })
    }
    getTotalRecord(i) {
        this.totalPRate = 0
        this.newTotalCgst = 0
        this.newATotalSgst = 0
        this.newTotalDiscount = 0
        this.totalNetAmount = 0
        var rate
        var cgst
        var sgst
        var discount
        if (this.reqData.rate[i] == undefined || this.reqData.rate[i] == ""  ) {
            rate = 0
        } else {
            rate = this.reqData.rate[i]
        }
        if (this.reqData.cgst[i] == undefined || this.reqData.cgst[i] == "" || this.reqData.cgst[i]<0 || this.reqData.cgst[i]>100) {
            this.reqData.cgst[i] = 0
            cgst = 0
        } else {
            cgst = this.reqData.cgst[i]
        }
        if (this.reqData.sgst[i] == undefined || this.reqData.sgst[i] == "" || this.reqData.sgst[i]<0 || this.reqData.sgst[i]>100) {
            this.reqData.sgst[i] = 0
            sgst = 0
        } else {
            sgst = this.reqData.sgst[i]
        }
        if (this.reqData.discount[i] == undefined || this.reqData.discount[i] == "" || this.reqData.discount[i]<0 || this.reqData.discount[i]>100) {
            this.reqData.discount[i] = 0
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
        this.totalNetAmount = this.totalNetAmount - this.returnEditable
        this.partyTotal = Math.ceil(this.totalNetAmount)
    }
    onTextChangeOfMedName(type, observation) {
        if (type != "") {
            let object = {
                type: type,
                observation: observation
            }
            this.userService.onTextChangeOfMedName(object).subscribe(data => {
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
    fetchBill() {
        if(this.reqData.partyName=='' || this.reqData.partyName==null || this.reqData.partyName==undefined || this.reqData.partyName.trim().length==0){
            this.toastr.warning('Please fill party name','Warning')
            return
        }
        if (this.billNumberSearch != null && this.billNumberSearch != '' && !isNaN(this.billNumberSearch)) {
            this.loading = true
            this.returnQty = []
            this.returnStatus = []
            this.returnPurchaseArray = []
            this.billFetched = false
            this.quantityReturn = 0
            let ob = {
                billNumber: this.billNumberSearch,
                partyName: this.reqData.partyName,
                id: this.pharmacyData.dataSmartPharmacy._id
            }
            this.userService.FetchBill(ob).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.response == true) {
                    this.billFetched = true
                    this.returnPurchaseArray = data.data
                    this.returnStatus = []
                    this.returnQty = []
                    for (var i = 0; i < this.returnPurchaseArray.length; i++) {
                        this.returnStatus.push(false)
                        this.returnQty.push(this.returnPurchaseArray[i].qty)
                        this.returnPurchaseArray[i].new_amount = this.returnPurchaseArray[i].amount
                    }
                    this.toastr.success(data.message, "Success")
                } else {
                    this.toastr.error(data.message, "Error")
                }
            }, err => {
                console.log(err);
            })
        }
    }
    getReturnStatus(i) {
        if (this.returnStatus[i] == true) {
            return false
        } else {
            return true
        }
    }
    resetReturn() {
        this.returnQty = []
        this.returnStatus = []
        this.returnPurchaseArray = []
        this.billNumberSearch = null
        this.billFetched = false
        this.quantityReturn = 0
    }
    getTotalReturn(index) {
        for (var i = 0; i < this.returnPurchaseArray.length; i++) {
            if (this.returnPurchaseArray[i].qty < this.returnQty[i]) {
                this.toastr.warning("Return quantity can't exceed actual quantity", "Warning")
                return
            } else if (this.returnQty[i] < 1 || this.returnQty[i] == null || this.returnQty[i] == '' || this.returnQty[i] == undefined) {
                this.toastr.warning("Minimum return quantity can be 1", "Warning")
                return
            }
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
    }
    updateReturnAmount() {
        this.returnEditable = 0
        for (var i = 0; i < this.returnPurchaseArray.length; i++) {
            if (this.returnPurchaseArray[i].qty < this.returnQty[i]) {
                this.toastr.warning("Return quantity can't exceed actual quantity", "Warning")
                return
            } else if (this.returnQty[i] < 1 || this.returnQty[i] == null || this.returnQty[i] == '' || this.returnQty[i] == undefined) {
                this.toastr.warning("Minimum return quantity can be 1", "Warning")
                return
            }
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
        this.returnEditable = this.quantityReturn
        // this.partyTotal = this.totalNetAmount - this.returnEditable //Object.assign({},this.quantityReturn)
        this.totalNetAmount = this.totalNetAmount - this.returnEditable
        this.partyTotal = Math.ceil(this.totalNetAmount)
        $("#stck-prchse").modal("hide");
    }
    calculateReturn() {
        this.partyTotal=0
        this.partyTotal = this.totalNetAmount - this.returnEditable
    }
    FindPartySuggestion(data) {
        let object = {
            id: this.pharmacyData.dataSmartPharmacy._id,
            data: data
        }
        this.userService.FindPartySuggestion(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.partyNameSuggestion = []
                this.partyNameSuggestion = data.data
            }
        }, err => {
            console.log(err);
        })
    }
    onKey(event: any, type) {
        if (event.keyCode == 13) {
            if (type == 'bill') {
                this.fetchBill()
            }
        }
    }
    FindPartyName(){
        let object = {
            id: this.pharmacyData.dataSmartPharmacy._id,
            party_name: this.reqData.partyName
        }
        this.userService.FindPartyName(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.partyNameNotFound = false
            }else{
                this.partyNameNotFound = true
            }
        }, err => {
            console.log(err);
        })
    }
    openConfirmationButton(activity){
        let dialogRef = this.dialog.open(CustomDialogComponent, {
            data:{
                header:"Confirmation",
                body:"Are you sure you want return this product ?"
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == "yes") {
                this.updateReturnAmount()
                // $("#dischargeModal").modal("show");
                // $('textarea').autoResize();
            } else {
                console.log("error or No Thanks button clicked")
            }
        });
    }

}

