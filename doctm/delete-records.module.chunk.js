webpackJsonp(["delete-records.module"],{

/***/ "../../../../../src/app/header-two-layout/delete-records/delete-records-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteRecordsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delete_records_component__ = __webpack_require__("../../../../../src/app/header-two-layout/delete-records/delete-records.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__delete_records_component__["a" /* DeleteRecordsComponent */]
    }
];
var DeleteRecordsRoutingModule = /** @class */ (function () {
    function DeleteRecordsRoutingModule() {
    }
    DeleteRecordsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DeleteRecordsRoutingModule);
    return DeleteRecordsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/delete-records/delete-records.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cus-content-wrapper{\n\tpadding-top: 0px;\n\tpadding-bottom: 0px;\n}\n.hding > h3{\n\tmargin: 0px;\n\tpadding:15px 0px;\n\tbackground-color: #d9e0dd; \n}\n.hding  h5.btm{\n\tmargin: 0px;\n\tpadding:15px 0px;\n\tbackground-color: #d9e0dd; \n}\n.cstm-tbl{\n\twidth: 100%;\n}\n.clr-blue{\n    color: #00b0f0;\n}\n.clr-vlt{\n    color: #5c62af;\n}\n.tb-1{\n\tmargin-top:15px;\n}\n.tb-1 tr td{\n\tpadding:2px 8px;\n\tvertical-align: middle; \n}\n.cstm-tbl tr{\n\theight:40px;\n}\n.footer-cstm-an{\n\tposition: fixed;\n    float: left;\n    width: 100%;\n    bottom:0px;\n    background: #00b0f0;\n    color:#fff;\n    z-index: 99;\n    padding-top: 8px;\n}\n.mt-table h3{\n\tmargin-top: 0px;\n}\n.cstm-tr{\n\tbackground-color:#92d050;\n\tcolor:#fff;\n\ttext-align: center;\n}\n.cstm-tr-2{\n\tbackground-color:#c5d8f1;\n}\n.cstm-tr-2 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-2 td:last-child {\n border-right: none;\n}\n.cstm-tr-3{\n\tborder-bottom:1px solid #bbb; \n}\n.cstm-tr-3 td{\n\tborder-right:1px solid #bbb; \n}\n.cstm-tr-3 td:last-child {\n border-right: none;\n}\n.color-red {\n    color: #ff0000;\n    -webkit-transform: translateY(-8px);\n            transform: translateY(-8px);\n}\n.cstm-tr-4{\n\tbackground-color: #f2dada;\n}\n.cstm-mg{\n\tmargin-top: 5px;\n}\n.btn-go{\n\tbackground-color: transparent;\n    border: 1px solid #002160;\n    margin-bottom: 5px;\n    min-width: 62%;\n}\n.btn-go:hover{\n    -webkit-transition: 300ms;\n    transition: 300ms;\n    background: #98C74F;\n    border-color: #98C74F;\n    color: #fff;\n}\n.li-cstm a{\n\ttext-align: center!important;\n    background: #000!important;\n    color: #fff!important;\n    font-size: 16px!important;\n    font-weight: inherit!important;\n    padding: 6px!important;\n}\n.cus-sidebar{\n\theight: inherit!important;\n}\n/*karam @ 2019*/\n.side-bar-cstm{\n\tz-index: 99;\n}\n.res-tab-2{\n\tmax-height: 225px;\n}\n.cstm-ul-new li{\n\twidth:170px;\n}\n.cstm-ul-new li a{\n\tbackground-color:transparent;\n\tcolor:#000;\n\tpadding:10px;\n\tcursor: pointer;\n\tborder-radius: 0px;\n\tborder-bottom: 2px solid transparent; \n\ttext-align: center;\n}\n.cstm-ul-new li.active a{\n\tbackground-color: #e0e0e0;\n    color: #000;\n\tborder-bottom: 2px solid #00b0f0;\n}\n.tab-new{\n\tmin-height: 450px;\n    max-height: 450px;\n    padding: 0px 8px;\n    border-left: 1px solid #dcdcdc;\n    border-right: 1px solid #dcdcdc;\n    overflow-x: hidden;\n}\n.clr-blue{\n    color: #00b0f0;\n    font-weight: bold;\n}\n/*karam@30-jan-2019*/\n/*.tab-new-cstm tr td{\n\tfont-size: 10px;\n}*/\n.brder-cstm{\n\tpadding-bottom: 1px;\n    margin-bottom: 6px;\n    border-bottom: 1px solid #a7a7a7;\n    position: relative;\n}\n.brder-cstm::after{\n\tcontent: \"\";\n    position: absolute;\n    height: 6px;\n    width: 12px;\n    background-color: #ffffff;\n    top: 41px;\n    right: -3px;\n\t \n}\n.cus-sidebar ul{\n\tborder:1px solid #a7a7a7;\n}\n.mg-0{\n\tmargin-top: 0px;\n}\n.mg-bt{\n\tmargin-bottom:2px; \n}\n.txt-thm{\n\tcolor: rgb(0,32,96);\n}\n.txt-thm-1{\n\tcolor: rgb(0,112,192);\n}\n.foot-2{\n\tborder-bottom:1px solid #a7a7a7;\n\tword-spacing: 14px;\n}\n.hdr-2{\n\tpadding-bottom: 8px;\n\tborder-bottom:1px solid #a7a7a7;\n}\n.brdr-lft{\n\tmargin-left:-5px;\n\tborder-left:1px solid #a7a7a7; \n}\n.evn{\n\tbackground-color:#eff3ef;\n}\n.odd{\n\tbackground-color:#e3e3e3;\n}\n.new-ul-1 li a{\n\theight: 55px;\n\tline-height: 3;\n}\n.new-table-24 tr td{\n\tborder-right:1px solid #fff;\n}\n.new-table-24 tr:last-child{\n\tborder-right:none;\n}\nli.clz a{\n\tline-height:1.5!important;\n}\ntr.tbl-blk-hd{\n\tbackground:rgb(0,112,192);\n\tcolor:#fff;\n}\ntr.tbl-blk-hd td{\n\tborder-right:1px solid #fff;\n}\ntr.tbl-blk-hd:last-child{\n\tborder-right: none;\n}\n.tbl-hd-2{\n\tbackground-color: #000;\n\tcolor: #fff;\n\tborder-bottom: 1px solid #fff;\n}\n.new-table-24 tr td{\n\tpadding: 5.5px 15px!important;\n}\n/*.tbl-blk-hd{\n\theight: 45px;\n}\n.tbl-blk-hd td{\n\tpadding: 12px!important;\n}*/\n.my-table-all{\n\tmin-height:450px;\n\tmax-height:450px;\n\toverflow-y: scroll; \n}\n.icons-social i{\n\tcursor: pointer;\n}\n/*.mg-top{\n\tmargin-top:5em;\n}\n*/\n.cstm-delete{\n\tpadding: 13px;\n    padding-left: 67px;\n    padding-right: 67px;\n}\n.wdth{\n\twidth: 14%;\n\tmargin-left: 41em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/delete-records/delete-records.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n\t<img src=\"./assets/imgs/load.gif\" />\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n            <h3><b>1. Delete Records</b></h3>\n            <br>\n        </div>\n        <div class=\"col-lg-8 col-lg-offset-2 text-center\">\n            <div class=\"row\">\n                <div class=\"col-lg-3\">\n                    <h5><b>Select Duration</b></h5>\n                </div>\n                <div class=\"col-lg-9\">\n                     <select class=\"form-control\" id=\"sel1\" [(ngModel)] = \"deleteOption\" (change)=\"deleteOpt($event)\">\n                        <option selected=\"\" \n                        value=\"Select One\" disabled=\"\">Select One</option>\n                        <option value=\"before\">Before</option>\n                        <option value=\"after\">After</option>\n                        <option value=\"for\">For</option>\n                        <option value=\"all\">From-To</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-8 col-lg-offset-2 text-center\">  <br>\n            <div class=\"row\" *ngIf = \"checkDateValue == 'before'\">\n                <div class=\"col-lg-3\">\n                    <h5 class=\"pd-left\"><b>Before</b></h5>\n                </div>\n                <div class=\"col-lg-9\">\n\n                    <div class=\"cstm-mg\">\n                        <angular2-date-picker [(ngModel)]=\"before\" [settings]=\"settings\"></angular2-date-picker>\n                    </div>\n\n                    <button class=\"btn btn-danger\" (click) = \"askOtpbefore(delete)\" style=\"margin-top:15px;\"> Delete</button>\n                    <!-- <button class=\"btn btn-danger\" (click) = \"otpBeforeDelete()\" style=\"margin-top:15px;\"> Delete</button> -->\n                </div>\n               \n            </div>\n        </div>\n        <div class=\"col-lg-8 col-lg-offset-2 text-center\">\n            <div class=\"row\" *ngIf = \"checkDateValue == 'after'\">\n                <div class=\"col-lg-3 text-center\">\n                    <h5 class=\"pd-left\"><b>After</b></h5>\n                </div>\n                <div class=\"col-lg-9\">\n                    <div class=\"cstm-mg\">\n                        <angular2-date-picker [(ngModel)]=\"after\" [settings]=\"settings\"></angular2-date-picker>\n                    </div>\n                    <button class=\"btn btn-danger\" (click) = \"askOtpafter(delete)\" style=\"margin-top:15px;\"> Delete</button>\n                    <!-- <button class=\"btn btn-danger\" (click) = \"otpAfterDelete()\" style=\"margin-top:15px;\"> Delete</button> -->\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-8 col-lg-offset-2 text-center\">  <br>\n            <div class=\"row\" *ngIf = \"checkDateValue == 'for'\">\n                <div class=\"col-lg-3\">\n                    <h5 class=\"pd-left\"><b>For</b></h5>\n                </div>\n                <div class=\"col-lg-9\">\n\n                    <div class=\"cstm-mg\">\n                        <angular2-date-picker [(ngModel)]=\"onlyToday\" [settings]=\"settings\"></angular2-date-picker>\n                    </div>\n\n                    <button class=\"btn btn-danger\" (click) = \"askOtponlyToday(delete)\" style=\"margin-top:15px;\"> Delete</button>\n                    <!-- <button class=\"btn btn-danger\" (click) = \"forTodayData()\" style=\"margin-top:15px;\"> Delete</button> -->\n                </div>\n               \n            </div>\n        </div>\n        <div class=\"col-lg-8 col-lg-offset-2 text-center\">\n            <section style=\"\">\n                <div class=\"\" *ngIf = \"checkDateValue == 'all'\">\n                    <div class=\"row mg-top\">\n                        <div class=\"col-lg-6  col-md-6\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3\">\n                                    <h4 class=\"pd-left\"><b>From</b></h4>\n                                </div>\n                                <div class=\"col-lg-9\">\n                                    <div class=\"cstm-mg\">\n                                        <angular2-date-picker [(ngModel)]=\"fromDate1\" [settings]=\"settings\"></angular2-date-picker>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-6\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-3\">\n                                    <h4 class=\"pd-left\"><b>To</b></h4>\n                                </div>\n                                <div class=\"col-lg-9\">\n                                    <div class=\"cstm-mg\">\n                                        <angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-12 text-center\">\n                            <br>\n                            <button (click) = \"askOtptoDate1(delete)\"  class=\"btn btn-danger\">Delete All</button>\n                            <!-- <button (click) = \"generateOtp()\"  class=\"btn btn-danger\">Delete All</button> -->\n                        </div>\n                    </div> \n                </div>\n            </section>\n        </div>\n        \n    </div>\n</div>\n<div class=\"text-center\" style=\"position: fixed;bottom:5em;width:100%;\">\n           <h3> <b>2. Delete Account </b></h3>\n            <button class=\"btn btn-danger\" (click) = \"askOtpDeleteDoc()\">Delete my Account</button>\n            <!-- <button class=\"btn btn-danger\" (click) = \"otpDeleteDoc()\">Delete my Account</button> -->\n        </div>\n<div class=\"modal fade cus-preview\" id=\"delete-data\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"text-right\">\n                    <h3 style=\"margin:0px;\"><span data-dismiss=\"modal\" aria-label=\"Close\"  style=\"cursor: pointer;\">&times;</span></h3>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                 <div class=\"row\" style=\"padding: 10px;\">\n                    <div class=\"col-lg-3 text-right\">\n                        <h4><b>Enter OTP</b></h4>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <!-- <input type=\"\" name=\"\" class=\"form-control\" > -->\n                    \n                    <input id=\"field1\" type=\"text\"  class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"varifyPassword\" placeholder =\"Enter OTP\"/>\n\n                    </div>\n                    <div class=\"col-lg-3 text-right\">\n                        \n                        <button  (click)=\"deleteAll()\" class=\"btn btn-sm btn-custom\">Submit</button>\n                    </div>\n                 </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade cus-preview\" id=\"delete-before\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"text-right\">\n                    <h3 style=\"margin:0px;\"><span data-dismiss=\"modal\" aria-label=\"Close\"  style=\"cursor: pointer;\">&times;</span></h3>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                 <div class=\"row\" style=\"padding: 10px;\">\n                    <div class=\"col-lg-3 text-right\">\n                        <h4><b>Enter OTP</b></h4>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <!-- <input type=\"\" name=\"\" class=\"form-control\" > -->\n                    \n                    <input id=\"field1\" type=\"text\"  class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"beforeVarifyPassword\" placeholder =\"Enter OTP\"/>\n\n                    </div>\n                    <div class=\"col-lg-3 text-right\">\n                        \n                        <button  (click)=\"deleteBefore()\" class=\"btn btn-sm btn-custom\">Submit</button>\n                    </div>\n                 </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade cus-preview\" id=\"delete-after\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"text-right\">\n                    <h3 style=\"margin:0px;\"><span data-dismiss=\"modal\" aria-label=\"Close\"  style=\"cursor: pointer;\">&times;</span></h3>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                 <div class=\"row\" style=\"padding: 10px;\">\n                    <div class=\"col-lg-3 text-right\">\n                        <h4><b>Enter OTP</b></h4>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <!-- <input type=\"\" name=\"\" class=\"form-control\" > -->\n                    \n                    <input id=\"field1\" type=\"text\"  class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"afterVarifyPassword\" placeholder =\"Enter OTP\"/>\n\n                    </div>\n                    <div class=\"col-lg-3 text-right\">\n                        \n                        <button  (click)=\"deleteAfter()\" class=\"btn btn-sm btn-custom\">Submit</button>\n                    </div>\n                 </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"delete-all\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"text-right\">\n                    <h3 style=\"margin:0px;\"><span data-dismiss=\"modal\" aria-label=\"Close\"  style=\"cursor: pointer;\">&times;</span></h3>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                 <div class=\"row\" style=\"padding: 10px;\">\n                    <div class=\"col-lg-3 text-right\">\n                        <h4><b>Enter OTP</b></h4>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <!-- <input type=\"\" name=\"\" class=\"form-control\" > -->\n                    \n                    <input id=\"field1\" type=\"text\"  class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"allVarifyPassword\" placeholder =\"Enter OTP\"/>\n\n                    </div>\n                    <div class=\"col-lg-3 text-right\">\n                        \n                        <button  (click)=\"forTodayData()\" class=\"btn btn-sm btn-custom\">Submit</button>\n                    </div>\n                 </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"delete-doc-account\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"text-right\">\n                    <h3 style=\"margin:0px;\"><span data-dismiss=\"modal\" aria-label=\"Close\"  style=\"cursor: pointer;\">&times;</span></h3>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                 <div class=\"row\" style=\"padding: 10px;\">\n                    <div class=\"col-lg-3 text-right\">\n                        <h4><b>Enter OTP</b></h4>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <!-- <input type=\"\" name=\"\" class=\"form-control\" > -->\n                    \n                    <input id=\"field1\" type=\"text\"  class=\"form-control txtfield\" name=\"\" required=\"\" pattern=\"[0-9.]+\" maxLength=\"10\" [(ngModel)]=\"deleteDocAcc\" placeholder =\"Enter OTP\"/>\n\n                    </div>\n                    <div class=\"col-lg-3 text-right\">\n                        \n                        <button  (click)=\"deleteDoctorAccount()\" class=\"btn btn-sm btn-custom\">Submit</button>\n                    </div>\n                 </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- <div class=\"analytics-sec\">\n\t<div class=\"ipd-deatil-sec\">\n\t    <div class=\"ipd-body\">\n\t      \t<div class=\"cus-sidebar-wrapper side-bar-cstm\">\n\t      \t\t<div class=\"cus-sidebar\">\n\t      \t\t\t<ul> \n\t      \t\t\t\t<li>\n\t      \t\t\t\t\t\n\t      \t\t\t\t</li>\n\t      \t\t\t\t<li>\n\t      \t\t\t\t\t<div class=\"\">\n\t      \t\t\t\t\t\t<div class=\"col-lg-3\">\n\t      \t\t\t\t\t\t\t<h4 class=\"pd-left\"><b>To</b></h4>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t<div class=\"col-lg-9\">\n\t      \t\t\t\t\t\t\t<div class=\"cstm-mg\">\n\t      \t\t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate1\" [settings]=\"settings\"></angular2-date-picker>\n\t      \t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t</div>\n\t      \t\t\t\t</li>\n\t      \t\t\t\t<li class=\"text-right brder-cstm\">\n    \t\t\t\t\t\t<div class=\"col-lg-12 text-center\">\n\t      \t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"go()\">Go</button>\n\t      \t\t\t\t\t</div>\n\t      \t\t\t\t</li>\n\t      \t\t\t\t<li class=\"li-cstm\"> <a href=\"javascript:void(0);\"> For Past</a> </li>\n\t      \t\t\t\t\n\t      \t\t\t\t<li class=\"{{getClass(1)}}\" (click)=\"activatetab(1)\"> <a href=\"javascript:void(0);\"> 1 Week &nbsp;<small *ngIf=\"activatedtab==1\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n            <li class=\"{{getClass(2)}}\" (click)=\"activatetab(2)\"> <a href=\"javascript:void(0);\"> 2 Weeks &nbsp;<small *ngIf=\"activatedtab==2\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small>  </a> </li>\n            <li class=\"{{getClass(3)}}\" (click)=\"activatetab(3)\"> <a href=\"javascript:void(0);\"> 1 Month &nbsp;<small *ngIf=\"activatedtab==3\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small> </a> </li>\n            <li class=\"{{getClass(4)}}\" (click)=\"activatetab(4)\"> <a href=\"javascript:void(0);\"> 3 Month &nbsp;<small *ngIf=\"activatedtab==4\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n            <li class=\"{{getClass(5)}}\" (click)=\"activatetab(5)\"> <a href=\"javascript:void(0);\"> 6 Month &nbsp;<small *ngIf=\"activatedtab==5\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n            <li class=\"{{getClass(6)}}\" (click)=\"activatetab(6)\"> <a href=\"javascript:void(0);\"> 1 Year &nbsp;<small *ngIf=\"activatedtab==6\">({{fromDate | date: 'dd/LL/yy'}} - {{toDate | date: 'dd/LL/yy'}})</small></a> </li>\n            <li class=\"{{getClass(7)}}\" (click)=\"activatetab(7)\"> <a href=\"javascript:void(0);\"> All </a> </li>\n\t      \t\t\t</ul>\n\t      \t\t</div>\n\t      \t</div>\n\t      \t<div class=\"cus-content-wrapper\">\n\t      \t\t<div class=\"cus-content\">\n\t      \t\t\t<div class=\"row brdr-lft\">\n\t      \t\t\t\t<div class=\"col-lg-12\">\n\t      \t\t\t\t\t<div class=\"row\">\n\t      \t\t\t\t\t\t<div class=\"col-lg-1\">\n\t      \t\t\t\t\t\t\t<h6><b>Search by</b></h6>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t<div class=\"col-lg-10\">\n\t      \t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"usr\" [(ngModel)] = \"searchInput\" placeholder=\"Name, Phone number\" (keyup)=\"onKey($event)\">\n\t\t\t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t<div class=\"col-lg-1\">\n\t      \t\t\t\t\t\t\t<button class=\"btn btn-go\" (click)=\"searchByName()\">Search</button>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t</div>\n\t      \t\t\t\t</div>\n\t      \t\t\t\t<div class=\"col-lg-12 text-center\">\n  \t\t\t\t\t\t\t<div class=\"cstm-pad\">\n  \t\t\t\t\t\t\t\t<div class=\"table-responsive\">\n  \t\t\t\t\t\t\t\t\t<div class=\"my-table-all\">\n  \t\t\t\t\t\t\t\t\t\t<table class=\"table new-table-24\" >\n  \t\t\t\t\t\t\t\t\t\t\t<tbody>\n  \t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"tbl-blk-hd\">\n      \t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\" width=\"70px\"><h5>S.NO</h5></td>\n      \t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><h5>DATE</h5></td>\n      \t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><h5>PATIENT NAME</h5></td>\n      \t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><h5>PHONE NUMBER</h5></td>\n      \t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><h5>DOCTOR NAME</h5></td>\n      \t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\"><h5>ACTION</h5></td>\n  \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n  \t\t\t\t\t\t\t\t\t\t\t\t\n  \t\t\t\t\t\t\t\t\t\t\t\t<tr class=\"odd\" *ngFor = \"let list of listOfPatient; let i = index\">\n  \t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-left\">{{i+1}}</td>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{list.createdAt | date: 'dd/MM/yyyy'}}</td>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{list.registration.pateintName}} </td>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">{{list.registration.pateintPhone}}</td>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">Dr. {{getDocName(list.doctor_id)}}</td>\n  \t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-center icons-social\"> \n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<span (click)=\"openPrescriptionPreview(list)\"><i class=\"fa fa-eye\"></i></span>&nbsp;&nbsp;&nbsp;\n  \t\t\t\t\t\t\t\t\t\t\t\t\t\t<span (click) = \"deleteRecord(list.id)\"><i class=\"fa fa-trash\"></i></span>&nbsp;&nbsp;&nbsp;\n  \t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n  \t\t\t\t\t\t\t\t\t\t\t\t</tr>\n  \t\t\t\t\t\t\t\t\t\t\t</tbody>\n  \t\t\t\t\t\t\t\t\t\t</table>\n  \t\t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t\t</div>\n  \t\t\t\t\t\t\t</div>\n\t      \t\t\t\t</div>\n\t      \t\t\t</div>\n\t      \t\t</div>\n     \t\t</div>\n\t  \t</div>\n\t</div>\n</div>\n\n\n<div class=\"modal fade cus-preview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div>\n                    <h4 class=\"modal-title\"> Preview </h4>\n                </div>\n                <div class=\"text-center\">\n                    <button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n                </div>\n                <div>\n                    <button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                </div>\n            </div>\n            <div class=\"modal-body\" id=\"previewModalPdf\">\n                <div class=\"row\">\n                    <div class=\"presc-modal-body\">\n                        <div class=\"pad-view\">\n                            <div class=\"padview-header\">\n                               <div class=\"pad-view-flx col-lg-4\" style=\"float:left;width:49%;\">\n                                    <div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n                                        <h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData.first_name}} </h1>\n                                    </div>\n                                    <div class=\"form-group qual\">\n                                        <p class=\"color-purple\">\n                                            <span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData.specialization}})</span><br>\n                                            <span *ngIf=\"checkOptionOfPad('Qualifications')\">\n                                                <span *ngFor=\"let data of doctorData.qualification;let i = index\">\n                                                   {{data.value}} <span *ngIf=\"i!=doctorData.qualification.length-1\">,</span>\n                                                </span>\n                                            </span>\n                                        </p>\n                                        <p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration: <span class=\"color-purple\"> {{doctorData.registration_no}} </span> </p>\n                                        <p *ngIf=\"checkOptionOfPad('Professional_affiliation')\" style=\"width:200px;word-break: break-all;\">\n                                            <span class=\"color-purple\" *ngFor=\"let pa of doctorData.professional_affiliation;let i=index\">\n                                            {{pa.value}}<span *ngIf=\"i!=doctorData.professional_affiliation.length-1\">,</span>\n                                            </span>\n                                        </p>\n                                    </div>\n                                </div>\n\n                                <div class=\"pad-view-flx col-lg-6\" style=\"float:left;width:49%;\">\n                                    <ul class=\"clinic-detail\">\n                                        <li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n                                            <h1 id=\"translated_clinicName\"> {{doctorsDetails.clinic_details.clinic_name}} </h1>\n                                        </li>\n                                        <li *ngIf=\"doctorsDetails.clinic_details.address\">{{doctorsDetails.clinic_details.address}}, {{doctorsDetails.clinic_details.area}}, {{doctorsDetails.clinic_details.city}}, {{doctorsDetails.clinic_details.state}}</li>\n                                        <li class=\"li-cstm\">\n                                        <div class=\"row\" *ngIf=\"doctorsDetails.clinic_details.mobile || doctorsDetails.clinic_details.landline\">\n                                            <div class=\"col-lg-12\">\n                                                <h4 class=\"for-apt\"> For appointments </h4>\n                                                <p *ngIf=\"doctorsDetails.clinic_details.landline\"> Tel: {{doctorsDetails.clinic_details.std_code}}-{{doctorsDetails.clinic_details.landline}}</p>\n                                                <p> Mb: +91-{{doctorsDetails.clinic_details.mobile}} </p>\n                                            </div>\n                                        </div>                                           \n                                        </li>\n                                    </ul>\n                                </div>\n\n                            </div>\n                            <p class=\"text-center\">\n                                <label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n                            </p>\n                            <div class=\"padview-body\">\n                                <div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n                                    <div class=\"emergency-wrap\">\n                                        <div class=\"form-group emrgency-consult\" *ngIf=\"dispensedPatient.type=='Emergency'\">\n                                            <p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n                                        </div>\n                                        <div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n                                            <h5 class=\" color-blue\"> Schedule: </h5>\n                                            <div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n                                                <span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n                                                    <span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n                                                        [\n                                                            <span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n                                                            <span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n                                                            <span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n                                                            <span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n                                                            <span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n                                                            <span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n                                                            <span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n                                                            <span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n                                                        ]\n                                                    </span>\n                                                <br>\n                                                </span>\n                                            </div>\n                                            <div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n                                                <span><strong> {{shift.day}}: </strong> Closed \n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n                                            <h5 class=\"color-blue\"> Available Treatments: </h5>\n                                            <ul style=\"padding-left:15px!important;\">\n                                                <li *ngFor=\"let treat of doctorData.expertise\">{{treat.value}}</li>\n                                            </ul>\n                                        </div>\n                                        <div *ngIf=\"doctorData.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n                                            <h5 class=\"color-blue\"> Available Services: </h5>\n                                            <ul style=\"padding-left:15px!important;\">\n                                                <li *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy\">Pharmacy</li>\n                                                <li *ngIf=\"doctorData.clinic_services.Clinic_IPD\">IPD</li>\n                                                <li *ngFor=\"let cs of doctorData.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n                                                <li *ngFor=\"let cs of doctorData.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                   \n                                </div>\n                                <div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n                                    <div class=\"padview-bodyright\">\n                                        <ul class=\"padview-body-header\">\n                                            <li>\n                                                <div class=\"text-underline\"> Prescription ID </div>\n                                                <div class=\"strong\">{{prescription_id}}</div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Name </div>\n                                                <div class=\"strong\"> {{dispensedPatient.pateintName}} </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Age/Sex </div>\n                                                <div class=\"strong\"> {{dispensedPatient.age}} {{dispensedPatient.gender}} </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Weight </div>\n                                                <div class=\"strong\" *ngIf=\"dispensedPatient.weight\"> {{dispensedPatient.weight}} Kg </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Height </div>\n                                                <div class=\"strong\" *ngIf=\"dispensedPatient.height\"> {{dispensedPatient.height}} cm </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"strong\"> {{day}} {{month}} , {{year}}</div>\n                                            </li>\n                                        </ul>\n                                        <ul class=\"padview-patient\">\n                                            <li class=\"img-patient\">\n                                                <img src=\"{{pateintPicPath}}{{dispensedPatient.pateintPic}}\" class=\"img-responsive\" *ngIf=\"dispensedPatient.pateintPic\"/>\n                                                <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!dispensedPatient.pateintPic\"/>\n                                            </li>\n                                            <li *ngIf=\"preConditionComplete==true && finalPreConditions.length>0\">\n                                                <div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n                                                <ul class=\"pat-type\">\n                                                    <li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n                                                </ul>\n                                            </li>\n                                            <li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected.length>0\">\n                                                <div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n                                                <ul class=\"pat-type\">\n                                                    <li  *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n                                                    </li>\n                                                </ul>\n                                            </li>\n                                            <li *ngIf=\"allergyComplete==true && finalAllergy.length>0\">\n                                                <div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n                                                <ul class=\" pat-type\" style=\"padding-left:15px\">\n                                                    <li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n                                                </ul>\n                                            </li>\n                                        </ul>\n                                        <div class=\"middle-body\">\n                                            <div class=\"\">\n                                                <div class=\"number-div\" *ngIf=\"findingsComplete==true && findingsSelected.length>0\">\n                                                    <div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n                                                    <ul class=\"numberol\">\n                                                        <li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n                                                    </ul>\n                                                </div>\n                                                <div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected.length>0\">\n                                                    <div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n                                                    <ul class=\"numberol\">\n                                                        <li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n                                                    </ul>\n                                                </div>\n                                                <div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected.length>0\">\n                                                    <div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n                                                    <ul class=\"numberol\">\n                                                        <li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                            <div class=\"\" *ngIf=\"medicationComplete==true\">\n                                                <div class=\"padview-medic\" id=\"translated_medication\">\n                                                    <div class=\"pat-heading\"><span> Medicines</span> </div>\n                                                    <ol style=\"padding-left:10px\">\n                                                        <li *ngFor=\"let data of tempMedicationArray\">\n                                                            <span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n                                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                            </span>\n                                                            </span>\n                                                            <span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n                                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                            </span>\n                                                            </span>\n                                                            <span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n                                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n                                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                            </span>\n                                                            </span>\n                                                            <span *ngIf=\"data.name=='Drops'\">\n                                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                            </span>\n                                                            </span>\n                                                        </li>\n                                                    </ol>\n                                                </div>\n                                                <div class=\"number-div vac-div\">\n                                                        <div *ngIf=\"vaccinationComplete==true\">\n                                                            <div class=\"pat-heading\" id=\"translated_VaccinationHeading\"> <span> Vaccination</span> </div>\n                                                            <ul *ngIf=\"currentVaccinationComplete == true\" class=\"medicationol\">\n                                                                <div><b>Current</b></div>\n                                                                <li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n                                                            </ul>\n                                                            <ul *ngIf=\"dueVaccinationComplete == true\" class=\"medicationol\">\n                                                                <span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}})\n                                                                </span>\n                                                                <li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                                                            </ul>\n                                                        </div>\n                                                        <div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected.length>0\" id=\"translated_instHeading\">\n                                                            <div class=\"pat-heading\"> <span> Instructions</span> </div>\n                                                            <ul class=\"numberol\" start=\"1\">\n                                                                <li *ngFor=\"let data of instructionsSelected\">{{data}}</li>\n                                                            </ul>\n                                                        </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"third-body\">\n                                            <div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray.length\">\n                                                <div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n                                                <ol class=\"numberol pl10\">\n                                                    <li *ngFor=\"let data of investigationArray\">\n                                                        <span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                                                            <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                                                                <span *ngIf=\"i!=data.values.length-1\">\\</span>\n                                                        </span>\n                                                        </span>\n                                                        <span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                                                            <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                                                        </span>\n                                                    </li>\n                                                </ol>\n                                            </div>\n                                            <div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n                                                <div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of treatmentArray;let i =index\">\n                                                        <span *ngIf=\"data.name=='Lifestyle Changes'\">\n                                                            {{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle.length-1\">\\</span></span>\n                                                        </span>\n                                                        <span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n                                                            {{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                                        </span>\n                                                        <span *ngIf=\"data.name=='Plaster'\">\n                                                            <span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n                                                        </span>\n                                                        <span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n                                                            <span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                                        </span>\n                                                        <span>\n                                                            {{data.value}}\n                                                        </span>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                        <div class=\"note-box\">\n                                            <div class=\"note-innerbox\">\n                                                <div class=\"note-innerdiv\">\n                                                    <div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray.length>0\">\n                                                        <div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n                                                        <ul class=\"numberol\">\n                                                            <li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                                                        </ul>\n                                                    </div>\n                                                    <div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n                                                        <div class=\"pat-heading\"> <span> Referred To</span> </div>\n                                                        <p> {{referDetail.doctor_name}} </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"\" *ngIf=\"eyePresComplete==true\">\n                                                <div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n                                                <div class=\"table-responsive\">\n                                                    <table class=\"table table-bordered table-striped cstm-table\">\n                                                        <thead>\n                                                            <tr>\n                                                                <th> Eye </th>\n                                                                <th> Sphere </th>\n                                                                <th> Cylinder </th>\n                                                                <th> Axis </th>\n                                                                <th> Add </th>\n                                                                <th> PD (mm) </th>\n                                                            </tr>\n                                                        </thead>\n                                                        <tbody>\n                                                            <tr>\n                                                                <td> Right (OD): </td>\n                                                                <td> {{finalRightOD.sphere}} </td>\n                                                                <td> {{finalRightOD.cylinder}} </td>\n                                                                <td> {{finalRightOD.axis}} </td>\n                                                                <td> {{finalRightOD.add}} </td>\n                                                                <td> {{finalRightOD.pd}} </td>\n                                                            </tr>\n                                                            <tr>\n                                                                <td> Left (OS): </td>\n                                                                <td> {{finalLeftOD.sphere}} </td>\n                                                                <td> {{finalLeftOD.cylinder}} </td>\n                                                                <td> {{finalLeftOD.axis}} </td>\n                                                                <td> {{finalLeftOD.add}} </td>\n                                                                <td> {{finalLeftOD.pd}} </td>\n                                                            </tr>\n                                                        </tbody>\n                                                    </table>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"third-body\">\n                                            <div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                                                <div class=\"pat-heading\"> <span> Follow-Up</span></div>\n                                                <p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                                                <p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"forth-body\">\n                                            <div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                                                <div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n                                            </div>\n                                            <div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n                                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                    <div class=\"padview-powered\">\n                                        <div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                                        <div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com</div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n                                    <div class=\"legal\">\n                                        <h3>{{getFooterText()}}</h3>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade cus-preview\" id=\"previewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content show-default\">\n            <div class=\"modal-header\">\n                <div>\n                    <h4 class=\"modal-title\"> Preview </h4>\n                </div>\n                <div class=\"text-center\">\n                    <button type=\"button\" class=\"btn-sm btn btn-custom\" (click)=\"createPdf()\"> Print </button>\n                </div>\n                <div>\n                    <button type=\"button\" class=\"pull-right btn-sm btn btn-custom btn-outline\" data-dismiss=\"modal\" aria-label=\"Close\"> Close </button>\n                </div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"presc-modal-body\">\n                        <div class=\"pad-view\">\n                            <div class=\"padview-header\">\n                                <div class=\"pad-view-flx col-lg-4\">\n                                    <div class=\"form-group doctor-name\" *ngIf=\"checkOptionOfPad('Doctor_name')\">\n                                        <h1 id=\"translated_doctorName\"> Dr<span class=\"notranslate\">.</span> {{doctorData.first_name}} </h1>\n                                    </div>\n                                    <div class=\"form-group qual\">\n                                        <p class=\"color-purple\">\n                                            <span *ngIf=\"checkOptionOfPad('Specialization')\">({{doctorData.specialization}})</span><br>\n                                            <span *ngIf=\"checkOptionOfPad('Qualifications')\">\n                                                <span *ngFor=\"let data of doctorData.qualification;let i = index\">\n                                               {{data.value}} <span *ngIf=\"i!=doctorData.qualification.length-1\">,</span>\n                                                </span>\n                                            </span>\n                                        </p>\n                                        <p *ngIf=\"checkOptionOfPad('registration_no')\"> Registration: <span class=\"color-purple\"> {{doctorData.registration_no}} </span> </p>\n                                        <p *ngIf=\"checkOptionOfPad('Professional_affiliation')\">\n                                            <span class=\"color-purple\" *ngFor=\"let pa of doctorData.professional_affiliation;let i=index\">\n                                            {{pa.value}}<span *ngIf=\"i!=doctorData.professional_affiliation.length-1\">,</span>\n                                            </span>\n                                        </p>\n                                    </div>\n                                </div>\n\n                                <div class=\"pad-view-flx col-lg-8\">\n                                    <ul class=\"clinic-detail\">\n                                        <li class=\"clinic-name\" *ngIf=\"checkOptionOfPad('Clinic_name')\">\n                                            <h1 id=\"translated_clinicName\"> {{doctorsDetails.clinic_details.clinic_name}} </h1>\n                                        </li>\n                                        <li *ngIf=\"doctorsDetails.clinic_details.address\">{{doctorsDetails.clinic_details.address}}, {{doctorsDetails.clinic_details.area}}, {{doctorsDetails.clinic_details.city}}, {{doctorsDetails.clinic_details.state}}</li>\n                                        <li class=\"li-cstm\">\n                                        <div class=\"row\" *ngIf=\"doctorsDetails.clinic_details.landlin || doctorsDetails.clinic_details.mobile\">\n                                            <div class=\"col-lg-12\">\n                                                <h4 class=\"for-apt\"> For appointments </h4>\n                                                <p *ngIf=\"doctorsDetails.clinic_details.landline\"> Tel: {{doctorsDetails.clinic_details.std_code}}-{{doctorsDetails.clinic_details.landline}}</p>\n                                                <p> Mb: +91-{{doctorsDetails.clinic_details.mobile}} </p>\n                                            </div>\n                                        </div>\n                                           \n                                        </li>\n                                    </ul>\n                                </div>\n\n                            </div>\n                            <p class=\"text-center\" >\n                                <label id=\"translated_appointmentText\"> {{getHeaderText()}} </label>\n                            </p>\n                            <div class=\"padview-body\">\n                                <div class=\"col-md-2 col-sm-2 col-xs- p-0\">\n                                    <div class=\"emergency-wrap\">\n                                        <div class=\"form-group emrgency-consult\" *ngIf=\"dispensedPatient.type=='Emergency'\">\n                                            <p class=\"small\" id=\"translated_emergencyText\"><i> Emergency Consultation </i> </p>\n                                        </div>\n                                        <div class=\"form-group schdl\" *ngIf=\"checkOptionOfPad('Clinic_schedule')\">\n                                            <h5 class=\"color-blue\"> Schedule: </h5>\n                                            <div class=\"form-group span-txt\" *ngFor=\"let shift of allShifts\"> \n                                                <span><strong style=\"display:block; width:110px;\"> {{shift.day}}: </strong>\n                                                    <span class=\"mrgin-r\" *ngFor=\"let time of shift.shifts\"> \n                                                        [\n                                                            <span *ngIf=\"time.fromTime.hour=='0'\">{{time.fromTime.hour}}0:</span>\n                                                            <span *ngIf=\"time.fromTime.hour!='0'\">{{time.fromTime.hour}}:</span>\n                                                            <span *ngIf=\"time.fromTime.minute=='0'\">{{time.fromTime.minute}}0 –</span>\n                                                            <span *ngIf=\"time.fromTime.minute!='0'\">{{time.fromTime.minute}} –</span>\n                                                            <span *ngIf=\"time.toTime.hour=='0'\">{{time.toTime.hour}}0:</span>\n                                                            <span *ngIf=\"time.toTime.hour!='0'\">{{time.toTime.hour}}:</span>\n                                                            <span *ngIf=\"time.toTime.minute=='0'\">{{time.toTime.minute}}0</span>\n                                                            <span *ngIf=\"time.toTime.minute!='0'\">{{time.toTime.minute}}</span>\n                                                        ]\n                                                </span>\n                                                <br>\n                                                </span>\n                                            </div>\n                                            <div class=\"form-group\" *ngFor=\"let shift of allShiftsClosed\"> \n                                                <span><strong> {{shift.day}}: </strong> Closed \n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div id=\"translated_treatmentText\" *ngIf=\"checkOptionOfPad('Available_treatments')\">\n                                            <h5 class=\"color-blue\"> Available Treatments: </h5>\n                                            <ul style=\"padding-left:15px!important;\">\n                                                <li *ngFor=\"let treat of doctorData.expertise\">{{treat.value}}</li>\n                                            </ul>\n                                        </div>\n                                        <div *ngIf=\"doctorData.clinic_services_status=='Yes' && checkOptionOfPad('Available_services')\" id=\"translated_servicesText\">\n                                            <h5 class=\"color-blue\"> Available Services: </h5>\n                                            <ul style=\"padding-left:15px!important;\">\n                                                <li *ngIf=\"doctorData.clinic_services.Clinic_Pharmacy\">Pharmacy</li>\n                                                <li *ngIf=\"doctorData.clinic_services.Clinic_IPD\">IPD</li>\n                                                <li *ngFor=\"let cs of doctorData.clinic_services.ClinicServicesDetail\"> {{cs}} </li>\n                                                <li *ngFor=\"let cs of doctorData.clinic_services.OtherClinicService\"> {{cs.value}} </li>\n                                            </ul>\n                                        </div>\n                                    </div>                                   \n                                </div>\n                                <div class=\"col-md-10 col-sm-10 col-xs-10 p-0\" style=\"font-size: 10px;\">\n                                    <div class=\"padview-bodyright\">\n                                        <ul class=\"padview-body-header\">\n                                            <li>\n                                                <div class=\"text-underline\"> Prescription ID </div>\n                                                <div class=\"strong\">{{prescription_id}}</div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Name </div>\n                                                <div class=\"strong\"> {{dispensedPatient.pateintName}} </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Age/Sex </div>\n                                                <div class=\"strong\"> {{dispensedPatient.age}} {{dispensedPatient.gender}} </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Weight </div>\n                                                <div class=\"strong\" *ngIf=\"dispensedPatient.weight\"> {{dispensedPatient.weight}} Kg </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"text-underline\"> Height </div>\n                                                <div class=\"strong\" *ngIf=\"dispensedPatient.height\"> {{dispensedPatient.height}} cm </div>\n                                            </li>\n                                            <li>\n                                                <div class=\"strong\"> {{day}} {{month}} , {{year}}</div>\n                                            </li>\n                                        </ul>\n                                        <ul class=\"padview-patient\">\n                                            <li class=\"img-patient\">\n                                                <img src=\"{{pateintPicPath}}{{dispensedPatient.pateintPic}}\" class=\"img-responsive\" *ngIf=\"dispensedPatient.pateintPic\"/>\n                                                <img src=\"./assets/imgs/no-person.jpg\" class=\"img-responsive\" *ngIf=\"!dispensedPatient.pateintPic\"/>\n                                            </li>\n                                            <li *ngIf=\"preConditionComplete==true && finalPreConditions.length>0\">\n                                                <div class=\"pat-heading\"><span id=\"translated_PreCondHeading\"> Existing health status </span> </div>\n                                                <ul class=\"pat-type\">\n                                                    <li *ngFor=\"let data of finalPreConditions\"> {{data}} </li>\n                                                </ul>\n                                            </li>\n                                            <li *ngIf=\"bodyIndicatorComplete==true && bodyIndicatorSelected.length>0\">\n                                                <div class=\"pat-heading\"><span id=\"translated_BIHeading\"> Body Indicators</span> </div>\n                                                <ul class=\"pat-type\">\n                                                    <li *ngFor=\"let data of bodyIndicatorSelected\"> {{data}}\n                                                    </li>\n                                                </ul>\n                                            </li>\n                                            <li *ngIf=\"allergyComplete==true && finalAllergy.length>0\">\n                                                <div class=\"pat-heading\"><span id=\"translated_allergyHeading\"> Allergy</span> </div>\n                                                <ul class=\" pat-type\">\n                                                    <li *ngFor=\"let data of finalAllergy\"> {{data}} </li>\n                                                </ul>\n                                            </li>\n                                        </ul>\n                                        <div class=\"middle-body\">\n                                            <div class=\"\">\n                                                <div class=\"number-div\" *ngIf=\"findingsComplete==true && findingsSelected.length>0\">\n                                                    <div class=\"pat-heading\"><span id=\"translated_PTHeading\"> Patient's Complaints</span> </div>\n                                                    <ul class=\"numberol\">\n                                                        <li *ngFor=\"let data of findingsSelected\"> {{data.value}} </li>\n                                                    </ul>\n                                                </div>\n                                                <div class=\"number-div\" *ngIf=\"symptomsComplete==true && symptomsSelected.length>0\">\n                                                    <div class=\"pat-heading\"><span id=\"translated_sympHeading\"> Symptoms</span> </div>\n                                                    <ul class=\"numberol\">\n                                                        <li *ngFor=\"let data of symptomsSelected\"> {{data.value}} </li>\n                                                    </ul>\n                                                </div>\n                                                <div class=\"number-div\" *ngIf=\"diagnosisComplete==true && diagnosisSelected.length>0\">\n                                                    <div class=\"pat-heading\"><span id=\"translated_diagnosisHeading\"> Diagnosis</span> </div>\n                                                    <ul class=\"numberol\">\n                                                        <li *ngFor=\"let data of diagnosisSelected\">{{data.value}}</li>\n                                                    </ul>\n                                                </div>\n                                            </div>\n                                            <div class=\"\" *ngIf=\"medicationComplete==true\">\n                                                <div class=\"padview-medic\" id=\"translated_medication\">\n                                                    <div class=\"pat-heading\"><span> Medicines</span> </div>\n                                                    <ol style=\"padding-left:10px\">\n                                                        <li *ngFor=\"let data of tempMedicationArray\">\n                                                            <span *ngIf=\"data.name=='Tablet' || data.name=='Capsule' || data.name=='Cream' || data.name=='Ointment' || data.name=='Aerosols' || data.name=='Powder' || data.name=='MouthWash'\">\n                                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                            </span>\n                                                            </span>\n                                                            <span *ngIf=\"data.name=='Syrup' || data.name=='Suspension' || data.name=='Emulsion' || data.name=='Solution'\">\n                                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>- {{data.dosage}}ml <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                            </span>\n                                                            </span>\n                                                            <span *ngIf=\"data.name=='Injection' || data.name=='Gel' || data.name=='Lotion'\">\n                                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b><span *ngIf=\"data.mode\"> ({{data.mode}}) </span> -{{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span><span *ngIf=\"data.mode\"> ({{data.mode}}) </span>\n                                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                            </span>\n                                                            </span>\n                                                            <span *ngIf=\"data.name=='Drops'\">\n                                                            {{data.short_name}}<b class=\"notranslate\"> {{data.med_name[0].value}} </b>-{{data.quantity}} drops <span class=\"notranslate\"> X </span> {{data.frequency}} <span class=\"notranslate\"> X </span> {{data.duration}} days <span *ngIf=\"data.specialInstruction!=null\"> ({{data.specialInstruction}})</span>\n                                                            <span *ngIf=\"data.med_info\"><p class=\"help-note\" *ngIf=\"data.med_info.length>0\">({{data.med_info[0].value}}<span *ngIf=\"data.med_info.length>1\"> / {{data.med_info[1].value}}</span>)</p>\n                                                            </span>\n                                                            </span>\n                                                        </li>\n                                                    </ol>\n                                                </div>\n                                                <div class=\"number-div vac-div\">\n                                                     <div *ngIf=\"vaccinationComplete==true\">\n                                                        <div class=\"pat-heading\" id=\"translated_VaccinationHeading\"> <span> Vaccination</span> </div>\n                                                        <ul *ngIf=\"currentVaccinationComplete == true\" class=\"medicationol\">\n                                                            <div><b>Current</b></div>\n                                                            <li *ngFor=\"let data of finalCurrentVaccinationArray\">{{data}}</li>\n                                                        </ul>\n                                                        <ul *ngIf=\"dueVaccinationComplete == true\" class=\"medicationol\">\n                                                            <span *ngIf=\"finalDueVaccinationArray.length>0\"><strong>Due </strong>({{vaccinationDate.toString().substr(4,11)}})\n                                                            </span>\n                                                            <li *ngFor=\"let data of finalDueVaccinationArray\">{{data}}</li>\n                                                        </ul>\n                                                    </div>\n                                                        <div class=\"\" *ngIf=\"instructionsComplete==true && instructionsSelected.length>0\" id=\"translated_instHeading\">\n                                                            <div class=\"pat-heading\"> <span> Instructions</span> </div>\n                                                            <ul class=\"numberol\" start=\"1\">\n                                                                <li *ngFor=\"let data of instructionsSelected\">{{data}}</li>\n                                                            </ul>\n                                                        </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"third-body\">\n                                            <div class=\"number-div\" *ngIf=\"investigationIndicatorComplete==true && investigationArray.length\">\n                                                <div class=\"pat-heading\"> <span id=\"translated_invHeading\"> Investigation</span> </div>\n                                                <ol class=\"numberol pl10\">\n                                                    <li *ngFor=\"let data of investigationArray\">\n                                                        <span *ngIf=\"data.name != 'Mammography' && data.name!= 'Uroflowmetry' && data.name != 'ECG' && data.name != 'EEG' && data.name != 'TMT' && data.name != 'Echo'\">\n                                                            <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span><span *ngFor=\"let value of data.values;let i = index\">{{value.value}} \n                                                                <span *ngIf=\"i!=data.values.length-1\">\\</span>\n                                                        </span>\n                                                        </span>\n                                                        <span *ngIf=\"data.name == 'Mammography' || data.name== 'Uroflowmetry' || data.name == 'ECG' || data.name == 'EEG' || data.name == 'TMT' || data.name == 'Echo'\">\n                                                            <span *ngIf=\"data.name!='Others'\">{{data.name}} - </span> {{data.values}}\n                                                        </span>\n                                                    </li>\n                                                </ol>\n                                            </div>\n                                            <div class=\"number-div\" *ngIf=\"treatmentComplete==true\" id=\"translated_OTHeading\">\n                                                <div class=\"pat-heading\"> <span> Other Treatments</span> </div>\n                                                <ul class=\"numberol\">\n                                                    <li *ngFor=\"let data of treatmentArray;let i =index\">\n                                                        <span *ngIf=\"data.name=='Lifestyle Changes'\">\n                                                            {{data.name}} - <span *ngFor=\"let value of data.lifestyle;let j = index\">{{value.value}} <span *ngIf=\"j!=data.lifestyle.length-1\">\\</span></span>\n                                                        </span>\n                                                        <span *ngIf=\"data.name=='Physiotherapy' || data.name=='Fomentation'\">\n                                                            {{data.name}} - {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                                        </span>\n                                                        <span *ngIf=\"data.name=='Plaster'\">\n                                                            <span class=\"notranslate\">{{data.name}}</span> - on <span class=\"notranslate\">{{data.Injury_Area}}</span> of {{data.plaster_type}} for {{data.Duration}} days \n                                                        </span>\n                                                        <span *ngIf=\"data.name=='Gargle' || data.name=='Dressing' || data.name=='Bandage' || data.name=='Other'\">\n                                                            <span *ngIf=\"data.name!='Other'\">{{data.name}} - </span>{{data.med_name[0].value}} {{data.Frequency}} for {{data.Duration}} days <span *ngIf=\"data.SpecialInstruction!=null\"> ({{data.SpecialInstruction}})</span>\n                                                        </span>\n                                                        <span>\n                                                            {{data.value}}\n                                                        </span>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                        <div class=\"note-box\">\n                                            <div class=\"note-innerbox\">\n                                                <div class=\"note-innerdiv\">\n                                                    <div class=\"number-div\" *ngIf=\"surgeryComplete==true && surgerySelectedArray.length>0\">\n                                                        <div class=\"pat-heading\"> <span id=\"translated_surgHeading\"> Recommended Surgery</span> </div>\n                                                        <ul class=\"numberol\">\n                                                            <li *ngFor=\"let data of surgerySelectedArray\">{{data.sub_speciality | titlecase}} - {{data.procedure_name[0].value}}</li>\n                                                        </ul>\n                                                    </div>\n                                                    <div class=\"number-div\" *ngIf=\"refer_status\" style=\"padding:0 30px;\">\n                                                        <div class=\"pat-heading\"> <span> Referred To</span> </div>\n                                                        <p> {{referDetail.doctor_name}} </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"\" *ngIf=\"eyePresComplete==true\">\n                                                <div class=\"pat-heading\"> <span id=\"translated_eyeHeading\"> Eye Prescription</span> </div>\n                                                <div class=\"table-responsive\">\n                                                    <table class=\"table table-bordered table-striped cstm-table\">\n                                                        <thead>\n                                                            <tr>\n                                                                <th> Eye </th>\n                                                                <th> Sphere </th>\n                                                                <th> Cylinder </th>\n                                                                <th> Axis </th>\n                                                                <th> Add </th>\n                                                                <th> PD (mm) </th>\n                                                            </tr>\n                                                        </thead>\n                                                        <tbody>\n                                                            <tr>\n                                                                <td> Right (OD): </td>\n                                                                <td> {{finalRightOD.sphere}} </td>\n                                                                <td> {{finalRightOD.cylinder}} </td>\n                                                                <td> {{finalRightOD.axis}} </td>\n                                                                <td> {{finalRightOD.add}} </td>\n                                                                <td> {{finalRightOD.pd}} </td>\n                                                            </tr>\n                                                            <tr>\n                                                                <td> Left (OS): </td>\n                                                                <td> {{finalLeftOD.sphere}} </td>\n                                                                <td> {{finalLeftOD.cylinder}} </td>\n                                                                <td> {{finalLeftOD.axis}} </td>\n                                                                <td> {{finalLeftOD.add}} </td>\n                                                                <td> {{finalLeftOD.pd}} </td>\n                                                            </tr>\n                                                        </tbody>\n                                                    </table>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"third-body\">\n                                            <div class=\"number-div\" *ngIf=\"followDaysComplete == true\">\n                                                <div class=\"pat-heading\"> <span> Follow Up</span></div>\n                                                <p> Please come again after {{finalfollowUpDays}} days for consultation </p>\n                                                <p class=\"small\"> On {{followUpDay}} {{followUpMonth}} , {{followUpYear}}</p>\n                                            </div>\n                                        </div>\n                                        <div class=\"forth-body\">\n                                            <div class=\"padview-confee\" *ngIf=\"checkOptionOfPad('Consultation_duration')\">\n                                                <div class=\"cons-time\">Consultation Duration: {{minutes}} min {{seconds}} sec </div>\n                                            </div>\n                                            <div class=\"signature\" *ngIf=\"checkOptionOfPad('Signature')\">(Signature)</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"padview-footer\" *ngIf=\"checkOptionOfPad('Footer_note')\">\n                                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                    <div class=\"padview-powered\">\n                                        <div style=\"float:left; color:#ccc;\">Powered by doctm</div>\n                                        <div style=\"float:right; color:#ccc;\">For prescription visit www.mydoctm.com </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12 col-sm-4 col-xs-12\" id=\"translated_footer\">\n                                    <div class=\"legal\">\n                                        <h3>{{getFooterText()}}</h3>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/delete-records/delete-records.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteRecordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeleteRecordsComponent = /** @class */ (function () {
    function DeleteRecordsComponent(UserService, toastr, dialog, router) {
        this.UserService = UserService;
        this.toastr = toastr;
        this.dialog = dialog;
        this.router = router;
        this.fromDate = new Date();
        this.toDate = new Date();
        this.fromDate1 = new Date();
        this.toDate1 = new Date();
        this.newDate = new Date();
        this.before = new Date();
        this.after = new Date();
        this.onlyToday = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
        this.followUpDays = 0;
        this.finalfollowUpDays = 0;
        this.followUpDate = new Date();
    }
    DeleteRecordsComponent.prototype.ngOnInit = function () {
        this.deleteOption = 'Select One';
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log(this.doctorData);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.fromDate1.setDate(this.fromDate1.getDate() - 6);
        this.doctorsDetails = JSON.parse(localStorage['doctorsOfSameClinic']);
        console.log(this.doctorsDetails);
        this.pateintPicPath = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].patientPic;
        var options = {
            month: 'short'
        };
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
        this.activatedtab = 0;
        this.GetAllDispenseListToDelete();
        this.setAllShiftsForPreview();
        this.searchRecords = [];
    };
    DeleteRecordsComponent.prototype.askOtpbefore = function (type) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.fire({
            title: "Delete Records",
            text: "Are you sure you want to delete your records? All the records will be deleted as per selected criteria",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this.otpBeforeDelete();
            }
            else {
                //this.removeDoctor();
            }
        });
    };
    DeleteRecordsComponent.prototype.askOtpafter = function (type) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.fire({
            title: "Delete Records",
            text: "Are you sure you want to delete your records? All the records will be deleted as per selected criteria",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this.otpBeforeDelete();
            }
            else {
                //this.removeDoctor();
            }
        });
    };
    DeleteRecordsComponent.prototype.askOtponlyToday = function (type) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.fire({
            title: "Delete Records",
            text: "Are you sure you want to delete your records? All the records will be deleted as per selected criteria",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this.otpForAllDelete();
            }
            else {
                //this.removeDoctor();
            }
        });
    };
    DeleteRecordsComponent.prototype.askOtptoDate1 = function (type) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.fire({
            title: "Delete Records",
            text: "Are you sure you want to delete your records? All the records will be deleted as per selected criteria",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this.generateOtp();
            }
            else {
                //this.removeDoctor();
            }
        });
    };
    DeleteRecordsComponent.prototype.askOtpDeleteDoc = function (type) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a.fire({
            title: "Delete Account",
            text: "Are you sure you want to delete your account? You will be not be able to recover your account later!",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#01B0F0',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then(function (result) {
            if (result.value) {
                _this.otpDeleteDoc();
            }
            else {
                //this.removeDoctor();
            }
        });
    };
    DeleteRecordsComponent.prototype.beforeDeleteModal = function () {
        $('#beforModal').modal('show');
    };
    DeleteRecordsComponent.prototype.afterDeleteModal = function () {
        $('#afterModal').modal('show');
    };
    DeleteRecordsComponent.prototype.forDeleteModal = function () {
        $('#forModal').modal('show');
    };
    DeleteRecordsComponent.prototype.FromtoDeleteModal = function () {
        $('#fromtoModal').modal('show');
    };
    DeleteRecordsComponent.prototype.getClass = function (i) {
        if (i == this.activatedtab) {
            return 'active';
        }
        else if (i < this.activatedtab) {
            return 'completed';
        }
    };
    DeleteRecordsComponent.prototype.getData = function (data) {
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
    DeleteRecordsComponent.prototype.getDocName = function (id) {
        if (id == this.doctorData._id) {
            return this.doctorData.first_name;
        }
    };
    DeleteRecordsComponent.prototype.openPrescriptionPreview = function (data) {
        this.prescription_id = data.prescription_id;
        this.dispensedPatient = data.registration;
        console.log(data);
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
        var options = {
            month: 'short'
        };
        this.followUpMonth = this.followUpDate.toLocaleDateString("en-IN", options);
        this.followUpDay = this.followUpDate.getDate();
        this.followUpYear = this.followUpDate.getFullYear();
        this.minutes = data.precription.minutes;
        this.seconds = data.precription.seconds;
        // this.languageOptionSelected = data.precription.languageOptionSelected
        $("#previewModal").modal("show");
    };
    DeleteRecordsComponent.prototype.checkOptionOfPad = function (value) {
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
    DeleteRecordsComponent.prototype.getFooterText = function () {
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return "Not for Medico-Legal Purpose";
        }
        else {
            return this.doctorData.pad_customization_options[12].text;
        }
    };
    DeleteRecordsComponent.prototype.getHeaderText = function () {
        if (!this.doctorData.pad_customization_options || this.doctorData.pad_customization_options.length < 1) {
            return "PLEASE TAKE PRIOR APPOINTMENT";
        }
        else {
            return this.doctorData.pad_customization_options[8].text;
        }
    };
    DeleteRecordsComponent.prototype.setAllShiftsForPreview = function () {
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
    DeleteRecordsComponent.prototype.createPdf = function () {
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
    DeleteRecordsComponent.prototype.searchByName = function () {
        var _this = this;
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
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
    };
    DeleteRecordsComponent.prototype.onKey = function (event) {
        if (event.keyCode == 13) {
            this.searchByName();
        }
    };
    DeleteRecordsComponent.prototype.search = function () {
        var _this = this;
        this.searchInput = this.searchInput.toLowerCase();
        if (this.searchInput && this.searchInput.trim() != '') {
            this.showData = this.databackup.filter(function (item) {
                var b = item.invoice;
                return (b.indexOf(_this.searchInput) > -1);
            });
        }
    };
    // getPatientData(){
    //     var ob 
    //     ob = {}
    //     ob.doctor_id = this.doctorData._id
    //     ob.start_date = this.fromDate1
    //     ob.end_date = this.toDate1
    //     this.loading = true
    //     this.UserService.AllDispensePatientsForSearchRecords(ob).subscribe(data => {
    //         console.log(data)
    //         //this.getResponse = data.response
    //         this.listOfPatient= data.dataDispensed
    //         this.loading = false
    //         }, err => {
    //       console.log(err);
    //     })
    // }
    DeleteRecordsComponent.prototype.GetAllDispenseListToDelete = function () {
        var _this = this;
        var ob;
        ob = {};
        ob.doctor_id = this.doctorData._id;
        this.loading = true;
        this.UserService.GetAllDispenseListToDelete(ob).subscribe(function (data) {
            console.log(data);
            _this.getResponse = data.response;
            _this.allDispenseList = data.dataDispensed;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    DeleteRecordsComponent.prototype.deleteAll = function () {
        var _this = this;
        if (parseInt(this.getServiceOtp) == this.varifyPassword) {
            for (var i = 0; i < this.allDispenseList.length; i++) {
                console.log(this.allDispenseList[i]._id);
                var ob;
                ob = {};
                ob.user_id = this.allDispenseList[i]._id,
                    ob.start_date = this.fromDate1;
                ob.end_date = this.toDate1;
                ob.all = true;
                console.log(ob);
                this.loading = true;
                this.UserService.DeletePatientRecord(ob).subscribe(function (data) {
                    if (data.response) {
                        _this.toastr.success(data.message, 'Success', {
                            timeOut: 3000,
                            closeButton: true
                        });
                        $("#delete-data").modal("hide");
                        _this.router.navigateByUrl('/header-two-layout/dashboard');
                        //this.ngOnInit()
                    }
                    else {
                        _this.toastr.error(data.message, 'Error', {
                            timeOut: 3000,
                            closeButton: true
                        });
                    }
                    _this.loading = false;
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            this.toastr.error("Invalid OTP", "Error");
        }
    };
    DeleteRecordsComponent.prototype.generateOtp = function () {
        var _this = this;
        if (new Date(this.toDate1).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        if (new Date(this.fromDate1).setHours(0, 0, 0, 0) > new Date(this.toDate1).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        console.log(this.getResponse);
        if (this.getResponse) {
            var phone = parseInt(this.doctorData.phone);
            var ob = {
                phone: phone
            };
            console.log(phone);
            this.UserService.GenerateOtpForActiveDoctor(ob).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.getServiceOtp = data.otpPhone;
                    $("#delete-data").modal("show");
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.toastr.error("No data found", "Error");
        }
    };
    DeleteRecordsComponent.prototype.deleteOpt = function (event) {
        this.checkDateValue = event.target.value;
        console.log(event.target.value);
    };
    DeleteRecordsComponent.prototype.deleteBefore = function () {
        var _this = this;
        if (this.getResponse) {
            if (parseInt(this.getBeforeServiceOtp) == this.beforeVarifyPassword) {
                for (var i = 0; i < this.allDispenseList.length; i++) {
                    console.log(this.allDispenseList[i]._id);
                    var ob;
                    ob = {};
                    ob.user_id = this.allDispenseList[i]._id;
                    ob.delete_date = this.before;
                    ob.before = true;
                    console.log(ob);
                    this.loading = true;
                    this.UserService.DeletePatientRecord(ob).subscribe(function (data) {
                        console.log(data);
                        if (data.response) {
                            _this.toastr.success(data.message, 'Success', {
                                timeOut: 3000,
                                closeButton: true
                            });
                            $("#delete-before").modal("hide");
                            _this.router.navigateByUrl('/header-two-layout/dashboard');
                            //this.ngOnInit()
                        }
                        else {
                            _this.toastr.error(data.message, 'Error', {
                                timeOut: 3000,
                                closeButton: true
                            });
                        }
                        _this.loading = false;
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
            else {
                this.toastr.error('Wrong OTP', 'Error');
            }
        }
        else {
            this.toastr.error('No data found', 'Error');
        }
    };
    DeleteRecordsComponent.prototype.deleteAfter = function () {
        var _this = this;
        if (this.getResponse) {
            if (parseInt(this.getAfterServiceOtp) == this.afterVarifyPassword) {
                for (var i = 0; i < this.allDispenseList.length; i++) {
                    console.log(this.allDispenseList[i]._id);
                    var ob;
                    ob = {};
                    ob.user_id = this.allDispenseList[i]._id;
                    ob.delete_date = this.after;
                    ob.after = true;
                    console.log(ob);
                    this.loading = true;
                    this.UserService.DeletePatientRecord(ob).subscribe(function (data) {
                        console.log(data);
                        if (data.response) {
                            _this.toastr.success(data.message, 'Success', {
                                timeOut: 3000,
                                closeButton: true
                            });
                            $("#delete-after").modal("hide");
                            _this.router.navigateByUrl('/header-two-layout/dashboard');
                        }
                        else {
                            _this.toastr.error(data.message, 'Error', {
                                timeOut: 3000,
                                closeButton: true
                            });
                        }
                        _this.loading = false;
                    }, function (err) {
                        console.log(err);
                    });
                }
            }
            else {
                this.toastr.error('Wrong OTP', 'Error');
            }
        }
        else {
            this.toastr.error('No data found', 'Error');
        }
    };
    DeleteRecordsComponent.prototype.forTodayData = function () {
        var _this = this;
        if (this.getResponse) {
            //if (parseInt(this.getAfterServiceOtp) == this.afterVarifyPassword) {
            for (var i = 0; i < this.allDispenseList.length; i++) {
                console.log(this.allDispenseList[i]._id);
                var ob;
                ob = {};
                ob.user_id = this.allDispenseList[i]._id;
                ob.delete_date = this.onlyToday;
                ob.inFor = true;
                console.log(ob);
                this.loading = true;
                this.UserService.DeletePatientRecord(ob).subscribe(function (data) {
                    console.log(data);
                    if (data.response) {
                        _this.toastr.success(data.message, 'Success', {
                            timeOut: 3000,
                            closeButton: true
                        });
                        // $("#delete-after").modal("hide");
                        // this.router.navigateByUrl('/header-two-layout/dashboard');
                    }
                    else {
                        _this.toastr.error(data.message, 'Error', {
                            timeOut: 3000,
                            closeButton: true
                        });
                    }
                    _this.loading = false;
                }, function (err) {
                    console.log(err);
                });
            }
            // }else{
            //     this.toastr.error('Wrong OTP', 'Error');
            // }
        }
        else {
            this.toastr.error('No data found', 'Error');
        }
    };
    DeleteRecordsComponent.prototype.otpBeforeDelete = function () {
        var _this = this;
        if (this.getResponse) {
            var phone = parseInt(this.doctorData.phone);
            var ob = {
                phone: phone
            };
            console.log(phone);
            this.UserService.GenerateOtpForActiveDoctor(ob).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.getBeforeServiceOtp = data.otpPhone;
                    $("#delete-before").modal("show");
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.toastr.error("No data found", "Error");
        }
    };
    DeleteRecordsComponent.prototype.otpAfterDelete = function () {
        var _this = this;
        if (this.getResponse) {
            var phone = parseInt(this.doctorData.phone);
            var ob = {
                phone: phone
            };
            console.log(phone);
            this.UserService.GenerateOtpForActiveDoctor(ob).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.getAfterServiceOtp = data.otpPhone;
                    $("#delete-after").modal("show");
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.toastr.error("No data found", "Error");
        }
    };
    DeleteRecordsComponent.prototype.otpForAllDelete = function () {
        var _this = this;
        if (this.getResponse) {
            var phone = parseInt(this.doctorData.phone);
            var ob = {
                phone: phone
            };
            console.log(phone);
            this.UserService.GenerateOtpForActiveDoctor(ob).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.getAllSerivceVarifyPassword = data.otpPhone;
                    $("#delete-all").modal("show");
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.toastr.error("No data found", "Error");
        }
    };
    DeleteRecordsComponent.prototype.otpDeleteDoc = function () {
        var _this = this;
        // if (this.getResponse) {
        var phone = parseInt(this.doctorData.phone);
        var ob = {
            phone: phone
        };
        console.log(phone);
        this.UserService.GenerateOtpForActiveDoctor(ob).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.deleteDocAccService = data.otpPhone;
                $("#delete-doc-account").modal("show");
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
        // } else {
        //     this.toastr.error("No data found", "Error")
        // }
    };
    DeleteRecordsComponent.prototype.deleteDoctorAccount = function () {
        var _this = this;
        if (this.deleteDocAcc == parseInt(this.deleteDocAccService)) {
            this.UserService.DeleteDoctor(this.doctorData.itemId).subscribe(function (data) {
                console.log(data);
                // this.loading = false;
                if (data.response == true) {
                    //this.ngOnInit();
                    _this.toastr.success(data.message, 'Success');
                }
                else {
                    _this.toastr.error(data.message, 'Error');
                }
            }, function (err) {
                console.log(err);
            });
            $("#delete-doc-account").modal("hide");
            this.ngOnInit();
            this.router.navigate(['header-one-layout/homepage']);
        }
        else {
            this.toastr.error("Wrong OTP", "Error");
        }
    };
    DeleteRecordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-records',
            template: __webpack_require__("../../../../../src/app/header-two-layout/delete-records/delete-records.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/delete-records/delete-records.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], DeleteRecordsComponent);
    return DeleteRecordsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/delete-records/delete-records.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRecordsModule", function() { return DeleteRecordsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delete_records_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/delete-records/delete-records-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delete_records_component__ = __webpack_require__("../../../../../src/app/header-two-layout/delete-records/delete-records.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DeleteRecordsModule = /** @class */ (function () {
    function DeleteRecordsModule() {
    }
    DeleteRecordsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__delete_records_routing_module__["a" /* DeleteRecordsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["m" /* ReactiveFormsModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__delete_records_component__["a" /* DeleteRecordsComponent */]]
        })
    ], DeleteRecordsModule);
    return DeleteRecordsModule;
}());



/***/ })

});
//# sourceMappingURL=delete-records.module.chunk.js.map