import { Component, OnInit } from '@angular/core';
import { MissionService } from '../../providers/mission.service';
import { Subscription }   from 'rxjs';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service'; 

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from '../../../environments/environment.prod';
import * as io from "socket.io-client";
declare var $:any
declare var JQuery:any

@Component({
    selector: 'app-headersix',
    templateUrl: './headersix.component.html',
    styleUrls: ['./headersix.component.scss'],
    providers: [MissionService,UserService]
})
export class HeadersixComponent implements OnInit {

    doctorData
    nosidebar: string;
    hideElement: string;
    dropdownMenu: string;
    headertitle: string;
    subheaderTitle: string;
    subbottomTitle: boolean;
    prescbutton: string;
    
    clinicSetupList : boolean
    editProfileList : boolean
    settingDropdown :  boolean
    subscription: Subscription;
    diagnosticsDetail: boolean
    stock : boolean
    hoursIST
    minutesIST
    month
    day
    year
    numericMonth
    diagnosticsData
    reqData
    detailsForm:FormGroup
    testNameSuggestion
    socket
    constructor(private router: Router,private missionService: MissionService,
        private toastr: ToastrService, private userService: UserService, private formBuilder: FormBuilder) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails'])
                this.nosidebar = 'no-sidebar';
                this.stock = true
                if (event.url == '/header-six-layout/diagnostic-purchase'){
                    this.headertitle = "Diagnostic Purchase Entry"
                    this.stock = false
                    this.diagnosticsDetail = false
                }else if (event.url == '/header-six-layout/diagnostic-detail'){
                    this.headertitle = "Diagnostic  Details"
                    this.stock = false
                    this.diagnosticsDetail = false
                    // }else if (event.url == '/header-five-layout/purchase-book'){
                        //     this.headertitle = "Purchase Book"
                        //     this.stock = false
                        //     this.diagnosticsDetail = false
                        // }else if (event.url == '/header-five-layout/stock-valuation'){
                            //     this.headertitle = "Stock Valuation"
                            //     this.stock = false
                            //     this.diagnosticsDetail = false
                        }else if (event.url == '/header-six-layout/sales-bookd'){
                            this.headertitle = "Sales Book"
                            this.stock = false
                            this.diagnosticsDetail = false
                        }else if (event.url == '/header-six-layout/test-catalogue'){
                            this.headertitle = "Test Catalogue"
                            this.stock = false
                            this.diagnosticsDetail = false
                        }else if (event.url == '/header-six-layout/dashboard-diagnostic'){
                            this.headertitle = "SmartDiagnostic "
                            this.stock = true
                            this.diagnosticsDetail = false
                        }else if (event.url == '/header-six-layout/sales-entry-diagnostics'){
                            this.headertitle = "Sales Entry Diagnostics "
                            this.stock = false
                            this.diagnosticsDetail = false
                        }else if (event.url == '/header-six-layout/sales-by-diagnostics'){
                            this.headertitle = "Sales By Diagnostics "
                            this.stock = false
                            this.diagnosticsDetail = false
                        }else if (event.url == '/header-six-layout/diagnostics-progress'){
                            this.headertitle = "Diagnostics Progress Today"
                            this.diagnosticsDetail = false
                            this.stock = false
                            // }else if (event.url == '/header-five-layout/sales-entry'){
                                //     this.headertitle = "Sales Entry"
                                //     this.stock = false
                                //     this.diagnosticsDetail = false
                                // } else if (event.url == '/header-five-layout/dashboard-diagnostics'){
                                    //     for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
                                        //         if(this.diagnosticsData.doctorsRegisteredForSmartClinic[i].type_of_doctor == "admin_doctor"){
                                            //             this.headertitle = "SmartDiagnostics "+ this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_details.clinic_name
                                            //             break
                                            //         }
                                            //     }
                                            //     this.diagnosticsDetail = false
                                        }
                                    }
                                });
}

