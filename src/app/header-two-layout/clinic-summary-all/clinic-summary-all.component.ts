import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

declare var $
declare var jsPDF: any; // Important

@Component({
  selector: 'app-clinic-summary-all',
  templateUrl: './clinic-summary-all.component.html',
  styleUrls: ['./clinic-summary-all.component.css']
})
export class ClinicSummaryAllComponent implements OnInit {
	fromDate = new Date()
	toDate = new Date()
	fromDate1 = new Date()
	toDate1= new Date()
	newDate = new Date()
	activatedtab
	settings = {
		bigBanner: true,
		timePicker: false,
		format: 'dd-MMM-yyyy',
		defaultOpen: false
	}
	doctorData
	loading
	dataDoctors
	dataSummaryArray
	patientsArray

	opdCollection: number
	pharmacySales: number
	pharmacyProfit: number
	diagnosticsCollection: number
	diagnosticsOrders: number
	ipdCollection: number
	ipdAdmission: number
	totalClinicCollection: number

  constructor(private userService: UserService, private toastr: ToastrService,private datePipe: DatePipe) { }

  ngOnInit() {
	this.doctorData = JSON.parse(localStorage['doctorDetails'])
	console.log(this.doctorData)
	this.newDate.setDate(this.newDate.getDate()+1)
	this.fromDate1.setDate(this.fromDate1.getDate()-6)
	this.dataSummaryArray = []
	this.patientsArray = []
  	this.activatedtab = 0
  	this.activatetab(1)
  }

