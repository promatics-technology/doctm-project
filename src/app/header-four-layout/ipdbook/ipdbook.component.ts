import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { DatePipe } from '@angular/common';

declare var $
declare var jsPDF: any; // Important

export interface PatientList {
    patientName: string;
    procedure: string;
    consultDoc: string;
    createdAt: string;
    discharge_date: string;
    duration_days: number;
    duration_hours
    id: number;
    total_bill: number;
    product:number;
    first_name: string;
}

@Component({
    selector: 'app-ipdbook',
    templateUrl: './ipdbook.component.html',
    styleUrls: ['./ipdbook.component.css'],
    providers: [UserService]
})

export class IpdbookComponent {
    smartIpdData
    arr
    totalOccupancy : number
    totalOccupancyDays : number
    totalOccupancyHours : number
    totalBill : number
    invoiceId

    patinetlist: PatientList[] = [];
    fromDate = new Date()
    toDate = new Date()
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }
    sortedData: PatientList[];
    openedPatientDetail
    totalActivitiesAmountPdf: number
    refundAmountPdf: number
    loading: boolean

    headerClicked: number
    newDate = new Date()
    patientAdmitted
    
    constructor(private UserService : UserService,private toastr: ToastrService,
        private datePipe: DatePipe) {
        // this.sortedData = this.patinetlist.slice();
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
                case 'patientName': return compare(a.patientName, b.patientName, isAsc);
                case 'procedure': return compare(a.procedure, b.procedure, isAsc);
                case 'consultDoc': return compare(a.consultDoc, b.consultDoc, isAsc);
                case 'createdAt': return compare(a.createdAt, b.createdAt, isAsc);
                case 'discharge_date': return compare(a.discharge_date, b.discharge_date, isAsc);
                case 'duration_days': return compare(a.product, b.product, isAsc);
                case 'invoice': return compare(a.id, b.id, isAsc);
                case 'total_bill': return compare(a.total_bill, b.total_bill, isAsc);
                case 'first_name': return compare(a.first_name, b.first_name, isAsc);
                default: return 0;
            }
        });
    }
    ngOnInit()
    {
        this.smartIpdData = JSON.parse(localStorage['smartIpdDetails'])
        var dd = this.fromDate.getDate();
        this.fromDate.setDate(1);
        this.fromDate.setMonth(this.fromDate.getMonth()-1);
        this.fromDate.setDate(this.fromDate.getDate()+dd);
        this.newDate.setDate(this.newDate.getDate()+1)
        this.viaDate()
        // this.UserService.GetIpdPatientsDataForToday(this.smartIpdData.dataSmartIpd._id).subscribe(data=>{
        //     console.log(data);
        //     if (data.response==true) {
        //         this.totalOccupancy = 0
        //         this.totalBill = 0
        //         this.patinetlist = data.data
        //         for (var i = 0; i < this.patinetlist.length; i++) {
        //             if(this.patinetlist[i].duration_days){
        //                 this.patinetlist[i].product=(this.patinetlist[i].duration_days*24)+this.patinetlist[i].duration_hours
        //             }
        //             this.patinetlist[i].first_name= data.data[i].consultDoc.first_name
        //             if(data.data[i].total_bill){
        //                 this.totalBill = this.totalBill + data.data[i].total_bill
        //             }
        //             if(data.data[i].discharge_date){
        //                 var diff =(new Date(data.data[i].discharge_date).getTime() - new Date(data.data[i].createdAt).getTime()) / 1000;
        //                 diff /= (60 * 60);
        //                 var hoursDifference : number = Math.abs(Math.round(diff))
        //                 this.totalOccupancy = this.totalOccupancy + hoursDifference
        //             }
        //         }
        //         this.sortedData = this.patinetlist.slice();
        //         this.totalOccupancyDays = Math.trunc(this.totalOccupancy / 24)
        //         this.totalOccupancyHours = Math.trunc(this.totalOccupancy % 24)
        //     }
        //     else if(data.response==false){
        //         this.toastr.error(data.message,"Error")
        //     }
        // },err=>{
        //     console.log(err);
        // })
    }

    viaDate(){    
        this.patientAdmitted = 0
        if(new Date(this.toDate).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
            this.toastr.warning("Invalid date selected","Warning")
            return
        }
        var object = {
            id: this.smartIpdData.dataSmartIpd._id,
            start_date: this.fromDate,
            end_date: this.toDate
        }
        if(new Date(this.fromDate).setHours(0,0,0,0) !> new Date(this.toDate).setHours(0,0,0,0)){
          this.toastr.warning("Invalid date selected","Warning")
            return
        }
        this.loading = true
        this.UserService.GetIpdPatientsDataBetweenTwoDates(object).subscribe(data=>{
            console.log(data);
            this.loading = false
            if (data.response==true) {
                this.invoiceId = null
                this.toastr.success(data.message,"Success")
                this.totalOccupancy = 0
                this.totalBill = 0
                this.patinetlist = data.data
                console.log(this.patinetlist)
                for (var i = 0; i < this.patinetlist.length; i++) {
                    if(this.patinetlist[i].discharge_date){
                        this.patinetlist[i].product=(this.patinetlist[i].duration_days*24)+this.patinetlist[i].duration_hours
                    }else{
                        this.patinetlist[i].product = 0
                        this.patinetlist[i].id = null
                    }
                    this.patinetlist[i].first_name= data.data[i].consultDoc.first_name
                    if(data.data[i].total_bill){
                        this.totalBill = this.totalBill + data.data[i].total_bill
                    }
                    if(data.data[i].discharge_date){
                        var diff =(new Date(data.data[i].discharge_date).getTime() - new Date(data.data[i].createdAt).getTime()) / 1000;
                        diff /= (60 * 60);
                        var hoursDifference : number = Math.abs(Math.round(diff))
                        this.totalOccupancy = this.totalOccupancy + hoursDifference
                    }else{
                        this.patientAdmitted++
                    }
                }
                console.log(this.patientAdmitted)
                this.sortedData = this.patinetlist.slice();
                this.totalOccupancyDays = Math.trunc(this.totalOccupancy / 24)
                this.totalOccupancyHours = Math.trunc(this.totalOccupancy % 24)
            }
            else if(data.response==false){
                this.toastr.error(data.message,"Error")
            }
        },err=>{
            console.log(err);
        }) 
    }

    FindByInvoiceID(){
        if(this.invoiceId == null || this.invoiceId == '' || this.invoiceId == undefined || isNaN(this.invoiceId)){
            this.toastr.warning("Invalid invoice ID","Warning")
        }else{
            this.UserService.FindByInvoiceID(this.invoiceId).subscribe(data=>{
                console.log(data);
                if (data.response==true) {
                    this.toastr.success(data.message,"Success")
                    this.totalOccupancy = 0
                    this.totalBill = 0
                    this.patinetlist = data.data
                    for (var i = 0; i < this.patinetlist.length; i++) {
                        if(this.patinetlist[i].discharge_date){
                            this.patinetlist[i].product=(this.patinetlist[i].duration_days*24)+this.patinetlist[i].duration_hours
                        }else{
                            this.patinetlist[i].product = 0
                        }
                        this.patinetlist[i].first_name= data.data[i].consultDoc.first_name
                        if(data.data[i].total_bill){
                            this.totalBill = this.totalBill + data.data[i].total_bill
                        }
                        if(data.data[i].discharge_date){
                            var diff =(new Date(data.data[i].discharge_date).getTime() - new Date(data.data[i].createdAt).getTime()) / 1000;
                            diff /= (60 * 60);
                            var hoursDifference : number = Math.abs(Math.round(diff))
                            this.totalOccupancy = this.totalOccupancy + hoursDifference
                        }
                    }
                    this.sortedData = this.patinetlist.slice();
                    this.totalOccupancyDays = Math.trunc(this.totalOccupancy / 24)
                    this.totalOccupancyHours = Math.trunc(this.totalOccupancy % 24)
                }
                else if(data.response==false){
                    this.toastr.error(data.message,"Error")
                }
            },err=>{
                console.log(err);
            })
        }
    }

    onGenerateCsv(){
        var head = ['Name','Procedure','Consulting Doctor',
        'Admission Date','Discharge Date', 'Invoice No.','Duration', 'Bill (Rs)'] 
        var csvData = []
        var totalDuration
        var dates = []
        for (var i = 0; i < this.patinetlist.length; i++) {
            var ob ;
            ob = {}
            //.split('T')[0],
            ob.patientName = this.patinetlist[i].patientName
            ob.procedure = this.patinetlist[i].procedure
            ob.first_name = this.patinetlist[i].first_name
            var date = this.patinetlist[i].createdAt.split('T')
            ob.createdAt = date[0] + " " +date[1].substr(0,5)
            if(this.patinetlist[i].discharge_date){
                var date = this.patinetlist[i].discharge_date.split('T')
                ob.discharge_date = date[0] + " " +date[1].substr(0,5)
            }else{
                ob.discharge_date = "Admitted"
            }
            if(this.patinetlist[i].duration_days){
                ob.invoice = this.patinetlist[i].id
            }else{
                ob.invoice = ""
            }
            if(this.patinetlist[i].duration_days){
                ob.totalDuration = this.patinetlist[i].duration_days.toString()+" days "+ this.patinetlist[i].duration_hours.toString()+" hrs"
                
            }else{
                ob.duration_days = ""
            }
            if(this.patinetlist[i].total_bill){
                ob.total_bill = this.patinetlist[i].total_bill
            }else{
                ob.total_bill = ""
            }  
            csvData.push(ob)
        }
        csvData.push({
            total: 'Total',
            procedure: '',
            consulting:'',
            admission: '',
            discharge: '',
            invoice: '',
            totdalDuration:this.totalOccupancyDays.toString()+" days "+this.totalOccupancyHours.toString()+" hrs",
            totalResultBill: this.totalBill
        })
        var from = new Date(this.fromDate).toJSON().toString().substr(0,10)
        var to = new Date(this.toDate).toJSON().toString().substr(0,10)
        new Angular5Csv(csvData, 'IPD'+"("+from+" to "+to+")", {headers: (head)},);
    }

    exportPdf(){
        var option = ''
        if (this.invoiceId == null || this.invoiceId == '' || this.invoiceId == undefined) {
            option = ' ('+this.datePipe.transform(this.fromDate, 'dd-MM-yyyy') + " to "+ this.datePipe.transform(this.toDate, 'dd-MM-yyyy')+")"
        }
        var head = [
            { title: '#', dataKey: "id"},
            { title: 'Name', dataKey: "patientName"},
            { title: 'Procedure', dataKey: "procedure"},
            { title: 'Consulting Doctor', dataKey: "first_name"},
            { title: 'Admission Date'+option, dataKey: "createdAt"},
            { title: 'Discharge Date', dataKey: "discharge_date"},
            { title: 'Invoice No.', dataKey: "invoice"},
            { title: 'Duration', dataKey: "totalDuration"},
            { title: 'Bill (Rs)', dataKey: "total_bill"}
        ]
        var csvData = []
        var totalDuration
        var dates = []
        for (var i = 0; i < this.patinetlist.length; i++) {
            var ob ;
            ob = {}
            ob.id = i+1
            ob.patientName = this.patinetlist[i].patientName
            ob.procedure = this.patinetlist[i].procedure
            ob.first_name = this.patinetlist[i].first_name
            var date = this.patinetlist[i].createdAt.split('T')
            ob.createdAt = date[0] + " " +date[1].substr(0,5)
            if(this.patinetlist[i].discharge_date){
                var date = this.patinetlist[i].discharge_date.split('T')
                ob.discharge_date = date[0] + " " +date[1].substr(0,5)
            }else{
                ob.discharge_date = "Admitted"
            }
            if(this.patinetlist[i].discharge_date){
                ob.invoice = this.patinetlist[i].id
            }else{
                ob.invoice = ""
            }
            if(this.patinetlist[i].duration_days){
                ob.totalDuration = this.patinetlist[i].duration_days.toString()+" days "+ this.patinetlist[i].duration_hours.toString()+" hrs"
            }else{
                ob.totalDuration = ""
            }
            if(this.patinetlist[i].total_bill){
                ob.total_bill = this.patinetlist[i].total_bill
            }else{
                ob.total_bill = ""
            }  
            csvData.push(ob)
        }
        csvData.push({
            id: "Total",
            patientName: "",
            procedure: "",
            first_name: "",
            createdAt: "",
            discharge_date: "",
            invoice: "",
            totalDuration:this.totalOccupancyDays.toString()+" days "+this.totalOccupancyHours.toString()+" hrs",
            total_bill: this.totalBill
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
        doc.save('IPD'+"("+from+" to "+to+")");
    }

    getDoctorName(id){
        for (var i = 0; i < this.smartIpdData.doctorsRegisteredForSmartClinic.length; i++) {
            if(this.smartIpdData.doctorsRegisteredForSmartClinic[i]._id.toString() == id.toString()){
                return this.smartIpdData.doctorsRegisteredForSmartClinic[i].first_name
            }
        }
    } 

    printPdfAndDischarge(patient){
        this.openedPatientDetail = patient
        console.log(this.openedPatientDetail)
        this.totalActivitiesAmountPdf = 0
        for (var i = 0; i < this.openedPatientDetail.patient_activities.length; i++) {
            if(!this.openedPatientDetail.patient_activities[i].unit)
            {
             this.openedPatientDetail.patient_activities[i].unit = 0   
            }
            if(!this.openedPatientDetail.patient_activities[i].rate){
                this.openedPatientDetail.patient_activities[i].rate = 0
            }
            this.openedPatientDetail.patient_activities[i].amount = this.openedPatientDetail.patient_activities[i].unit * this.openedPatientDetail.patient_activities[i].rate
            this.totalActivitiesAmountPdf = this.totalActivitiesAmountPdf + this.openedPatientDetail.patient_activities[i].amount   
        }
        var totalOut : number = this.totalActivitiesAmountPdf + this.openedPatientDetail.occupancy_charges - this.openedPatientDetail.advanceReceived
        if(totalOut < 0 ){
            this.refundAmountPdf = totalOut + (-(2*totalOut))
        }else{
            this.refundAmountPdf = 0
        }
         setTimeout(() => {
            $('#generatePdfModal').printThis({
                debug: false,
                importCSS: true,
                importStyle: true,
                printContainer: true,
                pageTitle: "",
                removeInline: false,
                printDelay: 333,
                header: null,
                formValues: true
            });
        }, 1000);            
    }

    getDischargeInstructionsStatus(){
        if((this.openedPatientDetail.woundCare && (this.openedPatientDetail.woundCare.one || this.openedPatientDetail.woundCare.two)) || 
            (this.openedPatientDetail.diet && (this.openedPatientDetail.diet.one || this.openedPatientDetail.diet.two)) || 
            (this.openedPatientDetail.lifestyle && (this.openedPatientDetail.lifestyle.one || this.openedPatientDetail.lifestyle.two)) || 
            (this.openedPatientDetail.others && (this.openedPatientDetail.others.one || this.openedPatientDetail.others.two))){
            return true
        }else{
            return false
        }        
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

    getTimeFiveAndHalfHoursBefore(date){
        return (new Date(date).setMinutes ( new Date(date).getMinutes() - 330 ))
    }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
