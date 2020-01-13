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
  selector: 'app-salesbydiagnostics',
  templateUrl: './salesbydiagnostics.component.html',
  styleUrls: ['./salesbydiagnostics.component.css'],
  providers: [UserService]
})
export class SalesbydiagnosticsComponent implements OnInit {
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
    dataDoctors
    diagnosticsData
    servicesArray
    constructor(private formBuilder: FormBuilder, private toastr: ToastrService, 
        private userService: UserService,public router: Router, public dialog: MatDialog) {}
    ngOnInit() {
    	this.dataDoctors=[]
       // this.diagnosticsData = JSON.parse(localStorage['smartDetails'])
        this.patientData = JSON.parse(localStorage['patientDataForDiagnostics'])
        this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails'])
        this.dataDoctors=this.diagnosticsData.doctorsRegisteredForSmartClinic
        console.log(this.dataDoctors)
        console.log(this.patientData)
        console.log(this.diagnosticsData)
        // if(this.diagnosticsData.dataSmartPharmacy.address_filled){
        //     this.pharmacyName = this.diagnosticsData.dataSmartPharmacy.pharmacy_name
        //     this.address = this.diagnosticsData.dataSmartPharmacy.pharmacy_address
        //     this.phone = this.diagnosticsData.dataSmartPharmacy.pharmacy_phone
        //     this.drugLicense = this.diagnosticsData.dataSmartPharmacy.pharmacy_license
        //     this.gstinNumber = this.diagnosticsData.dataSmartPharmacy.pharmacy_gst_no
        //     this.conditionOne = this.diagnosticsData.dataSmartPharmacy.term1
        //     this.conditionTwo = this.diagnosticsData.dataSmartPharmacy.term2
        //     this.conditionThree = this.diagnosticsData.dataSmartPharmacy.term3
        //     this.conditionFour = this.diagnosticsData.dataSmartPharmacy.term4
        // }


        this.reqData = {}
        this.reqData.opt = []
         this.reqData.opt[0] = ""
         this.totalTr = [1]
        //Akshay
        this.reqData = {}
        this.reqData.opt = []
        this.reqData.product = []
        this.reqData.mrp = []
        this.reqData.discount = []
        this.reqData.amount = []
        this.returnQty = []
        this.reqData.quantity = []
        this.returnStatus = []
        this.returnPurchaseArray = []
        this.billFetched = false
        this.receiptNumberSearch = []
        this.returnEditable = 0
        this.partyTotal = 0
        this.cost_amount = 0
        this.payment_mode = "Cash"
        this.stockToReturn = []
        this.servicesArray=[]
        this.totalNetAmount = 0
        this.productNameSuggestion = []
        
        // if (this.patientData.precription.investigationArray.length > 0) {
        //     for (var i = 0; i < this.patientData.precription.investigationArray.length; i++) {
        //     	for (var j = 0; j < this.patientData.precription.investigationArray[i].values.length; j++) {
        //     		var type
			     //    if (this.patientData.precription.investigationArray[i].name == 'Pathology') {
			     //        type = 'PATHOLOGY'
			     //        this.reqData.opt.push(type)
			     //    } else if (this.patientData.precription.investigationArray[i].name == 'Ultrasound') {
			     //        type = 'ULTRASOUND'
			     //        this.reqData.opt.push(type)
			     //    } else if (this.patientData.precription.investigationArray[i].name == 'Audiometry') {
			     //        type = 'AUDIOMETRY'
			     //        this.reqData.opt.push(type)
			     //    } else if (this.patientData.precription.investigationArray[i].name == 'Bone densitometry') {
			     //        type = 'BONE DENSITOMETRY'
			     //        this.reqData.opt.push(type)
			     //    } else if (this.patientData.precription.investigationArray[i].name == 'Doppler Studies') {
			     //        type = 'DOPPLER STUDIES'
			     //        this.reqData.opt.push(type)
			     //    } else if (this.patientData.precription.investigationArray[i].name == 'Mammograaphy') {
			     //        type = 'MAMMOGRAPHY'
			     //        this.reqData.opt.push(type)
			     //    } else if (this.patientData.precription.investigationArray[i].name == 'Uroflowmetry') {
			     //        type = 'UROFLOWMETRY'
			     //        this.reqData.opt.push(type)
			     //    } else if (this.patientData.precription.investigationArray[i].name == 'NERVE TEST') {
			     //        type = 'Nerve Test'
			     //        this.reqData.opt.push(type)
			     //    } else if (this.patientData.precription.investigationArray[i].name == 'Eye Test') {
			     //        type = 'Eye Tests'
			     //        this.reqData.opt.push(type)
			     //    }else{
        //         		this.reqData.opt.push(this.patientData.precription.investigationArray[i].name)
			     //    }
	       //          this.reqData.product.push(this.patientData.precription.investigationArray[i].values[j].display)
	       //          this.reqData.mrp.push(null)
	       //          this.reqData.discount.push(null)
	       //          this.reqData.amount.push(null)
	       //          //this.reqData.medicineStock.push({})
	       //          this.totalTr.push(1)
        //     	}
        //     }
        //     //this.findMedicinesFromStock()
        // } else {
            this.reqData.opt[0] = ""
            this.reqData.product[0] = ""
            this.reqData.quantity[0] = ""
            this.reqData.mrp[0] = ""
            this.reqData.discount[0] = ""
            this.reqData.amount[0] = ""
            this.totalTr = [1]
        // }
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
    ngOnDestroy() {
        // localStorage['patientDataForDiagnostics'] = null
        localStorage.removeItem('patientDataForDiagnostics');
    }
    addRow() {
        this.totalTr.push(1)
        this.reqData.opt[this.totalTr.length - 1] = ""
        this.reqData.product[this.totalTr.length - 1] = ""
        this.reqData.quantity[this.totalTr.length - 1] = ""
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
    }

    onTextChangeOfMedName(type, observation) {
        if (type != "") {
            let object = {
                category: type,
                test_name: observation,
                smart_diagnostics_id: this.diagnosticsData.dataSmartDiagnostics._id,
            }
            console.log(object)
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
    //   this.returnQty = []
    //   this.returnStatus = []
    //   this.returnPurchaseArray = []
    //   this.billFetched = false
    //   this.quantityReturn=0
    //   if(this.receiptNumberSearch !=null && this.receiptNumberSearch != '' && !isNaN(this.receiptNumberSearch)){
    //     this.loading = true
    //     let ob = {
    //         smart_pharmacy_id:this.pharmacyData.dataSmartPharmacy._id,
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

    findMedicinesFromStock() {
        this.loading = true   
        // let object = {
        //     id: this.diagnosticsData.dataSmartDiagnostics._id,
        //     medication: this.patientData.precription.investigationArray
        // }
        this.userService.FindTestForDiagnostics(this.diagnosticsData.dataSmartDiagnostics._id).subscribe(data => {
            console.log(data)
            for (var i = 0; i < this.reqData.opt.length; i++) {
            	for (var j = 0; j < data.data.length; j++) {
            		if(data.data[j].category == this.reqData.opt[i] && data.data[j].name == this.reqData.product[i]){
            			this.reqData.mrp[i] = data.data[j].rate
	           			this.reqData.discount[i] = data.data[j].discount
	           			this.reqData.amount[i] = data.data[j].rate - ((data.data[j].discount/100) *  data.data[j].rate)
	           			this.getTotalRecord(i)
            			break
            		}
            	}
            }
      //      for (var i = 0; i < this.patientData.precription.investigationArray.length; i++) {
      //      		for (var j = 0; j < data.data.length; j++) {
	     //       		if(this.patientData.precription.investigationArray[i].name==data.data[j].category && 
	     //       			this.patientData.precription.investigationArray[i].values[0].display==data.data[i].name){
	     //       			this.reqData.mrp.push(data.data[j].rate)
	     //       			this.reqData.discount.push(data.data[j].discount)
	     //       			this.reqData.amount.push(data.data[j].rate - ((data.data[j].discount/100) *  data.data[j].rate))
	     //       		}else{
	     //       			this.reqData.mrp.push(null)
	     //       			this.reqData.discount.push(null)
						// this.reqData.amount.push(null)
	     //       		}
      //      		}
      //      }
           this.loading = false
        }, err => {
            console.log(err);
        })   
    }

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
        this.returnPurchaseArray.qtyReturn =[]
        this.stockToReturn = []
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
        this.returnEditable = this.quantityReturn
        this.partyTotal = Math.ceil(this.totalNetAmount - this.returnEditable)

        // this.reqData.expiry = []
        // var thisYear = new Date().getFullYear().toString().substr(-2)
        // var thisMonth = new Date().getMonth() + 1
        // for (var i = 0; i < this.reqData.opt.length; i++) {
        //     if (this.reqData.opt[i] == '' || this.reqData.opt[i] == null || this.reqData.opt[i] == undefined) {
        //         this.toastr.warning('Invalid Type', 'Warning')
        //         return
        //     }
        // }
        for (var i = 0; i < this.reqData.product.length; i++) {
            if (this.reqData.product[i] == '' || this.reqData.product[i] == null || this.reqData.product[i] == undefined) {
                this.toastr.warning('Invalid Product', 'Warning')
                return
            } else if (this.reqData.product[i].trim().length < 1) {
                this.toastr.warning('Invalid Product', 'Warning')
                return
            }
        }
        // for (var i = 0; i < this.reqData.pack1.length; i++) {
        //     if (this.reqData.pack1[i] < 1 || this.reqData.pack1[i] == '' || this.reqData.pack1[i] == null || this.reqData.pack1[i] == undefined) {
        //         this.toastr.warning('Invalid pack', 'Warning')
        //         return
        //     }
        // }
        // for (var i = 0; i < this.reqData.pack2.length; i++) {
        //     if (this.reqData.pack2[i] < 1 || this.reqData.pack2[i] == '' || this.reqData.pack2[i] == null || this.reqData.pack2[i] == undefined) {
        //         this.toastr.warning('Invalid pack', 'Warning')
        //         return
        //     }
        // }
        for (var i = 0; i < this.reqData.mrp.length; i++) {
            if (this.reqData.mrp[i] < 1 || this.reqData.mrp[i] == '' || this.reqData.mrp[i] == null || this.reqData.mrp[i] == undefined) {
                this.toastr.warning('Invalid mrp', 'Warning')
                return
            } else {
                this.totalMrp += this.reqData.mrp[i]
            }
        }
        // for (var i = 0; i < this.reqData.quantity.length; i++) {
        //     if (this.reqData.quantity[i] < 1 || this.reqData.quantity[i] == '' || this.reqData.quantity[i] == null || this.reqData.quantity[i] == undefined) {
        //         this.toastr.warning('Invalid quantity', 'Warning')
        //         return
        //     } else if(this.reqData.medicineStock[i].total_stock < this.reqData.quantity[i]){
        //         this.toastr.warning("Quantity cant exceed current available stock","Warning")
        //         return
        //     }else {
        //         this.totalQuantity += this.reqData.quantity[i]
        //     }
        // }
        for (var i = 0; i < this.reqData.amount.length; i++) {
            if (this.reqData.amount[i] < 1 || this.reqData.amount[i] == '' || this.reqData.amount[i] == null || this.reqData.amount[i] == undefined) {
                this.toastr.warning('Invalid Amount', 'Warning')
                return
            } else {
                this.totalAmount += this.reqData.amount[i]
            }
        }
        // for (var i = 0; i < this.reqData.batch.length; i++) {
        //     if (this.reqData.batch[i] == '' || this.reqData.batch[i] == null || this.reqData.batch[i] == undefined) {
        //         this.toastr.warning('Invalid batch', 'Warning')
        //         return
        //     } else if (this.reqData.batch[i].trim().length < 1) {
        //         this.toastr.warning('Invalid batch', 'Warning')
        //         return
        //     }
        // }

        // this.cost_amount = 0
        //     console.log(this.reqData.medicineStock)
        // for (var ii = 0; ii < this.reqData.medicineStock.length; ii++) {
        //     console.log(this.reqData.medicineStock[ii].data.amount)
        //     this.cost_amount += (this.reqData.medicineStock[ii].data.amount*this.reqData.quantity[ii])/(this.reqData.medicineStock[ii].data.pack_units*this.reqData.medicineStock[ii].data.pack_quantity*this.reqData.medicineStock[ii].data.qty)
        // }
        var ob = {
           	smart_diagnostics_id:this.diagnosticsData.dataSmartDiagnostics._id,
            dispensed_patient_id:this.patientData._id,
            tests:this.reqData,
            total_amount:this.partyTotal,
            payment_mode: this.payment_mode,
            walkin_patient:false,
            patient_name: this.patientData.registration.pateintName,
            patient_mobile: this.patientData.registration.pateintPhone,
            doctor_id: this.patientData.doctor_id
        }
        console.log(ob)
        console.log(this.reqData)
        this.loading = true
        this.userService.SaveDiagnosticsSaleWithPrescription(ob).subscribe(data => {
            console.log(data)
            this.loading = false
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
                    //setTimeout(() => {
                        this.router.navigate(['/header-six-layout/dashboard-diagnostic']);
                   // }, 3000);
                }, 1000);
            } else {
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

    getDoctorName(id){
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if(this.dataDoctors[i]._id == id){
                return (this.dataDoctors[i].first_name)
            }
        }
    }

    getData(data){
        if(data % 1 != 0){
            return data.toFixed(2)
        }else{
            return data
        }
    }
    getDoctorNameoforData(doc){
        for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
            if(this.diagnosticsData.doctorsRegisteredForSmartClinic[i]._id == doc){
                return this.diagnosticsData.doctorsRegisteredForSmartClinic[i].first_name
            }
        }
    }



}