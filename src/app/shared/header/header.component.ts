import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl ,ReactiveFormsModule} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { environment } from '../../../environments/environment.prod';
declare var $;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [UserService]
})
export class HeaderComponent implements OnInit {
    stepOneForm
    mobile
    loading
    doctorData
    month
    day
    year
    numericMonth
    dataRegistration
    dataAppointment
    pateintPicPath
    dataDispensedPatients
    patientList
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
	uploadedPrescription
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
	subscriptionInfo
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
    getFinalOtp
    getTestReports
    reportPic
	expiryDate
	dd1
	th1
	month1
	year1
	patientContact
    Form = new FormControl(null, [Validators.required]);
    constructor(private formBuilder: FormBuilder,
        private userService: UserService,private toastr: ToastrService) {
        //this.getDoctor()
        this.admin = {}
        this.admin.landline = 0
    }

    ngOnInit() {
       this.admin = {}
       this.admin.landline = 0
       this.doctorData=[]
       this.newGlobalArray = []
       this.getDoctor()
	   
       this.newDocAllData = {}
       this.newDocAllData.qualification = []
       this.newDocAllData.clinic_details = {}
        this.pateintPicPath = environment.patientPic
        this.reportPic = environment.reportPic
        var options = { month: 'short' };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate()
        this.year = new Date().getFullYear()
        this.numericMonth = new Date().getMonth()+1

        this.dataRegistration = []
        this.dataAppointment = []
        this.dataDispensedPatients = []
        // this.lastVisit = []
        // this.countLastVisit = []
        this.dispensedPatient = {}
        this.getTestReports = {}
        //this.setAllShiftsForPreview()
		
		

    }
    checkPhone(){
        var value = $("#phoneNo").val();
		this.patientContact=value;
        console.log(value)
        if(value=='' || value == null || value == undefined || isNaN(value) || value.length!<10){
            this.toastr.warning('Invalid phone number', 'Warning')
            return
        }else{
            $("#show-otp").modal("show");
            this.GenerateOtp()
			$("#phoneNo").val('');
        }
    }
    getData(){
        this.patientList = []
        var checkOtp = 0
        checkOtp = $("#otpAbcd").val();
        if(parseInt(this.getFinalOtp) == checkOtp){
            this.loading = true
            var value =this.patientContact;
            var mobile = value
            var ob = {mobile}
            //ob.phone = value
            // console.log(ob)
            this.userService.AllDispensePatientsHistory(ob).subscribe((data)=>{
                // console.log(data)
                if(data.response){
                    for (var i = 0; i < data.arr.length; i++) {
                        // if(data.arr[i].registration.doctor_id.first_name){
                            this.patientList.push(data.arr[i])
                        // }
                    }
                    this.toastr.success(data.message, 'Success')
                    $("#show-otp").modal("hide");
                    $("#show-list").modal("show");
                }
                this.loading = false
            },err=>{
                console.log(err)
            })
        }else{
             this.toastr.error('Wrong password',"Error")
        }

    }

    GenerateOtp(){
        var value =this.patientContact;
        // console.log(value)
        var phone = value
            var ob = {phone}
        //var varifyOtp
        var checkOtp = 0
        checkOtp = $("#otpAbcd").val();
         // console.log(ob)
         // console.log(checkOtp)
        this.loading = true
        this.userService.GenerateOtpForActiveDoctor(ob).subscribe(data=>{
            // console.log(data)
            if(data.response==true){
                this.getFinalOtp = data.otpPhone
                this.toastr.success(data.message,"Success");
				$("#otpAbcd").val('');
            }else{
                this.toastr.error(data.message,"Error")
            }
            this.loading = false
        }, err =>{
            console.log(err)
        })
    }

    getDoctor(){
        this.adminDocotrsArray = []
        this.userService.GetAllDoctors().subscribe((data)=>{
            // console.log(data)
            this.doctorData = data.data
            // console.log(this.doctorData)
        },err=>{
        console.log(err)
        })
    }
    resendOTP(){
        this.GenerateOtp()
    }

