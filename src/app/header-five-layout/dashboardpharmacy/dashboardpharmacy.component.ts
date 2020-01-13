import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core'; 
import { DndDropEvent, DropEffect } from "ngx-drag-drop"; 
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service'; 
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from '../../../environments/environment.prod';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CustomDialogComponent } from '../../confirmation-popup/custom-dialog/custom-dialog.component'
import * as io from "socket.io-client"; 
declare var $

export interface PatientList {
    prescription_id: string;
    pharmacy_cost: number;
    pharmacy_sales: number;
    id:number,
    registration: {
        pateintName: string;
    };
}

@Component({
    selector: 'app-dashboardpharmacy',
    templateUrl: './dashboardpharmacy.component.html',
    styleUrls: ['./dashboardpharmacy.component.css'],
    providers: [UserService]
})
export class DashboardpharmacyComponent implements OnInit {
    // @ViewChild('w1') hBSort: MatSort;
    // @ViewChild('w2') sBSort: MatSort;

    pharmacyData
    month
    day
    year
    numericMonth
    loading
    consultationDoctor
    hoursIST: number
    minutesIST: number
    searchInput
    dataDoctors
    doctorsOfSameClinic
    
    waitingOrders: PatientList[] = [];
    sortedData: PatientList[];
    sortedData1 : PatientList[];
    waitingOrders1: PatientList[] = [];
    waitingOrdersBackup
    totalSales : number
    totalCost : number

    socket

    constructor(private formBuilder: FormBuilder, private toastr: ToastrService, 
        private userService: UserService, private router: Router, public dialog: MatDialog) {}

    ngOnInit() {
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
        console.log(this.pharmacyData)
        // var currentTime = new Date();
        // var currentOffset = currentTime.getTimezoneOffset();
        // var ISTOffset = 330;
        // var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        // this.hoursIST = ISTTime.getHours()
        // this.minutesIST = ISTTime.getMinutes()
        // setInterval(() => {
        //     this.getCurrentTime()
        // }, 60000);

        // var options = {
        //     month: 'short'
        // };
        // var today = new Date();
        // this.month = today.toLocaleDateString("en-IN", options);
        // this.day = new Date().getDate()
        // this.year = new Date().getFullYear()
        // this.numericMonth = new Date().getMonth() + 1
        this.consultationDoctor = ""
        if(localStorage.getItem('dashboardPharmacySelectedDr')){
            this.consultationDoctor = localStorage.getItem('dashboardPharmacySelectedDr')
        }
        this.dataDoctors = []
        this.waitingOrders = []
        this.waitingOrders1 = []
        this.waitingOrdersBackup = []
        this.GetSmartPharmacyDataAfterLogin()
        this.socket = io(environment.socket)
        this.socket.emit('room join',{
            room_id: this.pharmacyData.dataSmartPharmacy._id.toString()
        })
        this.socket.on('registrationBooked', (msg: any) => {
            this.ngOnInit()
        });
        //set height
        // console.log(window.innerHeight)
        // document.getElementById("leftTable").style.height =  window.innerHeight + "px";
        //
    }

    // getCurrentTime(){
    //     var currentTime = new Date();
    //     var currentOffset = currentTime.getTimezoneOffset();
    //     var ISTOffset = 330;
    //     var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    //     this.hoursIST = ISTTime.getHours()
    //     this.minutesIST = ISTTime.getMinutes()
    // }

    // getMin(){
    //     if(this.minutesIST<10){
    //         return "0"+this.minutesIST
    //     }else{
    //         return this.minutesIST
    //     }
    // }

    ngOnDestroy(){
        this.socket.emit('room leave',{
            room_id: this.pharmacyData.dataSmartPharmacy._id.toString()
        })
    }

