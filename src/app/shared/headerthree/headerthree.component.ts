import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { environment } from '../../../environments/environment.prod';
import * as io from "socket.io-client";
declare var $:any
declare var JQuery:any

@Component({
  selector: 'app-headerthree',
  templateUrl: './headerthree.component.html',
  styleUrls: ['./headerthree.component.css'],
  providers: [UserService]
})
export class HeaderthreeComponent implements OnInit {
  nosidebar: string;
  hideElement: string;
  dropdownMenu: string;
  headertitle: string;
  subheaderTitle: string;
  subbottomTitle: boolean;
  prescbutton: string; 

  addViewDiv : boolean
  smartAssistantData
  currentDate
  doctorsOfSameClinic 
  doctorsRegisteredForSmartClinic 
  doctorItemId
  doctorToAdd
  smartAssiMob
  day
  month
  year
  socket
  smartAssiName
  form: FormGroup;
  showDashboardButton:boolean

  constructor(private formBuilder:FormBuilder,private router: Router,
    private userService:UserService,private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
      'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
        Validators.minLength(10), Validators.maxLength(10)
        ])]
    })
    this.showDashboardButton = false
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if ((event.url == '/header-three-layout/smartassistant' &&  '/header-three-layout/smartassistantappointmentList')){
          this.showDashboardButton = false
        }else{
          this.showDashboardButton = true 
        }
        // if(event.url.includes('/header-three-layout/smartassistantappointmentList')){
          //       this.headertitle = "Appointment List"
          //       this.hideElement = 'none';
          //       this.showDashboardButton = false
          //       // this.showHome = true
          //   }
        }
      });
    var today = new Date();
    var options = { month: 'short' };
    this.month = today.toLocaleDateString("en-IN", options);
    this.day = new Date().getDate()
    this.year = new Date().getFullYear()
    this.currentDate=this.month+' '+ this.day+', '+this.year;

  }

  ngOnInit() {
    this.nosidebar = 'no-sidebar';
    $('[data-toggle="tooltip"]').tooltip()
    this.socket = io(environment.socket)
    this.addViewDiv = false
    this.smartAssistantData = JSON.parse(localStorage['smartAssistantDetails'])
    console.log(this.smartAssistantData)
    this.GetSmartAssistantDataAfterLogin()

    this.doctorToAdd = ""
  }


  openDropdown(){
    if(this.dropdownMenu == 'active'){
      this.dropdownMenu = ''
    }else{
      this.dropdownMenu = 'active'
    }
  }

  sidebarclose(){
    if(this.nosidebar == 'no-sidebar'){
      this.nosidebar = ''
    }else{
      this.nosidebar = 'no-sidebar'
    }
  }

  signOut(){
    this.socket.emit('logout',{'doctor_id':this.smartAssistantData._id})
    // localStorage.clear();
    localStorage.removeItem(localStorage['smartAssistantDetails']);
    localStorage.removeItem('isLoggedinSmartAssistant');
    this.router.navigate(['/']); 
  }

  addViewDivClicked(){
    this.addViewDiv = !this.addViewDiv
  }

  getAddDoctorClass(){
    if (this.addViewDiv){
      return 'show-div'
    }else { 
      return ''
    }
  }

  GetSmartAssistantDataAfterLogin(){
    let object = {
      smart_assistant_id : this.smartAssistantData.dataSmartAssistant._id 
    }
    this.userService.GetSmartAssistantDataAfterLogin(object).subscribe(data => {
      console.log(data)
      var dataToStore = {
        dataSmartAssistant: data.dataSmartAssistant,
        doctorsRegisteredForSmartClinic: data.doctorsRegisteredForSmartClinic,
        doctorsOfSameClinic: data.doctorsOfSameClinic
      }
      localStorage['smartAssistantDetails'] = JSON.stringify(dataToStore)
      this.doctorsOfSameClinic = data.doctorsOfSameClinic
      this.doctorsRegisteredForSmartClinic = data.doctorsRegisteredForSmartClinic
      this.smartAssiMob = data.dataSmartAssistant.phone
      this.smartAssiName = data.dataSmartAssistant.name
    }, err => {
      console.log(err);
    })
  }

  addDcotorBySmartAssistant(data){
    if(data == null || data.trim().length < 11 || data.trim().length > 11 || this.doctorToAdd==""){
      this.toastr.error("Invalid doctor details","Error")
    }else{
      let object = {
        smart_assistant_id : this.smartAssistantData.dataSmartAssistant._id,
        doctor_id : this.doctorToAdd,
        doctorItemId : this.doctorItemId
      }
      this.userService.AddDcotorBySmartAssistant(object).subscribe(data => {
        console.log(data)
        if(data.response == true){
          this.toastr.success(data.message,"Success")
          this.ngOnInit()
        }else{
          this.toastr.error(data.message,"Error")
        }
      }, err => {
        console.log(err);
      })
    }
  }

  updateSmartAssistant(){
    let object = {
      smart_assistant_id : this.smartAssistantData.dataSmartAssistant.id, 
      smartAssiMob: this.smartAssiMob,
      smartAssiName: this.smartAssiName
    }
    this.userService.UpdateSmartAssistant(object).subscribe(data => {
      console.log(data)
      if(data.response == true){
        $("#personalDetailModal").modal("hide");
        this.toastr.success(data.message,"Success")
        this.ngOnInit()
      }else{
        this.toastr.error(data.message,"Error")
      }
    }, err => {
      console.log(err);
    })
  }
}
