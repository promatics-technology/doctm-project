import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

declare var $
declare var jsPDF: any

export interface SalesBook {
    date:number
    invoice:number
    amount:number
    total_amount:number
    createdAt: string
    id:number
    patient: string
    walkin_patient: boolean
    patient_name: string
    patient_mobile: number
    dispensed_patient_id: {
        registration : {
            pateintName: string
            pateintPhone: number
        },
        doctor_id: string
    }
}
@Component({
  selector: 'app-salesbookd',
  templateUrl: './salesbookd.component.html',
  styleUrls: ['./salesbookd.component.css'],
  providers: [UserService]
})
export class SalesbookdComponent implements OnInit {
    toDate = new Date()
    fromDate = new Date()
    today = new Date()
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }
    loading
    diagnosticsData
    salesBookArray: SalesBook[]
    totalBill: number
    searchInput
    sortedData: SalesBook[]
    headerClicked: number
    returnSalesArray
    showData
    databackup
    totalAmount: number
    returnPurchaseArray
    selectedIndex
    servicesArray
    reqData
    invoiceNo
    docName
    oldDate
    subTotal
    patientNameNew
    patient_mobile
    dataDoctors
    patientAmount
    newDate = new Date()
    constructor(private UserService: UserService, private toastr: ToastrService, private datePipe: DatePipe) {}
    ngOnInit() {
        this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails'])
        var dd = this.fromDate.getDate();
        this.fromDate.setDate(1);
        this.fromDate.setMonth(this.fromDate.getMonth() - 1);
        this.fromDate.setDate(this.fromDate.getDate() + dd);

        this.salesBookArray = []
        this.sortedData = []
        this.totalBill = 0
        this.returnPurchaseArray = {}
        this.returnPurchaseArray.opt = []
        this.servicesArray = []
        this.reqData = {}
        this.dataDoctors = []
        this.dataDoctors=this.diagnosticsData.doctorsRegisteredForSmartClinic
        this.subTotal = 0
        this.GetServices()
        this.newDate.setDate(this.newDate.getDate()+1)
        this.viaDate()
        this.patientAmount=0
    }
    viaDate() {

        if(new Date(this.toDate).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
            this.toastr.warning("Invalid date selected","Warning")
            return
        }
        var object = {
            id: this.diagnosticsData.dataSmartDiagnostics._id,
            start_date: this.fromDate,
            end_date: this.toDate
        }
        this.loading = true
        this.salesBookArray = []
        this.returnPurchaseArray = {}
        this.returnPurchaseArray.opt = []
        this.totalBill = 0
        this.headerClicked = 0
        this.searchInput = null
        this.totalAmount = 0
        this.UserService.SalesEntryBySmartDiagnostics(object).subscribe(data => {
            console.log(data);
            this.loading = false
            if (data.response == true) {
                this.toastr.success(data.message, "Success")
                this.salesBookArray = data.data
                for (var i = 0; i < this.salesBookArray.length; i++) {
                    this.totalAmount += this.salesBookArray[i].total_amount
                    if (this.salesBookArray[i].walkin_patient) {
                        this.salesBookArray[i].patient = this.salesBookArray[i].patient_name
                    } else {
                        this.salesBookArray[i].patient = this.salesBookArray[i].dispensed_patient_id.registration.pateintName
                    }
                }

                this.sortedData = this.salesBookArray.slice();
            } else if (data.response == false) {
                this.toastr.error(data.message, "Error")
            }
        }, err => {
            console.log(err);
        })
    }
    SearchByPartyNameOrBill() {
        if (this.searchInput == null || this.searchInput == '' || this.searchInput == undefined || this.searchInput == 0 || this.searchInput.toString().trim().length < 1) {
            this.toastr.warning("Invalid search input", "Warning")
        } else {
            var object = {
                id: this.diagnosticsData.dataSmartDiagnostics._id,
                search: this.searchInput
            }
            this.loading = true
            this.salesBookArray = []
            this.returnPurchaseArray = {}
            this.returnPurchaseArray.opt = []
            this.totalBill = 0
            this.headerClicked = 0
            this.totalAmount = 0
            this.UserService.SalesEntryBySmartDiagnosticsById(object).subscribe(data => {
                console.log(data);
                this.loading = false
                if (data.response == true) {
                    this.toastr.success(data.message, "Success")
                    this.salesBookArray = data.data
                    for (var i = 0; i < this.salesBookArray.length; i++) {
                        this.totalAmount += this.salesBookArray[i].total_amount
                        if (this.salesBookArray[i].walkin_patient) {
                            this.salesBookArray[i].patient = this.salesBookArray[i].patient_name
                        } else {
                            this.salesBookArray[i].patient = this.salesBookArray[i].dispensed_patient_id.registration.pateintName
                        }
                    }
                    this.sortedData = this.salesBookArray.slice();
                } else if (data.response == false) {
                    this.toastr.error(data.message, "Error")
                }
            }, err => {
                console.log(err);
            })
        }
    }
    onKey(event: any) {
        if (event.keyCode == 13) {
            this.SearchByPartyNameOrBill()
        }
    }
    getTableHeaderClass(id) {
        if (this.headerClicked == id) {
            return 'selected'
        } else {
            return ''
        }
    }
    setTableHeaderClass(id) {
        this.headerClicked = id
    }
    sortData(sort: Sort) {
        const data = this.salesBookArray.slice();
        if (!sort.active || sort.direction === '') {
            this.salesBookArray = data;
            return;
        }
        this.salesBookArray = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'date':
                    return compare(a.createdAt, b.createdAt, isAsc);
                case 'invoice':
                    return compare(a.id, b.id, isAsc);
                case 'amount':
                    return compare(a.total_amount, b.total_amount, isAsc);
                case 'patient':
                    return compare(a.patient, b.patient, isAsc);
                default:
                    return 0;
            }
        });
    }
    search() {
        this.searchInput = this.searchInput.toLowerCase()
        if (this.searchInput && this.searchInput.trim() != '') {
            this.showData = this.databackup.filter((item) => {
                let b = item.invoice
                return (b.indexOf(this.searchInput) > -1)
            })
        }
    }
    getTimeFiveAndHalfHoursBefore(date) {
        return date
        // return (new Date(date).setMinutes ( new Date(date).getMinutes() - 330 ))
    }
    exportPdf() {
        var option = ''
        if (this.searchInput == null || this.searchInput == '' || this.searchInput == undefined) {
            option = ' ('+this.datePipe.transform(this.fromDate, 'dd-MM-yyyy') + " to "+ this.datePipe.transform(this.toDate, 'dd-MM-yyyy')+")"
        }
        var head = [{
            title: '#',
            dataKey: "id"
        }, {
            title: 'Date'+option ,
            dataKey: "createdAt"
        }, {
            title: 'Receipt Number',
            dataKey: "invoice"
        }, {
            title: 'Patient Name',
            dataKey: "patient"
        }, {
            title: 'Sales Amount',
            dataKey: "salesAmount"
        }]
        var csvData = []
        for (var i = 0; i < this.salesBookArray.length; i++) {
            var ob;
            ob = {}
            ob.id = i + 1
            ob.createdAt = this.getTimeFiveAndHalfHoursBefore(this.salesBookArray[i].createdAt)
            ob.createdAt = this.datePipe.transform(ob.createdAt, 'dd-MM-yyyy, h:mm a');
            //ob.date = this.salesBookArray[i].createdAt.split('T')
            ob.invoice = this.salesBookArray[i].id
            ob.patient = this.salesBookArray[i].patient
            ob.salesAmount = this.getData(this.salesBookArray[i].total_amount)
            csvData.push(ob)
        }
        csvData.push({
            id : 'Total',
            createdAt : '',
            invoice : '',
            patient : '',
            salesAmount : this.getData(this.totalAmount)
        })
        var todayDate = new Date().toJSON().toString().substr(0, 10)
        var from = new Date(this.fromDate).toJSON().toString().substr(0, 10)
        var to = new Date(this.toDate).toJSON().toString().substr(0, 10)
        var doc = new jsPDF('p', 'pt');
        doc.autoTable(head, csvData, {
            theme: 'grid',
            styles: {
                overflow: 'linebreak',
            },
            margin: 5,
            fontSize: 8,
            tableWidth: 'auto',
            showHeader: 'everyPage'
        });
        doc.save('SalesBookDiagnostics' + "(" + todayDate + ")");
    }
    exportPdfDetail() {
        this.invoiceNo = this.salesBookArray[this.selectedIndex].id
        this.oldDate = new Date(this.getTimeFiveAndHalfHoursBefore(this.salesBookArray[this.selectedIndex].createdAt))
        this.subTotal = Math.trunc(this.salesBookArray[this.selectedIndex].total_amount)
        if (this.salesBookArray[this.selectedIndex].walkin_patient) {
            this.patientNameNew = this.salesBookArray[this.selectedIndex].patient
            this.patient_mobile = this.salesBookArray[this.selectedIndex].patient_mobile        
            this.docName = null
        } else {
            this.patientNameNew = this.salesBookArray[this.selectedIndex].dispensed_patient_id.registration.pateintName
            this.patient_mobile = this.salesBookArray[this.selectedIndex].dispensed_patient_id.registration.pateintPhone
            this.docName = this.salesBookArray[this.selectedIndex].dispensed_patient_id.doctor_id
        }
        $('#pdfmodal2').printThis({
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
    }
    getData(data) {
        if (data % 1 != 0) {
            return data.toFixed(2)
        } else {
            return data
        }
    }
    viewData(item, index) {
        console.log(item)
        this.patientAmount=item.total_amount
        this.returnPurchaseArray = item.tests[0]
        this.selectedIndex = index
        $("#view-sales-order-modal-diagnostics").modal("show");
    }
    GetServices() {
        this.servicesArray.push({
            status: false,
            name: this.diagnosticsData.doctorsRegisteredForSmartClinic[0].clinic_services.ClinicServicesDetail[0]
        })
        for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
            for (var j = 0; j < this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.ClinicServicesDetail.length; j++) {
                var boolean = false
                for (var k = 0; k < this.servicesArray.length; k++) {
                    if (this.servicesArray[k].name == this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.ClinicServicesDetail[j]) {
                        boolean = true
                        break;
                    }
                }
                if (boolean == false) {
                    this.servicesArray.push({
                        status: false,
                        name: this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.ClinicServicesDetail[j]
                    })
                }
            }
            for (var j = 0; j < this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.OtherClinicService.length; j++) {
                var boolean = false
                for (var k = 0; k < this.servicesArray.length; k++) {
                    if (this.servicesArray[k].name == this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.OtherClinicService[j].value) {
                        boolean = true
                        break;
                    }
                }
                if (boolean == false) {
                    this.servicesArray.push({
                        status: false,
                        name: this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_services.OtherClinicService[j].value
                    })
                }
            }
        }
        this.checkIfAddress()
    }
    checkIfAddress() {
        if (this.diagnosticsData.dataSmartDiagnostics.address_filled) {
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
                    if (this.servicesArray[j].name == this.diagnosticsData.dataSmartDiagnostics.diagnostics_services[i]) {
                        this.servicesArray[j].status = true
                        break
                    }
                }
            }
        }
    }

    getDoctorName(id){
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if(this.dataDoctors[i]._id == id){
                return (this.dataDoctors[i].first_name)
            }
        }
    }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}