ngOnInit() {
    this.reqData={}
    this.reqData.category = ""
    this.reqData.testName= ""
    this.reqData.discount = 0
    this.socket = io(environment.socket)
    this.nosidebar = 'no-sidebar';
    $('[data-toggle="tooltip"]').tooltip()
    this.GetSmartDiagnosticsDataAfterLogin()
    this.detailsForm = this.formBuilder.group({
        'category':  [null, Validators.compose([Validators.required,])],
        'discount': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
            Validators.minLength(0),Validators.maxLength(3), Validators.min(0), Validators.max(100)])],
        'rate':  [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*')])],
        'testName': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],

    })
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330;
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    this.hoursIST = ISTTime.getHours()
    this.minutesIST = ISTTime.getMinutes()
    setInterval(() => {
        this.getCurrentTime()
    }, 60000);

    var options = {
        month: 'short'
    };
    var today = new Date();
    this.month = today.toLocaleDateString("en-IN", options);
    this.day = new Date().getDate()
    this.year = new Date().getFullYear()
    this.numericMonth = new Date().getMonth() + 1

    this.testNameSuggestion = []
}

GetSmartDiagnosticsDataAfterLogin(){
    let object = {
        smart_diagnostics_id : this.diagnosticsData.dataSmartDiagnostics._id
    }
    this.userService.GetSmartDiagnosticsDataAfterLogin(object).subscribe(data => {
        console.log(data)
        if (data.response == true) {
            var dataToStore = {
                dataSmartDiagnostics: data.dataSmartDiagnostics,
                doctorsRegisteredForSmartClinic: data.doctorsRegisteredForSmartClinic,
                doctorsOfSameClinic: data.doctorsOfSameClinic
            }
            localStorage['smartDiagnosticsDetails'] = JSON.stringify(dataToStore)
            for (var i = 0; i < dataToStore.doctorsRegisteredForSmartClinic.length; i++) {
                if(dataToStore.doctorsRegisteredForSmartClinic[i].type_of_doctor == "admin_doctor"){
                    this.headertitle = "SmartDiagnostics "+ dataToStore.doctorsRegisteredForSmartClinic[i].clinic_details.clinic_name
                    break
                }
            }
        }       
    }, err => {
        console.log(err);
    })
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
    this.socket.emit('logout',{'doctor_id':this.diagnosticsData._id})
    localStorage.removeItem(localStorage['smartDiagnosticsDetails']);
    localStorage.removeItem('isLoggedinSmartDiagnostics');
    this.router.navigate(['/']); 
}

submitForm(){
    let object = {
        smart_diagnostics_id : this.diagnosticsData.dataSmartDiagnostics._id,
        category: this.reqData.category,
        name: this.reqData.testName,
        rate: this.reqData.rate,
        discount: this.reqData.discount
    }
    this.userService.AddTestBySmartDiagnostics(object).subscribe(data => {
        console.log(data)
        if (data.response == true) {
            // $("#tst-entry").modal("hide");
            this.toastr.success(data.message,"Success")
            this.ngOnInit()
        } else{
            this.toastr.error(data.message,"Error")
        }      
    }, err => {
        console.log(err);
    })
}

reset(){
    this.detailsForm.reset()
    this.reqData={}
    this.reqData.category = ""
    this.reqData.discount = 0
}

getCurrentTime(){
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330;
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    this.hoursIST = ISTTime.getHours()
    this.minutesIST = ISTTime.getMinutes()
}

getMin(){
    if(this.minutesIST<10){
        return "0"+this.minutesIST
    }else{
        return this.minutesIST
    }
}

onTextChange(type, suggestion) {
    var type
    if (type == 'PATHOLOGY') {
        type = 'Pathology'
    } else if (type == 'ULTRASOUND') {
        type = 'Ultrasound'
    } else if (type == 'AUDIOMETRY') {
        type = 'Audiometry'
    } else if (type == 'BONE DENSITOMETRY') {
        type = 'Bone densitometry'
    } else if (type == 'DOPPLER STUDIES') {
        type = 'Doppler Studies'
    } else if (type == 'MAMMOGRAPHY') {
        type = 'Mammograaphy'
    } else if (type == 'UROFLOWMETRY') {
        type = 'Uroflowmetry'
    } else if (type == 'Nerve Test') {
        type = 'NERVE TEST'
    } else if (type == 'Eye Tests') {
        type = 'Eye Test'
    }
    this.testNameSuggestion = []
    var object = {
        type: type,
        suggestion: suggestion
    }        
    this.userService.SearchSuggestion(object).subscribe(data => {
        console.log(data)
        if (data.response == true) {
            this.testNameSuggestion = data.data
        }
    }, err => {
        console.log(err);
    })
}
onChange(event){
    event= this.reqData.testName=""
    event =this.testNameSuggestion=[]
}
}
