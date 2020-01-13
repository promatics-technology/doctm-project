import { Component, OnInit } from '@angular/core';
import { DndDropEvent, DropEffect } from "ngx-drag-drop";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-dashboard-prescription-pad',
    templateUrl: './dashboard-prescription-pad.component.html',
    styleUrls: ['./dashboard-prescription-pad.component.css']
})
export class DashboardPrescriptionPadComponent implements OnInit {

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
        { status: false }
    ]


    treatmentStatus = [
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

    vaccinationDate = null
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }

    intervalFunction
    minutes: number
    seconds: number
    MyDate
    day
    month
    year

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
        'temp': '',
        'pulse': '',
        'sys': '',
        'dia': '',
        'spo': ''
    };
    temp;
    spo;
    pulse;
    sys;
    dia;
    filter
    itemsfinding;
    findingPreSetVals = []
    preConditionComplete: boolean = false;
    allergyComplete: boolean = false;
    findingsComplete: boolean = false
    bodyIndicatorComplete: boolean = false;
    testValue
    findingsSelected = []

    // harman
    filterSymptoms
    itemsymptoms
    symptomsPresetArray = []
    symptomsSelected = []
    symptomsComplete: boolean = false
    filterDiagnosis
    itemsdiagnosis
    diagnosisPresetArray = []
    diagnosisSelected = []
    diagnosisComplete: boolean = false

    instructionsInput
    addPresetInstruction = false
    presetArrayInstruction = []
    instructionsComplete: boolean = false
    instructionsSelected = []
    numberOfInvestigationSelected = 0
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

    totalMedications: number = 0
    investigation
    suregeryOptions
    totalSurgeryOptionsSelected: number = 0
    surgerySelectedArray = []
    finalSurgeryArray = []

    followUpDays: number = 0
    finalfollowUpDays: number = 0

    otherAllergy

    vaccination_type
    currentVaccinationArray = []
    dueVaccinationArray = []
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

    complete = false

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
    // harman

    constructor(private toastr: ToastrService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.patientData = params;
        });

    }

    ngOnInit() {
        this.minutes = 0
        this.seconds = 0
        this.intervalFunction = setInterval(() => {
            this.incrementTimer()
        }, 1000);

        var options = { month: 'short' };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate()
        this.year = new Date().getFullYear()

        this.prescList = [
            { structure: 'three', targetId: 'preconditionModal', float: 'left', item: 'Pre Condition', status: false, status1: false, field: "Add Field", values: ['a', 'b', 'c'], width: 'pre-cond' },
            { structure: 'three', targetId: 'allergyModal', float: 'left', item: 'Allergy', status: false, status1: false, field: "Add Field", values: [], width: 'allergy' },
            { structure: 'three', targetId: 'bodyIndicatorModal', float: 'left', item: 'Body Indicator', status: false, status1: false, field: "Add Field", values: [], width: 'indicator' },
            { structure: 'one', targetId: 'clinicFindModal', float: 'left', item: 'Clinic Observation', status: false, status1: false, field: "Add Field", values: [], width: 'finding' },
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


        this.condition = false
        this.findPresets = false
        this.symptomspreset = false
        this.diagnosispreset = false
        this.instructionpreset = false
        this.investigationpreset = false
        this.othertabs = false

        this.inputBox = [{ name: 'Instruction 1', instructionsInput: '' }];
        this.treatBox = ['Instruction 1'];

        this.medicationStatus[0].status = true
        this.investigationStatus[0].status = true
        this.treatmentStatus[0].status = true

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
        this.medication.gel[0].quantity = 'Qty, (No)'
        this.medication.drops = [{}]
        this.medication.drops[0].frequency = 'Frequency'
        this.medication.drops[0].duration = 'Duration'
        this.medication.drops[0].quantity = 'Qty, (No)'

        this.tempMedicationArray = []

        this.investigation = {}

        this.suregeryOptions = [
            { name: 'Cardiac', status: false, div: [] },
            { name: 'ENT', status: false, div: [] },
            { name: 'Dental', status: false, div: [] },
            { name: 'Genito-Urinary', status: false, div: [] },
            { name: 'Gynaecology/Obstetrics', status: false, div: [] },
            { name: 'Neonatal', status: false, div: [] },
            { name: 'Neurology', status: false, div: [] },
            { name: 'Oncology', status: false, div: [] },
            { name: 'Ophthalmology', status: false, div: [] },
            { name: 'Orthopaedics', status: false, div: [] },
            { name: 'Paediatric', status: false, div: [] },
            { name: 'Vascular', status: false, div: [] }
        ]

        this.rightOD = {}
        this.rightOD.sphere = '--.--'
        this.rightOD.cylinder = '-.--'
        this.rightOD.axis = '---'
        this.rightOD.add = '-.--'
        this.rightOD.pd = '--.-'
        this.leftOD = {}
        this.leftOD.sphere = '--.--'
        this.leftOD.cylinder = '-.--'
        this.leftOD.axis = '---'
        this.leftOD.add = '-.--'
        this.leftOD.pd = '--.-'
        this.finalRightOD = {}
        this.finalLeftOD = {}
        this.surgryTab(0);
    }

    // cancelStatusOfPrescList(){
    //     for (var i = 0; i < this.prescList.length; i++) {
    //         this.prescList[i].status = false
    //     }
    // }

    // popupClass(i) {
    //     this.classActive = i;
    //     this.selectedValue = this.prescList[i].item
    // }

    getClass(i) {
        if (this.prescList[i].status == true) {
            return 'active'
        } else {
            return ''
        }
    }
    // getclasssecond(item) {

    //     if (this.selectedIndexDataValue.map(it => { return it.headings }).indexOf(item) != -1) {
    //         return true
    //         // code...
    //     }
    // }

    // addprescfield(j) {
    //     this.ppclass = j;
    //     this.selectedIndex = j
    //     this.classActive = null
    //     this.selectedValue = null
    // }

    // savebutton() {
    //     let temp = []
    //     temp.push({
    //         headings: this.prescList[this.classActive].item,
    //         width: this.prescList[this.classActive].width,
    //         float: this.prescList[this.classActive].float,
    //         modalId: this.prescList[this.classActive].targetId,
    //         targetId: this.prescList[this.classActive].targetId,
    //         selectedStatus: true
    //     })
    //     if (this.prescList[this.classActive].structure == 'three' || this.prescList[this.classActive].structure == 'two') {
    //         if (this.selectedIndexDataValueForShowleft.map(it => { return it.structure }).indexOf(this.prescList[this.classActive].structure) == -1) {
    //             this.selectedIndexDataValueForShowleft.push({
    //                 key: temp,
    //                 structure: this.prescList[this.classActive].structure

    //             })
    //         } else {
    //             let index = this.selectedIndexDataValueForShowleft.map(it => { return it.structure }).indexOf(this.prescList[this.classActive].structure)
    //             this.selectedIndexDataValueForShowleft[index].key.push(temp[0])
    //             // this.selectedIndexDataValueForShowleft.push(
    //             //    {
    //             //        key:temp,
    //             //        structure:this.prescList[this.classActive].structure

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
    //     if (this.selectedIndexDataValue.map(it => { return it.headings }).indexOf(this.prescList[this.classActive].item) == -1) {
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


    // yesform() {
    //     if (this.condition == true) {
    //         this.condition = false;
    //     } else {
    //         this.condition = true;
    //     }
    // }

    // precmodalclick(i) {
    //     this.precmodalActive = i;
    // }

    // precClass(i) {
    //     if (i == this.precmodalActive) {
    //         return 'active'
    //     }
    // }

    // findingPresets() {
    //     if (this.findPresets == true) {
    //         this.findPresets = false
    //     } else {
    //         this.findPresets = true
    //     }
    // }

    // symPresets() {
    //     if (this.symptomspreset == true) {
    //         this.symptomspreset = false
    //     } else {
    //         this.symptomspreset = true
    //     }
    // }

    // diagPresets() {
    //     if (this.diagnosispreset == true) {
    //         this.diagnosispreset = false
    //     } else {
    //         this.diagnosispreset = true
    //     }
    // }

    // instrucPresets() {
    //     if (this.instructionpreset == true) {
    //         this.instructionpreset = false
    //     } else {
    //         this.instructionpreset = true
    //     }
    // }

    // invesPresets() {
    //     if (this.investigationpreset == true) {
    //         this.investigationpreset = false
    //     } else {
    //         this.investigationpreset = true
    //     }
    // }


    // addTextbox() {
    //     var i = 3,
    //         j;
    //     if (this.inputBox.length < i) {
    //         j = this.inputBox.length + 1;
    //         this.inputBox.push('Instruction ' + j)
    //     }
    // }
    // removeTextbox() {
    //     //console.log(this.inputBox.length);
    //     if (this.inputBox.length > 1) {
    //         this.inputBox.splice(this.inputBox.length - 1, 1);
    //         console.log()
    //     }
    // }


    // treatPresets() {
    //     if (this.treatmentpreset == true) {
    //         this.treatmentpreset = false
    //     } else {
    //         this.treatmentpreset = true
    //     }
    // }

    removeTreatbox() {
        if (this.treatBox.length > 0) {
            this.treatBox.splice(this.treatBox.length - 1, 1);
        }
    }

    medicaTab(i) {
        this.medicatab = i
        if (this.totalMedications > 8 && this.medicationStatus[i].status == false) {
            this.toastr.warning("Maximum items can be 10", "Warning")
        } else {
            this.medicationStatus[i].status = !this.medicationStatus[i].status
            if (this.medicationStatus[i].status == true) {
                this.totalMedications = this.totalMedications + 1
            } else {
                if (this.totalMedications > -1) {
                    if (i == 0) {
                        this.totalMedications = this.totalMedications - this.medicationTabArray.length - 1
                        this.medicationTabArray = []
                        var temp = this.medication.tab[0]
                        this.medication.tab = []
                        this.medication.tab.push(temp)
                    } else if (i == 1) {
                        this.totalMedications = this.totalMedications - this.medicationCapArray.length - 1
                        this.medicationCapArray = []
                        var temp = this.medication.cap[0]
                        this.medication.cap = []
                        this.medication.cap.push(temp)
                    } else if (i == 2) {
                        this.totalMedications = this.totalMedications - this.medicationSypArray.length - 1
                        this.medicationSypArray = []
                        var temp = this.medication.syp[0]
                        this.medication.syp = []
                        this.medication.syp.push(temp)
                    } else if (i == 3) {
                        this.totalMedications = this.totalMedications - this.medicationSuspArray.length - 1
                        this.medicationSuspArray = []
                        var temp = this.medication.susp[0]
                        this.medication.susp = []
                        this.medication.susp.push(temp)
                    } else if (i == 4) {
                        this.totalMedications = this.totalMedications - this.medicationEmulsnArray.length - 1
                        this.medicationEmulsnArray = []
                        var temp = this.medication.emulsn[0]
                        this.medication.emulsn = []
                        this.medication.emulsn.push(temp)
                    } else if (i == 5) {
                        this.totalMedications = this.totalMedications - this.medicationSolutionArray.length - 1
                        this.medicationSolutionArray = []
                        var temp = this.medication.solution[0]
                        this.medication.solution = []
                        this.medication.solution.push(temp)
                    } else if (i == 6) {
                        this.totalMedications = this.totalMedications - this.medicationInjArray.length - 1
                        this.medicationInjArray = []
                        var temp = this.medication.injection[0]
                        this.medication.injection = []
                        this.medication.injection.push(temp)
                    } else if (i == 7) {
                        this.totalMedications = this.totalMedications - this.medicationCreamArray.length - 1
                        this.medicationCreamArray = []
                        var temp = this.medication.cream[0]
                        this.medication.cream = []
                        this.medication.cream.push(temp)
                    } else if (i == 8) {
                        this.totalMedications = this.totalMedications - this.medicationGelArray.length - 1
                        this.medicationGelArray = []
                        var temp = this.medication.gel[0]
                        this.medication.gel = []
                        this.medication.gel.push(temp)
                    } else if (i == 9) {
                        this.totalMedications = this.totalMedications - this.medicationDropsArray.length - 1
                        this.medicationDropsArray = []
                        var temp = this.medication.drops[0]
                        this.medication.drops = []
                        this.medication.drops.push(temp)
                    } else if (i == 10) {
                        this.totalMedications = this.totalMedications - this.medicationPowderArray.length - 1
                        this.medicationPowderArray = []
                        var temp = this.medication.powder[0]
                        this.medication.powder = []
                        this.medication.powder.push(temp)
                    } else if (i == 11) {
                        this.totalMedications = this.totalMedications - this.medicationAerosolsArray.length - 1
                        this.medicationAerosolsArray = []
                        var temp = this.medication.aerosols[0]
                        this.medication.aerosols = []
                        this.medication.aerosols.push(temp)
                    } else if (i == 12) {
                        this.totalMedications = this.totalMedications - this.medicationMouthWashArray.length - 1
                        this.medicationMouthWashArray = []
                        var temp = this.medication.mouthwash[0]
                        this.medication.mouthwash = []
                        this.medication.mouthwash.push(temp)
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
        this.treatab = i
        this.treatmentStatus[i].status = !this.treatmentStatus[i].status
    }

    treatClass(i) {
        if (this.treatmentStatus[i].status == true) {
            return 'active'
        } else {
            return ''
        }
    }

    surgryClass(i) {
        if (this.suregeryOptions[i].status == true) {
            return 'active'
        } else {
            return ''
        }
    }

    // invesTab(i) {
    //     this.investigationtab = i
    //     this.investigationStatus[i].status = !this.investigationStatus[i].status
    //     //console.log(this.investigationStatus[i].status)
    // }

    invesClass(i) {
        // if (i==this.investigationtab) {
        //     return 'active'
        // }
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
        for (var i = 0; i < this.prescList1.length; i++) {
            this.prescList2.push(this.prescList1[i])
        }
    }

    cancelSideBarFields() {
        this.prescList1 = []
        for (var i = 0; i < this.prescList2.length; i++) {
            this.prescList1.push(this.prescList2[i])
        }
    }

    setPopUpValues(data, type, i) {
        if (data) {
            var purpose = data.purpose;
            var text = data.text;
            var dataIndex = i;
            data.status = !data.status;
        }
        if (type == 'preconditions') {
            if (data.status == true) {
                var precondlength
                if (this.otherPre) {
                    precondlength = this.preCondSelected.length + this.otherPre.length
                } else {
                    precondlength = this.preCondSelected.length
                }
                if (precondlength <= 3) {
                    if (purpose != 'more') {
                        this.preCondSelected.push(text);
                    } else {
                        this.preCondMdlArray[i].status = !this.preCondMdlArray[i].status
                    }
                } else {
                    this.toastr.warning("Maximum items can be 4", "Warning")
                    this.preCondMdlArray[i].status = false;
                }
            } else {
                var index = this.preCondSelected.indexOf(text);
                if (index > -1) {
                    this.preCondSelected.splice(index, 1);
                }
            }
        } else if (type == 'allergy') {
            if (data.status == true) {
                var Allergylength
                if (this.otherAllergy) {
                    Allergylength = this.allergySelected.length + this.otherAllergy.length
                } else {
                    Allergylength = this.allergySelected.length
                }
                if (Allergylength <= 3) {
                    if (purpose != 'more') {
                        this.allergySelected.push(text);
                    } else {}
                } else {
                    data.status = false;
                    this.toastr.warning("Maximum items can be 4", "Warning")
                    // this.preCondMdlArray[i].status = false;
                }
            } else {
                var index = this.allergySelected.indexOf(text);
                if (index > -1) {
                    this.allergySelected.splice(index, 1);
                }
            }
        }
        console.log(this.allergySelected);
        console.log(this.bodyIndicatorSelected);
        console.log(this.preCondSelected);
    }

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
        if (this.instructionpreset == true) {
            this.instructionpreset = false
        } else {
            this.instructionpreset = true
        }
    }
    addTextbox() {
        var i = 3,
            j;
        if (this.inputBox.length < i) {
            var boolean = false
            for (var i = 0; i < this.inputBox.length; i++) {
                if (this.inputBox[i].instructionsInput == '' || this.inputBox[i].instructionsInput == null) {
                    boolean = true
                    this.toastr.warning("Intruction cant be empty", "Warning")
                    break;
                }
            }
            if (boolean == false) {
                j = this.inputBox.length + 1;
                this.inputBox.push({
                    name: 'Instruction ' + j,
                    instructionsInput: ''
                })
            }
        }
    }
    removeTextbox() {
        if (this.inputBox.length > 0) {
            this.inputBox.splice(this.inputBox.length - 1, 1);
        }
    }
    removeTextbox1(i) {
        if (this.inputBox.length > 0) {
            this.inputBox.splice(i, 1);
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
    checkFields() {
        console.log(this.filter);
        console.log(this.itemsfinding);
    }
    setFields(flag) {
        console.log(this.selectedIndexDataValueForShowleft);
        console.log(flag)
        if (flag == 'preconditions') {
            // if (!this.preConditionComplete) {
            this.preConditionComplete = true;
            if (this.preCondSelected.length <= 4) {
                this.preCondSelected = []
                for (var j = 0; j < this.preCondMdlArray.length; j++) {
                    if (this.preCondMdlArray[j].status == true) {
                        this.preCondSelected.push(this.preCondMdlArray[j].text)
                    }
                }
                if (this.otherPre && this.otherPre.length > 0) {
                    var newArray = []
                    for (var i = 0; i < this.otherPre.length; i++) {
                        newArray.push(this.otherPre[i].value)
                    }
                    this.preCondSelected = this.preCondSelected.concat(newArray)
                }
                this.finalPreConditions = []
                for (var i = 0; i < this.preCondSelected.length; i++) {
                    this.finalPreConditions.push(this.preCondSelected[i])
                }
                // this.selectedIndexDataValueForShowleft.push({
                //     "key": [{
                //         "headings": "Pre Condition",
                //         "width": "pre-cond",
                //         "float": "left",
                //         "modalId": "preconditionModal",
                //         "targetId": "preconditionModal",
                //         "selectedStatus": true
                //     }],
                //     "structure": "three"
                // });
                // } else {
                //     //this.selectedIndexDataValueForShowleft=[]
                // }
            }
        } else if (flag == 'allergy') {
            this.allergyComplete = true;
            if (this.allergySelected.length <= 4) {
                this.allergySelected = []
                for (var i = 0; i < this.AllergyArray.length; i++) {
                    for (var j = 0; j < this.AllergyArray[i].allergySource.length; j++) {
                        if(this.AllergyArray[i].allergySource[j].status == true){
                            this.allergySelected.push(this.AllergyArray[i].allergySource[j].text)
                        }
                    }
                    this.AllergyArray[i]
                }
                if (this.otherAllergy && this.otherAllergy.length > 0) {
                    var newArray = []
                    for (var i = 0; i < this.otherAllergy.length; i++) {
                        newArray.push(this.otherAllergy[i].value)
                    }
                    this.allergySelected = this.allergySelected.concat(newArray)
                }
                this.finalAllergy = []
                for (var i = 0; i < this.allergySelected.length; i++) {
                    this.finalAllergy.push(this.allergySelected[i])
                }
            }
        } else if (flag == 'bodyIndicators') {
            this.bodyIndicatorSelected = [];
            if (this.bodyIndicator.temp != '') {
                if (this.bodyIndicatorSelected.indexOf('Temp: ' + this.bodyIndicator.temp + 'F') == -1) {
                    this.bodyIndicatorSelected.push('Temp: ' + this.bodyIndicator.temp + 'F');
                }
            }
            if (this.bodyIndicator.sys != '' && this.bodyIndicator.dia != '') {
                if (this.bodyIndicatorSelected.indexOf('BP: ' + this.bodyIndicator.sys + '/' + this.bodyIndicator.dia) == -1) {
                    this.bodyIndicatorSelected.push('BP: ' + this.bodyIndicator.sys + '/' + this.bodyIndicator.dia);
                }
            }
            if (this.bodyIndicator.pulse != '') {
                if (this.bodyIndicatorSelected.indexOf('Pulse: ' + this.bodyIndicator.pulse) == -1) {
                    this.bodyIndicatorSelected.push('Pulse: ' + this.bodyIndicator.pulse);
                }
            }
            if (this.bodyIndicator.spo != '') {
                if (this.bodyIndicatorSelected.indexOf('SpO2: ' + this.bodyIndicator.spo) == -1) {
                    this.bodyIndicatorSelected.push('SpO2: ' + this.bodyIndicator.spo);
                }
            }
            if (!this.bodyIndicatorComplete) {
                this.bodyIndicatorComplete = true;
                if (this.bodyIndicatorSelected.length <= 4) {
                    this.selectedIndexDataValueForShowleft.push({
                        "key": [{
                            "headings": "Body Indicators",
                            "width": "indicator",
                            "float": "left",
                            "modalId": "bodyIndicatorModal",
                            "targetId": "bodyIndicatorModal",
                            "selectedStatus": true
                        }],
                        "structure": "three"
                    });
                } else {
                    //this.selectedIndexDataValueForShowleft=[]
                }
            }
        } else if (flag == 'findings') {
            this.findingsSelected = this.itemsfinding;
            console.log(this.findingsSelected);
            if (!this.findingsComplete) {
                this.findingsComplete = true;
                if (this.findingsSelected.length <= 4) {
                    this.selectedIndexDataValueForShowleft.push({
                        "key": [{
                            "headings": "Clinic Observation",
                            "width": "finding",
                            "float": "left",
                            "modalId": "clinicFindModal",
                            "targetId": "clinicFindModal",
                            "selectedStatus": true
                        }],
                        "structure": "one"
                    });
                } else {
                    //this.selectedIndexDataValueForShowleft=[]
                }
            }
        } else if (flag == 'symptoms') {
            this.symptomsSelected = this.itemsymptoms;
            console.log(this.symptomsSelected);
            if (!this.symptomsComplete) {
                this.symptomsComplete = true;
                if (this.symptomsSelected.length <= 4) {
                    this.selectedIndexDataValueForShowleft.push({
                        "key": [{
                            "headings": "Symptoms",
                            "selectedStatus": true,
                            "width": "symptoms",
                            "float": "left",
                            "targetId": "symptomsModal",
                            "modalId": "symptomsModal"
                        }],
                        "structure": "one"
                    });
                }
            }
        } else if (flag == 'diagnosis') {
            this.diagnosisSelected = this.itemsdiagnosis;
            console.log(this.diagnosisSelected);
            if (!this.diagnosisComplete) {
                this.diagnosisComplete = true;
                if (this.diagnosisSelected.length <= 4) {
                    this.selectedIndexDataValueForShowleft.push({
                        "key": [{
                            "headings": "Diagnosis",
                            "selectedStatus": true,
                            "width": "diagnosis",
                            "float": "left",
                            "targetId": "diagnosisModal",
                            "modalId": "diagnosisModal"
                        }],
                        "structure": "one"
                    });
                }
            }
        } else if (flag == 'instructions') {
            this.instructionsComplete = false
            var boolean = false
            for (var i = 0; i < this.inputBox.length; i++) {
                if (this.inputBox[i].instructionsInput == '' || this.inputBox[i].instructionsInput == null) {
                    boolean = true
                    this.toastr.warning("Intruction cant be empty", "Warning")
                    break;
                }
            }
            if (boolean == false) {                      
                this.instructionsComplete = true;
                if (this.inputBox.length <= 3) {
                    this.instructionsSelected = []
                    for (var i = 0; i < this.inputBox.length; i++) {
                        this.instructionsSelected.push(this.inputBox[i].instructionsInput)
                    }
                }                
            }
        } else if (flag == 'investigation') {
            // if (!this.investigationIndicatorComplete) {
                this.investigationIndicatorComplete = true;
                // this.selectedIndexDataValueForShowleft.push({
                //     "key": [{
                //         "headings": "Investigation",
                //         "selectedStatus": true,
                //         "width": "investigation",
                //         "float": "left",
                //         "targetId": "investigationModal",
                //         "modalId": "investigationModal"
                //     }],
                //     "structure": "one"
                // });
            // }
        } else if (flag == 'surgery') {
            var boolean = false
            this.surgeryComplete = false
            for (var i = 0; i < this.suregeryOptions.length; i++) {
                for (var j = 0; j < this.suregeryOptions[i].div.length; j++) {
                    if (this.suregeryOptions[i].status == true &&
                        this.suregeryOptions[i].div[j].sub_speciality.trim().length > 0 &&
                        this.suregeryOptions[i].div[j].procedure_name.trim().length > 0) {
                        boolean = true
                    } else {
                        this.toastr.warning("Sub speciality or procedure name invalid", "Warning")
                        return;
                    }
                }
            }
            if (boolean == true) {
                this.surgerySelectedArray = []
                for (var i = 0; i < this.suregeryOptions.length; i++) {
                    for (var j = 0; j < this.suregeryOptions[i].div.length; j++) {
                        if (this.suregeryOptions[i].status == true) {
                            this.surgerySelectedArray.push(this.suregeryOptions[i].div[j].procedure_name)
                        }
                    }
                }
                this.surgeryComplete = true;
            }
            console.log(this.surgerySelectedArray)
        } else if (flag == 'follow') {
            console.log("hsbfjdcsbfbvhj")
            this.finalfollowUpDays = this.followUpDays
            this.followDaysComplete = true
        } else if (flag == 'vaccination') {
            this.vaccinationComplete = false
            if (this.currentVaccinationComplete == true && this.dueVaccinationComplete == true && this.vaccinationDate != null) {
                this.vaccinationComplete = true
            }
        } else if (flag == 'medication') {
            this.tempMedicationArray = []
            this.medicationComplete = false
            var boolean = false
            if (this.medicationStatus[0].status == true) {
                for (var i = 0; i < this.medication.tab.length; i++) {
                    if (!this.medication.tab[i].med_name || this.medication.tab[i].med_name.trim().length < 1 ||
                        this.medication.tab[i].frequency == 'Frequency' || this.medication.tab[i].duration == 'Duration'
                    ) {
                        this.toastr.warning("Invalid values of Tablet", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.tab[i].name = "Tablet"
                        this.tempMedicationArray.push(this.medication.tab[i])
                    }
                }
            }
            if (this.medicationStatus[1].status == true) {
                for (var i = 0; i < this.medication.cap.length; i++) {
                    if (!this.medication.cap[i].med_name || this.medication.cap[i].med_name.trim().length < 1 ||
                        this.medication.cap[i].frequency == 'Frequency' || this.medication.cap[i].duration == 'Duration'
                    ) {
                        this.toastr.warning("Invalid values of Capsule", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.cap[i].name = "Capsule"
                        this.tempMedicationArray.push(this.medication.cap[i])
                    }
                }
            }
            if (this.medicationStatus[2].status == true) {
                for (var i = 0; i < this.medication.syp.length; i++) {
                    if (!this.medication.syp[i].med_name || this.medication.syp[i].med_name.trim().length < 1 ||
                        this.medication.syp[i].frequency == 'Frequency' || this.medication.syp[i].duration == 'Duration' ||
                        this.medication.syp[i].dosage == 'Dosage'
                    ) {
                        this.toastr.warning("Invalid values of Syrup", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.syp[i].name = "Syrup"
                        this.tempMedicationArray.push(this.medication.syp[i])
                    }
                }
            }
            if (this.medicationStatus[3].status == true) {
                for (var i = 0; i < this.medication.susp.length; i++) {
                    if (!this.medication.susp[i].med_name || this.medication.susp[i].med_name.trim().length < 1 ||
                        this.medication.susp[i].frequency == 'Frequency' || this.medication.susp[i].duration == 'Duration' ||
                        this.medication.susp[i].dosage == 'Dosage'
                    ) {
                        this.toastr.warning("Invalid values of Suspension", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.susp[i].name = "Suspension"
                        this.tempMedicationArray.push(this.medication.susp[i])
                    }
                }
            }
            if (this.medicationStatus[4].status == true) {
                for (var i = 0; i < this.medication.emulsn.length; i++) {
                    if (!this.medication.emulsn[i].med_name || this.medication.emulsn[i].med_name.trim().length < 1 ||
                        this.medication.emulsn[i].frequency == 'Frequency' || this.medication.emulsn[i].duration == 'Duration' ||
                        this.medication.emulsn[i].dosage == 'Dosage'
                    ) {
                        this.toastr.warning("Invalid values of Emulsion", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.emulsn[i].name = "Emulsion"
                        this.tempMedicationArray.push(this.medication.emulsn[i])
                    }
                }
            }
            if (this.medicationStatus[5].status == true) {
                for (var i = 0; i < this.medication.solution.length; i++) {
                    if (!this.medication.solution[i].med_name || this.medication.solution[i].med_name.trim().length < 1 ||
                        this.medication.solution[i].frequency == 'Frequency' || this.medication.solution[i].duration == 'Duration' ||
                        this.medication.solution[i].dosage == 'Dosage'
                    ) {
                        this.toastr.warning("Invalid values of Solution", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.solution[i].name = "Solution"
                        this.tempMedicationArray.push(this.medication.solution[i])
                    }
                }
            }
            if (this.medicationStatus[6].status == true) {
                for (var i = 0; i < this.medication.injection.length; i++) {
                    if (!this.medication.injection[i].med_name || this.medication.injection[i].med_name.trim().length < 1 ||
                        this.medication.injection[i].frequency == 'Frequency' || this.medication.injection[i].duration == 'Duration' ||
                        this.medication.injection[i].mode == 'Mode'
                    ) {
                        this.toastr.warning("Invalid values of Injection", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.injection[i].name = "Injection"
                        this.tempMedicationArray.push(this.medication.injection[i])
                    }
                }
            }
            if (this.medicationStatus[12].status == true) {
                for (var i = 0; i < this.medication.mouthwash.length; i++) {
                    if (!this.medication.mouthwash[i].med_name || this.medication.mouthwash[i].med_name.trim().length < 1 ||
                        this.medication.mouthwash[i].frequency == 'Frequency' || this.medication.mouthwash[i].duration == 'Duration'
                    ) {
                        this.toastr.warning("Invalid values of MouthWash", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.mouthwash[i].name = "MouthWash"
                        this.tempMedicationArray.push(this.medication.mouthwash[i])
                    }
                }
            }
            if (this.medicationStatus[11].status == true) {
                for (var i = 0; i < this.medication.powder.length; i++) {
                    if (!this.medication.powder[i].med_name || this.medication.powder[i].med_name.trim().length < 1 ||
                        this.medication.powder[i].frequency == 'Frequency' || this.medication.powder[i].duration == 'Duration'
                    ) {
                        this.toastr.warning("Invalid values of Powder", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.powder[i].name = "Powder"
                        this.tempMedicationArray.push(this.medication.powder[i])
                    }
                }
            }
            if (this.medicationStatus[7].status == true) {
                for (var i = 0; i < this.medication.cream.length; i++) {
                    if (!this.medication.cream[i].med_name || this.medication.cream[i].med_name.trim().length < 1 ||
                        this.medication.cream[i].frequency == 'Frequency' || this.medication.cream[i].duration == 'Duration'
                    ) {
                        this.toastr.warning("Invalid values of Cream", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.cream[i].name = "Cream"
                        this.tempMedicationArray.push(this.medication.cream[i])
                    }
                }
            }
            if (this.medicationStatus[8].status == true) {
                for (var i = 0; i < this.medication.gel.length; i++) {
                    if (!this.medication.gel[i].med_name || this.medication.gel[i].med_name.trim().length < 1 ||
                        this.medication.gel[i].frequency == 'Frequency' || this.medication.gel[i].duration == 'Duration' ||
                        this.medication.gel[i].quantity == 'Qty, (No)'
                    ) {
                        this.toastr.warning("Invalid values of Gel", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.gel[i].name = "Gel"
                        this.tempMedicationArray.push(this.medication.gel[i])
                    }
                }
            }
            if (this.medicationStatus[9].status == true) {
                for (var i = 0; i < this.medication.drops.length; i++) {
                    if (!this.medication.drops[i].med_name || this.medication.drops[i].med_name.trim().length < 1 ||
                        this.medication.drops[i].frequency == 'Frequency' || this.medication.drops[i].duration == 'Duration' ||
                        this.medication.drops[i].quantity == 'Qty, (No)'
                    ) {
                        this.toastr.warning("Invalid values of Drops", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.drops[i].name = "Drops"
                        this.tempMedicationArray.push(this.medication.drops[i])
                    }
                }
            }
            if (this.medicationStatus[10].status == true) {
                for (var i = 0; i < this.medication.aerosols.length; i++) {
                    if (!this.medication.aerosols[i].med_name || this.medication.aerosols[i].med_name.trim().length < 1 ||
                        this.medication.aerosols[i].frequency == 'Frequency' || this.medication.aerosols[i].duration == 'Duration'
                    ) {
                        this.toastr.warning("Invalid values of Aerosols", "Warning")
                        boolean = true
                        break;
                    } else {
                        this.medication.aerosols[i].name = "Aerosols"
                        this.tempMedicationArray.push(this.medication.aerosols[i])
                    }
                }
            }
            if (boolean == false) {
                this.medicationComplete = true
                console.log(this.tempMedicationArray)
            }
        } else if (flag == 'eye_pres') {
            this.eyePresComplete = false
            if (
                this.rightOD.sphere == null || this.rightOD.sphere.includes('--') ||
                this.rightOD.cylinder == null || this.rightOD.cylinder.includes('--') ||
                this.rightOD.axis == null || this.rightOD.axis.toString().includes('--') ||
                this.rightOD.add == null || this.rightOD.add.includes('--') ||
                this.rightOD.pd == null || this.rightOD.pd.includes('--') ||
                this.rightOD.pd == null || this.rightOD.pd.includes('--') || this.rightOD.pd=='' ||
                this.leftOD.sphere == null || this.leftOD.sphere.includes('--') ||
                this.leftOD.cylinder == null || this.leftOD.cylinder.includes('--') ||
                this.leftOD.axis == null || this.leftOD.axis.toString().includes('--') ||
                this.leftOD.add == null || this.leftOD.add.includes('--') ||
                this.leftOD.pd == null || this.leftOD.pd.includes('--') || this.leftOD.pd==''
            ) {
                this.toastr.warning("Invalid values of eye prescription")
            } else {
                this.eyePresComplete = true
                this.finalRightOD = this.rightOD
                this.finalLeftOD = this.leftOD
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
        if (this.filter) {
            var index = this.findingPreSetVals.findIndex(p => p.value == preset.value);
            if (index == -1) {
                this.findingPreSetVals.push(preset);
            }
        } else if (this.filterSymptoms) {
            var index = this.symptomsPresetArray.findIndex(p => p.value == preset.value);
            if (index == -1) {
                this.symptomsPresetArray.push(preset);
            }
        } else if (this.filterDiagnosis) {
            var index = this.diagnosisPresetArray.findIndex(p => p.value == preset.value);
            if (index == -1) {
                this.diagnosisPresetArray.push(preset);
            }
        }
    }
    selectPreset(type, preset) {
        preset.status = !preset.status
        if (type == 'findings') {
            if (preset.status) {
                var index = this.itemsfinding.findIndex(p => p.value == preset.value);
                if (index == -1) {
                    this.itemsfinding.push({
                        display: preset.value,
                        value: preset.value
                    });
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
                    this.itemsymptoms.push({
                        display: preset.value,
                        value: preset.value
                    });
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
                    this.itemsdiagnosis.push({
                        display: preset.value,
                        value: preset.value
                    });
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
    // treatTab(i) {
    //     this.treatmentab = i
    // }
    // treatClass(i) {
    //     if (i == this.treatmentab) {
    //         return 'active'
    //     }
    // }
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
    invesPresets() {
        this.investigationpreset = !this.investigationpreset
    }
    surgryTab(i) {
        if (this.totalSurgeryOptionsSelected > 2 && this.suregeryOptions[i].status == false) {
            this.toastr.warning("Maximum items can be 3", "Warning")
        } else {
            this.suregeryOptions[i].status = !this.suregeryOptions[i].status
            if (this.suregeryOptions[i].status == true) {
                var temp = this.suregeryOptions[i]
                this.suregeryOptions.splice(i, 1)
                for (var index = this.suregeryOptions.length - 1; index >= 0; index--) {
                    this.suregeryOptions[index + 1] = this.suregeryOptions[index];
                }
                this.suregeryOptions[0] = temp
                this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + 1
                this.suregeryOptions[0].div.push({
                    sub_speciality: '',
                    procedure_name: ''
                })
            } else {
                this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected - this.suregeryOptions[i].div.length
                this.suregeryOptions[i].div = []
            }
        }
        console.log(this.totalSurgeryOptionsSelected)
    }

    showhideTab() {
        this.othertabs = !this.othertabs
    }
    // addInstructionValue(data,i){
    //   var styr = 'fsafads'
    //   this.inputBox[i].instructionsInput = data
    //   console.log(this.inputBox[0])
    //   // this.instructionsInput = null
    // }
    addInstructionValue(data, i) {
        if (data.trim().length > 0) {
            this.inputBox[i].instructionsInput = data
        }
    }
    changePreset() {
        if (this.addPresetInstruction == true) {
            this.presetArrayInstruction = this.inputBox
        } else {
            this.presetArrayInstruction = []
        }
    }
    doneInvestigation() {
        this.investigationArray = []
        for (var i = 0; i < this.investigationStatus.length; i++) {
            if (this.investigationStatus[i].status == true && this.investigationStatus[i].model!='' && this.investigationStatus[i].model!=null) {
                this.investigationArray.push({
                    name: this.investigationStatus[i].name,
                    values: this.investigationStatus[i].model
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
    // getClass(i) {
    //     if (i == this.classActive) {
    //         return 'active'
    //     }
    // }
    getclasssecond(item) {
        if (this.selectedIndexDataValue.map(it => {
                return it.headings
            }).indexOf(item) != -1) {
            return true
        }
    }
    addprescfield(j) {
        this.ppclass = j;
        this.selectedIndex = j
        this.classActive = null
        this.selectedValue = null
    }
    savebuttonNew(i, flag) {
        if (flag) {
            let temp = []
            //  alert(this.prescList[this.classActive].item);
            temp.push({
                headings: this.prescList[i].item,
                width: this.prescList[i].width,
                float: this.prescList[i].float,
                modalId: this.prescList[i].targetId,
                targetId: this.prescList[i].targetId,
                selectedStatus: true
            })
            if (this.prescList[i].structure == 'three' || this.prescList[i].structure == 'two') {
                if (this.selectedIndexDataValueForShowleft.map(it => {
                        return it.structure
                    }).indexOf(this.prescList[i].structure) == -1) {
                    this.selectedIndexDataValueForShowleft.push({
                        key: temp,
                        structure: this.prescList[i].structure
                    })
                } else {
                    let index = this.selectedIndexDataValueForShowleft.map(it => {
                        return it.structure
                    }).indexOf(this.prescList[i].structure)
                    this.selectedIndexDataValueForShowleft[index].key.push(temp[0])
                    // this.selectedIndexDataValueForShowleft.push(
                    //    {
                    //       key:temp,
                    //       structure:this.prescList[this.classActive].structure
                    //    })
                }
                // code...
            } else {
                this.selectedIndexDataValueForShowleft.push({
                    key: temp,
                    structure: this.prescList[i].structure
                })
            }
            //   
            /////////////////////////////////
            if (this.selectedIndexDataValue.map(it => {
                    return it.headings
                }).indexOf(this.prescList[i].item) == -1) {
                this.selectedIndexDataValue[this.selectedIndex].headings = this.prescList[i].item
                this.selectedIndexDataValue[this.selectedIndex].width = this.prescList[i].width
                this.selectedIndexDataValue[this.selectedIndex].float = this.prescList[i].float
                this.selectedIndexDataValue[this.selectedIndex].targetId = this.prescList[i].targetId
                this.selectedIndexDataValue[this.selectedIndex].modalId = this.prescList[i].targetId
                this.selectedIndexDataValue[this.selectedIndex].selectedStatus = true
                // this.selectedIndexDataValueForShowleft=this.selectedIndexDataValue.filter(item=>item.selectedStatus==true && item.float=='left')
                // this.selectedIndexDataValueForShowright=this.selectedIndexDataValue.filter(item=>item.selectedStatus==true && item.float=='right')
                // code...
            }
            // this.selectedIndexDataValue.push({headings:this.prescList[this.classActive].item,selectedStatus:true,field:"Add Field",values:[],width:this.prescList[this.classActive].wdtih})
            /////////////////////////////
            var boolean = false
            for (var k = 0; k < this.prescList.length; k++) {
                if (this.prescList[k].field == this.selectedValue) {
                    console.log("cant add already present")
                    boolean = true
                    break;
                }
            }
            if (boolean == false) {
                this.prescList[this.ppclass].status = true;
                this.prescList[i].status1 = true;
                this.prescList[this.ppclass].field = this.prescList[i].item;
            }
            console.log(this.prescList)
        } else {
            this.selectedIndexDataValue.splice(this.findWithAttr(this.selectedIndexDataValue, 'headings', this.prescList[i].item, ), 1);
            alert(JSON.stringify(this.selectedIndexDataValue));
        }
        alert(JSON.stringify(this.selectedIndexDataValueForShowleft));
    }
    savebutton() {
        let temp = []
        //  alert(this.prescList[this.classActive].item);
        temp.push({
            headings: this.prescList[this.classActive].item,
            width: this.prescList[this.classActive].width,
            float: this.prescList[this.classActive].float,
            modalId: this.prescList[this.classActive].targetId,
            targetId: this.prescList[this.classActive].targetId,
            selectedStatus: true
        })
        if (this.prescList[this.classActive].structure == 'three' || this.prescList[this.classActive].structure == 'two') {
            if (this.selectedIndexDataValueForShowleft.map(it => {
                    return it.structure
                }).indexOf(this.prescList[this.classActive].structure) == -1) {
                this.selectedIndexDataValueForShowleft.push({
                    key: temp,
                    structure: this.prescList[this.classActive].structure
                })
            } else {
                let index = this.selectedIndexDataValueForShowleft.map(it => {
                    return it.structure
                }).indexOf(this.prescList[this.classActive].structure)
                this.selectedIndexDataValueForShowleft[index].key.push(temp[0])
                // this.selectedIndexDataValueForShowleft.push(
                //    {
                //       key:temp,
                //       structure:this.prescList[this.classActive].structure
                //    })
            }
            // code...
        } else {
            this.selectedIndexDataValueForShowleft.push({
                key: temp,
                structure: this.prescList[this.classActive].structure
            })
        }
        //   
        /////////////////////////////////
        if (this.selectedIndexDataValue.map(it => {
                return it.headings
            }).indexOf(this.prescList[this.classActive].item) == -1) {
            this.selectedIndexDataValue[this.selectedIndex].headings = this.prescList[this.classActive].item
            this.selectedIndexDataValue[this.selectedIndex].width = this.prescList[this.classActive].width
            this.selectedIndexDataValue[this.selectedIndex].float = this.prescList[this.classActive].float
            this.selectedIndexDataValue[this.selectedIndex].targetId = this.prescList[this.classActive].targetId
            this.selectedIndexDataValue[this.selectedIndex].modalId = this.prescList[this.classActive].targetId
            this.selectedIndexDataValue[this.selectedIndex].selectedStatus = true
            // this.selectedIndexDataValueForShowleft=this.selectedIndexDataValue.filter(item=>item.selectedStatus==true && item.float=='left')
            // this.selectedIndexDataValueForShowright=this.selectedIndexDataValue.filter(item=>item.selectedStatus==true && item.float=='right')
            // code...
        }
        // this.selectedIndexDataValue.push({headings:this.prescList[this.classActive].item,selectedStatus:true,field:"Add Field",values:[],width:this.prescList[this.classActive].wdtih})
        /////////////////////////////
        var boolean = false
        for (var i = 0; i < this.prescList.length; i++) {
            if (this.prescList[i].field == this.selectedValue) {
                console.log("cant add already present")
                boolean = true
                break;
            }
        }
        if (boolean == false) {
            this.prescList[this.ppclass].status = true;
            this.prescList[this.classActive].status1 = true;
            this.prescList[this.ppclass].field = this.prescList[this.classActive].item;
        }
        console.log(this.prescList)
    }
    removeOther(data, type, index) {
        console.log(this.preCondMdlArray)
        this.preCondMdlArray.splice(index, 1);
        console.log(this.preCondMdlArray)
        // console.log(this.preCondSelected)
        // console.log(data)
    }

    addMoreTab(data) {
        if (this.totalMedications < 9) {
            if (data == 'Tab' && this.medicationTabArray.length < 9) {
                this.totalMedications = this.totalMedications + 1
                this.medicationTabArray.push('1')
                this.medication.tab.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
            } else if (data == 'Cap' && this.medicationCapArray.length < 9) {
                this.totalMedications = this.totalMedications + 1
                this.medicationCapArray.push('1')
                this.medication.cap.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.cap)
            } else if (data == 'Syp' && this.medicationSypArray.length < 9) {
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
            } else if (data == 'Susp' && this.medicationSuspArray.length < 9) {
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
            } else if (data == 'Emulsn' && this.medicationEmulsnArray.length < 9) {
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
            } else if (data == 'Inj' && this.medicationInjArray.length < 9) {
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
            } else if (data == 'Cream' && this.medicationCreamArray.length < 9) {
                this.totalMedications = this.totalMedications + 1
                this.medicationCreamArray.push('1')
                this.medication.cream.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.cream)
            } else if (data == 'Gel' && this.medicationGelArray.length < 9) {
                this.totalMedications = this.totalMedications + 1
                this.medicationGelArray.push('1')
                this.medication.gel.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    quantity: 'Qty, (No)'
                })
                console.log(this.medication.gel)
            } else if (data == 'Drops' && this.medicationDropsArray.length < 9) {
                this.totalMedications = this.totalMedications + 1
                this.medicationDropsArray.push('1')
                this.medication.drops.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    quantity: 'Qty, (No)'
                })
                console.log(this.medication.drops)
            } else if (data == 'Powder' && this.medicationPowderArray.length < 9) {
                this.totalMedications = this.totalMedications + 1
                this.medicationPowderArray.push('1')
                this.medication.powder.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.powder)
            } else if (data == 'Aerosols' && this.medicationAerosolsArray.length < 9) {
                this.totalMedications = this.totalMedications + 1
                this.medicationAerosolsArray.push('1')
                this.medication.aerosols.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.aerosols)
            } else if (data == 'MouthWash' && this.medicationMouthWashArray.length < 9) {
                this.totalMedications = this.totalMedications + 1
                this.medicationMouthWashArray.push('1')
                this.medication.mouthwash.push({
                    med_name: null,
                    frequency: 'Frequency',
                    duration: 'Duration',
                    // status: false
                })
                console.log(this.medication.mouthwash)
            } else if (data == 'Solution' && this.medicationSolutionArray.length < 9) {
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
        if (data == 'Tab') {
            this.totalMedications = this.totalMedications - 1
            this.medicationTabArray.splice(0, 1)
            this.medication.tab.splice(i + 1, 1)
        } else if (data == 'Cap') {
            this.totalMedications = this.totalMedications - 1
            this.medicationCapArray.splice(0, 1)
            this.medication.cap.splice(i + 1, 1)
        } else if (data == 'Syp') {
            this.totalMedications = this.totalMedications - 1
            this.medicationSypArray.splice(0, 1)
            this.medication.syp.splice(i + 1, 1)
        } else if (data == 'Susp') {
            this.totalMedications = this.totalMedications - 1
            this.medicationSuspArray.splice(0, 1)
            this.medication.susp.splice(i + 1, 1)
        } else if (data == 'Emulsn') {
            this.totalMedications = this.totalMedications - 1
            this.medicationEmulsnArray.splice(0, 1)
            this.medication.emulsn.splice(i + 1, 1)
        } else if (data == 'Inj') {
            this.totalMedications = this.totalMedications - 1
            this.medicationInjArray.splice(0, 1)
            this.medication.injection.splice(i + 1, 1)
        } else if (data == 'Cream') {
            this.totalMedications = this.totalMedications - 1
            this.medicationCreamArray.splice(0, 1)
            this.medication.cream.splice(i + 1, 1)
        } else if (data == 'Gel') {
            this.totalMedications = this.totalMedications - 1
            this.medicationGelArray.splice(0, 1)
            this.medication.gel.splice(i + 1, 1)
        } else if (data == 'Drops') {
            this.totalMedications = this.totalMedications - 1
            this.medicationDropsArray.splice(0, 1)
            this.medication.drops.splice(i + 1, 1)
        } else if (data == 'Powder') {
            this.totalMedications = this.totalMedications - 1
            this.medicationPowderArray.splice(0, 1)
            this.medication.powder.splice(i + 1, 1)
        } else if (data == 'Aerosols') {
            this.totalMedications = this.totalMedications - 1
            this.medicationAerosolsArray.splice(0, 1)
            this.medication.aerosols.splice(i + 1, 1)
        } else if (data == 'MouthWash') {
            this.totalMedications = this.totalMedications - 1
            this.medicationMouthWashArray.splice(0, 1)
            this.medication.mouthwash.splice(i + 1, 1)
        } else if (data == 'Solution') {
            this.totalMedications = this.totalMedications - 1
            this.medicationSolutionArray.splice(0, 1)
            this.medication.solution.splice(i + 1, 1)
        }
    }

    surgeryOptionStatusChange(i) {
        if (this.totalSurgeryOptionsSelected > 2 && this.suregeryOptions[i].status == false) {
            this.toastr.warning("Maximum items can be 3", "Warning")
        } else {
            this.suregeryOptions[i].status = !this.suregeryOptions[i].status
            if (this.suregeryOptions[i].status == true) {
                var temp = this.suregeryOptions[i]
                this.suregeryOptions.splice(i, 1)
                for (var index = this.suregeryOptions.length - 1; index >= 0; index--) {
                    this.suregeryOptions[index + 1] = this.suregeryOptions[index];
                }
                this.suregeryOptions[0] = temp
                this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected + 1
            } else {
                this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected - 1
            }
        }
        console.log(this.totalSurgeryOptionsSelected)
    }

    addTextBoxSuregery(i, j) {
        if (this.totalSurgeryOptionsSelected > 2) {
            this.toastr.warning("Maximum items can be 3", "Warning")
        } else {
            if (this.suregeryOptions[i].div[j].sub_speciality.trim().length > 0 && this.suregeryOptions[i].div[j].procedure_name.trim().length > 0) {
                this.suregeryOptions[i].div.push({
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
        this.suregeryOptions[i].div.splice(j, 1);
        this.totalSurgeryOptionsSelected = this.totalSurgeryOptionsSelected - 1
    }

    saveFollowUp(data) {
        this.followUpDays = data
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
                if (this.currentVaccinationArray.length < 2) {
                    this.currentVaccinationArray.push(data)
                } else {
                    this.toastr.warning("Maximum values can be 2 only", "Warning")
                }
            }
        } else if (this.vaccination_type == 'due') {
            var index = this.dueVaccinationArray.indexOf(data)
            if (index > -1) {
                this.dueVaccinationArray.splice(index, 1)
            } else {
                if (this.dueVaccinationArray.length < 2) {
                    this.dueVaccinationArray.push(data)
                } else {
                    this.toastr.warning("Maximum values can be 2 only", "Warning")
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
            if (this.currentVaccinationArray.map(it => { return it }).indexOf(data) != -1) {
                return 'active'
            } else {
                return ''
            }
        } else {
            if (this.dueVaccinationArray.map(it => { return it }).indexOf(data) != -1) {
                return 'active'
            } else {
                return ''
            }
        }
    }

    saveVaccination() {
        this.finalCurrentVaccinationArray = this.currentVaccinationArray
        this.finalDueVaccinationArray = this.dueVaccinationArray
        this.currentVaccinationComplete = false
        this.dueVaccinationComplete = false
        if (this.finalCurrentVaccinationArray.length > 0) {
            this.currentVaccinationComplete = true
        }
        if (this.finalDueVaccinationArray.length > 0) {
            this.dueVaccinationComplete = true
        }
    }

    openFrequencyModal(data) {
        this.currentFrequency = data
        this.tempFrequency = null
        this.tempFrequencySpecial = null
        this.tempDuration = null
        this.tempDosage = null
        this.tempInjection = null
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
        // if (this.currentFrequency.med_name && this.currentFrequency.med_name.trim().length > 0) {
        //     this.currentFrequency.status = true
        // }
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
        }
    }

    addTempQuantity(data) {
        if (data > 0 && data < 100) {
            this.currentFrequency.quantity = data
        } else {
            this.toastr.warning("Quantity ranges between 1 to 99", "Warning")
        }
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
        this.eyePresComplete  = false
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
            if (this.preConditionComplete == true && this.preCondSelected.length > 0) { return 'half-li active' } else {
                return 'half-li'
            }
        } else if (data == 'Allergy') {
            if (this.allergyComplete == true && this.allergySelected.length > 0) { return 'half-li active' } else {
                return 'half-li'
            }
        } else if (data == 'Body Indicator') {
            if (this.bodyIndicatorComplete == true && this.bodyIndicatorSelected.length > 0) { return 'half-li active' } else {
                return 'half-li'
            }
        } else if (data == 'Clinic Observation') {
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
            if (this.complete == true) { return 'half-li active' } else {
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

    onRemoveOtherPre(data) {
        // var index = this.preCondSelected.indexOf(data.value);
        // if (index > -1) {
        //     this.preCondSelected.splice(index, 1);
        // }
        // console.log(this.preCondSelected)
    }

}