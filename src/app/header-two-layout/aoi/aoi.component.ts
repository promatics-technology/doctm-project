import { Component, ElementRef, NgZone, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import {} from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { UserService } from '../../providers/user.service';

declare var $
declare var jsPDF: any; // Important

@Component({
    selector: 'app-aoi',
    templateUrl: './aoi.component.html',
    styleUrls: ['./aoi.component.css']
})
export class AoiComponent implements OnInit,AfterViewInit {
    public searchElementRef: ElementRef;
    public latitude: number;
    public longitude: number;
    public zoom: number;
    public radius: number;
    public fillOpacity: number;    
    // lat: number = 28.7041;
    // lng: number = 77.1025;  
    lat: number;
    lng: number;
    // locations
    activatedtab:number = 0
    loading: boolean = true
    doctorData
    allData
    areaMaxPatients
    clinicName
    totalLocations : number
    outOfStation : number
    outOfStationPercenatge: number
    clinicCity
    fromDate = new Date()
    toDate = new Date()
    clinic_icon
    // icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    // icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    // icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.doctorData = JSON.parse(localStorage['doctorDetails'])
        console.log(this.doctorData)
        this.clinic_icon = "./assets/imgs/black-64.png"
        this.fillOpacity = 0.1
        this.radius = 0
        if(this.doctorData.type_of_doctor == "normal_doctor"){
            this.FindDoctorsOfSameClinic1()
        }else{
            this.lat = parseFloat(this.doctorData.clinic_details.lat)
            this.lng = parseFloat(this.doctorData.clinic_details.lng)
            console.log(this.lat)
            console.log(this.lng)
            this.clinicName = this.doctorData.clinic_details.clinic_name
            this.clinicCity = this.doctorData.clinic_details.city
            this.clinic_icon = "./assets/imgs/black-64.png"
            this.fillOpacity = 0.1
            this.radius = 0
            this.activatetab(0)
        }
        this.FindDoctorsOfSameClinic1()
        this.allData = []
        this.activatedtab = 0
    }

    ngAfterViewInit() {
        this.setCurrentPosition();
    }

    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                // this.lat = position.coords.latitude;
                // this.lng = position.coords.longitude;
            });
        }
    }

    getClass(i){
        if (i==this.activatedtab) {
            return 'active'
        }else {
            return ''
        }
    }    

    activatetab(i){
        this.activatedtab  = i
        var object
        object ={}
        var date = new Date()
        object.doctor_id = this.doctorData._id
        object.end_date= new Date()
        if(i==0){
            object.start_date = date
        }
        else if (i==1) {
            object.start_date = new Date(date.setDate(date.getDate()-7))
        }
        else if(i==2){
            object.start_date = new Date(date.setDate(date.getDate()-14))
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
        console.log(object)
        this.fromDate = new Date(object.start_date)
        this.toDate = new Date(object.end_date)
        this.allData = []
        this.totalLocations = 0
        this.outOfStation = 0
        this.outOfStationPercenatge = 0
        this.loading = true
                var arr = []
        this.userService.AreaOfInfluence(object).subscribe((result)=>{
            console.log(result)
            if(result.response){
                this.allData = []
                for (var i = 0; i < result.data.length; i++) {
                    for (var j = 0; j < result.data[i].dataAoi.length; j++) {
                        if(result.data[i].dataAoi[j].registration.lat !=0){
                           arr.push(result.data[i])
                        }
                    }
                }
                const map = new Map();
                for (var item of arr) {
                    if(!map.has(item._id)){
                        map.set(item._id, true);    // set any value to Map
                        this.allData.push(
                            item
                            );
                    }
                }
                console.log(this.allData)
                //concatPatientsOfRegistration start
                for (var i = 0; i < result.dataRegistration.length; i++) {
                    var boolean = false
                    for (var j = 0; j < this.allData.length; j++) {
                        if(result.dataRegistration[i]._id){
                            if(result.dataRegistration[i]._id == this.allData[j]._id){
                                for (var k = 0; k < result.dataRegistration[i].dataAoi.length; k++) {
                                    this.allData[j].dataAoi.push({registration:result.dataRegistration[i].dataAoi[k]})                        
                                }
                                boolean = true
                                break
                            }
                        }
                    }
                    if(boolean == false){
                        this.allData.push({
                            _id: result.dataRegistration[i]._id,
                            dataAoi: []
                        })
                        for (var k = 0; k < result.dataRegistration[i].dataAoi.length; k++) {
                            this.allData[this.allData.length-1].dataAoi.push({registration:result.dataRegistration[i].dataAoi[k]})                        
                        }
                    }
                }
                //concatPatientsOfRegistration end
                console.log(this.allData)
                this.totalLocations = 0
                for (var i = 0; i < this.allData.length; i++) {
                    if(this.allData[i].dataAoi[0].registration.lat && this.allData[i].dataAoi[0].registration.lng){
                        this.allData[i].distance = this.distance(this.lat, this.lng,this.allData[i].dataAoi[0].registration.lat,this.allData[i].dataAoi[0].registration.lng, 'K')
                    }else{
                        this.allData[i].distance = 0
                    }
                    for (var j = 0; j < this.allData[i].dataAoi.length; j++) {
                        if(this.allData[i].dataAoi[j].registration.lat && this.allData[i].dataAoi[j].registration.lng){
                            if(this.allData[i].dataAoi[j].registration.city.trim() != this.clinicCity.trim()){
                                this.allData[i].outOfStation = true
                                this.outOfStation ++                            
                            }
                        }
                        if(this.allData[i].dataAoi[j].registration.lat!=0){
                            this.totalLocations++
                        }
                    }
                }
                for (var i = 0; i < this.allData.length; i++) {
                    this.allData[i].percentage = parseFloat(this.getPercentage(this.allData[i].dataAoi.length,this.totalLocations))
                    if(this.allData[i].percentage<5){
                        // this.allData[i].icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'                        
                        this.allData[i].icon = './assets/imgs/map-blue32.png'                        
                    }else if(this.allData[i].percentage>=5 && this.allData[i].percentage<15){
                        // this.allData[i].icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'                                                
                        this.allData[i].icon = './assets/imgs/map-green32.png'                        
                    }else{
                        // this.allData[i].icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'                                                
                        this.allData[i].icon = './assets/imgs/map-red32.png'                        
                    }        
                    this.allData[i].title = this.allData[i].dataAoi[0].registration.location + "- " +  this.allData[i].dataAoi.length + "Pat (" + this.allData[i].percentage +"%)"
                    //     this.allData[i].dataAoi[j].icon = 'http://maps.google.com/mapfiles/kml/paddle/blu-circle.png'
                    // this.allData[i].dataAoi[j].icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                }
                this.allData.sort(function(a, b) {    
                    var nameA = a.distance,
                    nameB = b.distance;    
                    if (nameA < nameB) {        
                        return -1
                    }
                    if (nameA > nameB){
                        return 1    
                    }
                })
                if(this.allData.length>0){
                    this.radius = (this.allData[this.allData.length-1].distance)*1000                        
                    this.allData[this.allData.length-1].quality = '(Farthest) ' + this.getData(this.allData[this.allData.length-1].distance) + "KM"                // this.allData[this.allData.length-1].distance = 
                    if(this.allData[this.allData.length-1].percentage<5){
                        this.allData[this.allData.length-1].icon = 'http://maps.google.com/mapfiles/kml/paddle/blu-circle.png'                        
                        this.allData[this.allData.length-1].icon = './assets/imgs/map-blue64.png'                        
                    }else if(this.allData[this.allData.length-1].percentage>=5 && this.allData[this.allData.length-1].percentage<15){
                        // this.allData[this.allData.length-1].icon = 'http://maps.google.com/mapfiles/kml/paddle/grn-circle.png'                                                
                        this.allData[this.allData.length-1].icon = './assets/imgs/map-green64.png'                        
                    }else{
                        // this.allData[this.allData.length-1].icon = 'http://maps.google.com/mapfiles/kml/paddle/red-circle.png'                                              
                        this.allData[this.allData.length-1].icon = './assets/imgs/map-red64.png'                        
                    }  
                    this.allData.sort(function(a, b) {    
                        var nameA = a.percentage,
                        nameB = b.percentage;    
                        if (nameA < nameB) {        
                            return 1
                        }
                        if (nameA > nameB){
                            return -1    
                        }
                    })
                    if(this.allData[0].dataAoi[0].registration.location){
                        this.areaMaxPatients = this.allData[0].dataAoi[0].registration.location + "- " +  this.allData[0].dataAoi.length + " (" + this.allData[0].percentage +"%)"
                    }
                    // this.allData[0].icon = 'http://maps.google.com/mapfiles/kml/paddle/red-circle.png'
                    this.allData[0].icon = './assets/imgs/map-red64.png'
                    this.allData[0].quality = '(Top Area)' 
                }
                this.outOfStationPercenatge = parseInt(this.getPercentage(this.outOfStation,this.totalLocations))
                //calculate zoom level acc to radius//
                if(this.radius<5000){
                    this.zoom = 13
                }else if(this.radius>=5000 && this.radius<=10000){
                    this.zoom = 12
                }else if(this.radius>10000 && this.radius<25000){
                    this.zoom = 11
                }else if(this.radius>=25000 && this.radius<=50000){
                    this.zoom = 10
                }else if(this.radius>50000 && this.radius<=100000){
                    this.zoom = 9
                }else if(this.radius>100000 && this.radius<=200000){
                    this.zoom = 8
                }else{
                    this.zoom = 6
                }
                console.log(this.radius)
                console.log(this.allData)
            }
            this.loading = false
        },err=>{
            console.log(err)
        })
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

distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
                return dist;
        }
    }

    FindDoctorsOfSameClinic1(){
        this.loading = true
        this.userService.FindDoctorsOfSameClinic(this.doctorData.doctm_clinic_id).subscribe(data => {
            console.log(data)
            if (data.response == true) {
                var admin = data.data.filter(d => d.type_of_doctor == "admin_doctor")
                this.lat = parseFloat(admin[0].clinic_details.lat)
                this.lng = parseFloat(admin[0].clinic_details.lng)
                this.clinicName = admin[0].clinic_details.clinic_name
                this.clinicCity = admin[0].clinic_details.city
                this.activatetab(0)
            }
        }, err => {
            console.log(err);
        })
    }

    getClassMap(data,i){
        if(data.outOfStation){
            return 'out'
        }else{
            if(i%2==0){
                return 'cstm-tr-3'
            }else{
                return 'cstm-tr-3 evn'
            }
        }
    }

    exportPdf(){
        var head = [
        { title: '#', dataKey: "id"},
        { title: 'Area Name', dataKey: "Area"},
        { title: 'Number of Patients', dataKey: "Patients"},
        { title: 'Percentages', dataKey: "Percentages"},
        ]
        var csvData = []
        for (var i = 0; i < this.allData.length; i++) {
            var ob ;
            ob = {}
            ob.id = i+1
            ob.Area = this.allData[i].dataAoi[0].registration.location
            ob.Patients = this.allData[i].dataAoi.length
            ob.Percentages = this.allData[i].percentage+"%"
            csvData.push(ob)
        }
        csvData.push({
            id : 'Total Patients',
            Area : '',
            Patients : this.totalLocations,
            Percentages : 100+"%",
        })
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
        doc.save('AreaOfInfluence');
    }

}
