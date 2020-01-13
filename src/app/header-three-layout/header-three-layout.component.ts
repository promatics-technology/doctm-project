import { BaThemePreloader, BaThemeSpinner } from '../theme/services';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../providers/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';
import * as io from "socket.io-client";
import { environment } from '../../environments/environment.prod';
import { MissionService } from '../providers/mission.service';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
declare var $:any
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-header-three-layout',
  templateUrl: './header-three-layout.component.html',
  styleUrls: ['./header-three-layout.component.css'],
  providers:[UserService,MissionService]
})

export class HeaderThreeLayoutComponent implements OnInit {
    smartAssistantData
    pulse_range
	auto_time
    sys_range
	genderClass
    dia_range
    temperature_range
    rbs_range
    spo_range
    dataDoctors
    lat
	allCities
    lng
    locationSuggestionDB
    field_dob: boolean
    field_age: boolean
    field_weight: boolean
    field_height: boolean
    field_temp: boolean
    field_pulse: boolean
    field_bp: boolean
    field_rbs: boolean
    field_spo: boolean
    field_patientPic: boolean
    field_testReport: boolean
    field_fee: boolean
    webCam: boolean
    appointmentsForCalender
    appointmentDate = new Date()
    appointmentTime
    appointmentDoctor
    shiftsOfParticularDay
    appointment
    dateSelected: boolean
    calendarOptions: Options;
	spo_class
    displayEvent: any;
    events = null;
    patientList
	clinicId
    patientList1


    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    private trigger: Subject < void > = new Subject < void > ()

