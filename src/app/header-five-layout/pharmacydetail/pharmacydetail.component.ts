import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { RouterModule, Routes, Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-pharmacydetail',
	templateUrl: './pharmacydetail.component.html',
	styleUrls: ['./pharmacydetail.component.css'],
	providers: [UserService]
})
export class PharmacydetailComponent implements OnInit {
	reqData
	detailsForm:FormGroup
	loading
	pharmacyData
	hoursIST
	minutesIST
	month
	day
	year
	numericMonth
	constructor(private formBuilder: FormBuilder, private toastr: ToastrService, 
		private userService: UserService,public router: Router) { }

	ngOnInit() {
		this.reqData={}
		this.detailsForm = this.formBuilder.group({
			'pharmacyName':  [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
			'address':  [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
			'drugLicense': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
			'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
				Validators.minLength(10),Validators.maxLength(10)])],
			'gstinNumber': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
			'conditionOne': [null],
			'conditionTwo': [null],
			'conditionThree': [null],
			'conditionFour': [null],
		})
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails'])
        this.checkIfAddress()
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
		if(this.pharmacyData.dataSmartPharmacy.address_filled){
			this.reqData.pharmacyName = this.pharmacyData.dataSmartPharmacy.pharmacy_name
			this.reqData.address = this.pharmacyData.dataSmartPharmacy.pharmacy_address
			this.reqData.phone = this.pharmacyData.dataSmartPharmacy.pharmacy_phone
			this.reqData.drugLicense = this.pharmacyData.dataSmartPharmacy.pharmacy_license
			this.reqData.gstinNumber = this.pharmacyData.dataSmartPharmacy.pharmacy_gst_no
			this.reqData.conditionOne = this.pharmacyData.dataSmartPharmacy.term1
			this.reqData.conditionTwo = this.pharmacyData.dataSmartPharmacy.term2
			this.reqData.conditionThree = this.pharmacyData.dataSmartPharmacy.term3
			this.reqData.conditionFour = this.pharmacyData.dataSmartPharmacy.term4
		}else{
			this.reqData.conditionOne = "Goods once sold will not be taken back."
			this.reqData.conditionTwo = "Replacement within 10 days with sale receipt only."
			this.reqData.conditionThree = "We are not responsible for any breakage, shortage, leakage or damage as soon as goods leave our premises."
			this.reqData.conditionFour = "Subject to local jurisdiction only."
		}
	}

	saveDetails(){
		this.loading = true
		this.reqData.id = this.pharmacyData.dataSmartPharmacy.id
		this.userService.UpdatePharmacyDetail(this.reqData).subscribe(data => {
            console.log(data);
            this.loading = false
            if (data.response == true) {
                this.toastr.success(data.message, "Success")
                localStorage['smartPharmacyDetails'] = JSON.stringify(data.data)
                this.router.navigate(['/header-five-layout/dashboard-pharmacy']);
            } else if (data.response == false) {
                this.toastr.error(data.message, "Error")
            }
        }, err => {
            console.log(err);
        })
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
