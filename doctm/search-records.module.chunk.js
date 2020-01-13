webpackJsonp(["search-records.module"],{

/***/ "../../../../../src/app/header-two-layout/search-records/search-records-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchRecordsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_records_component__ = __webpack_require__("../../../../../src/app/header-two-layout/search-records/search-records.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__search_records_component__["a" /* SearchRecordsComponent */]
    }
];
var SearchRecordsRoutingModule = /** @class */ (function () {
    function SearchRecordsRoutingModule() {
    }
    SearchRecordsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], SearchRecordsRoutingModule);
    return SearchRecordsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/search-records/search-records.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cus-content-wrapper{\n\tpadding-top: 0px;\n\tpadding-bottom: 0px;\n}\n.hding > h3{\n\tmargin: 0px;\n\tpadding:15px 0px;\n\tbackground-color: #d9e0dd; \n}\n.hding  h5.btm{\n\tmargin: 0px;\n\tpadding:15px 0px;\n\tbackground-color: #d9e0dd; \n}\n.cstm-tbl{\n\twidth: 100%;\n}\n.clr-blue{\n\tcolor: #00b0f0;\n}\n.clr-vlt{\n\tcolor: #5c62af;\n}\n.tb-1{\n\tmargin-top:15px;\n}\n.tb-1 tr td{\n\tpadding:2px 8px;\n\tvertical-align: middle; \n}\n.cstm-tbl tr{\n\theight:40px;\n}\n.footer-cstm-an{\n\tposition: fixed;\n\tfloat: left;\n\twidth: 100%;\n\tbottom:0px;\n\tbackground: #00b0f0;\n\tcolor:#fff;\n\tz-index: 99;\n\tpadding-top: 8px;\n}\n.mt-table h3{\n\tmargin-top: 0px;\n}\n.cstm-tr{\n\tbackground-color:#92d050;\n\tcolor:#fff;\n\ttext-align: center;\n}\n.cstm-tr-2{\n\tbackground-color:#c5d8f1;\n}\n.cstm-tr-2 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-2 td:last-child {\n\tborder-right: none;\n}\n.cstm-tr-3{\n\tborder-bottom:1px solid #bbb; \n}\n.cstm-tr-3 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-3 td:last-child {\n\tborder-right: none;\n}\n.color-red {\n\tcolor: #ff0000;\n\t-webkit-transform: translateY(-8px);\n\t        transform: translateY(-8px);\n}\n.cstm-tr-4{\n\tbackground-color: #f2dada;\n}\n.cstm-mg{\n\tmargin-top: 5px;\n}\n.btn-go{\n\tbackground-color: transparent;\n\tborder: 1px solid #002160;\n\tmargin-bottom: 5px;\n\tmin-width: 62%;\n}\n.btn-go:hover{\n\t-webkit-transition: 300ms;\n\ttransition: 300ms;\n\tbackground: #98C74F;\n\tborder-color: #98C74F;\n\tcolor: #fff;\n}\n.li-cstm a{\n\ttext-align: center!important;\n\tbackground: #000!important;\n\tcolor: #fff!important;\n\tfont-size: 16px!important;\n\tfont-weight: inherit!important;\n\tpadding: 6px!important;\n}\n.cus-sidebar{\n\theight: inherit!important;\n}\n/*karam @ 2019*/\n.side-bar-cstm{\n\tz-index: 99;\n}\n.res-tab-2{\n\tmax-height: 225px;\n}\n.cstm-ul-new li{\n\twidth:170px;\n}\n.cstm-ul-new li a{\n\tbackground-color:transparent;\n\tcolor:#000;\n\tpadding:10px;\n\tcursor: pointer;\n\tborder-radius: 0px;\n\tborder-bottom: 2px solid transparent; \n\ttext-align: center;\n}\n.cstm-ul-new li.active a{\n\tbackground-color: #e0e0e0;\n\tcolor: #000;\n\tborder-bottom: 2px solid #00b0f0;\n}\n.tab-new{\n\tmin-height: 450px;\n\tmax-height: 450px;\n\tpadding: 0px 8px;\n\tborder-left: 1px solid #dcdcdc;\n\tborder-right: 1px solid #dcdcdc;\n\toverflow-x: hidden;\n}\n.clr-blue{\n\tcolor: #00b0f0;\n\tfont-weight: bold;\n}\n/*karam@30-jan-2019*/\n/*.tab-new-cstm tr td{\n\tfont-size: 10px;\n\t}*/\n.camera-div {\n\t\theight: 550px;\n\t\ttext-align: center;\n\t\tpadding: 10px;\n\t}\n.camera-btn {\n\t\ttext-align: center;\n\t\tpadding: 15px;\n\t}\n.camera-div img{\n\t\tmax-width: 550px;\n\t}\n.brder-cstm{\n\t\tpadding-bottom: 1px;\n\t\tmargin-bottom: 6px;\n\t\tborder-bottom: 1px solid #a7a7a7;\n\t\tposition: relative;\n\t}\n.brder-cstm::after{\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\theight: 6px;\n\t\twidth: 12px;\n\t\tbackground-color: #ffffff;\n\t\ttop: 41px;\n\t\tright: -3px;\n\t\t\n\t}\n.cus-sidebar ul{\n\t\tborder:1px solid #a7a7a7;\n\t}\n.mg-0{\n\t\tmargin-top: 0px;\n\t}\n.mg-bt{\n\t\tmargin-bottom:2px; \n\t}\n.txt-thm{\n\t\tcolor: rgb(0,32,96);\n\t}\n.txt-thm-1{\n\t\tcolor: rgb(0,112,192);\n\t}\n.foot-2{\n\t\tborder-bottom:1px solid #a7a7a7;\n\t\tword-spacing: 14px;\n\t}\n.hdr-2{\n\t\tpadding-bottom: 8px;\n\t\tborder-bottom:1px solid #a7a7a7;\n\t}\n.brdr-lft{\n\t\tmargin-left:-5px;\n\t\tborder-left:1px solid #a7a7a7; \n\t}\n.evn{\n\t\tbackground-color:#eff3ef;\n\t}\n.odd{\n\t\tbackground-color:#e3e3e3;\n\t}\n.new-ul-1 li a{\n\t\theight: 55px;\n\t\tline-height: 3;\n\t}\n.new-table-24 tr td{\n\t\tborder-right:1px solid #fff;\n\t}\n.new-table-24 tr:last-child{\n\t\tborder-right:none;\n\t}\nli.clz a{\n\t\tline-height:1.5!important;\n\t}\ntr.tbl-blk-hd{\n\t\tbackground:rgb(0,112,192);\n\t\tcolor:#fff;\n\t}\ntr.tbl-blk-hd td{\n\t\tborder-right:1px solid #fff;\n\t}\ntr.tbl-blk-hd:last-child{\n\t\tborder-right: none;\n\t}\n.tbl-hd-2{\n\t\tbackground-color: #000;\n\t\tcolor: #fff;\n\t\tborder-bottom: 1px solid #fff;\n\t}\n.new-table-24 tr td{\n\t\tpadding: 5.5px 15px!important;\n\t}\n/*.tbl-blk-hd{\n\theight: 45px;\n}\n.tbl-blk-hd td{\n\tpadding: 12px!important;\n\t}*/\n.my-table-all{\n\t\tmin-height:450px;\n\t\tmax-height:450px;\n\t\toverflow-y: scroll; \n\t}\n.cursr{\n\t\tcursor: pointer;\n\t\t\n\t}\n.cstm-row{\n\t\tmargin-top: 20px;\n\t}\n.cstm-row button{\n\t\tmargin-top:38px;\n\t}\n.cstm-hdr{\n\t\tmargin-top: 15px;\n\t}\n.tbl-head{\n\t\tmargin-bottom:2px;\n\t\tmargin-top:20px;\n\t}\n.tbl-head tr {\n\t\tborder-top:1px solid #fff!important;\n\t\tborder-left:1px solid #fff!important;\n\t\tborder-right:1px solid #fff!important;\n\t}\n.tbl-head tr th{\n\t\tbackground-color:#000!important;\n\t\tborder-color:#fff;\n\t\tcolor:#fff;\n\t}\n.table-bordered > tbody > tr > td{\n\t\tborder: 1px solid #fff;\n\t\tbackground-color: rgb(218,229,241);\n\t}\n.tbl-cntrol{\n\t/*min-height:300px;\n\tmax-height: 300px;*/\n\toverflow-x: hidden;\n\toverflow-y: scroll;\n}\n.tbl-cntrol .tbl-data{\n\tmin-width: 882px;\n}\n.btn-wrap{\n\tmargin-top: 20px;\n}\n.btn-grin{\n\tbackground-color:rgb(161, 210, 83);\n}\n.btn-grin-2{\n\tpadding:20px 30px; \n}\n.btn-wrap button{\n\tmargin-right: 10px;\n}\n.btn-red-1{\n\tbackground-color: #FF0000;\n}\n.btn-ornge{\n\tbackground-color: #E36C09;\n}\n.table{\n\tmargin-bottom:5px;\n}\n.cstm-th tr th{\n\tbackground-color: #000;\n\tcolor: #fff;\n\tborder:1px solid #fff;\n}\n.cstm-caret {\n\tdisplay: inline-block;\n\twidth: 0;\n\tcursor: pointer;\n\tposition: absolute;\n\theight: 0;\n\tmargin-left: 4px;\n\tcolor: #000;\n\ttop: 70.5px;\n\tbackground-color: #01b0f0;\n\tz-index: 9;\n\tright: 20px;\n\tmargin-bottom: 9px;\n\tvertical-align: middle;\n\tborder-top: 12px dashed;\n\tborder-right: 10px solid transparent;\n\tborder-left: 10px solid transparent;\n}\n.cstm-caret-big {\n\tdisplay: inline-block;\n\twidth: 0;\n\tcursor: pointer;\n\tposition: absolute;\n\theight: 0;\n\tmargin-left: 4px;\n\tcolor: #000;\n\ttop: 22px;\n\tbackground-color: #01b0f0;\n\tz-index: 1;\n\tright: 5px;\n\tmargin-bottom: 9px;\n\tvertical-align: middle;\n\tborder-top: 17px dashed;\n\tborder-right: 14px solid transparent;\n\tborder-left: 14px solid transparent;\n}\n.cstm-crt-wrap {\n\tposition: relative;\n}\n.regis-modal-body .select-opt .disabled {\n\tcolor: #ddd;\n}\n.select-doctor{\n\tbackground-color: #01b0f0;\n\tmargin-top: 55px;\n\tcolor: #fff;\n\tmargin-bottom: 15px;\n}\n.new-thd th {\n\tcolor: #fff;\n\tbackground-color: #000;\n\tborder: 1px solid #fff;\n}\n.tbl-cntrol{\n   /* min-height:100px;\n   max-height: 380px;*/\n   overflow-x: hidden;\n   overflow-y: scroll;\n}\n.tbl-cntrol .tbl-data{\n\tmin-width: 880px;\n}\nth.selected{\n\tbackground-color: #00b0f0!important;\n}\n.pos-rel{\n\tposition: relative;\n}\n.cstm-caret{\n\ttop: 12.5px;\n\tright: 6px;\n}\n.pos-rel select option{\n\tcolor: #000;\n}\n.footer-cstm{\n\tposition: fixed;\n\tbottom: 0;\n\tmargin-bottom: 10px;\n}\nli.active a{\n\tbackground:#002160;\n\tcolor:#fff;\n}\n.custom-modal{\n        position:fixed;\n        width:100%;\n        height: 100%;\n        background: rgba(0,0,0,0.65);\n        z-index:999;\n    }\n.custom-modal-inner{\n        border-radius: 5px;\n        margin: 40px auto;\n        width: 48.7%;\n        height: 86.5%;\n        background: #fff;\n        padding: 23px 18px;\n        position: relative;\n        top: 5px;\n        right: 8px;\n        font-size: 15px;\n        cursor: pointer;\n    }\n.custom-modal-inner img{\n        width:630px;\n        height:453px; \n    }\n\t", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/search-records/search-records.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n   <img src=\"./assets/imgs/load.gif\" />\n</div>\n\n<div class=\"analytics-sec\">\n   <div class=\"ipd-deatil-sec\">\n      <div class=\"ipd-body\">\n         <div class=\"cus-sidebar-wrapper side-bar-cstm\">\n            <br>\n            <div class=\"cus-sidebar\">\n               <ul>\n                  <li>\n                     <div class=\"\">\n                        <div class=\"col-lg-3\">\n                           <h4 class=\"pd-left\"><b>From</b></h4>\n                        </div>\n                        <div class=\"col-lg-9\">\n                           <div class=\"cstm-mg\">\n                              <angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n                           </div>\n                        </div>\n                     </div>\n                  </li>\n                  <li>\n                     <div class=\"\">\n                        <div class=\"col-lg-3\">\n                           <h4 class=\"pd-left\"><b>To</b></h4>\n                        </div>\n                        <div class=\"col-lg-9\">\n                           <div class=\"cstm-mg\">\n                              <angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n                           </div>\n                        </div>\n                     </div>\n                  </li>\n                  <li class=\"text-right brder-cstm\">\n                     <div class=\"col-lg-12 text-center\">\n                        <button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n                     </div>\n                  </li>\n                  <li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n                  <li class=\"{{getClass(1)}} active one\" id=\"one\" (click)=\"activatetab(1)\" > <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n                  <li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n                  <li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n                  <li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n                  <li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n                  <li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n                  <li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n               </ul>\n            </div>\n         </div>\n         <div class=\"cus-content-wrapper\">\n            <div class=\"cus-content\">\n               <div class=\"row brdr-lft\">\n                <br>\n                <div class=\"col-lg-12\">\n                  <div class=\"row\">\n                     <div class=\"col-lg-1\">\n                        <h6><b>Search by</b></h6>\n                     </div>\n                     <div class=\"col-lg-10\">\n                        <div class=\"form-group\">\n                           <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchInput\" id=\"usr\" placeholder=\"Name, Phone number, Prescription id\" (keyup)=\"onKey($event)\">\n                        </div>\n                     </div>\n                     <div class=\"col-lg-1\">\n                        <button class=\"btn btn-go\" (click)=\"searchByName()\">Search</button>\n                     </div>\n                  </div>\n               </div>\n               <div class=\"stock-tab\">\n                  <div class=\"col-lg-12\">\n                     <div class=\"tbl-cntrol\" style=\"min-height:0.1px; max-height:450px; overflow-x:hidden;overflow-y:scroll;\">\n                        <table class=\"table table-bordered \" matSort (matSortChange)=\"sortData($event)\">\n                           <thead class=\"new-thd\">\n                              <tr>\n                                 <th width=\"10%\">\n                                    <h4 style=\"width: 100%; text-align: center;\">S.NO</h4>\n                                 </th>\n                                 <th mat-sort-header=\"date\" width=\"10%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\">\n                                    <h4 style=\"width: 100%; text-align: center;\">DATE</h4>\n                                 </th>\n                                 <th mat-sort-header=\"name\" width=\"10%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\">\n                                    <h4 style=\"width: 100%; text-align: center;\">PATIENT NAME</h4>\n                                 </th>\n                                 <th mat-sort-header=\"phone\" width=\"10%\" class=\"{{getTableHeaderClass(4)}} text-center\" (click)=\"setTableHeaderClass(4)\">\n                                    <h4 style=\"width: 100%; text-align: center;\">NUMBER</h4>\n                                 </th>\n                                 <th mat-sort-header=\"address\" width=\"10%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\">\n                                    <h4 style=\"width: 100%; text-align: center;\">ADDRESS</h4>\n                                 </th>\n                                 <th mat-sort-header=\"count\" width=\"10%\" class=\"{{getTableHeaderClass(5)}} text-center\" (click)=\"setTableHeaderClass(5)\">\n                                    <h4 style=\"width: 100%; text-align: center;\">VISIT COUNT</h4>\n                                 </th>\n                                 <th width=\"10%\">\n                                    <h4 style=\"width: 100%; text-align: center;\">ACTION</h4>\n                                 </th>\n                              </tr>\n                           </thead>\n                           <tbody class=\"new-tbdy\">\n                              <tr *ngFor=\"let list of sortedData; let i = index\">\n                                 <td class=\"text-center\">{{i+1}}</td>\n                                 <td class=\"text-center\">{{list?.createdAt | date: 'dd/MM/yyyy'}}</td>\n                                 <td class=\"text-center\">{{list?.registration?.pateintName | uppercase}} </td>\n                                 <td class=\"text-center\">{{list?.registration?.pateintPhone}}</td>\n                                 <td class=\"text-center\" *ngIf=\"list.registration.location\">{{list?.registration?.location}}</td>\n                                 <td class=\"text-center\" *ngIf=\"!list.registration.location\">Other</td>\n                                 <td class=\"text-center\" *ngIf=\"list?.registration?.lastVisit?.status == true\">{{list.registration.lastVisit.count + 1}}</td>\n                                 <td class=\"text-center\" *ngIf=\"list?.registration?.lastVisit?.status == false\">{{1}}</td>\n                                 <td class=\"text-center\">\n                                    <button *ngIf=\"!list.image\"  class=\"text-center btn btn-success cursr\" (click)=\"openPrescriptionPreview(list)\">View</button>\n                                    <!-- <button *ngIf=\"list.image\"  class=\"text-center btn btn-success kk\">View</button> -->\n                                    <button *ngIf=\"list.image\"  class=\"text-center btn btn-success cursr\" (click)=\"dispensedPatientSelectedOpen(list)\">View</button>\n                                    <button class=\"text-center btn btn-danger cursr\"\n                                    mwlConfirmationPopover\n                                    [popoverTitle]=\"popoverTitle\"\n                                    [popoverMessage]=\"popoverMessage\"\n                                    placement= \"left\"\n                                    (confirm)=\"deleteRecord(list._id)\"\n                                    (cancel)=\"cancelClicked = true\"\n\n                                    > Delete</button>\n                                 </td>\n                              </tr>\n                           </tbody>\n                        </table>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n</div>\n<footer style=\"position: fixed;bottom:0px;width:100%;padding-bottom: 10px;\">\n <div class=\"row\">\n  <div class=\"col-lg-6 text-right\">\n   <button class=\"btn btn-custom\" (click) = \"exportPdf()\">EXPORT</button>\n</div>\n<div class=\"col-lg-6 text-center\">\n   <button class=\"btn btn-custom\" >Prescription Count : {{prescriptionCount}}</button>\n</div>\n\n</div>\n<!-- <br> -->\n</footer>\n<div class=\"modal fade cus-preview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n   <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n         <div class=\"modal-header\">\n            <div>\n               <h4 class=\"modal-title\"> Preview </h4>\n            </div>\n            <div class=\"text-center\">\n               <button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n            </div>\n            <div>\n               <button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n            </div>\n         </div>\n         <div class=\"modal-body\" id=\"previewModalPdf\">\n            <div class=\"row\">\n               <div class=\"presc-modal-body\">\n                  <div class=\"pad-view\">\n                     <div class=\"padview-header\">\n                        <div class=\"pad-view-flx col-lg-4\" style=\"float:left;width:49%;\">\n                           <div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n                              <h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData.first_name}} </h1>\n                           </div>\n                           <div class=\"form-group qual\">\n                              <p class=\"color-purple\">\n                                 <span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData.specialization}})</span>\n                                 <br>\n                                 <span *ngIf=\"checkOptionOfPad('Qualifications')\">\n                                    <span *ngFor=\"let data of doctorData.qualification;let i = index\">\n                                       {{data.value}} <span *ngIf=\"i!=doctorData.qualification?.length-1\">,</span>\n                                    </span>\n                                 </span>\n                              </p>\n                              <p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration: <span class=\"color-purple\"> {{doctorData.registration_no}} </span> </p>\n                              <p *ngIf=\"checkOptionOfPad('Professional_affiliation')\" style=\"width:200px;word-break: break-all;\">\n                                 <span class=\"color-purple\" *ngFor=\"let pa of doctorData.professional_affiliation;let i=index\">\n                                    {{pa.value}}<span *ngIf=\"i!=doctorData.professional_affiliation?.length-1\">,</span>\n                                 </span>\n                              </p>\n                           </div>\n                        </div>\n                        <div class=\"pad-view-flx col-lg-6\" style=\"float:left;width:49%;\">\n                           <ul class=\"clinic-detail\">\n                              <li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n                                 <h1 id=\"translated_clinicName\"> {{doctorsDetails.clinic_details.clinic_name}} </h1>\n                              </li>\n                              <li *ngIf=\"doctorsDetails.clinic_details.address\">{{doctorsDetails.clinic_details.address}}, {{doctorsDetails.clinic_details.area}}, {{doctorsDetails.clinic_details.city}}, {{doctorsDetails.clinic_details.state}}</li>\n                              <li class=\"li-cstm\">\n                                 <div class=\"row\" *ngIf=\"doctorsDetails.clinic_details.mobile || doctorsDetails.clinic_details.landline\">\n                                    <div class=\"col-lg-12\">\n                                       <h4 class=\"for-apt\"> For appointments </h4>\n                                       <p *ngIf=\"doctorsDetails.clinic_details.landline\"> Tel: {{doctorsDetails.clinic_details.std_code}}-{{doctorsDetails.clinic_details.landline}}</p>\n                                       <p> Mb: +91-{{doctorsDetails.clinic_details.mobile}} </p>\n                                    </div>\n                                 </div>\n                              </li>\n                           </ul>\n                        </div>\n                     </div>\n                     <p class=\"text-center\">\n                        <label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n                     </p>\n                     <div class=\"padview-body\">\n                        <div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n                           <div class=\"emergency-wrap\">\n                              <div class=\"form-group emrgency-consult\" *ngIf=\"dispensedPatient.type=='Emergency'\">\n                                 <p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n                              </div>\n                              <div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n                                 <h5 class=\" color-blue\"> Schedule: </h5>\n                                 <div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\">\n                                    <span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n                                       <span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n                                          [\n                                          <span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n                                          <span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n                                          <span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n                                          <span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n                                          <span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n                                          <span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n                                          <span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n                                          <span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span> ]\n                                       </span>\n                                       <br>\n                                    </span>\n                                 </div>\n                                 <div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\">\n                                    <span><strong> {{shift.day}}: </strong> Closed \n                                    </span>\n                                 </div>\n                              </div>\n                              <div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n                                 <h5 class=\"color-blue\"> Available Treatments: </h5>\n                                 <ul style=\"padding-left:15px!important;\">\n                                    <li *ngFor=\"let treat of doctorData.expertise\">{{treat.value}}</li>\n                                 </ul>\n                              </div>\n                              <div *ngIf=\"doctorData.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n                                 <h5 class=\"color-blue\"> Available Services: </h5>\n                                 <ul style=\"padding-left:15px!important;\">\n                                    <li *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy\">Pharmacy</li>\n                                    <li *ngIf=\"doctorData.clinic_services.Clinic_IPD\">IPD</li>\n                                    <li *ngFor=\"let cs of doctorData.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n                                    <li *ngFor=\"let cs of doctorData.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n                                 </ul>\n                              </div>\n                           </div>\n                        </div>\n                        <div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n                           <div class=\"padview-bodyright\">\n                              <ul class=\"padview-body-header\">\n                                 <li>\n                                    <div class=\"text-underline\"> Prescription ID </div>\n                                    <div class=\"strong\">{{prescription_id}}</div>\n                                 </li>\n                                 <li>\n                                    <div class=\"text-underline\"> Name </div>\n                                    <div class=\"strong\"> {{dispensedPatient?.pateintName | uppercase}} </div>\n                                 </li>\n                                 <li>\n                                    <div class=\"text-underline\"> Age/Sex </div>\n                                    <div class=\"strong\"> {{dispensedPatient?.age}} / {{dispensedPatient?.gender}} </div>\n                                 </li>\n                                 <li>\n                                    <div class=\"text-underline\"> Weight </div>\n                                    <div class=\"strong\" *ngIf=\"dispensedPatient?.weight\"> {{dispensedPatient.weight}} Kg </div>\n                                 </li>\n                                 <li>\n                                    <div class=\"text-underline\"> Height </div>\n                                    <div class=\"strong\" *ngIf=\"dispensedPatient?.height\"> {{dispensedPatient?.height}} cm </div>\n                                 </li>\n                                 <li>\n                                    <div class=\"strong\"> {{DischargeDate | date: 'dd/MMM/yyyy'}}</div>\n                                 </li>\n                              </ul>\n                              <ul class=\"padview-patient\">\n                                 <li class=\"img-patient\">\n                                    <img src=\"{{pateintPicPath}}{{dispensedPatient?.pateintPic}}\" class=\"img-responsive\" *ngIf=\"dispensedPatient?.pateintPic\" />\n                                    <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!dispensedPatient.pateintPic\" />\n                                 </li>\n                                 <li *ngIf=\"preConditionComplete==true && finalPreConditions?.length>0\">\n                                    <div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n                                    <ul class=\"pat-type\">\n                                       <li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n                                    </ul>\n                                 </li>\n                                 <li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected?.length>0\">\n                                    <div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n                                    <ul class=\"pat-type\">\n                                       <li *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n                                       </li>\n                                    </ul>\n                                 </li>\n                                 <li *ngIf=\"finalAllergy?.length>0\">\n                                    <div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n                                    <ul class=\" pat-type\" style=\"padding-left:15px\">\n                                       <li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n                                    </ul>\n                                 </li>\n                              </ul>\n                              <div class=\"middle-body\">\n                                 <div class=\"\">\n                                    <div class=\"number-div\" *ngIf=\"findingsSelected?.length>0\">\n                                       <div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n                                       <ul class=\"numberol\">\n                                          <li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n                                       </ul>\n                                    </div>\n                                    <div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected?.length>0\">\n                                       <div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n                                       <ul class=\"numberol\">\n                                          <li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n                                       </ul>\n                                    </div>\n                                    <div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected?.length>0\">\n                                       <div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n                                       <ul class=\"numberol\">\n                                          <li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n                                       </ul>\n                                    </div>\n                                 </div>\n                                 <div class=\"\" *ngIf=\"medicationComplete==true\">\n                                    <div class=\"padview-medic\" id=\"translated_medication\">\n                                       <div class=\"pat-heading\"><span> Medicines</span> </div>\n                                       <ol style=\"padding-left:10px\">\n                                          <li *ngFor=\"let data of tempMedicationArray\">\n                                             <span *ngIf=\"data?.name=='Tablet' || data?.name=='Capsule' || data?.name=='Cream' || data?.name=='Ointment' || data?.name=='Aerosols' || data?.name=='Powder' || data?.name=='MouthWash'\">\n                                                {{data?.short_name}}<b class=\"notranslate\"> {{data?.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data?.duration}} days <span *ngIf=\"data?.specialInstruction!=null\"> ({{data?.specialInstruction}})</span>\n                                                <span *ngIf=\"data?.med_info\">\n                                                   <p class=\"help-note\" *ngIf=\"data?.med_info?.length>0\">({{data?.med_info[0]?.value}}<span *ngIf=\"data?.med_info?.length>1\"> / {{data?.med_info[1]?.value}}</span>)</p>\n                                                </span>\n                                             </span>\n                                             <span *ngIf=\"data?.name=='Syrup' || data?.name=='Suspension' || data?.name=='Emulsion' || data?.name=='Solution'\">\n                                                {{data?.short_name}}<b class=\"notranslate\"> {{data?.med_name[0].value}} </b>- {{data?.dosage}}ml <span class=\"notranslate\"> X </span> {{data?.frequency}} <span class=\"notranslate\"> X </span> {{data?.duration}} days <span *ngIf=\"data?.specialInstruction!=null\"> ({{data?.specialInstruction}})</span>\n                                                <span *ngIf=\"data.med_info\">\n                                                   <p class=\"help-note\" *ngIf=\"data?.med_info?.length>0\">({{data?.med_info[0]?.value}}<span *ngIf=\"data?.med_info?.length>1\"> / {{data?.med_info[1]?.value}}</span>)</p>\n                                                </span>\n                                             </span>\n                                             <span *ngIf=\"data?.name=='Injection' || data?.name=='Gel' || data?.name=='Lotion'\">\n                                                {{data?.short_name}}<b class=\"notranslate\"> {{data?.med_name[0]?.value}} </b><span *ngIf=\"data?.mode\"> ({{data?.mode}}) </span> -{{data?.frequency}} <span class=\"notranslate\"> X </span> {{data?.duration}} days <span *ngIf=\"data?.specialInstruction!=null\"> ({{data?.specialInstruction}})</span><span *ngIf=\"data?.mode\"> ({{data?.mode}}) </span>\n                                                <span *ngIf=\"data?.med_info\">\n                                                   <p class=\"help-note\" *ngIf=\"data?.med_info?.length>0\">({{data?.med_info[0]?.value}}<span *ngIf=\"data?.med_info?.length>1\"> / {{data?.med_info[1]?.value}}</span>)</p>\n                                                </span>\n                                             </span>\n                                             <span *ngIf=\"data.name=='Drops'\">\n                                                {{data?.short_name}}<b class=\"notranslate\"> {{data?.med_name[0]?.value}} </b>-{{data?.quantity}} drops <span class=\"notranslate\"> X </span> {{data?.frequency}} <span class=\"notranslate\"> X </span> {{data?.duration}} days <span *ngIf=\"data?.specialInstruction!=null\"> ({{data?.specialInstruction}})</span>\n                                                <span *ngIf=\"data?.med_info\">\n                                                   <p class=\"help-note\" *ngIf=\"data?.med_info?.length>0\">({{data?.med_info[0]?.value}}<span *ngIf=\"data?.med_info?.length>1\"> / {{data?.med_info[1]?.value}}</span>)</p>\n                                                </span>\n                                             </span>\n                                          </li>\n                                       </ol>\n                                    </div>\n                                    <div class=\"number-div vac-div\">\n                                       <div *ngIf=\"finalCurrentVaccinationArray?.length>0 || finalDueVaccinationArray?.length>0\">\n                                          <div class=\"pat-heading\" id=\"translated_VaccinationHeading\"> <span> Vaccination</span> </div>\n                                          <ul *ngIf=\"finalCurrentVaccinationArray?.length>0\" class=\"medicationol\">\n                                             <div><b>Current</b></div>\n                                             <li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n                                          </ul>\n                                          <ul *ngIf=\"finalDueVaccinationArray?.length>0\" class=\"medicationol\">\n                                             <strong>Due </strong>\n                                             <!-- <span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}}) -->\n                                                <!-- </span> -->\n                                                <li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                                             </ul>\n                                          </div>\n                                          <div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected.length>0\" id=\"translated_instHeading\">\n                                             <div class=\"pat-heading\"> <span> Instructions</span> </div>\n                                             <ul class=\"numberol\" start=\"1\">\n                                                <li *ngFor=\"let data of instructionsSelected\">{{data}}</li>\n                                             </ul>\n                                          </div>\n                                       </div>\n                                    </div>\n                                 </div>\n                                 <div class=\"third-body\">\n                                    <div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray?.length\">\n                                       <div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n                                       <ol class=\"numberol pl10\">\n                                          <li *ngFor=\"let data of investigationArray\">\n                                             <span *ngIf=\"data?.name != 'Mammography' && data?.name!= 'Uroflowmetry' && data?.name != 'ECG' && data?.name != 'EEG' && data?.name != 'TMT' && data?.name != 'Echo'\">\n                                                <span *ngIf=\"data?.name!='Others'\">{{data?.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value?.value}} \n                                                   <span *ngIf=\"i!=data?.values?.length-1\">\\</span>\n                                                </span>\n                                             </span>\n                                             <span *ngIf=\"data?.name == 'Mammography' || data?.name== 'Uroflowmetry' || data?.name == 'ECG' || data?.name == 'EEG' || data?.name == 'TMT' || data?.name == 'Echo'\">\n                                                <span *ngIf=\"data?.name!='Others'\">{{data?.name}} - </span> {{data?.values}}\n                                             </span>\n                                          </li>\n                                       </ol>\n                                    </div>\n                                    <div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n                                       <div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n                                       <ul class=\"numberol\">\n                                          <li *ngFor=\"let data of treatmentArray;let i =index\">\n                                             <span *ngIf=\"data?.name=='Lifestyle Changes'\">\n                                                {{data?.name}} - <span *ngFor=\"let value of data?.lifestyle;let j = index\">{{value?.value}} <span *ngIf=\"j!=data?.lifestyle?.length-1\">\\</span></span>\n                                             </span>\n                                             <span *ngIf=\"data?.name=='Physiotherapy' || data?.name=='Fomentation'\">\n                                                {{data?.name}} - {{data?.Frequency}} for {{data?.Duration}} days <span *ngIf=\"data?.SpecialInstruction!=null\"> ({{data?.SpecialInstruction}})</span>\n                                             </span>\n                                             <span *ngIf=\"data?.name=='Plaster'\">\n                                                <span class=\"notranslate\">{{data?.name}}</span> - on <span class=\"notranslate\">{{data?.Injury_Area}}</span> of {{data?.plaster_type}} for {{data?.Duration}} days\n                                             </span>\n                                             <span *ngIf=\"data?.name=='Gargle' || data?.name=='Dressing' || data?.name=='Bandage' || data?.name=='Other'\">\n                                                <span *ngIf=\"data?.name!='Other'\">{{data?.name}} - </span>{{data?.med_name[0]?.value}} {{data?.Frequency}} for {{data?.Duration}} days <span *ngIf=\"data?.SpecialInstruction!=null\"> ({{data?.SpecialInstruction}})</span>\n                                             </span>\n                                             <span>\n                                                {{data?.value}}\n                                             </span>\n                                          </li>\n                                       </ul>\n                                    </div>\n                                 </div>\n                                 <div class=\"note-box\">\n                                    <div class=\"note-innerbox\">\n                                       <div class=\"note-innerdiv\">\n                                          <div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray?.length>0\">\n                                             <div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n                                             <ul class=\"numberol\">\n                                                <li *ngFor=\"let data of surgerySelectedArray\">{{data?.sub_speciality | titlecase}} - {{data?.procedure_name[0]?.value}}</li>\n                                             </ul>\n                                          </div>\n                                          <div class=\"number-div\" *ngIf=\"referDoctorName?.first_name\"  style=\"padding:0 30px;\">\n                                             <div class=\"pat-heading\"> <span> Referred To</span> </div>\n                                             <p> {{referDoctorName?.first_name}} </p>\n                                          </div>\n                                       </div>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"eyePresComplete==true\">\n                                       <div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n                                       <div class=\"table-responsive\">\n                                          <table class=\"table table-bordered table-striped cstm-table\">\n                                             <thead>\n                                                <tr>\n                                                   <th> Eye </th>\n                                                   <th> Sphere </th>\n                                                   <th> Cylinder </th>\n                                                   <th> Axis </th>\n                                                   <th> Add </th>\n                                                   <th> PD (mm) </th>\n                                                </tr>\n                                             </thead>\n                                             <tbody>\n                                                <tr>\n                                                   <td> Right (OD): </td>\n                                                   <td> {{finalRightOD.sphere}} </td>\n                                                   <td> {{finalRightOD.cylinder}} </td>\n                                                   <td> {{finalRightOD.axis}} </td>\n                                                   <td> {{finalRightOD.add}} </td>\n                                                   <td> {{finalRightOD.pd}} </td>\n                                                </tr>\n                                                <tr>\n                                                   <td> Left (OS): </td>\n                                                   <td> {{finalLeftOD.sphere}} </td>\n                                                   <td> {{finalLeftOD.cylinder}} </td>\n                                                   <td> {{finalLeftOD.axis}} </td>\n                                                   <td> {{finalLeftOD.add}} </td>\n                                                   <td> {{finalLeftOD.pd}} </td>\n                                                </tr>\n                                             </tbody>\n                                          </table>\n                                       </div>\n                                    </div>\n                                 </div>\n                                 <div class=\"third-body\">\n                                    <div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                                       <div class=\"pat-heading\"> <span> Follow-Up</span></div>\n                                       <p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                                       <p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                                    </div>\n                                 </div>\n                                 <div class=\"forth-body\">\n                                    <div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                                       <div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n                                    </div>\n                                    <div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                        <div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n                           <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                              <div class=\"padview-powered\">\n                                 <div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                                 <div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com</div>\n                              </div>\n                           </div>\n                           <div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n                              <div class=\"legal\">\n                                 <h3>{{getFooterText()}}</h3>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n   <div class=\"modal fade cus-preview\" id=\"previewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n      <div class=\"modal-dialog\" role=\"document\">\n         <div class=\"modal-content show-default\">\n            <div class=\"modal-header\">\n               <div>\n                  <h4 class=\"modal-title\"> Preview </h4>\n               </div>\n               <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n               </div>\n               <div>\n                  <button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n               </div>\n            </div>\n            <div class=\"modal-body\">\n               <div class=\"row\">\n                  <div class=\"presc-modal-body\">\n                     <div class=\"pad-view\">\n                        <div class=\"padview-header\">\n                           <div class=\"pad-view-flx col-lg-4\">\n                              <div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n                                 <h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData.first_name}} </h1>\n                              </div>\n                              <div class=\"form-group qual\">\n                                 <p class=\"color-purple\">\n                                    <span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData.specialization}})</span>\n                                    <br>\n                                    <span *ngIf=\"checkOptionOfPad('Qualifications')\">\n                                       <span *ngFor=\"let data of doctorData.qualification;let i = index\">\n                                          {{data.value}} <span *ngIf=\"i!=doctorData.qualification.length-1\">,</span>\n                                       </span>\n                                    </span>\n                                 </p>\n                                 <p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration: <span class=\"color-purple\"> {{doctorData.registration_no}} </span> </p>\n                                 <p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n                                    <span class=\"color-purple\" *ngFor=\"let pa of doctorData.professional_affiliation;let i=index\">\n                                       {{pa.value}}<span *ngIf=\"i!=doctorData.professional_affiliation.length-1\">,</span>\n                                    </span>\n                                 </p>\n                              </div>\n                           </div>\n                           <div class=\"pad-view-flx col-lg-8\">\n                              <ul class=\"clinic-detail\">\n                                 <li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n                                    <h1 id=\"translated_clinicName\"> {{doctorsDetails.clinic_details.clinic_name}} </h1>\n                                 </li>\n                                 <li *ngIf=\"doctorsDetails.clinic_details.address\">{{doctorsDetails.clinic_details.address}}, {{doctorsDetails.clinic_details.area}}, {{doctorsDetails.clinic_details.city}}, {{doctorsDetails.clinic_details.state}}</li>\n                                 <li class=\"li-cstm\">\n                                    <div class=\"row\" *ngIf=\"doctorsDetails.clinic_details.landline || doctorsDetails.clinic_details.mobile\">\n                                       <div class=\"col-lg-12\">\n                                          <h4 class=\"for-apt\"> For appointments </h4>\n                                          <p *ngIf=\"doctorsDetails.clinic_details.landline\"> Tel: {{doctorsDetails.clinic_details.std_code}}-{{doctorsDetails.clinic_details.landline}}</p>\n                                          <p> Mb: +91-{{doctorsDetails.clinic_details.mobile}} </p>\n                                       </div>\n                                    </div>\n                                 </li>\n                              </ul>\n                           </div>\n                        </div>\n                        <p class=\"text-center\">\n                           <label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n                        </p>\n                        <div class=\"padview-body\">\n                           <div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n                              <div class=\"emergency-wrap\">\n                                 <div class=\"form-group emrgency-consult\" *ngIf=\"dispensedPatient.type=='Emergency'\">\n                                    <p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n                                 </div>\n                                 <div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n                                    <h5 class=\"color-blue\"> Schedule: </h5>\n                                    <div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\">\n                                       <span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n                                          <span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n                                             [\n                                             <span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n                                             <span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n                                             <span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n                                             <span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n                                             <span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n                                             <span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n                                             <span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n                                             <span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span> ]\n                                          </span>\n                                          <br>\n                                       </span>\n                                    </div>\n                                    <div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\">\n                                       <span><strong> {{shift.day}}: </strong> Closed \n                                       </span>\n                                    </div>\n                                 </div>\n                                 <div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n                                    <h5 class=\"color-blue\"> Available Treatments: </h5>\n                                    <ul style=\"padding-left:15px!important;\">\n                                       <li *ngFor=\"let treat of doctorData.expertise\">{{treat.value}}</li>\n                                    </ul>\n                                 </div>\n                                 <div *ngIf=\"doctorData.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n                                    <h5 class=\"color-blue\"> Available Services: </h5>\n                                    <ul style=\"padding-left:15px!important;\">\n                                       <li *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy\">Pharmacy</li>\n                                       <li *ngIf=\"doctorData.clinic_services.Clinic_IPD\">IPD</li>\n                                       <li *ngFor=\"let cs of doctorData.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n                                       <li *ngFor=\"let cs of doctorData.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n                                    </ul>\n                                 </div>\n                              </div>\n                           </div>\n                           <div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n                              <div class=\"padview-bodyright\">\n                                 <ul class=\"padview-body-header\">\n                                    <li>\n                                       <div class=\"text-underline\"> Prescription ID </div>\n                                       <div class=\"strong\">{{prescription_id}}</div>\n                                    </li>\n                                    <li>\n                                       <div class=\"text-underline\"> Name </div>\n                                       <div class=\"strong\"> {{dispensedPatient?.pateintName | uppercase}} </div>\n                                    </li>\n                                    <li>\n                                       <div class=\"text-underline\"> Age/Sex </div>\n                                       <div class=\"strong\"> {{dispensedPatient?.age}} / {{dispensedPatient?.gender}} </div>\n                                    </li>\n                                    <li>\n                                       <div class=\"text-underline\"> Weight </div>\n                                       <div class=\"strong\" *ngIf=\"dispensedPatient.weight\"> {{dispensedPatient.weight}} Kg </div>\n                                    </li>\n                                    <li>\n                                       <div class=\"text-underline\"> Height </div>\n                                       <div class=\"strong\" *ngIf=\"dispensedPatient.height\"> {{dispensedPatient.height}} cm </div>\n                                    </li>\n                                    <li>\n                                       <div class=\"strong\"> {{DischargeDate | date: 'dd/MMM/yyyy'}}</div>\n                                    </li>\n                                 </ul>\n                                 <ul class=\"padview-patient\">\n                                    <li class=\"img-patient\">\n                                       <img src=\"{{pateintPicPath}}{{dispensedPatient.pateintPic}}\" class=\"img-responsive\" *ngIf=\"dispensedPatient.pateintPic\" />\n                                       <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!dispensedPatient.pateintPic\" />\n                                    </li>\n                                    <li *ngIf=\"preConditionComplete==true && finalPreConditions?.length>0\">\n                                       <div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n                                       <ul class=\"pat-type\">\n                                          <li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n                                       </ul>\n                                    </li>\n                                    <li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected?.length>0\">\n                                       <div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n                                       <ul class=\"pat-type\">\n                                          <li *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n                                          </li>\n                                       </ul>\n                                    </li>\n                                    <li *ngIf=\"finalAllergy?.length>0\">\n                                       <div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n                                       <ul class=\" pat-type\">\n                                          <li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n                                       </ul>\n                                    </li>\n                                 </ul>\n                                 <div class=\"middle-body\">\n                                    <div class=\"\">\n                                       <div class=\"number-div\" *ngIf=\"findingsSelected?.length>0\">\n                                          <div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n                                          <ul class=\"numberol\">\n                                             <li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n                                          </ul>\n                                       </div>\n                                       <div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected?.length>0\">\n                                          <div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n                                          <ul class=\"numberol\">\n                                             <li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n                                          </ul>\n                                       </div>\n                                       <div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected?.length>0\">\n                                          <div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n                                          <ul class=\"numberol\">\n                                             <li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n                                          </ul>\n                                       </div>\n                                    </div>\n                                    <div class=\"\" *ngIf=\"medicationComplete==true\">\n                                       <div class=\"padview-medic\" id=\"translated_medication\">\n                                          <div class=\"pat-heading\"><span> Medicines</span> </div>\n                                          <ol style=\"padding-left:10px\">\n                                             <li *ngFor=\"let data of tempMedicationArray\">\n                                                <span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n                                                   {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                   <span *ngIf=\"data.med_info\">\n                                                      <p class=\"help-note\" *ngIf=\"data.med_info?.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info?.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                   </span>\n                                                </span>\n                                                <span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n                                                   {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                   <span *ngIf=\"data.med_info\">\n                                                      <p class=\"help-note\" *ngIf=\"data.med_info?.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info?.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                   </span>\n                                                </span>\n                                                <span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n                                                   {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n                                                   <span *ngIf=\"data.med_info\">\n                                                      <p class=\"help-note\" *ngIf=\"data.med_info?.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info?.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                   </span>\n                                                </span>\n                                                <span *ngIf=\"data.name=='Drops'\">\n                                                   {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                   <span *ngIf=\"data.med_info\">\n                                                      <p class=\"help-note\" *ngIf=\"data.med_info?.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info?.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                   </span>\n                                                </span>\n                                             </li>\n                                          </ol>\n                                       </div>\n                                       <div class=\"number-div vac-div\">\n                                          <div *ngIf=\"finalCurrentVaccinationArray?.length>0 || finalDueVaccinationArray?.length>0\">\n                                             <div class=\"pat-heading\" id=\"translated_VaccinationHeading\"> <span> Vaccination</span> </div>\n                                             <ul *ngIf=\"finalCurrentVaccinationArray?.length>0\" class=\"medicationol\">\n                                                <div><b>Current</b></div>\n                                                <li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n                                             </ul>\n                                             <ul *ngIf=\"finalDueVaccinationArray?.length>0\" class=\"medicationol\">\n                                                <strong>Due </strong>\n                                                <!-- <span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}}) -->\n                                                   <!-- </span> -->\n                                                   <li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                                                </ul>\n                                             </div>\n                                             <div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected?.length>0\" id=\"translated_instHeading\">\n                                                <div class=\"pat-heading\"> <span> Instructions</span> </div>\n                                                <ul class=\"numberol\" start=\"1\">\n                                                   <li *ngFor=\"let data of instructionsSelected\">{{data}}</li>\n                                                </ul>\n                                             </div>\n                                          </div>\n                                       </div>\n                                    </div>\n                                    <div class=\"third-body\">\n                                       <div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray?.length\">\n                                          <div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n                                          <ol class=\"numberol pl10\">\n                                             <li *ngFor=\"let data of investigationArray\">\n                                                <span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                                                   <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                                                      <span *ngIf=\"i!=data.values?.length-1\">\\</span>\n                                                   </span>\n                                                </span>\n                                                <span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                                                   <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                                                </span>\n                                             </li>\n                                          </ol>\n                                       </div>\n                                       <div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n                                          <div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n                                          <ul class=\"numberol\">\n                                             <li *ngFor=\"let data of treatmentArray;let i =index\">\n                                                <span *ngIf=\"data.name=='Lifestyle Changes'\">\n                                                   {{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle?.length-1\">\\</span></span>\n                                                </span>\n                                                <span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n                                                   {{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                                </span>\n                                                <span *ngIf=\"data.name=='Plaster'\">\n                                                   <span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days\n                                                </span>\n                                                <span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n                                                   <span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                                </span>\n                                                <span>\n                                                   {{data.value}}\n                                                </span>\n                                             </li>\n                                          </ul>\n                                       </div>\n                                    </div>\n                                    <div class=\"note-box\">\n                                       <div class=\"note-innerbox\">\n                                          <div class=\"note-innerdiv\">\n                                             <div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray?.length>0\">\n                                                <div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n                                                <ul class=\"numberol\">\n                                                   <li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                                                </ul>\n                                             </div>\n                                             <div class=\"number-div\" *ngIf=\"referDoctorName?.first_name\" style=\"padding:0 30px;\">\n                                                <div class=\"pat-heading\"> <span> Referred To</span> </div>\n                                                <p> {{referDoctorName?.first_name}} </p>\n                                             </div>\n                                          </div>\n                                       </div>\n                                       <div class=\"\" *ngIf=\"eyePresComplete==true\">\n                                          <div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n                                          <div class=\"table-responsive\">\n                                             <table class=\"table table-bordered table-striped cstm-table\">\n                                                <thead>\n                                                   <tr>\n                                                      <th> Eye </th>\n                                                      <th> Sphere </th>\n                                                      <th> Cylinder </th>\n                                                      <th> Axis </th>\n                                                      <th> Add </th>\n                                                      <th> PD (mm) </th>\n                                                   </tr>\n                                                </thead>\n                                                <tbody>\n                                                   <tr>\n                                                      <td> Right (OD): </td>\n                                                      <td> {{finalRightOD.sphere}} </td>\n                                                      <td> {{finalRightOD.cylinder}} </td>\n                                                      <td> {{finalRightOD.axis}} </td>\n                                                      <td> {{finalRightOD.add}} </td>\n                                                      <td> {{finalRightOD.pd}} </td>\n                                                   </tr>\n                                                   <tr>\n                                                      <td> Left (OS): </td>\n                                                      <td> {{finalLeftOD.sphere}} </td>\n                                                      <td> {{finalLeftOD.cylinder}} </td>\n                                                      <td> {{finalLeftOD.axis}} </td>\n                                                      <td> {{finalLeftOD.add}} </td>\n                                                      <td> {{finalLeftOD.pd}} </td>\n                                                   </tr>\n                                                </tbody>\n                                             </table>\n                                          </div>\n                                       </div>\n                                    </div>\n                                    <div class=\"third-body\">\n                                       <div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                                          <div class=\"pat-heading\"> <span> Follow Up</span></div>\n                                          <p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                                          <p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                                       </div>\n                                    </div>\n                                    <div class=\"forth-body\">\n                                       <div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                                          <div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n                                       </div>\n                                       <div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                                    </div>\n                                 </div>\n                              </div>\n                           </div>\n                           <div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n                              <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                 <div class=\"padview-powered\">\n                                    <div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                                    <div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com </div>\n                                 </div>\n                              </div>\n                              <div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n                                 <div class=\"legal\">\n                                    <h3>{{getFooterText()}}</h3>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n\n\n      <div class=\"modal fade cus-preview\" id=\"uploadedPrescriptionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" *ngIf=\"dispensedPatientSelected\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content modal-lg\">\n            <div class=\"modal-header\">\n               <div>\n\n                 <div class=\"col-lg-4\">\n                    <h3 class=\"modal-title\">Prescription</h3>\n\n                 </div>\n                 <div class=\"col-lg-4 text-center\">\n                  <button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"printImage()\"> Print </button>\n               </div>\n               <div class=\"col-lg-4\">\n                  <button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n               </div>\n\n               <div class=\"modal-body\" id=\"previewModalImage\">\n                 <div class=\"\">\n                  <div class=\"col-lg-12 text-center\">\n                     <div class=\"\">\n\n                        <img style=\"object-fit: contain;\" src=\"{{uploadedPrescriptionPath}}{{dispensedPatientSelected.image}}\">\n                     </div>\n                  </div>\n               </div>\n            </div>\n\n         </div>\n      </div>\n   </div>\n</div>\n</div>\n\n<div class=\"custom-modal\">\n   <div class=\"custom-modal-inner\">\n      <div class=\"col-lg-4\">\n      <h3 class=\"modal-title\">Prescription</h3>\n   </div>\n   <div class=\"col-lg-4 text-center\">\n                  <button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"printImage()\"> Print </button>\n               </div>\n   <div class=\"col-lg-4\">\n      <button type=\"button\" style=\"margin-bottom:15px;\" class=\"pull-right btn-sm btn btn-custom btn-outline btn_updte dlt\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n      </div>\n      <!-- <i class=\"fa fa-times dlt\"></i> -->\n      <img class='zoom' id=\"previewModalImage\" src=\"{{uploadedPrescriptionPath}}{{dispensedPatientSelected?.image}}\" alt='Daisy!'/>\n   </div>\n\n</div>\n\n<!-- <button class=\"kk\">kk</button> -->"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/search-records/search-records.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchRecordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchRecordsComponent = /** @class */ (function () {
    function SearchRecordsComponent(UserService, toastr, datePipe) {
        this.UserService = UserService;
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
        this.followUpDays = 0;
        this.finalfollowUpDays = 0;
        this.followUpDate = new Date();
        this.prescriptionCount = 0;
    }
    SearchRecordsComponent.prototype.ngOnInit = function () {
        $(".custom-modal").hide();
        $(".kk").click(function () {
            $(".custom-modal").fadeIn();
        });
        $(".dlt").click(function () {
            $(".custom-modal").fadeOut();
        });
        wheelzoom(document.querySelector('img.zoom'));
        $("li").click(function () {
            $("li.one").removeClass('active');
        });
        $("li#one").click(function () {
            $(this).addClass('active');
        });
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.sortedData = [];
        this.activatetab(1);
        this.activatedtab = 0;
        this.doctorsDetails = JSON.parse(localStorage['doctorsOfSameClinic']);
        console.log(this.doctorsDetails);
        this.pateintPicPath = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].patientPic;
        var options = { month: 'short' };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate();
        this.year = new Date().getFullYear();
        this.numericMonth = new Date().getMonth() + 1;
        this.dataRegistration = [];
        this.dataAppointment = [];
        this.dataDispensedPatients = [];
        this.lastVisit = [];
        this.countLastVisit = [];
        this.dispensedPatient = {};
        this.setAllShiftsForPreview();
        this.searchRecords = [];
        this.uploadedPrescriptionPath = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].uploadedPrescriptionPath;
    };
    SearchRecordsComponent.prototype.deleteRecord = function (list) {
        var _this = this;
        console.log(list);
        this.UserService.DeleteOneDispensedPatients(list).subscribe(function (data) {
            if (data.response) {
                _this.ngOnInit();
                _this.toastr.success(data.message, 'Success');
            }
            else {
                _this.toastr.error(data.message, 'Error');
            }
        }, function (err) {
            console.log(err);
        });
    };
    SearchRecordsComponent.prototype.activatetab = function (i) {
        this.activatedtab = i;
        var object;
        object = {};
        var date = new Date();
        object.doctor_id = this.doctorData._id;
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
        this.getPatientData(object);
    };
    SearchRecordsComponent.prototype.getPatientData = function (data) {
        var _this = this;
        this.prescriptionCount = 0;
        this.loading = true;
        this.UserService.AllDispensePatientsForSearchRecords(data).subscribe(function (data) {
            console.log(data);
            _this.listOfPatient = data.dataDispensed;
            _this.sortedData = data.dataDispensed.slice();
            _this.prescriptionCount = _this.sortedData.length;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    SearchRecordsComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    SearchRecordsComponent.prototype.getData = function (data) {
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
    SearchRecordsComponent.prototype.go = function () {
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        var ob;
        ob = {};
        ob.doctor_id = this.doctorData._id;
        ob.start_date = this.fromDate1;
        ob.end_date = this.toDate1;
        this.getPatientData(ob);
    };
    SearchRecordsComponent.prototype.getDocName = function (id) {
        if (id == this.doctorData._id) {
            return this.doctorData.first_name;
        }
    };
    SearchRecordsComponent.prototype.openPrescriptionPreview = function (data) {
        this.prescription_id = data.prescription_id;
        this.dispensedPatient = data.registration;
        console.log(data);
        this.referDoctorName = data.registration.doctor_id;
        this.DischargeDate = data.createdAt;
        this.finalPreConditions = data.precription.finalPreConditions;
        this.bodyIndicatorSelected = data.precription.bodyIndicatorSelected;
        this.bodyIndicatorComplete = data.precription.bodyIndicatorComplete;
        this.finalAllergy = data.precription.finalAllergy;
        this.findingsSelected = data.precription.findingsSelected;
        this.symptomsSelected = data.precription.symptomsSelected;
        this.diagnosisSelected = data.precription.diagnosisSelected;
        this.tempMedicationArray = data.precription.tempMedicationArray;
        this.itemsfinding = data.precription.itemsfinding;
        this.itemsymptoms = data.precription.itemsymptoms;
        this.itemsdiagnosis = data.precription.itemsdiagnosis;
        this.treatmentStatus = data.precription.treatmentStatus;
        this.investigationStatus = data.precription.investigationStatus;
        this.suregeryOptionsTop = data.precription.suregeryOptionsTop;
        this.suregeryOptions = data.precription.suregeryOptions;
        this.inputBox = data.precription.inputBox;
        this.medication = data.precription.medication;
        this.medicationStatus = data.precription.medicationStatus;
        this.medicationTabArray = data.precription.medicationTabArray;
        this.medicationCapArray = data.precription.medicationCapArray;
        this.medicationSypArray = data.precription.medicationSypArray;
        this.medicationSuspArray = data.precription.medicationSuspArray;
        this.medicationEmulsnArray = data.precription.medicationEmulsnArray;
        this.medicationInjArray = data.precription.medicationInjArray;
        this.medicationCreamArray = data.precription.medicationCreamArray;
        this.medicationGelArray = data.precription.medicationGelArray;
        this.medicationDropsArray = data.precription.medicationDropsArray;
        this.medicationPowderArray = data.precription.medicationPowderArray;
        this.medicationAerosolsArray = data.precription.medicationAerosolsArray;
        this.medicationMouthWashArray = data.precription.medicationMouthWashArray;
        this.medicationSolutionArray = data.precription.medicationSolutionArray;
        this.medicationLotionArray = data.precription.medicationLotionArray;
        this.medicationOintmentArray = data.precription.medicationOintmentArray;
        this.symptomsComplete = data.precription.symptomsComplete;
        this.diagnosisComplete = data.precription.diagnosisComplete;
        this.treatmentComplete = data.precription.treatmentComplete;
        this.treatmentArray = data.precription.treatmentArray;
        this.investigationIndicatorComplete = data.precription.investigationIndicatorComplete;
        this.investigationArray = data.precription.investigationArray;
        this.surgeryComplete = data.precription.surgeryComplete;
        this.surgerySelectedArray = data.precription.surgerySelectedArray;
        this.instructionsComplete = data.precription.instructionsComplete;
        this.instructionsSelected = data.precription.instructionsSelected;
        this.medicationComplete = data.precription.medicationComplete;
        this.currentVaccinationComplete = data.precription.currentVaccinationComplete;
        this.finalCurrentVaccinationArray = data.precription.finalCurrentVaccinationArray;
        this.dueVaccinationComplete = data.precription.dueVaccinationComplete;
        this.finalDueVaccinationArray = data.precription.finalDueVaccinationArray;
        this.eyePresComplete = data.precription.eyePresComplete;
        this.finalRightOD = data.precription.finalRightOD;
        this.finalLeftOD = data.precription.finalLeftOD;
        this.followDaysComplete = data.precription.followDaysComplete;
        this.finalfollowUpDays = data.precription.finalfollowUpDays;
        this.followUpDate.setDate(new Date(data.createdAt).getDate() + this.finalfollowUpDays);
        console.log(this.followUpDate);
        var options = { month: 'short' };
        this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
        this.followUpDay = this.followUpDate.getDate();
        this.followUpYear = this.followUpDate.getFullYear();
        this.minutes = data.precription.minutes;
        this.seconds = data.precription.seconds;
        // this.languageOptionSelected = data.precription.languageOptionSelected
        $("#previewModal").modal("show");
    };
    SearchRecordsComponent.prototype.dispensedPatientSelectedOpen = function (list) {
        this.dispensedPatientSelected = list;
        // $('#uploadedPrescriptionModal').modal('show')
        $(".custom-modal").fadeIn();
    };
    SearchRecordsComponent.prototype.checkOptionOfPad = function (value) {
        // console.log(this.doctorData)
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return true;
        }
        else {
            for (var i = 0; i < this.doctorData.pad_customization_options.length; i++) {
                if (this.doctorData.pad_customization_options[i].value == value) {
                    if (this.doctorData.pad_customization_options[i].status == true) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    };
    SearchRecordsComponent.prototype.getFooterText = function () {
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return "Not for Medico-Legal Purpose";
        }
        else {
            return this.doctorData.pad_customization_options[12].text;
        }
    };
    SearchRecordsComponent.prototype.getHeaderText = function () {
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return "PLEASE TAKE PRIOR APPOINTMENT";
        }
        else {
            return this.doctorData.pad_customization_options[8].text;
        }
    };
    SearchRecordsComponent.prototype.setAllShiftsForPreview = function () {
        this.allShifts = [];
        var Mon = false;
        var Tue = false;
        var Wed = false;
        var Thu = false;
        var Fri = false;
        var Sat = false;
        var Sun = false;
        for (var i = 0; i < this.doctorData.consultation_schedule.length; i++) {
            var string = '';
            if (this.doctorData.consultation_schedule[i].Monday == true) {
                Mon = true;
                if (string == '') {
                    string = "Mon";
                }
                else {
                    string = string + ", " + "Mon";
                }
            }
            if (this.doctorData.consultation_schedule[i].Tuesday == true) {
                Tue = true;
                if (string == '') {
                    string = "Tue";
                }
                else {
                    string = string + ", " + "Tue";
                }
            }
            if (this.doctorData.consultation_schedule[i].Wednesday == true) {
                Wed = true;
                if (string == '') {
                    string = "Wed";
                }
                else {
                    string = string + ", " + "Wed";
                }
            }
            if (this.doctorData.consultation_schedule[i].Thursday == true) {
                Thu = true;
                if (string == '') {
                    string = "Thu";
                }
                else {
                    string = string + ", " + "Thu";
                }
            }
            if (this.doctorData.consultation_schedule[i].Friday == true) {
                Fri = true;
                if (string == '') {
                    string = "Fri";
                }
                else {
                    string = string + ", " + "Fri";
                }
            }
            if (this.doctorData.consultation_schedule[i].Saturday == true) {
                Sat = true;
                if (string == '') {
                    string = "Sat";
                }
                else {
                    string = string + ", " + "Sat";
                }
            }
            if (this.doctorData.consultation_schedule[i].Sunday == true) {
                Sun = true;
                if (string == '') {
                    string = "Sun";
                }
                else {
                    string = string + ", " + "Sun";
                }
            }
            var object = {
                day: string,
                shifts: this.doctorData.consultation_schedule[i].shifts
            };
            this.allShifts.push(object);
        }
        var stringClosed = '';
        this.allShiftsClosed = [];
        if (Mon == false) {
            if (stringClosed == '') {
                stringClosed = "Mon";
            }
            else {
                stringClosed = stringClosed + ", " + "Mon";
            }
        }
        if (Tue == false) {
            if (stringClosed == '') {
                stringClosed = "Tue";
            }
            else {
                stringClosed = stringClosed + ", " + "Tue";
            }
        }
        if (Wed == false) {
            if (stringClosed == '') {
                stringClosed = "Wed";
            }
            else {
                stringClosed = stringClosed + ", " + "Wed";
            }
        }
        if (Thu == false) {
            if (stringClosed == '') {
                stringClosed = "Thu";
            }
            else {
                stringClosed = stringClosed + ", " + "Thu";
            }
        }
        if (Fri == false) {
            if (stringClosed == '') {
                stringClosed = "Fri";
            }
            else {
                stringClosed = stringClosed + ", " + "Fri";
            }
        }
        if (Sat == false) {
            if (stringClosed == '') {
                stringClosed = "Sat";
            }
            else {
                stringClosed = stringClosed + ", " + "Sat";
            }
        }
        if (Sun == false) {
            if (stringClosed == '') {
                stringClosed = "Sun";
            }
            else {
                stringClosed = stringClosed + ", " + "Sun";
            }
        }
        if (stringClosed != '') {
            var object = {
                day: stringClosed
            };
            this.allShiftsClosed.push(object);
        }
    };
    SearchRecordsComponent.prototype.createPdf = function () {
        console.log(this.dispensedPatient);
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
    };
    SearchRecordsComponent.prototype.printImage = function () {
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
    };
    SearchRecordsComponent.prototype.searchByName = function () {
        var _this = this;
        this.prescriptionCount = 0;
        if (this.searchInput == null || this.searchInput == '' || this.searchInput == undefined || this.searchInput == 0 ||
            this.searchInput.toString().trim().length < 1) {
            this.toastr.warning("Invalid search input", "Warning");
        }
        else {
            this.loading = true;
            var object = {
                doctor_id: this.doctorData._id,
                search: this.searchInput
            };
            this.UserService.FindPatientByName(object).subscribe(function (data) {
                console.log(data);
                _this.listOfPatient = data.data;
                _this.sortedData = _this.listOfPatient;
                _this.prescriptionCount = _this.listOfPatient.length;
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
    };
    SearchRecordsComponent.prototype.onKey = function (event) {
        if (event.keyCode == 13) {
            this.searchByName();
        }
    };
    SearchRecordsComponent.prototype.search = function () {
        var _this = this;
        this.searchInput = this.searchInput.toLowerCase();
        if (this.searchInput && this.searchInput.trim() != '') {
            this.showData = this.databackup.filter(function (item) {
                var b = item.invoice;
                return (b.indexOf(_this.searchInput) > -1);
            });
        }
    };
    SearchRecordsComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    SearchRecordsComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    SearchRecordsComponent.prototype.sortData = function (sort) {
        var data = this.sortedData.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'date': return compare(a.createdAt, b.createdAt, isAsc);
                case 'name': return compare(a.registration.pateintName, b.registration.pateintName, isAsc);
                case 'phone': return compare(a.registration.pateintPhone, b.registration.pateintPhone, isAsc);
                case 'address': return compare(a.registration.location, b.registration.location, isAsc);
                case 'count': return compare(a.registration.lastVisit.count, b.registration.lastVisit.count, isAsc);
                default: return 0;
            }
        });
    };
    SearchRecordsComponent.prototype.exportPdf = function () {
        var head = [
            { title: '#', dataKey: "id" },
            { title: 'Date', dataKey: "date" },
            { title: 'Name', dataKey: "name" },
            { title: 'Phone', dataKey: "phone" },
            { title: 'Address', dataKey: "address" },
        ];
        var csvData = [];
        var totalDuration;
        var countData = 0;
        var dates = [];
        var ob;
        for (var i = 0; i < this.sortedData.length; i++) {
            ob = {};
            if (this.sortedData[i].registration.location) {
                ob.address = this.sortedData[i].registration.location;
            }
            else {
                ob.address = 'Other';
            }
            // if(this.sortedData[i].registration.lastVisit.status){
            //     ob.count = this.sortedData[i].registration.lastVisit.count + 1
            // }else{
            //     ob.count = 1
            // }
            ob.id = i + 1;
            ob.date = this.datePipe.transform(this.sortedData[i].createdAt, 'dd-MM-yyyy, h:mm a');
            ob.name = this.sortedData[i].registration.pateintName;
            ob.phone = this.sortedData[i].registration.pateintPhone;
            //ob.address = this.sortedData[i].registration.location
            countData++;
            csvData.push(ob);
        }
        // ob = {}
        //     ob.id=''
        //     ob.date=''
        //     ob.name=''
        //     ob.phone=''
        //     ob.count=countData
        //     csvData.push(ob)
        // csvData.count = countData
        var date = new Date().toJSON().toString().substr(0, 10);
        var doc = new jsPDF('p', 'pt');
        doc.autoTable(head, csvData, {
            theme: 'grid',
            styles: {
                overflow: 'linebreak',
            },
            margin: 5,
            fontSize: 8,
            tableWidth: 'auto',
            showHeader: 'everyPage'
        });
        doc.save('Search-Record' + "(" + date + ")");
    };
    SearchRecordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-records',
            template: __webpack_require__("../../../../../src/app/header-two-layout/search-records/search-records.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/search-records/search-records.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"]])
    ], SearchRecordsComponent);
    return SearchRecordsComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-two-layout/search-records/search-records.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRecordsModule", function() { return SearchRecordsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_records_component__ = __webpack_require__("../../../../../src/app/header-two-layout/search-records/search-records.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_records_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/search-records/search-records-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_confirmation_popover__ = __webpack_require__("../../../../angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SearchRecordsModule = /** @class */ (function () {
    function SearchRecordsModule() {
    }
    SearchRecordsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__search_records_routing_module__["a" /* SearchRecordsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot({
                    confirmButtonType: 'danger'
                }),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__search_records_component__["a" /* SearchRecordsComponent */]]
        })
    ], SearchRecordsModule);
    return SearchRecordsModule;
}());



