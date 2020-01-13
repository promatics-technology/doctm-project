import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

declare var $
declare var jsPDF: any; // Important

export interface SalesBook {
	date:number
	invoice:number
	amount:number
	cost:number
	gross:number
	profit:number
	cost_amount:number
	total_amount:number
	total_profit:number
	createdAt: string
	id:number
    patient: string
    patient_mobile:number
    walkin_patient: boolean
    patient_name: string

    dispensed_patient_id: {
        registration : {
            pateintName: string
            pateintPhone:number
            createdAt:string
        },
        doctor_id: string
    }
}

@Component({
  selector: 'app-salesbook',
  templateUrl: './salesbook.component.html',
  styleUrls: ['./salesbook.component.css'],
  providers: [UserService]
})
export class SalesbookComponent implements OnInit {
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
    pharmacyData
    salesBookArray : SalesBook[]
    totalBill : number
    searchInput
    sortedData : SalesBook[]
    headerClicked: number
    returnSalesArray
  	showData
  	databackup
  	totalAmount:number
  	totalCostPrice:number
  	totalCost:number
    returnPurchaseArray
    selectedIndex
    pharmacyName
    address
    phone
    drugLicense
    gstinNumber
    conditionOne
    conditionTwo
    conditionThree
    conditionFour
    dataDoctors
    patientNameNew
    patient_mobile
    docName
    oldDate
    partyTotal
    subTotal
    invoiceNo
    newDate = new Date()
    patientAmount
  constructor(private UserService : UserService,private toastr: ToastrService,private datePipe: DatePipe) { }

