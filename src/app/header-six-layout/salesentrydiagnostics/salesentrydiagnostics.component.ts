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
  selector: 'app-salesentrydiagnostics',
  templateUrl: './salesentrydiagnostics.component.html',
  styleUrls: ['./salesentrydiagnostics.component.css'],
  providers: [UserService]
})
export class SalesentrydiagnosticsComponent implements OnInit {

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
    diagnosticsData
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
    dataDoctors
    servicesArray

    patientListReg
    patientListReg1

    constructor(private formBuilder: FormBuilder, private toastr: ToastrService, 
        private userService: UserService,public router: Router, public dialog: MatDialog) {}
    ngOnInit() {
        this.dataDoctors=[]
        this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails'])
        console.log(this.diagnosticsData)
        this.dataDoctors=this.diagnosticsData.doctorsRegisteredForSmartClinic
        console.log(this.dataDoctors)

        /////
        this.servicesArray = []
        /////


        // this.reqData = {}
        // this.reqData.opt = []
        //  this.reqData.opt[0] = ""
        //  this.totalTr = [1]
        //Akshay
        this.reqData = {}
        this.reqData.opt = []
        this.reqData.opt[0] = ""
        this.reqData.product = []
        this.reqData.product[0] = ""
        this.reqData.mrp = []
        this.reqData.mrp[0] = ""
        this.reqData.discount = []
        this.reqData.discount[0] = ""
        this.reqData.amount = []
        this.reqData.amount[0] = ""
        this.totalTr = [1]
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
        this.reqData.doctorName=undefined
        this.totalNetAmount = 0

        this.patientListReg = []
        this.patientListReg1 = []
        
        this.GetServices()
    }

