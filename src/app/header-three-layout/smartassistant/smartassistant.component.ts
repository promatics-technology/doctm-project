import { Component,OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from '../../../environments/environment.prod';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { MissionService } from '../../providers/mission.service';
import { Subscription }   from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'

import * as io from "socket.io-client";

declare var $:any

@Component({
    selector: 'app-smartassistant',
    templateUrl: './smartassistant.component.html',
    styleUrls: ['./smartassistant.component.css'],
    providers:[UserService]
})
export class SmartassistantComponent implements OnInit {
    mouseWheelDir: string = '';
    imgWidth: number = 300;
    subscription: Subscription;
    timeFetched
    doctorData  
    smartAssistantData
    dataDoctors
    month
    day
    year
    consultationDoctor
    dataRegistration
    dataRegistrationCopy
    pateintPicPath
    reportPicPath
    dataAppointment
    dataAppointmentCopy
    dataDispensedPatients
    dataDispensedPatientsCopy

    date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }
    //
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
    followUpYear
    followUpMonth
    followUpDay    
    followUpDays: number = 0
    finalfollowUpDays: number = 0
    followUpDate = new Date()
    minutes
    seconds
    languageOptionSelected
    allShifts
    allShiftsClosed
    dispensedPatient
    //
    countLastVisit
    loading
    lastVisit
    consultingPatient
    dispensedPatientSelected
    uploadedPrescriptionPath

    appointment
    pateintConsultaionDetail
    webCam : boolean

    field_dob
    field_age
    field_weight
    field_height
    field_temp
    field_pulse
    field_bp
    field_rbs
    field_spo
    field_patientPic
    field_testReport
    field_fee

    citiesList
    citiesList1
    state
    consultationType 
    webCamOpenedBY
    pulse_range
    sys_range
    dia_range
    temperature_range
    rbs_range
    spo_range
    pateintPic
    reportPics
    patientList
    patientList1
    genderClass
    sys_class
    dob_class
    temp_class
    rbs_class
    dia_class
    pulse_class	
    spo_class
    socket
    lat
    lng
    locationSuggestionDB
    prescription_id
    digitalTrue
    newDoctorObject
    doctorArrayObject
    todayDate = new Date()
    getExperienceYear
    bodyIndicator
    getExperienceYearOfDoc
    listOne2 = [
    {name:'John (4)',image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F Ref',age:22,status:'Appointment'},
    {name:'Name2 (4)' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F Ref',age:23,status:'Fast-Track'},
    {name:'Name3' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F Ref',age:24,status:'Fast-Track'},
    {name:'Name4' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F Ref',age:25,status:'Appointment'},
    {name:'Name5 (3)' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F Ref',age:26,status:'Appointment'},
    {name:'Name6' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F Ref',age:27,status:'Walk-in'},
    {name:'Name7' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F Ref',age:28,status:'Appointment'}
    ];

    listOne3 = [
    {name:'John (5)',image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F ',age:22,status:'Appointment (13:04)'},
    {name:'Name2 (5)' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F Ref',age:23,status:'Fast-Track'},
    {name:'Name3 (1)' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F Ref',age:24,status:'Appointment'},
    {name:'Name4' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F Ref',age:25,status:'Walk-in'},
    {name:'Name5' ,image:'./assets/imgs/avatar3.jpg',date:'22 July,2018',gender:'F Ref',age:26,status:'Fast-Track'},
    {name:'Name6' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F Ref',age:27,status:'Walk-in'},
    {name:'Name7' ,image:'./assets/imgs/avatar2.jpg',date:'22 July,2018',gender:'F Ref',age:28,status:'Fast-Track'}
    ];
    patientData
    adminDoctor
    getFooterText
    getHeaderText
    checkPrescUploaded:boolean
    receptData
    private trigger: Subject < void > = new Subject < void > ()
    private triggerUpdate: Subject < void > = new Subject < void > ()

    constructor(private formBuilder:FormBuilder,private toastr: ToastrService,
        private userService:UserService,private router: Router,
        private missionService: MissionService,public dialog: MatDialog) {
        this.subscription = missionService.missionAnnounced$.subscribe(
            mission => {
                if(mission=='reload_smart_assistant_page'){
                    this.ngOnInit();
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        this.checkPrescUploaded = false
        this.doctorArrayObject = {}
        this.newDoctorObject = {}
        this.patientData = {}
        this.loading = true
        this.socket = io(environment.socket)
        this.smartAssistantData = JSON.parse(localStorage['smartAssistantDetails'])
        this.pateintPicPath = environment.patientPic
        this.reportPicPath = environment.reportPic
        this.pateintPic = null
        this.reportPics = []
        this.bodyIndicator = {}
        this.bodyIndicatorSelected = []; 
        this.GetSmartAssistantDataAfterLogin()

        this.pulse_range = []
        var valuePulse: number = 30
        while (valuePulse < 181) {
            this.pulse_range.push(valuePulse)
            valuePulse++;
        }
        this.sys_range = []
        var valueSys: number = 70
        while (valueSys < 191) {
            this.sys_range.push(valueSys)
            valueSys++;
        }
        this.dia_range = []
        var valueDia: number = 40
        while (valueDia < 101) {
            this.dia_range.push(valueDia)
            valueDia++;
        }
        this.temperature_range = []
        var valueTem: number = 97
        while (valueTem < 107) {
            this.temperature_range.push(valueTem)
            valueTem++;
        }
        this.rbs_range = []
        var valueRbs: number = 50
        while (valueRbs < 401) {
            this.rbs_range.push(valueRbs)
            valueRbs++;
        }
        this.spo_range = []
        var valueSpo: number = 80
        while (valueSpo < 100) {
            this.spo_range.push(valueSpo)
            valueSpo++;
        }

        this.dataRegistration = []  
        this.dataAppointment = []
        this.dataRegistrationCopy = []  
        this.dataAppointmentCopy = []
        this.dataDispensedPatients = []
        this.dataDispensedPatientsCopy = []
        this.dispensedPatient = {}
        this.lastVisit = []
        this.consultingPatient = []
        this.countLastVisit = []
        this.consultationType = [
        'Appointment',
        'Walk-in',
        'Emergency'
        ]

        var options = { month: 'short' };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate()
        this.year = new Date().getFullYear()

        this.uploadedPrescriptionPath =  environment.uploadedPrescriptionPath

        this.patientList = []
        this.patientList1 = []

        this.AllPatinetsForTodayBySmartAssistant()
    }
    imageZoom(imgID, resultID) {
        var img, lens, result, cx, cy;
        img = document.getElementById(imgID);
        result = document.getElementById(resultID);
        /*create lens:*/
        lens = document.createElement("DIV");
        lens.setAttribute("class", "img-zoom-lens");
        /*insert lens:*/
        img.parentElement.insertBefore(lens, img);
        /*calculate the ratio between result DIV and lens:*/
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        /*set background properties for the result DIV:*/
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
        /*execute a function when someone moves the cursor over the image, or the lens:*/
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        /*and also for touch screens:*/
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);
        function moveLens(e) {
            var pos, x, y;
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e);
            /*calculate the position of the lens:*/
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            /*prevent the lens from being positioned outside the image:*/
            if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
            if (x < 0) { x = 0; }
            if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
            if (y < 0) { y = 0; }
            /*set the position of the lens:*/
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            /*display what the lens "sees":*/
            result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        }
        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            /*get the x and y positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x and y coordinates, relative to the image:*/
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return { x: x, y: y };
        }
    }

    mouseWheelUpFunc() {
        console.log('mouse wheel up');
        this.imgWidth = this.imgWidth+10;
    }

    mouseWheelDownFunc() {
        console.log('mouse wheel down');
        this.imgWidth = this.imgWidth-10;
    }
    GetSmartAssistantDataAfterLogin(){
        let object = {
            smart_assistant_id : this.smartAssistantData.dataSmartAssistant._id 
        }
        this.userService.GetSmartAssistantDataAfterLogin(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.dataDoctors = data.doctorsRegisteredForSmartClinic
                if(this.dataDoctors.length==1){
                    this.doctorArrayObject = this.dataDoctors[0]
                    this.consultationDoctor = this.dataDoctors[0]._id
                    this.digitalTrue = this.dataDoctors[0].digital_precipitation
                } else{
                    for (var i = 0; i < this.dataDoctors.length; i++) {
                        if(this.dataDoctors[i].type_of_doctor == "admin_doctor"){
                            this.consultationDoctor = this.dataDoctors[i]._id
                            this.doctorArrayObject = this.dataDoctors[i]
                            this.digitalTrue = this.dataDoctors[i].digital_precipitation
                            break
                        }
                    }
                }
                for (var i = 0; i < data.doctorsRegisteredForSmartClinic.length; i++) {
                    if(data.doctorsRegisteredForSmartClinic[i].type_of_doctor =="admin_doctor"){
                        this.adminDoctor = data.doctorsRegisteredForSmartClinic[i]
                    }
                }
                console.log( this.adminDoctor)
                this.AllPatinetsForTodayBySmartAssistant()
            }
        }, err => {
            console.log(err);
        })
    }

    AllPatinetsForTodayBySmartAssistant(){
        console.log(this.smartAssistantData)
        var object = {
            // doctor_id: this.consultationDoctor,
            smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
        }
        this.userService.AllPatinetsForTodayBySmartAssistant(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.dataRegistrationCopy = data.dataRegistration
                this.dataAppointmentCopy = data.dataAppointment             
                this.dataDispensedPatientsCopy = data.dataDispensedPatients      
                this.lastVisit = data.lastVisit      
                this.countLastVisit = data.countLastVisit  
            }
            this.filterAppointmentsByDoctor(this.consultationDoctor)
            this.loading = false
        }, err => {
            console.log(err);
        })
    }

    filterAppointmentsByDoctor(doctor_id){
        if(doctor_id){
            //alert(doctor_id);
            this.consultingPatient = []
            console.log(doctor_id)
            this.dataRegistration = []
            this.dataAppointment = []
            this.dataDispensedPatients = []
            if(this.dataRegistrationCopy.length>0){
                console.log('here');
                console.log('Registration Data');
                console.log(this.dataRegistration);

                this.dataRegistration = this.dataRegistrationCopy.filter(d=>d.doctor_id._id.toString()==doctor_id.toString())
            }
            for (var i = 0; i < this.dataRegistration.length; i++) {
                this.dataRegistration[i].lastVisit = this.getLastTime(this.dataRegistration[i])
            }
            if(this.dataAppointmentCopy.length>0){
                this.dataAppointment = this.dataAppointmentCopy.filter(d=>d.doctor_id.toString()==doctor_id.toString())
            }
            if(this.dataDispensedPatientsCopy.length>0){
                this.dataDispensedPatients = this.dataDispensedPatientsCopy.filter(d=>d.doctor_id.toString()==doctor_id.toString())
            }
            var doctor = this.dataDoctors.filter(d=>d._id.toString()==doctor_id.toString())
            this.doctorData = doctor[0]
            console.log(this.doctorData);
            console.log('Registration Data');
            console.log(this.dataRegistration);
            if(this.doctorData.consultationInProgress != 0 && this.dataRegistration.length>0){
                console.log('Registration Data');
                console.log(this.dataRegistration);
                console.log('Doctor Data');
                console.log(this.doctorData);

                if(this.doctorData.consultationInProgress){
                    this.consultingPatient = this.dataRegistration.filter(d=>d.serial_order==this.doctorData.consultationInProgress && d.doctor_id._id==this.doctorData._id)
                }
                console.log( this.consultingPatient);           
                if(this.consultingPatient.length>0){
                    for (var i = 0; i < this.dataRegistration.length; i++) {
                        if(this.dataRegistration[i].id == this.consultingPatient[0].id){
                            this.dataRegistration.splice(i,1)
                            break;
                        }
                    }
                }
            }

            if(this.dataRegistration.length>0){
                var currentTime = new Date();
                var currentOffset = currentTime.getTimezoneOffset();
                var ISTOffset = 330;
                var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
                var hoursIST : number = ISTTime.getHours()
                var minutesIST : number = ISTTime.getMinutes()
                console.log('Average Consultation Time:'+this.dataRegistration[0].doctor_id.avgConsTime);
                var time : number;
                if(this.dataRegistration[0].doctor_id.avgConsTime=='Auto'){
                    console.log(this.dataRegistration[0].doctor_id);
                    var ob = {
                        doctor_id :  this.dataRegistration[0].doctor_id._id
                    }
                    this.userService.getAverageConsultationTime(ob).subscribe(data => {
                        console.log(data)
                        this.timeFetched='fetched';
                        time=data.mins;
                        console.log('time is:'+time);
                        for (var i = 0; i < this.dataRegistration.length; i++) {
                            if(this.doctorData.consultationInProgress == 0){
                                this.dataRegistration[i].waitingTime = time*(i)                    
                            }else{
                                this.dataRegistration[i].waitingTime = time*(i+1)                    
                            }
                            this.dataRegistration[i].currentPlusWaitingTime = (hoursIST * 60) + minutesIST + this.dataRegistration[i].waitingTime
                        }
                        //this.appointment.city = data.city
                    }, err => {
                        console.log(err);
                    })
                }else{
                    this.timeFetched='fetched';
                    time= parseInt(this.dataRegistration[0].doctor_id.avgConsTime.substr(0,3))
                    for (var i = 0; i < this.dataRegistration.length; i++) {
                        if(this.doctorData.consultationInProgress == 0){
                            this.dataRegistration[i].waitingTime = time*(i)                    
                        }else{
                            this.dataRegistration[i].waitingTime = time*(i+1)                    
                        }
                        this.dataRegistration[i].currentPlusWaitingTime = (hoursIST * 60) + minutesIST + this.dataRegistration[i].waitingTime
                    }
                }

                console.log('Average Consultation Time After Process:'+time);


                if(this.doctorData.consultationInProgress != 0){
                    setInterval(() => {
                        // this.incrementWaitingTimeByOneMin(this.dataRegistration)
                    }, 60000);
                }
            }
        }
    }

    // getRegistrationTime(time){
        //     var hour = Math.trunc(time / 60).toString();
        //     var min = Math.trunc(time % 60).toString();
        //     if(hour.length==1){
            //         hour = "0"+ hour
            //     }
            //     if(min.length==1){
                //         min = "0"+ min
                //     }
                //     var string = hour +":"+ min
                //     return string
                // }
                getRegistrationTime(time){
      /*  var hour = Math.trunc(time / 60).toString();
       var min = Math.trunc(time % 60).toString();
       if(hour.length==1){
           hour = "0"+ hour
       }
       if(min.length==1){
           min = "0"+ min
       }
       var string = hour +":"+ min */
       var d = new Date(); // for now
       d.setMinutes(d.getMinutes() + time); // timestamp
       d = new Date(d); 
       d.getHours(); // => 9
       d.getMinutes(); // =>  30
       d.getSeconds(); // => 51
       var hour=d.getHours().toString();
       var min=d.getMinutes().toString();
       if(hour.length==1){
           hour = "0"+ hour
       }
       if(min.length==1){
           min = "0"+ min
       }
       var string= hour+":"+min;
       return string
   }

   incrementWaitingTimeByOneMin(dataRegistration){
       var currentTime = new Date();
       var currentOffset = currentTime.getTimezoneOffset();
       var ISTOffset = 330;
       var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
       var hoursIST : number = ISTTime.getHours()
       var minutesIST : number = ISTTime.getMinutes()
       console.log(dataRegistration)
       var time : number  = parseInt(dataRegistration[0].doctor_id.avgConsTime.substr(0,3))
       for (var i = 0; i < dataRegistration.length; i++) {
           dataRegistration[i].waitingTime = dataRegistration[i].waitingTime + 1
           dataRegistration[i].currentPlusWaitingTime = (hoursIST * 60) + minutesIST + dataRegistration[i].waitingTime
       }
   }
   clickModal(item){
       this.receptData = item
       console.log(this.receptData)
       $('#receiptModal').modal('show')
   }
   openPrescriptionPreview(data){
       console.log(data)
       this.prescription_id = data.prescription_id
       this.dispensedPatientSelected = data
       console.log(this.dispensedPatientSelected)
       /** If digital prescription off and report not uploaded ***/
       if(!data.registration.doctor_id.digital_precipitation){
           if(!data.image){
               $("#webcamModal").modal("show");
           }else{
               $("#uploadedPrescriptionModal").modal("show");
           }
       }else{

           //alert('there');
           if(!data.webcam_pic && !data.image){
               //	alert('hii');
               this.dispensedPatient = data.registration
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
               this.languageOptionSelected = data.precription.languageOptionSelected
               var newDate = new Date()
               newDate.setDate(newDate.getDate() + 1)
               //this.doctorArrayObject = item.doctor_id
               var getYear = new Date()
               var newOne = getYear.getFullYear()
               console.log(newOne -parseInt(data.registration.doctor_id.practicing_since))
               this.getExperienceYearOfDoc = newOne -parseInt(data.registration.doctor_id.practicing_since)
               console.log(this.getExperienceYearOfDoc)
               $("#previewModal").modal("show");
           }else if(data.image){
               $("#uploadedPrescriptionModal").modal("show");
           }else{ 
               $("#uploadedPrescriptionModal").modal("show");
           }

       }

   }

   checkOptionOfPad(value){
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

   // getFooterText(){
       //     if(!this.doctorArrayObject.pad_customization_options ||this.doctorArrayObject.pad_customization_options.length<1){
           //         return "Not for Medico-Legal Purpose"
           //     }else{
               //         return this.doctorArrayObject.pad_customization_options[12].text
               //     }
               // }

               // getHeaderText(){
                   //     if(!this.doctorArrayObject.pad_customization_options || this.doctorArrayObject.pad_customization_options.length<1){
                       //         return "PLEASE TAKE PRIOR APPOINTMENT"
                       //     }else{
                           //         return this.doctorArrayObject.pad_customization_options[8].text
                           //     }
                           // }

                           setAllShiftsForPreview(item){
                               this.allShifts = []
                               var Mon = false
                               var Tue = false
                               var Wed = false
                               var Thu = false
                               var Fri = false
                               var Sat = false
                               var Sun = false
                               for (var i = 0; i < item.consultation_schedule.length; i++) {
                                   var string = ''
                                   if(item.consultation_schedule[i].Monday == true){
                                       Mon = true
                                       if(string == ''){
                                           string = "Mon"
                                       }else{
                                           string = string +", "+"Mon"
                                       }
                                   }
                                   if(item.consultation_schedule[i].Tuesday == true){
                                       Tue = true
                                       if(string == ''){
                                           string = "Tue"
                                       }else{
                                           string = string +", "+"Tue"
                                       }
                                   }
                                   if(item.consultation_schedule[i].Wednesday == true){
                                       Wed = true
                                       if(string == ''){
                                           string = "Wed"
                                       }else{
                                           string = string +", "+"Wed"
                                       }
                                   }
                                   if(item.consultation_schedule[i].Thursday == true){
                                       Thu = true
                                       if(string == ''){
                                           string = "Thu"
                                       }else{
                                           string = string +", "+"Thu"
                                       }
                                   }
                                   if(item.consultation_schedule[i].Friday == true){
                                       Fri = true
                                       if(string == ''){
                                           string = "Fri"
                                       }else{
                                           string = string +", "+"Fri"
                                       }
                                   }
                                   if(item.consultation_schedule[i].Saturday == true){
                                       Sat = true
                                       if(string == ''){
                                           string = "Sat"
                                       }else{
                                           string = string +", "+"Sat"
                                       }
                                   }
                                   if(item.consultation_schedule[i].Sunday == true){
                                       Sun = true
                                       if(string == ''){
                                           string = "Sun"
                                       }else{
                                           string = string +", "+"Sun"
                                       }
                                   }
                                   let object = {
                                       day:string,
                                       shifts:item.consultation_schedule[i].shifts
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

                           printRecept(){
                               $('#ReceptPrintID').printThis({
                                   debug: false,
                                   importCSS: true,
                                   importStyle: true,
                                   printContainer: true,
                                   pageTitle: "Fee Recept",
                                   removeInline: false,
                                   printDelay: 333,
                                   header: null,
                                   formValues: true
                               });
                           }
                           createPdf(){
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
                               this.patientData.print=1;
                               console.log(this.patientData)
                               var ob = {
                                   _id :  this.patientData._id
                               }
                               this.userService.UpdatePrintOutStatusReg(ob).subscribe(data => {
                                   console.log(data)

                                   //this.appointment.city = data.city
                               }, err => {
                                   console.log(err);
                               })
                           }

                           getLastTime(data){
                               console.log(this.lastVisit)
                               console.log(data.doctor_id._id);
                               var boolean = false
                               for (var i = 0; i < this.lastVisit.length; i++) {
                                   if(this.lastVisit[i].registration.pateintName == data.pateintName && 
                                       this.lastVisit[i].registration.pateintPhone == data.pateintPhone
                                       && this.lastVisit[i].doctor_id==data.doctor_id._id){
                                       var ob 
                                   ob = {}
                                   ob.status = true
                                   ob.data = this.lastVisit[i]
                                   ob.count = this.getLastVisitCount(this.lastVisit[i].registration.pateintPhone,this.lastVisit[i].registration.pateintName, data.doctor_id._id)
                                   ob.time = this.lastVisit[i].registration.createdAt 
                                   console.log(ob);
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

                       getLastVisitCount(phone,name, doctor_id){
                           for (var i = 0; i < this.countLastVisit.length; i++) {
                               if(this.countLastVisit[i].pateintName == name && 
                                   this.countLastVisit[i].pateintPhone == phone
                                   && this.countLastVisit[i].doctor_id==doctor_id){
                                   return this.countLastVisit[i].count
                           } 
                       }
                   }

                   updateReg(data){


                       if(data.age_in_years >0){
                           data.age=data.age_in_years;
                           data.age_param="years"
                       }else{
                           data.age=data.age_in_months;
                           data.age_param="months"
                       }

                       this.pateintConsultaionDetail = data

                       this.appointment = data
                       if(!data.temp){
                           this.temp_class="grey-placeholder";
                           this.appointment.temp = ""

                       }else{
                           this.temp_class="black-class";
                       }
                       if(!data.pulse){
                           this.appointment.pulse = ""

                           this.pulse_class="grey-placeholder";	

                       }else{
                           this.pulse_class="black-class";
                       }
                       if(!data.bp){
                           this.appointment.bp = ""
                           this.genderClass="grey-placeholder";

                           this.sys_class="grey-placeholder";


                       }else{
                           this.sys_class="black-class"
                       }

                       if(!data.dia){
                           this.appointment.dia = ""

                           this.dia_class="grey-placeholder";


                       }else{
                           this.dia_class="black-class"
                       }
                       if(!data.rbs || data.rbs=="Select"){
                           this.appointment.rbs = "Select"

                           this.rbs_class="grey-placeholder";


                       }else{
                           this.rbs_class="black-class"
                       }
                       if(!data.spo || data.spo=="Select"){
                           this.appointment.spo = "Select"

                           this.spo_class="grey-placeholder";
                       }else{
                           this.spo_class="black-class"
                       }
                       if(!data.dob){

                       }else{
                           this.dob_class="black-class";
                       }
                       if(data.type=='Appointment'){
                           this.consultationType = [
                           'Appointment',
                           'Walk-in',
                           'Emergency'
                           ]
                       }else{
                           this.consultationType = [
                           'Walk-in',
                           'Emergency'
                           ]
                       }
                       console.log(data)
                       // this.appointment.name = data.patient_id.name
                       // this.appointment.phone = data.patient_id.mobile
                       this.GetCityFromClinicId(data.doctor_id.clinic_details.clinic_id)
                       this.checkWhichFieldsToShow(data.doctor_id)
                       // this.appointment.gender = "Select"


                       // if(data.color == 'green'){
                           //     this.appointment.type = "Appointment"
                           // }else{
                               //     this.appointment.type = 'Walk-in'
                               // }
                           }

                           GetCityFromClinicId(id){
                               this.userService.GetCityFromClinicId(id).subscribe(data => {
                                   console.log(data)
                                   this.citiesList = data.data
                                   this.citiesList1 = data.data
                                   this.state = data.state
                                   //this.appointment.city = data.city
                               }, err => {
                                   console.log(err);
                               })
                           }

                           checkWhichFieldsToShow(doctor) {
                               console.log(doctor.reg_fields)
                               this.field_dob = false
                               this.field_age = false
                               this.field_weight = false
                               this.field_height = false
                               this.field_temp = false
                               this.field_pulse = false
                               this.field_bp = false
                               this.field_rbs = false
                               this.field_spo = false
                               this.field_patientPic = false
                               this.field_testReport = false
                               this.field_fee = false
                               for (var i = 0; i < doctor.reg_fields.length; i++) {
                                   if(doctor.reg_fields[i].value=="DOB"){
                                       this.field_dob = true
                                   } else if(doctor.reg_fields[i].value=="Age"){
                                       this.field_age = true
                                   } else if(doctor.reg_fields[i].value=="Weight"){
                                       this.field_weight = true
                                   } else if(doctor.reg_fields[i].value=="Height"){
                                       this.field_height = true
                                   } else if(doctor.reg_fields[i].value=="Bodytemperature"){
                                       this.field_temp = true
                                   } else if(doctor.reg_fields[i].value=="Pulse"){
                                       this.field_pulse = true
                                   } else if(doctor.reg_fields[i].value=="BloodPressure(BP)"){
                                       this.field_bp = true
                                   } else if(doctor.reg_fields[i].value=="RandomBloodSugar(RBS)"){
                                       this.field_rbs = true
                                   } else if(doctor.reg_fields[i].value=="SpO2"){
                                       this.field_spo = true
                                   } else if(doctor.reg_fields[i].value=="Patientphoto"){
                                       this.field_patientPic = true
                                   } else if(doctor.reg_fields[i].value=="PatientTestreports"){
                                       this.field_testReport = true
                                   } else if(doctor.reg_fields[i].value=="ConsultationFee"){
                                       this.field_fee = true
                                   }
                               }
                               $("#pateintConsultaionDetail").modal("show");
                           }

                           openWebCam(data) {
                               if(data=='patient'){
                                   this.webCamOpenedBY = 'patient'
                               }else{
                                   this.webCamOpenedBY = 'report'
                               }
                               this.webCam = true
                           }

                           triggerSnapshot() {
                               this.trigger.next();
                               this.webCam = false
                           }

                           triggerSnapshotUpdate() {
                               this.triggerUpdate.next();
                               this.webCam = false
                           }

                           handleImage(webcamImage) {
                               $("#webcamModal").modal("hide");            
                               this.loading = true
                               let object = {
                                   id : this.dispensedPatientSelected.id,
                                   image: webcamImage._imageAsDataUrl
                               }
                               this.userService.UpdatePrescriptionByImage(object).subscribe(data => {
                                   console.log(data)
                                   this.loading = false
                                   if (data.response == true) {
                                       this.checkPrescUploaded= true
                                       this.socket.emit('prescUpload',{
                                           room_id: this.smartAssistantData.dataSmartAssistant._id.toString()
                                       })
                                       this.ngOnInit()
                                       this.toastr.success(data.message,"Success")
                                   }else{
                                       this.toastr.error(data.message,"Error")
                                   }
                               }, err => {
                                   console.log(err);
                               })     
                           }

                           handleImageUpdate(webcamImage) {
                               if(this.webCamOpenedBY=='patient'){
                                   this.pateintPic = webcamImage._imageAsDataUrl
                               }else if(this.webCamOpenedBY=='report'){
                                   this.reportPics.push(webcamImage._imageAsDataUrl)
                                   console.log(this.reportPics)
                               }        
                           }

                           removeImageFromReportPics(i,type,image){
                               if(type=='local'){
                                   this.reportPics.splice(i,1)
                               }else{
                                   this.loading = true
                                   this.appointment.reportPics.splice(i,1)
                                   let object = {
                                       id : this.appointment.id,
                                       image: image,
                                       reportPics: this.appointment.reportPics
                                   }
                                   console.log(object)
                                   this.userService.RemoveTestReportImage(object).subscribe(data => {
                                       console.log(data)
                                       this.loading = false
                                       if (data.response == true) {
                                           this.toastr.success(data.message,"Success")
                                       }else{
                                           this.toastr.error(data.message,"Error")
                                       }
                                   }, err => {
                                       console.log(err);
                                   })     
                               }
                           }

                           public get triggerObservableUpdate(): Observable < void > {
                               return this.triggerUpdate.asObservable();
                           }

                           public get triggerObservable(): Observable < void > {
                               return this.trigger.asObservable();
                           }

                           UpdateReg(){
                               if(this.appointment.pateintPhone=="" || this.appointment.pateintPhone == null){
                                   this.toastr.warning("Please Enter Phone Number","Warning")
                                   return
                               }
                               if(this.appointment.pateintName=="" || this.appointment.pateintName==null || !isNaN(this.appointment.pateintName)){
                                   this.toastr.warning("Please Enter Name","Warning")
                                   return
                               }
                               if(this.field_age && ((this.appointment.age=="" || this.appointment.age==null) || (this.appointment.age<1 || this.appointment.age>100 || isNaN(this.appointment.age)))){
                                   this.toastr.warning("Please Enter age","Warning")
                                   return
                               }
                               if(this.field_dob && (this.appointment.dob=="" || this.appointment.dob==null)){
                                   this.toastr.warning("Please Enter date of birth","Warning")
                                   return
                               }
                               if(this.appointment.gender=="Select"){
                                   this.toastr.warning("Please Enter gender","Warning")
                                   return
                               }
                               if(this.appointment.city == null || this.appointment.city == "" || this.appointment.city == undefined || this.appointment.city.trim().length<1
                                   ||this.appointment.location == null || this.appointment.location == "" || this.appointment.location == undefined || this.appointment.location.trim().length<1){
                                   this.toastr.warning("Please Enter address","Warning")
                               return
                           }
                           if(this.appointment.weight !=null && this.appointment.weight!='' && (this.appointment.weight < 1 || this.appointment.weight > 150 || isNaN(this.appointment.weight))){
                               this.toastr.warning("Please Enter weight","Warning")
                               return
                           }else if(this.appointment.height !=null && this.appointment.height!='' && (this.appointment.height < 1 || this.appointment.height > 240 || isNaN(this.appointment.height))){
                               this.toastr.warning("Please Enter height","Warning")
                               return
                           }
                           $("#pateintConsultaionDetail").modal("hide");
                           var ob ;
                           ob = {}
                           ob.registration = this.appointment
                           ob.appointment_detail = this.appointment
                           if(this.reportPics.length>0){
                               ob.reportPics = this.reportPics
                           }
                           if(this.pateintPic != null && this.pateintPic !=''){
                               ob.pateintPic = this.pateintPic            
                           }
                           ob.lat = this.lat            
                           ob.lng = this.lng            
                           console.log(ob)
                           this.loading = true
                           this.userService.UpdateReg(ob).subscribe(data => {
                               console.log(data)
                               this.loading = false
                               if (data.response == true) {
                                   this.toastr.success(data.message,"Success")
                                   this.socket.emit('registrationBooked',{
                                       room_id: this.smartAssistantData.dataSmartAssistant._id.toString()
                                   })
                                   this.ngOnInit()
                               }
                           }, err => {
                               console.log(err);
                           })
                       }

                       SearchPatientName(data){
                           data = data.toLowerCase()
                           if (data && data.trim() != '') {
                               this.patientList = this.patientList1.filter((item) => {
                                   let b = item.name.toLowerCase()
                                   return (b.indexOf(data) > -1)
                               })
                           }
                           if (data == '') {
                               this.patientList = this.patientList1;
                           }
                       }

                       findPatientNameFromPhone(data) {
                           if (!isNaN(data)) {
                               data = data.trim() 
                               if(data.length>0){
                                   let object 
                                   object = {}
                                   object.clinic_id = this.appointment.doctor_id.doctm_clinic_id
                                   object.mobile = data
                                   this.userService.GetPatientDetail(object).subscribe(data => {
                                       console.log(data)
                                       this.patientList = []
                                       this.patientList1 = []
                                       if (data.response == true) {
                                           if(data.data.length==1){
                                               this.appointment.pateintName = data.data[0].name
                                           }else{
                                               this.patientList = data.data
                                               this.patientList1 = data.data
                                           }
                                       }
                                   }, err => {
                                       console.log(err);
                                   })
                               }
                           }
                       }

                       deleteReg(data){
                           let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
                               data: data.pateintName + "'s registration"
                           });

                           dialogRef.afterClosed().subscribe(result => {
                               console.log('The dialog was closed');
                               if (result == "yes") {
                                   this.userService.DeleteReg(data._id).subscribe(data => {
                                       console.log(data);
                                       if (data.response == true) {
                                           this.toastr.success(data.message, "Success");
                                           this.socket.emit('registrationBooked',{
                                               room_id: this.smartAssistantData.dataSmartAssistant._id.toString()
                                           })
                                           this.ngOnInit()
                                       } else {
                                           this.toastr.error(data.message, "Error");
                                       }
                                   }, err => {
                                       console.log(err);
                                   })
                               } else {
                                   console.log("error or No Thanks button clicked")
                               }
                           });
                       }

                       SearchCity(data){
                           data = data.toLowerCase()
                           if (data && data.trim() != '') {
                               this.citiesList = this.citiesList1.filter((item) => {
                                   let b = item.name.toLowerCase()
                                   return (b.indexOf(data) > -1)
                               })
                           }
                           if (data == '') {
                               this.citiesList = this.citiesList1;
                           }
                       }

                       SearchLocation(data) {
                           data.replace(" ", "")
                           let object = {
                               search: data,
                               lat: this.lat,
                               lng: this.lng
                           }
                           this.userService.SearchLocation(object).subscribe(data => {
                               console.log(data)
                               this.locationSuggestionDB = []
                               for (var i = 0; i < data.data.predictions.length; i++) {
                                   var string = data.data.predictions[i].structured_formatting.main_text
                                   this.locationSuggestionDB.push(string)
                               }
                           })
                       }

                       GetLatLng($event){
                           console.log($event);
                           this.appointment.city=JSON.parse(JSON.stringify($event)).formatted_address;
                           console.log(this.appointment.city)
                           this.lat = JSON.parse(JSON.stringify($event.geometry.location)).lat;
                           this.lng = JSON.parse(JSON.stringify($event.geometry.location)).lng;
                           console.log(this.lat+' '+this.lng);
   /*      var string = city +","+this.state
        string = string.replace(" ","")
        var object = {
            string: string.trim()
        }
        console.log(object)
        this.userService.GetLatLng(object).subscribe(data=>{
            console.log(data)
            if(data.response==true){
                this.lat = data.data[0].latitude
                this.lng = data.data[0].longitude
            }
        })  */   
    }

    handleAddressChange($event) {
        //alert('');
        this.lat = JSON.parse(JSON.stringify($event.geometry.location)).lat;
        this.lng = JSON.parse(JSON.stringify($event.geometry.location)).lng;
        this.appointment.location = $event.name
    }
    checkWhichFieldsToShowNew(id){
        console.log(id)
    }

    digitalPresc(item, i){
        item.serial_number=i;
        this.bodyIndicatorSelected  =[]
        if(item.temp != '' && item.temp != null && item.temp != undefined){
            this.bodyIndicator.temp = item.temp
        }
        if(item.pulse != '' && item.pulse != null && item.pulse != undefined){
            this.bodyIndicator.pulse = item.pulse
        }
        if(item.bp != '' && item.bp != null && item.bp != undefined){
            this.bodyIndicator.sys = item.bp
        }
        if(item.dia != '' && item.dia != null && item.dia != undefined){
            this.bodyIndicator.dia = item.dia
        }
        if(item.rbs != '' && item.rbs != null && item.rbs != undefined){
            this.bodyIndicator.rbs = item.rbs
        }
        if(item.spo != '' && item.spo != null && item.spo != undefined){
            this.bodyIndicator.spo = item.spo
        }

        this.setAllShiftsForPreview(item.doctor_id)  
        //this.doctorArrayObject = item.doctor_id
        this.newDoctorObject = item.doctor_id
        this.patientData = item
        

        if (this.bodyIndicator.temp != 'Select' && this.bodyIndicator.temp != undefined ) {
            if (this.bodyIndicatorSelected.indexOf('Temp: ' + this.bodyIndicator.temp + 'F') == -1) {
                this.bodyIndicatorSelected.push('Temp: ' + this.bodyIndicator.temp + 'F');
            }
        }
        if (this.bodyIndicator.sys != 'Select' && this.bodyIndicator.sys != undefined ) {
            if (this.bodyIndicatorSelected.indexOf('BP: ' + this.bodyIndicator.sys + '/' + this.bodyIndicator.dia) == -1) {
                this.bodyIndicatorSelected.push('BP: ' + this.bodyIndicator.sys + '/' + this.bodyIndicator.dia + 'mmHg');
            }
        }
        if (this.bodyIndicator.pulse != 'Select' && this.bodyIndicator.pulse != undefined ) {
            if (this.bodyIndicatorSelected.indexOf('Pulse: ' + this.bodyIndicator.pulse) == -1) {
                this.bodyIndicatorSelected.push('Pulse: ' + this.bodyIndicator.pulse + 'pm');
            }
        }
        if (this.bodyIndicator.spo != 'Select' && this.bodyIndicator.spo != undefined ) {
            if (this.bodyIndicatorSelected.indexOf('SpO2: ' + this.bodyIndicator.spo) == -1) {
                this.bodyIndicatorSelected.push('SpO2: ' + this.bodyIndicator.spo + "%");
            }
        }
        if (this.bodyIndicator.rbs != 'Select' && this.bodyIndicator.rbs != undefined ) {
            if (this.bodyIndicatorSelected.indexOf('RBS: ' + this.bodyIndicator.rbs) == -1) {
                this.bodyIndicatorSelected.push('RBS: ' + this.bodyIndicator.rbs + "mg/dL");
            }
        }
        if (this.bodyIndicator.dia != 'Select' && this.bodyIndicator.dia != undefined ) {
            if (this.bodyIndicatorSelected.indexOf('DIA: ' + this.bodyIndicator.dia) == -1) {
                this.bodyIndicatorSelected.push('DIA: ' + this.bodyIndicator.dia + "mg/dL");
            }
        }
        if (!this.bodyIndicatorComplete) {
            this.bodyIndicatorComplete = true;
            console.log(this.bodyIndicatorSelected)
        }
        console.log(item)
        var newDate = new Date()
        newDate.setDate(newDate.getDate() + 1)
        //this.doctorArrayObject = item.doctor_id
        var getYear = new Date()
        var newOne = getYear.getFullYear()
        console.log(newOne -parseInt(item.doctor_id.practicing_since))
        this.getExperienceYear = newOne -parseInt(item.doctor_id.practicing_since)
        console.log("working")
        //$("#myModela").modal("show");getFooterText
        if(!item.doctor_id.pad_customization_options ||item.doctor_id.pad_customization_options.length<1){
            this.getFooterText  = "Not for Medico-Legal Purpose"
        }else{
            this.getFooterText =  item.doctor_id.pad_customization_options[12].text
        }
        if(!this.doctorArrayObject.pad_customization_options || this.doctorArrayObject.pad_customization_options.length<1){
            this.getHeaderText =  "PLEASE TAKE PRIOR APPOINTMENT"
        }else{
            this.getHeaderText =  this.doctorArrayObject.pad_customization_options[8].text
        }
        $("#previewModalNewABCD").modal("show");  

    }

    jsUcfirst(string) 
    {
        if(string){
            return string.toUpperCase();
        }else{
            return "";
        }
    }
    check_age(item){
        if(!item.dob){


            if(!item.new_age){
                return item.age;
            }else{
                if(item.new_age.includes('months')){
                    return item.new_age+', ';
                }else if(item.new_age.includes('years')){
                    return item.new_age.split('years')[0]
                }else if(item.age){
                    return item.age;
                }
            }
        }else{
            return item.age;
        }


    }
}