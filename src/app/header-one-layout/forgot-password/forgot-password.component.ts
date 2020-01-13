import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

declare var $
@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
	phone
	loading
	getOtp
	docPhone
	docPassword
	confirmDocPassword
	newOtp
	form
	type
	constructor(private toastr: ToastrService, private userService: UserService,private router: Router,
		private formBuilder: FormBuilder, public route: ActivatedRoute ) {
		this.route.params.subscribe((id)=>{
           this.type=id.id
       }); }

	ngOnInit() {
		this.form = this.formBuilder.group({
			'newOtp': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                
            ])],
            'docPassword': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                Validators.minLength(8)
            ])],
            'confirmDocPassword': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                Validators.minLength(8)
            ])],
        })
        console.log(this.type)
	}
	forgetPass(){
		if(this.phone == null || this.phone == undefined || this.phone == '' || isNaN(this.phone) || this.phone.length<10){
			console.log("ok")
			this.toastr.error('Enter correct phone number', 'Error')
			return
		}
		console.log(this.phone)
		var ob ={
			phone: this.phone
		}
		this.loading = true;
		if(this.type == 'doctor'){
			this.userService.FindOneDoctorByPhone(ob).subscribe(data => {
				console.log(data);
				if(data.response){
					this.toastr.success('ok', 'Success')
					this.docPhone = data.data.phone
					this.sendOtp(this.docPhone)
					$("#myModal").modal("show");
				}else{
					this.toastr.error('Enter correct phone number', 'Error')
				}
				this.loading = false;
			}, err => {
				console.log(err);
			})
		}
		if(this.type == 'assistant'){
			this.userService.FindOneAssistantByPhone(ob).subscribe(data => {
				console.log(data);
				if(data.response){
					this.toastr.success('ok', 'Success')
					this.docPhone = data.data.phone
					this.sendOtp(this.docPhone)
					$("#myModal").modal("show");
				}else{
					this.toastr.error('Enter correct phone number', 'Error')
				}
				this.loading = false;
			}, err => {
				console.log(err);
			})
		}
		if(this.type == 'pharmacy'){
			this.userService.FindOnePharmacyByPhone(ob).subscribe(data => {
				console.log(data);
				if(data.response){
					this.toastr.success('ok', 'Success')
					this.docPhone = data.data.phone
					this.sendOtp(this.docPhone)
					$("#myModal").modal("show");
				}else{
					this.toastr.error('Enter correct phone number', 'Error')
				}
				this.loading = false;
			}, err => {
				console.log(err);
			})
		}
		if(this.type == 'diagnostics'){
			this.userService.FindOneDiagnosticsByPhone(ob).subscribe(data => {
				console.log(data);
				if(data.response){
					this.toastr.success('ok', 'Success')
					this.docPhone = data.data.phone
					this.sendOtp(this.docPhone)
					$("#myModal").modal("show");
				}else{
					this.toastr.error('Enter correct phone number', 'Error')
				}
				this.loading = false;
			}, err => {
				console.log(err);
			})
		}
		if(this.type == 'ipd'){
			this.userService.FindOneIPDByPhone(ob).subscribe(data => {
				console.log(data);
				if(data.response){
					this.toastr.success('ok', 'Success')
					this.docPhone = data.data.phone
					this.sendOtp(this.docPhone)
					$("#myModal").modal("show");
				}else{
					this.toastr.error('Enter correct phone number', 'Error')
				}
				this.loading = false;
			}, err => {
				console.log(err);
			})
		}
	}
	sendOtp(data){
		console.log(data)
		var ob = {
			phone: parseInt(data)
		}
		this.userService.GenerateOtpForActiveDoctor(ob).subscribe(data => {
			console.log(data);
			if(data.response){
				this.getOtp = data.otpPhone
				console.log(this.getOtp)
			}else{
				this.toastr.error('Enter correct phone number', 'Error')
			}
			this.loading = false;
		}, err => {
			console.log(err);
		})
	}
	UpdateDoctorPassword(){
		if(this.type == 'doctor'){
			if(this.docPassword == this.confirmDocPassword){
				if(parseInt(this.newOtp) == parseInt(this.getOtp)){
					var ob = {
						phone: this.docPhone,
						password: this.docPassword
					}
					this.userService.UpdateDoctorPassword(ob).subscribe(data => {
						console.log(data);
						if(data.response){
							$("#myModal").modal("hide");
							this.router.navigate(['header-one-layout/smartClinicLogin']); 
						}
						this.loading = false;
					}, err => {
						console.log(err);
					})
				}else{
					this.toastr.error('Enter correct otp', 'Error')
				}
			}else{
				this.toastr.error('Password and confirm password not matched', 'Error')
			}
		}
		if(this.type == 'assistant'){
			if(this.docPassword == this.confirmDocPassword){
				if(parseInt(this.newOtp) == parseInt(this.getOtp)){
					var ob = {
						phone: this.docPhone,
						password: this.docPassword
					}
					this.userService.UpdateAssistantPassword(ob).subscribe(data => {
						console.log(data);
						if(data.response){
							$("#myModal").modal("hide");
							this.router.navigate(['header-one-layout/smartClinicLogin']); 
						}
						this.loading = false;
					}, err => {
						console.log(err);
					})
				}else{
					this.toastr.error('Enter correct otp', 'Error')
				}
			}else{
				this.toastr.error('Password and confirm password not matched', 'Error')
			}
		}
		if(this.type == 'pharmacy'){
			if(this.docPassword == this.confirmDocPassword){
				if(parseInt(this.newOtp) == parseInt(this.getOtp)){
					var ob = {
						phone: this.docPhone,
						password: this.docPassword
					}
					this.userService.UpdatePharmacyPassword(ob).subscribe(data => {
						console.log(data);
						if(data.response){
							$("#myModal").modal("hide");
							this.router.navigate(['header-one-layout/smartClinicLogin']); 
						}
						this.loading = false;
					}, err => {
						console.log(err);
					})
				}else{
					this.toastr.error('Enter correct otp', 'Error')
				}
			}else{
				this.toastr.error('Password and confirm password not matched', 'Error')
			}
		}

		if(this.type == 'diagnostics'){
			if(this.docPassword == this.confirmDocPassword){
				if(parseInt(this.newOtp) == parseInt(this.getOtp)){
					var ob = {
						phone: this.docPhone,
						password: this.docPassword
					}
					this.userService.UpdateDiagnosticsPassword(ob).subscribe(data => {
						console.log(data);
						if(data.response){
							$("#myModal").modal("hide");
							this.router.navigate(['header-one-layout/smartClinicLogin']); 
						}
						this.loading = false;
					}, err => {
						console.log(err);
					})
				}else{
					this.toastr.error('Enter correct otp', 'Error')
				}
			}else{
				this.toastr.error('Password and confirm password not matched', 'Error')
			}
		}
		if(this.type == 'ipd'){
			if(this.docPassword == this.confirmDocPassword){
				if(parseInt(this.newOtp) == parseInt(this.getOtp)){
					var ob = {
						phone: this.docPhone,
						password: this.docPassword
					}
					this.userService.UpdateIPDPassword(ob).subscribe(data => {
						console.log(data);
						if(data.response){
							$("#myModal").modal("hide");
							this.router.navigate(['header-one-layout/smartClinicLogin']); 
						}
						this.loading = false;
					}, err => {
						console.log(err);
					})
				}else{
					this.toastr.error('Enter correct otp', 'Error')
				}
			}else{
				this.toastr.error('Password and confirm password not matched', 'Error')
			}
		}
	}
}