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
    medicationPresetShow
    tempMedicationArray
    //medication   

    investigationStatus = [{
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
            name: 'Doppler studies',
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
    numberOfInvestigationSelected
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
    doctorClinicalObservation
    boneSuggestionDB
    eyeSuggestionDB
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
    constructor(private toastr: ToastrService, private userService: UserService,
        private router: Router, public dialog: MatDialog) {}

    ngOnInit() {
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        this.preset_name = null
        this.save_true = true
        //medication
        this.GetMedicationSuggestions('Tablet')
        this.GetMedicationSuggestions('Capsule')
        this.GetMedicationSuggestions('Syrup')
        this.GetMedicationSuggestions('Suspension')
        this.GetMedicationSuggestions('Emulsion')
        this.GetMedicationSuggestions('Solution')
        this.GetMedicationSuggestions('Injection')
        this.GetMedicationSuggestions('Cream')
        this.GetMedicationSuggestions('Oitment')
        this.GetMedicationSuggestions('Gel')
        this.GetMedicationSuggestions('Lotion')
        this.GetMedicationSuggestions('Drops')
        this.GetMedicationSuggestions('Aerosols')
        this.GetMedicationSuggestions('Powder')
        this.GetMedicationSuggestions('MouthWash')

        this.GetMedicationSuggestions('TabletInfo')
        this.GetMedicationSuggestions('CapsuleInfo')
        this.GetMedicationSuggestions('SyrupInfo')
        this.GetMedicationSuggestions('SuspensionInfo')
        this.GetMedicationSuggestions('EmulsionInfo')
        this.GetMedicationSuggestions('SolutionInfo')
        this.GetMedicationSuggestions('InjectionInfo')
        this.GetMedicationSuggestions('CreamInfo')
        this.GetMedicationSuggestions('OitmentInfo')
        this.GetMedicationSuggestions('GelInfo')
        this.GetMedicationSuggestions('LotionInfo')
        this.GetMedicationSuggestions('DropsInfo')
        this.GetMedicationSuggestions('AerosolsInfo')
        this.GetMedicationSuggestions('PowderInfo')
        this.GetMedicationSuggestions('MouthWashInfo')

        this.medicatab = 0
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
        this.treatmentStatus[0].status = true
        this.tempTreatObject = null
        this.tempTreatObjectIndex = null
        this.tempTreatFrequency = null
        this.tempTreatSpecialInstruction = null
        this.tempTreatDuration = null
        this.totalOtherTreatment = 1
        this.tempPlasterDivIndex = null
        this.plaster_open_by_main = true
        this.otherTreatmentPresetShow = false
        //Other treatmenmt

        //investigation
        this.investigationArray = []
        this.numberOfInvestigationSelected = 0
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
        //investigation
        //Surgery
        this.totalSurgeryOptionsSelected = 0
        this.othertabs = false
        this.suregeryOptions = [
            { name: 'Cardiac', status: false, status1: false, div: [], database: [] },
            { name: 'ENT', status: false, status1: false, div: [], database: [] },
            { name: 'Dental', status: false, status1: false, div: [], database: [] },
            { name: 'Genito-Urinary', status: false, status1: false, div: [], database: [] },
            { name: 'Gynaecology/Obstetrics', status: false, status1: false, div: [], database: [] },
            { name: 'Neonatal', status: false, status1: false, div: [], database: [] },
            { name: 'Neurology', status: false, status1: false, div: [], database: [] },
            { name: 'Oncology', status: false, status1: false, div: [], database: [] },
            { name: 'Ophthalmology', status: false, status1: false, div: [], database: [] },
            { name: 'Orthopaedics', status: false, status1: false, div: [], database: [] },
            { name: 'Paediatric', status: false, status1: false, div: [], database: [] },
            { name: 'Vascular', status: false, status1: false, div: [], database: [] }
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

        this.onTextChange('Mammograaphy', '');
        this.onTextChange('Bone densitometry', '')

        this.onTextChange('ECG', '');
        this.onTextChange('EEG', '');
        this.onTextChange('TMT', '');
        this.onTextChange('Echo', '');
        this.onTextChange('NERVE TEST', '');
        this.onTextChange('Audiometry', '');
        this.onTextChange('Lung Test', '');

        this.GetInvestigationSuggestions('Pathology')
        this.GetInvestigationSuggestions('X-Ray')
        this.GetInvestigationSuggestions('Ultrasound')
        this.GetInvestigationSuggestions('Doppler Studies')
        // this.GetInvestigationSuggestions('ECG')
        // this.GetInvestigationSuggestions('EEG')
        // this.GetInvestigationSuggestions('TMT')
        // this.GetInvestigationSuggestions('Echo')
        this.GetInvestigationSuggestions('CT-Scan')
        this.GetInvestigationSuggestions('MRI')
        // this.GetInvestigationSuggestions('Nerve Test')
        // this.GetInvestigationSuggestions('Audiometry')
        this.GetInvestigationSuggestions('Eye Tests')
        // this.GetInvestigationSuggestions('Lung Test')

        this.currentObject = {}
        this.medicationStatus[0].status = true
        this.investigationStatus[0].status = true
        this.treatmentStatus[0].status = true

        if (this.condition == "abc") {
            this.headingName = 'Create new';
        }
        this.medInfoObject = {}
        this.medInfoObject.medication_type = 'abc'
        this.medInfoObject.med_info = null

        this.quantity_range = []
        var value: number = 1
        while (value < 21) {
            this.quantity_range.push(value)
            value++;
        }
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
            if (this.medicationTabArray.length > 1) {
                this.medicationTabArray.splice(0, 1)
                this.medication.tab.splice(i, 1)
            } else {
                this.medicationStatus[0].status = false
            }
        } else if (data == 'Cap') {
            if (this.medicationCapArray.length > 1) {
                this.medicationCapArray.splice(0, 1)
                this.medication.cap.splice(i, 1)
            } else {
                this.medicationStatus[1].status = false
            }
        } else if (data == 'Syp') {
            if (this.medicationSypArray.length > 1) {
                this.medicationSypArray.splice(0, 1)
                this.medication.syp.splice(i, 1)
            } else {
                this.medicationStatus[2].status = false
            }
        } else if (data == 'Susp') {
            if (this.medicationSuspArray.length > 1) {
                this.medicationSuspArray.splice(0, 1)
                this.medication.susp.splice(i, 1)
            } else {
                this.medicationStatus[3].status = false
            }
        } else if (data == 'Emulsn') {
            if (this.medicationEmulsnArray.length > 1) {
                this.medicationEmulsnArray.splice(0, 1)
                this.medication.emulsn.splice(i, 1)
            } else {
                this.medicationStatus[4].status = false
            }
        } else if (data == 'Inj') {
            if (this.medicationInjArray.length > 1) {
                this.medicationInjArray.splice(0, 1)
                this.medication.injection.splice(i, 1)
            } else {
                this.medicationStatus[6].status = false
            }
        } else if (data == 'Cream') {
            if (this.medicationCreamArray.length > 1) {
                this.medicationCreamArray.splice(0, 1)
                this.medication.cream.splice(i, 1)
            } else {
                this.medicationStatus[7].status = false
            }
        } else if (data == 'Gel') {
            if (this.medicationGelArray.length > 1) {
                this.medicationGelArray.splice(0, 1)
                this.medication.gel.splice(i, 1)
            } else {
                this.medicationStatus[8].status = false
            }
        } else if (data == 'Drops') {
            if (this.medicationDropsArray.length > 1) {
                this.medicationDropsArray.splice(0, 1)
                this.medication.drops.splice(i, 1)
            } else {
                this.medicationStatus[9].status = false
            }
        } else if (data == 'Powder') {
            if (this.medicationPowderArray.length > 1) {
                this.medicationPowderArray.splice(0, 1)
                this.medication.powder.splice(i, 1)
            } else {
                this.medicationStatus[11].status = false
            }
        } else if (data == 'Aerosols') {
            if (this.medicationAerosolsArray.length > 1) {
                this.medicationAerosolsArray.splice(0, 1)
                this.medication.aerosols.splice(i, 1)
            } else {
                this.medicationStatus[10].status = false
            }
        } else if (data == 'MouthWash') {
            if (this.medicationMouthWashArray.length > 1) {
                this.medicationMouthWashArray.splice(0, 1)
                this.medication.mouthwash.splice(i, 1)
            } else {
                this.medicationStatus[12].status = false
            }
        } else if (data == 'Solution') {
            if (this.medicationSolutionArray.length > 1) {
                this.medicationSolutionArray.splice(0, 1)
                this.medication.solution.splice(i, 1)
            } else {
                this.medicationStatus[5].status = false
            }
        } else if (data == 'Lotion') {
            if (this.medicationLotionArray.length > 1) {
                this.medicationLotionArray.splice(0, 1)
                this.medication.lotion.splice(i, 1)
            } else {
                this.medicationStatus[13].status = false
            }
        } else if (data == 'Ointment') {
            if (this.medicationOintmentArray.length > 1) {
                this.medicationOintmentArray.splice(0, 1)
                this.medication.ointment.splice(i, 1)
            } else {
                this.medicationStatus[14].status = false
            }
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
                        this.medicationTabArray = ['1']
                        var temp = this.medication.tab[0]
                        this.medication.tab = []
                        this.medication.tab.push(temp)
                    } else if (i == 1) {
                        this.totalMedications = this.totalMedications - this.medicationCapArray.length
                        this.medicationCapArray = ['1']
                        var temp = this.medication.cap[0]
                        this.medication.cap = []
                        this.medication.cap.push(temp)
                    } else if (i == 2) {
                        this.totalMedications = this.totalMedications - this.medicationSypArray.length
                        this.medicationSypArray = ['1']
                        var temp = this.medication.syp[0]
                        this.medication.syp = []
                        this.medication.syp.push(temp)
                    } else if (i == 3) {
                        this.totalMedications = this.totalMedications - this.medicationSuspArray.length
                        this.medicationSuspArray = ['1']
                        var temp = this.medication.susp[0]
                        this.medication.susp = []
                        this.medication.susp.push(temp)
                    } else if (i == 4) {
                        this.totalMedications = this.totalMedications - this.medicationEmulsnArray.length
                        this.medicationEmulsnArray = ['1']
                        var temp = this.medication.emulsn[0]
                        this.medication.emulsn = []
                        this.medication.emulsn.push(temp)
                    } else if (i == 5) {
                        this.totalMedications = this.totalMedications - this.medicationSolutionArray.length
                        this.medicationSolutionArray = ['1']
                        var temp = this.medication.solution[0]
                        this.medication.solution = []
                        this.medication.solution.push(temp)
                    } else if (i == 6) {
                        this.totalMedications = this.totalMedications - this.medicationInjArray.length
                        this.medicationInjArray = ['1']
                        var temp = this.medication.injection[0]
                        this.medication.injection = []
                        this.medication.injection.push(temp)
                    } else if (i == 7) {
                        this.totalMedications = this.totalMedications - this.medicationCreamArray.length
                        this.medicationCreamArray = ['1']
                        var temp = this.medication.cream[0]
                        this.medication.cream = []
                        this.medication.cream.push(temp)
                    } else if (i == 8) {
                        this.totalMedications = this.totalMedications - this.medicationGelArray.length
                        this.medicationGelArray = ['1']
                        var temp = this.medication.gel[0]
                        this.medication.gel = []
                        this.medication.gel.push(temp)
                    } else if (i == 9) {
                        this.totalMedications = this.totalMedications - this.medicationDropsArray.length
                        this.medicationDropsArray = ['1']
                        var temp = this.medication.drops[0]
                        this.medication.drops = []
                        this.medication.drops.push(temp)
                    } else if (i == 11) {
                        this.totalMedications = this.totalMedications - this.medicationPowderArray.length
                        this.medicationPowderArray = ['1']
                        var temp = this.medication.powder[0]
                        this.medication.powder = []
                        this.medication.powder.push(temp)
                    } else if (i == 10) {
                        this.totalMedications = this.totalMedications - this.medicationAerosolsArray.length
                        this.medicationAerosolsArray = ['1']
                        var temp = this.medication.aerosols[0]
                        this.medication.aerosols = []
                        this.medication.aerosols.push(temp)
                    } else if (i == 12) {
                        this.totalMedications = this.totalMedications - this.medicationMouthWashArray.length
                        this.medicationMouthWashArray = ['1']
                        var temp = this.medication.mouthwash[0]
                        this.medication.mouthwash = []
                        this.medication.mouthwash.push(temp)
                    } else if (i == 13) {
                        this.totalMedications = this.totalMedications - this.medicationLotionArray.length
                        this.medicationLotionArray = ['1']
                        var temp = this.medication.lotion[0]
                        this.medication.lotion = []
                        this.medication.lotion.push(temp)
                    } else if (i == 14) {
                        this.totalMedications = this.totalMedications - this.medicationOintmentArray.length
                        this.medicationOintmentArray = ['1']
                        var temp = this.medication.ointment[0]
                        this.medication.ointment = []
                        this.medication.ointment.push(temp)
                    }
                }
            }
        }
        console.log(this.totalMedications)
        // this.scrollService.scrollTo('medicineID');         
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
            this.headingName = 'Medication Info';
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
        this.tempTreatFrequency = null
        this.tempTreatSpecialInstruction = null
        this.tempTreatDuration = null
        if (this.tempTreatObject[this.tempTreatObjectIndex].SpecialInstruction != null) {
            this.tempTreatObject[this.tempTreatObjectIndex].SpecialInstruction = null
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
            this.numberOfInvestigationSelected = this.numberOfInvestigationSelected - 1
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
        // if(this.currentFrequency.specialInstruction == null){
        this.tempFrequencySpecial = null
        // }else {
        //     this.tempFrequencySpecial = this.currentFrequency.specialInstruction
        // }
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
    }

    openFrequencyModalFromMed(data) {
        this.currentFrequency = data
        this.tempFrequency = null
        this.tempFrequencySpecial = null
        this.tempDuration = null
        this.tempDosage = null
        this.tempInjection = null
        $("#frequencyModal").modal("show");
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
        this.tempFrequencySpecial = data
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
        if (data > 0 && data < 20) {
            this.currentFrequency.quantity = data
            $("#durationModal").modal("show");
        } else {
            this.toastr.warning("Quantity ranges between 1 to 20", "Warning")
        }
    }

    onTextChange(type, suggestion) {
        var type1 = null
        if (type == 'Clinical Observation') {
            type = 'SYMPTOMS'
            type1 = 'Clinical Observation'
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
                } else if (type == 'SYMPTOMS' && type1 == null) {
                    this.doctorSymptomsDB = data.data
                } else if (type == 'SYMPTOMS' && type1 == 'Clinical Observation') {
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
        if (this.suregeryOptionsTop[i].div.length > 1) {
            this.suregeryOptionsTop[i].div.splice(j, 1);
            this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected - 1
        } else {
            this.surgryTabTop(i)
        }
    }

    surgryTab(i) {
        if (this.totalSurgeryOptionsSelected > 2) {
            this.toastr.warning("Maximum items can be 3", "Warning")
        } else {
            this.suregeryOptions[i].status1 = true
            if (this.suregeryOptionsTop.length < 1) {
                this.suregeryOptions[i].status = true
            }
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
                        this.toastr.warning("Intruction cant be empty", "Warning")
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
            this.toastr.warning("Intruction cant be empty", "Warning")
        }
    }

    removeTextbox(i) {
        if (this.inputBox.length > 1) {
            this.inputBox.splice(i, 1);
        } else {
            $("#instructionsModal").modal("hide");
        }
    }

    setFields(flag) {
        if (flag == 'findings') {
            if (this.itemsfinding.length > 0) {
                this.findingsSelected = this.itemsfinding;
                for (var i = 0; i < this.findingsSelected.length; i++) {
                    this.SaveDoctorOtherPreset('Clinical Observation', this.findingsSelected[i].value)
                }
            } else {
                this.toastr.warning("Invalid fields")
                return
            }
        } else if (flag == 'symptoms') {
            if (this.itemsymptoms.length > 0) {
                this.symptomsSelected = this.itemsymptoms;
                for (var i = 0; i < this.symptomsSelected.length; i++) {
                    this.SaveDoctorOtherPreset('Symptoms', this.symptomsSelected[i].value)
                }
            } else {
                this.toastr.warning("Invalid fields")
                return
            }
            this.symptomsSelected = this.itemsymptoms;
        } else if (flag == 'diagnosis') {
            if (this.itemsdiagnosis.length > 0) {
                this.diagnosisSelected = this.itemsdiagnosis;
                for (var i = 0; i < this.diagnosisSelected.length; i++) {
                    this.SaveDoctorOtherPreset('Diagnosis', this.diagnosisSelected[i].value)
                }
            } else {
                this.toastr.warning("Invalid fields")
                return
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
                    this.toastr.warning("Intruction cant be empty", "Warning")
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
            var array = []
            for (var i = 0; i < this.suregeryOptionsTop.length; i++) {
                if (this.suregeryOptionsTop[i].status == true) {
                    array.push(this.suregeryOptionsTop[i])
                }
            }
            if (array.length > 0) {
                this.SaveDoctorPresetArray(this.preset_name.trim(), array, 'Surgery')
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
                if (boolean == false) {
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
                            this.toastr.error(data.message, "Error")
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
        } else if (flag == 'med_info') {
            if (this.medInfoObject.medication_type != 'abc' && this.medInfoObject.med_info != null) {
                let object = {
                    doctor_id: this.doctorData.itemId,
                    type: this.medInfoObject.medication_type,
                    observation: this.medInfoObject.med_info[0].value
                }
                this.userService.SaveMedicationSuggestion(object).subscribe(data => {
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
                        if (data.message == "Data already exists") {
                            let dialogRef = this.dialog.open(ConfirmationDialogUpdateComponent, {});

                            dialogRef.afterClosed().subscribe(result => {
                                console.log('The dialog was closed');
                                if (result == "yes") {
                                    let object = {
                                        doctor_id: this.doctorData.itemId,
                                        type: this.medInfoObject.medication_type,
                                        observation: this.medInfoObject.med_info[0].value,
                                        update_status: true
                                    }
                                    this.userService.SaveMedicationSuggestion(object).subscribe(data => {
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
                        }
                    }
                }, err => {
                    console.log(err);
                })
            } else {
                this.toastr.warning("Invalid fields", "Warning")
                return
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
                this.toastr.error(data.message, "Error")
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
                this.toastr.error(data.message, "Error")
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
                }
            }
        }, err => {
            console.log(err);
        })
    }

    savePreset(condition) {
        this.save_true = true
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
                // for medication info 
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

}