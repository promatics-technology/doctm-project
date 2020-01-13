import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { environment } from '../../../environments/environment.prod';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CustomDialogComponent } from '../../confirmation-popup/custom-dialog/custom-dialog.component'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
// import {} from '../../confi'
declare var $;
@Component({
  selector: 'app-delete-records',
  templateUrl: './delete-records.component.html',
  styleUrls: ['./delete-records.component.css'],
  providers: [UserService]
})
export class DeleteRecordsComponent implements OnInit {
    fromDate = new Date()
    toDate = new Date()
    fromDate1 = new Date()
    toDate1 = new Date()
    newDate = new Date()
    before = new Date()
    after = new Date()
    onlyToday= new Date()
    activatedtab
    doctorData
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }
    loading
    dataDispensed

    stepOneForm
    mobile
    month
    day
    year
    numericMonth
    dataRegistration
    dataAppointment
    pateintPicPath
    dataDispensedPatients
    patientList
    listOfPatient
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
    minutes
    seconds
    languageOptionSelected
    allShifts
    allShiftsClosed
    dispensedPatient
    lastDate
    docName
    docSpecialization
    docAffiliation
    ///prescription
    prescription_id
    newDocData
    newDocAllData
    newGlobalArray
    adminDocotrsArray
    admin
    landlineNo
    clinicName
    addressClinic
    areaClinic
    cityClinic
    stateClinic
    mobileClinic
    otpOnPhone
    varifyOtp
    getFinalO
    doctorsDetails
    lastVisit
    countLastVisit
    searchInput
    searchRecords
    showData
    databackup
    varifyPassword
    getServiceOtp
    getResponse: boolean
    deleteOption
    checkDateValue
    allDispenseList
    beforeVarifyPassword
    afterVarifyPassword
    getBeforeServiceOtp
    getAfterServiceOtp
    allVarifyPassword
    getAllSerivceVarifyPassword
    deleteDocAcc
    deleteDocAccService

    constructor(private UserService: UserService, private toastr: ToastrService, public dialog: MatDialog, private router: Router) {}

    ngOnInit() {
        this.deleteOption = 'Select One'
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        console.log(this.doctorData)
        this.newDate.setDate(this.newDate.getDate() + 1)
        this.fromDate1.setDate(this.fromDate1.getDate() - 6)
        this.doctorsDetails = JSON.parse(localStorage['doctorsOfSameClinic'])
        console.log(this.doctorsDetails)
        this.pateintPicPath = environment.patientPic
        var options = {
            month: 'short'
        };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate()
        this.year = new Date().getFullYear()
        this.numericMonth = new Date().getMonth() + 1
        this.dataRegistration = []
        this.dataAppointment = []
        this.dataDispensedPatients = []
        this.lastVisit = []
        this.countLastVisit = []
        this.dispensedPatient = {}
        this.activatedtab = 0
        this.GetAllDispenseListToDelete()
        this.setAllShiftsForPreview()
        this.searchRecords = []
    }
    askOtpbefore(type){
        
         Swal.fire({
            title: "Delete Records",
            text: "Are you sure you want to delete your records? All the records will be deleted as per selected criteria",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                this.otpBeforeDelete();
            } else {
                //this.removeDoctor();
            }
        })
    }
    askOtpafter(type){
        
         Swal.fire({
            title: "Delete Records",
            text: "Are you sure you want to delete your records? All the records will be deleted as per selected criteria",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
             this.otpAfterDelete();
            } else {
                //this.removeDoctor();
            }
        })
    }
    askOtponlyToday(type){
        
         Swal.fire({
            title: "Delete Records",
            text: "Are you sure you want to delete your records? All the records will be deleted as per selected criteria",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                this.otpForAllDelete();
            } else {
                //this.removeDoctor();
            }
        })
    }
    askOtptoDate1(type){
        
         Swal.fire({
            title: "Delete Records",
            text: "Are you sure you want to delete your records? All the records will be deleted as per selected criteria",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                this.generateOtp();
            } else {
                //this.removeDoctor();
            }
        })
    }
    askOtpDeleteDoc(type){
        
         Swal.fire({
            title: "Delete Account",
            text: "Are you sure you want to delete your account? You will be not be able to recover your account later!",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                this.otpDeleteDoc();
            } else {
                //this.removeDoctor();
            }
        })
    }

    beforeDeleteModal(){
        $('#beforModal').modal('show')
    }
    afterDeleteModal(){
        $('#afterModal').modal('show')
    }
    forDeleteModal(){
        $('#forModal').modal('show')
    }
    FromtoDeleteModal(){
        $('#fromtoModal').modal('show')
    }



    getClass(i) {
        if (i == this.activatedtab) {
            return 'active'
        } else if (i < this.activatedtab) {
            return 'completed'
        }

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

    getDocName(id) {
        if (id == this.doctorData._id) {
            return this.doctorData.first_name
        }
    }
    openPrescriptionPreview(data) {
        this.prescription_id = data.prescription_id
        this.dispensedPatient = data.registration
        console.log(data)
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
        var options = {
            month: 'short'
        };
        this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
        this.followUpDay = this.followUpDate.getDate()
        this.followUpYear = this.followUpDate.getFullYear()
        this.minutes = data.precription.minutes
        this.seconds = data.precription.seconds
        // this.languageOptionSelected = data.precription.languageOptionSelected
        $("#previewModal").modal("show");
    }

    checkOptionOfPad(value) {
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return true
        } else {
            for (var i = 0; i < this.doctorData.pad_customization_options.length; i++) {
                if (this.doctorData.pad_customization_options[i].value == value) {
                    if (this.doctorData.pad_customization_options[i].status == true) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        }
    }

    getFooterText() {
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return "Not for Medico-Legal Purpose"
        } else {
            return this.doctorData.pad_customization_options[12].text
        }
    }

    getHeaderText() {
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return "PLEASE TAKE PRIOR APPOINTMENT"
        } else {
            return this.doctorData.pad_customization_options[8].text
        }
    }

    setAllShiftsForPreview() {
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
            if (this.doctorData.consultation_schedule[i].Monday == true) {
                Mon = true
                if (string == '') {
                    string = "Mon"
                } else {
                    string = string + ", " + "Mon"
                }
            }
            if (this.doctorData.consultation_schedule[i].Tuesday == true) {
                Tue = true
                if (string == '') {
                    string = "Tue"
                } else {
                    string = string + ", " + "Tue"
                }
            }
            if (this.doctorData.consultation_schedule[i].Wednesday == true) {
                Wed = true
                if (string == '') {
                    string = "Wed"
                } else {
                    string = string + ", " + "Wed"
                }
            }
            if (this.doctorData.consultation_schedule[i].Thursday == true) {
                Thu = true
                if (string == '') {
                    string = "Thu"
                } else {
                    string = string + ", " + "Thu"
                }
            }
            if (this.doctorData.consultation_schedule[i].Friday == true) {
                Fri = true
                if (string == '') {
                    string = "Fri"
                } else {
                    string = string + ", " + "Fri"
                }
            }
            if (this.doctorData.consultation_schedule[i].Saturday == true) {
                Sat = true
                if (string == '') {
                    string = "Sat"
                } else {
                    string = string + ", " + "Sat"
                }
            }
            if (this.doctorData.consultation_schedule[i].Sunday == true) {
                Sun = true
                if (string == '') {
                    string = "Sun"
                } else {
                    string = string + ", " + "Sun"
                }
            }
            let object = {
                day: string,
                shifts: this.doctorData.consultation_schedule[i].shifts
            }
            this.allShifts.push(object)
        }
        var stringClosed = ''
        this.allShiftsClosed = []
        if (Mon == false) {
            if (stringClosed == '') {
                stringClosed = "Mon"
            } else {
                stringClosed = stringClosed + ", " + "Mon"
            }
        }
        if (Tue == false) {
            if (stringClosed == '') {
                stringClosed = "Tue"
            } else {
                stringClosed = stringClosed + ", " + "Tue"
            }
        }
        if (Wed == false) {
            if (stringClosed == '') {
                stringClosed = "Wed"
            } else {
                stringClosed = stringClosed + ", " + "Wed"
            }
        }
        if (Thu == false) {
            if (stringClosed == '') {
                stringClosed = "Thu"
            } else {
                stringClosed = stringClosed + ", " + "Thu"
            }
        }
        if (Fri == false) {
            if (stringClosed == '') {
                stringClosed = "Fri"
            } else {
                stringClosed = stringClosed + ", " + "Fri"
            }
        }
        if (Sat == false) {
            if (stringClosed == '') {
                stringClosed = "Sat"
            } else {
                stringClosed = stringClosed + ", " + "Sat"
            }
        }
        if (Sun == false) {
            if (stringClosed == '') {
                stringClosed = "Sun"
            } else {
                stringClosed = stringClosed + ", " + "Sun"
            }
        }
        if (stringClosed != '') {
            let object = {
                day: stringClosed
            }
            this.allShiftsClosed.push(object)
        }
    }
    createPdf() {
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
    searchByName() {
        if (this.searchInput == null || this.searchInput == '' || this.searchInput == undefined || this.searchInput == 0 ||
            this.searchInput.toString().trim().length < 1) {
            this.toastr.warning("Invalid search input", "Warning")
        } else {
            this.loading = true
            var object = {
                doctor_id: this.doctorData._id,
                search: this.searchInput
            }
            this.UserService.FindPatientByName(object).subscribe(data => {
                console.log(data)
                this.listOfPatient = data.data
                this.loading = false
            }, err => {
                console.log(err);
            })
        }
    }

    onKey(event: any) {
        if (event.keyCode == 13) {
            this.searchByName()
        }
    }

    search() {
        this.searchInput = this.searchInput.toLowerCase()
        if (this.searchInput && this.searchInput.trim() != '') {
            this.showData = this.databackup.filter((item) => {
                let b = item.invoice
                return (b.indexOf(this.searchInput) > -1)
            })
        }
    }

    // getPatientData(){

    //     var ob 
    //     ob = {}
    //     ob.doctor_id = this.doctorData._id
    //     ob.start_date = this.fromDate1
    //     ob.end_date = this.toDate1


    //     this.loading = true
    //     this.UserService.AllDispensePatientsForSearchRecords(ob).subscribe(data => {
    //         console.log(data)
    //         //this.getResponse = data.response
    //         this.listOfPatient= data.dataDispensed

    //         this.loading = false
    //         }, err => {
    //       console.log(err);
    //     })
    // }
    GetAllDispenseListToDelete() {
        var ob
        ob = {}
        ob.doctor_id = this.doctorData._id
        this.loading = true
        this.UserService.GetAllDispenseListToDelete(ob).subscribe(data => {
            console.log(data)
            this.getResponse = data.response
            this.allDispenseList = data.dataDispensed
            this.loading = false
        }, err => {
            console.log(err);
        })
    }

    deleteAll() {
        if (parseInt(this.getServiceOtp) == this.varifyPassword) {
            for (var i = 0; i < this.allDispenseList.length; i++) {
                console.log(this.allDispenseList[i]._id)
                var ob
                ob = {}
                ob.user_id = this.allDispenseList[i]._id,
                ob.start_date = this.fromDate1
                ob.end_date = this.toDate1
                ob.all = true
                console.log(ob)
                this.loading = true
                this.UserService.DeletePatientRecord(ob).subscribe(data => {
                    if (data.response) {
                        this.toastr.success(data.message, 'Success', {
                            timeOut: 3000,
                            closeButton: true
                        });
                        $("#delete-data").modal("hide");
                        this.router.navigateByUrl('/header-two-layout/dashboard');
                        //this.ngOnInit()
                    } else {
                        this.toastr.error(data.message, 'Error', {
                            timeOut: 3000,
                            closeButton: true
                        });
                    }
                    this.loading = false
                }, err => {
                    console.log(err);
                })

            }
        } else {
            this.toastr.error("Invalid OTP", "Error")
        }
    }


    generateOtp() {
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning")
            return
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) ! > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning")
            return
        }
        console.log(this.getResponse)
        if (this.getResponse) {
            var phone = parseInt(this.doctorData.phone)
            var ob = {
                phone
            }
            console.log(phone)
            this.UserService.GenerateOtpForActiveDoctor(ob).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    this.getServiceOtp = data.otpPhone
                    $("#delete-data").modal("show");
                } else {
                    this.toastr.error(data.message, "Error")
                }
            }, err => {
                console.log(err)
            })
        } else {
            this.toastr.error("No data found", "Error")
        }
    }
    deleteOpt(event: any) {
        this.checkDateValue = event.target.value
        console.log(event.target.value)
    }
    deleteBefore() {

        if (this.getResponse) {
            if (parseInt(this.getBeforeServiceOtp) == this.beforeVarifyPassword) {
                for (var i = 0; i < this.allDispenseList.length; i++) {
                    console.log(this.allDispenseList[i]._id)
                    var ob
                    ob = {}
                    ob.user_id = this.allDispenseList[i]._id
                    ob.delete_date = this.before
                    ob.before = true
                    console.log(ob)
                    this.loading = true
                    this.UserService.DeletePatientRecord(ob).subscribe(data => {
                        console.log(data)
                        if (data.response) {
                            this.toastr.success(data.message, 'Success', {
                                timeOut: 3000,
                                closeButton: true
                            });
                            $("#delete-before").modal("hide");
                            this.router.navigateByUrl('/header-two-layout/dashboard');
                            //this.ngOnInit()
                        } else {
                            this.toastr.error(data.message, 'Error', {
                                timeOut: 3000,
                                closeButton: true
                            });
                        }
                        this.loading = false
                    }, err => {
                        console.log(err);
                    })
                }

            }else{
                    this.toastr.error('Wrong OTP', 'Error');
                }
        } else {
            this.toastr.error('No data found', 'Error');
        }
    }
    deleteAfter() {
        if (this.getResponse) {
            if (parseInt(this.getAfterServiceOtp) == this.afterVarifyPassword) {
                for (var i = 0; i < this.allDispenseList.length; i++) {
                    console.log(this.allDispenseList[i]._id)
                    var ob
                    ob = {}
                    ob.user_id = this.allDispenseList[i]._id
                    ob.delete_date = this.after
                    ob.after = true
                    console.log(ob)
                    this.loading = true
                    this.UserService.DeletePatientRecord(ob).subscribe(data => {
                        console.log(data)
                        if (data.response) {
                            this.toastr.success(data.message, 'Success', {
                                timeOut: 3000,
                                closeButton: true
                            });
                            $("#delete-after").modal("hide");
                            this.router.navigateByUrl('/header-two-layout/dashboard');
                        } else {
                            this.toastr.error(data.message, 'Error', {
                                timeOut: 3000,
                                closeButton: true
                            });
                        }
                        this.loading = false
                    }, err => {
                        console.log(err);
                    })

                }
            }else{
                this.toastr.error('Wrong OTP', 'Error');
            }
        } else {
            this.toastr.error('No data found', 'Error');
        }
    }
    forTodayData() {
        if (this.getResponse) {
            //if (parseInt(this.getAfterServiceOtp) == this.afterVarifyPassword) {
                for (var i = 0; i < this.allDispenseList.length; i++) {
                    console.log(this.allDispenseList[i]._id)
                    var ob
                    ob = {}
                    ob.user_id = this.allDispenseList[i]._id
                    ob.delete_date = this.onlyToday
                    ob.inFor = true
                    console.log(ob)
                    this.loading = true
                    this.UserService.DeletePatientRecord(ob).subscribe(data => {
                        console.log(data)
                        if (data.response) {
                            this.toastr.success(data.message, 'Success', {
                                timeOut: 3000,
                                closeButton: true
                            });
                            $("#delete-all").modal("hide");
                            this.router.navigateByUrl('/header-two-layout/dashboard');
                        } else {
                            this.toastr.error(data.message, 'Error', {
                                timeOut: 3000,
                                closeButton: true
                            });
                        }
                        this.loading = false
                    }, err => {
                        console.log(err);
                    })

                }
            // }else{
            //     this.toastr.error('Wrong OTP', 'Error');
            // }
        } else {
            this.toastr.error('No data found', 'Error');
        }
    }
    otpBeforeDelete(){
        if (this.getResponse) {
            var phone = parseInt(this.doctorData.phone)
            var ob = {
                phone
            }
            console.log(phone)
            this.UserService.GenerateOtpForActiveDoctor(ob).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    this.getBeforeServiceOtp = data.otpPhone
                    $("#delete-before").modal("show");
                } else {
                    this.toastr.error(data.message, "Error")
                }
            }, err => {
                console.log(err)
            })
        } else {
            this.toastr.error("No data found", "Error")
        }
    }
    otpAfterDelete(){
        if (this.getResponse) {
            var phone = parseInt(this.doctorData.phone)
            var ob = {
                phone
            }
            console.log(phone)
            this.UserService.GenerateOtpForActiveDoctor(ob).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    this.getAfterServiceOtp = data.otpPhone
                    $("#delete-after").modal("show");
                } else {
                    this.toastr.error(data.message, "Error")
                }
            }, err => {
                console.log(err)
            })
        } else {
            this.toastr.error("No data found", "Error")
        }
    }
    otpForAllDelete(){
        if (this.getResponse) {
            var phone = parseInt(this.doctorData.phone)
            var ob = {
                phone
            }
            console.log(phone)
            this.UserService.GenerateOtpForActiveDoctor(ob).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    this.getAllSerivceVarifyPassword = data.otpPhone
                    $("#delete-all").modal("show");
                } else {
                    this.toastr.error(data.message, "Error")
                }
            }, err => {
                console.log(err)
            })
        } else {
            this.toastr.error("No data found", "Error")
        }
    }
    otpDeleteDoc(){
        
        // if (this.getResponse) {
            var phone = parseInt(this.doctorData.phone)
            var ob = {
                phone
            }
            console.log(phone)
            this.UserService.GenerateOtpForActiveDoctor(ob).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    this.deleteDocAccService = data.otpPhone
                    $("#delete-doc-account").modal("show");
                } else {
                    this.toastr.error(data.message, "Error")
                }
            }, err => {
                console.log(err)
            })
        // } else {
        //     this.toastr.error("No data found", "Error")
        // }
    }
    deleteDoctorAccount(){
        if(this.deleteDocAcc == parseInt(this.deleteDocAccService)){
            this.UserService.DeleteDoctor(this.doctorData.itemId).subscribe(data => {
                console.log(data);
               // this.loading = false;
                if (data.response == true) {
                    //this.ngOnInit();
                    this.toastr.success(data.message, 'Success');
                } else {
                    this.toastr.error(data.message, 'Error');
                }
            }, err => {
                console.log(err);
            })
           $("#delete-doc-account").modal("hide");
            // this.ngOnInit()
            this.router.navigate(['header-one-layout/homepage']); 
        }else{
            this.toastr.error("Wrong OTP", "Error")
        }
    }


}
