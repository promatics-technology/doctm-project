import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-share',
	templateUrl: './share.component.html',
	styleUrls: ['./share.component.css'],

})
export class ShareComponent implements OnInit {
	smsDetails
	sendSmsForm
	abcd
	constructor( private toastr: ToastrService,private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

	ngOnInit() {
		this.smsDetails = {}
		this.smsDetails.message = "Check out this amazing medical practice platform for your clinic. Its easy-to-use, secure and fully customizable to your needs. It integrates all your clinic services not only to deliver best patient experience but also to keep you fully informed anytime, anywhere. You can Download the app from the playstore or register yourself on https://mydoctm.com"
		this.sendSmsForm = this.formBuilder.group({
			'phone': [ Validators.compose([Validators.pattern('^[^ ]+[0-9]*'), Validators.maxLength(10), Validators.minLength(10),])],
			'email1': [null, Validators.compose([Validators.pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
			'message': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
			'abcd' :[],
		})
	}
	sendSMS(){
		var value = $("#phoneNo").val();
		console.log(value)
		if(this.smsDetails.phone == '' || this.smsDetails.phone==undefined
			||this.smsDetails.phone == null || this.smsDetails.phone.length<10 || isNaN(this.smsDetails.phone)){
			if(this.smsDetails.email == '' || this.smsDetails.email == undefined || this.smsDetails.email == null || this.smsDetails.email.trim().length<1){
				this.toastr.warning('Invalid phone number or email', "Warning")
				return
			}
		}
		console.log(this.smsDetails)
		this.userService.ShareByDoctor(this.smsDetails).subscribe(data => {
			console.log(data)
			if(data.response){
				this.toastr.success(data.message,'Success')
				this.router.navigateByUrl('/header-two-layout/dashboard');

			}else{
				this.toastr.error(data.message,'Error')
			}
		},err=>{
			console.log(err)
		})
	}

}
