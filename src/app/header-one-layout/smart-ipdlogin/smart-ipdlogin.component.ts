import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
import * as io from "socket.io-client";

@Component({
  selector: 'app-smart-ipdlogin',
  templateUrl: './smart-ipdlogin.component.html',
  styleUrls: ['./smart-ipdlogin.component.css'],
  providers: [UserService]
})
export class SmartIpdloginComponent implements OnInit {
    loginForm: FormGroup;  
    loginData
    remember_me
    doctor_id
    socket
    captcha_step_1= false

    constructor(private formBuilder:FormBuilder,private toastr: ToastrService,
      private userService:UserService,private router: Router) { }

    ngOnInit() {
        this.loginData = {}
        this.remember_me = false
        this.loginForm = this.formBuilder.group({
            'password': [null, Validators.compose([Validators.required])],
            'doctm_clinic_id': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'remember_me': [null]
        })
         this.socket = io(environment.socket)
    }

    LoginSmartIpd() {
        var arr
        this.userService.LoginSmartIpd(this.loginData).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.toastr.success(data.message, 'Success')
                arr = data.data
                this.doctor_id =arr.doctorsRegisteredForSmartClinic
                localStorage['isLoggedinSmartIpd'] = 1;
                localStorage['smartIpdDetails'] = JSON.stringify(data.data)
                   this.socket.emit('login',{
                    doctor_id: this.doctor_id._id,
                    type: 'SmartIPD'
                })
                this.router.navigate(['/header-four-layout'])
            } else {
                this.toastr.error(data.message, 'Error')
            }
        }, err => {
            console.log(err);
        })
    }
    resolved(captchaResponse: string, step) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(step=='step1'){
    this.captcha_step_1=true;
    }
 
    }

}
