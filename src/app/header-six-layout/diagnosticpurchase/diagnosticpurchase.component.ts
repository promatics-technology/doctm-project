import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-diagnosticpurchase',
  templateUrl: './diagnosticpurchase.component.html',
  styleUrls: ['./diagnosticpurchase.component.css']
})
export class DiagnosticpurchaseComponent implements OnInit {
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
  newTotalDiscount:number
  newTotalCgst: number
  newATotalSgst:number
  returnData
  stockPurchase: FormGroup;
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    //akshay
    this.reqData = {}
    this.reqData.opt = []
    this.reqData.opt[0] = ""
    this.reqData.product = []
    this.reqData.product[0] = ""
    this.reqData.pack1 = []
    this.reqData.pack1[0] = ""
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

    this.stockPurchase = this.formBuilder.group({
      'billNumber': [null, Validators.compose([Validators.pattern('^[^ ]+[0-9]*')])],
      'partyName': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
      'invoiceNumber': [null, Validators.compose([Validators.pattern('^[^ ]+[0-9]*')])]
    })
  }


  addRow(){
    this.totalTr.push(1)
    this.reqData.opt[this.totalTr.length-1] = ""
    this.reqData.product[this.totalTr.length-1] = ""
  }

  removeRow(i){
    if(this.totalTr.length==1){
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
    }else{
      this.totalTr.splice(i,1)
      this.reqData.opt.splice(i,1)// = ""
      this.reqData.product.splice(i,1)// = ""
      this.reqData.pack1.splice(i,1)// = ""
      this.reqData.pack2.splice(i,1)// = ""
      this.reqData.quantity.splice(i,1)// = ""
      this.reqData.mrp.splice(i,1)// = ""
      this.reqData.rate.splice(i,1)// = ""
      this.reqData.cgst.splice(i,1)// = ""
      this.reqData.sgst.splice(i,1)// = ""
      this.reqData.discount.splice(i,1)// = ""
      this.reqData.amount.splice(i,1)// = ""
      this.reqData.batch.splice(i,1)// = ""
      this.reqData.month.splice(i,1)// = ""
      this.reqData.year.splice(i,1)// = ""
    }
  }
  savePurchaseDetails(){
    this.totalAmount=0
    this.totalCgst=0
    this.totalSgst=0
    this.totalDiscount=0
    this.totalQuantity=0
    this.totalMrp=0
    this.totalRate=0
    this.totalNetAmount=0
    this.totalPRate=0
    this.newTotalDiscount=0
    this.newTotalCgst=0
    this.newATotalSgst=0
    this.reqData.expiry = []
    var thisYear= new Date().getFullYear().toString().substr(-2)
    var thisMonth= new Date().getMonth()+1

    for (var i = 0; i < this.reqData.opt.length; i++) {
      if(this.reqData.opt=='' ||this.reqData.opt==null || this.reqData.opt==undefined)
      {
        this.toastr.warning('Invalid Type', 'Warning')
        return
      }                         
    }
    for (var i = 0; i < this.reqData.product.length; i++) {
      if(this.reqData.product[i]=='' ||this.reqData.product[i]==null || this.reqData.product[i]==undefined)
      {
        this.toastr.warning('Invalid Product', 'Warning')
        return
      }
      else if(this.reqData.product[i].trim().length<1){
        this.toastr.warning('Invalid Product', 'Warning')
        return
      }
    }
    for (var i = 0; i < this.reqData.pack1.length; i++) {
      if(this.reqData.pack1[i]<1 || this.reqData.pack1=='' ||this.reqData.pack1==null || this.reqData.pack1==undefined)
      {
        this.toastr.warning('Invalid pack', 'Warning')
        return
      }
    }
    for (var i = 0; i < this.reqData.pack2.length; i++) {
      if(this.reqData.pack2[i]<1 || this.reqData.pack2=='' ||this.reqData.pack2==null || this.reqData.pack2==undefined)
      {
        this.toastr.warning('Invalid pack', 'Warning')
        return
      }
    }
    for (var i = 0; i < this.reqData.mrp.length; i++) {
      if(this.reqData.mrp[i]<1 || this.reqData.mrp=='' ||this.reqData.mrp==null || this.reqData.mrp==undefined)
      {
        this.toastr.warning('Invalid mrp', 'Warning')
        return
      }else{
        this.totalMrp += this.reqData.mrp[i]
      }
    }
    for (var i = 0; i < this.reqData.quantity.length; i++) {
      if(this.reqData.quantity[i]<1 || this.reqData.quantity=='' ||this.reqData.quantity==null || this.reqData.quantity==undefined)
      {
        this.toastr.warning('Invalid quantity', 'Warning')
        return
      }else
      {
        this.totalQuantity += this.reqData.quantity[i]
      }
    }
    for (var i = 0; i < this.reqData.rate.length; i++) {
      if(this.reqData.rate[i]<1 || this.reqData.rate=='' ||this.reqData.rate==null || this.reqData.rate==undefined)
      {
        this.toastr.warning('Invalid purchase rate', 'Warning')
        return
      }else{
        this.totalRate += this.reqData.rate[i]
      }
    }
    // for (var i = 0; i < this.reqData.cgst.length; i++) {
    //   if(this.reqData.cgst[i]<1 || this.reqData.cgst=='' ||this.reqData.cgst==null || this.reqData.cgst==undefined)
    //   {
    //     this.toastr.warning('Invalid cgst', 'Warning')
    //     return
    //   }else
    //   {
    //     this.totalCgst += this.reqData.cgst[i]
    //   }
    // }
    // for (var i = 0; i < this.reqData.sgst.length; i++) {
    //   if(this.reqData.sgst[i]<1 || this.reqData.sgst=='' ||this.reqData.sgst==null || this.reqData.sgst==undefined)
    //   {
    //     this.toastr.warning('Invalid sgst', 'Warning')
    //     return
    //   }else
    //   {
    //     this.totalSgst += this.reqData.sgst[i]
    //   }
    // }
    // for (var i = 0; i < this.reqData.discount.length; i++) {
    //   if(this.reqData.discount[i]<0 || this.reqData.discount=='' ||this.reqData.discount==null || this.reqData.discount==undefined)
    //   {
    //     this.toastr.warning('Invalid discount', 'Warning')
    //     return
    //   }else{
    //     this.totalDiscount += this.reqData.discount[i]
    //   }
    // }
    for (var i = 0; i < this.reqData.amount.length; i++) {
      if(this.reqData.amount[i]<1 || this.reqData.amount=='' ||this.reqData.amount==null || this.reqData.amount==undefined)
      {
        this.toastr.warning('Invalid Amount', 'Warning')
        return
      } else{
        this.totalAmount += this.reqData.amount[i]
      }
    }

    for (var i = 0; i < this.reqData.batch.length; i++) {
      if(this.reqData.batch[i]=='' || this.reqData.batch[i]==null || this.reqData.batch[i]==undefined)
      {
        this.toastr.warning('Invalid batch', 'Warning')
        return
      }else if(this.reqData.batch[i].trim().length<1){
        this.toastr.warning('Invalid batch', 'Warning')
        return
      }
    }
    for (var i = 0; i < this.reqData.month.length; i++) {
      var currentYear= new Date().getFullYear().toString().substr(-2)
      var currentMonth= new Date().getMonth()+1
      var expiry = currentYear.toString() + currentMonth.toString()
      var enteredExpiry = this.reqData.year[i].toString() + this.reqData.month[i].toString()
      this.reqData.expiry.push(parseInt(enteredExpiry))
      if(parseInt(enteredExpiry)<parseInt(expiry))
      {
        this.toastr.warning('Invalid expiry', 'Warning')
        return
      }
    }
    for (var i = 0; i < this.reqData.month.length; i++) {
      if(this.reqData.month[i]>12 || this.reqData.month[i]<=0|| this.reqData.month=='' ||this.reqData.month==null || this.reqData.month==undefined)
      {
        this.toastr.warning('Invalid month', 'Warning')
        return
      }
    }
    for (var i = 0; i < this.reqData.year.length; i++) {
      if(this.reqData.year[i]<thisYear || this.reqData.year=='' ||this.reqData.year==null || this.reqData.year==undefined)
      {
        this.toastr.warning('Invalid year', 'Warning')
        return
      }
    }
    console.log(this.reqData)  
  }

  getTotalRecord(i){
    this.totalPRate=0
    this.newTotalCgst=0
    this.newATotalSgst=0
    this.newTotalDiscount=0
    this.totalNetAmount=0
    this.reqData.amount[i] = this.reqData.rate[i]+(((this.reqData.cgst[i]+this.reqData.sgst[i]-this.reqData.discount[i])*this.reqData.rate[i])/100)
    this.reqData.amount[i] = this.reqData.amount[i] * this.reqData.quantity[i]
    for(var j=0; j<this.reqData.rate.length; j++){
      if(this.reqData.rate[j]){
        this.totalPRate+=this.reqData.rate[j]
      }
    }
    for(var j=0; j<this.reqData.cgst.length; j++){
      if(this.reqData.cgst[j]){
        this.newTotalCgst+=this.reqData.cgst[j]
      }
    }
    for(var j=0; j<this.reqData.sgst.length; j++){
      if(this.reqData.sgst[j]){
        if(this.reqData.sgst[j]){
          this.newATotalSgst+=this.reqData.sgst[j]
        }
      }
    }
    for(var j=0; j<this.reqData.discount.length; j++){
      if(this.reqData.discount[j]){
        this.newTotalDiscount+=this.reqData.discount[j]
        }
    }
    for(var j=0; j<this.reqData.amount.length; j++){
      if(this.reqData.amount[j]){
        this.totalNetAmount+=this.reqData.amount[j]
      }
    }
  }
}

