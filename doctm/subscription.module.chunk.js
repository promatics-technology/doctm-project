webpackJsonp(["subscription.module"],{

/***/ "../../../../../src/app/header-two-layout/subscription/subscription-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscription_component__ = __webpack_require__("../../../../../src/app/header-two-layout/subscription/subscription.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__subscription_component__["a" /* SubscriptionComponent */]
    }
];
var SubscriptionRoutingModule = /** @class */ (function () {
    function SubscriptionRoutingModule() {
    }
    SubscriptionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], SubscriptionRoutingModule);
    return SubscriptionRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/subscription/subscription.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*new sec-1*/\r\n.txt-theme{\r\n    color:#00b0f0;\r\n}\r\n.crnt-paln{\r\n    border:1px solid #000;\r\n    border-radius:50px;\r\n    padding:30px; \r\n}\r\n.crnt-paln ul {\r\n    list-style: none;\r\n    padding: 0px;\r\n    margin:0px;\r\n}\r\n.crnt-paln ul li{\r\n    font-size: 20px;\r\n    padding-left:30px;\r\n    margin-bottom: 20px; \r\n}\r\n.btn-grin{\r\n    background-color:rgb(146,208,80);\r\n    border: transparent;\r\n    font-size: 22px;\r\n}\r\ni.chk{\r\n    color:rgb(146,208,80);\r\n}\r\ni.op{\r\n    opacity: 0;\r\n}\r\n.rd-clr{\r\n    color:red;\r\n}\r\n.sve_rchrge{\r\n    padding:20px;\r\n    color: #000;\r\n    background-color: #00b0f0;\r\n    display: block;\r\n    width: 35%;\r\n    font-size: 30px;\r\n    border-radius: 22px;\r\n    margin: 0 auto;\r\n    margin-bottom:10px; \r\n    text-decoration: none;\r\n}\r\n/*ends*/\r\n/*section 2*/\r\n.table_paymnt{\r\n    margin-top: 30px;\r\n}\r\n.table_paymnt table{\r\n    font-size: 22px;\r\n}\r\n.bck_pay a{\r\n    display:inline-block;\r\n    padding:20px;\r\n    text-decoration: none;\r\n    border-radius:15px;\r\n    font-size:24px;\r\n    color:#000; \r\n    width:100%;\r\n    text-align: center;\r\n}\r\n.bck_pay a.btn-1{\r\n    background: rgba(255,195,0);\r\n}\r\n.bck_pay a.btn-2{\r\n    background:#00b0f0;\r\n}\r\n/*ends*/\r\n/*section 3*/\r\n.sec-3{\r\n    margin-top:50px;\r\n}\r\n.card-1{\r\n    width: 100%;\r\n    background: #00b0f0;\r\n    border-radius: 22px;\r\n    text-align: center;\r\n    margin:30px 0px; \r\n    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\r\nbox-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\r\n}\r\n.card-1 h3{\r\n    margin:0px;\r\n    line-height: 6;\r\n}\r\n.card-2{\r\n    background-color:#00f099; \r\n}\r\n.card-3{\r\n    background-color:#f44336; \r\n}\r\n.card-4{\r\n    background: #673ab7;\r\n}\r\n.anc_card,\r\n.anc_card:hover,\r\n.anc_card:active,\r\n.anc_card:focus{\r\n    display: block;\r\n    color:#ffff;\r\n    text-decoration: none;\r\n}\r\n/*ends*/\r\n/*sec-4*/\r\n.pay_tabs ul li{\r\n    width:100%;\r\n    margin-bottom:15px;\r\n}\r\n.pay_tabs ul.nav-tabs{\r\n    border-bottom:transparent;\r\n}\r\n.pay_tabs ul li a{\r\n    border: 1px solid #929292;\r\n    border-radius: 5px;\r\n    color:#929292;\r\n    font-size:20px; \r\n}\r\n.pay_tabs ul li.active a{\r\n    background: #00b0f0;\r\n    font-size: 20px;\r\n    color: #fff;\r\n    border-color: #00b0f0;\r\n}\r\n.card_data{\r\n    background: #fff; \r\n    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\r\n    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\r\n    padding:15px 8em; \r\n    position: relative;\r\n    overflow:hidden; \r\n}\r\n.main_hd{\r\n    padding-bottom:15px;\r\n    margin-top: 0px;\r\n    border-bottom: 4px solid #00b0f0; \r\n}\r\n.pay_inner ul li{\r\n    width:50%;\r\n    margin-bottom:15px;\r\n}\r\n.pay_inner ul.nav-tabs{\r\n    border-bottom:transparent;\r\n}\r\n.pay_inner ul li a{\r\n    border:transparent;\r\n    border-bottom:4px solid #929292;\r\n    color:#929292;\r\n    font-size:18px; \r\n    border-radius:0px; \r\n}\r\n.pay_inner ul li.active a{\r\n    background: #fff;\r\n    font-size: 18px;\r\n    color:  #000;\r\n    border-radius:0px; \r\n    border-bottom-color: #00b0f0;\r\n}\r\n/* The container */\r\n.cstm_chk {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  cursor: pointer;\r\n  font-size:16px;\r\n  font-weight:normal; \r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.cstm_chk input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height:20px;\r\n  width:20px;\r\n  background-color: #eee;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.cstm_chk:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.cstm_chk input:checked ~ .checkmark {\r\n  background-color: #2196F3;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.cstm_chk input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.cstm_chk .checkmark:after {\r\n left: 7px;\r\n    top: 3px;\r\n    width: 6px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 2px 2px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n.mke-paymnt button.btn-primary{\r\n    background: #00b0f0;\r\n    font-size: 20px;\r\n    color: #fff;\r\n    border-color: #00b0f0; \r\n}\r\n.cvv_icon{\r\n    position: relative;\r\n}\r\n.cvv_icon i{\r\n    position: absolute;\r\n    top: 6.5px;\r\n    right: 9px;\r\n    font-size: 20px;\r\n\r\n}\r\n.card_data::after{\r\n    content: \"\";\r\n    border-left: 15px solid transparent;\r\n    border-right: 50px solid transparent;\r\n    border-top: 20em solid rgb(251, 221, 1);\r\n    position: absolute;\r\n    top: 0;\r\n    left: -16px;\r\n}\r\n.card_data::before{\r\n    content: \"\";\r\n    border-left: 50px solid transparent;\r\n    border-right: 15px solid transparent;\r\n    border-bottom: 20em solid rgb(251,185,28);\r\n    position: absolute;\r\n    height: 35em;\r\n    bottom: 0px;\r\n    right: -16px;\r\n}\r\n.card_img{\r\n  position: relative;\r\n}\r\n.card_img img{\r\n  position: absolute;\r\n  top:5px;\r\n  right:5px;\r\n}\r\n.wrap_img{\r\n    border-radius: 5px;\r\n    border: 1px solid #3a3a3a;\r\n    overflow: hidden;\r\n    padding: 12px;\r\n    margin-bottom: 25px;\r\n}\r\n/*pop up css*/\r\n.hdr{\r\n  margin-top: 0px;\r\n}\r\n.brdr-radius{\r\n  border-radius:50px; \r\n  position: relative;\r\n}\r\n.brdr-radius button.close\r\n{    -webkit-appearance: none;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border: 0;\r\n    right: 30px;\r\n    top: 5px;\r\n    font-size: 40px;\r\n    position: absolute;\r\n    z-index:99; \r\n}\r\n.rdio {\r\n     display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 25px;\r\n    cursor: pointer;\r\n    font-size: 20px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    font-weight: normal;\r\n}\r\n.rdio input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n  border-radius: 50%;\r\n}\r\n.rdio:hover input ~ .checkmark {\r\n  background-color: #ccc;\r\n}\r\n.rdio input:checked ~ .checkmark {\r\n  border:2px solid #2196F3;\r\n  background-color: #fff;\r\n}\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n.rdio input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n.rdio .checkmark:after {\r\n     top: 3px;\r\n    left: 3px;\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 50%;\r\n    background: #2196f3;\r\n}\r\n.crnt-plan-2{\r\n  padding-bottom: 0px;\r\n}\r\n/*checkbox*/\r\n.chk_cstm_5 {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 25px;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  font-weight:normal; \r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.chk_cstm_5 input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  height: 0;\r\n  width: 0;\r\n}\r\n.checkmark-2 {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #eee;\r\n}\r\n.chk_cstm_5:hover input ~ .checkmark-2 {\r\n  background-color: #ccc;\r\n}\r\n.chk_cstm_5 input:checked ~ .checkmark-2 {\r\n      border: 2px solid #2196f3;\r\n    background-color: #fff;\r\n}\r\n.checkmark-2:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n.chk_cstm_5 input:checked ~ .checkmark-2:after {\r\n  display: block;\r\n}\r\n.chk_cstm_5 .checkmark-2:after {\r\n  left: 8px;\r\n    top: 2px;\r\n    width: 6px;\r\n    height: 13px;\r\n    border: solid #2196f3;\r\n    border-width: 0px 2px 2px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n.pop_up button{\r\n  padding: 10px 65px;\r\n    font-size: 20px;\r\n    margin: 0px 32px;\r\n    border-radius: 55px;\r\n\r\n}\r\n.disabled {\r\n    color: gray;\r\n    cursor: not-allowed;\r\n    text-decoration: none;\r\n}\r\n/*ends*/\r\n/*ends*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-two-layout/subscription/subscription.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- new sec-1 -->\n<!--{{subscriptionInfo | json}} -->\n<div class=\"container sec-1\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-5 col-lg-offset-1\">\n\t\t\t<h3 class=\"text-center txt-theme\">Current Plan</h3>\n\t\t\t<div class=\"crnt-paln\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><i [ngClass]=\"currentPlan=='trial' ? 'fa fa-check chk' :'fa fa-check chk op' \"></i> Trial <small class=\"txt-theme\" *ngIf=\"currentPlan=='trial'\">(upto {{dd}}<sup>{{th}}</sup> {{month}} {{year}} )</small></li>\n\t\t\t\t\t<li><i [ngClass]=\"currentPlan=='Monthly' ? 'fa fa-check chk' :'fa fa-check chk op' \"></i>  Monthly  <small class=\"txt-theme\" *ngIf=\"currentPlan=='Monthly'\">(upto {{dd}}<sup>{{th}}</sup> {{month}} {{year}} )</small> </li>\n\t\t\t\t\t<li><i [ngClass]=\"currentPlan=='Quarterly' ? 'fa fa-check chk' :'fa fa-check chk op' \"></i> Quarterly <small class=\"txt-theme\" *ngIf=\"currentPlan=='Querterly'\">(upto {{dd}}<sup>{{th}}</sup> {{month}} {{year}} )</small> </li>\n\t\t\t\t\t<li><i [ngClass]=\"currentPlan=='Yearly' ? 'fa fa-check chk' :'fa fa-check chk op' \"></i> Yearly  <small class=\"txt-theme\" *ngIf=\"currentPlan=='Yearly'\">(upto {{dd}}<sup>{{th}}</sup> {{month}} {{year}} )</small></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-5\">\n\t\t\n\t\t\t<h3 class=\"text-center txt-theme\">Current Services</h3>\n\t\t\t<div class=\"crnt-paln\">\n\t\t\t\t<ul *ngIf=\"currentPlan!='trial'\">\n\t\t\t\t<li  *ngFor=\"let p of plan?.services; let i=index\"><i [ngClass]=\"checkService(p.services_name) ? 'fa fa-check chk' :'fa fa-check chk op'\"></i> <span *ngIf=\"getDiscount(p)!=0\" style=\"font-size:14px; font-weignt:bold\">{{p.services_name}} (₹ {{getPrice(p.baseRate)}} with {{getDiscount(p)}} % discount)</span> <span *ngIf=\"getDiscount(p)==0\" style=\"font-size:14px; font-weignt:bold\">{{p.services_name}} (₹ {{getPrice(p.baseRate)}})</span></li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t<ul *ngIf=\"currentPlan=='trial' && doctorData.type_of_doctor=='admin_doctor'\">\n\t\t\t\t\t<li><i class=\"fa fa-check chk\"></i> StartClinic + Assistant</li>\n\t\t\t\t\t<li><i [ngClass]=\"doctorData?.clinic_services?.Clinic_Pharmacy ? 'fa fa-check chk' :'fa fa-check chk op'\"></i> StartPharmacy</li>\n\t\t\t\t\t<li><i [ngClass]=\"doctorData?.clinic_services?.Clinic_Diagnostics ? 'fa fa-check chk' :'fa fa-check chk op'\"></i> SmartDiagostics</li>\n\t\t\t\t\t<li><i [ngClass]=\"doctorData?.clinic_services?.Clinic_IPD ? 'fa fa-check chk' :'fa fa-check chk op'\"></i> SmartIPD</li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t<ul *ngIf=\"currentPlan=='trial' && doctorData.type_of_doctor=='normal_doctor'\">\n\t\t\t\t\t<li><i class=\"fa fa-check chk\"></i> StartClinic + Assistant</li>\n\t\t\t\t\t<li><i [ngClass]=\"doctorData?.clinic_services?.Clinic_Pharmacy ? 'fa fa-check chk' :'fa fa-check chk op'\"></i> StartPharmacy</li>\n\t\t\t\t\t<li><i [ngClass]=\"doctorData?.clinic_services?.Clinic_Diagnostics ? 'fa fa-check chk' :'fa fa-check chk op'\"></i> SmartDiagostics</li>\n\t\t\t\t\t<li><i [ngClass]=\"doctorData?.clinic_services?.Clinic_IPD ? 'fa fa-check chk' :'fa fa-check chk op'\"></i> SmartIPD</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"col-lg-12\" style=\"padding-top:20px;\">\n\t\t\t<div class=\"text-center\">\n\t\t\t<button class=\"btn btn-grin btn-success\" (click)=\"openChangePopUp()\">CHANGE / RENEW *</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--{{doctorData | json}} -->\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"ftr_new text-center\">\n\t\t\t\t<h1>Total Subscription Amount : <span class=\"rd-clr\">₹ {{subTotal}}</span></h1>\n\t\t\t\t<h1>Plan Expiry - <span class=\"txt-theme\">{{dd}}<sup>{{th}}</sup> {{month}}, {{year}} : </span><span class=\"rd-clr\">{{left_days}} Days Left</span></h1>\n\t\t\t\t<a href=\"javascript:void(0);\"  [ngClass]=\"data_saved==false ? 'sve_rchrge disabled' : 'sve_rchrge' \" (click)=\"save()\">SAVE AND RECHARGE</a>\n\t\t\t\t<small>* Note: Changing your current plan or services will start a NEW plan  from the date of change replacing the existing one.</small>\n\t\t\t</div> \n\t\t</div>\n\t</div>\n</div>\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\" data-backdrop=\"static\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content brdr-radius\">\n          <!--button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button-->\n        <div class=\"modal-body\">\n        <div class=\"row\">\n        <div class=\"col-lg-12\">\n        <h3 class=\"text-center txt-theme hdr\">Choose Subscription Plan</h3>\n        </div>\n<div class=\"col-lg-6\">\n<h3 class=\"text-center txt-theme hdr\">Choose Plan</h3>\n<div class=\"crnt-paln crnt-plan-2\">\n<label class=\"rdio\">Trial\n <input type=\"radio\" checked=\"checked\" name=\"radio\" value=\"trial\" [(ngModel)]=\"currentPlan\" (change)=\"fetchPricing($event)\" [disabled]=\"!isTrial\">\n <span class=\"checkmark\"></span>\n</label>\n<label class=\"rdio\">Monthly\n <input type=\"radio\" name=\"radio\" value=\"Monthly\" [(ngModel)]=\"currentPlan\" (change)=\"fetchPricing($event)\">\n <span class=\"checkmark\"></span>\n</label>\n<label class=\"rdio\"> Quarterly\n <input type=\"radio\" name=\"radio\" value=\"Quarterly\" [(ngModel)]=\"currentPlan\" (change)=\"fetchPricing($event)\">\n <span class=\"checkmark\"></span>\n</label>\n<label class=\"rdio\">Yearly\n <input type=\"radio\" name=\"radio\" value=\"Yearly\" [(ngModel)]=\"currentPlan\" (change)=\"fetchPricing($event)\">\n <span class=\"checkmark\"></span>\n</label>\n</div>\n</div>\n<div class=\"col-lg-6\">\n<h3 class=\"text-center txt-theme hdr\">Choose Services</h3>\n<div class=\"crnt-paln crnt-plan-2\" *ngIf=\"currentPlan!='trial' && doctorData.type_of_doctor=='normal_doctor'\">\n<label class=\"chk_cstm_5\" *ngFor=\"let p of plan?.services\"><span *ngIf=\"getDiscount(p)\" style=\"font-size:14px; font-weignt:bold\">{{p.services_name}} (₹ {{getPrice(p.baseRate)}} with {{getDiscount(p)}} % discount)</span> <span *ngIf=\"getDiscount(p)==0\" style=\"font-size:14px; font-weignt:bold\">{{p.services_name}} (₹ {{getPrice(p.baseRate)}})</span>\n <input type=\"checkbox\" *ngIf=\"p.services_name=='SmartClinic'\" (change)=\"updatePricing(getPrice(p.baseRate), $event, p)\" [checked]=\"checkService('SmartClinic')\"/>\n <input type=\"checkbox\" *ngIf=\"p.services_name=='SmartPharmacy'\" [disabled]=\"adminDoctor?.clinic_services?.Clinic_Pharmacy!=true\" (change)=\"updatePricing(getPrice(p.baseRate), $event, p)\" [checked]=\"checkService(p.sevices_name)\" />\n <input type=\"checkbox\" *ngIf=\"p.services_name=='Smart IPD'\" [disabled]=\" adminDoctor.clinic_services.Clinic_IPD!=true\" (change)=\"updatePricing(getPrice(p.baseRate), $event, p)\" [checked]=\"checkService(p.sevices_name)\"/>\n <input type=\"checkbox\" *ngIf=\"p.services_name=='Smart Diagnostics'\" [disabled]=\" adminDoctor.clinic_services.Clinic_Diagnostics!=true\" (change)=\"updatePricing(getPrice(p.baseRate), $event, p)\" [checked]=\"checkService(p.sevices_name)\"/>\n <span class=\"checkmark-2\"></span>\n</label>\n</div>\n\n\n<div class=\"crnt-paln crnt-plan-2\" *ngIf=\"currentPlan!='trial' && doctorData.type_of_doctor=='admin_doctor'\">\n<label class=\"chk_cstm_5\" *ngFor=\"let p of plan?.services\"><span *ngIf=\"getDiscount(p)!=0\" style=\"font-size:14px; font-weignt:bold\">{{p.services_name}} (₹ {{getPrice(p.baseRate)}} with {{getDiscount(p)}} % discount)</span> <span *ngIf=\"getDiscount(p)==0\" style=\"font-size:14px; font-weignt:bold\">{{p.services_name}} (₹ {{getPrice(p.baseRate)}})</span>\n <input type=\"checkbox\" (change)=\"updatePricing(getPrice(p.baseRate), $event, p)\" [checked]=\"checkService(p.services_name)\" />\n <span class=\"checkmark-2\"></span>\n</label>\n</div>\n\n<div class=\"crnt-paln crnt-plan-2\" *ngIf=\"currentPlan=='trial' && doctorData.type_of_doctor=='admin_doctor'\">\n<label class=\"chk_cstm_5\">Smart Clinic + Smart Pharmacy\n <input type=\"checkbox\" [checked]=\"checkService('SmartClinic')\"/>\n <span class=\"checkmark-2\"></span>\n</label>\n<label class=\"chk_cstm_5\" > StartPharmacy\n <input type=\"checkbox\" [checked]=\"checkService('SmartPharmacy')\">\n <span class=\"checkmark-2\"></span>\n</label>\n<label class=\"chk_cstm_5\">SmartDiagostics\n <input type=\"checkbox\" [checked]=\"checkService('SmartDiagnostics')\">\n <span class=\"checkmark-2\"></span>\n</label>\n<label class=\"chk_cstm_5\">SmartIPD\n <input type=\"checkbox\" [checked]=\"checkService('SmartIPD')\">\n <span class=\"checkmark-2\"></span>\n</label>\n</div>\n\n<div class=\"crnt-paln crnt-plan-2\" *ngIf=\"currentPlan=='trial' && doctorData.type_of_doctor=='normal_doctor'\">\n<label class=\"chk_cstm_5\">Smart Clinic + Smart Pharmacy\n <input type=\"checkbox\" [checked]=\"checkService('SmartClinic')\"/>\n <span class=\"checkmark-2\"></span>\n</label>\n<label class=\"chk_cstm_5\"> SmartPharmacy\n <input type=\"checkbox\" [disabled]=\"adminDoctor?.clinic_services?.Clinic_Pharmacy!=true\" [checked]=\"checkService('SmartPharmacy')\">\n <span class=\"checkmark-2\"></span>\n</label>\n<label class=\"chk_cstm_5\" >SmartDiagostics\n <input type=\"checkbox\" [disabled]=\"adminDoctor?.clinic_services?.Clinic_Diagnostics!=true\" [checked]=\"checkService('SmartDiagnostics')\">\n <span class=\"checkmark-2\"></span>\n</label>\n<label class=\"chk_cstm_5\" >SmartIPD\n <input type=\"checkbox\" [disabled]=\"adminDoctor?.clinic_services?.Clinic_IPD!=true\" [checked]=\"checkService('SmartIPD')\">\n <span class=\"checkmark-2\"></span>\n</label>\n</div>\n\n</div>\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"ftr_new text-center\">\n\t\t<h3>Total Subscription Amount : <span class=\"rd-clr\">₹ {{subTotal}}</span></h3>\n\t\t<h3 *ngIf=\"dd\">Plan Expiry - <span class=\"txt-theme\">{{dd}}<sup>{{th}}</sup> {{month}}, {{year}} : </span><span class=\"rd-clr\">{{left_days}} Days Left</span></h3>\n\t\t\t<div class=\"pop_up\">\n\t\t\t<button class=\"btn btn-success\" (click)=\"saveData(1)\" [disabled]=\"checkDisabled()\">SAVE</button>&nbsp;&nbsp;&nbsp;\n\t\t\t<button class=\"btn btn-danger\" (click)=\"saveData(0)\">CANCEL</button>\n\t\t\t</div>\n\t\t</div> \n\t</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/header-two-layout/subscription/subscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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





var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent(router, toastr, userService, datePipe) {
        this.router = router;
        this.toastr = toastr;
        this.userService = userService;
        this.datePipe = datePipe;
        this.isTrial = false;
        this.currentDays = 0;
        this.purchaseDetail = [];
        this.currentService = [];
        this.plain_amount = 0;
        this.data_saved = false;
        this.gst_amount = 0;
        this.total_amt = 0;
        this.max_price = 0;
        this.services = [];
        this.subTotal = 0;
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        //is.GetDoctorDataById();
        //this.fetchPricing1(1);
        this.adminDoctor = JSON.parse(localStorage['doctorsOfSameClinic']);
        console.log(this.adminDoctor);
        this.GetDoctorDataById();
        this.fetchPricing1(1);
    }
    SubscriptionComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('plan_data');
        var someDate = new Date();
        var numberOfDaysToAdd = 7;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
        var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.dd = someDate.getDate();
        this.th = this.nth(this.dd);
        this.month = mlist[someDate.getMonth()];
        this.year = someDate.getFullYear();
        this.subTotal = 0;
        this.left_days = 7;
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log('doctorDataaa');
        console.log(this.doctorData);
        this.services.push('SmartClinic');
        if (localStorage['subscription_info']) {
            //alert(localStorage['subscription_info']);
            if (this.isJson(localStorage['subscription_info'])) {
                this.subscriptionInfo = JSON.parse(localStorage['subscription_info']);
                console.log(this.subscriptionInfo);
                if (this.subscriptionInfo) {
                    this.isTrial = this.subscriptionInfo.is_trial;
                }
                if (this.subscriptionInfo) {
                    this.subTotal = this.subscriptionInfo.plan_id;
                }
                var date2 = new Date();
                if (this.subscriptionInfo) {
                    var date1 = new Date(this.subscriptionInfo.trial_last_date);
                }
                var Difference_In_Time = date1.getTime() - date2.getTime();
                // To calculate the no. of days between two dates 
                var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                this.left_days = Math.round(Difference_In_Days);
            }
            else {
                this.subscriptionInfo = localStorage['subscription_info'];
            }
            // this.subscriptionInfo=JSON.parse(localStorage['subscription_info'])
            this.expiryDate = this.subscriptionInfo.trial_last_date;
            someDate = new Date(this.expiryDate);
            //mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
            this.dd = someDate.getDate();
            this.th = this.nth(this.dd);
            this.month = mlist[someDate.getMonth()];
            this.year = someDate.getFullYear();
            this.subTotal = 0;
            var currentDate = new Date().getTime();
            var startDate = currentDate;
            var endDate = Date.parse(this.expiryDate);
            var timeDiff = endDate - startDate;
            var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            this.left_days = daysDiff;
            this.subTotal = this.subscriptionInfo.plan_id;
            var date2 = new Date();
            var date1 = new Date(this.subscriptionInfo.trial_last_date);
            var Difference_In_Time = date1.getTime() - date2.getTime();
            // To calculate the no. of days between two dates 
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            this.left_days = Math.round(Difference_In_Days);
        }
        this.currentPlan = this.subscriptionInfo.subscription_id;
        console.log('---- Doctor Data ----');
        console.log(this.doctorData);
        if (!this.doctorData.clinic_services) {
            this.doctorData.clinic_services = [];
        }
        //this.services.push({'Item': 'Smart Clinic', 'Price':'Not Subscribed'});'
        if (this.doctorData.clinic_services.Clinic_Diagnostics) {
            this.services.push('SmartDiagnostics');
        }
        if (this.doctorData.clinic_services.Clinic_Pharmacy) {
            this.services.push('SmartPharmacy');
        }
        if (this.doctorData.clinic_services.Clinic_IPD) {
            this.services.push('SmartIPD');
        }
        this.adminDoctor = JSON.parse(localStorage['doctorsOfSameClinic']);
        console.log(this.adminDoctor);
        // this.compareDate = new Date(this.date.setDate(this.date.getDate()+6))
        // this.fetchSubscription()
        this.GetDoctorDataById();
        this.doctorData = JSON.parse(localStorage['doctorDetails']);
        console.log('Subscription Information:');
        console.log(this.doctorData.subscription_id);
        this.fetchPricing1(1);
        this.currentService = this.services;
        this.currentDays = this.left_days;
    };
    SubscriptionComponent.prototype.isJson = function (str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    SubscriptionComponent.prototype.openChangePopUp = function () {
        //alert(this.currentPlan);
        var price = 0;
        var mrp = 0;
        //this.purchaseDetail=[];
        for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
            var s = _a[_i];
            price += this.getAmount(s);
            mrp += parseFloat(this.getMRP(s));
            //discount=price*parseInt(this.getDiscount(s))/100;
            //mrp=price-discount;
        }
        this.subTotal = price;
        this.max_price = mrp;
        if (this.currentPlan == 'quarterly' || this.currentPlan == 'Quarterly') {
            this.left_days = 90;
            var someDate = new Date();
            var numberOfDaysToAdd = 90;
            someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
            var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            this.dd = someDate.getDate();
            this.th = this.nth(this.dd);
            this.month = mlist[someDate.getMonth()];
            this.year = someDate.getFullYear();
        }
        if (this.currentPlan == 'monthly' || this.currentPlan == 'Monthly') {
            this.left_days = 30;
            var someDate = new Date();
            var numberOfDaysToAdd = 30;
            someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
            var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            this.dd = someDate.getDate();
            this.th = this.nth(this.dd);
            this.month = mlist[someDate.getMonth()];
            this.year = someDate.getFullYear();
        }
        if (this.currentPlan == 'yearly' || this.currentPlan == 'Yearly') {
            this.left_days = 365;
            var someDate = new Date();
            var numberOfDaysToAdd = 365;
            someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
            var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            this.dd = someDate.getDate();
            this.th = this.nth(this.dd);
            this.month = mlist[someDate.getMonth()];
            this.year = someDate.getFullYear();
        }
        this.plain_amount = price;
        $('#myModal').modal('show');
    };
    SubscriptionComponent.prototype.saveData = function (flag) {
        if (flag == 0) {
            this.services = [];
            this.data_saved = false;
            $('#myModal').modal('hide');
            this.currentPlan = "trial";
            var someDate = new Date();
            var numberOfDaysToAdd = this.currentDays;
            someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
            var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            this.dd = someDate.getDate();
            this.th = this.nth(this.dd);
            this.month = mlist[someDate.getMonth()];
            this.year = someDate.getFullYear();
            this.subTotal = 0;
            if (this.subscriptionInfo) {
                this.subTotal = this.subscriptionInfo.plan_id;
                var date2 = new Date();
                var date1 = new Date(this.subscriptionInfo.trial_last_date);
                var Difference_In_Time = date1.getTime() - date2.getTime();
                var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                this.left_days = this.currentDays;
                this.currentPlan = this.subscriptionInfo.subscription_id;
            }
            this.services.push('SmartClinic');
            if (this.doctorData.clinic_services.Clinic_Diagnostics) {
                this.services.push('SmartDiagnostics');
            }
            if (this.doctorData.clinic_services.Clinic_Pharmacy) {
                this.services.push('SmartPharmacy');
            }
            if (this.doctorData.clinic_services.Clinic_IPD) {
                this.services.push('SmartIPD');
            }
            //this.services=this.currentService;
        }
        else {
            this.data_saved = true;
            console.log(this.services);
            var mrp = 0;
            var price = 0;
            var discount = 0;
            for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
                var s = _a[_i];
                price += this.getAmount(s);
                mrp += parseFloat(this.getMRP(s));
                //discount=price*parseInt(this.getDiscount(s))/100;
                //mrp=price-discount;
            }
            //this.subTotal=price;
            this.plain_amount = price;
            this.max_price = mrp;
            console.log('PRICE IS :' + price);
            $('#myModal').modal('hide');
            //console.log('DISCOUNTED PRICE IS :'+mrp);
        }
    };
    SubscriptionComponent.prototype.getDiscount1 = function (service) {
        var item = this.plan.services.filter(function (el) {
            return el.services_name == service;
        });
        console.log(this.plan);
        //return 0;
        if (this.plan.name == 'monthly') {
            return item[0].monthlyDiscount;
        }
        if (this.plan.name == 'quarterly') {
            return item[0].quarterDiscount;
        }
        if (this.plan.name == 'yearly') {
            return item[0].annualDiscount;
        }
    };
    SubscriptionComponent.prototype.getAmount = function (service) {
        //  alert(this.currentPlan);
        if (this.currentPlan != 'trial') {
            var item = this.plan.services.filter(function (el) {
                return el.services_name == service;
            });
            console.log(this.plan);
            if (this.plan.name == 'monthly') {
                return item[0].monthlyPlan;
            }
            if (this.plan.name == 'quarterly') {
                return item[0].quarterPlan;
            }
            if (this.plan.name == 'yearly') {
                return item[0].annualPlan;
            }
        }
        else {
            return 0;
        }
    };
    SubscriptionComponent.prototype.getMRP = function (service) {
        if (this.currentPlan != 'trial') {
            var item = this.plan.services.filter(function (el) {
                return el.services_name == service;
            });
            console.log(this.plan);
            if (this.plan.name == 'monthly') {
                return item[0].baseRate;
            }
            if (this.plan.name == 'quarterly') {
                return 3 * item[0].baseRate;
            }
            if (this.plan.name == 'yearly') {
                return 12 * item[0].baseRate;
            }
        }
        else {
            return 0;
        }
    };
    SubscriptionComponent.prototype.bigService = function (service) {
        console.log('Under big service');
        console.log(service);
        if (service.includes('Assistant')) {
            return true;
        }
        else {
            return false;
        }
    };
    SubscriptionComponent.prototype.fetchPricing = function (event) {
        var _this = this;
        // alert(this.currentPlan);
        this.services = [];
        this.subTotal = 0;
        var days = 0;
        this.userService.GetPricingListing().subscribe(function (data) {
            console.log(data.data.pricing_object);
            _this.gst = data.data.gst;
            if (_this.currentPlan == 'Monthly') {
                _this.plan = data.data.pricing_object.filter(function (item) {
                    return item.name == "monthly";
                });
                //alert('here');
                //alert(JSON.stringify(this.plan));
                _this.plan = _this.plan[0];
                console.log(_this.plan);
                days = 30;
                _this.left_days = days;
                var someDate = new Date();
                var numberOfDaysToAdd = days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
            }
            if (_this.currentPlan == 'Quarterly') {
                //	alert('monthly1');
                _this.plan = data.data.pricing_object.filter(function (item) {
                    return item.name == "quarterly";
                });
                _this.plan = _this.plan[0];
                console.log(_this.plan);
                //this.services=this.doctorData.services_purchased;
                days = 90;
                _this.left_days = days;
                var someDate = new Date();
                var numberOfDaysToAdd = days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
            }
            if (_this.currentPlan == 'Yearly') {
                _this.plan = data.data.pricing_object.filter(function (item) {
                    return item.name == "yearly";
                });
                _this.plan = _this.plan[0];
                console.log(_this.plan);
                //this.services=this.doctorData.services_purchased;
                days = 365;
                _this.left_days = days;
                var someDate = new Date();
                var numberOfDaysToAdd = days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
            }
        });
    };
    SubscriptionComponent.prototype.fetchPricing1 = function (event) {
        var _this = this;
        //alert(this.currentPlan);
        //this.services=[];
        //  this.subTotal=0;
        var days = 0;
        this.userService.GetPricingListing().subscribe(function (data) {
            console.log(data.data.pricing_object);
            _this.gst = data.data.gst;
            if (_this.currentPlan == 'Monthly') {
                _this.plan = data.data.pricing_object.filter(function (item) {
                    return item.name == "monthly";
                });
                _this.plan = _this.plan[0];
                //this.currentService=this.plan;
                console.log(_this.plan);
                //days=30;
                //this.left_days=days;
                var someDate = new Date();
                var numberOfDaysToAdd = _this.left_days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
            }
            if (_this.currentPlan == 'Quarterly') {
                //	alert('monthly1');
                _this.plan = data.data.pricing_object.filter(function (item) {
                    return item.name == "quarterly";
                });
                _this.plan = _this.plan[0];
                //this.currentService=this.plan;
                console.log(_this.plan);
                //this.services=this.doctorData.services_purchased;
                //days=90;
                //	this.left_days=days;
                var someDate = new Date();
                var numberOfDaysToAdd = _this.left_days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
            }
            if (_this.currentPlan == 'Yearly') {
                _this.plan = data.data.pricing_object.filter(function (item) {
                    return item.name == "yearly";
                });
                _this.plan = _this.plan[0];
                //this.currentService=this.plan;
                console.log(_this.plan);
                //this.services=this.doctorData.services_purchased;
                //days=365;
                //this.left_days=days;
                var someDate = new Date();
                var numberOfDaysToAdd = _this.left_days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
            }
        });
    };
    SubscriptionComponent.prototype.fetchPricing2 = function (event) {
        var _this = this;
        //  this.subTotal=0;
        var days = 0;
        // alert(this.currentPlan);
        this.userService.GetPricingListing().subscribe(function (data) {
            if (_this.currentPlan == 'Monthly') {
                //	alert('monthly');
                _this.plan = data.montly;
                days = 30;
                //this.left_days=days;
                var someDate = new Date();
                var numberOfDaysToAdd = days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
            }
            if (_this.currentPlan == 'Quarterly') {
                //	alert('monthly1');
                _this.plan = data.quarterly;
                //this.services=this.doctorData.services_purchased;
                days = 90;
                //this.left_days=days;
                var someDate = new Date();
                var numberOfDaysToAdd = days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
            }
            if (_this.currentPlan == 'Yearly') {
                _this.plan = data.yearly;
                //this.services=this.doctorData.services_purchased;
                days = 365;
                //this.left_days=days;
                var someDate = new Date();
                var numberOfDaysToAdd = days;
                someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
                var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                _this.dd = someDate.getDate();
                _this.th = _this.nth(_this.dd);
                _this.month = mlist[someDate.getMonth()];
                _this.year = someDate.getFullYear();
            }
        });
    };
    SubscriptionComponent.prototype.nth = function (d) {
        if (d > 3 && d < 21)
            return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    SubscriptionComponent.prototype.updatePricing = function (data, e, list) {
        var mrp = 0;
        var price = 0;
        this.purchaseDetail = [];
        var discount = list.monthlyDiscount;
        if (this.currentPlan == 'Quarterly') {
            //mrp=price;
            //discount=price*parseInt(list.quarterDiscount)/100;
            //price=price-discount;
        }
        if (this.currentPlan == 'Yearly') {
            //price=price*12;
            //mrp=price;
            //discount=price*parseInt(list.annualDiscount)/100;
            //price=price-discount;
        }
        if (this.currentPlan == 'Monthly') {
            //price=price;
            //mrp=price;
            //discount=price*parseInt(list.monthlyDiscount)/100;
            //price=price-discount;
        }
        if (!e.target.checked) {
            //alert('not here')
            //	this.plain_amount-=price;
            //this.subTotal-=price;
            //this.max_price-=mrp;
            //alert(this.max_price);
            //  console.log(this.subTotal)
            var index = this.services.indexOf(list.services_name);
            if (index > -1) {
                this.services.splice(index, 1);
            }
            //var index = this.monthlyPurchaseData.indexOf(list.type);
        }
        if (e.target.checked) {
            //alert('here');
            this.services.push(list.services_name);
            /* if (this.services.includes(list.services_name) === false){
              this.services.push(list.services_name);
            } */
            //this.plain_amount+=price;
            //  this.subTotal += price;
            //this.max_price+=mrp;
            //console.log(this.subTotal)
            //this.monthlyPurchaseData.push(list.type);
            //this.yearlyPurchaseData=[];
            //this.quarterlyPurchaseData=[];
        }
        for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
            var s = _a[_i];
            price += this.getAmount(s);
            mrp += parseFloat(this.getMRP(s));
            this.purchaseDetail.push({
                'doctor_id': this.doctorData._id,
                'doctm_clinic_id': this.doctorData.doctm_clinic_id,
                'amount_purchased': this.getAmount(s),
                'service': s,
                'discount': this.getDiscount(s),
                'gst': this.gst,
                'gst_amount': (parseFloat(this.getAmount(s)) * parseFloat(this.gst) / 100),
                'total_amt_with_gst': (parseFloat(this.getAmount(s)) + (parseFloat(this.getAmount(s)) * parseFloat(this.gst) / 100)),
                'plan_name': this.currentPlan,
                'razorpay_customer_id': 'xxxxxxx',
                'doctor_name': this.doctorData.first_name,
                'city': this.doctorData.clinic_details.city,
                'clinic_name': this.doctorData.clinic_details.clinic_name,
                'clinic_services': this.doctorData.clinic_services,
                'profile_image': this.doctorData.profile_image,
                'subscription_id': this.doctorData.subscription_id,
                'subscription_start': this.subscriptionInfo.createdAt,
                'subscription_expire': this.subscriptionInfo.trial_last_date
            });
        }
        localStorage['purchaseDetail'] = JSON.stringify(this.purchaseDetail);
        this.subTotal = price;
        this.max_price = mrp;
        console.log(this.purchaseDetail);
    };
    SubscriptionComponent.prototype.getDiscount = function (item) {
        if (this.currentPlan == 'Monthly') {
            if (item.monthlyDiscount) {
                return item.monthlyDiscount;
            }
            else {
                return 0;
            }
        }
        if (this.currentPlan == 'Yearly') {
            if (item.annualDiscount) {
                return item.annualDiscount;
            }
            else {
                return 0;
            }
        }
        if (this.currentPlan == 'Quarterly') {
            if (item.quarterDiscount) {
                return item.quarterDiscount;
            }
            else {
                return 0;
            }
        }
        return 0;
    };
    SubscriptionComponent.prototype.getPrice = function (price) {
        if (this.currentPlan == 'Monthly') {
            return price;
        }
        if (this.currentPlan == 'Quarterly') {
            return price * 3;
        }
        if (this.currentPlan == 'Yearly') {
            return price * 12;
        }
    };
    SubscriptionComponent.prototype.fetchSubscription = function () {
        var _this = this;
        this.loading = true;
        var ob = { doctor_id: this.doctorData._id };
        this.userService.fetchSubscription(ob).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
            if (data.response) {
                _this.subscriptionData = data;
                if (_this.subscriptionData.subscription.start_at) {
                    _this.start_date = new Date(_this.subscriptionData.subscription.start_at * 1000);
                    _this.start_date = _this.start_date.toGMTString();
                    /* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    this.start_date = this.start_date.toLocaleDateString('in-IN', options)(); */
                }
                //alert(this.subscriptionData.subscription.start_at);
                if (_this.subscriptionData.subscription.current_end) {
                    _this.end_date = new Date(_this.subscriptionData.subscription.current_end * 1000);
                    _this.end_date = _this.end_date.toGMTString();
                    /* var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    this.end_date = this.end_date.toLocaleDateString('in-IN', options); */
                }
                _this.subscriptionData.purchaseInformation.forEach(function (purchase) {
                    if (purchase.Price) {
                        _this.subTotal += parseFloat(purchase.Price);
                    }
                });
            }
            else {
                _this.currentPlan = "trial";
                console.log('here');
            }
        }, function (err) {
            console.log(err);
        });
    };
    SubscriptionComponent.prototype.save = function () {
        console.log(this.purchaseDetail);
        if (this.data_saved == true) {
            var ob = {
                services: this.services,
                plan: this.plan,
                plan_name: this.plan.name,
                total: this.subTotal,
                gst: this.gst,
                max_price: this.max_price,
                purchase_details: this.purchaseDetail
            };
            localStorage['plan_data'] = JSON.stringify(ob);
            this.router.navigate(['/header-two-layout/subscription-details']);
        }
        else {
            //do nothing
        }
    };
    SubscriptionComponent.prototype.checkService = function (service) {
        console.log(service);
        console.log(this.services);
        var index = this.services.indexOf(service);
        if (index > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    SubscriptionComponent.prototype.GetDoctorDataById = function () {
        this.userService.GetDoctorDataById(this.doctorData._id).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                localStorage['doctorDetails'] = JSON.stringify(data.data);
                //console.log(data.data.subscription_id);
                localStorage['subscription_info'] = JSON.stringify(data.data.subscription_id);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SubscriptionComponent.prototype.checkDisabled = function () {
        if (this.services.indexOf('SmartClinic') != -1) {
            return false;
        }
        else {
            return true;
        }
    };
    SubscriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subscription',
            template: __webpack_require__("../../../../../src/app/header-two-layout/subscription/subscription.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-two-layout/subscription/subscription.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-two-layout/subscription/subscription.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionModule", function() { return SubscriptionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscription_component__ = __webpack_require__("../../../../../src/app/header-two-layout/subscription/subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscription_routing_module__ = __webpack_require__("../../../../../src/app/header-two-layout/subscription/subscription-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SubscriptionModule = /** @class */ (function () {
    function SubscriptionModule() {
    }
    SubscriptionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__subscription_routing_module__["a" /* SubscriptionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__subscription_component__["a" /* SubscriptionComponent */]]
        })
    ], SubscriptionModule);
    return SubscriptionModule;
}());



/***/ })

});
//# sourceMappingURL=subscription.module.chunk.js.map