webpackJsonp(["clinic-summary-opd.module"],{

/***/ "../../../../../src/app/header-two-layout/clinic-summary-opd/clinic-summary-opd-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicSummaryOpdRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinic_summary_opd_component__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-opd/clinic-summary-opd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__clinic_summary_opd_component__["a" /* ClinicSummaryOpdComponent */],
    }
];
var ClinicSummaryOpdRoutingModule = /** @class */ (function () {
    function ClinicSummaryOpdRoutingModule() {
    }
    ClinicSummaryOpdRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ClinicSummaryOpdRoutingModule);
    return ClinicSummaryOpdRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-opd/clinic-summary-opd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cus-content-wrapper{\r\n\tpadding-top: 0px;\r\n\tpadding-bottom: 0px;\r\n}\r\n.hding > h3{\r\n\tmargin: 0px;\r\n\tpadding:15px 0px;\r\n\tbackground-color: #d9e0dd; \r\n}\r\n.hding  h5.btm{\r\n\tmargin: 0px;\r\n\tpadding:15px 0px;\r\n\tbackground-color: #d9e0dd; \r\n}\r\n.cstm-tbl{\r\n\twidth: 100%;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n}\r\n.clr-vlt{\r\n    color: #5c62af;\r\n}\r\n.tb-1{\r\n\tmargin-top:15px;\r\n}\r\n.tb-1 tr td{\r\n\tpadding:2px 8px;\r\n\tvertical-align: middle; \r\n}\r\n.cstm-tbl tr{\r\n\theight:40px;\r\n}\r\n.footer-cstm-an{\r\n\tposition: fixed;\r\n    float: left;\r\n    width: 100%;\r\n    bottom:0px;\r\n    background: #00b0f0;\r\n    color:#fff;\r\n    z-index: 99;\r\n    padding-top: 8px;\r\n}\r\n.mt-table h3{\r\n\tmargin-top: 0px;\r\n}\r\n.cstm-tr{\r\n\tbackground-color:#92d050;\r\n\tcolor:#fff;\r\n\ttext-align: center;\r\n}\r\n.cstm-tr-2{\r\n\tbackground-color:#c5d8f1;\r\n}\r\n.cstm-tr-2 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n\tborder-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n.color-red {\r\n    color: #ff0000;\r\n    -webkit-transform: translateY(-8px);\r\n            transform: translateY(-8px);\r\n}\r\n.cstm-tr-4{\r\n\tbackground-color: #f2dada;\r\n}\r\n.cstm-mg{\r\n\tmargin-top: 5px;\r\n}\r\n.btn-go{\r\n\tbackground-color: transparent;\r\n    border: 1px solid #002160;\r\n    margin-bottom: 5px;\r\n    min-width: 62%;\r\n}\r\n.btn-go:hover{\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    background: #98C74F;\r\n    border-color: #98C74F;\r\n    color: #fff;\r\n}\r\n.li-cstm a{\r\n\ttext-align: center!important;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    font-size: 16px!important;\r\n    font-weight: inherit!important;\r\n    padding: 6px!important;\r\n}\r\n.cus-sidebar{\r\n\theight: inherit!important;\r\n}\r\n/*karam @ 2019*/\r\n.side-bar-cstm{\r\n\tz-index: 99;\r\n}\r\n.res-tab-2{\r\n\tmax-height: 225px;\r\n}\r\n.cstm-ul-new li{\r\n\twidth:170px;\r\n}\r\n.cstm-ul-new li a{\r\n\tbackground-color:transparent;\r\n\tcolor:#000;\r\n\tpadding:10px;\r\n\tcursor: pointer;\r\n\tborder-radius: 0px;\r\n\tborder-bottom: 2px solid transparent; \r\n\ttext-align: center;\r\n}\r\n.cstm-ul-new li.active a{\r\n\tbackground-color: #e0e0e0;\r\n    color: #000;\r\n\tborder-bottom: 2px solid #00b0f0;\r\n}\r\n.tab-new{\r\n\tmin-height: 450px;\r\n    max-height: 450px;\r\n    padding: 0px 8px;\r\n    border-left: 1px solid #dcdcdc;\r\n    border-right: 1px solid #dcdcdc;\r\n    overflow-x: hidden;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n    font-weight: bold;\r\n}\r\n/*karam@30-jan-2019*/\r\n/*.tab-new-cstm tr td{\r\n\tfont-size: 10px;\r\n}*/\r\n.brder-cstm{\r\n\tpadding-bottom: 1px;\r\n    margin-bottom: 6px;\r\n    border-bottom: 1px solid #a7a7a7;\r\n    position: relative;\r\n}\r\n.brder-cstm::after{\r\n\tcontent: \"\";\r\n    position: absolute;\r\n    height: 6px;\r\n    width: 12px;\r\n    background-color: #ffffff;\r\n    top: 41px;\r\n    right: -3px;\r\n\t \r\n}\r\n.cus-sidebar ul{\r\n\tborder:1px solid #a7a7a7;\r\n}\r\n.mg-0{\r\n\tmargin-top: 0px;\r\n}\r\n.mg-bt{\r\n\tmargin-bottom:2px; \r\n}\r\n.txt-thm{\r\n\tcolor: rgb(0,32,96);\r\n}\r\n.txt-thm-1{\r\n\tcolor: rgb(0,112,192);\r\n}\r\n.foot-2{\r\n\tborder-bottom:1px solid #a7a7a7;\r\n\tword-spacing: 14px;\r\n}\r\n.hdr-2{\r\n\tpadding-bottom: 8px;\r\n\tborder-bottom:1px solid #a7a7a7;\r\n}\r\n.brdr-lft{\r\n\tmargin-left:-5px;\r\n\tborder-left:1px solid #a7a7a7; \r\n}\r\n.evn{\r\n\tbackground-color:#eff3ef;\r\n}\r\n.odd{\r\n\tbackground-color:#e3e3e3;\r\n}\r\n.new-ul-1 li a{\r\n\theight: 55px;\r\n\tline-height: 3;\r\n}\r\n.new-table-24 tr td{\r\n\tborder-right:1px solid #fff;\r\n}\r\n.new-table-24 tr:last-child{\r\n\tborder-right:none;\r\n}\r\nli.clz a{\r\n\tline-height:1.5!important;\r\n}\r\ntr.tbl-blk-hd{\r\n\tbackground:rgb(0,112,192);\r\n\tcolor:#fff;\r\n}\r\ntr.tbl-blk-hd td{\r\n\tborder-right:1px solid #fff;\r\n}\r\ntr.tbl-blk-hd:last-child{\r\n\tborder-right: none;\r\n}\r\n.tbl-hd-2{\r\n\tbackground-color: #000;\r\n\tcolor: #fff;\r\n\tborder-bottom: 1px solid #fff;\r\n}\r\n.new-table-24 tr td{\r\n\tpadding: 4.5px 15px!important;\r\n}\r\n/*.tbl-blk-hd{\r\n\theight: 45px;\r\n}\r\n.tbl-blk-hd td{\r\n\tpadding: 12px!important;\r\n}*/\r\n.my-table-all{\r\n\tmin-height:515px;\r\n\tmax-height: 515px;\r\n\toverflow-y: scroll; \r\n}\r\ntable tbody tr td b{\r\n\tfont-size: 18px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-opd/clinic-summary-opd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n\t\n\t<div class=\"ipd-deatil-sec\">\n       <div class=\"inner-tab\">\n            <ul class=\"nav nav-tabs new-ul-1\" role=\"tablist\">\n                  <li role=\"presentation\"  class=\"active clz\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-opd\"> <div>OPD</div><small> (All Doctors)</small> </a></li>\n                  <li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-pharmacy\" *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy==true\">Pharmacy</a></li>\n                  <li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-diagnostic\" *ngIf=\"doctorData.clinic_services.Clinic_Diagnostics==true\"> Diagnostics </a></li>\n                  <li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-ipd\" *ngIf=\"doctorData.clinic_services.Clinic_IPD==true\"> IPD </a></li>\n                  <li role=\"presentation\"><a href=\"javascript:void(0);\" routerLink=\"/header-two-layout/clinic-summary-all\">Summary</a></li>\n            </ul>\n      </div>\n\n      <div class=\"ipd-body\">\n         <div class=\"cus-sidebar-wrapper side-bar-cstm\">\n              <div class=\"cus-sidebar\">\n                   <ul> \n                        <li>\n                             <div class=\"\">\n                                  <div class=\"col-lg-3\">\n                                       <h4 class=\"pd-left\"><b>From</b></h4>\n                                 </div>\n                                 <div class=\"col-lg-9\">\n                                       <div class=\"cstm-mg\">\n                                            <angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n                                      </div>\n                                </div>\n                          </div>\n                    </li>\n                    <li>\n                       <div class=\"\">\n                            <div class=\"col-lg-3\">\n                                 <h4 class=\"pd-left\"><b>To</b></h4>\n                           </div>\n                           <div class=\"col-lg-9\">\n                                 <div class=\"cstm-mg\">\n                                      <angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n                                </div>\n                          </div>\n                    </div>\n              </li>\n              <li class=\"text-right brder-cstm\">\n                   <div class=\"col-lg-12 text-center\">\n                      <button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n                </div>\n          </li>\n          <li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n          <!-- <li class=\"{{getClass(0)}}\" (click)=\"activatetab(0)\" class=\"active\"> <a href=\"javascript:void(0);\"> Current </a> </li> -->\n          <li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n          <li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n          <li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n          <li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n          <li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n          <li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n          <li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n    </ul>\n</div>\n</div>\n<div class=\"cus-content-wrapper\">\n  <div class=\"cus-content\">\n       <div class=\"row brdr-lft\">\n            <div class=\"col-lg-12 text-center\">\n                 <div class=\"cstm-pad\">\n                      <div class=\"table-responsive\">\n                           <div class=\"my-table-all\">\n                                <table class=\"table new-table-24\">\n                                     <tbody>\n                                          <tr class=\"tbl-blk-hd\">\n                                               <td class=\"text-left\"><h5>OPD PARAMETERS</h5></td>\n                                               <td *ngFor=\"let data of doctorCollectionArray\" class=\"text-center\"><h5>Dr. {{getDoctorName(data.id)}}</h5></td>\n                                               <td class=\"text-center\"><h4><b>CLINIC</b></h4></td>\n                                         </tr>\n                                         <tr class=\"tbl-hd-2\">\n                                               <td colspan=\"7\" class=\"text-left\">\n                                                    COLLECTION\n                                              </td>\n                                        </tr>\n                                        <tr class=\"odd\">\n                                         <td class=\"text-left\">Consultation collection</td>\n                                         <td *ngFor=\"let data of doctorCollectionArray\" class=\"text-center\">{{data?.sales}} ({{data.percentage}} %)</td>\n                                         <td class=\"text-center\"><b>{{getData(totalCollection)}}</b></td>\n                                   </tr>\n                                   <tr class=\"evn\">\n                                         <td class=\"text-left\">Avg daily collection</td>\n                                         <td *ngFor=\"let data of doctorCollectionArray\"  class=\"text-center\">{{data?.avgDailyColl}}</td>\n                                         <td class=\"text-center\"><b>{{getData(avgDailyCollection)}}</b></td>\n                                   </tr>\n                                   <tr class=\"odd\">\n                                         <td class=\"text-left\">Avg collection per prescription</td>\n                                         <td *ngFor=\"let data of doctorCollectionArray\"  >{{data?.avgColl}}</td>\n                                         <td><b>{{getData(avgPatientCollection)}}</b></td>\n                                   </tr>\n                                   <tr class=\"tbl-hd-2\">\n                                         <td colspan=\"7\" class=\"text-left\">\n                                              PRESCRIPTION\n                                        </td>\n                                  </tr>\n                                  <tr class=\"odd\">\n                                   <td class=\"text-left\">Prescriptions</td>\n                                   <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.prescriptions}}</td>\n                                   <td class=\"text-center\"><b>{{totalPrescriptions}}</b></td>\n                             </tr>\n                             <tr class=\"evn\">\n                                   <td class=\"text-left\">Avg daily prescriptions</td>\n                                   <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{getData(data?.avgDailyPrescription)}}</td>\n                                   <td class=\"text-center\"><b>{{getData(avgTotalPrescriptions)}}</b></td>\n                             </tr>\n                             <tr class=\"tbl-hd-2\">\n                                   <td colspan=\"7\" class=\"text-left\">\n                                        PATIENT\n                                  </td>\n                            </tr>\n                            <tr class=\"odd\">\n                             <td class=\"text-left\">Patients</td>\n                             <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.totalPatients}}</td>\n                             <td class=\"text-center\"><b>{{patientArray?.length}}</b></td>\n                       </tr>\n                       <tr class=\"evn\">\n                             <td class=\"text-left\">New Patients</td>\n                             <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.newPatients}}</td>\n                             <td class=\"text-center\"><b>{{newPatientArray?.length}}</b></td>\n                       </tr>\n                       <tr class=\"odd\">\n                             <td class=\"text-left\">Old Patients</td>\n                             <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.oldPatients}}</td>\n                             <td class=\"text-center\"><b>{{oldPatientArray?.length}}</b></td>\n                       </tr>\n                       <tr class=\"evn\">\n                             <td class=\"text-left\">Avg daily patients</td><td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.avgDailyPatients}}</td>\n                             <td class=\"text-center\"><b>{{totalAvgDailyPatients}}</b></td>\n                       </tr>\n                       <tr class=\"odd\">\n                             <td class=\"text-left\">Frequent Patients  ( Twice or more )</td>\n                             <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.frequentPatients}}</td>\n                             <td class=\"text-center\"><b>{{totalFreqPatients}}</b></td>\n                       </tr>\n                       <tr class=\"evn\">\n                             <td class=\"text-left\">Male patients</td>\n                             <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.male}}</td>\n                             <td class=\"text-center\"><b>{{totalMalePatients}}</b></td>\n                       </tr>\n                       <tr class=\"odd\">\n                             <td class=\"text-left\">Female patients </td>\n                             <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.female}}</td>\n                             <td class=\"text-center\"><b>{{totalFemalePatients}}</b></td>\n                       </tr>\n                       <tr class=\"evn\">\n                             <td class=\"text-left\">Avg. Patient Age (Yrs)</td>\n                             <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.avgAge}}</td>\n                             <td class=\"text-center\"><b>{{totalAvgAgePatients}}</b></td>\n                       </tr>\n                       <tr class=\"odd\">\n                             <td class=\"text-left\">Walk-In patients</td>\n                             <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.walkin}}</td>\n                             <td class=\"text-center\"><b>{{totalWalkinPatients}}</b></td>\n                       </tr>\n                       <tr class=\"evn\">\n                        <td class=\"text-left\">Appointment patients</td>\n                        <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.appointment}}</td>\n                        <td class=\"text-center\"><b>{{totalAppointmentPatients}}</b></td>\n                  </tr>\n                  <tr class=\"odd\">\n                        <td class=\"text-left\">Emergency patients</td>\n                        <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.emergency}}</td>\n                        <td class=\"text-center\"><b>{{totalEmergencyPatients}}</b></td>\n                  </tr>\n                  <tr class=\"tbl-hd-2\">\n                        <td colspan=\"7\" class=\"text-left\">\n                              TIME\n                        </td>\n                  </tr>\n                  <tr class=\"evn\">\n                        <td class=\"text-left\">Avg CTU</td>\n                        <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.avgCtu}}%</td>\n                        <td class=\"text-center\"><b>{{totalAvgCtu}}%</b></td>\n                  </tr>\n                  <tr class=\"odd\">\n                        <td class=\"text-left\">Avg time per patient</td>\n                        <td class=\"text-center\" *ngFor=\"let data of doctorCollectionArray\">{{data?.totalSec}}</td>\n                        <td class=\"text-center\"><b>{{totalAvgTime}}</b></td>\n                  </tr>\n            </tbody>\n      </table>\n</div>\n</div>\n</div>\n</div>\n\t\t      \t\t\t<!-- \t<div class=\"container-fluid\">\n\t\t      \t\t\t\t\t<div class=\"col-lg-12 text-center foot-2\">\n\t\t      \t\t\t\t\t\t<h5 style=\"font-weight: normal;\">\n\t\t      \t\t\t\t\t\t\t<b style=\"background-color: rgb(199,220,244);padding:5px; \">\n\t\t      \t\t\t\t\t\t\t\tCURRENT ACCUPANCY STATUS:\n\t\t      \t\t\t\t\t\t\t</b>\n\t\t      \t\t\t\t\t\t\t<span style=\"background-color: rgb(199,220,244);padding:6px; \">\n\t\t      \t\t\t\t\t\t\t\tTOTAL BEDS <b>- {{getData(totalGeneralBeds + totalSemiPrivateBeds + totalPrivateBeds)}} |</b>\n\t\t      \t\t\t\t\t\t\t\tOCCUPIUED <b>- {{patientAdmittedlength}} | </b>\n\t\t      \t\t\t\t\t\t\t\tVACANT- <b>{{getData((totalGeneralBeds + totalSemiPrivateBeds + totalPrivateBeds)-(patientAdmittedlength))}}</b>\n\t\t      \t\t\t\t\t\t\t</span>\n\t\t      \t\t\t\t\t\t</h5>\n\t\t      \t\t\t\t\t</div>\n\t\t      \t\t\t\t</div> -->\n\t\t      \t\t\t</div>\n\t\t      \t\t</div>\n\t\t      \t</div>\n                 </div>\n           </div>\n     </div>\n<!-- \t<div class=\"container footer-cstm-an\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-5 text-right\">\n\t\t\t\t<div>\n\t\t\t\t\t<p>CURRENT OCCUPANCY: <b>25% </b></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"text-center col-lg-2\">\n\t\t\t\t<span>|</span>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-5 text-left\">\n\t\t\t\t<div>\n\t\t\t\t\t<p>ADMISSION TREND : <b>Rising:</b> Falling : Steady</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div> -->"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-opd/clinic-summary-opd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicSummaryOpdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClinicSummaryOpdComponent = /** @class */ (function () {
    function ClinicSummaryOpdComponent(userService, toastr, datePipe) {
        this.userService = userService;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.fromDate = new Date();
        this.toDate = new Date();
        this.fromDate1 = new Date();
        this.toDate1 = new Date();
        this.newDate = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
    }
    ClinicSummaryOpdComponent.prototype.ngOnInit = function () {
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.doctorCollectionArray = [];
        this.patientArray = [];
        this.newPatientArray = [];
        this.oldPatientArray = [];
        this.activatedtab = 1;
        this.activatetab(1);
    };
    ClinicSummaryOpdComponent.prototype.activatetab = function (i) {
        this.activatedtab = i;
        var object;
        object = {};
        var date = new Date();
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id;
        object.end_date = new Date();
        if (i == 0) {
            object.start_date = date;
        }
        else if (i == 1) {
            object.start_date = new Date(date.setDate(date.getDate() - 6));
        }
        else if (i == 2) {
            object.start_date = new Date(date.setDate(date.getDate() - 13));
        }
        else if (i == 3) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 1));
        }
        else if (i == 4) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 3));
        }
        else if (i == 5) {
            object.start_date = new Date(date.setMonth(date.getMonth() - 6));
        }
        else if (i == 6) {
            object.start_date = new Date(date.setFullYear(date.getFullYear() - 1));
        }
        else if (i == 7) {
            object.start_date = new Date();
            object.maximum = true;
        }
        this.fromDate = new Date(object.start_date);
        this.toDate = new Date(object.end_date);
        console.log(object);
        var diff = Math.abs(new Date(this.toDate).getTime() - new Date(this.fromDate).getTime());
        this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
        this.OPDAnalyticsClinicSummary(object);
    };
    ClinicSummaryOpdComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    ClinicSummaryOpdComponent.prototype.getData = function (data) {
        if (isNaN(data)) {
            return 0;
        }
        else if (data % 1 != 0) {
            return data.toFixed(2);
        }
        else {
            return data;
        }
    };
    ClinicSummaryOpdComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i]._id == id) {
                var name = this.dataDoctors[i].first_name.split(' ');
                return (name[0]);
            }
        }
    };
    ClinicSummaryOpdComponent.prototype.go = function () {
        this.activatedtab = 0;
        var object;
        object = {};
        object.doctm_clinic_id = this.doctorData.doctm_clinic_id;
        object.start_date = this.fromDate1;
        object.end_date = this.toDate1;
        console.log(object);
        var diff = Math.abs(new Date(this.toDate1).getTime() - new Date(this.fromDate1).getTime());
        this.dateDiff = Math.trunc(diff / (1000 * 3600 * 24)) + 1;
        this.OPDAnalyticsClinicSummary(object);
    };
    ClinicSummaryOpdComponent.prototype.OPDAnalyticsClinicSummary = function (object) {
        var _this = this;
        this.loading = true;
        this.doctorCollectionArray = [];
        this.totalCollection = 0;
        this.dataDoctors = [];
        this.avgDailyCollection = 0;
        this.avgPatientCollection = 0;
        this.totalPrescriptions = 0;
        this.avgTotalPrescriptions = 0;
        this.totalAvgDailyPatients = 0;
        this.totalFreqPatients = 0;
        this.totalMalePatients = 0;
        this.totalFemalePatients = 0;
        this.totalAvgAgePatients = 0;
        this.totalWalkinPatients = 0;
        this.totalAvgCtu = 0;
        this.totalAppointmentPatients = 0;
        this.totalEmergencyPatients = 0;
        this.totalCtuUsed = 0;
        this.totalCtuUtilisedPerc = 0;
        this.totalDispensedPatients = 0;
        this.patientArray = [];
        this.newPatientArray = [];
        this.oldPatientArray = [];
        this.userService.OPDAnalyticsClinicSummary(object).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.dataDoctors = data.dataDoctors;
                _this.totalPrescriptions = data.dataDispensed.length + data.dataRegistrations.length;
                ///// patient array unique per doctor start ///////////////////
                // for (var i = 0; i < data.dataDispensed.length; i++) {
                // 	this.totalCollection +=parseInt(data.dataDispensed[i].registration.fee)
                // 	var boolean = false
                // 	for (var j = 0; j < this.doctorCollectionArray.length; j++) {
                // 		if(data.dataDispensed[i].doctor_id == this.doctorCollectionArray[j].id){
                // 			this.doctorCollectionArray[j].sales += parseInt(data.dataDispensed[i].registration.fee)
                // 			this.doctorCollectionArray[j].prescriptions++
                // 			var boolean1 = false
                // 			for (var k = 0; k < this.doctorCollectionArray[j].patientArray.length; k++) {
                // 				if(this.doctorCollectionArray[j].patientArray[k].name==data.dataDispensed[i].registration.pateintName &&
                // 					this.doctorCollectionArray[j].patientArray[k].phone==data.dataDispensed[i].registration.pateintPhone){
                // 					boolean1 = true
                // 					break;
                // 				}
                // 			}
                // 			if(boolean1 == false){
                // 				this.doctorCollectionArray[j].patientArray.push({
                // 					name: data.dataDispensed[i].registration.pateintName,
                // 					phone: data.dataDispensed[i].registration.pateintPhone
                // 				})
                // 			}
                // 			boolean = true
                // 		}
                // 	}
                // 	if(boolean == false){
                // 		this.doctorCollectionArray.push({
                // 			id: data.dataDispensed[i].doctor_id,
                // 			sales: parseInt(data.dataDispensed[i].registration.fee),
                // 			prescriptions: 1,
                // 			patientArray: [{
                // 				name: data.dataDispensed[i].registration.pateintName,
                // 				phone: data.dataDispensed[i].registration.pateintPhone
                // 			}]
                // 		})		
                // 	}
                // }
                // for (var i = 0; i < data.dataRegistrations.length; i++) {
                // 	this.totalCollection +=parseInt(data.dataRegistrations[i].fee)
                // 	var boolean = false
                // 	for (var j = 0; j < this.doctorCollectionArray.length; j++) {
                // 		if(data.dataRegistrations[i].doctor_id == this.doctorCollectionArray[j].id){
                // 			this.doctorCollectionArray[j].sales += parseInt(data.dataRegistrations[i].fee)
                // 			this.doctorCollectionArray[j].prescriptions++
                // 			var boolean1 = false
                // 			for (var k = 0; k < this.doctorCollectionArray[j].patientArray.length; k++) {
                // 				if(this.doctorCollectionArray[j].patientArray[k].name==data.dataRegistrations[i].pateintName &&
                // 					this.doctorCollectionArray[j].patientArray[k].phone==data.dataRegistrations[i].pateintPhone){
                // 					boolean1 = true
                // 					break;
                // 				}
                // 			}
                // 			if(boolean1 == false){
                // 				this.doctorCollectionArray[j].patientArray.push({
                // 					name: data.dataRegistrations[i].pateintName,
                // 					phone: data.dataRegistrations[i].pateintPhone
                // 				})
                // 			}
                // 			boolean = true
                // 		}
                // 	}
                // 	if(boolean == false){
                // 		this.doctorCollectionArray.push({
                // 			id: data.dataRegistrations[i].doctor_id,
                // 			sales: parseInt(data.dataRegistrations[i].fee),
                // 			prescriptions: 1,
                // 			patientArray: [{
                // 				name: data.dataRegistrations[i].pateintName,
                // 				phone: data.dataRegistrations[i].pateintPhone
                // 			}]
                // 		})		
                // 	}
                // }
                ///// patient array unique per doctor end /////////////
                for (var i = 0; i < data.dataRegistrations.length; i++) {
                    if (data.dataRegistrations[i].fee = 0) {
                        _this.totalCollection += parseInt(data.dataRegistrations[i].fee);
                    }
                    var boolean = false;
                    for (var j = 0; j < _this.doctorCollectionArray.length; j++) {
                        _this.doctorCollectionArray[j].totalSec = 0;
                        _this.doctorCollectionArray[j].dispensed = 0;
                        if (data.dataRegistrations[i].doctor_id == _this.doctorCollectionArray[j].id) {
                            if (data.dataRegistrations[i].fee != 0) {
                                _this.doctorCollectionArray[j].sales += parseInt(data.dataRegistrations[i].fee);
                            }
                            _this.doctorCollectionArray[j].prescriptions++;
                            var boolean1 = false;
                            for (var k = 0; k < _this.patientArray.length; k++) {
                                if (_this.patientArray[k].name == data.dataRegistrations[i].pateintName &&
                                    _this.patientArray[k].phone == data.dataRegistrations[i].pateintPhone) {
                                    _this.patientArray[k].lastVisitCount++;
                                    boolean1 = true;
                                    break;
                                }
                            }
                            if (boolean1 == false) {
                                var count = 0;
                                if (data.dataRegistrations[i].lastVisit.status) {
                                    _this.oldPatientArray.push(1);
                                    count = 1;
                                }
                                if (data.dataRegistrations[i].lastVisit.status == false) {
                                    _this.newPatientArray.push(1);
                                }
                                _this.patientArray.push({
                                    name: data.dataRegistrations[i].pateintName,
                                    phone: data.dataRegistrations[i].pateintPhone,
                                    doctor_id: data.dataRegistrations[i].doctor_id,
                                    lastVisit: data.dataRegistrations[i].lastVisit.status,
                                    lastVisitCount: count,
                                    gender: data.dataRegistrations[i].gender,
                                    age_in_years: data.dataRegistrations[i].age_in_years,
                                    type: data.dataRegistrations[i].type
                                });
                            }
                            boolean = true;
                        }
                    }
                    if (boolean == false) {
                        var count = 0;
                        if (data.dataRegistrations[i].lastVisit.status) {
                            _this.oldPatientArray.push(1);
                            count = 1;
                        }
                        if (data.dataRegistrations[i].lastVisit.status == false) {
                            _this.newPatientArray.push(1);
                            // count = 1
                        }
                        var a = 0;
                        if (data.dataRegistrations[i].fee != 0) {
                            a = parseInt(data.dataRegistrations[i].fee);
                        }
                        _this.doctorCollectionArray.push({
                            id: data.dataRegistrations[i].doctor_id,
                            sales: a,
                            prescriptions: 1,
                            dispensed: 0,
                            totalSec: 0
                        });
                        _this.patientArray.push({
                            name: data.dataRegistrations[i].pateintName,
                            phone: data.dataRegistrations[i].pateintPhone,
                            doctor_id: data.dataRegistrations[i].doctor_id,
                            lastVisit: data.dataRegistrations[i].lastVisit.status,
                            lastVisitCount: count,
                            gender: data.dataRegistrations[i].gender,
                            age_in_years: data.dataRegistrations[i].age_in_years,
                            type: data.dataRegistrations[i].type
                        });
                    }
                }
                for (var i = 0; i < data.dataDispensed.length; i++) {
                    _this.totalDispensedPatients++;
                    if (data.dataDispensed[i].registration.fee != 0) {
                        _this.totalCollection += parseInt(data.dataDispensed[i].registration.fee);
                    }
                    var boolean = false;
                    for (var j = 0; j < _this.doctorCollectionArray.length; j++) {
                        if (data.dataDispensed[i].doctor_id == _this.doctorCollectionArray[j].id) {
                            if (data.dataDispensed[i].registration.fee != 0) {
                                _this.doctorCollectionArray[j].sales += parseInt(data.dataDispensed[i].registration.fee);
                            }
                            _this.doctorCollectionArray[j].prescriptions++;
                            _this.doctorCollectionArray[j].dispensed++;
                            _this.doctorCollectionArray[j].totalSec += (data.dataDispensed[i].precription.minutes * 60) + data.dataDispensed[i].precription.seconds;
                            var boolean1 = false;
                            for (var k = 0; k < _this.patientArray.length; k++) {
                                if (_this.patientArray[k].name == data.dataDispensed[i].registration.pateintName &&
                                    _this.patientArray[k].phone == data.dataDispensed[i].registration.pateintPhone) {
                                    _this.patientArray[k].lastVisitCount++;
                                    boolean1 = true;
                                    break;
                                }
                            }
                            if (boolean1 == false) {
                                var count = 0;
                                if (data.dataDispensed[i].registration.lastVisit.status) {
                                    _this.oldPatientArray.push(1);
                                    count = 1;
                                }
                                if (data.dataDispensed[i].registration.lastVisit.status == false) {
                                    _this.newPatientArray.push(1);
                                    // count = 1
                                }
                                _this.patientArray.push({
                                    name: data.dataDispensed[i].registration.pateintName,
                                    phone: data.dataDispensed[i].registration.pateintPhone,
                                    doctor_id: data.dataDispensed[i].doctor_id,
                                    lastVisit: data.dataDispensed[i].registration.lastVisit.status,
                                    lastVisitCount: count,
                                    gender: data.dataDispensed[i].registration.gender,
                                    age_in_years: data.dataDispensed[i].registration.age_in_years,
                                    type: data.dataDispensed[i].registration.type
                                });
                            }
                            boolean = true;
                        }
                    }
                    if (boolean == false) {
                        var a = 0;
                        if (data.dataDispensed[i].registration.fee != 0) {
                            a = parseInt(data.dataDispensed[i].registration.fee);
                        }
                        _this.doctorCollectionArray.push({
                            id: data.dataDispensed[i].doctor_id,
                            sales: a,
                            prescriptions: 1,
                            dispensed: 1,
                            totalSec: (data.dataDispensed[i].precription.minutes * 60) + data.dataDispensed[i].precription.seconds
                        });
                        var count = 0;
                        if (data.dataDispensed[i].registration.lastVisit.status) {
                            _this.oldPatientArray.push(1);
                            count = 1;
                        }
                        if (data.dataDispensed[i].registration.lastVisit.status == false) {
                            _this.newPatientArray.push(1);
                            // count = 1
                        }
                        _this.patientArray.push({
                            name: data.dataDispensed[i].registration.pateintName,
                            phone: data.dataDispensed[i].registration.pateintPhone,
                            doctor_id: data.dataDispensed[i].doctor_id,
                            lastVisit: data.dataDispensed[i].registration.lastVisit.status,
                            lastVisitCount: count,
                            gender: data.dataDispensed[i].registration.gender,
                            age_in_years: data.dataDispensed[i].registration.age_in_years,
                            type: data.dataDispensed[i].registration.type
                        });
                    }
                }
                console.log(_this.patientArray);
                for (var i = 0; i < _this.doctorCollectionArray.length; i++) {
                    _this.doctorCollectionArray[i].percentage = parseFloat(_this.getData((_this.doctorCollectionArray[i].sales * 100) / _this.totalCollection));
                    _this.doctorCollectionArray[i].avgDailyColl = parseFloat(_this.getData((_this.doctorCollectionArray[i].sales) / _this.dateDiff));
                    _this.doctorCollectionArray[i].avgColl = parseFloat(_this.getData((_this.doctorCollectionArray[i].sales) / (_this.doctorCollectionArray[i].prescriptions)));
                    _this.doctorCollectionArray[i].avgDailyPrescription = Math.ceil(_this.getData((_this.doctorCollectionArray[i].prescriptions) / _this.dateDiff));
                    _this.doctorCollectionArray[i].totalPatients = 0;
                    _this.doctorCollectionArray[i].newPatients = 0;
                    _this.doctorCollectionArray[i].oldPatients = 0;
                    _this.doctorCollectionArray[i].frequentPatients = 0;
                    _this.doctorCollectionArray[i].male = 0;
                    _this.doctorCollectionArray[i].female = 0;
                    _this.doctorCollectionArray[i].totalAge = 0;
                    _this.doctorCollectionArray[i].appointment = 0;
                    _this.doctorCollectionArray[i].walkin = 0;
                    _this.doctorCollectionArray[i].emergency = 0;
                    _this.doctorCollectionArray[i].avgCtu = _this.calculateCtu(object, _this.doctorCollectionArray[i].totalSec, _this.doctorCollectionArray[i].id);
                    _this.totalCtuUsed += _this.doctorCollectionArray[i].totalSec;
                    var min = parseInt(_this.getData(_this.getData(_this.doctorCollectionArray[i].totalSec / _this.doctorCollectionArray[i].dispensed) / 60));
                    var sec = parseInt(_this.getData(_this.getData(_this.doctorCollectionArray[i].totalSec / _this.doctorCollectionArray[i].dispensed) % 60));
                    _this.doctorCollectionArray[i].totalSec = min + " min " + sec + " sec";
                    for (var j = 0; j < _this.patientArray.length; j++) {
                        if (_this.patientArray[j].doctor_id == _this.doctorCollectionArray[i].id) {
                            _this.doctorCollectionArray[i].totalPatients++;
                            _this.doctorCollectionArray[i].totalAge += _this.patientArray[j].age_in_years;
                            if (_this.patientArray[j].lastVisit == false) {
                                _this.doctorCollectionArray[i].newPatients++;
                            }
                            if (_this.patientArray[j].lastVisit) {
                                _this.doctorCollectionArray[i].oldPatients++;
                            }
                            if (_this.patientArray[j].lastVisitCount >= 2) {
                                _this.doctorCollectionArray[i].frequentPatients++;
                            }
                            if (_this.patientArray[j].gender == "Male") {
                                _this.doctorCollectionArray[i].male++;
                            }
                            else if (_this.patientArray[j].gender == "Female") {
                                _this.doctorCollectionArray[i].female++;
                            }
                            if (_this.patientArray[j].type == "Walk-in") {
                                _this.doctorCollectionArray[i].walkin++;
                            }
                            else if (_this.patientArray[j].type == "Appointment") {
                                _this.doctorCollectionArray[i].appointment++;
                            }
                            else if (_this.patientArray[j].type == "Emergency") {
                                _this.doctorCollectionArray[i].emergency++;
                            }
                        }
                    }
                }
                for (var i = 0; i < _this.doctorCollectionArray.length; i++) {
                    _this.totalAvgAgePatients += _this.doctorCollectionArray[i].totalAge;
                    _this.doctorCollectionArray[i].avgDailyPatients = Math.ceil(_this.getData(_this.doctorCollectionArray[i].totalPatients) / _this.dateDiff);
                    _this.doctorCollectionArray[i].avgAge = Math.ceil(_this.getData(_this.doctorCollectionArray[i].totalAge) / _this.patientArray.length);
                    _this.totalAvgDailyPatients += _this.doctorCollectionArray[i].avgDailyPatients;
                    _this.totalFreqPatients += _this.doctorCollectionArray[i].frequentPatients;
                    _this.totalMalePatients += _this.doctorCollectionArray[i].male;
                    _this.totalFemalePatients += _this.doctorCollectionArray[i].female;
                    _this.totalWalkinPatients += _this.doctorCollectionArray[i].walkin;
                    _this.totalAvgCtu += _this.doctorCollectionArray[i].avgCtu;
                    _this.totalAppointmentPatients += _this.doctorCollectionArray[i].appointment;
                    _this.totalEmergencyPatients += _this.doctorCollectionArray[i].emergency;
                }
                _this.totalAvgAgePatients = Math.ceil(_this.getData(_this.totalAvgAgePatients) / _this.patientArray.length);
                _this.totalCtuUtilisedPerc = _this.calculateCtuAllDoctors(object, _this.totalCtuUsed);
                var min = parseInt(_this.getData(_this.getData(_this.totalCtuUsed / _this.totalDispensedPatients) / 60));
                var sec = parseInt(_this.getData(_this.getData(_this.totalCtuUsed / _this.totalDispensedPatients) % 60));
                _this.totalAvgTime = min + " min " + sec + " sec";
                if (_this.doctorCollectionArray.length < _this.dataDoctors.length) {
                    for (var i = 0; i < _this.dataDoctors.length; i++) {
                        var boolean = false;
                        for (var j = 0; j < _this.doctorCollectionArray.length; j++) {
                            if (_this.doctorCollectionArray[j].id.toString() == _this.dataDoctors[i]._id.toString()) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            _this.doctorCollectionArray.push({
                                id: _this.dataDoctors[i]._id,
                                avgColl: 0,
                                avgDailyColl: 0,
                                avgDailyPatients: 0,
                                avgAge: 0,
                                avgDailyPrescription: 0,
                                female: 0,
                                frequentPatients: 0,
                                male: 0,
                                newPatients: 0,
                                oldPatients: 0,
                                percentage: 0,
                                prescriptions: 0,
                                dispensed: 0,
                                sales: 0,
                                totalAge: 0,
                                totalPatients: 0,
                                walkin: 0,
                                appointment: 0,
                                emergency: 0,
                                totalSec: 0,
                                avgCtu: 0,
                            });
                        }
                    }
                }
                _this.avgDailyCollection = _this.totalCollection / _this.dateDiff;
                _this.avgPatientCollection = _this.totalCollection / (data.dataDispensed.length + data.dataRegistrations.length);
                _this.avgTotalPrescriptions = Math.ceil(_this.totalPrescriptions / _this.dateDiff);
            }
            console.log(_this.doctorCollectionArray);
            console.log(_this.patientArray);
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    ClinicSummaryOpdComponent.prototype.calculateCtu = function (object, totalSec, id) {
        for (var ii = 0; ii < this.dataDoctors.length; ii++) {
            if (this.dataDoctors[ii]._id == id) {
                ///////////// hours logic /////////////////////////////
                var daysOfYear = [];
                var localDateArray = [];
                var countMonday = 0;
                var countTuesday = 0;
                var countWednesday = 0;
                var countThursday = 0;
                var countFriday = 0;
                var countSaturday = 0;
                var countSunday = 0;
                for (var d = new Date(object.start_date); d <= new Date(object.end_date); d.setDate(d.getDate() + 1)) {
                    daysOfYear.push(new Date(d));
                }
                for (var i = 0; i < daysOfYear.length; i++) {
                    localDateArray.push(this.datePipe.transform(daysOfYear[i], 'EEEE'));
                }
                for (var i = 0; i < localDateArray.length; i++) {
                    if (localDateArray[i] == "Monday") {
                        countMonday++;
                    }
                    else if (localDateArray[i] == "Tuesday") {
                        countTuesday++;
                    }
                    else if (localDateArray[i] == "Wednesday") {
                        countWednesday++;
                    }
                    else if (localDateArray[i] == "Thursday") {
                        countThursday++;
                    }
                    else if (localDateArray[i] == "Friday") {
                        countFriday++;
                    }
                    else if (localDateArray[i] == "Saturday") {
                        countSaturday++;
                    }
                    else if (localDateArray[i] == "Sunday") {
                        countSunday++;
                    }
                }
                var total_diff = 0;
                var totalMin = 0;
                for (var j = 0; j < this.dataDoctors[ii].consultation_schedule.length; j++) {
                    var min_diff = 0;
                    var hour_diff = 0;
                    for (var k = 0; k < this.dataDoctors[ii].consultation_schedule[j].shifts.length; k++) {
                        min_diff += parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].toTime.minute) - parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].fromTime.minute);
                        hour_diff += parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].toTime.hour) - parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].fromTime.hour);
                        total_diff = min_diff + (hour_diff * 60);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Monday == true) {
                        totalMin += (countMonday * total_diff);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Tuesday == true) {
                        totalMin += (countTuesday * total_diff);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Wednesday == true) {
                        totalMin += (countWednesday * total_diff);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Thursday == true) {
                        totalMin += (countThursday * total_diff);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Friday == true) {
                        totalMin += (countFriday * total_diff);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Saturday == true) {
                        totalMin += (countSaturday * total_diff);
                    }
                    if (this.dataDoctors[ii].consultation_schedule[j].Sunday == true) {
                        totalMin += (countSunday * total_diff);
                    }
                }
                return parseFloat(this.getData((totalSec * 100) / (totalMin * 60)));
                ///////////////////////////////////////////////////////
            }
        }
    };
    ClinicSummaryOpdComponent.prototype.calculateCtuAllDoctors = function (object, totalSec) {
        var totalMin = 0;
        for (var ii = 0; ii < this.dataDoctors.length; ii++) {
            ///////////// hours logic /////////////////////////////
            var daysOfYear = [];
            var localDateArray = [];
            var countMonday = 0;
            var countTuesday = 0;
            var countWednesday = 0;
            var countThursday = 0;
            var countFriday = 0;
            var countSaturday = 0;
            var countSunday = 0;
            for (var d = new Date(object.start_date); d <= new Date(object.end_date); d.setDate(d.getDate() + 1)) {
                daysOfYear.push(new Date(d));
            }
            for (var i = 0; i < daysOfYear.length; i++) {
                localDateArray.push(this.datePipe.transform(daysOfYear[i], 'EEEE'));
            }
            for (var i = 0; i < localDateArray.length; i++) {
                if (localDateArray[i] == "Monday") {
                    countMonday++;
                }
                else if (localDateArray[i] == "Tuesday") {
                    countTuesday++;
                }
                else if (localDateArray[i] == "Wednesday") {
                    countWednesday++;
                }
                else if (localDateArray[i] == "Thursday") {
                    countThursday++;
                }
                else if (localDateArray[i] == "Friday") {
                    countFriday++;
                }
                else if (localDateArray[i] == "Saturday") {
                    countSaturday++;
                }
                else if (localDateArray[i] == "Sunday") {
                    countSunday++;
                }
            }
            var total_diff = 0;
            for (var j = 0; j < this.dataDoctors[ii].consultation_schedule.length; j++) {
                var min_diff = 0;
                var hour_diff = 0;
                for (var k = 0; k < this.dataDoctors[ii].consultation_schedule[j].shifts.length; k++) {
                    min_diff += parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].toTime.minute) - parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].fromTime.minute);
                    hour_diff += parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].toTime.hour) - parseInt(this.dataDoctors[ii].consultation_schedule[j].shifts[k].fromTime.hour);
                    total_diff = min_diff + (hour_diff * 60);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Monday == true) {
                    totalMin += (countMonday * total_diff);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Tuesday == true) {
                    totalMin += (countTuesday * total_diff);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Wednesday == true) {
                    totalMin += (countWednesday * total_diff);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Thursday == true) {
                    totalMin += (countThursday * total_diff);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Friday == true) {
                    totalMin += (countFriday * total_diff);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Saturday == true) {
                    totalMin += (countSaturday * total_diff);
                }
                if (this.dataDoctors[ii].consultation_schedule[j].Sunday == true) {
                    totalMin += (countSunday * total_diff);
                }
            }
            ///////////////////////////////////////////////////////
        }
        return parseFloat(this.getData((totalSec * 100) / (totalMin * 60)));
    };
    ClinicSummaryOpdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clinic-summary-opd',
            template: __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-opd/clinic-summary-opd.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-opd/clinic-summary-opd.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], ClinicSummaryOpdComponent);
    return ClinicSummaryOpdComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/clinic-summary-opd/clinic-summary-opd.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicSummaryOpdModule", function() { return ClinicSummaryOpdModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinic_summary_opd_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-opd/clinic-summary-opd-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clinic_summary_opd_component__ = __webpack_require__("../../../../../src/app/header-two-layout/clinic-summary-opd/clinic-summary-opd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ClinicSummaryOpdModule = /** @class */ (function () {
    function ClinicSummaryOpdModule() {
    }
    ClinicSummaryOpdModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__clinic_summary_opd_routing_module__["a" /* ClinicSummaryOpdRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__clinic_summary_opd_component__["a" /* ClinicSummaryOpdComponent */]]
        })
    ], ClinicSummaryOpdModule);
    return ClinicSummaryOpdModule;
}());



/***/ })

});
//# sourceMappingURL=clinic-summary-opd.module.chunk.js.map