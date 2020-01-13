import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';
import { FormsModule,FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-write-to-us',
  templateUrl: './write-to-us.component.html',
  styleUrls: ['./write-to-us.component.css'],
  providers: [UserService],
})
export class WriteToUsComponent implements OnInit {
	reqData
	Form:FormGroup
  doctorData
  constructor(private UserService: UserService, 
  	private toastr: ToastrService, 
  	private router: Router,
  	private formBuilder: FormBuilder,
  	) 
  {
	this.doctorData = JSON.parse(localStorage['doctorDetails'])
  console.log(this.doctorData)
	this.Form = formBuilder.group({
			'subject':[null, Validators.compose([Validators.required])],
			'message':[null, Validators.compose([Validators.required,Validators.maxLength(150)])],
			
		});
   }

  ngOnInit() {
  	this.reqData={}
  }
  save(){
  	var obj={
  		subject:this.reqData.subject,
  		message:this.reqData.message,
  		doctor_name:this.doctorData.first_name,
      doctor_email:this.doctorData.email,
  	}
  	console.log(obj)
  	this.UserService.AddWriteToUs(obj).subscribe(data =>{
  		if(data.response){
  			this.toastr.success(data.message,'Success')
  			// this.ngOnInit()
        this.router.navigate(['/header-two-layout/dashboard'])
  		}else{
  			this.toastr.error(data.message,'error')
  		}
  	},err =>{
  		console.log(err)
  	})

  }

}
