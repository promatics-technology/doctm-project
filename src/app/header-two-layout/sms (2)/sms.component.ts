import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
	sendSmsForm: FormGroup
	smsDetails
	doctorData
	loading: boolean
    checkAge
    checkfollowUp
    checkAppointments
    checkFreqPatients
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
        private userService: UserService, private router: Router) { }

      ngOnInit() {
 	 	this.doctorData = JSON.parse(localStorage['doctorDetails'])
	  	this.smsDetails = {}
	  	this.smsDetails.gender = "all"
	  	this.sendSmsForm = this.formBuilder.group({
            'fromAge': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(1), Validators.maxLength(3), Validators.max(100),
            ])],
            'toAge': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(1), Validators.maxLength(3),Validators.max(100)
            ])],
            'composeSms': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
           // 'sendTo': [null, Validators.compose([Validators.required])],
            'gender': [],
        })
        this.checkAge = false
        this.checkfollowUp = false
        this.checkAppointments = false
        this.checkFreqPatients = false
    }
    sendSMS(){
        this.smsDetails.smart_assistant_id = this.doctorData.smart_assistant_id
        this.smsDetails.doctor_id = this.doctorData._id
        console.log(this.smsDetails)
        this.loading = true
        console.log(this.checkAge,
        this.checkfollowUp,
        this.checkAppointments,
        this.checkFreqPatients)
        if(this.checkAge){
            this.smsDetails.age = true
            this.userService.SendSms(this.smsDetails).subscribe((data)=>{
                console.log(data)
                ///this.patientSelected = data.newUnique.length 
                this.loading = false
                },err=>{    
                console.log(err)
            })
        }
                else if(this.checkfollowUp){
            this.smsDetails.followUps = true
            this.userService.SendSms(this.smsDetails).subscribe((data)=>{
                console.log(data)
                ///this.patientSelected = data.newUnique.length 
                this.loading = false
                },err=>{    
                console.log(err)
            })
        }
        else if(this.checkAppointments){
            this.smsDetails.appointments = true
            this.userService.SendSms(this.smsDetails).subscribe((data)=>{
                console.log(data)
                ///this.patientSelected = data.newUnique.length 
                this.loading = false
                },err=>{    
                console.log(err)
            })
        }
        else if(this.checkFreqPatients){
            this.smsDetails.freqPatients = true
            this.userService.SendSms(this.smsDetails).subscribe((data)=>{
                console.log(data)
                ///this.patientSelected = data.newUnique.length 
                this.loading = false
                },err=>{    
                console.log(err)
            })
        }
        // this.userService.SendSms(this.smsDetails).subscribe((data)=>{
        //     console.log(data)
        //     ///this.patientSelected = data.newUnique.length 
        //     this.loading = false
        //     },err=>{    
        //     console.log(err)
        // })

     //  	console.log(this.smsDetails)
     //  	this.userService.SendSms(this.smsDetails).subscribe((data)=>{
    	// 	console.log(data)
    	// 	this.patientSelected = data.newUnique.length 
    	// 	this.loading = false
    	// 	},err=>{	
    	// 	console.log(err)
    	// })
    }

}
