import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-dashboard-consultation-time',
    templateUrl: './dashboard-consultation-time.component.html',
    styleUrls: ['./dashboard-consultation-time.component.css']
})
export class DashboardConsultationTimeComponent implements OnInit {
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd-MMM-yyyy',
        defaultOpen: false,
    }
    fromDate = new Date()
    toDate = new Date()
    fromDate1 = new Date()
    toDate1 = new Date()
    newDate = new Date()
    activatedtab = 0
    loading
    doctorData

    longestConsultationMin
    longestConsultationSec
    shortestConsultationMin
    shortestConsultationSec
    totalTimeUtilizedHours
    totalTimeUtilizedMin
    avgCtu
    avgTimePerPatient
    totalHours: number
    totalMin: number
    countMonday: number
    countTuesday: number
    countWednesday: number
    countThursday: number
    countFriday: number
    countSaturday: number
    countSunday: number
    avgConsTime: number
    timeArray
    avgTimeArray
    avgCtuPercentage
    toolTip = "This is demo text"
    position = "right"
    helpText
    constructor(private userService: UserService, private datePipe: DatePipe, private toastr: ToastrService) {}

    ngOnInit() {
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        console.log(this.doctorData)
        this.newDate.setDate(this.newDate.getDate() + 1)
        this.fromDate1.setDate(this.fromDate1.getDate() - 6)
        this.activatedtab = 0
        this.activatetab(1)
        this.getHelpText()
    }

    activatetab(ii) {
        this.totalHours = 0
        this.totalMin = 0
        this.countMonday = 0
        this.countTuesday = 0
        this.countWednesday = 0
        this.countThursday = 0
        this.countFriday = 0
        this.countSaturday = 0
        this.countSunday = 0
        this.avgConsTime = 0
        var localDateArray = []
        this.timeArray = []
        this.avgTimeArray = []
        this.avgCtuPercentage = 0
        this.activatedtab = ii
        var object
        object = {}
        var date = new Date()
        object.doctor_id = this.doctorData._id
        object.end_date = new Date()
        if (ii == 0) {
            object.start_date = date
        } else if (ii == 1) {
            object.start_date = new Date(date.setDate(date.getDate() - 6))
        } else if (ii == 2) {
            object.start_date = new Date(date.setDate(date.getDate() - 13))
        } else if (ii == 3) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 1))
        } else if (ii == 4) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 3))
        } else if (ii == 5) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 6))
        } else if (ii == 6) {
            object.start_date = new Date(date.setFullYear(date.getFullYear() - 1))
        } else if (ii == 7) {
            object.start_date = new Date()
            object.maximum = true
        }
        console.log(object)
        this.fromDate = new Date(object.start_date)
        this.toDate = new Date(object.end_date)
        this.totalTimeUtilizedHours = 0
        this.totalTimeUtilizedMin = 0
        this.longestConsultationMin = 0
        this.longestConsultationSec = 0
        this.shortestConsultationMin = 0
        this.shortestConsultationSec = 0
        this.avgTimePerPatient = ""
        var totalPatients = 0
        var dateArray = []
        this.loading = true
        this.userService.TimeAnalytics(object).subscribe((result) => {
            console.log(result)
            if (result.response) {
                if (result.totalTimeInSeconds.length > 0) {
                    this.totalTimeUtilizedHours = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) / 3600)
                    this.totalTimeUtilizedMin = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) % 3600)
                    this.totalTimeUtilizedMin = Math.floor(this.totalTimeUtilizedMin / 60)
                }
                if (result.dataLongestConsultation.length > 0) {
                    this.longestConsultationMin = Math.floor((result.dataLongestConsultation[0].totalSeconds) / 60)
                    this.longestConsultationSec = Math.floor((result.dataLongestConsultation[0].totalSeconds) % 60)
                }
                if (result.dataShortestConsultation.length > 0) {
                    this.shortestConsultationMin = Math.floor((result.dataShortestConsultation[0].totalSeconds) / 60)
                    this.shortestConsultationSec = Math.floor((result.dataShortestConsultation[0].totalSeconds) % 60)
                }
                var avgTotalPatientSeconds = 0
                var addTime = 0
                var totalTimeInSeconds = 0
                if (result.dataTotalPatientsDischarged.length > 0) {
                    for (var i = 0; i < result.dataTotalPatientsDischarged.length; i++) {
                        var totalPatientSeconds
                        totalPatientSeconds = 0
                        dateArray.push(this.datePipe.transform(result.dataTotalPatientsDischarged[i].data[0].createAt, 'yyyy-MM-dd'))
                        for (var j = 0; j < result.dataTotalPatientsDischarged[i].data.length; j++) {
                            totalPatients++
                            totalPatientSeconds = (result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)) / 3600
                            totalTimeInSeconds += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)
                            addTime += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)
                        }
                        avgTotalPatientSeconds = (totalPatientSeconds / result.dataTotalPatientsDischarged[i].data.length) * 60
                        this.timeArray.push(totalPatientSeconds.toFixed(3))
                        this.avgTimeArray.push(avgTotalPatientSeconds.toFixed(3))
                    }
                    ///////////// hours logic /////////////////////////////
                    var daysOfYear = [];
                    for (var d = this.fromDate; d <= this.toDate; d.setDate(d.getDate() + 1)) {
                        daysOfYear.push(new Date(d));
                    }
                    for (var i = 0; i < daysOfYear.length; i++) {
                        localDateArray.push(this.datePipe.transform(daysOfYear[i], 'EEEE'))
                    }
                    for (var i = 0; i < localDateArray.length; i++) {
                        if (localDateArray[i] == "Monday") {
                            this.countMonday++
                        } else if (localDateArray[i] == "Tuesday") {
                            this.countTuesday++
                        } else if (localDateArray[i] == "Wednesday") {
                            this.countWednesday++
                        } else if (localDateArray[i] == "Thursday") {
                            this.countThursday++
                        } else if (localDateArray[i] == "Friday") {
                            this.countFriday++
                        } else if (localDateArray[i] == "Saturday") {
                            this.countSaturday++
                        } else if (localDateArray[i] == "Sunday") {
                            this.countSunday++
                        }
                    }
                    var total_diff: number = 0
                    this.avgConsTime = this.doctorData.avgConsTime
                    for (var j = 0; j < this.doctorData.consultation_schedule.length; j++) {
                        var min_diff: number = 0
                        var hour_diff: number = 0
                        for (var k = 0; k < this.doctorData.consultation_schedule[j].shifts.length; k++) {
                            min_diff += parseInt(this.doctorData.consultation_schedule[j].shifts[k].toTime.minute) - parseInt(this.doctorData.consultation_schedule[j].shifts[k].fromTime.minute)
                            hour_diff += parseInt(this.doctorData.consultation_schedule[j].shifts[k].toTime.hour) - parseInt(this.doctorData.consultation_schedule[j].shifts[k].fromTime.hour)
                            total_diff = min_diff + (hour_diff * 60)
                        }
                        if (this.doctorData.consultation_schedule[j].Monday == true) {
                            this.totalMin += (this.countMonday * total_diff)
                        }
                        if (this.doctorData.consultation_schedule[j].Tuesday == true) {
                            this.totalMin += (this.countTuesday * total_diff)
                        }
                        if (this.doctorData.consultation_schedule[j].Wednesday == true) {
                            this.totalMin += (this.countWednesday * total_diff)
                        }
                        if (this.doctorData.consultation_schedule[j].Thursday == true) {
                            this.totalMin += (this.countThursday * total_diff)
                        }
                        if (this.doctorData.consultation_schedule[j].Friday == true) {
                            this.totalMin += (this.countFriday * total_diff)
                        }
                        if (this.doctorData.consultation_schedule[j].Saturday == true) {
                            this.totalMin += (this.countSaturday * total_diff)
                        }
                        if (this.doctorData.consultation_schedule[j].Sunday == true) {
                            this.totalMin += (this.countSunday * total_diff)
                        }
                    }
                    this.totalHours = this.totalMin / 60
                    this.totalHours = Math.trunc(this.totalHours)
                    this.totalMin = this.totalMin % 60
                    ///////////////////////////////////////////////////////
                }
                this.avgCtuPercentage = (addTime * 100) / (this.totalHours*3600)
                this.lineChartData = [{
                    data: this.timeArray,
                    label: 'Total Hours'
                }, ];
                this.lineChartData1 = [{
                    data: this.avgTimeArray,
                    label: 'Total Avg Min'
                }, ];
                this.lineChartLabels = dateArray
                this.lineChartLabels1 = dateArray
                var min = parseInt(this.getData(this.getData(totalTimeInSeconds / totalPatients)/60))
                var sec = parseInt(this.getData(this.getData(totalTimeInSeconds / totalPatients)%60))
                this.avgTimePerPatient = min +":"+sec
                var newAvgTimeArray = []
                for (var i = 0; i < dateArray.length; i++) {
                    newAvgTimeArray.push(dateArray[i])
                }
                ///////////////////////////// Date Sort Logic //////////////////////
                this.timeSort(dateArray, this.timeArray);
                this.avgTimeSort(newAvgTimeArray, this.avgTimeArray);
                ///////////////////////////// End sort Logic ////////////////////////
            }
            this.loading = false
        }, err => {
            console.log(err)
        })
    }
    timeSort(a, b) {
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (a[i] > a[i + 1]) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    var temp = b[i];
                    b[i] = b[i + 1];
                    b[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        var newDateArray = []
        for (var i = 0; i < a.length; i++) {
            newDateArray.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'))
        }
        this.lineChartLabels = newDateArray
    }
    avgTimeSort(a, b) {
        var swapped1;
        do {
            swapped1 = false;
            for (var i = 0; i < a.length - 1; i++) {
                if (a[i] > a[i + 1]) {
                    var temp = a[i];
                    a[i] = a[i + 1];
                    a[i + 1] = temp;
                    var temp = b[i];
                    b[i] = b[i + 1];
                    b[i + 1] = temp;
                    swapped1 = true;
                }
            }
        } while (swapped1);
        var newDateArray1 = []
        for (var i = 0; i < a.length; i++) {
            newDateArray1.push(this.datePipe.transform(a[i], 'dd-MM-yyyy'))
        }
        this.lineChartLabels1 = newDateArray1
    }
    go() {
        this.activatedtab = 0
        this.totalHours = 0
        this.totalMin = 0
        this.countMonday = 0
        this.countTuesday = 0
        this.countWednesday = 0
        this.countThursday = 0
        this.countFriday = 0
        this.countSaturday = 0
        this.countSunday = 0
        this.avgConsTime = 0
        var totalPatients = 0
        var localDateArray = []
        var dateArray = []
        this.timeArray = []
        this.avgTimeArray = []
        this.avgCtuPercentage = 0
        this.totalTimeUtilizedHours = 0
        this.totalTimeUtilizedMin = 0
        this.longestConsultationMin = 0
        this.longestConsultationSec = 0
        this.shortestConsultationMin = 0
        this.shortestConsultationSec = 0
        this.avgTimePerPatient = ""
        var object
        object = {}
        object.start_date = this.fromDate1
        object.end_date = this.toDate1
        object.doctor_id = this.doctorData._id
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning")
            return
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) ! > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning")
            return
        }
        this.loading = true
        this.userService.TimeAnalytics(object).subscribe((result) => {
            console.log(result)
            if (result.response) {
                if (result.totalTimeInSeconds.length > 0) {
                    this.totalTimeUtilizedHours = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) / 3600)
                    this.totalTimeUtilizedMin = Math.floor((result.totalTimeInSeconds[0].totalTimeInSeconds) % 3600)
                    this.totalTimeUtilizedMin = Math.floor(this.totalTimeUtilizedMin / 60)
                }
                if (result.dataLongestConsultation.length > 0) {
                    this.longestConsultationMin = Math.floor((result.dataLongestConsultation[0].totalSeconds) / 60)
                    this.longestConsultationSec = Math.floor((result.dataLongestConsultation[0].totalSeconds) % 60)
                }
                if (result.dataShortestConsultation.length > 0) {
                    this.shortestConsultationMin = Math.floor((result.dataShortestConsultation[0].totalSeconds) / 60)
                    this.shortestConsultationSec = Math.floor((result.dataShortestConsultation[0].totalSeconds) % 60)
                }
                var avgTotalPatientSeconds = 0
                var addTime = 0
                var totalTimeInSeconds = 0
                if (result.dataTotalPatientsDischarged.length > 0) {
                    for (var i = 0; i < result.dataTotalPatientsDischarged.length; i++) {
                        var totalPatientSeconds
                        totalPatientSeconds = 0
                        dateArray.push(this.datePipe.transform(result.dataTotalPatientsDischarged[i].data[0].createAt, 'yyyy-MM-dd'))
                        for (var j = 0; j < result.dataTotalPatientsDischarged[i].data.length; j++) {
                            totalPatients++
                            totalPatientSeconds = (result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)) / 3600
                            totalTimeInSeconds += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)
                            addTime += result.dataTotalPatientsDischarged[i].data[j].precription.minutes * 60 + (result.dataTotalPatientsDischarged[i].data[j].precription.seconds)
                        }
                        avgTotalPatientSeconds = (totalPatientSeconds / result.dataTotalPatientsDischarged[i].data.length) * 60
                        this.timeArray.push(totalPatientSeconds.toFixed(3))
                        this.avgTimeArray.push(avgTotalPatientSeconds.toFixed(3))
                    }
                    ///////////// hours logic /////////////////////////////
                    var daysOfYear = [];
                    for (var d = new Date(this.fromDate1); d <= new Date(this.toDate1); d.setDate(d.getDate() + 1)) {
                        daysOfYear.push(new Date(d));
                    }
                    for (var i = 0; i < daysOfYear.length; i++) {
                        daysOfYear[i]
                        localDateArray.push(this.datePipe.transform(daysOfYear[i], 'EEEE'))
                    }
                    for (var i = 0; i < localDateArray.length; i++) {
                        if (localDateArray[i] == "Monday") {
                            this.countMonday++
                        } else if (localDateArray[i] == "Tuesday") {
                            this.countTuesday++
                        } else if (localDateArray[i] == "Wednesday") {
                            this.countWednesday++
                        } else if (localDateArray[i] == "Thursday") {
                            this.countThursday++
                        } else if (localDateArray[i] == "Friday") {
                            this.countFriday++
                        } else if (localDateArray[i] == "Saturday") {
                            this.countSaturday++
                        } else if (localDateArray[i] == "Sunday") {
                            this.countSunday++
                        }
                    }
                    var total_diff: number = 0
                    this.avgConsTime = this.doctorData.avgConsTime
                    for (var j = 0; j < this.doctorData.consultation_schedule.length; j++) {
                        var min_diff: number = 0
                        var hour_diff: number = 0
                        for (var k = 0; k < this.doctorData.consultation_schedule[j].shifts.length; k++) {
                            min_diff += parseInt(this.doctorData.consultation_schedule[j].shifts[k].toTime.minute) - parseInt(this.doctorData.consultation_schedule[j].shifts[k].fromTime.minute)
                            hour_diff += parseInt(this.doctorData.consultation_schedule[j].shifts[k].toTime.hour) - parseInt(this.doctorData.consultation_schedule[j].shifts[k].fromTime.hour)
                            total_diff = min_diff + (hour_diff * 60)
                        }
                        if (this.doctorData.consultation_schedule[j].Monday == true) {
                            this.totalMin += (this.countMonday * total_diff)
                        }
                        if (this.doctorData.consultation_schedule[j].Tuesday == true) {
                            this.totalMin += (this.countTuesday * total_diff)
                        }
                        if (this.doctorData.consultation_schedule[j].Wednesday == true) {
                            this.totalMin += (this.countWednesday * total_diff)
                        }
                        if (this.doctorData.consultation_schedule[j].Thursday == true) {
                            this.totalMin += (this.countThursday * total_diff)
                        }
                        if (this.doctorData.consultation_schedule[j].Friday == true) {
                            this.totalMin += (this.countFriday * total_diff)
                        }
                        if (this.doctorData.consultation_schedule[j].Saturday == true) {
                            this.totalMin += (this.countSaturday * total_diff)
                        }
                        if (this.doctorData.consultation_schedule[j].Sunday == true) {
                            this.totalMin += (this.countSunday * total_diff)
                        }
                    }
                    this.totalHours = this.totalMin / 60
                    this.totalHours = Math.trunc(this.totalHours)
                    this.totalMin = this.totalMin % 60
                    ///////////////////////////////////////////////////////
                }
                this.avgCtuPercentage = (addTime * 100) / (this.totalHours*3600)
                this.lineChartData = [{
                    data: this.timeArray,
                    label: 'Total Hours'
                }, ];
                this.lineChartData1 = [{
                    data: this.avgTimeArray,
                    label: 'Total Avg Min'
                }, ];
                this.lineChartLabels = dateArray
                this.lineChartLabels1 = dateArray
                var min = parseInt(this.getData(this.getData(totalTimeInSeconds / totalPatients)/60))
                var sec = parseInt(this.getData(this.getData(totalTimeInSeconds / totalPatients)%60))
                this.avgTimePerPatient = min +":"+sec
                var newAvgTimeArray = []
                for (var i = 0; i < dateArray.length; i++) {
                    newAvgTimeArray.push(dateArray[i])
                }
                ///////////////////////////// Date Sort Logic //////////////////////
                this.timeSort(dateArray, this.timeArray);
                this.avgTimeSort(newAvgTimeArray, this.avgTimeArray);
                ///////////////////////////// End sort Logic ////////////////////////
            }
            this.loading = false
        }, err => {
            console.log(err)
        })
    }
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
    getData(data) {
        if (isNaN(data)) {
            return 0
        } else if (data % 1 != 0) {
            return data.toFixed(2)
        } else {
            return data
        }
    }

    getClass(i) {
        if (i == this.activatedtab) {
            return 'active'
        } else if (i < this.activatedtab) {
            return 'completed'
        }

    }
    public lineChartData: Array < any > = [{
            data: [],
            label: 'Total Hours'
        },
        // {data: [2500, 3000, 3500, 4000, 4500, 5000, 6500], label: 'Prescription Sales'},
        // {data: [500, 1000, 1200, 1800, 1900, 1999, 2075], label: 'Standalone Sales'}
    ];
    public lineChartLabels: Array < any > = [];
    public lineChartOptions: any = {
        responsive: true,
        legend: {
            display: false,
        }
    };

    public lineChartData1: Array < any > = [{
            data: [],
            label: 'Total Avg Min'
        },
        // {data: [2500, 3000, 3500, 4000, 4500, 5000, 6500], label: 'Prescription Sales'},
        // {data: [500, 1000, 1200, 1800, 1900, 1999, 2075], label: 'Standalone Sales'}
    ];
    public lineChartLabels1: Array < any > = [];
    public lineChartColors: Array < any > = [{ // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}