import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { RouterModule, Routes, Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-diagnosticdetail',
	templateUrl: './diagnosticdetail.component.html',
	styleUrls: ['./diagnosticdetail.component.css'],
	providers: [UserService]
})
export class DiagnosticdetailComponent implements OnInit {
	detailsForm:FormGroup
	reqData
	diagnosticsData
	servicesArray
	loading
		hoursIST
	minutesIST
	month
	day
	year
	numericMonth
	constructor(private formBuilder: FormBuilder, private toastr: ToastrService, 
		private userService: UserService,public router: Router) { }

	ngOnInit() {
		this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails'])
		console.log(this.diagnosticsData)
		this.servicesArray = []
		this.reqData = {}
		this.detailsForm = this.formBuilder.group({
			'diagnosticsName':  [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
			'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
				Validators.minLength(10),Validators.maxLength(10)])],
			'address':  [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
			'gstinNumber': [null],
			'drugLicense': [null],
			'conditionOne': [null],
			'conditionTwo': [null],
			'conditionThree': [null],
			'conditionFour': [null],
		})
		this.GetServices()	
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
		// else{
			// this.reqData.conditionOne = "Goods once sold will not be taken back."
			// this.reqData.conditionTwo = "Replacement within 10 days with sale receipt only."
			// this.reqData.conditionThree = "We are not responsible for any breakage, shortage, leakage or damage as soon as goods leave our premises."
			// this.reqData.conditionFour = "Subject to local jurisdiction only."
		// }
	}
	
	submitForm(){
		var array = []
		for (var i = 0; i < this.servicesArray.length; i++) {
			if(this.servicesArray[i].status == true){
				array.push(this.servicesArray[i].name)
			}
		}
		if(array.length>0){
			this.reqData.id = this.diagnosticsData.dataSmartDiagnostics.id
			this.reqData.diagnostics_services = array
			console.log(this.reqData)
			this.loading = true
			this.userService.UpdateDiagnosticDetail(this.reqData).subscribe(data => {
	            console.log(data);
	            this.loading = false
	            if (data.response == true) {
	                this.toastr.success(data.message, "Success")
	                localStorage['smartDiagnosticsDetails'] = JSON.stringify(data.data)
	                this.router.navigate(['/header-six-layout/dashboard-diagnostic']);
	            } else {
	                this.toastr.error(data.message, "Error")
	            }
	        }, err => {
	            console.log(err);
	        })
		}else{
			this.toastr.warning("Please select atleast one service", "Warning")
		}
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



}
