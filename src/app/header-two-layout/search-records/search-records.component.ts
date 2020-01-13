import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { environment } from '../../../environments/environment.prod';
declare var $;
import { Router,ActivatedRoute } from '@angular/router'; 
import { MatRadioChange } from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
declare var jsPDF: any; 
import { DatePipe } from '@angular/common';
declare var wheelzoom

export interface SearchRecord {
    date: string;
    name: string;
    phone: number;
    address: number;
    registration : {
        pateintName: string
        pateintPhone:number
        createdAt:string
    },
}
@Component({
    selector: 'app-search-records',
    templateUrl: './search-records.component.html',
    styleUrls: ['./search-records.component.css'],
    providers: [UserService]
})
export class SearchRecordsComponent implements OnInit {
	fromDate = new Date()
	toDate = new Date()
	fromDate1 = new Date()
	toDate1= new Date()
	newDate = new Date()
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
    DischargeDate
    referDoctorName
    sortedData
    prescriptionCount = 0
    dispensedPatientSelected
    headerClicked: number
    uploadedPrescriptionPath
    constructor(private UserService: UserService, private toastr: ToastrService, private datePipe: DatePipe) { }

    ngOnInit() {
        $(".custom-modal").hide();
        $(".kk").click(function(){
            $(".custom-modal").fadeIn();
        });
        $(".dlt").click(function(){
            $(".custom-modal").fadeOut();
        });
        wheelzoom(document.querySelector('img.zoom'));
        
        $("li").click(function(){

            $("li.one").removeClass('active');
        });
        $("li#one").click(function(){

            $(this).addClass('active');
        });
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        console.log(this.doctorData)
        this.newDate.setDate(this.newDate.getDate()+1)
        this.fromDate1.setDate(this.fromDate1.getDate() - 6)
        this.sortedData = []
        this.activatetab(1)
        this.activatedtab = 0
        this.doctorsDetails = JSON.parse(localStorage['doctorsOfSameClinic'])  
        console.log(this.doctorsDetails)
        this.pateintPicPath = environment.patientPic
        var options = { month: 'short' };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate()
        this.year = new Date().getFullYear()
        this.numericMonth = new Date().getMonth()+1
        this.dataRegistration = []  
        this.dataAppointment = []
        this.dataDispensedPatients = []
        this.lastVisit = []
        this.countLastVisit = []
        this.dispensedPatient = {}
        this.setAllShiftsForPreview()
        this.searchRecords = []
        this.uploadedPrescriptionPath =  environment.uploadedPrescriptionPath
    }
    deleteRecord(list){
        console.log(list)
        this.UserService.DeleteOneDispensedPatients(list).subscribe(data =>{
            if(data.response){
                this.ngOnInit()
                this.toastr.success(data.message,'Success')
            }else{
                this.toastr.error(data.message,'Error')
            }
        },err =>{
            console.log(err)
        })
    }
    activatetab(i){
        this.activatedtab= i
        var object
        object ={}
        var date = new Date()
        object.doctor_id = this.doctorData._id
        object.end_date= new Date()
        if(i==0){
            object.start_date = date
        }
        else if (i==1) {
            object.start_date = new Date(date.setDate(date.getDate()-6))
        }
        else if(i==2){
            object.start_date = new Date(date.setDate(date.getDate()-13))
        }
        else if(i==3){
            object.start_date = new Date(date.setMonth(date.getMonth()-1))
        }
        else if(i==4){
            object.start_date =new Date(date.setMonth(date.getMonth()-3))
        }
        else if(i==5){
            object.start_date = new Date(date.setMonth(date.getMonth()-6))
        }
        else if(i==6){
            object.start_date = new Date(date.setFullYear(date.getFullYear()-1))
        }
        else if(i==7){
            object.start_date = new Date()
            object.maximum = true
        }
        this.fromDate = new Date(object.start_date)
        this.toDate = new Date(object.end_date)
        this.getPatientData(object)
    }
    getPatientData(data){
        this.prescriptionCount = 0
        this.loading = true
        this.UserService.AllDispensePatientsForSearchRecords(data).subscribe(data => {
            console.log(data)
            this.listOfPatient= data.dataDispensed
            this.sortedData = data.dataDispensed.slice();
            this.prescriptionCount = this.sortedData.length
            this.loading = false
        }, err => {
            console.log(err);
        })
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
    go(){
        if(new Date(this.toDate1).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
            this.toastr.warning("Invalid date selected","Warning")
            return
        }
        if(new Date(this.fromDate1).setHours(0,0,0,0) !> new Date(this.toDate1).setHours(0,0,0,0)){
            this.toastr.warning("Invalid date selected","Warning")
            return
        }
        var ob 
        ob = {}
        ob.doctor_id = this.doctorData._id
        ob.start_date = this.fromDate1
        ob.end_date = this.toDate1
        this.getPatientData(ob)		
    }
    getDocName(id){
        if(id == this.doctorData._id){
            return this.doctorData.first_name
        }
    }
    openPrescriptionPreview(data){
        this.prescription_id = data.prescription_id
        this.dispensedPatient = data.registration
        console.log(data)
        this.referDoctorName = data.registration.doctor_id
        this.DischargeDate = data.createdAt
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

        $("#previewModal").modal("show");
    }
    dispensedPatientSelectedOpen(list){
        this.dispensedPatientSelected = list
        // $('#uploadedPrescriptionModal').modal('show')
        $(".custom-modal").fadeIn();
    }
    checkOptionOfPad(value){
        // console.log(this.doctorData)
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
    createPdf(){
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
    printImage(){
        $('#previewModalImage').printThis({
            debug: false,
            importCSS: true,
            importStyle: true,
            printContainer: true,
            pageTitle: "Prescription",
            removeInline: false,
            printDelay: 222,
            header: null,
            formValues: true
        });
    }

    searchByName(){
        this.prescriptionCount =0
        if(this.searchInput == null || this.searchInput=='' || this.searchInput==undefined || this.searchInput == 0 ||
            this.searchInput.toString().trim().length<1) {
            this.toastr.warning("Invalid search input","Warning")
    }else{
        this.loading = true
        var object = {
            doctor_id: this.doctorData._id,
            search: this.searchInput                
        }
        this.UserService.FindPatientByName(object).subscribe(data => {
            console.log(data)
            this.listOfPatient = data.data
            this.sortedData = this.listOfPatient
            this.prescriptionCount = this.listOfPatient.length
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

getTableHeaderClass(id){
    if(this.headerClicked == id){
        return 'selected'
    }else{
        return ''
    }
}

setTableHeaderClass(id){
    this.headerClicked = id
}

sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
        this.sortedData = data;
        return;
    }

    this.sortedData = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
            case 'date': return compare(a.createdAt, b.createdAt, isAsc);
            case 'name': return compare(a.registration.pateintName, b.registration.pateintName, isAsc);
            case 'phone': return compare(a.registration.pateintPhone, b.registration.pateintPhone, isAsc);
            case 'address': return compare(a.registration.location, b.registration.location, isAsc);
            case 'count': return compare(a.registration.lastVisit.count, b.registration.lastVisit.count, isAsc);
            default: return 0;
        }
    });
}
exportPdf(){
    var head = [
    { title: '#', dataKey: "id"},
    { title: 'Date', dataKey: "date"},
    { title: 'Name', dataKey: "name"},
    { title: 'Phone', dataKey: "phone"},
    { title: 'Address', dataKey:"address"},
    // { title: 'Prescription Count', dataKey:"count"},
    ]
    var csvData = []
    var totalDuration
    var countData = 0
    var dates = []
    var ob ;
    for (var i = 0; i < this.sortedData.length; i++) {

        ob = {}
        if(this.sortedData[i].registration.location){
            ob.address = this.sortedData[i].registration.location
        }else{
            ob.address = 'Other'
        }
        // if(this.sortedData[i].registration.lastVisit.status){
            //     ob.count = this.sortedData[i].registration.lastVisit.count + 1
            // }else{
                //     ob.count = 1
                // }
                ob.id = i+1
                ob.date = this.datePipe.transform(this.sortedData[i].createdAt, 'dd-MM-yyyy, h:mm a')
                ob.name = this.sortedData[i].registration.pateintName
                ob.phone = this.sortedData[i].registration.pateintPhone 
                //ob.address = this.sortedData[i].registration.location
                countData++
                csvData.push(ob)
            }
            // ob = {}
            //     ob.id=''
            //     ob.date=''
            //     ob.name=''
            //     ob.phone=''
            //     ob.count=countData
            //     csvData.push(ob)
            // csvData.count = countData

            var date = new Date().toJSON().toString().substr(0,10)
            var doc = new jsPDF('p', 'pt');
            doc.autoTable(head, csvData, {
                theme: 'grid',
                styles: {
                    overflow: 'linebreak',
                },
                margin: 5,
                fontSize:8,
                tableWidth: 'auto',
                showHeader: 'everyPage'
            });
            doc.save('Search-Record'+"("+date+")");
        }

    }
    function compare(a: number | string, b: number | string, isAsc: boolean) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }