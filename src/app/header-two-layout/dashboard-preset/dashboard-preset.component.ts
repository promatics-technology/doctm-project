import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';
declare var $ 
declare var totalOpenedModal
import { ConfirmationDialogUpdateComponent } from '../../confirmation-popup/confirmation-dialog-update/confirmation-dialog-update.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-dashboard-preset',
    templateUrl: './dashboard-preset.component.html',
    styleUrls: ['./dashboard-preset.component.css'],
    providers: [UserService]
})

export class DashboardPresetComponent implements OnInit {
    doctorData
    headingName: string
    condition = 'abc'
    medicatab
    treatab = 0
    investigationtab = 0
    surgeyproctab = 0
    othertabs: boolean
    medicationpreset: boolean
    currentObject
    tempFrequency
    tempFrequencySpecial
    tempDuration
    tempDosage
    currentFrequency
    tempInjection
    tempQuantity

    //medication
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
    totalMedications
    medicationSavedArray
    medication
    totalMedicationPresetSelected
    doctorPresetArray
    findingPreSetVals
    symptomsPresetArray
    diagnosisPresetArray
    presetArrayInstruction
    presetArraySurgery
    presetArrayOtherTreatment
    presetArrayInvestigation
    savedPrescriptionPadArray
    medicationPresetShow
    tempMedicationArray
    //medication   

    investigationStatus
    //Other Treatment
    treatmentStatus
    tempTreatObject
    tempTreatObjectIndex
    tempTreatFrequency
    tempTreatSpecialInstruction
    tempTreatDuration
    totalOtherTreatment
    tempPlasterDivIndex
    plaster_open_by_main
    otherTreatmentPresetShow
    otherInj
    tempInjury
    //Other Treatment
    itemsymptoms = []
    symptomsSelected
    itemsfinding = []
    findingsSelected
    itemsdiagnosis = []
    diagnosisSelected
    //investigation
    investigationArray
    numberOfInvestigationSelected : number 
    investigationPresetShow
    //investigation
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
    doctorSymptomsDB
    doctorDiagnosisDB
    doctorClinicalObservation
    boneSuggestionDB
    eyeSuggestionDB
    otherSuggestionDB
    medInfoDB
    instructionsSavedDB
    lungSuggestionDB
    //Surgery
    totalSurgeryOptionsSelected: number
    suregeryOptions
    suregeryOptionsTop
    surgerySelectedArray
    //Surgery
    //Instruction
    inputBox
    //Instruction
    preset_name
    medInfoObject
    save_true
    quantity_range
    quantity_drops = 'Select'

    investigationSelection = []
    investigationSelectionDB
    surgerySelection = []
    surgerySelectionDB
    treatmentSelection = []
    treatmentSelectionDB

    presetType
    presetArray
    presetInstructions = [
        {id:1, name:'Avoid oily and spicy food'},
        {id:2, name:'Limit salt Intake'},
        {id:3, name:'Stop Smoking'},
        {id:4, name:'Limit your intake of alcohol'},
        {id:5, name:'include protein in your meal'},
        {id:6, name:'Avoid heavy and fried foods'},
        {id:7, name:'Drink plenty of water'},
        {id:8, name:'Take complete bed rest'},
        {id:9, name:'Eat variety of fruits and vegetables every day'},
        {id:10, name:'Take fluid diet'},
        {id:11, name:'Avoid driving after taking prescribed medicines'},
        {id:12, name:'Avoid crowded places'},
        {id:13, name:'Consult doctor if the fever does not subside'},
        {id:14, name:'Avoid direct sunlight'},
        {id:15, name:'Avoid outside Junk foods'},
        {id:16, name:'No dietary restrictions'},
        {id:17, name:'Stop tobacco intake'},
        {id:18, name:'Do daily exercise'},
        {id:19, name:'Drink lots of fluids to prevent dehydration'},
        {id:20, name:'Avoid travelling'},
    ]
    constructor(private toastr: ToastrService, private userService: UserService,
        private router: Router, public dialog: MatDialog) {}

    ngOnInit() {
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        this.preset_name = null
        this.save_true = true
        //medication
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

        // this.medicatab = 0
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

        this.totalMedications = -1

        this.medicationSavedArray = []
        // this.medicationStatus[0].status = true

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

        this.totalMedicationPresetSelected = 0
        this.doctorPresetArray = []
        this.medicationPresetShow = false
        this.tempMedicationArray = []
        //medication
        //Other treatment
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
        this.tempTreatObject = null
        this.tempTreatObjectIndex = null
        this.tempTreatFrequency = null
        this.tempTreatSpecialInstruction = null
        this.tempTreatDuration = null
        this.totalOtherTreatment = 0
        this.tempPlasterDivIndex = null
        this.plaster_open_by_main = true
        this.otherTreatmentPresetShow = false
        //Other treatmenmt

        //investigation
        this.investigationArray = []
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
        this.numberOfInvestigationSelected = 0
        //investigation
        //Surgery
        this.totalSurgeryOptionsSelected = 0
        this.othertabs = true
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
        this.surgerySelectedArray = []
        //Surgery
        //Instruction
        this.inputBox = [{ name: 'Instruction 1', instructionsInput: '', inputInstruction: '' }];
        //Instruction

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

        this.currentObject = {}
        // this.investigationStatus[0].status = true
        // this.treatmentStatus[0].status = true

        if (this.condition == "abc") {
            this.headingName = 'Create new';
        }
        this.medInfoObject = {}
        this.medInfoObject.medication_type = 'abc'
        this.medInfoObject.med_name = null
        this.medInfoObject.med_info1 = null
        this.medInfoObject.med_info2 = null

        this.quantity_range = []
        var value: number = 1
        while (value < 21) {
            this.quantity_range.push(value)
            value++;
        }

        this.itemsymptoms = []
        this.itemsfinding = []
        this.itemsdiagnosis = []
        this.investigationSelectionDB = [
            'Pathology',
            'X-Ray',
            'Ultrasound',
            'Doppler Studies',
            'ECG',
            'EEG',
            'TMT',
            'Echo',
            'CT-Scan',
            'MRI',
            'Nerve Test',
            'Uroflowmetry',
            'Audiometry',
            'Mammography',
            'Bone Densitometry',
            'Eye Tests',
            'Lung Test',
            'Others'
        ]
        this.surgerySelectionDB = [
            'Cardiology',
            'Dental',
            'ENT',
            'Gastroenterology',
            'General Surgery',
            'Gynaecology/Obstetrics',
            'Neonatal',
            'Neurology',
            'Oncology',
            'Ophthalmology',
            'Orthopaedics',
            'Paediatric',
            'Urology',
            'Vascular'
        ]
        this.treatmentSelectionDB = [
            'Lifestyle Changes',
            'Physiotherapy',
            'Plaster',
            'Fomentation',
            'Gargle',
            'Dressing',
            'Bandage',
            'Other'
        ]
        this.investigationSelection = []
        this.surgerySelection = []
        this.treatmentSelection = []
        this.AllPrescriptionData()
    }

