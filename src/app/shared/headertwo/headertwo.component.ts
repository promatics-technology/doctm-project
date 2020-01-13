import { MissionService } from '../../providers/mission.service';
import { Subscription }   from 'rxjs';
import { Component, OnInit,  ViewChild, AfterViewInit  } from '@angular/core';
import { SubscriptionDetailsComponent } from "../../header-two-layout/subscription-details/subscription-details.component";
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { environment } from '../../../environments/environment.prod';
import * as io from "socket.io-client";
declare var $:any
declare var JQuery:any
import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


import { CustomDialogComponent } from '../../confirmation-popup/custom-dialog/custom-dialog.component'

@Component({
    selector: 'app-headertwo',
    templateUrl: './headertwo.component.html',
    styleUrls: ['./headertwo.component.scss'],
    providers: [MissionService,UserService, MatDialog]
})
export class HeaderTwoComponent implements OnInit {
	@ViewChild(SubscriptionDetailsComponent) child;
	message:string;

    userGuide
    userGuidePath
    loading
    plan
    doctorData
    nosidebar: string;
    hideElement: string;
    dropdownMenu: string;
    isExpired:boolean
    headertitle: string;
    subscriptionData
    start_date
    end_date
    subTotal
    subheaderTitle: string;
    subbottomTitle: boolean;
    prescbutton: string;
    showHome: boolean = false
    clinicSetupList : boolean
    editProfileList : boolean
    settingDropdown :  boolean
    diagnosticsDrowdown: boolean
    subscription: Subscription;
    dataIpd
    admin
    digitalPrec: boolean
    check
    settingDropdown1
    socket
    trialData
    compareDate
    checkTrial
    services
    subscriptionInfo
    expiryDate
    dd1
    month1
    th1
    helpText=[]
    year1
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false,
    }
    fromDate = new Date()
    toDate = new Date()
    fromDate1 = new Date()
    toDate1 = new Date()
    newDate = new Date()

    totalHours: number
    totalMin: number
    countMonday: number
    countTuesday: number
    countWednesday: number
    countThursday: number
    countFriday: number
    countSaturday: number
    countSunday: number
    avgConsTime: number
    timeArray
    avgTimeArray
    avgCtuPercentage
    doctorTotalWorkingMin
    activatedtab
    longestConsultationMin
    longestConsultationSec
    shortestConsultationMin
    shortestConsultationSec
    totalTimeUtilizedHours
    totalTimeUtilizedMin
    avgCtu
    avgTimePerPatient
    color = 'accent'
    value = 0
    classColor = ''
    lineChartData
    lineChartData1
    lineChartLabels
    lineChartLabels1


    constructor(private formBuilder:FormBuilder,private router: Router, private userService:UserService,private toastr: ToastrService, private missionService: MissionService, private datePipe: DatePipe,public dialog: MatDialog) {
        //this.services=JSON.parse(localStorage['doctorsOfSameClinic']);
        
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.nosidebar = 'no-sidebar';
                this.showHome = false
                if ((event.url.includes('/header-two-layout/dashboard-prescription')) || (event.url.includes('/header-two-layout/dashboard-prescription-pad'))){
                    if(event.url.includes('/header-two-layout/dashboard-prescription') && !event.url.includes('/header-two-layout/dashboard-prescription-pad')){
                        this.hideElement = 'onlyOne';
                        this.showHome = true
                    }else{
                        this.hideElement = 'none';
                        this.showHome = true
                    }
                    this.headertitle = 'CONSULTATION'
                    this.subbottomTitle = false;
                    this.showHome = true
                }else if((event.url.includes('/header-two-layout/dashboard-ongoprescription'))){
                    this.hideElement = 'prescription';
                    this.headertitle = 'ON-THE-GO PRESCRIPTION';
                    this.showHome = true

                    if(event.url.includes('/header-two-layout/dashboard-preset')){
                        this.subheaderTitle = 'Presets';
                        this.subbottomTitle = false;
                        this.prescbutton = 'preset';
                    }
                    else{
                        this.subheaderTitle = '';
                        this.subbottomTitle = false;
                        this.prescbutton = '';
                    }
                }else if(event.url.includes('/header-two-layout/dashboard-preset')){
                    this.hideElement = 'prescription';
                    this.headertitle = 'CREATE NEW PRESETS';
                }else if(event.url.includes('/header-two-layout/dashboard-savedpreset')){
                    this.subheaderTitle = 'Saved Presets';
                    this.hideElement = 'prescription';
                    this.headertitle = 'CONSULTATION';
                    this.prescbutton = 'savedpreset';
                    this.subbottomTitle = false;
                }else if(event.url.includes('/header-two-layout/dashboard-consultation-prescription')){
                    this.headertitle = "YOUR PRESCRIPTION ANALYTICS"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/dashboard-consultation-time')){
                    this.headertitle = "YOUR TIME ANALYTICS"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/dashboard-consultation-patient')){
                    this.headertitle = "YOUR OPD ANALYTICS"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/dashboard-consultation-treatment')){
                    this.headertitle = "CLINIC PHARMACY ANALYTICS"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/dashboard-consultation-diagnosis')){
                    this.headertitle = "CLINIC DIAGNOSTIC ANALYTICS"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/dashboard-consultation-investigation')){
                    this.headertitle = "CLINIC IPD ANALYTICS"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/opd-holiday')){
                    this.headertitle = "Set OPD Holidays"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/discharge-patient')){
                    this.getDoctor()
                    this.ngOnInit()
                }else if(event.url.includes('/header-two-layout/aoi')){
                    this.headertitle = "Area of Influence"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/clinic-summary-opd')){
                    this.headertitle = "CLINIC OPD"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/clinic-summary-pharmacy')){
                    this.headertitle = "CLINIC PHARMACY"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/clinic-summary-diagnostic')){
                    this.headertitle = "CLINIC DIAGNOSTICS"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/clinic-summary-ipd')){
                    this.headertitle = "CLINIC IPD"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/clinic-summary-all')){
                    this.headertitle = "CLINIC SUMMARY"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/doctor-appointments')){
                    this.headertitle = "Appointment List"
                    this.hideElement = 'none';
                    // this.showHome = true

                }else if(event.url.includes('/header-two-layout/dashboard-progress')){
                    this.headertitle = "PROGRESS TODAY"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/edit-profile/clinic_services')){
                    this.headertitle = "Update Clinic Services"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/edit-profile/clinic_doctors')){
                    this.headertitle = " Doctors"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/search-records')){
                    this.headertitle = " Search Records"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/delete-records')){
                    this.headertitle = "Delete Records"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/dashboard-clinic-report')){
                    this.headertitle = " Clinic Records"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/dashboard-referral')){
                    this.headertitle = " Referrals"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/sms')){
                    this.headertitle = " SMS"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/edit-profile/clinic_services')){
                    this.headertitle = "Clinic Services"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/edit-profile/change_schedule')){
                    this.headertitle = "Edit Schedule"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/edit-profile/edit_clinic')){
                    this.headertitle = "Edit Clinic Details"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/edit-profile/pad_customization')){
                    this.headertitle = "Edit Prescription Pad"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/edit-profile/change_password')){
                    this.headertitle = "Change Password / PIN"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/edit-profile/smart_assistant')){
                    this.headertitle = "SmartAssistant"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/edit-profile/smart_ipd')){
                    this.headertitle = "SmartIPD"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/edit-profile/smart_diagnostics')){
                    this.headertitle = "SmartDiagnostics"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/edit-profile/smart_pharmacy')){
                    this.headertitle = "SmartPharmacy"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/edit-profile')){
                    this.headertitle = "Edit Profile"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/share')){
                    this.headertitle = "Share"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/dashboard-prescription-pad-off')){
                    this.headertitle = "CONSULTATION PAD"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/rate-clinic')){
                    this.headertitle = "Rate Us"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/faq-doctor')){
                    this.headertitle = "FAQ"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/tutorials-doctor')){
                    this.headertitle = "Tutorials"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/subscription')){
                    this.headertitle = "Subscription Details"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/opd')){
                    this.headertitle = "ANALYTICS CLINIC SCORE"
                    this.hideElement = 'none';
                    this.showHome = true
                }else if(event.url.includes('/header-two-layout/write-to-us')){
                    this.headertitle = "Write To Us"
                    this.hideElement = 'none';
                    this.showHome = true
                }else {
                    this.getDoctor()
                }
            }
        });



}


