import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment.prod';
import { DomSanitizer } from '@angular/platform-browser';
declare var $
@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css'],
	providers: [UserService]
})
export class HomepageComponent implements OnInit {
	ratingArray
	doctorPic
	homeData;
	video;
	slickModal
	totalRate:Number
	doc_image
	mobile_field=false
	email_field=false
	password_field=false
	email_readonly=true
	email_readonly1=true
	confirm_field=false
	user_details=<any>{}
	helpData
	slideConfig = {
		"slidesToShow": 3,
		"slidesToScroll": 1,
		infinite: false,
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}
		]
	};
	constructor(private router: Router,private domSanitizer: DomSanitizer, private userService: UserService, private toastr: ToastrService) { 
		localStorage['user_details']={};
	}
	changeReadOnly(isReadonly){
		this.email_readonly=isReadonly;
		
	}
	changeReadOnly1(isReadonly){
		this.email_readonly1=isReadonly;
	}
	ngOnInit() {
		this.doc_image = environment.rate_us_pic1
		this.doctorPic = environment.doctorPic
		// console.log(this.doc_image)
		// console.log(this.doctorPic)
		this.gettext()
		this.ratingArray = []
		this.getRatingData()
		if(localStorage['isLoggedinDoctor']){ 
			this.router.navigate(['/header-two-layout/dashboard'])
		}else if(localStorage['isLoggedinSmartAssistant']){ 
			this.router.navigate(['/header-three-layout/smartassistant'])
	  	}/* else if(localStorage['isLoggedinSmartIpd']){ 
		 this.router.navigate(['/header-four-layout/dashboard-ipd'])
	  }else if(localStorage['isLoggedinSmartPharmacy']){ 
		  this.router.navigate(['/header-five-layout/dashboard-pharmacy'])
	  }else if(localStorage['isLoggedinSmartDiagnostics']){ 
		   this.router.navigate(['/header-six-layout/dashboard-diagnostic'])
		} */
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
	getRatingData(){
		this.userService.GetRatingUs().subscribe(data => {
			// console.log(data)
			this.homeData=data;
			this.video="https://doctmapi.gagzweblab.xyz/public/home_video/"+data.video[0].fileName;
			var rate = 0
			for (var i = 0; i < data.data.length; i++) {
				if(data.data[i].status== true){
					this.ratingArray.push(data.data[i])
					rate += parseInt(data.data[i].rating) 
				}
			}
			var rat=rate/this.ratingArray.length;
			this.totalRate = parseFloat(rat.toFixed(1));
			// console.log(this.ratingArray)
		},err=>{
			console.log(err)
		})
	}
	next() {
		//	alert('Theer');
		if(this.ratingArray.length > 0){
			(<any>$('.carousel')).slick("slickNext");
		}
	}

	prev() {
		//alert('Here');
		if(this.ratingArray.length >0 ){
			//alert('Here');
			(<any>$('.carousel')).slick("slickPrev");
		}
		// this.slickModal.slickPrev();
	}

	registerNewClinic(){
		if($('#field1').val()==""){
			this.mobile_field=true;
			return false;
		}else{
			this.mobile_field=false;
			this.user_details.mobile=$('#field1').val();
			
		}
		if($('#field2').val()==""){
			this.email_field=true;
			return false;
		}else{
			this.email_field=false;
			this.user_details.email=$('#field2').val();
		}
		if($('#field3').val()==""){
			this.password_field=true;
			return false;
		}else{
			this.password_field=false;
			this.user_details.password=$('#field3').val();
		}
		if($('#field4').val()==""){
			this.confirm_field=true;
			return false;
		}else{
			this.confirm_field=false;
		}
		
		if($('#field4').val()!=$('#field3').val()){
			this.confirm_field=true;
			return false;
		}
		var obj ={
			email:this.user_details.email,
			phone:this.user_details.mobile
		}
		this.userService.CheckDoctorEmailPhone(obj).subscribe(data =>{
			if(data.response){
				localStorage['user_details']=JSON.stringify(this.user_details);
				// console.log(this.user_details);
				if($('#myModalConf').length){
					$('#myModalConf').modal('show');
				}
			}else{
				this.toastr.warning(data.message,'Warning')
			}
		},err =>{
			console.log(err)
		})

	}

	getSafeContent(data){
		console.log(data)
		return this.domSanitizer.bypassSecurityTrustHtml("https://docs.google.com/gview?url="+data);
	}
	
	trimMessage(msg){
		if (msg.length > 100){
			return msg.substr(0,100);
		}else{
			return msg;
		}
	}

}