    GetServices(){
        this.servicesArray.push({
            status: false,
            name: this.diagnosticsData.doctorsRegisteredForSmartClinic[0].clinic_services.ClinicServicesDetail[0]
        })
        for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
            for (var j = 0; j < this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.ClinicServicesDetail.length; j++) {
                var boolean = false
                for (var k = 0; k < this.servicesArray.length; k++) {
                    if(this.servicesArray[k].name == this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.ClinicServicesDetail[j]){
                        boolean = true
                        break;
                    }
                }
                if(boolean == false){
                    this.servicesArray.push({
                        status: false,
                        name: this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.ClinicServicesDetail[j]
                    })
                }
            }
            for (var j = 0; j < this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.OtherClinicService.length; j++) {
                var boolean = false
                for (var k = 0; k < this.servicesArray.length; k++) {
                    if(this.servicesArray[k].name == this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.OtherClinicService[j].value){
                        boolean = true
                        break;
                    }
                }
                if(boolean == false){
                    this.servicesArray.push({
                        status: false,
                        name: this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.OtherClinicService[j].value
                    })
                }
            }
        }
        this.checkIfAddress()
    }

    checkIfAddress(){
        if(this.diagnosticsData.dataSmartDiagnostics.address_filled){
            this.reqData.diagnosticsName = this.diagnosticsData.dataSmartDiagnostics.diagnostics_name
            this.reqData.address = this.diagnosticsData.dataSmartDiagnostics.diagnostics_address
            this.reqData.phone = this.diagnosticsData.dataSmartDiagnostics.diagnostics_phone
            this.reqData.drugLicense = this.diagnosticsData.dataSmartDiagnostics.diagnostics_license
            this.reqData.gstinNumber = this.diagnosticsData.dataSmartDiagnostics.diagnostics_gst_no
            this.reqData.conditionOne = this.diagnosticsData.dataSmartDiagnostics.term1
            this.reqData.conditionTwo = this.diagnosticsData.dataSmartDiagnostics.term2
            this.reqData.conditionThree = this.diagnosticsData.dataSmartDiagnostics.term3
            this.reqData.conditionFour = this.diagnosticsData.dataSmartDiagnostics.term4
            for (var i = 0; i < this.diagnosticsData.dataSmartDiagnostics.diagnostics_services.length; i++) {
                for (var j = 0; j < this.servicesArray.length; j++) {
                    if(this.servicesArray[j].name == this.diagnosticsData.dataSmartDiagnostics.diagnostics_services[i]){
                        this.servicesArray[j].status = true
                        break
                    }
                }
            }
        }
    }

    addRow() {
        this.totalTr.push(1)
        this.reqData.opt[this.totalTr.length - 1] = ""

        this.reqData.mrp[this.totalTr.length - 1] = ""
        this.reqData.discount[this.totalTr.length - 1] = ""
        this.reqData.amount[this.totalTr.length - 1] = ""
    }
    removeRow(i) {
        if (this.totalTr.length == 1) {
            this.totalTr = []
            this.totalTr.push(1)
            this.reqData.opt[0] = ""
            this.reqData.product[0] = ""
            this.reqData.mrp[0] = ""
            this.reqData.discount[0] = ""
            this.reqData.amount[0] = ""
        } else {
            this.totalTr.splice(i, 1)
            this.reqData.opt.splice(i, 1) // = ""
            this.reqData.product.splice(i, 1) // = ""
            this.reqData.mrp.splice(i, 1) // = ""
            this.reqData.discount.splice(i, 1) // = ""
            this.reqData.amount.splice(i, 1) // = ""
        }
        this.getTotalRecord(i)
    }
   
    getTotalRecord(i) {
        this.totalPRate = 0
        this.newTotalDiscount = 0
        this.totalNetAmount = 0
        var discount

        if (this.reqData.discount[i] == undefined || this.reqData.discount[i] == "" || this.reqData.discount[i]<0 || this.reqData.discount[i]>100 
            || this.reqData.discount[i]=='-0') {
            this.reqData.discount[i] = 0
            discount = 0
        } else {
            discount = this.reqData.discount[i]
        }
        this.reqData.amount[i] = this.reqData.mrp[i]
        this.reqData.amount[i] =  this.reqData.mrp[i] - ((discount/100) *  this.reqData.mrp[i])
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
        this.reqData.partyTotal=this.partyTotal
    }
    onTextChangeOfMedName(type, observation) {
        if (type != "") {
            let object = {
                category: type,
                test_name: observation,
                smart_diagnostics_id: this.diagnosticsData.dataSmartDiagnostics._id,
            }
            this.userService.FindTestSuggestion(object).subscribe(data => {
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
    // fetchBill(){
    // 	if(this.reqData.patientName==''|| this.reqData.patientName==null || this.reqData.patientName==undefined){
    // 		this.toastr.warning('Please fill patient name', 'Warning')
    //             return
    // 	} else if (this.reqData.patientName.trim().length < 1) {
    //             this.toastr.warning('Please fill patient name', 'Warning')
    //             return
    //     }
    // 	if(this.reqData.patientMobile==''|| this.reqData.patientMobile==null || this.reqData.patientMobile==undefined){
    // 		this.toastr.warning('Please fill patient mobile number', 'Warning')
    //             return
    // 	}
    // if(this.reqData.patientName==''|| this.reqData.patientName==null || this.reqData.patientName==undefined){
    //         this.toastr.warning('Please fill patient name', 'Warning')
    //             return
    //     } else if (this.reqData.patientName.trim().length < 1) {
    //             this.toastr.warning('Please fill patient name', 'Warning')
    //             return
    //     }
    //     if(this.reqData.patientMobile==''|| this.reqData.patientMobile==null || this.reqData.patientMobile==undefined){
    //         this.toastr.warning('Please fill patient mobile number', 'Warning')
    //             return
    //     }
    // 	for (var i = 0; i < this.reqData.opt.length; i++) {
    //         if (this.reqData.opt[i] == '' || this.reqData.opt[i] == null || this.reqData.opt[i] == undefined) {
    //             this.toastr.warning('Invalid Type', 'Warning')
    //             return
    //         }
    //     }        
    //     for (var i = 0; i < this.reqData.product.length; i++) {
    //         if (this.reqData.product[i] == '' || this.reqData.product[i] == null || this.reqData.product[i] == undefined) {
    //             this.toastr.warning('Invalid Product', 'Warning')
    //             return
    //         } else if (this.reqData.product[i].trim().length < 1) {
    //             this.toastr.warning('Invalid Product', 'Warning')
    //             return
    //         }
    //     }       
    //     for (var i = 0; i < this.reqData.pack1.length; i++) {
    //         if (this.reqData.pack1[i] < 1 || this.reqData.pack1[i] == '' || this.reqData.pack1[i] == null || this.reqData.pack1[i] == undefined) {
    //             this.toastr.warning('Invalid pack units', 'Warning')
    //             return
    //         }
    //     }
    //     for (var i = 0; i < this.reqData.pack2.length; i++) {
    //         if (this.reqData.pack2[i] < 1 || this.reqData.pack2[i] == '' || this.reqData.pack2[i] == null || this.reqData.pack2[i] == undefined) {
    //             this.toastr.warning('Invalid pack quantity', 'Warning')
    //             return
    //         }
    //     }
    //     for (var i = 0; i < this.reqData.batch.length; i++) {
    //         if (this.reqData.batch[i] == '' || this.reqData.batch[i] == null || this.reqData.batch[i] == undefined) {
    //             this.toastr.warning('Invalid batch', 'Warning')
    //             return
    //         } else if (this.reqData.batch[i].trim().length < 1) {
    //             this.toastr.warning('Invalid batch', 'Warning')
    //             return
    //         }
    //     }
    //     for (var i = 0; i < this.reqData.quantity.length; i++) {
    //         if (this.reqData.quantity[i] == '' || this.reqData.quantity[i] == null || this.reqData.quantity[i] == undefined) {
    //             this.toastr.warning('Invalid quantity', 'Warning')
    //             return
    //         }
    //     }
    //     for (var i = 0; i < this.reqData.mrp.length; i++) {
    //         if (this.reqData.mrp[i] == '' || this.reqData.mrp[i] == null || this.reqData.mrp[i] == undefined) {
    //             this.toastr.warning('Invalid MRP', 'Warning')
    //             return
    //         }
    //     }
        
    //     for (var i = 0; i < this.reqData.discount.length; i++) {
    //       if(this.reqData.discount[i]<0 || this.reqData.discount[i]>100)
    //       {
    //         this.toastr.warning('Invalid discount', 'Warning')
    //         return
    //       }
    //     }
    // }
    
    // fetchBill(){
    //   this.returnQty = []
    //   this.returnStatus = []
    //   this.returnPurchaseArray = []
    //   this.billFetched = false
    //   this.quantityReturn=0
    //   if(this.receiptNumberSearch !=null && this.receiptNumberSearch != '' && !isNaN(this.receiptNumberSearch)){
    //     this.loading = true
    //     let ob = {
    //         smart_pharmacy_id:this.diagnosticsData.dataSmartDiagnostics._id,
    //         id:this.receiptNumberSearch
    //     }
    //     this.userService.FetchReceipt(ob).subscribe(data => {
    //         console.log(data)
    //         this.loading = false
    //         if (data.response == true) {
    //             if(data.data.walkin_patient){
    //                 this.receiptPatient = data.data.patient_name
    //             }else{
    //                 this.receiptPatient = data.data.dispensed_patient_id.registration.pateintName
    //             }    
    //             this.billFetched = true
    //             this.returnPurchaseArray = data.data.medicines[0]
    //             this.returnStatus = []
    //             this.returnQty = []
    //             for (var i = 0; i < this.returnPurchaseArray.quantity.length; i++) {
    //                 this.returnStatus.push(false)
    //                 this.returnQty.push(this.returnPurchaseArray.quantity[i])
    //             }
    //             this.toastr.success(data.message,"Success")
    //         }else{
    //             this.toastr.error(data.message,"Error")
    //         }
    //     }, err => {
    //         console.log(err);
    //     })
    //   }
    // }   
    
    calculateReturn() {
        this.partyTotal = this.totalNetAmount - this.returnEditable
    }

    // findMedicinesFromStock() {
    //     this.loading = true   
    //     let object = {
    //         id: this.diagnosticsData.dataSmartDiagnostics._id,
    //         medication: this.patientData.precription.tempMedicationArray
    //     }
    //     this.userService.FindMedicinesFromStock(object).subscribe(data => {
    //         console.log(data)
    //         this.loading = false
    //         if (data.response == true) {
    //             this.reqData.medicineStock = []
    //             for (var i = 0; i < data.data.length; i++) {
    //                 if(data.data[i].data != null){
    //                     this.reqData.medicineStock[data.data[i].i] = data.data[i]
    //                     this.reqData.pack1[data.data[i].i] = data.data[i].data.pack_units
    //                     this.reqData.pack2[data.data[i].i] = data.data[i].data.pack_quantity
    //                     this.reqData.batch[data.data[i].i] = data.data[i].data.batch
    //                     this.reqData.mrp[data.data[i].i] = data.data[i].data.mrp
    //                 }else{
    //                     this.reqData.pack1[data.data[i].i] = null
    //                     this.reqData.pack2[data.data[i].i] = null
    //                     this.reqData.batch[data.data[i].i] = null
    //                     this.reqData.mrp[data.data[i].i] = null
    //                     this.reqData.medicineStock[data.data[i].i] = null
    //                 }
    //             }
    //         }
    //     }, err => {
    //         console.log(err);
    //     })   
    // }

    findSingleMedicinesFromStock(index,type,medication) {
        // this.reqData.medicineStock[index] = {}
        // this.reqData.medicineStock[index].total_stock = 0
        // this.reqData.pack1[index] = null
        // this.reqData.pack2[index] = null
        // this.reqData.batch[index] = null
        this.reqData.mrp[index] = null
        for (var i = 0; i < this.productNameSuggestion.length; i++) {
            if(this.productNameSuggestion[i].name==medication && this.productNameSuggestion[i].category == type){
                this.reqData.mrp[index]=this.productNameSuggestion[i].rate
                this.reqData.discount[index]=this.productNameSuggestion[i].discount
                this.getTotalRecord(index)
                break
            }else{
                this.reqData.mrp[index] = ''
                this.reqData.discount[index] = ''    
            }
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
                //this.fetchBill()
            }
        }
    }

    saveSalesDetails() {
       
        this.returnEditable = 0
        this.quantityReturn = 0
        var calculatedAmount = 0
        // this.returnPurchaseArray.qtyReturn =[]
        // this.stockToReturn = []
        // var medicines = []
        // medicines.push({
        //     amount : [],
        //     batch : [],
        //     discount : [],
        //     expiry : [],
        //     medicineStock : [],
        //     mrp : [],
        //     opt : [],
        //     pack1 : [],
        //     pack2 : [],
        //     product : [],
        //     quantity : []
        // })
        // var return_total_amount : number = 0
        // var return_cost_amount : number = 0
        // for (var i = 0; i < this.returnStatus.length; i++) {
        //     if (this.returnStatus[i] == true) {
        //         calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray.amount[i] / this.returnPurchaseArray.quantity[i])
        //         this.quantityReturn = this.quantityReturn + calculatedAmount
        //         this.returnPurchaseArray.qtyReturn.push(this.returnQty[i])
        //         this.stockToReturn.push({
        //                 stock_id: this.returnPurchaseArray.medicineStock[i].data.id,
        //                 qtyReturn: this.returnQty[i],
        //                 new_amount: this.returnPurchaseArray.amountReturn[i]
        //             }
        //         )
        //         return_total_amount += this.returnPurchaseArray.amount[i] - this.returnPurchaseArray.amountReturn[i]

        //         medicines[0].batch.push(this.returnPurchaseArray.batch[i])
        //         medicines[0].discount.push(this.returnPurchaseArray.discount[i])
        //         medicines[0].mrp.push(this.returnPurchaseArray.mrp[i])
        //         medicines[0].opt.push(this.returnPurchaseArray.opt[i])
        //         medicines[0].pack1.push(this.returnPurchaseArray.pack1[i])
        //         medicines[0].pack2.push(this.returnPurchaseArray.pack2[i])
        //         medicines[0].product.push(this.returnPurchaseArray.product[i])
        //         medicines[0].quantity.push(this.returnPurchaseArray.quantity[i] - this.returnQty[i])
        //         medicines[0].amount.push(this.returnPurchaseArray.amount[i] - this.returnPurchaseArray.amountReturn[i])
        //         medicines[0].medicineStock.push({
        //             i:this.returnPurchaseArray.medicineStock[i].i,
        //             data: {
        //                 amount: this.returnPurchaseArray.medicineStock[i].data.amount,
        //                 batch: this.returnPurchaseArray.medicineStock[i].data.batch,
        //                 bill_no: this.returnPurchaseArray.medicineStock[i].data.bill_no,
        //                 cgst: this.returnPurchaseArray.medicineStock[i].data.cgst,
        //                 createAt: this.returnPurchaseArray.medicineStock[i].data.createAt,
        //                 createdAt: this.returnPurchaseArray.medicineStock[i].data.createdAt,
        //                 discount: this.returnPurchaseArray.medicineStock[i].data.discount,
        //                 expiry: this.returnPurchaseArray.medicineStock[i].data.expiry,
        //                 id: this.returnPurchaseArray.medicineStock[i].data.id,
        //                 invoice_date: this.returnPurchaseArray.medicineStock[i].data.invoice_date,
        //                 month: this.returnPurchaseArray.medicineStock[i].data.month,
        //                 mrp: this.returnPurchaseArray.medicineStock[i].data.mrp,
        //                 p_rate: this.returnPurchaseArray.medicineStock[i].data.p_rate,
        //                 pack_quantity: this.returnPurchaseArray.medicineStock[i].data.pack_quantity,
        //                 pack_units: this.returnPurchaseArray.medicineStock[i].data.pack_units,
        //                 party_name: this.returnPurchaseArray.medicineStock[i].data.party_name,
        //                 product: this.returnPurchaseArray.medicineStock[i].data.product,
        //                 qty: this.returnPurchaseArray.medicineStock[i].data.qty,
        //                 sgst: this.returnPurchaseArray.medicineStock[i].data.sgst,
        //                 smart_pharmacy_id: this.returnPurchaseArray.medicineStock[i].data.smart_pharmacy_id,
        //                 sold_stock: this.returnPurchaseArray.medicineStock[i].data.sold_stock - this.returnPurchaseArray.qtyReturn[i],
        //                 current_stock: this.returnPurchaseArray.medicineStock[i].data.current_stock + this.returnPurchaseArray.qtyReturn[i],
        //                 total_stock: this.returnPurchaseArray.medicineStock[i].data.total_stock,
        //                 type: this.returnPurchaseArray.medicineStock[i].data.type,
        //                 updateAt: this.returnPurchaseArray.medicineStock[i].data.updateAt,
        //                 updatedAt: this.returnPurchaseArray.medicineStock[i].data.updatedAt,
        //                 year: this.returnPurchaseArray.medicineStock[i].data.year,
        //                 __v: this.returnPurchaseArray.medicineStock[i].data.__v,
        //                 _id: this.returnPurchaseArray.medicineStock[i].data._id   
        //             }
        //         })
        //     }
        // }
        // for (var ii = 0; ii < medicines[0].medicineStock.length; ii++) {
        //     return_cost_amount += (medicines[0].medicineStock[ii].data.amount*medicines[0].quantity[ii])/(medicines[0].medicineStock[ii].data.pack_units*medicines[0].medicineStock[ii].data.pack_quantity*medicines[0].medicineStock[ii].data.qty)
        // }
        // this.returnEditable = this.quantityReturn
        // this.partyTotal = this.totalNetAmount - this.returnEditable

        // this.reqData.expiry = []
        // var thisYear = new Date().getFullYear().toString().substr(-2)
        //var thisMonth = new Date().getMonth() + 1
        if(this.reqData.patientMobile==''|| this.reqData.patientMobile==null || this.reqData.patientMobile==undefined){
            this.toastr.warning('Please fill patient mobile number', 'Warning')
            return
        }else if(this.reqData.patientMobile.length!=10 || isNaN(this.reqData.patientMobile)){
            this.toastr.warning('Please enter valid mobile number', 'Warning')
            return
        }
        if(this.reqData.patientName==''|| this.reqData.patientName==null || this.reqData.patientName==undefined || !isNaN(this.reqData.patientName)){
            this.toastr.warning('Please fill patient name', 'Warning')
            return
        } else if (this.reqData.patientName.trim().length < 1) {
            this.toastr.warning('Please fill patient name', 'Warning')
            return
        }
        for (var i = 0; i < this.reqData.opt.length; i++) {
            if (this.reqData.opt[i] == '' || this.reqData.opt[i] == null || this.reqData.opt[i] == undefined) {
                this.toastr.warning('Invalid Type', 'Warning')
                return
            }
        }
        for (var i = 0; i < this.reqData.product.length; i++) {
            if (this.reqData.product[i] == '' || this.reqData.product[i] == null || this.reqData.product[i] == undefined) {
                this.toastr.warning('Invalid Test name', 'Warning')
                return
            } else if (this.reqData.product[i].trim().length < 1) {
                this.toastr.warning('Invalid Test name', 'Warning')
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
        for (var i = 0; i < this.reqData.amount.length; i++) {
            if (this.reqData.amount[i] < 1 || this.reqData.amount[i] == '' || this.reqData.amount[i] == null || this.reqData.amount[i] == undefined) {
                this.toastr.warning('Invalid Amount', 'Warning')
                return
            } else {
                this.totalAmount += this.reqData.amount[i]
            }
        }


        // this.cost_amount = 0
        // for (var ii = 0; ii < this.reqData.medicineStock.length; ii++) {
        //     this.cost_amount += (this.reqData.medicineStock[ii].data.amount*this.reqData.quantity[ii])/
        //     (this.reqData.medicineStock[ii].data.pack_units*this.reqData.medicineStock[ii].data.pack_quantity*this.reqData.medicineStock[ii].data.qty)
        //     // console.log(this.reqData.medicineStock[ii].data.amount, this.reqData.quantity[ii])
        //     // console.log()
        // }
        var ob = {
            smart_diagnostics_id:this.diagnosticsData.dataSmartDiagnostics._id,
            tests:this.reqData,
            total_amount:this.partyTotal,
            payment_mode: this.payment_mode,
            walkin_patient:true,
            patient_name: this.reqData.patientName,
            patient_mobile: this.reqData.patientMobile,
            doctor_id: this.reqData.doctorName,
        }
        console.log(ob)
        this.loading = true
        this.userService.SaveDiagnosticsSale(ob).subscribe(data => {
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
                       this.router.navigate(['/header-six-layout/dashboard-diagnostic']);
                    //}, 3000);
                }, 1000);
            } else {
                this.loading = false
                this.toastr.error(data.message, "Error")
            }
        }, err => {
            console.log(err);
        })
         console.log(this.reqData)
    }

    getReturnStatus(i) {
        if (this.returnStatus[i] == true) {
            return false
        } else {
            return true
        }
    }

    // getTotalReturn() {
    //     for (var i = 0; i < this.returnPurchaseArray.quantity.length; i++) {
    //         if (this.returnPurchaseArray.quantity[i] < this.returnQty[i]) {
    //             this.toastr.warning("Return quantity can't exceed actual quantity", "Warning")
    //             return
    //         } else if (this.returnQty[i] < 1 || this.returnQty[i] == null || this.returnQty[i] == '' || this.returnQty[i] == undefined) {
    //             this.toastr.warning("Minimum return quantity can be 1", "Warning")
    //             return
    //         }
    //     }
    //     this.quantityReturn = 0
    //     var calculatedAmount = 0
    //     this.returnPurchaseArray.qtyReturn = []
    //     this.returnPurchaseArray.amountReturn = []
    //     for (var i = 0; i < this.returnStatus.length; i++) {
    //         if (this.returnStatus[i] == true) {
    //             calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray.amount[i] / this.returnPurchaseArray.quantity[i])
    //             this.quantityReturn = this.quantityReturn + calculatedAmount
    //             this.returnPurchaseArray.amountReturn.push(calculatedAmount)
    //             this.returnPurchaseArray.qtyReturn.push(this.returnQty[i])
    //         }
    //     }
    // }

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
    getDoctorName(id){
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if(this.dataDoctors[i]._id == id){
                return (this.dataDoctors[i].first_name)
            }
        }
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

    getData(data){
        if(data % 1 != 0){
            return data.toFixed(2)
        }else{
            return data
        }
    }

    findPatientAppointmentByPhone(data) {
        if(this.reqData.patientMobile.length<10){
            this.toastr.warning("Please fill atleast 10 digits number", "Warning")
            return
        }
        if (!isNaN(data)) {
            data = data.trim() 
            let object 
            object = {}
            object.clinic_id =  this.dataDoctors[0].doctm_clinic_id
            object.mobile = data
            this.userService.GetPatientDetail(object).subscribe(data2 => {
                console.log(data2)
                if (data2.response == true) {
                    if(data2.data.length==1){
                        this.reqData.patientName = data2.data[0].name
                    }else{
                        this.patientListReg = data2.data
                        this.patientListReg1 = data2.data
                        console.log(this.patientListReg)
                    }
                }
            }, err => {
                console.log(err);
            })
        }else{
            this.toastr.warning("Invalid phone number","Warning")
        }
    }

    SearchPatientNameReg(data){
        data = data.toLowerCase()
        if (data && data.trim() != '') {
            this.patientListReg = this.patientListReg1.filter((item) => {
                let b = item.name.toLowerCase()
                return (b.indexOf(data) > -1)
            })
        }
        if (data == '') {
            this.patientListReg = this.patientListReg1;
        }
    }

}