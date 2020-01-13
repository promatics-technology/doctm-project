webpackJsonp(["sms.module"],{

/***/ "../../../../../src/app/header-two-layout/sms/sms-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sms_component__ = __webpack_require__("../../../../../src/app/header-two-layout/sms/sms.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__sms_component__["a" /* SmsComponent */],
    }
];
var SmsRoutingModule = /** @class */ (function () {
    function SmsRoutingModule() {
    }
    SmsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], SmsRoutingModule);
    return SmsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/sms/sms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-cstm{\r\n  margin: 0% 100px;\r\n  padding: 15px 25px;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  -webkit-box-shadow: none; \r\n  box-shadow: none;\r\n  border-radius: 8px;\r\n}\r\n.cstm-grin{\r\n\tbackground-color:#92d050;\r\n\tcolor:#fff;\r\n}\r\n.cstm-ornge{\r\n\tbackground-color:#ffc000!important;\r\n\tcolor:#000;\r\n}\r\n/*chkbox*/\r\n/* The container */\r\n.cstm-checkbox {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  /*margin-bottom: 18px;*/\r\n  cursor: pointer;\r\n  font-size:16px;\r\n /* text-transform: uppercase;*/\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default radio button */\r\n.cstm-checkbox input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n/* Create a custom radio button */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height:20px;\r\n  width: 20px;\r\n  background-color:#4f81bd;\r\n  border-radius: 50%;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.cstm-checkbox:hover input ~ .checkmark {\r\n  background-color:#4f81bd;\r\n}\r\n/* When the radio button is checked, add a blue background */\r\n.cstm-checkbox input:checked ~ .checkmark {\r\n  background-color: #2196F3;\r\n}\r\n/* Create the indicator (the dot/circle - hidden when not checked) */\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n/* Show the indicator (dot/circle) when checked */\r\n.cstm-checkbox input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n/* Style the indicator (dot/circle) */\r\n.cstm-checkbox .checkmark:after {\r\n  top: 5px;\r\n  left: 5px;\r\n  width: 10px;\r\n  height:10px;\r\n  border-radius: 50%;\r\n  background: white;\r\n}\r\nsmall.fader{\r\n\tcolor:#868686;\r\n\tpadding-left: 8px;\r\n  font-weight: normal;\r\n}\r\n.mg-t-0{\r\n\tmargin-top: 0px;\r\n}\r\n.thm-clr{\r\n\tcolor: #00b0f0;\r\n}\r\n.footer-cstm-an{\r\n\tposition: fixed;\r\n  float: left;\r\n  width: 100%;\r\n  bottom: 0;\r\n  background: #fff;\r\n  border-top: 1px solid #d6d6d6;\r\n  padding-top: 8px;\r\n}\r\n.btn-cstm{\r\n\tbackground-color: #00b0f0;\r\n\tborder-radius: 6px;\r\n\tcolor:#000;\r\n\t-webkit-box-shadow: none;\r\n\t        box-shadow: none;\r\n\tmargin-bottom:8px; \r\n\tpadding: 7px 22px;\r\n}\r\n.new-br{\r\n  margin-top: 25px;\r\n}\r\n/**/\r\n.table-responsive{\r\n  padding: 5px;\r\n    border: 1px solid #4d4d4d;\r\n}\r\n.table{\r\n  margin-bottom: 0px;\r\n}\r\n.head-1,\r\n.head-2,\r\n.head-3{\r\n  background-color: red;\r\n  padding:15px 0px;\r\n  color:#fff;  \r\n  font-weight:normal;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-size: 22px;\r\n}\r\n.head-1{\r\n  background: #FABF8E;\r\n}\r\n.head-2{\r\n  background: #92D050;\r\n}\r\n.head-3{\r\n  background: #4F81BD;\r\n  padding-left:20px;\r\n}\r\n.head-4{\r\n  color:#0070C0;\r\n}\r\n.hr{\r\n  border-bottom: 1px solid #000;\r\n}\r\n.form-group{\r\n  margin-bottom:0px;\r\n}\r\n.btm-hd{\r\n  background: #00B0F0;\r\n}\r\n.txt{\r\n  border-radius: 0px;\r\n  background: #efefef;\r\n  text-align: center;\r\n  border:transparent;\r\n  font-size:30px; \r\n  padding-top:40px; \r\n  min-height:120px;\r\n  max-height:120px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;  \r\n}\r\n.txt:focus{\r\n  text-align:left; \r\n  font-size:16px; \r\n  padding-top: initial;\r\n}\r\n.snd button{\r\n  color: #fff;\r\n    background: #00b0f0;\r\n    border-radius: 0px;\r\n    padding: 12px 70px;\r\n    font-size: 22px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/sms/sms.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 new-br\">\n            <div class=\"bta-wrap text-center\">\n                <button class=\"btn btn-cstm cstm-grin\">\n                    To\n                </button>\n                <button class=\"btn btn-cstm cstm-ornge\">\n                    SMS Left 0 / {{noOfSMS}}\n                </button>\n                <button class=\"btn btn-cstm cstm-grin\" data-toggle=\"modal\" data-target=\"#myModal\">\n                    Purchase SMS Pack\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-5 text-center\"><br>\n            <h4 class=\"mg-t-0\"><b>Pateient selection based on</b></h4>\n            <small>(You can choose multiple selection)</small>\n            <div class=\"row\">\n                <div class=\"col-lg-7 col-lg-offset-3 text-left\"><br>\n                    <label class=\"cstm-checkbox\">Age\n                        <input type=\"checkbox\"  name=\"radio\" value=\"checkAge\" [(ngModel)]=\"smsDetails.checkAge\">\n                        <span class=\"checkmark\"></span>\n                    </label>\n                \n                    <label class=\"cstm-checkbox\">Diagnosis\n\t\t\t\t\t  <input type=\"checkbox\" name=\"radio\" name=\"diagnosis\" [(ngModel)]=\"smsDetails.checkDiagnosis\" value=\"checkDiagnosis\">\n\t\t\t\t\t  <span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n                    <label class=\"cstm-checkbox\">Follow-ups\n                        <br><small class=\"fader\">(In next 30 days)</small>\n                        <input type=\"checkbox\" name=\"radio\" name=\"followUps\" [(ngModel)]=\"smsDetails.checkfollowUp\" value=\"checkfollowUp\">\n                        <span class=\"checkmark\"></span>\n                    </label>\n                    <label class=\"cstm-checkbox\">Appointments\n                        <br><small class=\"fader\">(In next 30 days)</small>\n                        <input type=\"checkbox\" name=\"radio\" name=\"appointments\" [(ngModel)]=\"smsDetails.checkAppointments\" value=\"checkAppointments\">\n                        <span class=\"checkmark\"></span>\n                    </label>\n                    <label class=\"cstm-checkbox\">Frequent patients\n                        <br><small class=\"fader\">(More than 3 visits in last 2 months)</small>\n                        <input type=\"checkbox\" name=\"radio\" name=\"freqPatients\" [(ngModel)]=\"smsDetails.checkFreqPatients\" value=\"checkFreqPatients\">\n                        <span class=\"checkmark\"></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6\">\n            <form [formGroup]=\"sendSmsForm\">\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-lg-6\">\n                        <div class=\"cstm-input\">\n                            <input type=\"text\" name=\"\" placeholder=\"From\" class=\"form-control input-lg\" required=\"\" max=\"100\" min=\"0\" maxlength=\"3\" pattern=\"[0-9]+\" [(ngModel)]=\"smsDetails.fromAge\" [formControl]=\"sendSmsForm.controls['fromAge']\">\n                            <p style=\"color: #FF0000\" *ngIf=\"!sendSmsForm.controls['fromAge'].valid  && (sendSmsForm.controls['fromAge'].touched)\">Invalid age !!!</p>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <div class=\"cstm-input\">\n                            <input type=\"text\" name=\"\" placeholder=\"To\" class=\"form-control input-lg\" required=\"\" max=\"100\" min=\"0\" maxlength=\"3\" pattern=\"[0-9]+\" [(ngModel)]=\"smsDetails.toAge\" [formControl]=\"sendSmsForm.controls['toAge']\">\n                            <p style=\"color: #FF0000\" *ngIf=\"!sendSmsForm.controls['toAge'].valid  && (sendSmsForm.controls['toAge'].touched)\">Invalid age !!!</p>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4\"><br>\n                        <label class=\"cstm-checkbox\">All\n                            <input type=\"radio\" checked=\"checked\" name=\"gender\" value=\"All\" [(ngModel)]=\"smsDetails.gender\" [formControl]=\"sendSmsForm.controls['gender']\">\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"col-lg-4\"><br>\n                        <label class=\"cstm-checkbox\">Male\n                            <input type=\"radio\" name=\"gender\" value=\"Male\" [(ngModel)]=\"smsDetails.gender\" [formControl]=\"sendSmsForm.controls['gender']\">\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"col-lg-4\"><br>\n                        <label class=\"cstm-checkbox\">Female\n                            <input type=\"radio\" name=\"gender\" value=\"Female\" [(ngModel)]=\"smsDetails.gender\" [formControl]=\"sendSmsForm.controls['gender']\">\n                            <span class=\"checkmark\"></span>\n                        </label>\n                    </div>\n                    <div class=\"col-lg-6\">\n\t\t\t        <select class=\"form-control txtfield\" [(ngModel)]=\"smsDetails.selectOne\" [formControl]=\"sendSmsForm.controls['selectOne']\">\n                        <option  disabled=\"\" selected=\"\" value=\"Select\"> Select one</option>\n                        <option value=\"CARDIOLOGIST\"> CARDIOLOGIST </option>\n                        <option value=\"DENTIST\"> DENTIST </option>\n                        <option value=\"DERMATOLOGIST\"> DERMATOLOGIST </option>\n                        <option value=\"DIABETOLOGIST\"> DIABETOLOGIST </option>\n                        <option value=\"DIETICIAN\"> DIETICIAN </option>\n                        <option value=\"E.N.T.\">E.N.T.</option>\n                    </select>\n\t\t\t\t</div>\n                    <div class=\"col-lg-6\">\n\t\t\t\t\t<select class=\"form-control txtfield\"  [(ngModel)]=\"smsDetails.selectTwo\" [formControl]=\"sendSmsForm.controls['selectTwo']\">\n                        <option  disabled=\"\" selected=\"\" value=\"Select\"> Select one</option>\n                        <option value=\"CARDIOLOGIST\"> CARDIOLOGIST </option>\n                        <option value=\"DENTIST\"> DENTIST </option>\n                        <option value=\"DERMATOLOGIST\"> DERMATOLOGIST </option>\n                        <option value=\"DIABETOLOGIST\"> DIABETOLOGIST </option>\n                        <option value=\"DIETICIAN\"> DIETICIAN </option>\n                        <option value=\"E.N.T.\">E.N.T.</option>\n                    </select>\n\t\t\t\t</div>\n                    <div class=\"col-lg-12\">\n                        <div class=\"form-group\">\n                            <h4 class=\"thm-clr\">COMPOSE</h4>\n                         \n                            <textarea class=\"form-control\" rows=\"5\" id=\"comment\" required=\"\" [(ngModel)]=\"smsDetails.compose\" name=\"content\" [formControl]=\"sendSmsForm.controls['composeSms']\"></textarea>\n                        </div>\n                        <p style=\"color: #FF0000\" *ngIf=\"!sendSmsForm.controls['composeSms'].valid  && (sendSmsForm.controls['composeSms'].touched)\">Invalid message !!!</p>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div> -->\n<!-- <div class=\"container footer-cstm-an\">\n    <div class=\"row\">\n        <div class=\"col-lg-6 text-center\">\n            <div>\n                <h4>Number of patients selected: <b>{{patientSelected}}</b></h4>\n            </div>\n        </div>\n        <div class=\"col-lg-6 text-center\">\n            <div>\n                <button class=\"btn btn-cstm\" [disabled]=\"!sendSmsForm.valid\" (click)=\"sendSMS()\">SEND</button>\n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Buy SMS pack</h4>\n            </div>\n            <div class=\"modal-body\">\n                <select class=\"form-control\" id=\"sel1\" [(ngModel)] = \"buyNow.amount\" >\n                    <option value=\"Select Amount\" selected=\"\" disabled=\"\">Select Amount</option>\n                    <option  *ngFor = \"let list of getSMSData\" value=\"{{list.price}}\">₹ {{list.price}}</option>\n                </select>\n                <br>\n                <div><label>No of SMS:</label>&nbsp;&nbsp;&nbsp;<span>{{getAmount(buyNow.amount)}}</span><br></div>\n                <br>\n                <button  type=\"button\" class=\"btn btn-primary\" (click)=\"initPay();\">Pay</button>\n            </div>\n          \n        </div>\n    </div>\n</div> -->\n<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-lg-4 col-lg-offset-1\">\n            <h4 class=\"head-1 text-center\">SMS Available : 456</h4>\n        </div>\n        <div class=\"col-lg-2\">\n        </div>\n        <div class=\"col-lg-4\">\n            <h4 class=\"head-2 text-center\">Purchase SMS Pack</h4>\n        </div>\n        <div class=\"col-lg-10 col-lg-offset-1\">\n            <div class=\"hr\"></div>\n        </div>\n        <div class=\"col-lg-10 col-lg-offset-1\">\n            <h4 class=\"head-3 text-left\">Send SMS To</h4>\n        </div>\n        <div class=\"col-lg-10 col-lg-offset-1\">\n            <div class=\"table-responsive\">\n                <h4 class=\"head-4 text-left\"><b>Patient selection based on</b></h4>\n                <small>( You can do multiple selections )</small>\n                  <table class=\"table\">\n                    <tbody>\n                        <tr>\n                            <td>\n                                <label class=\"cstm-checkbox\">Date\n                                    <input type=\"checkbox\"  name=\"radio\" value=\"checkAge\">\n                                    <span class=\"checkmark\"></span>\n                                </label>\n                            </td>\n                            <td>:</td>\n                            <td>lZJkc</td>\n                        </tr>  \n                        <tr class=\"active\">\n                            <td>\n                                <label class=\"cstm-checkbox\">Gender\n                                    <input type=\"checkbox\"  name=\"radio\" value=\"checkAge\">\n                                    <span class=\"checkmark\"></span>\n                                </label>\n                            </td>\n                            <td>:</td>\n                            <td>\n                                <div class=\"form-group\">\n                                  <select class=\"form-control\" id=\"sel1\">\n                                    <option>Male</option>\n                                    <option>Female</option>\n                                  </select>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <label class=\"cstm-checkbox\">Age\n                                    <input type=\"checkbox\"  name=\"radio\" value=\"checkAge\">\n                                    <span class=\"checkmark\"></span>\n                                </label>\n                            </td>\n                            <td>:</td>\n                            <td>\n                                <div class=\"form-group\">\n                                  <select class=\"form-control\" id=\"sel1\">\n                                    <option>Below</option>\n                                    <option>Above</option>\n                                    <option>Between</option>\n                                  </select>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr class=\"active\">\n                            <td>\n                                <label class=\"cstm-checkbox\">Diagnosis\n                                    <input type=\"checkbox\"  name=\"radio\" value=\"checkAge\">\n                                    <span class=\"checkmark\"></span>\n                                </label>\n                            </td>\n                            <td>:</td>\n                            <td>\n                                <div class=\"form-group\">\n                                  <input type=\"text\" name=\"\" class=\"form-control\">\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <label class=\"cstm-checkbox\">Follow-ups<small>( in next 10 days)</small>\n                                    <input type=\"checkbox\"  name=\"radio\" value=\"checkAge\">\n                                    <span class=\"checkmark\"></span>\n                                </label>\n                            </td>\n                            <td>:</td>\n                            <td>\n                                <div class=\"form-group\">\n                                  <select class=\"form-control\" id=\"sel1\">\n                                    <option>1</option>\n                                    <option>10 </option>\n                                    <option>15</option>\n                                    <option>30</option>\n                                  </select>\n                                </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <label class=\"cstm-checkbox\">Appointments<small>( in next 10 days)</small>\n                                    <input type=\"checkbox\"  name=\"radio\" value=\"checkAge\">\n                                    <span class=\"checkmark\"></span>\n                                </label>\n                            </td>\n                            <td>:</td>\n                            <td>\n                                <div class=\"form-group\">\n                                  <select class=\"form-control\" id=\"sel1\">\n                                    <option>1</option>\n                                    <option>10 </option>\n                                    <option>15</option>\n                                    <option>30</option>\n                                  </select>\n                                </div>\n                            </td>\n                        </tr>         \n                    </tbody>\n                  </table>\n            </div>\n        </div>\n        <div class=\"col-lg-6 col-lg-offset-3\">\n            <h4 class=\"head-1 text-center btm-hd\">Total SMS recipients selected : 87</h4>\n        </div>\n        <div class=\"col-lg-10 col-lg-offset-1\">\n            <div class=\"hr\"></div>\n        </div>\n        <div class=\"col-lg-10 col-lg-offset-1\">\n            <h4 class=\"head-4 text-left\"><b>Compose</b></h4>\n        </div>\n        <div class=\"col-lg-8 col-lg-offset-2\">\n            <div class=\"form-group\">\n              <textarea class=\"form-control txt\"  id=\"comment\" placeholder=\"Max 150 characters\"></textarea>\n              <br>\n            </div>\n        </div>\n        <div class=\"col-lg-10 col-lg-offset-1 text-center\">\n            <div class=\"snd\">\n               <button class=\"btn\">\n                   Send\n               </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/sms/sms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SmsComponent = /** @class */ (function () {
    function SmsComponent(formBuilder, toastr, userService, router) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.counter = 0;
        this.leftSMS = 0;
        this.getData = this.getData.bind(this);
    }
    SmsComponent.prototype.ngOnInit = function () {
        this.shared = {};
        this.buyNow = {};
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        this.smsDetails = {};
        this.smsDetails.gender = "All";
        this.sendSmsForm = this.formBuilder.group({
            'fromAge': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].max(100),
                ])],
            'toAge': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].max(100)
                ])],
            'composeSms': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ?%!@#$&()-`.+,/\"]*')])],
            'gender': [],
            'selectOne': [],
            'selectTwo': [],
        });
        this.smsDetails.selectOne = 'Select';
        this.smsDetails.selectTwo = 'Select';
        this.getSMSData = [];
        this.buyNow.amount = "Select Amount";
        this.getSMSPrice();
        this.getSMSDataForDoc();
    };
    SmsComponent.prototype.sendSMS = function () {
        var _this = this;
        if (this.smsDetails.selectOne == 'Select' || this.smsDetails.selectOne == '') {
            this.smsDetails.selectOne = '';
        }
        if (this.smsDetails.selectTwo == 'Select' || this.smsDetails.selectTwo == '') {
            this.smsDetails.selectTwo = '';
        }
        console.log(this.smsDetails);
        if (this.checkAppointments) {
            this.smsDetails.smart_assistant_id = this.doctorData.smart_assistant_id;
        }
        this.counter++;
        //this.smsDetails.smart_assistant_id = this.doctorData.smart_assistant_id
        console.log(this.counter);
        this.getSMSDataForDoc();
        this.smsDetails.doctor_id = this.doctorData._id;
        console.log(this.smsDetails);
        this.loading = true;
        if (this.checkAge) {
            this.smsDetails.age = true;
            this.userService.SendSms(this.smsDetails).subscribe(function (data) {
                console.log(data);
                ///this.patientSelected = data.newUnique.length 
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
        if (this.checkfollowUp) {
            this.smsDetails.followUps = true;
            this.userService.SendSms(this.smsDetails).subscribe(function (data) {
                console.log(data);
                ///this.patientSelected = data.newUnique.length 
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
        if (this.checkAppointments) {
            this.smsDetails.appointments = true;
            this.userService.SendSms(this.smsDetails).subscribe(function (data) {
                console.log(data);
                ///this.patientSelected = data.newUnique.length 
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
        if (this.checkFreqPatients) {
            this.smsDetails.freqPatients = true;
            this.userService.SendSms(this.smsDetails).subscribe(function (data) {
                console.log(data);
                ///this.patientSelected = data.newUnique.length 
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
        if (this.checkDiagnosis) {
            this.smsDetails.diagnosis = true;
            this.userService.SendSms(this.smsDetails).subscribe(function (data) {
                console.log(data);
                ///this.patientSelected = data.newUnique.length 
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
    };
    SmsComponent.prototype.abcd = function () {
        var _this = this;
        if (this.checkAge || this.checkfollowUp || this.checkAppointments || this.checkFreqPatients || this.checkDiagnosis) {
            this.userService.SendSms(this.smsDetails).subscribe(function (data) {
                console.log(data);
                ///this.patientSelected = data.newUnique.length 
                _this.loading = false;
            }, function (err) {
                console.log(err);
            });
        }
    };
    SmsComponent.prototype.initPay = function () {
        console.log(this.getAmount(this.buyNow.amount));
        if (this.buyNow.amount == "Select Amount" || this.buyNow.amount == undefined || this.buyNow.amount == null || this.buyNow.amount == '') {
            this.toastr.warning('Please Select Amount', 'Warning');
            return;
        }
        var self = this;
        var options = {
            "key": "rzp_test_rMT2sbd5LUR8rG",
            // "amount":((this.buyNow==1)?this.shared.totalAmountWithDisocuntBuyNow:this.shared.totalAmountWithDisocunt)*500, // 2000 paise = INR 20
            "amount": parseInt(this.buyNow.amount) * 100,
            "name": " SMS Pay",
            "description": "Order #",
            "handler": function (response) {
                console.log(response);
                self.getData(options, response);
                // alert(response.razorpay_payment_id);
                //this.paid();
                //this.shared.addOrder(this.buyNow,response.razorpay_payment_id);     
            },
            "prefill": {
                "name": this.doctorData.first_name,
                "email": this.doctorData.email,
                "contact": this.doctorData.phone
            },
            // "Order ID":{
            // 	"Order ID":'5'
            // },
            // "notes": {
            //     "address": this.doctorData+', '+this.doctorData+', '+this.doctorData+' '+this.doctorData+', '+this.doctorData
            // },
            "theme": {
                "color": "blue"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    };
    SmsComponent.prototype.getData = function (data, id) {
        var _this = this;
        console.log(data);
        var ob = {
            paymentId: id.razorpay_payment_id,
            amount: (data.amount) / 100,
            phone: data.prefill.contact,
            email: data.prefill.email,
            name: data.prefill.name,
            doctm_clinic_id: this.doctorData.doctm_clinic_id,
            sms: this.getAmount(this.buyNow.amount),
            doctor_id: this.doctorData._id
        };
        console.log(ob);
        this.loading = true;
        this.userService.SMSPayment(ob).subscribe(function (data) {
            console.log(data);
            $("#myModal").modal("hide");
            _this.ngOnInit();
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    SmsComponent.prototype.getSMSPrice = function () {
        var _this = this;
        this.loading = true;
        this.userService.GetSmsPricing().subscribe(function (data) {
            console.log(data);
            _this.getSMSData = data.data;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    SmsComponent.prototype.getAmount = function (amount) {
        for (var i = 0; i < this.getSMSData.length; i++) {
            if (this.getSMSData[i].price == amount) {
                return this.getSMSData[i].sms;
            }
        }
    };
    SmsComponent.prototype.getSMSDataForDoc = function () {
        var _this = this;
        this.noOfSMS = 0;
        this.getSMSforDoctor = [];
        this.loading = true;
        this.userService.GetSMSPaymentData().subscribe(function (data) {
            console.log(data);
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i].doctor_id == _this.doctorData._id) {
                    if (data.data[i].status) {
                        _this.noOfSMS += data.data[i].sms;
                        data.data[i].usedSMS = _this.counter;
                        _this.leftSMS = _this.noOfSMS - data.data[i].usedSMS;
                    }
                }
            }
            _this.getSMSforDoctor = data.data;
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    SmsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sms',
            template: __webpack_require__("../../../../../src/app/header-two-layout/sms/sms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/sms/sms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], SmsComponent);
    return SmsComponent;
}());

// this.secondMethod = this.secondMethod.bind(this) 


/***/ }),

/***/ "../../../../../src/app/header-two-layout/sms/sms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsModule", function() { return SmsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sms_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/sms/sms-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sms_component__ = __webpack_require__("../../../../../src/app/header-two-layout/sms/sms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/fesm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SmsModule = /** @class */ (function () {
    function SmsModule() {
    }
    SmsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__sms_routing_module__["a" /* SmsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__sms_component__["a" /* SmsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */]]
        })
    ], SmsModule);
    return SmsModule;
}());



/***/ })

});
//# sourceMappingURL=sms.module.chunk.js.map