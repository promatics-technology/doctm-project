import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../providers/user.service';
import { environment } from '../../../environments/environment.prod';
import * as io from "socket.io-client";
declare var $:any

@Component({
    selector: 'app-headerfour',
    templateUrl: './headerfour.component.html',
    styleUrls: ['./headerfour.component.css'],
    providers: [UserService]
})
export class HeaderfourComponent implements OnInit {
    nosidebar: string;
    smartIpdData
    doctorsOfSameClinic
    doctorsRegisteredForSmartClinic
    heading
    ipd: boolean
    adminDoctor
    general_bed_charges: number
    semi_private_bed_charges: number
    private_bed_charges: number
    totalPendingPatients
    clinic_name
    address
    mobile
    headerHeading
    socket
    addressFilled: boolean
    constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private toastr: ToastrService) {
        this.smartIpdData = JSON.parse(localStorage['smartIpdDetails'])
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (event.url == '/header-four-layout/dashboard-ipd' || event.url == "/header-four-layout") {
                    this.doctorsRegisteredForSmartClinic = this.smartIpdData.doctorsRegisteredForSmartClinic
                    var admin = this.doctorsRegisteredForSmartClinic.filter(d => d.type_of_doctor == "admin_doctor")
                    this.adminDoctor = admin[0];
                    this.headerHeading = this.adminDoctor.clinic_details.clinic_name
                    this.heading = "Occupancy Status"
                    this.ipd = false
                } else if (event.url == '/header-four-layout/ipd-book') {
                    this.heading = "IPD Book"
                    this.headerHeading = "IPD Book"
                    this.ipd = true
                }
            }
        });
    }
    ngOnInit() {
        this.socket = io(environment.socket)
        this.nosidebar = 'no-sidebar';
        this.GetSmartIpdDataAfterLogin()
        this.general_bed_charges = 0
        this.semi_private_bed_charges = 0
        this.private_bed_charges = 0
        this.addressFilled = true
    }
    sidebarclose() {
        if (this.nosidebar == 'no-sidebar') {
            this.nosidebar = ''
        } else {
            this.nosidebar = 'no-sidebar'
        }
    }
    signOut() {
        this.socket.emit('logout',{'doctor_id':this.smartIpdData._id})
        localStorage.removeItem(localStorage['smartIpdDetails'])
        localStorage.removeItem('isLoggedinSmartIpd')
        this.router.navigate(['/']); 
        // localStorage.clear();
    }
    GetSmartIpdDataAfterLogin() {
        let object = {
            smart_ipd_id: this.smartIpdData.dataSmartIpd._id
        }
        this.userService.GetSmartIpdDataAfterLogin(object).subscribe(data => {
            console.log(data)
            var dataToStore = {
                dataSmartIpd: data.dataSmartIpd,
                doctorsRegisteredForSmartClinic: data.doctorsRegisteredForSmartClinic,
                doctorsOfSameClinic: data.doctorsOfSameClinic
            }
            localStorage['smartIpdDetails'] = JSON.stringify(dataToStore)
            if (data.dataSmartIpd.address && data.dataSmartIpd.address.clinic_name) {
                this.clinic_name = data.dataSmartIpd.address.clinic_name
            }else{
                this.addressFilled = false
            }
            if (data.dataSmartIpd.address && data.dataSmartIpd.address.address) {
                this.address = data.dataSmartIpd.address.address
            }else{
                this.addressFilled = false
            }
            if (data.dataSmartIpd.address && data.dataSmartIpd.address.mobile) {
                this.mobile = data.dataSmartIpd.address.mobile
            }else{
                this.addressFilled = false
            }
            this.doctorsOfSameClinic = data.doctorsOfSameClinic
            this.doctorsRegisteredForSmartClinic = data.doctorsRegisteredForSmartClinic
            var admin = this.doctorsRegisteredForSmartClinic.filter(d => d.type_of_doctor == "admin_doctor")
            this.adminDoctor = admin[0];
            console.log(this.adminDoctor)
            if(!this.adminDoctor.clinic_services.general_bed_charges ||
                !this.adminDoctor.clinic_services.semi_private_bed_charges ||
                !this.adminDoctor.clinic_services.private_bed_charges){
                this.addressFilled = false
        }
        this.general_bed_charges = this.adminDoctor.clinic_services.general_bed_charges
        this.semi_private_bed_charges = this.adminDoctor.clinic_services.semi_private_bed_charges
        this.private_bed_charges = this.adminDoctor.clinic_services.private_bed_charges
        if(!this.addressFilled){
            $("#clinicDetailModal").modal("show"); 
        }
    }, err => {
        console.log(err);
    })
    }
    updateBedCharges() {
        if (this.general_bed_charges < 0 || this.semi_private_bed_charges < 0 || this.private_bed_charges < 0) {
            this.toastr.warning("Charges can't be negative", "Warning")
            return
        } else if (this.general_bed_charges == null || this.semi_private_bed_charges == null || this.private_bed_charges == null) {
            this.toastr.warning("Enter charges", "Warning")
            return
        } else if (this.clinic_name == null || this.address == null || this.mobile == null || this.clinic_name == "" || this.address == "" || this.mobile == "" || this.clinic_name == undefined || this.address == undefined || this.mobile == undefined || isNaN(this.mobile) || this.mobile.toString().length != 10) {
            this.toastr.warning("Invalid clinic details", "Warning")
            return
        } else {
            var object = {
                id: this.smartIpdData.dataSmartIpd.id,
                address: {
                    clinic_name: this.clinic_name,
                    address: this.address,
                    mobile: this.mobile
                }
            }
            this.userService.UpdateSmartIpdAddress(object).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    var object = {
                        itemId: this.adminDoctor.itemId,
                        general_bed_charges: this.general_bed_charges,
                        semi_private_bed_charges: this.semi_private_bed_charges,
                        private_bed_charges: this.private_bed_charges
                    }
                    this.userService.UpdateBedCharges(object).subscribe(data => {
                        console.log(data)
                        if (data.response == true) {
                            this.toastr.success(data.message, "Success")
                            this.ngOnInit()
                            $("#clinicDetailModal").modal("hide");
                        } else {
                            this.toastr.error(data.message, "Error")
                        }
                    }, err => {
                        console.log(err);
                    })
                } else {
                    this.toastr.error(data.message, "Error")
                }
            }, err => {
                console.log(err);
            })
        }
        // $('#subscr_modal').modal({
            //     backdrop: 'static',
            //     keyboard: false
            // })
        }
        GetIPDPatients() {
            this.userService.GetTotalIpdPendingPatientsOfDoctors(this.smartIpdData.dataSmartIpd._id).subscribe(data => {
                console.log(data)
                if (data.response == true) {
                    this.totalPendingPatients = data.data
                    $("#consultingDoctorModal").modal("show");
                }
            }, err => {
                console.log(err);
            })
        }
        GetDoctorNameById(id) {
            for (var i = 0; i < this.doctorsRegisteredForSmartClinic.length; i++) {
                if (this.doctorsRegisteredForSmartClinic[i]._id.toString() == id) {
                    return this.doctorsRegisteredForSmartClinic[i].first_name
                }
            }
        }
        closeClinicModal(){
            if(this.addressFilled){
                $("#clinicDetailModal").modal("hide");
            }
        }
    }