ngDoCheck() {
    var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    if(localStorage['subscription_info']){
        // console.log(localStorage['subscription_info']);
        if(this.isJson(localStorage['subscription_info'])){
            this.subscriptionInfo=JSON.parse(localStorage['subscription_info'])
        }else{
            this.subscriptionInfo=localStorage['subscription_info']
        }
        if(this.subscriptionInfo){
            this.expiryDate=this.subscriptionInfo.trial_last_date;
        }
        var today=new Date();
        var someDate = new Date(this.expiryDate);
        
        if(someDate.setHours(0, 0, 0, 0)==today.setHours(0, 0, 0, 0)){
            this.isExpired=true
        }else{
            this.isExpired=false
        }
        
        this.dd1 = someDate.getDate();
        this.th1=this.nth(this.dd1);
        this.month1 = mlist[someDate.getMonth()];
        this.year1 = someDate.getFullYear(); 
        if(this.subscriptionInfo){
            this.plan=this.subscriptionInfo.subscription_id;
        }
    }
}

nth(d) {
    if (d > 3 && d < 21) return 'th'; 
    switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}

ngOnInit() {
    this.userGuidePath = environment.user_guide
    this.downloadUserGuide()
    //alert('here');
    this.nosidebar = 'no-sidebar';
    
    this.doctorData=JSON.parse(localStorage['doctorDetails'])
    this.services=this.doctorData.clinic_services;
    // console.log(this.services);
    // console.log(this.doctorData);
    //this.services=this.services.clinic_services;
    // console.log(this.doctorData.services_purchased)
    $('[data-toggle="tooltip"]').tooltip()
    this.socket = io(environment.socket)
    this.GetDoctorDetail()
    // console.log(this.digitalPrec)
    /////////////////SOCKET ON//////////////////////
    this.socket.emit('room join',{
        room_id: this.doctorData.smart_assistant_id
    })        
    this.socket.emit('room join',{
        room_id: this.doctorData.smart_pharmacy_id
    })
    this.socket.emit('room join',{
        room_id: this.doctorData.smart_diagnostics_id
    })
    this.fetchSubscription();
            // this.doctorData = JSON.parse(localStorage['doctorDetails'])
        // console.log(this.doctorData)
        this.newDate.setDate(this.newDate.getDate() + 1)
        this.fromDate1.setDate(this.fromDate1.getDate() - 6)
        this.activatedtab = 0
        this.activatetab(1)
    /////////////////SOCKET ON end//////////////////////
    this.getHelpText()
    
}

