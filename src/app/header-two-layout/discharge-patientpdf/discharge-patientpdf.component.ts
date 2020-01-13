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
import * as io from "socket.io-client";

declare var totalOpenedModal
declare var $

@Component({
  selector: 'app-discharge-patientpdf',
  templateUrl: './discharge-patientpdf.component.html',
  styleUrls: ['./discharge-patientpdf.component.css'],
  providers: [UserService]
})
export class DischargePatientpdfComponent implements OnInit {
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
    bedCharges : number
    totalActivitiesAmount : number
    totalActivitiesOutstandingAmount : number
    refundAmount: number
    totalActivityOccupancy: number
    occupancyHoursAmount:number
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

    //MEDICATION
    medicatab = 0    
    medicationStatus = [
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false },
        { status: false }
    ]
    medication
    medicationTabArray = []
    medicationCapArray = []
    medicationSypArray = []
    medicationSuspArray = []
    medicationEmulsnArray = []
    medicationInjArray = []
    medicationCreamArray = []
    medicationGelArray = []
    medicationDropsArray = []
    medicationPowderArray = []
    medicationAerosolsArray = []
    medicationMouthWashArray = []
    medicationSolutionArray = []
    medicationLotionArray = []
    medicationOintmentArray = []
    totalMedications: number = -1
    doctorMedicationTabletDB
    doctorMedicationCapsuleDB
    doctorMedicationSyrupDB
    doctorMedicationSuspensionDB
    doctorMedicationEmulsionDB
    doctorMedicationSolutionDB
    doctorMedicationInjectionDB
    doctorMedicationCreamDB
    doctorMedicationOitmentDB
    doctorMedicationGelDB
    doctorMedicationLotionDB
    doctorMedicationDropsDB
    doctorMedicationAerosolsDB
    doctorMedicationPowderDB
    doctorMedicationMouthwashDB

    doctorMedicationTabletInfoDB
    doctorMedicationCapsuleInfoDB
    doctorMedicationSyrupInfoDB
    doctorMedicationSuspensionInfoDB
    doctorMedicationEmulsionInfoDB
    doctorMedicationSolutionInfoDB
    doctorMedicationInjectionInfoDB
    doctorMedicationCreamInfoDB
    doctorMedicationOitmentInfoDB
    doctorMedicationGelInfoDB
    doctorMedicationLotionInfoDB
    doctorMedicationDropsInfoDB
    doctorMedicationAerosolsInfoDB
    doctorMedicationPowderInfoDB
    doctorMedicationMouthwashInfoDB

    tempDosage
    tempInjection
    currentFrequency
    tempDuration
    tempMedicationArray
    tempFrequency
    tempFrequencySpecial
    tempQuantity
    medInfoDB
    //MEDICATION
    doctorData
    patientDataForDischarge
    patientActivities
    currentTab
    woundCare
    diet
    lifestyle
    others

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
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        this.patientDataForDischarge = JSON.parse(localStorage['patientDataForDischarge'])
        this.patientActivities = this.patientDataForDischarge.patient_activities
        this.dataSmartIpd = this.patientDataForDischarge.smart_ipd_id
        console.log(this.patientDataForDischarge)
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
        // this.smartIpdData = JSON.parse(localStorage['smartIpdDetails'])
        this.pateintPicPath = environment.patientPic
        this.webCam = false
        this.imgSrc = './assets/imgs/placeholder.png'
        this.appointmentsForCalender = [{
            start: new Date().toJSON().toString().substr(0, 10),
            title: '1',
            time: ''
        }]
        this.shiftsOfParticularDay = []
        //Akshay 27 Nov Start
        this.addpatientModal = {}
        this.addpatientModal.consultDoc = ""
        this.addpatientModal.gender = ""
        this.registerForm = this.formBuilder.group({
            'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(10), Validators.maxLength(10)
            ])],
            'patientName': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
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

        this.addpatientModalData = {}
        this.addpatientModalData.type = ""
        this.addActivityForm = this.formBuilder.group({
            'type': [null, Validators.compose([Validators.required])],
            'instruction': [null, Validators.compose([Validators.pattern('^[^ ]+[a-zA-Z0-9 ]*'),
                Validators.maxLength(80), Validators.min(1)])],
            'unit': [null, Validators.compose([Validators.pattern('^[^ ]+[0-9]*')])],//, Validators.max(100), Validators.min(0)])],
            'rate': [null, Validators.compose([Validators.max(9999999), Validators.min(0)])],
            'amount': [null, Validators.compose([ Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(1), Validators.maxLength(10), Validators.min(0),
            ])],
            // 'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
            //     Validators.minLength(10), Validators.maxLength(10)
            // ])],
            // 'patientName': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
            // 'consultDoc': [null, Validators.compose([Validators.required])],
        })
        this.dischargeDate = this.patientDataForDischarge.discharge_date
        this.newDischargeDate = this.patientDataForDischarge.discharge_date
        this.discharegeTime = {
            hour: new Date(this.dischargeDate).getHours(),
            minute: new Date(this.dischargeDate).getMinutes()
        }

        //MEDICATION
        // this.medicationStatus[0].status = true
        this.medicationTabArray.push('1')
        this.medicationCapArray.push('1')
        this.medicationSypArray.push('1')
        this.medicationSuspArray.push('1')
        this.medicationEmulsnArray.push('1')
        this.medicationInjArray.push('1')
        this.medicationCreamArray.push('1')
        this.medicationGelArray.push('1')
        this.medicationDropsArray.push('1')
        this.medicationPowderArray.push('1')
        this.medicationAerosolsArray.push('1')
        this.medicationMouthWashArray.push('1')
        this.medicationSolutionArray.push('1')
        this.medicationLotionArray.push('1')
        this.medicationOintmentArray.push('1')
        this.doctorMedicationTabletDB = []
        this.doctorMedicationCapsuleDB = []
        this.doctorMedicationSyrupDB = []
        this.doctorMedicationSuspensionDB = []
        this.doctorMedicationEmulsionDB = []
        this.doctorMedicationSolutionDB = []
        this.doctorMedicationInjectionDB = []
        this.doctorMedicationCreamDB = []
        this.doctorMedicationOitmentDB = []
        this.doctorMedicationGelDB = []
        this.doctorMedicationLotionDB = []
        this.doctorMedicationDropsDB = []
        this.doctorMedicationAerosolsDB = []
        this.doctorMedicationPowderDB = []
        this.doctorMedicationMouthwashDB = []

        this.doctorMedicationTabletInfoDB = []
        this.doctorMedicationCapsuleInfoDB = []
        this.doctorMedicationSyrupInfoDB = []
        this.doctorMedicationSuspensionInfoDB = []
        this.doctorMedicationEmulsionInfoDB = []
        this.doctorMedicationSolutionInfoDB = []
        this.doctorMedicationInjectionInfoDB = []
        this.doctorMedicationCreamInfoDB = []
        this.doctorMedicationOitmentInfoDB = []
        this.doctorMedicationGelInfoDB = []
        this.doctorMedicationLotionInfoDB = []
        this.doctorMedicationDropsInfoDB = []
        this.doctorMedicationAerosolsInfoDB = []
        this.doctorMedicationPowderInfoDB = []
        this.doctorMedicationMouthwashInfoDB = []
        this.medInfoDB = []

        this.medication = {}
        this.medication.tab = [{}]
        this.medication.tab[0].frequency = 'Frequency'
        this.medication.tab[0].duration = 'Duration'
        this.medication.cap = [{}]
        this.medication.cap[0].frequency = 'Frequency'
        this.medication.cap[0].duration = 'Duration'
        this.medication.syp = [{}]
        this.medication.syp[0].frequency = 'Frequency'
        this.medication.syp[0].dosage = 'Dosage'
        this.medication.syp[0].duration = 'Duration'
        this.medication.susp = [{}]
        this.medication.susp[0].frequency = 'Frequency'
        this.medication.susp[0].dosage = 'Dosage'
        this.medication.susp[0].duration = 'Duration'
        this.medication.emulsn = [{}]
        this.medication.emulsn[0].frequency = 'Frequency'
        this.medication.emulsn[0].dosage = 'Dosage'
        this.medication.emulsn[0].duration = 'Duration'
        this.medication.solution = [{}]
        this.medication.solution[0].frequency = 'Frequency'
        this.medication.solution[0].dosage = 'Dosage'
        this.medication.solution[0].duration = 'Duration'
        this.medication.injection = [{}]
        this.medication.injection[0].frequency = 'Frequency'
        this.medication.injection[0].mode = 'Mode'
        this.medication.injection[0].duration = 'Duration'
        this.medication.powder = [{}]
        this.medication.powder[0].frequency = 'Frequency'
        this.medication.powder[0].duration = 'Duration'
        this.medication.cream = [{}]
        this.medication.cream[0].frequency = 'Frequency'
        this.medication.cream[0].duration = 'Duration'
        this.medication.aerosols = [{}]
        this.medication.aerosols[0].frequency = 'Frequency'
        this.medication.aerosols[0].duration = 'Duration'
        this.medication.mouthwash = [{}]
        this.medication.mouthwash[0].frequency = 'Frequency'
        this.medication.mouthwash[0].duration = 'Duration'
        this.medication.gel = [{}]
        this.medication.gel[0].frequency = 'Frequency'
        this.medication.gel[0].duration = 'Duration'
        // this.medication.gel[0].quantity = 'Qty, (No)'
        this.medication.drops = [{}]
        this.medication.drops[0].frequency = 'Frequency'
        this.medication.drops[0].duration = 'Duration'
        this.medication.drops[0].quantity = 'Qty, (No)'
        this.medication.lotion = [{}]
        this.medication.lotion[0].frequency = 'Frequency'
        this.medication.lotion[0].duration = 'Duration'
        this.medication.ointment = [{}]
        this.medication.ointment[0].frequency = 'Frequency'
        this.medication.ointment[0].duration = 'Duration'

        this.tempMedicationArray = []
        //MEDICATION
        this.currentTab = 'pd'
        this.occupancyCharges = this.patientDataForDischarge.occupancy_charges
        this.FindDoctorsOfSameClinic()
        this.woundCare = {}
        this.diet = {}
        this.lifestyle = {}
        this.others = {}
        this.GetDoctorSuggestions()

        /////////////////SOCKET ON//////////////////////
        this.socket = io(environment.socket)
        this.socket.emit('room join',{
            room_id: this.doctorData.smart_ipd_id.toString()
        })
        /////////////////SOCKET ON end//////////////////////
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
        this.userService.BookIpdForPatient(this.addpatientModal).subscribe(data => {
            console.log(data)
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
            this.userService.GetPatientLastPrescription(object).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    this.addpatientModal.age = data.data.registration.age;
                    this.addpatientModal.gender = data.data.registration.gender;
                }
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
        // this.userService.GetAllIpdActivityOfPatient(this.patientDataForDischarge._id).subscribe(data => {
        //     console.log(data)
        //     this.suggestionList = []
        //     if (data.response == true) {
        //         this.patientDataForDischarge.patient_activities = data.data
                $("#activityModal").modal("show");        
        //     }
        // }, err => {
        //     console.log(err);
        // })
    }

    addActivity(){        
        this.addUpdateActivityText = "Add Activity"
        $("#addActivityModal").modal("show");
        // $("#patientModal").modal("hide");
        // $("#activityModal").modal("hide")
    }

    updateActivity(data,id){
        this.addUpdateActivityText = "Update Activity"
        this.updateActivityId = id
        this.addpatientModalData = data
        $("#addActivityModal").modal("show");
    }

    addUpdateActivity(){
        if(this.addUpdateActivityText == "Add Activity"){
            this.addpatientModalData.amount=this.addpatientModalData.unit*this.addpatientModalData.rate
            this.addpatientModalData.ipdPatientId = this.patientDataForDischarge._id
            this.userService.AddActivity(this.addpatientModalData).subscribe(data => {
                console.log(this.addpatientModalData)
                if (data.response == true) {
                    $("#addActivityModal").modal("hide");
                    $("#patientModal").modal("hide");
                    $("#activityModal").modal("hide");                
                    this.toastr.success(data.message,"Success")
                    this.ngOnInit()
                }else{
                    this.toastr.error(data.message,"Error")
                }
            }, err => {
                console.log(err);
            })
        }else if(this.addUpdateActivityText == "Update Activity"){
            this.addpatientModalData._id = this.updateActivityId
            this.userService.UpdateActivity(this.addpatientModalData).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    $("#addActivityModal").modal("hide");
                    $("#patientModal").modal("hide");
                    $("#activityModal").modal("hide");                
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

    DeleteActivity(activity){
        let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            // width: '250px',
            data: activity.instruction
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == "yes") {
                this.userService.DeleteActivity(activity._id).subscribe(data => {
                    console.log(data);
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
        if(this.discharegeTime == null){
            this.toastr.warning('Invalid discharge time','Warning')
            return
        }else if(new Date(this.patientDataForDischarge.createdAt) >= new Date(new Date(this.newDischargeDate).toISOString())){
            this.toastr.warning('Invalid discharge date','Warning')
        }else if(this.totalActivitiesOutstandingAmount < 0){
            this.toastr.warning('Amount can not be negative','Warning')
        } else{
            var object = {
                id: this.patientDataForDischarge.id,
                doctor_note : this.doctorNote,
                duration_days: this.differenceInDays,
                duration_hours: this.differenceInHours,
                newDischargeDate: this.newDischargeDate,
                total_bill: this.patientDataForDischarge.advanceReceived + this.totalActivitiesOutstandingAmount
            }
            console.log(object)
            // this.userService.DischargePatient(object).subscribe(data => {
            //     console.log(data);
            //     if (data.response == true) {
            //         this.toastr.success(data.message, "Success");
                    // $("#addActivityModal").modal("hide");
                    // $("#patientModal").modal("hide");
                    // $("#activityModal").modal("hide");    
                    // $("#dischargeModal").modal("hide");                     
                    $('#discharge_sheet').printThis({
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
        //             setTimeout(() => {
        //                 this.ngOnInit()
        //             }, 1500);
        //         } else {
        //             this.toastr.error(data.message, "Error");
        //         }
        //     }, err => {
        //         console.log(err);
        //     })
        }
    }

    // calculateCharges(){ 
    //     this.totalActivitiesAmount = 0
    //     this.occupancyCharges = 0
    //     this.totalActivitiesOutstandingAmount = 0
    //     this.refundAmount = 0
    //     this.totalActivityOccupancy=0
    //     this.occupancyHoursAmount =0
    //     for (var i = 0; i < this.patientDataForDischarge.patient_activities.length; i++) {
    //         if(!this.patientDataForDischarge.patient_activities[i].unit)
    //         {
    //          this.patientDataForDischarge.patient_activities[i].unit = 0   
    //         }
    //         if(!this.patientDataForDischarge.patient_activities[i].rate){
    //             this.patientDataForDischarge.patient_activities[i].rate = 0
    //         }
    //         this.patientDataForDischarge.patient_activities[i].amount = this.patientDataForDischarge.patient_activities[i].unit * this.patientDataForDischarge.patient_activities[i].rate
    //         this.totalActivitiesAmount = this.totalActivitiesAmount + this.patientDataForDischarge.patient_activities[i].amount

    //     }
    //     var diff =(new Date(this.newDischargeDate).getTime() - new Date(this.patientDataForDischarge.createdAt).getTime()) / 1000;
    //     diff /= (60 * 60);
    //     var hoursDifference : number = Math.abs(Math.round(diff))
    //     this.differenceInDays = Math.trunc(hoursDifference / 24)
    //     this.differenceInHours = Math.trunc(hoursDifference % 24)
    //     if(!this.bedCharges){
    //         this.bedCharges = 0
    //     }
    //     this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
    //     this.totalActivitiesAmount = this.totalActivitiesAmount
    //     this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges
    //     this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
    //     this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.patientDataForDischarge.advanceReceived
    //     if(this.totalActivitiesOutstandingAmount < 0 ){
    //         this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2*this.totalActivitiesOutstandingAmount))
    //         this.totalActivitiesOutstandingAmount = 0
    //     }else{
    //         this.refundAmount = 0
    //     }
    // }

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
        var diff =(new Date(this.newDischargeDate).getTime() - new Date(this.patientDataForDischarge.createdAt).getTime()) / 1000;
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
        if(!this.patientDataForDischarge.advanceReceived){
            this.patientDataForDischarge.advanceReceived = 0
        }
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.patientDataForDischarge.advanceReceived
        if(this.totalActivitiesOutstandingAmount < 0 ){
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2*this.totalActivitiesOutstandingAmount))
            this.totalActivitiesOutstandingAmount = 0
        }else{
            this.refundAmount = 0
        }
    }

    onDateSelect(evt){
        if(new Date(this.patientDataForDischarge.createdAt) >= new Date(evt.toISOString())){
            this.toastr.warning('Invalid discharge date','Warning')
        }else{
            var diff =(new Date(evt).getTime() - new Date(this.patientDataForDischarge.createdAt).getTime()) / 1000;
            diff /= (60 * 60);
            var hoursDifference : number = Math.abs(Math.round(diff))
            this.differenceInDays = Math.trunc(hoursDifference / 24)
            this.differenceInHours = Math.trunc(hoursDifference % 24)
            this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
            this.totalActivitiesAmount = this.totalActivitiesAmount
            this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges
            this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
            this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.patientDataForDischarge.advanceReceived
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
        object.id = this.patientDataForDischarge.id
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
        // new Date(this.dischargeDate).setHours(this.discharegeTime.hour, this.discharegeTime.minute)

        var diff =(new Date(this.newDischargeDate).getTime() - new Date(this.patientDataForDischarge.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference : number = Math.abs(Math.round(diff))
        this.differenceInDays = Math.trunc(hoursDifference / 24)
        this.differenceInHours = Math.trunc(hoursDifference % 24)
        // this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
        this.totalActivitiesAmount = this.totalActivitiesAmount
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges
        this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.patientDataForDischarge.advanceReceived
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
        // this.dischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute)
        this.newDischargeDate = new Date(this.dischargeDate)
        this.newDischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute)
        // new Date(this.dischargeDate).setHours(this.discharegeTime.hour, this.discharegeTime.minute)

        var diff =(new Date(this.newDischargeDate).getTime() - new Date(this.patientDataForDischarge.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference : number = Math.abs(Math.round(diff))
        this.differenceInDays = Math.trunc(hoursDifference / 24)
        this.differenceInHours = Math.trunc(hoursDifference % 24)
        // this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
        this.totalActivitiesAmount = this.totalActivitiesAmount
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges
        this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.patientDataForDischarge.advanceReceived
        if(this.totalActivitiesOutstandingAmount < 0 ){
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2*this.totalActivitiesOutstandingAmount))
            this.totalActivitiesOutstandingAmount = 0
        }else{
            this.refundAmount = 0
        }
        return this.differenceInHours
    }

    //MEDICATION
    mediClass(i) {
        if (this.medicationStatus[i].status == true) {
            return 'active'
        } else {
            return ''
        }
    }
    medicaTab(i, data) {
        this.medicatab = i
        if (this.totalMedications > 8 && this.medicationStatus[i].status == false) {
            this.toastr.warning("Maximum items can be 10", "Warning")
        } else {
            this.medicationStatus[i].status = !this.medicationStatus[i].status
            if (this.medicationStatus[i].status == true) {
                this.totalMedications = this.totalMedications + 1
                // var elmnt = document.getElementById("medicinelistid1");
                // console.log(elmnt);
                // elmnt.scrollIntoView();

                // this.scrollService.scrollTo('medicinelistid' + i);

                // var objDiv = document.getElementById("medicine-list-id"+i);
                // console.log(objDiv)
                // objDiv.scrollTop = objDiv.scrollHeight;

            } else {
                if (this.totalMedications > -1) {
                    if (i == 0) {
                        this.totalMedications = this.totalMedications - this.medicationTabArray.length
                        this.medicationTabArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.tab = []
                        this.addMoreTab('Tab')
                    } else if (i == 1) {
                        this.totalMedications = this.totalMedications - this.medicationCapArray.length
                        this.medicationCapArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.cap = []
                        this.addMoreTab('Cap')
                    } else if (i == 2) {
                        this.totalMedications = this.totalMedications - this.medicationSypArray.length
                        this.medicationSypArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.syp = []
                        this.addMoreTab('Syp')
                    } else if (i == 3) {
                        this.totalMedications = this.totalMedications - this.medicationSuspArray.length
                        this.medicationSuspArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.susp = []
                        this.addMoreTab('Susp')
                    } else if (i == 4) {
                        this.totalMedications = this.totalMedications - this.medicationEmulsnArray.length
                        this.medicationEmulsnArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.emulsn = []
                        this.addMoreTab('Emulsn')
                    } else if (i == 5) {
                        this.totalMedications = this.totalMedications - this.medicationSolutionArray.length
                        this.medicationSolutionArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.solution = []
                        this.addMoreTab('Solution')
                    } else if (i == 6) {
                        this.totalMedications = this.totalMedications - this.medicationInjArray.length
                        this.medicationInjArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.injection = []
                        this.addMoreTab('Inj')
                    } else if (i == 7) {
                        this.totalMedications = this.totalMedications - this.medicationCreamArray.length
                        this.medicationCreamArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.cream = []
                        this.addMoreTab('Cream')
                    } else if (i == 8) {
                        this.totalMedications = this.totalMedications - this.medicationGelArray.length
                        this.medicationGelArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.gel = []
                        this.addMoreTab('Gel')
                    } else if (i == 9) {
                        this.totalMedications = this.totalMedications - this.medicationDropsArray.length
                        this.medicationDropsArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.drops = []
                        this.addMoreTab('Drops')
                    } else if (i == 11) {
                        this.totalMedications = this.totalMedications - this.medicationPowderArray.length
                        this.medicationPowderArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.powder = []
                        this.addMoreTab('Powder')
                    } else if (i == 10) {
                        this.totalMedications = this.totalMedications - this.medicationAerosolsArray.length
                        this.medicationAerosolsArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.aerosols = []
                        this.addMoreTab('Aerosols')
                    } else if (i == 12) {
                        this.totalMedications = this.totalMedications - this.medicationMouthWashArray.length
                        this.medicationMouthWashArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.mouthwash = []
                        this.addMoreTab('MouthWash')
                    } else if (i == 13) {
                        this.totalMedications = this.totalMedications - this.medicationLotionArray.length
                        this.medicationLotionArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.lotion = []
                        this.addMoreTab('Lotion')
                    } else if (i == 14) {
                        this.totalMedications = this.totalMedications - this.medicationOintmentArray.length
                        this.medicationOintmentArray = []
                        this.totalMedications = this.totalMedications - 1
                        this.medication.ointment = []
                        this.addMoreTab('Ointment')
                    }
                    // for (var j = 0; j < this.doctorPresetArray.length; j++) {
                    //     if(this.doctorPresetArray[j].status == true){
                    //         var occurance : number = 0
                    //         for (var k = 0; k < this.doctorPresetArray[j].preset_array.length; k++) {
                    //             if(data==this.doctorPresetArray[j].preset_array[k].name){
                    //                 this.doctorPresetArray[j].preset_array[k].i_presetLength = this.doctorPresetArray[j].preset_array[k].i_presetLength - 1
                    //                 occurance ++
                    //             }
                    //         }
                    //         this.doctorPresetArray[j].i_presetLength = this.doctorPresetArray[j].i_presetLength - occurance
                    //         if(this.doctorPresetArray[j].i_presetLength == 0){
                    //             this.doctorPresetArray[j].status = false
                    //         }
                    //     }
                    // }
                }
            }
        }
        console.log(this.totalMedications)
    }

    onTextChangeOfMedName(type, observation) {
        let object = {
            doctor_id: this.doctorData.itemId,
            type: type,
            observation:observation
        }
        this.userService.onTextChangeOfMedName(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                if (type == 'Tablet') {
                    this.doctorMedicationTabletDB = []
                    this.doctorMedicationTabletDB = data.data
                } else if (type == 'Capsule') {
                    this.doctorMedicationCapsuleDB = []
                    this.doctorMedicationCapsuleDB = data.data
                } else if (type == 'Syrup') {
                    this.doctorMedicationSyrupDB = []
                    this.doctorMedicationSyrupDB = data.data
                } else if (type == 'Suspension') {
                    this.doctorMedicationSuspensionDB = []
                    this.doctorMedicationSuspensionDB = data.data
                } else if (type == 'Emulsion') {
                    this.doctorMedicationEmulsionDB = []
                    this.doctorMedicationEmulsionDB = data.data
                } else if (type == 'Solution') {
                    this.doctorMedicationSolutionDB = []
                    this.doctorMedicationSolutionDB = data.data
                } else if (type == 'Injection') {
                    this.doctorMedicationInjectionDB = []
                    this.doctorMedicationInjectionDB = data.data
                } else if (type == 'Cream') {
                    this.doctorMedicationCreamDB = []
                    this.doctorMedicationCreamDB = data.data
                } else if (type == 'Oitment') {
                    this.doctorMedicationOitmentDB = []
                    this.doctorMedicationOitmentDB = data.data
                } else if (type == 'Gel') {
                    this.doctorMedicationGelDB = []
                    this.doctorMedicationGelDB = data.data
                } else if (type == 'Lotion') {
                    this.doctorMedicationLotionDB = []
                    this.doctorMedicationLotionDB = data.data
                } else if (type == 'Drops') {
                    this.doctorMedicationDropsDB = []
                    this.doctorMedicationDropsDB = data.data
                } else if (type == 'Aerosols') {
                    this.doctorMedicationAerosolsDB = []
                    this.doctorMedicationAerosolsDB = data.data
                } else if (type == 'Powder') {
                    this.doctorMedicationPowderDB = []
                    this.doctorMedicationPowderDB = data.data
                } else if (type == 'MouthWash') {
                    this.doctorMedicationMouthwashDB = []
                    this.doctorMedicationMouthwashDB = data.data
                }
            }
        }, err => {
            console.log(err);
        })
    }

    SaveMedicineNameInMedDB(type, item) { 
        let object = {
            doctor_id: this.doctorData.itemId,
            type: type,
            observation: item
        }
        this.userService.SaveMedicineNameInMedDB(object).subscribe(data => {
            console.log(data)            
        }, err => {
            console.log(err);
        })
    } 

    getClassDosage(data) {
        if (this.tempDosage == data) {
            return 'active-cel'
        } else {
            return ''
        }
    }

    selectDosage(data) {
        this.tempDosage = data
    }

    saveDosage() {
        if (this.tempDosage != null && this.tempDosage != '' && this.tempDosage != 'Dosage') {
            this.currentFrequency.dosage = this.tempDosage
            $("#durationModal").modal("show");
        }
    }

    getClassInjection(data) {
        if (this.tempInjection == data) {
            return 'active-cel'
        } else {
            return ''
        }
    }

    injectionSelected(data) {
        this.tempInjection = data
    }

    saveInjection(data) {
        if (this.tempInjection != null && this.tempInjection != '' && this.tempInjection != 'Mode') {
            this.currentFrequency.mode = this.tempInjection
            $("#durationModal").modal("show");
        }
    }

    selectDuration(data) {
        this.tempDuration = data
    }

    getDurationClass(data) {
        if (this.tempDuration == data) {
            return 'active-cel'
        } else {
            return ''
        }
    }

    saveDuration() {
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration
        }
    }

    getMedFrequencyClass(data) {
        if (data == 'Frequency') {
            return ''
        } else {
            return 'active'
        }
    }

    getMedDurationClass(data) {
        if (data == 'Duration') {
            return ''
        } else {
            return 'active'
        }
    }

    getMedDosageClass(data) {
        if (data == 'Dosage') {
            return ''
        } else {
            return 'active'
        }
    }

    getMedModeClass(data) {
        if (data == 'Mode') {
            return ''
        } else {
            return 'active'
        }
    }

    getMedQuantityClass(data) {
        if (data == 'Qty, (No)') {
            return ''
        } else {
            return 'active'
        }
    }

     selectFrequency(data) {
        this.tempFrequency = data
    }

    getFrequencyClass(data) {
        if (data == this.tempFrequency) {
            return 'active-cel'
        } else {
            return ''
        }
    }

    selectFrequencySpecial(data) {
        if(data==this.tempFrequencySpecial||data==this.currentFrequency.specialInstruction){
            this.tempFrequencySpecial = null
            this.currentFrequency.specialInstruction = null
        }else{
            this.tempFrequencySpecial = data
        }
    }

    getFrequencyClassSpecial(data) {
        if (data == this.tempFrequencySpecial) {
            return 'active-cel'
        } else {
            return ''
        }
    }

    saveFrequency() {
        if (this.tempFrequency != null && this.tempFrequency != '' && this.tempFrequency != 'Frequency') {
            this.currentFrequency.frequency = this.tempFrequency
            if (this.currentFrequency.dosage) {
                $("#dosageModal").modal("show");
            } else if (this.currentFrequency.quantity) {
                $("#quantityModal").modal("show");
            } else if (this.currentFrequency.mode) {
                $("#injectionModal").modal("show");
            } else {
                $("#durationModal").modal("show");
            }

        }
        this.currentFrequency.specialInstruction = this.tempFrequencySpecial
    }

    addMoreTab(data) {
        if (this.totalMedications < 9) {
            if (data == 'Tab' && this.medicationTabArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationTabArray.push('1')
                this.medication.tab.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
            } else if (data == 'Cap' && this.medicationCapArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationCapArray.push('1')
                this.medication.cap.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.cap)
            } else if (data == 'Syp' && this.medicationSypArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationSypArray.push('1')
                this.medication.syp.push({
                    med_name: null,
                    frequency: 'Frequency',
                    dosage: 'Dosage',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.syp)
            } else if (data == 'Susp' && this.medicationSuspArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationSuspArray.push('1')
                this.medication.susp.push({
                    med_name: null,
                    frequency: 'Frequency',
                    dosage: 'Dosage',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.susp)
            } else if (data == 'Emulsn' && this.medicationEmulsnArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationEmulsnArray.push('1')
                this.medication.emulsn.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    dosage: 'Dosage',
                    // status: false
                })
                console.log(this.medication.emulsn)
            } else if (data == 'Inj' && this.medicationInjArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationInjArray.push('1')
                this.medication.injection.push({
                    med_name: null,
                    frequency: 'Frequency',
                    mode: 'Mode',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.injection)
            } else if (data == 'Cream' && this.medicationCreamArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationCreamArray.push('1')
                this.medication.cream.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.cream)
            } else if (data == 'Gel' && this.medicationGelArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationGelArray.push('1')
                this.medication.gel.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // quantity: 'Qty, (No)'
                })
                console.log(this.medication.gel)
            } else if (data == 'Drops' && this.medicationDropsArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationDropsArray.push('1')
                this.medication.drops.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    quantity: 'Qty, (No)'
                })
                console.log(this.medication.drops)
            } else if (data == 'Lotion' && this.medicationLotionArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationLotionArray.push('1')
                this.medication.lotion.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.powder)
            } else if (data == 'Ointment' && this.medicationOintmentArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationOintmentArray.push('1')
                this.medication.ointment.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.powder)
            } else if (data == 'Powder' && this.medicationPowderArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationPowderArray.push('1')
                this.medication.powder.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.powder)
            } else if (data == 'Aerosols' && this.medicationAerosolsArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationAerosolsArray.push('1')
                this.medication.aerosols.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.aerosols)
            } else if (data == 'MouthWash' && this.medicationMouthWashArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationMouthWashArray.push('1')
                this.medication.mouthwash.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.mouthwash)
            } else if (data == 'Solution' && this.medicationSolutionArray.length < 10) {
                this.totalMedications = this.totalMedications + 1
                this.medicationSolutionArray.push('1')
                this.medication.solution.push({
                    med_name: null,
                    frequency: 'Frequency',
                    dosage: 'Dosage',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.solution)
            }
        } else {
            this.toastr.warning("Maximum items can be 10", "Warning")
        }
        console.log(this.totalMedications)
    }

    removeMoreTab(data, i) {
        this.totalMedications = this.totalMedications - 1
        if (data == 'Tab') {
            // if (this.medication.tab[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.tab[i].i_presetValue);
            //     if (index == this.medication.tab[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.tab[i].i_presetLength = this.medication.tab[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationTabArray.splice(0, 1)
            this.medication.tab.splice(i, 1)
            if (this.medicationTabArray.length == 0) {
                this.medicationTabArray = []
                this.medication.tab = []
                this.medicationStatus[0].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Cap') {
            // if (this.medication.cap[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.cap[i].i_presetValue);
            //     if (index == this.medication.cap[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.cap[i].i_presetLength = this.medication.cap[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationCapArray.splice(0, 1)
            this.medication.cap.splice(i, 1)
            if (this.medicationCapArray.length == 0) {
                this.medicationCapArray = []
                this.medication.cap = []
                this.medicationStatus[1].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Syp') {
            // if (this.medication.syp[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.syp[i].i_presetValue);
            //     if (index == this.medication.syp[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.syp[i].i_presetLength = this.medication.syp[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationSypArray.splice(0, 1)
            this.medication.syp.splice(i, 1)
            if (this.medicationSypArray.length == 0) {
                this.medicationSypArray = []
                this.medication.syp = []
                this.medicationStatus[2].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Susp') {
            // if (this.medication.susp[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.susp[i].i_presetValue);
            //     if (index == this.medication.susp[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.susp[i].i_presetLength = this.medication.susp[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationSuspArray.splice(0, 1)
            this.medication.susp.splice(i, 1)
            if (this.medicationSuspArray.length == 0) {
                this.medicationSuspArray = []
                this.medication.susp = []
                this.medicationStatus[3].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Emulsn') {
            // if (this.medication.emulsn[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.emulsn[i].i_presetValue);
            //     if (index == this.medication.emulsn[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.emulsn[i].i_presetLength = this.medication.emulsn[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationEmulsnArray.splice(0, 1)
            this.medication.emulsn.splice(i, 1)
            if (this.medicationEmulsnArray.length == 0) {
                this.medicationEmulsnArray = []
                this.medication.emulsn = []
                this.medicationStatus[4].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Inj') {
            // if (this.medication.injection[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.injection[i].i_presetValue);
            //     if (index == this.medication.injection[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.injection[i].i_presetLength = this.medication.injection[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationInjArray.splice(0, 1)
            this.medication.injection.splice(i, 1)
            if (this.medicationInjArray.length == 0) {
                this.medicationInjArray = []
                this.medication.injection = []
                this.medicationStatus[6].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Cream') {
            // if (this.medication.cream[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.cream[i].i_presetValue);
            //     if (index == this.medication.cream[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.cream[i].i_presetLength = this.medication.cream[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationCreamArray.splice(0, 1)
            this.medication.cream.splice(i, 1)
            if (this.medicationCreamArray.length == 0) {
                this.medicationCreamArray = []
                this.medication.cream = []
                this.medicationStatus[7].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Gel') {
            // if (this.medication.gel[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.gel[i].i_presetValue);
            //     if (index == this.medication.gel[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.gel[i].i_presetLength = this.medication.gel[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationGelArray.splice(0, 1)
            this.medication.gel.splice(i, 1)
            if (this.medicationGelArray.length == 0) {
                this.medicationGelArray = []
                this.medication.gel = []
                this.medicationStatus[8].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Drops') {
            // if (this.medication.drops[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.drops[i].i_presetValue);
            //     if (index == this.medication.drops[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.drops[i].i_presetLength = this.medication.drops[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationDropsArray.splice(0, 1)
            this.medication.drops.splice(i, 1)
            if (this.medicationDropsArray.length == 0) {
                this.medicationDropsArray = []
                this.medication.drops = []
                this.medicationStatus[9].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Powder') {
            // if (this.medication.powder[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.powder[i].i_presetValue);
            //     if (index == this.medication.powder[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.powder[i].i_presetLength = this.medication.powder[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationPowderArray.splice(0, 1)
            this.medication.powder.splice(i, 1)
            if (this.medicationPowderArray.length == 0) {
                this.medicationPowderArray = []
                this.medication.powder = []
                this.medicationStatus[11].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Aerosols') {
            // if (this.medication.aerosols[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.aerosols[i].i_presetValue);
            //     if (index == this.medication.aerosols[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.aerosols[i].i_presetLength = this.medication.aerosols[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationAerosolsArray.splice(0, 1)
            this.medication.aerosols.splice(i, 1)
            if (this.medicationAerosolsArray.length == 0) {
                this.medicationAerosolsArray = []
                this.medication.aerosols = []
                this.medicationStatus[10].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'MouthWash') {
            // if (this.medication.mouthwash[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.mouthwash[i].i_presetValue);
            //     if (index == this.medication.mouthwash[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.mouthwash[i].i_presetLength = this.medication.mouthwash[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationMouthWashArray.splice(0, 1)
            this.medication.mouthwash.splice(i, 1)
            if (this.medicationMouthWashArray.length == 0) {
                this.medicationMouthWashArray = []
                this.medication.mouthwash = []
                this.medicationStatus[12].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Solution') {
            // if (this.medication.solution[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.solution[i].i_presetValue);
            //     if (index == this.medication.solution[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.solution[i].i_presetLength = this.medication.solution[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationSolutionArray.splice(0, 1)
            this.medication.solution.splice(i, 1)
            if (this.medicationSolutionArray.length == 0) {
                this.medicationSolutionArray = []
                this.medication.solution = []
                this.medicationStatus[5].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Lotion') {
            // if (this.medication.lotion[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.lotion[i].i_presetValue);
            //     if (index == this.medication.lotion[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.lotion[i].i_presetLength = this.medication.lotion[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationLotionArray.splice(0, 1)
            this.medication.lotion.splice(i, 1)
            if (this.medicationLotionArray.length == 0) {
                this.medicationLotionArray = []
                this.medication.lotion = []
                this.medicationStatus[13].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        } else if (data == 'Ointment') {
            // if (this.medication.ointment[i].i_presetLength) {
            //     var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.ointment[i].i_presetValue);
            //     if (index == this.medication.ointment[i].i_presetValue) {
            //         this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
            //         this.medication.ointment[i].i_presetLength = this.medication.ointment[i].i_presetLength - 1
            //         if (this.doctorPresetArray[index].i_presetLength == 0) {
            //             this.doctorPresetArray[index].status = false
            //         }
            //     }
            // }
            this.medicationOintmentArray.splice(0, 1)
            this.medication.ointment.splice(i, 1)
            if (this.medicationOintmentArray.length == 0) {
                this.medicationOintmentArray = []
                this.medication.ointment = []
                this.medicationStatus[14].status = false
                this.totalMedications = this.totalMedications - 1
                this.addMoreTab(data)
            }
        }
        console.log(this.totalMedications)
    }

    openFrequencyModalFromMed(type,data) {
        // this.currentFrequency = data
        // this.tempFrequency = null
        // this.tempFrequencySpecial = null
        // this.tempDuration = null
        // this.tempDosage = null
        // this.tempInjection = null
        if (data.mode) {
            $("#combinedModal").modal("show");
        } else if (data.dosage) {
            $("#combinedModal4").modal("show");
        } else if (data.quantity) {
            $("#combinedModal3").modal("show");
        } else {
            $("#combinedModal2").modal("show");
        }
        this.openFrequencyModal(data)
        var allMedInfo = []
        data.med_info = []
        for (var i = 0; i < this.medInfoDB.length; i++) {
            allMedInfo.push(this.medInfoDB[i].med_info1)
            if(this.medInfoDB[i].med_info2){
                allMedInfo.push(this.medInfoDB[i].med_info2)
            }
            if(this.medInfoDB[i].type==type && this.medInfoDB[i].med_name==data.med_name[0].value){
                data.med_info.push({display:this.medInfoDB[i].med_info1,value:this.medInfoDB[i].med_info1})
                if(this.medInfoDB[i].med_info2){
                    data.med_info.push({display:this.medInfoDB[i].med_info2,value:this.medInfoDB[i].med_info2})
                } 
                if (type == 'TabletInfo') {
                    this.doctorMedicationTabletInfoDB = []
                    this.doctorMedicationTabletInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationTabletInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'CapsuleInfo') {
                    this.doctorMedicationCapsuleInfoDB = []
                    this.doctorMedicationCapsuleInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationCapsuleInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'SyrupInfo') {
                    this.doctorMedicationSyrupInfoDB = []
                    this.doctorMedicationSyrupInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationSyrupInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'SuspensionInfo') {
                    this.doctorMedicationSuspensionInfoDB = []
                    this.doctorMedicationSuspensionInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationSuspensionInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'EmulsionInfo') {
                    this.doctorMedicationEmulsionInfoDB = []
                    this.doctorMedicationEmulsionInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationEmulsionInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'SolutionInfo') {
                    this.doctorMedicationSolutionInfoDB = []
                    this.doctorMedicationSolutionInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationSolutionInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'InjectionInfo') {
                    this.doctorMedicationInjectionInfoDB = []
                    this.doctorMedicationInjectionInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationInjectionInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'CreamInfo') {
                    this.doctorMedicationCreamInfoDB = []
                    this.doctorMedicationCreamInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationCreamInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'OitmentInfo') {
                    this.doctorMedicationOitmentInfoDB = []
                    this.doctorMedicationOitmentInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationOitmentInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'GelInfo') {
                    this.doctorMedicationGelInfoDB = []
                    this.doctorMedicationGelInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationGelInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'LotionInfo') {
                    this.doctorMedicationLotionInfoDB = []
                    this.doctorMedicationLotionInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationLotionInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'DropsInfo') {
                    this.doctorMedicationDropsInfoDB = []
                    this.doctorMedicationDropsInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationDropsInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'AerosolsInfo') {
                    this.doctorMedicationAerosolsInfoDB = []
                    this.doctorMedicationAerosolsInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationAerosolsInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'PowderInfo') {
                    this.doctorMedicationPowderInfoDB = []
                    this.doctorMedicationPowderInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationPowderInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                } else if (type == 'MouthWashInfo') {
                    this.doctorMedicationMouthwashInfoDB = []
                    this.doctorMedicationMouthwashInfoDB.push(this.medInfoDB[i].med_info1)
                    if(this.medInfoDB[i].med_info2){
                        this.doctorMedicationMouthwashInfoDB.push(this.medInfoDB[i].med_info2)
                    }
                }
            }
        }
        if (type == 'TabletInfo' && data.med_info.length==0) {
            this.doctorMedicationTabletInfoDB = allMedInfo
        } else if (type == 'CapsuleInfo' && data.med_info.length==0) {
            this.doctorMedicationCapsuleInfoDB = allMedInfo
        } else if (type == 'SyrupInfo' && data.med_info.length==0) {
            this.doctorMedicationSyrupInfoDB = allMedInfo
        } else if (type == 'SuspensionInfo' && data.med_info.length==0) {
            this.doctorMedicationSuspensionInfoDB = allMedInfo
        } else if (type == 'EmulsionInfo' && data.med_info.length==0) {
            this.doctorMedicationEmulsionInfoDB = allMedInfo
        } else if (type == 'SolutionInfo' && data.med_info.length==0) {
            this.doctorMedicationSolutionInfoDB = allMedInfo
        } else if (type == 'InjectionInfo' && data.med_info.length==0) {
            this.doctorMedicationInjectionInfoDB = allMedInfo
        } else if (type == 'CreamInfo' && data.med_info.length==0) {
            this.doctorMedicationCreamInfoDB = allMedInfo
        } else if (type == 'OitmentInfo' && data.med_info.length==0) {
            this.doctorMedicationOitmentInfoDB = allMedInfo
        } else if (type == 'GelInfo' && data.med_info.length==0) {
            this.doctorMedicationGelInfoDB = allMedInfo
        } else if (type == 'LotionInfo' && data.med_info.length==0) {
            this.doctorMedicationLotionInfoDB = allMedInfo
        } else if (type == 'DropsInfo' && data.med_info.length==0) {
            this.doctorMedicationDropsInfoDB = allMedInfo
        } else if (type == 'AerosolsInfo' && data.med_info.length==0) {
            this.doctorMedicationAerosolsInfoDB = allMedInfo
        } else if (type == 'PowderInfo' && data.med_info.length==0) {
            this.doctorMedicationPowderInfoDB = allMedInfo
        } else if (type == 'MouthWashInfo' && data.med_info.length==0) {
            this.doctorMedicationMouthwashInfoDB = allMedInfo
        }
    }

    openFrequencyModal(data) {
        this.currentFrequency = data
        if (this.currentFrequency.frequency == 'Frequency') {
            this.tempFrequency = null
        } else {
            this.tempFrequency = this.currentFrequency.frequency
        }
        if (this.currentFrequency.duration == 'Duration') {
            this.tempDuration = null
        } else {
            this.tempDuration = this.currentFrequency.duration
        }
        if (this.currentFrequency.duration == 'Duration') {
            this.tempDuration = null
        } else {
            this.tempDuration = this.currentFrequency.duration
        }
        if(this.currentFrequency.specialInstruction == null){
            this.tempFrequencySpecial = null
        }else {
            this.tempFrequencySpecial = this.currentFrequency.specialInstruction
        }
        if (this.currentFrequency.mode == 'Mode') {
            this.tempInjection = null
        } else {
            this.tempInjection = this.currentFrequency.mode
        }
        if (this.currentFrequency.dosage == 'Dosage') {
            this.tempDosage = null
        } else {
            this.tempDosage = this.currentFrequency.dosage
        }
        if (this.currentFrequency.quantity == 'Qty, (No)') {
            this.tempQuantity = null
        } else {
            this.tempQuantity = this.currentFrequency.quantity
        }
    } 

    saveFreqDuration() {
        if (this.tempFrequency != null && this.tempFrequency != '' && this.tempFrequency != 'Frequency') {
            this.currentFrequency.frequency = this.tempFrequency
        }
        this.currentFrequency.specialInstruction = this.tempFrequencySpecial
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration
        }
    }

    saveFreqDurInjection() {
        if (this.tempFrequency != null && this.tempFrequency != '' && this.tempFrequency != 'Frequency') {
            this.currentFrequency.frequency = this.tempFrequency
        }
        this.currentFrequency.specialInstruction = this.tempFrequencySpecial
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration
        }
        if (this.tempInjection != null && this.tempInjection != '' && this.tempInjection != 'Mode') {
            this.currentFrequency.mode = this.tempInjection
        }
    }

    saveFreqDurDosage() {
        if (this.tempFrequency != null && this.tempFrequency != '' && this.tempFrequency != 'Frequency') {
            this.currentFrequency.frequency = this.tempFrequency
        }
        this.currentFrequency.specialInstruction = this.tempFrequencySpecial
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration
        }
        if (this.tempDosage != null && this.tempDosage != '' && this.tempDosage != 'Dosage') {
            this.currentFrequency.dosage = this.tempDosage
        }
    }

    saveFreqDurDrops() {
        if (this.tempFrequency != null && this.tempFrequency != '' && this.tempFrequency != 'Frequency') {
            this.currentFrequency.frequency = this.tempFrequency
        }
        this.currentFrequency.specialInstruction = this.tempFrequencySpecial
        if (this.tempDuration != null && this.tempDuration != '' && this.tempDuration != 'Duration') {
            this.currentFrequency.duration = this.tempDuration
        }
        if (this.tempQuantity != null && this.tempQuantity != '' && this.tempQuantity != 'Qty, (No)') {
            this.currentFrequency.quantity = this.tempQuantity
        }
    }
    //MEDICATION

    ngOnDestroy(){
        localStorage.removeItem('patientDataForDischarge');
        this.socket.emit('room leave',{
            room_id: this.doctorData.smart_ipd_id.toString()
        })
    }

    getClassTab(data){
        if(data == this.currentTab){
            return 'active'
        }else{
            return ''
        }
    }

    changeCurrentTab(data){
        console.log(data)
        this.currentTab = data
    }

    dischargePatientApprovalByDr(){  
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
            this.toastr.warning('Billing amount can not be negative','Warning')
        } else{
            //medication
            this.tempMedicationArray = []
            if (this.totalMedications >= 0) {
                var boolean = false
                if (this.medicationStatus[0].status == true) {
                    for (var i = 0; i < this.medication.tab.length; i++) {
                        if (!this.medication.tab[i].med_name || this.medication.tab[i].med_name.length < 1 ||
                            this.medication.tab[i].frequency == 'Frequency' || this.medication.tab[i].duration == 'Duration'
                        ) {
                            this.toastr.warning("Invalid values of Tablet", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.tab[i].name = "Tablet"
                            this.medication.tab[i].short_name = "Tab"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.tab[i]))
                            this.saveMedicationSuggestion(this.medication.tab[i].name, this.medication.tab[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[1].status == true) {
                    for (var i = 0; i < this.medication.cap.length; i++) {
                        if (!this.medication.cap[i].med_name || this.medication.cap[i].med_name.length < 1 ||
                            this.medication.cap[i].frequency == 'Frequency' || this.medication.cap[i].duration == 'Duration'
                        ) {
                            this.toastr.warning("Invalid values of Capsule", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.cap[i].name = "Capsule"
                            this.medication.cap[i].short_name = "Cap"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.cap[i]))
                            this.saveMedicationSuggestion(this.medication.cap[i].name, this.medication.cap[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[2].status == true) {
                    for (var i = 0; i < this.medication.syp.length; i++) {
                        if (!this.medication.syp[i].med_name || this.medication.syp[i].med_name.length < 1 ||
                            this.medication.syp[i].frequency == 'Frequency' || this.medication.syp[i].duration == 'Duration' ||
                            this.medication.syp[i].dosage == 'Dosage'
                        ) {
                            this.toastr.warning("Invalid values of Syrup", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.syp[i].name = "Syrup"
                            this.medication.syp[i].short_name = "Syr"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.syp[i]))
                            this.saveMedicationSuggestion(this.medication.syp[i].name, this.medication.syp[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[3].status == true) {
                    for (var i = 0; i < this.medication.susp.length; i++) {
                        if (!this.medication.susp[i].med_name || this.medication.susp[i].med_name.length < 1 ||
                            this.medication.susp[i].frequency == 'Frequency' || this.medication.susp[i].duration == 'Duration' ||
                            this.medication.susp[i].dosage == 'Dosage'
                        ) {
                            this.toastr.warning("Invalid values of Suspension", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.susp[i].name = "Suspension"
                            this.medication.susp[i].short_name = "Sus"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.susp[i]))
                            this.saveMedicationSuggestion(this.medication.susp[i].name, this.medication.susp[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[4].status == true) {
                    for (var i = 0; i < this.medication.emulsn.length; i++) {
                        if (!this.medication.emulsn[i].med_name || this.medication.emulsn[i].med_name.length < 1 ||
                            this.medication.emulsn[i].frequency == 'Frequency' || this.medication.emulsn[i].duration == 'Duration' ||
                            this.medication.emulsn[i].dosage == 'Dosage'
                        ) {
                            this.toastr.warning("Invalid values of Emulsion", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.emulsn[i].name = "Emulsion"
                            this.medication.emulsn[i].short_name = "Emu"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.emulsn[i]))
                            this.saveMedicationSuggestion(this.medication.emulsn[i].name, this.medication.emulsn[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[5].status == true) {
                    for (var i = 0; i < this.medication.solution.length; i++) {
                        if (!this.medication.solution[i].med_name || this.medication.solution[i].med_name.length < 1 ||
                            this.medication.solution[i].frequency == 'Frequency' || this.medication.solution[i].duration == 'Duration' ||
                            this.medication.solution[i].dosage == 'Dosage'
                        ) {
                            this.toastr.warning("Invalid values of Solution", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.solution[i].name = "Solution"
                            this.medication.solution[i].short_name = "Sol"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.solution[i]))
                            this.saveMedicationSuggestion(this.medication.solution[i].name, this.medication.solution[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[6].status == true) {
                    for (var i = 0; i < this.medication.injection.length; i++) {
                        if (!this.medication.injection[i].med_name || this.medication.injection[i].med_name.length < 1 ||
                            this.medication.injection[i].frequency == 'Frequency' || this.medication.injection[i].duration == 'Duration' ||
                            this.medication.injection[i].mode == 'Mode'
                        ) {
                            this.toastr.warning("Invalid values of Injection", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.injection[i].name = "Injection"
                            this.medication.injection[i].short_name = "Inj"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.injection[i]))
                            this.saveMedicationSuggestion(this.medication.injection[i].name, this.medication.injection[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[12].status == true) {
                    for (var i = 0; i < this.medication.mouthwash.length; i++) {
                        if (!this.medication.mouthwash[i].med_name || this.medication.mouthwash[i].med_name.length < 1 ||
                            this.medication.mouthwash[i].frequency == 'Frequency' || this.medication.mouthwash[i].duration == 'Duration'
                        ) {
                            this.toastr.warning("Invalid values of MouthWash", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.mouthwash[i].name = "MouthWash"
                            this.medication.mouthwash[i].short_name = "Mou"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.mouthwash[i]))
                            this.saveMedicationSuggestion(this.medication.mouthwash[i].name, this.medication.mouthwash[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[11].status == true) {
                    for (var i = 0; i < this.medication.powder.length; i++) {
                        if (!this.medication.powder[i].med_name || this.medication.powder[i].med_name.length < 1 ||
                            this.medication.powder[i].frequency == 'Frequency' || this.medication.powder[i].duration == 'Duration'
                        ) {
                            this.toastr.warning("Invalid values of Powder", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.powder[i].name = "Powder"
                            this.medication.powder[i].short_name = "Pow"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.powder[i]))
                            this.saveMedicationSuggestion(this.medication.powder[i].name, this.medication.powder[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[7].status == true) {
                    for (var i = 0; i < this.medication.cream.length; i++) {
                        if (!this.medication.cream[i].med_name || this.medication.cream[i].med_name.length < 1 ||
                            this.medication.cream[i].frequency == 'Frequency' || this.medication.cream[i].duration == 'Duration'
                        ) {
                            this.toastr.warning("Invalid values of Cream", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.cream[i].name = "Cream"
                            this.medication.cream[i].short_name = "Cre"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.cream[i]))
                            this.saveMedicationSuggestion(this.medication.cream[i].name, this.medication.cream[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[8].status == true) {
                    for (var i = 0; i < this.medication.gel.length; i++) {
                        if (!this.medication.gel[i].med_name || this.medication.gel[i].med_name.length < 1 ||
                            this.medication.gel[i].frequency == 'Frequency' || this.medication.gel[i].duration == 'Duration'
                            // || this.medication.gel[i].quantity == 'Qty, (No)'
                        ) {
                            this.toastr.warning("Invalid values of Gel", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.gel[i].name = "Gel"
                            this.medication.gel[i].short_name = "Gel"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.gel[i]))
                            this.saveMedicationSuggestion(this.medication.gel[i].name, this.medication.gel[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[9].status == true) {
                    for (var i = 0; i < this.medication.drops.length; i++) {
                        if (!this.medication.drops[i].med_name || this.medication.drops[i].med_name.length < 1 ||
                            this.medication.drops[i].frequency == 'Frequency' || this.medication.drops[i].duration == 'Duration' ||
                            this.medication.drops[i].quantity == 'Qty, (No)'
                        ) {
                            this.toastr.warning("Invalid values of Drops", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.drops[i].name = "Drops"
                            this.medication.drops[i].short_name = "Dro"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.drops[i]))
                            this.saveMedicationSuggestion(this.medication.drops[i].name, this.medication.drops[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[10].status == true) {
                    for (var i = 0; i < this.medication.aerosols.length; i++) {
                        if (!this.medication.aerosols[i].med_name || this.medication.aerosols[i].med_name.length < 1 ||
                            this.medication.aerosols[i].frequency == 'Frequency' || this.medication.aerosols[i].duration == 'Duration'
                        ) {
                            this.toastr.warning("Invalid values of Aerosols", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.aerosols[i].name = "Aerosols"
                            this.medication.aerosols[i].short_name = "Aer"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.aerosols[i]))
                            this.saveMedicationSuggestion(this.medication.aerosols[i].name, this.medication.aerosols[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[13].status == true) {
                    for (var i = 0; i < this.medication.lotion.length; i++) {
                        if (!this.medication.lotion[i].med_name || this.medication.lotion[i].med_name.length < 1 ||
                            this.medication.lotion[i].frequency == 'Frequency' || this.medication.lotion[i].duration == 'Duration'
                        ) {
                            this.toastr.warning("Invalid values of Lotion", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.lotion[i].name = "Lotion"
                            this.medication.lotion[i].short_name = "Lot"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.lotion[i]))
                            this.saveMedicationSuggestion(this.medication.lotion[i].name, this.medication.lotion[i].med_name[0].value)
                        }
                    }
                }
                if (this.medicationStatus[14].status == true) {
                    for (var i = 0; i < this.medication.ointment.length; i++) {
                        if (!this.medication.ointment[i].med_name || this.medication.ointment[i].med_name.length < 1 ||
                            this.medication.ointment[i].frequency == 'Frequency' || this.medication.ointment[i].duration == 'Duration'
                        ) {
                            this.toastr.warning("Invalid values of Ointment", "Warning")
                            boolean = true
                            return;
                        } else {
                            this.medication.ointment[i].name = "Ointment"
                            this.medication.ointment[i].short_name = "Oin"
                            this.tempMedicationArray.push(Object.assign({}, this.medication.ointment[i]))
                            this.saveMedicationSuggestion('Oitment', this.medication.ointment[i].med_name[0].value)
                        }
                    }
                }
            }
            var ob = {
                id: this.patientDataForDischarge.id,
                doctor_note : this.doctorNote,
                duration_days: this.differenceInDays,
                duration_hours: this.differenceInHours,
                discharge_date: this.newDischargeDate,
                patient_activities: this.patientActivities,
                total_bill: this.totalActivitiesAmount + this.occupancyCharges,
                medication: this.tempMedicationArray,
                woundCare: this.woundCare,
                diet: this.diet,
                lifestyle: this.lifestyle,
                others: this.others,
                occupancy_charges: this.occupancyCharges
            }
            console.log(ob)
            this.userService.DischargePatientApprovalByDr(ob).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    this.toastr.success(data.message,"Success")
                    this.socket.emit('registrationBooked',{
                        room_id: this.doctorData.smart_ipd_id.toString()
                    })
                    this.router.navigate(['header-two-layout/discharge-patient'])
                } else {
                    this.toastr.error(data.message,"Error")
                }
            }, err => {
                console.log(err);
            })
        }
    }

    saveMedicationSuggestion(type, item) {
        this.SaveMedicineNameInMedDB(type, item) 
        let object = {
            doctor_id: this.doctorData.itemId,
            type: type,
            observation: item
        }
        this.userService.SaveMedicationSuggestion(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.GetMedicationSuggestions(type)
            } else {
            }
        }, err => {
            console.log(err);
        })
    }

    GetMedicationSuggestions(type) {
        let object = {
            doctor_id: this.doctorData.itemId,
            type: type
        }
        this.userService.GetMedicationSuggestions(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                if (type == 'Tablet') {
                    this.doctorMedicationTabletDB = []
                    this.doctorMedicationTabletDB = data.data
                } else if (type == 'Capsule') {
                    this.doctorMedicationCapsuleDB = []
                    this.doctorMedicationCapsuleDB = data.data
                } else if (type == 'Syrup') {
                    this.doctorMedicationSyrupDB = []
                    this.doctorMedicationSyrupDB = data.data
                } else if (type == 'Suspension') {
                    this.doctorMedicationSuspensionDB = []
                    this.doctorMedicationSuspensionDB = data.data
                } else if (type == 'Emulsion') {
                    this.doctorMedicationEmulsionDB = []
                    this.doctorMedicationEmulsionDB = data.data
                } else if (type == 'Solution') {
                    this.doctorMedicationSolutionDB = []
                    this.doctorMedicationSolutionDB = data.data
                } else if (type == 'Injection') {
                    this.doctorMedicationInjectionDB = []
                    this.doctorMedicationInjectionDB = data.data
                } else if (type == 'Cream') {
                    this.doctorMedicationCreamDB = []
                    this.doctorMedicationCreamDB = data.data
                } else if (type == 'Oitment') {
                    this.doctorMedicationOitmentDB = []
                    this.doctorMedicationOitmentDB = data.data
                } else if (type == 'Gel') {
                    this.doctorMedicationGelDB = []
                    this.doctorMedicationGelDB = data.data
                } else if (type == 'Lotion') {
                    this.doctorMedicationLotionDB = []
                    this.doctorMedicationLotionDB = data.data
                } else if (type == 'Drops') {
                    this.doctorMedicationDropsDB = []
                    this.doctorMedicationDropsDB = data.data
                } else if (type == 'Aerosols') {
                    this.doctorMedicationAerosolsDB = []
                    this.doctorMedicationAerosolsDB = data.data
                } else if (type == 'Powder') {
                    this.doctorMedicationPowderDB = []
                    this.doctorMedicationPowderDB = data.data
                } else if (type == 'MouthWash') {
                    this.doctorMedicationMouthwashDB = []
                    this.doctorMedicationMouthwashDB = data.data
                }
            }
        }, err => {
            console.log(err);
        })
    }

    GetDoctorSuggestions(){
        let object = {
            doctor_id: this.doctorData.itemId
        }
        this.userService.GetDoctorSuggestions(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.medInfoDB = data.medInfoDB
                this.doctorMedicationTabletDB = data.doctorMedicationTabletDB
                this.doctorMedicationCapsuleDB = data.doctorMedicationCapsuleDB
                this.doctorMedicationSyrupDB = data.doctorMedicationSyrupDB
                this.doctorMedicationSuspensionDB = data.doctorMedicationSuspensionDB
                this.doctorMedicationEmulsionDB = data.doctorMedicationEmulsionDB
                this.doctorMedicationSolutionDB = data.doctorMedicationSolutionDB
                this.doctorMedicationInjectionDB = data.doctorMedicationInjectionDB
                this.doctorMedicationCreamDB = data.doctorMedicationCreamDB
                this.doctorMedicationOitmentDB = data.doctorMedicationOitmentDB
                this.doctorMedicationGelDB = data.doctorMedicationGelDB
                this.doctorMedicationLotionDB = data.doctorMedicationLotionDB
                this.doctorMedicationDropsDB = data.doctorMedicationDropsDB
                this.doctorMedicationAerosolsDB = data.doctorMedicationAerosolsDB
                this.doctorMedicationPowderDB = data.doctorMedicationPowderDB
                this.doctorMedicationMouthwashDB = data.doctorMedicationMouthwashDB
            }
        }, err => {
            console.log(err);
        })
    }

    FindDoctorsOfSameClinic(){
        this.userService.FindDoctorsOfSameClinic(this.doctorData.doctm_clinic_id).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                var admin = data.data.filter(d => d.type_of_doctor == "admin_doctor")
                this.adminDoctor = admin[0];
                if(this.patientDataForDischarge.type=='general'){
                    this.bedCharges = this.adminDoctor.clinic_services.general_bed_charges
                }else if(this.patientDataForDischarge.type=='semi_private'){
                    this.bedCharges = this.adminDoctor.clinic_services.semi_private_bed_charges
                }else if(this.patientDataForDischarge.type=='private'){
                    this.bedCharges = this.adminDoctor.clinic_services.private_bed_charges
                }
                this.calculateCharges()
            }
        }, err => {
            console.log(err);
        })
    }

    onTimeChange(){
        if(this.discharegeTime == null){
            return
        }
        this.newDischargeDate = new Date(this.dischargeDate)
        this.newDischargeDate.setHours(this.discharegeTime.hour, this.discharegeTime.minute)
        // new Date(this.dischargeDate).setHours(this.discharegeTime.hour, this.discharegeTime.minute)

        var diff =(new Date(this.newDischargeDate).getTime() - new Date(this.patientDataForDischarge.createdAt).getTime()) / 1000;
        diff /= (60 * 60);
        var hoursDifference : number = Math.abs(Math.round(diff))
        this.differenceInDays = Math.trunc(hoursDifference / 24)
        this.differenceInHours = Math.trunc(hoursDifference % 24)
        this.occupancyCharges = Math.ceil((this.differenceInDays * this.bedCharges)+this.occupancyHoursAmount) 
        this.totalActivitiesAmount = this.totalActivitiesAmount
        this.totalActivityOccupancy = this.totalActivitiesAmount + this.occupancyCharges
        this.occupancyHoursAmount = (this.bedCharges/24)*this.differenceInHours
        this.totalActivitiesOutstandingAmount = this.totalActivitiesAmount + this.occupancyCharges - this.patientDataForDischarge.advanceReceived
        if(this.totalActivitiesOutstandingAmount < 0 ){
            this.refundAmount = this.totalActivitiesOutstandingAmount + (-(2*this.totalActivitiesOutstandingAmount))
            this.totalActivitiesOutstandingAmount = 0
        }else{
            this.refundAmount = 0
        }
    }

}