  ngOnInit() {
    this.dataDoctors=[]
  	this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
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
    this.dataDoctors=this.pharmacyData.doctorsRegisteredForSmartClinic
  	var dd = this.fromDate.getDate();
    this.fromDate.setDate(1);
    this.fromDate.setMonth(this.fromDate.getMonth()-1);
    this.fromDate.setDate(this.fromDate.getDate()+dd);
    this.newDate.setDate(this.newDate.getDate()+1)
    this.salesBookArray = []
    this.sortedData = []
    this.totalBill = 0
    this.returnPurchaseArray = {}
    this.returnPurchaseArray.opt = []
    this.viaDate()
  }
  viaDate() {
        if(new Date(this.toDate).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
            this.toastr.warning("Invalid date selected","Warning")
            return
        }
        var object = {
            id: this.pharmacyData.dataSmartPharmacy._id,
            start_date: this.fromDate,
            end_date: this.toDate
        }
        this.loading = true
        this.salesBookArray = []
        this.totalBill = 0
        this.headerClicked = 0
        this.searchInput = null
        this.totalAmount=0
        this.totalCost=0
        this.totalCostPrice=0
        this.UserService.SalesEntryBySmartPharmacy(object).subscribe(data => {
            console.log(data);
            this.loading = false
            if (data.response == true) {
                this.toastr.success(data.message, "Success")
                this.salesBookArray = data.data
                for (var i = 0; i < this.salesBookArray.length; i++) {
                    this.totalAmount += this.salesBookArray[i].total_amount
                    this.totalCostPrice += this.salesBookArray[i].cost_amount
                    this.totalCost += this.salesBookArray[i].total_amount-this.salesBookArray[i].cost_amount
                    if(this.salesBookArray[i].walkin_patient){
                        this.salesBookArray[i].patient = this.salesBookArray[i].patient_name
                    }else{
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

    SearchByPartyNameOrBill(){
        if(this.searchInput == null || this.searchInput=='' || this.searchInput==undefined || this.searchInput == 0 ||
            this.searchInput.toString().trim().length<1) {
            this.toastr.warning("Invalid search input","Warning")
        }else{
            var object = {
                id: this.pharmacyData.dataSmartPharmacy._id,
                search: this.searchInput                
            }
            this.loading = true
            this.salesBookArray = []
            this.totalBill = 0
            this.headerClicked = 0
            this.totalCostPrice=0
            this.totalAmount=0
            this.totalCost=0
            this.UserService.SalesEntryBySmartPharmacyById(object).subscribe(data=>{
                console.log(data);
                this.loading = false
                if (data.response==true) {
                    this.toastr.success(data.message, "Success")
                    this.salesBookArray = data.data
                    for (var i = 0; i < this.salesBookArray.length; i++) {
                        this.totalAmount += this.salesBookArray[i].total_amount
                        this.totalCostPrice += this.salesBookArray[i].cost_amount
                        this.totalCost += this.salesBookArray[i].total_amount-this.salesBookArray[i].cost_amount
                        if(this.salesBookArray[i].walkin_patient){
                            this.salesBookArray[i].patient = this.salesBookArray[i].patient_name
                        }else{
                            this.salesBookArray[i].patient = this.salesBookArray[i].dispensed_patient_id.registration.pateintName
                        }      
                    }
                    this.sortedData = this.salesBookArray.slice();
                }
                else if(data.response==false){
                    this.toastr.error(data.message,"Error")
                }
            },err=>{
                console.log(err);
            }) 
        }
    }
    onKey(event: any) {
        if (event.keyCode == 13) {
            this.SearchByPartyNameOrBill()
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

      sortData(sort: Sort) {
        const data = this.salesBookArray.slice();
        if (!sort.active || sort.direction === '') {
            this.salesBookArray = data;
            return;
        }

        this.salesBookArray = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'date': return compare(a.createdAt, b.createdAt, isAsc);
                case 'invoice': return compare(a.id, b.id, isAsc);
                case 'amount': return compare(a.total_amount, b.total_amount, isAsc);
                case 'cost': return compare(a.cost_amount, b.cost_amount, isAsc);
                case 'gross': return compare(a.total_amount-a.cost_amount, b.total_amount-a.cost_amount, isAsc);
                case 'profit': return compare(((a.total_amount-a.cost_amount)*a.cost_amount)/100, ((b.total_amount-b.cost_amount)*b.cost_amount)/100, isAsc); 
                case 'patient': return compare(a.patient, b.patient, isAsc);                
                default: return 0;
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

    getTimeFiveAndHalfHoursBefore(date){
        // return (new Date(date).setMinutes ( new Date(date).getMinutes() - 330 ))
        return date
    }

    exportPdf(){
        var option = ''
        if (this.searchInput == null || this.searchInput == '' || this.searchInput == undefined) {
            option = ' ('+this.datePipe.transform(this.fromDate, 'dd-MM-yyyy') + " to "+ this.datePipe.transform(this.toDate, 'dd-MM-yyyy')+")"
        }
        var head = [
            { title: '#', dataKey: "id"},
            { title: 'Date'+option, dataKey: "createdAt"},
            { title: 'Invoice Number', dataKey: "invoice"},
            { title: 'Patient Name', dataKey: "patient"},
            { title: 'Sales Amount', dataKey: "salesAmount"},
            { title: 'Cost Amount', dataKey: "costAmount"},
            { title: 'Gross Profit', dataKey:"grossProfit"},
            { title: 'Profit %', dataKey:"profit"},
        ]
        var csvData = []
        for (var i = 0; i < this.salesBookArray.length; i++) {
            var ob ;
            ob = {}
            ob.id = i+1
            ob.createdAt = this.getTimeFiveAndHalfHoursBefore(this.salesBookArray[i].createdAt)
            ob.createdAt = this.datePipe.transform(ob.createdAt, 'dd-MM-yyyy, h:mm a');
            //ob.date = this.salesBookArray[i].createdAt.split('T')
            ob.invoice = this.salesBookArray[i].id
            ob.patient = this.salesBookArray[i].patient
            ob.salesAmount = this.getData(this.salesBookArray[i].total_amount)
            ob.costAmount = this.getData(this.salesBookArray[i].cost_amount)
            ob.grossProfit = this.getData(this.salesBookArray[i].total_amount-this.salesBookArray[i].cost_amount)
            ob.profit =  this.getData(((this.salesBookArray[i].total_amount-this.salesBookArray[i].cost_amount)*100)/this.salesBookArray[i].cost_amount)
            csvData.push(ob)
        }
        csvData.push({
            id : 'Total',
            createdAt : '',
            invoice : '',
            patient : '',
            salesAmount : this.getData(this.totalAmount),
            costAmount: this.getData(this.totalCostPrice),
            grossProfit: this.getData(this.totalCost),
            profit: this.getData(((this.totalAmount-this.totalCostPrice)*100)/this.totalCostPrice)
        })
        var todayDate = new Date().toJSON().toString().substr(0,10)
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
        doc.save('SalesBook'+"("+todayDate+")");
    }

    exportPdfDetail(){
            this.invoiceNo=this.salesBookArray[this.selectedIndex].id
            this.oldDate=new Date(this.getTimeFiveAndHalfHoursBefore(this.salesBookArray[this.selectedIndex].createdAt))
            this.subTotal=Math.ceil(this.salesBookArray[this.selectedIndex].total_amount)
            this.partyTotal=Math.ceil(this.subTotal)
            if(this.salesBookArray[this.selectedIndex].walkin_patient){
                this.patientNameNew=this.salesBookArray[this.selectedIndex].patient
                this.patient_mobile=this.salesBookArray[this.selectedIndex].patient_mobile
                this.docName = null
            }else{
                this.patientNameNew=this.salesBookArray[this.selectedIndex].dispensed_patient_id.registration.pateintName
                this.patient_mobile = this.salesBookArray[this.selectedIndex].dispensed_patient_id.registration.pateintPhone
                this.docName=this.salesBookArray[this.selectedIndex].dispensed_patient_id.doctor_id
            }   
        
        $('#receiptPdf1').printThis({
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

        // var head = [
        //     { title: 'Date', dataKey: "createdAt"},
        //     { title: 'Invoice', dataKey: "invoice"},
        //     { title: 'Patient Name', dataKey: "patient"},
        //     { title: 'Type', dataKey : "type"},
        //     { title: 'Product Name', dataKey : "product"},
        //     { title: 'Pack', dataKey : "pack"},
        //     { title: 'M.R.P', dataKey : "mrp"},
        //     { title: 'QTY', dataKey : "qty"},
        //     { title: 'Disc%', dataKey : "discount"},
        //     { title: 'Amount', dataKey : "amount"},
        //     { title: 'Batch', dataKey : "batch"}
        // ]
        // var csvData = []
        // for (var i = 0; i < this.returnPurchaseArray.opt.length; i++) {
        //     var ob ;
        //     ob = {}
        //     ob.createdAt = this.getTimeFiveAndHalfHoursBefore(this.salesBookArray[this.selectedIndex].createdAt)
        //     ob.createdAt = this.datePipe.transform(ob.createdAt, 'dd-MM-yyyy, h:mm a');
        //     ob.invoice = this.salesBookArray[this.selectedIndex].id
        //     ob.patient = this.salesBookArray[this.selectedIndex].patient
        //     ob.patient = this.salesBookArray[this.selectedIndex].patient  
        //     ob.type = this.returnPurchaseArray.opt[i]
        //     ob.product = this.returnPurchaseArray.product[i]
        //     ob.pack = this.returnPurchaseArray.pack1[i] +"x"+ this.returnPurchaseArray.pack2[i]
        //     ob.mrp = this.returnPurchaseArray.mrp[i]
        //     ob.qty = this.returnPurchaseArray.quantity[i]
        //     ob.discount = this.returnPurchaseArray.discount[i]
        //     if(this.returnPurchaseArray.discount[i] ==null || this.returnPurchaseArray.discount[i] == '' || this.returnPurchaseArray.discount[i] == undefined){
        //         ob.discount = 0
        //     }
        //     ob.amount = this.returnPurchaseArray.amount[i]
        //     ob.batch = this.returnPurchaseArray.batch[i]
        //     csvData.push(ob)
        // }
        // var todayDate = new Date().toJSON().toString().substr(0,10)
        // var from = new Date(this.fromDate).toJSON().toString().substr(0,10)
        // var to = new Date(this.toDate).toJSON().toString().substr(0,10)
        // var doc = new jsPDF('p', 'pt');
        // doc.autoTable(head, csvData, {
        //     theme: 'grid',
        //     styles: {
        //         overflow: 'linebreak',
        //     },
        //     margin: 5,
        //     fontSize:8,
        //     tableWidth: 'auto',
        //     showHeader: 'everyPage'
        // });
        // doc.save('SalesBook'+"OfInvoice"+this.salesBookArray[this.selectedIndex].id);
    }

    getData(data){
        if(isNaN(data)){
            return 0
        }else if(data % 1 != 0){
            return data.toFixed(2)
        }else{
            return data
        }
    }

    viewData(item,index){
        this.patientAmount=item.total_amount
        this.returnPurchaseArray = item.medicines[0]
        this.selectedIndex = index
        $("#view-sales-order-modal").modal("show");
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
