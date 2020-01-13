import { Component, ElementRef, NgZone, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { Router } from '@angular/router';
// import { GetLatLng } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
declare var $

@Component({
    selector: 'app-signup-new',
    templateUrl: './signup-new.component.html',
    styleUrls: ['./signup-new.component.css'],
    providers: [UserService]
})
export class SignupNewComponent implements OnInit, AfterViewInit {
    @ViewChild("search")
    public searchElementRef: ElementRef;
    public latitude: number;
    public longitude: number;
    public zoom: number;


    // public searchControl: FormControl;

    activatedtab = 0
    IpdObjectId
    helpText=[]
    captcha_step_1=false;
    captcha_step_2=false;
    captcha_step_3=false;
    captcha_step_4=false;
    captcha_step_5=false;
    captcha_step_6=false;
    captcha_step_7=false;
    captcha_step_8=false;
    PharmacyObjectId
    DiagnosticsObjectId
    pharmacyModelValidation
    clinicPharmacyCredentials=<any>{}
    clinicDiagnosticsCredentials=<any>{}
    clinicIpdCredentials=<any>{}
    enable_map=false
    dynamic_class="grey-placeholder"
    param_one_class="grey-placeholder"
    param_two_class="grey-placeholder"
    purchasedData=[]
    activatedtabHeading = 'Your Contact details'
    condition: boolean;
    formClass1: string;
    formClass2: string;
    isostring
    userDetails=<any>{}
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
    diagnosticsGrp:FormGroup;
    ProfileDetail
    userOwnClinicStatus

    stepThreeForm: FormGroup;
    heroForm:FormGroup;
    ClinicContactDetail

    state
    statesList
    city
    citiesList
    savedClinicServices=<any>{}
    stepFourForm: FormGroup;
    SmartAssistantDetail
    p_false1 = false
    addBeds: FormGroup;
    ClinicServicesDetail
    clinicDiagnosticsList
    OtherClinicService
    otherSelected
    Clinic_Diagnostics=false
    Clinic_Pharmacy=false
    Clinic_IPD=false
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
    //harman

    constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
        private userService: UserService, private router: Router,
        private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

    ngOnInit() {   


        this.condition = true;
        this.formClass1 = 'active';

        //harman
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

        this.heroForm =  this.formBuilder.group({
            //name: ['', Validators.required],
            email: [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            password:  [null, Validators.compose([Validators.required,Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*'),
                Validators.minLength(8),Validators.maxLength(15)])],
            confirm: ['', [Validators.required, Validators.minLength(6)]],
            // phone: [null, Validators.compose([Validators.required,Validators.pattern('^[^ ]+[0-9]*'),
            // Validators.minLength(10),Validators.maxLength(10)])],
        },
        {validator: this.passwordMatchValidator},
        );

        this.diagnosticsGrp =  this.formBuilder.group({
            //  name: ['', Validators.required],
            email: [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            password:  [null, Validators.compose([Validators.required,Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*'),
                Validators.minLength(8),Validators.maxLength(15)])],
            confirm: ['', [Validators.required, Validators.minLength(6)]],
            // phone: [null, Validators.compose([Validators.required,Validators.pattern('^[^ ]+[0-9]*'),
            //  Validators.minLength(10),Validators.maxLength(10)])],
        },
        {validator: this.passwordMatchValidator},
        );
	/* 	if(localStorage['purchased_data']){
			this.purchasedData=localStorage['purchased_data']
			console.log(this.purchasedData);
		}
		
		if(this.purchasedData.indexOf('Diagnostics') > -1){
			this.Clinic_Diagnostics=true;
		}
		if(this.purchasedData.indexOf('Pharmacy') > -1){
			this.Clinic_Pharmacy=true;
		}
		if(this.purchasedData.indexOf('IPD') > -1){
			this.Clinic_IPD=true;
		} */
        // this.stepOneForm = this.formBuilder.group({
            //   'phone': [null, Validators.compose([Validators.required,Validators.pattern('^[^ ]+[0-9]*'),
            //         Validators.minLength(10),Validators.maxLength(10)])],
            //   'email': [null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
            //   'password': [null, Validators.compose([Validators.required,Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*'),
            //             Validators.minLength(8),Validators.maxLength(15)])],
            //   'confirm_password': [null, Validators.compose([Validators.required,Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*'),
            //             Validators.minLength(8),Validators.maxLength(15)])],
            // })

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
            this.addBeds = this.formBuilder.group({
                'generalBeds': [null, Validators.compose([Validators.required, Validators.max(999), Validators.min(0)])],
                
                'semiPrivateBeds': [null, Validators.compose([Validators.required, Validators.max(999), Validators.min(0)])],
                'privateBeds': [null, Validators.compose([Validators.required, Validators.max(999), Validators.min(0)])],
                // 'name':[null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
                'email': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
                'password':[null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    Validators.minLength(8)
                    ])],
                'confirm': [null, Validators.compose([Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
                    Validators.minLength(8)
                    ])],
                // 'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                //  Validators.minLength(10), Validators.maxLength(10)
                // ])],

            },  {validator: this.passwordMatchValidator})

            var currentYear = new Date().getFullYear();
            this.ProfileDetail = {}
            this.ProfileDetail.selectedImage = null
            this.ProfileDetail.dob = null
            // this.ProfileDetail.consultation_fee = 0
            this.stepTwoForm = this.formBuilder.group({
                'first_name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
                // 'last_name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z ]*')])],
                'specialization': [null, Validators.compose([Validators.required])],
                'registration_no': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                    Validators.minLength(5), Validators.maxLength(15)
                    ])],
                'qualification': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
                'professional_affiliation': [null, Validators.compose([Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
                'dob': [null, Validators.compose([Validators.required])],
                'practicing_since': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                    Validators.minLength(4), Validators.maxLength(4), Validators.max(currentYear), Validators.min(1950)
                    ])],
                'consultation_fee': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                    Validators.minLength(1), Validators.maxLength(4), Validators.min(0)
                    ])],
                'expertise': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
                'other_specialization': [null, Validators.compose([Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            })


            this.ClinicContactDetail = {}
            this.GetStatesOfCountry()
            this.userOwnClinicStatus = true
            this.ClinicContactDetail.userOwnClinic = "Yes"
            this.stepThreeForm = this.formBuilder.group({
                'clinic_name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
                'email':[null, Validators.compose([Validators.pattern('^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')])],
                'website': [null, Validators.compose([Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
                // 'email': [null, Validators.compose([Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],

                'clinic_name1': [null, Validators.compose([Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
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
                // 'clinic_id': [null, Validators.compose([Validators.required,Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            })

            this.SmartAssistantDetail = {}
            this.stepFourForm = this.formBuilder.group({
                // 'name': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
                // 'phone': [null, Validators.compose([Validators.required, Validators.pattern('^[^ ]+[0-9]*'),
                //     Validators.minLength(10), Validators.maxLength(10)
                //     ])],
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
            { name: 'Lung Test', status: false },
            // { name: 'NCV', status: false },
            // { name: 'PFT', status: false },
            // { name: 'PET-Sca', status: false },
            // { name: 'SSEP', status: false },
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
            { name: 'Latest post paid  mobile or  clinic landline phone bill', status: false, image: '' }
            ]

            this.DocumentsDetail = {}
            this.allShifts = []
            this.allShiftsClosed = []
            this.languageOption = ""
            this.languageSelected = false

            this.otp_verified = false

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
            this.chooseFromLocation = true
            this.smartAssistantDiv = true
            //harman end 
            if(this.isJson(localStorage['user_details'])){
                console.log(JSON.parse(localStorage['user_details']));
                this.userDetails=JSON.parse(localStorage['user_details']);
                console.log(this.userDetails);
                console.log('this is the data');
                this.InitialDetail.email=this.userDetails.email
                this.InitialDetail.password=this.userDetails.password
                this.InitialDetail.confirm_password=this.userDetails.password
                this.InitialDetail.phone=this.userDetails.mobile
            } 
            this.ProfileDetail.specialization="";
            this.SmartAssistantDetail.avgConsTime="";
            this.SmartAssistantDetail.waitingTime="";
            this.getHelpText();
        }
        passwordMatchValidator(frm: FormGroup) {
            return frm.controls['password'].value === 
            frm.controls['confirm'].value ? null : {'mismatch': true};
        }
        changeClass(data){
            if(data!=""){
                this.dynamic_class="black-placeholder";
            }else{
                this.dynamic_class="grey-placeholder";
            }
        }

        changeParamOneClass(data){
            console.log(data.target.selectedIndex);
            if(data.target.selectedIndex>0){
                this.param_one_class="black-placeholder";
            }else{
                this.param_one_class="grey-placeholder";
            }
        }

        changeParamTwoClass(data){
            console.log(data.target.selectedIndex);
            if(data.target.selectedIndex>0){
                this.param_two_class="black-placeholder";
            }else{
                this.param_two_class="grey-placeholder";
            }
        }
        isJson(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return false;
            }
            return true;
        }
        ngAfterViewInit() {
            //   // google maps start //
            //   //set google maps defaults
            //   this.zoom = 4;
            //   this.latitude = 39.8282;
            //   this.longitude = -98.5795;

            //   // //create search FormControl
            //   // this.searchControl = new FormControl();

            //   //set current position
            this.setCurrentPosition();

            //   //load Places Autocomplete
            //   this.mapsAPILoader.load().then(() => {
                //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                    //       types: ['(cities)']
                    //     });
                    //     autocomplete.addListener("place_changed", () => {
                        //       this.ngZone.run(() => {
                            //         //get the place result
                            //         let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                            //         //verify result
                            //         if (place.geometry === undefined || place.geometry === null) {
                                //           return;
                                //         }

                                //         //set latitude, longitude and zoom
                                //         this.latitude = place.geometry.location.lat();
                                //         this.longitude = place.geometry.location.lng();
                                //         console.log("latitude entered"+this.latitude);
                                //         console.log("longitude entered"+this.longitude);
                                //         console.log(place.formatted_address);
                                //         // this.city=place.formatted_address;
                                //         console.log(place.formatted_address)
                                //         this.zoom = 12;
                                //       });
                                //     });
                                //   });
                            }

                            private setCurrentPosition() {
                                if ("geolocation" in navigator) {
                                    navigator.geolocation.getCurrentPosition((position) => {
                                        this.lat = position.coords.latitude;
                                        this.lng = position.coords.longitude;
                                        this.zoom = 12;
                                    });
                                }
                                // google maps end // 
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
                                this.private_beds = 0
                                this.semi_private_beds = 0
                                this.general_beds = 0
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
                                                                                                                    // getClass(i){
                                                                                                                        //   if (i==this.activatedtab) {
                                                                                                                            //     return 'active'
                                                                                                                            //   }else if (i<this.activatedtab) {
                                                                                                                                //     return 'completed'
                                                                                                                                //   }
                                                                                                                                // }
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
                                                                                                                                    } else if (this.SmartAssistantDetail.smartAssistant == 'Yes') { //this.stepFourForm.valid &&   [this.stepFourForm.valid && ]
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
               /*  if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                    this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
                    return
                } */
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
            this.myObject.fromTime.hour = this.myObject.shifts[this.myObject.shifts.length-1].toTime.hour
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
        this.scheduleArray[i].fromTime.hour = this.scheduleArray[this.scheduleArray.length-1].toTime.hour
        this.scheduleArray[i].fromTime.minute = 0
        this.scheduleArray[i].toTime = {}
        this.scheduleArray[i].toTime.hour = 0
        this.scheduleArray[i].toTime.minute = this.scheduleArray[this.scheduleArray.length-1].toTime.hour + 2
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
    this.scheduleArray[i].fromTime.hour = this.scheduleArray[this.scheduleArray.length-1].toTime.hour
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

// addAnotherSchedule(){
    //   var boolean = false
    //   for (var i = 0; i < this.scheduleArray.length; i++) {
        //     if(
        //       this.scheduleArray[i].Monday == false &&
        //       this.scheduleArray[i].Tuesday == false &&
        //       this.scheduleArray[i].Wednesday == false &&
        //       this.scheduleArray[i].Thursday == false &&
        //       this.scheduleArray[i].Friday == false &&
        //       this.scheduleArray[i].Saturday == false &&
        //       this.scheduleArray[i].Sunday == false
        //     ){
            //       boolean = true
            //       this.toastr.warning('Please select atleast one day', 'Warning');
            //       break;
            //     }
            //   }
            //   for (var i = 0; i < this.scheduleArray.length; i++) {
                //     if(
                //       this.scheduleArray[i].Monday==true && this.myObject.Monday==true ||
                //       this.scheduleArray[i].Tuesday==true && this.myObject.Tuesday==true ||
                //       this.scheduleArray[i].Wednesday==true && this.myObject.Wednesday==true ||
                //       this.scheduleArray[i].Thursday==true && this.myObject.Thursday==true ||
                //       this.scheduleArray[i].Friday==true && this.myObject.Friday==true ||
                //       this.scheduleArray[i].Saturday==true && this.myObject.Saturday==true ||
                //       this.scheduleArray[i].Sunday==true && this.myObject.Sunday==true
                //     ){
                    //       boolean = true
                    //       this.toastr.warning('Schedule for same day already added', 'Warning');
                    //       break;
                    //     }
                    //   }
                    //   if( this.myObject.Monday == false &&
                    //       this.myObject.Tuesday == false &&
                    //       this.myObject.Wednesday == false &&
                    //       this.myObject.Thursday == false &&
                    //       this.myObject.Friday == false &&
                    //       this.myObject.Saturday == false &&
                    //       this.myObject.Sunday == false
                    //     ){
                        //     boolean = true
                        //     this.toastr.warning('Please select atleast one day', 'Warning');
                        //   }
                        //   if(this.myObject.shifts.length<1){
                            //     boolean = true
                            //     this.toastr.warning('Please enter atleast one shift', 'Warning');
                            //   }
                            //   if(boolean==false){
                                //     this.scheduleArray.push(this.myObject)
                                //     console.log(this.scheduleArray)
                                //     this.myObject = {}
                                //     this.myObject.shifts = []
                                //     this.myObject.Monday = false
                                //     this.myObject.Tuesday = false
                                //     this.myObject.Wednesday = false
                                //     this.myObject.Thursday = false
                                //     this.myObject.Friday = false
                                //     this.myObject.Saturday = false
                                //     this.myObject.Sunday = false
                                //   }
                                // }

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
                        if (this.show_new_schedule == true) {
                            this.scheduleArray.push(this.myObject)
                        }
                        this.resetButtonsAfterAnyChangeInSchedule()
                        if (this.activatedtab < 7) {
                            this.activatedtab = this.activatedtab + 1
                            console.log(this.scheduleArray)
                            this.activatedtabHeading = ''
                            this.activatedtabHeading = 'Add SmartAssistant'
                            try 
                            { 
                                window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
                            } catch (e) {
                                window.scrollTo(0, 0);
                            }
                        }
                        this.show_new_schedule = false
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
                    this.clinicPharmacyCredentials.pharmacyEmail=this.InitialDetail.email;
                    this.clinicIpdCredentials.unique_id=this.InitialDetail.email;
                    this.clinicDiagnosticsCredentials.unique_id=this.InitialDetail.email;
                    this.otpRes = {}
                    this.loading = true            
                    this.userService.GenerateOTPSignUp(this.InitialDetail).subscribe(data => {
                        console.log(data)
                        this.loading = false
                        if (data.response == true) {
                            this.otpRes.otpEmail = data.otpEmail
                            this.otpRes.otpPhone = data.otpPhone
                            this.toastr.success(data.message, 'Success')
                            $("#myModal").modal("show");
                        } else {
                            this.toastr.error(data.message, 'Error')
                        }
                    }, err => {
                        console.log(err);
                    })
                }

                verifyOTP(){
                    if(this.otpPhone == parseInt(this.otpRes.otpPhone) && this.otpEmail == parseInt(this.otpRes.otpEmail)){
                        this.activatedtabHeading = ''
                        this.otp_verified = true
                        this.activatedtabHeading = 'Create your profile'
                        this.saveStepOneDetails()
                        $("#myModal").modal("hide");
                        try 
                        { 
                            window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
                        } catch (e) {
                            window.scrollTo(0, 0);
                        }
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
                    };
                    fr.readAsDataURL(file);
                }

                saveStepTwoDetails() {
                    if (new Date(this.ProfileDetail.dob).setHours(0,0,0,0) >= new Date().setHours(0,0,0,0))
                    {
                        this.toastr.warning("Invalid Date Of Birth", "Warning")
                    }
                    else if (this.other_specialization == true && (this.ProfileDetail.other_specialization == null || this.ProfileDetail.other_specialization == '' ||
                        this.ProfileDetail.other_specialization == undefined)) {
                        this.toastr.warning("Invalid Specialization", "Warning")
                } else {
                    if (this.activatedtab < 7) {
                        this.activatedtab = this.activatedtab + 1
                        if (this.other_specialization == true) {
                            this.ProfileDetail.specialization = this.ProfileDetail.other_specialization
                        }
                        console.log(this.ProfileDetail)
                        this.activatedtabHeading = ''
                        this.activatedtabHeading = 'Clinic contact details'
                        try 
                        { 
                            window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
                        } catch (e) {
                            window.scrollTo(0, 0);
                        }
                    }
                }
            }

            saveStepThreeDetails() {
                console.log(this.ClinicContactDetail)
                if (this.activatedtab < 7) {
                    this.activatedtab = this.activatedtab + 1
                    var date
                    var month
                    var year
                    date = new Date(this.ProfileDetail.dob).getDate()
                    month = new Date(this.ProfileDetail.dob).getMonth() + 1
                    year = new Date(this.ProfileDetail.dob).getFullYear()
                    if (date.toString().length == 1) {
                        date = "0" + date
                    }
                    if (month.toString().length == 1) {
                        month = "0" + month
                    }
                    var fullDate = date.toString() + month.toString() + year.toString()
                    if(this.ClinicContactDetail.userOwnClinic=='Yes'){
                        this.ClinicContactDetail.clinic_id = this.ClinicContactDetail.city.substr(0, 3) + "-" +
                        this.ProfileDetail.registration_no + "-" + fullDate
                    }else{
                        var object = {
                            clinic_id: this.ClinicContactDetail.clinic_id
                        }
                        this.userService.getSmartAsstByClinicId(object).subscribe(data=>{
                            console.log(data)
                            if(data.response==true){
                                console.log(data);
                                this.activatedtabHeading = ''
                                this.activatedtabHeading = 'Your consultation schedule'
                                // this.SmartAssistantDetail.name=data.data.name
                                this.SmartAssistantDetail.unique_id=data.data.unique_id
                                // this.SmartAssistantDetail.phone=data.data.phone
                                if(data.services.Clinic_Diagnostics){
                                    this.savedClinicServices.Clinic_Diagnostics=true;
                                }
                                if(data.services.Clinic_Pharmacy){
                                    this.savedClinicServices.Clinic_Pharmacy=true;
                                }
                                if(data.services.Clinic_IPD){
                                    this.savedClinicServices.Clinic_IPD=true;
                                }
                            }else{
                                this.toastr.error("No Smart Assistant Is Registered For This Clinic Id.","Smart Assistant Doesn't Exists! ");
                                return
                            }
                        }) 

                    }
                    try 
                    { 
                        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
                    } catch (e) {
                        window.scrollTo(0, 0);
                    }
                }
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
                if (this.SmartAssistantDetail.password !== this.SmartAssistantDetail.confirm_password && status == 1) {
                    this.p_false1 = true
                } else {
                    if (this.activatedtab < 7) {
                        this.activatedtab = this.activatedtab + 1
                        if (status == 0) {
                            this.SmartAssistantDetail = {}
                            this.stepFourForm.reset()
                            this.SmartAssistantDetail.smartAssistant = "No"
                        } else if (status == 1) {
                            this.SmartAssistantDetail.smartAssistant = "Yes"
                        }
                        console.log(this.SmartAssistantDetail)
                        this.activatedtabHeading = ''
                            this.activatedtabHeading = 'Add clinic services'
                    }
                }
                try 
                { 
                    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
                } catch (e) {
                    window.scrollTo(0, 0);
                }
            }


            checkData(){
                console.log(this.ClinicContactDetail);
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
           /*  if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                boolean = true;
                this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
                return
            } */
            if (!this.Clinic_IPD) {
                this.private_beds = null
                this.general_beds = null
                this.semi_private_beds = null
            }
        }
        if (this.activatedtab < 7 && boolean == false) {
            this.activatedtab = 7
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
                    Clinic_Diagnostics: this.Clinic_Diagnostics,
                    Clinic_Pharmacy: this.Clinic_Pharmacy,
                    Clinic_IPD: this.Clinic_IPD,
                    private_beds: this.private_beds,
                    semi_private_beds: this.semi_private_beds,
                    general_beds: this.general_beds,
                    clinicServicesStatus: "Yes",
                    OtherClinicService : this.OtherClinicService
                }
            }
            console.log(this.ClinicServicesDetailObject)
            this.activatedtabHeading = ''
            this.activatedtabHeading = 'Language Selection'
        }
        try 
        { 
            window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        } catch (e) {
            window.scrollTo(0, 0);
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
            console.log(this.photoIDDocumentsList[index].index)
        };
        fr.readAsDataURL(file);
        console.log(this.photoIDDocumentsList[index].image)
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
        this.activatedtabHeading = ''
            this.activatedtabHeading = 'Upload documents'
    }

    saveStepSixDetails(status) {
        //  else if (this.SmartAssistantDetail.smartAssistant == 'Yes') {  //!this.stepFourForm.valid && 
        //     boolean = true;
        //     this.toastr.warning('Error in SMART ASSISTANT ', 'Warning')
        //     return
        // }
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
           /*  if (this.Clinic_Diagnostics && this.ClinicServicesDetail.length < 1 && this.otherSelected == false) {
                boolean = true;
                this.toastr.warning('Please select atleast one value in "Clinic Diagnostics"', 'Warning')
                return
            } */
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
        console.log('YAAAAAAAAAAA');
        console.log(this.ClinicContactDetail.userOwnClinic);
        if (true_happens1 == false && this.ClinicContactDetail.userOwnClinic=='Yes') {
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
        if(this.Clinic_Pharmacy){
            this.UserDetailForSignUp.pharmacy_id = this.PharmacyObjectId
        }
        if(this.Clinic_IPD){
            this.UserDetailForSignUp.ipd_id = this.IpdObjectId
        }
        if(this.Clinic_Diagnostics){
            this.UserDetailForSignUp.diagnostics_id = this.DiagnosticsObjectId
        }
        console.log(this.UserDetailForSignUp.ClinicContactDetail)

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
    try 
    { 
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    } catch (e) {
        window.scrollTo(0, 0);
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
            if(this.ClinicContactDetail.area){
                string = this.ClinicContactDetail.area+", "+city +","+state
            }
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
    console.log(this.ClinicContactDetail.clinic_name);

    this.chooseFromLocation = false
    this.ClinicContactDetail.clinic_name1 = $event.name

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
    console.log(data);
    this.changeClass(data);
}

placeMarker(data){    
    console.log(data);
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
    $("#SchedulepreviewModal").modal("show");
}
}

checkDisabled(){
    if(this.state && this.city && this.ClinicContactDetail.area){
        return false;
    }else{
        return true;
    }
}

// SearchLocation(data){
    //     if(this.lat != 51.678418 && this.lng != 7.809007 && data && data.trim().length>0){
        //         data.replace(" ","")
        //         let object = {
            //             search : data,
            //             lat : this.lat,
            //             lng : this.lng
            //         }
            //         this.userService.SearchLocation(object).subscribe(data=>{
                //             this.locationSuggestionDB = data.data.results
                //             console.log(data)
                //             this.ClinicContactDetail.database = []
                //             for (var i = 0; i < data.data.results.length; i++) {
                    //                 var string = data.data.results[i].name
                    //                 // var string = data.data.results[i].name+", "+data.data.results[i].formatted_address
                    //                 this.ClinicContactDetail.database.push(string)
                    //             }
                    //         })            
                    //     }
                    // }

                    // onAddLocation(data){
                        //     data = data.source.value
                        //     var index = -1
                        //     for (var i = 0; i < this.locationSuggestionDB.length; i++) {
                            //         // var string = this.locationSuggestionDB[i].name+", "+this.locationSuggestionDB[i].formatted_address
                            //         var string = this.locationSuggestionDB[i].name
                            //         if(string == data){
                                //             index = i
                                //             break;
                                //         }
                                //     }
                                //     if(index!= -1){
                                    //         this.lat = this.locationSuggestionDB[index].geometry.location.lat
                                    //         this.lng = this.locationSuggestionDB[index].geometry.location.lng            
                                    //     }
                                    // }

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
                                        this.SmartAssistantDetail.reg_fields = []
                                        for (var k = 0; k < this.smartAssistantRegFields.length; k++) {
                                            if(this.smartAssistantRegFields[k].status == true){
                                                this.SmartAssistantDetail.reg_fields.push(this.smartAssistantRegFields[k])
                                            }
                                        }
                                    }

                                    // GetSmartAssistantByPhone(data){
                                    //     if(this.ClinicContactDetail.userOwnClinic == "No"){            
                                    //         var object = {
                                    //             phone: data.trim()
                                    //         }
                                    //         this.userService.GetSmartAssistantByPhone(object).subscribe(data=>{
                                    //             console.log(data)
                                    //             if(data.response==true){
                                    //                 this.SmartAssistantDetail.name = data.data.name
                                    //             }else{
                                    //                 this.toastr.error(data.message,"Error")
                                    //             }
                                    //         })    
                                    //     }
                                    // }

                                    getHelpText(){
                                        this.userService.GetHelpText().subscribe(data=>{

                                            if(data.response==true){
                                                this.helpText = data.data
                                                console.log(this.helpText);
                                            }else{
                                                this.toastr.error(data.message,"Error")
                                            }
                                        })   
                                    }
                                    showModal(event,type){
                                        if(type=='pharmacy'){
                                            if(event.target.checked==true){
                                                //console.log(event);
                                                //alert('bumba');
                                                $('#pharmacy-credentials-modal').modal({
                                                    backdrop:'static',
                                                    keyboard:false
                                                });
                                            }
                                        }

                                        if(type=='diagnostics'){
                                            if(event.target.checked==true){
                                                //console.log(event);
                                                //alert('bumba');
                                                $('#diagnostics-credentials-modal').modal({
                                                    backdrop:'static',
                                                    keyboard:false
                                                });
                                            }
                                        }

                                        if(type=='ipd'){
                                            if(event.target.checked==true){
                                                //console.log(event);
                                                //alert('bumba');
                                                $('#ipd-credentials-modal').modal({
                                                    backdrop:'static',
                                                    keyboard:false
                                                });
                                            }
                                        }
                                    }
                                    cancelservice(type){
                                        if(type=='pharmacy'){
                                            $('#pharmacy-credentials-modal').modal('hide');
                                            this.Clinic_Pharmacy=false;
                                        }

                                        if(type=='diagnostics'){
                                            $('#diagnostics-credentials-modal').modal('hide');
                                            this.Clinic_Diagnostics=false;
                                        }
                                        if(type=='ipd'){
                                            $('#ipd-credentials-modal').modal('hide');
                                            this.Clinic_IPD=false;
                                        }
                                    }
                                    checkForm(type){
                                        if(type=='pharmacy'){
                                            console.log(this.clinicPharmacyCredentials);
                                            if(this.clinicPharmacyCredentials){
                                                if(this.clinicPharmacyCredentials.pharmacyName && this.clinicPharmacyCredentials.pharmacyEmail && this.clinicPharmacyCredentials.pharmacyPhone && this.clinicPharmacyCredentials.password ){
                                                    if(this.clinicPharmacyCredentials.confirmPassword==this.clinicPharmacyCredentials.pharmacyPassword){
                                                        this.pharmacyModelValidation=true;
                                                    }else{
                                                        this.pharmacyModelValidation=false;
                                                    }
                                                }else{
                                                    this.pharmacyModelValidation=false;
                                                }
                                            }else{
                                                this.pharmacyModelValidation=false;
                                            }
                                        }
                                    }



                                    savePharmacyDetails(){
                                        this.clinicPharmacyCredentials.clinic_id=this.ClinicContactDetail.clinic_id;
                                        console.log(this.clinicPharmacyCredentials);
                                        this.userService.createSmartPharmacyOnSignUp(this.clinicPharmacyCredentials).subscribe(data => {
                                            console.log(data)
                                            if (data.response == true) {
                                                $('#pharmacy-credentials-modal').modal('hide');
                                                this.PharmacyObjectId=data.pharmacyId
                                            }
                                        }, err => {
                                            console.log(err);
                                        });

                                    }


                                    saveDiagnosticsDetails(){
                                        this.clinicDiagnosticsCredentials.clinic_id=this.ClinicContactDetail.clinic_id;
                                        console.log(this.clinicDiagnosticsCredentials);

                                        this.userService.createSmartDiagnosticsOnSignUp(this.clinicDiagnosticsCredentials).subscribe(data => {
                                            console.log(data)
                                            if (data.response == true) {
                                                $('#diagnostics-credentials-modal').modal('hide');
                                                this.DiagnosticsObjectId=data.diagnosticsId
                                            }
                                        }, err => {
                                            console.log(err);
                                        })
                                    }

                                    saveIPDDetails(){
                                        this.clinicIpdCredentials.clinic_id=this.ClinicContactDetail.clinic_id;
                                        console.log(this.clinicIpdCredentials);

                                        this.userService.createSmartIpdOnSignUp(this.clinicIpdCredentials).subscribe(data => {
                                            console.log(data)
                                            if (data.response == true) {
                                                $('#ipd-credentials-modal').modal('hide');
                                                this.IpdObjectId=data.IpdId
                                            }
                                        }, err => {
                                            console.log(err);
                                        })
                                    }
                                    showMap(type){
                                        if(type=='auto'){
                                            this.enable_map=false
                                        }else{
                                            this.enable_map=true;
                                        }
                                    }

                                    showUndertakingInfo(){
                                        $('#undertaking-modal').modal('show');
                                    }

                                    // GetSmartAssistantByClinicId(){
                                        //     console.log("dsjm sfcjs jsd jf")
                                        //     this.userService.GetSmartAssistantByClinicId(this.ClinicContactDetail.clinic_id).subscribe(data => {
                                            //         console.log(data)
                                            //         if (data.response == true) {
                                                //         }
                                                //     }, err => {
                                                    //         console.log(err);
                                                    //     })
                                                    // }
                                                    resolved(captchaResponse: string, step) {
                                                        console.log(`Resolved captcha with response: ${captchaResponse}`);
                                                        if(step=='step1'){
                                                            this.captcha_step_1=true;
                                                        }
                                                        if(step=='step2'){
                                                            this.captcha_step_2=true;
                                                        }
                                                        if(step=='step3'){
                                                            this.captcha_step_3=true;
                                                        }
                                                        if(step=='step4'){
                                                            this.captcha_step_4=true;
                                                        }
                                                        if(step=='step5'){
                                                            this.captcha_step_5=true;
                                                        }
                                                        if(step=='step6'){
                                                            this.captcha_step_6=true;
                                                        }
                                                        if(step=='step7'){
                                                            this.captcha_step_7=true;
                                                        }
                                                        if(step=='step8'){
                                                            this.captcha_step_8=true;
                                                        }
                                                    }


                                                }