/***/ }),

/***/ "../../../../angular-confirmation-popover/fesm5/angular-confirmation-popover.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationPopoverModule; });
/* unused harmony export ɵd */
/* unused harmony export ɵf */
/* unused harmony export ɵe */
/* unused harmony export ɵc */
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("../../../../tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_positioning__ = __webpack_require__("../../../../positioning/dist/positioning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ConfirmationPopoverOptions = /** @class */ (function () {
    function ConfirmationPopoverOptions() {
        this.confirmText = 'Confirm';
        this.cancelText = 'Cancel';
        this.confirmButtonType = 'success';
        this.cancelButtonType = 'default';
        this.placement = 'top';
        this.hideConfirmButton = false;
        this.hideCancelButton = false;
        this.popoverClass = '';
        this.appendToBody = false;
        this.reverseButtonOrder = false;
        this.closeOnOutsideClick = true;
    }
    return ConfirmationPopoverOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@internal
 */
var ConfirmationPopoverWindowOptions = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __extends */])(ConfirmationPopoverWindowOptions, _super);
    function ConfirmationPopoverWindowOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfirmationPopoverWindowOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    return ConfirmationPopoverWindowOptions;
}(ConfirmationPopoverOptions));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@internal
 */
var ConfirmationPopoverWindowComponent = /** @class */ (function () {
    function ConfirmationPopoverWindowComponent(options) {
        this.options = options;
    }
    /**
     * @return {?}
     */
    ConfirmationPopoverWindowComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.options.onAfterViewInit();
    };
    ConfirmationPopoverWindowComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                    selector: 'mwl-confirmation-popover-window',
                    styles: [
                        "\n    .popover {\n      display: block;\n    }\n    .bs-popover-top .arrow, .bs-popover-bottom .arrow {\n      left: 50%;\n    }\n    .bs-popover-left .arrow, .bs-popover-right .arrow {\n      top: 50%;\n    }\n    .btn {\n      transition: none;\n    }\n    .confirm-btns {\n      display: flex;\n      justify-content: space-around;\n    }\n    .confirm-btn-container {\n      flex-basis: 50%;\n    }\n    .confirm-btn-container:not(:first-child) {\n      margin-left: 4px;\n    }\n    .confirm-btn-container:not(:last-child) {\n      margin-right: 4px;\n    }\n    .confirm-btns-reversed {\n      flex-direction: row-reverse;\n    }\n    .confirm-btns-reversed .confirm-btn-container:not(:first-child) {\n      margin-right: 4px;\n      margin-left: 0;\n    }\n    .confirm-btns-reversed .confirm-btn-container:not(:last-child) {\n      margin-right: 0;\n      margin-left: 4px;\n    }\n  "
                    ],
                    template: "\n    <ng-template #defaultTemplate let-options=\"options\">\n      <div [ngClass]=\"[\n        'popover',\n        options.placement,\n        'popover-' + options.placement,\n        'bs-popover-' + options.placement,\n        options.popoverClass\n      ]\">\n        <div class=\"popover-arrow arrow\"></div>\n        <h3 class=\"popover-title popover-header\" [innerHTML]=\"options.popoverTitle\"></h3>\n        <div class=\"popover-content popover-body\">\n          <p [innerHTML]=\"options.popoverMessage\"></p>\n          <div class=\"confirm-btns\" [class.confirm-btns-reversed]=\"options.reverseButtonOrder\">\n            <div\n              class=\"confirm-btn-container\"\n              *ngIf=\"!options.hideCancelButton\">\n              <button\n                type=\"button\"\n                [mwlFocus]=\"options.focusButton === 'cancel'\"\n                [class]=\"'btn btn-block btn-' + options.cancelButtonType\"\n                (click)=\"options.onCancel({clickEvent: $event})\"\n                [innerHtml]=\"options.cancelText\">\n              </button>\n            </div>\n            <div\n              class=\"confirm-btn-container\"\n              *ngIf=\"!options.hideConfirmButton\">\n              <button\n                type=\"button\"\n                [mwlFocus]=\"options.focusButton === 'confirm'\"\n                [class]=\"'btn btn-block btn-' + options.confirmButtonType\"\n                (click)=\"options.onConfirm({clickEvent: $event})\"\n                [innerHtml]=\"options.confirmText\">\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"options.customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{options: options}\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    ConfirmationPopoverWindowComponent.ctorParameters = function () { return [
        { type: ConfirmationPopoverWindowOptions }
    ]; };
    return ConfirmationPopoverWindowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * All properties can be set on the directive as attributes like so (use `ConfirmationPopoverModule.forRoot()` to configure them globally):
 * ```html
 * <button
 *  class="btn btn-default"
 *  mwlConfirmationPopover
 *  [popoverTitle]="popoverTitle"
 *  [popoverMessage]="popoverMessage"
 *  placement="left"
 *  (confirm)="confirmClicked = true"
 *  (cancel)="cancelClicked = true"
 *  [(isOpen)]="isOpen">
 *   Show confirm popover!
 * </button>
 * ```
 */
var ConfirmationPopoverDirective = /** @class */ (function () {
    /**
     * @internal
     */
    function ConfirmationPopoverDirective(viewContainerRef, elm, defaultOptions, cfr, position, renderer) {
        this.viewContainerRef = viewContainerRef;
        this.elm = elm;
        this.defaultOptions = defaultOptions;
        this.cfr = cfr;
        this.position = position;
        this.renderer = renderer;
        /**
         * Whether to disable showing the popover. Default `false`.
         */
        this.isDisabled = false;
        /**
         * Will open or show the popover when changed.
         * Can be sugared with `isOpenChange` to emulate 2-way binding like so `[(isOpen)]="isOpen"`
         */
        this.isOpen = false;
        /**
         * Will emit when the popover is opened or closed
         */
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"](true);
        /**
         * An expression that is called when the confirm button is clicked.
         */
        this.confirm = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        /**
         * An expression that is called when the cancel button is clicked.
         */
        this.cancel = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.eventListeners = [];
    }
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.ngOnInit = /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isOpenChange.emit(false);
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} changes
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.ngOnChanges = /**
     * \@internal
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["isOpen"]) {
            if (changes["isOpen"].currentValue === true) {
                this.showPopover();
            }
            else {
                this.hidePopover();
            }
        }
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.ngOnDestroy = /**
     * \@internal
     * @return {?}
     */
    function () {
        this.hidePopover();
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.onConfirm = /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.confirm.emit(event);
        this.hidePopover();
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.onCancel = /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cancel.emit(event);
        this.hidePopover();
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.togglePopover = /**
     * \@internal
     * @return {?}
     */
    function () {
        if (!this.popover) {
            this.showPopover();
        }
        else {
            this.hidePopover();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.onDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ closeOnOutsideClick = typeof this.closeOnOutsideClick !== 'undefined' ?
            this.closeOnOutsideClick : this.defaultOptions.closeOnOutsideClick;
        if (this.popover &&
            !this.elm.nativeElement.contains(event.target) &&
            !this.popover.location.nativeElement.contains(event.target) &&
            closeOnOutsideClick) {
            this.hidePopover();
        }
    };
    /**
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.showPopover = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.popover && !this.isDisabled) {
            // work around for https://github.com/mattlewis92/angular-confirmation-popover/issues/65
            // otherwise the document click event gets fired after the click event
            // that triggered the popover to open (no idea why this is so)
            setTimeout(function () {
                _this.eventListeners = [
                    _this.renderer.listen('document', 'click', function (event) {
                        return _this.onDocumentClick(event);
                    }),
                    _this.renderer.listen('document', 'touchend', function (event) {
                        return _this.onDocumentClick(event);
                    }),
                    _this.renderer.listen('window', 'resize', function () { return _this.positionPopover(); })
                ];
            });
            var /** @type {?} */ options_1 = new ConfirmationPopoverWindowOptions();
            Object.assign(options_1, this.defaultOptions, {
                onConfirm: function (event) {
                    _this.onConfirm(event);
                },
                onCancel: function (event) {
                    _this.onCancel(event);
                },
                onAfterViewInit: function () {
                    _this.positionPopover();
                }
            });
            var /** @type {?} */ optionalParams = [
                'confirmText',
                'cancelText',
                'placement',
                'confirmButtonType',
                'cancelButtonType',
                'focusButton',
                'hideConfirmButton',
                'hideCancelButton',
                'popoverClass',
                'appendToBody',
                'customTemplate',
                'reverseButtonOrder',
                'popoverTitle',
                'popoverMessage'
            ];
            optionalParams.forEach(function (param) {
                if (typeof _this[param] !== 'undefined') {
                    (/** @type {?} */ (options_1))[param] = _this[param];
                }
            });
            var /** @type {?} */ componentFactory = this.cfr.resolveComponentFactory(ConfirmationPopoverWindowComponent);
            var /** @type {?} */ childInjector = __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"].create([
                {
                    provide: ConfirmationPopoverWindowOptions,
                    useValue: options_1
                }
            ], this.viewContainerRef.parentInjector);
            this.popover = this.viewContainerRef.createComponent(componentFactory, this.viewContainerRef.length, childInjector);
            if (options_1.appendToBody) {
                document.body.appendChild(this.popover.location.nativeElement);
            }
            this.isOpenChange.emit(true);
        }
    };
    /**
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.positionPopover = /**
     * @return {?}
     */
    function () {
        if (this.popover) {
            var /** @type {?} */ popoverElement = this.popover.location.nativeElement.children[0];
            var /** @type {?} */ popoverPosition = this.position.positionElements(this.elm.nativeElement, popoverElement, this.placement || this.defaultOptions.placement, this.appendToBody || this.defaultOptions.appendToBody);
            this.renderer.setStyle(popoverElement, 'top', popoverPosition.top + "px");
            this.renderer.setStyle(popoverElement, 'left', popoverPosition.left + "px");
        }
    };
    /**
     * @return {?}
     */
    ConfirmationPopoverDirective.prototype.hidePopover = /**
     * @return {?}
     */
    function () {
        if (this.popover) {
            this.popover.destroy();
            delete this.popover;
            this.isOpenChange.emit(false);
            this.eventListeners.forEach(function (fn) { return fn(); });
            this.eventListeners = [];
        }
    };
    ConfirmationPopoverDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[mwlConfirmationPopover]'
                },] },
    ];
    /** @nocollapse */
    ConfirmationPopoverDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"] },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] },
        { type: ConfirmationPopoverOptions },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"] },
        { type: __WEBPACK_IMPORTED_MODULE_2_positioning__["a" /* Positioning */] },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"] }
    ]; };
    ConfirmationPopoverDirective.propDecorators = {
        popoverTitle: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        popoverMessage: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        confirmText: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        cancelText: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        placement: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        confirmButtonType: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        cancelButtonType: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        focusButton: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        hideConfirmButton: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        hideCancelButton: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        isDisabled: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        isOpen: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        customTemplate: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        isOpenChange: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        confirm: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        cancel: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] }],
        popoverClass: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        appendToBody: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        reverseButtonOrder: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        closeOnOutsideClick: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }],
        togglePopover: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"], args: ['click',] }]
    };
    return ConfirmationPopoverDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A helper directive to focus buttons. You will only need this if using a custom template
 */
