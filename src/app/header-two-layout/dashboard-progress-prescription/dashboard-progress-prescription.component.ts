import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard-progress-prescription',
  templateUrl: './dashboard-progress-prescription.component.html',
  styleUrls: ['./dashboard-progress-prescription.component.css']
})
export class DashboardProgressPrescriptionComponent implements OnInit {

    activatedtab
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false
    }
    fromDate = new Date()
    toDate = new Date()
    fromDate1 = new Date()
    toDate1 = new Date()
    newDate = new Date()
    loadingMedication: boolean
    loadingInvestigation: boolean
    loadingDiagnosis: boolean
    loadingSurgery: boolean
    doctorData
    medicationSpectrum
    medicationPrescribed
    maximumFollowUpDays
    // maximumFollowUpDaysPercentage
    investigationSpectrum
    investigationWithPrec
    countPathology
    countUsg
    countXray
    countMri
    countCtScan
    countOther
    investigationWithPrecentage
    pathologyPercentage
    usgPercentage
    xrayPercentage
    mriPercentage
    ctScanPercentage
    otherPercentage
    symptomsSpectrum
    diagnosisArray
    surgerySpectrum
    surgeryArray
    surgeryWithPrecp
    surgeryWithPercentage
    noOfmedicinesPrescribed
    commanArray
    testArray
    investigationUniqueArray
    toolTip = "This is demo text"
    position = "right"
    constructor(private userService: UserService,private datePipe: DatePipe, private toastr: ToastrService) { }

    ngOnInit() {
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        console.log(this.doctorData)
        this.medicationSpectrum = []
        this.medicationPrescribed = []
        this.surgeryArray = []
        this.investigationSpectrum = []
        this.surgerySpectrum = []
        this.symptomsSpectrum = []
        this.commanArray = []
        this.testArray = []
        this.newDate.setDate(this.newDate.getDate()+1)
        this.fromDate1.setDate(this.fromDate1.getDate()-6)
        this.activatetab(1)
    }
    
    activatetab(ii){
        this.activatedtab = ii
        var object
        object ={}
        var date = new Date()
        //object.smart_diagnostics_id = this.doctorData.smart_diagnostics_id
        object.end_date= new Date()
        if(ii==1){
            object.start_date = date
        }
        // else if (ii==1) {
        //     object.start_date = new Date(date.setDate(date.getDate()-6))
        // }
        // else if(ii==2){
        //     object.start_date = new Date(date.setDate(date.getDate()-13))
        // }
        // else if(ii==3){
        //     object.start_date = new Date(date.setMonth(date.getMonth()-1))
        // }
        // else if(ii==4){
        //     object.start_date =new Date(date.setMonth(date.getMonth()-3))
        // }
        // else if(ii==5){
        //     object.start_date = new Date(date.setMonth(date.getMonth()-6))
        // }
        // else if(ii==6){
        //     object.start_date = new Date(date.setFullYear(date.getFullYear()-1))
        // }
        // else if(ii==7){
        //     object.start_date = new Date()
        //     object.maximum = true
        // }
        this.fromDate = new Date(object.start_date)
        this.toDate = new Date(object.end_date)
        object.doctor_id = this.doctorData._id
        object.doctorid = this.doctorData.itemId
        console.log(object)
        this.loadingMedication = true
        this.loadingInvestigation = true
        this.loadingDiagnosis = true
        this.loadingSurgery = true
        this.PrescriptionAnalyticsMedication(object)
        this.PrescriptionAnalyticsInvestigation(object)
        this.PrescriptionAnalyticsDiagnosis(object)
        this.PrescriptionAnalyticsSurgery(object)

    }

    getClass(i){
        if (i==this.activatedtab) {
            return 'active'
        }else {
            return ''
        }
    }

    PrescriptionAnalyticsMedication(object){  
        this.userService.PrescriptionAnalyticsMedication(object).subscribe((data)=>{
            console.log(data)
            this.medicationSpectrum = []
            this.medicationPrescribed = []
            this.maximumFollowUpDays = 0
            // this.maximumFollowUpDaysPercentage = 0 
            if(data.response){
                this.calculateMedicationSpectrum(data)        
            }
            this.loadingMedication = false
        },err=>{
            console.log(err)
        })
    }

    calculateMedicationSpectrum(data){
        // for unique medicines
        this.medicationSpectrum = data.dataMedicationSpectrum
        var followUpArray = []
        if(data.dataMedicinesPrescribed.length>0){
            for (var i = 0; i < data.dataMedicinesPrescribed.length; i++) {
                if(data.dataMedicinesPrescribed[i].precription.followDaysComplete){
                    followUpArray.push(data.dataMedicinesPrescribed[i].precription.finalfollowUpDays)
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.tab.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.tab[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.tab[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.tab[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.tab[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.tab[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.tab[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.cap.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.cap[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.cap[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.cap[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.cap[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.cap[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.cap[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.syp.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.syp[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.syp[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.syp[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.syp[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.syp[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.syp[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.susp.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.susp[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.susp[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.susp[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.susp[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.susp[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.susp[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.emulsn.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.emulsn[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.emulsn[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.emulsn[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.emulsn[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.emulsn[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.emulsn[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.solution.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.solution[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.solution[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.solution[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.solution[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.solution[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.solution[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.injection.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.injection[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.injection[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.injection[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.injection[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.injection[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.injection[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.powder.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.powder[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.powder[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.powder[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.powder[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.powder[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.powder[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.cream.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.cream[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.cream[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.cream[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.cream[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.cream[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.cream[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.aerosols.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.aerosols[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.aerosols[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.aerosols[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.aerosols[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.aerosols[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.aerosols[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.mouthwash.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.mouthwash[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.mouthwash[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.mouthwash[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.mouthwash[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.mouthwash[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.mouthwash[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.gel.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.gel[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.gel[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.gel[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.gel[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.gel[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.gel[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.drops.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.drops[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.drops[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.drops[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.drops[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.drops[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.drops[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.lotion.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.lotion[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.lotion[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.lotion[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.lotion[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.lotion[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.lotion[j].med_name[0].value
                            })
                        }
                    }
                }
                for(var j=0; j < data.dataMedicinesPrescribed[i].precription.medication.ointment.length; j++){
                    if(data.dataMedicinesPrescribed[i].precription.medication.ointment[j].frequency != "Frequency"){
                        var boolean = false
                        for(var k=0; k < this.medicationPrescribed.length; k++){
                            if(this.medicationPrescribed[k].type == data.dataMedicinesPrescribed[i].precription.medication.ointment[j].name && 
                                this.medicationPrescribed[k].med == data.dataMedicinesPrescribed[i].precription.medication.ointment[j].med_name[0].value){
                                boolean = true
                                break
                            }
                        }
                        if(boolean == false){
                            this.medicationPrescribed.push({
                                short_name: data.dataMedicinesPrescribed[i].precription.medication.ointment[j].short_name,
                                type: data.dataMedicinesPrescribed[i].precription.medication.ointment[j].name,
                                med: data.dataMedicinesPrescribed[i].precription.medication.ointment[j].med_name[0].value
                            })
                        }
                    }
                }
            }
            for (var i = 0; i < this.medicationPrescribed.length; i++) {
                this.medicationPrescribed[i].occurrence = this.calculateMedicineOccurrence(this.medicationPrescribed[i],data.dataMedicinesPrescribed)
            }
            this.medicationPrescribed.sort(function(a, b) {    
                var nameA = a.occurrence,
                    nameB = b.occurrence;    
                if (nameA < nameB) {        
                    return 1
                }
                if (nameA > nameB){
                    return -1    
                }
            })
            for (var i = 0; i < followUpArray.length; i++) {
                if(this.maximumFollowUpDays < followUpArray[i]){
                    this.maximumFollowUpDays = followUpArray[i]
                }
            }
            var count
            count = 0
            for (var i = 0; i < followUpArray.length; i++) {
                if(this.maximumFollowUpDays == followUpArray[i]){
                    count++
                }
            }
            // this.maximumFollowUpDaysPercentage = this.getData(this.getPercentage(count,followUpArray.length))
            this.noOfmedicinesPrescribed = 0
            for (var i = 0; i < this.medicationPrescribed.length; i++) {
                this.noOfmedicinesPrescribed += this.medicationPrescribed[i].occurrence
            }
        }
        this.medicationPrescribed.sort((a, b) => parseInt(b.occurrence)-parseInt(a.occurrence));
        // console.log(this.medicationPrescribed)//unique medicines found
        // console.log(this.maximumFollowUpDays)
        // console.log(this.maximumFollowUpDaysPercentage)

    }
    calculateMedicineOccurrence(med,array){
        var count
        count = 0
        for (var i = 0; i < array.length; i++) {
            for(var j=0; j < array[i].precription.medication.tab.length; j++){
                if(array[i].precription.medication.tab[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.tab[j].name && 
                    med.med == array[i].precription.medication.tab[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.cap.length; j++){
                if(array[i].precription.medication.cap[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.cap[j].name && 
                    med.med == array[i].precription.medication.cap[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.syp.length; j++){
                if(array[i].precription.medication.syp[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.syp[j].name && 
                    med.med == array[i].precription.medication.syp[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.susp.length; j++){
                if(array[i].precription.medication.susp[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.susp[j].name && 
                    med.med == array[i].precription.medication.susp[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.emulsn.length; j++){
                if(array[i].precription.medication.emulsn[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.emulsn[j].name && 
                    med.med == array[i].precription.medication.emulsn[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.solution.length; j++){
                if(array[i].precription.medication.solution[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.solution[j].name && 
                    med.med == array[i].precription.medication.solution[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.injection.length; j++){
                if(array[i].precription.medication.injection[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.injection[j].name && 
                    med.med == array[i].precription.medication.injection[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.powder.length; j++){
                if(array[i].precription.medication.powder[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.powder[j].name && 
                    med.med == array[i].precription.medication.powder[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.cream.length; j++){
                if(array[i].precription.medication.cream[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.cream[j].name && 
                    med.med == array[i].precription.medication.cream[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.aerosols.length; j++){
                if(array[i].precription.medication.aerosols[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.aerosols[j].name && 
                    med.med == array[i].precription.medication.aerosols[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.mouthwash.length; j++){
                if(array[i].precription.medication.mouthwash[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.mouthwash[j].name && 
                    med.med == array[i].precription.medication.mouthwash[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.gel.length; j++){
                if(array[i].precription.medication.gel[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.gel[j].name && 
                    med.med == array[i].precription.medication.gel[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.drops.length; j++){
                if(array[i].precription.medication.drops[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.drops[j].name && 
                    med.med == array[i].precription.medication.drops[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.lotion.length; j++){
                if(array[i].precription.medication.lotion[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.lotion[j].name && 
                    med.med == array[i].precription.medication.lotion[j].med_name[0].value){
                    count++
                }
            }
            for(var j=0; j < array[i].precription.medication.ointment.length; j++){
                if(array[i].precription.medication.ointment[j].frequency != "Frequency" && 
                    med.type == array[i].precription.medication.ointment[j].name && 
                    med.med == array[i].precription.medication.ointment[j].med_name[0].value){
                    count++
                }
            }
        }
        return count
    }

    PrescriptionAnalyticsInvestigation(object){
        this.userService.PrescriptionAnalyticsInvestigation(object).subscribe((data)=>{
            console.log(data)
            this.investigationSpectrum =  []
            this.investigationWithPrec = 0
            this.countPathology = 0
            this.countUsg = 0
            this.countXray = 0
            this.countMri = 0
            this.countCtScan = 0
            this.countOther = 0
            this.investigationWithPrecentage = 0
            this.pathologyPercentage
            this.usgPercentage = 0
            this.xrayPercentage = 0
            this.mriPercentage = 0
            this.ctScanPercentage = 0
            this.otherPercentage = 0 
            this.testArray = [] 
            this.investigationUniqueArray = []
            if(data.response){
                for (var i = 0; i < data.dataInvestigationSpectrum.length; i++) {
                    this.investigationSpectrum.push({type:data.dataInvestigationSpectrum[i].type,
                        data:data.dataInvestigationSpectrum[i].data,
                        count:0
                    })
                }             
                this.investigationWithPrec = data.dataInvestigationPrescribed.length
                this.investigationWithPrecentage = (data.dataInvestigationPrescribed.length*100)/data.dataInvestigationPrescribedTotal   
                for (var k = 0; k < data.dataInvestigationPrescribed.length; k++) {
                    for (var l = 0;l < data.dataInvestigationPrescribed[k].precription.investigationArray.length; l++) { 
                        for (var m = 0; m <  data.dataInvestigationPrescribed[k].precription.investigationArray[l].values.length; m++) {                     
                            var boolean = false
                            for (var a = 0; a < this.investigationUniqueArray.length; a++) {
                                if(data.dataInvestigationPrescribed[k].precription.investigationArray[l].name == this.investigationUniqueArray[a].type &&
                                    data.dataInvestigationPrescribed[k].precription.investigationArray[l].values[m].display == this.investigationUniqueArray[a].name){

                                    boolean = true
                                    break;
                                }
                            }
                            if(boolean == false){
                                this.investigationUniqueArray.push({
                                    type:data.dataInvestigationPrescribed[k].precription.investigationArray[l].name,
                                    name: data.dataInvestigationPrescribed[k].precription.investigationArray[l].values[m].display,
                                    count:0
                                })
                            }
                        }
                    }
                }
                for (var i = 0; i < this.investigationUniqueArray.length; i++) {
                    for (var k = 0; k < data.dataInvestigationPrescribed.length; k++) {
                        for (var l = 0;l < data.dataInvestigationPrescribed[k].precription.investigationArray.length; l++) { 
                            for (var m = 0; m <  data.dataInvestigationPrescribed[k].precription.investigationArray[l].values.length; m++) {
                                if(data.dataInvestigationPrescribed[k].precription.investigationArray[l].name == this.investigationUniqueArray[i].type &&
                                data.dataInvestigationPrescribed[k].precription.investigationArray[l].values[m].display == this.investigationUniqueArray[i].name){
                                    this.investigationUniqueArray[i].count++
                                }
                            }
                        }
                    }
                    if(this.investigationUniqueArray[i].type == "Pathology"){
                        this.countPathology +=this.investigationUniqueArray[i].count
                    }
                    else if(this.investigationUniqueArray[i].type== "Ultrasound"){
                        this.countUsg +=this.investigationUniqueArray[i].count
                    }
                    else if(this.investigationUniqueArray[i].type== "X-Ray"){
                        this.countXray +=this.investigationUniqueArray[i].count
                    }
                    else if(this.investigationUniqueArray[i].type== "MRI"){
                        this.countMri +=this.investigationUniqueArray[i].count
                    }
                    else if(this.investigationUniqueArray[i].type== "CT-Scan"){
                        this.countCtScan +=this.investigationUniqueArray[i].count
                    }else{
                        this.countOther++
                    }
                }
                console.log("test array", this.investigationUniqueArray)
                var totalPrecriArrayLength = 0
                totalPrecriArrayLength = (this.countPathology + this.countUsg + this.countXray + this.countMri + this.countCtScan + this.countOther)         
                this.pathologyPercentage = (this.countPathology*100)/totalPrecriArrayLength
                this.usgPercentage = (this.countUsg*100)/totalPrecriArrayLength
                this.xrayPercentage = (this.countXray*100)/totalPrecriArrayLength
                this.mriPercentage = (this.countMri*100)/totalPrecriArrayLength
                this.ctScanPercentage = (this.countCtScan*100)/totalPrecriArrayLength
                this.otherPercentage = (this.countOther*100)/totalPrecriArrayLength
            }
            this.loadingInvestigation = false
        },err=>{
            console.log(err)
        })
    }

    PrescriptionAnalyticsDiagnosis(object){
        this.userService.PrescriptionAnalyticsDiagnosis(object).subscribe((data) =>{
            console.log(data)
            this.symptomsSpectrum = []
            this.diagnosisArray = []
            if(data.response){
                for (var i = 0; i < data.dataSymptomsSpectrum.length; i++) {
                   this.symptomsSpectrum.push({
                       type:data.dataSymptomsSpectrum[i].type,
                       data:data.dataSymptomsSpectrum[i].data
                   })
                }
                for (var i = 0; i < data.dataSymptomsPrescribed.length; i++) {
                    for (var j = 0; j < data.dataSymptomsPrescribed[i].precription.diagnosisSelected.length; j++) {
                        var boolean = false
                        for (var k = 0; k < this.diagnosisArray.length; k++) {
                            if(this.diagnosisArray[k].value==data.dataSymptomsPrescribed[i].precription.diagnosisSelected[j].display){
                                boolean = true
                                break;
                            }
                        }
                        if(boolean == false){            
                            this.diagnosisArray.push({
                                value: data.dataSymptomsPrescribed[i].precription.diagnosisSelected[j].display,
                                occurrence: 0,
                                percentage: 0
                            })    
                        }
                    }
                }
                for (var k = 0; k < this.diagnosisArray.length; k++) {
                    var  count = 0
                    var totalLengthDiagnosis = 0
                    for (var i = 0; i < data.dataSymptomsPrescribed.length; i++) {
                        for (var j = 0; j < data.dataSymptomsPrescribed[i].precription.diagnosisSelected.length; j++) {
                            if(data.dataSymptomsPrescribed[i].precription.diagnosisSelected[j].display){
                                totalLengthDiagnosis++    
                            }
                            if(this.diagnosisArray[k].value == data.dataSymptomsPrescribed[i].precription.diagnosisSelected[j].display){
                                count++
                            }
                            this.diagnosisArray[k].occurrence = count
                            this.diagnosisArray[k].percentage = (count*100)/totalLengthDiagnosis
                        }
                    }
                }
                this.diagnosisArray.sort((a, b) => parseInt(b.occurrence)-parseInt(a.occurrence));
            }
            this.loadingDiagnosis = false
        },err =>{
            console.log(err)
        })
    }

    PrescriptionAnalyticsSurgery(object){
        this.userService.PrescriptionAnalyticsSurgery(object).subscribe((data) =>{
            console.log(data)
            this.surgerySpectrum = []
            this.surgeryArray = []
            this.surgeryWithPrecp = 0
            this.surgeryWithPercentage = 0
            if(data.response){
                for (var i = 0; i < data.dataSurgerySpectrum.length; i++) {
                    this.surgerySpectrum.push({
                        type:data.dataSurgerySpectrum[i].type,
                        data:data.dataSurgerySpectrum[i].data
                    })
                }
                var count = 0
                this.surgeryWithPrecp = data.dataSurgeryPrescribed.length
                this.surgeryWithPercentage = (data.dataSurgeryPrescribed.length*100)/data.dataSurgeryPrescribedTotal
                for (var i = 0; i < data.dataSurgeryPrescribed.length; i++) {
                    for (var j = 0; j < data.dataSurgeryPrescribed[i].precription.surgerySelectedArray.length; j++) {
                        if(data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].procedure_name[0].display){
                            count++
                        }
                        var boolean = false
                        for (var k = 0; k < this.surgeryArray.length; k++) {
                              if(this.surgeryArray[k].data==data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].procedure_name[0].display &&
                                  this.surgeryArray[k].type==data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].sub_speciality){
                                boolean = true
                                break;
                            }
                        }
                        if(boolean == false){            
                            this.surgeryArray.push({
                                data:data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].procedure_name[0].display,
                                type:data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].sub_speciality,
                                occurence:0,
                                percentage:0

                            })    
                        } 
                    }
                }
                for (var a = 0; a < this.surgeryArray.length; a++) {
                     for (var i = 0; i < data.dataSurgeryPrescribed.length; i++) {
                        for (var j = 0; j < data.dataSurgeryPrescribed[i].precription.surgerySelectedArray.length; j++) {
                            if(this.surgeryArray[a].data==data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].procedure_name[0].display &&
                                this.surgeryArray[a].type==data.dataSurgeryPrescribed[i].precription.surgerySelectedArray[j].sub_speciality){
                                this.surgeryArray[a].occurence++
                                this.surgeryArray[a].percentage=(this.surgeryArray[a].occurence*100)/count
                            }    
                        }
                    }
                }
            }
            this.loadingSurgery = false
        },err =>{
            console.log(err)
        })
    }
    go(){
        this.activatedtab = 0
        var object 
        object = {}
        object.doctor_id = this.doctorData._id
        object.doctorid = this.doctorData.itemId
        object.start_date = this.fromDate1
        object.end_date = this.toDate1
        console.log(object)
        if(new Date(this.toDate1).setHours(0,0,0,0) >= new Date(this.newDate).setHours(0,0,0,0)){
            this.toastr.warning("Invalid date selected","Warning")
            return
        }
        if(new Date(this.fromDate1).setHours(0,0,0,0) !> new Date(this.toDate1).setHours(0,0,0,0)){
          this.toastr.warning("Invalid date selected","Warning")
            return
        }
        this.loadingMedication = true
        this.loadingInvestigation = true
        this.loadingDiagnosis = true
        this.loadingSurgery = true
        this.PrescriptionAnalyticsMedication(object)
        this.PrescriptionAnalyticsInvestigation(object)
        this.PrescriptionAnalyticsDiagnosis(object)
        this.PrescriptionAnalyticsSurgery(object)
    }
    getData(data){
        if(isNaN(data)){
            return 0
        }else if(data%1!=0){
            return data.toFixed(2)
        }else{
            return data
        }
    }

    getPercentage(data,total){
        return this.getData((data*100)/total)
    }
    getClassMap(data, i) {
        if (data.outOfStation) {
            return 'out'
        } else {
            if (i % 2 == 0) {
                return 'cstm-tr-3'
            } else {
                return 'cstm-tr-3 evn'
            }
        }
    }
    getSorted(a){
        if(a==1){
            this.commanArray = this.medicationSpectrum
        }else if(a==2){
            // console.log(this.investigationSpectrum)
            //console.log(this.investigationSpectrum.sort((a, b) => ((a.type).toString() -( b.type).toString())))
            this.investigationSpectrum.sort(function(a, b) {
            var textA = a.type.toUpperCase();
            var textB = b.type.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
         this.commanArray = this.investigationSpectrum
        }else if(a==3){
            this.commanArray = this.symptomsSpectrum
        }else if(a==4){
            this.commanArray = this.surgerySpectrum
        }
    }
    testName(b){
        var pathology = []
        var ultrasound = []
        var mri = []
        var xray = []
        var ctScan =[] 
        var other = []
        for (var i = 0; i < this.investigationUniqueArray.length; i++) {
            if(this.investigationUniqueArray[i].type=="Pathology"){
                pathology.push({
                    type:this.investigationUniqueArray[i].type,
                    name:this.investigationUniqueArray[i].name,
                    count:this.investigationUniqueArray[i].count
                })
            }
            else if(this.investigationUniqueArray[i].type=="MRI"){
                mri.push({
                    type:this.investigationUniqueArray[i].type,
                    name:this.investigationUniqueArray[i].name,
                    count:this.investigationUniqueArray[i].count
                })
            }
            else if(this.investigationUniqueArray[i].type=="Ultrasound"){
                ultrasound.push({
                    type:this.investigationUniqueArray[i].type,
                    name:this.investigationUniqueArray[i].name,
                    count:this.investigationUniqueArray[i].count
                })
            }
            else if(this.investigationUniqueArray[i].type=="X-Ray"){
                xray.push({
                    type:this.investigationUniqueArray[i].type,
                    name:this.investigationUniqueArray[i].name,
                    count:this.investigationUniqueArray[i].count
                })
            }
            else if(this.investigationUniqueArray[i].type=="CT-Scan"){
                ctScan.push({
                    type:this.investigationUniqueArray[i].type,
                    name:this.investigationUniqueArray[i].name,
                    count:this.investigationUniqueArray[i].count
                })
            }else{
               other.push({
                    type:this.investigationUniqueArray[i].type,
                    name:this.investigationUniqueArray[i].name,
                    count:this.investigationUniqueArray[i].count
                }) 
            }

        }
        if(b==1){
            this.testArray = pathology
        }else if(b==2){
            this.testArray = ultrasound
        }else if(b==3){
            this.testArray = xray
        }else if(b==4){
            this.testArray = mri
        }else if(b==5){
            this.testArray = ctScan
        }else if(b==6){
            this.testArray = other
        }
    }
}