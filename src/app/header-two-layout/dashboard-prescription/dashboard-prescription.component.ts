import { Component, OnInit, OnDestroy } from '@angular/core';
import { DndDropEvent, DropEffect } from "ngx-drag-drop";
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from '../../../environments/environment.prod';
import * as io from "socket.io-client";
import { DatePipe } from '@angular/common';
// import { mouseWheelZoom } from 'mouse-wheel-zoom';
declare var $;
declare var wheelzoom;

@Component({
    selector: 'app-dashboard-prescription',
    templateUrl: './dashboard-prescription.component.html',
    styleUrls: ['./dashboard-prescription.component.css'],
    providers:[UserService]
})
export class DashboardPrescriptionComponent implements OnInit {
    uploadedPrescriptionPath
    listOne = [
    {name:'John',image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F',age:22},
    {name:'Name2' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F',age:23},
    {name:'Name3' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F',age:24},
    {name:'Name4' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F',age:25},
    {name:'Name5' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F',age:26},
    {name:'Name6' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F',age:27},
    {name:'Name7' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F',age:28}
    ];

    listOne2 = [
    {name:'John (4)',image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F Ref',age:22},
    {name:'Name2 (4)' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F',age:23},
    {name:'Name3 (New)' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F Ref',age:24},
    {name:'Name4' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F',age:25},
    {name:'Name5 (3)' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F Ref',age:26},
    {name:'Name6' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F',age:27},
    {name:'Name7' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F Ref',age:28}
    ];

    listOne3 = [
    {name:'John (5)',image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F ',age:22},
    {name:'Name2 (5)' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F Ref',age:23},
    {name:'Name3 (1)' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F',age:24},
    {name:'Name4 (New)' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F Ref',age:25},
    {name:'Name5' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F',age:26},
    {name:'Name6' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F Ref',age:27},
    {name:'Name7' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F',age:28}
    ];

    doctorData
    month
    day
    year	
    numericMonth
    dataRegistration
    dataAppointment
    pateintPicPath
    dataDispensedPatients
    loading = false
    ///prescription
    finalPreConditions
    bodyIndicatorSelected
    bodyIndicatorComplete
    finalAllergy
    findingsSelected
    symptomsSelected
    diagnosisSelected
    tempMedicationArray
    itemsfinding
    itemsymptoms
    itemsdiagnosis
    treatmentStatus
    investigationStatus
    suregeryOptionsTop
    suregeryOptions
    inputBox
    medication
    medicationStatus
    medicationTabArray
    medicationCapArray
    medicationSypArray
    medicationSuspArray
    medicationEmulsnArray
    medicationInjArray
    medicationCreamArray
    medicationGelArray
    medicationDropsArray
    medicationPowderArray
    medicationAerosolsArray
    medicationMouthWashArray
    medicationSolutionArray
    medicationLotionArray
    medicationOintmentArray
    symptomsComplete
    diagnosisComplete
    treatmentComplete
    treatmentArray
    investigationIndicatorComplete
    investigationArray
    surgeryComplete
    surgerySelectedArray
    instructionsComplete
    instructionsSelected
    medicationComplete
    currentVaccinationComplete
    finalCurrentVaccinationArray
    dueVaccinationComplete
    finalDueVaccinationArray
    eyePresComplete
    finalRightOD
    finalLeftOD
    followDaysComplete
    followUpMonth
    followUpDay
    followUpYear
    followUpDays: number = 0
    finalfollowUpDays: number = 0
    followUpDate = new Date()
    minutes: number
    seconds: number
    languageOptionSelected
    allShifts
    allShiftsClosed
    dispensedPatient
    ///prescription
    lastVisit
    countLastVisit

    socket
    
    prescription_id
    prescription_image
    doctorsDetails
    consultingPatient=<any>{}
    reqData
    referDoctorName
    //history
    day_history
    month_history
    year_history
    numericMonth_history
    preConditionComplete_history
    finalPreConditions_history
    bodyIndicatorComplete_history
    bodyIndicatorSelected_history
    allergyComplete_history
    finalAllergy_history
    findingsComplete_history
    findingsSelected_history
    symptomsComplete_history
    symptomsSelected_history
    diagnosisComplete_history
    diagnosisSelected_history
    medicationComplete_history
    tempMedicationArray_history
    vaccinationComplete_history
    currentVaccinationComplete_history
    finalCurrentVaccinationArray_history
    dueVaccinationComplete_history
    finalDueVaccinationArray_history
    vaccinationDate_history
    instructionsComplete_history
    instructionsSelected_history
    investigationIndicatorComplete_history
    investigationArray_history
    treatmentComplete_history
    treatmentArray_history
    surgeryComplete_history
    surgerySelectedArray_history
    eyePresComplete_history
    finalRightOD_history
    finalLeftOD_history
    //history
    reportPic
    helpText=[]
    experience:number
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
    // wheelzoom
    constructor(private formBuilder:FormBuilder,private toastr: ToastrService,
        private userService:UserService,private router: Router,private datePipe: DatePipe) {
        this.uploadedPrescriptionPath=  environment.uploadedPrescriptionPath


        // const wz = mouseWheelZoom({
            //     element: document.querySelector('[data-wheel-zoom]'),
            //     zoomStep: .25  
            // });
            // wz.reset();
        }

        ngAfterViewInit(){
            this.consultingPatient = {}
            this.AllPatinetsForTodayDoctor()
        }
        ngOnInit() {
            $(".custom-modal").hide();
            $(".kk").click(function(){
                $(".custom-modal").fadeIn();
            });
            $(".dlt").click(function(){
                $(".custom-modal").fadeOut();
            });


            wheelzoom(document.querySelectorAll('img.zoom'));
            this.minutes = 0
            this.seconds = 0
            // this. = {}
            if(localStorage['doctorDetails']){
                this.doctorData = JSON.parse(localStorage['doctorDetails'])
            }
            if(localStorage['doctorsOfSameClinic']){
                this.doctorsDetails = JSON.parse(localStorage['doctorsOfSameClinic'])  
                console.log(this.doctorsDetails)
            }
            this.reqData = {}
            this.pateintPicPath = environment.patientPic
            this.socket = io(environment.socket)
            var options = { month: 'short' };
            var today = new Date();
            this.month = today.toLocaleDateString("en-IN", options);
            this.day = new Date().getDate()
            this.year = new Date().getFullYear()
            this.numericMonth = new Date().getMonth()+1

            this.dataRegistration = []  
            this.dataAppointment = []
            this.dataDispensedPatients = []
            this.lastVisit = []
            this.countLastVisit = []
            this.dispensedPatient = {}
            if(this.doctorData){
                this.AllPatinetsForTodayDoctor()
                this.setAllShiftsForPreview()
            }
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
            this.socket.on('registrationBooked', (msg: any) => {
                console.log("registration booked")
                this.ngOnInit()
            });
            this.socket.on('prescUpload', (msg: any) => {
                console.log("presc Uploaded")
                this.ngOnInit()
            });
            /////////////////SOCKET ON end//////////////////////
            this.reportPic = environment.reportPic
            var currentYear = new Date().getFullYear();
            this.experience = currentYear - parseInt(this.doctorsDetails.practicing_since)
            this.activatetab(1)
            this.getHelpText()
        }
        zoomin(){
            var myImg = document.getElementById("map");
            var currWidth = myImg.clientWidth;
            if(currWidth == 5000) return false;
            else{
                myImg.style.width = (currWidth + 100) + "px";
            } 
        }
        zoomout(){
            var myImg = document.getElementById("map");
            var currWidth = myImg.clientWidth;
            if(currWidth == 100) return false;
            else{
                myImg.style.width = (currWidth - 100) + "px";
            }
        }
        showUndertakingInfo(){
            $('#undertaking-modal').modal('show');
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
                                        console.log(object)
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
                                            console.log(result)
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
                                                    console.log(this.totalTimeUtilizedMin,this.doctorTotalWorkingMin)
                                                    this.value = Math.ceil(this.getData((this.totalTimeUtilizedMin/this.doctorTotalWorkingMin)*100))
                                                    if(this.value< 25){
                                                        this.classColor = 'red'
                                                    }else if(this.value<= 50){
                                                        this.classColor = 'yellow'
                                                    }else {
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

                                                console.log(this.totalMin)
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
            console.log(this.helpText);
        }else{
            this.toastr.error(data.message,"Error")
        }
    })   
}
ngOnDestroy(){
    /////////////////SOCKET ON//////////////////////        
    this.loading = true
    if(this.doctorData){
        var itemId = this.doctorData.itemId
    }
    var object = {
        itemId: itemId,
        reg_id: 0
    }
    this.userService.UpdateConsultationInProgress(object).subscribe(data => {
        this.loading = false
        console.log(data)
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

showPad(patient,i,id, digital){
    console.log('hey');
    console.log(patient);

    if(i==0){   
    this.loading = true
        if(patient.doctor_id.digital_precipitation){
            patient.ID = id
            localStorage['consultingPatient']=JSON.stringify(patient)
            // this.consultingPatient = patient
            this.minutes = 0
            this.seconds = 0
            setInterval(() => {
                this.incrementTimer()
            }, 1000);  
            this.router.navigate(['header-two-layout/dashboard-prescription-pad'])     
            /////////////////SOCKET ON//////////////////////
            // this.loading = true
            // var object = {
                //     itemId: this.doctorData.itemId,
                //     reg_id: patient.id
                // }
                // this.userService.UpdateConsultationInProgress(object).subscribe(data => {
                    //     this.loading = false
                    //     console.log(data)
                    //     if (data.response == true) {
                        //         localStorage['doctorDetails']=JSON.stringify(data.data)
                        //         this.socket.emit('patientSelected',{
                            //             room_id: this.doctorData.smart_assistant_id
                            //         })
                            //         //////////////-----SOCKET ON------////////////////
                            //         patient.ID = id
                            //         localStorage['consultingPatient']=JSON.stringify(patient)
                            //         this.router.navigate(['header-two-layout/dashboard-prescription-pad'])
                            //     }
                            // }, err => {
                                //   console.log(err);
                                // })
                            }else{
                                patient.ID = id
                                //dashboard-prescription-pad-off
                                localStorage['consultingPatient']=JSON.stringify(patient);

                                this.minutes = 0;
                                this.seconds = 0;
                                setInterval(() => {
                                    this.incrementTimer()
                                }, 1000);             
                                this.router.navigate(['header-two-layout/dashboard-prescription-pad-off']) 
                                //$("#digitalOff").modal("show");


                            }
                        }
                    }

                    AllPatinetsForTodayDoctor(){
                        this.loading = true
                        var object = {
                            doctor_id: this.doctorData._id
                        }
                        this.userService.AllPatinetsForTodayDoctor(object).subscribe(data => {
                            this.loading = false
                            console.log(data)
                            if (data.response == true) {
                                this.dataRegistration = data.dataRegistration
                                this.dataAppointment = data.dataAppointment
                                this.dataDispensedPatients = data.dataDispensedPatients   
                                this.lastVisit = data.lastVisit          
                                this.countLastVisit = data.countLastVisit   
                                if(this.dataRegistration){
                                    for (var i = 0; i < this.dataRegistration.length; i++) {
                                        this.dataRegistration[i].lastVisit = this.getLastTime(this.dataRegistration[i])
                                        this.consultingPatient = this.dataRegistration[i]
                                    }
                                }
                                console.log(this.consultingPatient)
                            }
                        }, err => {
                            console.log(err);
                        })
                    }

                    openPrescriptionPreview(data){
                        this.prescription_image=data.image
                        this.prescription_id = data.prescription_id
                        this.dispensedPatient = data.registration
                        console.log(data)
                        this.referDoctorName = data.registration.doctor_id
                        console.log(this.referDoctorName)
                        this.finalPreConditions = data.precription.finalPreConditions
                        this.bodyIndicatorSelected = data.precription.bodyIndicatorSelected
                        this.bodyIndicatorComplete = data.precription.bodyIndicatorComplete
                        this.finalAllergy = data.precription.finalAllergy
                        this.findingsSelected = data.precription.findingsSelected
                        this.symptomsSelected = data.precription.symptomsSelected
                        this.diagnosisSelected = data.precription.diagnosisSelected
                        this.tempMedicationArray = data.precription.tempMedicationArray
                        this.itemsfinding = data.precription.itemsfinding
                        this.itemsymptoms = data.precription.itemsymptoms
                        this.itemsdiagnosis = data.precription.itemsdiagnosis
                        this.treatmentStatus = data.precription.treatmentStatus
                        this.investigationStatus = data.precription.investigationStatus
                        this.suregeryOptionsTop = data.precription.suregeryOptionsTop
                        this.suregeryOptions = data.precription.suregeryOptions
                        this.inputBox = data.precription.inputBox
                        this.medication = data.precription.medication
                        this.medicationStatus = data.precription.medicationStatus
                        this.medicationTabArray = data.precription.medicationTabArray
                        this.medicationCapArray = data.precription.medicationCapArray
                        this.medicationSypArray = data.precription.medicationSypArray
                        this.medicationSuspArray = data.precription.medicationSuspArray
                        this.medicationEmulsnArray = data.precription.medicationEmulsnArray
                        this.medicationInjArray = data.precription.medicationInjArray
                        this.medicationCreamArray = data.precription.medicationCreamArray
                        this.medicationGelArray = data.precription.medicationGelArray
                        this.medicationDropsArray = data.precription.medicationDropsArray
                        this.medicationPowderArray = data.precription.medicationPowderArray
                        this.medicationAerosolsArray = data.precription.medicationAerosolsArray
                        this.medicationMouthWashArray = data.precription.medicationMouthWashArray
                        this.medicationSolutionArray = data.precription.medicationSolutionArray
                        this.medicationLotionArray = data.precription.medicationLotionArray
                        this.medicationOintmentArray = data.precription.medicationOintmentArray
                        this.symptomsComplete = data.precription.symptomsComplete
                        this.diagnosisComplete = data.precription.diagnosisComplete
                        this.treatmentComplete = data.precription.treatmentComplete
                        this.treatmentArray = data.precription.treatmentArray
                        this.investigationIndicatorComplete = data.precription.investigationIndicatorComplete
                        this.investigationArray = data.precription.investigationArray
                        this.surgeryComplete = data.precription.surgeryComplete
                        this.surgerySelectedArray = data.precription.surgerySelectedArray
                        this.instructionsComplete = data.precription.instructionsComplete
                        this.instructionsSelected = data.precription.instructionsSelected
                        this.medicationComplete = data.precription.medicationComplete
                        this.currentVaccinationComplete = data.precription.currentVaccinationComplete
                        this.finalCurrentVaccinationArray = data.precription.finalCurrentVaccinationArray
                        this.dueVaccinationComplete = data.precription.dueVaccinationComplete
                        this.finalDueVaccinationArray = data.precription.finalDueVaccinationArray
                        this.eyePresComplete = data.precription.eyePresComplete
                        this.finalRightOD = data.precription.finalRightOD
                        this.finalLeftOD = data.precription.finalLeftOD
                        this.followDaysComplete = data.precription.followDaysComplete
                        this.finalfollowUpDays = data.precription.finalfollowUpDays
                        this.followUpDate.setDate(new Date(data.createdAt).getDate() + this.finalfollowUpDays);
                        console.log(this.followUpDate)
                        var options = { month: 'short' };
                        this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
                        this.followUpDay = this.followUpDate.getDate()
                        this.followUpYear = this.followUpDate.getFullYear()
                        this.minutes = data.precription.minutes
                        this.seconds = data.precription.seconds
                        // this.languageOptionSelected = data.precription.languageOptionSelected

                        if(this.prescription_image){
                            // $("#uploadedPrescriptionModal").modal("show");
                            $(".custom-modal").fadeIn();
                        }else{
                            $("#previewModal").modal("show");
                        }
                    }

                    checkOptionOfPad(value){
                        if(this.doctorData){
                            if(!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length<1){
                                return true
                            }else{
                                for (var i = 0; i < this.doctorData.pad_customization_options.length; i++) {
                                    if(this.doctorData.pad_customization_options[i].value == value){
                                        if(this.doctorData.pad_customization_options[i].status == true){
                                            return true
                                        }else{
                                            return false
                                        }
                                    }
                                }
                            }
                        }
                    }

                    getFooterText(){
                        if(this.doctorData){
                            if(!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length<1){
                                return "Not for Medico-Legal Purpose"
                            }else{
                                return this.doctorData.pad_customization_options[12].text
                            }
                        }
                    }

                    getHeaderText(){
                        if(this.doctorData){
                            if(!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length<1){
                                return "PLEASE TAKE PRIOR APPOINTMENT"
                            }else{
                                return this.doctorData.pad_customization_options[8].text
                            }
                        }
                    }

                    setAllShiftsForPreview(){
                        this.allShifts = []
                        var Mon = false
                        var Tue = false
                        var Wed = false
                        var Thu = false
                        var Fri = false
                        var Sat = false
                        var Sun = false
                        for (var i = 0; i < this.doctorData.consultation_schedule.length; i++) {
                            var string = ''
                            if(this.doctorData.consultation_schedule[i].Monday == true){
                                Mon = true
                                if(string == ''){
                                    string = "Mon"
                                }else{
                                    string = string +", "+"Mon"
                                }
                            }
                            if(this.doctorData.consultation_schedule[i].Tuesday == true){
                                Tue = true
                                if(string == ''){
                                    string = "Tue"
                                }else{
                                    string = string +", "+"Tue"
                                }
                            }
                            if(this.doctorData.consultation_schedule[i].Wednesday == true){
                                Wed = true
                                if(string == ''){
                                    string = "Wed"
                                }else{
                                    string = string +", "+"Wed"
                                }
                            }
                            if(this.doctorData.consultation_schedule[i].Thursday == true){
                                Thu = true
                                if(string == ''){
                                    string = "Thu"
                                }else{
                                    string = string +", "+"Thu"
                                }
                            }
                            if(this.doctorData.consultation_schedule[i].Friday == true){
                                Fri = true
                                if(string == ''){
                                    string = "Fri"
                                }else{
                                    string = string +", "+"Fri"
                                }
                            }
                            if(this.doctorData.consultation_schedule[i].Saturday == true){
                                Sat = true
                                if(string == ''){
                                    string = "Sat"
                                }else{
                                    string = string +", "+"Sat"
                                }
                            }
                            if(this.doctorData.consultation_schedule[i].Sunday == true){
                                Sun = true
                                if(string == ''){
                                    string = "Sun"
                                }else{
                                    string = string +", "+"Sun"
                                }
                            }
                            let object = {
                                day:string,
                                shifts:this.doctorData.consultation_schedule[i].shifts
                            }
                            this.allShifts.push(object)
                        }
                        var stringClosed = ''
                        this.allShiftsClosed = []
                        if(Mon == false){
                            if(stringClosed == ''){
                                stringClosed = "Mon"
                            }else{
                                stringClosed = stringClosed +", "+"Mon"
                            }                
                        }
                        if(Tue == false){
                            if(stringClosed == ''){
                                stringClosed = "Tue"
                            }else{
                                stringClosed = stringClosed +", "+"Tue"
                            }                                
                        }
                        if(Wed == false){
                            if(stringClosed == ''){
                                stringClosed = "Wed"
                            }else{
                                stringClosed = stringClosed +", "+"Wed"
                            }                                
                        }
                        if(Thu == false){
                            if(stringClosed == ''){
                                stringClosed = "Thu"
                            }else{
                                stringClosed = stringClosed +", "+"Thu"
                            }                                
                        }
                        if(Fri == false){
                            if(stringClosed == ''){
                                stringClosed = "Fri"
                            }else{
                                stringClosed = stringClosed +", "+"Fri"
                            }                                
                        }
                        if(Sat == false){
                            if(stringClosed == ''){
                                stringClosed = "Sat"
                            }else{
                                stringClosed = stringClosed +", "+"Sat"
                            }                                
                        }
                        if(Sun == false){
                            if(stringClosed == ''){
                                stringClosed = "Sun"
                            }else{
                                stringClosed = stringClosed +", "+"Sun"
                            }                                
                        }
                        if(stringClosed!=''){
                            let object = {
                                day:stringClosed
                            }
                            this.allShiftsClosed.push(object)
                        }
                    }

                    createPdf(){
                        console.log(this.dispensedPatient)
                        $('#previewModalPdf').printThis({
                            debug: false,
                            importCSS: true,
                            importStyle: true,
                            printContainer: true,
                            pageTitle: "Prescription",
                            removeInline: false,
                            printDelay: 333,
                            header: null,
                            formValues: true
                        });
                    }

                    getLastTime(data){
                        var boolean = false
                        for (var i = 0; i < this.lastVisit.length; i++) {
                            if(this.lastVisit[i].registration.pateintName == data.pateintName && 
                                this.lastVisit[i].registration.pateintPhone == data.pateintPhone){
                                var ob 
                            ob = {}
                            ob.status = true
                            ob.data = this.lastVisit[i]
                            ob.count = this.getLastVisitCount(this.lastVisit[i].registration.pateintPhone,this.lastVisit[i].registration.pateintName)
                            ob.time = this.lastVisit[i].registration.createdAt 
                            return ob
                        } 
                    }
                    if(boolean == false){
                        var ob
                        ob = {}
                        ob.status = false
                        return ob
                    }
                }

                getLastVisitCount(phone,name){
                    for (var i = 0; i < this.countLastVisit.length; i++) {
                        if(this.countLastVisit[i].pateintName == name && 
                            this.countLastVisit[i].pateintPhone == phone){
                            return this.countLastVisit[i].count
                    } 
                }
            }

            getHistoryClass(){
                if(this.consultingPatient.lastVisit){
                    return 'badge green'
                }
            }

            openHistoryModal(){
                console.log(this.consultingPatient.lastVisit.data.precription)
                if(this.consultingPatient.lastVisit.status == true){
                    var options = { month: 'short' };
                    this.day_history = new Date(this.consultingPatient.lastVisit.data.createdAt).getDate()
                    this.month_history = new Date(this.consultingPatient.lastVisit.data.createdAt).toLocaleDateString("en-IN", options);
                    this.year_history = new Date(this.consultingPatient.lastVisit.data.createdAt).getFullYear()
                    this.numericMonth_history = new Date(this.consultingPatient.lastVisit.data.createdAt).getMonth()+1
                    this.preConditionComplete_history = this.consultingPatient.lastVisit.data.precription.preConditionComplete
                    this.finalPreConditions_history = this.consultingPatient.lastVisit.data.precription.finalPreConditions
                    this.bodyIndicatorComplete_history = this.consultingPatient.lastVisit.data.precription.bodyIndicatorComplete
                    this.bodyIndicatorSelected_history = this.consultingPatient.lastVisit.data.precription.bodyIndicatorSelected
                    this.allergyComplete_history = this.consultingPatient.lastVisit.data.precription.allergyComplete
                    this.finalAllergy_history = this.consultingPatient.lastVisit.data.precription.finalAllergy
                    this.findingsComplete_history = this.consultingPatient.lastVisit.data.precription.findingsComplete
                    this.findingsSelected_history = this.consultingPatient.lastVisit.data.precription.findingsSelected
                    this.symptomsComplete_history = this.consultingPatient.lastVisit.data.precription.symptomsComplete
                    this.symptomsSelected_history = this.consultingPatient.lastVisit.data.precription.symptomsSelected
                    this.diagnosisComplete_history = this.consultingPatient.lastVisit.data.precription.diagnosisComplete
                    this.diagnosisSelected_history = this.consultingPatient.lastVisit.data.precription.diagnosisSelected
                    this.medicationComplete_history = this.consultingPatient.lastVisit.data.precription.medicationComplete
                    this.tempMedicationArray_history = this.consultingPatient.lastVisit.data.precription.tempMedicationArray
                    this.vaccinationComplete_history = this.consultingPatient.lastVisit.data.precription.vaccinationComplete
                    this.currentVaccinationComplete_history = this.consultingPatient.lastVisit.data.precription.currentVaccinationComplete
                    this.finalCurrentVaccinationArray_history = this.consultingPatient.lastVisit.data.precription.finalCurrentVaccinationArray
                    this.dueVaccinationComplete_history = this.consultingPatient.lastVisit.data.precription.dueVaccinationComplete
                    this.finalDueVaccinationArray_history = this.consultingPatient.lastVisit.data.precription.finalDueVaccinationArray
                    this.vaccinationDate_history = this.consultingPatient.lastVisit.data.precription.vaccinationDate
                    this.instructionsComplete_history = this.consultingPatient.lastVisit.data.precription.instructionsComplete
                    this.instructionsSelected_history = this.consultingPatient.lastVisit.data.precription.instructionsSelected
                    this.investigationIndicatorComplete_history = this.consultingPatient.lastVisit.data.precription.investigationIndicatorComplete
                    this.investigationArray_history = this.consultingPatient.lastVisit.data.precription.investigationArray
                    this.treatmentComplete_history = this.consultingPatient.lastVisit.data.precription.treatmentComplete
                    this.treatmentArray_history = this.consultingPatient.lastVisit.data.precription.treatmentArray
                    this.surgeryComplete_history = this.consultingPatient.lastVisit.data.precription.surgeryComplete
                    this.surgerySelectedArray_history = this.consultingPatient.lastVisit.data.precription.surgerySelectedArray
                    this.eyePresComplete_history = this.consultingPatient.lastVisit.data.precription.eyePresComplete
                    this.finalRightOD_history = this.consultingPatient.lastVisit.data.precription.finalRightOD
                    this.finalLeftOD_history = this.consultingPatient.lastVisit.data.precription.finalLeftOD
                    $("#historyModal").modal("show");
                }
            }

            saveDoctorPrescriptionForPatient(){
                var precription = {
                    finalPreConditions: this.finalPreConditions,
                    bodyIndicatorSelected: this.bodyIndicatorSelected,
                    bodyIndicatorComplete: this.bodyIndicatorComplete,
                    finalAllergy: this.finalAllergy,
                    findingsSelected: this.findingsSelected,
                    symptomsSelected: this.symptomsSelected,
                    diagnosisSelected: this.diagnosisSelected,
                    tempMedicationArray: this.tempMedicationArray,
                    itemsfinding: this.itemsfinding,
                    itemsymptoms: this.itemsymptoms,
                    itemsdiagnosis: this.itemsdiagnosis,
                    treatmentStatus: this.treatmentStatus,
                    investigationStatus: true,
                    suregeryOptionsTop: this.suregeryOptionsTop,
                    suregeryOptions: this.suregeryOptions,
                    inputBox: this.inputBox,
                    medication: this.medication,
                    medicationStatus: this.medicationStatus,
                    medicationTabArray: this.medicationTabArray,
                    medicationCapArray: this.medicationCapArray,
                    medicationSypArray: this.medicationSypArray,
                    medicationSuspArray: this.medicationSuspArray,
                    medicationEmulsnArray: this.medicationEmulsnArray,
                    medicationInjArray: this.medicationInjArray,
                    medicationCreamArray: this.medicationCreamArray,
                    medicationGelArray: this.medicationGelArray,
                    medicationDropsArray: this.medicationDropsArray,
                    medicationPowderArray: this.medicationPowderArray,
                    medicationAerosolsArray: this.medicationAerosolsArray,
                    medicationMouthWashArray: this.medicationMouthWashArray,
                    medicationSolutionArray: this.medicationSolutionArray,
                    medicationLotionArray: this.medicationLotionArray,
                    medicationOintmentArray: this.medicationOintmentArray,
                    symptomsComplete: this.symptomsComplete,
                    diagnosisComplete: this.diagnosisComplete,
                    treatmentComplete: this.treatmentComplete,
                    treatmentArray: this.treatmentArray,
                    investigationIndicatorComplete: true,
                    investigationArray: this.investigationArray,
                    surgeryComplete: this.surgeryComplete,
                    surgerySelectedArray: this.surgerySelectedArray,
                    instructionsComplete: this.instructionsComplete,
                    instructionsSelected: this.instructionsSelected,
                    medicationComplete: true,
                    currentVaccinationComplete: this.currentVaccinationComplete,
                    finalCurrentVaccinationArray: this.finalCurrentVaccinationArray,
                    dueVaccinationComplete: this.dueVaccinationComplete,
                    finalDueVaccinationArray: this.finalDueVaccinationArray,
                    eyePresComplete: this.eyePresComplete,
                    finalRightOD: this.finalRightOD,
                    finalLeftOD: this.finalLeftOD,
                    followDaysComplete:this.followDaysComplete,
                    finalfollowUpDays: this.finalfollowUpDays,
                    minutes: this.minutes,
                    seconds: this.seconds,
                    languageOptionSelected: this.languageOptionSelected
                }
                if(this.day<9){
                    this.day = "0" + this.day.toString()
                }
                if(this.numericMonth<9){
                    this.numericMonth = "0" + this.numericMonth.toString()
                }
                console.log()
                var dataToSend = {
                    doctor_id: this.doctorData._id,
                    precription:precription,
                    smart_assistant_id: this.consultingPatient.smart_assistant_id._id,
                    registration: this.consultingPatient,
                    prescription_id: this.day.toString() + this.numericMonth.toString() + this.year.toString() + "-" + this.consultingPatient.id,
                    refer_status: '',
                    referDetail: ''
                }
                console.log(dataToSend)
                this.loading = true
                this.userService.SaveDoctorPrescriptionForPatient(dataToSend).subscribe(data => {
                    this.loading = false
                    console.log(data)
                    if (data.response == true) {
                        this.toastr.success(data.message,"Success")
                        this.socket.emit('registrationBooked',{
                            room_id: this.doctorData.smart_pharmacy_id
                        })
                        this.socket.emit('registrationBooked',{
                            room_id: this.doctorData.smart_diagnostics_id
                        })
                        this.router.navigate(['header-two-layout/dashboard-prescription'])
                    }else{
                        this.toastr.error(data.message,"Error")
                    }
                    $("#digitalOff").modal("hide");
                }, err => {
                    console.log(err);
                })
                //this.ngOnDestroy()
            }

            incrementTimer() {
                if (this.seconds < 59) {
                    this.seconds = this.seconds + 1
                } else {
                    this.seconds = 0
                    this.minutes = this.minutes + 1
                }
            }
            getDay(n){
                if(n<10){
                    return "0"+n
                }else{
                    return n
                }
            }
            openTestReports(){
                if(this.consultingPatient.reportPics && this.consultingPatient.reportPics.length>0){
                    $("#Test-report-Modal").modal("show");
                }
            }
            getTestReportClass(){
                if(this.consultingPatient.reportPics && this.consultingPatient.reportPics.length>0){
                    return 'badge green'
                }
            }
            getStatus(obj){

                if(obj){
                    console.log(obj);
                    return true;
                }else{
                    return false;
                }

            }

        }