    openPrescriptionPreview(data){
        this.admin = {}
		this.uploadedPrescription=null;
        // console.log(data)
        this.prescription_id = data.prescription_id
        this.uploadedPrescription = data.image
        this.dispensedPatient = data.registration
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
        this.lastDate = data.createdAt
        this.followUpDate.setDate(new Date(data.createdAt).getDate() + this.finalfollowUpDays);
        //console.log(this.followUpDate)
        var options = { month: 'short' };
        this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
        this.followUpDay = this.followUpDate.getDate()
        this.followUpYear = this.followUpDate.getFullYear()
        this.minutes = data.precription.minutes
        this.seconds = data.precription.seconds
        if(typeof data.doctor_id ==  'object'){
            this.docName = data.doctor_id.first_name
            this.docSpecialization =  data.registration.doctor_id.specialization
            this.newDocAllData = data.registration.doctor_id
        }else{
                if(data.registration.doctor_id.clinic_name == null || data.registration.doctor_id.clinic_name == '' || data.registration.doctor_id.clinic_name == undefined
                    ){
                    for (var i = 0; i < this.doctorData.length; i++) {
                        if(this.doctorData[i]._id == data.doctor_id){
                            this.docAffiliation = 
                            this.docName =  this.doctorData[i].first_name
                            this.docSpecialization =  this.doctorData[i].specialization
                            //if(this.adminDocotrsArray)
                            this.newGlobalArray = this.doctorData[i]
                            this.userService.GetDoctorDetail(this.doctorData[i].itemId).subscribe(data => {
                                //console.log(data)
                                if(data.response==true){
                                    //this.dataIpd = data.dataIpd
                                    for (var i = 0; i < data.doctorsOfSameClinic.length; i++) {
                                        if(data.doctorsOfSameClinic[i]){
                                            if(data.doctorsOfSameClinic[i].type_of_doctor == "admin_doctor"){
                                                this.admin = data.doctorsOfSameClinic[i]
                                                this.newDocAllData =  data.doctorsOfSameClinic[i]
                                                break
                                            }
                                        }
                                    }
                                     // console.log("in the service",this.admin)
                                     this.newDocAllData = this.admin
                                   // console.log(this.newDocAllData.clinic_details.landline)
                                    // this.setAllShiftsForPreview(this.newGlobalArray)
                                }
                            }, err => {
                                console.log(err);
                            })
                            // console.log(this.admin)
                            // console.log(this.newDocAllData)
                            this.setAllShiftsForPreview()
                            // this.landlineNo = this.admin.clinic_details.landline
                            // this.clinicName = this.admin.clinic_details.clinic_name
                            // this.addressClinic = this.admin.clinic_details.address
                            // this.areaClinic = this.admin.clinic_details.area
                            // this.cityClinic = this.admin.clinic_details.city
                            // this.stateClinic = this.admin.clinic_details.state
                            //this.mobileClinic = this.admin.clinic_details.mobile
                            // this.newDocAllData = this.doctorData[i]
                           // console.log("in if condition" , this.newDocAllData)
                        }
                    }
                }
            // console.log(this.newDocAllData)
            // console.log(this.newGlobalArray)
        }
        // this.languageOptionSelected = data.precription.languageOptionSelected
        //$("#show-list").modal("hide");
		if(this.uploadedPrescription){
			$("#uploadedPrescriptionModal").modal("show");
		}else{
        $("#previewModal").modal("show");
		}
    }