    openModal(type, data) {
        if (type == 'tablet') {
            $('#frequencyModal').modal('show');
            this.currentObject = data;
        }
        if (type == 'duration') {
            $("#durationModal").modal('show');
            this.currentObject.data;
        }
        if (type == 'dosage') {
            $("#dosageModal").modal('show');
            this.currentObject.data;
        }
    }
    setMedicine(event: any, data) {
        data.medicine_data.medicine = event.target.value;
        console.log(data);
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

    selectChange() {
        if (this.condition == "abc") {
            this.headingName = 'Create new';
        } else if (this.condition == "medication") {
            this.headingName = ' Medication';
        } else if (this.condition == "treatment") {
            this.headingName = ' Other Treatment';
        } else if (this.condition == "symptoms") {
            this.headingName = ' Symptoms';
        } else if (this.condition == "findings") {
            this.headingName = ' Clinical findings';
        } else if (this.condition == "diagnosis") {
            this.headingName = ' Diagnosis';
        } else if (this.condition == "investigation") {
            this.headingName = ' Investigation';
        } else if (this.condition == "surgery") {
            this.headingName = ' Surgery / Procedure';
        } else if (this.condition == "instructions") {
            this.headingName = ' Instructions';
        } else if (this.condition == "med_info") {
            this.headingName = 'Medicine Info';
        } 
        else if (this.condition == "prescription") {
            this.headingName = 'Prescription';
        }
    }

    treatTab(i) {
        if (this.treatmentStatus[i].status == false) {
            if (this.totalOtherTreatment < 4) {
                this.treatab = i
                this.treatmentStatus[i].status = !this.treatmentStatus[i].status
                // if (i != 7) {
                this.totalOtherTreatment = this.totalOtherTreatment + 1
                this.treatmentSelection.push({
                    display:this.treatmentStatus[i].name,
                    value:this.treatmentStatus[i].name
                })
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
            this.treatmentSelection.splice(this.treatmentSelection.findIndex(p => p.value == this.treatmentStatus[i].name),1)
            if (this.treatmentStatus[7].treat != null && this.treatmentStatus[7].treat.length > 0) {
                length = this.treatmentStatus[7].treat.length
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
            } else {
                this.totalOtherTreatment = this.totalOtherTreatment - 1
            }
            if(this.treatmentSelection && this.treatmentSelection.length>0){
                for (var k = 0; k < this.treatmentSelection.length; k++) {
                    if(this.treatmentSelection[k].value==this.treatmentStatus[i].name){
                        this.treatmentSelection.splice(k,1)
                        break;
                    }
                }                
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

     openTreatFrequencyModal(data, i) {
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

    removePlasterDiv(i) {
        if (this.treatmentStatus[2].div.length > 1) {
            this.treatmentStatus[2].div.splice(i, 1);
            this.totalOtherTreatment = this.totalOtherTreatment - 1
        } else {
            this.treatmentStatus[2].status = false
            if(this.treatmentSelection && this.treatmentSelection.length>0){
                for (var k = 0; k < this.treatmentSelection.length; k++) {
                    if(this.treatmentSelection[k].value=='Plaster'){
                        this.treatmentSelection.splice(k,1)
                        break;
                    }
                }                
            }
        }
    }

    getClassInjuryModal(data) {
        if (data == this.tempInjury) {
            return 'active-cel'
        } else {
            return ''
        }
    }

    selectFromTreatDuration(data) {
        this.tempTreatDuration = data
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

    onAddOtherInj(data) {
        this.tempInjury = data[0].value
        // this.treatmentStatus[2].div[this.tempPlasterDivIndex].Injury_Area = data[0].value    
    }

    getSpecialInstructionModalClass(data) {
        if (data == this.tempTreatSpecialInstruction) {
            return 'active-cel'
        } else {
            return ''
        }
    }

    tempSaveFrequency() {
        if (this.tempTreatFrequency != null) {
            this.tempTreatObject[this.tempTreatObjectIndex].Frequency = this.tempTreatFrequency
        }
        if (this.tempTreatSpecialInstruction != null) {
            this.tempTreatObject[this.tempTreatObjectIndex].SpecialInstruction = this.tempTreatSpecialInstruction
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

    getDurationModalClass(data) {
        if (data == this.tempTreatDuration) {
            return 'active-cel'
        } else {
            return ''
        }
    }

    setInjuryValue(data) {
        if (this.otherInj == null || this.otherInj == '' || this.otherInj.length < 1) {
            this.tempInjury = data
        }
    }

    // invesTab(i) {
    //     if (this.investigationStatus[i].status == false) {
    //         if (this.numberOfInvestigationSelected < 4) {
    //             this.investigationtab = i
    //             this.investigationStatus[i].status = !this.investigationStatus[i].status
    //             this.numberOfInvestigationSelected = this.numberOfInvestigationSelected + 1
    //             let ob = {
    //                 display:this.investigationStatus[i].name,
    //                 value:this.investigationStatus[i].name
    //             }
    //             this.investigationSelection.push(ob)
    //         } else {
    //             this.investigationtab = i
    //         }
    //     } else {
    //         this.investigationtab = i
    //         this.investigationStatus[i].status = !this.investigationStatus[i].status
    //         this.investigationStatus[i].model = ''
    //         this.numberOfInvestigationSelected = this.numberOfInvestigationSelected - 1
    //         this.investigationSelection.splice(this.investigationSelection.findIndex(p => p.value == this.investigationStatus[i].name),1)
    //     }
    //     if(this.numberOfInvestigationSelected==0){
    //         for (var j = 0; j < this.presetArrayInvestigation.length; j++) {
    //             this.presetArrayInvestigation[j].status = false
    //         }
    //     }
    // }

    invesTab(i) {
        if (this.investigationStatus[i].status == false) {
            if (this.numberOfInvestigationSelected < 4) {
                this.investigationtab = i
                this.investigationStatus[i].status = !this.investigationStatus[i].status
                this.numberOfInvestigationSelected = this.numberOfInvestigationSelected + 1
                let ob = {
                    display:this.investigationStatus[i].name,
                    value:this.investigationStatus[i].name
                }
                this.investigationSelection.push(ob)
            } else {
                this.investigationtab = i
            }
        } else {
            this.investigationtab = i
            this.investigationStatus[i].status = !this.investigationStatus[i].status
            this.investigationStatus[i].model = ''
            this.numberOfInvestigationSelected = this.numberOfInvestigationSelected - 1
            this.investigationSelection.splice(this.investigationSelection.findIndex(p => p.value == this.investigationStatus[i].name),1)
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

    invesClass(i) {
        if (this.investigationStatus[i].status == true) {
            return 'active'
        } else {
            return ''
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
    getMedTABQuantityClass(data) {
        if (data == 'Quantity') {
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
        for (var i = 0; i < this.medInfoDB.length; i++) {
            if(this.medInfoDB[i].type==type && this.medInfoDB[i].med_name==data.med_name[0].value){
                data.med_info = []
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

    saveInjection(data) {
        if (this.tempInjection != null && this.tempInjection != '' && this.tempInjection != 'Mode') {
            this.currentFrequency.mode = this.tempInjection
            $("#durationModal").modal("show");
        }
    }

    addTempQuantity(data) {
        this.tempQuantity = data
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
            // this.surgryTabTop(i)
            if(this.surgerySelection && this.surgerySelection.length>0){
                for (var k = 0; k < this.surgerySelection.length; k++) {
                    if(this.surgerySelection[k].value==this.suregeryOptionsTop[i].name){
                        this.surgerySelection.splice(k,1)
                        break;
                    }
                }                
            }
            this.surgeryRemoveFromList(this.suregeryOptionsTop[i].name)   
        }
    }

    surgryTab(i) {
        if (this.totalSurgeryOptionsSelected > 2) {
            this.toastr.warning("Maximum items can be 3", "Warning")
        } else {
            this.suregeryOptions[i].status1 = true
            if (this.suregeryOptionsTop.length < 1) {
                this.suregeryOptions[i].status = true
                this.surgerySelection.push({
                    display:this.suregeryOptions[i].name,
                    value:this.suregeryOptions[i].name
                })
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
        if(this.suregeryOptionsTop[i].status == true){
            this.surgerySelection.push({
                display:this.suregeryOptionsTop[i].name,
                value:this.suregeryOptionsTop[i].name
            })
        }else{
            this.surgerySelection.splice(this.surgerySelection.findIndex(p => p.value == this.suregeryOptionsTop[i].name),1)
        }
    }

    surgeryOptionTopStatusChange(i) {
        this.suregeryOptionsTop[i].status1 = false
        setTimeout(() => { //<<<---    using ()=> syntax
            this.surgerySelection.splice(this.surgerySelection.findIndex(p => p.value == this.suregeryOptionsTop[i].name),1)
            this.suregeryOptionsTop[i].status = false
            this.suregeryOptionsTop[i].div = []
            this.suregeryOptions.push(this.suregeryOptionsTop[i])
            this.suregeryOptionsTop.splice(i, 1)
            this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected - 1
        }, 1000);
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

    setFields(flag) {
        if (flag == 'findings') {
            if (this.itemsfinding.length > 0) {
                this.findingsSelected = this.itemsfinding;
                for (var i = 0; i < this.findingsSelected.length; i++) {
                    if(this.findingsSelected[i].value!=null&&this.findingsSelected[i].value!=''){
                        this.SaveDoctorOtherPreset('Patient Complaints', this.findingsSelected[i].value)                        
                    }
                }
            } else {
                this.toastr.warning("Invalid fields", "Warning")
            }
        } else if (flag == 'symptoms') {
            if (this.itemsymptoms.length > 0) {
                this.symptomsSelected = this.itemsymptoms;
                for (var i = 0; i < this.symptomsSelected.length; i++) {
                    if(this.symptomsSelected[i].value!=null&&this.symptomsSelected[i].value!=''){
                        this.SaveDoctorOtherPreset('Symptoms', this.symptomsSelected[i].value)
                    }
                }
            } else {
                this.toastr.warning("Invalid fields", "Warning")
            }
            this.symptomsSelected = this.itemsymptoms;
        } else if (flag == 'diagnosis') {
            if (this.itemsdiagnosis.length > 0) {
                this.diagnosisSelected = this.itemsdiagnosis;
                for (var i = 0; i < this.diagnosisSelected.length; i++) {
                    if(this.diagnosisSelected[i].value!=null&&this.diagnosisSelected[i].value!=''){
                        this.SaveDoctorOtherPreset('Diagnosis', this.diagnosisSelected[i].value)
                    }
                }
            } else {
                this.toastr.warning("Invalid fields", "Warning")
            }
        } else if (flag == 'instructions') {
            console.log(this.inputBox)
            var boolean = false
            for (var i = 0; i < this.inputBox.length; i++) {
                if (this.inputBox[i].inputInstruction && this.inputBox[i].inputInstruction.length > 0) {
                    this.inputBox[i].instructionsInput = this.inputBox[i].inputInstruction[0].value
                }
                if (this.inputBox[i].instructionsInput == '' || this.inputBox[i].instructionsInput == null) {
                    boolean = true
                    this.toastr.warning("Instruction cant be empty", "Warning")
                    return
                }
            }
            if (boolean == false) {
                if (this.inputBox.length <= 3) {
                    for (var i = 0; i < this.inputBox.length; i++) {
                        this.SaveDoctorPresetArray(this.preset_name.trim(), this.inputBox, 'Instructions')
                    }
                }
            }
        } else if (flag == 'investigation') {
            this.investigationArray = []
            for (var i = 0; i < this.investigationStatus.length; i++) {
                if (this.investigationStatus[i].status == true && this.investigationStatus[i].model != '' && this.investigationStatus[i].model != null) {
                    this.investigationArray.push({
                        name: this.investigationStatus[i].name,
                        values: this.investigationStatus[i].model
                    })
                } else if (this.investigationStatus[i].name == 'Uroflowmetry' && this.investigationStatus[i].status == true) {
                    this.investigationArray.push({
                        name: 'Uroflowmetry',
                        values: 'Uroflowmetry'
                    })
                }
            }
            if (this.investigationArray.length > 0) {
                this.SaveDoctorPresetArray(this.preset_name.trim(), this.investigationArray, 'Investigation')
            } else {
                this.toastr.warning("Invalid fields", "Warning")
                return
            }
        } else if (flag == 'surgery') { 
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
            var array = []
            for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                if (this.suregeryOptionsTop[i].status == true) {
                    array.push(this.suregeryOptionsTop[i])
                }
            }
            if (array.length > 0) {
                this.SaveDoctorPresetArray(this.preset_name.trim(), array, 'Surgery')
                this.AddDoctorSurgeryArray()
            } else {
                this.toastr.warning("Invalid fields", "Warning")
                return
            }
        } else if (flag == 'medication') {
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
                            this.tempMedicationArray.push(this.medication.tab[i])
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
                            this.tempMedicationArray.push(this.medication.cap[i])
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
                            this.tempMedicationArray.push(this.medication.syp[i])
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
                            this.tempMedicationArray.push(this.medication.susp[i])
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
                            this.tempMedicationArray.push(this.medication.emulsn[i])
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
                            this.tempMedicationArray.push(this.medication.solution[i])
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
                            this.tempMedicationArray.push(this.medication.injection[i])
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
                            this.tempMedicationArray.push(this.medication.mouthwash[i])
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
                            this.tempMedicationArray.push(this.medication.powder[i])
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
                            this.tempMedicationArray.push(this.medication.cream[i])
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
                            this.tempMedicationArray.push(this.medication.gel[i])
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
                            this.tempMedicationArray.push(this.medication.drops[i])
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
                            this.tempMedicationArray.push(this.medication.aerosols[i])
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
                            this.tempMedicationArray.push(this.medication.lotion[i])
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
                            this.tempMedicationArray.push(this.medication.ointment[i])
                        }
                    }
                }
                if (boolean == false && this.tempMedicationArray.length>0) {
                    var object = {
                        preset_name: this.preset_name.trim(),
                        preset_array: this.tempMedicationArray,
                        doctor_id: this.doctorData.itemId
                    }
                    console.log(object)
                    this.userService.SaveDoctorPreset(object).subscribe(data => {
                        console.log(data)
                        if (data.response == true) {
                            this.toastr.success("Preset saved successfully", "Success")
                            if (this.save_true == true) {
                                this.router.navigate(['header-two-layout/dashboard-prescription'])
                            } else {
                                this.ngOnInit()
                            }
                        } else {
                            if (data.message == "Data already exists") {
                                let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});

                                dialogRef.afterClosed().subscribe(result => {
                                    console.log('The dialog was closed');
                                    if (result == "yes") {
                                        var object = {
                                            preset_name: this.preset_name.trim(),
                                            preset_array: this.tempMedicationArray,
                                            doctor_id: this.doctorData.itemId,
                                            update_status: true
                                        }
                                        console.log(object)
                                        this.userService.SaveDoctorPreset(object).subscribe(data => {
                                            this.toastr.success(data.message, "Success")
                                            if (this.save_true == true) {
                                                this.router.navigate(['header-two-layout/dashboard-prescription'])
                                            } else {
                                                this.ngOnInit()
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
                }
            }
        } else if (flag == 'treatment') {
            if (this.totalOtherTreatment > 0) {
                var boolean = false
                for (var i = 0; i < this.treatmentStatus.length; i++) {
                    if (this.treatmentStatus[i].status == true) {
                        if (i == 0) {
                            if (this.treatmentStatus[0].lifestyle == null || this.treatmentStatus[0].lifestyle.length < 1) {
                                boolean = true
                                this.toastr.warning("Invalid values in Lifestyle Changes", "Warning")
                                return
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
                            }
                        }
                        if (i == 5) {
                            if (this.treatmentStatus[5].Frequency == 'Frequency' || this.treatmentStatus[5].Duration == 'Duration' || this.treatmentStatus[5].med_name == null || this.treatmentStatus[5].med_name.length < 1) {
                                boolean = true
                                this.toastr.warning("Invalid values in Dressing", "Warning")
                                return
                            }
                        }
                        if (i == 6) {
                            if (this.treatmentStatus[6].Frequency == 'Frequency' || this.treatmentStatus[6].Duration == 'Duration' || this.treatmentStatus[6].med_name == null || this.treatmentStatus[6].med_name.length < 1) {
                                boolean = true
                                this.toastr.warning("Invalid values in Bandage", "Warning")
                                return
                            }
                        }
                        if (i == 7) {
                            for (var ii = 0; ii < this.treatmentStatus[7].div.length; ii++) {
                                if (this.treatmentStatus[7].div[ii].Frequency == 'Frequency' || this.treatmentStatus[7].div[ii].Duration == 'Duration' || this.treatmentStatus[7].div[ii].med_name == null || this.treatmentStatus[7].div[ii].med_name.length < 1) {
                                    boolean = true
                                    this.toastr.warning("Invalid values in Other", "Warning")
                                    return
                                }
                            }
                        }
                    }
                }
                if (boolean == false) {
                    var presetArray = []
                    for (var i = 0; i < this.treatmentStatus.length; i++) {
                        if (this.treatmentStatus[i].status == true) {
                            presetArray.push(this.treatmentStatus[i])
                        }
                    }
                    this.SaveDoctorPresetArray(this.preset_name.trim(), presetArray, 'Other Treatments')
                }
            }
        // } else if (flag == 'med_info') {
        //     if (this.medInfoObject.medication_type != 'abc' && this.medInfoObject.med_info != null) {
        //         let object = {
        //             doctor_id: this.doctorData.itemId,
        //             type: this.medInfoObject.medication_type,
        //             observation: this.medInfoObject.med_info[0].value
        //         }
        //         this.userService.SaveMedicationSuggestion(object).subscribe(data => {
        //             console.log(data)
        //             if (data.response == true) {
        //                 this.toastr.success("Preset saved successfully", "Success")
        //                 if (this.save_true == true) {
        //                     this.router.navigate(['header-two-layout/dashboard-prescription'])
        //                 } else {
        //                     this.ngOnInit()
        //                 }
        //             } else {
        //                 this.toastr.error(data.message, "Error")
        //                 if (data.message == "Data already exists") {
        //                     let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});

        //                     dialogRef.afterClosed().subscribe(result => {
        //                         console.log('The dialog was closed');
        //                         if (result == "yes") {
        //                             let object = {
        //                                 doctor_id: this.doctorData.itemId,
        //                                 type: this.medInfoObject.medication_type,
        //                                 observation: this.medInfoObject.med_info[0].value,
        //                                 update_status: true
        //                             }
        //                             this.userService.SaveMedicationSuggestion(object).subscribe(data => {
        //                                 this.toastr.success(data.message, "Success")
        //                                 if (this.save_true == true) {
        //                                     this.router.navigate(['header-two-layout/dashboard-prescription'])
        //                                 } else {
        //                                     this.ngOnInit()
        //                                 }
        //                             }, err => {
        //                                 console.log(err);
        //                             })
        //                         } else {
        //                             console.log("error or No Thanks button clicked")
        //                         }
        //                     });
        //                 }
        //             }
        //         }, err => {
        //             console.log(err);
        //         })
        //     } else {
        //         this.toastr.warning("Invalid fields", "Warning")
        //         return
        //     }
        } else if (flag == 'med_info') {
            if (this.medInfoObject.medication_type != 'abc' && this.medInfoObject.med_name != null && //this.medInfoObject.med_info1 != null &&
                this.medInfoObject.med_name.length>0){//&& this.medInfoObject.med_info1.length>0){
                // if((this.medInfoObject.med_info1[0].value.length>30) || (this.medInfoObject.med_info2!=null && this.medInfoObject.med_info2.length>0 && this.medInfoObject.med_info2[0].value.length>30)){
                //     this.toastr.warning("Maximum length can be 30 characters","Warning")
                // }else{
                    let object 
                    object = {}
                        object.doctor_id = this.doctorData.itemId
                        object.type = this.medInfoObject.medication_type
                        object.med_name = this.medInfoObject.med_name[0].value
                        // object.med_info1 = this.medInfoObject.med_info1[0].value
                        object.med_info1 = this.medInfoObject.med_info1
                    if(this.medInfoObject.med_info2!=null && this.medInfoObject.med_info2.length>0){
                        // object.med_info2 = this.medInfoObject.med_info2[0].value
                        object.med_info2 = this.medInfoObject.med_info2
                    }
                    this.userService.SaveDoctorMedicineInfo(object).subscribe(data => {
                        console.log(data)
                        if (data.response == true) {
                            this.toastr.success("Preset saved successfully", "Success")
                            if (this.save_true == true) {
                                this.router.navigate(['header-two-layout/dashboard-prescription'])
                            } else {
                                this.ngOnInit()
                            }
                        } else {
                            this.toastr.error(data.message, "Error")
                            // if (data.message == "Data already exists") {
                            //     let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});

                            //     dialogRef.afterClosed().subscribe(result => {
                            //         console.log('The dialog was closed');
                            //         if (result == "yes") {
                            //             let object = {
                            //                 doctor_id: this.doctorData.itemId,
                            //                 type: this.medInfoObject.medication_type,
                            //                 observation: this.medInfoObject.med_info[0].value,
                            //                 update_status: true
                            //             }
                            //             this.userService.SaveMedicationSuggestion(object).subscribe(data => {
                            //                 this.toastr.success(data.message, "Success")
                            //                 if (this.save_true == true) {
                            //                     this.router.navigate(['header-two-layout/dashboard-prescription'])
                            //                 } else {
                            //                     this.ngOnInit()
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
                // }                    
            } else {
                this.toastr.warning("Invalid fields", "Warning")
                return
            }
        } else if (flag == 'prescription') {
            var objectArray = []
            // if (this.itemsfinding.length > 0) {
            //     let object = {
            //         name: 'Patient Complaints',
            //         itemsfinding: this.itemsfinding
            //     }
            //     objectArray.push(object)
            // }
            if (this.itemsymptoms.length > 0) {
                let object = {
                    name: 'Symptoms',
                    itemsymptoms: this.itemsymptoms
                }
                objectArray.push(object)
            }
            if (this.itemsdiagnosis.length > 0) {
                let object = {
                    name: 'Diagnosis',
                    itemsdiagnosis: this.itemsdiagnosis
                }
                objectArray.push(object)
            }
            var boolean = false
            for (var i = 0; i < this.treatmentStatus.length; i++) {
                if (this.treatmentStatus[i].status == true) {
                    if (i == 0) {
                        if (this.treatmentStatus[0].lifestyle == null || this.treatmentStatus[0].lifestyle.length < 1) {
                            boolean = true
                            this.toastr.warning("Invalid values in Lifestyle Changes", "Warning")
                            return
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
                        }
                    }
                    if (i == 5) {
                        if (this.treatmentStatus[5].Frequency == 'Frequency' || this.treatmentStatus[5].Duration == 'Duration' || this.treatmentStatus[5].med_name == null || this.treatmentStatus[5].med_name.length < 1) {
                            boolean = true
                            this.toastr.warning("Invalid values in Dressing", "Warning")
                            return
                        }
                    }
                    if (i == 6) {
                        if (this.treatmentStatus[6].Frequency == 'Frequency' || this.treatmentStatus[6].Duration == 'Duration' || this.treatmentStatus[6].med_name == null || this.treatmentStatus[6].med_name.length < 1) {
                            boolean = true
                            this.toastr.warning("Invalid values in Bandage", "Warning")
                            return
                        }
                    }
                    if (i == 7) {
                        for (var ii = 0; ii < this.treatmentStatus[7].div.length; ii++) {
                            if (this.treatmentStatus[7].div[ii].Frequency == 'Frequency' || this.treatmentStatus[7].div[ii].Duration == 'Duration' || this.treatmentStatus[7].div[ii].med_name == null || this.treatmentStatus[7].div[ii].med_name.length < 1) {
                                boolean = true
                                this.toastr.warning("Invalid values in Other", "Warning")
                                return
                            }
                        }
                    }
                }
            }
            if (boolean == false) {
                var presetArray = []
                for (var i = 0; i < this.treatmentStatus.length; i++) {
                    if (this.treatmentStatus[i].status == true) {
                        presetArray.push(this.treatmentStatus[i])
                    }
                }
                if (presetArray.length > 0) {
                    let object = {
                        name: 'Other Treatment',
                        treatmentStatus: this.treatmentStatus
                    }
                    objectArray.push(object)
                }
            }
            this.investigationArray = []
            for (var i = 0; i < this.investigationStatus.length; i++) {
                if (this.investigationStatus[i].status == true && this.investigationStatus[i].model != '' && this.investigationStatus[i].model != null) {
                    this.investigationArray.push({
                        name: this.investigationStatus[i].name,
                        values: this.investigationStatus[i].model
                    })
                } else if (this.investigationStatus[i].name == 'Uroflowmetry' && this.investigationStatus[i].status == true) {
                    this.investigationArray.push({
                        name: 'Uroflowmetry',
                        values: 'Uroflowmetry'
                    })
                }
            }
            if (this.investigationArray.length > 0) {
                let object = {
                    name: 'Investigation',
                    investigationStatus: this.investigationStatus,
                    investigationArray: this.investigationArray
                }
                objectArray.push(object)
            }
            var surgeryArray = []
            for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                for (var j = 0; j < this.suregeryOptionsTop[i].div.length; j++) {
                    if (this.suregeryOptionsTop[i].status == true) {
                        if (this.suregeryOptionsTop[i].div[j].sub_speciality.trim().length > 0 &&
                            this.suregeryOptionsTop[i].div[j].procedure_name.length > 0) {
                            surgeryArray.push(this.suregeryOptionsTop[i])
                        } else {
                            this.toastr.warning("Sub speciality or procedure name invalid", "Warning")
                            return;
                        }
                    }
                }
            }
            if (surgeryArray.length > 0) {
                let objectt = {
                    name: 'Surgery / Procedure',
                    suregeryOptionsTop: this.suregeryOptionsTop,
                    suregeryOptions: this.suregeryOptions
                }
                objectArray.push(objectt)
            }
            if (this.inputBox[0].inputInstruction && this.inputBox[0].inputInstruction.length > 0) {
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
                    let object = {
                        name: 'Instructions',
                        inputBox: this.inputBox
                    }
                    objectArray.push(object)
                }
            }
            this.tempMedicationArray = []
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
                        this.tempMedicationArray.push(this.medication.tab[i])
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
                        this.tempMedicationArray.push(this.medication.cap[i])
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
                        this.tempMedicationArray.push(this.medication.syp[i])
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
                        this.tempMedicationArray.push(this.medication.susp[i])
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
                        this.tempMedicationArray.push(this.medication.emulsn[i])
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
                        this.tempMedicationArray.push(this.medication.solution[i])
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
                        this.tempMedicationArray.push(this.medication.injection[i])
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
                        this.tempMedicationArray.push(this.medication.mouthwash[i])
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
                        this.tempMedicationArray.push(this.medication.powder[i])
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
                        this.tempMedicationArray.push(this.medication.cream[i])
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
                        this.tempMedicationArray.push(this.medication.gel[i])
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
                        this.tempMedicationArray.push(this.medication.drops[i])
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
                        this.tempMedicationArray.push(this.medication.aerosols[i])
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
                        this.tempMedicationArray.push(this.medication.lotion[i])
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
                        this.tempMedicationArray.push(this.medication.ointment[i])
                    }
                }
            }
            if (boolean == false && this.tempMedicationArray.length>0) {
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

            console.log(objectArray)
            if (objectArray.length > 0) {
                var dataToSave = {
                    doctor_id: this.doctorData.itemId,
                    name: this.preset_name.trim(),
                    value: objectArray,
                }
                console.log(dataToSave)
                this.userService.SavePrescriptionPad(dataToSave).subscribe(data => {
                    console.log(data)
                    if (data.response == true) {
                        this.toastr.success(data.message, "Success")
                        if (this.save_true == true) {
                            this.router.navigate(['header-two-layout/dashboard-prescription'])
                        } else {
                            this.ngOnInit()
                        }
                    }
                    else {
                        if (data.message == "Data already exists") {
                            let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});
                            dialogRef.afterClosed().subscribe(result => {
                                console.log('The dialog was closed');
                                if (result == "yes") {
                                    let object = {
                                        doctor_id: this.doctorData.itemId,
                                        name: this.preset_name.trim(),
                                        value: objectArray,
                                        update_status: true
                                    }
                                    console.log(object)
                                    this.userService.SavePrescriptionPad(object).subscribe(data => {
                                        this.toastr.success(data.message, "Success")
                                        if (this.save_true == true) {
                                            this.router.navigate(['header-two-layout/dashboard-prescription'])
                                        } else {
                                            this.ngOnInit()
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
            }
        }
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
                this.toastr.success("Preset saved successfully", "Success")
                if (this.save_true == true) {
                    this.router.navigate(['header-two-layout/dashboard-prescription'])
                } else {
                    this.ngOnInit()
                }
            } else {
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
                                if (this.save_true == true) {
                                    this.router.navigate(['header-two-layout/dashboard-prescription'])
                                } else {
                                    this.ngOnInit()
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
    }

    SaveDoctorOtherPreset(type, preset) {
        let object = {
            doctor_id: this.doctorData.itemId,
            type: type,
            preset: preset
        }
        console.log(object)
        this.userService.SaveDoctorOtherPreset(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.toastr.success("Preset saved successfully", "Success")
                if (this.save_true == true) {
                    this.router.navigate(['header-two-layout/dashboard-prescription'])
                } else {
                    this.ngOnInit()
                }
            } else {
                if (data.message == "Data already exists") {
                    let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});

                    dialogRef.afterClosed().subscribe(result => {
                        console.log('The dialog was closed');
                        if (result == "yes") {
                            let object = {
                                doctor_id: this.doctorData.itemId,
                                type: type,
                                preset: preset,
                                update_status: true
                            }
                            console.log(object)
                            this.userService.SaveDoctorOtherPreset(object).subscribe(data => {
                                this.toastr.success(data.message, "Success")
                                if (this.save_true == true) {
                                    this.router.navigate(['header-two-layout/dashboard-prescription'])
                                } else {
                                    this.ngOnInit()
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
    }

    savePreset(condition) {
        if (condition != "abc") {
            if (condition == 'prescription') {
                if (this.preset_name != undefined && this.preset_name != '' && this.preset_name != null) {
                    if (this.preset_name.trim().length < 1) {
                        this.toastr.warning("Invalid preset name", "Warning")
                        return;
                    } else {
                        this.setFields('prescription')
                    }
                } else {
                    this.toastr.warning("Invalid preset name", "Warning")
                    return;
                }
            } else {
                if (condition != 'symptoms' && condition != 'findings' && condition != 'diagnosis' && condition != 'med_info') {
                    if (this.preset_name != undefined && this.preset_name != '' && this.preset_name != null) {
                        if (this.preset_name.trim().length < 1) {
                            this.toastr.warning("Invalid preset name", "Warning")
                            return;
                        } else {
                            this.setFields(condition)
                        }
                    } else {
                        this.toastr.warning("Invalid preset name", "Warning")
                        return;
                    }
                } else {
                    this.setFields(condition)
                }
            }
        }
    }

    createMoreClicked(condition) {
        this.save_true = false
        if (condition != "abc") {
            if (condition != 'symptoms' && condition != 'findings' && condition != 'diagnosis' && condition != 'med_info') {
                if (this.preset_name != undefined && this.preset_name != '' && this.preset_name != null) {
                    if (this.preset_name.trim().length < 1) {
                        this.toastr.warning("Invalid preset name", "Warning")
                        return;
                    } else {
                        this.setFields(condition)
                    }
                } else {
                    this.toastr.warning("Invalid preset name", "Warning")
                    return;
                }
            } else {
                this.setFields(condition)
            }
        }
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
                // for medicine info 
                else if (type == 'TabletInfo') {
                    this.doctorMedicationTabletInfoDB = []
                    this.doctorMedicationTabletInfoDB = data.data
                } else if (type == 'CapsuleInfo') {
                    this.doctorMedicationCapsuleInfoDB = []
                    this.doctorMedicationCapsuleInfoDB = data.data
                } else if (type == 'SyrupInfo') {
                    this.doctorMedicationSyrupInfoDB = []
                    this.doctorMedicationSyrupInfoDB = data.data
                } else if (type == 'SuspensionInfo') {
                    this.doctorMedicationSuspensionInfoDB = []
                    this.doctorMedicationSuspensionInfoDB = data.data
                } else if (type == 'EmulsionInfo') {
                    this.doctorMedicationEmulsionInfoDB = []
                    this.doctorMedicationEmulsionInfoDB = data.data
                } else if (type == 'SolutionInfo') {
                    this.doctorMedicationSolutionInfoDB = []
                    this.doctorMedicationSolutionInfoDB = data.data
                } else if (type == 'InjectionInfo') {
                    this.doctorMedicationInjectionInfoDB = []
                    this.doctorMedicationInjectionInfoDB = data.data
                } else if (type == 'CreamInfo') {
                    this.doctorMedicationCreamInfoDB = []
                    this.doctorMedicationCreamInfoDB = data.data
                } else if (type == 'OitmentInfo') {
                    this.doctorMedicationOitmentInfoDB = []
                    this.doctorMedicationOitmentInfoDB = data.data
                } else if (type == 'GelInfo') {
                    this.doctorMedicationGelInfoDB = []
                    this.doctorMedicationGelInfoDB = data.data
                } else if (type == 'LotionInfo') {
                    this.doctorMedicationLotionInfoDB = []
                    this.doctorMedicationLotionInfoDB = data.data
                } else if (type == 'DropsInfo') {
                    this.doctorMedicationDropsInfoDB = []
                    this.doctorMedicationDropsInfoDB = data.data
                } else if (type == 'AerosolsInfo') {
                    this.doctorMedicationAerosolsInfoDB = []
                    this.doctorMedicationAerosolsInfoDB = data.data
                } else if (type == 'PowderInfo') {
                    this.doctorMedicationPowderInfoDB = []
                    this.doctorMedicationPowderInfoDB = data.data
                } else if (type == 'MouthWashInfo') {
                    this.doctorMedicationMouthwashInfoDB = []
                    this.doctorMedicationMouthwashInfoDB = data.data
                }
            }
        }, err => {
            console.log(err);
        })
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

    removeOtherDiv(i) {
        if (this.treatmentStatus[7].div.length > 1) {
            this.treatmentStatus[7].div.splice(i, 1);
            this.totalOtherTreatment = this.totalOtherTreatment - 1
        } else {
            this.treatmentStatus[7].status = false
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
            if(this.treatmentSelection && this.treatmentSelection.length>0){
                for (var k = 0; k < this.treatmentSelection.length; k++) {
                    if(this.treatmentSelection[k].value=='Other'){
                        this.treatmentSelection.splice(k,1)
                        break;
                    }
                }                
            }
        }
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
                }
            }
        }, err => {
            console.log(err);
        })
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
            type: 'preset',
            registration : { id:"0" }
        }
        this.userService.AllPrescriptionData(object).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                //GetDoctorSurgeryArray
                // if (data.suregeryOptionsTop != null) {
                //     this.suregeryOptionsTop = data.suregeryOptionsTop
                //     this.suregeryOptions = data.suregeryOptions
                // }
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
                //
                this.instructionsSavedDB = data.instructionsSavedDB
                //
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
            }
        }, err => {
            console.log(err);
        })
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

    onAddMedNameOtherTreat(data, i) {
        // $("#treatfrequencyModal").modal("show");
        $("#combinedModal5").modal("show");
        this.openTreatFrequencyModal(data, i)
    }

    investigationAddFromList(data){
        for (var i = 0; i < this.investigationStatus.length; i++) {
            if(this.investigationStatus[i].name == data){
                if (this.numberOfInvestigationSelected < 4) {
                    this.investigationtab = i
                    this.investigationStatus[i].status = !this.investigationStatus[i].status
                    this.numberOfInvestigationSelected = this.numberOfInvestigationSelected + 1
                } else {
                    this.investigationtab = i
                }
            }
        }
    }

    investigationRemoveFromList(data){
        for (var i = 0; i < this.investigationStatus.length; i++) {
            if(this.investigationStatus[i].name == data){
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
                if(this.numberOfInvestigationSelected==0){
                    for (var j = 0; j < this.presetArrayInvestigation.length; j++) {
                        this.presetArrayInvestigation[j].status = false
                    }
                }
            }
        }
    }

    surgeryAddFromList(data){
        for (var i = 0; i < this.suregeryOptions.length; i++) {
            if(this.suregeryOptions[i].name == data){
                this.suregeryOptions[i].status = true
                this.suregeryOptions[i].status1 = true
                this.suregeryOptions[i].div = []
                this.suregeryOptions[i].div.push({
                    sub_speciality: '',
                    procedure_name: ''
                })
                this.suregeryOptionsTop.push(this.suregeryOptions[i])
                this.suregeryOptions.splice(i,1)
                this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + 1
                return
            }
        }
    }

    surgeryRemoveFromList(data){
        for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
            if(this.suregeryOptionsTop[i].name == data){
                this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected - this.suregeryOptionsTop[i].div.length
                this.suregeryOptions.push(this.suregeryOptionsTop[i])
                this.suregeryOptionsTop.splice(i,1)
                return
            }
        }
    }

    treatmentAddFromList(data){
        for (var i = 0; i < this.treatmentStatus.length; i++) {
            if(this.treatmentStatus[i].name == data){
                this.treatmentStatus[i].status = true
                this.totalOtherTreatment = this.totalOtherTreatment + 1
                return
            }
        }
    }
    
    treatmentRemoveFromList(data){
        var i : number = -1
        for (var ii = 0; ii < this.treatmentStatus.length; ii++) {
            if(this.treatmentStatus[ii].name == data){
                this.treatmentStatus[ii].status = false
                this.totalOtherTreatment = this.totalOtherTreatment - 1
                i = ii
                break;
                // return
            }
        }        
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

    openPresetModal(type){
        this.presetType = type
        if(type=='Medication'){
            this.presetArray = this.doctorPresetArray
        }else if(type=='Symptoms'){
            this.presetArray = this.symptomsPresetArray
        }else if(type=='Diagnosis'){
            this.presetArray = this.diagnosisPresetArray
        }else if(type=='Instructions'){
            this.presetArray = this.presetArrayInstruction
        }else if(type=='Investigation'){
            this.presetArray = this.presetArrayInvestigation
        }else if(type=='Surgery'){
            this.presetArray = this.presetArraySurgery
        }else if(type=='Other Treatments'){
            this.presetArray = this.presetArrayOtherTreatment
        }
        $("#presetModal").modal("show");       
    }

    getMedPresetClass(type, i,data) {
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
        }else if (type == 'Symptoms' || type == 'Diagnosis') {
            if(data.status==true){
                return 'active'
            }else{
                return ''
            }
        }
    }

    showHidePreset(type, i,preset) {
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
                    if(this.totalSurgeryOptionsSelected+this.presetArraySurgery[i].preset_array.length>3){
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
                                if (this.presetArrayOtherTreatment[i].preset_array[j].name == 'Plaster' || this.presetArrayOtherTreatment[i].preset_array[j].name == 'Other') {
                                    if(this.treatmentStatus[k].i_presetValue){
                                        this.presetArrayOtherTreatment[this.treatmentStatus[k].i_presetValue].status = false
                                        if (k == 7 || k == 2) {
                                            this.totalOtherTreatment = this.totalOtherTreatment - this.treatmentStatus[k].div.length
                                        } else {
                                            this.totalOtherTreatment = this.totalOtherTreatment - 1
                                        }
                                    }
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
                    this.treatmentSelection = []
                    for (var j = 0; j < this.treatmentStatus.length; j++) {
                        if (this.treatmentStatus[j].status == true) {
                            this.treatmentSelection.push({
                                display: this.treatmentStatus[j].name,
                                value: this.treatmentStatus[j].name
                            })
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
                this.treatmentSelection = []
                for (var j = 0; j < this.treatmentStatus.length; j++) {
                    if (this.treatmentStatus[j].status == true) {
                        this.treatmentSelection.push(this.treatmentStatus[j].name)
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
                                var indexSelection = this.investigationSelection.findIndex(p => p.value == this.investigationStatus[k].name)
                                if(indexSelection<0){
                                    let ob = {
                                        display:this.presetArrayInvestigation[i].preset_array[j].name,
                                        value:this.presetArrayInvestigation[i].preset_array[j].name
                                    }
                                    this.investigationSelection.push(ob)
                                }
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
                            this.investigationSelection.splice(this.investigationSelection.findIndex(p => p.value == this.presetArrayInvestigation[i].preset_array[j].name),1)
                            // this.investigationRemoveFromList(this.presetArrayInvestigation[i].preset_array[j].name)
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
        } else if (type == 'Symptoms') {
            preset.status = !preset.status
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
        } else if (type == 'Diagnosis') {
            preset.status = !preset.status
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


    closePresetPop(){
        $("#presetModal").modal("hide");              
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


}