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
    total_amount: number;
    investigation_cost: number;
    id:number,
    registration: {
        pateintName: string;
        // investigation_cost: number;
    };
}

@Component({
    selector: 'app-dashboarddiagnostic',
    templateUrl: './dashboarddiagnostic.component.html',
    styleUrls: ['./dashboarddiagnostic.component.css'],
    providers: [UserService]
})
export class DashboarddiagnosticComponent implements OnInit {
    // @ViewChild('w1') hBSort: MatSort;
    // @ViewChild('w2') sBSort: MatSort;

    diagnosticsData
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
    totalSalesCount: number

    socket

    constructor(private formBuilder: FormBuilder, private toastr: ToastrService, 
        private userService: UserService, private router: Router, public dialog: MatDialog) {}

    ngOnInit() {
        this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails'])
        console.log(this.diagnosticsData)
        this.consultationDoctor = ""
        if(localStorage.getItem('dashboardDiagnosticsSelectedDr')){
            this.consultationDoctor = localStorage.getItem('dashboardDiagnosticsSelectedDr')
        }
        this.dataDoctors = []
        this.waitingOrders = []
        this.waitingOrders1 = []
        this.waitingOrdersBackup = []
        this.GetSmartDiagnosticsDataAfterLogin()
        this.socket = io(environment.socket)
        this.socket.emit('room join',{
            room_id: this.diagnosticsData.dataSmartDiagnostics._id.toString()
        })
        this.socket.on('registrationBooked', (msg: any) => {
            this.ngOnInit()
        });
        this.totalSales = 0
        this.totalSalesCount = 0
    }

    ngOnDestroy(){
        this.socket.emit('room leave',{
            room_id: this.diagnosticsData.dataSmartDiagnostics._id.toString()
        })
    }

    GetSmartDiagnosticsDataAfterLogin(){
        let object = {
            smart_diagnostics_id : this.diagnosticsData.dataSmartDiagnostics._id 
        }
        this.loading = true
        this.userService.GetSmartDiagnosticsDataAfterLogin(object).subscribe(data => {
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
                this.findPatientsForDiagnostics(this.consultationDoctor)
            } else{
                for (var i = 0; i < this.dataDoctors.length; i++) {
                    if(this.dataDoctors[i].type_of_doctor == "admin_doctor"){
                        if(this.consultationDoctor == ''){
                            this.consultationDoctor = this.dataDoctors[i]._id
                        }
                        this.dataDoctors.push({
                           _id:0,
                           first_name:"Other"
                        })
                        this.findPatientsForDiagnostics(this.consultationDoctor)
                        break
                    }
                }
            }      
        }, err => {
          console.log(err);
        })
    }

    findPatientsForDiagnostics(id){
        this.consultationDoctor = id
        localStorage.setItem('dashboardDiagnosticsSelectedDr',this.consultationDoctor)
        if(id!=0){
            this.waitingOrders = []
            let ob = {
                doctor_id:id,
                smart_diagnostics_id : this.diagnosticsData.dataSmartDiagnostics._id 
            }
            this.userService.FindPatientsForDiagnostics(ob).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.response == true) {
                    this.waitingOrders = data.data
                    this.waitingOrders1 = data.data1
                    this.waitingOrdersBackup = data.data
                    this.totalSales = 0
                    
                    if(data.data2.length>0){
                        for (var i = 0; i < data.data2.length; i++) {
                            this.waitingOrders1.push({
                                prescription_id: "Other sale",
                                id: data.data2[i].id,
                                total_amount: data.data2[i].total_amount,
                                investigation_cost: data.data2[i].total_amount,
                                registration: {
                                    pateintName: data.data2[i].patient_name
                                }
                            })
                        }
                    }
                    if(data.totalSalesSales.length>0){
                        this.totalSales = data.totalSalesSales[0].totalSalesSales
                    }
                    this.totalSalesCount = data.totalSalesCount
                    Math.ceil(this.totalSales)
                    this.sortedData = this.waitingOrders.slice();
                    this.sortedData1 = this.waitingOrders1.slice();
                }         
            }, err => {
              console.log(err);
            })
        }else{
            this.findWalkinOtherPatientsForDiagnostics()
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
                case 'total_amount': return compare(a.total_amount, b.total_amount, isAsc);
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
                case 'total_amount': return compare(a.total_amount, b.total_amount, isAsc);
                default: return 0;
            }
        });
    }

    goForPharmacy(data){
        localStorage['patientDataForDiagnostics'] = JSON.stringify(data)
        this.router.navigate(['header-six-layout/sales-by-diagnostics'])
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
        if(data){
            if(data % 1 != 0){
                return data.toFixed(2)
            }else{
                return data
            }
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
                this.userService.ChangeSalesBookStatusDiagnostics(ob).subscribe(data => {
                    console.log(data)
                    if (data.response == true) {
                        this.findPatientsForDiagnostics(this.consultationDoctor)
                    }         
                }, err => {
                  console.log(err);
                })

            } else {
                console.log("error or No Thanks button clicked")
            }
        });
    }

    findWalkinOtherPatientsForDiagnostics(){
        this.waitingOrders = []
        let ob = {
            smart_diagnostics_id : this.diagnosticsData.dataSmartDiagnostics._id
        }
        this.userService.findWalkinOtherPatientsForDiagnostics(ob).subscribe(data => {
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
                            total_amount: data.data[i].total_amount,
                            investigation_cost: data.data[i].total_amount,
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
