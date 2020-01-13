import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { RouterModule, Routes, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CustomDialogComponent } from '../../confirmation-popup/custom-dialog/custom-dialog.component'

declare var $

@Component({
  selector: 'app-salesentry',
  templateUrl: './salesentry.component.html',
  styleUrls: ['./salesentry.component.css'],
  providers: [UserService]
})
export class SalesentryComponent implements OnInit {
    reqData
    totalTr
    patientData
    totalAmount: number
    totalCgst: number
    totalSgst: number
    totalDiscount: number
    totalQuantity: number
    totalMrp: number
    totalNetAmount: number
    newTotalDiscount: number
    newTotalCgst: number
    newATotalSgst: number
    quantityReturn: number
    totalPRate: number
    today = new Date()
    productNameSuggestion
    returnQty
    returnStatus
    returnPurchaseArray
    billFetched : boolean
    receiptNumberSearch
    returnEditable: number
    partyTotal: number
    cost_amount: number
    newMedicine = []
    pharmacyData
    loading
    payment_mode
    stockToReturn
    pharmacyName
    address
    phone
    drugLicense
    gstinNumber
    conditionOne
    conditionTwo
    conditionThree
    conditionFour
    savedInvoiceId
    receiptPatient
    constructor(private formBuilder: FormBuilder, private toastr: ToastrService, 
        private userService: UserService,public router: Router, public dialog: MatDialog) {}
    ngOnInit() {
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
        this.patientData = JSON.parse(localStorage['patientDataForPharmacy'])
        console.log(this.patientData)
        console.log(this.pharmacyData)
        if(this.pharmacyData.dataSmartPharmacy.address_filled){
            this.pharmacyName = this.pharmacyData.dataSmartPharmacy.pharmacy_name
            this.address = this.pharmacyData.dataSmartPharmacy.pharmacy_address
            this.phone = this.pharmacyData.dataSmartPharmacy.pharmacy_phone
            this.drugLicense = this.pharmacyData.dataSmartPharmacy.pharmacy_license
            this.gstinNumber = this.pharmacyData.dataSmartPharmacy.pharmacy_gst_no
            this.conditionOne = this.pharmacyData.dataSmartPharmacy.term1
            this.conditionTwo = this.pharmacyData.dataSmartPharmacy.term2
            this.conditionThree = this.pharmacyData.dataSmartPharmacy.term3
            this.conditionFour = this.pharmacyData.dataSmartPharmacy.term4
        }
        // for (var i = 0; i < this.pharmacyData.doctorsRegisteredForSmartClinic.length; i++) {
        //     this.pharmacyData.doctorsRegisteredForSmartClinic.[i]
        // }
        // this.reqData = {}
        // this.reqData = {}
        // this.reqData.opt = []
        //  this.reqData.opt[0] = ""
        //  this.totalTr = [1]
        //Akshay
        this.reqData = {}
        this.reqData.opt = []
        this.reqData.product = []
        this.reqData.pack1 = []
        this.reqData.pack2 = []
        this.reqData.quantity = []
        this.reqData.mrp = []
        this.reqData.discount = []
        this.reqData.amount = []
        this.reqData.batch = []
        this.reqData.medicineStock = []
        this.reqData.medicineStock[0] = {}
        this.reqData.medicineStock[0].total_stock = 0
        this.totalTr = []
        this.returnQty = []
        this.returnStatus = []
        this.returnPurchaseArray = []
        this.billFetched = false
        this.receiptNumberSearch = []
        this.returnEditable = 0
        this.partyTotal = 0
        this.cost_amount = 0
        this.payment_mode = "Cash"
        this.stockToReturn = []
        if (this.patientData.precription.tempMedicationArray.length > 0) {
            for (var i = 0; i < this.patientData.precription.tempMedicationArray.length; i++) {
                this.reqData.opt.push(this.patientData.precription.tempMedicationArray[i].name)
                this.reqData.product.push(this.patientData.precription.tempMedicationArray[i].med_name[0].display)
                this.reqData.pack1.push(null)
                this.reqData.pack2.push(null)
                this.reqData.quantity.push(null)
                this.reqData.mrp.push(null)
                this.reqData.discount.push(null)
                this.reqData.amount.push(null)
                this.reqData.batch.push(null)
                this.reqData.medicineStock.push({})
                this.totalTr.push(1)
            }
            this.findMedicinesFromStock()
        } else {
            this.reqData.opt[0] = ""
            this.reqData.product[0] = ""
            this.reqData.pack1[0] = ""
            this.reqData.pack2[0] = ""
            this.reqData.quantity[0] = ""
            this.reqData.mrp[0] = ""
            this.reqData.discount[0] = ""
            this.reqData.amount[0] = ""
            this.reqData.batch[0] = ""
            this.reqData.medicineStock[0] = {}
            this.totalTr = [1]
        }
    }
    ngOnDestroy() {
        // localStorage['patientDataForPharmacy'] = null
        localStorage.removeItem('patientDataForPharmacy');
    }
    addRow() {
        this.totalTr.push(1)
        this.reqData.opt[this.totalTr.length - 1] = ""
        this.reqData.product[this.totalTr.length - 1] = ""
        this.reqData.pack1[this.totalTr.length - 1] = ""
        this.reqData.pack2[this.totalTr.length - 1] = ""
        this.reqData.quantity[this.totalTr.length - 1] = ""
        this.reqData.mrp[this.totalTr.length - 1] = ""
        this.reqData.discount[this.totalTr.length - 1] = ""
        this.reqData.amount[this.totalTr.length - 1] = ""
        this.reqData.batch[this.totalTr.length - 1] = ""
        this.reqData.medicineStock[this.totalTr.length - 1] = {}
        this.reqData.medicineStock[this.totalTr.length - 1].total_stock = 0
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
            this.reqData.discount[0] = ""
            this.reqData.amount[0] = ""
            this.reqData.batch[0] = ""
            this.reqData.medicineStock[0] = {}
            this.reqData.medicineStock[0].total_stock = 0
        } else {
            this.totalTr.splice(i, 1)
            this.reqData.opt.splice(i, 1) // = ""
            this.reqData.product.splice(i, 1) // = ""
            this.reqData.pack1.splice(i, 1) // = ""
            this.reqData.pack2.splice(i, 1) // = ""
            this.reqData.quantity.splice(i, 1) // = ""
            this.reqData.mrp.splice(i, 1) // = ""
            this.reqData.discount.splice(i, 1) // = ""
            this.reqData.amount.splice(i, 1) // = ""
            this.reqData.batch.splice(i, 1) // = ""
            this.reqData.medicineStock.splice(i, 1) // = ""
        }
    }
   
    getTotalRecord(i) {
        this.totalPRate = 0
        this.newTotalDiscount = 0
        this.totalNetAmount = 0
        var discount
        
        if (this.reqData.discount[i] == undefined || this.reqData.discount[i] == "" || this.reqData.discount[i]<0 || this.reqData.discount[i]>100) {
            this.reqData.discount[i] = 0
            discount = 0
        } else {
            discount = this.reqData.discount[i]
        }
        // this.reqData.amount[i] = rate + ((this.reqData.quantity[i] * (((cgst+sgst-discount)/100)*rate)))
        // mrp = mrp * this.reqData.quantity[i]
        this.reqData.amount[i] = (this.reqData.mrp[i] / (this.reqData.pack1[i] * this.reqData.pack2[i])) * this.reqData.quantity[i]
        this.reqData.amount[i] = this.reqData.amount[i] - ((discount/100) * this.reqData.amount[i])
        for (var j = 0; j < this.reqData.mrp.length; j++) {
            if (this.reqData.mrp[j]) {
                this.totalPRate += Math.ceil(this.reqData.mrp[j])
            }
        }
        for (var j = 0; j < this.reqData.discount.length; j++) {
            if (this.reqData.discount[j]) {
                this.newTotalDiscount += Math.ceil(this.reqData.discount[j])
            }
        }
        for (var j = 0; j < this.reqData.amount.length; j++) {
            if (this.reqData.amount[j]) {
                this.totalNetAmount += this.reqData.amount[j]
            }
        }
        this.partyTotal = Math.ceil(this.totalNetAmount - this.returnEditable)
        if(this.reqData.medicineStock[i].total_stock < this.reqData.quantity[i]){
            this.toastr.warning("Quantity cant exceed current available stock","Warning")
            return
        }
    }
    onTextChangeOfMedName(type, observation) {
        if (type != "") {
            let object = {
                type: type,
                observation: observation,
                smart_pharmacy_id:this.pharmacyData.dataSmartPharmacy._id,
            }
            this.userService.FindProductSuggestionFromStock(object).subscribe(data => {
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
    fetchBill(){
      this.returnQty = []
      this.returnStatus = []
      this.returnPurchaseArray = []
      this.billFetched = false
      this.quantityReturn=0
      if(this.receiptNumberSearch !=null && this.receiptNumberSearch != '' && !isNaN(this.receiptNumberSearch)){
        this.loading = true
        let ob = {
            smart_pharmacy_id:this.pharmacyData.dataSmartPharmacy._id,
            id:this.receiptNumberSearch
        }
        this.userService.FetchReceipt(ob).subscribe(data => {
            console.log(data)
            this.loading = false
            if (data.response == true) {
                if(data.data.walkin_patient){
                    this.receiptPatient = data.data.patient_name
                }else{
                    this.receiptPatient = data.data.dispensed_patient_id.registration.pateintName
                }   
                this.billFetched = true
                this.returnPurchaseArray = data.data.medicines[0]
                this.returnStatus = []
                this.returnQty = []
                for (var i = 0; i < this.returnPurchaseArray.quantity.length; i++) {
                    this.returnStatus.push(false)
                    this.returnQty.push(this.returnPurchaseArray.quantity[i])
                }
                this.toastr.success(data.message,"Success")
            }else{
                this.toastr.error(data.message,"Error")
            }
        }, err => {
            console.log(err);
        })
      }
    }
    calculateReturn() {
        this.partyTotal = this.totalNetAmount - this.returnEditable
    }

    findMedicinesFromStock() {
        this.loading = true   
        let object = {
            id: this.pharmacyData.dataSmartPharmacy._id,
            medication: this.patientData.precription.tempMedicationArray
        }
        this.userService.FindMedicinesFromStock(object).subscribe(data => {
            console.log(data)
            this.loading = false
            if (data.response == true) {
                this.reqData.medicineStock = []
                for (var i = 0; i < data.data.length; i++) {
                    if(data.data[i].data != null){
                        this.reqData.pack1[data.data[i].i] = data.data[i].data.pack_units
                        this.reqData.pack2[data.data[i].i] = data.data[i].data.pack_quantity
                        this.reqData.batch[data.data[i].i] = data.data[i].data.batch
                        this.reqData.mrp[data.data[i].i] = data.data[i].data.mrp
                        this.reqData.medicineStock[data.data[i].i] = data.data[i]
                        this.reqData.medicineStock[data.data[i].i].total_stock = data.data[i].total_stock
                    }else{
                        this.reqData.pack1[data.data[i].i] = null
                        this.reqData.pack2[data.data[i].i] = null
                        this.reqData.batch[data.data[i].i] = null
                        this.reqData.mrp[data.data[i].i] = null
                        this.reqData.medicineStock[data.data[i].i] = {}
                        this.reqData.medicineStock[data.data[i].i].total_stock = 0
                    }
                }
            }
        }, err => {
            console.log(err);
        })   
    }

    findSingleMedicinesFromStock(index,type,medication) {
        this.reqData.medicineStock[index] = {}
        this.reqData.medicineStock[index].total_stock = 0
        this.reqData.pack1[index] = null
        this.reqData.pack2[index] = null
        this.reqData.batch[index] = null
        this.reqData.mrp[index] = null
        if (type != "") {   
            // this.loading = true   
            let object = {
                id: this.pharmacyData.dataSmartPharmacy._id,
                type: type,
                medication: medication
            }
            this.userService.FindSingleMedicinesFromStock(object).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.response == true) {
                    this.reqData.medicineStock[index].data = data.data
                    this.reqData.medicineStock[index].i = index
                    this.reqData.medicineStock[index].total_stock = data.data1[0].total
                    this.reqData.pack1[index] = data.data.pack_units
                    this.reqData.pack2[index] = data.data.pack_quantity
                    this.reqData.batch[index] = data.data.batch
                    this.reqData.mrp[index] = data.data.mrp
                    this.reqData.product[index] = data.data.product
                }else{
                    // this.toastr.error(data.message,"Error")
                }
            }, err => {
                console.log(err);
            })   
        }
    }

    resetReturn(){
        this.returnQty = []
        this.returnStatus = []
        this.returnPurchaseArray = []
        this.receiptNumberSearch = null
        this.billFetched = false
        this.quantityReturn = 0 
    }

    onKey(event: any, type) {
        if (event.keyCode == 13) {
            if (type == 'bill') {
                this.fetchBill()
            }
        }
    }

    saveSalesDetails() {
        this.returnEditable = 0
        this.quantityReturn = 0
        var calculatedAmount = 0
        this.returnPurchaseArray.qtyReturn =[]
        this.stockToReturn = []
        var medicines = []
        medicines.push({
            amount : [],
            batch : [],
            discount : [],
            expiry : [],
            medicineStock : [],
            mrp : [],
            opt : [],
            pack1 : [],
            pack2 : [],
            product : [],
            quantity : []
        })
        var return_total_amount : number = 0
        var return_cost_amount : number = 0
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray.amount[i] / this.returnPurchaseArray.quantity[i])
                this.quantityReturn = this.quantityReturn + calculatedAmount
                this.returnPurchaseArray.qtyReturn.push(this.returnQty[i])
                this.stockToReturn.push({
                        stock_id: this.returnPurchaseArray.medicineStock[i].data.id,
                        qtyReturn: this.returnQty[i],
                        new_amount: this.returnPurchaseArray.amountReturn[i]
                    }
                )
                return_total_amount += this.returnPurchaseArray.amount[i] - this.returnPurchaseArray.amountReturn[i]
                medicines[0].batch.push(this.returnPurchaseArray.batch[i])
                medicines[0].discount.push(this.returnPurchaseArray.discount[i])
                medicines[0].mrp.push(this.returnPurchaseArray.mrp[i])
                medicines[0].opt.push(this.returnPurchaseArray.opt[i])
                medicines[0].pack1.push(this.returnPurchaseArray.pack1[i])
                medicines[0].pack2.push(this.returnPurchaseArray.pack2[i])
                medicines[0].product.push(this.returnPurchaseArray.product[i])
                medicines[0].quantity.push(this.returnPurchaseArray.quantity[i] - this.returnQty[i])
                medicines[0].amount.push(this.returnPurchaseArray.amount[i] - this.returnPurchaseArray.amountReturn[i])
                medicines[0].medicineStock.push({
                    i:this.returnPurchaseArray.medicineStock[i].i,
                    data: {
                        amount: this.returnPurchaseArray.medicineStock[i].data.amount,
                        batch: this.returnPurchaseArray.medicineStock[i].data.batch,
                        bill_no: this.returnPurchaseArray.medicineStock[i].data.bill_no,
                        cgst: this.returnPurchaseArray.medicineStock[i].data.cgst,
                        createAt: this.returnPurchaseArray.medicineStock[i].data.createAt,
                        createdAt: this.returnPurchaseArray.medicineStock[i].data.createdAt,
                        discount: this.returnPurchaseArray.medicineStock[i].data.discount,
                        expiry: this.returnPurchaseArray.medicineStock[i].data.expiry,
                        id: this.returnPurchaseArray.medicineStock[i].data.id,
                        invoice_date: this.returnPurchaseArray.medicineStock[i].data.invoice_date,
                        month: this.returnPurchaseArray.medicineStock[i].data.month,
                        mrp: this.returnPurchaseArray.medicineStock[i].data.mrp,
                        p_rate: this.returnPurchaseArray.medicineStock[i].data.p_rate,
                        pack_quantity: this.returnPurchaseArray.medicineStock[i].data.pack_quantity,
                        pack_units: this.returnPurchaseArray.medicineStock[i].data.pack_units,
                        party_name: this.returnPurchaseArray.medicineStock[i].data.party_name,
                        product: this.returnPurchaseArray.medicineStock[i].data.product,
                        qty: this.returnPurchaseArray.medicineStock[i].data.qty,
                        sgst: this.returnPurchaseArray.medicineStock[i].data.sgst,
                        smart_pharmacy_id: this.returnPurchaseArray.medicineStock[i].data.smart_pharmacy_id,
                        sold_stock: this.returnPurchaseArray.medicineStock[i].data.sold_stock - this.returnPurchaseArray.qtyReturn[i],
                        current_stock: this.returnPurchaseArray.medicineStock[i].data.current_stock + this.returnPurchaseArray.qtyReturn[i],
                        total_stock: this.returnPurchaseArray.medicineStock[i].data.total_stock,
                        type: this.returnPurchaseArray.medicineStock[i].data.type,
                        updateAt: this.returnPurchaseArray.medicineStock[i].data.updateAt,
                        updatedAt: this.returnPurchaseArray.medicineStock[i].data.updatedAt,
                        year: this.returnPurchaseArray.medicineStock[i].data.year,
                        __v: this.returnPurchaseArray.medicineStock[i].data.__v,
                        _id: this.returnPurchaseArray.medicineStock[i].data._id   
                    }
                })
            }
        }
        for (var ii = 0; ii < medicines[0].medicineStock.length; ii++) {
            return_cost_amount += (medicines[0].medicineStock[ii].data.amount*medicines[0].quantity[ii])/(medicines[0].medicineStock[ii].data.pack_units*medicines[0].medicineStock[ii].data.pack_quantity*medicines[0].medicineStock[ii].data.qty)
        }
        this.returnEditable = this.quantityReturn
        this.partyTotal = this.totalNetAmount - this.returnEditable

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
            if (this.reqData.quantity[i] < 1 || this.reqData.quantity[i] == '' || this.reqData.quantity[i] == null || this.reqData.quantity[i] == undefined) {
                this.toastr.warning('Invalid quantity', 'Warning')
                return
            } else if(this.reqData.medicineStock[i].total_stock < this.reqData.quantity[i]){
                this.toastr.warning("Quantity cant exceed current available stock","Warning")
                return
            }else {
                this.totalQuantity += this.reqData.quantity[i]
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

        this.cost_amount = 0
            console.log(this.reqData.medicineStock)
        for (var ii = 0; ii < this.reqData.medicineStock.length; ii++) {
            console.log(this.reqData.medicineStock[ii].data.amount)
            this.cost_amount += (this.reqData.medicineStock[ii].data.amount*this.reqData.quantity[ii])/(this.reqData.medicineStock[ii].data.pack_units*this.reqData.medicineStock[ii].data.pack_quantity*this.reqData.medicineStock[ii].data.qty)
        }
        var ob = {
            smart_pharmacy_id:this.pharmacyData.dataSmartPharmacy._id,
            dispensed_patient_id:this.patientData._id,
            medicines:this.reqData,
            total_amount:this.totalNetAmount,
            cost_amount: this.cost_amount,
            payment_mode: this.payment_mode,
            stockToReturn: this.stockToReturn,
            return_id: this.receiptNumberSearch,
            updateSalesMedicines: medicines,
            return_total_amount: return_total_amount,
            return_cost_amount: return_cost_amount
        }
        console.log(ob)
        this.loading = true
        this.userService.CreateSalesEntry(ob).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.toastr.success(data.message, "Success")
                this.savedInvoiceId = data.data.id
                this.today = new Date()
                setTimeout(() => {
                    $('#receiptPdf').printThis({
                        debug: false,
                        importCSS: true,
                        importStyle: true,
                        printContainer: true,
                        pageTitle: "Prescription",
                        removeInline: false,
                        printDelay: 333,
                        header: null,
                        formValues: true
                    });
                    // setTimeout(() => {
                        this.router.navigate(['/header-five-layout/dashboard-pharmacy']);
                    // }, 3000);
                }, 1000);
            } else {
                this.loading = false
                this.toastr.error(data.message, "Error")
            }
        }, err => {
            console.log(err);
        })
    }

    // saveSalesDetails() {
    //     this.today = new Date()
    //     $('#receiptPdf').printThis({
    //         debug: false,
    //         importCSS: true,
    //         importStyle: true,
    //         printContainer: true,
    //         pageTitle: "Prescription",
    //         removeInline: false,
    //         printDelay: 333,
    //         header: null,
    //         formValues: true
    //     });
    // }

    getReturnStatus(i) {
        if (this.returnStatus[i] == true) {
            return false
        } else {
            return true
        }
    }

    getTotalReturn() {
        for (var i = 0; i < this.returnPurchaseArray.quantity.length; i++) {
            if (this.returnPurchaseArray.quantity[i] < this.returnQty[i]) {
                this.toastr.warning("Return quantity can't exceed actual quantity", "Warning")
                return
            } else if (this.returnQty[i] < 1 || this.returnQty[i] == null || this.returnQty[i] == '' || this.returnQty[i] == undefined) {
                this.toastr.warning("Minimum return quantity can be 1", "Warning")
                return
            }
        }
        this.quantityReturn = 0
        var calculatedAmount = 0
        this.returnPurchaseArray.qtyReturn =[]
        this.returnPurchaseArray.amountReturn = []
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray.amount[i] / this.returnPurchaseArray.quantity[i])
                this.quantityReturn = this.quantityReturn + calculatedAmount
                this.returnPurchaseArray.amountReturn.push(calculatedAmount)
                this.returnPurchaseArray.qtyReturn.push(this.returnQty[i])
            }
        }
    }

    updateReturnAmount() {
        for (var i = 0; i < this.returnPurchaseArray.quantity.length; i++) {
            if (this.returnPurchaseArray.quantity[i] < this.returnQty[i]) {
                this.toastr.warning("Return quantity can't exceed actual quantity", "Warning")
                return
            } else if (this.returnQty[i] < 1 || this.returnQty[i] == null || this.returnQty[i] == '' || this.returnQty[i] == undefined) {
                this.toastr.warning("Minimum return quantity can be 1", "Warning")
                return
            }
        }
        this.returnEditable = 0
        this.quantityReturn = 0
        var calculatedAmount = 0
        this.returnPurchaseArray.qtyReturn =[]
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray.amount[i] / this.returnPurchaseArray.quantity[i])
                this.quantityReturn = this.quantityReturn + calculatedAmount
                this.returnPurchaseArray.qtyReturn.push(this.returnQty[i])
            }
        }
        this.returnEditable = this.quantityReturn
        this.partyTotal = this.totalNetAmount - this.returnEditable
        $("#stck-prchse").modal("hide");
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
                this.updateReturnAmount()
                // $("#dischargeModal").modal("show");
                // $('textarea').autoResize();
            } else {
                console.log("error or No Thanks button clicked")
            }
        });
    }
    getDoctorName(doc){
        for (var i = 0; i < this.pharmacyData.doctorsRegisteredForSmartClinic.length; i++) {
            if(this.pharmacyData.doctorsRegisteredForSmartClinic[i]._id == doc){
                return this.pharmacyData.doctorsRegisteredForSmartClinic[i].first_name
            }
        }
    }


}