    checkOptionOfPad(value){
        // console.log(value)
        for (var i = 0; i < this.doctorData.length; i++) {
            if(!this.doctorData[i].pad_customization_options || this.doctorData[i].pad_customization_options.length<1 || this.doctorData[i].pad_customization_options == ""){
                this.newDocData = this.doctorData[i].clinic_details.address
                return true
            }else{
                for (var i = 0; i < this.doctorData[i].pad_customization_options.length; i++) {
                    if(this.doctorData[i].pad_customization_options[i].value == value){
                        if(this.doctorData[i].pad_customization_options[i].status == true){
                            return true
                        }else{
                            return false
                        }
                    }
                }
            }
        }
    }

    getFooterText(){
        for (var i = 0; i < this.doctorData.length; i++) {
            if(!this.doctorData[i].pad_customization_options || this.doctorData[i].pad_customization_options.length<1){
                return "Not for Medico-Legal Purpose"
            }else{
                return this.doctorData[i].pad_customization_options[12].text
            }
        }
    }

    getHeaderText(){
        for (var i = 0; i < this.doctorData.length; i++) {
            if(!this.doctorData[i].pad_customization_options || this.doctorData[i].pad_customization_options.length<1){
                return "PLEASE TAKE PRIOR APPOINTMENT"
            }else{
                return this.doctorData[i].pad_customization_options[8].text
            }
        }
    }

    selectClass(){
        document.getElementById("parent").style.opacity = "0";
    }

    onHoverSignIn(){
        document.getElementById("parent").style.opacity = "1";
    }
    getDocNameList(id){
        if(typeof id ==  'object'){
            return id.first_name
        }else{
            for (var i = 0; i < this.doctorData.length; i++) {
                if(this.doctorData[i]._id == id){
                    return this.doctorData[i].first_name
                }
            }
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
        for (var i = 0; i < this.newGlobalArray.consultation_schedule.length; i++) {
            var string = ''
            if(this.newGlobalArray.consultation_schedule[i].Monday == true){
                Mon = true
                if(string == ''){
                    string = "Mon"
                }else{
                    string = string +", "+"Mon"
                }
            }
            if(this.newGlobalArray.consultation_schedule[i].Tuesday == true){
                Tue = true
                if(string == ''){
                    string = "Tue"
                }else{
                    string = string +", "+"Tue"
                }
            }
            if(this.newGlobalArray.consultation_schedule[i].Wednesday == true){
                Wed = true
                if(string == ''){
                    string = "Wed"
                }else{
                    string = string +", "+"Wed"
                }
            }
            if(this.newGlobalArray.consultation_schedule[i].Thursday == true){
                Thu = true
                if(string == ''){
                    string = "Thu"
                }else{
                    string = string +", "+"Thu"
                }
            }
            if(this.newGlobalArray.consultation_schedule[i].Friday == true){
                Fri = true
                if(string == ''){
                    string = "Fri"
                }else{
                    string = string +", "+"Fri"
                }
            }
            if(this.newGlobalArray.consultation_schedule[i].Saturday == true){
                Sat = true
                if(string == ''){
                    string = "Sat"
                }else{
                    string = string +", "+"Sat"
                }
            }
            if(this.newGlobalArray.consultation_schedule[i].Sunday == true){
                Sun = true
                if(string == ''){
                    string = "Sun"
                }else{
                    string = string +", "+"Sun"
                }
            }
            let object = {
                day:string,
                shifts:this.newGlobalArray.consultation_schedule[i].shifts
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
    createPdf(){
        // console.log(this.dispensedPatient)
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
	createPdf1(img){
		// console.log(img);
        // console.log(this.dispensedPatient)
        $('#uploadedPrescriptionModalPDF').printThis({
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
    openReportPreview(data){
        this.getTestReports = []
        this.getTestReports  = data.registration
        // console.log(this.getTestReports.reportPics)
        $("#Test-report-Modal").modal("show");
    }

    checkReports(data:any){
        if(data.registration.reportPics.length > 0){
            return true
        }else{
            return false
        }
    }

    checkPrescription(data:any){
        if( data.precription){
            return true
        }else{
            return false
        }
    }

}