    GetSmartPharmacyDataAfterLogin(){
        let object = {
            smart_pharmacy_id : this.pharmacyData.dataSmartPharmacy._id 
        }
        this.loading = true
        this.userService.GetSmartPharmacyDataAfterLogin(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.dataDoctors = data.doctorsRegisteredForSmartClinic
                this.doctorsOfSameClinic = data.doctorsOfSameClinic
            }      
            if(this.dataDoctors.length==1){
                this.dataDoctors.push({
                   _id:0,
                   first_name:"Other"
                })
                if(this.consultationDoctor == ''){
                    this.consultationDoctor = this.dataDoctors[0]._id
                }
                this.findPatientsForPharmacy(this.consultationDoctor)
            } else{
                for (var i = 0; i < this.dataDoctors.length; i++) {
                    if(this.dataDoctors[i].type_of_doctor == "admin_doctor"){
                        this.dataDoctors.push({
                           _id:0,
                           first_name:"Other"
                        })
                        if(this.consultationDoctor == ''){
                            this.consultationDoctor = this.dataDoctors[i]._id
                        }
                        this.findPatientsForPharmacy(this.consultationDoctor)
                        break
                    }
                }
            }      
        }, err => {
          console.log(err);
        })
    }

    findPatientsForPharmacy(id){
        this.consultationDoctor = id
        localStorage.setItem('dashboardPharmacySelectedDr',this.consultationDoctor)
        if(id!=0){            
            this.waitingOrders = []
            let ob = {
                doctor_id:id,
                smart_pharmacy_id : this.pharmacyData.dataSmartPharmacy._id
            }
            this.userService.FindPatientsForPharmacy(ob).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.response == true) {
                    this.waitingOrders = data.data//.concat(data.data).concat(data.data).concat(data.data).concat(data.data).concat(data.data).concat(data.data)
                    this.waitingOrders1 = data.data1
                    this.waitingOrdersBackup = data.data
                    this.totalCost = 0
                    this.totalSales = 0
                    
                    if(data.data2.length>0){
                        for (var i = 0; i < data.data2.length; i++) {
                            this.waitingOrders1.push({
                                prescription_id: "Other sale",
                                id: data.data2[i].id,
                                pharmacy_cost: data.data2[i].cost_amount,
                                pharmacy_sales: data.data2[i].total_amount,
                                registration: {
                                    pateintName: data.data2[i].patient_name
                                }
                            })
                        }
                    }
                    // for (var i = 0; i < this.waitingOrders1.length; i++) {
                    //     this.totalCost += this.waitingOrders1[i].pharmacy_cost
                    //     this.totalSales += this.waitingOrders1[i].pharmacy_sales
                    // }
                    if(data.totalCostSales.length>0){
                        this.totalCost = data.totalCostSales[0].totalCostSales
                    }
                    // if(data.totalCostDispensed.length>0){
                    //     this.totalCost = this.totalCost + data.totalCostDispensed[0].totalCostDispensed
                    // }
                    // if(data.totalSalesDispensed.length>0){
                    //     this.totalSales = data.totalSalesDispensed[0].totalSalesDispensed
                    // }
                    if(data.totalSalesSales.length>0){
                        this.totalSales = data.totalSalesSales[0].totalSalesSales
                    }
                    Math.ceil(this.totalCost)
                    Math.ceil(this.totalSales)
                    this.sortedData = this.waitingOrders.slice();
                    this.sortedData1 = this.waitingOrders1.slice();
                }         
            }, err => {
              console.log(err);
            })
        }else{
            this.findWalkinOtherPatientsForPharmacy()
        }
    }

    deleteSearch(){
        this.searchInput = null
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
                case 'prescription_id': return compare(a.prescription_id, b.prescription_id, isAsc);
                case 'registration': return compare(a.registration.pateintName, b.registration.pateintName, isAsc);
                case 'pharmacy_sales': return compare(a.pharmacy_sales, b.pharmacy_sales, isAsc);
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
                case 'prescription_id': return compare(a.prescription_id, b.prescription_id, isAsc);
                case 'registration': return compare(a.registration.pateintName, b.registration.pateintName, isAsc);
                case 'pharmacy_sales': return compare(a.pharmacy_sales, b.pharmacy_sales, isAsc);
                default: return 0;
            }
        });
    }

    goForPharmacy(data){
        localStorage['patientDataForPharmacy'] = JSON.stringify(data)
        this.router.navigate(['header-five-layout/sales-entry'])
    }

    getDoctorFirstName(doctor){
        var doc = doctor.split(" ")
        return doc[0]
    }

    search() {
        this.searchInput = this.searchInput.toLowerCase()
        if (this.searchInput && this.searchInput.trim() != '') {
            this.waitingOrders = this.waitingOrdersBackup.filter((item) => {
                let b = item.registration.pateintName.toLowerCase()
                let c = item.registration.pateintPhone
                return (b.indexOf(this.searchInput) > -1 || c.indexOf(this.searchInput) > -1)
            })
        }
        if (this.searchInput == '') {
            this.waitingOrders = this.waitingOrdersBackup;
        }
        this.sortedData = this.waitingOrders.slice();
    }
 
    getData(data){
        if(isNaN(data)){
            return 0
        }else if(data==Infinity){
            return 0    
        }else if(data==''){
            return 0    
        }else if(data % 1 != 0){
        return data.toFixed(2)
        }else{
            return data
        }
    }

    receivedPayment(activity){
        let dialogRef = this.dialog.open(CustomDialogComponent, {
            data:{
                header:"Confirmation",
                body:"Payment received?"
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == "yes") {
                console.log(activity.id)
                var ob ={
                    id: activity.id,
                    prescription_id: activity.prescription_id
                }
                console.log(ob)
                this.userService.ChangeSalesBookStatus(ob).subscribe(data => {
                    console.log(data)
                    if (data.response == true) {
                        this.findPatientsForPharmacy(this.consultationDoctor)
                    }         
                }, err => {
                  console.log(err);
                })

            } else {
                console.log("error or No Thanks button clicked")
            }
        });
    }

    findWalkinOtherPatientsForPharmacy(){
        this.waitingOrders = []
        let ob = {
            smart_pharmacy_id : this.pharmacyData.dataSmartPharmacy._id
        }
        this.userService.findWalkinOtherPatientsForPharmacy(ob).subscribe(data => {
            console.log(data)
            this.loading = false
            if (data.response == true) {
                this.waitingOrders = []
                this.waitingOrders1 = []
                this.waitingOrdersBackup = []
                if(data.data.length>0){
                    for (var i = 0; i < data.data.length; i++) {
                        this.waitingOrders1.push({
                            prescription_id: "Other sale",
                            id: data.data[i].id,
                            pharmacy_cost: data.data[i].cost_amount,
                            pharmacy_sales: data.data[i].total_amount,
                            registration: {
                                pateintName: data.data[i].patient_name
                            }
                        })
                    }
                }
                this.sortedData = this.waitingOrders.slice();
                this.sortedData1 = this.waitingOrders1.slice();
            }         
        }, err => {
          console.log(err);
        })
    }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