activatetab(ii) {
    this.totalHours = 0
    this.totalMin = 0
    this.countMonday = 0
    this.countTuesday = 0
    this.countWednesday = 0
    this.countThursday = 0
    this.countFriday = 0
    this.countSaturday = 0
    this.countSunday = 0
    this.avgConsTime = 0
    var localDateArray = []
    this.timeArray = []
    this.avgTimeArray = []
    this.avgCtuPercentage = 0
    this.doctorTotalWorkingMin = 0
    this.activatedtab = ii
    var object
    object = {}
    var date = new Date()
    object.doctor_id = this.doctorData._id
    object.end_date = new Date()
    if (ii == 1) {
        object.start_date = date
    } 
    // else if (ii == 1) {
        //     object.start_date = new Date(date.setDate(date.getDate() - 6))
        // } else if (ii == 2) {
            //     object.start_date = new Date(date.setDate(date.getDate() - 13))
            // } else if (ii == 3) {
                //     object.start_date = new Date(date.setMonth(date.getMonth() - 1))
                // } else if (ii == 4) {
                    //     object.start_date = new Date(date.setMonth(date.getMonth() - 3))
                    // } else if (ii == 5) {
                        //     object.start_date = new Date(date.setMonth(date.getMonth() - 6))
                        // } else if (ii == 6) {
                            //     object.start_date = new Date(date.setFullYear(date.getFullYear() - 1))
                            // } else if (ii == 7) {
                                //     object.start_date = new Date()
                                //     object.maximum = true
                                // }
                                // console.log(object)
                                this.fromDate = new Date(object.start_date)
                                this.toDate = new Date(object.end_date)
                                this.totalTimeUtilizedHours = 0
                                this.totalTimeUtilizedMin = 0
                                this.longestConsultationMin = 0
                                this.longestConsultationSec = 0
                                this.shortestConsultationMin = 0
                                this.shortestConsultationSec = 0
                                this.avgTimePerPatient = ""
                                var totalPatients = 0
                                var dateArray = []
                                this.loading = true
                                this.userService.TimeAnalytics(object).subscribe((result) => {
                                    // console.log(result)
                                    if (result.response) {
                                        if (result.totalTimeInSeconds.length > 0) {
                                            this.totalTimeUtilizedHours = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) / 3600)
                                            this.totalTimeUtilizedMin = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) % 3600)
                                            this.totalTimeUtilizedMin = Math.floor(this.totalTimeUtilizedMin / 60)
                                        }
                                        if (result.dataLongestConsultation.length > 0) {
                                            this.longestConsultationMin = Math.floor((result.dataLongestConsultation[0].totalSeconds) / 60)
                                            this.longestConsultationSec = Math.floor((result.dataLongestConsultation[0].totalSeconds) % 60)
                                        }
                                        if (result.dataShortestConsultation.length > 0) {
                                            this.shortestConsultationMin = Math.floor((result.dataShortestConsultation[0].totalSeconds) / 60)
                                            this.shortestConsultationSec = Math.floor((result.dataShortestConsultation[0].totalSeconds) % 60)
                                        }
                                        var avgTotalPatientSeconds = 0
                                        var addTime = 0
                                        var totalTimeInSeconds = 0
                                        if (result.dataTotalPatientsDischarged.length > 0) {
                                            for (var i = 0; i < result.dataTotalPatientsDischarged.length; i++) {
                                                var totalPatientSeconds
                                                totalPatientSeconds = 0
                                                dateArray.push(this.datePipe.transform(result.dataTotalPatientsDischarged[i].data[0].createAt, 'yyyy-MM-dd'))
                                                for (var j = 0; j < result.dataTotalPatientsDischarged[i].data.length; j++) {
                                                    totalPatients++
                                                    totalPatientSeconds = (result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)) / 3600
                                                    totalTimeInSeconds += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)
                                                    addTime += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)
                                                }
                                                avgTotalPatientSeconds = (totalPatientSeconds / result.dataTotalPatientsDischarged[i].data.length) * 60
                                                this.timeArray.push(totalPatientSeconds.toFixed(3))
                                                this.avgTimeArray.push(avgTotalPatientSeconds.toFixed(3))
                                            }
                                            ///////////// hours logic /////////////////////////////
                                            var daysOfYear = [];
                                            for (var d = this.fromDate; d <= this.toDate; d.setDate(d.getDate() + 1)) {
                                                daysOfYear.push(new Date(d));
                                            }
                                            for (var i = 0; i < daysOfYear.length; i++) {
                                                localDateArray.push(this.datePipe.transform(daysOfYear[i], 'EEEE'))
                                            }
                                            for (var i = 0; i < localDateArray.length; i++) {
                                                if (localDateArray[i] == "Monday") {
                                                    this.countMonday++
                                                } else if (localDateArray[i] == "Tuesday") {
                                                    this.countTuesday++
                                                } else if (localDateArray[i] == "Wednesday") {
                                                    this.countWednesday++
                                                } else if (localDateArray[i] == "Thursday") {
                                                    this.countThursday++
                                                } else if (localDateArray[i] == "Friday") {
                                                    this.countFriday++
                                                } else if (localDateArray[i] == "Saturday") {
                                                    this.countSaturday++
                                                } else if (localDateArray[i] == "Sunday") {
                                                    this.countSunday++
                                                }
                                            }
                                            var total_diff: number = 0
                                            this.avgConsTime = this.doctorData.avgConsTime
                                            for (var j = 0; j < this.doctorData.consultation_schedule.length; j++) {
                                                var min_diff: number = 0
                                                var hour_diff: number = 0
                                                for (var k = 0; k < this.doctorData.consultation_schedule[j].shifts.length; k++) {
                                                    min_diff += parseInt(this.doctorData.consultation_schedule[j].shifts[k].toTime.minute) - parseInt(this.doctorData.consultation_schedule[j].shifts[k].fromTime.minute)
                                                    hour_diff += parseInt(this.doctorData.consultation_schedule[j].shifts[k].toTime.hour) - parseInt(this.doctorData.consultation_schedule[j].shifts[k].fromTime.hour)
                                                    total_diff = min_diff + (hour_diff * 60)
                                                }
                                                if (this.doctorData.consultation_schedule[j].Monday == true) {
                                                    this.totalMin += (this.countMonday * total_diff)
                                                }
                                                if (this.doctorData.consultation_schedule[j].Tuesday == true) {
                                                    this.totalMin += (this.countTuesday * total_diff)
                                                }
                                                if (this.doctorData.consultation_schedule[j].Wednesday == true) {
                                                    this.totalMin += (this.countWednesday * total_diff)
                                                }
                                                if (this.doctorData.consultation_schedule[j].Thursday == true) {
                                                    this.totalMin += (this.countThursday * total_diff)
                                                }
                                                if (this.doctorData.consultation_schedule[j].Friday == true) {
                                                    this.totalMin += (this.countFriday * total_diff)
                                                }
                                                if (this.doctorData.consultation_schedule[j].Saturday == true) {
                                                    this.totalMin += (this.countSaturday * total_diff)
                                                }
                                                if (this.doctorData.consultation_schedule[j].Sunday == true) {
                                                    this.totalMin += (this.countSunday * total_diff)
                                                }
                                            }
                                            this.doctorTotalWorkingMin = this.totalMin
                                            this.totalHours = this.totalMin / 60
                                            this.totalHours = Math.trunc(this.totalHours)
                                            this.totalMin = this.totalMin % 60
                                            // console.log(this.totalTimeUtilizedMin,this.doctorTotalWorkingMin)
                                            this.value = Math.ceil(this.getData((this.totalTimeUtilizedMin/this.doctorTotalWorkingMin)*100))
                                            if(this.value < 30){
                                                this.classColor = 'red'
                                            }else if(this.value < 50){
                                                this.classColor = 'yellow'
                                            }else if(this.value < 70){
                                                this.classColor = 'blue'
                                            }else{
                                                this.classColor = 'green'
                                            }
                                            ///////////////////////////////////////////////////////
                                        }
                                        this.avgCtuPercentage = (addTime * 100) / (this.totalHours*3600)
                                        this.lineChartData = [{
                                            data: this.timeArray,
                                            label: 'Total Hours'
                                        }, ];
                                        this.lineChartData1 = [{
                                            data: this.avgTimeArray,
                                            label: 'Total Avg Min'
                                        }, ];
                                        this.lineChartLabels = dateArray
                                        this.lineChartLabels1 = dateArray
                                        var min = parseInt(this.getData(this.getData(totalTimeInSeconds / totalPatients)/60))
                                        var sec = parseInt(this.getData(this.getData(totalTimeInSeconds / totalPatients)%60))
                                        this.avgTimePerPatient = min +":"+sec
                                        
                                        var newAvgTimeArray = []
                                        for (var i = 0; i < dateArray.length; i++) {
                                            newAvgTimeArray.push(dateArray[i])
                                        }
                                        ///////////////////////////// Date Sort Logic //////////////////////
                                        this.timeSort(dateArray, this.timeArray);
                                        this.avgTimeSort(newAvgTimeArray, this.avgTimeArray);
                                        ///////////////////////////// End sort Logic ////////////////////////

                                        // console.log(this.totalMin)
                                    }
                                    this.loading = false
                                }, err => {
                                    console.log(err)
                                })
}
getData(data) {
    if (isNaN(data)) {
        return 0
    } else if (data % 1 != 0) {
        return data.toFixed(2)
    } else {
        return data
    }
}

