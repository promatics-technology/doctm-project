import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { ToastrService } from 'ngx-toastr';
import { BaThemePreloader, BaThemeSpinner } from '../../theme/services';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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
declare var totalOpenedModal
declare var $

@Component({
    selector: 'app-dashboard-progress-ipd',
    templateUrl: './dashboard-progress-ipd.component.html',
    styleUrls: ['./dashboard-progress-ipd.component.css']
})
export class DashboardProgressIpdComponent implements OnInit {
    activatedtab
    doctorData
    loading
    dataArray
    otherSales
    
    generalPatient
    privatepatient
    semiPrivatePatient
    totalGeneralBeds
    totalPrivateBeds
    totalSemiPrivateBeds
    totalAdmissionHours
    finalTotal
    totalAvgBill
    ipdLength
    patientDischarge
    patientAdmitted
    patientAdmittedPercentage
    patientDischargedPercentage
    patientDischargelength
    patientAdmittedlength
    patientAdmittedOccupency
    admisssionRate
    DocWiseTotal
    dataDispense
    fromDate = new Date()
    toDate = new Date()
    fromDate1 = new Date()
    toDate1= new Date()
    newDate = new Date()
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }
    dataDischarge


    ///////////////////
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
    discharegeTime
    newDischargeDate=new Date()
    suggestionListInstruction
    patientDataForDischarge
    approvedPatients
    refundAmount : number
    totalApprovedPatients
    totalActivityOccupancy : number
    totalActivitiesAmountPdf:number
    refundAmountPdf: number
    totalIpdAmount
    totalAdvanceAmount
    occupency
    dataIpdPatient
    docWiseArray
    // totalAvgHours
    constructor(private userService: UserService, private toastr: ToastrService) { }

    ngOnInit() {
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        console.log(this.doctorData.smart_ipd_id)
        this.activatedtab = 0
        this.generalPatient = []
        this.privatepatient = []
        this.semiPrivatePatient = []
        this.dataArray = []
        this.dataDispense = []
        this.fromDate1.setDate(this.fromDate1.getDate()-6)
        //this.activatetab(1)
        this.discharegeTime = null
        // this.discharegeTime.hour =  hoursIST
        // this.discharegeTime.minute = minutesIST
        //current time
        if(localStorage['smartIpdDetails']){
            
        this.smartIpdData = JSON.parse(localStorage['smartIpdDetails'])
        }
        this.pateintPicPath = environment.patientPic
        this.generalPatients = []
        this.semiPatients = []
        this.privatePatients = []
        this.patientActivities = []
        this.approvedPatients = []
        this.dataIpdPatient = []
        this.docWiseArray = []
        this.webCam = false
        this.imgSrc = './assets/imgs/placeholder.png'
        this.appointmentsForCalender = [{
            start: new Date().toJSON().toString().substr(0, 10),
            title: '1',
            time: ''
        }]
        this.shiftsOfParticularDay = []
        //this.getDoctorId(0)
        //Akshay 27 Nov Start
        this.addpatientModal = {}
        this.addpatientModal.consultDoc = ""
        this.addpatientModal.gender = ""
        this.bedType = {}
        // Akshay 27 Nov End
        this.genLength = 0
        this.privateLen = 0
        this.semiprivateLen = 0
        this.totalApprovedPatients = 0

        this.addpatientModalData = {} 
        this.addpatientModalData.type = ""
        
        this.dischargeDate = new Date();
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
        this.GetSmartIpdDataAfterLogin()
        
        this.ipdAnalytics()
        
    }
    GetSmartIpdDataAfterLogin() {
        this.activatedtab = 0
        this.generalPatient = []
        this.privatepatient = []
        this.semiPrivatePatient = []
        this.dataArray = []
        this.dataDispense = []
        this.generalPatients = []
        this.semiPatients = []
        this.privatePatients = []
        this.patientActivities = []
        this.approvedPatients = []
        this.addpatientModal = {}
        this.addpatientModal.consultDoc = ""
        this.addpatientModal.gender = ""
        this.bedType = {}
        // Akshay 27 Nov End
        this.genLength = 0
        this.privateLen = 0
        this.semiprivateLen = 0
        this.totalApprovedPatients = 0
        this.totalIpdAmount = 0
        this.totalAdvanceAmount = 0
        this.addpatientModalData = {} 
        this.addpatientModalData.type = ""
        this.occupency = 0
        this.loading = true
        let object = {
            smart_ipd_id : this.doctorData.smart_ipd_id,
        }
        this.userService.GetSmartIpdDataAfterLogin(object).subscribe(data => {
            console.log(data)
            this.dataDoctors = []
            if (data.response == true) {
                this.dataDoctors = data.doctorsRegisteredForSmartClinic
                this.dataSmartIpd = data.dataSmartIpd
                this.dataIpdPatient = data.dataIpdPatients
                this.approvedPatients = data.dataIpdPatientsApproved
                for (var i = 0; i < this.dataDoctors.length; i++) {
                    var count = 0
                    for (var j = 0; j < this.dataIpdPatient.length; j++) {
                        if(this.dataDoctors[i]._id == this.dataIpdPatient[j].consultDoc._id){
                            count++                            
                        }
                    }
                    this.dataDoctors[i].patients = count
                }
               for (var i = 0; i < this.approvedPatients.length; i++) {
                    this.totalApprovedPatients = this.totalApprovedPatients + this.approvedPatients[i].approvedPatients.length
                    for (var j = 0; j < this.approvedPatients[i].approvedPatients.length; j++) {
                        this.totalIpdAmount += this.approvedPatients[i].approvedPatients[j].total_bill
                    }
                }
                for (var i = 0; i < data.dataIpdPatients.length; i++) {
                    if(data.dataIpdPatients[i].advanceReceived){
                        this.totalAdvanceAmount += data.dataIpdPatients[i].advanceReceived
                    }
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

                }
                var occupybed = 0
                occupybed  = (this.total_general_beds+this.total_private_beds+this.total_semi_private_beds)-(this.genLength+this.privateLen+this.semiprivateLen)
                this.occupency = (occupybed*100)/(this.total_general_beds+this.total_private_beds+this.total_semi_private_beds)
            }
            this.getDoctorId(0)
            this.loading = false
        }, err => {
            console.log(err);
        })
    }
    ipdAnalytics(){
        this.patientAdmitted = 0
        this.patientDischarge = 0
        var object
        object={}
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id,
        object.start_date= new Date()
        object.end_date= new Date()
        this.loading=true
        this.userService.IpdAnalytics(object).subscribe((result)=>{
            console.log(result)
            for (var i = 0; i < result.data.length; i++) {
                this.ipdLength+=result.data[i].dataIpd.length
                for (var j = 0; j < result.data[i].dataIpd.length; j++) {
                    this.patientAdmitted++
                }                 
            }
            for (var i = 0; i < result.dataDischarge.length; i++) {
                for (var j = 0; j < result.dataDischarge[i].dataIpd.length; j++) {
                    this.patientDischarge++                    
                }
            }
            this.loading=false
        },err=>{
            console.log(err)
        })
    }
    getDoctorId(id){
        this.generalPatients = []
        this.semiPatients = []
        this.privatePatients = []
        this.docWiseArray = []
        for (var i = 0; i < this.dataIpdPatient.length; i++) {
            if(id==0){
                this.docWiseArray.push(this.dataIpdPatient[i])
            }
            if(this.dataIpdPatient[i].consultDoc._id===id){
                this.docWiseArray.push(this.dataIpdPatient[i])
            }
        }        
        for (var i = 0; i < this.docWiseArray.length; i++) {
            this.docWiseArray[i].vacant = false
            if (this.docWiseArray[i].type == 'general') {
                this.generalPatients.push(this.docWiseArray[i])
            } else if (this.docWiseArray[i].type == 'private') {
                this.privatePatients.push(this.docWiseArray[i])
            } else if (this.docWiseArray[i].type == 'semi_private') {
                this.semiPatients.push(this.docWiseArray[i])
            }
        }        
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
    getDetailOfClinic(){
        this.smartIpdData = JSON.parse(localStorage['smartIpdDetails'])
    }
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

    getDoctorFirstName(doctor){
        var doc = doctor.split(" ")
        return doc[0]
    }
    

    getClass(i){
        if (i==this.activatedtab) {
            return 'active'
        }else if (i<this.activatedtab) {
            return 'completed'
        }

    }
    getData(data){
        if(isNaN(data)){
            return 0
        }else if(data % 1 != 0){
            return data.toFixed(2)
        }else{
            return data
        }
    }
    getDoctorName(id){
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if(this.dataDoctors[i]._id.toString() == id.toString()){
                return this.dataDoctors[i].first_name
            }
        }
    }
    
}