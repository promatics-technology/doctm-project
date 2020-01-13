import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment.prod';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
	selector: 'app-contact-us',
	templateUrl: './contact-us.component.html',
	styleUrls: ['./contact-us.component.css'],
	providers: [UserService]
})
export class ContactUsComponent implements OnInit {
	helpData
	reqData
	constructor(
		private router: Router,
		private domSanitizer: DomSanitizer, 
		private userService: UserService, 
		private toastr: ToastrService
		) { }

	ngOnInit() {
		this.gettext()
		this.reqData={}
	}
	gettext(){
		this.helpData=[]
		this.userService.GetHelpText().subscribe(data =>{
			if(data.response){
				this.helpData = data.data
				console.log(this.helpData)
			}
		},err =>{
			console.log(err)
		})
	}
	submitContact(){
		if(this.reqData.name == null || this.reqData.name == undefined){
			this.toastr.warning('Please enter the name')
			return
		}
		if(this.reqData.email == null || this.reqData.email == undefined){
			this.toastr.warning('Please enter the email')
			return
		}
		if(this.reqData.subject == null || this.reqData.subject == undefined){
			this.toastr.warning('Please enter the subject')
			return
		}
		var obj = {
			name:this.reqData.name,
			email:this.reqData.email,
			subject:this.reqData.subject,
			message:this.reqData.message,
		}
		console.log(obj)
		this.userService.SubmitContactUsDetails(obj).subscribe(data =>{
			if(data.response){
				this.router.navigate(['/header-one-layout/homepage'])
				this.toastr.success(data.message,'Success');
			}
		},err =>{
			console.log(err)
		})
	}

}