getClass(i) {
    if (i == this.activatedtab) {
        return 'active'
    } else if (i < this.activatedtab) {
        return 'completed'
    }

}
timeSort(a, b) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                var temp = b[i];
                b[i] = b[i + 1];
                b[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    var newDateArray = []
    for (var i = 0; i < a.length; i++) {
        newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'))
    }
    this.lineChartLabels = newDateArray
}
avgTimeSort(a, b) {
    var swapped1;
    do {
        swapped1 = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                var temp = b[i];
                b[i] = b[i + 1];
                b[i + 1] = temp;
                swapped1 = true;
            }
        }
    } while (swapped1);
    var newDateArray1 = []
    for (var i = 0; i < a.length; i++) {
        newDateArray1.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'))
    }
    this.lineChartLabels1 = newDateArray1
}
getHelpText(){
    this.userService.GetHelpText().subscribe(data=>{

        if(data.response==true){
            this.helpText = data.data
            // console.log(this.helpText);
        }else{
            this.toastr.error(data.message,"Error")
        }
    })   
}


isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
ngOnDestroy(){
    /////////////////SOCKET ON//////////////////////        
    this.loading = true
    var object = {
        itemId: this.doctorData.itemId,
        reg_id: 0
    }
    this.userService.UpdateConsultationInProgress(object).subscribe(data => {
        this.loading = false
        // console.log(data)
        if (data.response == true) {
            localStorage['doctorDetails']=JSON.stringify(data.data)
            this.socket.emit('room leave',{
                room_id: this.doctorData.smart_assistant_id
            })
            this.socket.emit('room leave',{
                room_id: this.doctorData.smart_pharmacy_id
            })
            this.socket.emit('room leave',{
                room_id: this.doctorData.smart_diagnostics_id
            })
        }
    }, err => {
        console.log(err);
    })
    //////////////-----SOCKET ON------////////////////
}
fetchSubscription(){
    this.loading=true
    var ob={doctor_id:this.doctorData._id};
    this.userService.fetchSubscription(ob).subscribe((data)=>{
        this.loading=false;
        // console.log(data)
        if(data.response){
            this.subscriptionData = data
            if(this.subscriptionData.subscription.start_at){
                this.start_date=new Date(this.subscriptionData.subscription.start_at*1000);
                this.start_date = this.start_date.toGMTString();
				/* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
				this.start_date = this.start_date.toLocaleDateString('in-IN', options)(); */
				
            }
            //alert(this.subscriptionData.subscription.start_at);
            if(this.subscriptionData.subscription.current_end){
                this.end_date=new Date(this.subscriptionData.subscription.current_end*1000);
                this.end_date = this.end_date.toGMTString();
				/* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
				this.end_date = this.end_date.toLocaleDateString('in-IN', options); */
            }
            this.subscriptionData.purchaseInformation.forEach(purchase=>{
                if(purchase.Price){
                    this.subTotal+=parseFloat(purchase.Price);
                }
            })
        }

    },err=>{
        console.log(err)
    })
}
getDoctor(){
    this.doctorData=JSON.parse(localStorage['doctorDetails'])
    this.hideElement = 'global';
    this.headertitle = 'Welcome Dr. '+this.doctorData.first_name //+" "+this.doctorData.last_name
    this.subbottomTitle = false;
    this.prescbutton = '';
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

    this.socket.emit('logout',{'doctor_id':this.doctorData._id})
    localStorage.removeItem(localStorage['doctorDetails']);
    localStorage.removeItem('isLoggedinDoctor');
    this.router.navigate(['/']);
}

