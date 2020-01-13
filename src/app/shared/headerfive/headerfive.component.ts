import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../providers/mission.service';
import { Subscription }   from 'rxjs';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service'; 
import { environment } from '../../../environments/environment.prod';
import * as io from "socket.io-client";
declare var $:any
declare var JQuery:any


@Component({
    selector: 'app-headerfive',
    templateUrl: './headerfive.component.html',
    styleUrls: ['./headerfive.component.scss'],
    providers: [MissionService,UserService]
})
export class HeaderfiveComponent implements OnInit {

    doctorData
    nosidebar: string;
    hideElement: string;
    dropdownMenu: string;
    headertitle: string;
    subheaderTitle: string;
    subbottomTitle: boolean;
    prescbutton: string;
    
    clinicSetupList : boolean
    editProfileList : boolean
    settingDropdown :  boolean
    subscription: Subscription;
    pharmacyDetail: boolean
    stock : boolean

    pharmacyData
    hoursIST
    minutesIST
    month
    day
    year
    numericMonth
    ////////
    receiptNumberSearch
    billFetched
    returnPurchaseArray
    returnStatus
    returnQty
    quantityReturn
    loading
    stockToReturn
    dataExpiry
    reorderArray
    socket
    ////////

    constructor(private router: Router,private missionService: MissionService,
        private toastr: ToastrService, private userService: UserService) {
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.nosidebar = 'no-sidebar';
                this.stock = true
                if (event.url == '/header-five-layout/pharmacy-detail'){
                    this.headertitle = "Pharmacy Details"
                    this.pharmacyDetail = false
                    this.stock = false
                }else if (event.url == '/header-five-layout/stock-purchase'){
                    this.headertitle = "Stock Purchase Entry"
                    this.stock = false
                }else if (event.url == '/header-five-layout/purchase-book'){
                    this.headertitle = "Purchase Book"
                    this.stock = false
                    this.pharmacyDetail = false
                }else if (event.url == '/header-five-layout/stock-valuation'){
                    this.headertitle = "Stock Valuation as on " + this.day +" "+ this.month +", "+ this.year
                    this.stock = false
                    this.pharmacyDetail = false
                }else if (event.url == '/header-five-layout/sales-book'){
                    this.headertitle = "Sales Book"
                    this.stock = false
                    this.pharmacyDetail = false
                }else if (event.url == '/header-five-layout/reorder-book' || event.url == '/header-five-layout/reorder-products'){
                    this.headertitle = "Re-order Book"
                    this.stock = false
                    this.pharmacyDetail = false
                }else if (event.url == '/header-five-layout/expiry-book'){
                    this.headertitle = "Expiry Book"
                    this.stock = false
                    this.pharmacyDetail = false
                }else if (event.url == '/header-five-layout/sales-entry' || event.url == '/header-five-layout/sales-entry-one'){
                    this.headertitle = "Sales Entry"
                    this.stock = false
                    this.pharmacyDetail = false
                }else if (event.url == '/header-five-layout/pharmacy-progress'){
                    this.headertitle = "Pharmacy Progress Today"
                    this.pharmacyDetail = false
                    this.stock = false
                } else if (event.url == '/header-five-layout/dashboard-pharmacy'){
                    for (var i = 0; i < this.pharmacyData.doctorsRegisteredForSmartClinic.length; i++) {
                        if(this.pharmacyData.doctorsRegisteredForSmartClinic[i].type_of_doctor == "admin_doctor"){
                            this.headertitle = "SmartPharmacy "+ this.pharmacyData.doctorsRegisteredForSmartClinic[i].clinic_details.clinic_name
                            break
                        }
                    }
                    this.pharmacyDetail = false
                }
            }
        });
    }

    ngOnInit() {
        this.nosidebar = 'no-sidebar';
        $('[data-toggle="tooltip"]').tooltip()
        this.GetSmartPharmacyDataAfterLogin()
        this.socket = io(environment.socket)
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        this.hoursIST = ISTTime.getHours()
        this.minutesIST = ISTTime.getMinutes()
        setInterval(() => {
            this.getCurrentTime()
        }, 60000);

        var options = {
            month: 'short'
        };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate()
        this.year = new Date().getFullYear()
        this.numericMonth = new Date().getMonth() + 1

        ///////////////////////////
        this.returnPurchaseArray = []
        this.returnStatus = []
        this.returnQty = []
        this.stockToReturn = []
        this.reorderArray = []
        ///////////////////////////
    }

    GetSmartPharmacyDataAfterLogin(){
        let object = {
            smart_pharmacy_id : this.pharmacyData.dataSmartPharmacy._id 
        }
        this.reorderArray = []
        this.userService.GetSmartPharmacyDataAfterLoginAndExpiry(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.dataExpiry = data.dataExpiry
                var dataToStore = {
                    dataSmartPharmacy: data.dataSmartPharmacy,
                    doctorsRegisteredForSmartClinic: data.doctorsRegisteredForSmartClinic,
                    doctorsOfSameClinic: data.doctorsOfSameClinic
                }
                localStorage['smartPharmacyDetails'] = JSON.stringify(dataToStore)
                for (var i = 0; i < dataToStore.doctorsRegisteredForSmartClinic.length; i++) {
                    if(dataToStore.doctorsRegisteredForSmartClinic[i].type_of_doctor == "admin_doctor"){
                        this.headertitle = "SmartPharmacy "+ dataToStore.doctorsRegisteredForSmartClinic[i].clinic_details.clinic_name
                        break
                    }
                }
                for (var i = 0; i < data.dataReorder.length; i++) {
                    for (var j = 0; j < data.dataReorder[i].length; j++) {
                        data.dataReorder[i][j].newPacking = Math.trunc(data.dataReorder[i][j].current_stock /(data.dataReorder[i][j].pack_units*data.dataReorder[i][j].pack_quantity))
                        data.dataReorder[i][j].newPackingReminder = data.dataReorder[i][j].current_stock %(data.dataReorder[i][j].pack_units*data.dataReorder[i][j].pack_quantity)
                        data.dataReorder[i][j].tent_amount = 0
                        this.reorderArray.push(data.dataReorder[i][j])
                    }
                }
            }       
        }, err => {
            console.log(err);
        })
    }

    openDropdown(){
        if(this.dropdownMenu == 'active'){
            this.dropdownMenu = ''
        }else{
            this.dropdownMenu = 'active'
        }
    }

    sidebarclose(){
        if(this.nosidebar == 'no-sidebar'){
            this.nosidebar = ''
        }else{
            this.nosidebar = 'no-sidebar'
        }
    }

    signOut(){
        this.socket.emit('logout',{'doctor_id':this.pharmacyData._id})
        localStorage.removeItem(localStorage['smartPharmacyDetails']);
        localStorage.removeItem('isLoggedinSmartPharmacy');
        this.router.navigate(['/']); 
    }

    getCurrentTime(){
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        this.hoursIST = ISTTime.getHours()
        this.minutesIST = ISTTime.getMinutes()
    }

    getMin(){
        if(this.minutesIST<10){
            return "0"+this.minutesIST
        }else{
            return this.minutesIST
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

    getTotalReturn() {
        for (var i = 0; i < this.returnPurchaseArray.quantity.length; i++) {
            if (this.returnPurchaseArray.quantity[i] < this.returnQty[i]) {
                this.toastr.warning("Return quantity can't exceed actual quantity", "Warning")
                return
            } else if (this.returnQty[i] < 0 || this.returnQty[i] == null) {
                this.toastr.warning("Minimum return quantity can be 0", "Warning")
                return
            }
        }
        this.quantityReturn = 0
        var calculatedAmount = 0
        this.returnPurchaseArray.qtyReturn =[]
        this.returnPurchaseArray.amountReturn =[]
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray.amount[i] / this.returnPurchaseArray.quantity[i])
                this.quantityReturn = this.quantityReturn + calculatedAmount
                this.returnPurchaseArray.amountReturn.push(calculatedAmount)
            }
        }
    }

    getReturnStatus(i) {
        if (this.returnStatus[i] == true) {
            return false
        } else {
            return true
        }
    }

    onKey(event: any, type) {
        if (event.keyCode == 13) {
            if (type == 'bill') {
                this.fetchBill()
            }
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
                    this.billFetched = true
                    this.returnPurchaseArray = data.data.medicines[0]
                    this.returnStatus = []
                    this.returnQty = []
                    for (var i = 0; i < this.returnPurchaseArray.quantity.length; i++) {
                        this.returnStatus.push(true)
                        this.returnQty.push(0)
                        // this.returnQty.push(this.returnPurchaseArray.quantity[i])
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

    updateReturnAmount() {
        for (var i = 0; i < this.returnPurchaseArray.quantity.length; i++) {
            if (this.returnPurchaseArray.quantity[i] < this.returnQty[i]) {
                this.toastr.warning("Return quantity can't exceed actual quantity", "Warning")
                return
            } else if (this.returnQty[i] < 0 || this.returnQty[i] == null) {
                this.toastr.warning("Minimum return quantity can be 0", "Warning")
                return
            }
        }
        this.quantityReturn = 0
        var calculatedAmount = 0
        this.returnPurchaseArray.qtyReturn =[]
        this.returnPurchaseArray.amountReturn =[]
        this.stockToReturn = []
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray.amount[i] / this.returnPurchaseArray.quantity[i])
                this.quantityReturn = this.quantityReturn + calculatedAmount
                this.returnPurchaseArray.amountReturn.push(calculatedAmount)
                this.returnPurchaseArray.qtyReturn.push(this.returnQty[i])
                this.stockToReturn.push({
                    stock_id: this.returnPurchaseArray.medicineStock[i].data.id,
                    qtyReturn: this.returnQty[i]
                }
                )
            }
        }
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
        for (var i = 0; i < this.returnPurchaseArray.amount.length; i++) {
            return_total_amount += this.returnPurchaseArray.amount[i] - this.returnPurchaseArray.amountReturn[i]
            medicines[0].batch.push(this.returnPurchaseArray.batch[i])
            medicines[0].discount.push(this.returnPurchaseArray.discount[i])
            medicines[0].mrp.push(this.returnPurchaseArray.mrp[i])
            medicines[0].opt.push(this.returnPurchaseArray.opt[i])
            medicines[0].pack1.push(this.returnPurchaseArray.pack1[i])
            medicines[0].pack2.push(this.returnPurchaseArray.pack2[i])
            medicines[0].product.push(this.returnPurchaseArray.product[i])
            medicines[0].quantity.push(this.returnPurchaseArray.quantity[i] - this.returnPurchaseArray.qtyReturn[i])
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
        for (var ii = 0; ii < medicines[0].medicineStock.length; ii++) {
            return_cost_amount += (medicines[0].medicineStock[ii].data.amount*medicines[0].quantity[ii])/(medicines[0].medicineStock[ii].data.pack_units*medicines[0].medicineStock[ii].data.pack_quantity*medicines[0].medicineStock[ii].data.qty)
        }
        console.log(this.returnPurchaseArray)
        if(this.returnPurchaseArray.qtyReturn.length>0 && this.stockToReturn.length>0){
            let ob = {
                // smart_pharmacy_id:this.pharmacyData.dataSmartPharmacy._id,
                id:this.receiptNumberSearch,
                stockToReturn: this.stockToReturn,
                medicines: medicines,
                return_total_amount: return_total_amount,
                return_cost_amount: return_cost_amount
            } 
            console.log(ob)
            this.loading = true
            this.userService.UpdateSalesEntry(ob).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.response == true) {
                    this.toastr.success(data.message,"Success")
                    $("#stck-prchse-header").modal("hide");
                    this.resetReturn()
                    this.ngOnInit()
                }else{
                    this.toastr.error(data.message,"Error")
                }
            }, err => {
                console.log(err);
            })
        }
    }
}