    customTime
    customShifts
    consultationDoctor
    webCamOpenedBY
    reportPics
    pateintPic
    registrationData
    patientListReg
    patientListReg1
    numberWritten : boolean
    citiesList
    citiesList1
    state
    consultationType
    loading
    socket
    uploadedPatientPic
    pateintPicPath
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }
    //////////////
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
    lastVisit
    consultingPatient
    dispensedPatientSelected
    uploadedPrescriptionPath
	sys_class

    pateintConsultaionDetail
    prescription_id
    doctorArrayObject
    getHolidayList
    digitalTrue
    getDataDoctor
    todayDate = new Date()
    doctorScheduleHolidays
    getAllDates
    showListOfHoliday
    getOPDHOliday
    getOPDHOlidayCopy
    appointmentDoctorCopy
    appointmentDoctorSecondCopy
    currentDocForData
    dob_class
    temp_class
    rbs_class
    dia_class
    pulse_class
	area_suggestions=[]
	area_suggestions1=[]
    //////////////
    constructor(private missionService: MissionService,private _spinner: BaThemeSpinner,
     private formBuilder: FormBuilder, private toastr: ToastrService, private userService: UserService, private router: Router, private datePipe: DatePipe) {
		 
		
	 }
    ngOnInit() {
		var response={
   "message": "Data featched",
   "location": [
       {
           "city": "Ludhiana",
           "location": "Promatics Technologies"
       },
       {
           "city": "Ludhiana",
           "location": "New Vishwakarma Nagar",
           "lat": 30.8958021,
           "lng": 75.90023040000005
       },
       {
           "city": "Ludhiana",
           "location": "Promatics Technologies"
       },
       {
           "city": "Ludhiana",
           "location": "Promatics Technologies Pvt.Ltd",
           "lat": 28.4185204,
           "lng": 77.03808419999996
       },
       {
           "city": "Ludhiana",
           "location": "New Vishwakarma Nagar",
           "lat": 30.8958021,
           "lng": 75.90023040000005
       },
       {
           "city": "Ludhiana",
           "location": "Model Town",
           "lat": 30.8883034,
           "lng": 75.84017760000006
       },
       {
           "city": "Ludhiana",
           "location": "Model Town",
           "lat": 30.8883034,
           "lng": 75.84017760000006
       },
       {
           "city": "Ludhiana",
           "location": "New Vishwakarma Nagar"
       },
       {
           "city": "Ludhiana",
           "location": "New Vishwakarma Nagar",
           "lat": 30.8958021,
           "lng": 75.90023040000005
       },
       {
           "city": "Ludhiana",
           "location": "New Vishwakarma Nagar"
       }
   ],
   "response": true
};
/* 		this.area_suggestions=response.location;
		this.area_suggestions1=response.location; */
        this.genderClass="grey-placeholder";
		this.sys_class="grey-placeholder";
		this.dob_class="grey-placeholder";
		this.temp_class="grey-placeholder";
		this.rbs_class="grey-placeholder";
		this.dia_class="grey-placeholder";
		this.pulse_class="grey-placeholder";	
		this.spo_class="grey-placeholder";
		
        this.getHolidayList = []
        this.smartAssistantData = JSON.parse(localStorage['smartAssistantDetails'])

        this.socket = io(environment.socket)
        this.pateintPicPath = environment.patientPic
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
        this.webCam = false
        this.appointmentDoctor = ""
        this.appointment = {}
        this.appointmentTime = {}
        this.dateSelected = false
        this.patientList = []
        this.patientList1 = []
        this.customTime = {hour: 18, minute: 30}
        this.customShifts = []
        this.reportPics = []
        this.pateintPic = null
        this.registrationData = {}
        this.registrationData.type = ""
        this.registrationData.gender = "Select"
        this.registrationData.temp = ""
        this.registrationData.pulse = ""
        this.registrationData.bp = ""
        this.registrationData.dia = ""
        this.registrationData.rbs = ""
        this.registrationData.spo = "Select"
        this.patientListReg = []
        this.patientListReg1 = []
        this.numberWritten = false
        this.consultationType = [
            'Appointment',
            'Walk-in',
            'Emergency'
        ]
        this.uploadedPatientPic = null
        /////////////////SOCKET ON//////////////////////
        this.socket.emit('room join',{
            room_id: this.smartAssistantData.dataSmartAssistant._id.toString()
        })
        this.socket.on('room join', (msg: any) => {
            if(msg.room_id.toString() == this.smartAssistantData.dataSmartAssistant._id.toString()){
                console.log("socket connected")
                // this.missionService.announceMission("reload_smart_assistant_page");
            }
        });

        this.socket.on('room leave', (msg: any) => {
            if(msg.room_id.toString() == this.smartAssistantData.dataSmartAssistant._id.toString()){
                console.log("socket disconnected")
                this.missionService.announceMission("reload_smart_assistant_page");
            }
        });        
        this.socket.on('digitalPresc', (msg: any) => {
            this.missionService.announceMission("reload_smart_assistant_page");
            console.log("digitalPresc")
        });
        this.socket.on('opdHoliday', (msg: any) => {
            this.ngOnInit()
            this.missionService.announceMission("reload_smart_assistant_page");
            console.log("opdHoliday")
        });
        this.socket.on('patientSelected', (msg: any) => {
            this.missionService.announceMission("reload_smart_assistant_page");
        });        
        //////////////-----SOCKET ON------////////////////
        this.consultationDoctor = "Select Doctor"
        
				this.allCities=[];
			 
	
		
		
    }
	
	changeClass(myclass){
		if(myclass=='sys_class'){
			this.sys_class="black-class"
		}
		if(myclass=='genderClass'){
			this.genderClass="black-class"
		}
		if(myclass=='dobClass'){
			this.dob_class="black-class"
		}
		if(myclass=='tempClass'){
			this.temp_class="black-class"
		}
		if(myclass=='diaClass'){
			this.dia_class="black-class"
		}
		if(myclass=='pulseClass'){
			this.pulse_class="black-class"
		}
		if(myclass=='rbsClass'){
			this.rbs_class="black-class"
		}
		
		if(myclass=='spoClass'){
			this.spo_class="black-class"
		}
	}

    public ngAfterViewInit(): void {
        // hide spinner once all loaders are completed
        BaThemePreloader.load().then((values) => {
            this._spinner.hide();
        });
    }
    GetSmartAssistantDataAfterLogin() {
        let object = {
            smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
        }
        this.userService.GetSmartAssistantDataAfterLogin(object).subscribe(data => {
            console.log(data)
            this.dataDoctors = []
            if (data.response == true) {
                this.dataDoctors = data.doctorsRegisteredForSmartClinic
                this.doctorArrayObject = this.dataDoctors[0]
                this.currentDocForData = data.doctorsRegisteredForSmartClinic
				this.clinicId=this.dataDoctors[0].clinic_details.clinic_id;
                if(this.dataDoctors.length==1){
                    this.consultationDoctor = this.dataDoctors[0]._id
                    this.appointmentDoctor = this.dataDoctors[0]._id
					
                } else{
                    for (var i = 0; i < this.dataDoctors.length; i++) {
                        if(this.dataDoctors[i].type_of_doctor == "admin_doctor"){
                            this.consultationDoctor = this.dataDoctors[i]._id
                            this.appointmentDoctor = this.dataDoctors[i]._id
                            this.appointmentDoctorCopy= this.dataDoctors[i]._id
                            break
                        }
                    }
                } 
                this.checkWhichFieldsToShow(this.consultationDoctor);
                this.appointmentDoctor = "Select App"
                this.setAllShiftsForPreview()
            }
        }, err => {
            console.log(err);
        })
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
	
	SearchLocationSuggestions(){

		let object={
			city:this.registrationData.city,
			smart_assistant_id:this.smartAssistantData.dataSmartAssistant._id
		}
	  this.userService.SearchLocationSuggestions(object).subscribe(data => {
            console.log(data)
            this.area_suggestions=data.location;
			this.area_suggestions1=data.location;
        })
	}
	
	changeCity($event){
		console.log($event.name);
		this.registrationData.city=$event.name;
	}
    handleAddressChange($event) {
        this.lat = JSON.parse(JSON.stringify($event.geometry.location)).lat;
        this.lng = JSON.parse(JSON.stringify($event.geometry.location)).lng;
        this.registrationData.location = $event.name
		console.log(JSON.stringify($event.name));
		//this.registrationData.city=$event.name;
    }
	
	handleAddressClick(data) {
		console.log('suggested address clicked');
		console.log(data.option);
		 this.lat = data.option.value.lat;
        this.lng = data.option.value.lng;
        this.registrationData.location = data.option.value.location
		console.log(data);
    }
    checkWhichFieldsToShow(doctor) {
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
        this.digitalTrue = false
        var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.consultationDoctor.toString())
		console.log(doctor);
        this.registrationData.fee = doctor[0].consultation_fee
        for (var i = 0; i < doctor[0].reg_fields.length; i++) {
            if(doctor[0].reg_fields[i].value=="DOB"){
                this.field_dob = true
            } else if(doctor[0].reg_fields[i].value=="Age"){
                this.field_age = true
            } else if(doctor[0].reg_fields[i].value=="Weight"){
                this.field_weight = true
            } else if(doctor[0].reg_fields[i].value=="Height"){
                this.field_height = true
            } else if(doctor[0].reg_fields[i].value=="Bodytemperature"){
                this.field_temp = true
            } else if(doctor[0].reg_fields[i].value=="Pulse"){
                this.field_pulse = true
            } else if(doctor[0].reg_fields[i].value=="BloodPressure(BP)"){
                this.field_bp = true
            } else if(doctor[0].reg_fields[i].value=="RandomBloodSugar(RBS)"){
                this.field_rbs = true
            } else if(doctor[0].reg_fields[i].value=="SpO2"){
                this.field_spo = true
            } else if(doctor[0].reg_fields[i].value=="Patientphoto"){
                this.field_patientPic = true
            } else if(doctor[0].reg_fields[i].value=="PatientTestreports"){
                this.field_testReport = true
            } else if(doctor[0].reg_fields[i].value=="ConsultationFee"){
                this.field_fee = true
            } else if(doctor[0].digital_precipitation == true){
                this.digitalTrue = true
            }
        }
        console.log(doctor[0].digital_precipitation)
        this.userService.GetCityFromClinicId(this.clinicId).subscribe(data => {
            console.log(data)
			//alert(data.city);
            this.citiesList = [];
            this.citiesList1 = data.data
            this.state = data.state
            var city = this.citiesList.filter(d=>doctor[0].clinic_details.city == d.name)
			if(!this.registrationData.city){
            this.registrationData.city= data.city
			}
            this.GetPatientLastPrescription()
        }, err => {
            console.log(err);
        })
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
    handleImage(webcamImage) {
        console.info('received webcam image', webcamImage);
        if(this.webCamOpenedBY=='patient'){
            this.pateintPic = webcamImage._imageAsDataUrl
            this.uploadedPatientPic = null
        }else if(this.webCamOpenedBY=='report'){
            this.reportPics.push(webcamImage._imageAsDataUrl)
        }
    }
    removeImageFromReportPics(i){
        this.reportPics.splice(i,1)
    }
    public get triggerObservable(): Observable < void > {
        return this.trigger.asObservable();
    }
    findPatientNameFromPhone(data) {
        if (!isNaN(data)) {
            data = data.trim() 
            if(data.length>0){
                let object 
                object = {}
                var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.appointmentDoctor.toString())
                if(this.appointmentDoctor =="Select App"){
                    this.toastr.warning('Select doctor first', 'Warning')
                    return
                }
                object.clinic_id = doctor[0].doctm_clinic_id
                object.mobile = data
                this.userService.GetPatientDetail(object).subscribe(data => {
                    
                    console.log(data)
                    this.patientList = []
                    this.patientList1 = []
                    if (data.response == true) {
                        if(data.data.length==1){
                            this.appointment.name = data.data[0].name
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

    GetPatientLastPrescription(){
        if(this.registrationData.name && this.registrationData.name != null && this.registrationData.name !='' && this.registrationData.name.trim().length>0){
            let object 
            object = {}
            var doctor = this.dataDoctors.filter(d=>d._id.toString() == this.consultationDoctor.toString())
            console.log(doctor)
			if(doctor){
				if(doctor[0]){
            object.clinic_id = doctor[0].doctm_clinic_id
				}
			}
            object.mobile = this.registrationData.phone
            object.name = this.registrationData.name
            this.userService.GetPatientLastPrescription(object).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                   // this.registrationData = data.data.registration
                    this.registrationData.name = data.data.registration.pateintName
                    this.registrationData.phone = data.data.registration.pateintPhone                    
                    this.lat = data.data.registration.lat                    
                    this.lng = data.data.registration.lng                              
                    this.registrationData.weight = ""
                    this.registrationData.height = ""
                    this.registrationData.temp = ""
                    this.registrationData.pulse = ""
                    this.registrationData.bp = ""
                    this.registrationData.dia = ""
                    this.registrationData.rbs = ""
                    this.registrationData.spo = ""
                    if(data.data.registration.dob){
                        var diff_ms = Date.now() - new Date(data.data.registration.dob).getTime();
                        var age_dt = new Date(diff_ms); 
                        this.registrationData.age = Math.abs(age_dt.getUTCFullYear() - 1970);
                    }
                    if(data.data.registration.pateintPic){
                        this.uploadedPatientPic = data.data.registration.pateintPic
                        this.registrationData.isPatientPic = true
                        this.registrationData.uploadedPatientPic = this.uploadedPatientPic
                    }
                }
            }, err => {
                console.log(err);
            })
        }
    }

    GetPatientLastPrescriptionByName(){
		console.log(this.registrationData);
        if (!isNaN(this.registrationData.phone)) {
            this.registrationData.phone = this.registrationData.phone.trim() 
            if(this.registrationData.phone.length>0){
                this.GetPatientLastPrescription()
            }
        }
		this.getPatientInfo(this.registrationData);
    }

    fillInfo($event){
		if (!isNaN(this.registrationData.phone)) {
            this.registrationData.phone = this.registrationData.phone.trim() 
            if(this.registrationData.phone.length>0){
                this.GetPatientLastPrescription()
            }
        }
		this.registrationData.name=$event.option.value;
		//this.getPatientInfo(this.registrationData);
		this.genderClass="black-class"
		this.dob_class="black-class"
		var ob={'phone':this.registrationData.phone,
		'name': this.registrationData.name}
		this.findPatientAppointmentByPhoneAndName(ob);
		
		
	}
	    findPatientAppointmentByPhone(data) {
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
        this.digitalTrue = false
		this.registrationData.age_param="Years";
        if(this.registrationData.phone.length<10){
            this.toastr.warning("Please fill atleast 10 digits number", "Warning")
            return
        }
        if (!isNaN(data)) {
            data = data.trim() 
            if(data.length>0){                
                let ob = {
                    mobile:data,
                    smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
                }
                this.userService.FindPatientAppointmentByPhone(ob).subscribe(dataReceived => {
                    console.log(dataReceived)
                    this.GetPatientLastPrescription()
					console.log("Data Received");
					console.log(dataReceived);
                    if (dataReceived.response == true) {
                        this.toastr.success(dataReceived.message,"Success")
                        this.patientListReg = []
                        this.patientListReg1 = []
                        this.registrationData.name = dataReceived.data[0].patient_id.name
                        this.registrationData.type = "Appointment"
                        this.registrationData.appointment_detail = dataReceived.data[0]
						this.registrationData.gender=dataReceived.data[0].patient_id.gender
						if(this.registrationData.gender){
							  this.genderClass="black-class"
									//   this.dob_class="black-class"
						}
                        this.consultationDoctor = dataReceived.data[0].doctor_id
                        this.checkWhichFieldsToShow(this.consultationDoctor)
						/** Get Patient Details **/
						  let object 
                            object = {}
                            var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.consultationDoctor.toString())
							if(doctor[0]){
                            object.clinic_id = doctor[0].doctm_clinic_id
							}
                            object.mobile = data
							console.log('here');
                            this.userService.GetPatientDetail(object).subscribe(data2 => {
                                this.consultationDoctor = this.consultationDoctor
                                console.log(data2)
                                this.GetPatientLastPrescription()
                                if (data2.response == true) {
                                    if(data2.data.length==1){
									   this.genderClass="black-class"
									   this.dob_class="black-class"
                                       this.registrationData.name = data2.data[0].name
                                       this.registrationData.dob = data2.data[0].dob
                                       this.registrationData.gender = data2.data[0].gender
                                       this.registrationData.age = data2.data[0].age
                                       this.registrationData.city = data2.data[0].city
                                       this.registrationData.location = data2.data[0].address
									   if(data2.data[0].new_age){
										if(data2.data[0].new_age.includes("months")){
											   this.registrationData.age_param="Months"
										   }else{
											   this.registrationData.age_param="Years"
										   }
									   }else{
										   this.registrationData.age_param="Years"
									   }
                                    }else{
                                        this.patientListReg = data2.data
                                        this.patientListReg1 = data2.data
                                    }
                                }
                            }, err => {
                                console.log(err);
                            })
						/*************************/
                    }else{
						//this.consultationDoctor = "Select Doctor"
                        if(dataReceived.message == 'No appointment found for today'){
                            this.toastr.success(dataReceived.message,"Success")
                            this.consultationType = [
                                'Walk-in',
                                'Emergency'
                            ]
                            this.registrationData.type = "Walk-in"
                            let object 
                            object = {}
                            var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.consultationDoctor.toString())
							if(doctor[0]){
                            object.clinic_id = doctor[0].doctm_clinic_id
							}
                            object.mobile = data
							console.log('here');
                            this.userService.GetPatientDetail(object).subscribe(data2 => {
                                this.consultationDoctor = "Select Doctor"
                                console.log(data2)
                                this.GetPatientLastPrescription()
                                if (data2.response == true) {
                                    if(data2.data.length==1){
									   this.genderClass="black-class"
									   this.dob_class="black-class"
                                       this.registrationData.name = data2.data[0].name
                                       this.registrationData.dob = data2.data[0].dob
                                       this.registrationData.gender = data2.data[0].gender
                                       this.registrationData.age = data2.data[0].age
                                       this.registrationData.city = data2.data[0].city
                                       this.registrationData.location = data2.data[0].address
									   if(data2.data[0].new_age){
										   if(data2.data[0].new_age.includes("months")){
											   this.registrationData.age_param="Months"
										   }else{
											   this.registrationData.age_param="Years"
										   }
									   }else{
										   this.registrationData.age_param="Years"
									   }
                                    }else{
                                        this.patientListReg = data2.data
                                        this.patientListReg1 = data2.data
                                    }
                                }
                            }, err => {
                                console.log(err);
                            })
                        }else{
                            this.toastr.error(dataReceived.message,"Error")
                        }
                    }
                }, err => {
                    console.log(err);
                })
            }
        }else{
            this.toastr.warning("Invalid phone number","Warning")
        }
    }
	
	
	findPatientAppointmentByPhoneAndName(data) {
		
		console.log(data);
		this.GetPatientLastPrescriptionByName();
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
        this.digitalTrue = false
        if(this.registrationData.phone.length<10){
            this.toastr.warning("Please fill atleast 10 digits number", "Warning")
            return
        }
        if (!isNaN(data.phone)) {
            data.phone = data.phone.trim() 
            if(data.phone.length>0){                
                let ob = {
                    mobile:data.phone,
                    smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id,
					name:data.name
                }
                this.userService.FindPatientAppointmentByPhone(ob).subscribe(dataReceived => {
                    console.log(dataReceived)
                    this.numberWritten = true
                    this.GetPatientLastPrescription()
					console.log("Data Received");
					console.log(dataReceived);
                    if (dataReceived.response == true) {
						this.consultationType = [
                                'Appointment'
                            ]
                        this.registrationData.type = "Appointment"
                        this.toastr.success(dataReceived.message,"Success")
                        this.patientListReg = []
                        this.patientListReg1 = []
                        this.registrationData.name = dataReceived.data[0].patient_id.name
                        this.registrationData.type = "Appointment"
                        this.registrationData.appointment_detail = dataReceived.data[0]
                        this.consultationDoctor = dataReceived.data[0].doctor_id
                        this.checkWhichFieldsToShow(this.consultationDoctor)
						
						
						/** Get Patient Details **/
						  let object 
                            object = {}
                            var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.consultationDoctor.toString())
							if(doctor[0]){
                            object.clinic_id = doctor[0].doctm_clinic_id
							}else{
								object.clinic_id=this.clinicId
							}
                            object.mobile = data.phone
							object.name=data.name
							console.log('here');
                            this.userService.GetPatientDetail(object).subscribe(data2 => {
                                this.consultationDoctor = this.consultationDoctor
                                console.log(data2)
                                this.GetPatientLastPrescription()
                                if (data2.response == true) {
									//alert(data2.data.length);
                                    if(data2.data.length==1){
                                       this.registrationData.name = data2.data[0].name
                                       this.registrationData.dob = data2.data[0].dob
									   if(data2.data[0].dob){
										     this.dob_class="black-class"
									   }
									   if(data2.data[0].gender){
                                       this.registrationData.gender = data2.data[0].gender
									   this.genderClass="black-class"
									 
									   }else{
									  this.registrationData.gender = "Select"

									   }
									   this.registrationData.age_param="years"
									   if(data2.data[0].age_in_years >0){
                                       this.registrationData.age = data2.data[0].age_in_years
									   this.registrationData.age_param="years"
										}else{
											if(data2.data[0].age_in_months){
												 this.registrationData.age_param="months"
											}
											
											 if(data2.data[0].age_in_months){
												  this.registrationData.age_param="months"
												  this.registrationData.age = data2.data[0].age_in_months
											}
											
									 
										}
                                       this.registrationData.city = data2.data[0].city
									                 this.userService.GetCityFromClinicId(this.clinicId).subscribe(data => {
            console.log(data)
            //alert(data.city);
            this.citiesList = [];
            this.citiesList1 = data.data
            this.state = data.state
            var city = this.citiesList.filter(d=>doctor[0].clinic_details.city == d.name)
            if(!this.registrationData.city){
            this.registrationData.city= data.city
            }
        }, err => {
            console.log(err);
        })
                                       this.registrationData.location = data2.data[0].address
                                    }else{
                                        this.patientListReg = data2.data
                                        this.patientListReg1 = data2.data
                                    }
                                }
                            }, err => {
                                console.log(err);
                            })
						/*************************/
                    }else{
						//this.consultationDoctor = "Select Doctor"
                        if(dataReceived.message == 'No appointment found for today'){
                            this.toastr.success(dataReceived.message,"Success")
                            this.consultationType = [
                                'Walk-in',
                                'Emergency'
                            ]
                            this.registrationData.type = "Walk-in"
                            let object 
                            object = {}
                            var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.consultationDoctor.toString())
							if(doctor[0]){
                            object.clinic_id = doctor[0].doctm_clinic_id
							}else{
								object.clinic_id=this.clinicId;
							}
                            object.mobile = data.phone
							object.name = data.name
							console.log('here');
                            this.userService.GetPatientDetail(object).subscribe(data2 => {
                                this.consultationDoctor = "Select Doctor"
                                console.log(data2)
                                this.GetPatientLastPrescription()
								//alert(data2.response);
                                if (data2.response == true) {
									//alert(data2.data.length);
                                    if(data2.data.length==1){
									   this.genderClass="black-class"
									   this.dob_class="black-class"
                                       this.registrationData.name = data2.data[0].name
                                       this.registrationData.dob = data2.data[0].dob
                                       this.registrationData.gender = data2.data[0].gender
                                        if(data2.data[0].age_in_years >0){
                                       this.registrationData.age = data2.data[0].age_in_years
									   this.registrationData.age_param="years"
										}else{
											this.registrationData.age =data2.data[0].age_in_months
									   this.registrationData.age_param="months"
										}
                                       this.registrationData.city = data2.data[0].city
                                       this.registrationData.location = data2.data[0].address
									  // alert(data2.data[0].new_age);
									    
                                    }else{
                                        this.patientListReg = data2.data
                                        this.patientListReg1 = data2.data
                                    }
                                }else{
								this.registrationData = {}
                                 this.genderClass="grey-placeholder";
                                this.sys_class="grey-placeholder";
                                this.dob_class="grey-placeholder";
                                this.temp_class="grey-placeholder";
                                this.rbs_class="grey-placeholder";
                                this.dia_class="grey-placeholder";
                                this.pulse_class="grey-placeholder"; 
								this.spo_class="grey-placeholder"
                                this.registrationData = {}
                                this.registrationData.type = ""
                                this.registrationData.gender = "Select"
                                this.registrationData.temp = ""
                                this.registrationData.pulse = ""
                                this.registrationData.bp = ""
                                this.registrationData.dia = ""
                                this.registrationData.rbs = ""
                                this.registrationData.spo = "Select"
								this.registrationData.phone=data.phone
								this.registrationData.name=data.name
								this.registrationData.age_param="years"
								this.consultationType = [
                                'Walk-in',
                                'Emergency'
                            ]
                            this.registrationData.type = "Walk-in"
                               this.userService.GetCityFromClinicId(this.clinicId).subscribe(data => {
            console.log(data)
            //alert(data.city);
            this.citiesList = [];
            this.citiesList1 = data.data
            this.state = data.state
            var city = this.citiesList.filter(d=>doctor[0].clinic_details.city == d.name)
            if(!this.registrationData.city){
            this.registrationData.city= data.city
            }
            this.GetPatientLastPrescription()
        }, err => {
            console.log(err);
        })

								}
                            }, err => {
                                console.log(err);
                            })
                        }else{
                            this.toastr.error(dataReceived.message,"Error")
                        }
                    }
                }, err => {
                    console.log(err);
                })
            }
        }else{
            this.toastr.warning("Invalid phone number","Warning")
        }
		
		this.SearchLocationSuggestions();
    }
	
    findPatientAppointmentByPhoneKey(event, data) {
		
		if(event.keyCode==13){
		//alert('hii');
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
        this.digitalTrue = false
			this.registrationData.age_param="Years";
        if(this.registrationData.phone.length<10){
            this.toastr.warning("Please fill atleast 10 digits number", "Warning")
            return
        }
        if (!isNaN(data)) {
            data = data.trim() 
            if(data.length>0){                
                let ob = {
                    mobile:data,
                    smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
                }
                this.userService.FindPatientAppointmentByPhone(ob).subscribe(dataReceived => {
                    console.log(dataReceived)
                    this.numberWritten = true
                   // this.GetPatientLastPrescription()
					console.log("Data Received");
					console.log(dataReceived);
                    if (dataReceived.response == true) {
						if(dataReceived.data.length==1){
					//	alert(dataReceived.data.length);
                        this.toastr.success(dataReceived.message,"Success")
                        this.patientListReg = []
                        this.patientListReg1 = []
                        this.registrationData.name = dataReceived.data[0].patient_id.name
                        this.registrationData.type = "Appointment"
                        this.registrationData.appointment_detail = dataReceived.data[0]
                        this.consultationDoctor = dataReceived.data[0].doctor_id
						this.registrationData.gender=dataReceived.data[0].patient_id.gender
						if(this.registrationData.gender){
						this.genderClass="black-class"
						//this.dob_class="black-class"
						}
						 this.registrationData.dob = dataReceived.data[0].dob
                         //this.registrationData.gender = data2.data[0].gender
                         this.registrationData.age = dataReceived.data[0].age
						if(this.registrationData.dob){
						//this.genderClass="black-class"
						this.dob_class="black-class"
						}
                        this.checkWhichFieldsToShow(this.consultationDoctor)
						
						
						/** Get Patient Details **/
						  let object 
                            object = {}
                            var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.consultationDoctor.toString())
							if(doctor[0]){
                            object.clinic_id = doctor[0].doctm_clinic_id
							}
                            object.mobile = data
							//alert('here');
                            this.userService.GetPatientDetail(object).subscribe(data2 => {
                                this.consultationDoctor = this.consultationDoctor
                                console.log(data2)
                                this.GetPatientLastPrescription()
                                if (data2.response == true) {
                                    if(data2.data.length==1){
										//alert('hey')
									   this.genderClass="black-class"
									   this.dob_class="black-class"
                                       this.registrationData.name = data2.data[0].name
                                       this.registrationData.dob = data2.data[0].dob
                                       this.registrationData.gender = data2.data[0].gender
                                       this.registrationData.age = data2.data[0].age
                                       this.registrationData.city = data2.data[0].city
                                       this.registrationData.location = data2.data[0].address
									   if(data2.data[0].new_age){
										   //alert(data2.data[0].new_age);
										  if(data2.data[0].new_age.includes('months')){
											  this.registrationData.age_param="Months"
											  this.registrationData.age=data2.data[0].new_age.split('months')[0].toString().trim();
										  }else{
											  this.registrationData.age_param="Years"
											   this.registrationData.age=data2.data[0].new_age.split('years')[0].toString().trim();
										  }
									   }else{
										   this.registrationData.age_param="Years"
									   }
									   //alert('here');
									   //alert( this.registrationData.age_param);
                                    }else{
                                        this.patientListReg = data2.data
                                        this.patientListReg1 = data2.data
                                    }
									 
                                }
                            }, err => {
                                console.log(err);
                            })
						/*************************/
					}
                    }else{
						//this.consultationDoctor = "Select Doctor"
                        if(dataReceived.message == 'No appointment found for today'){
                            this.toastr.success(dataReceived.message,"Success")
                            this.consultationType = [
                                'Walk-in',
                                'Emergency'
                            ]
                            this.registrationData.type = "Walk-in"
                            let object 
                            object = {}
                            var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.consultationDoctor.toString())
							if(doctor[0]){
                            object.clinic_id = doctor[0].doctm_clinic_id
							}
                            object.mobile = data
							console.log('here');
                            this.userService.GetPatientDetail(object).subscribe(data2 => {
                                this.consultationDoctor = "Select Doctor"
                                console.log(data2)
                                this.GetPatientLastPrescription()
                                if (data2.response == true) {
                                   if(data2.data.length==1){
									   this.genderClass="black-class"
									   this.dob_class="black-class"
                                       this.registrationData.name = data2.data[0].name
                                       this.registrationData.dob = data2.data[0].dob
                                       this.registrationData.gender = data2.data[0].gender
                                       this.registrationData.age = data2.data[0].age
                                       this.registrationData.city = data2.data[0].city
                                       this.registrationData.location = data2.data[0].address
									    if(data2.data[0].new_age){
										  
										  if(data2.data[0].new_age.includes('months')){
											  this.registrationData.age_param="Months"
											  this.registrationData.age=data2.data[0].new_age.split('months')[0].toString().trim();
										  }else{
											  this.registrationData.age_param="Years"
											  this.registrationData.age=data2.data[0].new_age.split('years')[0].toString().trim();
										  }
									   }else{
										   this.registrationData.age_param="Years"
									   }
                                    }else{
                                        this.patientListReg = data2.data
                                        this.patientListReg1 = data2.data
                                    }
									                                }
                            }, err => {
                                console.log(err);
                            })
                        }else{
                            this.toastr.error(dataReceived.message,"Error")
                        }
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

    getPatientInfo(data){
							let object 
                            object = {}
                            var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.consultationDoctor.toString())
							if(doctor[0]){
                            object.clinic_id = doctor[0].doctm_clinic_id
							}else{
								object.clinic_id=this.clinicId
							}
                            object.mobile = data.phone
							if(data.name){
								object.name=data.name;
							}
							console.log('here');
                            this.userService.GetPatientDetail(object).subscribe(data2 => {
                              //  this.GetPatientLastPrescription()
                                if (data2.response == true) {
									
                                    if(data2.data.length==1){
                                       this.registrationData.name = data2.data[0].name
									   if(data2.data[0].dob){
                                       this.registrationData.dob = data2.data[0].dob
									   this.dob_class="black-class"
									   }else{
										    this.dob_class="grey-placeholder"
									   }
									   if(data2.data[0].gender){
                                       this.registrationData.gender = data2.data[0].gender
									    this.genderClass="black-class"
									 
									   }else{
										    this.genderClass="grey-placeholder"
									   }
                                       this.registrationData.age = data2.data[0].age
									   if(data2.data[0].city){
                                       this.registrationData.city = data2.data[0].city
									   }
                                       this.registrationData.location = data2.data[0].address
									   
									   console.log(data2.data[0].dob);
									    this.registrationData.age_param="years";
									   if(data2.data[0].age_in_years > 0){
										   this.registrationData.age=data2.data[0].age_in_years;
										   this.registrationData.age_param="years";
									   }
									   
									   if(data2.data[0].age_in_months > 0){
										   this.registrationData.age=data2.data[0].age_in_months;
										   this.registrationData.age_param="months";
									   }
                                    }else{
                                        this.patientListReg = data2.data
                                        this.patientListReg1 = data2.data
                                    }
                                }
                            }, err => {
                                console.log(err);
                            })
	}
    AppointmentsBySmartAssistant() {
		var ob = 		 {
							doctor_id :  this.appointmentDoctor
						 }
		this.userService.getAverageConsultationTime(ob).subscribe(data => {
							console.log(data)
							this.auto_time= parseInt(data.mins)
							}, err => {
						console.log(err);
						this.auto_time=3;
						});
		
		
		
        var currentDoc = {}
        console.log(this.appointmentDoctor)
        this.getOpdHolidays(this.appointmentDoctor)
        for (var i = 0; i < this.currentDocForData.length; i++) {
            console.log(this.currentDocForData[i]._id)
            if(this.currentDocForData[i]._id == this.appointmentDoctor){
                currentDoc = this.currentDocForData[i]
                break
            }
        }
        console.log(currentDoc)
        this.checkHoliday(currentDoc)
        // console.log(this.appointmentDoctor)
        if (this.appointmentDoctor == "" || this.appointmentDoctor == "Select App") {
            this.toastr.warning("Select doctor first", "Warning")
            return
        } else {
            let ob = {
                smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id,
                doctor_id : this.appointmentDoctor
            }
            this.userService.AppointmentsBySmartAssistant(ob).subscribe(data => {
                console.log(data)
                this.appointmentsForCalender = []
                if(data.response == true){
                    for (var i = 0; i < data.data.length; i++) {
                       /*  for (var j = 0; j < this.getOPDHOlidayCopy.length; j++) {
                            if(this.getOPDHOlidayCopy[j].date == data.data[i]._id){
                               this.deleteAppointment(data.data[i]._id)
                            }    
                        } */
                        this.appointmentsForCalender.push({
                            start : new Date(data.data[i]._id).toJSON().toString().substr(0,10),
                            title : data.data[i].time.length,
                            time : data.data[i].time,
                            textColor: '#2ac120'
                        })
                    }
                    // console.log(this.appointmentsForCalender)
                }
                // console.log(this.getOPDHOliday)
                for (var i = 0; i < this.getOPDHOliday.length; i++) {
                    // $("td[data-date='"+this.getOPDHOliday[i].date.split('T')[0]+"']").css('background-color','#FFB347');
                    this.appointmentsForCalender.push({
                        start : this.getOPDHOliday[i].start,
                        title : 'Closed',
                        textColor: 'grey'
                        // color: '#FFB347',
                        
                        //time : data.data[i].time
                    })
                    // $("td[data-date='"+this.getOPDHOliday[i].date.split('T')[0]+"']").css('background-color','#FFB347');
                }
                this.events = this.appointmentsForCalender
                this.calendarOptions = {
                    editable: true,
                    eventLimit: false,
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: ''
                    },
                    events: this.appointmentsForCalender,
                    // eventTextColor:'red'
                };
				// console.log('Appointment List');
				// console.log(this.appointmentsForCalender);
                

                $("#appointmentCalender").modal("show");
               
            }, err => {
                console.log(err);
            })
        }
    }
    clickButton(model: any) {
        this.displayEvent = model;
    }
    dayClick(model: any) {
		//alert(model.date._d);
        this.calenderDateClicked(model.date._d)
    }
    eventClick(model: any) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title,
                allDay: model.event.allDay
                // other params
            },
            duration: {}
        }
        this.displayEvent = model;
        this.calenderDateClicked(model.event.start._d)
    }
    calenderDateClicked(model){
        var localDate = model
        var today = new Date()
        today.setHours(0,0,0,0)
        if(new Date(today.setHours(0,0,0,0)) >= today){
            console.log(model);        
            var day = model.toString().substr(0, 3);
            var doctor
            var consulation
            this.appointmentDate = model
            if(today.setHours(0,0,0,0) > this.appointmentDate.setHours(0,0,0,0)){
                this.toastr.warning('You cant set appointment of past days')
                return
            }
            for (var i = 0; i < this.getHolidayList.length; i++) {
                console.log(new Date(this.getHolidayList[i].date).toJSON().toString().substr(0,10), model.toJSON().toString().substr(0,10))
                //if(this.getHolidayList[i].date == model){
                if(new Date(this.getHolidayList[i].date).toJSON().toString().substr(0,10) == this.datePipe.transform(localDate, 'yyyy-MM-dd')){
                    this.toastr.warning("Opd Holiday","Warning")
                    return
                }
            }
            doctor = {}
            for (var i = 0; i < this.dataDoctors.length; i++) {
                if (this.dataDoctors[i]._id == this.appointmentDoctor) {
                    doctor = this.dataDoctors[i]
                    break;
                }
            }
            // console.log(doctor)
            var boolean = true
            for (var i = 0; i < doctor.consultation_schedule.length; i++) {
                if (day == "Mon") {
                    if (doctor.consultation_schedule[i].Monday == true) {
                        consulation = doctor.consultation_schedule[i]
                        boolean = false
                        break
                    }
                } else if (day == "Tue") {
                    if (doctor.consultation_schedule[i].Tuesday == true) {
                        consulation = doctor.consultation_schedule[i]
                        boolean = false
                        break
                    }
                } else if (day == "Wed") {
                    if (doctor.consultation_schedule[i].Wednesday == true) {
                        consulation = doctor.consultation_schedule[i]
                        boolean = false
                        break
                    }
                } else if (day == "Thu") {
                    if (doctor.consultation_schedule[i].Thursday == true) {
                        consulation = doctor.consultation_schedule[i]
                        boolean = false
                        break
                    }
                } else if (day == "Fri") {
                    if (doctor.consultation_schedule[i].Friday == true) {
                        consulation = doctor.consultation_schedule[i]
                        boolean = false
                        break
                    }
                } else if (day == "Sat") {
                    if (doctor.consultation_schedule[i].Saturday == true) {
                        consulation = doctor.consultation_schedule[i]
                        boolean = false
                        break
                    }
                } else if (day == "Sun") {
                    if (doctor.consultation_schedule[i].Sunday == true) {
                        consulation = doctor.consultation_schedule[i]
                        boolean = false
                        break
                    }
                }
            }
            // console.log(consulation)
			   
            if (boolean == false) {
                this.shiftsOfParticularDay = []
                for (var i = 0; i < consulation.shifts.length; i++) {
                    var shiftOfOneSchedule
                    shiftOfOneSchedule = {}
                    shiftOfOneSchedule.startHour = parseInt(consulation.shifts[i].fromTime.hour) * 60
                    shiftOfOneSchedule.endHour = parseInt(consulation.shifts[i].toTime.hour) * 60
                    //shiftOfOneSchedule.consultationTime = parseInt(doctor.avgConsTime.substr(0, 2))
                    if(doctor.avgConsTime!='Auto'){
                    shiftOfOneSchedule.consultationTime = parseInt(doctor.avgConsTime.substr(0, 2))
                    }else{
						shiftOfOneSchedule.consultationTime = this.auto_time;
						
					}
					var startTime: number = shiftOfOneSchedule.startHour
                    var endTime: number = shiftOfOneSchedule.endHour
                    var schedules = []
                    while (startTime + shiftOfOneSchedule.consultationTime <= endTime) {
                        schedules.push({
                            startHour: Math.trunc(startTime / 60).toString(),
                            startMin: Math.trunc(startTime % 60).toString(),
                            endHour: Math.trunc((startTime + shiftOfOneSchedule.consultationTime) / 60).toString(),
                            endMin: Math.trunc((startTime + shiftOfOneSchedule.consultationTime) % 60).toString()
                        })
                        this.getClassTime(schedules[schedules.length-1])
                        startTime = startTime + shiftOfOneSchedule.consultationTime
                    }
                    this.shiftsOfParticularDay.push({
                        shift: schedules,
                        startHour : consulation.shifts[i].fromTime.hour.toString(),
                        startMin : consulation.shifts[i].fromTime.minute.toString(),
                        endHour : consulation.shifts[i].toTime.hour.toString(),
                        endMin : consulation.shifts[i].toTime.minute.toString()
                    })
                }
                console.log(this.shiftsOfParticularDay)
                this.checkCustomTimeShifts()
            } else {
                this.toastr.warning("Doctor does not work on this day", "Warning")
                return
            }
			     console.log('Selected Date')
            console.log(this.appointmentDate)
            $("#selectAppointmentTime").modal("show");
        } else {
            this.toastr.warning("Appointment cant be booked for past dates","Warning")
        }
    }
    updateEvent(model: any) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,     
                title: model.event.title
                // other params
            },
            duration: {
                _data: model.duration._data
            }
        }
        this.displayEvent = model;
    }
    onTimeSelection(data) {
        var today = new Date()
        today.setHours(0,0,0,0)
        if(data.already == true){
            this.toastr.warning("Time slot already booked","Warning")
            return ;
        } else if(today.toString() == this.appointmentDate.toString()){
            var currentTime = new Date();
            var currentOffset = currentTime.getTimezoneOffset();
            var ISTOffset = 330;
            var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
            var hoursIST = ISTTime.getHours()
            var minutesIST = ISTTime.getMinutes()
            if(data.startHour < hoursIST){
                this.toastr.warning("Passed time slots can not be booked","Warning")
                return
            }else if(data.startHour == hoursIST){
                if(data.startMin <= minutesIST){
                    this.toastr.warning("Passed time slots can not be booked","Warning")
                    return
                }
            }
            this.appointmentTime = data
            $("#selectAppointmentTime").modal("hide");
            $("#appointmentCalender").modal("hide");
            this.dateSelected = true
        } else { 
            this.appointmentTime = data
            $("#selectAppointmentTime").modal("hide");
            $("#appointmentCalender").modal("hide");
            this.dateSelected = true
        }
    }

    changeDoctor(){
        this.dateSelected = false
    }

    bookAppointment(){
		//alert(this.appointmentDate);
        if(!isNaN(this.appointment.name) || this.appointment.name==null || this.appointment.name==undefined){
            this.toastr.warning("Invalid Name","Warning")
            return
        }
        
        if (!isNaN(this.appointment.phone) && this.appointment.phone.length>9 && this.appointment.name.trim().length>0 ) {
            var lowerCase = (/[a-z]/.test(this.appointment.name));
            var upperCase = (/[A-Z]/.test(this.appointment.name));
            var numberCase = (/[0-9]/.test(this.appointment.name));
            if(lowerCase|| upperCase || numberCase){
                let object 
                object = {}
                object.date = this.appointmentDate,
                object.time = this.appointmentTime,
                object.doctor_id = this.appointmentDoctor,
                object.patient_mobile = this.appointment.phone,
                object.patient_name = this.appointment.name,
                object.smart_assistant_id = this.smartAssistantData.dataSmartAssistant._id
                object.date = new Date(object.date).setDate(this.appointmentDate.getDate() + 1)
                var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.appointmentDoctor.toString())
                object.clinic_id = doctor[0].doctm_clinic_id
                $("#appointmentForm").modal("hide");
                this.loading = true
                this.userService.BookAppointment(object).subscribe(data => {
                    console.log(data)
                    this.loading = false
                    if (data.response == true) {
                        this.toastr.success(data.message,"Success")
                        this.ngOnInit()
                        // this.missionService.announceMission("reload_appointment_list");
                    } else {
                        this.toastr.error(data.message,"Error")
                        return
                    }
                }, err => {
                    console.log(err);
                })
            }else{
                this.toastr.error("Invalid detail","Error")
                return
            }
        }else{
            this.toastr.error("Invalid detail","Error")
            return
        }
    }

    getClassTime(shift){
        // console.log(this.appointmentsForCalender)
        if(this.appointmentsForCalender.length>0){
            var appointments 
            appointments = this.appointmentsForCalender.filter(d=>d.start == this.datePipe.transform(this.appointmentDate, 'yyyy-MM-dd'),)
            if(appointments){
                if(appointments.length>0){
					if(appointments[0].time){
                    for (var i = 0; i < appointments[0].time.length; i++) {
                        if(appointments[0].time[i].startHour == shift.startHour && appointments[0].time[i].startMin == shift.startMin){
                            shift.already = true
                        }
                    }
				}
                }
            }
        }
    }

    SaveAppointmentForCustomTime(customTime){
        var doctor 
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if(this.dataDoctors[i]._id.toString() == this.appointmentDoctor.toString()){
                doctor = this.dataDoctors[i]
            }
        }
        var boolean : boolean = false
        for (var i = 0; i < this.shiftsOfParticularDay.length; i++) {
            for (var j = 0; j < this.shiftsOfParticularDay[i].shift.length; j++) {
                 if(this.shiftsOfParticularDay[i].shift[j].already == true && 
                     this.shiftsOfParticularDay[i].shift[j].startHour==customTime.hour && 
                     this.shiftsOfParticularDay[i].shift[j].startMin==customTime.minute){
                     this.toastr.warning("Time slot already booked","Warning");
                     boolean = true                 
                     return
                 } else if(this.shiftsOfParticularDay[i].shift[j].startHour==customTime.hour && 
                     this.shiftsOfParticularDay[i].shift[j].startMin==customTime.minute){
                     this.toastr.warning("Time slot already exists","Warning");
                     boolean = true                     
                     return
                 } else if(                     
                     (
                         ((parseInt(customTime.hour)*60)+parseInt(customTime.minute)) <
                         ((parseInt(this.shiftsOfParticularDay[i].shift[j].endHour)*60)+parseInt(this.shiftsOfParticularDay[i].shift[j].endMin))
                     ) && 
                     (
                         ((parseInt(customTime.hour)*60)+parseInt(customTime.minute)) >= 
                         ((parseInt(this.shiftsOfParticularDay[i].shift[j].startHour)*60)+parseInt(this.shiftsOfParticularDay[i].shift[j].startMin))
                     )
                    ){
                     this.toastr.warning("In between time slots are not allowed","Warning");
                     boolean = true             
                     return
                 } else  if(doctor.avgConsTime!='Auto'){
					 if(
                     ((parseInt(customTime.hour)*60)+parseInt(customTime.minute)) % 
                     parseInt(doctor.avgConsTime.substr(0, 2)) != 0
                   ){
                     this.toastr.warning("Time slot format mismatches","Warning");
                     boolean = true             
                     return
					}
				}else{
					
					 if(
                     ((parseInt(customTime.hour)*60)+parseInt(customTime.minute)) % 
                     parseInt(this.auto_time) != 0
                   ){
                     this.toastr.warning("Time slot format mismatches","Warning");
                     boolean = true             
                     return
					}
					
				}
             } 
        }
        for (var j = 0; j < this.customShifts.length; j++) {
            if( this.customShifts[j].startHour==customTime.hour && 
                this.customShifts[j].startMin==customTime.minute){
                this.toastr.warning("Time slot already booked","Warning");
                boolean = true                 
                return
            }
        } 
        if(boolean == false){
            var today = new Date()
            today.setHours(0,0,0,0)
            if(today.toString() == this.appointmentDate.toString()){
                var currentTime = new Date();
                var currentOffset = currentTime.getTimezoneOffset();
                var ISTOffset = 330;
                var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
                var hoursIST = ISTTime.getHours()
                var minutesIST = ISTTime.getMinutes()
                if(customTime.hour < hoursIST){
                    this.toastr.warning("Passed time slots can not be booked","Warning")
                    return
                }else if(customTime.hour == hoursIST){
                    if(customTime.Minute <= minutesIST){
                        this.toastr.warning("Passed time slots can not be booked","Warning")
                        return
                    }
                }
            }
            this.appointmentTime = {}
            this.appointmentTime.startHour = customTime.hour.toString(),
            this.appointmentTime.startMin = customTime.minute.toString(),
            this.appointmentTime.endHour = null
            this.appointmentTime.endMin = null
            this.appointmentTime.customTime = true
            $("#selectAppointmentTime").modal("hide");
            $("#appointmentCalender").modal("hide");
            this.dateSelected = true
        }
    }

    checkCustomTimeShifts(){
        this.customShifts = []
        if(this.appointmentsForCalender.length>0){
            var appointments 
			console.log('selected appoints');
			console.log(this.appointmentsForCalender);
            appointments = this.appointmentsForCalender.filter(d=>d.start == this.datePipe.transform(this.appointmentDate, 'yyyy-MM-dd'),)
            if(appointments.length>0){
                for (var i = 0; i < appointments[0].time.length; i++) {
                    if(appointments[0].time[i].customTime){
                        this.customShifts.push(appointments[0].time[i])
                    }
                }
            }
        }
    }

    resetAppointmentModal(){
        this.dateSelected = false
        this.appointmentDate = new Date()
        this.appointmentTime = {}
        this.appointment = {}
        this.appointmentDoctor = "Select App"
    }

    getClassSlot(data){
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        var hoursIST = ISTTime.getHours()
        var minutesIST = ISTTime.getMinutes()
         var today = new Date()
        today.setHours(0,0,0,0)
        if(data.already){
            return 'already-selected'
        }else{
            if(today.toString() == this.appointmentDate.toString()){    
                if(data.startHour < hoursIST){
                    return 'grey-slot'
                }else if(data.startHour == hoursIST){
                    if(data.startMin <= minutesIST){
                        return 'grey-slot'
                    }
                }
            }else{
                return 'blue-slot'
            }
        }
    }

    SearchCity(data){
	data = data.toLowerCase()
  if (data && data.trim() != '') {
            this.citiesList = this.allCities.filter((item) => {
                let b = item.toLowerCase()
                return (b.indexOf(data) > -1)
            })
        }
        if (data == '') {
            this.citiesList = this.allCities;
        }
  }

    GetLatLng(city){
        var string = city +","+this.state
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
	
	
	    SearchArea(data){
        data = data.toLowerCase()
        if (data && data.trim() != '') {
            this.area_suggestions = this.area_suggestions.filter((item) => {
                let b = item.location.toLowerCase()
                return (b.indexOf(data) > -1)
            })
        }
        if (data.trim() == '') {
            this.area_suggestions = this.area_suggestions1;
        }
    }
	clearSuggestions(){
		this.area_suggestions=[]
		this.area_suggestions1=[]
	}
    checkSuggestions(event){
		
		if(this.area_suggestions1.length <=0){
			this.SearchLocationSuggestions()
		}
		
		 if (event.target.value.trim() == '') {
            this.area_suggestions = this.area_suggestions1;
        }
		console.log(this.area_suggestions);
		console.log(event.target.value);
		}
    SearchPatientNameReg(data){
		
		
        data = data.toLowerCase()
        if (data && data.trim() != '') {
            this.patientListReg = this.patientListReg1.filter((item) => {
                let b = item.name.toLowerCase()
                return (b.indexOf(data) > -1)
            })
        }
        if (data == '') {
            this.patientListReg = this.patientListReg1;
        }
		console.log(this.patientListReg)
    }

    NewRegistration(){
        var newDate = new Date()
        newDate.setDate(newDate.getDate())
        if(this.registrationData.phone=="" || this.registrationData.phone == null || isNaN(this.registrationData.phone)){
            this.toastr.warning("Please Enter Phone","Warning")
            return
        }
        if(this.consultationDoctor == "" || this.consultationDoctor == "Select Doctor"){
            this.toastr.warning("Please Select Doctor","Warning")
            return
        }
        if(this.registrationData.type == ""){
            this.toastr.warning("Please Enter consulatation type","Warning")
            return
        }
        if(this.registrationData.name=="" || this.registrationData.name==null || !isNaN(this.registrationData.name)){
            this.toastr.warning("Please Enter Name","Warning")
            return
        }
        if(this.field_age && ((this.registrationData.age=="" || this.registrationData.age==null) || (this.registrationData.age<1 || this.registrationData.age>100 || isNaN(this.registrationData.age)))){
            this.toastr.warning("Please Enter age","Warning")
            return
        }
        if(this.field_dob && (this.registrationData.dob=="" || this.registrationData.dob==null)){
            this.toastr.warning("Please Enter date of birth","Warning")
            return
        }else if(new Date(this.registrationData.dob).setHours(0,0,0,0) > new Date(newDate).setHours(0, 0, 0, 0)){
            console.log(new Date().getDate()+1)
            this.toastr.warning("Please Enter date of birth","Warning")
            return
        }
        if(this.registrationData.gender=="Select"){
            this.toastr.warning("Please select gender","Warning")
            return
        }
        if(this.registrationData.fee && isNaN(this.registrationData.fee)){
            this.toastr.warning("Please Enter fee","Warning")
            return
        } 
        if(this.registrationData.city == null || this.registrationData.city == "" || this.registrationData.city == undefined || this.registrationData.city.trim().length<1
            ||this.registrationData.location == null || this.registrationData.location == "" || this.registrationData.location == undefined || this.registrationData.location.trim().length<1){
            this.toastr.warning("Please Enter address","Warning")
            return
        }
        if(this.registrationData.weight !=null && this.registrationData.weight!='' && (this.registrationData.weight < 1 || this.registrationData.weight > 150 || isNaN(this.registrationData.weight))){
            this.toastr.warning("Please Enter weight","Warning")
            return
        }else if(this.registrationData.height !=null && this.registrationData.height!='' && (this.registrationData.height < 1 || this.registrationData.height > 240 || isNaN(this.registrationData.height))){
            this.toastr.warning("Please Enter height","Warning")
            return
        }
        var ob ;
        ob = <any>{}
		
        ob.registration = this.registrationData
		/* if(this.registrationData.age_param=="Months" && this.registrationData.age){
			ob.registration.new_age=this.registrationData.age+' months';
		}
		if(this.registrationData.age_param=="Years" && this.registrationData.age){
			ob.registration.new_age=this.registrationData.age+' years';
		} */
		/* if(this.registrationData.age_param){
			ob.registration.age_param=this.registrationData.age_param;
		} */
        ob.consultationDoctor = this.consultationDoctor
        var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.consultationDoctor.toString())
        console.log()
        ob.clinic_id = doctor[0].doctm_clinic_id
        ob.smart_assistant_id = this.smartAssistantData.dataSmartAssistant._id
        if(this.reportPics.length>0){
            ob.reportPics = this.reportPics
        }
        if(this.pateintPic != null && this.pateintPic !=''){
            ob.pateintPic = this.pateintPic            
        }
        ob.lat = this.lat            
        ob.lng = this.lng            
        $("#registrationForm").modal("hide");
        this.loading = true
        console.log(ob)
        this.userService.NewRegistration(ob).subscribe(data => {
            this.loading = false
            this.patientList = []
            console.log(data)
            if (data.response == true) {
                this.toastr.success(data.message,"Success")
                this.ngOnInit()
                this.missionService.announceMission("reload_smart_assistant_page");
                this.socket.emit('registrationBooked',{
                    room_id: this.smartAssistantData.dataSmartAssistant._id.toString()
                })
            }
        }, err => {
            console.log(err);
        })
    }

    getDoctorName(id){
        if(this.dataDoctors    ){
            var doctor = this.dataDoctors.filter(d=>d._id.toString() == id.toString())
            if(doctor[0]){
                return doctor[0].first_name
            }else{
                return 'Dr.'
            }
        }else{
            return 'doctor'
        }
    }

    getAppointmentMinToShow(min){
        if(min<10){
            return "0"+min
        } else{
            return min
        }
    }

    /////////////////////////////////////////////////
    openPrescriptionView(){
        var newDate = new Date()
        newDate.setDate(newDate.getDate())
        if(this.registrationData.phone=="" || this.registrationData.phone == null || isNaN(this.registrationData.phone)){
            this.toastr.warning("Please Enter Phone","Warning")
            return
        }
        if(this.registrationData.type == ""){
            this.toastr.warning("Please Enter consulatation type","Warning")
            return
        }
        if(this.registrationData.name=="" || this.registrationData.name==null || !isNaN(this.registrationData.name)){
            this.toastr.warning("Please Enter Name","Warning")
            return
        }
        if(this.field_age && ((this.registrationData.age=="" || this.registrationData.age==null) || (this.registrationData.age<1 || this.registrationData.age>100 || isNaN(this.registrationData.age)))){
            this.toastr.warning("Please Enter age","Warning")
            return
        }
        if(this.field_dob && (this.registrationData.dob=="" || this.registrationData.dob==null)){
            this.toastr.warning("Please Enter date of birth","Warning")
            return
        }else if(new Date(this.registrationData.dob).setHours(0,0,0,0) >= new Date(newDate).setHours(0, 0, 0, 0)){
            console.log(new Date().getDate()+1)
            this.toastr.warning("Please Enter date of birth","Warning")
            return
        }
        if(this.registrationData.gender=="Select"){
            this.toastr.warning("Please select gender","Warning")
            return
        }
        if(this.registrationData.fee && isNaN(this.registrationData.fee)){
            this.toastr.warning("Please Enter fee","Warning")
            return
        } 
        if(this.registrationData.city == null || this.registrationData.city == "" || this.registrationData.city == undefined || this.registrationData.city.trim().length<1
            ||this.registrationData.location == null || this.registrationData.location == "" || this.registrationData.location == undefined || this.registrationData.location.trim().length<1){
            this.toastr.warning("Please Enter address","Warning")
            return
        }
        if(this.registrationData.weight !=null && this.registrationData.weight!='' && (this.registrationData.weight < 1 || this.registrationData.weight > 150 || isNaN(this.registrationData.weight))){
            this.toastr.warning("Please Enter weight","Warning")
            return
        }else if(this.registrationData.height !=null && this.registrationData.height!='' && (this.registrationData.height < 1 || this.registrationData.height > 240 || isNaN(this.registrationData.height))){
            this.toastr.warning("Please Enter height","Warning")
            return
        }
        console.log("working")
        console.log(this.doctorArrayObject)
        //this.dispensedPatientSelected = data
        // if(!data.precription.medicationComplete && !data.webcam_pic){
        //     $("#webcamModal").modal("show");         
        //     this.webCamOpenedBY = "prescription"
        // }else{
            //if(!data.webcam_pic){
                //this.dispensedPatient = this.registrationData.phone
                 this.finalPreConditions = this.registrationData.phone
                // this.bodyIndicatorSelected = data.precription.bodyIndicatorSelected
                // this.bodyIndicatorComplete = data.precription.bodyIndicatorComplete
                // this.finalAllergy = data.precription.finalAllergy
                // this.findingsSelected = data.precription.findingsSelected
                // this.symptomsSelected = data.precription.symptomsSelected
                // this.diagnosisSelected = data.precription.diagnosisSelected
                // this.tempMedicationArray = data.precription.tempMedicationArray
                // this.itemsfinding = data.precription.itemsfinding
                // this.itemsymptoms = data.precription.itemsymptoms
                // this.itemsdiagnosis = data.precription.itemsdiagnosis
                // this.treatmentStatus = data.precription.treatmentStatus
                // this.investigationStatus = data.precription.investigationStatus
                // this.suregeryOptionsTop = data.precription.suregeryOptionsTop
                // this.suregeryOptions = data.precription.suregeryOptions
                // this.inputBox = data.precription.inputBox
                // this.medication = data.precription.medication
                // this.medicationStatus = data.precription.medicationStatus
                // this.medicationTabArray = data.precription.medicationTabArray
                // this.medicationCapArray = data.precription.medicationCapArray
                // this.medicationSypArray = data.precription.medicationSypArray
                // this.medicationSuspArray = data.precription.medicationSuspArray
                // this.medicationEmulsnArray = data.precription.medicationEmulsnArray
                // this.medicationInjArray = data.precription.medicationInjArray
                // this.medicationCreamArray = data.precription.medicationCreamArray
                // this.medicationGelArray = data.precription.medicationGelArray
                // this.medicationDropsArray = data.precription.medicationDropsArray
                // this.medicationPowderArray = data.precription.medicationPowderArray
                // this.medicationAerosolsArray = data.precription.medicationAerosolsArray
                // this.medicationMouthWashArray = data.precription.medicationMouthWashArray
                // this.medicationSolutionArray = data.precription.medicationSolutionArray
                // this.medicationLotionArray = data.precription.medicationLotionArray
                // this.medicationOintmentArray = data.precription.medicationOintmentArray
                // this.symptomsComplete = data.precription.symptomsComplete
                // this.diagnosisComplete = data.precription.diagnosisComplete
                // this.treatmentComplete = data.precription.treatmentComplete
                // this.treatmentArray = data.precription.treatmentArray
                // this.investigationIndicatorComplete = data.precription.investigationIndicatorComplete
                // this.investigationArray = data.precription.investigationArray
                // this.surgeryComplete = data.precription.surgeryComplete
                // this.surgerySelectedArray = data.precription.surgerySelectedArray
                // this.instructionsComplete = data.precription.instructionsComplete
                // this.instructionsSelected = data.precription.instructionsSelected
                // this.medicationComplete = data.precription.medicationComplete
                // this.currentVaccinationComplete = data.precription.currentVaccinationComplete
                // this.finalCurrentVaccinationArray = data.precription.finalCurrentVaccinationArray
                // this.dueVaccinationComplete = data.precription.dueVaccinationComplete
                // this.finalDueVaccinationArray = data.precription.finalDueVaccinationArray
                // this.eyePresComplete = data.precription.eyePresComplete
                // this.finalRightOD = data.precription.finalRightOD
                // this.finalLeftOD = data.precription.finalLeftOD
                // this.followDaysComplete = data.precription.followDaysComplete
                // this.finalfollowUpDays = data.precription.finalfollowUpDays
                // this.followUpDate.setDate(new Date(data.createdAt).getDate() + this.finalfollowUpDays);
                // console.log(this.followUpDate)
                // var options = { month: 'short' };
                // this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
                // this.followUpDay = this.followUpDate.getDate()
                // this.followUpYear = this.followUpDate.getFullYear()
                // this.minutes = data.precription.minutes
                // this.seconds = data.precription.seconds
                // this.languageOptionSelected = data.precription.languageOptionSelected
                $("#previewModalNew").modal("show");
            // }else{                
            //     $("#uploadedPrescriptionModal").modal("show");
            // }
        //}
    }

    checkOptionOfPad(value){
        if(!this.dataDoctors.pad_customization_options || this.dataDoctors.pad_customization_options.length<1){
            return true
        }else{
            for (var i = 0; i < this.dataDoctors.pad_customization_options.length; i++) {
                if(this.dataDoctors.pad_customization_options[i].value == value){
                    if(this.dataDoctors.pad_customization_options[i].status == true){
                        return true
                    }else{
                        return false
                    }
                }
            }
        }
    }

    getFooterText(){
        if(!this.dataDoctors[0].pad_customization_options || this.dataDoctors[0].pad_customization_options.length<1){
            return "Not for Medico-Legal Purpose"
        }else{
            return this.dataDoctors[0].pad_customization_options[12].text
        }
    }

    getHeaderText(){
        if(!this.dataDoctors[0].pad_customization_options || this.dataDoctors[0].pad_customization_options.length<1){
            return "PLEASE TAKE PRIOR APPOINTMENT"
        }else{
            return this.dataDoctors[0].pad_customization_options[8].text
        }
    }

    setAllShiftsForPreview(){
        console.log(this.doctorArrayObject)
        this.allShifts = []
        var Mon = false
        var Tue = false
        var Wed = false
        var Thu = false
        var Fri = false
        var Sat = false
        var Sun = false
        for (var i = 0; i < this.doctorArrayObject.consultation_schedule.length; i++) {
            var string = ''
            if(this.doctorArrayObject.consultation_schedule[i].Monday == true){
                Mon = true
                if(string == ''){
                    string = "Mon"
                }else{
                    string = string +", "+"Mon"
                }
            }
            if(this.doctorArrayObject.consultation_schedule[i].Tuesday == true){
                Tue = true
                if(string == ''){
                    string = "Tue"
                }else{
                    string = string +", "+"Tue"
                }
            }
            if(this.doctorArrayObject.consultation_schedule[i].Wednesday == true){
                Wed = true
                if(string == ''){
                    string = "Wed"
                }else{
                    string = string +", "+"Wed"
                }
            }
            if(this.doctorArrayObject.consultation_schedule[i].Thursday == true){
                Thu = true
                if(string == ''){
                    string = "Thu"
                }else{
                    string = string +", "+"Thu"
                }
            }
            if(this.doctorArrayObject.consultation_schedule[i].Friday == true){
                Fri = true
                if(string == ''){
                    string = "Fri"
                }else{
                    string = string +", "+"Fri"
                }
            }
            if(this.doctorArrayObject.consultation_schedule[i].Saturday == true){
                Sat = true
                if(string == ''){
                    string = "Sat"
                }else{
                    string = string +", "+"Sat"
                }
            }
            if(this.doctorArrayObject.consultation_schedule[i].Sunday == true){
                Sun = true
                if(string == ''){
                    string = "Sun"
                }else{
                    string = string +", "+"Sun"
                }
            }
            let object = {
                day:string,
                shifts:this.doctorArrayObject.consultation_schedule[i].shifts
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
        $('#previewModalPdfNew').printThis({
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

    getOpdHolidays(id){
        this.getOPDHOliday = []
		var ob= {'doctor_id':id}
        this.userService.GetOpdHoliday(ob).subscribe(data => {
            console.log(data)   
            var arr = []

            this.getOPDHOlidayCopy =  data.data
            for (var i = 0; i < data.data.length; i++) {
                console.log(this.appointmentDoctorCopy)
               //if(data.data[i].doctor_id == id){
                    arr.push(new Date(data.data[i].date).toJSON().toString().substr(0,10))
                //}
            }
            for (var i = 0; i < arr.length; i++) {
                
                if(data.data[i].date){
                    this.getOPDHOliday.push({
                        start : arr[i],
                        title : 'Closed',
                        // color: '#FFB347'
                        textColor: 'grey'
                        //time : data.data[i].time
                    })
                }
            }
            console.log(arr)
            console.log(this.getOPDHOliday)
        if(data.response){
                this.toastr.success(data.message, 'Success')
            }else{
                this.toastr.error(data.message, 'Error')
            }

        },err=>{

            console.log(err)
        })
    }
    closeAppointment(){
        this.ngOnInit()
    }
    updateDropdown(){
		  
		/*   var $s=$('#sys');
		 var option = $s.find("option:contains('120')");
		  var optionTop = option.offset().top
		  var selectTop = $s.offset().top;
		  $s.scrollTop($s.scrollTop() + (optionTop - selectTop));
		//  alert($s.scrollTop() + (optionTop - selectTop));
		 option.prop('selected', true) */
		 // $('#sys').animate({ scrollTop: -567 });
		 var h = "<option value=''>SYS";
		 for (var i = 70; i < 190; i++) h += '<option value='+i+'>'+i;
		 $('#sys').html(h).val(120).scrollTop(567);
    }

    checkHoliday(currentDoc){
        console.log(currentDoc)
        this.doctorScheduleHolidays = []
        for (var i = 0; i < currentDoc.consultation_schedule.length; i++) {
            if(!currentDoc.consultation_schedule[i].Sunday){
                this.doctorScheduleHolidays.push('Sunday')
            }
            if(!currentDoc.consultation_schedule[i].Monday){
                this.doctorScheduleHolidays.push('Monday')
            }
            if(!currentDoc.consultation_schedule[i].Tuesday){
                this.doctorScheduleHolidays.push('Tuesday')
            }
            if(!currentDoc.consultation_schedule[i].Wednesday){
                this.doctorScheduleHolidays.push('Wednesday')
            }
            if(!currentDoc.consultation_schedule[i].Friday){
                this.doctorScheduleHolidays.push('Friday')
            }
            if(!currentDoc.consultation_schedule[i].Saturday){
                this.doctorScheduleHolidays.push('Saturday')
            }
        }
          
            var date = new Date()
               this.getDaysInMonth(date.getMonth(), date.getFullYear())
               var arr = []
               var newDate = new Date()

               //console.log(this.getAllDates.setDate(newDate.getDate()+1))
               for (var i = 0; i < this.doctorScheduleHolidays.length; i++) {
                   for (var j = 0; j < this.getAllDates.length; j++) {    
                       if(this.doctorScheduleHolidays[i] == this.datePipe.transform(this.getAllDates[j], 'EEEE')){
                           //console.log(this.getAllDates[j].setDate(1))
                           arr.push({
                               start: this.datePipe.transform(this.getAllDates[j], 'yyyy-MM-dd'),
                            title : 'Closed',
                            id : 1,
                            // color: '#FFB347'
                            textColor: 'grey'
                           })
                       }
                   }
               }

               // console.log(arr2)
               Array.prototype.push.apply(this.getOPDHOliday,arr); 
               //this.showListOfHoliday.concat(arr)
               console.log(this.getOPDHOliday)
               //console.log(this.docHoliday)
            

    }
    getDaysInMonth(month, year) {
         var date = new Date(year, month, 1);
         this.getAllDates = [];
         while (date.getMonth() === month) {
            this.getAllDates.push(new Date(date));
            date.setDate(date.getDate()+1);
         }
         return this.getAllDates;
    }
    deleteAppointment(data){
        var ob = {
            date : data
        }
        console.log(ob)
         this.userService.DeleteAppointmentViaHoliday(ob).subscribe(data => {
            this.ngOnInit()
        },err=>{
            console.log(err)
        })
    }
	
/********** Updated Functions *************/

hide(){
   this.numberWritten=false; 
   this.registrationData.name="";
}
 fetchPatientAppointments(data) {
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
        this.digitalTrue = false
		this.registrationData.age_param="Years";
        if(this.registrationData.phone.length<10){
            this.toastr.warning("Please fill atleast 10 digits number", "Warning")
            return
        }
        if (!isNaN(data)) {
            data = data.trim() 
            if(data.length>0){                
                let ob = {
                    mobile:data,
                    smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id
                }
				
                this.userService.FindPatientAppointmentByPhone(ob).subscribe(dataReceived => {
                    console.log(dataReceived)
                    if (dataReceived.response == true){
						if(dataReceived.data.length==1){
                        this.toastr.success(dataReceived.message,"Success")
                        this.patientListReg = []
                        this.patientListReg1 = []
                        this.registrationData.name = dataReceived.data[0].patient_id.name
                        this.registrationData.type = "Appointment"
                        this.registrationData.appointment_detail = dataReceived.data[0]
						this.registrationData.gender=dataReceived.data[0].patient_id.gender
						if(this.registrationData.gender){
							  this.genderClass="black-class"
						}
                        this.consultationDoctor = dataReceived.data[0].doctor_id
						this.GetPatientLastPrescription()
                        this.checkWhichFieldsToShow(this.consultationDoctor);
						this.getPatientInfo(this.registrationData);
						this.consultationType = [
                                'Appointment'
                            ]
                        this.registrationData.type = "Appointment"
						}else{
							 this.getPatientInfo(this.registrationData);
							 this.toastr.warning("Multiple Appointments Found On this Number. Please choose patient name to continue", "Warning")
							  return
						}
                    }else{
                        if(dataReceived.message == 'No appointment found for today'){
                            this.toastr.success(dataReceived.message,"Success")
                            this.consultationType = [
                                'Walk-in',
                                'Emergency'
                            ]
                            this.registrationData.type = "Walk-in"
                            let object 
                            object = {}
                            var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.consultationDoctor.toString())
							if(doctor[0]){
                            object.clinic_id = doctor[0].doctm_clinic_id
							}
                            object.mobile = data
							this.getPatientInfo(this.registrationData);
							this.GetPatientLastPrescription()
                        }else{
                            this.toastr.error(dataReceived.message,"Error")
                        }
                    }
                }, err => {
                    console.log(err);
                })
            }
        }else{
            this.toastr.warning("Invalid phone number","Warning")
        }
    }



    getPatientList(){
							this.patientListReg = []
							this.patientListReg1 = []
							let object 
                            object = {}
                            var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.consultationDoctor.toString())
							if(doctor[0]){
                            object.clinic_id = doctor[0].doctm_clinic_id
							}else{
								object.clinic_id=this.clinicId
							}
                            object.mobile = this.registrationData.phone
							
                            this.userService.GetPatientDetail(object).subscribe(data2 => {
                                if (data2.response == true) {
								if (data2.data.length > 1){
                                        this.patientListReg = data2.data
                                        this.patientListReg1 = data2.data
                                    }
                                }
                            }, err => {
                                console.log(err);
                            })
	}

}