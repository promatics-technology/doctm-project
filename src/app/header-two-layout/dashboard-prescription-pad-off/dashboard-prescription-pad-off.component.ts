import { Component, OnInit, ViewChild, ElementRef,OnDestroy } from '@angular/core';
import { DndDropEvent, DropEffect } from "ngx-drag-drop";
import { ToastrService } from 'ngx-toastr';
import { RouterModule, Routes, Router, NavigationEnd,ActivatedRoute } from '@angular/router';
import { UserService } from '../../providers/user.service';
import { ScrollToService } from 'ng2-scroll-to-el';
import { ConfirmationDialogUpdateComponent } from '../../confirmation-popup/confirmation-dialog-update/confirmation-dialog-update.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment.prod';
import * as jsPDF from 'jspdf';
import * as d3 from 'd3';
import * as html2canvas from 'html2canvas';
declare var $
declare var totalOpenedModal
import * as io from "socket.io-client";
@Component({
    selector: 'app-dashboard-prescription-pad-off',
    templateUrl: './dashboard-prescription-pad-off.component.html',
    styleUrls: ['./dashboard-prescription-pad-off.component.css']
})
export class DashboardPrescriptionPadOffComponent implements OnInit {

    @ViewChild('previewModalPdf') el: ElementRef;

    showhideaddfiled = ''
    spherePositive = []
    sphereNegative = []
    cylinderPositive = []
    cylinderNegative = []
    addNumber = []
    axisNumber = []
    findPresets: boolean
    symptomspreset: boolean
    diagnosispreset: boolean
    instructionpreset: boolean
    treatmentpreset: boolean
    medicationpreset: boolean
    investigationpreset: boolean
    surgeryPreset: boolean
    othertabs: boolean
    medicatab = 0
    treatmentab = 0
    treatab = 0
    investigationtab = 0
    surgeyproctab = 0
    medicationul
    precmodalActive
    inputBox
    treatBox
    loading = false

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

    condition
    classActive
    ppclass
    addField = 'Add Field'
    // prescList = [ 'Pre Condition', 'Allergy', 'Body Indicator', 'Clinic Findings', 'Symptoms', 'Diagnosis', 'Medication', 'Other Treatment', 'Investigation', 'Surgery/Procedure', 'Follow-up', 'Refer', 'Eye Prescription', 'Vaccination']
    prescList
    preConditionArray
    otherPre
    selectedValue
    selectedIndex
    selectedIndexDataValue = [
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' },
    { headings: 'Add Field', selectedStatus: false, field: "Add Field", values: [], width: '', float: '', targetId: '', modalId: 'myModal' }
    ]

    selectedIndexDataValueForShowleft = []
    selectedIndexDataValueForShowright = []

    investigationStatus

    preCondMdlArray = [{
        'status': false,
        'text': 'Pregnant'
    }, {
        'status': false,
        'text': 'Breast-Feeding'
    }, {
        'status': false,
        'text': 'Diabetic'
    }, {
        'status': false,
        'text': 'Cardiovascular Problem'
    }, {
        'status': false,
        'text': 'Thyroid'
    }, {
        'status': false,
        'text': 'Hypertension'
    }, {
        'status': false,
        'text': 'Auto-immune disorder'
    }, {
        'status': false,
        'text': 'Arthritis'
    }, {
        'status': false,
        'text': 'Asthma'
    }, {
        'status': false,
        'text': 'Other',
        'purpose': 'more'
    }]
    AllergyArray = [{
        'allergyName': 'Drug Allergy',
        'allergySource': [{
            'status': false,
            'text': 'Aspirin'
        }, {
            'status': false,
            'text': 'Ampicillin'
        }, {
            'status': false,
            'text': 'Pain killer'
        }, {
            'status': false,
            'text': 'Antibiotics'
        }, {
            'status': false,
            'text': 'Tetracycline'
        }, {
            'status': false,
            'text': 'Sulfa'
        }]
    }, {
        'allergyName': 'Food Allergy',
        'allergySource': [{
            'status': false,
            'text': 'Chocolate'
        }, {
            'status': false,
            'text': 'Egg'
        }, {
            'status': false,
            'text': 'Fish'
        }, {
            'status': false,
            'text': 'Milk'
        }, {
            'status': false,
            'text': 'Nuts'
        }, {
            'status': false,
            'text': 'Prawn'
        }, {
            'status': false,
            'text': 'Meat'
        }, {
            'status': false,
            'text': 'Sea Food'
        }, {
            'status': false,
            'text': 'Spices'
        }]
    }, {
        'allergyName': 'Skin Allergy',
        'allergySource': [{
            'status': false,
            'text': 'Urticaria'
        }, {
            'status': false,
            'text': 'Rash'
        }, {
            'status': false,
            'text': 'Sun'
        }, {
            'status': false,
            'text': 'Anaphylaxis'
        }, {
            'status': false,
            'text': 'Dye'
        }, {
            'status': false,
            'text': 'Detergent'
        }]
    }, {
        'allergyName': 'Respiratory Allergy',
        'allergySource': [{
            'status': false,
            'text': 'Dust'
        }, {
            'status': false,
            'text': 'Pollen'
        }, {
            'status': false,
            'text': 'Paint smell'
        }, {
            'status': false,
            'text': 'Smoke'
        }, {
            'status': false,
            'text': 'Perfume'
        }, {
            'status': false,
            'text': 'Temp change'
        }]
    }]

