import { BaThemePreloader, BaThemeSpinner } from '../../theme/services';
import { Component,OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

import { MissionService } from '../../providers/mission.service';
import { Subscription }   from 'rxjs';
import { DatePipe } from '@angular/common';
declare var $:any

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
  providers:[UserService]
})
export class AppointmentListComponent implements OnInit {
    subscription: Subscription;

    todayAppointments
    todayAppointments_copy
    tomorrowAppointments
    tomorrowAppointments_copy
    pulse_range
    sys_range
	getOPDHOlidayCopy
    dia_range
    temperature_range 
    rbs_range
    spo_range
    smartAssistantData
	tomorrowDate
    dataDoctors
    lat
    lng
    locationSuggestionDB
    pateintConsultaionDetail
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
	month
	day
	year
	currentDate
    private trigger: Subject < void > = new Subject < void > ()

    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }

    appointment
    patientList
    patientList1
    citiesList
    citiesList1
    state
    webCamOpenedBY
    reportPics
    pateintPic
    consultationDoctor
    searchResultDiv : boolean
    searchInput
    searchInputShow
    searchResults

    appointmentDate = new Date()
    appointmentDoctor
    appointmentsForCalender
    shiftsOfParticularDay

    appointmentTime
    dateSelected: boolean
    customShifts 
    dataToUpdateForAppointment
    loading
    todayDate = new Date()
    //calender
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    calendarOptions: Options;
    @ViewChild(CalendarComponent) ucCalendar1: CalendarComponent;
    calendarOptions1: Options;
    displayEvent: any;
    events = null;
    consultationType
    getHolidayList
    doctorScheduleHolidays
    showListOfHoliday
    getAllDates
    getDocData
	genderClass
	sys_class
	temp_class
	dob_class
	rbs_class
	dia_class
	pulse_class
	spo_class
	
    //calender
    constructor(private formBuilder:FormBuilder,private toastr: ToastrService,
        private userService:UserService,private router: Router ,public dialog: MatDialog,
        private _spinner: BaThemeSpinner , private missionService: MissionService, private datePipe: DatePipe) { 
        this.subscription = missionService.missionAnnounced$.subscribe(
          mission => {
            if(mission=='reload_appointment_list'){
                this.ngOnInit();
            }
        });
		
		this.genderClass="grey-placeholder";
		this.sys_class="grey-placeholder";
		this.dob_class="grey-placeholder";
		this.temp_class="grey-placeholder";
		this.rbs_class="grey-placeholder";
		this.dia_class="grey-placeholder";
		this.pulse_class="grey-placeholder";
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
	
		changeClass(myclass){
			//alert('here');
		if(myclass=='sysClass'){
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

    ngOnInit() {
        this.smartAssistantData = JSON.parse(localStorage['smartAssistantDetails'])
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
        this.todayAppointments = []
        this.todayAppointments_copy = []
        this.tomorrowAppointments = []
        this.tomorrowAppointments_copy = []
        this.webCam = false
        this.appointment = {}
        this.patientList = []
        this.patientList1 = []
        this.reportPics = []
        this.searchResultDiv = false
        this.searchInput = ""

        this.appointmentDoctor = ""
        this.appointmentsForCalender = []

        this.appointmentTime = {}
        this.dateSelected = false
        this.customShifts = []
        this.consultationType = [
            'Appointment',
            'Walk-in',
            'Emergency'
        ]
       
		var today = new Date();
		var options = { month: 'short' };
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate()
        this.year = new Date().getFullYear()
		this.currentDate=this.month+' '+ this.day+', '+this.year;
		var tomorrow = new Date();
		tomorrow.setDate(today.getDate()+1);
		var m=tomorrow.toLocaleDateString("en-IN", options);
		var d=tomorrow.getDate();
		var y=tomorrow.getFullYear();
		this.tomorrowDate=m+' '+d+', '+y;
    }

    GetSmartAssistantDataAfterLogin(){
        let object = {
            smart_assistant_id : this.smartAssistantData.dataSmartAssistant._id 
        }
        this.userService.GetSmartAssistantDataAfterLogin(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.dataDoctors = data.doctorsRegisteredForSmartClinic
                this.getDocData = data.doctorsRegisteredForSmartClinic[0]
                if(this.dataDoctors.length==1){
                    this.consultationDoctor = this.dataDoctors[0]._id
					//alert(this.consultationDoctor);
                } else{
                    for (var i = 0; i < this.dataDoctors.length; i++) {
                        if(this.dataDoctors[i].type_of_doctor == "admin_doctor"){
                            this.consultationDoctor = this.dataDoctors[i]._id
                            this.appointmentDoctor = this.dataDoctors[i]._id
                            break
                        }
                    }
                }
                this.TodayTmrwAppointmentsBySmartAssistant()
            }            
        }, err => {
          console.log(err);
        })
    }

    // TodayTmrwAppointmentsBySmartAssistant(){
    //     this.userService.TodayTmrwAppointmentsBySmartAssistant(this.smartAssistantData.dataSmartAssistant._id).subscribe(data => {
    //         console.log(data)
    //         if (data.response == true) {
    //             this.todayAppointments_copy = data.appointmentsToday
    //             this.tomorrowAppointments_copy = data.appointmentsTmrw
    //             for (var i = 0; i < this.todayAppointments_copy.length; i++) {
    //                 this.todayAppointments_copy[i].sortTime = (parseInt(this.todayAppointments_copy[i].time.startHour) * 60) + parseInt(this.todayAppointments_copy[i].time.startMin)
    //             }
    //             this.todayAppointments_copy.sort(function(a, b) {    
    //                 if (a.sortTime < b.sortTime) {        
    //                     return -1
    //                 }
    //                 if (a.sortTime > b.sortTime) {
    //                     return 1    
    //                 }
    //             })
    //             // var color = ['green','yellow','blue','red']
    //             // var colorCount :number = 0
    //             // for (var i = 0; i < this.todayAppointments_copy.length; i++) {
    //             //     if(i != 0){
    //             //         if(this.todayAppointments_copy[i].time.startHour != this.todayAppointments_copy[i-1].time.startHour){
    //             //             if(colorCount==3){
    //             //                 colorCount = 0
    //             //             }else{
    //             //                 colorCount = colorCount + 1
    //             //             }
    //             //         }
    //             //     }
    //             //     this.todayAppointments_copy[i].color = color[colorCount]
    //             // }
    //             for (var i = 0; i < this.tomorrowAppointments_copy.length; i++) {
    //                 this.tomorrowAppointments_copy[i].sortTime = (parseInt(this.tomorrowAppointments_copy[i].time.startHour) * 60) + parseInt(this.tomorrowAppointments_copy[i].time.startMin)
    //             }
    //             this.tomorrowAppointments_copy.sort(function(a, b) {    
    //                 if (a.sortTime < b.sortTime) {        
    //                     return -1
    //                 }
    //                 if (a.sortTime > b.sortTime) {
    //                     return 1    
    //                 }
    //             })
    //             // var color = ['green','yellow','blue','red']
    //             // var colorCount :number = 0
    //             // for (var i = 0; i < this.tomorrowAppointments_copy.length; i++) {
    //             //     if(i != 0){
    //             //         if(this.tomorrowAppointments_copy[i].time.startHour != this.tomorrowAppointments_copy[i-1].time.startHour){
    //             //             if(colorCount==3){
    //             //                 colorCount = 0
    //             //             }else{
    //             //                 colorCount = colorCount + 1
    //             //             }
    //             //         }
    //             //     }
    //             //     this.tomorrowAppointments_copy[i].color = color[colorCount]
    //             // }
    //             this.filterAppointmentsByDoctor(this.consultationDoctor)
    //         }
    //     }, err => {
    //       console.log(err);
    //     })
    // }
    TodayTmrwAppointmentsBySmartAssistant(){
        this.userService.TodayTmrwAppointmentsBySmartAssistant(this.smartAssistantData.dataSmartAssistant._id).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                var currentTime = new Date();
                var currentOffset = currentTime.getTimezoneOffset();
                var ISTOffset = 330;
                var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
                var hoursIST : number = ISTTime.getHours()
                var minutesIST : number = ISTTime.getMinutes()
                this.todayAppointments_copy = []
                var arrayPassedAppointments = []
                var arrayValidAppointments = []
                this.todayAppointments_copy = data.appointmentsToday
                this.tomorrowAppointments_copy = data.appointmentsTmrw
                for (var i = 0; i < data.appointmentsToday.length; i++) {
                    data.appointmentsToday[i].sortTime = (parseInt(data.appointmentsToday[i].time.startHour) * 60) + parseInt(data.appointmentsToday[i].time.startMin)
                    if(
                        parseInt(data.appointmentsToday[i].sortTime) + parseInt(data.appointmentsToday[i].doctor_id.waitingTime.substr(0,2)) < 
                        ((hoursIST * 60)+ minutesIST)
                      ){
                        data.appointmentsToday[i].color = "orange"
                        arrayPassedAppointments.push(data.appointmentsToday[i])
                    }else{
                        data.appointmentsToday[i].color = "green"
                        arrayValidAppointments.push(data.appointmentsToday[i])
                    }
                }
                arrayPassedAppointments.sort(function(a, b) {    
                    if (a.sortTime < b.sortTime) {        
                        return -1
                    }
                    if (a.sortTime > b.sortTime) {
                        return 1    
                    }
                })
                arrayValidAppointments.sort(function(a, b) {    
                    if (a.sortTime < b.sortTime) {        
                        return -1
                    }
                    if (a.sortTime > b.sortTime) {
                        return 1    
                    }
                })
                this.todayAppointments_copy = arrayValidAppointments.concat(arrayPassedAppointments)
                for (var i = 0; i < this.tomorrowAppointments_copy.length; i++) {
                    this.tomorrowAppointments_copy[i].sortTime = (parseInt(this.tomorrowAppointments_copy[i].time.startHour) * 60) + parseInt(this.tomorrowAppointments_copy[i].time.startMin)
                }
                this.tomorrowAppointments_copy.sort(function(a, b) {    
                    if (a.sortTime < b.sortTime) {        
                        return -1
                    }
                    if (a.sortTime > b.sortTime) {
                        return 1    
                    }
                })
                this.filterAppointmentsByDoctor(this.consultationDoctor)
            }
        }, err => {
          console.log(err);
        })
    }

    GetCityFromClinicId(id){
        this.userService.GetCityFromClinicId(id).subscribe(data => {
            console.log(data)
            this.citiesList = data.data
            this.citiesList1 = data.data
            this.state = data.state
            this.appointment.city = data.city
        }, err => {
            console.log(err);
        })
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

    SearchLocation(data){
        data.replace(" ","")
        let object = {
            search : data,
            lat : this.lat,
            lng : this.lng
        }
        this.userService.SearchLocation(object).subscribe(data=>{
            console.log(data)
            this.locationSuggestionDB = []
            for (var i = 0; i < data.data.predictions.length; i++) {
                var string = data.data.predictions[i].structured_formatting.main_text
                this.locationSuggestionDB.push(string)
            }
        })            
    }
	changeCity($event){
		this.appointment.city=$event.name;
	}

    handleAddressChange($event) {
        this.lat = JSON.parse(JSON.stringify($event.geometry.location)).lat;
        this.lng = JSON.parse(JSON.stringify($event.geometry.location)).lng;
        this.appointment.location = $event.name
		
    }

    editAppointment(data){
			this.genderClass="grey-placeholder";
			this.sys_class="grey-placeholder";
			this.dob_class="grey-placeholder";
			this.spo_class="grey-placeholder";
			this.temp_class="grey-placeholder";
			this.rbs_class="grey-placeholder";
			this.dia_class="grey-placeholder";
			this.pulse_class="grey-placeholder";
        console.log(data)
        if(data.color == "green"){
			
            this.appointment = {}
            this.pateintConsultaionDetail = data
            this.appointment.name = data.patient_id.name
            this.appointment.phone = data.patient_id.mobile
			if(data.patient_id.age_in_months > 0){
			this.appointment.age_param="months";			
			this.appointment.age=data.patient_id.age_in_months;			
			}else{
				this.appointment.age_param="years";
				this.appointment.age=data.patient_id.age_in_years;
			}
            this.GetCityFromClinicId(data.doctor_id.clinic_details.clinic_id)
            this.checkWhichFieldsToShow(data.doctor_id)
            this.appointment.gender = "Select"
            this.appointment.temp = ""
            this.appointment.pulse = ""
            this.appointment.bp = ""
            this.appointment.dia = ""
            this.appointment.rbs = "Select"
            this.appointment.spo = "Select"
			this.genderClass="grey-placeholder";
			this.sys_class="grey-placeholder";
			this.dob_class="grey-placeholder";
			this.spo_class="grey-placeholder";
			this.temp_class="grey-placeholder";
			this.rbs_class="grey-placeholder";
			this.dia_class="grey-placeholder";
			this.pulse_class="grey-placeholder";
            if(data.color == 'green'){
                // this.consultationType = [
                //     'Appointment'
                // ]
                this.appointment.type = "Appointment"
            }else{
                
                // this.consultationType = [
                //     'Walk-in',
                //     'Emergency'
                // ]
                this.appointment.type = 'Walk-in'
                this.checkWhichFieldsToShow(data.doctor_id)
                // $("#pateintConsultaionDetail").modal("show");
            }
			
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
        }else{
			console.log('Orange Drink');
            this.appointment = {}
            this.pateintConsultaionDetail = data
            this.appointment.name = data.patient_id.name
            this.appointment.phone = data.patient_id.mobile
			if(data.patient_id.age_in_months > 0){
			this.appointment.age_param="months";			
			this.appointment.age=data.patient_id.age_in_months;			
			}else{
				this.appointment.age_param="years";
				this.appointment.age=data.patient_id.age_in_years;
			}
            this.GetCityFromClinicId(data.doctor_id.clinic_details.clinic_id)
            this.checkWhichFieldsToShow(data.doctor_id)
            this.appointment.gender = "Select"
			this.appointment.rbs = "Select"
            this.appointment.spo = "Select"
            this.appointment.temp = ""
            this.appointment.pulse = ""
            this.appointment.bp = ""
            this.appointment.dia = ""

            console.log("bumba")
            this.appointment.type = 'Walk-in'
            this.checkWhichFieldsToShow(data.doctor_id)
        }
		
				let object = <any>{}
                var doctor = this.dataDoctors.filter(d=>d._id.toString()==this.appointmentDoctor.toString())
                object.clinic_id = doctor[0].doctm_clinic_id
                object.mobile = data.patient_id.mobile
				console.log(data.patient_id.mobile);
                object.name = data.patient_id.name
                this.userService.GetPatientDetail(object).subscribe(data2 => {
                    if (data2.response == true) {
                        if(data2.data.length==1){
							
                           this.appointment.name = data2.data[0].name
						   
						   if(data2.data[0].dob){
							  // alert(data2.data[0].dob);
							   this.appointment.dob = data2.data[0].dob
							   this.dob_class="black-class";

						   }else{
							   this.dob_class="grey-class";
						   }
						   if( data2.data[0].gender ){
							  
							   this.genderClass="black-class";
							   this.appointment.gender = data2.data[0].gender
						   }else{
							  //  alert("sfd")
							   this.genderClass="grey-class";
						   }
						   if( data2.data[0].age ){
							   this.appointment.age = data2.data[0].age
						   }
						   if( data2.data[0].city ){
							   this.appointment.city = data2.data[0].city
						   }
						   if( data2.data[0].address ){
							    this.appointment.location = data2.data[0].address
						   }
						   
						  
                        }
                    }
                }, err => {
                    console.log(err);
                }) 
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
    handleImage(webcamImage) {
        console.info('received webcam image', webcamImage);
        if(this.webCamOpenedBY=='patient'){
            this.pateintPic = webcamImage._imageAsDataUrl
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
                object.clinic_id = this.pateintConsultaionDetail.doctor_id.doctm_clinic_id
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

    registerFromAppointment(){
        if(this.appointment.phone=="" || this.appointment.phone == null){
            this.toastr.warning("Invalid Phone","Warning")
            return
        }
        if(this.appointment.name=="" || this.appointment.name==null){
            this.toastr.warning("Invalid Name","Warning")
            return
        }
        if(this.field_age && ((this.appointment.age=="" || this.appointment.age==null) || (this.appointment.age<1 || this.appointment.age>100 || isNaN(this.appointment.age)))){
            this.toastr.warning("Invalid age","Warning")
            return
        }
        if(this.field_dob && (this.appointment.dob=="" || this.appointment.dob==null)){
            this.toastr.warning("Invalid date of birth","Warning")
            return
        }
        if(this.appointment.gender=="Select"){
            this.toastr.warning("Invalid gender","Warning")
            return
        }
        if(this.appointment.city == null || this.appointment.city == "" || this.appointment.city == undefined || this.appointment.city.trim().length<1
            ||this.appointment.location == null || this.appointment.location == "" || this.appointment.location == undefined || this.appointment.location.trim().length<1){
            this.toastr.warning("Invalid address","Warning")
            return
        }
        if(this.appointment.weight !=null && this.appointment.weight!='' && (this.appointment.weight < 1 || this.appointment.weight > 150 || isNaN(this.appointment.weight))){
            this.toastr.warning("Invalid weight","Warning")
            return
        }else if(this.appointment.height !=null && this.appointment.height!='' && (this.appointment.height < 1 || this.appointment.height > 240 || isNaN(this.appointment.height))){
            this.toastr.warning("Invalid height","Warning")
            return
        }
        $("#pateintConsultaionDetail").modal("hide");
        var ob ;
        ob = {}
        ob.appointment_detail = this.pateintConsultaionDetail
        this.appointment.clinic_id = ob.appointment_detail.doctor_id.doctm_clinic_id
        ob.registration = this.appointment
        if(this.reportPics.length>0){
            ob.reportPics = this.reportPics
        }
        if(this.pateintPic != null && this.pateintPic !=''){
            ob.pateintPic = this.pateintPic            
        }
		console.log('hereeeeee');
        console.log(ob)
        this.userService.RegisterFromAppointment(ob).subscribe(data => {
            this.patientList = []
            this.patientList1 = []
            console.log(data)
            if (data.response == true) {
                this.toastr.success(data.message,"Success")
                this.ngOnInit()
            }
        }, err => {
            console.log(err);
        })
    }

    filterAppointmentsByDoctor(id){
        this.todayAppointments = []
        this.tomorrowAppointments = []
        this.searchInput = ''
        for (var i = 0; i < this.todayAppointments_copy.length; i++) {
            if(this.todayAppointments_copy[i].doctor_id._id.toString() == id.toString()){
                this.todayAppointments.push(this.todayAppointments_copy[i])
            }
        }
        for (var i = 0; i < this.tomorrowAppointments_copy.length; i++) {
            if(this.tomorrowAppointments_copy[i].doctor_id._id.toString() == id.toString()){
                this.tomorrowAppointments.push(this.tomorrowAppointments_copy[i])
            }
        }  
        this.searchResultDiv = false      
    } 

    SearchAppointementsByPatNameOrMob(){
        this.searchResults = []
        if(!this.searchInput.includes('/')){
            if(this.searchInput && this.searchInput.trim().length>0){
                let ob = {
                    search : this.searchInput.trim()
                }

                this.userService.SearchAppointementsByPatNameOrMob(ob).subscribe(data => {
                    console.log(data)
                    if(data.response==true){
                        this.searchInputShow = this.searchInput
                        this.searchResults = data.data
                        var currentTime = new Date();
                        var currentOffset = currentTime.getTimezoneOffset();
                        var ISTOffset = 330;
                        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
                        var hoursIST : number = ISTTime.getHours()
                        var minutesIST : number = ISTTime.getMinutes()
                        var today = new Date()
                        var tomorrow = new Date()
                        tomorrow.setDate(new Date().getDate() + 1)
                        for (var i = 0; i < this.searchResults.length; i++) {
                            this.searchResults[i].date = new Date(this.searchResults[i].date)
                            this.searchResults[i].date.setDate(new Date(this.searchResults[i].date).getDate() - 1)
                            this.searchResults[i].sortTime = (parseInt(this.searchResults[i].time.startHour) * 60) + parseInt(this.searchResults[i].time.startMin)
                            if(today.setHours(18,30,0,0) == new Date(this.searchResults[i].date).setHours(18,30,0,0)){
                                console.log(this.searchResults[i].doctor_id.waitingTime)
                                if(this.searchResults[i].doctor_id.waitingTime){
                                    if(
                                        parseInt(this.searchResults[i].sortTime) + parseInt(this.searchResults[i].doctor_id.waitingTime.substr(0,2)) < 
                                        ((hoursIST * 60)+ minutesIST)
                                      ){
                                        this.searchResults[i].color = "orange"
                                    }else{
                                        this.searchResults[i].color = "green"
                                    }
                                }
                            }else if(new Date(this.searchResults[i].date).setHours(18,30,0,0) == tomorrow.setHours(18,30,0,0)){
                                this.searchResults[i].color = "yellow"
                            }else{
                                this.searchResults[i].color = "blue"
                            }
                        }
                        this.searchResultDiv = true
                    }
                }, err => {
                    console.log(err);
                })
            }
        }else{   
            var newdate = this.searchInput.split("/").reverse().join("/");
            console.log(newdate)
            var object = {
                date :newdate,
                smart_assistant_id:this.smartAssistantData.dataSmartAssistant._id,
                doctor_id :this.consultationDoctor
            }
            console.log(object)
            this.userService.FindPatientAppointmentByDate(object).subscribe(data => {
                console.log(data)
                if(data.response==true){
                    this.searchInputShow = this.searchInput
                    this.searchResults = data.data
                    var currentTime = new Date();
                    var currentOffset = currentTime.getTimezoneOffset();
                    var ISTOffset = 330;
                    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
                    var hoursIST : number = ISTTime.getHours()
                    var minutesIST : number = ISTTime.getMinutes()
                    var today = new Date()
                    var tomorrow = new Date()
                    tomorrow.setDate(new Date().getDate() + 1)
                    for (var i = 0; i < this.searchResults.length; i++) {
                        this.searchResults[i].date = new Date(this.searchResults[i].date)
                        this.searchResults[i].date.setDate(new Date(this.searchResults[i].date).getDate() - 1)
                        this.searchResults[i].sortTime = (parseInt(this.searchResults[i].time.startHour) * 60) + parseInt(this.searchResults[i].time.startMin)
                        if(today.setHours(18,30,0,0) == new Date(this.searchResults[i].date).setHours(18,30,0,0)){
                            if(
                                parseInt(this.searchResults[i].sortTime) + parseInt(this.searchResults[i].doctor_id.waitingTime.substr(0,2)) < 
                                ((hoursIST * 60)+ minutesIST)
                              ){
                                this.searchResults[i].color = "orange"
                            }else{
                                this.searchResults[i].color = "green"
                            }
                        }else if(new Date(this.searchResults[i].date).setHours(18,30,0,0) == tomorrow.setHours(18,30,0,0)){
                            this.searchResults[i].color = "yellow"
                        }else{
                            this.searchResults[i].color = "blue"
                        }
                    }
                    this.searchResultDiv = true
                }
            }, err => {
                console.log(err);
            })
        }
    }

    deleteSearch(){
        this.searchInput = ""
        this.searchResultDiv = false
    }

    searchInputKeyUp(data){
        if(this.searchInput && this.searchInput.trim.length==0 && this.searchInput !=""){
            if(data.code=="Enter" || data.code =="NumpadEnter"){
                this.SearchAppointementsByPatNameOrMob()
            }
        }else{
            this.searchResultDiv = false
        }
    }

    deleteAppointment(data){
        let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            // width: '250px',
            data: data.patient_id.name + "'s appointment"
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == "yes") {
                this.userService.DeleteAppointment(data._id).subscribe(data => {
                    console.log(data);
                    if (data.response == true) {
                        this.toastr.success(data.message, "Success");
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

    openCalender(){
		 this.getOpdHolidays(this.consultationDoctor);
        if (this.consultationDoctor == "") {
            this.toastr.warning("Select doctor first", "Warning")
        } else {
            let ob = {
                smart_assistant_id: this.smartAssistantData.dataSmartAssistant._id,
                doctor_id : this.consultationDoctor
            }
            this.userService.AppointmentsBySmartAssistant(ob).subscribe(data => {
                console.log(data)
                this.appointmentsForCalender = []
                if(data.response == true){
                    for (var i = 0; i < data.data.length; i++) {
                        this.appointmentsForCalender.push({
                            start : new Date(data.data[i]._id).toJSON().toString().substr(0,10),
                            title : data.data[i].time.length,
                            time : data.data[i].time
                        })
                    }
                    console.log(this.appointmentsForCalender)
                    // this.checkHoliday()
                   
                    
                }
				 console.log(this.getHolidayList)
                    if( this.getHolidayList.length>0){
                        for (var j = 0; j<this.getHolidayList.length; j++) {
                            this.appointmentsForCalender.push({
                                start: this.getHolidayList[j].start,
                                title : 'Closed',
                                textColor: 'grey'
                            })
                        }
                    } 
				/* const distinct=(value, index, self)=>{
					return self.indexOf(value)==index;
				} */
				
				console.log(this.appointmentsForCalender);
                this.events = this.appointmentsForCalender
                this.calendarOptions1 = {
                    editable: true,
                    eventLimit: false,
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: ''
                    },
                    events: this.appointmentsForCalender
                };
                $("#appointmentCalenderApntList").modal("show");
            }, err => {
                console.log(err);
            })
        }
    }

    //calender
    public ngAfterViewInit(): void {
        // hide spinner once all loaders are completed
        BaThemePreloader.load().then((values) => {
            this._spinner.hide();
        });
    }
    resetAppointmentModal(){
        this.appointmentDate = new Date()
        this.appointment = {}
    }
    clickButton(model: any) {
        this.displayEvent = model;
    }
    dayClick(model: any) {
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
        var today = new Date()
        today.setHours(0,0,0,0)
        if(new Date(model.setHours(0,0,0,0)) >= today){
            console.log(model);        
            this.appointmentDate = model
            var day = model.toString().substr(0, 3);
            var doctor
            var consulation
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
                    shiftOfOneSchedule.consultationTime = parseInt(doctor.avgConsTime.substr(0, 2))
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
            $("#selectAppointmentTime_EditApn").modal("show");
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

    changeDoctor(){
        this.dateSelected = false
    }

    getClassTime(shift){
        if(this.appointmentsForCalender.length>0){
            var appointments 
            appointments = this.appointmentsForCalender.filter(d=>d.start == new Date(new Date(this.appointmentDate).setDate(this.appointmentDate.getDate() + 1)).toJSON().toString().substr(0,10))
            if(appointments.length>0){
                for (var i = 0; i < appointments[0].time.length; i++) {
                    if(appointments[0].time[i].startHour == shift.startHour && appointments[0].time[i].startMin == shift.startMin){
                        shift.already = true
                    }
                }
            }
        }
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
    //calender end

    resetAppointmentModal_EditApn(){
        this.dateSelected = false
        this.appointmentDate = new Date()
        this.appointmentTime = {}
        this.appointment = {}
    }

    AppointmentsBySmartAssistant() {
        if (this.appointmentDoctor == "") {
            this.toastr.warning("Select doctor first", "Warning")
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
                        this.appointmentsForCalender.push({
                            start : new Date(data.data[i]._id).toJSON().toString().substr(0,10),
                            title : data.data[i].time.length,
                            time : data.data[i].time
                        })
                    }
                    console.log(this.appointmentsForCalender)
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
                    events: this.appointmentsForCalender
                };
                $("#appointmentCalender_EditApn").modal("show");
            }, err => {
                console.log(err);
            })
        }
    }

    updateAppointment(){
        if (!isNaN(this.appointment.phone) && this.appointment.phone.length>9 && this.appointment.name.trim().length>0) {
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
                object.update_id = this.dataToUpdateForAppointment.id
                this.loading = true
                $("#appointmentForm_EditApn").modal("hide");
                this.userService.UpdateAppointment(object).subscribe(data => {
                    console.log(data)
                    this.loading = false
                    if (data.response == true) {
                        this.toastr.success(data.message,"Success")
                        this.ngOnInit()
                        // this.router.navigate(['/header-three-layout']); 
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

    checkCustomTimeShifts(){
        this.customShifts = []
        if(this.appointmentsForCalender.length>0){
            var appointments 
            appointments = this.appointmentsForCalender.filter(d=>d.start == new Date(new Date(this.appointmentDate).setDate(this.appointmentDate.getDate() + 1)).toJSON().toString().substr(0,10))
            if(appointments.length>0){
                for (var i = 0; i < appointments[0].time.length; i++) {
                    if(appointments[0].time[i].customTime){
                        this.customShifts.push(appointments[0].time[i])
                    }
                }
            }
        }
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
            $("#selectAppointmentTime_EditApn").modal("hide");
            $("#appointmentCalender_EditApn").modal("hide");
            this.dateSelected = true
        } else { 
            this.appointmentTime = data
            $("#selectAppointmentTime_EditApn").modal("hide");
            $("#appointmentCalender_EditApn").modal("hide");
            this.dateSelected = true
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
                 } else if(
                     ((parseInt(customTime.hour)*60)+parseInt(customTime.minute)) % 
                     parseInt(doctor.avgConsTime.substr(0, 2)) != 0
                   ){
                     this.toastr.warning("Time slot format mismatches","Warning");
                     boolean = true             
                     return
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
            $("#selectAppointmentTime_EditApn").modal("hide");
            $("#appointmentCalender_EditApn").modal("hide");
            this.dateSelected = true
        }
    }

    editAppointmentOpenModal(data){
        console.log(data)
        this.dataToUpdateForAppointment = data
        this.dateSelected = true
        this.appointmentDoctor = data.doctor_id._id
        this.appointmentDate = new Date(new Date(data.date).setDate(new Date(data.date).getDate() - 1))
        this.appointmentTime = data.time
        this.appointment.phone = data.patient_id.mobile
        this.appointment.name = data.patient_id.name
        $("#appointmentForm_EditApn").modal("show");
    }

    editAppointmentOpenModalSearch(data){
        console.log(data)
		//alert('here');
        this.dataToUpdateForAppointment = data
        this.dateSelected = true
        this.appointmentDoctor = data.doctor_id._id
        this.appointmentDate = new Date(new Date(data.date))
        this.appointmentTime = data.time
        this.appointment.phone = data.patient_id.mobile
        this.appointment.name = data.patient_id.name
        $("#appointmentForm_EditApn").modal("show");
    }

    refresh(){
        this.smartAssistantData = JSON.parse(localStorage['smartAssistantDetails'])

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
        this.todayAppointments = []
        this.todayAppointments_copy = []
        this.tomorrowAppointments = []
        this.tomorrowAppointments_copy = []
        this.webCam = false
        this.appointment = {}
        this.patientList = []
        this.patientList1 = []
        this.reportPics = []
        this.searchResultDiv = false
        this.searchInput = ""

        this.appointmentDoctor = ""
        this.appointmentsForCalender = []

        this.appointmentTime = {}
        this.dateSelected = false
        this.customShifts = []

        let object = {
            smart_assistant_id : this.smartAssistantData.dataSmartAssistant._id 
        }
        this.userService.GetSmartAssistantDataAfterLogin(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.dataDoctors = data.doctorsRegisteredForSmartClinic
                this.TodayTmrwAppointmentsBySmartAssistant()
            }            
        }, err => {
          console.log(err);
        })
    }

    getDoctorName(id){
        var doctor = this.dataDoctors.filter(d=>d._id.toString() == id.toString())
        return doctor[0].first_name
    }
    getAppointmentMinToShow(min){
        if(min<10){
            return "0"+min
        } else{
            return min
        }
    }

/*     getOpdHolidays(){
        this.getHolidayList = []
        this.userService.GetOpdHoliday().subscribe(data => {
            console.log(data)    
            if(data.response){
                this.getHolidayList =  data.data
                
                this.toastr.success(data.message, 'Success')
            }else{
                this.toastr.error(data.message, 'Error')
            }
           
             
        },err=>{

            console.log(err)
        })
    } */
	
	 getOpdHolidays(id){
		//alert(id);
        this.getHolidayList = []
		var ob={'doctor_id':id}
        this.userService.GetOpdHoliday(ob).subscribe(data => {
            console.log(data)   
            var arr = []

            this.getOPDHOlidayCopy =  data.data
            for (var i = 0; i < data.data.length; i++) {
                //console.log(this.appointmentDoctorCopy)
                //if(data.data[i].doctor_id == id){
                    arr.push(new Date(data.data[i].date).toJSON().toString().substr(0,10))
               // }
            }
            for (var i = 0; i < arr.length; i++) {
                
                if(data.data[i].date){
                    this.getHolidayList.push({
                        start : arr[i],
                        title : 'Closed',
                        // color: '#FFB347'
                        textColor: 'grey'
                        //time : data.data[i].time
                    })
                }
            }
            console.log(arr)
            console.log(this.getHolidayList)
        if(data.response){
                this.toastr.success(data.message, 'Success')
            }else{
                this.toastr.error(data.message, 'Error')
            }

        },err=>{

            console.log(err)
        })
    }

    
    // checkHoliday(){
        
    //     this.doctorScheduleHolidays = []
    //     for (var i = 0; i < this.getDocData.consultation_schedule.length; i++) {
    //         if(!this.getDocData.consultation_schedule[i].Sunday){
    //             this.doctorScheduleHolidays.push('Sunday')
    //         }
    //         if(!this.getDocData.consultation_schedule[i].Monday){
    //             this.doctorScheduleHolidays.push('Monday')
    //         }
    //         if(!this.getDocData.consultation_schedule[i].Tuesday){
    //             this.doctorScheduleHolidays.push('Tuesday')
    //         }
    //         if(!this.getDocData.consultation_schedule[i].Wednesday){
    //             this.doctorScheduleHolidays.push('Wednesday')
    //         }
    //         if(!this.getDocData.consultation_schedule[i].Friday){
    //             this.doctorScheduleHolidays.push('Friday')
    //         }
    //         if(!this.getDocData.consultation_schedule[i].Saturday){
    //             this.doctorScheduleHolidays.push('Saturday')
    //         }
    //     }
          
    //             var date1 = new Date()
    //            this.getDaysInMonth(date1.getMonth(), date1.getFullYear())
    //            var arr = []
    //            var newDate = new Date()

    //            //console.log(this.getAllDates.setDate(newDate.getDate()+1))
    //            for (var i = 0; i < this.doctorScheduleHolidays.length; i++) {
    //                for (var j = 0; j < this.getAllDates.length; j++) {    
    //                    if(this.doctorScheduleHolidays[i] == this.datePipe.transform(this.getAllDates[j], 'EEEE')){
    //                        //console.log(this.getAllDates[j].setDate(1))
    //                        arr.push({
    //                            start:this.datePipe.transform(this.getAllDates[j], 'yyyy-MM-dd'),
    //                         title : 'Closed',
    //                         id : 1,
    //                         color: '#FFB347'
    //                        })
    //                    }
    //                }
    //            }

    //            // console.log(arr2)
    //            console.log(arr)
    //            // arr.push(this.showListOfHoliday); 
    //            //this.showListOfHoliday.concat(arr)
    //            // this.showListOfHoliday = arr
    //            // this.getHolidayList
    //            Array.prototype.push.apply(this.getHolidayList,arr); 
    //            // console.log(this.showListOfHoliday)
    //            console.log(this.getHolidayList)
            

    // }
    // getDaysInMonth(month, year) {
    //      var date = new Date(year, month, 1);
    //      this.getAllDates = [];
    //      while (date.getMonth() === month) {
    //         this.getAllDates.push(new Date(date));
    //         date.setDate(date.getDate()+1);
    //      }
    //      return this.getAllDates;
    // }
}
