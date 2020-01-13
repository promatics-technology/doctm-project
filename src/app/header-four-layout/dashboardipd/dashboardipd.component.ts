import { BaThemePreloader, BaThemeSpinner } from '../../theme/services';
import { Component,OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import { MissionService } from '../../providers/mission.service';
import { environment } from '../../../environments/environment.prod';
import { Subscription }   from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import { CustomDialogComponent } from '../../confirmation-popup/custom-dialog/custom-dialog.component'
import * as io from "socket.io-client";

declare var totalOpenedModal
declare var $

@Component({
  selector: 'app-dashboardipd',
  templateUrl: './dashboardipd.component.html',
  styleUrls: ['./dashboardipd.component.css'],
  providers: [UserService]
})
export class DashboardipdComponent implements OnInit {
    generalPatients
    semiPatients
    privatePatients
    patientActivities
    registrationData
    clinic_id
    webCam: boolean
    imgSrc
    appointmentsForCalender
    shiftsOfParticularDay
    dataDoctors
    //calender
    appointment
    //Akshay 27 Nov Start//
    registerForm: FormGroup;
    addpatientModal
    bedNumber
    bedType
    smartIpdId
    patientList
    patientList1
    //Akshay 27 Nov End//
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    calendarOptions: Options;
    displayEvent: any;
    events = null;
    consultationType
    customShifts
    appointmentDoctor = ""
    appointmentDate = new Date()
    adminDoctor: any;
    //calender  
    dataSmartIpd
    total_general_beds
    total_private_beds
    total_semi_private_beds
    genLength : number
    privateLen : number
    semiprivateLen : number
    openedPatientDetail
    pateintPicPath
    smartIpdData
    suggestionList
    addUpdateActivityText
    updateActivityId

    addpatientModalData
    addActivityForm: FormGroup;
    differenceInDays : number
    differenceInHours : number
    occupancyCharges : number
    bedCharges
    totalActivitiesAmount : number
    totalActivitiesOutstandingAmount : number
    occupancyHoursAmount: number
    doctorNote = null
    dischargeDate: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: false
    }
    discharegeTime
    newDischargeDate=new Date()
    suggestionListInstruction
    patientDataForDischarge
    approvedPatients
    loading
    refundAmount : number
    totalApprovedPatients
    totalActivityOccupancy : number
    totalActivitiesAmountPdf:number
    refundAmountPdf: number

    socket

    private trigger: Subject < void > = new Subject < void > ()
    constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private userService: UserService, private router: Router, public dialog: MatDialog, private _spinner: BaThemeSpinner) {}
    ngOnInit() {
        //current time
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        var hoursIST : number = ISTTime.getHours()
        var minutesIST : number = ISTTime.getMinutes()
        this.discharegeTime = null
        // this.discharegeTime.hour =  hoursIST
        // this.discharegeTime.minute = minutesIST
        //current time
        $.totalOpenedModal = 0
        $('.modal').on('hidden.bs.modal', function(e) {
            $.totalOpenedModal = $.totalOpenedModal - 1
            if ($.totalOpenedModal > 0) {
                $('body').addClass('cus-modalopen');
            } else {
                $('body').removeClass('cus-modalopen');
            }
        })
        $('.modal').on('shown.bs.modal', function(e) {
            $.totalOpenedModal = $.totalOpenedModal + 1
        })
        this.smartIpdData = JSON.parse(localStorage['smartIpdDetails'])
        this.pateintPicPath = environment.patientPic
        this.generalPatients = []
        this.semiPatients = []
        this.privatePatients = []
        this.patientActivities = []
        this.approvedPatients = []
        this.webCam = false
        this.imgSrc = './assets/imgs/placeholder.png'
        this.appointmentsForCalender = [{
            start: new Date().toJSON().toString().substr(0, 10),
            title: '1',
            time: ''
        }]
        this.shiftsOfParticularDay = []
        this.GetSmartIpdDataAfterLogin()
        //Akshay 27 Nov Start
        this.addpatientModal = {}
        this.addpatientModal.consultDoc = ""
        this.addpatientModal.gender = ""
        this.registerForm = this.formBuilder.group({
            'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(10), Validators.maxLength(10)
            ])],
            'patientName': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ]*')])],
            'age': [null, Validators.compose([Validators.required, Validators.max(100), Validators.min(0)])],
            'procedure': [null, Validators.compose([Validators.pattern('^[^ ]+[a-zA-Z0-9 ]*')])],
            'advanceReceived': [null, Validators.compose([Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(1), Validators.maxLength(10), Validators.min(0)
            ])],
            'gender': [null, Validators.compose([Validators.required])],
            'consultDoc': [null, Validators.compose([Validators.required])],
        })
        this.bedType = {}
        // Akshay 27 Nov End
        this.genLength = 0
        this.privateLen = 0
        this.semiprivateLen = 0
        this.totalApprovedPatients = 0

        this.addpatientModalData = {} 
        this.addpatientModalData.type = ""
        this.addActivityForm = this.formBuilder.group({
            'type': [null, Validators.compose([Validators.required])],
            'instruction': [null, Validators.compose([Validators.pattern('^[^ ]+[a-zA-Z0-9 ]*'),
                Validators.maxLength(80), Validators.min(0)])],
            'unit': [null, Validators.compose([Validators.pattern('^[^ ]+[0-9]*')])],//, Validators.max(100), Validators.min(0)])],
            'rate': [null, Validators.compose([Validators.pattern('^[^ ]+[0-9]*'),Validators.max(9999999), Validators.min(0)])],
            'amount': [null, Validators.compose([ Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(1), Validators.maxLength(10), Validators.min(0),
            ])],
            // 'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
            //     Validators.minLength(10), Validators.maxLength(10)
            // ])],
            // 'patientName': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
            // 'consultDoc': [null, Validators.compose([Validators.required])],
        })
        this.dischargeDate = new Date();
        console.log(this.smartIpdData.dataSmartIpd._id.toString())
        this.socket = io(environment.socket)
        this.socket.emit('room join',{
            room_id: this.smartIpdData.dataSmartIpd._id.toString()
        })
        this.socket.on('registrationBooked', (msg: any) => {
            this.ngOnInit()
        });

    }
    GetSmartIpdDataAfterLogin() {
        this.loading = true
        let object = {
            smart_ipd_id : this.smartIpdData.dataSmartIpd._id 
        }
        this.userService.GetSmartIpdDataAfterLogin(object).subscribe(data => {
            console.log(data)
            this.dataDoctors = []
            if (data.response == true) {
                this.dataDoctors = data.doctorsRegisteredForSmartClinic
                this.dataSmartIpd = data.dataSmartIpd
                this.approvedPatients = data.dataIpdPatientsApproved
                for (var i = 0; i < this.approvedPatients.length; i++) {
                    this.totalApprovedPatients = this.totalApprovedPatients + this.approvedPatients[i].approvedPatients.length
                }
                for (var i = 0; i < data.dataIpdPatients.length; i++) {
                    data.dataIpdPatients[i].vacant = false
                    if (data.dataIpdPatients[i].type == 'general') {
                        this.generalPatients.push(data.dataIpdPatients[i])
                    } else if (data.dataIpdPatients[i].type == 'private') {
                        this.privatePatients.push(data.dataIpdPatients[i])
                    } else if (data.dataIpdPatients[i].type == 'semi_private') {
                        this.semiPatients.push(data.dataIpdPatients[i])
                    }
                }
                if (this.dataDoctors.length > 0) {
                    var admin = this.dataDoctors.filter(d => d.type_of_doctor == "admin_doctor")
                    this.adminDoctor = admin[0];
                    this.clinic_id = this.adminDoctor.clinic_details.clinic_id;
                    this.total_general_beds = this.adminDoctor.clinic_services.general_beds
                    this.total_private_beds = this.adminDoctor.clinic_services.private_beds
                    this.total_semi_private_beds = this.adminDoctor.clinic_services.semi_private_beds
                    this.genLength = this.total_general_beds - this.generalPatients.length
                    this.privateLen = this.total_private_beds - this.privatePatients.length
                    this.semiprivateLen = this.total_semi_private_beds - this.semiPatients.length
                    for (var i = 0; i < this.genLength; i++) {
                        var id = this.findUniqueBedNumber(i+1,this.generalPatients)
                        this.generalPatients.push({
                            vacant: true,
                            bed_number : id
                        })
                    }
                    for (var i = 0; i < this.privateLen; i++) {
                        var id = this.findUniqueBedNumber(i+1,this.privatePatients)
                        this.privatePatients.push({
                            vacant: true,
                            bed_number : id
                        })
                    }
                    for (var i = 0; i < this.semiprivateLen; i++) {
                        var id = this.findUniqueBedNumber(i+1,this.semiPatients)
                        this.semiPatients.push({
                            vacant: true,
                            bed_number : id
                        })
                    }
                }
            }
            this.loading = false
        }, err => {
            console.log(err);
        })
    }

    findUniqueBedNumber(id,array){
        for (var i = 0; i < array.length; i++) {
            if(array[i].bed_number == id){
                id = id+1
                var idd = this.findUniqueBedNumber(id,array)
                return idd
            }
        }
        return id
    }    

    //Akshay 28 Nov start
    openPatientModal(data, id, type,patient) {
        this.getDetailOfClinic()
        this.bedNumber = id
        if (type == 'Private Bed') {
            this.bedType = {
                print: 'P',
                store: 'private',
                show: 'Private'
            }
            if(this.adminDoctor.clinic_services.private_bed_charges){
                this.bedCharges = this.adminDoctor.clinic_services.private_bed_charges
            }
        } else if (type == 'Semi Private Bed') {
            this.bedType = {
                print: 'SP',
                store: 'semi_private',
                show: 'Semi Private'
            }
            if(this.adminDoctor.clinic_services.semi_private_bed_charges){
                this.bedCharges = this.adminDoctor.clinic_services.semi_private_bed_charges
            }
        } else if (type == 'General Bed') {
            this.bedType = {
                print: 'G',
                store: 'general',
                show: 'General'
            }
            if(this.adminDoctor.clinic_services.general_bed_charges){
                this.bedCharges = this.adminDoctor.clinic_services.general_bed_charges
            }
        }
        if(patient.discharge_status=='requested_by_ipd'){
            // this.toastr.warning("Patient requested for discharge","Message")
            $("#dischargeMessage").modal("show");
            setTimeout(() => {
                $("#dischargeMessage").modal("hide");
            }, 3000);            
            return 
        }else if(patient.discharge_status=='approved_by_doctor'){
            this.openedPatientDetail = patient
            console.log(this.openedPatientDetail)
            this.totalActivitiesAmountPdf = 0
            for (var i = 0; i < this.openedPatientDetail.patient_activities.length; i++) {
                if(!this.openedPatientDetail.patient_activities[i].unit)
                {
                 this.openedPatientDetail.patient_activities[i].unit = 0   
                }
                if(!this.openedPatientDetail.patient_activities[i].rate){
                    this.openedPatientDetail.patient_activities[i].rate = 0
                }
                this.openedPatientDetail.patient_activities[i].amount = this.openedPatientDetail.patient_activities[i].unit * this.openedPatientDetail.patient_activities[i].rate
                this.totalActivitiesAmountPdf = this.totalActivitiesAmountPdf + this.openedPatientDetail.patient_activities[i].amount   
            }
            var totalOut : number = this.totalActivitiesAmountPdf + this.openedPatientDetail.occupancy_charges - this.openedPatientDetail.advanceReceived
            if(totalOut < 0 ){
                this.refundAmountPdf = totalOut + (-(2*totalOut))
            }else{
                this.refundAmountPdf = 0
            }
            
            $("#dischargePatientPdf").modal("show");
            // this.toastr.warning("Patient approved for discharge","Message")
            return
        }
        //Akshay 28 nov end
        if (data == true) {
            $("#addpatientModal").modal("show");
        } else {
            this.openedPatientDetail = patient
            this.calculateCharges()
            // this.loading = true
            this.userService.GetAllIpdActivityOfPatient(this.openedPatientDetail._id).subscribe(data => {
                console.log(data)
                this.suggestionList = []
                if (data.response == true) {
                    this.patientActivities = data.data
                    this.totalActivitiesAmount = 0
                    for (var i = 0; i < this.patientActivities.length; i++) {
                        if(!this.patientActivities[i].unit)
                        {
                         this.patientActivities[i].unit = 0   
                        }
                        if(!this.patientActivities[i].rate){
                            this.patientActivities[i].rate = 0
                        }
                        this.patientActivities[i].amount = this.patientActivities[i].unit * this.patientActivities[i].rate
                        this.totalActivitiesAmount = this.totalActivitiesAmount + this.patientActivities[i].amount
                    }
                }
                var diff =(new Date().getTime() - new Date(this.openedPatientDetail.createdAt).getTime()) / 1000;
                diff /= (60 * 60);
                var hoursDifference : number = Math.abs(Math.round(diff))
                this.differenceInDays = Math.trunc(hoursDifference / 24)
                this.differenceInHours = Math.trunc(hoursDifference % 24)
                this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
                this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
                this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges
                if(!this.openedPatientDetail.advanceReceived){
                    this.openedPatientDetail.advanceReceived = 0
                }
                this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.openedPatientDetail.advanceReceived
                if(this.totalActivitiesOutstandingAmount < 0 ){
                    this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2*this.totalActivitiesOutstandingAmount))
                    this.totalActivitiesOutstandingAmount = 0
                }else{
                    this.refundAmount = 0
                }
                // this.loading = false
            }, err => {
                console.log(err);
            })
            $("#patientModal").modal("show");
        }
    }
    openWebCam() {
        this.webCam = true
    }
    triggerSnapshot() {
        this.trigger.next();
        this.webCam = false
    }
    handleImage(webcamImage) {
        console.info('received webcam image', webcamImage);
        this.imgSrc = webcamImage._imageAsDataUrl
    }
    public get triggerObservable(): Observable < void > {
        return this.trigger.asObservable();
    }
    openCalendar() {
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
        $("#appointmentCalender").modal("show");
    }
    //calendar
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
    calenderDateClicked(model) {
        var today = new Date()
        today.setHours(0, 0, 0, 0)
        if (new Date(model.setHours(0, 0, 0, 0)) >= today) {
            console.log(model);
            this.appointmentDate = model
            var day = model.toString().substr(0, 3);
            var doctor
            var consulation
            doctor = {}
            // for (var i = 0; i < this.dataDoctors.length; i++) {
            //     if (this.dataDoctors[i]._id == this.appointmentDoctor) {
            doctor = this.dataDoctors[0]
            //         break;
            //     }
            // }
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
                        this.getClassTime(schedules[schedules.length - 1])
                        startTime = startTime + shiftOfOneSchedule.consultationTime
                    }
                    this.shiftsOfParticularDay.push({
                        shift: schedules,
                        startHour: consulation.shifts[i].fromTime.hour.toString(),
                        startMin: consulation.shifts[i].fromTime.minute.toString(),
                        endHour: consulation.shifts[i].toTime.hour.toString(),
                        endMin: consulation.shifts[i].toTime.minute.toString()
                    })
                }
                console.log(this.shiftsOfParticularDay)
                this.checkCustomTimeShifts()
            } else {
                this.toastr.warning("Doctor does not work on this day", "Warning")
                return
            }
            $("#selectAppointmentTime").modal("show");
        } else {
            this.toastr.warning("Appointment cant be booked for past dates", "Warning")
        }
    }
    getClassTime(shift) {
        if (this.appointmentsForCalender.length > 0) {
            var appointments
            appointments = this.appointmentsForCalender.filter(d => d.start == new Date(new Date(this.appointmentDate).setDate(this.appointmentDate.getDate() + 1)).toJSON().toString().substr(0, 10))
            if (appointments.length > 0) {
                for (var i = 0; i < appointments[0].time.length; i++) {
                    if (appointments[0].time[i].startHour == shift.startHour && appointments[0].time[i].startMin == shift.startMin) {
                        shift.already = true
                    }
                }
            }
        }
    }
    checkCustomTimeShifts() {
        this.customShifts = []
        if (this.appointmentsForCalender.length > 0) {
            var appointments
            appointments = this.appointmentsForCalender.filter(d => d.start == new Date(new Date(this.appointmentDate).setDate(this.appointmentDate.getDate() + 1)).toJSON().toString().substr(0, 10))
            if (appointments.length > 0) {
                for (var i = 0; i < appointments[0].time.length; i++) {
                    if (appointments[0].time[i].customTime) {
                        this.customShifts.push(appointments[0].time[i])
                    }
                }
            }
        }
    }
    getClassSlot(data) {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        var hoursIST = ISTTime.getHours()
        var minutesIST = ISTTime.getMinutes()
        var today = new Date()
        today.setHours(0, 0, 0, 0)
        if (data.already) {
            return 'already-selected'
        } else {
            if (today.toString() == this.appointmentDate.toString()) {
                if (data.startHour < hoursIST) {
                    return 'grey-slot'
                } else if (data.startHour == hoursIST) {
                    if (data.startMin <= minutesIST) {
                        return 'grey-slot'
                    }
                }
            } else {
                return 'blue-slot'
            }
        }
    }
    onTimeSelection(data) {
        $("#selectAppointmentTime").modal("hide");
        $("#appointmentCalender").modal("hide");
        // $("#addpatientModal").modal("hide");
        // $("#addpatientModal").modal("show");
    }
    //calendar end
    //Akshay 28 Nov
    registerClick() {
        this.addpatientModal.type = this.bedType.store
        this.addpatientModal.bed_number = this.bedNumber
        if (this.imgSrc != './assets/imgs/placeholder.png') {
            this.addpatientModal.imgSrc = this.imgSrc
        }
        this.addpatientModal.smart_ipd_id = this.dataSmartIpd._id
        this.addpatientModal.clinic_id = this.adminDoctor.doctm_clinic_id
        this.loading = true
        this.userService.BookIpdForPatient(this.addpatientModal).subscribe(data => {
            console.log(data)
            this.loading = false
            if (data.response == true) {
                this.toastr.success(data.message, "Success")
                $("#addpatientModal").modal("hide");
                this.ngOnInit()
            } else {
                this.toastr.error(data.message, "Error")
            }
        }, err => {
            console.log(err);
        })
    }
    resetForm() {
        this.registerForm.reset()
        this.imgSrc = './assets/imgs/placeholder.png'
    }
    createRange(number) {
        var items: number[] = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    }
    GetPatientLastPrescription() {
        if (this.addpatientModal.patientName && this.addpatientModal.patientName != null && this.addpatientModal.patientName != '' && this.addpatientModal.patientName.trim().length > 0) {
            let object
            object = {}
            object.clinic_id = this.clinic_id
            object.mobile = this.addpatientModal.phone
            object.name = this.addpatientModal.patientName
            // this.loading = true
            this.userService.GetPatientLastPrescription(object).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    this.addpatientModal.age = data.data.registration.age;
                    this.addpatientModal.gender = data.data.registration.gender;
                }
                // this.loading = false
            }, err => {
                console.log(err);
            })
        }
    }
    findPatientNameFromPhone(data) {
        if (!isNaN(data)) {
            data = data.trim()
            if (data.length > 0) {
                let object
                object = {}
                //  var doctor = this.admin.filter(d=>d._id.toString()==this.appointmentDoctor.toString())
                object.clinic_id = this.clinic_id
                object.mobile = data
                // this.loading = true
                this.userService.GetPatientDetail(object).subscribe(data => {
                    console.log(data)
                    this.patientList = []
                    this.patientList1 = []
                    if (data.response == true) {
                        if (data.data.length == 1) {
                            this.addpatientModal.patientName = data.data[0].name
                        } else {
                            this.patientList = data.data
                            this.patientList1 = data.data
                        }
                    }
                    // this.loading = false
                }, err => {
                    console.log(err);
                })
            }
        }
    }

    onKey(procedure) {
        let object
        object = {}
        object.clinic_id = this.clinic_id
        object.procedure = procedure
        this.userService.FindProcedureSuggestion(object).subscribe(data => {
            console.log(data)
            this.suggestionList = []
            if (data.response == true) {
                this.suggestionList = data.data
            }
        }, err => {
            console.log(err);
        })
    }

    openActivitySheet(){
        // this.userService.GetAllIpdActivityOfPatient(this.openedPatientDetail._id).subscribe(data => {
        //     console.log(data)
        //     this.suggestionList = []
        //     if (data.response == true) {
        //         this.patientActivities = data.data
                $("#activityModal").modal("show");        
        //     }
        // }, err => {
        //     console.log(err);
        // })
    }

    addActivity(){        
        this.addUpdateActivityText = "Add Activity"
        this.addpatientModalData.type = ""
        $("#addActivityModal").modal("show");
    }

    updateActivity(data, id) {
        this.addUpdateActivityText = "Update Activity"
        this.updateActivityId = id
        // this.addpatientModalData = Object.assign({}, data)
        this.addpatientModalData.type = data.type
        if (data.instruction) {
            this.addpatientModalData.instruction = data.instruction
        }
        if (data.unit) {
            this.addpatientModalData.unit = data.unit
        }
        if (data.rate) {
            this.addpatientModalData.rate = data.rate
        }
        if (data.amount) {
            this.addpatientModalData.amount = data.amount
        }
        $("#addActivityModal").modal("show");
    }
    addUpdateActivity(){
        if(this.addUpdateActivityText == "Add Activity"){
            this.addpatientModalData.amount=this.addpatientModalData.unit*this.addpatientModalData.rate
            this.addpatientModalData.ipdPatientId = this.openedPatientDetail._id
            this.loading = true
            this.userService.AddActivity(this.addpatientModalData).subscribe(data => {
                console.log(this.addpatientModalData)
                this.loading = false
                if (data.response == true) {
                    $("#addActivityModal").modal("hide");
                    // $("#patientModal").modal("hide");
                    // $("#activityModal").modal("hide");                
                    this.toastr.success(data.message,"Success")
                    // this.ngOnInit()
                    this.openPatientModal(this.openedPatientDetail.vacant,this.openedPatientDetail.bed_number,this.bedType.show+" Bed",this.openedPatientDetail)
                }else{
                    this.toastr.error(data.message,"Error")
                }
            }, err => {
                console.log(err);
            })
        }else if(this.addUpdateActivityText == "Update Activity"){
            this.addpatientModalData._id = this.updateActivityId
            this.loading = true
            this.userService.UpdateActivity(this.addpatientModalData).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.response == true) {
                    $("#addActivityModal").modal("hide");
                    // $("#patientModal").modal("hide");
                    // $("#activityModal").modal("hide");                
                    this.toastr.success(data.message,"Success")
                    // this.ngOnInit()
                    this.openPatientModal(this.openedPatientDetail.vacant,this.openedPatientDetail.bed_number,this.bedType.show+" Bed",this.openedPatientDetail)
                }else{
                    this.toastr.error(data.message,"Error")
                }
            }, err => {
                console.log(err);
            })
        }
    }

    DeleteActivity(activity){
        let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            // width: '250px',
            data: activity.instruction
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == "yes") {
                this.loading = true
                this.userService.DeleteActivity(activity._id).subscribe(data => {
                    console.log(data);
                    this.loading = false
                    if (data.response == true) {
                        this.toastr.success(data.message, "Success");
                        $("#addActivityModal").modal("hide");
                        $("#patientModal").modal("hide");
                        $("#activityModal").modal("hide");     
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

    printDischarge(){
        for (var i = 0; i < this.patientActivities.length; i++) {
            if(isNaN(this.patientActivities[i].unit) || isNaN(this.patientActivities[i].rate)){
                this.toastr.warning('Invalid unit or rate','Warning')
                return
            }
        }
        this.newDischargeDate.setSeconds(0);
        var getTime= new Date()
        getTime.setSeconds(0)
        if(this.discharegeTime == null){
            this.toastr.warning('Invalid discharge time','Warning')
            return
        }else if(new Date(this.newDischargeDate) < getTime){
            this.toastr.warning('Invalid discharge date and time','Warning')
            return
        }else if(this.totalActivitiesOutstandingAmount < 0){
            this.toastr.warning('Amount can not be negative','Warning')
            return
        } else{
            var object = {
                id: this.openedPatientDetail.id,
                doctor_note : this.doctorNote,
                duration_days: this.differenceInDays,
                duration_hours: this.differenceInHours,
                discharge_date: this.newDischargeDate,
                patient_activities: this.patientActivities,
                total_bill: this.totalActivitiesAmount + this.occupancyCharges,
                occupancy_charges: this.occupancyCharges
            }
            console.log(object)
            this.loading = true
            this.userService.RequestToDischargePatient(object).subscribe(data => {
                console.log(data);
                this.loading = false
                if (data.response == true) {
                    this.toastr.success(data.message, "Success");
                    $("#addActivityModal").modal("hide");
                    $("#patientModal").modal("hide");
                    $("#activityModal").modal("hide");    
                    $("#dischargeModal").modal("hide");                     
                    // $('#discharge_sheet').printThis({
                    //     debug: false,
                    //     importCSS: true,
                    //     importStyle: true,
                    //     printContainer: true,
                    //     pageTitle: "Prescription",
                    //     removeInline: false,
                    //     printDelay: 333,
                    //     header: null,
                    //     formValues: true
                    // });
                    // setTimeout(() => {
                        this.ngOnInit()
                    // }, 1500);
                } else {
                    this.toastr.error(data.message, "Error");
                }
            }, err => {
                console.log(err);
            })
        }
    }

    calculateCharges(){
        this.totalActivitiesAmount = 0
        // this.occupancyCharges = 0
        this.occupancyHoursAmount = 0
        this.totalActivitiesOutstandingAmount = 0
        for (var i = 0; i < this.patientActivities.length; i++) {
            if(!this.patientActivities[i].unit)
            {
             this.patientActivities[i].unit = 0   
            }
            if(!this.patientActivities[i].rate){
                this.patientActivities[i].rate = 0
            }
            this.patientActivities[i].amount = this.patientActivities[i].unit * this.patientActivities[i].rate
            this.totalActivitiesAmount = this.totalActivitiesAmount + this.patientActivities[i].amount
        }
        var diff =(new Date(this.newDischargeDate).getTime() - new Date(this.openedPatientDetail.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference : number = Math.abs(Math.round(diff))
        this.differenceInDays = Math.trunc(hoursDifference / 24)
        this.differenceInHours = Math.trunc(hoursDifference % 24)
        if(!this.bedCharges){
            this.bedCharges = 0
        }
        this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
        // this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges
        if(!this.openedPatientDetail.advanceReceived){
            this.openedPatientDetail.advanceReceived = 0
        }
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.openedPatientDetail.advanceReceived
        if(this.totalActivitiesOutstandingAmount < 0 ){
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2*this.totalActivitiesOutstandingAmount))
            this.totalActivitiesOutstandingAmount = 0
        }else{
            this.refundAmount = 0
        }
    }

    onDateSelect(evt){
        if(new Date(this.openedPatientDetail.createdAt) >= new Date(evt.toISOString())){
            this.toastr.warning('Invalid discharge date','Warning')
        }else{
            var diff =(new Date(evt).getTime() - new Date(this.openedPatientDetail.createdAt).getTime()) / 1000;
            diff /= (60 * 60);
            var hoursDifference : number = Math.abs(Math.round(diff))
            this.differenceInDays = Math.trunc(hoursDifference / 24)
            this.differenceInHours = Math.trunc(hoursDifference % 24)
            this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
            this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
            this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges
            if(!this.openedPatientDetail.advanceReceived){
                this.openedPatientDetail.advanceReceived = 0
            }
            this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.openedPatientDetail.advanceReceived
            if(this.totalActivitiesOutstandingAmount < 0 ){
                this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2*this.totalActivitiesOutstandingAmount))
                this.totalActivitiesOutstandingAmount = 0
            }else{
                this.refundAmount = 0
            }
        }    
    }  

    getDetailOfClinic(){
        this.smartIpdData = JSON.parse(localStorage['smartIpdDetails'])
    }

    onKey1(instruction){
        let object
        object = {}
        object.id = this.openedPatientDetail.id
        object.instruction = instruction
        this.userService.FindInstructionSuggestion(object).subscribe(data => {
            console.log(data)
            this.suggestionListInstruction = []
            if (data.response == true) {
                this.suggestionListInstruction = data.data
            }
        }, err => {
            console.log(err);
        })
    }

    getDifferenceInDays(){
        if(this.discharegeTime == null){
            return
        }
        this.newDischargeDate = new Date(this.dischargeDate)
        this.newDischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute)
        var diff =(new Date(this.newDischargeDate).getTime() - new Date(this.openedPatientDetail.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference : number = Math.abs(Math.round(diff))
        this.differenceInDays = Math.trunc(hoursDifference / 24)
        this.differenceInHours = Math.trunc(hoursDifference % 24)
        this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
        this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
        // this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges
        if(!this.openedPatientDetail.advanceReceived){
            this.openedPatientDetail.advanceReceived = 0
        }
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.openedPatientDetail.advanceReceived
        if(this.totalActivitiesOutstandingAmount < 0 ){
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2*this.totalActivitiesOutstandingAmount))
            this.totalActivitiesOutstandingAmount = 0
        }else{
            this.refundAmount = 0
        }
        return this.differenceInDays
    }

    getDifferenceInHours(){
        if(this.discharegeTime == null){
            return
        }
        this.newDischargeDate = new Date(this.dischargeDate)
        this.newDischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute)
        var diff =(new Date(this.newDischargeDate).getTime() - new Date(this.openedPatientDetail.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference : number = Math.abs(Math.round(diff))
        this.differenceInDays = Math.trunc(hoursDifference / 24)
        this.differenceInHours = Math.trunc(hoursDifference % 24)
        this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
        this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
        // this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges
        if(!this.openedPatientDetail.advanceReceived){
            this.openedPatientDetail.advanceReceived = 0
        }
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.openedPatientDetail.advanceReceived
        if(this.totalActivitiesOutstandingAmount < 0 ){
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2*this.totalActivitiesOutstandingAmount))
            this.totalActivitiesOutstandingAmount = 0
        }else{
            this.refundAmount = 0
        }
        return this.differenceInHours
    }

    getPatientListClassBorder(patient){
        if(patient.vacant){
            return 'greenborder'
        }else if(!patient.discharge_status){
            return 'redborder'
        }else if(patient.discharge_status=='requested_by_ipd'){
            return 'yellowborder'
        }
    }

    getPatientListClass(patient){
        if(patient.vacant){
            return 'green'
        }else if(!patient.discharge_status){
            return 'red'
        }else if(patient.discharge_status=='requested_by_ipd'){
            return 'yellow'
        }
    }

    getImgPatient(patient){
        if(patient.vacant){
            return './assets/imgs/no-icons.png'
        }else if(!patient.discharge_status){
            return './assets/imgs/icons.png'
        }else if(patient.discharge_status=='requested_by_ipd'){
            return './assets/imgs/yellow-bed.png'
        }else if(patient.discharge_status=='approved_by_doctor'){
            return './assets/imgs/blue-bed.png'
        }
    }
    resetAddActivityForm() {
        this.addActivityForm.reset()
    }

    openConfirmationDialog(activity){
        let dialogRef = this.dialog.open(CustomDialogComponent, {
            data:{
                header:"Confirmation",
                body:"Are you sure you want to generate bill for this patient ?"
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == "yes") {
                $("#dischargeModal").modal("show");
                $('textarea').autoResize();
            } else {
                console.log("error or No Thanks button clicked")
            }
        });
    }

    getDoctorName(id){
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if(this.dataDoctors[i]._id.toString() == id.toString()){
                return this.dataDoctors[i].first_name
            }
        }
    }

    printPdfAndDischarge(){
        this.loading = true
        this.userService.UpdateDischargeStatusIpdPatient(this.openedPatientDetail).subscribe(data => {
            console.log(data)
            this.loading = false
            if (data.response == true) {
                this.toastr.success(data.message,"Success")
                $("#dischargePatientPdf").modal("hide");
                setTimeout(() => {
                    $('#generatePdfModal').printThis({
                        debug: false,
                        importCSS: true,
                        importStyle: true,
                        printContainer: true,
                        pageTitle: "",
                        removeInline: false,
                        printDelay: 333,
                        header: null,
                        formValues: true
                    });
                    this.ngOnInit()
                }, 1000);
            }else{
                this.toastr.error(data.message,"Error")
            }
        }, err => {
            console.log(err);
        })
    }

    getDischargeInstructionsStatus(){
        if((this.openedPatientDetail.woundCare && (this.openedPatientDetail.woundCare.one || this.openedPatientDetail.woundCare.two)) || 
            (this.openedPatientDetail.diet && (this.openedPatientDetail.diet.one || this.openedPatientDetail.diet.two)) || 
            (this.openedPatientDetail.lifestyle && (this.openedPatientDetail.lifestyle.one || this.openedPatientDetail.lifestyle.two)) || 
            (this.openedPatientDetail.others && (this.openedPatientDetail.others.one || this.openedPatientDetail.others.two))){
            return true
        }else{
            return false
        }
    }

    onTimeChange(){
        if(this.discharegeTime == null){
            return
        }
        this.newDischargeDate = new Date(this.dischargeDate)
        this.newDischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute)
        var diff =(new Date(this.newDischargeDate).getTime() - new Date(this.openedPatientDetail.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference : number = Math.abs(Math.round(diff))
        this.differenceInDays = Math.trunc(hoursDifference / 24)
        this.differenceInHours = Math.trunc(hoursDifference % 24)
        this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
        this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
        this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges
        if(!this.openedPatientDetail.advanceReceived){
            this.openedPatientDetail.advanceReceived = 0
        }
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.openedPatientDetail.advanceReceived
        if(this.totalActivitiesOutstandingAmount < 0 ){
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2*this.totalActivitiesOutstandingAmount))
            this.totalActivitiesOutstandingAmount = 0
        }else{
            this.refundAmount = 0
        }
    }

    getTimeFiveAndHalfHoursBefore(date){
        return (new Date(date).setMinutes ( new Date(date).getMinutes() - 330 ))
    }

}
