import { Component, ElementRef, NgZone, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-ongoprescription',
  templateUrl: './dashboard-ongoprescription.component.html',
  styleUrls: ['./dashboard-ongoprescription.component.css']
})
export class DashboardOngoprescriptionComponent implements OnInit {

  stepOneForm: FormGroup;
  registrationData
  doctorData
  loading
  patientListReg

    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }

      constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
        private userService: UserService, private router: Router) {}

  	ngOnInit() {
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        console.log(this.doctorData)
        this.registrationData = {}
        this.registrationData.dob = new Date()
        this.registrationData.gender = "Select"
        this.stepOneForm = this.formBuilder.group({
            'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(10), Validators.maxLength(10)
            ])],
            'name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
            'date': [null, Validators.compose([Validators.required])],
            'gender': [null, Validators.compose([Validators.required])],
            'email1': [null, Validators.compose([Validators.pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
        })
        this.registrationData.gender =''
  	}

    NewRegistration(){
        var newDate = new Date()
        newDate.setDate(newDate.getDate() + 1)
        if(this.registrationData.phone=="" || this.registrationData.phone == null || isNaN(this.registrationData.phone)){
            this.toastr.warning("Invalid Phone","Warning")
            return
        }
        if(this.registrationData.name=="" || this.registrationData.name==null || !isNaN(this.registrationData.name)){
            this.toastr.warning("Invalid Name","Warning")
            return
        }
        if((this.registrationData.dob=="" || this.registrationData.dob==null)){
            this.toastr.warning("Invalid date of birth","Warning")
            return
        }else if(new Date(this.registrationData.dob).setHours(0,0,0,0) >= new Date(newDate).setHours(0, 0, 0, 0)){
            console.log(new Date().getDate()+1)
            this.toastr.warning("Invalid date of birth","Warning")
            return
        }
        if(this.registrationData.gender=="Select"){
            this.toastr.warning("Please select gender","Warning")
            return
        }

        var ob ;
        ob = {}
        ob.registration = this.registrationData
        ob.registration.type = 'Walk-in'
        ob.consultationDoctor = this.doctorData._id
        ob.clinic_id = this.doctorData.doctm_clinic_id
        ob.smart_assistant_id = undefined
        if(this.doctorData.smart_assistant_id){
            ob.smart_assistant_id = this.doctorData.smart_assistant_id
        }
        ob.lat = 0   
        ob.lng = 0  
        ob.registration.email = this.registrationData.email
        ob.registration.isOtg = true
        console.log(ob)
        this.loading = true
        this.userService.NewRegistration(ob).subscribe(data => {
            // this.loading = false
            console.log(data)
            if (data.response == true) {
                this.toastr.success(data.message,"Success")
                localStorage['consultingPatient']=JSON.stringify(data.data)
                this.router.navigate(['header-two-layout/dashboard-prescription-pad'])     
            }else{
                this.toastr.error(data.message,"Error")
            }
        }, err => {
            console.log(err);
        })
    }

    findPatientAppointmentByPhone(data) {
        if(data.length<10){
            this.toastr.warning("Please fill atleast 10 digits number", "Warning")
            return
        }
        if (!isNaN(data)) {
            data = data.trim() 
            if(data.length>0){                
                let ob 
                ob = {}
                ob.mobile = data
                ob.clinic_id = this.doctorData.doctm_clinic_id
                this.patientListReg = []
                this.userService.GetPatientDetail(ob).subscribe(dataReceived => {
                    console.log(dataReceived)
                    if (dataReceived.response == true) {
                        this.registrationData.name = dataReceived.data[0].name
                        this.registrationData.dob = dataReceived.data[0].dob
                        this.registrationData.gender = dataReceived.data[0].gender
                        this.patientListReg = dataReceived.data
                    }
                }, err => {
                    console.log(err);
                })
            }
        }else{
            this.toastr.warning("Invalid phone number","Warning")
        }
    }

}
