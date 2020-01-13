import { Component, ElementRef, NgZone, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import {} from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { environment } from '../../../environments/environment.prod';
import { MissionService } from '../../providers/mission.service';

declare var $

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.css'],
    providers: [UserService,MissionService]
})
export class EditProfileComponent implements OnInit, AfterViewInit {
    @ViewChild("search")
    public searchElementRef: ElementRef;
    public latitude: number;
    public longitude: number;
    public zoom: number;
    // public searchControl: FormControl;

    activatedtab = 0
    activatedtabHeading = 'Your Contact details'
    condition: boolean;
    formClass1: string;
    formClass2: string;
    isostring

    title: string = 'DocTM';
    lat: number = 51.678418;
    lng: number = 7.809007;

    //harman
    myObject
    scheduleArray
    mondayDisabled = false
    tuesdayDisabled = false
    wednesdayDisabled = false
    thursdayDisabled = false
    fridayDisabled = false
    saturdayDisabled = false
    sundayDisabled = false

    stepOneForm: FormGroup;
    InitialDetail
    p_false = false

    stepTwoForm: FormGroup;
    ProfileDetail
    userOwnClinicStatus

    stepThreeForm: FormGroup;
    ClinicContactDetail
    statesList
    citiesList
    city
    state

    stepFourForm: FormGroup;
    SmartAssistantDetail
    p_false1 = false

    editBeds: FormGroup;

