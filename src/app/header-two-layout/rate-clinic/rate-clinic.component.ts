import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
@Component({
	selector: 'app-rate-clinic',
	templateUrl: './rate-clinic.component.html',
	styleUrls: ['./rate-clinic.component.css'],
	 providers: [UserService]
})
export class RateClinicComponent implements OnInit {
	model
	totalRating:number
	setMessage
	doctorData
	adminDoctor
	doc_image
	rate_us_pic
	DocData
	ratingArray
	getThisDocData
	rateImage
	rate_us_pic_sample
	
	constructor(private UserService: UserService, private toastr: ToastrService, private router: Router) { }

	ngOnInit() {
		this.doctorData = JSON.parse(localStorage['doctorDetails'])
		this.adminDoctor = JSON.parse(localStorage['doctorsOfSameClinic'])
		this.rate_us_pic = environment.rate_us_pic1
		this.rate_us_pic_sample = environment.rate_us_pic
		console.log(this.rate_us_pic)
		this.getThisDocData = {}
		// console.log(this.adminDoctor)
		this.getRatingData()
		this.totalRating = 0
		this.model = {}
		this.rateImage ={}
	}
	onRatingSet(event){
		// console.log(event)
		this.totalRating = event

	}
	save(){
		if(this.totalRating == 0 || this.totalRating <= 0){
			this.toastr.warning('Please fill rating', 'Warning')
			return
		}
		if(this.setMessage == '' || this.setMessage == null || this.setMessage == undefined ||  this.setMessage.toString().trim().length<1){
			this.toastr.warning('Please fill message', 'Warning')
			return
		}
		// if(this.doc_image){

		// }else{
		// 	this.doc_image = ''
		// }
		var ob = {
			rating:this.totalRating,
			message:this.setMessage,
			doctor_id: this.doctorData._id,
			doctor_profile: this.doctorData.profile_image,
			city: this.adminDoctor.clinic_details.city,
			specialization: this.doctorData.specialization,
			qualification: this.doctorData.qualification,
			name: this.doctorData.first_name,
			doc_image:this.doc_image,
			status: false
		}
		// console.log(ob)
		this.UserService.RateUs(ob).subscribe(data => {
			// console.log(data)
			// this.DocData = data.data
			if(data.response){
				this.toastr.success(data.message, 'Success')
				this.router.navigateByUrl('/header-two-layout/dashboard');
			}
		},err=>{
			console.log(err)
		})
	}
	onuploadMedicalCert(evt: any, index) {
        this.doc_image = null
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        const file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'application/pdf') {
            return;
        }
        const fr = new FileReader();
        fr.onloadend = (loadEvent) => {
            let mainImage = fr.result;
            this.doc_image = mainImage;
        };
        fr.readAsDataURL(file);
    }

    getRatingData(){
    	this.ratingArray = []

		this.UserService.GetRatingUs().subscribe(data => {
			console.log(data)
			this.rateImage = data.rateImage
			console.log(this.rateImage)
			var rate = 0
			for (var i = 0; i < data.data.length; i++) {
				if(data.data[i].doctor_id == this.doctorData._id){
					console.log(data.data[i].doctor_id == this.doctorData._id)
					this.ratingArray.push(data.data[i])
					break;
				}
			}
			console.log(this.ratingArray)
			if(this.ratingArray[0]){
				this.getThisDocData = this.ratingArray[0]
				this.totalRating = this.ratingArray[0].rating
				console.log(this.totalRating)
				this.setMessage = this.ratingArray[0].message
				console.log(this.getThisDocData)

			}
			
		},err=>{
			console.log(err)
		})
	}

}