var FocusDirective = /** @class */ (function () {
    function FocusDirective(elm) {
        this.elm = elm;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FocusDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["mwlFocus"] && this.mwlFocus === true) {
            this.elm.nativeElement.focus();
        }
    };
    FocusDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"], args: [{
                    selector: '[mwlFocus]'
                },] },
    ];
    /** @nocollapse */
    FocusDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] }
    ]; };
    FocusDirective.propDecorators = {
        mwlFocus: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] }]
    };
    return FocusDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ USER_OPTIONS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('confirmation popover user options');
/**
 * @param {?} userOptions
 * @return {?}
 */
function optionsFactory(userOptions) {
    var /** @type {?} */ options = new ConfirmationPopoverOptions();
    Object.assign(options, userOptions);
    return options;
}
var ConfirmationPopoverModule = /** @class */ (function () {
    function ConfirmationPopoverModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    ConfirmationPopoverModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: ConfirmationPopoverModule,
            providers: [
                {
                    provide: USER_OPTIONS,
                    useValue: options
                },
                {
                    provide: ConfirmationPopoverOptions,
                    useFactory: optionsFactory,
                    deps: [USER_OPTIONS]
                },
                __WEBPACK_IMPORTED_MODULE_2_positioning__["a" /* Positioning */]
            ]
        };
    };
    ConfirmationPopoverModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    declarations: [
                        ConfirmationPopoverDirective,
                        ConfirmationPopoverWindowComponent,
                        FocusDirective
                    ],
                    imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"]],
                    exports: [ConfirmationPopoverDirective, FocusDirective],
                    entryComponents: [ConfirmationPopoverWindowComponent]
                },] },
    ];
    return ConfirmationPopoverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jb25maXJtYXRpb24tcG9wb3Zlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1jb25maXJtYXRpb24tcG9wb3Zlci9jb25maXJtYXRpb24tcG9wb3Zlci1vcHRpb25zLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLWNvbmZpcm1hdGlvbi1wb3BvdmVyL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy1vcHRpb25zLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLWNvbmZpcm1hdGlvbi1wb3BvdmVyL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItY29uZmlybWF0aW9uLXBvcG92ZXIvY29uZmlybWF0aW9uLXBvcG92ZXIuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWNvbmZpcm1hdGlvbi1wb3BvdmVyL2ZvY3VzLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1jb25maXJtYXRpb24tcG9wb3Zlci9jb25maXJtYXRpb24tcG9wb3Zlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9uc0ludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBUaGUgcG9wb3ZlciB0aXRsZVxuICAgKi9cbiAgcG9wb3ZlclRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9wb3ZlciBtZXNzYWdlXG4gICAqL1xuICBwb3BvdmVyTWVzc2FnZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBvcG92ZXIgY29uZmlybWF0aW9uIGJ1dHRvbiB0ZXh0XG4gICAqL1xuICBjb25maXJtVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBvcG92ZXIgY2FuY2VsIGJ1dHRvbiB0ZXh0XG4gICAqL1xuICBjYW5jZWxUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9wb3ZlciBjb25maXJtIGJ1dHRvbiB0eXBlIGUuZy4gYHN1Y2Nlc3NgLCBgZGFuZ2VyYCBldGNcbiAgICovXG4gIGNvbmZpcm1CdXR0b25UeXBlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9wb3ZlciBjYW5jZWwgYnV0dG9uIHR5cGUgIGUuZy4gYHN1Y2Nlc3NgLCBgZGFuZ2VyYCBldGNcbiAgICovXG4gIGNhbmNlbEJ1dHRvblR5cGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3BvdmVyIHBsYWNlbWVudC4gQ2FuIGJlIGB0b3BgLCBgYm90dG9tYCwgYGxlZnRgLCBgcmlnaHRgXG4gICAqL1xuICBwbGFjZW1lbnQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoaWNoIGJ1dHRvbiB0byBjYW5jZWwuIENhbiBiZSBlaXRoZXIgYGNvbmZpcm1gIG9yIGBjYW5jZWxgXG4gICAqL1xuICBmb2N1c0J1dHRvbj86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0byBoaWRlIHRoZSBjb25maXJtYXRpb24gYnV0dG9uXG4gICAqL1xuICBoaWRlQ29uZmlybUJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gaGlkZSB0aGUgY2FuY2VsIGJ1dHRvblxuICAgKi9cbiAgaGlkZUNhbmNlbEJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIENTUyBjbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgcG9wb3ZlclxuICAgKi9cbiAgcG9wb3ZlckNsYXNzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGFwcGVuZCB0aGUgcG9wb3ZlciB0byB0aGUgZG9jdW1lbnQgYm9keVxuICAgKi9cbiAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3dhcCB0aGUgb3JkZXIgb2YgdGhlIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG4gICAqL1xuICByZXZlcnNlQnV0dG9uT3JkZXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgcG9wb3ZlciBzaG91bGQgc3RheSBvcGVuIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBpdFxuICAgKi9cbiAgY2xvc2VPbk91dHNpZGVDbGljaz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9uc1xuICBpbXBsZW1lbnRzIENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zSW50ZXJmYWNlIHtcbiAgcG9wb3ZlclRpdGxlOiBzdHJpbmc7XG4gIHBvcG92ZXJNZXNzYWdlOiBzdHJpbmc7XG4gIGNvbmZpcm1UZXh0OiBzdHJpbmcgPSAnQ29uZmlybSc7XG4gIGNhbmNlbFRleHQ6IHN0cmluZyA9ICdDYW5jZWwnO1xuICBjb25maXJtQnV0dG9uVHlwZTogc3RyaW5nID0gJ3N1Y2Nlc3MnO1xuICBjYW5jZWxCdXR0b25UeXBlOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG4gIHBsYWNlbWVudDogc3RyaW5nID0gJ3RvcCc7XG4gIGZvY3VzQnV0dG9uOiBzdHJpbmc7XG4gIGhpZGVDb25maXJtQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gIGhpZGVDYW5jZWxCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgcG9wb3ZlckNsYXNzOiBzdHJpbmcgPSAnJztcbiAgYXBwZW5kVG9Cb2R5OiBib29sZWFuID0gZmFsc2U7XG4gIHJldmVyc2VCdXR0b25PcmRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBjbG9zZU9uT3V0c2lkZUNsaWNrOiBib29sZWFuID0gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IENvbmZpcm1DYW5jZWxFdmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItb3B0aW9ucy5wcm92aWRlcic7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93T3B0aW9ucyBleHRlbmRzIENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zIHtcbiAgcHVibGljIG9uQ29uZmlybTogKGV2ZW50OiBDb25maXJtQ2FuY2VsRXZlbnQpID0+IHZvaWQ7XG4gIHB1YmxpYyBvbkNhbmNlbDogKGV2ZW50OiBDb25maXJtQ2FuY2VsRXZlbnQpID0+IHZvaWQ7XG4gIHB1YmxpYyBvbkFmdGVyVmlld0luaXQ6ICgpID0+IHZvaWQ7XG4gIHB1YmxpYyBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd09wdGlvbnMgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdy1vcHRpb25zLnByb3ZpZGVyJztcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNvbmZpcm1hdGlvbi1wb3BvdmVyLXdpbmRvdycsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAucG9wb3ZlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmJzLXBvcG92ZXItdG9wIC5hcnJvdywgLmJzLXBvcG92ZXItYm90dG9tIC5hcnJvdyB7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgfVxuICAgIC5icy1wb3BvdmVyLWxlZnQgLmFycm93LCAuYnMtcG9wb3Zlci1yaWdodCAuYXJyb3cge1xuICAgICAgdG9wOiA1MCU7XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICB9XG4gICAgLmNvbmZpcm0tYnRucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICAgIC5jb25maXJtLWJ0bi1jb250YWluZXIge1xuICAgICAgZmxleC1iYXNpczogNTAlO1xuICAgIH1cbiAgICAuY29uZmlybS1idG4tY29udGFpbmVyOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuICAgIC5jb25maXJtLWJ0bi1jb250YWluZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG4gICAgLmNvbmZpcm0tYnRucy1yZXZlcnNlZCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgfVxuICAgIC5jb25maXJtLWJ0bnMtcmV2ZXJzZWQgLmNvbmZpcm0tYnRuLWNvbnRhaW5lcjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgICAuY29uZmlybS1idG5zLXJldmVyc2VkIC5jb25maXJtLWJ0bi1jb250YWluZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cbiAgYFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlIGxldC1vcHRpb25zPVwib3B0aW9uc1wiPlxuICAgICAgPGRpdiBbbmdDbGFzc109XCJbXG4gICAgICAgICdwb3BvdmVyJyxcbiAgICAgICAgb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICAgICdwb3BvdmVyLScgKyBvcHRpb25zLnBsYWNlbWVudCxcbiAgICAgICAgJ2JzLXBvcG92ZXItJyArIG9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgICBvcHRpb25zLnBvcG92ZXJDbGFzc1xuICAgICAgXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvdyBhcnJvd1wiPjwvZGl2PlxuICAgICAgICA8aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlIHBvcG92ZXItaGVhZGVyXCIgW2lubmVySFRNTF09XCJvcHRpb25zLnBvcG92ZXJUaXRsZVwiPjwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3BvdmVyLWNvbnRlbnQgcG9wb3Zlci1ib2R5XCI+XG4gICAgICAgICAgPHAgW2lubmVySFRNTF09XCJvcHRpb25zLnBvcG92ZXJNZXNzYWdlXCI+PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maXJtLWJ0bnNcIiBbY2xhc3MuY29uZmlybS1idG5zLXJldmVyc2VkXT1cIm9wdGlvbnMucmV2ZXJzZUJ1dHRvbk9yZGVyXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiY29uZmlybS1idG4tY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCIhb3B0aW9ucy5oaWRlQ2FuY2VsQnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBbbXdsRm9jdXNdPVwib3B0aW9ucy5mb2N1c0J1dHRvbiA9PT0gJ2NhbmNlbCdcIlxuICAgICAgICAgICAgICAgIFtjbGFzc109XCInYnRuIGJ0bi1ibG9jayBidG4tJyArIG9wdGlvbnMuY2FuY2VsQnV0dG9uVHlwZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wdGlvbnMub25DYW5jZWwoe2NsaWNrRXZlbnQ6ICRldmVudH0pXCJcbiAgICAgICAgICAgICAgICBbaW5uZXJIdG1sXT1cIm9wdGlvbnMuY2FuY2VsVGV4dFwiPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cImNvbmZpcm0tYnRuLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiIW9wdGlvbnMuaGlkZUNvbmZpcm1CdXR0b25cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIFttd2xGb2N1c109XCJvcHRpb25zLmZvY3VzQnV0dG9uID09PSAnY29uZmlybSdcIlxuICAgICAgICAgICAgICAgIFtjbGFzc109XCInYnRuIGJ0bi1ibG9jayBidG4tJyArIG9wdGlvbnMuY29uZmlybUJ1dHRvblR5cGVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvcHRpb25zLm9uQ29uZmlybSh7Y2xpY2tFdmVudDogJGV2ZW50fSlcIlxuICAgICAgICAgICAgICAgIFtpbm5lckh0bWxdPVwib3B0aW9ucy5jb25maXJtVGV4dFwiPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJvcHRpb25zLmN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie29wdGlvbnM6IG9wdGlvbnN9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93T3B0aW9ucykge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zLm9uQWZ0ZXJWaWV3SW5pdCgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgRWxlbWVudFJlZixcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3cuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zIH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci1vcHRpb25zLnByb3ZpZGVyJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zIH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci13aW5kb3ctb3B0aW9ucy5wcm92aWRlcic7XG5pbXBvcnQgeyBQb3NpdGlvbmluZyB9IGZyb20gJ3Bvc2l0aW9uaW5nJztcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25maXJtQ2FuY2VsRXZlbnQge1xuICBjbGlja0V2ZW50OiBNb3VzZUV2ZW50O1xufVxuXG4vKipcbiAqIEFsbCBwcm9wZXJ0aWVzIGNhbiBiZSBzZXQgb24gdGhlIGRpcmVjdGl2ZSBhcyBhdHRyaWJ1dGVzIGxpa2Ugc28gKHVzZSBgQ29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZS5mb3JSb290KClgIHRvIGNvbmZpZ3VyZSB0aGVtIGdsb2JhbGx5KTpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b25cbiAqICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXG4gKiAgbXdsQ29uZmlybWF0aW9uUG9wb3ZlclxuICogIFtwb3BvdmVyVGl0bGVdPVwicG9wb3ZlclRpdGxlXCJcbiAqICBbcG9wb3Zlck1lc3NhZ2VdPVwicG9wb3Zlck1lc3NhZ2VcIlxuICogIHBsYWNlbWVudD1cImxlZnRcIlxuICogIChjb25maXJtKT1cImNvbmZpcm1DbGlja2VkID0gdHJ1ZVwiXG4gKiAgKGNhbmNlbCk9XCJjYW5jZWxDbGlja2VkID0gdHJ1ZVwiXG4gKiAgWyhpc09wZW4pXT1cImlzT3BlblwiPlxuICogICBTaG93IGNvbmZpcm0gcG9wb3ZlciFcbiAqIDwvYnV0dG9uPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xDb25maXJtYXRpb25Qb3BvdmVyXSdcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWF0aW9uUG9wb3ZlckRpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQge1xuICAvKipcbiAgICogVGhlIHRpdGxlIG9mIHRoZSBwb3BvdmVyXG4gICAqL1xuICBASW5wdXQoKSBwb3BvdmVyVGl0bGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGJvZHkgdGV4dCBvZiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIEBJbnB1dCgpIHBvcG92ZXJNZXNzYWdlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IG9mIHRoZSBjb25maXJtIGJ1dHRvbi4gRGVmYXVsdCBgQ29uZmlybWBcbiAgICovXG4gIEBJbnB1dCgpIGNvbmZpcm1UZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IG9mIHRoZSBjYW5jZWwgYnV0dG9uLiBEZWZhdWx0IGBDYW5jZWxgXG4gICAqL1xuICBASW5wdXQoKSBjYW5jZWxUZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwbGFjZW1lbnQgb2YgdGhlIHBvcG92ZXIuIEl0IGNhbiBiZSBlaXRoZXIgYHRvcGAsIGByaWdodGAsIGBib3R0b21gIG9yIGBsZWZ0YC4gRGVmYXVsdCBgdG9wYFxuICAgKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBib290c3RyYXAgYnV0dG9uIHR5cGUgb2YgdGhlIGNvbmZpcm0gYnV0dG9uLiBJdCBjYW4gYmUgYW55IHN1cHBvcnRlZCBib290c3RyYXAgY29sb3IgdHlwZVxuICAgKiBlLmcuIGBkZWZhdWx0YCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCBldGMuIERlZmF1bHQgYHN1Y2Nlc3NgXG4gICAqL1xuICBASW5wdXQoKSBjb25maXJtQnV0dG9uVHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgYm9vdHN0cmFwIGJ1dHRvbiB0eXBlIG9mIHRoZSBjYW5jZWwgYnV0dG9uLiBJdCBjYW4gYmUgYW55IHN1cHBvcnRlZCBib290c3RyYXAgY29sb3IgdHlwZVxuICAgKiBlLmcuIGBkZWZhdWx0YCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCBldGMuIERlZmF1bHQgYGRlZmF1bHRgXG4gICAqL1xuICBASW5wdXQoKSBjYW5jZWxCdXR0b25UeXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0byBlaXRoZXIgYGNvbmZpcm1gIG9yIGBjYW5jZWxgIHRvIGZvY3VzIHRoZSBjb25maXJtIG9yIGNhbmNlbCBidXR0b24uXG4gICAqIElmIG9taXR0ZWQsIGJ5IGRlZmF1bHQgaXQgd2lsbCBub3QgZm9jdXMgZWl0aGVyIGJ1dHRvbi5cbiAgICovXG4gIEBJbnB1dCgpIGZvY3VzQnV0dG9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gaGlkZSB0aGUgY29uZmlybSBidXR0b24uIERlZmF1bHQgYGZhbHNlYC5cbiAgICovXG4gIEBJbnB1dCgpIGhpZGVDb25maXJtQnV0dG9uOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGhpZGUgdGhlIGNhbmNlbCBidXR0b24uIERlZmF1bHQgYGZhbHNlYC5cbiAgICovXG4gIEBJbnB1dCgpIGhpZGVDYW5jZWxCdXR0b246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzYWJsZSBzaG93aW5nIHRoZSBwb3BvdmVyLiBEZWZhdWx0IGBmYWxzZWAuXG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFdpbGwgb3BlbiBvciBzaG93IHRoZSBwb3BvdmVyIHdoZW4gY2hhbmdlZC5cbiAgICogQ2FuIGJlIHN1Z2FyZWQgd2l0aCBgaXNPcGVuQ2hhbmdlYCB0byBlbXVsYXRlIDItd2F5IGJpbmRpbmcgbGlrZSBzbyBgWyhpc09wZW4pXT1cImlzT3BlblwiYFxuICAgKi9cbiAgQElucHV0KCkgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIGEgPG5nLXRlbXBsYXRlPiB0YWcgdGhhdCBpZiBzZXQgd2lsbCBvdmVycmlkZSB0aGUgcG9wb3ZlcnMgdGVtcGxhdGUuIFVzZSBsaWtlIHNvOlxuICAgKiBgYGBodG1sXG4gICAqIDxuZy10ZW1wbGF0ZSAjY3VzdG9tVGVtcGxhdGUgbGV0LW9wdGlvbnM9XCJvcHRpb25zXCI+XG4gICAqICAgPGRpdiBbY2xhc3NdPVwiJ3BvcG92ZXIgJyArIG9wdGlvbnMucGxhY2VtZW50XCIgc3R5bGU9XCJkaXNwbGF5OiBibG9ja1wiPlxuICAgKiAgICAgTXkgY3VzdG9tIHRlbXBsYXRlXG4gICAqICAgPC9kaXY+XG4gICAqIDwvbmctdGVtcGxhdGU+XG4gICAqIGBgYFxuICAgKlxuICAgKiBUaGVuIHBhc3MgY3VzdG9tVGVtcGxhdGUgdG8gdGhlIG13bENvbmZpcm1hdGlvblBvcG92ZXIgZGlyZWN0aXZlIGxpa2Ugc28gYFtjdXN0b21UZW1wbGF0ZV09XCJjdXN0b21UZW1wbGF0ZVwiYFxuICAgKi9cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFdpbGwgZW1pdCB3aGVuIHRoZSBwb3BvdmVyIGlzIG9wZW5lZCBvciBjbG9zZWRcbiAgICovXG4gIEBPdXRwdXQoKSBpc09wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIodHJ1ZSk7XG5cbiAgLyoqXG4gICAqIEFuIGV4cHJlc3Npb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgY29uZmlybSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBjb25maXJtOiBFdmVudEVtaXR0ZXI8Q29uZmlybUNhbmNlbEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQW4gZXhwcmVzc2lvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBAT3V0cHV0KCkgY2FuY2VsOiBFdmVudEVtaXR0ZXI8Q29uZmlybUNhbmNlbEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQSBjdXN0b20gQ1NTIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBwb3BvdmVyXG4gICAqL1xuICBASW5wdXQoKSBwb3BvdmVyQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBlbGVtZW50IHRvIHRoZSBkb2N1bWVudCBib2R5IHJhdGhlciB0aGFuIHRoZSB0cmlnZ2VyIGVsZW1lbnRcbiAgICovXG4gIEBJbnB1dCgpIGFwcGVuZFRvQm9keTogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3dhcCB0aGUgb3JkZXIgb2YgdGhlIGNvbmZpcm0gYW5kIGNhbmNlbCBidXR0b25zXG4gICAqL1xuICBASW5wdXQoKSByZXZlcnNlQnV0dG9uT3JkZXI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIHBvcG92ZXIgc2hvdWxkIHN0YXkgb3BlbiBldmVuIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBvZiBpdFxuICAgKi9cbiAgQElucHV0KCkgY2xvc2VPbk91dHNpZGVDbGljazogYm9vbGVhbjtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwb3BvdmVyOiBDb21wb25lbnRSZWY8Q29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd0NvbXBvbmVudD47XG5cbiAgcHJpdmF0ZSBldmVudExpc3RlbmVyczogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBlbG06IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9uczogQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMsXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIHBvc2l0aW9uOiBQb3NpdGlvbmluZyxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmlzT3Blbikge1xuICAgICAgaWYgKGNoYW5nZXMuaXNPcGVuLmN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnNob3dQb3BvdmVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25Db25maXJtKGV2ZW50OiBDb25maXJtQ2FuY2VsRXZlbnQpIHtcbiAgICB0aGlzLmNvbmZpcm0uZW1pdChldmVudCk7XG4gICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgb25DYW5jZWwoZXZlbnQ6IENvbmZpcm1DYW5jZWxFdmVudCkge1xuICAgIHRoaXMuY2FuY2VsLmVtaXQoZXZlbnQpO1xuICAgIHRoaXMuaGlkZVBvcG92ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgdG9nZ2xlUG9wb3ZlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucG9wb3Zlcikge1xuICAgICAgdGhpcy5zaG93UG9wb3ZlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGVQb3BvdmVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2xvc2VPbk91dHNpZGVDbGljayA9IHR5cGVvZiB0aGlzLmNsb3NlT25PdXRzaWRlQ2xpY2sgIT09ICd1bmRlZmluZWQnID8gXG4gICAgICB0aGlzLmNsb3NlT25PdXRzaWRlQ2xpY2sgOiB0aGlzLmRlZmF1bHRPcHRpb25zLmNsb3NlT25PdXRzaWRlQ2xpY2s7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wb3BvdmVyICYmXG4gICAgICAhdGhpcy5lbG0ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAhdGhpcy5wb3BvdmVyLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgY2xvc2VPbk91dHNpZGVDbGlja1xuICAgICkge1xuICAgICAgdGhpcy5oaWRlUG9wb3ZlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvd1BvcG92ZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXIgJiYgIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgLy8gd29yayBhcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9hbmd1bGFyLWNvbmZpcm1hdGlvbi1wb3BvdmVyL2lzc3Vlcy82NVxuICAgICAgLy8gb3RoZXJ3aXNlIHRoZSBkb2N1bWVudCBjbGljayBldmVudCBnZXRzIGZpcmVkIGFmdGVyIHRoZSBjbGljayBldmVudFxuICAgICAgLy8gdGhhdCB0cmlnZ2VyZWQgdGhlIHBvcG92ZXIgdG8gb3BlbiAobm8gaWRlYSB3aHkgdGhpcyBpcyBzbylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogRXZlbnQpID0+XG4gICAgICAgICAgICB0aGlzLm9uRG9jdW1lbnRDbGljayhldmVudClcbiAgICAgICAgICApLFxuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICd0b3VjaGVuZCcsIChldmVudDogRXZlbnQpID0+XG4gICAgICAgICAgICB0aGlzLm9uRG9jdW1lbnRDbGljayhldmVudClcbiAgICAgICAgICApLFxuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgKCkgPT4gdGhpcy5wb3NpdGlvblBvcG92ZXIoKSlcbiAgICAgICAgXTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvcHRpb25zID0gbmV3IENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dPcHRpb25zKCk7XG4gICAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHRoaXMuZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgICAgb25Db25maXJtOiAoZXZlbnQ6IENvbmZpcm1DYW5jZWxFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMub25Db25maXJtKGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DYW5jZWw6IChldmVudDogQ29uZmlybUNhbmNlbEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNhbmNlbChldmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQWZ0ZXJWaWV3SW5pdDogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgIHRoaXMucG9zaXRpb25Qb3BvdmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvcHRpb25hbFBhcmFtczogQXJyYXk8a2V5b2YgQ29uZmlybWF0aW9uUG9wb3ZlckRpcmVjdGl2ZT4gPSBbXG4gICAgICAgICdjb25maXJtVGV4dCcsXG4gICAgICAgICdjYW5jZWxUZXh0JyxcbiAgICAgICAgJ3BsYWNlbWVudCcsXG4gICAgICAgICdjb25maXJtQnV0dG9uVHlwZScsXG4gICAgICAgICdjYW5jZWxCdXR0b25UeXBlJyxcbiAgICAgICAgJ2ZvY3VzQnV0dG9uJyxcbiAgICAgICAgJ2hpZGVDb25maXJtQnV0dG9uJyxcbiAgICAgICAgJ2hpZGVDYW5jZWxCdXR0b24nLFxuICAgICAgICAncG9wb3ZlckNsYXNzJyxcbiAgICAgICAgJ2FwcGVuZFRvQm9keScsXG4gICAgICAgICdjdXN0b21UZW1wbGF0ZScsXG4gICAgICAgICdyZXZlcnNlQnV0dG9uT3JkZXInLFxuICAgICAgICAncG9wb3ZlclRpdGxlJyxcbiAgICAgICAgJ3BvcG92ZXJNZXNzYWdlJ1xuICAgICAgXTtcbiAgICAgIG9wdGlvbmFsUGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXNbcGFyYW1dICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIChvcHRpb25zIGFzIGFueSlbcGFyYW1dID0gdGhpc1twYXJhbV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PFxuICAgICAgICBDb25maXJtYXRpb25Qb3BvdmVyV2luZG93Q29tcG9uZW50XG4gICAgICA+ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd0NvbXBvbmVudCk7XG4gICAgICBjb25zdCBjaGlsZEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKFxuICAgICAgICBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd09wdGlvbnMsXG4gICAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9uc1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLnBhcmVudEluamVjdG9yXG4gICAgICApO1xuICAgICAgdGhpcy5wb3BvdmVyID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChcbiAgICAgICAgY29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmxlbmd0aCxcbiAgICAgICAgY2hpbGRJbmplY3RvclxuICAgICAgKTtcbiAgICAgIGlmIChvcHRpb25zLmFwcGVuZFRvQm9keSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucG9wb3Zlci5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwb3NpdGlvblBvcG92ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9wb3Zlcikge1xuICAgICAgY29uc3QgcG9wb3ZlckVsZW1lbnQgPSB0aGlzLnBvcG92ZXIubG9jYXRpb24ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXTtcbiAgICAgIGNvbnN0IHBvcG92ZXJQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24ucG9zaXRpb25FbGVtZW50cyhcbiAgICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudCxcbiAgICAgICAgcG9wb3ZlckVsZW1lbnQsXG4gICAgICAgIHRoaXMucGxhY2VtZW50IHx8IHRoaXMuZGVmYXVsdE9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgICB0aGlzLmFwcGVuZFRvQm9keSB8fCB0aGlzLmRlZmF1bHRPcHRpb25zLmFwcGVuZFRvQm9keVxuICAgICAgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUocG9wb3ZlckVsZW1lbnQsICd0b3AnLCBgJHtwb3BvdmVyUG9zaXRpb24udG9wfXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICBwb3BvdmVyRWxlbWVudCxcbiAgICAgICAgJ2xlZnQnLFxuICAgICAgICBgJHtwb3BvdmVyUG9zaXRpb24ubGVmdH1weGBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoaWRlUG9wb3ZlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wb3BvdmVyKSB7XG4gICAgICB0aGlzLnBvcG92ZXIuZGVzdHJveSgpO1xuICAgICAgZGVsZXRlIHRoaXMucG9wb3ZlcjtcbiAgICAgIHRoaXMuaXNPcGVuQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBIGhlbHBlciBkaXJlY3RpdmUgdG8gZm9jdXMgYnV0dG9ucy4gWW91IHdpbGwgb25seSBuZWVkIHRoaXMgaWYgdXNpbmcgYSBjdXN0b20gdGVtcGxhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bEZvY3VzXSdcbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBtd2xGb2N1czogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsbTogRWxlbWVudFJlZikge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubXdsRm9jdXMgJiYgdGhpcy5td2xGb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUG9zaXRpb25pbmcgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Qb3BvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb25maXJtYXRpb24tcG9wb3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uUG9wb3ZlcldpbmRvd0NvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uLXBvcG92ZXItd2luZG93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4vZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gIENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zLFxuICBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9uc0ludGVyZmFjZVxufSBmcm9tICcuL2NvbmZpcm1hdGlvbi1wb3BvdmVyLW9wdGlvbnMucHJvdmlkZXInO1xuXG5leHBvcnQgY29uc3QgVVNFUl9PUFRJT05TOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+ID0gbmV3IEluamVjdGlvblRva2VuKFxuICAnY29uZmlybWF0aW9uIHBvcG92ZXIgdXNlciBvcHRpb25zJ1xuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbnNGYWN0b3J5KFxuICB1c2VyT3B0aW9uczogQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnNcbik6IENvbmZpcm1hdGlvblBvcG92ZXJPcHRpb25zIHtcbiAgY29uc3Qgb3B0aW9uczogQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMgPSBuZXcgQ29uZmlybWF0aW9uUG9wb3Zlck9wdGlvbnMoKTtcbiAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB1c2VyT3B0aW9ucyk7XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb25maXJtYXRpb25Qb3BvdmVyRGlyZWN0aXZlLFxuICAgIENvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnQsXG4gICAgRm9jdXNEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtDb25maXJtYXRpb25Qb3BvdmVyRGlyZWN0aXZlLCBGb2N1c0RpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NvbmZpcm1hdGlvblBvcG92ZXJXaW5kb3dDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvblBvcG92ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBvcHRpb25zOiBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9uc0ludGVyZmFjZSA9IHt9XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlybWF0aW9uUG9wb3Zlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVVNFUl9PUFRJT05TLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDb25maXJtYXRpb25Qb3BvdmVyT3B0aW9ucyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBvcHRpb25zRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbVVNFUl9PUFRJT05TXVxuICAgICAgICB9LFxuICAgICAgICBQb3NpdGlvbmluZ1xuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBd0VBOzsyQkFJd0IsU0FBUzswQkFDVixRQUFRO2lDQUNELFNBQVM7Z0NBQ1YsU0FBUzt5QkFDaEIsS0FBSztpQ0FFSSxLQUFLO2dDQUNOLEtBQUs7NEJBQ1YsRUFBRTs0QkFDRCxLQUFLO2tDQUNDLEtBQUs7bUNBQ0osSUFBSTs7cUNBdkZyQztJQXdGQzs7Ozs7Ozs7OztJQ2hGcURBLG9EQUEwQjs7Ozs7Z0JBRC9FLFVBQVU7OzJDQVBYO0VBUXNELDBCQUEwQjs7Ozs7O0FDUmhGOzs7O0lBK0ZFLDRDQUFtQixPQUF5QztRQUF6QyxZQUFPLEdBQVAsT0FBTyxDQUFrQztLQUFJOzs7O0lBRWhFLDREQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDaEM7O2dCQTdGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztvQkFDM0MsTUFBTSxFQUFFO3dCQUNOLDgzQkFxQ0Q7cUJBQ0E7b0JBQ0QsUUFBUSxFQUFFLG95REE0Q1Q7aUJBQ0Y7Ozs7Z0JBNUZRLGdDQUFnQzs7NkNBRHpDOzs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBK0tFLHNDQUNVLGtCQUNBLEtBQ0EsZ0JBQ0EsS0FDQSxVQUNBO1FBTEEscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUNoQixRQUFHLEdBQUgsR0FBRztRQUNILG1CQUFjLEdBQWQsY0FBYztRQUNkLFFBQUcsR0FBSCxHQUFHO1FBQ0gsYUFBUSxHQUFSLFFBQVE7UUFDUixhQUFRLEdBQVIsUUFBUTs7OzswQkF6RWEsS0FBSzs7Ozs7c0JBTVQsS0FBSzs7Ozs0QkFtQmdCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQzs7Ozt1QkFLaEIsSUFBSSxZQUFZLEVBQUU7Ozs7c0JBS25CLElBQUksWUFBWSxFQUFFOzhCQTJCM0IsRUFBRTtLQVkxQzs7Ozs7Ozs7SUFLSiwrQ0FBUTs7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7Ozs7Ozs7OztJQUtELGtEQUFXOzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLFlBQVM7WUFDbEIsSUFBSSxPQUFPLFdBQVEsWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtTQUNGO0tBQ0Y7Ozs7Ozs7O0lBS0Qsa0RBQVc7Ozs7SUFBWDtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7Ozs7Ozs7O0lBS0QsZ0RBQVM7Ozs7O0lBQVQsVUFBVSxLQUF5QjtRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7Ozs7OztJQUtELCtDQUFROzs7OztJQUFSLFVBQVMsS0FBeUI7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7Ozs7OztJQU1ELG9EQUFhOzs7O0lBRGI7UUFFRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtLQUNGOzs7OztJQUVPLHNEQUFlOzs7O2NBQUMsS0FBWTtRQUNsQyxxQkFBTSxtQkFBbUIsR0FBRyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxXQUFXO1lBQ3pFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDO1FBQ3JFLElBQ0UsSUFBSSxDQUFDLE9BQU87WUFDWixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzlDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzNELG1CQUNGLEVBQUU7WUFDQSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7Ozs7O0lBR0ssa0RBQVc7Ozs7O1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTs7OztZQUlyQyxVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLGNBQWMsR0FBRztvQkFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFDLEtBQVk7d0JBQ3JELE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7cUJBQUEsQ0FDNUI7b0JBQ0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFDLEtBQVk7d0JBQ3hELE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7cUJBQUEsQ0FDNUI7b0JBQ0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsRUFBRSxHQUFBLENBQUM7aUJBQ3ZFLENBQUM7YUFDSCxDQUFDLENBQUM7WUFFSCxxQkFBTSxTQUFPLEdBQUcsSUFBSSxnQ0FBZ0MsRUFBRSxDQUFDO1lBQ3ZELE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQzFDLFNBQVMsRUFBRSxVQUFDLEtBQXlCO29CQUNuQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN2QjtnQkFDRCxRQUFRLEVBQUUsVUFBQyxLQUF5QjtvQkFDbEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDeEI7YUFDRixDQUFDLENBQUM7WUFFSCxxQkFBTSxjQUFjLEdBQThDO2dCQUNoRSxhQUFhO2dCQUNiLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxtQkFBbUI7Z0JBQ25CLGtCQUFrQjtnQkFDbEIsYUFBYTtnQkFDYixtQkFBbUI7Z0JBQ25CLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsb0JBQW9CO2dCQUNwQixjQUFjO2dCQUNkLGdCQUFnQjthQUNqQixDQUFDO1lBQ0YsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQzFCLElBQUksT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssV0FBVyxFQUFFO29CQUN0QyxtQkFBQyxTQUFjLEdBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN2QzthQUNGLENBQUMsQ0FBQztZQUVILHFCQUFNLGdCQUFnQixHQUVsQixJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDekUscUJBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQ25DO2dCQUNFO29CQUNFLE9BQU8sRUFBRSxnQ0FBZ0M7b0JBQ3pDLFFBQVEsRUFBRSxTQUFPO2lCQUNsQjthQUNGLEVBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FDckMsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FDbEQsZ0JBQWdCLEVBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQzVCLGFBQWEsQ0FDZCxDQUFDO1lBQ0YsSUFBSSxTQUFPLENBQUMsWUFBWSxFQUFFO2dCQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNoRTtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOzs7OztJQUdLLHNEQUFlOzs7O1FBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixxQkFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RSxxQkFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDcEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLGNBQWMsRUFDZCxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUMvQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUN0RCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBSyxlQUFlLENBQUMsR0FBRyxPQUFJLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsY0FBYyxFQUNkLE1BQU0sRUFDSCxlQUFlLENBQUMsSUFBSSxPQUFJLENBQzVCLENBQUM7U0FDSDs7Ozs7SUFHSyxrREFBVzs7OztRQUNqQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEVBQUUsR0FBQSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7U0FDMUI7OztnQkFsVEosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7aUJBQ3JDOzs7O2dCQTNDQyxnQkFBZ0I7Z0JBR2hCLFVBQVU7Z0JBV0gsMEJBQTBCO2dCQVBqQyx3QkFBd0I7Z0JBU2pCLFdBQVc7Z0JBUmxCLFNBQVM7OzsrQkF5Q1IsS0FBSztpQ0FLTCxLQUFLOzhCQUtMLEtBQUs7NkJBS0wsS0FBSzs0QkFLTCxLQUFLO29DQU1MLEtBQUs7bUNBTUwsS0FBSzs4QkFNTCxLQUFLO29DQUtMLEtBQUs7bUNBS0wsS0FBSzs2QkFLTCxLQUFLO3lCQU1MLEtBQUs7aUNBY0wsS0FBSzsrQkFLTCxNQUFNOzBCQUtOLE1BQU07eUJBS04sTUFBTTsrQkFLTixLQUFLOytCQUtMLEtBQUs7cUNBS0wsS0FBSztzQ0FLTCxLQUFLO2dDQW1FTCxZQUFZLFNBQUMsT0FBTzs7dUNBdE92Qjs7Ozs7OztBQ0FBOzs7O0lBa0JFLHdCQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtLQUFJOzs7OztJQUV2QyxvQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGdCQUFhLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hDO0tBQ0Y7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBWkMsVUFBVTs7OzJCQWNULEtBQUs7O3lCQWhCUjs7Ozs7OztBQ0FBLHFCQVdhLFlBQVksR0FBMkIsSUFBSSxjQUFjLENBQ3BFLG1DQUFtQyxDQUNwQyxDQUFDOzs7OztBQUVGLHdCQUNFLFdBQXVDO0lBRXZDLHFCQUFNLE9BQU8sR0FBK0IsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO0lBQzdFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sT0FBTyxDQUFDO0NBQ2hCOzs7Ozs7OztJQWFRLGlDQUFPOzs7O0lBQWQsVUFDRSxPQUFpRDtRQUFqRCx3QkFBQSxFQUFBLFlBQWlEO1FBRWpELE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSwwQkFBMEI7b0JBQ25DLFVBQVUsRUFBRSxjQUFjO29CQUMxQixJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3JCO2dCQUNELFdBQVc7YUFDWjtTQUNGLENBQUM7S0FDSDs7Z0JBN0JGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osNEJBQTRCO3dCQUM1QixrQ0FBa0M7d0JBQ2xDLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxjQUFjLENBQUM7b0JBQ3ZELGVBQWUsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2lCQUN0RDs7b0NBaENEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "../../../../positioning/dist/positioning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Positioning; });
