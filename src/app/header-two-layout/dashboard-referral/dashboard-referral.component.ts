import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ConfirmationDialogComponent } from '../../confirmation-popup/confirmation-dialog/confirmation-dialog.component'

declare var $

@Component({
	selector: 'app-dashboard-referral',
	templateUrl: './dashboard-referral.component.html',
	styleUrls: ['./dashboard-referral.component.css']
})
export class DashboardReferralComponent implements OnInit {
	doctorReferForm: FormGroup;
	referDetail
	refer_status
	doctorData
	dataReferralTo
	dataReferralFrom
	openedPopUp
	loading

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
    prescription_id
	///prescription
    dataDoctors
    referDoctorName

	constructor(private toastr: ToastrService, private userService: UserService,
		public dialog: MatDialog, private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.doctorData = JSON.parse(localStorage['doctorDetails'])
        console.log(this.doctorData)
        this.dataReferralTo = []
		this.dataReferralFrom = []

		this.referDetail = {}
		this.doctorReferForm = this.formBuilder.group({
			'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
				Validators.minLength(10), Validators.maxLength(10)
				])],
			'patient_name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
			'note': [null]
		})
		this.FindReferralPatients()
	}
	referToDcotor() {
		console.log(this.referDetail)
		this.refer_status = true
	}
	findDoctorReferDetail() {
        console.log(this.referDetail)
        if (!isNaN(this.referDetail.phone) && this.referDetail.phone.trim().length == 10) {
            this.userService.FindDoctorReferDetail(this.referDetail.phone).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    this.referDetail.doctor_name = "Dr. " + data.data.first_name //+ " " + data.data.last_name
                }
            }, err => {
                console.log(err);
            })
        }
    }

    FindReferralPatients(){
    	this.loading = true
		this.dataReferralTo = []
		this.dataReferralFrom = []
        this.dataDoctors = []
    	let ob = {
    		doctorData: this.doctorData,
    		object: {maximum: true }
    	}
    	this.userService.FindReferralPatients(ob).subscribe((data)=>{
    		console.log(data)
    		if(data.response){
                this.dataDoctors = data.dataDoctors
    			this.dataReferralTo = data.dataReferralTo
				this.dataReferralFrom = data.dataReferralFrom
    		}
    		this.loading = false
		},err=>{
			console.log(err)
		})
    }

    viewPopup(data,id){
        console.log(data)
    	this.openedPopUp = data
    	this.dispensedPatient = data.dispensed_patient_id
    	if(id==0){
    		this.openedPopUp.name = data.name
    	}
    }

    openPrescriptionPreview1(data){
        this.prescription_id = data.prescription_id
        this.dispensedPatient = data.registration
        console.log(data)
        this.referDoctorName = data.registration.doctor_id
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
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if(this.dataDoctors[i]._id == data.doctor_id){
                this.doctorData = this.dataDoctors[i]
                break
            }
        }
        if(this.medicationComplete){
        $("#previewModal1").modal("show");
         $("#viewPre1").modal("hide");

        }else{
        $("#PrescriptionNot").modal("show");
        $("#viewPre").modal("hide");

        }

    }
    openPrescriptionPreview(data){
        this.prescription_id = data.prescription_id
        this.dispensedPatient = data.registration
        console.log(data)
        this.referDoctorName = data.registration.doctor_id
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
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if(this.dataDoctors[i]._id == data.doctor_id){
                this.doctorData = this.dataDoctors[i]
                break
            }
        }
        if(this.medicationComplete){
        $("#previewModal").modal("show");
         $("#viewPre").modal("hide");

        }else{
        $("#PrescriptionNot").modal("show");
        $("#viewPre").modal("hide");

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

    getFooterText(){
        if(!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length<1){
            return "Not for Medico-Legal Purpose"
        }else{
            return this.doctorData.pad_customization_options[12].text
        }
    }

    getHeaderText(){
        if(!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length<1){
            return "PLEASE TAKE PRIOR APPOINTMENT"
        }else{
            return this.doctorData.pad_customization_options[8].text
        }
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
    }

    deleteReferral(data){
    	let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            // width: '250px',
            data: "this referral"
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result == "yes") {
                this.userService.DeleteReferral(data._id).subscribe(data => {
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

}
