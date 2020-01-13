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

declare var totalOpenedModal
declare var $

@Component({
  selector: 'app-discharge-patient',
  templateUrl: './discharge-patient.component.html',
  styleUrls: ['./discharge-patient.component.css'],
  providers: [UserService]
})
export class DischargePatientComponent implements OnInit {
    patients
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
    doctorData
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
        this.discharegeTime = { }
        this.discharegeTime.hour =  hoursIST
        this.discharegeTime.minute = minutesIST
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
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        this.pateintPicPath = environment.patientPic
        this.patients = []
        this.webCam = false
        this.imgSrc = './assets/imgs/placeholder.png'
        this.appointmentsForCalender = [{
            start: new Date().toJSON().toString().substr(0, 10),
            title: '1',
            time: ''
        }]
        this.shiftsOfParticularDay = []
        this.GetIpdDischargeReqForDoc()
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
        this.dischargeDate = new Date();

    }
    GetIpdDischargeReqForDoc() {
        this.userService.GetIpdDischargeReqForDoc(this.doctorData._id).subscribe(data => {
            console.log(data)
            if (data.response == true) {
               this.patients = data.data
            }
        }, err => {
            console.log(err);
        })
    }

    openDetail(patient) {
        localStorage['patientDataForDischarge'] = JSON.stringify(patient)
        this.router.navigate(['/header-two-layout/discharge-patientpdf']);
    }

}