    vaccinationDate = new Date()
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }

    minutes: number
    seconds: number
    MyDate
    day
    month
    year
    numericMonth

    prescList1 = []
    prescList2 = []

    preCondSelected = []
    finalPreConditions = []
    finalAllergy = []
    allergySelected = []
    bodyIndicatorSelected = []
    patientData

    status: boolean = false;
    bodyIndicator = {
        'temp': 'Select',
        'pulse': 'Select',
        'sys': 'Select',
        'dia': 'Select',
        'spo': 'Select',
        'rbs': 'Select'
    };
    temp;
    spo;
    pulse;
    sys;
    dia;
    filter
    itemsfinding = []
    findingPreSetVals = []
    preConditionComplete: boolean = false;
    allergyComplete: boolean = false;
    findingsComplete: boolean = false
    bodyIndicatorComplete: boolean = false;
    testValue
    findingsSelected = []

    // harman
    filterSymptoms
    itemsymptoms = []
    symptomsPresetArray = []
    symptomsSelected = []
    symptomsComplete: boolean = false
    filterDiagnosis
    itemsdiagnosis = []
    diagnosisPresetArray = []
    diagnosisSelected = []
    preConditionPresetArray = []
    allergyPresetArray = []
    diagnosisComplete: boolean = false

    instructionsInput
    addPresetInstruction = false
    presetArrayInstruction = []
    presetArraySurgery = []
    presetArrayOtherTreatment = []
    presetArrayInvestigation = []
    instructionsComplete: boolean = false
    instructionsSelected = []
    numberOfInvestigationSelected :number = 0
    investigationArray = []
    investigationIndicatorComplete: boolean = false
    surgeryComplete: boolean = false
    followDaysComplete: boolean = false

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

    totalMedications: number = 0
    investigation
    suregeryOptions
    suregeryOptionsTop
    totalSurgeryOptionsSelected: number = 0
    surgerySelectedArray = []
    finalSurgeryArray = []

    followUpDays: number = 0
    finalfollowUpDays: number = 0
    followUpDate = new Date()
    followUpMonth
    followUpDay
    followUpYear

    otherAllergy

    vaccination_type
    currentVaccinationArray = []
    dueVaccinationArray = []
    tempDueVaccinationArray = []
    tempCurrentVaccinationArray = []
    finalDueVaccinationArray = []
    finalCurrentVaccinationArray = []
    currentVaccinationComplete: boolean = false
    dueVaccinationComplete: boolean = false
    vaccinationComplete: boolean = false

    currentFrequency
    tempFrequency
    tempFrequencySpecial
    tempDuration
    medicationSavedArray = []
    tempDosage
    tempInjection
    tempQuantity

    treatmentComplete = false

    tempMedicationArray
    medicationComplete: boolean = false

    tempSphereRight = null
    tempSphereLeft = null
    tempCylinderRight = null
    tempCylinderLeft = null
    tempAxisRight = null
    tempAxisLeft = null
    tempAddRight = null
    tempAddLeft = null
    tempPDRight = null
    tempPDLeft = null
    rightOD
    leftOD
    finalRightOD
    finalLeftOD

    eyePresComplete: boolean = false

    show_otherPrecondition = false

    //Other Treatment
    totalOtherTreatment: number = 0
    tempTreatFrequency
    tempTreatSpecialInstruction
    tempTreatDuration
    treatmentStatus
    tempTreatObject
    tempTreatObjectIndex
    treatmentArray = []
    plaster_open_by_main: boolean = true
    tempPlasterDivIndex
    tempInjury

    spo_range
    temperature_range
    pulse_range
    sys_range
    dia_range
    rbs_range
    quantity_range
    quantity_drops = 'Select'

    doctorData
    doctorClinicalObservation
    doctorSymptomsDB
    doctorDiagnosisDB

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

    doctorOtherTreatmentDB
    doctorOtherTreatmentBandageDB
    doctorOtherTreatmentOtherDB
    doctorOtherTreatmentGargleDB
    doctorOtherTreatmentDressingDB

    pathologySuggestionDB
    xraySuggestionDB
    ultraSoundSuggestionDB
    dopplerSuggestionDB
    ecgSuggestionDB
    eegSuggestionDB
    tmtSuggestionDB
    echoSuggestionDB
    ctScanSuggestionDB
    mriSuggestionDB
    nerveSuggestionDB
    audioSuggestionDB
    mammograaphySuggestionDB
    boneSuggestionDB
    eyeSuggestionDB
    lungSuggestionDB
    otherSuggestionDB

    otherInj
    instructionsSavedDB

    precondlength : number

    medicationPresetShow: boolean
    instructionPresetShow: boolean
    surgeryPresetShow: boolean
    otherTreatmentPresetShow: boolean
    investigationPresetShow: boolean
    presentNameMedication
    presentNameSurgery
    presentNameOtherTreatment
    presentNameInvestigation
    presentNameInstrcutions
    doctorPresetArray
    totalMedicationPresetSelected
    newPresetArray
    presentNamePrescPad
    savedPrescriptionPadArray
    medInfoDB
    temp_preset_id


    doctorReferForm: FormGroup;
    referDetail
    languageOption = ""
    languageOptionSelected = ""
    allShifts
    allShiftsClosed
    refer_status : boolean
    // translatedDiv
    ////----------------------- translation ---------------------------
    // translated_doctorName
    // translated_clinicName
    translated_appointmentText
    translated_emergencyText
    translated_treatmentText
    translated_servicesText
    translated_medication
    translated_PreCondHeading
    translated_BIHeading
    translated_allergyHeading
    translated_sympHeading
    translated_PTHeading
    translated_diagnosisHeading
    translated_invHeading
    translated_OTHeading
    translated_surgHeading
    translated_instHeading
    translated_eyeHeading
    translated_footer
    translated_VaccinationHeading
    ////----------------------- translation ---------------------------
    prescriptionPadDetail
    consultingPatient
    pateintPicPath
    reportPic

    socket
    uploadedPrescriptionPath
    experience : number
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
    // harman
    doctorsDetails
    constructor(private toastr: ToastrService, private route: ActivatedRoute,
        private userService: UserService, private scrollService: ScrollToService,
        public dialog: MatDialog, private formBuilder: FormBuilder,
        private domSanitizer:DomSanitizer,private router: Router) {
        this.route.params.subscribe(params => {
            this.patientData = params;
        });
        this.referDetail = {}
        this.doctorReferForm = this.formBuilder.group({
            'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(10), Validators.maxLength(10)
                ])],
            'doctor_name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
            'note': [null]
        })
        // function googleTranslateElementInit() {
            // new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
            // }

        }

        ngOnInit() {
            this.loading = true
            this.doctorData = JSON.parse(localStorage['doctorDetails'])
            console.log(this.doctorData)
            // localStorage['doctorDetails']=JSON.stringify(data.data)
            // this.doctorsDetails = 
            this.consultingPatient = JSON.parse(localStorage['consultingPatient'])
            console.log(this.consultingPatient)
            this.pateintPicPath = environment.patientPic
            this.reportPic = environment.reportPic
            this.uploadedPrescriptionPath = environment.uploadedPrescriptionPath
            console.log(this.doctorData.smart_pharmacy_id)
            this.doctorsDetails = JSON.parse(localStorage['doctorsOfSameClinic'])
            console.log(this.doctorsDetails)
            // this.getDoctorPrescriptionFields(this.doctorData.itemId);
            // this.GetDoctorSurgeryArray(this.doctorData.itemId);
            // this.GetDoctorClinicalObservations(this.doctorData.itemId);
            // this.GetDoctorSymptoms(this.doctorData.itemId);
            // this.GetDoctorDiagnosis(this.doctorData.itemId);
            // this.GetMedicationSuggestions('Tablet')
            // this.GetMedicationSuggestions('Capsule')
            // this.GetMedicationSuggestions('Syrup')
            // this.GetMedicationSuggestions('Suspension')
            // this.GetMedicationSuggestions('Emulsion')
            // this.GetMedicationSuggestions('Solution')
            // this.GetMedicationSuggestions('Injection')
            // this.GetMedicationSuggestions('Cream')
            // this.GetMedicationSuggestions('Oitment')
            // this.GetMedicationSuggestions('Gel')
            // this.GetMedicationSuggestions('Lotion')
            // this.GetMedicationSuggestions('Drops')
            // this.GetMedicationSuggestions('Aerosols')
            // this.GetMedicationSuggestions('Powder')
            // this.GetMedicationSuggestions('MouthWash')

            // this.GetMedicationSuggestions('TabletInfo')
            // this.GetMedicationSuggestions('CapsuleInfo')
            // this.GetMedicationSuggestions('SyrupInfo')
            // this.GetMedicationSuggestions('SuspensionInfo')
            // this.GetMedicationSuggestions('EmulsionInfo')
            // this.GetMedicationSuggestions('SolutionInfo')
            // this.GetMedicationSuggestions('InjectionInfo')
            // this.GetMedicationSuggestions('CreamInfo')
            // this.GetMedicationSuggestions('OitmentInfo')
            // this.GetMedicationSuggestions('GelInfo')
            // this.GetMedicationSuggestions('LotionInfo')
            // this.GetMedicationSuggestions('DropsInfo')
            // this.GetMedicationSuggestions('AerosolsInfo')
            // this.GetMedicationSuggestions('PowderInfo')
            // this.GetMedicationSuggestions('MouthWashInfo')

            // this.GetSavedSuggestions('Lifestyle')
            // this.GetSavedSuggestions('Gargle')
            // this.GetSavedSuggestions('Bandage')
            // this.GetSavedSuggestions('Dressing')
            // this.GetSavedSuggestions('Other')

            // this.GetSavedSuggestions('Instruction')

            // this.GetSavedSuggestions('Pre Condition')
            // this.GetSavedSuggestions('Allergy')

            // this.GetSurgerySuggestions('Cardiology')
            // this.GetSurgerySuggestions('ENT')
            // this.GetSurgerySuggestions('Dental')
            // this.GetSurgerySuggestions('Genito-Urinary')
            // this.GetSurgerySuggestions('Gynaecology/Obstetrics')
            // this.GetSurgerySuggestions('Neonatal')
            // this.GetSurgerySuggestions('Neurology')
            // this.GetSurgerySuggestions('Oncology')
            // this.GetSurgerySuggestions('Ophthalmology')
            // this.GetSurgerySuggestions('Orthopaedics')
            // this.GetSurgerySuggestions('Paediatric')
            // this.GetSurgerySuggestions('Vascular')

            // this.onTextChange('Mammograaphy', '');
            // this.onTextChange('Bone densitometry', '')

            // this.onTextChange('ECG', '');
            // this.onTextChange('EEG', '');
            // this.onTextChange('TMT', '');
            // this.onTextChange('Echo', '');
            // this.onTextChange('NERVE TEST', '');
            // this.onTextChange('Audiometry', '');
            // this.onTextChange('Lung Test', '');

            // this.GetInvestigationSuggestions('Pathology')
            // this.GetInvestigationSuggestions('X-Ray')
            // this.GetInvestigationSuggestions('Ultrasound')
            // this.GetInvestigationSuggestions('Doppler Studies')
            // // this.GetInvestigationSuggestions('ECG')
            // // this.GetInvestigationSuggestions('EEG')
            // // this.GetInvestigationSuggestions('TMT')
            // // this.GetInvestigationSuggestions('Echo')
            // this.GetInvestigationSuggestions('CT-Scan')
            // this.GetInvestigationSuggestions('MRI')
            // // this.GetInvestigationSuggestions('Nerve Test')
            // // this.GetInvestigationSuggestions('Audiometry')
            // this.GetInvestigationSuggestions('Eye Tests')
            // // this.GetInvestigationSuggestions('Lung Test')
            // this.GetInvestigationSuggestions('Others');

            // this.GetDoctorPreset();

            // this.GetDoctorOtherPreset('Patient Complaints')
            // this.GetDoctorOtherPreset('Symptoms')
            // this.GetDoctorOtherPreset('Diagnosis')

            // this.GetDoctorPresetArray('Instructions')
            // this.GetDoctorPresetArray('Surgery')
            // this.GetDoctorPresetArray('Other Treatments')
            // this.GetDoctorPresetArray('Investigation')

            // this.GetPrescriptionPad();

            var options = { month: 'short' };
            var today = new Date();
            this.month = today.toLocaleDateString("en-IN", options);
            this.day = new Date().getDate()
            this.year = new Date().getFullYear()
            this.numericMonth = new Date().getMonth()+1

            this.prescList = [
            { structure: 'three', targetId: 'preconditionModal', float: 'left', item: 'Pre Condition', status: false, status1: false, field: "Add Field", values: ['a', 'b', 'c'], width: 'pre-cond' },
            { structure: 'three', targetId: 'allergyModal', float: 'left', item: 'Allergy', status: false, status1: false, field: "Add Field", values: [], width: 'allergy' },
            { structure: 'three', targetId: 'bodyIndicatorModal', float: 'left', item: 'Body Indicator', status: false, status1: false, field: "Add Field", values: [], width: 'indicator' },
            { structure: 'one', targetId: 'clinicFindModal', float: 'left', item: 'Patient Complaints', status: false, status1: false, field: "Add Field", values: [], width: 'finding' },
            { structure: 'one', targetId: 'symptomsModal', float: 'left', item: 'Symptoms', status: false, status1: false, field: "Add Field", values: [], width: 'symptoms' },
            { structure: 'one', targetId: 'diagnosisModal', float: 'left', item: 'Diagnosis', status: false, status1: false, field: "Add Field", values: [], width: 'diagnosis' },
            // {structure:'one',targetId:'medicationModal',float:'right',item:'Medication', status: false,status1:false,field:"Add Field",values:[],width:'pad-medication'},
            { structure: 'one', targetId: 'treatmentModal', float: 'right', item: 'Other Treatment', status: false, status1: false, field: "Add Field", values: [], width: 'pad-treatments' },
            { structure: 'one', targetId: 'investigationModal', float: 'left', item: 'Investigation', status: false, status1: false, field: "Add Field", values: [], width: 'investigation' },
            { structure: 'one', targetId: 'surgeryModal', float: 'left', item: 'Surgery / Procedure', status: false, status1: false, field: "Add Field", values: [], width: 'surgery' },
            // {structure:'two',targetId:'followModal',float:'left',item:'Follow-up', status: false,status1:false,field:"Add Field",values:[],width:'follow'},
            // {structure:'two',targetId:'referModal',float:'left',item:'Refer', status: false,status1:false,field:"Add Field",values:[],width:'refered'},
            { structure: 'one', targetId: 'eyeModal', float: 'right', item: 'Eye Prescription', status: false, status1: false, field: "Add Field", values: [], width: 'pad-eye' },
            { structure: 'one', targetId: 'vaccinationModal', float: 'left', item: 'Vaccination', status: false, status1: false, field: "Add Field", values: [], width: 'vaccination' },
            { structure: 'one', targetId: 'instructionsModal', float: 'right', item: 'Instructions', status: false, status1: false, field: "Add Field", values: [], width: 'pad-instruc' }
            ]

            this.investigationStatus = [{
                name: 'Pathology',
                status: false,
                model: ''
            }, {
                name: 'X-Ray',
                status: false,
                model: ''
            }, {
                name: 'Ultrasound',
                status: false,
                model: ''
            }, {
                name: 'Doppler Studies',
                status: false,
                model: ''
            }, {
                name: 'ECG',
                status: false,
                model: ''
            }, {
                name: 'EEG',
                status: false,
                model: ''
            }, {
                name: 'TMT',
                status: false,
                model: ''
            }, {
                name: 'Echo',
                status: false,
                model: ''
            }, {
                name: 'CT-Scan',
                status: false,
                model: ''
            }, {
                name: 'MRI',
                status: false,
                model: ''
            },
            {
                name: 'Nerve Test',
                status: false,
                model: ''
            }, {
                name: 'Uroflowmetry',
                status: false,
                model: ''
            }, {
                name: 'Audiometry',
                status: false,
                model: ''
            }, {
                name: 'Mammography',
                status: false,
                model: ''
            }, {
                name: 'Bone Densitometry',
                status: false,
                model: ''
            }, {
                name: 'Eye Tests',
                status: false,
                model: ''
            }, {
                name: 'Lung Test',
                status: false,
                model: ''
            }, {
                name: 'Others',
                status: false,
                model: ''
            }
            ]

            this.condition = false
            this.findPresets = true
            this.symptomspreset = true
            this.diagnosispreset = true
            this.instructionpreset = true
            this.investigationpreset = true
            this.surgeryPreset = true
            this.othertabs = false

            this.inputBox = [{ name: 'Instruction 1', instructionsInput: '', inputInstruction: '' }];
            this.treatBox = ['Instruction 1'];

            this.medicationStatus[0].status = true
            // this.investigationStatus[0].status = true
            // this.numberOfInvestigationSelected = this.numberOfInvestigationSelected + 1

            this.treatmentStatus = [
            { name: 'Lifestyle Changes', status: false, SpecialInstruction: null, lifestyle: null },
            { name: 'Physiotherapy', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' },
            { name: 'Plaster', status: false, SpecialInstruction: null, Injury_Area: 'Injury Area', plaster_type: null, Duration: 'Duration' },
            { name: 'Fomentation', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' },
            { name: 'Gargle', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] },
            { name: 'Dressing', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] },
            { name: 'Bandage', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] },
            { name: 'Other', status: false, SpecialInstruction: null, treat: null }
            ]
            // this.treatmentStatus[0].status = true
            // this.totalOtherTreatment = 1
            this.treatmentStatus[2].div = []
            this.treatmentStatus[2].div.push({
                name: 'Plaster',
                status: false,
                SpecialInstruction: null,
                Injury_Area: 'Injury Area',
                plaster_type: null,
                Duration: 'Duration'
            })
            this.treatmentStatus[7].div = []
            this.treatmentStatus[7].div.push({
                name: 'Other',
                status: false,
                SpecialInstruction: null,
                Frequency: 'Frequency',
                Duration: 'Duration',
                med_name: []
            })

            /*------For Sphere-------*/
            let i: number = 0;
            let l = '0.00'
            while (i <= 13.50) {
                this.spherePositive.push(l);
                i = i + 0.25;
                l = i.toFixed(2);
            }
            let j: number = 0;
            let k = '0.00'
            while (j >= -13.50) {
                this.sphereNegative.push(k);
                j = j - 0.25;
                k = j.toFixed(2);
            }


            /*--------For Cylinder---------*/
            let c: number = 0;
            let cl
            while (c < 5.00) {
                c = c + 0.25;
                cl = c.toFixed(2);
                this.cylinderPositive.push(cl);
            }
            let cs: number = 0;
            let ck
            while (cs > -5.00) {
                cs = cs - 0.25;
                ck = cs.toFixed(2);
                this.cylinderNegative.push(ck);
            }

            /*--------For Axis---------*/
            let a: number = 1;
            while (a <= 180) {
                this.axisNumber.push(a);
                a = a + 1;
            }


            /*--------For Add---------*/
            let ad: number = 0;
            let adl
            while (ad < 3.50) {
                ad = ad + 0.25;
                adl = ad.toFixed(2);
                this.addNumber.push(adl);
                // this.addNumber.push(adl);
            }

            //medication harman
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

            this.investigation = {}

            this.suregeryOptions = [{
                name: 'Cardiology',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'BRONCHIAL INJURIES/FB',
                'CABG',
                'CARDIAC',
                'CARDIAC INJURES',
                'CARDIOTHORACIC',
                'CHEST INJURY',
                'CHEST SURGERY',
                'CLOSED HEART',
                'COIL CLOSURE',
                'COMPLEX ARRHYTHMIAS',
                'CONGENITAL (COMPLEX)',
                'CONGENITAL (SIMPLE)',
                'DEVICE CLOSURE',
                'DIAPHRAGMATIC INJURIES',
                'LUNGS',
                'OESOPHAGEAL INJURY/FB',
                'PERICARDIUM',
                'SIMPLE ARRHYTHMIAS',
                'VALVE REPAIR',
                'VALVE REPLACEMENT'
                ]
            },
            {
                name: 'Dental',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'BRACES (ORTHODONTICS)',
                'CROWN , BRIDGE & VENEER',
                'DENTAL IMPLANT',
                'DENTAL-TREATMENT FOR CHILDREN',
                'DENTURE',
                'ENDODONTICS',
                'FILLINGS & COSMETIC TREATMENTS',
                'GUM TREATMENT',
                'ORAL SURGERY',
                'OTHERS'
                ]
            },
            {
                name: 'ENT',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'EAR',
                'NOSE',
                'THROAT'
                ]
            },
            {
                name: 'Gastroenterology',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'EMERGENCY',
                'GALL BLADDER',
                'HERNIA',
                'LARGE / SMALL INTESTINE',
                'LARGE INTESTINE',
                'LIVER',
                'OESOPHAGUS',
                'PANCREAS',
                'SMALL INTESTINE',
                'SPLEEN',
                'STOMACH'
                ]
            },
            {
                name: 'General Surgery',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'GENERAL SURGERY',
                'HEAD & NECK',
                'ABDOMEN',
                'ADRENAL',
                'GALLBLADDER',
                'BREAST',
                'VASCULAR',
                'UROLOGY'
                ]
            },
            {
                name: 'Gynaecology/Obstetrics',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'OBSTETRICS',
                'GYNAECOLOGY'
                ]
            },
            // { name: 'Genito-Urinary', status: false, status1: false, div: [], database: [], sub_speciality_array: [] },
            { name: 'Neonatal', status: false, status1: false, div: [], database: [], sub_speciality_array: ['NEONATAL INTENSIVE CARE'] },
            {
                name: 'Neurology',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'ANEYRISMS',
                'BRAIN',
                'OTHER SURGERIES',
                'SOFT TISSUE and VASCULAR',
                'SPINAL SURGERIES',
                'SPINE',
                'TRIGEMINAL NEURALGIA'
                ]
            },
            {
                name: 'Oncology',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'ABDOMINAL WALL TUMOR',
                'BONE / SOFT TISSUE TUMORS',
                'BREAST TUMORS',
                'CA. CERVIX',
                'CA. EAR',
                'CA. ENDOMETRIUM',
                'CA. GALL BLADDER',
                'CA. GASTRO INTESTINAL TRACT',
                'CA. NASOPHARYNX',
                'CA. PARATHYROID',
                'CA. THYROID',
                'CA. TRACHEA',
                'CA. URINARY BLADDER',
                'CA. EYE/ MAXILLA /PARA NASAL SINUS',
                'CA.ORAL CAVITY',
                'CA.RECTUM',
                'CA.SOFT PALATE',
                'ESOPHAGUS',
                'GASTROINTESTINAL TRACT',
                'GENITO URINARY CANCER',
                'GENITO URINARY SYSTEM',
                'GYNAEC CANCERS',
                'GYNAECOLOGICAL ONCOLOGY',
                'HEAD & NECK',
                'LUNG',
                'LUNG CANCER',
                'PALLIATIVE SURGERIES',
                'RECONSTRUCTION',
                'RETROPERITONEAL TUMOR',
                'SKIN TUMORS',
                'SOFT TISSUE /BONE TUMORS . CHEST WALL',
                'SOFT TISSUE AND BONE TUMORS',
                'SPLEEN',
                'TESTES CANCER',
                'THORACIC AND MEDIASTINUM'
                ]
            },
            {
                name: 'Ophthalmology',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'CORNEA AND SCLERA',
                'LID SURGERY',
                'OPTHALMOLOGY',
                'ORBIT',
                'PEDIATRIC',
                'RETINA',
                'SQUINT CORRECTION',
                'VITREO-RETINA'
                ]
            },
            {
                name: 'Orthopaedics',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'AMPUTATIONS -SUPRA MAJOR',
                'AMPUTATIONS-INTERMEDIATE',
                'AMPUTATIONS-MAJOR',
                'AMPUTATIONS-MINOR',
                'BONE AND JOINT',
                'DAYCARE PROCEDURE',
                'DISLOCATIONS',
                'FEMORAL NECK FRACTURE',
                'FRACTURE CORRECTION',
                'FRACTURE K WIRE FIXATION',
                'FRACTURE-CLOSED PINNING DISPLACED PAEDIATRIC FRACTURES',
                'FRACTURE-EXTERNAL FIXATOR',
                'FRACTURE-NAILING / CRIF',
                'FRACTURE-PLATING-ORIF',
                'FRACTURE-TENSION BAND WIRING',
                'HIP',
                'INTERMEDIATE WOUND DEBRIDEMENT AND WASHOUT',
                'KNEE/HIP REPLACEMENT',
                'MAJOR WOUND DEBRIDEMENT AND WASHOUT',
                'MINOR/ SECOND LOOK WOUND DEBRIDEMENT AND WASHOUT',
                'PAEDIATRIC FRACTURE-NAILING / CRIF',
                'SOFT TISSUE SURGERY',
                'SPINE SURGERY',
                'TENDON REPAIR MAJOR',
                'TENDON TRANSFERS MULTIPLE',
                'TUMOR SURGERY',
                ]
            },
            {
                name: 'Paediatric',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'ABDOMEN',
                'CHEST',
                'CONGENITAL MALFORMATIONS',
                'GENITOURINARY',
                'HEAD AND NECK',
                'MISCELLANEOUS',
                'NEUROSURGERY',
                'ONCOLOGY'
                ]
            },
            {
                name: 'Urology',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'BLADDER AND PROSTATE',
                'CORRECTIVE SURGERIES',
                'KIDNEY',
                'LITHOTRIPSY',
                'OTHER CORRECTIVE SURGERIES/PROCEDURE',
                'RENAL',
                'RENAL CALCULI',
                'RENAL STONE SURGERY',
                'TESTIS',
                'URETER',
                'URETHRA'
                ]
            },
            {
                name: 'Vascular',
                status: false,
                status1: false,
                div: [],
                database: [],
                sub_speciality_array: [
                'ENDOVASCULAR',
                'LOWER LIMB BYPASS',
                'OPEN VASCULAR',
                'THROMBO EMBOLISM – LL',
                'THROMBO EMBOLISM – UL'
                ]
            },
            { name: 'Medical Emergencies', status: false, status1: false, div: [], database: [], sub_speciality_array: ['MEDICALEMERGENCIES'] }
            ]

            this.suregeryOptionsTop = []

            this.rightOD = {}
            // this.rightOD.sphere = '--.--'
            // this.rightOD.cylinder = '-.--'
            // this.rightOD.axis = '---'
            // this.rightOD.add = '-.--'
            // this.rightOD.pd = '--.-'
            this.rightOD.sphere = 0
            this.rightOD.cylinder = 0
            this.rightOD.axis = 0
            this.rightOD.add = 0
            this.rightOD.pd = 0
            this.leftOD = {}
            this.leftOD.sphere = 0
            this.leftOD.cylinder = 0
            this.leftOD.axis = 0
            this.leftOD.add = 0
            this.leftOD.pd = 0
            this.finalRightOD = {}
            this.finalLeftOD = {}
            // this.surgryTab(0);

            this.spo_range = []
            var valueSpo: number = 80
            while (valueSpo < 100) {
                this.spo_range.push(valueSpo)
                valueSpo++;
            }

            this.temperature_range = []
            var valueTem: number = 97
            while (valueTem < 107) {
                this.temperature_range.push(valueTem)
                valueTem++;
            }

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
            this.rbs_range = []
            var valueRbs: number = 50
            while (valueRbs < 401) {
                this.rbs_range.push(valueRbs)
                valueRbs++;
            }
            this.quantity_range = []
            var value: number = 1
            while (value < 21) {
                this.quantity_range.push(value)
                value++;
            }

            this.doctorClinicalObservation = []
            this.doctorSymptomsDB = []
            this.doctorDiagnosisDB = []
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

            this.doctorOtherTreatmentDB = []
            this.doctorOtherTreatmentBandageDB = []
            this.doctorOtherTreatmentOtherDB = []
            this.doctorOtherTreatmentGargleDB = []
            this.doctorOtherTreatmentDressingDB = []

            this.pathologySuggestionDB = []
            this.xraySuggestionDB = []
            this.ultraSoundSuggestionDB = []
            this.dopplerSuggestionDB = []
            this.ecgSuggestionDB = []
            this.eegSuggestionDB = []
            this.tmtSuggestionDB = []
            this.echoSuggestionDB = []
            this.ctScanSuggestionDB = []
            this.mriSuggestionDB = []
            this.nerveSuggestionDB = []
            this.audioSuggestionDB = []
            this.mammograaphySuggestionDB = []
            this.boneSuggestionDB = []
            this.eyeSuggestionDB = []
            this.lungSuggestionDB = []
            this.otherSuggestionDB = []

            this.instructionsSavedDB = []

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

            this.precondlength = 0

            this.medicationPresetShow = false
            this.instructionPresetShow = false
            this.surgeryPresetShow = false
            this.treatmentpreset = true
            this.otherTreatmentPresetShow = false
            this.investigationPresetShow = false

            this.totalMedicationPresetSelected = 0

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

            this.savedPrescriptionPadArray = []

            this.otherPre = []
            this.refer_status = false
            this.AllPrescriptionData()
            this.setAllShiftsForPreview()
            // this.doTranslation("translated_doctorName")
            // this.doTranslation("translated_clinicName")
            // this.doTranslation("translated_appointmentText")
            // this.doTranslation("translated_emergencyText")
            // this.doTranslation("translated_treatmentText")
            // this.doTranslation("translated_servicesText")
            // this.doTranslation("translated_footer")

            this.socket = io(environment.socket)

            if(this.consultingPatient.temp){
                this.bodyIndicator.temp = this.consultingPatient.temp
            }
            if(this.consultingPatient.pulse){
                this.bodyIndicator.pulse = this.consultingPatient.pulse
            }
            if(this.consultingPatient.bp){
                this.bodyIndicator.sys = this.consultingPatient.bp
            }
            if(this.consultingPatient.dia){
                this.bodyIndicator.dia = this.consultingPatient.dia
            }
            if(this.consultingPatient.rbs){
                this.bodyIndicator.rbs = this.consultingPatient.rbs
            }
            if(this.consultingPatient.spo){
                this.bodyIndicator.spo = this.consultingPatient.spo
            }
            this.setFields("bodyIndicators");

            var currentYear = new Date().getFullYear();
            this.experience = currentYear - parseInt(this.doctorData.practicing_since)
            this.UpdateConsultationInProgress()
        }

        UpdateConsultationInProgress(){
            var presc_id
            console.log(this.consultingPatient);
            if(this.consultingPatient.ID){
                presc_id = this.consultingPatient.ID
            }else{
                presc_id = this.consultingPatient.id
            }
            var object = {
                itemId: this.doctorData.itemId,
                reg_id: presc_id,
                registration_id: this.consultingPatient.id,
                presc_id:this.consultingPatient.ID
            }
            this.userService.UpdateConsultationInProgress(object).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    localStorage['doctorDetails']=JSON.stringify(data.data)
                    this.socket.emit('patientSelected',{
                        room_id: this.doctorData.smart_assistant_id
                    })
                }
            }, err => {
                console.log(err);
            })
        }

        ngOnDestroy(){
            /////////////////SOCKET ON//////////////////////        
            this.loading = true
            var object = {
                itemId: this.doctorData.itemId,
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

        getClass(i) {
            if (this.prescList[i].status == true) {
                return 'active'
            } else {
                return ''
            }
        }

        removeTreatbox() {
            if (this.treatBox.length > 0) {
                this.treatBox.splice(this.treatBox.length - 1, 1);
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
                        for (var j = 0; j < this.doctorPresetArray.length; j++) {
                            if(this.doctorPresetArray[j].status == true){
                                var occurance : number = 0
                                for (var k = 0; k < this.doctorPresetArray[j].preset_array.length; k++) {
                                    if(data==this.doctorPresetArray[j].preset_array[k].name){
                                        this.doctorPresetArray[j].preset_array[k].i_presetLength = this.doctorPresetArray[j].preset_array[k].i_presetLength - 1
                                        occurance ++
                                    }
                                }
                                this.doctorPresetArray[j].i_presetLength = this.doctorPresetArray[j].i_presetLength - occurance
                                if(this.doctorPresetArray[j].i_presetLength == 0){
                                    this.doctorPresetArray[j].status = false
                                }
                            }
                        }
                    }
                }
            }
            console.log(this.totalMedications)
        }

        mediClass(i) {
            if (this.medicationStatus[i].status == true) {
                return 'active'
            } else {
                return ''
            }
        }

        treatTab(i) {
            if (this.treatmentStatus[i].status == false) {
                if (this.totalOtherTreatment < 4) {
                    this.treatab = i
                    this.treatmentStatus[i].status = !this.treatmentStatus[i].status
                    // if (i != 7) {
                        this.totalOtherTreatment = this.totalOtherTreatment + 1
                        // }
                    } else {
                        this.toastr.warning("Maximum items can be 4", "Warning")
                    }
                } else {
                    this.treatab = i
                    this.treatmentStatus[i].status = !this.treatmentStatus[i].status
                    if (this.treatmentStatus[i].i_presetLength) {
                        for (var j = 0; j < this.treatmentStatus.length; j++) {
                            if (this.treatmentStatus[j].i_presetValue == this.treatmentStatus[i].i_presetValue && i != j) {
                                this.treatmentStatus[j].i_presetLength = this.treatmentStatus[j].i_presetLength - 1
                            }
                        }
                        this.treatmentStatus[i].i_presetLength = this.treatmentStatus[i].i_presetLength - 1
                        if (this.treatmentStatus[i].i_presetLength == 0) {
                            this.presetArrayOtherTreatment[this.treatmentStatus[i].i_presetValue].status = false
                        }
                    }
                    if (i == 7) {
                        this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[7].div.length
                        this.treatmentStatus[7].div = []
                        this.treatmentStatus[7].div.push({
                            name: 'Other',
                            status: false,
                            SpecialInstruction: null,
                            Frequency: 'Frequency',
                            Duration: 'Duration',
                            med_name: []
                        })
                    } else if (i == 2) {
                        this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[2].div.length
                        this.treatmentStatus[2].div = []
                        this.treatmentStatus[2].div.push({
                            name: 'Plaster',
                            status: false,
                            SpecialInstruction: null,
                            Injury_Area: 'Injury Area',
                            plaster_type: null,
                            Duration: 'Duration'
                        })
                    } else if (i == 0) {
                        this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[0].lifestyle.length
                        this.treatmentStatus[0] = { name: 'Lifestyle Changes', status: false, SpecialInstruction: null, lifestyle: null }
                    } else if (i == 1) {
                        this.totalOtherTreatment = this.totalOtherTreatment - 1
                        this.treatmentStatus[1] = { name: 'Physiotherapy', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' }
                    } else if (i == 3) {
                        this.totalOtherTreatment = this.totalOtherTreatment - 1
                        this.treatmentStatus[3] = { name: 'Fomentation', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' }
                    } else if (i == 4) {
                        this.totalOtherTreatment = this.totalOtherTreatment - 1
                        this.treatmentStatus[4] = { name: 'Gargle', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] }
                    } else if (i == 5) {
                        this.totalOtherTreatment = this.totalOtherTreatment - 1
                        this.treatmentStatus[5] = { name: 'Dressing', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] }
                    } else if (i == 6) {
                        this.totalOtherTreatment = this.totalOtherTreatment - 1
                        this.treatmentStatus[6] = { name: 'Bandage', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] }
                    }
                }
                console.log(this.totalOtherTreatment)
            }

            treatClass(i) {
                if (this.treatmentStatus[i].status == true) {
                    return 'active'
                } else {
                    return ''
                }
            }

            invesClass(i) {
                if (this.investigationStatus[i].status == true) {
                    return 'active'
                } else {
                    return ''
                }
            }

            incrementTimer() {
                if (this.seconds < 59) {
                    this.seconds = this.seconds + 1
                } else {
                    this.seconds = 0
                    this.minutes = this.minutes + 1
                }
            }

            prescListStatusChange(i) {
                this.prescList[i].status = !this.prescList[i].status
                if (this.prescList[i].status == true) {
                    this.prescList1.push(this.prescList[i])
                } else {
                    for (var ii = 0; ii < this.prescList1.length; ii++) {
                        if (this.prescList1[ii].item == this.prescList[i].item) {
                            this.prescList1.splice(ii, 1)
                            return
                        }
                    }
                }
            }

            saveSideBarFields() {
                this.prescList2 = []
                for (var i = 0; i < this.prescList.length; i++) {
                    if (this.prescList[i].status == true) {
                        this.prescList2.push(this.prescList[i])
                    }
                }
                var object = {
                    doctor_id: this.doctorData.itemId,
                    prescription_fields: this.prescList2
                }
                console.log(object)
                this.userService.AddDoctorPrescriptionFields(object).subscribe(data => {
                    console.log(data)
                    if (data.response == true) {
                        this.getDoctorPrescriptionFields(this.doctorData.itemId)
                    }
                }, err => {
                    console.log(err);
                })
            }

            AddDoctorSurgeryArray() {
                var object = {
                    doctor_id: this.doctorData.itemId,
                    suregeryOptions: this.suregeryOptions,
                    suregeryOptionsTop: this.suregeryOptionsTop,
                }
                console.log(object)
                this.userService.AddDoctorSurgeryArray(object).subscribe(data => {
                    console.log(data)
                    // if (data.response == true) {
                        //     this.GetDoctorSurgeryArray(this.doctorData.itemId)
                        // }
                    }, err => {
                        console.log(err);
                    })
            }

            cancelSideBarFields() {
                this.prescList1 = []
                for (var i = 0; i < this.prescList2.length; i++) {
                    this.prescList1.push(this.prescList2[i])
                }
            }

            setPopUpValues(data, type, i) {
                if (type == 'preconditions' && i!=9) {
                    var length = this.precondlength + this.otherPre.length
                    console.log(this.precondlength,this.otherPre.length)
                    var text = this.preCondMdlArray[i].text
                    if (data.status == false) {
                        if (length <= 3) {
                            this.preCondSelected.push(text);
                            this.precondlength = this.precondlength + 1
                            this.preCondMdlArray[i].status = true
                        } else {
                            this.toastr.warning("Maximum items can be 4", "Warning")
                        }
                    } else {
                        var index = this.preCondSelected.indexOf(text);
                        this.precondlength = this.precondlength - 1
                        this.preCondMdlArray[i].status = false
                        if (index > -1) {
                            this.preCondSelected.splice(index, 1);
                        }
                    }
                } else if (type == 'allergy') {
                    if (data.status == false) {
                        var Allergylength
                        if (this.otherAllergy) {
                            Allergylength = this.allergySelected.length + this.otherAllergy.length
                        } else {
                            Allergylength = this.allergySelected.length
                        }
                        if (Allergylength <= 3) {
                            if (data.purpose != 'more') {
                                this.allergySelected.push(data.text);
                                data.status = true
                            } else {}
                        } else {
                            data.status = false;
                            this.toastr.warning("Maximum items can be 4", "Warning")
                            // this.preCondMdlArray[i].status = false;
                        }
                    } else {
                        var index = this.allergySelected.indexOf(data.text);
                        data.status = false
                        if (index > -1) {
                            this.allergySelected.splice(index, 1);
                        }
                    }
                }
                console.log(this.allergySelected);
                console.log(this.bodyIndicatorSelected);
                console.log(this.preCondSelected);
            }

            // setPopUpValues(data, type, i) {
                //     if (data) {
                    //         var purpose = data.purpose;
                    //         var text = data.text;
                    //         var dataIndex = i;
                    //         data.status = !data.status;
                    //     }
                    //     if (type == 'preconditions') {
                        //         if (data.status == true) {
                            //             if (this.precondlength <= 3) {
                                //                 this.precondlength = this.precondlength + 1
                                //                 if (purpose != 'more') {
                                    //                     this.preCondSelected.push(text);
                                    //                 } else {
                                        //                     this.preCondMdlArray[i].status = !this.preCondMdlArray[i].status
                                        //                 }
                                        //             } else {
                                            //                 this.toastr.warning("Maximum items can be 4", "Warning")
                                            //                 this.preCondMdlArray[i].status = false;
                                            //             }
                                            //         } else {
                                                //             var index = this.preCondSelected.indexOf(text);
                                                //             if (index > -1) {
                                                    //                 this.preCondSelected.splice(index, 1);
                                                    //                 this.precondlength = this.precondlength - 1
                                                    //             }
                                                    //         }
                                                    //     } else if (type == 'allergy') {
                                                        //         if (data.status == true) {
                                                            //             var Allergylength
                                                            //             if (this.otherAllergy) {
                                                                //                 Allergylength = this.allergySelected.length + this.otherAllergy.length
                                                                //             } else {
                                                                    //                 Allergylength = this.allergySelected.length
                                                                    //             }
                                                                    //             if (Allergylength <= 3) {
                                                                        //                 if (purpose != 'more') {
                                                                            //                     this.allergySelected.push(text);
                                                                            //                 } else {}
                                                                            //             } else {
                                                                                //                 data.status = false;
                                                                                //                 this.toastr.warning("Maximum items can be 4", "Warning")
                                                                                //                 // this.preCondMdlArray[i].status = false;
                                                                                //             }
                                                                                //         } else {
                                                                                    //             var index = this.allergySelected.indexOf(text);
                                                                                    //             if (index > -1) {
                                                                                        //                 this.allergySelected.splice(index, 1);
                                                                                        //             }
                                                                                        //         }
                                                                                        //     }
                                                                                        //     console.log(this.allergySelected);
                                                                                        //     console.log(this.bodyIndicatorSelected);
                                                                                        //     console.log(this.preCondSelected);
                                                                                        // }

                                                                                        yesform() {
                                                                                            if (this.condition == true) {
                                                                                                this.condition = false;
                                                                                            } else {
                                                                                                this.condition = true;
                                                                                            }
                                                                                        }
                                                                                        precmodalclick(i) {
                                                                                            this.precmodalActive = i;
                                                                                        }
                                                                                        precClass(i) {
                                                                                            if (i == this.precmodalActive) {
                                                                                                return 'active'
                                                                                            }
                                                                                        }
                                                                                        findingPresets() {
                                                                                            if (this.findPresets == true) {
                                                                                                this.findPresets = false
                                                                                            } else {
                                                                                                this.findPresets = true
                                                                                            }
                                                                                        }
                                                                                        symPresets() {
                                                                                            if (this.symptomspreset == true) {
                                                                                                this.symptomspreset = false
                                                                                            } else {
                                                                                                this.symptomspreset = true
                                                                                            }
                                                                                        }
                                                                                        diagPresets() {
                                                                                            if (this.diagnosispreset == true) {
                                                                                                this.diagnosispreset = false
                                                                                            } else {
                                                                                                this.diagnosispreset = true
                                                                                            }
                                                                                        }
                                                                                        instrucPresets() {
                                                                                            this.instructionpreset = !this.instructionpreset
                                                                                        }
                                                                                        addTextbox(index) {
                                                                                            if (this.inputBox[index].inputInstruction.length > 0 && this.inputBox[index].inputInstruction) {
                                                                                                this.inputBox[index].instructionsInput = this.inputBox[index].inputInstruction[0].value
                                                                                                var i = 3,
                                                                                                j;
                                                                                                if (this.inputBox.length < i) {
                                                                                                    var boolean = false
                                                                                                    for (var i = 0; i < this.inputBox.length; i++) {
                                                                                                        if (this.inputBox[i].instructionsInput == '' || this.inputBox[i].instructionsInput == null) {
                                                                                                            boolean = true
                                                                                                            this.toastr.warning("Instruction cant be empty", "Warning")
                                                                                                            return;
                                                                                                        }
                                                                                                    }
                                                                                                    if (boolean == false) {
                                                                                                        j = this.inputBox.length + 1;
                                                                                                        this.inputBox.push({
                                                                                                            name: 'Instruction ' + j,
                                                                                                            instructionsInput: '',
                                                                                                            inputInstruction: ''
                                                                                                        })
                                                                                                    }
                                                                                                } else {
                                                                                                    this.toastr.warning("Maximum items cab be 3", "Warning")
                                                                                                }
                                                                                            } else {
                                                                                                this.toastr.warning("Instruction cant be empty", "Warning")
                                                                                            }
                                                                                        }

                                                                                        removeTextbox(i) {
                                                                                            if (this.inputBox[i].i_presetLength) {
                                                                                                this.inputBox[i].i_presetLength = this.inputBox[i].i_presetLength - 1
                                                                                                for (var j = 0; j < this.inputBox.length; j++) {
                                                                                                    if (this.inputBox[i].i_presetValue == this.inputBox[j].i_presetValue && i != j) {
                                                                                                        this.inputBox[j].i_presetLength = this.inputBox[j].i_presetLength - 1
                                                                                                    }
                                                                                                }
                                                                                                if (this.inputBox[i].i_presetLength == 0) {
                                                                                                    this.presetArrayInstruction[this.inputBox[i].i_presetValue].status = false
                                                                                                }
                                                                                            }
                                                                                            if (this.inputBox.length > 1) {
                                                                                                this.inputBox.splice(i, 1);
                                                                                            } else {
                                                                                                this.inputBox = [{ name: 'Instruction 1', instructionsInput: '', inputInstruction: '' }];
                                                                                                for (var j = 0; j < this.presetArrayInstruction.length; j++) {
                                                                                                    this.presetArrayInstruction[j].status = false
                                                                                                }
                                                                                                $("#instructionsModal").modal("hide");
                                                                                            }
                                                                                        }
                                                                                        treatPresets() {
                                                                                            if (this.treatmentpreset == true) {
                                                                                                this.treatmentpreset = false
                                                                                            } else {
                                                                                                this.treatmentpreset = true
                                                                                            }
                                                                                        }
                                                                                        addTreatbox() {
                                                                                            var i = 3,
                                                                                            j;
                                                                                            if (this.treatBox.length < i) {
                                                                                                j = this.treatBox.length + 1;
                                                                                                this.treatBox.push('Instruction ' + j)
                                                                                            }
                                                                                        }
                                                                                        medicatPresets() {
                                                                                            if (this.medicationpreset == true) {
                                                                                                this.medicationpreset = false
                                                                                            } else {
                                                                                                this.medicationpreset = true
                                                                                            }
                                                                                        }
                                                                                        // medicaTab(i) {
                                                                                            //     this.medicatab = i
                                                                                            // }
                                                                                            // mediClass(i) {
                                                                                                //     if (i == this.medicatab) {
                                                                                                    //         return 'active'
                                                                                                    //     } else if (i < this.medicatab) {
                                                                                                        //         return 'completed'
                                                                                                        //     }
                                                                                                        // }
                                                                                                        prescField() {
                                                                                                            if (this.showhideaddfiled == 'activemorefield') {
                                                                                                                this.showhideaddfiled = ''
                                                                                                            } else {
                                                                                                                this.showhideaddfiled = 'activemorefield'
                                                                                                            }
                                                                                                        }
                                                                                                        findWithAttr(array, attr, value) {
                                                                                                            for (var i = 0; i < array.length; i += 1) {
                                                                                                                if (array[i][attr] === value) {
                                                                                                                    return i;
                                                                                                                }
                                                                                                            }
                                                                                                            return -1;
                                                                                                        }

                                                                                                        setFields(flag) {
                                                                                                            if (flag == 'preconditions') {
                                                                                                                this.preConditionComplete = true;
                                                                                                                if (this.preCondSelected.length <= 4) {
                                                                                                                    this.preCondSelected = []
                                                                                                                    this.precondlength = 0
                                                                                                                    for (var j = 0; j < this.preCondMdlArray.length; j++) {
                                                                                                                        if (this.preCondMdlArray[j].status == true) {
                                                                                                                            this.preCondSelected.push(this.preCondMdlArray[j].text)
                                                                                                                            this.precondlength ++
                                                                                                                        }
                                                                                                                    }
                                                                                                                    this.finalPreConditions = []
                                                                                                                    if (this.otherPre.length > 0) {
                                                                                                                        var newArray = []
                                                                                                                        for (var i = 0; i < this.otherPre.length; i++) {
                                                                                                                            newArray.push(this.otherPre[i].value)
                                                                                                                        }
                                                                                                                        this.finalPreConditions = this.finalPreConditions.concat(newArray)
                                                                                                                    }
                                                                                                                    for (var i = 0; i < this.preCondSelected.length; i++) {
                                                                                                                        this.finalPreConditions.push(this.preCondSelected[i])
                                                                                                                        this.SaveOtherTreatmentSuggestions('Pre Condition', this.finalPreConditions[i])
                                                                                                                    }
                                                                                                                    this.GetSavedSuggestions('Pre Condition')
                                                                                                                    this.doTranslation("translated_PreCondHeading")
                                                                                                                }
                                                                                                            } else if (flag == 'allergy') {
                                                                                                                this.allergyComplete = true;
                                                                                                                if (this.allergySelected.length <= 4) {
                                                                                                                    console.log("dsad")
                                                                                                                    this.allergySelected = []
                                                                                                                    for (var i = 0; i < this.AllergyArray.length; i++) {
                                                                                                                        for (var j = 0; j < this.AllergyArray[i].allergySource.length; j++) {
                                                                                                                            if (this.AllergyArray[i].allergySource[j].status == true) {
                                                                                                                                this.allergySelected.push(this.AllergyArray[i].allergySource[j].text)
                                                                                                                            }
                                                                                                                        }
                                                                                                                        this.AllergyArray[i]
                                                                                                                    }
                                                                                                                    this.finalAllergy = []
                                                                                                                    if (this.otherAllergy && this.otherAllergy.length > 0) {
                                                                                                                        var newArray = []
                                                                                                                        for (var i = 0; i < this.otherAllergy.length; i++) {
                                                                                                                            newArray.push(this.otherAllergy[i].value)
                                                                                                                        }
                                                                                                                        this.finalAllergy = this.finalAllergy.concat(newArray)
                                                                                                                    }
                                                                                                                    for (var i = 0; i < this.allergySelected.length; i++) {
                                                                                                                        this.finalAllergy.push(this.allergySelected[i])
                                                                                                                        this.SaveOtherTreatmentSuggestions('Allergy', this.finalAllergy[i])
                                                                                                                    }
                                                                                                                    this.GetSavedSuggestions('Allergy')
                                                                                                                    this.doTranslation("translated_allergyHeading")
                                                                                                                }
                                                                                                            } else if (flag == 'bodyIndicators') {
                                                                                                                this.bodyIndicatorSelected = [];
                                                                                                                if (this.bodyIndicator.temp != 'Select') {
                                                                                                                    if (this.bodyIndicatorSelected.indexOf('Temp: ' + this.bodyIndicator.temp + 'F') == -1) {
                                                                                                                        this.bodyIndicatorSelected.push('Temp: ' + this.bodyIndicator.temp + 'F');
                                                                                                                    }
                                                                                                                }
                                                                                                                if (this.bodyIndicator.sys != 'Select' && this.bodyIndicator.dia != 'Select') {
                                                                                                                    if (this.bodyIndicatorSelected.indexOf('BP: ' + this.bodyIndicator.sys + '/' + this.bodyIndicator.dia) == -1) {
                                                                                                                        this.bodyIndicatorSelected.push('BP: ' + this.bodyIndicator.sys + '/' + this.bodyIndicator.dia + 'mmHg');
                                                                                                                    }
                                                                                                                }
                                                                                                                if (this.bodyIndicator.pulse != 'Select') {
                                                                                                                    if (this.bodyIndicatorSelected.indexOf('Pulse: ' + this.bodyIndicator.pulse) == -1) {
                                                                                                                        this.bodyIndicatorSelected.push('Pulse: ' + this.bodyIndicator.pulse + 'pm');
                                                                                                                    }
                                                                                                                }
                                                                                                                if (this.bodyIndicator.spo != 'Select') {
                                                                                                                    if (this.bodyIndicatorSelected.indexOf('SpO2: ' + this.bodyIndicator.spo) == -1) {
                                                                                                                        this.bodyIndicatorSelected.push('SpO2: ' + this.bodyIndicator.spo + "%");
                                                                                                                    }
                                                                                                                }
                                                                                                                if (this.bodyIndicator.rbs != 'Select') {
                                                                                                                    if (this.bodyIndicatorSelected.indexOf('RBS: ' + this.bodyIndicator.rbs) == -1) {
                                                                                                                        this.bodyIndicatorSelected.push('RBS: ' + this.bodyIndicator.rbs + "mg/dL");
                                                                                                                    }
                                                                                                                }
                                                                                                                if (!this.bodyIndicatorComplete) {
                                                                                                                    this.bodyIndicatorComplete = true;
                                                                                                                    this.doTranslation("translated_BIHeading")
                                                                                                                }
                                                                                                            } else if (flag == 'findings') {
                                                                                                                if (this.itemsfinding.length > 0) {
                                                                                                                    this.findingsSelected = this.itemsfinding;
                                                                                                                    console.log(this.findingsSelected);
                                                                                                                    if (!this.findingsComplete) {
                                                                                                                        this.findingsComplete = true;
                                                                                                                    }
                                                                                                                    this.saveClinicalObservations();
                                                                                                                    if (this.filter) {
                                                                                                                        for (var i = 0; i < this.findingsSelected.length; i++) {
                                                                                                                            if(this.findingsSelected[i].value!=null && this.findingsSelected[i].value !=''){
                                                                                                                                this.SaveDoctorOtherPreset('Patient Complaints', this.findingsSelected[i].value)
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                    this.GetDoctorOtherPreset('Patient Complaints')
                                                                                                                    this.doTranslation("translated_PTHeading")
                                                                                                                }
                                                                                                            } else if (flag == 'symptoms') {
                                                                                                                if (this.itemsymptoms.length > 0) {
                                                                                                                    this.symptomsSelected = this.itemsymptoms;
                                                                                                                    console.log(this.symptomsSelected);
                                                                                                                    if (!this.symptomsComplete) {
                                                                                                                        this.symptomsComplete = true;
                                                                                                                    }
                                                                                                                    this.saveSymptoms();
                                                                                                                    if (this.filterSymptoms) {
                                                                                                                        for (var i = 0; i < this.symptomsSelected.length; i++) {
                                                                                                                            if(this.symptomsSelected[i].value!=null && this.symptomsSelected[i].value !=''){
                                                                                                                                this.SaveDoctorOtherPreset('Symptoms', this.symptomsSelected[i].value)           
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                    this.GetDoctorOtherPreset('Symptoms')
                                                                                                                    this.doTranslation("translated_sympHeading")
                                                                                                                }
                                                                                                            } else if (flag == 'diagnosis') {
                                                                                                                if (this.itemsdiagnosis.length > 0) {
                                                                                                                    this.diagnosisSelected = this.itemsdiagnosis;
                                                                                                                    console.log(this.diagnosisSelected);
                                                                                                                    if (!this.diagnosisComplete) {
                                                                                                                        this.diagnosisComplete = true;
                                                                                                                    }
                                                                                                                    this.saveDiagnosis();
                                                                                                                    if (this.filterDiagnosis) {
                                                                                                                        for (var i = 0; i < this.diagnosisSelected.length; i++) {
                                                                                                                            if(this.diagnosisSelected[i].value!=null && this.diagnosisSelected[i].value !=''){
                                                                                                                                this.SaveDoctorOtherPreset('Diagnosis', this.diagnosisSelected[i].value)
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                    this.doTranslation("translated_diagnosisHeading")
                                                                                                                }
                                                                                                            } else if (flag == 'instructions') {
                                                                                                                console.log(this.inputBox)
                                                                                                                this.instructionsComplete = false
                                                                                                                var boolean = false
                                                                                                                for (var i = 0; i < this.inputBox.length; i++) {
                                                                                                                    if (this.inputBox[i].inputInstruction && this.inputBox[i].inputInstruction.length > 0) {
                                                                                                                        this.inputBox[i].instructionsInput = this.inputBox[i].inputInstruction[0].value
                                                                                                                    }
                                                                                                                    if (this.inputBox[i].instructionsInput == '' || this.inputBox[i].instructionsInput == null) {
                                                                                                                        boolean = true
                                                                                                                        this.toastr.warning("Instruction cant be empty", "Warning")
                                                                                                                        return;
                                                                                                                    }
                                                                                                                }
                                                                                                                if (boolean == false) {
                                                                                                                    if (this.inputBox.length <= 3) {
                                                                                                                        this.instructionsSelected = []
                                                                                                                        for (var i = 0; i < this.inputBox.length; i++) {
                                                                                                                            if (this.instructionPresetShow == true) {
                                                                                                                                if (this.presentNameInstrcutions != undefined && this.presentNameInstrcutions != '' && this.presentNameInstrcutions != null) {
                                                                                                                                    if (this.presentNameInstrcutions.trim().length < 1) {
                                                                                                                                        this.toastr.warning("Invalid preset name", "Warning")
                                                                                                                                        boolean = true
                                                                                                                                        return;
                                                                                                                                    }
                                                                                                                                } else {
                                                                                                                                    this.toastr.warning("Invalid preset name", "Warning")
                                                                                                                                    boolean = true
                                                                                                                                    return;
                                                                                                                                }
                                                                                                                                this.SaveDoctorPresetArray(this.presentNameInstrcutions.trim(), this.inputBox, 'Instructions')
                                                                                                                            }
                                                                                                                            this.instructionsSelected.push(this.inputBox[i].instructionsInput)
                                                                                                                            this.SaveOtherTreatmentSuggestions('Instruction', this.inputBox[i].instructionsInput)
                                                                                                                            this.instructionPresetShow = false
                                                                                                                            this.presentNameInstrcutions = null
                                                                                                                        }
                                                                                                                        this.instructionsComplete = true;
                                                                                                                        this.doTranslation("translated_instHeading")
                                                                                                                    }
                                                                                                                }
                                                                                                            } else if (flag == 'investigation') {
                                                                                                                if (this.investigationPresetShow == true) {
                                                                                                                    if (this.presentNameInvestigation != undefined && this.presentNameInvestigation != '' && this.presentNameInvestigation != null) {
                                                                                                                        if (this.presentNameInvestigation.trim().length < 1) {
                                                                                                                            this.toastr.warning("Invalid preset name", "Warning")
                                                                                                                            boolean = true
                                                                                                                            return;
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        this.toastr.warning("Invalid preset name", "Warning")
                                                                                                                        boolean = true
                                                                                                                        return;
                                                                                                                    }
                                                                                                                    // for (var i = 0; i < this.investigationArray.length; i++) {
                                                                                                                        this.SaveDoctorPresetArray(this.presentNameInvestigation.trim(), this.investigationArray, 'Investigation')           
                                                                                                                        // this.investigationArray[i]
                                                                                                                        // }
                                                                                                                    }
                                                                                                                    this.investigationIndicatorComplete = true;
                                                                                                                    this.investigationPresetShow = false
                                                                                                                    this.presentNameInvestigation = null
                                                                                                                    this.doTranslation("translated_invHeading")
                                                                                                                } else if (flag == 'surgery') {
                                                                                                                    var boolean = false
                                                                                                                    this.surgeryComplete = false
                                                                                                                    for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                                                                                                                        for (var j = 0; j < this.suregeryOptionsTop[i].div.length; j++) {
                                                                                                                            if (this.suregeryOptionsTop[i].status == true) {
                                                                                                                                if (this.suregeryOptionsTop[i].div[j].sub_speciality.trim().length > 0 &&
                                                                                                                                    this.suregeryOptionsTop[i].div[j].procedure_name.length > 0) {
                                                                                                                                    boolean = true
                                                                                                                            } else {
                                                                                                                                this.toastr.warning("Sub speciality or procedure name invalid", "Warning")
                                                                                                                                return;
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                                if (this.surgeryPresetShow == true) {
                                                                                                                    if (this.presentNameSurgery != undefined && this.presentNameSurgery != '' && this.presentNameSurgery != null) {
                                                                                                                        if (this.presentNameSurgery.trim().length < 1) {
                                                                                                                            this.toastr.warning("Invalid preset name", "Warning")
                                                                                                                            boolean = true
                                                                                                                            return;
                                                                                                                        }
                                                                                                                    } else {
                                                                                                                        this.toastr.warning("Invalid preset name", "Warning")
                                                                                                                        boolean = true
                                                                                                                        return;
                                                                                                                    }
                                                                                                                    var array = []
                                                                                                                    for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                                                                                                                        if (this.suregeryOptionsTop[i].status == true) {
                                                                                                                            array.push(this.suregeryOptionsTop[i])
                                                                                                                        }
                                                                                                                    }
                                                                                                                    if (array.length > 0) {
                                                                                                                        this.SaveDoctorPresetArray(this.presentNameSurgery.trim(), array, 'Surgery')
                                                                                                                    }
                                                                                                                }
                                                                                                                if (boolean == true) {
                                                                                                                    this.surgerySelectedArray = []
                                                                                                                    for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                                                                                                                        for (var j = 0; j < this.suregeryOptionsTop[i].div.length; j++) {
                                                                                                                            if (this.suregeryOptionsTop[i].status == true) {
                                                                                                                                this.surgerySelectedArray.push(Object.assign({},this.suregeryOptionsTop[i].div[j]))
                                                                                                                                // this.SaveOtherTreatmentSuggestions(this.suregeryOptionsTop[i].name, this.suregeryOptionsTop[i].div[j].procedure_name[0].value)
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                    this.surgeryComplete = true;
                                                                                                                    this.surgeryPresetShow = false
                                                                                                                    this.presentNameSurgery = null
                                                                                                                    this.AddDoctorSurgeryArray()     
                                                                                                                    this.SaveUniqueMedicinesForAnalytics('Surgery',this.suregeryOptionsTop)             
                                                                                                                    this.doTranslation("translated_surgHeading")
                                                                                                                }
                                                                                                                console.log(this.surgerySelectedArray)
                                                                                                            } else if (flag == 'follow') {
                                                                                                                this.followDaysComplete = false
                                                                                                                if (this.followUpDays != 0) {
                                                                                                                    this.finalfollowUpDays = this.followUpDays
                                                                                                                    this.followUpDate.setDate(new Date().getDate() + this.finalfollowUpDays);
                                                                                                                    var options = { month: 'short' };
                                                                                                                    this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
                                                                                                                    this.followUpDay = this.followUpDate.getDate()
                                                                                                                    this.followUpYear = this.followUpDate.getFullYear()
                                                                                                                    this.followDaysComplete = true
                                                                                                                }
                                                                                                            } else if (flag == 'vaccination') {
                                                                                                                this.vaccinationComplete = false
                                                                                                                this.finalCurrentVaccinationArray = []
                                                                                                                this.finalDueVaccinationArray = []
                                                                                                                if (this.currentVaccinationComplete == false && this.dueVaccinationComplete == false) {
                                                                                                                    this.toastr.warning("No value selected", "Warning")
                                                                                                                } else {
                                                                                                                    if (this.currentVaccinationComplete == true) {
                                                                                                                        for (var i = 0; i < this.tempCurrentVaccinationArray.length; i++) {
                                                                                                                            this.finalCurrentVaccinationArray.push(this.tempCurrentVaccinationArray[i])
                                                                                                                        }
                                                                                                                    }
                                                                                                                    if (this.dueVaccinationComplete == true) {
                                                                                                                        for (var i = 0; i < this.tempDueVaccinationArray.length; i++) {
                                                                                                                            this.finalDueVaccinationArray.push(this.tempDueVaccinationArray[i])
                                                                                                                        }
                                                                                                                    }
                                                                                                                    // else {
                                                                                                                        // this.vaccinationDate = null
                                                                                                                        // }
                                                                                                                        this.vaccinationComplete = true
                                                                                                                        this.doTranslation("translated_VaccinationHeading")
                                                                                                                    }
                                                                                                                } else if (flag == 'medication') {
                                                                                                                    this.tempMedicationArray = []
                                                                                                                    this.medicationComplete = false
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
                                                                                                                                this.SaveUniqueMedicinesForAnalytics(this.medication.tab[i].name, this.medication.tab[i].med_name[0].value)
                                                                                                                                // if (this.medication.tab[i].med_info) {
                                                                                                                                    //     if (this.medication.tab[i].med_info.length > 0) {
                                                                                                                                        //         this.saveMedicationSuggestion(this.medication.tab[i].name + "Info", this.medication.tab[i].med_info[0].value)
                                                                                                                                        //     }
                                                                                                                                        // }
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
                                                                                                                                    this.SaveUniqueMedicinesForAnalytics(this.medication.cap[i].name, this.medication.cap[i].med_name[0].value)
                                                                                                                                    // if (this.medication.cap[i].med_info) {
                                                                                                                                        //     if (this.medication.cap[i].med_info.length > 0) {
                                                                                                                                            //         this.saveMedicationSuggestion(this.medication.cap[i].name + "Info", this.medication.cap[i].med_info[0].value)
                                                                                                                                            //     }
                                                                                                                                            // }
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
                                                                                                                                        this.SaveUniqueMedicinesForAnalytics(this.medication.syp[i].name, this.medication.syp[i].med_name[0].value)
                                                                                                                                        // if (this.medication.syp[i].med_info) {
                                                                                                                                            //     if (this.medication.syp[i].med_info.length > 0) {
                                                                                                                                                //         this.saveMedicationSuggestion(this.medication.syp[i].name + "Info", this.medication.syp[i].med_info[0].value)
                                                                                                                                                //     }
                                                                                                                                                // }
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
                                                                                                                                            this.SaveUniqueMedicinesForAnalytics(this.medication.susp[i].name, this.medication.susp[i].med_name[0].value)
                                                                                                                                            // if (this.medication.susp[i].med_info) {
                                                                                                                                                //     if (this.medication.susp[i].med_info.length > 0) {
                                                                                                                                                    //         this.saveMedicationSuggestion(this.medication.susp[i].name + "Info", this.medication.susp[i].med_info[0].value)
                                                                                                                                                    //     }
                                                                                                                                                    // }
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
                                                                                                                                                this.SaveUniqueMedicinesForAnalytics(this.medication.emulsn[i].name, this.medication.emulsn[i].med_name[0].value)
                                                                                                                                                // if (this.medication.emulsn[i].name.med_info) {
                                                                                                                                                    //     if (this.medication.emulsn[i].name.med_info.length > 0) {
                                                                                                                                                        //         this.saveMedicationSuggestion(this.medication.emulsn[i].name + "Info", this.medication.emulsn[i].med_info[0].value)
                                                                                                                                                        //     }
                                                                                                                                                        // }
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
                                                                                                                                                    this.SaveUniqueMedicinesForAnalytics(this.medication.solution[i].name, this.medication.solution[i].med_name[0].value)
                                                                                                                                                    // if (this.medication.solution[i].med_info) {
                                                                                                                                                        //     if (this.medication.solution[i].med_info.length > 0) {
                                                                                                                                                            //         this.saveMedicationSuggestion(this.medication.solution[i].name + "Info", this.medication.solution[i].med_info[0].value)
                                                                                                                                                            //     }
                                                                                                                                                            // }
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
                                                                                                                                                        this.SaveUniqueMedicinesForAnalytics(this.medication.injection[i].name, this.medication.injection[i].med_name[0].value)
                                                                                                                                                        // if (this.medication.injection[i].med_info) {
                                                                                                                                                            //     if (this.medication.injection[i].med_info.length > 0) {
                                                                                                                                                                //         this.saveMedicationSuggestion(this.medication.injection[i].name + "Info", this.medication.injection[i].med_info[0].value)
                                                                                                                                                                //     }
                                                                                                                                                                // }
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
                                                                                                                                                            this.SaveUniqueMedicinesForAnalytics(this.medication.mouthwash[i].name, this.medication.mouthwash[i].med_name[0].value)
                                                                                                                                                            // if (this.medication.mouthwash[i].med_info) {
                                                                                                                                                                //     if (this.medication.mouthwash[i].med_info.length > 0) {
                                                                                                                                                                    //         this.saveMedicationSuggestion(this.medication.mouthwash[i].name + "Info", this.medication.mouthwash[i].med_info[0].value)
                                                                                                                                                                    //     }
                                                                                                                                                                    // }
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
                                                                                                                                                                this.SaveUniqueMedicinesForAnalytics(this.medication.powder[i].name, this.medication.powder[i].med_name[0].value)
                                                                                                                                                                // if (this.medication.powder[i].med_info) {
                                                                                                                                                                    //     if (this.medication.powder[i].med_info.length > 0) {
                                                                                                                                                                        //         this.saveMedicationSuggestion(this.medication.powder[i].name + "Info", this.medication.powder[i].med_info[0].value)
                                                                                                                                                                        //     }
                                                                                                                                                                        // }
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
                                                                                                                                                                    this.SaveUniqueMedicinesForAnalytics(this.medication.cream[i].name, this.medication.cream[i].med_name[0].value)
                                                                                                                                                                    // if (this.medication.cream[i].med_info) {
                                                                                                                                                                        //     if (this.medication.cream[i].med_info.length > 0) {
                                                                                                                                                                            //         this.saveMedicationSuggestion(this.medication.cream[i].name + "Info", this.medication.cream[i].med_info[0].value)
                                                                                                                                                                            //     }
                                                                                                                                                                            // }
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
                                                                                                                                                                        this.SaveUniqueMedicinesForAnalytics(this.medication.gel[i].name, this.medication.gel[i].med_name[0].value)
                                                                                                                                                                        // if (this.medication.gel[i].med_info) {
                                                                                                                                                                            //     if (this.medication.gel[i].med_info.length > 0) {
                                                                                                                                                                                //         this.saveMedicationSuggestion(this.medication.gel[i].name + "Info", this.medication.gel[i].med_info[0].value)
                                                                                                                                                                                //     }
                                                                                                                                                                                // }
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
                                                                                                                                                                            this.SaveUniqueMedicinesForAnalytics(this.medication.drops[i].name, this.medication.drops[i].med_name[0].value)
                                                                                                                                                                            // if (this.medication.drops[i].med_info) {
                                                                                                                                                                                //     if (this.medication.drops[i].med_info.length > 0) {
                                                                                                                                                                                    //         this.saveMedicationSuggestion(this.medication.drops[i].name + "Info", this.medication.drops[i].med_info[0].value)
                                                                                                                                                                                    //     }
                                                                                                                                                                                    // }
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
                                                                                                                                                                                this.SaveUniqueMedicinesForAnalytics(this.medication.aerosols[i].name, this.medication.aerosols[i].med_name[0].value)
                                                                                                                                                                                // if (this.medication.aerosols[i].med_info) {
                                                                                                                                                                                    //     if (this.medication.aerosols[i].med_info.length > 0) {
                                                                                                                                                                                        //         this.saveMedicationSuggestion(this.medication.aerosols[i].name + "Info", this.medication.aerosols[i].med_info[0].value)
                                                                                                                                                                                        //     }
                                                                                                                                                                                        // }
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
                                                                                                                                                                                    this.SaveUniqueMedicinesForAnalytics(this.medication.lotion[i].name, this.medication.lotion[i].med_name[0].value)
                                                                                                                                                                                    // if (this.medication.lotion[i].med_info) {
                                                                                                                                                                                        //     if (this.medication.lotion[i].med_info.length > 0) {
                                                                                                                                                                                            //         this.saveMedicationSuggestion(this.medication.lotion[i].name + "Info", this.medication.lotion[i].med_info[0].value)
                                                                                                                                                                                            //     }
                                                                                                                                                                                            // }
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
                                                                                                                                                                                        this.SaveUniqueMedicinesForAnalytics('Oitment', this.medication.ointment[i].med_name[0].value)
                                                                                                                                                                                        // if (this.medication.ointment[i].med_info) {
                                                                                                                                                                                            //     if (this.medication.ointment[i].med_info.length > 0) {
                                                                                                                                                                                                //         this.saveMedicationSuggestion('Oitment' + "Info", this.medication.ointment[i].med_info[0].value)
                                                                                                                                                                                                //     }
                                                                                                                                                                                                // }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                    if (boolean == false) {
                                                                                                                                                                                        if (this.totalMedicationPresetSelected > 0) {
                                                                                                                                                                                            for (var i = 0; i < this.doctorPresetArray.length; i++) {
                                                                                                                                                                                                if (this.doctorPresetArray[i].status && this.doctorPresetArray[i].status == true) {
                                                                                                                                                                                                    for (var j = 0; j < this.doctorPresetArray[i].newPresetArray.length; j++) {
                                                                                                                                                                                                        this.tempMedicationArray.push(this.doctorPresetArray[i].newPresetArray[j])
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                        if (this.medicationPresetShow == true) {
                                                                                                                                                                                            if (this.presentNameMedication != undefined && this.presentNameMedication != '' && this.presentNameMedication != null) {
                                                                                                                                                                                                if (this.presentNameMedication.trim().length < 1) {
                                                                                                                                                                                                    this.toastr.warning("Invalid preset name", "Warning")
                                                                                                                                                                                                    boolean = true
                                                                                                                                                                                                    return;
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    var object = {
                                                                                                                                                                                                        preset_name: this.presentNameMedication.trim(),
                                                                                                                                                                                                        preset_array: this.tempMedicationArray,
                                                                                                                                                                                                        doctor_id: this.doctorData.itemId
                                                                                                                                                                                                    }
                                                                                                                                                                                                    console.log(object)
                                                                                                                                                                                                    this.userService.SaveDoctorPreset(object).subscribe(data => {
                                                                                                                                                                                                        console.log(data)
                                                                                                                                                                                                        if (data.response == true) {
                                                                                                                                                                                                            this.medicationPresetShow = false
                                                                                                                                                                                                            this.presentNameMedication = null
                                                                                                                                                                                                            this.GetDoctorPreset();
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            // this.toastr.error(data.message, "Error")
                                                                                                                                                                                                            if (data.message == "Data already exists") {
                                                                                                                                                                                                                let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});

                                                                                                                                                                                                                dialogRef.afterClosed().subscribe(result => {
                                                                                                                                                                                                                    console.log('The dialog was closed');
                                                                                                                                                                                                                    if (result == "yes") {
                                                                                                                                                                                                                        var object = {
                                                                                                                                                                                                                            preset_name: this.presentNameMedication.trim(),
                                                                                                                                                                                                                            preset_array: this.tempMedicationArray,
                                                                                                                                                                                                                            doctor_id: this.doctorData.itemId,
                                                                                                                                                                                                                            update_status: true
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        console.log(object)
                                                                                                                                                                                                                        this.userService.SaveDoctorPreset(object).subscribe(data => {
                                                                                                                                                                                                                            if (data.response == true) {
                                                                                                                                                                                                                                this.medicationPresetShow = false
                                                                                                                                                                                                                                this.presentNameMedication = null
                                                                                                                                                                                                                                this.GetDoctorPreset();
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
}, err => {
    console.log(err);
})
}
} else {
    this.toastr.warning("Invalid preset name", "Warning")
    boolean = true
    return;
}
}
this.medicationComplete = true
$("#medicationModal").modal("hide");
this.doTranslation("translated_medication")
}
}
} else if (flag == 'eye_pres') {
    this.eyePresComplete = false
    if(this.rightOD.sphere ==null){
        this.rightOD.sphere = 0
    }
    if(this.rightOD.cylinder ==null){
        this.rightOD.cylinder = 0
    }
    if(this.rightOD.axis ==null){
        this.rightOD.axis = 0
    }
    if(this.rightOD.add ==null){
        this.rightOD.add = 0
    }
    if(this.rightOD.pd ==null){
        this.rightOD.pd = 0
    }
    if(this.rightOD.pd ==null){
        this.rightOD.pd = 0
    }
    if(this.leftOD.sphere ==null){
        this.leftOD.sphere = 0
    }
    if(this.leftOD.cylinder ==null){
        this.leftOD.cylinder = 0
    }
    if(this.leftOD.axis ==null){
        this.leftOD.axis = 0
    }
    if(this.leftOD.add ==null){
        this.leftOD.add = 0
    }
    if(this.leftOD.pd == null) {
        this.leftOD.pd = 0
    }    
    if (
        parseFloat(this.rightOD.sphere) == 0 && parseFloat(this.rightOD.cylinder) == 0 &&
        parseFloat(this.rightOD.axis) == 0 && parseFloat(this.rightOD.add) == 0 &&
        parseFloat(this.rightOD.pd) == 0 && parseFloat(this.rightOD.pd) == 0 &&
        parseFloat(this.leftOD.sphere) == 0 && parseFloat(this.leftOD.cylinder) == 0 &&
        parseFloat(this.leftOD.axis) == 0 && parseFloat(this.leftOD.add) == 0 &&
        parseFloat(this.leftOD.pd) == 0
        ) {
        this.toastr.warning("Invalid values of eye prescription", "Warning")
} else {
    if ((parseFloat(this.rightOD.sphere) < -20 || parseFloat(this.rightOD.sphere) > 20) ||
        (parseFloat(this.leftOD.sphere) < -20 || parseFloat(this.leftOD.sphere) > 20)) {
        this.toastr.warning("Sphere values should be between -20 to 20", "Warning")
    return
} else if ((parseFloat(this.rightOD.cylinder) < 0 || parseFloat(this.rightOD.cylinder) > 5) ||
    (parseFloat(this.leftOD.cylinder) < 0 || parseFloat(this.leftOD.cylinder) > 5)) {
    this.toastr.warning("Cylinder values should be between 0 to 5", "Warning")
    return
} else if ((parseFloat(this.rightOD.axis) < 0 || parseFloat(this.rightOD.axis) > 180) ||
    (parseFloat(this.leftOD.axis) < 0 || parseFloat(this.leftOD.axis) > 180)) {
    this.toastr.warning("Axis values should be between 1 to 180", "Warning")
    return
} else if (parseFloat(this.rightOD.add) < 0 || parseFloat(this.rightOD.add) > 3.5 ||
    parseFloat(this.leftOD.add) < 0 || parseFloat(this.leftOD.add) > 3.5) {
    this.toastr.warning("Add values should be between 0.25 to 3.5", "Warning")
    return
} else if ((parseFloat(this.rightOD.pd) < 0 || parseFloat(this.rightOD.pd) > 100) ||
    (parseFloat(this.leftOD.pd) < 0 || parseFloat(this.leftOD.pd) > 100)) {
    this.toastr.warning("Pupillary distance values should be between 0 to 100", "Warning")
    return
} else {
    $("#eyeModal").modal("hide");
    this.eyePresComplete = true
    // if (parseFloat(this.rightOD.add) > 0) {
        //     this.rightOD.add = "+" + this.rightOD.add
        // }
        // if (parseFloat(this.leftOD.add) > 0) {
            //     this.leftOD.add = "+" + this.leftOD.add
            // }
            this.finalRightOD = Object.assign({}, this.rightOD)
            this.finalLeftOD = Object.assign({}, this.leftOD)
            this.doTranslation("translated_eyeHeading")
        }
    }
} else if (flag == 'treatment') {
    this.treatmentComplete = false
    this.treatmentArray = []
    if (this.totalOtherTreatment > 0) {
        var boolean = false
        for (var i = 0; i < this.treatmentStatus.length; i++) {
            if (this.treatmentStatus[i].status == true) {
                if (i == 0) {
                    if (this.treatmentStatus[0].lifestyle == null || this.treatmentStatus[0].lifestyle.length < 1) {
                        boolean = true
                        this.toastr.warning("Invalid values in Lifestyle Changes", "Warning")
                        return
                    } else {
                        for (var ii = 0; ii < this.treatmentStatus[0].lifestyle.length; ++ii) {
                            this.SaveOtherTreatmentSuggestions('Lifestyle', this.treatmentStatus[0].lifestyle[ii].value)
                        }
                    }
                }
                if (i == 1 && (this.treatmentStatus[1].Frequency == 'Frequency' || this.treatmentStatus[1].Duration == 'Duration')) {
                    boolean = true
                    this.toastr.warning("Invalid values in Physiotherapy", "Warning")
                    return
                }
                if (i == 2) {
                    for (var ii = 0; ii < this.treatmentStatus[2].div.length; ii++) {
                        if (this.treatmentStatus[2].div[ii].Injury_Area == 'Injury Area' || this.treatmentStatus[2].div[ii].plaster_type == null || this.treatmentStatus[2].div[ii].Duration == 'Duration') {
                            boolean = true
                            this.toastr.warning("Invalid values in Plaster", "Warning")
                            return
                        }
                    }
                }
                if (i == 3 && (this.treatmentStatus[3].Frequency == 'Frequency' || this.treatmentStatus[3].Duration == 'Duration')) {
                    boolean = true
                    this.toastr.warning("Invalid values in Fomentation", "Warning")
                    return
                }
                if (i == 4) {
                    if (this.treatmentStatus[4].Frequency == 'Frequency' || this.treatmentStatus[4].Duration == 'Duration' || this.treatmentStatus[4].med_name == null || this.treatmentStatus[4].med_name.length < 1) {
                        boolean = true
                        this.toastr.warning("Invalid values in Gargle", "Warning")
                        return
                    } else {
                        this.SaveOtherTreatmentSuggestions('Gargle', this.treatmentStatus[4].med_name[0].value)
                    }
                }
                if (i == 5) {
                    if (this.treatmentStatus[5].Frequency == 'Frequency' || this.treatmentStatus[5].Duration == 'Duration' || this.treatmentStatus[5].med_name == null || this.treatmentStatus[5].med_name.length < 1) {
                        boolean = true
                        this.toastr.warning("Invalid values in Dressing", "Warning")
                        return
                    } else {
                        this.SaveOtherTreatmentSuggestions('Dressing', this.treatmentStatus[5].med_name[0].value)
                    }
                }
                if (i == 6) {
                    if (this.treatmentStatus[6].Frequency == 'Frequency' || this.treatmentStatus[6].Duration == 'Duration' || this.treatmentStatus[6].med_name == null || this.treatmentStatus[6].med_name.length < 1) {
                        boolean = true
                        this.toastr.warning("Invalid values in Bandage", "Warning")
                        return
                    } else {
                        this.SaveOtherTreatmentSuggestions('Bandage', this.treatmentStatus[6].med_name[0].value)
                    }
                }
                if (i == 7) {
                    for (var ii = 0; ii < this.treatmentStatus[7].div.length; ii++) {
                        if (this.treatmentStatus[7].div[ii].Frequency == 'Frequency' || this.treatmentStatus[7].div[ii].Duration == 'Duration' || this.treatmentStatus[7].div[ii].med_name == null || this.treatmentStatus[7].div[ii].med_name.length < 1) {
                            boolean = true
                            this.toastr.warning("Invalid values in Other", "Warning")
                            return
                        } else {
                            this.SaveOtherTreatmentSuggestions('Other', this.treatmentStatus[7].div[ii].med_name[0].value)
                        }
                    }
                }
                if (this.otherTreatmentPresetShow == true) {
                    if (this.presentNameOtherTreatment != undefined && this.presentNameOtherTreatment != '' && this.presentNameOtherTreatment != null) {
                        if (this.presentNameOtherTreatment.trim().length < 1) {
                            this.toastr.warning("Invalid preset name", "Warning")
                            boolean = true
                            return;
                        }
                    } else {
                        this.toastr.warning("Invalid preset name", "Warning")
                        boolean = true
                        return;
                    }
                }
            }
        }
        if (boolean == false) {
            var presetArray = []
            this.treatmentComplete = true
            for (var i = 0; i < this.treatmentStatus.length; i++) {
                if (this.treatmentStatus[i].status == true) {
                    if (i == 2) {
                        for (var j = 0; j < this.treatmentStatus[2].div.length; j++) {
                            this.treatmentArray.push(Object.assign({}, this.treatmentStatus[i].div[j]))
                        }
                    } else if (i != 7) {
                        this.treatmentArray.push(Object.assign({}, this.treatmentStatus[i]))
                    } else {
                        for (var j = 0; j < this.treatmentStatus[7].div.length; j++) {
                            this.treatmentArray.push(Object.assign({}, this.treatmentStatus[7].div[j]))
                        }
                    }
                    if (this.otherTreatmentPresetShow == true) {
                        presetArray.push(this.treatmentStatus[i])
                    }
                }
            }
            if (this.otherTreatmentPresetShow == true) {
                this.SaveDoctorPresetArray(this.presentNameOtherTreatment.trim(), presetArray, 'Other Treatments')
            }
            console.log(this.treatmentArray)
            this.otherTreatmentPresetShow = false
            this.presentNameOtherTreatment = null
            this.doTranslation("translated_OTHeading")
        }
    }
}
}
getclass(state) {
    if (state == 'preconditions') {
        if (this.preConditionComplete) {
            return "active";
        } else {
            return "";
        }
    }
}
changedTitle(va) {
    this.testValue = va.target.innerHTML;
    console.log(this.testValue);
    //alert(va.target.innerHTML)
}
addPresets(flag, preset) {
    if (flag == 'findings') {
        var index = this.findingPreSetVals.findIndex(p => p.value == preset.value);
        if (index != -1) {
            this.findingPreSetVals[index].status = true
        }
    } else if (flag == 'symptoms') {
        var index = this.symptomsPresetArray.findIndex(p => p.value == preset.value);
        if (index != -1) {
            this.symptomsPresetArray[index].status = true
        }
    } else if (flag == 'diagnosis') {
        var index = this.diagnosisPresetArray.findIndex(p => p.value == preset.value);
        if (index != -1) {
            this.diagnosisPresetArray[index].status = true
        }
    }
}
removePresets(flag, preset) {
    if (flag == 'findings') {
        var index = this.findingPreSetVals.findIndex(p => p.value == preset.value);
        if (index != -1) {
            this.findingPreSetVals[index].status = false
        }
    } else if (flag == 'symptoms') {
        var index = this.symptomsPresetArray.findIndex(p => p.value == preset.value);
        if (index != -1) {
            this.symptomsPresetArray[index].status = false
        }
    } else if (flag == 'diagnosis') {
        var index = this.diagnosisPresetArray.findIndex(p => p.value == preset.value);
        if (index != -1) {
            this.diagnosisPresetArray[index].status = false
        }
    }
}
selectPreset(type, preset) {
    preset.status = !preset.status
    if (type == 'findings') {
        if (preset.status) {
            var index = this.itemsfinding.findIndex(p => p.value == preset.value);
            if (index == -1) {
                if (this.itemsfinding.length < 4) {
                    this.itemsfinding.push({
                        display: preset.value,
                        value: preset.value
                    });
                } else {
                    this.toastr.warning("Maximum items can be 4", "Warning")
                    preset.status = !preset.status
                }
            }
        } else {
            var index = this.itemsfinding.findIndex(p => p.value == preset.value);
            if (index > -1) {
                this.itemsfinding.splice(index, 1);
            }
        }
    } else if (type == 'symptoms') {
        if (preset.status) {
            var index = this.itemsymptoms.findIndex(p => p.value == preset.value);
            if (index == -1) {
                if (this.itemsymptoms.length < 4) {
                    this.itemsymptoms.push({
                        display: preset.value,
                        value: preset.value
                    });
                } else {
                    this.toastr.warning("Maximum items can be 4", "Warning")
                    preset.status = !preset.status
                }
            }
        } else {
            var index = this.itemsymptoms.findIndex(p => p.value == preset.value);
            if (index > -1) {
                this.itemsymptoms.splice(index, 1);
            }
        }
    } else if (type == 'diagnosis') {
        if (preset.status) {
            var index = this.itemsdiagnosis.findIndex(p => p.value == preset.value);
            if (index == -1) {
                if (this.itemsdiagnosis.length < 4) {
                    this.itemsdiagnosis.push({
                        display: preset.value,
                        value: preset.value
                    });
                } else {
                    this.toastr.warning("Maximum items can be 4", "Warning")
                    preset.status = !preset.status
                }
            }
        } else {
            var index = this.itemsdiagnosis.findIndex(p => p.value == preset.value);
            if (index > -1) {
                this.itemsdiagnosis.splice(index, 1);
            }
        }
    }
}

showVal(data) {
    data.text = this.testValue;
    data.status = true
    console.log(data)
}

invesTab(i) {
    if (this.investigationStatus[i].status == false) {
        if (this.numberOfInvestigationSelected < 4) {
            this.investigationtab = i
            this.investigationStatus[i].status = !this.investigationStatus[i].status
            this.numberOfInvestigationSelected = this.numberOfInvestigationSelected + 1
        } else {
            this.investigationtab = i
        }
    } else {
        this.investigationtab = i
        this.investigationStatus[i].status = !this.investigationStatus[i].status
        this.investigationStatus[i].model = ''
        this.numberOfInvestigationSelected = this.numberOfInvestigationSelected - 1
        if (this.investigationStatus[i].i_presetLength) {
            for (var j = 0; j < this.investigationStatus.length; j++) {
                if (this.investigationStatus[j].i_presetValue == this.investigationStatus[i].i_presetValue && i != j) {
                    this.investigationStatus[j].i_presetLength = this.investigationStatus[j].i_presetLength - 1
                }
            }
            this.investigationStatus[i].i_presetLength = this.investigationStatus[i].i_presetLength - 1
            if (this.investigationStatus[i].i_presetLength == 0) {
                this.presetArrayInvestigation[this.investigationStatus[i].i_presetValue].status = false
            }
        }
    }
    if(this.numberOfInvestigationSelected==0){
        for (var j = 0; j < this.presetArrayInvestigation.length; j++) {
            this.presetArrayInvestigation[j].status = false
        }
    }
}

invesPresets() {
    this.investigationpreset = !this.investigationpreset
}

surgeryPresets() {
    this.surgeryPreset = !this.surgeryPreset
}

surgryTab(i) {
    if (this.totalSurgeryOptionsSelected > 2) {
        this.toastr.warning("Maximum items can be 3", "Warning")
    } else {
        this.suregeryOptions[i].status1 = true
        if (this.suregeryOptionsTop.length < 1) {
            this.suregeryOptions[i].status = true
        }
        this.suregeryOptions[i].div = []
        this.suregeryOptions[i].div.push({
            sub_speciality: '',
            procedure_name: ''
        })
        this.suregeryOptionsTop.push(this.suregeryOptions[i])
        this.suregeryOptions.splice(i, 1)
        this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + 1
    }
    console.log(this.totalSurgeryOptionsSelected)
}

surgryTabTop(i) {
    this.suregeryOptionsTop[i].status = !this.suregeryOptionsTop[i].status
}

surgeryOptionTopStatusChange(i) {
    this.suregeryOptionsTop[i].status1 = false
    setTimeout(() => { //<<<---    using ()=> syntax
        this.suregeryOptionsTop[i].status = false
        this.suregeryOptionsTop[i].div = []
        this.suregeryOptions.push(this.suregeryOptionsTop[i])
        this.suregeryOptionsTop.splice(i, 1)
        this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected - 1
    }, 1000);
}

surgryClass(i) {
    if (this.suregeryOptionsTop[i].status == true) {
        return 'active'
    } else {
        return ''
    }
}

showhideTab() {
    this.othertabs = !this.othertabs
}
addInstructionValue(data, i) {
    if (data.trim().length > 0) {
        this.inputBox[i].instructionsInput = data
    }
}
doneInvestigation() {
    this.investigationArray = []
    for (var i = 0; i < this.investigationStatus.length; i++) {
        if (this.investigationStatus[i].status == true && this.investigationStatus[i].model != '' && this.investigationStatus[i].model != null) {
            this.investigationArray.push({
                name: this.investigationStatus[i].name,
                values: this.investigationStatus[i].model
            })
            if (this.investigationStatus[i].name != 'Mammography' &&
                // this.investigationStatus[i].name != 'Bone Densitometry' &&                    
                this.investigationStatus[i].name != 'ECG' && this.investigationStatus[i].name != 'EEG' &&
                this.investigationStatus[i].name != 'TMT' && this.investigationStatus[i].name != 'Echo' &&
                // this.investigationStatus[i].name != 'Nerve Test' && this.investigationStatus[i].name != 'Audiometry' &&
                // this.investigationStatus[i].name != 'Lung Test' && 
                this.investigationStatus[i].name != 'Uroflowmetry') {
                for (var j = 0; j < this.investigationStatus[i].model.length; j++) {
                    this.saveInvestigationSuggestion(this.investigationStatus[i].name, this.investigationStatus[i].model[j])
                    this.SaveUniqueMedicinesForAnalyticsInvestigation(this.investigationStatus[i].name, this.investigationStatus[i].model[j].value)
                }
            } else {
                this.saveInvestigationSuggestion(this.investigationStatus[i].name, this.investigationStatus[i].model)
                this.SaveUniqueMedicinesForAnalyticsInvestigation(this.investigationStatus[i].name, this.investigationStatus[i].model) 
            }
        } else if (this.investigationStatus[i].name == 'Uroflowmetry' && this.investigationStatus[i].status == true) {
            this.investigationArray.push({
                name: 'Uroflowmetry',
                values: 'Uroflowmetry'
            })
        }
    }
    this.setFields('investigation')
    console.log(this.investigationArray)
}

popupClass(i) {
    this.classActive = i;
    this.selectedValue = this.prescList[i].item
}
// getclasssecond(item) {
    //     if (this.selectedIndexDataValue.map(it => {
        //             return it.headings
        //         }).indexOf(item) != -1) {
            //         return true
            //     }
            // }
            addprescfield(j) {
                this.ppclass = j;
                this.selectedIndex = j
                this.classActive = null
                this.selectedValue = null
            }
            // savebuttonNew(i, flag) {
                //     if (flag) {
                    //         let temp = []
                    //         //  alert(this.prescList[this.classActive].item);
                    //         temp.push({
                        //             headings: this.prescList[i].item,
                        //             width: this.prescList[i].width,
                        //             float: this.prescList[i].float,
                        //             modalId: this.prescList[i].targetId,
                        //             targetId: this.prescList[i].targetId,
                        //             selectedStatus: true
                        //         })
                        //         if (this.prescList[i].structure == 'three' || this.prescList[i].structure == 'two') {
                            //             if (this.selectedIndexDataValueForShowleft.map(it => {
                                //                     return it.structure
                                //                 }).indexOf(this.prescList[i].structure) == -1) {
                                    //                 this.selectedIndexDataValueForShowleft.push({
                                        //                     key: temp,
                                        //                     structure: this.prescList[i].structure
                                        //                 })
                                        //             } else {
                                            //                 let index = this.selectedIndexDataValueForShowleft.map(it => {
                                                //                     return it.structure
                                                //                 }).indexOf(this.prescList[i].structure)
                                                //                 this.selectedIndexDataValueForShowleft[index].key.push(temp[0])
                                                //                 // this.selectedIndexDataValueForShowleft.push(
                                                //                 //    {
                                                    //                 //       key:temp,
                                                    //                 //       structure:this.prescList[this.classActive].structure
                                                    //                 //    })
                                                    //             }
                                                    //         } else {
                                                        //             this.selectedIndexDataValueForShowleft.push({
                                                            //                 key: temp,
                                                            //                 structure: this.prescList[i].structure
                                                            //             })
                                                            //         }
                                                            //         if (this.selectedIndexDataValue.map(it => {
                                                                //                 return it.headings
                                                                //             }).indexOf(this.prescList[i].item) == -1) {
                                                                    //             this.selectedIndexDataValue[this.selectedIndex].headings = this.prescList[i].item
                                                                    //             this.selectedIndexDataValue[this.selectedIndex].width = this.prescList[i].width
                                                                    //             this.selectedIndexDataValue[this.selectedIndex].float = this.prescList[i].float
                                                                    //             this.selectedIndexDataValue[this.selectedIndex].targetId = this.prescList[i].targetId
                                                                    //             this.selectedIndexDataValue[this.selectedIndex].modalId = this.prescList[i].targetId
                                                                    //             this.selectedIndexDataValue[this.selectedIndex].selectedStatus = true
                                                                    //             // this.selectedIndexDataValueForShowleft=this.selectedIndexDataValue.filter(item=>item.selectedStatus==true && item.float=='left')
                                                                    //             // this.selectedIndexDataValueForShowright=this.selectedIndexDataValue.filter(item=>item.selectedStatus==true && item.float=='right')
                                                                    //             // code...
                                                                    //         }
                                                                    //         // this.selectedIndexDataValue.push({headings:this.prescList[this.classActive].item,selectedStatus:true,field:"Add Field",values:[],width:this.prescList[this.classActive].wdtih})
                                                                    //         /////////////////////////////
                                                                    //         var boolean = false
                                                                    //         for (var k = 0; k < this.prescList.length; k++) {
                                                                        //             if (this.prescList[k].field == this.selectedValue) {
                                                                            //                 console.log("cant add already present")
                                                                            //                 boolean = true
                                                                            //                 break;
                                                                            //             }
                                                                            //         }
                                                                            //         if (boolean == false) {
                                                                                //             this.prescList[this.ppclass].status = true;
                                                                                //             this.prescList[i].status1 = true;
                                                                                //             this.prescList[this.ppclass].field = this.prescList[i].item;
                                                                                //         }
                                                                                //         console.log(this.prescList)
                                                                                //     } else {
                                                                                    //         this.selectedIndexDataValue.splice(this.findWithAttr(this.selectedIndexDataValue, 'headings', this.prescList[i].item, ), 1);
                                                                                    //         alert(JSON.stringify(this.selectedIndexDataValue));
                                                                                    //     }
                                                                                    //     alert(JSON.stringify(this.selectedIndexDataValueForShowleft));
                                                                                    // }
                                                                                    // savebutton() {
                                                                                        //     let temp = []
                                                                                        //     //  alert(this.prescList[this.classActive].item);
                                                                                        //     temp.push({
                                                                                            //         headings: this.prescList[this.classActive].item,
                                                                                            //         width: this.prescList[this.classActive].width,
                                                                                            //         float: this.prescList[this.classActive].float,
                                                                                            //         modalId: this.prescList[this.classActive].targetId,
                                                                                            //         targetId: this.prescList[this.classActive].targetId,
                                                                                            //         selectedStatus: true
                                                                                            //     })
                                                                                            //     if (this.prescList[this.classActive].structure == 'three' || this.prescList[this.classActive].structure == 'two') {
                                                                                                //         if (this.selectedIndexDataValueForShowleft.map(it => {
                                                                                                    //                 return it.structure
                                                                                                    //             }).indexOf(this.prescList[this.classActive].structure) == -1) {
                                                                                                        //             this.selectedIndexDataValueForShowleft.push({
                                                                                                            //                 key: temp,
                                                                                                            //                 structure: this.prescList[this.classActive].structure
                                                                                                            //             })
                                                                                                            //         } else {
                                                                                                                //             let index = this.selectedIndexDataValueForShowleft.map(it => {
                                                                                                                    //                 return it.structure
                                                                                                                    //             }).indexOf(this.prescList[this.classActive].structure)
                                                                                                                    //             this.selectedIndexDataValueForShowleft[index].key.push(temp[0])
                                                                                                                    //             // this.selectedIndexDataValueForShowleft.push(
                                                                                                                    //             //    {
                                                                                                                        //             //       key:temp,
                                                                                                                        //             //       structure:this.prescList[this.classActive].structure
                                                                                                                        //             //    })
                                                                                                                        //         }
                                                                                                                        //         // code...
                                                                                                                        //     } else {
                                                                                                                            //         this.selectedIndexDataValueForShowleft.push({
                                                                                                                                //             key: temp,
                                                                                                                                //             structure: this.prescList[this.classActive].structure
                                                                                                                                //         })
                                                                                                                                //     }
                                                                                                                                //     //   
                                                                                                                                //     /////////////////////////////////
                                                                                                                                //     if (this.selectedIndexDataValue.map(it => {
                                                                                                                                    //             return it.headings
                                                                                                                                    //         }).indexOf(this.prescList[this.classActive].item) == -1) {
                                                                                                                                        //         this.selectedIndexDataValue[this.selectedIndex].headings = this.prescList[this.classActive].item
                                                                                                                                        //         this.selectedIndexDataValue[this.selectedIndex].width = this.prescList[this.classActive].width
                                                                                                                                        //         this.selectedIndexDataValue[this.selectedIndex].float = this.prescList[this.classActive].float
                                                                                                                                        //         this.selectedIndexDataValue[this.selectedIndex].targetId = this.prescList[this.classActive].targetId
                                                                                                                                        //         this.selectedIndexDataValue[this.selectedIndex].modalId = this.prescList[this.classActive].targetId
                                                                                                                                        //         this.selectedIndexDataValue[this.selectedIndex].selectedStatus = true
                                                                                                                                        //         // this.selectedIndexDataValueForShowleft=this.selectedIndexDataValue.filter(item=>item.selectedStatus==true && item.float=='left')
                                                                                                                                        //         // this.selectedIndexDataValueForShowright=this.selectedIndexDataValue.filter(item=>item.selectedStatus==true && item.float=='right')
                                                                                                                                        //         // code...
                                                                                                                                        //     }
                                                                                                                                        //     // this.selectedIndexDataValue.push({headings:this.prescList[this.classActive].item,selectedStatus:true,field:"Add Field",values:[],width:this.prescList[this.classActive].wdtih})
                                                                                                                                        //     /////////////////////////////
                                                                                                                                        //     var boolean = false
                                                                                                                                        //     for (var i = 0; i < this.prescList.length; i++) {
                                                                                                                                            //         if (this.prescList[i].field == this.selectedValue) {
                                                                                                                                                //             console.log("cant add already present")
                                                                                                                                                //             boolean = true
                                                                                                                                                //             break;
                                                                                                                                                //         }
                                                                                                                                                //     }
                                                                                                                                                //     if (boolean == false) {
                                                                                                                                                    //         this.prescList[this.ppclass].status = true;
                                                                                                                                                    //         this.prescList[this.classActive].status1 = true;
                                                                                                                                                    //         this.prescList[this.ppclass].field = this.prescList[this.classActive].item;
                                                                                                                                                    //     }
                                                                                                                                                    //     console.log(this.prescList)
                                                                                                                                                    // }
                                                                                                                                                    removeOther(data, type, index) {
                                                                                                                                                        this.preCondMdlArray.splice(index, 1);
                                                                                                                                                        // console.log(this.preCondSelected)
                                                                                                                                                        // console.log(data)
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
                                                                                                                                                            if (this.medication.tab[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.tab[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.tab[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.tab[i].i_presetLength = this.medication.tab[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.cap[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.cap[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.cap[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.cap[i].i_presetLength = this.medication.cap[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.syp[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.syp[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.syp[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.syp[i].i_presetLength = this.medication.syp[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.susp[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.susp[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.susp[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.susp[i].i_presetLength = this.medication.susp[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.emulsn[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.emulsn[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.emulsn[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.emulsn[i].i_presetLength = this.medication.emulsn[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.injection[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.injection[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.injection[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.injection[i].i_presetLength = this.medication.injection[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.cream[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.cream[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.cream[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.cream[i].i_presetLength = this.medication.cream[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.gel[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.gel[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.gel[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.gel[i].i_presetLength = this.medication.gel[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.drops[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.drops[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.drops[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.drops[i].i_presetLength = this.medication.drops[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.powder[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.powder[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.powder[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.powder[i].i_presetLength = this.medication.powder[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.aerosols[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.aerosols[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.aerosols[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.aerosols[i].i_presetLength = this.medication.aerosols[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.mouthwash[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.mouthwash[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.mouthwash[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.mouthwash[i].i_presetLength = this.medication.mouthwash[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.solution[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.solution[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.solution[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.solution[i].i_presetLength = this.medication.solution[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.lotion[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.lotion[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.lotion[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.lotion[i].i_presetLength = this.medication.lotion[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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
                                                                                                                                                            if (this.medication.ointment[i].i_presetLength) {
                                                                                                                                                                var index = this.doctorPresetArray.findIndex(p => p.i_presetValue == this.medication.ointment[i].i_presetValue);
                                                                                                                                                                if (index == this.medication.ointment[i].i_presetValue) {
                                                                                                                                                                    this.doctorPresetArray[index].i_presetLength = this.doctorPresetArray[index].i_presetLength - 1
                                                                                                                                                                    this.medication.ointment[i].i_presetLength = this.medication.ointment[i].i_presetLength - 1
                                                                                                                                                                    if (this.doctorPresetArray[index].i_presetLength == 0) {
                                                                                                                                                                        this.doctorPresetArray[index].status = false
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
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

                                                                                                                                                    addTextBoxSuregery(i, j) {
                                                                                                                                                        if (this.totalSurgeryOptionsSelected > 2) {
                                                                                                                                                            this.toastr.warning("Maximum items can be 3", "Warning")
                                                                                                                                                        } else {
                                                                                                                                                            if (this.suregeryOptionsTop[i].div[j].sub_speciality.trim().length > 0 && this.suregeryOptionsTop[i].div[j].procedure_name.length > 0) {
                                                                                                                                                                this.suregeryOptionsTop[i].div.push({
                                                                                                                                                                    sub_speciality: '',
                                                                                                                                                                    procedure_name: ''
                                                                                                                                                                });
                                                                                                                                                                this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + 1
                                                                                                                                                            } else {
                                                                                                                                                                this.toastr.warning("Sub speciality or procedure name invalid", "Warning")
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }

                                                                                                                                                    removeTextBoxSuregery(i, j) {
                                                                                                                                                        if (this.suregeryOptionsTop[i].i_presetLength) {
                                                                                                                                                            for (var k = 0; k < this.suregeryOptionsTop.length; k++) {
                                                                                                                                                                if (this.suregeryOptionsTop[k].i_presetValue == this.suregeryOptionsTop[i].i_presetValue && i != k) {
                                                                                                                                                                    this.suregeryOptionsTop[k].i_presetLength = this.suregeryOptionsTop[k].i_presetLength - 1
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                            this.suregeryOptionsTop[i].i_presetLength = this.suregeryOptionsTop[i].i_presetLength - 1
                                                                                                                                                            if (this.suregeryOptionsTop[i].i_presetLength == 0) {
                                                                                                                                                                this.presetArraySurgery[this.suregeryOptionsTop[i].i_presetValue].status = false
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                        if (this.suregeryOptionsTop[i].div.length > 1) {
                                                                                                                                                            this.suregeryOptionsTop[i].div.splice(j, 1);
                                                                                                                                                            this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected - 1
                                                                                                                                                        } else {
                                                                                                                                                            this.surgryTabTop(i)
                                                                                                                                                        }
                                                                                                                                                    }

                                                                                                                                                    saveFollowUp(data) {
                                                                                                                                                        if (this.followUpDays == data) {
                                                                                                                                                            this.followUpDays = 0
                                                                                                                                                        } else {
                                                                                                                                                            this.followUpDays = data
                                                                                                                                                        }
                                                                                                                                                    }

                                                                                                                                                    getFollowUpClass(data) {
                                                                                                                                                        if (data == this.followUpDays) {
                                                                                                                                                            return 'active'
                                                                                                                                                        } else {
                                                                                                                                                            return ''
                                                                                                                                                        }
                                                                                                                                                    }

                                                                                                                                                    vaccination(data) {
                                                                                                                                                        if (this.vaccination_type == 'current') {
                                                                                                                                                            var index = this.currentVaccinationArray.indexOf(data)
                                                                                                                                                            if (index > -1) {
                                                                                                                                                                this.currentVaccinationArray.splice(index, 1)
                                                                                                                                                            } else {
                                                                                                                                                                if (this.currentVaccinationArray.length < 4) {
                                                                                                                                                                    this.currentVaccinationArray.push(data)
                                                                                                                                                                } else {
                                                                                                                                                                    this.toastr.warning("Maximum values can be 4 only", "Warning")
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        } else if (this.vaccination_type == 'due') {
                                                                                                                                                            var index = this.dueVaccinationArray.indexOf(data)
                                                                                                                                                            if (index > -1) {
                                                                                                                                                                this.dueVaccinationArray.splice(index, 1)
                                                                                                                                                            } else {
                                                                                                                                                                if (this.dueVaccinationArray.length < 4) {
                                                                                                                                                                    this.dueVaccinationArray.push(data)
                                                                                                                                                                } else {
                                                                                                                                                                    this.toastr.warning("Maximum values can be 4 only", "Warning")
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                        console.log(this.currentVaccinationArray)
                                                                                                                                                        console.log(this.dueVaccinationArray)
                                                                                                                                                    }

                                                                                                                                                    selectVaccination(type) {
                                                                                                                                                        this.vaccination_type = type
                                                                                                                                                        if (this.vaccination_type == 'current') {
                                                                                                                                                            this.currentVaccinationArray = []
                                                                                                                                                        } else if (this.vaccination_type == 'due') {
                                                                                                                                                            this.dueVaccinationArray = []
                                                                                                                                                        }
                                                                                                                                                    }

                                                                                                                                                    getClassVaccination(data) {
                                                                                                                                                        if (this.vaccination_type == 'current') {
                                                                                                                                                            if (this.tempCurrentVaccinationArray.length > 0) {
                                                                                                                                                                this.currentVaccinationArray = this.tempCurrentVaccinationArray
                                                                                                                                                            }
                                                                                                                                                            if (this.currentVaccinationArray.map(it => { return it }).indexOf(data) != -1) {
                                                                                                                                                                return 'active'
                                                                                                                                                            } else {
                                                                                                                                                                return ''
                                                                                                                                                            }
                                                                                                                                                        } else {
                                                                                                                                                            if (this.tempDueVaccinationArray.length > 0) {
                                                                                                                                                                this.dueVaccinationArray = this.tempDueVaccinationArray
                                                                                                                                                            }
                                                                                                                                                            if (this.dueVaccinationArray.map(it => { return it }).indexOf(data) != -1) {
                                                                                                                                                                return 'active'
                                                                                                                                                            } else {
                                                                                                                                                                return ''
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }

                                                                                                                                                    saveVaccination() {
                                                                                                                                                        this.tempCurrentVaccinationArray = this.currentVaccinationArray
                                                                                                                                                        this.tempDueVaccinationArray = this.dueVaccinationArray
                                                                                                                                                        this.currentVaccinationComplete = false
                                                                                                                                                        this.dueVaccinationComplete = false
                                                                                                                                                        if (this.tempCurrentVaccinationArray.length > 0) {
                                                                                                                                                            this.currentVaccinationComplete = true
                                                                                                                                                        }
                                                                                                                                                        if (this.tempDueVaccinationArray.length > 0) {
                                                                                                                                                            this.dueVaccinationComplete = true
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
                                                                                                                                                        //     if (this.currentFrequency.dosage) {
                                                                                                                                                            //         $("#dosageModal").modal("show");
                                                                                                                                                            //     }
                                                                                                                                                            //     if (this.currentFrequency.quantity) {
                                                                                                                                                                //         $("#quantityModal").modal("show");
                                                                                                                                                                //     }
                                                                                                                                                                //     if (this.currentFrequency.mode) {
                                                                                                                                                                    //         $("#injectionModal").modal("show");
                                                                                                                                                                    //     }
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

                                                                                                                                                                addTempQuantity(data) {
                                                                                                                                                                    this.tempQuantity = data
                                                                                                                                                                    // if (data > 0 && data < 20) {
                                                                                                                                                                        //     this.currentFrequency.quantity = data
                                                                                                                                                                        //     // $("#durationModal").modal("show");
                                                                                                                                                                        // } else {
                                                                                                                                                                            //     this.toastr.warning("Quantity ranges between 1 to 20", "Warning")
                                                                                                                                                                            // }
                                                                                                                                                                        }

                                                                                                                                                                        selectSphere(type, data) {
                                                                                                                                                                            if (type == 'right') {
                                                                                                                                                                                this.tempSphereRight = data
                                                                                                                                                                            } else if (type == 'left') {
                                                                                                                                                                                this.tempSphereLeft = data
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        getclassSphere(type, data) {
                                                                                                                                                                            if (type == 'right') {
                                                                                                                                                                                if (data == this.tempSphereRight) {
                                                                                                                                                                                    return 'active'
                                                                                                                                                                                } else {
                                                                                                                                                                                    return ''
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'left') {
                                                                                                                                                                                if (data == this.tempSphereLeft) {
                                                                                                                                                                                    return 'active'
                                                                                                                                                                                } else {
                                                                                                                                                                                    return ''
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        saveEyePresciption(type) {
                                                                                                                                                                            if (type == 'Sphere_R') {
                                                                                                                                                                                if (this.tempSphereRight != null) {
                                                                                                                                                                                    this.rightOD.sphere = this.tempSphereRight
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'Sphere_L') {
                                                                                                                                                                                if (this.tempSphereLeft != null) {
                                                                                                                                                                                    this.leftOD.sphere = this.tempSphereLeft
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'Cylinder_R') {
                                                                                                                                                                                if (this.tempCylinderRight != null) {
                                                                                                                                                                                    this.rightOD.cylinder = this.tempCylinderRight
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'Cylinder_L') {
                                                                                                                                                                                if (this.tempCylinderLeft != null) {
                                                                                                                                                                                    this.leftOD.cylinder = this.tempCylinderLeft
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'Axis_L') {
                                                                                                                                                                                if (this.tempAxisLeft != null) {
                                                                                                                                                                                    this.leftOD.axis = this.tempAxisLeft
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'Axis_R') {
                                                                                                                                                                                if (this.tempAxisRight != null) {
                                                                                                                                                                                    this.rightOD.axis = this.tempAxisRight
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'Add_L') {
                                                                                                                                                                                if (this.tempAddLeft != null) {
                                                                                                                                                                                    this.leftOD.add = this.tempAddLeft
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'Add_R') {
                                                                                                                                                                                if (this.tempAddRight != null) {
                                                                                                                                                                                    this.rightOD.add = this.tempAddRight
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'Pd_R') {
                                                                                                                                                                                if (this.tempPDRight != null) {
                                                                                                                                                                                    this.rightOD.pd = this.tempPDRight
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'Pd_L') {
                                                                                                                                                                                if (this.tempPDLeft != null) {
                                                                                                                                                                                    this.leftOD.pd = this.tempPDLeft
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        openModalFromEyePres() {
                                                                                                                                                                            this.eyePresComplete = false
                                                                                                                                                                            this.finalRightOD = {}
                                                                                                                                                                            this.finalLeftOD = {}
                                                                                                                                                                            this.tempSphereRight = null
                                                                                                                                                                            this.tempSphereLeft = null
                                                                                                                                                                            this.tempCylinderRight = null
                                                                                                                                                                            this.tempCylinderLeft = null
                                                                                                                                                                            this.tempAxisRight = null
                                                                                                                                                                            this.tempAxisLeft = null
                                                                                                                                                                            this.tempAddRight = null
                                                                                                                                                                            this.tempAddLeft = null
                                                                                                                                                                            this.tempPDRight = null
                                                                                                                                                                            this.tempPDLeft = null
                                                                                                                                                                        }

                                                                                                                                                                        selectCylinder(type, data) {
                                                                                                                                                                            if (type == 'right') {
                                                                                                                                                                                this.tempCylinderRight = data
                                                                                                                                                                            } else if (type == 'left') {
                                                                                                                                                                                this.tempCylinderLeft = data
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        getclassCylinder(type, data) {
                                                                                                                                                                            if (type == 'right') {
                                                                                                                                                                                if (data == this.tempCylinderRight) {
                                                                                                                                                                                    return 'active'
                                                                                                                                                                                } else {
                                                                                                                                                                                    return ''
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'left') {
                                                                                                                                                                                if (data == this.tempCylinderLeft) {
                                                                                                                                                                                    return 'active'
                                                                                                                                                                                } else {
                                                                                                                                                                                    return ''
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        getclassAxis(type, data) {
                                                                                                                                                                            if (type == 'right') {
                                                                                                                                                                                if (data == this.tempAxisRight) {
                                                                                                                                                                                    return 'active'
                                                                                                                                                                                } else {
                                                                                                                                                                                    return ''
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'left') {
                                                                                                                                                                                if (data == this.tempAxisLeft) {
                                                                                                                                                                                    return 'active'
                                                                                                                                                                                } else {
                                                                                                                                                                                    return ''
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        selectAxis(type, data) {
                                                                                                                                                                            if (type == 'right') {
                                                                                                                                                                                this.tempAxisRight = data
                                                                                                                                                                            } else if (type == 'left') {
                                                                                                                                                                                this.tempAxisLeft = data
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        getclassAdd(type, data) {
                                                                                                                                                                            if (type == 'right') {
                                                                                                                                                                                if (data == this.tempAddRight) {
                                                                                                                                                                                    return 'active'
                                                                                                                                                                                } else {
                                                                                                                                                                                    return ''
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'left') {
                                                                                                                                                                                if (data == this.tempAddLeft) {
                                                                                                                                                                                    return 'active'
                                                                                                                                                                                } else {
                                                                                                                                                                                    return ''
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        selectAdd(type, data) {
                                                                                                                                                                            if (type == 'right') {
                                                                                                                                                                                this.tempAddRight = data
                                                                                                                                                                            } else if (type == 'left') {
                                                                                                                                                                                this.tempAddLeft = data
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        addTempPD(type, data) {
                                                                                                                                                                            if (type == 'right') {
                                                                                                                                                                                if (isNaN(data) || data > 100 || data < 0 || data == '') {
                                                                                                                                                                                    this.toastr.warning("Invalid Pupillary Distance", "Warning")
                                                                                                                                                                                } else {
                                                                                                                                                                                    this.tempPDRight = data
                                                                                                                                                                                }
                                                                                                                                                                            } else if (type == 'left') {
                                                                                                                                                                                if (isNaN(data) || data > 100 || data < 0 || data == '') {
                                                                                                                                                                                    this.toastr.warning("Invalid Pupillary Distance", "Warning")
                                                                                                                                                                                } else {
                                                                                                                                                                                    this.tempPDLeft = data
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }


                                                                                                                                                                        getPrescList2Class(data) {
                                                                                                                                                                            if (data == 'Pre Condition') {
                                                                                                                                                                                if (this.preConditionComplete == true && this.finalPreConditions.length > 0) { return 'half-li active' } else {
                                                                                                                                                                                    return 'half-li'
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Allergy') {
                                                                                                                                                                                if (this.allergyComplete == true && this.finalAllergy.length > 0) { return 'half-li active' } else {
                                                                                                                                                                                    return 'half-li'
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Body Indicator') {
                                                                                                                                                                                if (this.bodyIndicatorComplete == true && this.bodyIndicatorSelected.length > 0) { return 'half-li active' } else {
                                                                                                                                                                                    return 'half-li'
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Patient Complaints') {
                                                                                                                                                                                if (this.findingsComplete == true && this.findingsSelected.length > 0) { return 'half-li active' } else {
                                                                                                                                                                                    return 'half-li'
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Symptoms') {
                                                                                                                                                                                if (this.symptomsComplete == true && this.symptomsSelected.length > 0) { return 'half-li active' } else {
                                                                                                                                                                                    return 'half-li'
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Diagnosis') {
                                                                                                                                                                                if (this.diagnosisComplete == true && this.diagnosisSelected.length > 0) { return 'half-li active' } else {
                                                                                                                                                                                    return 'half-li'
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Other Treatment') {
                                                                                                                                                                                if (this.treatmentComplete == true) { return 'half-li active' } else {
                                                                                                                                                                                    return 'half-li'
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Investigation') {
                                                                                                                                                                                if (this.investigationIndicatorComplete == true && this.investigationArray.length > 0) { return 'half-li active' } else {
                                                                                                                                                                                    return 'half-li'
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Surgery / Procedure') {
                                                                                                                                                                                if (this.surgeryComplete == true && this.surgerySelectedArray.length > 0) { return 'half-li active' } else {
                                                                                                                                                                                    return 'half-li'
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Eye Prescription') {
                                                                                                                                                                                if (this.eyePresComplete == true) { return 'half-li active' } else {
                                                                                                                                                                                    return 'half-li'
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Vaccination') {
                                                                                                                                                                                if (this.vaccinationComplete == true) { return 'half-li active' } else {
                                                                                                                                                                                    return 'half-li'
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Instructions') {
                                                                                                                                                                                if (this.instructionsComplete == true && this.instructionsSelected.length > 0) { return 'half-li active' } else {
                                                                                                                                                                                    return 'half-li'
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Medication') {
                                                                                                                                                                                if (this.medicationComplete == true) { return 'medication-li active' } else {
                                                                                                                                                                                    return 'medication-li'
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        hideMedication() {
                                                                                                                                                                            this.medicationComplete = false
                                                                                                                                                                        }

                                                                                                                                                                        deleteAndResetSelectedDiv(data) {
                                                                                                                                                                            console.log(data)
                                                                                                                                                                            if (data == 'Pre Condition') {
                                                                                                                                                                                this.preConditionComplete = false
                                                                                                                                                                                this.preCondSelected = []
                                                                                                                                                                                for (var i = 0; i < this.preCondMdlArray.length; i++) {
                                                                                                                                                                                    this.preCondMdlArray[i].status = false
                                                                                                                                                                                }
                                                                                                                                                                                this.precondlength = 0
                                                                                                                                                                            } else if (data == 'Body Indicators') {
                                                                                                                                                                                this.bodyIndicatorSelected = [];
                                                                                                                                                                                this.bodyIndicatorComplete = false;
                                                                                                                                                                                this.bodyIndicator = {
                                                                                                                                                                                    'temp': 'Select',
                                                                                                                                                                                    'pulse': 'Select',
                                                                                                                                                                                    'sys': 'Select',
                                                                                                                                                                                    'dia': 'Select',
                                                                                                                                                                                    'spo': 'Select',
                                                                                                                                                                                    'rbs': 'Select'
                                                                                                                                                                                };
                                                                                                                                                                            } else if (data == 'Surgery / Procedure') {
                                                                                                                                                                                this.surgeryComplete = false
                                                                                                                                                                                this.totalSurgeryOptionsSelected = 0

                                                                                                                                                                                this.suregeryOptions = [{
                                                                                                                                                                                    name: 'Cardiology',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'BRONCHIAL INJURIES/FB',
                                                                                                                                                                                    'CABG',
                                                                                                                                                                                    'CARDIAC',
                                                                                                                                                                                    'CARDIAC INJURES',
                                                                                                                                                                                    'CARDIOTHORACIC',
                                                                                                                                                                                    'CHEST INJURY',
                                                                                                                                                                                    'CHEST SURGERY',
                                                                                                                                                                                    'CLOSED HEART',
                                                                                                                                                                                    'COIL CLOSURE',
                                                                                                                                                                                    'COMPLEX ARRHYTHMIAS',
                                                                                                                                                                                    'CONGENITAL (COMPLEX)',
                                                                                                                                                                                    'CONGENITAL (SIMPLE)',
                                                                                                                                                                                    'DEVICE CLOSURE',
                                                                                                                                                                                    'DIAPHRAGMATIC INJURIES',
                                                                                                                                                                                    'LUNGS',
                                                                                                                                                                                    'OESOPHAGEAL INJURY/FB',
                                                                                                                                                                                    'PERICARDIUM',
                                                                                                                                                                                    'SIMPLE ARRHYTHMIAS',
                                                                                                                                                                                    'VALVE REPAIR',
                                                                                                                                                                                    'VALVE REPLACEMENT'
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'Dental',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'BRACES (ORTHODONTICS)',
                                                                                                                                                                                    'CROWN , BRIDGE & VENEER',
                                                                                                                                                                                    'DENTAL IMPLANT',
                                                                                                                                                                                    'DENTAL-TREATMENT FOR CHILDREN',
                                                                                                                                                                                    'DENTURE',
                                                                                                                                                                                    'ENDODONTICS',
                                                                                                                                                                                    'FILLINGS & COSMETIC TREATMENTS',
                                                                                                                                                                                    'GUM TREATMENT',
                                                                                                                                                                                    'ORAL SURGERY',
                                                                                                                                                                                    'OTHERS'
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'ENT',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'EAR',
                                                                                                                                                                                    'NOSE',
                                                                                                                                                                                    'THROAT'
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'Gastroenterology',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'EMERGENCY',
                                                                                                                                                                                    'GALL BLADDER',
                                                                                                                                                                                    'HERNIA',
                                                                                                                                                                                    'LARGE / SMALL INTESTINE',
                                                                                                                                                                                    'LARGE INTESTINE',
                                                                                                                                                                                    'LIVER',
                                                                                                                                                                                    'OESOPHAGUS',
                                                                                                                                                                                    'PANCREAS',
                                                                                                                                                                                    'SMALL INTESTINE',
                                                                                                                                                                                    'SPLEEN',
                                                                                                                                                                                    'STOMACH'
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'General Surgery',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'GENERAL SURGERY',
                                                                                                                                                                                    'HEAD & NECK',
                                                                                                                                                                                    'ABDOMEN',
                                                                                                                                                                                    'ADRENAL',
                                                                                                                                                                                    'GALLBLADDER',
                                                                                                                                                                                    'BREAST',
                                                                                                                                                                                    'VASCULAR',
                                                                                                                                                                                    'UROLOGY'
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'Gynaecology/Obstetrics',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'OBSTETRICS',
                                                                                                                                                                                    'GYNAECOLOGY'
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                // { name: 'Genito-Urinary', status: false, status1: false, div: [], database: [], sub_speciality_array: [] },
                                                                                                                                                                                { name: 'Neonatal', status: false, status1: false, div: [], database: [], sub_speciality_array: ['NEONATAL INTENSIVE CARE'] },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'Neurology',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'ANEYRISMS',
                                                                                                                                                                                    'BRAIN',
                                                                                                                                                                                    'OTHER SURGERIES',
                                                                                                                                                                                    'SOFT TISSUE and VASCULAR',
                                                                                                                                                                                    'SPINAL SURGERIES',
                                                                                                                                                                                    'SPINE',
                                                                                                                                                                                    'TRIGEMINAL NEURALGIA'
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'Oncology',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'ABDOMINAL WALL TUMOR',
                                                                                                                                                                                    'BONE / SOFT TISSUE TUMORS',
                                                                                                                                                                                    'BREAST TUMORS',
                                                                                                                                                                                    'CA. CERVIX',
                                                                                                                                                                                    'CA. EAR',
                                                                                                                                                                                    'CA. ENDOMETRIUM',
                                                                                                                                                                                    'CA. GALL BLADDER',
                                                                                                                                                                                    'CA. GASTRO INTESTINAL TRACT',
                                                                                                                                                                                    'CA. NASOPHARYNX',
                                                                                                                                                                                    'CA. PARATHYROID',
                                                                                                                                                                                    'CA. THYROID',
                                                                                                                                                                                    'CA. TRACHEA',
                                                                                                                                                                                    'CA. URINARY BLADDER',
                                                                                                                                                                                    'CA. EYE/ MAXILLA /PARA NASAL SINUS',
                                                                                                                                                                                    'CA.ORAL CAVITY',
                                                                                                                                                                                    'CA.RECTUM',
                                                                                                                                                                                    'CA.SOFT PALATE',
                                                                                                                                                                                    'ESOPHAGUS',
                                                                                                                                                                                    'GASTROINTESTINAL TRACT',
                                                                                                                                                                                    'GENITO URINARY CANCER',
                                                                                                                                                                                    'GENITO URINARY SYSTEM',
                                                                                                                                                                                    'GYNAEC CANCERS',
                                                                                                                                                                                    'GYNAECOLOGICAL ONCOLOGY',
                                                                                                                                                                                    'HEAD & NECK',
                                                                                                                                                                                    'LUNG',
                                                                                                                                                                                    'LUNG CANCER',
                                                                                                                                                                                    'PALLIATIVE SURGERIES',
                                                                                                                                                                                    'RECONSTRUCTION',
                                                                                                                                                                                    'RETROPERITONEAL TUMOR',
                                                                                                                                                                                    'SKIN TUMORS',
                                                                                                                                                                                    'SOFT TISSUE /BONE TUMORS . CHEST WALL',
                                                                                                                                                                                    'SOFT TISSUE AND BONE TUMORS',
                                                                                                                                                                                    'SPLEEN',
                                                                                                                                                                                    'TESTES CANCER',
                                                                                                                                                                                    'THORACIC AND MEDIASTINUM'
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'Ophthalmology',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'CORNEA AND SCLERA',
                                                                                                                                                                                    'LID SURGERY',
                                                                                                                                                                                    'OPTHALMOLOGY',
                                                                                                                                                                                    'ORBIT',
                                                                                                                                                                                    'PEDIATRIC',
                                                                                                                                                                                    'RETINA',
                                                                                                                                                                                    'SQUINT CORRECTION',
                                                                                                                                                                                    'VITREO-RETINA'
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'Orthopaedics',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'AMPUTATIONS -SUPRA MAJOR',
                                                                                                                                                                                    'AMPUTATIONS-INTERMEDIATE',
                                                                                                                                                                                    'AMPUTATIONS-MAJOR',
                                                                                                                                                                                    'AMPUTATIONS-MINOR',
                                                                                                                                                                                    'BONE AND JOINT',
                                                                                                                                                                                    'DAYCARE PROCEDURE',
                                                                                                                                                                                    'DISLOCATIONS',
                                                                                                                                                                                    'FEMORAL NECK FRACTURE',
                                                                                                                                                                                    'FRACTURE CORRECTION',
                                                                                                                                                                                    'FRACTURE K WIRE FIXATION',
                                                                                                                                                                                    'FRACTURE-CLOSED PINNING DISPLACED PAEDIATRIC FRACTURES',
                                                                                                                                                                                    'FRACTURE-EXTERNAL FIXATOR',
                                                                                                                                                                                    'FRACTURE-NAILING / CRIF',
                                                                                                                                                                                    'FRACTURE-PLATING-ORIF',
                                                                                                                                                                                    'FRACTURE-TENSION BAND WIRING',
                                                                                                                                                                                    'HIP',
                                                                                                                                                                                    'INTERMEDIATE WOUND DEBRIDEMENT AND WASHOUT',
                                                                                                                                                                                    'KNEE/HIP REPLACEMENT',
                                                                                                                                                                                    'MAJOR WOUND DEBRIDEMENT AND WASHOUT',
                                                                                                                                                                                    'MINOR/ SECOND LOOK WOUND DEBRIDEMENT AND WASHOUT',
                                                                                                                                                                                    'PAEDIATRIC FRACTURE-NAILING / CRIF',
                                                                                                                                                                                    'SOFT TISSUE SURGERY',
                                                                                                                                                                                    'SPINE SURGERY',
                                                                                                                                                                                    'TENDON REPAIR MAJOR',
                                                                                                                                                                                    'TENDON TRANSFERS MULTIPLE',
                                                                                                                                                                                    'TUMOR SURGERY',
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'Paediatric',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'ABDOMEN',
                                                                                                                                                                                    'CHEST',
                                                                                                                                                                                    'CONGENITAL MALFORMATIONS',
                                                                                                                                                                                    'GENITOURINARY',
                                                                                                                                                                                    'HEAD AND NECK',
                                                                                                                                                                                    'MISCELLANEOUS',
                                                                                                                                                                                    'NEUROSURGERY',
                                                                                                                                                                                    'ONCOLOGY'
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'Urology',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'BLADDER AND PROSTATE',
                                                                                                                                                                                    'CORRECTIVE SURGERIES',
                                                                                                                                                                                    'KIDNEY',
                                                                                                                                                                                    'LITHOTRIPSY',
                                                                                                                                                                                    'OTHER CORRECTIVE SURGERIES/PROCEDURE',
                                                                                                                                                                                    'RENAL',
                                                                                                                                                                                    'RENAL CALCULI',
                                                                                                                                                                                    'RENAL STONE SURGERY',
                                                                                                                                                                                    'TESTIS',
                                                                                                                                                                                    'URETER',
                                                                                                                                                                                    'URETHRA'
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'Vascular',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    status1: false,
                                                                                                                                                                                    div: [],
                                                                                                                                                                                    database: [],
                                                                                                                                                                                    sub_speciality_array: [
                                                                                                                                                                                    'ENDOVASCULAR',
                                                                                                                                                                                    'LOWER LIMB BYPASS',
                                                                                                                                                                                    'OPEN VASCULAR',
                                                                                                                                                                                    'THROMBO EMBOLISM – LL',
                                                                                                                                                                                    'THROMBO EMBOLISM – UL'
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                { name: 'Medical Emergencies', status: false, status1: false, div: [], database: [], sub_speciality_array: ['MEDICALEMERGENCIES'] }
                                                                                                                                                                                ]

                                                                                                                                                                                this.suregeryOptionsTop = []
                                                                                                                                                                                this.GetDoctorSurgeryArray(this.doctorData.itemId)
                                                                                                                                                                                // this.GetSurgerySuggestions('Cardiology')
                                                                                                                                                                                // this.GetSurgerySuggestions('ENT')
                                                                                                                                                                                // this.GetSurgerySuggestions('Dental')
                                                                                                                                                                                // this.GetSurgerySuggestions('Genito-Urinary')
                                                                                                                                                                                // this.GetSurgerySuggestions('Gynaecology/Obstetrics')
                                                                                                                                                                                // this.GetSurgerySuggestions('Neonatal')
                                                                                                                                                                                // this.GetSurgerySuggestions('Neurology')
                                                                                                                                                                                // this.GetSurgerySuggestions('Oncology')
                                                                                                                                                                                // this.GetSurgerySuggestions('Ophthalmology')
                                                                                                                                                                                // this.GetSurgerySuggestions('Orthopaedics')
                                                                                                                                                                                // this.GetSurgerySuggestions('Paediatric')
                                                                                                                                                                                // this.GetSurgerySuggestions('Vascular')

                                                                                                                                                                                this.surgeryPresetShow = false
                                                                                                                                                                                for (var i = 0; i < this.presetArraySurgery.length; i++) {
                                                                                                                                                                                    this.presetArraySurgery[i].status = false
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Vaccination') {
                                                                                                                                                                                this.vaccinationComplete = false
                                                                                                                                                                                this.finalCurrentVaccinationArray = []
                                                                                                                                                                                this.finalDueVaccinationArray = []
                                                                                                                                                                                this.tempCurrentVaccinationArray = []
                                                                                                                                                                                this.tempDueVaccinationArray = []
                                                                                                                                                                                this.currentVaccinationComplete = false
                                                                                                                                                                                this.dueVaccinationComplete = false
                                                                                                                                                                                this.currentVaccinationArray = []
                                                                                                                                                                                this.dueVaccinationArray = []
                                                                                                                                                                                this.vaccinationDate = new Date()
                                                                                                                                                                            } else if (data == 'Medication') {
                                                                                                                                                                                this.medicationComplete = false
                                                                                                                                                                                this.medicationStatus = [
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

                                                                                                                                                                                this.medicationTabArray = []
                                                                                                                                                                                this.medicationCapArray = []
                                                                                                                                                                                this.medicationSypArray = []
                                                                                                                                                                                this.medicationSuspArray = []
                                                                                                                                                                                this.medicationEmulsnArray = []
                                                                                                                                                                                this.medicationInjArray = []
                                                                                                                                                                                this.medicationCreamArray = []
                                                                                                                                                                                this.medicationGelArray = []
                                                                                                                                                                                this.medicationDropsArray = []
                                                                                                                                                                                this.medicationPowderArray = []
                                                                                                                                                                                this.medicationAerosolsArray = []
                                                                                                                                                                                this.medicationMouthWashArray = []
                                                                                                                                                                                this.medicationSolutionArray = []
                                                                                                                                                                                this.medicationLotionArray = []
                                                                                                                                                                                this.medicationOintmentArray = []

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

                                                                                                                                                                                this.totalMedications = 0

                                                                                                                                                                                this.medicationSavedArray = []
                                                                                                                                                                                this.medicationStatus[0].status = true
                                                                                                                                                                                this.investigationStatus[0].status = true

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

                                                                                                                                                                                this.totalMedicationPresetSelected = 0
                                                                                                                                                                                this.medicationPresetShow = false
                                                                                                                                                                                for (var i = 0; i < this.doctorPresetArray.length; i++) {
                                                                                                                                                                                    this.doctorPresetArray[i].status = false
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Instruction') {
                                                                                                                                                                                this.instructionsComplete = false
                                                                                                                                                                                this.instructionsSelected = []
                                                                                                                                                                                this.inputBox = [{ name: 'Instruction 1', instructionsInput: '', inputInstruction: '' }];
                                                                                                                                                                                this.instructionPresetShow = false
                                                                                                                                                                                for (var j = 0; j < this.presetArrayInstruction.length; j++) {
                                                                                                                                                                                    this.presetArrayInstruction[j].status = false
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Investigation') {
                                                                                                                                                                                this.investigationIndicatorComplete = false
                                                                                                                                                                                this.investigationArray = []
                                                                                                                                                                                this.numberOfInvestigationSelected = 0
                                                                                                                                                                                this.investigationPresetShow = false
                                                                                                                                                                                this.investigationStatus = [{
                                                                                                                                                                                    name: 'Pathology',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'X-Ray',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'Ultrasound',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'Doppler Studies',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'ECG',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'EEG',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'TMT',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'Echo',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'CT-Scan',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'MRI',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                },
                                                                                                                                                                                {
                                                                                                                                                                                    name: 'Nerve Test',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'Uroflowmetry',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'Audiometry',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'Mammography',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'Bone Densitometry',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'Eye Tests',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'Lung Test',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }, {
                                                                                                                                                                                    name: 'Others',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    model: ''
                                                                                                                                                                                }
                                                                                                                                                                                ]
                                                                                                                                                                                for (var i = 0; i < this.presetArrayInvestigation.length; i++) {
                                                                                                                                                                                    this.presetArrayInvestigation[i].status = false
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Eye Prescription') {
                                                                                                                                                                                this.eyePresComplete = false
                                                                                                                                                                                this.openModalFromEyePres();
                                                                                                                                                                                this.rightOD = {}
                                                                                                                                                                                this.rightOD.sphere = 0
                                                                                                                                                                                this.rightOD.cylinder = 0
                                                                                                                                                                                this.rightOD.axis = 0
                                                                                                                                                                                this.rightOD.add = 0
                                                                                                                                                                                this.rightOD.pd = 0
                                                                                                                                                                                this.leftOD = {}
                                                                                                                                                                                this.leftOD.sphere = 0
                                                                                                                                                                                this.leftOD.cylinder = 0
                                                                                                                                                                                this.leftOD.axis = 0
                                                                                                                                                                                this.leftOD.add = 0
                                                                                                                                                                                this.leftOD.pd = 0
                                                                                                                                                                                this.finalRightOD = {}
                                                                                                                                                                                this.finalLeftOD = {}
                                                                                                                                                                            } else if (data == 'Diagnosis') {
                                                                                                                                                                                this.diagnosisSelected = []
                                                                                                                                                                                this.itemsdiagnosis = []
                                                                                                                                                                                this.diagnosisComplete = false;
                                                                                                                                                                                for (var i = 0; i < this.diagnosisPresetArray.length; i++) {
                                                                                                                                                                                    this.diagnosisPresetArray[i].status = false
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Allergy') {
                                                                                                                                                                                this.allergyComplete = false;
                                                                                                                                                                                this.allergySelected = []
                                                                                                                                                                                this.finalAllergy = []
                                                                                                                                                                                this.otherAllergy = []
                                                                                                                                                                                this.AllergyArray = [{
                                                                                                                                                                                    'allergyName': 'Drug Allergy',
                                                                                                                                                                                    'allergySource': [{
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Aspirin'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Ampicillin'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Pain killer'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Antibiotics'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Tetracycline'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Sulfa'
                                                                                                                                                                                    }]
                                                                                                                                                                                }, {
                                                                                                                                                                                    'allergyName': 'Food Allergy',
                                                                                                                                                                                    'allergySource': [{
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Chocolate'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Egg'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Fish'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Milk'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Nuts'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Prawn'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Meat'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Sea Food'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Spices'
                                                                                                                                                                                    }]
                                                                                                                                                                                }, {
                                                                                                                                                                                    'allergyName': 'Skin Allergy',
                                                                                                                                                                                    'allergySource': [{
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Urticaria'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Rash'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Sun'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Anaphylaxis'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Dye'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Detergent'
                                                                                                                                                                                    }]
                                                                                                                                                                                }, {
                                                                                                                                                                                    'allergyName': 'Respiratory Allergy',
                                                                                                                                                                                    'allergySource': [{
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Dust'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Pollen'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Paint smell'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Smoke'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Perfume'
                                                                                                                                                                                    }, {
                                                                                                                                                                                        'status': false,
                                                                                                                                                                                        'text': 'Temp change'
                                                                                                                                                                                    }]
                                                                                                                                                                                }]
                                                                                                                                                                            } else if (data == 'Patient Complaints') {
                                                                                                                                                                                this.findingsSelected = []
                                                                                                                                                                                this.itemsfinding = []
                                                                                                                                                                                this.findingsComplete = false
                                                                                                                                                                                for (var i = 0; i < this.findingPreSetVals.length; i++) {
                                                                                                                                                                                    this.findingPreSetVals[i].status = false
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Symptoms') {
                                                                                                                                                                                this.symptomsSelected = []
                                                                                                                                                                                this.symptomsComplete = false;
                                                                                                                                                                                this.itemsymptoms = []
                                                                                                                                                                                for (var i = 0; i < this.symptomsPresetArray.length; i++) {
                                                                                                                                                                                    this.symptomsPresetArray[i].status = false
                                                                                                                                                                                }
                                                                                                                                                                            } else if (data == 'Follow-up') {
                                                                                                                                                                                this.finalfollowUpDays = 0
                                                                                                                                                                                this.followUpDays = 0
                                                                                                                                                                                this.followDaysComplete = false
                                                                                                                                                                            } else if (data == 'Other Treatment') {
                                                                                                                                                                                this.treatmentComplete = false
                                                                                                                                                                                this.treatmentStatus = [
                                                                                                                                                                                { name: 'Lifestyle Changes', status: false, SpecialInstruction: null, lifestyle: null },
                                                                                                                                                                                { name: 'Physiotherapy', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' },
                                                                                                                                                                                { name: 'Plaster', status: false, SpecialInstruction: null, Injury_Area: 'Injury Area', plaster_type: null, Duration: 'Duration' },
                                                                                                                                                                                { name: 'Fomentation', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' },
                                                                                                                                                                                { name: 'Gargle', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: null },
                                                                                                                                                                                { name: 'Dressing', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: null },
                                                                                                                                                                                { name: 'Bandage', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: null },
                                                                                                                                                                                { name: 'Other', status: false, SpecialInstruction: null, treat: null }
                                                                                                                                                                                ]
                                                                                                                                                                                this.treatmentStatus[2].div = []
                                                                                                                                                                                this.treatmentStatus[2].div.push({
                                                                                                                                                                                    name: 'Plaster',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    SpecialInstruction: null,
                                                                                                                                                                                    Injury_Area: 'Injury Area',
                                                                                                                                                                                    plaster_type: null,
                                                                                                                                                                                    Duration: 'Duration'
                                                                                                                                                                                })
                                                                                                                                                                                this.treatmentStatus[7].div = []
                                                                                                                                                                                this.treatmentStatus[7].div.push({
                                                                                                                                                                                    name: 'Other',
                                                                                                                                                                                    status: false,
                                                                                                                                                                                    SpecialInstruction: null,
                                                                                                                                                                                    Frequency: 'Frequency',
                                                                                                                                                                                    Duration: 'Duration',
                                                                                                                                                                                    med_name: null
                                                                                                                                                                                })
                                                                                                                                                                                // this.treatmentStatus[0].status = true
                                                                                                                                                                                this.tempTreatObject = null
                                                                                                                                                                                this.tempTreatObjectIndex = null
                                                                                                                                                                                this.tempTreatFrequency = null
                                                                                                                                                                                this.tempTreatSpecialInstruction = null
                                                                                                                                                                                this.tempTreatDuration = null
                                                                                                                                                                                this.totalOtherTreatment = 0
                                                                                                                                                                                this.treatmentArray = []
                                                                                                                                                                                this.tempPlasterDivIndex = null
                                                                                                                                                                                this.plaster_open_by_main = true
                                                                                                                                                                                this.otherTreatmentPresetShow = false
                                                                                                                                                                                for (var i = 0; i < this.presetArrayOtherTreatment.length; i++) {
                                                                                                                                                                                    this.presetArrayOtherTreatment[i].status = false
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                            this.resetClassPrecPreset()
                                                                                                                                                                        }

                                                                                                                                                                        //Other Treatment
                                                                                                                                                                        openTreatFrequencyModal(data, i) { 
                                                                                                                                                                            console.log(data)
                                                                                                                                                                            this.tempTreatObject = data
                                                                                                                                                                            this.tempTreatObjectIndex = i
                                                                                                                                                                            this.tempTreatSpecialInstruction = null
                                                                                                                                                                            if (this.tempTreatObject[this.tempTreatObjectIndex].SpecialInstruction != null) {
                                                                                                                                                                                this.tempTreatObject[this.tempTreatObjectIndex].SpecialInstruction = null
                                                                                                                                                                            }
                                                                                                                                                                            if (data[i].Frequency == 'Frequency') {
                                                                                                                                                                                this.tempTreatFrequency = null
                                                                                                                                                                            } else {
                                                                                                                                                                                this.tempTreatFrequency = data[i].Frequency
                                                                                                                                                                            }
                                                                                                                                                                            if (data[i].Duration == 'Duration') {
                                                                                                                                                                                this.tempTreatDuration = null
                                                                                                                                                                            } else {
                                                                                                                                                                                this.tempTreatDuration = data[i].Duration
                                                                                                                                                                            }
                                                                                                                                                                            this.plaster_open_by_main = true
                                                                                                                                                                        }

                                                                                                                                                                        openTreatFrequencyModal1(data, i, j) {
                                                                                                                                                                            this.tempTreatObject = data
                                                                                                                                                                            this.tempTreatObjectIndex = i
                                                                                                                                                                            this.tempPlasterDivIndex = j
                                                                                                                                                                            this.tempTreatFrequency = null
                                                                                                                                                                            this.tempTreatSpecialInstruction = null
                                                                                                                                                                            this.tempTreatDuration = null
                                                                                                                                                                            this.plaster_open_by_main = false
                                                                                                                                                                        }

                                                                                                                                                                        onAddMedNameOtherTreat(data, i) {
                                                                                                                                                                            // $("#treatfrequencyModal").modal("show");
                                                                                                                                                                            $("#combinedModal5").modal("show");
                                                                                                                                                                            this.openTreatFrequencyModal(data, i)
                                                                                                                                                                        }

                                                                                                                                                                        selectFromTreatFrequency(data) {
                                                                                                                                                                            this.tempTreatFrequency = data
                                                                                                                                                                        }

                                                                                                                                                                        getTreatFrequencyModalClass(data) {
                                                                                                                                                                            if (data == this.tempTreatFrequency) {
                                                                                                                                                                                return 'active-cel'
                                                                                                                                                                            } else {
                                                                                                                                                                                return ''
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        selectFromTreatSpecialInstruction(data) {
                                                                                                                                                                            this.tempTreatSpecialInstruction = data
                                                                                                                                                                        }

                                                                                                                                                                        getSpecialInstructionModalClass(data) {
                                                                                                                                                                            if (data == this.tempTreatSpecialInstruction) {
                                                                                                                                                                                return 'active-cel'
                                                                                                                                                                            } else {
                                                                                                                                                                                return ''
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        selectFromTreatDuration(data) {
                                                                                                                                                                            this.tempTreatDuration = data
                                                                                                                                                                        }

                                                                                                                                                                        getDurationModalClass(data) {
                                                                                                                                                                            if (data == this.tempTreatDuration) {
                                                                                                                                                                                return 'active-cel'
                                                                                                                                                                            } else {
                                                                                                                                                                                return ''
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        tempSaveFrequency() {
                                                                                                                                                                            if (this.tempTreatSpecialInstruction != null) {
                                                                                                                                                                                this.tempTreatObject[this.tempTreatObjectIndex].SpecialInstruction = this.tempTreatSpecialInstruction
                                                                                                                                                                            }
                                                                                                                                                                            if (this.tempTreatFrequency != null) {
                                                                                                                                                                                this.tempTreatObject[this.tempTreatObjectIndex].Frequency = this.tempTreatFrequency
                                                                                                                                                                                $("#treatdurationModal").modal("show");
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        tempSaveDuration() {
                                                                                                                                                                            if (this.tempTreatDuration != null) {
                                                                                                                                                                                if (this.plaster_open_by_main == true) {
                                                                                                                                                                                    this.tempTreatObject[this.tempTreatObjectIndex].Duration = this.tempTreatDuration
                                                                                                                                                                                } else {
                                                                                                                                                                                    this.treatmentStatus[this.tempTreatObjectIndex].div[this.tempPlasterDivIndex].Duration = this.tempTreatDuration
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }

                                                                                                                                                                        setInjuryValue(data) {
                                                                                                                                                                            if (this.otherInj == null || this.otherInj == '' || this.otherInj.length < 1) {
                                                                                                                                                                                this.tempInjury = data
                                                                                                                                                                            }
                                                                                                                                                                            // if (this.plaster_open_by_main == true) {
                                                                                                                                                                                //     this.treatmentStatus[2].Injury_Area = data
                                                                                                                                                                                // } else {
                                                                                                                                                                                    //     this.treatmentStatus[2].div[this.tempPlasterDivIndex].Injury_Area = data
                                                                                                                                                                                    // }
                                                                                                                                                                                }

                                                                                                                                                                                onAddOtherInj(data) {
                                                                                                                                                                                    this.tempInjury = data[0].value
                                                                                                                                                                                    // this.treatmentStatus[2].div[this.tempPlasterDivIndex].Injury_Area = data[0].value    
                                                                                                                                                                                }

                                                                                                                                                                                onRemoveOtherInj() {
                                                                                                                                                                                    this.tempInjury = null
                                                                                                                                                                                }

                                                                                                                                                                                saveInjury() {
                                                                                                                                                                                    if (this.plaster_open_by_main == true) {
                                                                                                                                                                                        if (this.tempInjury != null) {
                                                                                                                                                                                            this.treatmentStatus[2].Injury_Area = this.tempInjury
                                                                                                                                                                                        } else {
                                                                                                                                                                                            this.treatmentStatus[2].Injury_Area = 'Injury Area'
                                                                                                                                                                                        }
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (this.tempInjury != null) {
                                                                                                                                                                                            this.treatmentStatus[2].div[this.tempPlasterDivIndex].Injury_Area = this.tempInjury
                                                                                                                                                                                        } else {
                                                                                                                                                                                            this.treatmentStatus[2].div[this.tempPlasterDivIndex].Injury_Area = 'Injury Area'
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                    console.log(this.treatmentStatus[2])
                                                                                                                                                                                }

                                                                                                                                                                                getClassInjuryModal(data) {
                                                                                                                                                                                    if (data == this.tempInjury) {
                                                                                                                                                                                        return 'active-cel'
                                                                                                                                                                                    } else {
                                                                                                                                                                                        return ''
                                                                                                                                                                                    }
                                                                                                                                                                                }

                                                                                                                                                                                hideOtherTreatment() {
                                                                                                                                                                                    this.treatmentComplete = false
                                                                                                                                                                                }

                                                                                                                                                                                hideOtherTreatmentFromSide(data) {
                                                                                                                                                                                    if (data == 'Other Treatment') {
                                                                                                                                                                                        this.treatmentComplete = false
                                                                                                                                                                                    }
                                                                                                                                                                                }

                                                                                                                                                                                onAddOtherTreat() {
                                                                                                                                                                                    this.totalOtherTreatment = this.totalOtherTreatment + 1
                                                                                                                                                                                }

                                                                                                                                                                                onRemoveOtherTreat() {
                                                                                                                                                                                    this.totalOtherTreatment = this.totalOtherTreatment - 1
                                                                                                                                                                                }

                                                                                                                                                                                addPlasterDiv() {
                                                                                                                                                                                    if (this.totalOtherTreatment < 4) {
                                                                                                                                                                                        this.treatmentStatus[2].div.push({
                                                                                                                                                                                            name: 'Plaster',
                                                                                                                                                                                            status: false,
                                                                                                                                                                                            SpecialInstruction: null,
                                                                                                                                                                                            Injury_Area: 'Injury Area',
                                                                                                                                                                                            plaster_type: null,
                                                                                                                                                                                            Duration: 'Duration'
                                                                                                                                                                                        })
                                                                                                                                                                                        this.totalOtherTreatment = this.totalOtherTreatment + 1
                                                                                                                                                                                    } else {
                                                                                                                                                                                        this.toastr.warning("Maximum items can be 4", "Warning")
                                                                                                                                                                                    }
                                                                                                                                                                                    console.log(this.totalOtherTreatment)
                                                                                                                                                                                }

                                                                                                                                                                                addOtherDiv() {
                                                                                                                                                                                    if (this.totalOtherTreatment < 4) {
                                                                                                                                                                                        this.treatmentStatus[7].div.push({
                                                                                                                                                                                            name: 'Other',
                                                                                                                                                                                            status: false,
                                                                                                                                                                                            SpecialInstruction: null,
                                                                                                                                                                                            Frequency: 'Frequency',
                                                                                                                                                                                            Duration: 'Duration',
                                                                                                                                                                                            med_name: null
                                                                                                                                                                                        })
                                                                                                                                                                                        this.totalOtherTreatment = this.totalOtherTreatment + 1
                                                                                                                                                                                    } else {
                                                                                                                                                                                        this.toastr.warning("Maximum items can be 4", "Warning")
                                                                                                                                                                                    }
                                                                                                                                                                                    console.log(this.totalOtherTreatment)
                                                                                                                                                                                }

                                                                                                                                                                                removePlasterDiv(i) {
                                                                                                                                                                                    if (this.treatmentStatus[2].div.length > 1) {
                                                                                                                                                                                        // if (this.treatmentStatus[2].div[i].i_presetValue) {
                                                                                                                                                                                            //     var index = this.presetArrayOtherTreatment.findIndex(p => p.i_presetValue == this.treatmentStatus[2].div[i].i_presetValue);
                                                                                                                                                                                            //     this.presetArrayOtherTreatment[index].i_presetLength = this.presetArrayOtherTreatment[index].i_presetLength - 1
                                                                                                                                                                                            //     if (this.presetArrayOtherTreatment[index].i_presetLength == 0) {
                                                                                                                                                                                                //         this.presetArrayOtherTreatment[index].status = false
                                                                                                                                                                                                //     }
                                                                                                                                                                                                // }
                                                                                                                                                                                                if (this.treatmentStatus[2].div[i].i_presetLength) {
                                                                                                                                                                                                    this.treatmentStatus[2].div[i].i_presetLength = this.treatmentStatus[2].div[i].i_presetLength - 1
                                                                                                                                                                                                    if (this.treatmentStatus[2].div[i].i_presetLength == 0) {
                                                                                                                                                                                                        this.presetArrayOtherTreatment[this.treatmentStatus[2].div[i].i_presetValue].status = false
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                                this.treatmentStatus[2].div.splice(i, 1);
                                                                                                                                                                                                this.totalOtherTreatment = this.totalOtherTreatment - 1
                                                                                                                                                                                            } else {
                                                                                                                                                                                                this.treatTab(2)
                                                                                                                                                                                                // var index = this.presetArrayOtherTreatment.findIndex(p => p.i_presetValue == this.treatmentStatus[2].div[i].i_presetValue);
                                                                                                                                                                                                // this.presetArrayOtherTreatment[index].status = false
                                                                                                                                                                                                // this.treatmentStatus[2].status = false
                                                                                                                                                                                                // this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[2].div.length
                                                                                                                                                                                                // this.treatmentStatus[2].div = []
                                                                                                                                                                                                // this.treatmentStatus[2].div.push({
                                                                                                                                                                                                    //     name: 'Plaster',
                                                                                                                                                                                                    //     status: false,
                                                                                                                                                                                                    //     SpecialInstruction: null,
                                                                                                                                                                                                    //     Injury_Area: 'Injury Area',
                                                                                                                                                                                                    //     plaster_type: null,
                                                                                                                                                                                                    //     Duration: 'Duration'
                                                                                                                                                                                                    // })
                                                                                                                                                                                                }
                                                                                                                                                                                            }

                                                                                                                                                                                            removeOtherDiv(i) {
                                                                                                                                                                                                if (this.treatmentStatus[7].div.length > 1) {
                                                                                                                                                                                                    // if (this.treatmentStatus[7].div[i].i_presetValue) {
                                                                                                                                                                                                        //     var index = this.presetArrayOtherTreatment.findIndex(p => p.i_presetValue == this.treatmentStatus[7].i_presetValue);
                                                                                                                                                                                                        //     this.presetArrayOtherTreatment[index].i_presetLength = this.presetArrayOtherTreatment[index].i_presetLength - 1
                                                                                                                                                                                                        //     if (this.presetArrayOtherTreatment[index].i_presetLength == 0) {
                                                                                                                                                                                                            //         this.presetArrayOtherTreatment[index].status = false
                                                                                                                                                                                                            //     }
                                                                                                                                                                                                            // }
                                                                                                                                                                                                            if (this.treatmentStatus[7].div[i].i_presetLength) {
                                                                                                                                                                                                                this.treatmentStatus[7].div[i].i_presetLength = this.treatmentStatus[7].div[i].i_presetLength - 1
                                                                                                                                                                                                                if (this.treatmentStatus[7].div[i].i_presetLength == 0) {
                                                                                                                                                                                                                    this.presetArrayOtherTreatment[this.treatmentStatus[7].div[i].i_presetValue].status = false
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                            this.treatmentStatus[7].div.splice(i, 1);
                                                                                                                                                                                                            this.totalOtherTreatment = this.totalOtherTreatment - 1
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            this.treatTab(7)
                                                                                                                                                                                                            // this.treatmentStatus[7].status = false
                                                                                                                                                                                                            // this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[7].div.length
                                                                                                                                                                                                            // this.treatmentStatus[7].div = []
                                                                                                                                                                                                            // this.treatmentStatus[7].div.push({
                                                                                                                                                                                                                //     name: 'Other',
                                                                                                                                                                                                                //     status: false,
                                                                                                                                                                                                                //     SpecialInstruction: null,
                                                                                                                                                                                                                //     Frequency: 'Frequency',
                                                                                                                                                                                                                //     Duration: 'Duration',
                                                                                                                                                                                                                //     med_name: []
                                                                                                                                                                                                                // })
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }

                                                                                                                                                                                                        getDoctorPrescriptionFields(item) {
                                                                                                                                                                                                            this.userService.GetDoctorPrescriptionFields(item).subscribe(data => {
                                                                                                                                                                                                                console.log(data)
                                                                                                                                                                                                                if (data.response == true) {
                                                                                                                                                                                                                    this.prescList2 = data.data.prescription_fields
                                                                                                                                                                                                                    for (var i = 0; i < this.prescList2.length; i++) {
                                                                                                                                                                                                                        for (var j = 0; j < this.prescList.length; j++) {
                                                                                                                                                                                                                            if (this.prescList2[i].item == this.prescList[j].item) {
                                                                                                                                                                                                                                this.prescList[j].status = true
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }, err => {
                                                                                                                                                                                                                console.log(err);
                                                                                                                                                                                                            })
                                                                                                                                                                                                        }

                                                                                                                                                                                                        GetDoctorSurgeryArray(item) {
                                                                                                                                                                                                            this.userService.GetDoctorSurgeryArray(item).subscribe(data => {
                                                                                                                                                                                                                console.log(data)
                                                                                                                                                                                                                if (data.response == true) {
                                                                                                                                                                                                                    this.suregeryOptionsTop = data.data.suregeryOptionsTop
                                                                                                                                                                                                                    this.suregeryOptions = data.data.suregeryOptions
                                                                                                                                                                                                                    this.totalSurgeryOptionsSelected = this.suregeryOptionsTop.length
                                                                                                                                                                                                                    console.log(this.totalSurgeryOptionsSelected)
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }, err => {
                                                                                                                                                                                                                console.log(err);
                                                                                                                                                                                                            })
                                                                                                                                                                                                        }

                                                                                                                                                                                                        saveClinicalObservations() {
                                                                                                                                                                                                            var items = []
                                                                                                                                                                                                            for (var i = 0; i < this.findingsSelected.length; i++) {
                                                                                                                                                                                                                if(this.findingsSelected[i].value!=null && this.findingsSelected[i].value!=''){
                                                                                                                                                                                                                    items.push(this.findingsSelected[i])
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                            var object = {
                                                                                                                                                                                                                doctor_id: this.doctorData.itemId,
                                                                                                                                                                                                                findingsSelected: items
                                                                                                                                                                                                            }
                                                                                                                                                                                                            this.userService.SaveClinicalObservations(object).subscribe(data => {
                                                                                                                                                                                                                console.log(data)
                                                                                                                                                                                                                if (data.response == true) {
                                                                                                                                                                                                                    this.GetDoctorClinicalObservations(this.doctorData.itemId)
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }, err => {
                                                                                                                                                                                                                console.log(err);
                                                                                                                                                                                                            })
                                                                                                                                                                                                        }

                                                                                                                                                                                                        GetDoctorClinicalObservations(item) {
                                                                                                                                                                                                            this.doctorClinicalObservation = []
                                                                                                                                                                                                            this.userService.GetDoctorClinicalObservations(item).subscribe(data => {
                                                                                                                                                                                                                console.log(data)
                                                                                                                                                                                                                this.doctorClinicalObservation = data.data
                                                                                                                                                                                                            }, err => {
                                                                                                                                                                                                                console.log(err);
                                                                                                                                                                                                            })
                                                                                                                                                                                                        }

                                                                                                                                                                                                        saveSymptoms() {
                                                                                                                                                                                                            var items = []
                                                                                                                                                                                                            for (var i = 0; i < this.symptomsSelected.length; i++) {
                                                                                                                                                                                                                if(this.symptomsSelected[i].value!=null && this.symptomsSelected[i].value!=''){
                                                                                                                                                                                                                    items.push(this.symptomsSelected[i])
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                            console.log(items)
                                                                                                                                                                                                            // this.SaveUniqueMedicinesForAnalytics('Symptoms', items)
                                                                                                                                                                                                            var object = {
                                                                                                                                                                                                                doctor_id: this.doctorData.itemId,
                                                                                                                                                                                                                findingsSelected: items
                                                                                                                                                                                                            }
                                                                                                                                                                                                            this.userService.SaveSymptoms(object).subscribe(data => {
                                                                                                                                                                                                                console.log(data)
                                                                                                                                                                                                                if (data.response == true) {
                                                                                                                                                                                                                    this.GetDoctorSymptoms(this.doctorData.itemId)
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }, err => {
                                                                                                                                                                                                                console.log(err);
                                                                                                                                                                                                            })
                                                                                                                                                                                                        }

                                                                                                                                                                                                        GetDoctorSymptoms(item) {
                                                                                                                                                                                                            this.doctorSymptomsDB = []
                                                                                                                                                                                                            this.userService.GetDoctorSymptoms(item).subscribe(data => {
                                                                                                                                                                                                                console.log(data)
                                                                                                                                                                                                                this.doctorSymptomsDB = data.data
                                                                                                                                                                                                            }, err => {
                                                                                                                                                                                                                console.log(err);
                                                                                                                                                                                                            })
                                                                                                                                                                                                        }

                                                                                                                                                                                                        saveDiagnosis() {
                                                                                                                                                                                                            var items = []
                                                                                                                                                                                                            for (var i = 0; i < this.diagnosisSelected.length; i++) {
                                                                                                                                                                                                                if(this.diagnosisSelected[i].value!=null && this.diagnosisSelected[i].value!=''){
                                                                                                                                                                                                                    items.push(this.diagnosisSelected[i])
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                            this.SaveUniqueMedicinesForAnalytics('Diagnosis', items)
                                                                                                                                                                                                            var object = {
                                                                                                                                                                                                                doctor_id: this.doctorData.itemId,
                                                                                                                                                                                                                findingsSelected: items
                                                                                                                                                                                                            }
                                                                                                                                                                                                            this.userService.SaveDiagnosis(object).subscribe(data => {
                                                                                                                                                                                                                console.log(data)
                                                                                                                                                                                                                if (data.response == true) {
                                                                                                                                                                                                                    this.GetDoctorDiagnosis(this.doctorData.itemId)
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }, err => {
                                                                                                                                                                                                                console.log(err);
                                                                                                                                                                                                            })
                                                                                                                                                                                                        }

                                                                                                                                                                                                        GetDoctorDiagnosis(item) {
                                                                                                                                                                                                            this.doctorDiagnosisDB = []
                                                                                                                                                                                                            this.userService.GetDoctorDiagnosis(item).subscribe(data => {
                                                                                                                                                                                                                console.log(data)
                                                                                                                                                                                                                this.doctorDiagnosisDB = data.data
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
                                                                                                                                                                                                                    // for medication info 
                                                                                                                                                                                                                    // else if (type == 'TabletInfo') {
                                                                                                                                                                                                                        //     this.doctorMedicationTabletInfoDB = []
                                                                                                                                                                                                                        //     this.doctorMedicationTabletInfoDB = data.data
                                                                                                                                                                                                                        // } else if (type == 'CapsuleInfo') {
                                                                                                                                                                                                                            //     this.doctorMedicationCapsuleInfoDB = []
                                                                                                                                                                                                                            //     this.doctorMedicationCapsuleInfoDB = data.data
                                                                                                                                                                                                                            // } else if (type == 'SyrupInfo') {
                                                                                                                                                                                                                                //     this.doctorMedicationSyrupInfoDB = []
                                                                                                                                                                                                                                //     this.doctorMedicationSyrupInfoDB = data.data
                                                                                                                                                                                                                                // } else if (type == 'SuspensionInfo') {
                                                                                                                                                                                                                                    //     this.doctorMedicationSuspensionInfoDB = []
                                                                                                                                                                                                                                    //     this.doctorMedicationSuspensionInfoDB = data.data
                                                                                                                                                                                                                                    // } else if (type == 'EmulsionInfo') {
                                                                                                                                                                                                                                        //     this.doctorMedicationEmulsionInfoDB = []
                                                                                                                                                                                                                                        //     this.doctorMedicationEmulsionInfoDB = data.data
                                                                                                                                                                                                                                        // } else if (type == 'SolutionInfo') {
                                                                                                                                                                                                                                            //     this.doctorMedicationSolutionInfoDB = []
                                                                                                                                                                                                                                            //     this.doctorMedicationSolutionInfoDB = data.data
                                                                                                                                                                                                                                            // } else if (type == 'InjectionInfo') {
                                                                                                                                                                                                                                                //     this.doctorMedicationInjectionInfoDB = []
                                                                                                                                                                                                                                                //     this.doctorMedicationInjectionInfoDB = data.data
                                                                                                                                                                                                                                                // } else if (type == 'CreamInfo') {
                                                                                                                                                                                                                                                    //     this.doctorMedicationCreamInfoDB = []
                                                                                                                                                                                                                                                    //     this.doctorMedicationCreamInfoDB = data.data
                                                                                                                                                                                                                                                    // } else if (type == 'OitmentInfo') {
                                                                                                                                                                                                                                                        //     this.doctorMedicationOitmentInfoDB = []
                                                                                                                                                                                                                                                        //     this.doctorMedicationOitmentInfoDB = data.data
                                                                                                                                                                                                                                                        // } else if (type == 'GelInfo') {
                                                                                                                                                                                                                                                            //     this.doctorMedicationGelInfoDB = []
                                                                                                                                                                                                                                                            //     this.doctorMedicationGelInfoDB = data.data
                                                                                                                                                                                                                                                            // } else if (type == 'LotionInfo') {
                                                                                                                                                                                                                                                                //     this.doctorMedicationLotionInfoDB = []
                                                                                                                                                                                                                                                                //     this.doctorMedicationLotionInfoDB = data.data
                                                                                                                                                                                                                                                                // } else if (type == 'DropsInfo') {
                                                                                                                                                                                                                                                                    //     this.doctorMedicationDropsInfoDB = []
                                                                                                                                                                                                                                                                    //     this.doctorMedicationDropsInfoDB = data.data
                                                                                                                                                                                                                                                                    // } else if (type == 'AerosolsInfo') {
                                                                                                                                                                                                                                                                        //     this.doctorMedicationAerosolsInfoDB = []
                                                                                                                                                                                                                                                                        //     this.doctorMedicationAerosolsInfoDB = data.data
                                                                                                                                                                                                                                                                        // } else if (type == 'PowderInfo') {
                                                                                                                                                                                                                                                                            //     this.doctorMedicationPowderInfoDB = []
                                                                                                                                                                                                                                                                            //     this.doctorMedicationPowderInfoDB = data.data
                                                                                                                                                                                                                                                                            // } else if (type == 'MouthWashInfo') {
                                                                                                                                                                                                                                                                                //     this.doctorMedicationMouthwashInfoDB = []
                                                                                                                                                                                                                                                                                //     this.doctorMedicationMouthwashInfoDB = data.data
                                                                                                                                                                                                                                                                                // }
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                        }, err => {
                                                                                                                                                                                                                                                                            console.log(err);
                                                                                                                                                                                                                                                                        })
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
            // if (type == 'Tablet') {
                //     this.GetMedicationSuggestions('Tablet')
                // } else if (type == 'Capsule') {
                    //     this.GetMedicationSuggestions('Capsule')
                    // } else if (type == 'Syrup') {
                        //     this.GetMedicationSuggestions('Syrup')
                        // } else if (type == 'Suspension') {
                            //     this.GetMedicationSuggestions('Suspension')
                            // } else if (type == 'Emulsion') {
                                //     this.GetMedicationSuggestions('Emulsion')
                                // } else if (type == 'Solution') {
                                    //     this.GetMedicationSuggestions('Solution')
                                    // } else if (type == 'Injection') {
                                        //     this.GetMedicationSuggestions('Injection')
                                        // } else if (type == 'Cream') {
                                            //     this.GetMedicationSuggestions('Cream')
                                            // } else if (type == 'Oitment') {
                                                //     this.GetMedicationSuggestions('Oitment')
                                                // } else if (type == 'Gel') {
                                                    //     this.GetMedicationSuggestions('Gel')
                                                    // } else if (type == 'Lotion') {
                                                        //     this.GetMedicationSuggestions('Lotion')
                                                        // } else if (type == 'Drops') {
                                                            //     this.GetMedicationSuggestions('Drops')
                                                            // } else if (type == 'Aerosols') {
                                                                //     this.GetMedicationSuggestions('Aerosols')
                                                                // } else if (type == 'Powder') {
                                                                    //     this.GetMedicationSuggestions('Powder')
                                                                    // } else if (type == 'MouthWash') {
                                                                        //     this.GetMedicationSuggestions('MouthWash')
                                                                        // }
                                                                        // // medication info
                                                                        // else if (type == 'TabletInfo') {
                                                                            //     this.GetMedicationSuggestions('TabletInfo')
                                                                            // } else if (type == 'CapsuleInfo') {
                                                                                //     this.GetMedicationSuggestions('CapsuleInfo')
                                                                                // } else if (type == 'SyrupInfo') {
                                                                                    //     this.GetMedicationSuggestions('SyrupInfo')
                                                                                    // } else if (type == 'SuspensionInfo') {
                                                                                        //     this.GetMedicationSuggestions('SuspensionInfo')
                                                                                        // } else if (type == 'EmulsionInfo') {
                                                                                            //     this.GetMedicationSuggestions('EmulsionInfo')
                                                                                            // } else if (type == 'SolutionInfo') {
                                                                                                //     this.GetMedicationSuggestions('SolutionInfo')
                                                                                                // } else if (type == 'InjectionInfo') {
                                                                                                    //     this.GetMedicationSuggestions('InjectionInfo')
                                                                                                    // } else if (type == 'CreamInfo') {
                                                                                                        //     this.GetMedicationSuggestions('CreamInfo')
                                                                                                        // } else if (type == 'OitmentInfo') {
                                                                                                            //     this.GetMedicationSuggestions('OitmentInfo')
                                                                                                            // } else if (type == 'GelInfo') {
                                                                                                                //     this.GetMedicationSuggestions('GelInfo')
                                                                                                                // } else if (type == 'LotionInfo') {
                                                                                                                    //     this.GetMedicationSuggestions('LotionInfo')
                                                                                                                    // } else if (type == 'DropsInfo') {
                                                                                                                        //     this.GetMedicationSuggestions('DropsInfo')
                                                                                                                        // } else if (type == 'AerosolsInfo') {
                                                                                                                            //     this.GetMedicationSuggestions('AerosolsInfo')
                                                                                                                            // } else if (type == 'PowderInfo') {
                                                                                                                                //     this.GetMedicationSuggestions('PowderInfo')
                                                                                                                                // } else if (type == 'MouthWashInfo') {
                                                                                                                                    //     this.GetMedicationSuggestions('MouthWashInfo')
                                                                                                                                    // }
                                                                                                                                } else {
                                                                                                                                    // this.toastr.error(data.message, "Error")
                                                                                                                                    // if (data.message == "Data already exists") {
                                                                                                                                        //     let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});

                                                                                                                                        //     dialogRef.afterClosed().subscribe(result => {
                                                                                                                                            //         console.log('The dialog was closed');
                                                                                                                                            //         if (result == "yes") {
                                                                                                                                                //             let object = {
                                                                                                                                                    //                 doctor_id: this.doctorData.itemId,
                                                                                                                                                    //                 type: type,
                                                                                                                                                    //                 observation: item,
                                                                                                                                                    //                 update_status: true
                                                                                                                                                    //             }
                                                                                                                                                    //             this.userService.SaveMedicationSuggestion(object).subscribe(data => {
                                                                                                                                                        //                 this.toastr.success(data.message, "Success")
                                                                                                                                                        //                 if (data.response == true) {
                                                                                                                                                            //                     this.GetMedicationSuggestions(type)
                                                                                                                                                            //                 }
                                                                                                                                                            //             }, err => {
                                                                                                                                                                //                 console.log(err);
                                                                                                                                                                //             })
                                                                                                                                                                //         } else {
                                                                                                                                                                    //             console.log("error or No Thanks button clicked")
                                                                                                                                                                    //         }
                                                                                                                                                                    //     });
                                                                                                                                                                    // }
                                                                                                                                                                }
                                                                                                                                                            }, err => {
                                                                                                                                                                console.log(err);
                                                                                                                                                            })
}

GetSavedSuggestions(type) {
    let object = {
        doctor_id: this.doctorData.itemId,
        type: type
    }
    this.userService.GetSavedSuggestions(object).subscribe(data => {
        console.log(data)
        if (data.response == true) {
            if (type == 'Lifestyle') {
                this.doctorOtherTreatmentDB = []
                this.doctorOtherTreatmentDB = data.data
            } else if (type == 'Bandage') {
                this.doctorOtherTreatmentBandageDB = []
                this.doctorOtherTreatmentBandageDB = data.data
            } else if (type == 'Other') {
                this.doctorOtherTreatmentOtherDB = []
                this.doctorOtherTreatmentOtherDB = data.data
            } else if (type == 'Gargle') {
                this.doctorOtherTreatmentGargleDB = []
                this.doctorOtherTreatmentGargleDB = data.data
            } else if (type == 'Dressing') {
                this.doctorOtherTreatmentDressingDB = []
                this.doctorOtherTreatmentDressingDB = data.data
            } else if (type == 'Instruction') {
                this.instructionsSavedDB = []
                this.instructionsSavedDB = data.data
            } else if (type == 'Pre Condition') {
                this.preConditionPresetArray = []
                this.preConditionPresetArray = data.data
            } else if (type == 'Allergy') {
                this.allergyPresetArray = []
                this.allergyPresetArray = data.data
            }
        }
    }, err => {
        console.log(err);
    })
}

SaveOtherTreatmentSuggestions(type, item) {
    let object = {
        doctor_id: this.doctorData.itemId,
        type: type,
        observation: item
    }
    console.log(object)
    this.userService.SaveOtherTreatmentSuggestions(object).subscribe(data => {
        console.log(data)
        if (data.response == true) {
            if (type == 'Lifestyle') {
                this.GetSavedSuggestions('Lifestyle')
            } else if (type == 'Gargle') {
                this.GetSavedSuggestions('Gargle')
            } else if (type == 'Bandage') {
                this.GetSavedSuggestions('Bandage')
            } else if (type == 'Other') {
                this.GetSavedSuggestions('Other')
            } else if (type == 'Dressing') {
                this.GetSavedSuggestions('Dressing')
            } else if (type == 'Instruction') {
                this.GetSavedSuggestions('Instruction')
            } else if (type == 'Pre Condition') {
                this.GetSavedSuggestions('Pre Condition')
            } else if (type == 'Allergy') {
                this.GetSavedSuggestions('Allergy')
            } else {
                this.GetSurgerySuggestions(type)
            }
        }
    }, err => {
        console.log(err);
    })
}

onTextChange(type, suggestion) {
    var type1 = null
    if (type == 'Patient Complaints') {
        type = 'SYMPTOMS'
        type1 = 'Patient Complaints'
    }
    var object = {
        type: type,
        suggestion: suggestion
    }
    console.log(object)
    this.userService.SearchSuggestion(object).subscribe(data => {
        console.log(data)
        if (data.response == true) {
            if (type == 'Pathology') {
                this.pathologySuggestionDB = data.data
            } else if (type == 'X-Ray') {
                this.xraySuggestionDB = data.data
            } else if (type == 'Ultrasound') {
                this.ultraSoundSuggestionDB = data.data
            } else if (type == 'Doppler Studies') {
                this.dopplerSuggestionDB = data.data
            } else if (type == 'ECG') {
                this.ecgSuggestionDB = data.data
            } else if (type == 'EEG') {
                this.eegSuggestionDB = data.data
            } else if (type == 'TMT') {
                this.tmtSuggestionDB = data.data
            } else if (type == 'Echo') {
                this.echoSuggestionDB = data.data
            } else if (type == 'CT-Scan') {
                this.ctScanSuggestionDB = data.data
            } else if (type == 'MRI') {
                this.mriSuggestionDB = data.data
            } else if (type == 'NERVE TEST') {
                this.nerveSuggestionDB = data.data
            } else if (type == 'Audiometry') {
                this.audioSuggestionDB = data.data
            } else if (type == 'Bone densitometry') {
                this.boneSuggestionDB = data.data
            } else if (type == 'Eye Test') {
                this.eyeSuggestionDB = data.data
            } else if (type == 'Mammograaphy') {
                this.mammograaphySuggestionDB = data.data
            } else if (type == 'Lung Test') {
                this.lungSuggestionDB = data.data
            } else if(type== 'Diagnosis') {
                this.doctorDiagnosisDB = data.data
            } else if (type == 'SYMPTOMS' && type1 == null) {
                this.doctorSymptomsDB = data.data
            } else if (type == 'SYMPTOMS' && type1 == 'Patient Complaints') {
                this.doctorClinicalObservation = data.data
            }
        }
    }, err => {
        console.log(err);
    })
}

GetInvestigationSuggestions(type) {
    let object = {
        doctor_id: this.doctorData.itemId,
        type: type
    }
    this.userService.GetInvestigationSuggestions(object).subscribe(data => {
        console.log(data)
        if (data.response == true) {
            if (type == 'Pathology') {
                this.pathologySuggestionDB = data.data
            } else if (type == 'X-Ray') {
                this.xraySuggestionDB = data.data
            } else if (type == 'Ultrasound') {
                this.ultraSoundSuggestionDB = data.data
            } else if (type == 'Doppler Studies') {
                this.dopplerSuggestionDB = data.data
            } else if (type == 'ECG') {
                this.ecgSuggestionDB = data.data
            } else if (type == 'EEG') {
                this.eegSuggestionDB = data.data
            } else if (type == 'TMT') {
                this.tmtSuggestionDB = data.data
            } else if (type == 'Echo') {
                this.echoSuggestionDB = data.data
            } else if (type == 'CT-Scan') {
                this.ctScanSuggestionDB = data.data
            } else if (type == 'MRI') {
                this.mriSuggestionDB = data.data
            } else if (type == 'NERVE TEST') {
                this.nerveSuggestionDB = data.data
            } else if (type == 'Audiometry') {
                this.audioSuggestionDB = data.data
            } else if (type == 'Eye Tests') {
                this.eyeSuggestionDB = data.data
            } else if (type == 'Others') {
                this.otherSuggestionDB = data.data
            }
        }
    }, err => {
        console.log(err);
    })
}

saveInvestigationSuggestion(type, item) {
    let object = {
        doctor_id: this.doctorData.itemId,
        type: type,
        observation: item.value
    }
    console.log(object)
    this.userService.SaveInvestigationSuggestion(object).subscribe(data => {
        console.log(data)
    }, err => {
        console.log(err);
    })
}

GetSurgerySuggestions(type) {
    let object = {
        doctor_id: this.doctorData.itemId,
        type: type
    }
    this.userService.GetSavedSuggestions(object).subscribe(data => {
        console.log(data)
        if (data.response == true) {
            var index = -1
            for (var i = 0; i < this.suregeryOptions.length; i++) {
                if (this.suregeryOptions[i].name == type) {
                    index = i
                    break
                }
            }
            if (index > -1) {
                this.suregeryOptions[i].database = data.data
            }
        }
    }, err => {
        console.log(err);
    })
}

// addOtherPrecond() {
    //     this.precondlength = this.precondlength + 1
    // }

    // removeOtherPrecond() {
        //     this.precondlength = this.precondlength - 1
        // }

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

        PresetsShowHide(type) {
            if (type == 'Medication') {
                this.medicationPresetShow = !this.medicationPresetShow
            } else if (type == 'Instructions') {
                this.instructionPresetShow = !this.instructionPresetShow
            } else if (type == 'Surgery') {
                this.surgeryPresetShow = !this.surgeryPresetShow
            } else if (type == 'Other Treatments') {
                this.otherTreatmentPresetShow = !this.otherTreatmentPresetShow
            } else if (type == 'Investigation') {
                this.investigationPresetShow = !this.investigationPresetShow
            }
        }

        GetDoctorPreset() {
            this.doctorPresetArray = []
            this.userService.GetDoctorPreset(this.doctorData.itemId).subscribe(data => {
                console.log(data)
                this.doctorPresetArray = data.data
                // for (var i = 0; i < this.doctorPresetArray.length; i++) {
                    //     this.doctorPresetArray[i].newPresetArray = []
                    //     for (var j = 0; j < this.doctorPresetArray[i].preset_array.length; j++) {
                        //         this.doctorPresetArray[i].preset_array[j].status = true
                        //         this.doctorPresetArray[i].newPresetArray.push(this.doctorPresetArray[i].preset_array[j])
                        //     }
                        // }
                    }, err => {
                        console.log(err);
                    })
        }

        showHidePreset(type, i) {
            if (type == 'Medication') {
                if (!this.doctorPresetArray[i].status || this.doctorPresetArray[i].status == false) {
                    var total = this.totalMedications + this.doctorPresetArray[i].preset_array.length
                    if (total > 9) {
                        this.toastr.warning("Maximum items can be 10", "Warning")
                    } else {
                        if (this.doctorPresetArray[i].preset_array.length > 0) {
                            this.doctorPresetArray[i].i_presetLength = this.doctorPresetArray[i].preset_array.length
                            this.doctorPresetArray[i].i_presetValue = i
                            for (var j = 0; j < this.doctorPresetArray[i].preset_array.length; j++) {
                                this.doctorPresetArray[i].status = true
                                this.doctorPresetArray[i].preset_array[j].i_presetValue = i
                                this.doctorPresetArray[i].preset_array[j].i_presetLength = this.doctorPresetArray[i].preset_array.length
                                if (this.doctorPresetArray[i].preset_array[j].name == 'Tablet' && this.medicationTabArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.tab.length; k++) {
                                        if (this.medication.tab[k].med_name == null) {
                                            this.medication.tab.splice(k, 1)
                                            // this.medicationTabArray.push('1')
                                            if (this.medicationStatus[0].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.tab.push(object2)
                                            this.medicationStatus[0].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationTabArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.tab.push(object2)
                                        this.medicationStatus[0].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Capsule' && this.medicationCapArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.cap.length; k++) {
                                        if (this.medication.cap[k].med_name == null) {
                                            this.medication.cap.splice(k, 1)
                                            // this.medicationCapArray.push('1')
                                            if (this.medicationStatus[1].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.cap.push(object2)
                                            this.medicationStatus[1].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationCapArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.cap.push(object2)
                                        this.medicationStatus[1].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Syrup' && this.medicationSypArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.syp.length; k++) {
                                        if (this.medication.syp[k].med_name == null) {
                                            this.medication.syp.splice(k, 1)
                                            // this.medicationSypArray.push('1')
                                            if (this.medicationStatus[2].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.syp.push(object2)
                                            this.medicationStatus[2].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationSypArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.syp.push(object2)
                                        this.medicationStatus[2].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Suspension' && this.medicationSuspArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.susp.length; k++) {
                                        if (this.medication.susp[k].med_name == null) {
                                            this.medication.susp.splice(k, 1)
                                            // this.medicationSuspArray.push('1')
                                            if (this.medicationStatus[3].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.susp.push(object2)
                                            this.medicationStatus[3].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationSuspArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.susp.push(object2)
                                        this.medicationStatus[3].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Emulsion' && this.medicationEmulsnArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.emulsn.length; k++) {
                                        if (this.medication.emulsn[k].med_name == null) {
                                            this.medication.emulsn.splice(k, 1)
                                            // this.medicationEmulsnArray.push('1')
                                            if (this.medicationStatus[4].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.emulsn.push(object2)
                                            this.medicationStatus[4].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationEmulsnArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.emulsn.push(object2)
                                        this.medicationStatus[4].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Injection' && this.medicationInjArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.injection.length; k++) {
                                        if (this.medication.injection[k].med_name == null) {
                                            this.medication.injection.splice(k, 1)
                                            // this.medicationInjArray.push('1')
                                            if (this.medicationStatus[6].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.injection.push(object2)
                                            this.medicationStatus[6].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationInjArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.injection.push(object2)
                                        this.medicationStatus[6].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Cream' && this.medicationCreamArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.cream.length; k++) {
                                        if (this.medication.cream[k].med_name == null) {
                                            this.medication.cream.splice(k, 1)
                                            // this.medicationCreamArray.push('1')
                                            if (this.medicationStatus[7].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.cream.push(object2)
                                            this.medicationStatus[7].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationCreamArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.cream.push(object2)
                                        this.medicationStatus[7].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Gel' && this.medicationGelArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.gel.length; k++) {
                                        if (this.medication.gel[k].med_name == null) {
                                            this.medication.gel.splice(k, 1)
                                            // this.medicationGelArray.push('1')
                                            if (this.medicationStatus[8].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.gel.push(object2)
                                            this.medicationStatus[8].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationGelArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.gel.push(object2)
                                        this.medicationStatus[8].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Drops' && this.medicationDropsArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.drops.length; k++) {
                                        if (this.medication.drops[k].med_name == null) {
                                            this.medication.drops.splice(k, 1)
                                            // this.medicationDropsArray.push('1')
                                            if (this.medicationStatus[9].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.drops.push(object2)
                                            this.medicationStatus[9].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationDropsArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.drops.push(object2)
                                        this.medicationStatus[9].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Lotion' && this.medicationLotionArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.lotion.length; k++) {
                                        if (this.medication.lotion[k].med_name == null) {
                                            this.medication.lotion.splice(k, 1)
                                            // this.medicationLotionArray.push('1')
                                            if (this.medicationStatus[13].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.lotion.push(object2)
                                            this.medicationStatus[13].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationLotionArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.lotion.push(object2)
                                        this.medicationStatus[13].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Ointment' && this.medicationOintmentArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.ointment.length; k++) {
                                        if (this.medication.ointment[k].med_name == null) {
                                            this.medication.ointment.splice(k, 1)
                                            // this.medicationOintmentArray.push('1')
                                            if (this.medicationStatus[14].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.ointment.push(object2)
                                            this.medicationStatus[14].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationOintmentArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.ointment.push(object2)
                                        this.medicationStatus[14].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Powder' && this.medicationPowderArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.powder.length; k++) {
                                        if (this.medication.powder[k].med_name == null) {
                                            this.medication.powder.splice(k, 1)
                                            // this.medicationPowderArray.push('1')
                                            if (this.medicationStatus[11].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.powder.push(object2)
                                            this.medicationStatus[11].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationPowderArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.powder.push(object2)
                                        this.medicationStatus[11].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Aerosols' && this.medicationAerosolsArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.aerosols.length; k++) {
                                        if (this.medication.aerosols[k].med_name == null) {
                                            this.medication.aerosols.splice(k, 1)
                                            // this.medicationAerosolsArray.push('1')
                                            if (this.medicationStatus[10].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.aerosols.push(object2)
                                            this.medicationStatus[10].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationAerosolsArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.aerosols.push(object2)
                                        this.medicationStatus[10].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'MouthWash' && this.medicationMouthWashArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.mouthwash.length; k++) {
                                        if (this.medication.mouthwash[k].med_name == null) {
                                            this.medication.mouthwash.splice(k, 1)
                                            // this.medicationMouthWashArray.push('1')
                                            if (this.medicationStatus[12].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.mouthwash.push(object2)
                                            this.medicationStatus[12].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationMouthWashArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.mouthwash.push(object2)
                                        this.medicationStatus[12].status = true
                                    }
                                } else if (this.doctorPresetArray[i].preset_array[j].name == 'Solution' && this.medicationSolutionArray.length < 10) {
                                    var boolean = false
                                    for (var k = 0; k < this.medication.solution.length; k++) {
                                        if (this.medication.solution[k].med_name == null) {
                                            this.medication.solution.splice(k, 1)
                                            // this.medicationSolutionArray.push('1')
                                            if (this.medicationStatus[5].status == false) {
                                                this.totalMedications = this.totalMedications + 1
                                            }
                                            var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                            this.medication.solution.push(object2)
                                            this.medicationStatus[5].status = true
                                            boolean = true
                                            break;
                                        }
                                    }
                                    if (boolean == false) {
                                        this.medicationSolutionArray.push('1')
                                        this.totalMedications = this.totalMedications + 1
                                        var object2 = Object.assign({}, this.doctorPresetArray[i].preset_array[j]);
                                        this.medication.solution.push(object2)
                                        this.medicationStatus[5].status = true
                                    }
                                }
                            }
                        }
                    }
                } else {
                    this.doctorPresetArray[i].status = false
                    this.totalMedicationPresetSelected = this.totalMedicationPresetSelected - 1
                    this.totalMedications = this.totalMedications - this.doctorPresetArray[i].i_presetLength
                    for (var j = 0; j < this.doctorPresetArray[i].preset_array.length; j++) {
                        if (this.doctorPresetArray[i].preset_array[j].name == 'Tablet' && this.medicationTabArray.length > 0) {
                            for (var k = 0; k < this.medication.tab.length; k++) {
                                if (this.medication.tab[k].i_presetValue == i) {
                                    this.medication.tab.splice(k, 1)
                                    this.medicationTabArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationTabArray.length == 0) {
                                this.addMoreTab('Tab')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[0].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Capsule' && this.medicationCapArray.length > 0) {
                            for (var k = 0; k < this.medication.cap.length; k++) {
                                if (this.medication.cap[k].i_presetValue == i) {
                                    this.medication.cap.splice(k, 1)
                                    this.medicationCapArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationCapArray.length == 0) {
                                this.addMoreTab('Cap')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[1].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Syrup' && this.medicationSypArray.length > 0) {
                            for (var k = 0; k < this.medication.syp.length; k++) {
                                if (this.medication.syp[k].i_presetValue == i) {
                                    this.medication.syp.splice(k, 1)
                                    this.medicationSypArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationSypArray.length == 0) {
                                this.addMoreTab('Syp')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[2].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Suspension' && this.medicationSuspArray.length > 0) {
                            for (var k = 0; k < this.medication.susp.length; k++) {
                                if (this.medication.susp[k].i_presetValue == i) {
                                    this.medication.susp.splice(k, 1)
                                    this.medicationSuspArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationSuspArray.length == 0) {
                                this.addMoreTab('Susp')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[3].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Emulsion' && this.medicationEmulsnArray.length > 0) {
                            for (var k = 0; k < this.medication.emulsn.length; k++) {
                                if (this.medication.emulsn[k].i_presetValue == i) {
                                    this.medication.emulsn.splice(k, 1)
                                    this.medicationEmulsnArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationEmulsnArray.length == 0) {
                                this.addMoreTab('Emulsn')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[4].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Injection' && this.medicationInjArray.length > 0) {
                            for (var k = 0; k < this.medication.injection.length; k++) {
                                if (this.medication.injection[k].i_presetValue == i) {
                                    this.medication.injection.splice(k, 1)
                                    this.medicationInjArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationInjArray.length == 0) {
                                this.addMoreTab('Inj')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[6].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Cream' && this.medicationCreamArray.length > 0) {
                            for (var k = 0; k < this.medication.cream.length; k++) {
                                if (this.medication.cream[k].i_presetValue == i) {
                                    this.medication.cream.splice(k, 1)
                                    this.medicationCreamArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationCreamArray.length == 0) {
                                this.addMoreTab('Cream')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[7].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Gel' && this.medicationGelArray.length > 0) {
                            for (var k = 0; k < this.medication.gel.length; k++) {
                                if (this.medication.gel[k].i_presetValue == i) {
                                    this.medication.gel.splice(k, 1)
                                    this.medicationGelArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationGelArray.length == 0) {
                                this.addMoreTab('Gel')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[8].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Drops' && this.medicationDropsArray.length > 0) {
                            for (var k = 0; k < this.medication.drops.length; k++) {
                                if (this.medication.drops[k].i_presetValue == i) {
                                    this.medication.drops.splice(k, 1)
                                    this.medicationDropsArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationDropsArray.length == 0) {
                                this.addMoreTab('Drops')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[9].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Lotion' && this.medicationLotionArray.length > 0) {
                            for (var k = 0; k < this.medication.lotion.length; k++) {
                                if (this.medication.lotion[k].i_presetValue == i) {
                                    this.medication.lotion.splice(k, 1)
                                    this.medicationLotionArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationLotionArray.length == 0) {
                                this.addMoreTab('Lotion')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[13].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Ointment' && this.medicationOintmentArray.length > 0) {
                            for (var k = 0; k < this.medication.ointment.length; k++) {
                                if (this.medication.ointment[k].i_presetValue == i) {
                                    this.medication.ointment.splice(k, 1)
                                    this.medicationOintmentArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationOintmentArray.length == 0) {
                                this.addMoreTab('Ointment')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[14].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Powder' && this.medicationPowderArray.length > 0) {
                            for (var k = 0; k < this.medication.powder.length; k++) {
                                if (this.medication.powder[k].i_presetValue == i) {
                                    this.medication.powder.splice(k, 1)
                                    this.medicationPowderArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationPowderArray.length == 0) {
                                this.addMoreTab('Powder')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[11].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Aerosols' && this.medicationAerosolsArray.length > 0) {
                            for (var k = 0; k < this.medication.aerosols.length; k++) {
                                if (this.medication.aerosols[k].i_presetValue == i) {
                                    this.medication.aerosols.splice(k, 1)
                                    this.medicationAerosolsArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationAerosolsArray.length == 0) {
                                this.addMoreTab('Aerosols')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[10].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'MouthWash' && this.medicationMouthWashArray.length > 0) {
                            for (var k = 0; k < this.medication.mouthwash.length; k++) {
                                if (this.medication.mouthwash[k].i_presetValue == i) {
                                    this.medication.mouthwash.splice(k, 1)
                                    this.medicationMouthWashArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationMouthWashArray.length == 0) {
                                this.addMoreTab('MouthWash')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[12].status = false
                            }
                        } else if (this.doctorPresetArray[i].preset_array[j].name == 'Solution' && this.medicationSolutionArray.length > 0) {
                            for (var k = 0; k < this.medication.solution.length; k++) {
                                if (this.medication.solution[k].i_presetValue == i) {
                                    this.medication.solution.splice(k, 1)
                                    this.medicationSolutionArray.splice(0, 1)
                                    break;
                                }
                            }
                            if (this.medicationSolutionArray.length == 0) {
                                this.addMoreTab('Solution')
                                this.totalMedications = this.totalMedications - 1
                                this.medicationStatus[5].status = false
                            }
                        }
                    }
                }
                console.log(this.totalMedications)
            } else if (type == 'Instructions') {
                if (!this.presetArrayInstruction[i].status || this.presetArrayInstruction[i].status == false) {
                    if (this.presetArrayInstruction[i].preset_array.length == 3 && this.inputBox.length == 1) {
                        if (this.inputBox[0].inputInstruction.length == 0 || this.inputBox[0].inputInstruction == '') {
                            this.inputBox = []
                            for (var k = 0; k < this.presetArrayInstruction[i].preset_array.length; k++) {
                                this.presetArrayInstruction[i].preset_array[k].i_presetValue = i
                                this.presetArrayInstruction[i].preset_array[k].i_presetLength = this.presetArrayInstruction[i].preset_array.length
                                var object2 = Object.assign({}, this.presetArrayInstruction[i].preset_array[k]);
                                this.inputBox.push(object2)
                            }
                            this.presetArrayInstruction[i].status = true
                        } else {
                            this.toastr.warning("Maximum items can be 3", "Warning")
                        }
                    } else if (this.presetArrayInstruction[i].preset_array.length + this.inputBox.length < 4) {
                        for (var j = 0; j < this.inputBox.length; j++) {
                            if (this.inputBox[j].inputInstruction.length == 0 || this.inputBox[j].inputInstruction == '') {
                                this.inputBox.splice(j, 1)
                            }
                        }
                        for (var k = 0; k < this.presetArrayInstruction[i].preset_array.length; k++) {
                            this.presetArrayInstruction[i].preset_array[k].i_presetValue = i
                            this.presetArrayInstruction[i].preset_array[k].i_presetLength = this.presetArrayInstruction[i].preset_array.length
                            var object2 = Object.assign({}, this.presetArrayInstruction[i].preset_array[k]);
                            this.inputBox.push(object2)
                        }
                        this.presetArrayInstruction[i].status = true
                    } else {
                        this.toastr.warning("Maximum items can be 3", "Warning")
                    }
                } else {
                    for (var k = 0; k < this.presetArrayInstruction[i].preset_array.length; k++) {
                        for (var j = 0; j < this.inputBox.length; j++) {
                            if (this.inputBox[j].inputInstruction && this.inputBox[j].inputInstruction.length > 0) {
                                if (this.inputBox[j].inputInstruction[0].value == this.presetArrayInstruction[i].preset_array[k].instructionsInput) {
                                    this.inputBox.splice(j, 1);
                                    if (this.inputBox.length == 0) {
                                        this.inputBox = [{ name: 'Instruction 1', instructionsInput: '', inputInstruction: '' }];
                                    }
                                    break
                                }
                            }
                        }
                    }
                    this.presetArrayInstruction[i].status = false
                }
            } else if (type == 'Surgery') {
                this.userService.GetDoctorPresetArrayById(this.presetArraySurgery[i].id).subscribe(data => {
                    console.log(data)
                    data.data.status = this.presetArraySurgery[i].status
                    this.presetArraySurgery[i] = data.data
                    if (!this.presetArraySurgery[i].status || this.presetArraySurgery[i].status == false) {
                        var boolean = false
                        var tt : number
                        tt = this.totalSurgeryOptionsSelected
                        for (var l = 0; l < this.suregeryOptionsTop.length; l++) {
                            for (var m = 0; m < this.presetArraySurgery[i].preset_array.length; m++) {
                                if(this.suregeryOptionsTop[l].name == this.presetArraySurgery[i].preset_array[m].name){
                                    tt = tt - 1 
                                    break
                                }
                            }
                        }
                        if(tt+this.presetArraySurgery[i].preset_array.length>3){
                            this.toastr.warning("Maximum items can be 3", "Warning")
                        }else{
                            for (var k = 0; k < this.presetArraySurgery[i].preset_array.length; k++) {
                                for (var j = 0; j < this.suregeryOptionsTop.length; j++) {
                                    if (this.suregeryOptionsTop[j].name == this.presetArraySurgery[i].preset_array[k].name) {
                                        // var object2 = Object.assign({},this.presetArraySurgery[i].preset_array[k]);
                                        // var object2 = this.presetArraySurgery[i].preset_array[k];
                                        // object2.status = true
                                        // object2.status1 = true
                                        if(this.suregeryOptionsTop[j].i_presetValue>-1){
                                            this.presetArraySurgery[this.suregeryOptionsTop[j].i_presetValue].status = false
                                        }
                                        this.presetArraySurgery[i].preset_array[k].status = true
                                        this.presetArraySurgery[i].preset_array[k].status1 = true
                                        this.presetArraySurgery[i].preset_array[k].i_presetValue = i
                                        var length : number = 0
                                        for (var l = 0; l < this.presetArraySurgery[i].preset_array.length; l++) {
                                            length = length + this.presetArraySurgery[i].preset_array[l].div.length
                                        }
                                        this.presetArraySurgery[i].preset_array[k].i_presetLength = length
                                        this.suregeryOptionsTop.splice(j, 1, Object.assign({},this.presetArraySurgery[i].preset_array[k]))
                                        this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + this.presetArraySurgery[i].preset_array[k].div.length - 1
                                        // this.suregeryOptionsTop[j].i_presetValue = i
                                        // this.suregeryOptionsTop[j].i_presetLength = this.presetArraySurgery[i].preset_array.length
                                        break
                                    }
                                }
                            }
                            for (var k = 0; k < this.presetArraySurgery[i].preset_array.length; k++) {
                                for (var j = 0; j < this.suregeryOptions.length; j++) {
                                    if (this.suregeryOptions[j].name == this.presetArraySurgery[i].preset_array[k].name) {
                                        // var object2 = Object.assign({},this.presetArraySurgery[i].preset_array[k]);
                                        // var object2 = this.presetArraySurgery[i].preset_array[k];
                                        // object2.status = true
                                        // object2.status1 = true
                                        this.presetArraySurgery[i].preset_array[k].status = true
                                        this.presetArraySurgery[i].preset_array[k].status1 = true
                                        this.presetArraySurgery[i].preset_array[k].i_presetValue = i
                                        var length : number = 0
                                        for (var l = 0; l < this.presetArraySurgery[i].preset_array.length; l++) {
                                            length = length + this.presetArraySurgery[i].preset_array[l].div.length
                                        }
                                        this.presetArraySurgery[i].preset_array[k].i_presetLength = length
                                        this.suregeryOptionsTop.push(Object.assign({},this.presetArraySurgery[i].preset_array[k]))
                                        this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + 1
                                        this.suregeryOptions.splice(j, 1)
                                        break
                                    }
                                }
                            }
                            // if(this.totalSurgeryOptionsSelected<4){
                                this.presetArraySurgery[i].status = true
                                // this.suregeryOptionsTop = this.suregeryOptionsTop;
                                // this.suregeryOptions = this.suregeryOptions;
                                // }else {
                                    //     this.toastr.warning("Maximum items can be 3", "Warning")
                                    // }
                                }
                            } else {
                                console.log("elseeeeeeeeeeeeeeeeeeeeeeeee")
                                for (var k = 0; k < this.presetArraySurgery[i].preset_array.length; k++) {
                                    for (var j = 0; j < this.suregeryOptionsTop.length; j++) {
                                        if (this.suregeryOptionsTop[j].name == this.presetArraySurgery[i].preset_array[k].name) {
                                            this.suregeryOptionsTop[j].status = false
                                            this.suregeryOptionsTop[j].status1 = false
                                            this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected - this.suregeryOptionsTop[j].div.length
                                            this.suregeryOptionsTop[j].div = []
                                            this.suregeryOptionsTop[j].div.push({
                                                sub_speciality: '',
                                                procedure_name: ''
                                            })
                                            this.suregeryOptions.push(this.suregeryOptionsTop[j])
                                            this.suregeryOptionsTop.splice(j, 1)
                                            break
                                        }
                                    }
                                }
                                this.presetArraySurgery[i].status = false
                            }
                            // this.totalSurgeryOptionsSelected = 0
                            // for (var j = 0; j < this.suregeryOptionsTop.length; j++) {
                                //     if (this.suregeryOptionsTop[j].status == true) {
                                    //         this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + 1
                                    //         this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + this.suregeryOptionsTop[j].div.length - 1
                                    //     }
                                    // }
                                    console.log(this.totalSurgeryOptionsSelected)
                                }, err => {
                                    console.log(err);
                                })
} else if (type == 'Other Treatments') {
    console.log(this.presetArrayOtherTreatment[i].preset_array)
    if (!this.presetArrayOtherTreatment[i].status || this.presetArrayOtherTreatment[i].status == false) {
        if (this.totalOtherTreatment + this.presetArrayOtherTreatment[i].preset_array.length <= 4) {
            for (var j = 0; j < this.presetArrayOtherTreatment[i].preset_array.length; j++) {
                for (var k = 0; k < this.treatmentStatus.length; k++) {
                    if (this.treatmentStatus[k].name == this.presetArrayOtherTreatment[i].preset_array[j].name) {
                        if(this.treatmentStatus[k].i_presetValue){
                            this.presetArrayOtherTreatment[this.treatmentStatus[k].i_presetValue].status = false
                            if (k == 7 || k == 2) {
                                this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[k].div.length
                            } else {
                                this.totalOtherTreatment = this.totalOtherTreatment - 1
                            }
                        }
                        if (this.presetArrayOtherTreatment[i].preset_array[j].name == 'Plaster' || this.presetArrayOtherTreatment[i].preset_array[j].name == 'Other') {
                            if (this.totalOtherTreatment + this.presetArrayOtherTreatment[i].preset_array[j].div.length <= 4) {
                                this.presetArrayOtherTreatment[i].preset_array[j].i_presetValue = i
                                this.presetArrayOtherTreatment[i].preset_array[j].i_presetLength = this.presetArrayOtherTreatment[i].preset_array.length
                                this.treatmentStatus.splice(k, 1, Object.assign({}, this.presetArrayOtherTreatment[i].preset_array[j]))
                                // this.treatmentStatus[k] = Object.assign({}, this.presetArrayOtherTreatment[i].preset_array[j])
                                this.treatmentStatus[k].status = true
                                break
                            } else {
                                this.toastr.warning("Maximum items can be 4 only", "Warning")
                            }
                        } else {
                            // this.treatmentStatus[k] = Object.assign({}, this.presetArrayOtherTreatment[i].preset_array[j])
                            this.presetArrayOtherTreatment[i].preset_array[j].i_presetValue = i
                            this.presetArrayOtherTreatment[i].preset_array[j].i_presetLength = this.presetArrayOtherTreatment[i].preset_array.length
                            this.treatmentStatus.splice(k, 1, Object.assign({}, this.presetArrayOtherTreatment[i].preset_array[j]))
                            this.treatmentStatus[k].status = true
                            break
                        }
                    }
                }
            }
            this.presetArrayOtherTreatment[i].status = true
            this.totalOtherTreatment = 0
            for (var j = 0; j < this.treatmentStatus.length; j++) {
                if (this.treatmentStatus[j].status == true) {
                    if (j == 7 || j == 2) {
                        this.totalOtherTreatment = this.totalOtherTreatment + this.treatmentStatus[j].div.length
                    } else {
                        this.totalOtherTreatment = this.totalOtherTreatment + 1
                    }
                }
            }
        } else {
            this.toastr.warning("Maximum items can be 4 only", "Warning")
        }
    } else {
        this.presetArrayOtherTreatment[i].status = false
        for (var j = 0; j < this.presetArrayOtherTreatment[i].preset_array.length; j++) {
            for (var k = 0; k < this.treatmentStatus.length; k++) {
                if (this.treatmentStatus[k].name == this.presetArrayOtherTreatment[i].preset_array[j].name) {
                    this.treatmentStatus[k].status = false
                    if (k == 7) {
                        this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[7].div.length
                        this.treatmentStatus[7].div = []
                        this.treatmentStatus[7].div.push({
                            name: 'Other',
                            status: false,
                            SpecialInstruction: null,
                            Frequency: 'Frequency',
                            Duration: 'Duration',
                            med_name: []
                        })
                    } else if (k == 2) {
                        this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[2].div.length
                        this.treatmentStatus[2].div = []
                        this.treatmentStatus[2].div.push({
                            name: 'Plaster',
                            status: false,
                            SpecialInstruction: null,
                            Injury_Area: 'Injury Area',
                            plaster_type: null,
                            Duration: 'Duration'
                        })
                    } else if (k == 0) {
                        this.totalOtherTreatment = this.totalOtherTreatment - 1
                        this.treatmentStatus[0] = { name: 'Lifestyle Changes', status: false, SpecialInstruction: null, lifestyle: null }
                    } else if (k == 1) {
                        this.totalOtherTreatment = this.totalOtherTreatment - 1
                        this.treatmentStatus[1] = { name: 'Physiotherapy', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' }
                    } else if (k == 3) {
                        this.totalOtherTreatment = this.totalOtherTreatment - 1
                        this.treatmentStatus[3] = { name: 'Fomentation', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' }
                    } else if (k == 4) {
                        this.totalOtherTreatment = this.totalOtherTreatment - 1
                        this.treatmentStatus[4] = { name: 'Gargle', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] }
                    } else if (k == 5) {
                        this.totalOtherTreatment = this.totalOtherTreatment - 1
                        this.treatmentStatus[5] = { name: 'Dressing', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] }
                    } else if (k == 6) {
                        this.totalOtherTreatment = this.totalOtherTreatment - 1
                        this.treatmentStatus[6] = { name: 'Bandage', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: [] }
                    }
                }
            }
        }
    }
    console.log(this.totalOtherTreatment)
} else if (type == 'Investigation') {
    if (this.presetArrayInvestigation[i].status == false || !this.presetArrayInvestigation[i].status) {
        if (this.numberOfInvestigationSelected + this.presetArrayInvestigation[i].preset_array.length <= 4) {
            this.presetArrayInvestigation[i].status = !this.presetArrayInvestigation[i].status
            for (var j = 0; j < this.presetArrayInvestigation[i].preset_array.length; j++) {
                for (var k = 0; k < this.investigationStatus.length; k++) {
                    if (this.investigationStatus[k].name == this.presetArrayInvestigation[i].preset_array[j].name) {
                        this.investigationStatus[k] = this.presetArrayInvestigation[i].preset_array[j]
                        this.investigationStatus[k].model = this.presetArrayInvestigation[i].preset_array[j].values
                        this.investigationStatus[k].status = true
                        this.investigationStatus[k].i_presetValue = i
                        this.investigationStatus[k].i_presetLength = this.presetArrayInvestigation[i].preset_array.length
                        break
                    }
                }
            }
        } else {
            this.toastr.warning("Maximum items can be 4 only", "Warning")
        }
    } else {
        this.presetArrayInvestigation[i].status = !this.presetArrayInvestigation[i].status
        for (var j = 0; j < this.presetArrayInvestigation[i].preset_array.length; j++) {
            for (var k = 0; k < this.investigationStatus.length; k++) {
                if (this.investigationStatus[k].name == this.presetArrayInvestigation[i].preset_array[j].name) {
                    this.investigationStatus[k] = this.presetArrayInvestigation[i].preset_array[j]
                    this.investigationStatus[k].model = this.presetArrayInvestigation[i].preset_array[j].values
                    this.investigationStatus[k].status = false
                    break
                }
            }
        }
    }
    this.numberOfInvestigationSelected = 0
    for (var j = 0; j < this.investigationStatus.length; j++) {
        if (this.investigationStatus[j].status == true) {
            this.numberOfInvestigationSelected = this.numberOfInvestigationSelected + 1
        }
    }
    if(this.numberOfInvestigationSelected==0){
        for (var j = 0; j < this.presetArrayInvestigation.length; j++) {
            this.presetArrayInvestigation[j].status = false
        }
    }
}
}

getMedPresetClass(type, i) {
    if (type == 'Medication') {
        if (this.doctorPresetArray[i].status == true) {
            return 'active'
        } else {
            return ''
        }
    } else if (type == 'Instructions') {
        if (this.presetArrayInstruction[i].status == true) {
            return 'active'
        } else {
            return ''
        }
    } else if (type == 'Surgery') {
        if (this.presetArraySurgery[i].status == true) {
            return 'active'
        } else {
            return ''
        }
    } else if (type == 'Other Treatments') {
        if (this.presetArrayOtherTreatment[i].status == true) {
            return 'active'
        } else {
            return ''
        }
    } else if (type == 'Investigation') {
        if (this.presetArrayInvestigation[i].status == true) {
            return 'active'
        } else {
            return ''
        }
    }
}

getPresetMedButtonClass(type) {
    if (type == 'Medication') {
        if (this.medicationPresetShow == true) {
            return 'active btn lightblue-btn'
        } else {
            return 'btn lightblue-btn'
        }
    } else if (type == 'Instructions') {
        if (this.instructionPresetShow == true) {
            return 'active btn lightblue-btn'
        } else {
            return 'btn lightblue-btn'
        }
    } else if (type == 'Surgery') {
        if (this.surgeryPresetShow == true) {
            return 'active btn lightblue-btn'
        } else {
            return 'btn lightblue-btn'
        }
    } else if (type == 'Other Treatments') {
        if (this.otherTreatmentPresetShow == true) {
            return 'active btn lightblue-btn'
        } else {
            return 'btn lightblue-btn'
        }
    } else if (type == 'Investigation') {
        if (this.investigationPresetShow == true) {
            return 'active btn lightblue-btn'
        } else {
            return 'btn lightblue-btn'
        }
    }
}

removeMedPreset(i, j) {
    this.totalMedications = this.totalMedications - 1
    this.doctorPresetArray[i].newPresetArray.splice(j, 1)
    if (this.doctorPresetArray[i].preset_array.length < 1) {
        this.doctorPresetArray[i].status = false
        this.doctorPresetArray[i].newPresetArray = []
        for (var k = 0; k < this.doctorPresetArray[i].preset_array.length; k++) {
            this.doctorPresetArray[i].preset_array[k].status = true
            this.doctorPresetArray[i].newPresetArray.push(this.doctorPresetArray[i].preset_array[k])
        }
    }
}

SaveDoctorOtherPreset(type, preset) {
    if (preset.trim().length > 0) {
        let object = {
            doctor_id: this.doctorData.itemId,
            type: type,
            preset: preset
        }
        console.log(object)
        this.userService.SaveDoctorOtherPreset(object).subscribe(data => {
            console.log(data)
            // if (data.response == false) {
                //     this.toastr.error(data.message, "Error")
                //     if (data.message == "Data already exists") {
                    //         let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});

                    //         dialogRef.afterClosed().subscribe(result => {
                        //             console.log('The dialog was closed');
                        //             if (result == "yes") {
                            //                 let object = {
                                //                     doctor_id: this.doctorData.itemId,
                                //                     type: type,
                                //                     preset: preset,
                                //                     update_status: true
                                //                 }
                                //                 console.log(object)
                                //                 this.userService.SaveDoctorOtherPreset(object).subscribe(data => {
                                    //                     this.toastr.success(data.message, "Success")
                                    //                     if (this.save_true == true) {
                                        //                         this.router.navigate(['header-two-layout/dashboard-prescription'])
                                        //                     } else {
                                            //                         this.ngOnInit()
                                            //                     }
                                            //                 }, err => {
                                                //                     console.log(err);
                                                //                 })
                                                //             } else {
                                                    //                 console.log("error or No Thanks button clicked")
                                                    //             }
                                                    //         });
                                                    //     }
                                                    // }
                                                }, err => {
                                                    console.log(err);
                                                })
    }
}

GetDoctorOtherPreset(type) {
    let object = {
        doctor_id: this.doctorData.itemId,
        type: type
    }
    this.userService.GetDoctorOtherPreset(object).subscribe(data => {
        console.log(data)
        if (data.response == true) {
            if (type == 'Patient Complaints') {
                this.findingPreSetVals = []
                this.findingPreSetVals = data.data
                for (var i = 0; i < this.itemsfinding.length; i++) {
                    for (var j = 0; j < this.findingPreSetVals.length; j++) {
                        if(this.itemsfinding[i].value == this.findingPreSetVals[j].value){
                            this.findingPreSetVals[j].status = true
                            break;
                        }
                    }
                }
            } else if (type == 'Symptoms') {
                this.symptomsPresetArray = []
                this.symptomsPresetArray = data.data
                for (var i = 0; i < this.itemsymptoms.length; i++) {
                    for (var j = 0; j < this.symptomsPresetArray.length; j++) {
                        if(this.itemsymptoms[i].value == this.symptomsPresetArray[j].value){
                            this.symptomsPresetArray[j].status = true
                            break;
                        }
                    }
                }
            } else if (type == 'Diagnosis') {
                this.diagnosisPresetArray = []
                this.diagnosisPresetArray = data.data
                for (var i = 0; i < this.itemsdiagnosis.length; i++) {
                    for (var j = 0; j < this.diagnosisPresetArray.length; j++) {
                        if(this.itemsdiagnosis[i].value == this.diagnosisPresetArray[j].value){
                            this.diagnosisPresetArray[j].status = true
                            break;
                        }
                    }
                }
            }
        }
    }, err => {
        console.log(err);
    })
}

SaveDoctorPresetArray(preset_name, preset_array, type) {
    var object = {
        preset_name: preset_name,
        preset_array: preset_array,
        doctor_id: this.doctorData.itemId,
        type: type
    }
    console.log(object)
    this.userService.SaveDoctorPresetArray(object).subscribe(data => {
        console.log(data)
        if (data.response == true) {
            this.GetDoctorPresetArray(type)
        } else {
            // this.toastr.error(data.message, "Warning")
            if (data.message == "Data already exists") {
                let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});

                dialogRef.afterClosed().subscribe(result => {
                    console.log('The dialog was closed');
                    if (result == "yes") {
                        var object = {
                            preset_name: preset_name,
                            preset_array: preset_array,
                            doctor_id: this.doctorData.itemId,
                            type: type,
                            update_status: true
                        }
                        console.log(object)
                        this.userService.SaveDoctorPresetArray(object).subscribe(data => {
                            this.toastr.success(data.message, "Success")
                            if (data.response == true) {
                                this.GetDoctorPresetArray(type)
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
    }, err => {
        console.log(err);
    })
}

GetDoctorPresetArray(type) {
    var object = {
        doctor_id: this.doctorData.itemId,
        type: type
    }
    this.userService.GetDoctorPresetArray(object).subscribe(data => {
        console.log(data)
        if (type == 'Instructions') {
            this.presetArrayInstruction = []
            this.presetArrayInstruction = data.data
        } else if (type == 'Surgery') {
            this.presetArraySurgery = []
            this.presetArraySurgery = data.data
        } else if (type == 'Other Treatments') {
            this.presetArrayOtherTreatment = []
            this.presetArrayOtherTreatment = data.data
        } else if (type == 'Investigation') {
            this.presetArrayInvestigation = []
            this.presetArrayInvestigation = data.data
        }
    }, err => {
        console.log(err);
    })
}

saveWholePrescriptionPad() {
    if (this.presentNamePrescPad != undefined && this.presentNamePrescPad != '' && this.presentNamePrescPad != null) {
        if (this.presentNamePrescPad.trim().length < 1) {
            this.toastr.warning("Invalid preset name", "Warning")
            return;
        } else {
            var objectArray = []
            // if (this.preConditionComplete == true && this.preCondSelected.length > 0) {
                //     let object = {
                    //         name: 'Pre Condition',
                    //         preCondMdlArray: this.preCondMdlArray,
                    //         preCondSelected: this.preCondSelected,
                    //         otherPre: this.otherPre
                    //     }
                    //     objectArray.push(object)
                    // }
                    // if (this.allergyComplete == true && this.allergySelected.length > 0) {
                        //     let object = {
                            //         name: 'Allergy',
                            //         AllergyArray: this.AllergyArray,
                            //         otherAllergy: this.otherAllergy,
                            //         allergySelected: this.allergySelected
                            //     }
                            //     objectArray.push(object)
                            // }
                            // if (this.bodyIndicatorComplete == true && this.bodyIndicatorSelected.length > 0) {
                                //     let object = {
                                    //         name: 'Body Indicator',
                                    //         bodyIndicator: this.bodyIndicator
                                    //     }
                                    //     objectArray.push(object)
                                    // }
                                    if (this.findingsComplete == true && this.findingsSelected.length > 0) {
                                        let object = {
                                            name: 'Patient Complaints',
                                            itemsfinding: this.itemsfinding
                                        }
                                        objectArray.push(object)
                                    }
                                    if (this.symptomsComplete == true && this.symptomsSelected.length > 0) {
                                        let object = {
                                            name: 'Symptoms',
                                            itemsymptoms: this.itemsymptoms
                                        }
                                        objectArray.push(object)
                                    }
                                    if (this.diagnosisComplete == true && this.diagnosisSelected.length > 0) {
                                        let object = {
                                            name: 'Diagnosis',
                                            itemsdiagnosis: this.itemsdiagnosis
                                        }
                                        objectArray.push(object)
                                    }
                                    if (this.treatmentComplete == true) {
                                        let object = {
                                            name: 'Other Treatment',
                                            treatmentStatus: this.treatmentStatus
                                        }
                                        objectArray.push(object)
                                    }
                                    if (this.investigationIndicatorComplete == true && this.investigationArray.length > 0) {
                                        let object = {
                                            name: 'Investigation',
                                            investigationStatus: this.investigationStatus,
                                            investigationArray: this.investigationArray
                                        }
                                        objectArray.push(object)
                                    }
                                    if (this.surgeryComplete == true && this.surgerySelectedArray.length > 0) {
                                        let object = {
                                            name: 'Surgery / Procedure',
                                            suregeryOptionsTop: this.suregeryOptionsTop,
                                            suregeryOptions: this.suregeryOptions
                                        }
                                        objectArray.push(object)
                                    }
                                    // if (this.eyePresComplete == true) {
                                        //     let object = {
                                            //         name: 'Eye Prescription',
                                            //         rightOD: this.rightOD,
                                            //         leftOD: this.leftOD
                                            //     }
                                            //     objectArray.push(object)
                                            // }
                                            // if (this.vaccinationComplete == true) {
                                                //     let object = {
                                                    //         name: 'Vaccination',
                                                    //         finalCurrentVaccinationArray: this.finalCurrentVaccinationArray,
                                                    //         finalDueVaccinationArray: this.finalDueVaccinationArray,
                                                    //         currentVaccinationComplete: this.currentVaccinationComplete,
                                                    //         dueVaccinationComplete: this.dueVaccinationComplete
                                                    //     }
                                                    //     objectArray.push(object)
                                                    // }
                                                    if (this.instructionsComplete == true && this.instructionsSelected.length > 0) {
                                                        let object = {
                                                            name: 'Instructions',
                                                            inputBox: this.inputBox
                                                        }
                                                        objectArray.push(object)
                                                    }
                                                    if (this.medicationComplete == true) {
                                                        let object = {
                                                            name: 'Medication',
                                                            medication: this.medication,
                                                            medicationStatus: this.medicationStatus,
                                                            medicationTabArray:this.medicationTabArray,
                                                            medicationCapArray:this.medicationCapArray,
                                                            medicationSypArray:this.medicationSypArray,
                                                            medicationSuspArray:this.medicationSuspArray,
                                                            medicationEmulsnArray:this.medicationEmulsnArray,
                                                            medicationInjArray:this.medicationInjArray,
                                                            medicationCreamArray:this.medicationCreamArray,
                                                            medicationGelArray:this.medicationGelArray,
                                                            medicationDropsArray:this.medicationDropsArray,
                                                            medicationPowderArray:this.medicationPowderArray,
                                                            medicationAerosolsArray:this.medicationAerosolsArray,
                                                            medicationMouthWashArray:this.medicationMouthWashArray,
                                                            medicationSolutionArray:this.medicationSolutionArray,
                                                            medicationLotionArray:this.medicationLotionArray,
                                                            medicationOintmentArray:this.medicationOintmentArray,
                                                        }
                                                        objectArray.push(object)
                                                    }
                                                    // if (this.followDaysComplete == true) {
                                                        //     let object = {
                                                            //         name: 'Follow',
                                                            //         finalfollowUpDays: this.finalfollowUpDays
                                                            //     }
                                                            //     objectArray.push(object)
                                                            // }
                                                            console.log(objectArray)
                                                            if (objectArray.length > 0) {
                                                                var dataToSave = {
                                                                    doctor_id: this.doctorData.itemId,
                                                                    name: this.presentNamePrescPad.trim(),
                                                                    value: objectArray
                                                                }
                                                                this.userService.SavePrescriptionPad(dataToSave).subscribe(data => {
                                                                    console.log(data)
                                                                    if (data.response == true) {
                                                                        this.toastr.success(data.message, "Success")
                                                                        this.GetPrescriptionPad()
                                                                    }
                                                                    else {
                                                                        if (data.message == "Data already exists") {
                                                                            let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});
                                                                            dialogRef.afterClosed().subscribe(result => {
                                                                                console.log('The dialog was closed');
                                                                                if (result == "yes") {
                                                                                    let object = {
                                                                                        doctor_id: this.doctorData.itemId,
                                                                                        name: this.presentNamePrescPad.trim(),
                                                                                        value: objectArray,
                                                                                        update_status: true
                                                                                    }
                                                                                    console.log(object)
                                                                                    this.userService.SavePrescriptionPad(object).subscribe(data => {
                                                                                        if (data.response == true) {
                                                                                            this.toastr.success(data.message, "Success")
                                                                                            this.GetPrescriptionPad()
                                                                                        }else{
                                                                                            this.toastr.error(data.message, "Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                } else {
                                                                                    console.log("error or No Thanks button clicked")
                                                                                }
                                                                            });
                                                                        }else{
                                                                            this.toastr.error(data.message, "Error")
                                                                        }
                                                                    }
                                                                }, err => {
                                                                    console.log(err);
                                                                })
                                                            }else{
                                                                this.toastr.warning("Nothing found to be saved","Warning")
                                                            }
                                                        }
                                                    } else {
                                                        this.toastr.warning("Invalid preset name", "Warning")
                                                        return;
                                                    }
                                                }

                                                GetPrescriptionPad() {
                                                    this.userService.GetPrescriptionPad(this.doctorData.itemId).subscribe(data => {
                                                        console.log(data)
                                                        if (data.response == true) {
                                                            this.savedPrescriptionPadArray = data.data
                                                        }
                                                    }, err => {
                                                        console.log(err);
                                                    })
                                                }

                                                GetPrescriptionPadDetail(id) {
                                                    this.temp_preset_id = id
                                                    for (var i = 0; i < this.savedPrescriptionPadArray.length; i++) {
                                                        if (this.savedPrescriptionPadArray[i].id == this.temp_preset_id) {
                                                            this.savedPrescriptionPadArray[i].status = true
                                                        } else {
                                                            this.savedPrescriptionPadArray[i].status = false
                                                        }
                                                    }
                                                }

                                                applyPrescriptionPreset() {
                                                    this.userService.GetPrescriptionPadDetail(this.temp_preset_id).subscribe(data => {
                                                        console.log(data)
                                                        if (data.response == true) {
                                                            this.prescriptionPadDetail = data.data
                                                            // this.resetAll()
                                                            this.deleteAndResetSelectedDiv('Symptoms')
                                                            this.deleteAndResetSelectedDiv('Diagnosis')
                                                            this.deleteAndResetSelectedDiv('Other Treatment')
                                                            this.deleteAndResetSelectedDiv('Investigation')
                                                            // this.deleteAndResetSelectedDiv('Surgery / Procedure')
                                                            this.resetSurgery()
                                                            this.deleteAndResetSelectedDiv('Instructions')
                                                            this.deleteAndResetSelectedDiv('Medication')
                                                            for (var i = 0; i < data.data.value.length; i++) {
                                                                console.log(data.data.value[i].name)
                                                                // if (data.data.value[i].name == 'Pre Condition') {
                                                                    //     this.preCondMdlArray = data.data.value[i].preCondMdlArray
                                                                    //     this.preCondSelected = data.data.value[i].preCondSelected
                                                                    //     this.otherPre = data.data.value[i].otherPre
                                                                    //     this.setFields('preconditions')
                                                                    // } else if (data.data.value[i].name == 'Allergy') {
                                                                        //     this.AllergyArray = data.data.value[i].AllergyArray
                                                                        //     this.otherAllergy = data.data.value[i].otherAllergy
                                                                        //     this.allergySelected = data.data.value[i].allergySelected
                                                                        //     this.setFields('allergy')
                                                                        // } else if (data.data.value[i].name == 'Body Indicator') {
                                                                            //     this.bodyIndicator = data.data.value[i].bodyIndicator
                                                                            //     this.setFields('bodyIndicators')
                                                                            // } else 
                                                                            // if (data.data.value[i].name == 'Patient Complaints') {
                                                                                //     this.itemsfinding = data.data.value[i].itemsfinding
                                                                                //     this.setFields('findings')
                                                                                // } else 
                                                                                if (data.data.value[i].name == 'Symptoms') {
                                                                                    this.itemsymptoms = data.data.value[i].itemsymptoms
                                                                                    this.setFields('symptoms')
                                                                                } else if (data.data.value[i].name == 'Diagnosis') {
                                                                                    this.itemsdiagnosis = data.data.value[i].itemsdiagnosis
                                                                                    this.setFields('diagnosis')
                                                                                } else if (data.data.value[i].name == 'Other Treatment') {
                                                                                    this.treatmentStatus = data.data.value[i].treatmentStatus
                                                                                    this.totalOtherTreatment = 0
                                                                                    for (var j = 0; j < this.treatmentStatus.length; j++) {
                                                                                        if (this.treatmentStatus[j].status == true) {
                                                                                            if (j == 2 || j == 7) {
                                                                                                this.totalOtherTreatment = this.totalOtherTreatment + this.treatmentStatus[j].div.length
                                                                                            } else {
                                                                                                this.totalOtherTreatment = this.totalOtherTreatment + 1
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    this.setFields('treatment')
                                                                                } else if (data.data.value[i].name == 'Investigation') {
                                                                                    this.investigationStatus = data.data.value[i].investigationStatus
                                                                                    this.investigationArray = data.data.value[i].investigationArray
                                                                                    this.numberOfInvestigationSelected = 0
                                                                                    for (var j = 0; j < this.investigationStatus.length; j++) {
                                                                                        if (this.investigationStatus[j].status == true) {
                                                                                            this.totalOtherTreatment = this.totalOtherTreatment + 1
                                                                                        }
                                                                                    }
                                                                                    this.setFields('investigation')
                                                                                } else if (data.data.value[i].name == 'Surgery / Procedure') {
                                                                                    this.suregeryOptionsTop = data.data.value[i].suregeryOptionsTop
                                                                                    this.suregeryOptions = data.data.value[i].suregeryOptions
                                                                                    this.totalSurgeryOptionsSelected = 0
                                                                                    for (var j = 0; j < this.suregeryOptionsTop.length; j++) {
                                                                                        if (this.suregeryOptionsTop[j].status == true) {
                                                                                            this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + 1
                                                                                            this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + this.suregeryOptionsTop[j].div.length - 1
                                                                                        }
                                                                                    }
                                                                                    this.setFields('surgery')
                                                                                    // } else if (data.data.value[i].name == 'Eye Prescription') {
                                                                                        //     this.rightOD = data.data.value[i].rightOD,
                                                                                        //         this.leftOD = data.data.value[i].leftOD
                                                                                        //     this.setFields('eye_pres')
                                                                                        // } else if (data.data.value[i].name == 'Vaccination') {
                                                                                            //     this.finalCurrentVaccinationArray = data.data.value[i].finalCurrentVaccinationArray
                                                                                            //     this.finalDueVaccinationArray = data.data.value[i].finalDueVaccinationArray
                                                                                            //     this.tempCurrentVaccinationArray = data.data.value[i].finalCurrentVaccinationArray
                                                                                            //     this.tempDueVaccinationArray = data.data.value[i].finalDueVaccinationArray
                                                                                            //     this.currentVaccinationComplete = data.data.value[i].currentVaccinationComplete
                                                                                            //     this.dueVaccinationComplete = data.data.value[i].dueVaccinationComplete
                                                                                            //     this.setFields('vaccination')
                                                                                        } else if (data.data.value[i].name == 'Instructions') {
                                                                                            this.inputBox = data.data.value[i].inputBox
                                                                                            this.setFields('instructions')
                                                                                        } else if (data.data.value[i].name == 'Medication') {
                                                                                            this.medication = {}
                                                                                            this.medication = data.data.value[i].medication
                                                                                            this.medicationStatus = data.data.value[i].medicationStatus
                                                                                            this.totalMedications = -1
                                                                                            this.medicationTabArray = data.data.value[i].medicationTabArray
                                                                                            this.medicationCapArray = data.data.value[i].medicationCapArray
                                                                                            this.medicationSypArray = data.data.value[i].medicationSypArray
                                                                                            this.medicationSuspArray = data.data.value[i].medicationSuspArray
                                                                                            this.medicationEmulsnArray = data.data.value[i].medicationEmulsnArray
                                                                                            this.medicationInjArray = data.data.value[i].medicationInjArray
                                                                                            this.medicationCreamArray = data.data.value[i].medicationCreamArray
                                                                                            this.medicationGelArray = data.data.value[i].medicationGelArray
                                                                                            this.medicationDropsArray = data.data.value[i].medicationDropsArray
                                                                                            this.medicationPowderArray = data.data.value[i].medicationPowderArray
                                                                                            this.medicationAerosolsArray = data.data.value[i].medicationAerosolsArray
                                                                                            this.medicationMouthWashArray = data.data.value[i].medicationMouthWashArray
                                                                                            this.medicationSolutionArray = data.data.value[i].medicationSolutionArray
                                                                                            this.medicationLotionArray = data.data.value[i].medicationLotionArray
                                                                                            this.medicationOintmentArray = data.data.value[i].medicationOintmentArray
                                                                                            for (var j = 0; j < this.medicationStatus.length; j++) {
                                                                                                if (this.medicationStatus[j].status == true) {
                                                                                                    if (j == 0) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationTabArray.length
                                                                                                    } else if (j == 1) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationCapArray.length
                                                                                                    } else if (j == 2) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationSypArray.length
                                                                                                    } else if (j == 3) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationSuspArray.length
                                                                                                    } else if (j == 4) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationEmulsnArray.length
                                                                                                    } else if (j == 5) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationSolutionArray.length
                                                                                                    } else if (j == 6) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationInjArray.length
                                                                                                    } else if (j == 7) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationCreamArray.length
                                                                                                    } else if (j == 8) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationGelArray.length
                                                                                                    } else if (j == 9) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationDropsArray.length
                                                                                                    } else if (j == 11) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationPowderArray.length
                                                                                                    } else if (j == 10) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationAerosolsArray.length
                                                                                                    } else if (j == 12) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationMouthWashArray.length
                                                                                                    } else if (j == 13) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationLotionArray.length
                                                                                                    } else if (j == 14) {
                                                                                                        this.totalMedications = this.totalMedications + this.medicationOintmentArray.length
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                            this.setFields('medication')
                                                                                        }
                                                                                        // else if (data.data.value[i].name == 'Follow') {
                                                                                            //     this.finalfollowUpDays = data.data.value[i].finalfollowUpDays
                                                                                            //     this.setFields('follow')
                                                                                            // }
                                                                                        }
                                                                                        $("#savedPreset").modal("hide");
                                                                                        this.resetClassPrecPreset()
                                                                                    }
                                                                                }, err => {
                                                                                    console.log(err);
                                                                                })
}

// createPdf() {
    //     // if(this.languageOptionSelected == ""){
        //     //     html2canvas(document.getElementById('previewModalPdf1')).then(function(canvas) {
            //     //         var img = canvas.toDataURL("image/png");
            //     //         var doc = new jsPDF({
                //     //             orientation: 'potrait',
                //     //             // width: 1000, 
                //     //             unit: 'in',
                //     //             format: [12, 20]
                //     //         });
                //     //         doc.addImage(img, 'JPEG', 0.5, 0.5, 0, 0);
                //     //         doc.save('Prescription.pdf');
                //     //     });
                //     // }else{
                    //         html2canvas(document.getElementById('previewModalPdf')).then(function(canvas) {
                        //             var img = canvas.toDataURL("image/png");
                        //             var doc = new jsPDF({
                            //                 orientation: 'potrait',
                            //                 // width: 1000, 
                            //                 unit: 'in',
                            //                 format: [12, 20]
                            //             });
                            //             doc.addImage(img, 'JPEG', 0.5, 0.5, 0, 0);
                            //             doc.save('Prescription.pdf');
                            //         });
                            //     // }
                            // }

                            createPdf(){
                                this.saveDoctorPrescriptionForPatient()
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

                            AllPrescriptionData() {
                                let object = {
                                    doctor_id: this.doctorData.itemId,
                                    registration: this.consultingPatient
                                }
                                this.loading = true
                                this.userService.AllPrescriptionData(object).subscribe(data => {
                                    console.log(data)
                                    if (data.response == true) {
                                        //getDoctorPrescriptionFields
                                        if (data.prescList2 != null && data.prescList2 != '') {
                                            this.prescList2 = data.prescList2
                                        }
                                        for (var i = 0; i < this.prescList2.length; i++) {
                                            for (var j = 0; j < this.prescList.length; j++) {
                                                if (this.prescList2[i].item == this.prescList[j].item) {
                                                    this.prescList[j].status = true
                                                }
                                            }
                                        }
                                        //GetDoctorSurgeryArray
                                        if (data.suregeryOptionsTop != null) {
                                            this.suregeryOptionsTop = data.suregeryOptionsTop
                                            this.suregeryOptions = data.suregeryOptions
                                        }
                                        this.totalSurgeryOptionsSelected = this.suregeryOptionsTop.length
                                        //GetDoctorClinicalObservations
                                        this.doctorClinicalObservation = data.doctorClinicalObservation
                                        //GetDoctorSymptoms
                                        this.doctorSymptomsDB = data.doctorSymptomsDB
                                        //GetDoctorDiagnosis
                                        this.doctorDiagnosisDB = data.doctorDiagnosisDB
                                        //GetMedicationSuggestions
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
                                        //med info
                                        // this.doctorMedicationTabletInfoDB = data.doctorMedicationTabletInfoDB
                                        // this.doctorMedicationCapsuleInfoDB = data.doctorMedicationCapsuleInfoDB
                                        // this.doctorMedicationSyrupInfoDB = data.doctorMedicationSyrupInfoDB
                                        // this.doctorMedicationSuspensionInfoDB = data.doctorMedicationSuspensionInfoDB
                                        // this.doctorMedicationEmulsionInfoDB = data.doctorMedicationEmulsionInfoDB
                                        // this.doctorMedicationSolutionInfoDB = data.doctorMedicationSolutionInfoDB
                                        // this.doctorMedicationInjectionInfoDB = data.doctorMedicationInjectionInfoDB
                                        // this.doctorMedicationCreamInfoDB = data.doctorMedicationCreamInfoDB
                                        // this.doctorMedicationOitmentInfoDB = data.doctorMedicationOitmentInfoDB
                                        // this.doctorMedicationGelInfoDB = data.doctorMedicationGelInfoDB
                                        // this.doctorMedicationLotionInfoDB = data.doctorMedicationLotionInfoDB
                                        // this.doctorMedicationDropsInfoDB = data.doctorMedicationDropsInfoDB
                                        // this.doctorMedicationAerosolsInfoDB = data.doctorMedicationAerosolsInfoDB
                                        // this.doctorMedicationPowderInfoDB = data.doctorMedicationPowderInfoDB
                                        // this.doctorMedicationMouthwashInfoDB = data.doctorMedicationMouthwashInfoDB
                                        //GetSavedSuggestions
                                        this.doctorOtherTreatmentDB = data.doctorOtherTreatmentDB
                                        this.doctorOtherTreatmentBandageDB = data.doctorOtherTreatmentBandageDB
                                        this.doctorOtherTreatmentOtherDB = data.doctorOtherTreatmentOtherDB
                                        this.doctorOtherTreatmentGargleDB = data.doctorOtherTreatmentGargleDB
                                        this.doctorOtherTreatmentDressingDB = data.doctorOtherTreatmentDressingDB
                                        this.instructionsSavedDB = data.instructionsSavedDB
                                        this.preConditionPresetArray = data.preConditionPresetArray
                                        this.allergyPresetArray = data.allergyPresetArray
                                        //GetSurgerySuggestions
                                        for (var i = 0; i < this.suregeryOptions.length; i++) {
                                            if (this.suregeryOptions[i].name == 'Cardiology') {
                                                this.suregeryOptions[i].database = data.CardiacDB
                                            } else if (this.suregeryOptions[i].name == 'ENT') {
                                                this.suregeryOptions[i].database = data.ENTDB
                                            } else if (this.suregeryOptions[i].name == 'Dental') {
                                                this.suregeryOptions[i].database = data.DentalDB
                                            } else if (this.suregeryOptions[i].name == 'Genito-Urinary') {
                                                this.suregeryOptions[i].database = data.GenitoDB
                                            } else if (this.suregeryOptions[i].name == 'Gynaecology/Obstetrics') {
                                                this.suregeryOptions[i].database = data.GynaecologyDB
                                            } else if (this.suregeryOptions[i].name == 'Neonatal') {
                                                this.suregeryOptions[i].database = data.NeonatalDB
                                            } else if (this.suregeryOptions[i].name == 'Neurology') {
                                                this.suregeryOptions[i].database = data.NeurologyDB
                                            } else if (this.suregeryOptions[i].name == 'Oncology') {
                                                this.suregeryOptions[i].database = data.OncologyDB
                                            } else if (this.suregeryOptions[i].name == 'Ophthalmology') {
                                                this.suregeryOptions[i].database = data.OphthalmologyDB
                                            } else if (this.suregeryOptions[i].name == 'Orthopaedics') {
                                                this.suregeryOptions[i].database = data.OrthopaedicsDB
                                            } else if (this.suregeryOptions[i].name == 'Paediatric') {
                                                this.suregeryOptions[i].database = data.PaediatricDB
                                            } else if (this.suregeryOptions[i].name == 'Vascular') {
                                                this.suregeryOptions[i].database = data.VascularDB
                                            }
                                        }
                                        // for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                                            //     if (this.suregeryOptionsTop[i].name == 'Cardiology') {
                                                //         this.suregeryOptionsTop[i].database = data.CardiacDB
                                                //     } else if (this.suregeryOptionsTop[i].name == 'ENT') {
                                                    //         this.suregeryOptionsTop[i].database = data.ENTDB
                                                    //     } else if (this.suregeryOptionsTop[i].name == 'Dental') {
                                                        //         this.suregeryOptionsTop[i].database = data.DentalDB
                                                        //     } else if (this.suregeryOptionsTop[i].name == 'Genito-Urinary') {
                                                            //         this.suregeryOptionsTop[i].database = data.GenitoDB
                                                            //     } else if (this.suregeryOptionsTop[i].name == 'Gynaecology/Obstetrics') {
                                                                //         this.suregeryOptionsTop[i].database = data.GynaecologyDB
                                                                //     } else if (this.suregeryOptionsTop[i].name == 'Neonatal') {
                                                                    //         this.suregeryOptionsTop[i].database = data.NeonatalDB
                                                                    //     } else if (this.suregeryOptionsTop[i].name == 'Neurology') {
                                                                        //         this.suregeryOptionsTop[i].database = data.NeurologyDB
                                                                        //     } else if (this.suregeryOptionsTop[i].name == 'Oncology') {
                                                                            //         this.suregeryOptionsTop[i].database = data.OncologyDB
                                                                            //     } else if (this.suregeryOptionsTop[i].name == 'Ophthalmology') {
                                                                                //         this.suregeryOptionsTop[i].database = data.OphthalmologyDB
                                                                                //     } else if (this.suregeryOptionsTop[i].name == 'Orthopaedics') {
                                                                                    //         this.suregeryOptionsTop[i].database = data.OrthopaedicsDB
                                                                                    //     } else if (this.suregeryOptionsTop[i].name == 'Paediatric') {
                                                                                        //         this.suregeryOptionsTop[i].database = data.PaediatricDB
                                                                                        //     } else if (this.suregeryOptionsTop[i].name == 'Vascular') {
                                                                                            //         this.suregeryOptionsTop[i].database = data.VascularDB
                                                                                            //     }
                                                                                            // }
                                                                                            //onTextChange
                                                                                            this.ecgSuggestionDB = data.ecgSuggestionDB
                                                                                            this.eegSuggestionDB = data.eegSuggestionDB
                                                                                            this.tmtSuggestionDB = data.tmtSuggestionDB
                                                                                            this.echoSuggestionDB = data.echoSuggestionDB
                                                                                            this.nerveSuggestionDB = data.nerveSuggestionDB
                                                                                            this.audioSuggestionDB = data.audioSuggestionDB
                                                                                            this.boneSuggestionDB = data.boneSuggestionDB
                                                                                            this.mammograaphySuggestionDB = data.mammograaphySuggestionDB
                                                                                            this.lungSuggestionDB = data.lungSuggestionDB
                                                                                            //GetInvestigationSuggestions
                                                                                            this.pathologySuggestionDB = data.pathologySuggestionDB
                                                                                            this.xraySuggestionDB = data.xraySuggestionDB
                                                                                            this.ultraSoundSuggestionDB = data.ultraSoundSuggestionDB
                                                                                            this.dopplerSuggestionDB = data.dopplerSuggestionDB
                                                                                            this.ctScanSuggestionDB = data.ctScanSuggestionDB
                                                                                            this.mriSuggestionDB = data.mriSuggestionDB
                                                                                            this.eyeSuggestionDB = data.eyeSuggestionDB
                                                                                            this.otherSuggestionDB = data.otherSuggestionDB
                                                                                            //GetDoctorPreset
                                                                                            this.doctorPresetArray = data.doctorPresetArray
                                                                                            //GetDoctorOtherPreset
                                                                                            this.findingPreSetVals = data.findingPreSetVals
                                                                                            this.symptomsPresetArray = data.symptomsPresetArray
                                                                                            this.diagnosisPresetArray = data.diagnosisPresetArray
                                                                                            //GetDoctorPresetArray
                                                                                            this.presetArrayInstruction = data.presetArrayInstruction
                                                                                            this.presetArraySurgery = data.presetArraySurgery
                                                                                            this.presetArrayOtherTreatment = data.presetArrayOtherTreatment
                                                                                            this.presetArrayInvestigation = data.presetArrayInvestigation
                                                                                            //GetPrescriptionPad
                                                                                            this.savedPrescriptionPadArray = data.savedPrescriptionPadArray
                                                                                            //med info
                                                                                            this.medInfoDB = data.medInfoDB
                                                                                        }else{
                                                                                            this.toastr.error(data.message,"Error");
                                                                                            this.router.navigate(['header-two-layout/dashboard-prescription'])
                                                                                            return
                                                                                        }
                                                                                        this.loading = false
                                                                                        this.minutes = 0
                                                                                        this.seconds = 0
                                                                                        setInterval(() => {
                                                                                            this.incrementTimer()
                                                                                        }, 1000);
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
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

referToDcotor() {
    console.log(this.referDetail)
    this.refer_status = true
}

onSelectSubSpeciality(data,i,j){       
    let object = {
        type:data.sub_speciality
    }
    console.log(object)
    this.userService.FindProcedureNameOfSurgery(object).subscribe(data => {
        console.log(data)
        if (data.response == true) {
            // this.suregeryOptionsTop[i].div[j].procedure_name = ""
            this.suregeryOptionsTop[i].database = data.data
        }
    }, err => {
        console.log(err);
    })
}

saveFreqDurationTreatment(){
    if (this.tempTreatFrequency != null && this.tempTreatFrequency != '' && this.tempTreatFrequency != 'Frequency') {
        this.tempTreatObject[this.tempTreatObjectIndex].Frequency = this.tempTreatFrequency
    }
    this.tempTreatObject[this.tempTreatObjectIndex].SpecialInstruction = this.tempTreatSpecialInstruction
    if (this.tempTreatDuration != null && this.tempTreatDuration != '' && this.tempTreatDuration != 'Duration') {
        if(this.tempTreatObjectIndex!=2){
            this.tempTreatObject[this.tempTreatObjectIndex].Duration = this.tempTreatDuration                
        }else {
            this.tempTreatObject[this.tempTreatObjectIndex].div[this.tempPlasterDivIndex].Duration = this.tempTreatDuration     
        }
    }
}

resetAll(){
    this.preConditionComplete = false
    this.preCondSelected = []
    for (var i = 0; i < this.preCondMdlArray.length; i++) {
        this.preCondMdlArray[i].status = false
    }
    this.precondlength = 0
    

    this.bodyIndicatorSelected = [];
    this.bodyIndicatorComplete = false;
    this.bodyIndicator = {
        'temp': 'Select',
        'pulse': 'Select',
        'sys': 'Select',
        'dia': 'Select',
        'spo': 'Select',
        'rbs': 'Select'
    };
    

    this.surgeryComplete = false
    this.totalSurgeryOptionsSelected = 0

    this.suregeryOptions = [{
        name: 'Cardiology',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'BRONCHIAL INJURIES/FB',
        'CABG',
        'CARDIAC',
        'CARDIAC INJURES',
        'CARDIOTHORACIC',
        'CHEST INJURY',
        'CHEST SURGERY',
        'CLOSED HEART',
        'COIL CLOSURE',
        'COMPLEX ARRHYTHMIAS',
        'CONGENITAL (COMPLEX)',
        'CONGENITAL (SIMPLE)',
        'DEVICE CLOSURE',
        'DIAPHRAGMATIC INJURIES',
        'LUNGS',
        'OESOPHAGEAL INJURY/FB',
        'PERICARDIUM',
        'SIMPLE ARRHYTHMIAS',
        'VALVE REPAIR',
        'VALVE REPLACEMENT'
        ]
    },
    {
        name: 'Dental',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'BRACES (ORTHODONTICS)',
        'CROWN , BRIDGE & VENEER',
        'DENTAL IMPLANT',
        'DENTAL-TREATMENT FOR CHILDREN',
        'DENTURE',
        'ENDODONTICS',
        'FILLINGS & COSMETIC TREATMENTS',
        'GUM TREATMENT',
        'ORAL SURGERY',
        'OTHERS'
        ]
    },
    {
        name: 'ENT',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'EAR',
        'NOSE',
        'THROAT'
        ]
    },
    {
        name: 'Gastroenterology',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'EMERGENCY',
        'GALL BLADDER',
        'HERNIA',
        'LARGE / SMALL INTESTINE',
        'LARGE INTESTINE',
        'LIVER',
        'OESOPHAGUS',
        'PANCREAS',
        'SMALL INTESTINE',
        'SPLEEN',
        'STOMACH'
        ]
    },
    {
        name: 'General Surgery',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'GENERAL SURGERY',
        'HEAD & NECK',
        'ABDOMEN',
        'ADRENAL',
        'GALLBLADDER',
        'BREAST',
        'VASCULAR',
        'UROLOGY'
        ]
    },
    {
        name: 'Gynaecology/Obstetrics',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'OBSTETRICS',
        'GYNAECOLOGY'
        ]
    },
    // { name: 'Genito-Urinary', status: false, status1: false, div: [], database: [], sub_speciality_array: [] },
    { name: 'Neonatal', status: false, status1: false, div: [], database: [], sub_speciality_array: ['NEONATAL INTENSIVE CARE'] },
    {
        name: 'Neurology',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'ANEYRISMS',
        'BRAIN',
        'OTHER SURGERIES',
        'SOFT TISSUE and VASCULAR',
        'SPINAL SURGERIES',
        'SPINE',
        'TRIGEMINAL NEURALGIA'
        ]
    },
    {
        name: 'Oncology',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'ABDOMINAL WALL TUMOR',
        'BONE / SOFT TISSUE TUMORS',
        'BREAST TUMORS',
        'CA. CERVIX',
        'CA. EAR',
        'CA. ENDOMETRIUM',
        'CA. GALL BLADDER',
        'CA. GASTRO INTESTINAL TRACT',
        'CA. NASOPHARYNX',
        'CA. PARATHYROID',
        'CA. THYROID',
        'CA. TRACHEA',
        'CA. URINARY BLADDER',
        'CA. EYE/ MAXILLA /PARA NASAL SINUS',
        'CA.ORAL CAVITY',
        'CA.RECTUM',
        'CA.SOFT PALATE',
        'ESOPHAGUS',
        'GASTROINTESTINAL TRACT',
        'GENITO URINARY CANCER',
        'GENITO URINARY SYSTEM',
        'GYNAEC CANCERS',
        'GYNAECOLOGICAL ONCOLOGY',
        'HEAD & NECK',
        'LUNG',
        'LUNG CANCER',
        'PALLIATIVE SURGERIES',
        'RECONSTRUCTION',
        'RETROPERITONEAL TUMOR',
        'SKIN TUMORS',
        'SOFT TISSUE /BONE TUMORS . CHEST WALL',
        'SOFT TISSUE AND BONE TUMORS',
        'SPLEEN',
        'TESTES CANCER',
        'THORACIC AND MEDIASTINUM'
        ]
    },
    {
        name: 'Ophthalmology',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'CORNEA AND SCLERA',
        'LID SURGERY',
        'OPTHALMOLOGY',
        'ORBIT',
        'PEDIATRIC',
        'RETINA',
        'SQUINT CORRECTION',
        'VITREO-RETINA'
        ]
    },
    {
        name: 'Orthopaedics',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'AMPUTATIONS -SUPRA MAJOR',
        'AMPUTATIONS-INTERMEDIATE',
        'AMPUTATIONS-MAJOR',
        'AMPUTATIONS-MINOR',
        'BONE AND JOINT',
        'DAYCARE PROCEDURE',
        'DISLOCATIONS',
        'FEMORAL NECK FRACTURE',
        'FRACTURE CORRECTION',
        'FRACTURE K WIRE FIXATION',
        'FRACTURE-CLOSED PINNING DISPLACED PAEDIATRIC FRACTURES',
        'FRACTURE-EXTERNAL FIXATOR',
        'FRACTURE-NAILING / CRIF',
        'FRACTURE-PLATING-ORIF',
        'FRACTURE-TENSION BAND WIRING',
        'HIP',
        'INTERMEDIATE WOUND DEBRIDEMENT AND WASHOUT',
        'KNEE/HIP REPLACEMENT',
        'MAJOR WOUND DEBRIDEMENT AND WASHOUT',
        'MINOR/ SECOND LOOK WOUND DEBRIDEMENT AND WASHOUT',
        'PAEDIATRIC FRACTURE-NAILING / CRIF',
        'SOFT TISSUE SURGERY',
        'SPINE SURGERY',
        'TENDON REPAIR MAJOR',
        'TENDON TRANSFERS MULTIPLE',
        'TUMOR SURGERY',
        ]
    },
    {
        name: 'Paediatric',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'ABDOMEN',
        'CHEST',
        'CONGENITAL MALFORMATIONS',
        'GENITOURINARY',
        'HEAD AND NECK',
        'MISCELLANEOUS',
        'NEUROSURGERY',
        'ONCOLOGY'
        ]
    },
    {
        name: 'Urology',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'BLADDER AND PROSTATE',
        'CORRECTIVE SURGERIES',
        'KIDNEY',
        'LITHOTRIPSY',
        'OTHER CORRECTIVE SURGERIES/PROCEDURE',
        'RENAL',
        'RENAL CALCULI',
        'RENAL STONE SURGERY',
        'TESTIS',
        'URETER',
        'URETHRA'
        ]
    },
    {
        name: 'Vascular',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'ENDOVASCULAR',
        'LOWER LIMB BYPASS',
        'OPEN VASCULAR',
        'THROMBO EMBOLISM – LL',
        'THROMBO EMBOLISM – UL'
        ]
    },
    { name: 'Medical Emergencies', status: false, status1: false, div: [], database: [], sub_speciality_array: ['MEDICALEMERGENCIES'] }
    ]

    this.suregeryOptionsTop = []
    this.GetDoctorSurgeryArray(this.doctorData.itemId)
    // this.GetSurgerySuggestions('Cardiology')
    // this.GetSurgerySuggestions('ENT')
    // this.GetSurgerySuggestions('Dental')
    // this.GetSurgerySuggestions('Genito-Urinary')
    // this.GetSurgerySuggestions('Gynaecology/Obstetrics')
    // this.GetSurgerySuggestions('Neonatal')
    // this.GetSurgerySuggestions('Neurology')
    // this.GetSurgerySuggestions('Oncology')
    // this.GetSurgerySuggestions('Ophthalmology')
    // this.GetSurgerySuggestions('Orthopaedics')
    // this.GetSurgerySuggestions('Paediatric')
    // this.GetSurgerySuggestions('Vascular')

    this.surgeryPresetShow = false
    for (var i = 0; i < this.presetArraySurgery.length; i++) {
        this.presetArraySurgery[i].status = false
    }
    

    this.vaccinationComplete = false
    this.finalCurrentVaccinationArray = []
    this.finalDueVaccinationArray = []
    this.tempCurrentVaccinationArray = []
    this.tempDueVaccinationArray = []
    this.currentVaccinationComplete = false
    this.dueVaccinationComplete = false
    this.currentVaccinationArray = []
    this.dueVaccinationArray = []
    this.vaccinationDate = new Date()
    

    this.medicationComplete = false
    this.medicationStatus = [
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

    this.medicationTabArray = []
    this.medicationCapArray = []
    this.medicationSypArray = []
    this.medicationSuspArray = []
    this.medicationEmulsnArray = []
    this.medicationInjArray = []
    this.medicationCreamArray = []
    this.medicationGelArray = []
    this.medicationDropsArray = []
    this.medicationPowderArray = []
    this.medicationAerosolsArray = []
    this.medicationMouthWashArray = []
    this.medicationSolutionArray = []
    this.medicationLotionArray = []
    this.medicationOintmentArray = []

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

    this.totalMedications = 0

    this.medicationSavedArray = []
    this.medicationStatus[0].status = true
    this.investigationStatus[0].status = true

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

    this.totalMedicationPresetSelected = 0
    this.medicationPresetShow = false
    for (var i = 0; i < this.doctorPresetArray.length; i++) {
        this.doctorPresetArray[i].status = false
    }
    

    this.instructionsComplete = false
    this.instructionsSelected = []
    this.inputBox = [{ name: 'Instruction 1', instructionsInput: '', inputInstruction: '' }];
    this.instructionPresetShow = false
    for (var j = 0; j < this.presetArrayInstruction.length; j++) {
        this.presetArrayInstruction[j].status = false
    }
    

    this.investigationIndicatorComplete = false
    this.investigationArray = []
    this.numberOfInvestigationSelected = 0
    this.investigationPresetShow = false
    this.investigationStatus = [{
        name: 'Pathology',
        status: false,
        model: ''
    }, {
        name: 'X-Ray',
        status: false,
        model: ''
    }, {
        name: 'Ultrasound',
        status: false,
        model: ''
    }, {
        name: 'Doppler Studies',
        status: false,
        model: ''
    }, {
        name: 'ECG',
        status: false,
        model: ''
    }, {
        name: 'EEG',
        status: false,
        model: ''
    }, {
        name: 'TMT',
        status: false,
        model: ''
    }, {
        name: 'Echo',
        status: false,
        model: ''
    }, {
        name: 'CT-Scan',
        status: false,
        model: ''
    }, {
        name: 'MRI',
        status: false,
        model: ''
    },
    {
        name: 'Nerve Test',
        status: false,
        model: ''
    }, {
        name: 'Uroflowmetry',
        status: false,
        model: ''
    }, {
        name: 'Audiometry',
        status: false,
        model: ''
    }, {
        name: 'Mammography',
        status: false,
        model: ''
    }, {
        name: 'Bone Densitometry',
        status: false,
        model: ''
    }, {
        name: 'Eye Tests',
        status: false,
        model: ''
    }, {
        name: 'Lung Test',
        status: false,
        model: ''
    }, {
        name: 'Others',
        status: false,
        model: ''
    }
    ]
    for (var i = 0; i < this.presetArrayInvestigation.length; i++) {
        this.presetArrayInvestigation[i].status = false
    }
    

    this.eyePresComplete = false
    this.openModalFromEyePres();
    this.rightOD = {}
    this.rightOD.sphere = 0
    this.rightOD.cylinder = 0
    this.rightOD.axis = 0
    this.rightOD.add = 0
    this.rightOD.pd = 0
    this.leftOD = {}
    this.leftOD.sphere = 0
    this.leftOD.cylinder = 0
    this.leftOD.axis = 0
    this.leftOD.add = 0
    this.leftOD.pd = 0
    this.finalRightOD = {}
    this.finalLeftOD = {}
    

    this.diagnosisSelected = []
    this.itemsdiagnosis = []
    this.diagnosisComplete = false;
    for (var i = 0; i < this.diagnosisPresetArray.length; i++) {
        this.diagnosisPresetArray[i].status = false
    }


    this.allergyComplete = false;
    this.allergySelected = []
    this.finalAllergy = []
    this.otherAllergy = []
    this.AllergyArray = [{
        'allergyName': 'Drug Allergy',
        'allergySource': [{
            'status': false,
            'text': 'Aspirin'
        }, {
            'status': false,
            'text': 'Ampicillin'
        }, {
            'status': false,
            'text': 'Pain killer'
        }, {
            'status': false,
            'text': 'Antibiotics'
        }, {
            'status': false,
            'text': 'Tetracycline'
        }, {
            'status': false,
            'text': 'Sulfa'
        }]
    }, {
        'allergyName': 'Food Allergy',
        'allergySource': [{
            'status': false,
            'text': 'Chocolate'
        }, {
            'status': false,
            'text': 'Egg'
        }, {
            'status': false,
            'text': 'Fish'
        }, {
            'status': false,
            'text': 'Milk'
        }, {
            'status': false,
            'text': 'Nuts'
        }, {
            'status': false,
            'text': 'Prawn'
        }, {
            'status': false,
            'text': 'Meat'
        }, {
            'status': false,
            'text': 'Sea Food'
        }, {
            'status': false,
            'text': 'Spices'
        }]
    }, {
        'allergyName': 'Skin Allergy',
        'allergySource': [{
            'status': false,
            'text': 'Urticaria'
        }, {
            'status': false,
            'text': 'Rash'
        }, {
            'status': false,
            'text': 'Sun'
        }, {
            'status': false,
            'text': 'Anaphylaxis'
        }, {
            'status': false,
            'text': 'Dye'
        }, {
            'status': false,
            'text': 'Detergent'
        }]
    }, {
        'allergyName': 'Respiratory Allergy',
        'allergySource': [{
            'status': false,
            'text': 'Dust'
        }, {
            'status': false,
            'text': 'Pollen'
        }, {
            'status': false,
            'text': 'Paint smell'
        }, {
            'status': false,
            'text': 'Smoke'
        }, {
            'status': false,
            'text': 'Perfume'
        }, {
            'status': false,
            'text': 'Temp change'
        }]
    }]
    

    this.findingsSelected = []
    this.itemsfinding = []
    this.findingsComplete = false
    for (var i = 0; i < this.findingPreSetVals.length; i++) {
        this.findingPreSetVals[i].status = false
    }

    this.symptomsSelected = []
    this.symptomsComplete = false;
    this.itemsymptoms = []
    for (var i = 0; i < this.symptomsPresetArray.length; i++) {
        this.symptomsPresetArray[i].status = false
    }
    

    this.finalfollowUpDays = 0
    this.followUpDays = 0
    this.followDaysComplete = false


    this.treatmentComplete = false
    this.treatmentStatus = [
    { name: 'Lifestyle Changes', status: false, SpecialInstruction: null, lifestyle: null },
    { name: 'Physiotherapy', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' },
    { name: 'Plaster', status: false, SpecialInstruction: null, Injury_Area: 'Injury Area', plaster_type: null, Duration: 'Duration' },
    { name: 'Fomentation', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration' },
    { name: 'Gargle', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: null },
    { name: 'Dressing', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: null },
    { name: 'Bandage', status: false, SpecialInstruction: null, Frequency: 'Frequency', Duration: 'Duration', med_name: null },
    { name: 'Other', status: false, SpecialInstruction: null, treat: null }
    ]
    this.treatmentStatus[2].div = []
    this.treatmentStatus[2].div.push({
        name: 'Plaster',
        status: false,
        SpecialInstruction: null,
        Injury_Area: 'Injury Area',
        plaster_type: null,
        Duration: 'Duration'
    })
    this.treatmentStatus[7].div = []
    this.treatmentStatus[7].div.push({
        name: 'Other',
        status: false,
        SpecialInstruction: null,
        Frequency: 'Frequency',
        Duration: 'Duration',
        med_name: null
    })
    // this.treatmentStatus[0].status = true
    this.tempTreatObject = null
    this.tempTreatObjectIndex = null
    this.tempTreatFrequency = null
    this.tempTreatSpecialInstruction = null
    this.tempTreatDuration = null
    this.totalOtherTreatment = 0
    this.treatmentArray = []
    this.tempPlasterDivIndex = null
    this.plaster_open_by_main = true
    this.otherTreatmentPresetShow = false        
    for (var i = 0; i < this.presetArrayOtherTreatment.length; i++) {
        this.presetArrayOtherTreatment[i].status = false
    }
}

onTextChangeOfMedName(type, observation) {
    let object = {
        doctor_id: this.doctorData.itemId,
        type: type,
        observation:observation,
        smart_pharmacy_id: this.doctorData.smart_pharmacy_id
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

onRemoveMedName(type,data){
    data.med_info = []
    if (type == 'TabletInfo') {
        this.doctorMedicationTabletInfoDB = []
    } else if (type == 'CapsuleInfo') {
        this.doctorMedicationCapsuleInfoDB = []
    } else if (type == 'SyrupInfo') {
        this.doctorMedicationSyrupInfoDB = []
    } else if (type == 'SuspensionInfo') {
        this.doctorMedicationSuspensionInfoDB = []
    } else if (type == 'EmulsionInfo') {
        this.doctorMedicationEmulsionInfoDB = []
    } else if (type == 'SolutionInfo') {
        this.doctorMedicationSolutionInfoDB = []
    } else if (type == 'InjectionInfo') {
        this.doctorMedicationInjectionInfoDB = []
    } else if (type == 'CreamInfo') {
        this.doctorMedicationCreamInfoDB = []
    } else if (type == 'OitmentInfo') {
        this.doctorMedicationOitmentInfoDB = []
    } else if (type == 'GelInfo') {
        this.doctorMedicationGelInfoDB = []
    } else if (type == 'LotionInfo') {
        this.doctorMedicationLotionInfoDB = []
    } else if (type == 'DropsInfo') {
        this.doctorMedicationDropsInfoDB = []
    } else if (type == 'AerosolsInfo') {
        this.doctorMedicationAerosolsInfoDB = []
    } else if (type == 'PowderInfo') {
        this.doctorMedicationPowderInfoDB = []
    } else if (type == 'MouthWashInfo') {
        this.doctorMedicationMouthwashInfoDB = []
    }
}

getSafeContent(data){
    return this.domSanitizer.bypassSecurityTrustHtml(data);
}

getClassLanguage(){
    if(this.languageOptionSelected==""){
        return 'btn sm_green-btn lang-btn'
    }else{
        return 'btn sm_green-btn lang-btn active'
    }
}

languageSave(){
    if(this.languageOptionSelected==""){
        this.languageOptionSelected = this.doctorData.language
        // this.doTranslation("translated_doctorName")
        // this.doTranslation("translated_clinicName")
        this.doTranslation("translated_appointmentText")
        this.doTranslation("translated_emergencyText")
        this.doTranslation("translated_treatmentText")
        this.doTranslation("translated_servicesText")
        this.doTranslation("translated_footer")
        this.doTranslation("translated_VaccinationHeading")
        this.doTranslation("translated_PreCondHeading")
        this.doTranslation("translated_allergyHeading")
        this.doTranslation("translated_BIHeading")
        this.doTranslation("translated_PTHeading")
        this.doTranslation("translated_sympHeading")
        this.doTranslation("translated_diagnosisHeading")
        this.doTranslation("translated_instHeading")
        this.doTranslation("translated_invHeading")
        this.doTranslation("translated_surgHeading")
        this.doTranslation("translated_medication")
        this.doTranslation("translated_eyeHeading")
        this.doTranslation("translated_OTHeading")
    }else{
        this.languageOptionSelected=""
    }
}

previewClicked(){
    if(this.consultingPatient.fee && isNaN(this.consultingPatient.fee)){
        this.toastr.warning("Invalid fee","Warning")
        return
    }
    if(this.consultingPatient.age && isNaN(this.consultingPatient.age)){
        this.toastr.warning("Invalid age","Warning")
        return
    }
    if(this.consultingPatient.weight && isNaN(this.consultingPatient.weight)){
        this.toastr.warning("Invalid weight","Warning")
        return
    }
    if(this.consultingPatient.height && isNaN(this.consultingPatient.height)){
        this.toastr.warning("Invalid height","Warning")
        return
    } 
    if(this.languageOptionSelected != ""){
        // this.loading = true
        // var container = document.getElementById("previewModalPdf");
        // let object = {
            //     language:this.languageOptionSelected,
            //     text:container.innerHTML
            // }
            // this.userService.GoogleTransaltion(object).subscribe(data => {
                //     this.loading = false
                //     console.log(data)            
                //     if(data.response == true){
                    // this.translatedDiv = data.data
                    // $("#previewModal").modal("hide");
                    $("#translated_div").modal("show");
                    //     }else{
                        //         this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                        //     }
                        // }, err => {
                            //     console.log(err);
                            // })
                        } else{
                            $("#previewModal").modal("show");
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

                    doTranslation(type){
                        setTimeout(() => { 
                            if(this.languageOptionSelected != ""){
                                // if(type=="translated_doctorName"){
                                    //     var container = document.getElementById("translated_doctorName");
                                    //     console.log(container)
                                    //     let object = {
                                        //         language:this.languageOptionSelected,
                                        //         text:container.innerHTML.toString().toLowerCase()
                                        //     }
                                        //     this.userService.GoogleTransaltion(object).subscribe(data => {
                                            //         console.log(data)            
                                            //         if(data.response == true){
                                                //             this.translated_doctorName = data.data
                                                //         }else{
                                                    //             this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                    //         }
                                                    //     }, err => {
                                                        //         console.log(err);
                                                        //     })                
                                                        // }
                                                        // else if(type=="translated_clinicName"){
                                                            //     var container = document.getElementById("translated_clinicName");
                                                            //     let object = {
                                                                //         language:this.languageOptionSelected,
                                                                //         text:container.innerHTML.toString().toLowerCase()
                                                                //     }
                                                                //     this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                    //         console.log(data)            
                                                                    //         if(data.response == true){
                                                                        //             this.translated_clinicName = data.data
                                                                        //         }else{
                                                                            //             this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                            //         }
                                                                            //     }, err => {
                                                                                //         console.log(err);
                                                                                //     })
                                                                                // }
                                                                                // else 
                                                                                if(type=="translated_appointmentText"){
                                                                                    var container = document.getElementById("translated_appointmentText");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML.toString().toLowerCase()
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_appointmentText = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_emergencyText"){
                                                                                    var container = document.getElementById("translated_emergencyText");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML.toString().toLowerCase()
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_emergencyText = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_treatmentText"){
                                                                                    var container = document.getElementById("translated_treatmentText");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML//.toString().toLowerCase()
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_treatmentText = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_servicesText"){
                                                                                    var container = document.getElementById("translated_servicesText");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML//.toString().toLowerCase()
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_servicesText = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_medication"){
                                                                                    var container = document.getElementById("translated_medication");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_medication = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_PreCondHeading"){
                                                                                    var container = document.getElementById("translated_PreCondHeading");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML.toString().toLowerCase()
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_PreCondHeading = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_BIHeading"){
                                                                                    var container = document.getElementById("translated_BIHeading");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML.toString().toLowerCase()
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_BIHeading = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_allergyHeading"){
                                                                                    var container = document.getElementById("translated_allergyHeading");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML.toString().toLowerCase()
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_allergyHeading = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_sympHeading"){
                                                                                    var container = document.getElementById("translated_sympHeading");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML.toString().toLowerCase()
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_sympHeading = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_PTHeading"){
                                                                                    var container = document.getElementById("translated_PTHeading");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML.toString().toLowerCase()
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_PTHeading = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_diagnosisHeading"){
                                                                                    var container = document.getElementById("translated_diagnosisHeading");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML.toString().toLowerCase()
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_diagnosisHeading = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_invHeading"){
                                                                                    var container = document.getElementById("translated_invHeading");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_invHeading = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_OTHeading"){
                                                                                    var container = document.getElementById("translated_OTHeading");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_OTHeading = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_surgHeading"){
                                                                                    var container = document.getElementById("translated_surgHeading");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_surgHeading = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_instHeading"){
                                                                                    var container = document.getElementById("translated_instHeading");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_instHeading = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_eyeHeading"){
                                                                                    var container = document.getElementById("translated_eyeHeading");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML.toString().toLowerCase()
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_eyeHeading = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })
                                                                                }
                                                                                else if(type=="translated_footer"){
                                                                                    var container = document.getElementById("translated_footer");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_footer = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })   
                                                                                }
                                                                                else if(type=="translated_VaccinationHeading"){
                                                                                    var container = document.getElementById("translated_VaccinationHeading");
                                                                                    let object = {
                                                                                        language:this.languageOptionSelected,
                                                                                        text:container.innerHTML.toString().toLowerCase()
                                                                                    }
                                                                                    this.userService.GoogleTransaltion(object).subscribe(data => {
                                                                                        console.log(data)            
                                                                                        if(data.response == true){
                                                                                            this.translated_VaccinationHeading = data.data
                                                                                        }else{
                                                                                            this.toastr.error("Some error occured while transaltion. Please try again!","Error")
                                                                                        }
                                                                                    }, err => {
                                                                                        console.log(err);
                                                                                    })   
                                                                                }
                                                                            }
                                                                        }, 1000);
}

resetClassPrecPreset() {
    var medi = false
    var inv = false
    var symp = false
    var diag = false
    var instr = false
    var surgery = false
    var othertreat = false
    if (!(this.symptomsComplete == true && this.symptomsSelected.length > 0)){
        symp = true
    }
    if (!(this.diagnosisComplete == true && this.diagnosisSelected.length > 0)){
        diag = true
    }
    if (!(this.treatmentComplete == true)){
        othertreat = true
    }
    if (!(this.investigationIndicatorComplete == true && this.investigationArray.length > 0)){
        inv = true 
    }
    if (!(this.surgeryComplete == true && this.surgerySelectedArray.length > 0)){
        surgery = true
    }
    if (!(this.instructionsComplete == true && this.instructionsSelected.length > 0)){
        instr = true
    }
    if(this.medicationComplete == false){
        medi = true
    }
    if(medi==true && inv==true && symp==true && diag==true && instr==true && surgery==true && othertreat==true){
        for (var i = 0; i < this.savedPrescriptionPadArray.length; i++) {
            if(this.savedPrescriptionPadArray[i].status==true){
                console.log("fdgbvkjfgbvjsbvjskdkjv")
                this.savedPrescriptionPadArray[i].status=false
                break
            }
        }
    }else{
        for (var i = 0; i < this.savedPrescriptionPadArray.length; i++) {
            if (this.savedPrescriptionPadArray[i].id == this.temp_preset_id) {
                this.savedPrescriptionPadArray[i].status = true
            } else {
                this.savedPrescriptionPadArray[i].status = false
            }
        }           
    }
}

resetSurgery(){
    this.surgeryComplete = false
    this.totalSurgeryOptionsSelected = 0

    this.suregeryOptions = [{
        name: 'Cardiology',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'BRONCHIAL INJURIES/FB',
        'CABG',
        'CARDIAC',
        'CARDIAC INJURES',
        'CARDIOTHORACIC',
        'CHEST INJURY',
        'CHEST SURGERY',
        'CLOSED HEART',
        'COIL CLOSURE',
        'COMPLEX ARRHYTHMIAS',
        'CONGENITAL (COMPLEX)',
        'CONGENITAL (SIMPLE)',
        'DEVICE CLOSURE',
        'DIAPHRAGMATIC INJURIES',
        'LUNGS',
        'OESOPHAGEAL INJURY/FB',
        'PERICARDIUM',
        'SIMPLE ARRHYTHMIAS',
        'VALVE REPAIR',
        'VALVE REPLACEMENT'
        ]
    },
    {
        name: 'Dental',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'BRACES (ORTHODONTICS)',
        'CROWN , BRIDGE & VENEER',
        'DENTAL IMPLANT',
        'DENTAL-TREATMENT FOR CHILDREN',
        'DENTURE',
        'ENDODONTICS',
        'FILLINGS & COSMETIC TREATMENTS',
        'GUM TREATMENT',
        'ORAL SURGERY',
        'OTHERS'
        ]
    },
    {
        name: 'ENT',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'EAR',
        'NOSE',
        'THROAT'
        ]
    },
    {
        name: 'Gastroenterology',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'EMERGENCY',
        'GALL BLADDER',
        'HERNIA',
        'LARGE / SMALL INTESTINE',
        'LARGE INTESTINE',
        'LIVER',
        'OESOPHAGUS',
        'PANCREAS',
        'SMALL INTESTINE',
        'SPLEEN',
        'STOMACH'
        ]
    },
    {
        name: 'General Surgery',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'GENERAL SURGERY',
        'HEAD & NECK',
        'ABDOMEN',
        'ADRENAL',
        'GALLBLADDER',
        'BREAST',
        'VASCULAR',
        'UROLOGY'
        ]
    },
    {
        name: 'Gynaecology/Obstetrics',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'OBSTETRICS',
        'GYNAECOLOGY'
        ]
    },
    // { name: 'Genito-Urinary', status: false, status1: false, div: [], database: [], sub_speciality_array: [] },
    { name: 'Neonatal', status: false, status1: false, div: [], database: [], sub_speciality_array: ['NEONATAL INTENSIVE CARE'] },
    {
        name: 'Neurology',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'ANEYRISMS',
        'BRAIN',
        'OTHER SURGERIES',
        'SOFT TISSUE and VASCULAR',
        'SPINAL SURGERIES',
        'SPINE',
        'TRIGEMINAL NEURALGIA'
        ]
    },
    {
        name: 'Oncology',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'ABDOMINAL WALL TUMOR',
        'BONE / SOFT TISSUE TUMORS',
        'BREAST TUMORS',
        'CA. CERVIX',
        'CA. EAR',
        'CA. ENDOMETRIUM',
        'CA. GALL BLADDER',
        'CA. GASTRO INTESTINAL TRACT',
        'CA. NASOPHARYNX',
        'CA. PARATHYROID',
        'CA. THYROID',
        'CA. TRACHEA',
        'CA. URINARY BLADDER',
        'CA. EYE/ MAXILLA /PARA NASAL SINUS',
        'CA.ORAL CAVITY',
        'CA.RECTUM',
        'CA.SOFT PALATE',
        'ESOPHAGUS',
        'GASTROINTESTINAL TRACT',
        'GENITO URINARY CANCER',
        'GENITO URINARY SYSTEM',
        'GYNAEC CANCERS',
        'GYNAECOLOGICAL ONCOLOGY',
        'HEAD & NECK',
        'LUNG',
        'LUNG CANCER',
        'PALLIATIVE SURGERIES',
        'RECONSTRUCTION',
        'RETROPERITONEAL TUMOR',
        'SKIN TUMORS',
        'SOFT TISSUE /BONE TUMORS . CHEST WALL',
        'SOFT TISSUE AND BONE TUMORS',
        'SPLEEN',
        'TESTES CANCER',
        'THORACIC AND MEDIASTINUM'
        ]
    },
    {
        name: 'Ophthalmology',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'CORNEA AND SCLERA',
        'LID SURGERY',
        'OPTHALMOLOGY',
        'ORBIT',
        'PEDIATRIC',
        'RETINA',
        'SQUINT CORRECTION',
        'VITREO-RETINA'
        ]
    },
    {
        name: 'Orthopaedics',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'AMPUTATIONS -SUPRA MAJOR',
        'AMPUTATIONS-INTERMEDIATE',
        'AMPUTATIONS-MAJOR',
        'AMPUTATIONS-MINOR',
        'BONE AND JOINT',
        'DAYCARE PROCEDURE',
        'DISLOCATIONS',
        'FEMORAL NECK FRACTURE',
        'FRACTURE CORRECTION',
        'FRACTURE K WIRE FIXATION',
        'FRACTURE-CLOSED PINNING DISPLACED PAEDIATRIC FRACTURES',
        'FRACTURE-EXTERNAL FIXATOR',
        'FRACTURE-NAILING / CRIF',
        'FRACTURE-PLATING-ORIF',
        'FRACTURE-TENSION BAND WIRING',
        'HIP',
        'INTERMEDIATE WOUND DEBRIDEMENT AND WASHOUT',
        'KNEE/HIP REPLACEMENT',
        'MAJOR WOUND DEBRIDEMENT AND WASHOUT',
        'MINOR/ SECOND LOOK WOUND DEBRIDEMENT AND WASHOUT',
        'PAEDIATRIC FRACTURE-NAILING / CRIF',
        'SOFT TISSUE SURGERY',
        'SPINE SURGERY',
        'TENDON REPAIR MAJOR',
        'TENDON TRANSFERS MULTIPLE',
        'TUMOR SURGERY',
        ]
    },
    {
        name: 'Paediatric',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'ABDOMEN',
        'CHEST',
        'CONGENITAL MALFORMATIONS',
        'GENITOURINARY',
        'HEAD AND NECK',
        'MISCELLANEOUS',
        'NEUROSURGERY',
        'ONCOLOGY'
        ]
    },
    {
        name: 'Urology',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'BLADDER AND PROSTATE',
        'CORRECTIVE SURGERIES',
        'KIDNEY',
        'LITHOTRIPSY',
        'OTHER CORRECTIVE SURGERIES/PROCEDURE',
        'RENAL',
        'RENAL CALCULI',
        'RENAL STONE SURGERY',
        'TESTIS',
        'URETER',
        'URETHRA'
        ]
    },
    {
        name: 'Vascular',
        status: false,
        status1: false,
        div: [],
        database: [],
        sub_speciality_array: [
        'ENDOVASCULAR',
        'LOWER LIMB BYPASS',
        'OPEN VASCULAR',
        'THROMBO EMBOLISM – LL',
        'THROMBO EMBOLISM – UL'
        ]
    },
    { name: 'Medical Emergencies', status: false, status1: false, div: [], database: [], sub_speciality_array: ['MEDICALEMERGENCIES'] }
    ]

    this.suregeryOptionsTop = []
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
        medicationComplete: false,
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
    console.log(this.consultingPatient.ID)
    var prec_id
    if(this.consultingPatient.ID){
        prec_id = this.consultingPatient.ID 
    }else{
        prec_id = this.consultingPatient.id 
    }
    var dataToSend = {
        doctor_id: this.doctorData._id,
        precription:precription,
        smart_assistant_id: this.consultingPatient.smart_assistant_id._id,
        registration: this.consultingPatient,
        prescription_id: this.day.toString() + this.numericMonth.toString() + this.year.toString() + "-" + prec_id,
        refer_status: this.refer_status,
        referDetail: this.referDetail
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

getTestReportClass(){
    if(this.consultingPatient.reportPics && this.consultingPatient.reportPics.length>0){
        return 'badge green'
    }
}

getHistoryClass(){
    if(this.consultingPatient.lastVisit.status == true){
        return 'badge green'
    }
}

openTestReports(){
    if(this.consultingPatient.reportPics && this.consultingPatient.reportPics.length>0){
        $("#Test-report-Modal").modal("show");
    }
}

openHistoryModal(){
    console.log(this.consultingPatient)
    if(this.consultingPatient){
        if(this.consultingPatient.lastVisit){
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
    }
}

importFromHistory(){
    this.preConditionComplete = this.preConditionComplete_history 
    this.finalPreConditions = this.finalPreConditions_history
    this.allergyComplete = this.allergyComplete_history
    this.finalAllergy = this.finalAllergy_history
    this.symptomsComplete = this.symptomsComplete_history
    this.symptomsSelected = this.symptomsSelected_history
    this.diagnosisComplete = this.diagnosisComplete_history
    this.diagnosisSelected = this.diagnosisSelected_history
    this.medicationComplete = this.medicationComplete_history
    this.tempMedicationArray = this.tempMedicationArray_history
    this.instructionsComplete = this.instructionsComplete_history
    this.instructionsSelected = this.instructionsSelected_history
    this.treatmentComplete = this.treatmentComplete_history
    this.treatmentArray = this.treatmentArray_history
    $("#historyModal").modal("hide");
}

getDay(n){
    if(n<10){
        return "0"+n
    }else{
        return n
    }
}

SaveUniqueMedicinesForAnalytics(type,data){
    var array = []
    var object
    object = {}
    if(type=='Symptoms' || type=='Diagnosis'){
        for (var i = 0; i < data.length; i++) {
            array.push(data[i].value)
        }
        object.array = array
    }else if(type == 'Surgery'){
        object.surgery = true
        for (var i = 0; i < data.length; i++) {
            array.push({
                type: data[i].name,
                value: data[i].div[0].procedure_name[0].value
            })
        }       
        object.array = array
    }else{
        object.medication = true
        object.data = data            
    }
    object.type = type
    object.doctor_id = this.doctorData._id
    console.log(object)
    this.userService.SaveUniqueMedicinesForAnalytics(object).subscribe(data => {
        console.log(data)
    }, err => {
        console.log(err);
    })
}

SaveUniqueMedicinesForAnalyticsInvestigation(type,data){
    var array = []
    var object
    object = {}
    object.type = type
    object.data = data
    object.doctor_id = this.doctorData._id
    object.investigation = true
    console.log(object)
    this.userService.SaveUniqueMedicinesForAnalyticsInvestigation(object).subscribe(data => {
        console.log(data)
    }, err => {
        console.log(err);
    })
}

}