openDropdownList(type){
    if(type=='Clinic'){
        this.clinicSetupList = !this.clinicSetupList
    }else if(type=='Profile'){
        this.editProfileList = !this.editProfileList
    }else  if(type=='Settings'){
        this.settingDropdown = !this.settingDropdown
    }else  if(type=='Diagnostics'){
        this.diagnosticsDrowdown = !this.diagnosticsDrowdown
    }
}
openDropdownDownload(type){
    if(type=='Settings1'){
        this.settingDropdown1 = !this.settingDropdown1
    }
}

editProfile(data){
    this.router.navigate(['header-two-layout/edit-profile',data]); 
}

GetDoctorDetail() {
    this.dataIpd = 0
    this.userService.GetDoctorDetail(this.doctorData.itemId).subscribe(data => {
        // console.log('wooooooooooooooooooooo')
        // console.log(data)
        if(data.response==true){
            // console.log(data.data.digital_precipitation,"abcdefg")
            this.digitalPrec = data.data.digital_precipitation
            localStorage['doctorDetails']=JSON.stringify(data.data)
            localStorage['subscription_info']=JSON.stringify(data.data.subscription_id)
            this.dataIpd = data.dataIpd
            for (var i = 0; i < data.doctorsOfSameClinic.length; i++) {
                if(data.doctorsOfSameClinic[i]){
                    if(data.doctorsOfSameClinic[i].type_of_doctor == "admin_doctor"){
                        this.admin = data.doctorsOfSameClinic[i]
                        localStorage['doctorsOfSameClinic']=JSON.stringify(this.admin)
                        break
                    }
                }
            }
            this.GetSevenDaysTrialSubscription()
        }
    }, err => {
        console.log(err);
    }) 
}
checkDigital(event: any, id){
	if(!event.target.checked){
        this.doctorData.digital_precipitation=false;
        let dialogRef = this.dialog.open(CustomDialogComponent, {
            data:{
                header:"Note: Putting off the digital prescription will enable you to write hand written prescriptions with following changes.",
                body1:'1. Blank prescriptions with pre-filled patient details can now be printed by SmartAssistant. This blank prescriptions to be given to patients entering the consultation room.',
                body2:'2. You can see patient details and dispense them from your console. History, Consultation fee, Follow-up and Referral can still be done by you.',
                body3:'3. After the consultation the SmartAssistant can upload the hand written prescriptions for future reference.',
                btn1:'Continue',
                btn2:'Cancel'
            }
        });
        
        

        dialogRef.afterClosed().subscribe(result => {
            // console.log(result);
            // console.log('The dialog was closed');
            if (result == "yes") {
                //console.log(activity.id)
                
                var status;
                //alert(event.target.checked);
	/* 	if (event.target.checked) {
			status=true;
		}else{
			status=false;
		} */
        //console.log(!status);
        this.doctorData.digital_precipitation=event.target.checked;
        localStorage['doctorDetails']=JSON.stringify(this.doctorData);

        this.loading = true
        let object = {
            itemId:id,
            digital_precipitation:event.target.checked
        }
        // console.log(object)
        this.userService.ChangeDigitalPrescriptionStatus(object).subscribe(data => {
            // console.log(data)
            if(data.response){
                this.socket.emit('digitalPresc',{
                    room_id: this.doctorData.smart_assistant_id
                })
                // console.log(this.socket)
                this.router.navigate(['/header-two-layout/dashboard']);
                // window.location.reload()
                this.ngOnInit()
                this.toastr.success(data.message,"Succes")
            }else{
                this.toastr.success(data.message,"Error")
            }
            //alert(event.target.checked);
            this.loading = false
        }, err => {
            console.log(err);
        })
    }else{

        this.doctorData.digital_precipitation=true;
        //	this.ngOnInit()
    }
});
    }else{

        //console.log(activity.id)
        
        var status;
        //alert(event.target.checked);
	/* 	if (event.target.checked) {
			status=true;
		}else{
			status=false;
		} */
        //console.log(!status);
        this.doctorData.digital_precipitation=event.target.checked;
        localStorage['doctorDetails']=JSON.stringify(this.doctorData);

        this.loading = true
        let object = {
            itemId:id,
            digital_precipitation:event.target.checked
        }
        // console.log(object)
        this.userService.ChangeDigitalPrescriptionStatus(object).subscribe(data => {
            // console.log(data)
            if(data.response){
                this.socket.emit('digitalPresc',{
                    room_id: this.doctorData.smart_assistant_id
                })
                // console.log(this.socket)
                this.router.navigate(['/header-two-layout/dashboard']);
                // window.location.reload()
                this.ngOnInit()
                this.toastr.success(data.message,"Succes")
            }else{
                this.toastr.success(data.message,"Error")
            }
            //alert(event.target.checked);
            this.loading = false
        }, err => {
            console.log(err);
        })
        
    }
}