/* unused harmony export positionElements */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    // get the availble placements of the target element in the viewport dependeing on the host element
    Positioning.prototype.getAvailablePlacements = function (hostElement, targetElement) {
        var availablePlacements = [];
        var hostElemClientRect = hostElement.getBoundingClientRect();
        var targetElemClientRect = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        var windowHeight = window.innerHeight || html.clientHeight;
        var windowWidth = window.innerWidth || html.clientWidth;
        var hostElemClientRectHorCenter = hostElemClientRect.left + hostElemClientRect.width / 2;
        var hostElemClientRectVerCenter = hostElemClientRect.top + hostElemClientRect.height / 2;
        // left: check if target width can be placed between host left and viewport start and also height of target is
        // inside viewport
        if (targetElemClientRect.width < hostElemClientRect.left) {
            // check for left only
            if (hostElemClientRectVerCenter > targetElemClientRect.height / 2 &&
                windowHeight - hostElemClientRectVerCenter > targetElemClientRect.height / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'left');
            }
            // check for left-top and left-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'left', availablePlacements);
        }
        // top: target height is less than host top
        if (targetElemClientRect.height < hostElemClientRect.top) {
            if (hostElemClientRectHorCenter > targetElemClientRect.width / 2 &&
                windowWidth - hostElemClientRectHorCenter > targetElemClientRect.width / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'top');
            }
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'top', availablePlacements);
        }
        // right: check if target width can be placed between host right and viewport end and also height of target is
        // inside viewport
        if (windowWidth - hostElemClientRect.right > targetElemClientRect.width) {
            // check for right only
            if (hostElemClientRectVerCenter > targetElemClientRect.height / 2 &&
                windowHeight - hostElemClientRectVerCenter > targetElemClientRect.height / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'right');
            }
            // check for right-top and right-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'right', availablePlacements);
        }
        // bottom: check if there is enough space between host bottom and viewport end for target height
        if (windowHeight - hostElemClientRect.bottom > targetElemClientRect.height) {
            if (hostElemClientRectHorCenter > targetElemClientRect.width / 2 &&
                windowWidth - hostElemClientRectHorCenter > targetElemClientRect.width / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'bottom');
            }
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'bottom', availablePlacements);
        }
        return availablePlacements;
    };
    /**
     * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
     * primaryplacement: left|right
     * availablePlacementArr: array in which available placemets to be set
     */
    Positioning.prototype.setSecondaryPlacementForLeftRight = function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if (targetElemClientRect.height <= hostElemClientRect.bottom) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-bottom');
        }
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.top >= targetElemClientRect.height) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-top');
        }
    };
    /**
     * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
     * primaryplacement: top|bottom
     * availablePlacementArr: array in which available placemets to be set
     */
    Positioning.prototype.setSecondaryPlacementForTopBottom = function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.left >= targetElemClientRect.width) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-left');
        }
        if (targetElemClientRect.width <= hostElemClientRect.right) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-right');
        }
    };
    return Positioning;
}());