  	activatetab(i){
  		this.activatedtab= i
  		var object
		object ={}
		var date = new Date()
		object.doctm_clinic_id = this.doctorData.doctm_clinic_id
		object.end_date= new Date()
		if(i==0){
			object.start_date = date
		}
		else if (i==1) {
			object.start_date = new Date(date.setDate(date.getDate()-6))
		}
		else if(i==2){
			object.start_date = new Date(date.setDate(date.getDate()-13))
		}
		else if(i==3){
			object.start_date = new Date(date.setMonth(date.getMonth()-1))
		}
		else if(i==4){
			object.start_date =new Date(date.setMonth(date.getMonth()-3))
		}
		else if(i==5){
			object.start_date = new Date(date.setMonth(date.getMonth()-6))
		}
		else if(i==6){
			object.start_date = new Date(date.setFullYear(date.getFullYear()-1))
		}
		else if(i==7){
			object.start_date = new Date()
			object.maximum = true
		}
		this.AllClinicSummary(object)
  	}
    getClass(i){
		if (i==this.activatedtab) {
			return 'active'
		}else if (i<this.activatedtab) {
			return 'completed'
		}

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

	go(){
		this.activatedtab = 0
    	var object 
		object = {}
		object.doctm_clinic_id = this.doctorData.doctm_clinic_id
		object.start_date = this.fromDate1
		object.end_date = this.toDate1
		console.log(object)
		this.AllClinicSummary(object)
    }

	AllClinicSummary(object){
		this.loading = true
		this.dataSummaryArray = []
		this.patientsArray = []
		this.opdCollection = 0
		this.pharmacySales = 0
		this.pharmacyProfit = 0
		this.diagnosticsCollection = 0
		this.diagnosticsOrders = 0
		this.ipdCollection = 0
		this.ipdAdmission = 0
		this.totalClinicCollection = 0
		this.userService.AllClinicSummary(object).subscribe((data)=>{
			console.log(data)
			if(data.response){
				this.dataDoctors = data.dataDoctors

				// for OPD
				for (var i = 0; i < data.dataRegistrations.length; i++) {
					var boolean = false
					for (var j = 0; j < this.dataSummaryArray.length; j++) {
						if(data.dataRegistrations[i]._id == this.dataSummaryArray[j].doctor_id){
							for (var k = 0; k < data.dataRegistrations[i].data.length; k++) {
								this.dataSummaryArray[j].collection += parseInt(data.dataRegistrations[i].data[k].fee)
								this.addPatient(data.dataRegistrations[i].data[k].pateintName,data.dataRegistrations[i].data[k].pateintPhone,data.dataRegistrations[i]._id)
							}
							boolean = true
						}
					}
					if(boolean==false){
						var collection
						collection = 0
						for (var k = 0; k < data.dataRegistrations[i].data.length; k++) {
							this.addPatient(data.dataRegistrations[i].data[k].pateintName,data.dataRegistrations[i].data[k].pateintPhone,data.dataRegistrations[i]._id)
							collection += parseInt(data.dataRegistrations[i].data[k].fee)
						}
						this.dataSummaryArray.push({
							doctor_id: data.dataRegistrations[i]._id,
							collection: collection
						})
					}
				}
				for (var i = 0; i < data.dataDispensed.length; i++) {
					var boolean = false
					for (var j = 0; j < this.dataSummaryArray.length; j++) {
						if(data.dataDispensed[i]._id == this.dataSummaryArray[j].doctor_id){
							for (var k = 0; k < data.dataDispensed[i].data.length; k++) {
								this.addPatient(data.dataDispensed[i].data[k].registration.pateintName,data.dataDispensed[i].data[k].registration.pateintPhone,data.dataDispensed[i]._id)
								this.dataSummaryArray[j].collection += parseInt(data.dataDispensed[i].data[k].registration.fee)
							}
							boolean = true
						}
					}
					if(boolean==false){
						var collection
						collection = 0
						for (var k = 0; k < data.dataDispensed[i].data.length; k++) {
							this.addPatient(data.dataDispensed[i].data[k].registration.pateintName,data.dataDispensed[i].data[k].registration.pateintPhone,data.dataDispensed[i]._id)
							collection += parseInt(data.dataDispensed[i].data[k].registration.fee)
						}
						this.dataSummaryArray.push({
							doctor_id: data.dataDispensed[i]._id,
							collection: collection
						})
					}
				}

				//for pharmacy
				for (var i = 0; i < data.dataSalesEntryPharmacy.length; i++) {
					data.dataSalesEntryPharmacy[i].doctor_id = this.getDoctorIdPharmacy(data.dataSalesEntryPharmacy[i]._id)
				}
				for (var i = 0; i < data.dataSalesEntryPharmacy.length; i++) {
					var boolean = false
					for (var j = 0; j < this.dataSummaryArray.length; j++) {
						if(data.dataSalesEntryPharmacy[i].doctor_id == this.dataSummaryArray[j].doctor_id){
							this.dataSummaryArray[j].sales = 0
							this.dataSummaryArray[j].cost = 0
							this.dataSummaryArray[j].profit = 0
							for (var k = 0; k < data.dataSalesEntryPharmacy[i].data.length; k++) {
								this.dataSummaryArray[j].sales += data.dataSalesEntryPharmacy[i].data[k].total_amount
								this.dataSummaryArray[j].cost += data.dataSalesEntryPharmacy[i].data[k].cost_amount
								this.dataSummaryArray[j].profit = this.getData(this.dataSummaryArray[j].sales - this.dataSummaryArray[j].cost)
							}
							boolean = true
						}
					}
					if(boolean==false){
						var sales
						sales = 0
						var cost
						cost = 0
						for (var k = 0; k < data.dataSalesEntryPharmacy[i].data.length; k++) {
							sales += data.dataSalesEntryPharmacy[i].data[k].total_amount
							cost += data.dataSalesEntryPharmacy[i].data[k].cost_amount
						}
						var profit = this.getData(sales - cost)
						this.dataSummaryArray.push({
							doctor_id: data.dataSalesEntryPharmacy[i].doctor_id,
							sales: sales,
							profit:profit
						})
					}
				}

				//for diagnostics
				for (var i = 0; i < data.dataSalesEntryDiagnostics.length; i++) {
					data.dataSalesEntryDiagnostics[i].doctor_id = this.getDoctorIdDiagnostics(data.dataSalesEntryDiagnostics[i]._id)
				}
				for (var i = 0; i < data.dataSalesEntryDiagnostics.length; i++) {
					var boolean = false
					for (var j = 0; j < this.dataSummaryArray.length; j++) {
						if(data.dataSalesEntryDiagnostics[i].doctor_id == this.dataSummaryArray[j].doctor_id){
							this.dataSummaryArray[j].collectionDiagnostics = 0
							this.dataSummaryArray[j].orders = 0
							for (var k = 0; k < data.dataSalesEntryDiagnostics[i].data.length; k++) {
								this.dataSummaryArray[j].orders++
								this.dataSummaryArray[j].collectionDiagnostics += data.dataSalesEntryDiagnostics[i].data[k].total_amount
							}
							boolean = true
						}
					}
					if(boolean==false){
						var sales
						sales = 0
						var orders
						orders = 0
						for (var k = 0; k < data.dataSalesEntryDiagnostics[i].data.length; k++) {
							sales += data.dataSalesEntryDiagnostics[i].data[k].total_amount
							orders++
						}
						this.dataSummaryArray.push({
							doctor_id: data.dataSalesEntryDiagnostics[i].doctor_id,
							collectionDiagnostics:sales,
							orders:orders
						})
					}
				}

				// for IPD
				for (var i = 0; i < data.dataIpd.length; i++) {
					var boolean = false
					for (var j = 0; j < this.dataSummaryArray.length; j++) {
						if(data.dataIpd[i]._id == this.dataSummaryArray[j].doctor_id){
							this.dataSummaryArray[j].collectionIpd = 0
							this.dataSummaryArray[j].ordersIpd = 0
							for (var k = 0; k < data.dataIpd[i].dataIpd.length; k++) {
								this.dataSummaryArray[j].ordersIpd++
								if(data.dataIpd[i].dataIpd[k].total_bill){
									this.dataSummaryArray[j].collectionIpd += data.dataIpd[i].dataIpd[k].total_bill
								}
							}
							boolean = true
						}
					}
					if(boolean==false){
						var sales
						sales = 0
						var orders
						orders = 0
						for (var k = 0; k < data.dataIpd[i].dataIpd.length; k++) {
							if(data.dataIpd[i].dataIpd[k].total_bill){
								sales += data.dataIpd[i].dataIpd[k].total_bill
							}
							orders++
						}
						this.dataSummaryArray.push({
							doctor_id: data.dataIpd[i]._id,
							collectionIpd:sales,
							ordersIpd:orders
						})
					}
				}

				for (var i = 0; i < this.dataSummaryArray.length; i++) {
					if(!this.dataSummaryArray[i].collection){
						this.dataSummaryArray[i].collection = 0
					}						
					if(!this.dataSummaryArray[i].collectionDiagnostics){
						this.dataSummaryArray[i].collectionDiagnostics = 0
					}
					if(!this.dataSummaryArray[i].collectionIpd){
						this.dataSummaryArray[i].collectionIpd = 0
					}
					if(!this.dataSummaryArray[i].cost){
						this.dataSummaryArray[i].cost = 0
					}
					if(!this.dataSummaryArray[i].orders){
						this.dataSummaryArray[i].orders = 0
					}
					if(!this.dataSummaryArray[i].ordersIpd){
						this.dataSummaryArray[i].ordersIpd = 0
					}
					if(!this.dataSummaryArray[i].profit){
						// tslint:disable-next-line:indent
						this.dataSummaryArray[i].profit = 0
					}
					if(!this.dataSummaryArray[i].sales){
						this.dataSummaryArray[i].sales = 0
					}

					this.dataSummaryArray[i].patients = 0
					for (var j = 0; j < this.patientsArray.length; j++) {
						if(this.patientsArray[j].doctor == this.dataSummaryArray[i].doctor_id){
							this.dataSummaryArray[i].patients++
						}
					}
					this.dataSummaryArray[i].totalCollection = this.dataSummaryArray[i].collection + this.dataSummaryArray[i].sales + this.dataSummaryArray[i].collectionIpd
					this.totalClinicCollection += this.dataSummaryArray[i].totalCollection

					this.opdCollection += this.dataSummaryArray[i].collection
					this.pharmacySales += this.dataSummaryArray[i].sales
					this.pharmacyProfit += parseFloat(this.dataSummaryArray[i].profit)
					this.diagnosticsCollection += this.dataSummaryArray[i].collectionDiagnostics
					this.diagnosticsOrders += this.dataSummaryArray[i].orders
					this.ipdCollection += this.dataSummaryArray[i].collectionIpd
					this.ipdAdmission += this.dataSummaryArray[i].ordersIpd
				}

				//calculating percetages
				for (var i = 0; i < this.dataSummaryArray.length; i++) {
					this.dataSummaryArray[i].collectionPerc = this.getData((this.dataSummaryArray[i].collection *100) / this.opdCollection)
					this.dataSummaryArray[i].patientsPerc = this.getData((this.dataSummaryArray[i].patients *100) / this.patientsArray.length)
					this.dataSummaryArray[i].collectionDiagnosticsPerc = this.getData((this.dataSummaryArray[i].collectionDiagnostics *100) / this.diagnosticsCollection)
					this.dataSummaryArray[i].collectionIpdPerc = this.getData((this.dataSummaryArray[i].collectionIpd *100) / this.ipdCollection)
					this.dataSummaryArray[i].ordersPerc = this.getData((this.dataSummaryArray[i].orders *100) / this.diagnosticsOrders)
					this.dataSummaryArray[i].ordersIpdPerc = this.getData((this.dataSummaryArray[i].ordersIpd *100) / this.ipdAdmission)
					this.dataSummaryArray[i].profitPerc = this.getData((this.dataSummaryArray[i].profit *100) / this.pharmacyProfit)
					this.dataSummaryArray[i].salesPerc = this.getData((this.dataSummaryArray[i].sales *100) / this.pharmacySales)
					this.dataSummaryArray[i].totalCollectionPerc = this.getData((this.dataSummaryArray[i].totalCollection *100) / this.totalClinicCollection)
				}

				if(this.dataSummaryArray.length<this.dataDoctors.length){
					for (var i = 0; i < this.dataDoctors.length; i++) {
						var boolean = false
						for (var j = 0; j < this.dataSummaryArray.length; j++) {
							if(this.dataSummaryArray[j].doctor_id == this.dataDoctors[i]._id){
								boolean = true
								break;
							}
						}
						if(boolean == false){
							this.dataSummaryArray.push({
								collection: 0,
								collectionDiagnostics: 0,
								collectionDiagnosticsPerc: 0,
								collectionIpd: 0,
								collectionIpdPerc: 0,
								collectionPerc: 0,
								cost: 0,
								doctor_id: this.dataDoctors[i]._id,
								orders: 0,
								ordersIpd: 0,
								ordersIpdPerc: 0,
								ordersPerc: 0,
								patients: 0,
								patientsPerc: 0,
								profit: 0,
								profitPerc: 0,
								sales: 0,
								salesPerc: 0,
								totalCollection: 0,
								totalCollectionPerc: 0						
							})
						}
					}
				}
			}
			this.loading = false
		},err=>{
			console.log(err)
		})
	}

	addPatient(name,num,doctor){
		for (var i = 0; i < this.patientsArray.length; i++) {
			if(name == this.patientsArray[i].name && num == this.patientsArray[i].num && doctor == this.patientsArray[i].doctor){
				return 
			}
		}
		this.patientsArray.push({
			name:name,
			num:num,
			doctor:doctor
		})
		return 
	}

	getDoctorName(id){
        for (var i = 0; i < this.dataDoctors.length; i++) {
			if(this.dataDoctors[i]._id == id){
				var name = this.dataDoctors[i].first_name.split(' ')
				return (name[0])
			}
		}
    }

    getDoctorIdPharmacy(id){
    	for (var i = 0; i < this.dataDoctors.length; i++) {
			if(this.dataDoctors[i].smart_pharmacy_id == id){
				return this.dataDoctors[i]._id
			}
		}
    }

    getDoctorIdDiagnostics(id){
    	for (var i = 0; i < this.dataDoctors.length; i++) {
			if(this.dataDoctors[i].smart_diagnostics_id == id){
				return this.dataDoctors[i]._id
			}
		}
    }

    exportPdf(){
        var head = [
            { title: 'Doctor', dataKey: "doctor"},
            { title: 'OPD Collection', dataKey: "collection"},
            { title: 'OPD Patients', dataKey: "patients"},
            { title: 'Pharmacy Sales', dataKey: "sales"},
            { title: 'Pharmacy Profit', dataKey: "profit"},
            { title: 'Diagnostics Collection', dataKey:"collectionDiagnostics"},
            { title: 'Diagnostics Orders', dataKey:"orders"},
            { title: 'IPD Collection', dataKey:"collectionIpd"},
            { title: 'IPD Admission', dataKey:"ordersIpd"},
            { title: 'Total (Rs)', dataKey:"totalCollection"},
        ]
        var csvData = []
        for (var i = 0; i < this.dataSummaryArray.length; i++) {
            var ob ;
            ob = {}
			ob.doctor = "Dr. "+this.getDoctorName(this.dataSummaryArray[i].doctor_id)
			ob.collection = this.dataSummaryArray[i].collection + " (" + this.dataSummaryArray[i].collectionPerc + "%)"
			ob.patients = this.dataSummaryArray[i].patients + " (" + this.dataSummaryArray[i].patientsPerc + "%)"
			ob.sales = this.dataSummaryArray[i].sales + " (" + this.dataSummaryArray[i].salesPerc + "%)"
			ob.profit = this.dataSummaryArray[i].profit + " (" + this.dataSummaryArray[i].profitPerc + "%)"
			ob.collectionDiagnostics = this.dataSummaryArray[i].collectionDiagnostics + " (" + this.dataSummaryArray[i].collectionDiagnosticsPerc + "%)"
			ob.orders = this.dataSummaryArray[i].orders + " (" + this.dataSummaryArray[i].ordersPerc + "%)"
			ob.collectionIpd = this.dataSummaryArray[i].collectionIpd + " (" + this.dataSummaryArray[i].collectionIpdPerc + "%)"
			ob.ordersIpd = this.dataSummaryArray[i].ordersIpd + " (" + this.dataSummaryArray[i].ordersIpdPerc + "%)"
			ob.totalCollection = this.dataSummaryArray[i].totalCollection + " (" + this.dataSummaryArray[i].totalCollectionPerc + "%)"
            csvData.push(ob)
        }
        csvData.push({
            doctor : "Total",
			collection : this.opdCollection,
			patients : this.patientsArray.length,
			sales : this.pharmacySales,
			profit : this.pharmacyProfit,
			collectionDiagnostics : this.diagnosticsCollection,
			orders : this.diagnosticsOrders,
			collectionIpd : this.ipdCollection,
			ordersIpd : this.ipdAdmission,
			totalCollection : this.totalClinicCollection
        })
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
        doc.save('ClinicSummary');
    }

}