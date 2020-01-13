import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smart-assistant-login',
  templateUrl: './smart-assistant-login.component.html',
  styleUrls: ['./smart-assistant-login.component.css'],
  providers: [UserService]
})
export class SmartAssistantLoginComponent implements OnInit {
    loginForm: FormGroup;	
    loginData
    remember_me
    captcha_step_1 = false

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
    }

    LoginSmartAssistant() {
        this.userService.LoginSmartAssistant(this.loginData).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.toastr.success(data.message, 'Success')
                localStorage['isLoggedinSmartAssistant'] = 1;
                localStorage['smartAssistantDetails'] = JSON.stringify(data.data)
                localStorage['subscription_info'] = JSON.stringify(data.data.subscription_id)
                this.router.navigate(['/header-three-layout/smartassistant'])
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