    ClinicServicesDetail
    clinicDiagnosticsList
    OtherClinicService
    otherSelected
    Clinic_Diagnostics
    Clinic_Pharmacy
    Clinic_IPD
    private_beds
    semi_private_beds
    general_beds
    ClinicServicesDetailObject
    hourStep = 1
    minuteStep = 15
    photoIDDocumentsList
    clinicDocumentsList
    medical_certificate
    DocumentsDetail
    getShiftData
    UserDetailForSignUp
    date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }

    lowerCase: boolean = false;
    upperCase: boolean = false
    specialCase: boolean = false;
    lengthCase: boolean = false;
    numberCase: boolean = false;
    lowerCase1: boolean = false;
    upperCase1: boolean = false
    specialCase1: boolean = false;
    lengthCase1: boolean = false;
    numberCase1: boolean = false;
    show_new_shift = true
    show_new_schedule = true

    other_specialization: boolean = false
    totalHours : number
    totalMin : number

    locationSuggestionDB
    loading
    allShifts
    allShiftsClosed
    languageOption
    languageSelected : boolean

    otpPhone
    otpEmail
    otpRes
    otp_verified : boolean

    smartAssistantRegFields
    chooseFromLocation : boolean
    smartAssistantDiv : boolean

    doctorData
    change_phone_div : boolean
    change_email_div : boolean
    change_password_div : boolean
    clinicDoctorDiv : boolean
    smartPhrarmacyDiv : boolean

    smartDiagnosticsDiv : boolean
    smartIpdDiv : boolean
    padCustomizationDiv : boolean
    doctorDetail
    padCustomizationOptions
    doctorsOfSameClinic
    doctorDetailForModal
    doctorPic
    updateSmartAsstPassword : boolean
    updateSmartPharmacyPassword: boolean
    updateSmartIpdPassword : boolean
    updateSmartDiagnosticsPassword: boolean

    smartIpdForm: FormGroup;
    SmartIpdDetail
    p_false2 = false
    smartPharmacyForm: FormGroup;
    SmartPharmacyDetail
    smartDiagnosticsForm: FormGroup;
    SmartDiagnosticsDetail
    p_false3 = false
    p_false4 = false
    experience : number
    //akshay
    otpVerifed:boolean
    verifyPhone
    otpOnPhone
    getDocID
    getDocStatus
    verifyRemoveDocOtp
    optToRemoveDoc
    getDocRemoveID
    optTochangePassword
    verifyChnagePassword
    verifyDoctorOtp
    verifyDocDataOtp
    getVerifyDocId
    getDocVerifyStatus
    fullImagePath

    //
    //harman

    constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
        private userService: UserService, private router: Router,
        private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,
        private route: ActivatedRoute,private missionService: MissionService) {}

    ngOnInit() {        
        this.condition = true;
        this.formClass1 = 'active';

        //harman
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        console.log(this.doctorData)
        this.GetDoctorDetail(this.doctorData.itemId)
        this.scheduleArray = []
        this.myObject = {}
        this.myObject.fromTime = {}
        this.myObject.fromTime.minute = 0
        this.myObject.fromTime.hour = 9
        this.myObject.toTime = {}
        this.myObject.toTime.minute = 0
        this.myObject.toTime.hour = 18
        this.myObject.shifts = []
        this.myObject.Monday = false
        this.myObject.Tuesday = false
        this.myObject.Wednesday = false
        this.myObject.Thursday = false
        this.myObject.Friday = false
        this.myObject.Saturday = false
        this.myObject.Sunday = false

        this.InitialDetail = {}
        this.stepOneForm = this.formBuilder.group({
            'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(10), Validators.maxLength(10)
            ])],
            'email': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            'password': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                Validators.minLength(8)
            ])],
            'confirm_password': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                Validators.minLength(8)
            ])],
        })

        var currentYear = new Date().getFullYear();
        this.ProfileDetail = {}
        this.ProfileDetail.selectedImage = null
        this.ProfileDetail.dob = null
        this.stepTwoForm = this.formBuilder.group({
            'first_name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
            // 'last_name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
            'specialization': [null, Validators.compose([Validators.required])],
            'registration_no': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(5), Validators.maxLength(15)
            ])],
            'qualification': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'professional_affiliation': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'dob': [null, Validators.compose([Validators.required])],
            'practicing_since': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(4), Validators.maxLength(4), Validators.max(currentYear), Validators.min(1950)
            ])],
            'consultation_fee': [null, Validators.compose([Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(1), Validators.maxLength(4), Validators.min(0)
            ])],
            'expertise': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'other_specialization': [null, Validators.compose([Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
        })

        this.ClinicContactDetail = {}
        // this.GetStatesOfCountry()
        this.userOwnClinicStatus = true
        this.ClinicContactDetail.userOwnClinic = "Yes"
        this.stepThreeForm = this.formBuilder.group({
            'clinic_name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'state': [null, Validators.compose([Validators.required])],
            'city': [null, Validators.compose([Validators.required])],
            'area': [null, Validators.compose([Validators.required])],
            'address': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'mobile': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]+-*'),
                Validators.minLength(10), Validators.maxLength(10)
            ])],
            'std_code': [null, Validators.compose([Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(4), Validators.maxLength(10)
            ])],
            'landline': [null, Validators.compose([Validators.pattern('^[^ ]+[0-9]+'),
                Validators.minLength(6), Validators.maxLength(15)
            ])],
            'clinic_email': [null, Validators.compose([Validators.required])],
            'website': [null, Validators.compose([Validators.required])],
        })

        this.SmartAssistantDetail = {}
        this.stepFourForm = this.formBuilder.group({
            'name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(10), Validators.maxLength(10)
            ])],
            'unique_id': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'password': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                Validators.minLength(8)
            ])],
            'confirm_password': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                Validators.minLength(8)
            ])],
            'avgConsTime': [null, Validators.compose([Validators.required])],
            'waitingTime': [null, Validators.compose([Validators.required])]
        })

        this.SmartIpdDetail = {}
        this.smartIpdForm = this.formBuilder.group({
            'name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(10), Validators.maxLength(10)
            ])],
            'unique_id': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'password': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                Validators.minLength(8)
            ])],
            'confirm_password': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                Validators.minLength(8)
            ])]
        })    

        this.SmartPharmacyDetail = {}
        this.smartPharmacyForm = this.formBuilder.group({
            'name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(10), Validators.maxLength(10)
            ])],
            'unique_id': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'password': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                Validators.minLength(8)
            ])],
            'confirm_password': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                Validators.minLength(8)
            ])]
        })    

        this.SmartDiagnosticsDetail = {}
        this.smartDiagnosticsForm = this.formBuilder.group({
            'name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                Validators.minLength(10), Validators.maxLength(10)
            ])],
            'unique_id': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'password': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                Validators.minLength(8)
            ])],
            'confirm_password': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                Validators.minLength(8)
            ])]
        })    

        this.ClinicServicesDetail = []
        this.clinicDiagnosticsList = [
            { name: 'PATHOLOGY', status: false },
            { name: 'ULTRASOUND', status: false },
            { name: 'X-Ray', status: false },
            { name: 'CT-Scan', status: false },
            { name: 'MRI', status: false },
            { name: 'ECG', status: false },
            { name: 'Echo', status: false },
            { name: 'EEG', status: false },
            // { name: 'EMG', status: false },
            { name: 'TMT', status: false },
            { name: 'AUDIOMETRY', status: false },
            { name: 'BONE DENSITOMETRY', status: false },
            { name: 'DOPPLER STUDIES', status: false },
            { name: 'MAMMOGRAPHY', status: false },
            { name: 'UROFLOWMETRY', status: false },
            { name: 'Nerve Test', status: false },
            { name: 'Eye Tests', status: false },
            { name: 'Lung Test', status: false }
        ]
        this.otherSelected = false
        this.ClinicServicesDetailObject = {}
        this.private_beds = 0
        this.semi_private_beds = 0
        this.general_beds = 0

        this.photoIDDocumentsList = [
            { name: 'PAN Card', status: false, document_name: '', image: '', placeholder: 'Pan card number' },
            { name: 'Driving License', status: false, document_name: '', image: '', placeholder: 'Driving license number' },
            { name: 'Aadhaar card', status: false, document_name: '', image: '', placeholder: 'Aadhaar number' },
            { name: 'Passport', status: false, document_name: '', image: '', placeholder: 'Passport number' }
        ]
        this.clinicDocumentsList = [
            { name: 'Latest clinic electricity bill', status: false, image: '' },
            { name: 'Undertaking', status: false, document_name: '', image: '' },
            { name: 'Latest clinic landline phone bill', status: false, image: '' }
        ]

        this.DocumentsDetail = {}
        this.allShifts = []
        this.allShiftsClosed = []
        this.languageOption = ""
        this.languageSelected = false

        this.otp_verified = false
        this.otpVerifed  =false

        this.smartAssistantRegFields = [
            {name:'Patient Name', value:'PatientName',status:true, disable:true, star:true},
            {name:'Mobile Number', value:'MobileNumber',status:true, disable:true, star:true},
            {name:'Age', value:'Age',status:false, disable:false},
            {name:'DOB', value:'DOB',status:true, disable:false, star:true},
            {name:'Gender', value:'Gender',status:true, disable:true, star:true},
            {name:'Address', value:'Address',status:true, disable:true, star:true},
            {name:'Weight', value:'Weight',status:false, disable:false},
            {name:'Height', value:'Height',status:false, disable:false},
            {name:'Body temperature', value:'Bodytemperature',status:false, disable:false},
            {name:'Pulse', value:'Pulse',status:false, disable:false},
            {name:'Blood Pressure(BP)', value:'BloodPressure(BP)',status:false, disable:false},
            {name:'Random Blood Sugar(RBS)', value:'RandomBloodSugar(RBS)',status:false, disable:false},
            {name:'SpO2', value:'SpO2',status:false, disable:false},
            {name:'Patient photo (recommended)', value:'Patientphoto',status:false, disable:false},
            {name:'Patient Test reports', value:'PatientTestreports',status:false, disable:false},
            {name:'Consultation Fee', value:'ConsultationFee',status:false, disable:false}     
        ]
        this.SmartAssistantDetail.reg_fields = []
        for (var j = 0; j < this.smartAssistantRegFields.length; j++) {
            if(this.smartAssistantRegFields[j].status == true){
                this.SmartAssistantDetail.reg_fields.push(this.smartAssistantRegFields[j])
            }
        }
        this.chooseFromLocation = false
        this.smartAssistantDiv = true

        this.padCustomizationOptions = [
            { name: 'Doctor name', value: 'Doctor_name', status: true },
            { name: 'Specialization', value: 'Specialization', status: true },
            { name: 'Qualifications', value: 'Qualifications', status: true },
            { name: 'Medical council registration no.', value: 'registration_no', status: true },
            { name: 'Professional affiliation', value: 'Professional_affiliation', status: true },
            { name: 'Clinic name', value: 'Clinic_name', status: true },
            { name: 'Clinic address', value: 'Clinic_address', status: true },
            { name: 'Appointment contacts', value: 'Appointment_contacts', status: true },
            { name: 'Header note (with text field)', value: 'Header_note', status: true, 
                text : 'PLEASE TAKE PRIOR APPOINTMENT' },
            { name: 'Clinic schedule', value: 'Clinic_schedule', status: true },
            { name: 'Available treatments', value: 'Available_treatments', status: true },
            { name: 'Available services', value: 'Available_services', status: true },
            { name: 'Footer note (with text field)', value: 'Footer_note', status: true, 
                text : 'Not for Medico-Legal Purpose' },
            { name: 'Consultation duration', value: 'Consultation_duration', status: true },
            { name: 'Signature', value: 'Signature', status: true },
            { name: 'Experience', value: 'Experience', status: true }
        ]

        this.doctorsOfSameClinic = []

        this.route.params.subscribe(params => {
            console.log(params)
            this.change_phone_div = false
            this.change_email_div = false
            this.change_password_div = false
            this.clinicDoctorDiv = false
            this.smartPhrarmacyDiv = false
            this.smartDiagnosticsDiv = false
            this.smartIpdDiv = false
            this.padCustomizationDiv = false
            this.activatedtab = -1
            if(params.params == 'clinic_doctors'){
                this.clinicDoctorDiv = true
            } else if(params.params == 'smart_assistant'){
                this.activatetab('Update smart assistant',4)
            } else if(params.params == 'clinic_services'){
                this.activatetab('Update clinic services',5)
            } else if(params.params == 'change_mobile' || params.params == 'change_email' || params.params == 'change_password'){
                this.activatetab('Update Profile',0)
                if(params.params == 'change_mobile'){
                    this.change_phone_div = true 
                }else if(params.params == 'change_email'){
                    this.change_email_div = true
                }else if(params.params == 'change_password'){
                    this.change_password_div = true
                }
                if(this.change_password_div){
                    this.InitialDetail.password = null
                    this.InitialDetail.confirm_password = null
                }else{
                    this.InitialDetail.password = "Hahaha@123"
                    this.InitialDetail.confirm_password = "Hahaha@123"
                }
            } else if(params.params == 'edit_clinic'){
                this.yesform()
                this.activatetab('Update clinic contact details',2)
            } else if(params.params == 'pad_custom'){

            } else if(params.params == 'change_schedule'){
                this.activatetab('Update consultation schedule',3)
            }else if(params.params == 'smart_pharmacy'){
                this.smartPhrarmacyDiv = true
                this.activatedtab = -1
            }else if(params.params == 'smart_diagnostics'){
                this.smartDiagnosticsDiv = true
                this.activatedtab = -1
            }else if(params.params == 'smart_ipd'){
                this.smartIpdDiv = true
                this.activatedtab = -1
            }else if(params.params == 'pad_customization'){
                this.padCustomizationDiv = true
                this.activatedtab = -1
                this.activatedtabHeading = "Prescription pad customization"
            }else if(params.params == 'edit_profile'){
                this.activatetab('Update your profile',1)
            } else{
                this.router.navigate(['header-two-layout']); 
            }
        });
        this.doctorPic = environment.doctorPic
        this.updateSmartAsstPassword = false
        this.updateSmartPharmacyPassword = false
        this.updateSmartIpdPassword = false
        this.updateSmartDiagnosticsPassword = false

        this.experience = currentYear - parseInt(this.doctorData.practicing_since)
        this.OtherClinicService = []
        //harman end 

        //Akshay
        this.editBeds = this.formBuilder.group({
            'generalBeds': [null, Validators.compose([Validators.required, Validators.max(999), Validators.min(0)])],
                
            'semiPrivateBeds': [null, Validators.compose([Validators.required, Validators.max(999), Validators.min(0)])],
            'privateBeds': [null, Validators.compose([Validators.required, Validators.max(999), Validators.min(0)])],
        })
        //akshay end
        this.setAllShiftsForPreview()
    }

    ngAfterViewInit() {
        this.setCurrentPosition();
    }


    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.zoom = 12;
            });
        }
    }

    yesform() {
        this.condition = true;
        this.formClass1 = 'active';
        this.formClass2 = '';
        this.userOwnClinicStatus = true
        this.ClinicContactDetail.userOwnClinic = "Yes"
        this.smartAssistantDiv = true
        this.SmartAssistantDetail.unique_id = ''
        this.SmartAssistantDetail.password = ''
        this.SmartAssistantDetail.confirm_password = ''
    }
    noform() {
        this.condition = false;
        this.formClass1 = '';
        this.formClass2 = 'active';
        this.userOwnClinicStatus = false
        this.ClinicContactDetail = {}
        this.ClinicContactDetail.userOwnClinic = "No"
        this.stepThreeForm.reset()
        this.ClinicContactDetail.clinic_id = null
        this.chooseFromLocation = true
        this.smartAssistantDiv = false
        this.SmartAssistantDetail.unique_id = 'already@doctm.com'
        this.SmartAssistantDetail.password = 'NoPassword@doctm1'
        this.SmartAssistantDetail.confirm_password = 'NoPassword@doctm1'
    }

    activatetab(data, i) {
        // if (i == 1) {
        //     if (!(this.InitialDetail.phone && this.InitialDetail.email && this.InitialDetail.password &&
        //         this.InitialDetail.confirm_password && this.p_false == false && this.stepOneForm.valid)) {
        //        return 
        //     }
        // } else if (i == 2) {
        //     if (!(this.stepTwoForm.valid)) {
        //        return 
        //     }
        // } else if (i == 3) {
        //     if (this.userOwnClinicStatus == false && this.ClinicContactDetail.clinic_id == null) {
        //        return 
        //     // } else if (!(this.stepThreeForm.valid && this.userOwnClinicStatus == true && this.ClinicContactDetail.clinic_id != null)) {
        //     } else if (!this.stepThreeForm.valid && this.userOwnClinicStatus == true || this.ClinicContactDetail.clinic_id == null) {
        //         return 
        //     }
        // } else if (i == 4) {
        //     if (!(this.scheduleArray.length > 0)) {
        //        return 
        //     }
        // } else if (i == 5) {
        //     if (!this.SmartAssistantDetail.smartAssistant || (this.SmartAssistantDetail.smartAssistant == 'Yes' && !this.stepFourForm.valid)) {
        //         return 
        //     }
        // } else if (i == 7) {
        //     if (!this.ClinicServicesDetailObject.clinicServicesStatus) {
        //         return 
        //     } else if (this.ClinicServicesDetailObject.clinicServicesStatus == 'Yes') {
        //         if (this.private_beds < 0 && this.Clinic_IPD) {
        //             this.toastr.warning('Invalid number of private beds', 'Warning')
        //             return
        //         } else if (this.semi_private_beds < 0 && this.Clinic_IPD) {
        //             this.toastr.warning('Invalid number of semi private beds', 'Warning')
        //             return
        //         } else if (this.general_beds < 0 && this.Clinic_IPD) {
        //             this.toastr.warning('Invalid number of general beds', 'Warning')
        //             return
        //         }
        //         if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
        //             this.otherSelected == true) {
        //             this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning')
        //             return
        //         }
        //         if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
        //             this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
        //             return
        //         }
        //     }
        // } else if (i == 6) {
        //     if (!(this.languageSelected)) {
        //        return 
        //     }
        // } 
        this.activatedtab = i
        this.activatedtabHeading = data
    }
    increasetab() {
        if (this.activatedtab < 7) {
            this.activatedtab = this.activatedtab + 1
        }
    }
    getClass(i) {
        if (i == this.activatedtab) {
            return 'active'
        } else if (i == 3) {
            if (this.scheduleArray.length > 0) {
                return 'completed'
            } else {
                return ''
            }
        } else if (i == 0) {
            if (this.InitialDetail.phone && this.InitialDetail.email && this.InitialDetail.password &&
                this.InitialDetail.confirm_password && this.p_false == false && this.stepOneForm.valid) {
                return 'completed'
            } else {
                return ''
            }
        } else if (i == 1) {
            if (this.stepTwoForm.valid) {
                return 'completed'
            } else {
                return ''
            }
        } else if (i == 2) {
            if (this.userOwnClinicStatus == false && this.ClinicContactDetail.clinic_id != null) {
                return 'completed'
            } else if (this.stepThreeForm.valid && this.userOwnClinicStatus == true && this.ClinicContactDetail.clinic_id != null) {
                return 'completed'
            } else {
                return ''
            }
        } else if (i == 4) {
            if (this.SmartAssistantDetail.smartAssistant == 'No') {
                return 'completed'
            } else if (this.stepFourForm.valid && this.SmartAssistantDetail.smartAssistant == 'Yes') {
                return 'completed'
            } else {
                return ''
            }
        } else if (i == 5) {
            if (this.ClinicServicesDetailObject.clinicServicesStatus == 'No') {
                return 'completed'
            } else if (this.ClinicServicesDetailObject.clinicServicesStatus == 'Yes') {
                if (this.private_beds < 0 && this.Clinic_IPD) {
                    this.toastr.warning('Invalid number of private beds', 'Warning')
                    return
                } else if (this.semi_private_beds < 0 && this.Clinic_IPD) {
                    this.toastr.warning('Invalid number of semi private beds', 'Warning')
                    return
                } else if (this.general_beds < 0 && this.Clinic_IPD) {
                    this.toastr.warning('Invalid number of general beds', 'Warning')
                    return
                }
                if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
                    this.otherSelected == true) {
                    this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning')
                    return
                }
                if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                    this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
                    return
                }
                return 'completed'
            } else {
                return ''
            }
        } else if (i == 7) {
            if (this.languageSelected) {
                return 'completed'
            } else {
                return ''
            }
        }
    }

    addShift(type) {
        if (this.show_new_shift == false) {
            this.show_new_shift = true
            this.myObject.fromTime = {}
            this.myObject.fromTime.minute = 0
            this.myObject.fromTime.hour = this.myObject.shifts[this.myObject.shifts.length-1].toTime.hour
            // this.myObject.fromTime.hour = 9
            this.myObject.toTime = {}
            this.myObject.toTime.minute = 0
            this.myObject.toTime.hour = this.myObject.shifts[this.myObject.shifts.length-1].toTime.hour + 1
            // this.myObject.toTime.hour = 18
        } else {
            var boolean = false
            if (this.myObject.fromTime == null || this.myObject.fromTime == '' || this.myObject.fromTime == undefined ||
                this.myObject.toTime == null || this.myObject.toTime == '' || this.myObject.toTime == undefined) {
                this.toastr.warning('Invalid time selected', 'Warning')
                boolean = true
            }
            // console.log(this.myObject)
            // if(this.myObject.fromTime.hour>=this.myObject.toTime.hour || (this.myObject.fromTime.hour==this.myObject.toTime.hour
            //  && this.myObject.fromTime.minute>=this.myObject.toTime.minute)){
            //     this.toastr.warning('Invalid Time','Warning')
            //     return
            // }
            if(this.myObject.fromTime.hour>this.myObject.toTime.hour){
                this.toastr.warning('Invalid Time','Warning')
                return   
            }else if(this.myObject.fromTime.hour==this.myObject.toTime.hour
             && this.myObject.fromTime.minute>=this.myObject.toTime.minute){
                this.toastr.warning('Invalid Time','Warning')
                return   
            }
            for (var i = 0; i < this.myObject.shifts.length; i++) {
                if (
                    this.myObject.shifts[i].fromTime.hour == this.myObject.fromTime.hour &&
                    this.myObject.shifts[i].fromTime.minute == this.myObject.fromTime.minute &&
                    this.myObject.shifts[i].toTime.minute == this.myObject.toTime.minute &&
                    this.myObject.shifts[i].toTime.minute == this.myObject.toTime.minute
                ) {
                    boolean = true
                    this.toastr.warning('Same schedule already exists', 'Warning');
                    return
                }
                if(this.myObject.shifts[i].fromTime.hour>this.myObject.shifts[i].toTime.hour){
                    this.toastr.warning('Invalid Time','Warning')
                    return   
                }else if(this.myObject.shifts[i].fromTime.hour==this.myObject.shifts[i].toTime.hour
                 && this.myObject.shifts[i].fromTime.minute>=this.myObject.shifts[i].toTime.minute){
                    this.toastr.warning('Invalid Time','Warning')
                    return   
                }
            }
            if (boolean == false) {
                var object = {
                    fromTime: this.myObject.fromTime,
                    toTime: this.myObject.toTime
                }
                this.show_new_shift = false
                this.myObject.shifts.push(object)
                this.myObject.fromTime = {}
                this.myObject.fromTime.minute = 0
                this.myObject.fromTime.hour = this.myObject.shifts[this.myObject.shifts.length-1].toTime.hour + 1
                this.myObject.toTime = {}
                this.myObject.toTime.minute = 0
                this.myObject.toTime.hour = this.myObject.shifts[this.myObject.shifts.length-1].toTime.hour + 1
                if (type == 'show') {
                    this.show_new_shift = true
                }
                this.myObject.show_new_shift = this.show_new_shift
            }
        }

        //Akshay
        // console.log(this.myObject.shifts)
        // console.log(this.myObject.shifts[i].fromTime.hour)
        // console.log(this.myObject.shifts[i].toTime.hour)
      
        //Akshay
    }

    hideNewShiftSchedule(i) {
        this.scheduleArray[i].show_new_shift = false
    }

    addShiftInArray(i) {
        if (this.scheduleArray[i].show_new_shift == false) {
            this.scheduleArray[i].show_new_shift = true
            this.scheduleArray[i].fromTime = {}
            this.scheduleArray[i].fromTime.hour = this.scheduleArray[this.scheduleArray.length-1].toTime.hour +1
            this.scheduleArray[i].fromTime.minute = 0
            this.scheduleArray[i].toTime = {}
            this.scheduleArray[i].toTime.hour = 0
            this.scheduleArray[i].toTime.minute = this.scheduleArray[this.scheduleArray.length-1].toTime.hour + 1
        } else {
            var boolean = false
            if (this.scheduleArray[i].fromTime == null || this.scheduleArray[i].fromTime == '' || this.scheduleArray[i].fromTime == undefined ||
                this.scheduleArray[i].toTime == null || this.scheduleArray[i].toTime == '' || this.scheduleArray[i].toTime == undefined) {
                this.toastr.warning('Invalid time selected', 'Warning')
                boolean = true
            }
            if (this.scheduleArray.length > 0) {
                for (var j = 0; j < this.scheduleArray.length; j++) {
                    for (var k = 0; k < this.scheduleArray[i].shifts.length; k++) {
                        if (
                            this.scheduleArray[j].shifts[k].fromTime.hour == this.scheduleArray[i].fromTime.hour &&
                            this.scheduleArray[j].shifts[k].fromTime.minute == this.scheduleArray[i].fromTime.minute &&
                            this.scheduleArray[j].shifts[k].toTime.minute == this.scheduleArray[i].toTime.minute &&
                            this.scheduleArray[j].shifts[k].toTime.minute == this.scheduleArray[i].toTime.minute
                        ) {
                            boolean = true
                            this.toastr.warning('Same schedule already exists', 'Warning');
                            return
                        }
                    }
                }
            }
            if (boolean == false) {
                var object = {
                    fromTime: this.scheduleArray[i].fromTime,
                    toTime: this.scheduleArray[i].toTime
                }
                this.scheduleArray[i].shifts.push(object)
                this.scheduleArray[i].fromTime = {}
                this.scheduleArray[i].fromTime.hour = this.scheduleArray[this.scheduleArray.length-1].toTime.hour + 1
                this.scheduleArray[i].fromTime.minute = 0
                this.scheduleArray[i].toTime = {}
                this.scheduleArray[i].toTime.hour = this.scheduleArray[this.scheduleArray.length-1].toTime.hour + 1
                this.scheduleArray[i].toTime.minute = 0
                this.scheduleArray[i].show_new_shift = false
            }
            console.log(this.scheduleArray)
           
        }
    }
    deleteShift(j) {
        this.myObject.shifts.splice(j, 1);
    }

    deleteShiftFromArray(i, j) {
        this.scheduleArray[i].shifts.splice(j, 1);
    }

    deleteSchedule(i) {
        this.scheduleArray.splice(i, 1);
        this.resetButtonsAfterAnyChangeInSchedule()
    }

    addAnotherSchedule() {
        this.show_new_shift = true
        if (this.show_new_schedule == false) {
            this.show_new_schedule = true
        } else {
            var boolean = false
            if (this.myObject.Monday == false &&
                this.myObject.Tuesday == false &&
                this.myObject.Wednesday == false &&
                this.myObject.Thursday == false &&
                this.myObject.Friday == false &&
                this.myObject.Saturday == false &&
                this.myObject.Sunday == false
            ) {
                boolean = true
                this.toastr.warning('Please select atleast one day', 'Warning');
                return
            }
            if (this.myObject.shifts.length < 1) {
                boolean = true
                this.toastr.warning('Please enter atleast one shift', 'Warning');
                return
            }
            for (var i = 0; i < this.scheduleArray.length; i++) {
                if (this.scheduleArray[i].Monday == false &&
                    this.scheduleArray[i].Tuesday == false &&
                    this.scheduleArray[i].Wednesday == false &&
                    this.scheduleArray[i].Thursday == false &&
                    this.scheduleArray[i].Friday == false &&
                    this.scheduleArray[i].Saturday == false &&
                    this.scheduleArray[i].Sunday == false
                ) {
                    boolean = true
                    this.toastr.warning('Please select atleast one day', 'Warning');
                    return;
                }
                if (this.scheduleArray[i].shifts.length < 1) {
                    boolean = true
                    this.toastr.warning('Please enter atleast one shift', 'Warning');
                    return;
                }
            }
            if (boolean == false) {
                this.scheduleArray.push(this.myObject)
                console.log(this.scheduleArray)
                this.resetButtonsAfterAnyChangeInSchedule()
            }
        }
    }

    changeDay(data, status, i) {
        if (data == false && status == 1) {
            this.myObject.Monday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Monday = false
                }
            }
            this.mondayDisabled = false
        } else if (data == true && status == 1) {
            this.myObject.Monday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Monday = false
                }
            }
            this.mondayDisabled = true
        }
        if (data == false && status == 2) {
            this.myObject.Tuesday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Tuesday = false
                }
            }
            this.tuesdayDisabled = false
        } else if (data == true && status == 2) {
            this.myObject.Tuesday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Tuesday = false
                }
            }
            this.tuesdayDisabled = true
        }
        if (data == false && status == 3) {
            this.myObject.Wednesday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Wednesday = false
                }
            }
            this.wednesdayDisabled = false
        } else if (data == true && status == 3) {
            this.myObject.Wednesday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Wednesday = false
                }
            }
            this.wednesdayDisabled = true
        }
        if (data == false && status == 4) {
            this.myObject.Thursday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Thursday = false
                }
            }
            this.thursdayDisabled = false
        } else if (data == true && status == 4) {
            this.myObject.Thursday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Thursday = false
                }
            }
            this.thursdayDisabled = true
        }
        if (data == false && status == 5) {
            this.myObject.Friday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Friday = false
                }
            }
            this.fridayDisabled = false
        } else if (data == true && status == 5) {
            this.myObject.Friday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Friday = false
                }
            }
            this.fridayDisabled = true
        }
        if (data == false && status == 6) {
            this.myObject.Saturday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Saturday = false
                }
            }
            this.saturdayDisabled = false
        } else if (data == true && status == 6) {
            this.myObject.Saturday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Saturday = false
                }
            }
            this.saturdayDisabled = true
        }
        if (data == false && status == 7) {
            this.myObject.Sunday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Sunday = false
                }
            }
            this.sundayDisabled = false
        } else if (data == true && status == 7) {
            this.myObject.Sunday = false
            for (var ii = 0; ii < this.scheduleArray.length; ii++) {
                if (i != ii) {
                    this.scheduleArray[ii].Sunday = false
                }
            }
            this.sundayDisabled = true
        }
    }

    resetButtonsAfterAnyChangeInSchedule() {
        this.myObject = {}
        this.myObject.fromTime = {}
        this.myObject.fromTime.minute = 0
        this.myObject.fromTime.hour = 9//this.myObject.shifts[this.myObject.shifts.length-1].toTime.hour
        this.myObject.toTime = {}
        this.myObject.toTime.minute = 0
        this.myObject.toTime.hour = 18//this.myObject.shifts[this.myObject.shifts.length-1].toTime.hour + 1
        this.myObject.shifts = []
        this.myObject.Monday = false
        this.myObject.Tuesday = false
        this.myObject.Wednesday = false
        this.myObject.Thursday = false
        this.myObject.Friday = false
        this.myObject.Saturday = false
        this.myObject.Sunday = false

        this.mondayDisabled = false
        this.tuesdayDisabled = false
        this.wednesdayDisabled = false
        this.thursdayDisabled = false
        this.fridayDisabled = false
        this.saturdayDisabled = false
        this.sundayDisabled = false
        for (var i = 0; i < this.scheduleArray.length; i++) {
            if (this.scheduleArray[i].Monday == true) {
                this.mondayDisabled = true
            }
            if (this.scheduleArray[i].Tuesday == true) {
                this.tuesdayDisabled = true
            }
            if (this.scheduleArray[i].Wednesday == true) {
                this.wednesdayDisabled = true
            }
            if (this.scheduleArray[i].Thursday == true) {
                this.thursdayDisabled = true
            }
            if (this.scheduleArray[i].Friday == true) {
                this.fridayDisabled = true
            }
            if (this.scheduleArray[i].Saturday == true) {
                this.saturdayDisabled = true
            }
            if (this.scheduleArray[i].Sunday == true) {
                this.sundayDisabled = true
            }
        }
    }

    saveConsultationSchedule() {
        var boolean = false
        if (this.show_new_schedule == true) {
            if (this.myObject.Monday == false &&
                this.myObject.Tuesday == false &&
                this.myObject.Wednesday == false &&
                this.myObject.Thursday == false &&
                this.myObject.Friday == false &&
                this.myObject.Saturday == false &&
                this.myObject.Sunday == false
            ) {
                boolean = true
                this.toastr.warning('Please select atleast one day', 'Warning');
            }
            if (this.myObject.shifts.length < 1) {
                boolean = true
                this.toastr.warning('Please enter atleast one shift', 'Warning');
            }
        }
        for (var i = 0; i < this.myObject.shifts.length; i++) {
            if(this.myObject.shifts[i].fromTime.hour>this.myObject.shifts[i].toTime.hour){
                this.toastr.warning('Invalid Time','Warning')
                return   
            }else if(this.myObject.shifts[i].fromTime.hour==this.myObject.shifts[i].toTime.hour
             && this.myObject.shifts[i].fromTime.minute>=this.myObject.shifts[i].toTime.minute){
                this.toastr.warning('Invalid Time','Warning')
                return   
            }
        }

        if (this.scheduleArray.length > 0) {
            for (var i = 0; i < this.scheduleArray.length; i++) {
                if (this.scheduleArray[i].Monday == false &&
                    this.scheduleArray[i].Tuesday == false &&
                    this.scheduleArray[i].Wednesday == false &&
                    this.scheduleArray[i].Thursday == false &&
                    this.scheduleArray[i].Friday == false &&
                    this.scheduleArray[i].Saturday == false &&
                    this.scheduleArray[i].Sunday == false
                ) {
                    boolean = true
                    this.toastr.warning('Please select atleast one day', 'Warning');
                    return;
                }
                if (this.scheduleArray[i].shifts.length < 1) {
                    boolean = true
                    this.toastr.warning('Please enter atleast one shift', 'Warning');
                    return;
                }
                for (var j = 0; j < this.scheduleArray[i].shifts.length; j++) {
                    if(this.scheduleArray[i].shifts[j].fromTime.hour>this.scheduleArray[i].shifts[j].toTime.hour){
                        this.toastr.warning('Invalid Time','Warning')
                        return   
                    }else if(this.scheduleArray[i].shifts[j].fromTime.hour==this.scheduleArray[i].shifts[j].toTime.hour
                     && this.scheduleArray[i].shifts[j].fromTime.minute>=this.scheduleArray[i].shifts[j].toTime.minute){
                        this.toastr.warning('Invalid Time','Warning')
                        return   
                    }
                }
            }
        }
        if (boolean == false) {
            this.loading = true
            if (this.show_new_schedule == true) {
                this.scheduleArray.push(this.myObject)
            }
            this.show_new_schedule = false
            let toUpdate = {
                consultation_schedule: this.scheduleArray
            }
            let ob = {
                itemId : this.doctorData.itemId,
                toUpdate : toUpdate
            }
            this.userService.EditDoctorProfile(ob).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.response == true) {
                    this.toastr.success(data.message, 'Success')
                    this.GetDoctorDetailAndNavigateToHome()
                } else {
                    this.toastr.error(data.message, 'Error')
                }
            }, err => {
                console.log(err);
            })
        }
    }

    values = '';

    onKey(event: any) {
        this.values = event.target.value;
        if (this.InitialDetail.password == this.values) {
            this.p_false = false;
        } else {
            this.p_false = true;
        }
    }

    openOTPModal(){
        if(this.doctorDetail.phone == this.InitialDetail.phone && this.doctorDetail.email == this.InitialDetail.email && !this.change_password_div){
            this.toastr.warning("No changes found","Warning")
            return
        }else{
            if(this.change_password_div && (this.InitialDetail.current_password==null || this.InitialDetail.current_password =='' || this.InitialDetail.current_password.trim().length<1)){
                this.toastr.warning("Enter current password","Warning")
                return
            }
            if(parseInt( this.optTochangePassword) == this.verifyChnagePassword){
                if(this.change_password_div){
                    let ob = {
                        itemId : this.doctorData.itemId,
                        InitialDetail : this.InitialDetail
                    }    
                    this.userService.ChangePasswordDoctor(ob).subscribe(data => {
                        console.log(data)
                        this.loading = false
                        if (data.response == true) {
                            this.toastr.success(data.message, 'Success')
                            $("#change-password").modal("hide");
                            this.ngOnInit()
                            localStorage.removeItem(localStorage['doctorDetails']);
                            //localStorage.clear();
                            ///this.router.navigate(['header-one-layout/smartClinicLogin']); 
                            //this.router.navigateByUrl('/header-two-layout/dashboard');
                        } else {
                            this.toastr.error(data.message, 'Error')
                        }
                    }, err => {
                        console.log(err);
                    })
                }else{                
                    this.otpRes = {}
                    this.loading = true    
                    var type
                    if(this.change_phone_div){
                        type = 'phone'
                    }
                    if(this.change_email_div){
                        type = 'email'
                    }
                    if(this.change_password_div){
                        type = 'passsword'
                    }
                    let ob = {
                        itemId : this.doctorData.itemId,
                        InitialDetail : this.InitialDetail,
                        type : type
                    }    
                    this.userService.GenerateOTPUpdate(ob).subscribe(data => {
                        console.log(data)
                        this.loading = false
                        if (data.response == true) {
                            this.otpRes.otpEmail = data.otpEmail
                            this.otpRes.otpPhone = data.otpPhone
                            this.toastr.success(data.message, 'Success')
                            if(type == 'phone'){
                                this.otpEmail = data.otpEmail
                            }else if(type == 'email'){
                                this.otpPhone = data.otpPhone
                            }else if(type == 'passsword'){

                            }
                            $("#myModal").modal("show");
                        } else {
                            this.toastr.error(data.message, 'Error')
                        }
                    }, err => {
                        console.log(err);
                    })
                }
            }else{
                this.toastr.error('Wrong OTP', 'Error')
            }
        }
    }

    verifyOTP(){
        if(this.otpPhone == parseInt(this.otpRes.otpPhone) && this.otpEmail == parseInt(this.otpRes.otpEmail)){
            let ob = {
                itemId : this.doctorData.itemId,
                InitialDetail : this.InitialDetail
            }
            this.userService.UpdateDoctorEmailPhone(ob).subscribe(data => {
                console.log(data)
                this.loading = false
                if(data.response == true){
                    $("#myModal").modal("hide");
                    this.toastr.success(data.message, 'Success')
                    this.GetDoctorDetailAndNavigateToHome()
                }
            }, err => {
                console.log(err);
            })
        }else{
            this.toastr.error('Wrong OTP entered', 'Error')
        }
    }

    saveStepOneDetails() {
        if (this.activatedtab < 7) {
            this.activatedtab = this.activatedtab + 1
            console.log(this.InitialDetail)
        }
    }

    onupload(evt: any) {
        this.ProfileDetail.selectedImage = null
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        const file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg') {
            return;
        }
        const fr = new FileReader();
        fr.onloadend = (loadEvent) => {
            let mainImage = fr.result;
            this.ProfileDetail.selectedImage = mainImage;
            this.ProfileDetail.imageAlready = false
        };
        fr.readAsDataURL(file);
    }

    saveStepTwoDetails() {
        if (this.other_specialization == true && (this.ProfileDetail.other_specialization == null || this.ProfileDetail.other_specialization == '' ||
                this.ProfileDetail.other_specialization == undefined)) {
            this.toastr.warning("Invalid Specialization", "Warning")
        } else {
            if (this.other_specialization == true) {
                this.ProfileDetail.specialization = this.ProfileDetail.other_specialization
            }
            console.log(this.ProfileDetail)
            if(this.ProfileDetail.type_of_doctor == "normal_doctor"){
                this.ProfileDetail.doctm_clinic_id
            }
            let ob = {
                itemId : this.doctorData.itemId,
                ProfileDetail: this.ProfileDetail
            }
            this.loading = true            
            this.userService.UpdateDoctorPersonalDetail(ob).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.response == true) {
                    this.toastr.success(data.message, 'Success')
                    this.GetDoctorDetailAndNavigateToHome()
                } else {
                    this.toastr.error(data.message, 'Error')
                }
            }, err => {
                console.log(err);
            })
        }
    }

    saveStepThreeDetails() {
        this.ClinicContactDetail.lat = this.lat
        this.ClinicContactDetail.lng = this.lng
        let toUpdate = {
            clinic_details: this.ClinicContactDetail
        }
        let ob = {
            itemId : this.doctorData.itemId,
            toUpdate : toUpdate
        }
        this.loading = true            
        this.userService.EditDoctorProfile(ob).subscribe(data => {
            console.log(data)
            this.loading = false
            if (data.response == true) {
                this.toastr.success(data.message, 'Success')
                this.GetDoctorDetailAndNavigateToHome()
            } else {
                this.toastr.error(data.message, 'Error')
            }
        }, err => {
            console.log(err);
        })
    }

    values1 = '';

    onKey1(event: any) {
        this.values1 = event.target.value;
        if (this.SmartAssistantDetail.password == this.values1) {
            this.p_false1 = false;
        } else {
            this.p_false1 = true;
        }
    }


    saveStepFourDetails(status) {
        if (this.SmartAssistantDetail.password !== this.SmartAssistantDetail.confirm_password) {
            this.p_false1 = true
        } else {
            this.SmartAssistantDetail.smartAssistant = "Yes"
            if(!this.SmartAssistantDetail.id){
                this.SmartAssistantDetail.id = 0
            }
            var object = {
                doctor_id: this.doctorData.itemId,
                doctm_clinic_id: this.doctorData.doctm_clinic_id,
                SmartAssistantDetail: this.SmartAssistantDetail
            }
            this.userService.UpdateSmartAssistantByDoctor(object).subscribe(data=>{
                console.log(data)
                if (data.response == true) {
                    this.toastr.success(data.message, 'Success')
                    this.GetDoctorDetailAndNavigateToHome()
                } else {
                    this.toastr.error(data.message, 'Error')
                }
            }, err => {
                console.log(err);
            })    
        }
    }

    push(data, i) {
        if (data != 1) {
            if (this.ClinicServicesDetail.indexOf(data) == -1) {
                this.ClinicServicesDetail.push(data)
                this.clinicDiagnosticsList[i].status = true
            } else {
                let index = this.ClinicServicesDetail.indexOf(data)
                this.clinicDiagnosticsList[i].status = false
                let a = this.ClinicServicesDetail.splice(index, 1)
            }
        }
        if (this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
            this.Clinic_Diagnostics = false
        } else {
            this.Clinic_Diagnostics = true
        }
        console.log(this.ClinicServicesDetail)
    }

    saveStepFiveDetails(status) {
        var boolean = false
        if (this.Clinic_Diagnostics == false) {
            this.ClinicServicesDetail = []
            for (var i = 0; i < this.clinicDiagnosticsList.length; i++) {
                this.clinicDiagnosticsList[i].status = false
            }
        }
        if (status == 1) {
            if (this.private_beds < 0 && this.Clinic_IPD) {
                boolean = true
                this.toastr.warning('Invalid number of private beds', 'Warning')
                return
            } else if (this.semi_private_beds < 0 && this.Clinic_IPD) {
                boolean = true
                this.toastr.warning('Invalid number of semi private beds', 'Warning')
                return
            } else if (this.general_beds < 0 && this.Clinic_IPD) {
                boolean = true
                this.toastr.warning('Invalid number of general beds', 'Warning')
                return
            }
            if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) && 
                this.otherSelected == true){
                boolean = true;
                this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning')
                return
            }
            if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                boolean = true;
                this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
                return
            }
            if (!this.Clinic_IPD) {
                this.private_beds = null
                this.general_beds = null
                this.semi_private_beds = null
            }
        }
        if (this.activatedtab < 7 && boolean == false) {
            if (this.otherSelected == false){
                this.OtherClinicService = []
            }
            if (status == 0) {
                this.ClinicServicesDetailObject = {}
                this.ClinicServicesDetailObject.clinicServicesStatus = "No"
                this.ClinicServicesDetail = []
                this.Clinic_Diagnostics = false
                this.Clinic_Pharmacy = false
                this.Clinic_IPD = false
                this.private_beds = null
                this.semi_private_beds = null
                this.general_beds = null
                for (var i = 0; i < this.clinicDiagnosticsList.length; i++) {
                    this.clinicDiagnosticsList[i].status = false
                }
            } else {
                this.ClinicServicesDetailObject = {
                    ClinicServicesDetail: this.ClinicServicesDetail,
                   // Clinic_Diagnostics: this.Clinic_Diagnostics,
                   // Clinic_Pharmacy: this.Clinic_Pharmacy,
                    //Clinic_IPD: this.Clinic_IPD,
                    private_beds: this.private_beds,
                    semi_private_beds: this.semi_private_beds,
                    general_beds: this.general_beds,
                    clinicServicesStatus: "Yes",
                    OtherClinicService : this.OtherClinicService
                }
            }
            console.log(this.ClinicServicesDetailObject)
            let toUpdate = {
                clinic_services: this.ClinicServicesDetailObject
            }
            let ob = {
                itemId : this.doctorData.itemId,
                toUpdate : toUpdate
            }
            this.loading = true            
            this.userService.EditDoctorProfile(ob).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.response == true) {
                    this.toastr.success(data.message, 'Success')
                    this.GetDoctorDetailAndNavigateToHome()
                } else {
                    this.toastr.error(data.message, 'Error')
                }
            }, err => {
                console.log(err);
            })
        }
    }

    enablePhotoId(index) {
        for (var i = 0; i < this.photoIDDocumentsList.length; i++) {
            if (i == index) {
                this.photoIDDocumentsList[index].status = true;
            } else {
                this.photoIDDocumentsList[i].status = false
                this.photoIDDocumentsList[i].document_name = ''
                this.photoIDDocumentsList[i].image = ''
            }
        }
    }

    onuploadPhotoId(evt: any, index) {
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        const file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'application/pdf') {
            return;
        }
        const fr = new FileReader();
        fr.onloadend = (loadEvent) => {
            let mainImage = fr.result;
            this.photoIDDocumentsList[index].image = mainImage;
            console.log(this.photoIDDocumentsList[index])
        };
        fr.readAsDataURL(file);
    }

    enableClinicDocumentId(index) {
        for (var i = 0; i < this.clinicDocumentsList.length; i++) {
            if (i == index) {
                this.clinicDocumentsList[index].status = true;
            } else {
                this.clinicDocumentsList[i].status = false
                this.clinicDocumentsList[i].image = ''
            }
        }
    }

    onuploadClinicDocument(evt: any, index) {
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        const file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'application/pdf') {
            return;
        }
        const fr = new FileReader();
        fr.onloadend = (loadEvent) => {
            let mainImage = fr.result;
            this.clinicDocumentsList[index].image = mainImage;
            console.log(this.clinicDocumentsList[index])
        };
        fr.readAsDataURL(file);
    }

    onuploadMedicalCert(evt: any, index) {
        this.medical_certificate = null
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        const file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg' && file.type !== 'application/pdf') {
            return;
        }
        const fr = new FileReader();
        fr.onloadend = (loadEvent) => {
            let mainImage = fr.result;
            this.medical_certificate = mainImage;
        };
        fr.readAsDataURL(file);
    }


    saveStepSevenDetails(){
        this.languageSelected = true
        this.activatedtab = 6
    }

    saveStepSixDetails(status) {
        console.log(this.medical_certificate)
        var boolean = false
        if (!this.InitialDetail || !this.p_false == false || !this.stepOneForm.valid) {
            boolean = true;
            this.toastr.warning('Error in YOUR CONTACT DETAILS ', 'Warning')
            return
        } else if (!this.stepTwoForm.valid && this.ClinicContactDetail.clinic_id == null) {
            boolean = true;
            this.toastr.warning('Error in CREATE YOUR PROFILE ', 'Warning')
            return
        } else if ((this.userOwnClinicStatus == true) && (!this.stepThreeForm.valid || this.userOwnClinicStatus == false)) {
            boolean = true;
            this.toastr.warning('Error in CLINIC CONTACT DETAILS ', 'Warning')
            return
        } else if (this.scheduleArray.length < 1) {
            boolean = true;
            this.toastr.warning('Error in CONSULATATION SCHEDULE ', 'Warning')
            return
        } else if (!this.stepFourForm.valid && this.SmartAssistantDetail.smartAssistant == 'Yes') {
            boolean = true;
            this.toastr.warning('Error in SMART ASSISTANT ', 'Warning')
            return
        } else if (!this.ClinicServicesDetailObject.clinicServicesStatus){
            boolean = true;
            this.toastr.warning('Error in CLINIC SERVICES ', 'Warning')
            return            
        } else if (this.ClinicServicesDetailObject.clinicServicesStatus == 'Yes') {
            if (this.private_beds < 0 && this.Clinic_IPD) {
                boolean = true
                this.toastr.warning('Invalid number of private beds', 'Warning')
                return
            } else if (this.semi_private_beds < 0 && this.Clinic_IPD) {
                boolean = true
                this.toastr.warning('Invalid number of semi private beds', 'Warning')
                return
            } else if (this.general_beds < 0 && this.Clinic_IPD) {
                boolean = true
                this.toastr.warning('Invalid number of general beds', 'Warning')
                return
            }
            if ((this.OtherClinicService == null || this.OtherClinicService == undefined || this.OtherClinicService == '' || this.OtherClinicService.length < 1) &&
                this.otherSelected == true) {
                boolean = true;
                this.toastr.warning('Please enter value in "Clinic Diagnostics"', 'Warning')
                return
            }
            if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                boolean = true;
                this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
                return
            }
        } else {
            var true_happens = false
            for (var i = 0; i < this.photoIDDocumentsList.length; i++) {
                if (this.photoIDDocumentsList[i].status == true && (this.photoIDDocumentsList[i].document_name == '' ||
                        this.photoIDDocumentsList[i].document_name.trim().length < 1)) {
                    boolean = true;
                    true_happens = true
                    this.toastr.warning('Invalid document name', 'Warning')
                    return;
                } else if (this.photoIDDocumentsList[i].status == true) {
                    true_happens = true
                    break;
                } else if (this.photoIDDocumentsList[i].status == true && this.photoIDDocumentsList[i].image == '') {
                    boolean = true;
                    true_happens = true
                    this.toastr.warning('Please uplaod PhotoID Proof', 'Warning')
                    return
                }
            }
            if (true_happens == false) {
                boolean = true;
                this.toastr.warning('Please upload PHOTO ID', 'Warning')
                return
            }
            var true_happens1 = false
            for (var i = 0; i < this.clinicDocumentsList.length; i++) {
                if (this.clinicDocumentsList[i].status == true) {
                    if(this.clinicDocumentsList[i].image == ''){
                        this.toastr.warning('Please uplaod Clinic certificate', 'Warning')
                        return
                    }else{
                        true_happens1 = true
                        break;
                    }
                }
            }
            if (true_happens1 == false) {
                boolean = true;
                this.toastr.warning('Please upload CLINIC DOCUMENT', 'Warning')
                return
            } else if (!this.medical_certificate) {
                boolean = true;
                this.toastr.warning('Please upload MEDICAL CERTIFICATE', 'Warning')
                return
            }
        }
        if (boolean == false) {
            this.DocumentsDetail.medical_certificate = this.medical_certificate
            var clinic_true_id
            for (var i = 0; i < this.clinicDocumentsList.length; i++) {
                if (this.clinicDocumentsList[i].status == true) {
                    clinic_true_id = i
                    break;
                }
            }
            this.DocumentsDetail.clinic_certificate = this.clinicDocumentsList[clinic_true_id]
            var photo_id_true_id
            for (var i = 0; i < this.photoIDDocumentsList.length; i++) {
                if (this.photoIDDocumentsList[i].status == true) {
                    photo_id_true_id = i
                    break;
                }
            }
            this.DocumentsDetail.photoId_certificate = this.photoIDDocumentsList[photo_id_true_id]

            this.UserDetailForSignUp = {}
            this.UserDetailForSignUp.ConsultationSchedule = this.scheduleArray
            this.UserDetailForSignUp.InitialDetail = this.InitialDetail
            this.UserDetailForSignUp.ProfileDetail = this.ProfileDetail
            this.ClinicContactDetail.lat = this.lat
            this.ClinicContactDetail.lng = this.lng
            this.UserDetailForSignUp.ClinicContactDetail = this.ClinicContactDetail
            this.UserDetailForSignUp.SmartAssistantDetail = this.SmartAssistantDetail
            this.UserDetailForSignUp.ClinicServicesDetailObject = this.ClinicServicesDetailObject
            this.UserDetailForSignUp.DocumentsDetail = this.DocumentsDetail
            this.UserDetailForSignUp.language = this.languageOption
            console.log(this.UserDetailForSignUp)

            this.loading = true            
            this.userService.SignUpDoctor(this.UserDetailForSignUp).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.response == true) {
                    this.toastr.success(data.message, 'Success')
                    this.router.navigate(['/header-one-layout/smartClinicLogin']);
                } else {
                    this.toastr.error(data.message, 'Error')
                }
            }, err => {
                console.log(err);
            })
        }
    }

    stateSelected() {
        console.log(this.state)
        this.userService.GetCitiesOfState(this.state).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.citiesList = data.data
            } else {
                this.toastr.error(data.message, 'Error')
            }
        }, err => {
            console.log(err);
        })
    }

    citySelected() {
        for (var i = 0; i < this.statesList.length; i++) {
            if (this.statesList[i].id == this.state) {
                this.ClinicContactDetail.state = this.statesList[i].name
                break;
            }
        }
        for (var i = 0; i < this.citiesList.length; i++) {
            if (this.citiesList[i].id == this.city) {
                this.ClinicContactDetail.city = this.citiesList[i].name
                break;
            }
        }
        var state = null
        var city = null
        for (var i = 0; i < this.statesList.length; i++) {
            if(this.statesList[i].id == this.state){
                state = this.statesList[i].name
                break                
            }
        }
        for (var i = 0; i < this.citiesList.length; i++) {
            if(this.citiesList[i].id == this.city){
                city = this.citiesList[i].name
                break                
            }
        }
        if(this.chooseFromLocation == true){            
            if(city!=null && state !=null){
                var string = city +","+state
                string = string.replace(" ","")
                var object = {
                    string: string.trim()
                }
                console.log(object)
                this.userService.GetLatLng(object).subscribe(data=>{
                    console.log(data)
                    if(data.response==true){
                        this.lat = data.data[0].latitude
                        this.lng = data.data[0].longitude
                    }
                })                
            }
        }
    }

    GetStatesOfCountry() {
        this.userService.GetStatesOfCountry().subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.statesList = data.data
            } else {
                this.toastr.error(data.message, 'Error')
            }
        }, err => {
            console.log(err);
        })
    }

    checkPassword(str) {
        this.lowerCase = (/[a-z]/.test(str));
        this.upperCase = (/[A-Z]/.test(str));
        this.numberCase = (/[0-9]/.test(str));
        this.lengthCase = str.length >= 8 ? true : false;
        this.specialCase = (/[!@#\$%\^&\*\)\(\-_=+]/.test(str));

    }

    checkPassword1(str) {
        this.lowerCase1 = (/[a-z]/.test(str));
        this.upperCase1 = (/[A-Z]/.test(str));
        this.numberCase1 = (/[0-9]/.test(str));
        this.lengthCase1 = str.length >= 8 ? true : false;
        this.specialCase1 = (/[!@#\$%\^&\*\)\(\-_=+]/.test(str));
    }

    handleAddressChange($event) {
        this.chooseFromLocation = false
        this.ClinicContactDetail.clinic_name = $event.name
        this.lat = JSON.parse(JSON.stringify($event.geometry.location)).lat;
        this.lng = JSON.parse(JSON.stringify($event.geometry.location)).lng;
        // this.ClinicContactDetail.area = $event.formatted_address
        var splitAddr = $event.formatted_address.split(",")
        var state = splitAddr[splitAddr.length-2].replace(/[0-9]/g, '').trim();
        var city = splitAddr[splitAddr.length-3].trim();
        if(state!=null || state.length>0){
            var matchState = this.statesList.filter(item=>item.name == state)
            if(matchState!=null || matchState.length>0){
                this.state = matchState[0].id
                this.userService.GetCitiesOfState(parseInt(matchState[0].id)).subscribe(data => {
                    console.log(data)
                    if (data.response == true) {
                        this.citiesList = data.data
                        var matchCity = this.citiesList.filter(item=>item.name == city)
                        this.city = matchCity[0].id
                        if(matchCity!=null || matchCity.length>0){
                            this.citySelected()
                        }
                    } else {
                        this.toastr.error(data.message, 'Error')
                    }
                }, err => {
                    console.log(err);
                })
            }
        }
    }

    hideNewShift() {
        this.show_new_shift = false
    }

    hideNewSchedule() {
        this.show_new_schedule = false
    }

    checkOther(data) {
        this.other_specialization = false
        if (data == 'OTHER') {
            this.other_specialization = true
        }
    }

    placeMarker(data){
        this.lat = data.coords.lat
        this.lng = data.coords.lng
    }

    preview(){
        var boolean = false
        if (this.show_new_schedule == true) {
            if (this.myObject.Monday == false &&
                this.myObject.Tuesday == false &&
                this.myObject.Wednesday == false &&
                this.myObject.Thursday == false &&
                this.myObject.Friday == false &&
                this.myObject.Saturday == false &&
                this.myObject.Sunday == false
            ) {
                boolean = true
                this.toastr.warning('Please select atleast one day', 'Warning');
            }
            if (this.myObject.shifts.length < 1) {
                boolean = true
                this.toastr.warning('Please enter atleast one shift', 'Warning');
            }
        }
        if (this.scheduleArray.length > 0) {
            for (var i = 0; i < this.scheduleArray.length; i++) {
                if (this.scheduleArray[i].Monday == false &&
                    this.scheduleArray[i].Tuesday == false &&
                    this.scheduleArray[i].Wednesday == false &&
                    this.scheduleArray[i].Thursday == false &&
                    this.scheduleArray[i].Friday == false &&
                    this.scheduleArray[i].Saturday == false &&
                    this.scheduleArray[i].Sunday == false
                ) {
                    boolean = true
                    this.toastr.warning('Please select atleast one day', 'Warning');
                    return;
                }
                if (this.scheduleArray[i].shifts.length < 1) {
                    boolean = true
                    this.toastr.warning('Please enter atleast one shift', 'Warning');
                    return;
                }
            }
        }
        if (boolean == false) {
            if (this.show_new_schedule == true) {
                this.scheduleArray.push(this.myObject)
            }
            this.resetButtonsAfterAnyChangeInSchedule()
            this.show_new_schedule = false
            this.totalMin = 0
            for (var i = 0; i < this.scheduleArray.length; i++) {
                var count:number = 0
                if(this.scheduleArray[i].Monday==true){
                    count++
                }
                if(this.scheduleArray[i].Tuesday==true){
                    count++
                }
                if(this.scheduleArray[i].Wednesday==true){
                    count++
                }
                if(this.scheduleArray[i].Thursday==true){
                    count++
                }
                if(this.scheduleArray[i].Friday==true){
                    count++
                }
                if(this.scheduleArray[i].Saturday==true){
                    count++
                }
                if(this.scheduleArray[i].Sunday==true){
                    count++
                }
                for (var j = 0; j < this.scheduleArray[i].shifts.length; j++) {
                    var min_diff : number = parseInt(this.scheduleArray[i].shifts[j].toTime.minute) - parseInt(this.scheduleArray[i].shifts[j].fromTime.minute)
                    var hour_diff : number = parseInt(this.scheduleArray[i].shifts[j].toTime.hour) - parseInt(this.scheduleArray[i].shifts[j].fromTime.hour)
                    min_diff = min_diff + (hour_diff * 60)
                    min_diff = min_diff * count
                    this.totalMin = this.totalMin + min_diff
                    if(this.scheduleArray[i].shifts[j].fromTime.hour.toString().length==1){
                        this.scheduleArray[i].shifts[j].fromTime.hour = "0" + this.scheduleArray[i].shifts[j].fromTime.hour
                    }
                    if(this.scheduleArray[i].shifts[j].fromTime.minute.toString().length==1){
                        this.scheduleArray[i].shifts[j].fromTime.minute = "0" + this.scheduleArray[i].shifts[j].fromTime.minute
                    }
                    if(this.scheduleArray[i].shifts[j].toTime.hour.toString().length==1){
                        this.scheduleArray[i].shifts[j].toTime.hour = "0" + this.scheduleArray[i].shifts[j].toTime.hour
                    }
                    if(this.scheduleArray[i].shifts[j].toTime.minute.toString().length==1){
                        this.scheduleArray[i].shifts[j].toTime.minute = "0" + this.scheduleArray[i].shifts[j].toTime.minute
                    }
                }
                // this.totalMin = this.totalMin * count
            }
            this.totalHours = this.totalMin / 60 
            this.totalHours = Math.trunc(this.totalHours)
            this.totalMin = this.totalMin % 60
            this.allShifts = []
            var Mon = false
            var Tue = false
            var Wed = false
            var Thu = false
            var Fri = false
            var Sat = false
            var Sun = false
            for (var i = 0; i < this.scheduleArray.length; i++) {
                var string = ''
                if(this.scheduleArray[i].Monday == true){
                    Mon = true
                    if(string == ''){
                        string = "Mon"
                    }else{
                        string = string +", "+"Mon"
                    }
                }
                if(this.scheduleArray[i].Tuesday == true){
                    Tue = true
                    if(string == ''){
                        string = "Tue"
                    }else{
                        string = string +", "+"Tue"
                    }
                }
                if(this.scheduleArray[i].Wednesday == true){
                    Wed = true
                    if(string == ''){
                        string = "Wed"
                    }else{
                        string = string +", "+"Wed"
                    }
                }
                if(this.scheduleArray[i].Thursday == true){
                    Thu = true
                    if(string == ''){
                        string = "Thu"
                    }else{
                        string = string +", "+"Thu"
                    }
                }
                if(this.scheduleArray[i].Friday == true){
                    Fri = true
                    if(string == ''){
                        string = "Fri"
                    }else{
                        string = string +", "+"Fri"
                    }
                }
                if(this.scheduleArray[i].Saturday == true){
                    Sat = true
                    if(string == ''){
                        string = "Sat"
                    }else{
                        string = string +", "+"Sat"
                    }
                }
                if(this.scheduleArray[i].Sunday == true){
                    Sun = true
                    if(string == ''){
                        string = "Sun"
                    }else{
                        string = string +", "+"Sun"
                    }
                }
                let object = {
                    day:string,
                    shifts:this.scheduleArray[i].shifts
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
            $("#previewModal").modal("show");
        }
    }

    SearchLocation(data){
        if(this.lat != 51.678418 && this.lng != 7.809007 && data && data.trim().length>0){
            data.replace(" ","")
            let object = {
                search : data,
                lat : this.lat,
                lng : this.lng
            }
            this.userService.SearchLocation(object).subscribe(data=>{
                this.locationSuggestionDB = data.data.predictions
                console.log(data)
                this.ClinicContactDetail.database = []
                for (var i = 0; i < data.data.predictions.length; i++) {
                    var string = data.data.predictions[i].structured_formatting.main_text
                    this.ClinicContactDetail.database.push(string)
                }
            })            
        }
    }

    onAddLocation(data){
        if(this.chooseFromLocation){
            data = data.source.value
            var index = -1
            for (var i = 0; i < this.locationSuggestionDB.length; i++) {
                var string = this.locationSuggestionDB[i].structured_formatting.main_text
                if(string == data){
                    index = i
                    break;
                }
            }
            if(index!= -1){
                var object = {
                    string: data.trim()
                }
                console.log(object)
                this.userService.GetLatLng(object).subscribe(data=>{
                    console.log(data)
                    if(data.response==true){
                        this.lat = data.data[0].latitude
                        this.lng = data.data[0].longitude
                    }
                })                         
            }
        }
    }

    changeSmartAssistantRegFields(data){
        data.status = !data.status
        var i = this.smartAssistantRegFields.filter(d=>d.name=='Age')
        var j = this.smartAssistantRegFields.filter(d=>d.name=='DOB')
        if(data.name=='Age'){
            if(i[0].status == false){
                j[0].status = true
            }else{
                j[0].status = false
            }
        }else if(data.name=='DOB'){         
            if(j[0].status == false){
                i[0].status = true
            }else{
                i[0].status = false
            }
        }
        console.log(this.smartAssistantRegFields)
        this.SmartAssistantDetail.reg_fields = []
        for (var k = 0; k < this.smartAssistantRegFields.length; k++) {
            if(this.smartAssistantRegFields[k].status == true){
                this.SmartAssistantDetail.reg_fields.push(this.smartAssistantRegFields[k])
            }
            if(this.SmartAssistantDetail.reg_fields == null){
                this.SmartAssistantDetail.reg_fields.push(this.smartAssistantRegFields[k])
            }
        }
    }

    GetSmartAssistantByPhone(data){
        var object = {
            phone: data.trim(),
            doctm_clinic_id : this.doctorData.doctm_clinic_id
        }
        this.userService.VerifySmartAssistantOfSameClinic(object).subscribe(data=>{
            console.log(data)
            if(data.response==true){
                if(data.data!=null){
                    this.SmartAssistantDetail.name = data.data.name
                }
            }else{
                this.toastr.error(data.message,"Error")
            }
        }, err => {
            console.log(err);
        })    
    }

    GetDoctorDetail(id){
        this.loading = true
        this.userService.GetStatesOfCountry().subscribe(data => {
            console.log(data)
            if (data.response == true) {
                this.statesList = data.data
            }
            this.userService.GetDoctorDetail(id).subscribe(data => {
                console.log(data)
                this.loading = false
                if(data.response == true){
                    this.doctorDetail = data.data
                    // if(this.activatedtab == 0){
                        this.InitialDetail.phone = data.data.phone
                        this.InitialDetail.email = data.data.email
                        if(this.change_password_div){
                            this.InitialDetail.password = null
                            this.InitialDetail.confirm_password = null
                        }else{
                            this.InitialDetail.password = "Hahaha@123"
                            this.InitialDetail.confirm_password = "Hahaha@123"
                        }
                    // if(this.activatedtab == 0){       
                        this.ProfileDetail.first_name = data.data.first_name
                        this.ProfileDetail.consultation_fee = data.data.consultation_fee
                        this.ProfileDetail.dob = data.data.dob
                        this.ProfileDetail.expertise = data.data.expertise
                        this.ProfileDetail.practicing_since = data.data.practicing_since
                        this.ProfileDetail.qualification = data.data.qualification
                        this.ProfileDetail.professional_affiliation = data.data.professional_affiliation
                        this.ProfileDetail.registration_no = data.data.registration_no
                        this.ProfileDetail.specialization = data.data.specialization      
                        this.ProfileDetail.selectedImage = data.data.profile_image
                        this.ProfileDetail.doctm_clinic_id = data.data.doctm_clinic_id
                        this.ProfileDetail.type_of_doctor = data.data.type_of_doctor
                        this.ProfileDetail.language = data.data.language
                        if(this.ProfileDetail.selectedImage != ""){
                            this.ProfileDetail.imageAlready = true
                        }
                    // }else if(this.activatedtab == 2){
                        this.ClinicContactDetail = data.data.clinic_details
                        this.lat = this.ClinicContactDetail.lat
                        this.lng = this.ClinicContactDetail.lng
                        this.ClinicContactDetail.doctm_id = data.data.doctm_id
                        for (var i = 0; i < this.statesList.length; i++) {
                            if(this.ClinicContactDetail.state == this.statesList[i].name){
                                this.state = this.statesList[i].id
                                this.userService.GetCitiesOfState(this.state).subscribe(data => {
                                    console.log(data)
                                    if (data.response == true) {
                                        this.citiesList = data.data
                                        for (var i = 0; i < this.citiesList.length; i++) {
                                            if(this.ClinicContactDetail.city == this.citiesList[i].name){
                                                this.city = this.citiesList[i].id
                                                this.citySelected()
                                                break;
                                            }
                                        }
                                    } 
                                }, err => {
                                    console.log(err);
                                })
                                break;
                            }
                        }
                    // }else if(this.activatedtab == 3){
                        this.scheduleArray = data.data.consultation_schedule
                        this.show_new_schedule = false
                    // }else if(this.activatedtab == 4 && data.data.smart_assistant_status == 'Yes'){
                        if(data.data.smart_assistant_id){
                            this.loading = true
                            this.userService.GetSmartAssistantById(data.data.smart_assistant_id).subscribe(dataSmart=>{
                                console.log(dataSmart)
                                this.loading = false
                                if(data.response==true){
                                    this.SmartAssistantDetail = dataSmart.data
                                    this.SmartAssistantDetail.avgConsTime = this.doctorData.avgConsTime
                                    this.SmartAssistantDetail.waitingTime = this.doctorData.waitingTime
                                    this.SmartAssistantDetail.reg_fields = this.doctorData.reg_fields 
                                    console.log(data)
                                    if(this.doctorData.reg_fields){
                                        for (var i = 0; i < this.doctorData.reg_fields.length; i++) {
                                            for (var j = 0; j < this.smartAssistantRegFields.length; j++) {
                                                if(this.smartAssistantRegFields[j].value == this.doctorData.reg_fields[i].value){
                                                   this.smartAssistantRegFields[j] = this.doctorData.reg_fields[i] 
                                                }
                                            }
                                        }
                                    }
                                    var ii = this.smartAssistantRegFields.filter(d=>d.name=='Age')
                                    var jj = this.smartAssistantRegFields.filter(d=>d.name=='DOB')
                                    if(ii[0].status == false){
                                        jj[0].status = true
                                    }else{
                                        jj[0].status = false
                                    }                       
                                    this.SmartAssistantDetail.password = "Test123@doctm"
                                    this.SmartAssistantDetail.confirm_password = "Test123@doctm"
                                }else{
                                    this.toastr.error(data.message,"Error")
                                }
                            }, err => {
                                console.log(err);
                            })      
                        } else {
                            this.SmartAssistantDetail.password = "Test123@doctm"
                            this.SmartAssistantDetail.confirm_password = "Test123@doctm"
                        }           
                        if(data.data.smart_ipd_id){
                            this.loading = true
                            this.userService.GetSmartIpdById(data.data.smart_ipd_id).subscribe(dataSmart=>{
                                console.log(dataSmart)
                                this.loading = false
                                if(data.response==true){
                                    this.SmartIpdDetail = dataSmart.data       
                                    this.SmartIpdDetail.password = "Test123@doctm"
                                    this.SmartIpdDetail.confirm_password = "Test123@doctm"
                                }else{
                                    this.toastr.error(data.message,"Error")
                                }
                            }, err => {
                                console.log(err);
                            })      
                        } else {
                            this.SmartIpdDetail.password = "Test123@doctm"
                            this.SmartIpdDetail.confirm_password = "Test123@doctm"
                        }     
                        if(data.data.smart_pharmacy_id){
                            this.loading = true
                            this.userService.GetSmartPharmacyById(data.data.smart_pharmacy_id).subscribe(dataSmart=>{
                                console.log(dataSmart)
                                this.loading = false
                                if(data.response==true){
                                    this.SmartPharmacyDetail = dataSmart.data       
                                    this.SmartPharmacyDetail.password = "Test123@doctm"
                                    this.SmartPharmacyDetail.confirm_password = "Test123@doctm"
                                }else{
                                    this.toastr.error(data.message,"Error")
                                }
                            }, err => {
                                console.log(err);
                            })      
                        } else {
                            this.SmartPharmacyDetail.password = "Test123@doctm"
                            this.SmartPharmacyDetail.confirm_password = "Test123@doctm"
                        } 

                        if(data.data.smart_diagnostics_id){
                            this.loading = true
                            this.userService.GetSmartDiagnosticsById(data.data.smart_diagnostics_id).subscribe(dataSmart=>{
                                console.log(dataSmart)
                                this.loading = false
                                if(data.response==true){
                                    this.SmartDiagnosticsDetail = dataSmart.data       
                                    this.SmartDiagnosticsDetail.password = "Test123@doctm"
                                    this.SmartDiagnosticsDetail.confirm_password = "Test123@doctm"
                                }else{
                                    this.toastr.error(data.message,"Error")
                                }
                            }, err => {
                                console.log(err);
                            })      
                        } else {
                            this.SmartDiagnosticsDetail.password = "Test123@doctm"
                            this.SmartDiagnosticsDetail.confirm_password = "Test123@doctm"
                        }        

                    // }else if(this.activatedtab == 5){
                        if(data.data.clinic_services && data.data.clinic_services.ClinicServicesDetail){
                            this.ClinicServicesDetail = data.data.clinic_services.ClinicServicesDetail
                        }
                        if(data.data.clinic_services && data.data.clinic_services.OtherClinicService){                          
                            this.OtherClinicService = data.data.clinic_services.OtherClinicService
                        }
                        if(this.OtherClinicService.length>0){
                            this.otherSelected = true
                        }
                        // if(data.data.clinic_services && data.data.clinic_services.Clinic_Diagnostics){
                        //     this.Clinic_Diagnostics = data.data.clinic_services.Clinic_Diagnostics
                        // }
                        // if(data.data.clinic_services && data.data.clinic_services.Clinic_Pharmacy){
                        //     this.Clinic_Pharmacy = data.data.clinic_services.Clinic_Pharmacy
                        // }
                        // if(data.data.clinic_services && data.data.clinic_services.Clinic_IPD){
                        //     this.Clinic_IPD = data.data.clinic_services.Clinic_IPD                    
                        // }
                        if(data.data.clinic_services && data.data.clinic_services.private_beds){
                            this.private_beds = data.data.clinic_services.private_beds                    
                        }
                        if(data.data.clinic_services && data.data.clinic_services.semi_private_beds){
                            this.semi_private_beds = data.data.clinic_services.semi_private_beds                    
                        }
                        if(data.data.clinic_services && data.data.clinic_services.general_beds){
                            this.general_beds = data.data.clinic_services.general_beds                    
                        }
                        for (var i = 0; i < this.ClinicServicesDetail.length; i++) {
                            for (var j = 0; j < this.clinicDiagnosticsList.length; j++) {
                                if(this.clinicDiagnosticsList[j].name == this.ClinicServicesDetail[i]){
                                    this.clinicDiagnosticsList[j].status = true
                                    break
                                }
                            }
                        }
                    // }
                    // }else if(this.activatedtab == 5){
                        console.log(this.padCustomizationOptions)
                        if(data.data.pad_customization_options.length>0){
                            this.padCustomizationOptions = data.data.pad_customization_options
                        }
                    // }

                    //doctorsOfSameClinic
                    this.doctorsOfSameClinic = data.doctorsOfSameClinic
                }
            }, err => {
                console.log(err);
            })
        }, err => {
            console.log(err);
        })
    }

    GetDoctorDetailAndNavigateToHome(){
        this.loading = true
        this.userService.GetDoctorDetail(this.doctorData.itemId).subscribe(data => {
            console.log(data)
            this.loading = false
            if(data.response == true){
                localStorage['doctorDetails']=JSON.stringify(data.data)
                this.router.navigate(['header-two-layout']);
            }
        }, err => {
            console.log(err);
        })
    }

    pushPadCustom(data) {
        for (var i = 0; i < this.padCustomizationOptions.length; i++) {
            if(this.padCustomizationOptions[i].value == data){
               this.padCustomizationOptions[i].status = !this.padCustomizationOptions[i].status
               break;
            }
        }
    }

    updatePadOptions(){
        var boolean = false;
        for (var i = 0; i < this.padCustomizationOptions.length; i++) {
           if(this.padCustomizationOptions[i].status == true){
               boolean = true
               break;
           }
        }
        if(this.padCustomizationOptions[8].status == true && 
            (this.padCustomizationOptions[8].text == null || this.padCustomizationOptions[8].text == undefined ||
             this.padCustomizationOptions[8].text == "" || this.padCustomizationOptions[8].text.trim().length<1 )){
            this.toastr.warning('Enter header text', 'Warning')
            return
        }
        if(this.padCustomizationOptions[12].status == true && 
            (this.padCustomizationOptions[12].text == null || this.padCustomizationOptions[12].text == undefined ||
             this.padCustomizationOptions[12].text == "" || this.padCustomizationOptions[12].text.trim().length<1 )){
            this.toastr.warning('Enter footer text', 'Warning')
            return
        }
        if(boolean==false){
            this.toastr.warning('Please atleast one option', 'Warning')
            return
        }else{
            this.loading = true
            let toUpdate = {
                pad_customization_options:this.padCustomizationOptions
            }
            let ob = {
                itemId : this.doctorData.itemId,
                toUpdate : toUpdate
            }
            this.userService.EditDoctorProfile(ob).subscribe(data => {
                console.log(data)
                this.loading = false
                if (data.response == true) {
                    this.toastr.success(data.message, 'Success')
                    this.GetDoctorDetailAndNavigateToHome()
                } else {
                    this.toastr.error(data.message, 'Error')
                }
            }, err => {
                console.log(err);
            })
        }
    }

    detailOfDoctor(data){
        this.doctorDetailForModal = data
        this.doctorDetailForModal.allShifts = []
        var Mon = false
        var Tue = false
        var Wed = false
        var Thu = false
        var Fri = false
        var Sat = false
        var Sun = false
        for (var i = 0; i < this.doctorDetailForModal.consultation_schedule.length; i++) {
            var string = ''
            if(this.doctorDetailForModal.consultation_schedule[i].Monday == true){
                Mon = true
                if(string == ''){
                    string = "Mon"
                }else{
                    string = string +", "+"Mon"
                }
            }
            if(this.doctorDetailForModal.consultation_schedule[i].Tuesday == true){
                Tue = true
                if(string == ''){
                    string = "Tue"
                }else{
                    string = string +", "+"Tue"
                }
            }
            if(this.doctorDetailForModal.consultation_schedule[i].Wednesday == true){
                Wed = true
                if(string == ''){
                    string = "Wed"
                }else{
                    string = string +", "+"Wed"
                }
            }
            if(this.doctorDetailForModal.consultation_schedule[i].Thursday == true){
                Thu = true
                if(string == ''){
                    string = "Thu"
                }else{
                    string = string +", "+"Thu"
                }
            }
            if(this.doctorDetailForModal.consultation_schedule[i].Friday == true){
                Fri = true
                if(string == ''){
                    string = "Fri"
                }else{
                    string = string +", "+"Fri"
                }
            }
            if(this.doctorDetailForModal.consultation_schedule[i].Saturday == true){
                Sat = true
                if(string == ''){
                    string = "Sat"
                }else{
                    string = string +", "+"Sat"
                }
            }
            if(this.doctorDetailForModal.consultation_schedule[i].Sunday == true){
                Sun = true
                if(string == ''){
                    string = "Sun"
                }else{
                    string = string +", "+"Sun"
                }
            }
            let object = {
                day:string,
                shifts:this.doctorDetailForModal.consultation_schedule[i].shifts
            }
            this.doctorDetailForModal.allShifts.push(object)
        }
        var stringClosed = ''
        this.doctorDetailForModal.allShiftsClosed = []
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
            this.doctorDetailForModal.allShiftsClosed.push(object)
        }
        $("#doctorDetailModal").modal("show");
    }

    getLanguage(type){
        if(type == "" || type == null){
            return "None"
        } else if(type=="hi"){
            return 'Hindi'
        } else if(type=="pa"){
            return 'Punjabi'
        } else if(type=="bn"){
            return 'Bengali'
        } else if(type=="gu"){
            return 'Gujarati'
        } else if(type=="kn"){
            return 'Kannada'
        } else if(type=="ml"){
            return 'Malayalam'
        } else if(type=="mr"){
            return 'Marathi'
        } else if(type=="ta"){
            return 'Tamil'
        } else if(type=="te"){
            return 'Telugu'
        }
    }

    changeBlockedStatus(status,doctor_id){
        console.log(status,doctor_id)
        this.loading = true
        let object = {
            itemId:doctor_id,
            blocked:status
        }
        console.log(object)
        this.userService.ChangeBlockedStatus(object).subscribe(data => {
            console.log(data);
            this.loading = false;
            if(data.response == true){
                this.toastr.success(data.message,"Succes")
                this.ngOnInit()
            }else{
                this.toastr.error(data.message,"Error")
            }
        }, err => {
            console.log(err);
        })    
    }
    ShowHideSmartPharmacyPassword(){
        if(this.updateSmartPharmacyPassword){
            this.SmartPharmacyDetail.password = null
            this.SmartPharmacyDetail.confirm_password = null
        }else{
            this.SmartPharmacyDetail.password = "Test123@doctm"
            this.SmartPharmacyDetail.confirm_password = "Test123@doctm"
        }
    }

    ShowHideSmartAsstPassword(){
        if(this.updateSmartAsstPassword){
            this.SmartAssistantDetail.password = null
            this.SmartAssistantDetail.confirm_password = null
        }else{
            this.SmartAssistantDetail.password = "Test123@doctm"
            this.SmartAssistantDetail.confirm_password = "Test123@doctm"
        }
    }

    ShowHideSmartIpdPassword(){
        if(this.updateSmartIpdPassword){
            this.SmartIpdDetail.password = null
            this.SmartIpdDetail.confirm_password = null
        }else{
            this.SmartIpdDetail.password = "Test123@doctm"
            this.SmartIpdDetail.confirm_password = "Test123@doctm"
        }
    }

    checkOptionOfPad(value){
        if(!this.padCustomizationOptions || this.padCustomizationOptions.length<1){
            return true
        }else{
            for (var i = 0; i < this.padCustomizationOptions.length; i++) {
                if(this.padCustomizationOptions[i].value == value){
                    if(this.padCustomizationOptions[i].status == true){
                        return true
                    }else{
                        return false
                    }
                }
            }
        }
    }

    getFooterText(){
        return this.padCustomizationOptions[12].text
    }

    getHeaderText(){
        return this.padCustomizationOptions[8].text
    }

    values2 = '';

    onKey2(event: any) {
        this.values2 = event.target.value;
        if (this.SmartIpdDetail.password == this.values2) {
            this.p_false2 = false;
        } else {
            this.p_false2 = true;
        }
    }

    GetSmartIpdByPhone(data){
        var object = {
            phone: data.trim(),
            doctm_clinic_id : this.doctorData.doctm_clinic_id
        }
        this.userService.GetSmartIpdByPhone(object).subscribe(data=>{
            console.log(data)
            if(data.response==true){
                if(data.data!=null){
                    this.SmartIpdDetail.name = data.data.name
                }
            }else{
                this.toastr.error(data.message,"Error")
            }
        }, err => {
            console.log(err);
        })    
    }

    updateSmartIpd(status) {
        if (this.SmartIpdDetail.password !== this.SmartIpdDetail.confirm_password) {
            this.p_false2 = true
        } else {
            if(!this.SmartIpdDetail.id){
                this.SmartIpdDetail.id = 0
            }
            var object = {
                doctor_id: this.doctorData.itemId,
                doctm_clinic_id: this.doctorData.doctm_clinic_id,
                SmartIpdDetail: this.SmartIpdDetail
            }
            console.log(object)
            this.userService.UpdateSmartIpdByDoctor(object).subscribe(data=>{
                console.log(data)
                if (data.response == true) {
                    this.toastr.success(data.message, 'Success')
                    this.GetDoctorDetailAndNavigateToHome()
                } else {
                    this.toastr.error(data.message, 'Error')
                }
            }, err => {
                console.log(err);
            })    
        }
    }

    values3 = '';

    onKey3(event: any) {
        this.values3 = event.target.value;
        if (this.SmartPharmacyDetail.password == this.values3) {
            this.p_false3 = false;
        } else {
            this.p_false3 = true;
        }
    }

    values4 = '';

    onKey4(event: any) {
        this.values4 = event.target.value;
        if (this.SmartDiagnosticsDetail.password == this.values4) {
            this.p_false4 = false;
        } else {
            this.p_false4 = true;
        }
    }



    GetSmartPharmacyByPhone(data){
        var object = {
            phone: data.trim(),
            doctm_clinic_id : this.doctorData.doctm_clinic_id
        }
        this.userService.GetSmartPharmacyByPhone(object).subscribe(data=>{
            console.log(data)
            if(data.response==true){
                if(data.data!=null){
                    this.SmartPharmacyDetail.name = data.data.name
                }
            }else{
                this.toastr.error(data.message,"Error")
            }
        }, err => {
            console.log(err);
        })    
    }

    GetSmartDiagnosticsByPhone(data){
        var object = {
            phone: data.trim(),
            doctm_clinic_id : this.doctorData.doctm_clinic_id
        }
        this.userService.GetSmartDiagnosticsByPhone(object).subscribe(data=>{
            console.log(data)
            if(data.response==true){
                if(data.data!=null){
                    this.SmartDiagnosticsDetail.name = data.data.name
                }
            }else{
                this.toastr.warning(data.message,"Warning")
            }
        }, err => {
            console.log(err);
        })    
    }

    updateSmartPharmacy(status) {
        if (this.SmartPharmacyDetail.password !== this.SmartPharmacyDetail.confirm_password) {
            this.p_false3 = true
        } else {
            if(!this.SmartPharmacyDetail.id){
                this.SmartPharmacyDetail.id = 0
            }
            var object = {
                doctor_id: this.doctorData.itemId,
                doctm_clinic_id: this.doctorData.doctm_clinic_id,
                SmartPharmacyDetail: this.SmartPharmacyDetail
            }
            console.log(object)
            this.userService.UpdateSmartPharmacyByDoctor(object).subscribe(data=>{
                console.log(data)
                if (data.response == true) {
                    this.toastr.success(data.message, 'Success')
                    this.GetDoctorDetailAndNavigateToHome()
                } else {
                    this.toastr.error(data.message, 'Error')
                }
            }, err => {
                console.log(err);
            })    
        }
    }

    updateSmartDiagnostics(status) {
        if (this.SmartDiagnosticsDetail.password !== this.SmartDiagnosticsDetail.confirm_password) {
            this.p_false4 = true
        } else {
            if(!this.SmartDiagnosticsDetail.id){
                this.SmartDiagnosticsDetail.id = 0
            }
            var object = {
                doctor_id: this.doctorData.itemId,
                doctm_clinic_id: this.doctorData.doctm_clinic_id,
                SmartDiagnosticsDetail: this.SmartDiagnosticsDetail
            }
            console.log(object)
            this.userService.UpdateSmartDiagnosticsByDoctor(object).subscribe(data=>{
                console.log(data)
                if (data.response == true) {
                    this.toastr.success(data.message, 'Success')
                    this.GetDoctorDetailAndNavigateToHome()
                } else {
                    this.toastr.error(data.message, 'Error')
                }
            }, err => {
                console.log(err);
            })    
        }
    }

    ShowHideSmartDiagnosticsPassword(){
        if(this.updateSmartDiagnosticsPassword){
            this.SmartDiagnosticsDetail.password = null
            this.SmartDiagnosticsDetail.confirm_password = null
        }else{
            this.SmartDiagnosticsDetail.password = "Test123@doctm"
            this.SmartDiagnosticsDetail.confirm_password = "Test123@doctm"
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
    GenerateOtpForActiveDoctor(itemId, status){
        var phone = parseInt(this.doctorData.phone)
        var ob = {phone}
        console.log(phone)
        this.userService.GenerateOtpForActiveDoctor(ob).subscribe(data=>{
            console.log(data)
            if(data.response==true){
                this.otpOnPhone = data.otpPhone
                console.log(this.otpOnPhone)
            }else{
                this.toastr.error(data.message,"Error")
            }
        }, err =>{
            console.log(err)
        })
        this.getDocID=itemId
        this.getDocStatus = status
    }
    CheckAndVerify(id){
        console.log(id, this.getDocID, this.getDocStatus)
        //this.otpOnPhone = 1234
        if(this.verifyPhone == parseInt(this.otpOnPhone)){
            this.otpVerifed = true
            console.log("sfdhs")
            if(id==1){
                this.changeBlockedStatus(0,this.getDocID)
                this.toastr.success("success 1","success")
            }else{
                this.changeBlockedStatus(1,this.getDocID)
                this.toastr.success("success 0","success")
            }
            $("#zohan-ten").modal("hide");
            this.router.navigate(['header-two-layout/edit-profile/clinic_doctors']); 
            // this.saveStepOneDetails()
        }else{
            this.toastr.error('Wrong OTP entered', 'Error')
        }
    }
    GenerateOtpToRemoveDoctor(item, pic){
        var phone = parseInt(this.doctorData.phone)
        var ob = {phone}
        console.log(phone)
        this.userService.GenerateOtpForActiveDoctor(ob).subscribe(data=>{
            console.log(data)
            if(data.response==true){
                this.optToRemoveDoc = data.otpPhone
                console.log(this.optToRemoveDoc)
            }else{
                this.toastr.error(data.message,"Error")
            }
        }, err =>{
            console.log(err)
        })
        this.getDocRemoveID=item
       // this.getDocStatus = status
    }
    removeDoctor(){
        //this.optToRemoveDoc = 1122
        console.log(this.verifyRemoveDocOtp, this.optToRemoveDoc)
        console.log(this.getDocRemoveID)

       if(this.verifyRemoveDocOtp == parseInt(this.optToRemoveDoc)){
           console.log("doc remove")
           this.userService.DeleteDoctor(this.getDocRemoveID).subscribe(data => {
                console.log(data);
               // this.loading = false;
                if (data.response == true) {
                    //this.ngOnInit();
                    this.toastr.success('', data.message);
                } else {
                    this.toastr.error('', data.message);
                }
            }, err => {
                console.log(err);
            })
           $("#remove-doctor").modal("hide");
            this.ngOnInit()
            this.router.navigate(['header-two-layout/edit-profile/clinic_doctors']); 
        }else{
            this.toastr.error('Wrong OTP entered', 'Error')
        }

    }
     GenerateOtpToChangePassowd(){
        var phone = parseInt(this.doctorData.phone)
        var ob = {phone}
        console.log(phone)
        //this.optTochangePassword = 1111
        this.userService.GenerateOtpForActiveDoctor(ob).subscribe(data=>{
            console.log(data)
            if(data.response==true){
                this.optTochangePassword = data.otpPhone
                console.log(this.optToRemoveDoc)
            }else{
                this.toastr.error(data.message,"Error")
            }
        }, err =>{
            console.log(err)
        })
        //this.getDocRemoveID=item
       // this.getDocStatus = status
    }
    GenerateOtpToVerifyDoctor(itemId, status){
        var phone = parseInt(this.doctorData.phone)
        var ob = {phone}
        console.log(phone)
       // this.verifyDocDataOtp = 1111
        this.userService.GenerateOtpForActiveDoctor(ob).subscribe(data=>{
            console.log(data)
            if(data.response==true){
                this.verifyDocDataOtp = data.otpPhone
                console.log(this.optToRemoveDoc)
            }else{
                this.toastr.error(data.message,"Error")
            }
        }, err =>{
            console.log(err)
        })
        this.getVerifyDocId=itemId
       this.getDocVerifyStatus = status
    }
    ChangeVerifiedStatus(status,doctor_id){
        console.log(status,doctor_id)
        this.loading = true
        let object = {
            itemId:doctor_id,
            documents_verified:status
        }
        console.log(object)
        this.userService.ChangeVerifiedStatus(object).subscribe(data => {
            console.log(data);
            this.loading = false;
            if(data.response == true){
                this.toastr.success(data.message,"Succes")
                this.ngOnInit()
            }else{
                this.toastr.error(data.message,"Error")
            }
        }, err => {
            console.log(err);
        })    
    }
    VerifyDoctor(id){
        console.log(id, this.getVerifyDocId, this.getDocVerifyStatus)
        //this.otpOnPhone = 1234
        if(this.verifyDoctorOtp == parseInt(this.verifyDocDataOtp)){
            this.otpVerifed = true
            console.log("sfdhs")
            if(id==1){
                this.ChangeVerifiedStatus(0,this.getVerifyDocId)
                this.toastr.success("success 1","success")
            }else{
                this.ChangeVerifiedStatus(1,this.getVerifyDocId)
                this.toastr.success("success 0","success")
            }
            $("#verify-doctor").modal("hide");
            this.router.navigate(['header-two-layout/edit-profile/clinic_doctors']); 
            // this.saveStepOneDetails()
        }else{
            this.toastr.error('Wrong OTP entered', 'Error')
        }
    }

}