GetSevenDaysTrialSubscription(){
    this.userService.GetSevenDaysTrialSubscription().subscribe((data)=>{
        // console.log(data)
        if(data.response){
            this.trialData = data.data
            for (var i = 0; i < data.data.length; i++) {
                //console.log(data.data[i].start_date , this.compareDate)
                if(this.admin) {
                    if(this.admin._id == data.data[i].doctor_id){

                        // console.log(data.data[i].start_date)
                        var date  = new Date(data.data[i].start_date)
                        this.compareDate =  new Date(date.setDate(date.getDate()+6))
                        // console.log(this.compareDate)
                        if(data.data[i].free_plan == 'free'){
                            this.checkTrial = true
                        }
                    } 
                }
                if(this.datePipe.transform(data.data[i].start_date, 'dd/MM/yyyy') > this.datePipe.transform(this.compareDate, 'dd/MM/yyy')){
                    this.checkTrial = false
                }
            }
        }

    },err=>{
        console.log(err)
    })
}
checkService(service){
    // console.log(service);
    if(this.doctorData.services_purchased.length>0){
        if (this.doctorData.services_purchased.some(e => e.Item == service)) {
            return true;
        }
    }else{
        if(this.doctorData){
            // console.log(this.doctorData)
            if(this.doctorData.clinic_services){
                if(this.doctorData.clinic_services.Clinic_IPD==true && service=='Smart IPD' ){
                    return true;
                }
                if(this.doctorData.clinic_services.Clinic_Pharmacy==true && service=='Smart Pharmacy' ){
                    return true;
                }
                if(this.doctorData.clinic_services.Clinic_Diagnostics==true  && service=='Smart Diagnostics'){
                    return true;
                } 
                
            }
        }
    }
		/* //console.log(JSON.stringify(this.services));
		if(this.services.Clinic_IPD && service=='IPD'){
		return true;
		}
		if(this.services.Clinic_Diagnostics && service=='Diagnostics'){
		return true;
		}
		if(this.services.Clinic_Pharmacy && service=='Pharmacy'){
		return true;
    } */
    return false;
}

downloadUserGuide(){
    this.userGuide = {}
    this.userService.GetUserGuide().subscribe(data =>{
        if(data.response){
            this.userGuide = data.data
            // console.log(this.userGuide)
        }
    },err =>{
        console.log(err)
    })
}
}
