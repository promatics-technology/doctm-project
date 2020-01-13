import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';
import * as io from "socket.io-client";
@Component({
  selector: 'app-smart-clinic-login',
  templateUrl: './smart-clinic-login.component.html',
  styleUrls: ['./smart-clinic-login.component.css'],
  providers: [UserService]
})
export class SmartClinicLoginComponent implements OnInit {
  loginForm: FormGroup;	
  loginData
  remember_me
  doctor_id
  captcha_step_1 = false
  socket
  numberOfOnlineUser : Number;

  constructor(private formBuilder:FormBuilder,private toastr: ToastrService,
    private userService:UserService, private router: Router) { }

  ngOnInit() {
  	this.loginData = {}
  	this.remember_me = false
  	this.loginForm = this.formBuilder.group({
  		'password': [null, Validators.compose([Validators.required])],
      'doctm_clinic_id': [null, Validators.compose([Validators.required,Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
      'remember_me': [null]
    })
    this.socket = io(environment.socket)
    // this.socket.on('numberOfOnlineUser', (numberOfOnlineUser)=>{
    //   this.numberOfOnlineUser = numberOfOnlineUser
      
    // })

    console.log(this.numberOfOnlineUser)
  }

  LoginDoctor(){
    this.userService.LoginDoctor(this.loginData).subscribe(data=>{
      console.log(data)
      if(data.response == true){
        localStorage['isLoggedinDoctor']=1;
        this.toastr.success(data.message,'Success')   
        // if(this.remember_me == true){
          // alert(this.remember_me);
          console.log(data.data);
          this.doctor_id = data.data
          localStorage['doctorDetails']=JSON.stringify(data.data)
          localStorage['subscription_info']=JSON.stringify(data.data.subscription_id)

          // socket.on('counter', function (data) {

          //   $("#counter").text(data.count);

          // });
          // this.socket.emit('connect',{
          //   doctor_id: data._id
          // })
          this.socket.emit('login',{
            doctor_id: this.doctor_id._id,
            type: 'Doctor'
          })
            // } 
            this.router.navigate(['/header-two-layout/dashboard'])
          }else{
            this.toastr.error(data.message,'Error')          
          }
        },err=>{
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