var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var placementVals = Array.isArray(placement) ? placement : [placement];
    // replace auto placement with other placements
    var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
    if (hasAuto >= 0) {
        ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top',
            'left-bottom', 'right-top', 'right-bottom',
        ].forEach(function (obj) {
            if (placementVals.find(function (val) { return val.search('^' + obj) !== -1; }) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    var topVal = 0, leftVal = 0;
    var appliedPlacement;
    // get available placements
    var availablePlacements = positionService.getAvailablePlacements(hostElement, targetElement);
    var _loop_1 = function (item, index) {
        // check if passed placement is present in the available placement or otherwise apply the last placement in the
        // passed placement list
        if ((availablePlacements.find(function (val) { return val === item; }) != null) || (placementVals.length === index + 1)) {
            appliedPlacement = item;
            var pos = positionService.positionElements(hostElement, targetElement, item, appendToBody);
            topVal = pos.top;
            leftVal = pos.left;
            return "break";
        }
    };
    // iterate over all the passed placements
    for (var _i = 0, _a = toItemIndexes(placementVals); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b.item, index = _b.index;
        var state_1 = _loop_1(item, index);
        if (state_1 === "break")
            break;
    }
    targetElement.style.top = topVal + "px";
    targetElement.style.left = leftVal + "px";
    return appliedPlacement;
}
// function to get index and item of an array
function toItemIndexes(a) {
    return a.map(function (item, index) { return ({ item: item, index: index }); });
}
//# sourceMappingURL=positioning.js.map

/***/ })

});
//# sourceMappingURL=search-records.module.chunk.js.map