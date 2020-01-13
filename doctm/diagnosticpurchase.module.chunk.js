webpackJsonp(["diagnosticpurchase.module"],{

/***/ "../../../../../src/app/header-six-layout/diagnosticpurchase/diagnosticpurchase-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticpurchaseRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diagnosticpurchase_component__ = __webpack_require__("../../../../../src/app/header-six-layout/diagnosticpurchase/diagnosticpurchase.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__diagnosticpurchase_component__["a" /* DiagnosticpurchaseComponent */]
    }
];
var DiagnosticpurchaseRoutingModule = /** @class */ (function () {
    function DiagnosticpurchaseRoutingModule() {
    }
    DiagnosticpurchaseRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DiagnosticpurchaseRoutingModule);
    return DiagnosticpurchaseRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-six-layout/diagnosticpurchase/diagnosticpurchase.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cstm-hdr{\r\n\tpadding:15px 10px;\r\n\tfloat: left ;\r\n\twidth:100%;\r\n    padding-bottom: 0px;\r\n}\r\n.cstm-input input{\r\n\tborder-color:rgba(56, 94, 138, 1);\r\n\tmargin-top: 50px;\r\n}\r\n.cstm-input button{\r\n\tmargin-top: 50px;\r\n}\r\n.stock-tab{\r\n\tfloat: left;\r\n\twidth:100%;\r\n\t\r\n\tpadding-bottom: 0px;\r\n}\r\n.hd-one{\r\n\tdisplay: inline-block;\r\n\tpadding:10px 25.5px;\r\n\tborder:1px solid #000;\r\n\tbackground: #DAE5F1;\r\n}\r\n.tab-stock{\r\n\tmargin-top: 15px;\r\n}\r\n.tab-stock table tr td div.trans-input input{\r\n\twidth:97%;\r\n\tpadding:6px 8px; \r\n}\r\n.tab-stock table tr td div.pro-trans-input input{\r\n\twidth:98%;\r\n\tpadding:6px 8px; \r\n}\r\n.tab-stock table tr td select{\r\n\twidth: 82px;\r\n    height: 36px;\r\n    border-radius: 0px;\r\n    margin-right: 3px;\r\n}\r\n.tab-stock{\r\n\tmin-height:190px;\r\n\tmax-height: 190px;\r\n\toverflow-x: hidden;\r\n\toverflow-y: scroll;\r\n}\r\ntr.mg-top{\r\n\tmargin-top:5px;\r\n\tdisplay: block;\r\n}\r\ntd.ad-remove i.fa-minus{\r\n\tcolor:#f00;\r\n\tcursor: pointer;\r\n\tmargin-left: 10px;\r\n\tfont-size: 20px;\r\n}\r\ntd.ad-remove i.fa-plus{\r\n\tcolor:#92d050;\r\n\tcursor: pointer;\r\n\tmargin-left: 10px;\r\n\tfont-size: 20px;\r\n}\r\n.footer-cstm-1{\r\n\tpadding:15px 0px; \r\n}\r\ntr.foot-data{\r\n\tbackground:#EAF1DD;\r\n}\r\n#stck-prchse .modal-body{\r\n\tfloat: left;\r\n\twidth:100%;\r\n}\r\n#stck-prchse .modal-header h3{\r\n\tcolor:#002060;\r\n}\r\n#stck-prchse .modal-body button{\r\n\tbackground:#92D050;\r\n\tcolor:#fff;\r\n\tpadding: 3px 18px;\r\n\tfont-size: 16px;\r\n\tmin-width: 100px;\r\n}\r\nb.bill-no{\r\n\tfont-size: 18px;\r\n}\r\n#stck-prchse .modal-content{\r\n\tbackground-color: #f2f2f2;\r\n\tborder-radius:20px; \r\n}\r\n#stck-prchse .modal-dialog{\r\n\tdisplay:table;\r\n}\r\ndiv.hd-two{\r\n\tbackground-color: #FDE9D8;\r\n\tdisplay:inline-block;\r\n\tpadding:8px 21.3px;\r\n\tborder: 1px solid #ffc0c0; \r\n\tmin-height: 53px;\r\n\tmax-height: 53px;\r\n\tvertical-align:middle;\r\n    text-align: center;\r\n}\r\n@media (min-width: 992px){\r\n.modal-lg.modal-cstm {\r\n    width: 1185px;\r\n\t}\r\n}\r\n.tab-stock-2 table tr td select{\r\n\twidth:67px;\r\n}\r\n/* The container */\r\n.cstm-chk {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.cstm-chk input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n    position: absolute;\r\n    top: -6.5px;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #fff;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.cstm-chk:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.cstm-chk input:checked ~ .checkmark {\r\n    background-color: #fff;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.cstm-chk input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.cstm-chk .checkmark:after {\r\n    left: 9px;\r\n    top: 3px;\r\n    width: 6px;\r\n    height: 16px;\r\n    border: solid #000;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n.mg-top{\r\n\tmargin-top: 8px;\r\n}\r\n.data-div{\r\n    color: #000;\r\n    position: relative;\r\n    padding: 8px 30px;\r\n    border-radius: 4px;\r\n    font-size: 18px;\r\n    min-width: 150px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    background-color: #fff;\r\n    border: 1px solid #002060;\r\n    -webkit-transition: all 0.3s ease 0s;\r\n    transition: all 0.3s ease 0s;\r\n    \r\n}\r\n#stck-prchse button.close{\r\n\topacity: 1;\r\n\tfont-size: 30px;\r\n}\r\n/*ctsm table sorting ------------------------- -------------*/\r\n.ipdbook {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 30px 0;\r\n}\r\n.table-row {\r\n    background: -webkit-linear-gradient(top, #d6f8ff 0%, #a3ecff 72%);\r\n}\r\n.table {\r\n    border: 1px solid #eee;\r\n}\r\n.history {\r\n    background-color: transparent;\r\n}\r\n.table-row td, .table-head th {\r\n    border-top: none;\r\n    padding: 8px 10px;\r\n}\r\n.select-duration {\r\n    padding-bottom: 30px;\r\n}\r\n.select-duration h3 {\r\n    margin: 0;\r\n}\r\n.ok-btn {\r\n    background-color: transparent;\r\n    border: 1px solid #002160;\r\n    width: 50px;\r\n}\r\nthead.table-head, tbody.my-tbdy tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n    /* even columns width , fix width of table too*/\r\n}\r\nthead.table-head {\r\n    width: calc( 100% - 1em) ;\r\n}\r\n.table-scroll-outside{\r\n    min-height: 260px;\r\n    max-height: 260px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.table-scroll-outside table tbody{\r\n    display: block;\r\n}\r\n.btn-custom {\r\n    color: #002160;\r\n    position: relative;\r\n    padding: 6.5px 17px;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n}\r\n.ipdbook {\r\n    padding: 0px;\r\n}\r\n.select-duration{\r\n    padding-bottom: 15px;\r\n}\r\n.my-tbdy td{\r\n    vertical-align: middle;\r\n}\r\n.table-head tr th{\r\n    border-right:1px solid #fff;\r\n    background-color: #000;\r\n    color:#fff;\r\n}\r\n.table-head tr th h4{\r\n    font-size: 12px;\r\n}\r\n.my-tbdy tr td{\r\n    border-right:1px solid #fff;\r\n    background-color:#DAE5F1!important;\r\n    color:#000;\r\n    border-bottom:1px solid #fff;\r\n}\r\n.cstm-table{\r\n    margin-bottom: 0px;\r\n}\r\n.cstm-input3 input{\r\n    border-color:rgba(56, 94, 138, 1);\r\n    margin-top:40px;\r\n}\r\n.cstm-input input{\r\n    width:40%;\r\n    display: inline-block;\r\n}\r\n.cstm-input-2 input{\r\n    display: inline-block;\r\n    width:90%;\r\n}\r\n.foot-btm{\r\n    position: fixed; \r\n    bottom: 0;\r\n}\r\n.min i{\r\n    color:#ff0000;\r\n    font-size:22px;\r\n    cursor: pointer; \r\n}\r\n.add i{\r\n    color:#00B050;\r\n    font-size:22px;\r\n    cursor: pointer; \r\n}\r\n.chk-2{\r\n    top: -20.5px;\r\n}\r\n.mg-top{\r\n    margin-top: 0px;\r\n}\r\n.cstm-caret {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 17.5px;\r\n    background-color: #01b0f0;\r\n    z-index: 9;\r\n    right: 20px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 12px dashed;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n}\r\n.cstm-caret-big {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 22px;\r\n    background-color: #01b0f0;\r\n    z-index: 1;\r\n    right: 5px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 17px dashed;\r\n    border-right: 14px solid transparent;\r\n    border-left: 14px solid transparent;\r\n}\r\n.cstm-crt-wrap {\r\n    position: relative;\r\n}\r\n.regis-modal-body .select-opt .disabled {\r\n    color: #ddd;\r\n}\r\n.select-doctor{\r\n    font-size: 16px;\r\n    color: #fff;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    background-color: #01b0f0;\r\n    border-radius: 0px;\r\n    border: none;\r\n    position: relative;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-six-layout/diagnosticpurchase/diagnosticpurchase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cstm-hdr\">\n\t<div class=\"\">\n\t\t<div  class=\"col-lg-2\">\n\t\t\t<div  class=\"dashboard-header-logo\" tabindex=\"0\" ng-reflect-router-link=\"/header-six-layout/dashboard-\">\n\t\t\t\t<img _ngcontent-c3=\"\" class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerLink=\"/header-six-layout/dashboard-diagnostic\">\n\t\t\t</div>\n\t\t\t<div >\n\t\t\t\t<div _ngcontent-c3=\"\" class=\"dshbrd-btn\">\n\t\t\t\t\t<button  class=\"btn btn-custom\" routerLink=\"/header-six-layout/dashboard-diagnostic\" tabindex=\"0\" ng-reflect-router-link=\"/header-six-layout/dashboard-\"> Dashboard </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<form [formGroup]=\"stockPurchase\">\n\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t    <input type=\"text\" class=\"form-control input-lg\" [(ngModel)]=\"reqData.partyName\" placeholder=\"Consulting Doctor\" required=\"\" pattern=\"[a-zA-z ]+\" [formControl]=\"stockPurchase.controls['partyName']\">\n\t\t\t\t</div>\n\t\t\t\t <p style=\"color: #FF0000\" *ngIf=\"!stockPurchase.controls['partyName'].valid  && ( stockPurchase.controls['partyName'].touched)\">Invalid Party Name !!!</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    \t<input type=\"number\" class=\"form-control input-lg\" [(ngModel)]=\"reqData.invoiceNumber\" placeholder=\"Prescription ID\" required=\"\" pattern=\"[0-9]+\" [formControl]=\"stockPurchase.controls['invoiceNumber']\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    \t<input type=\"number\" class=\"form-control input-lg\" [(ngModel)]=\"reqData.billNumber\" placeholder=\"Invoice No.\" required=\"\" pattern=\"[0-9]+\" [formControl]=\"stockPurchase.controls['billNumber']\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    \t<input type=\"number\" class=\"form-control input-lg\" [(ngModel)]=\"reqData.billNumber\" placeholder=\"Date\" required=\"\" pattern=\"[0-9]+\" [formControl]=\"stockPurchase.controls['billNumber']\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    \t<input type=\"number\" class=\"form-control input-lg\" [(ngModel)]=\"reqData.billNumber\" placeholder=\"Patient Name\" required=\"\" pattern=\"[0-9]+\" [formControl]=\"stockPurchase.controls['billNumber']\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6\">\n                        <span  class=\"caret cstm-caret\"></span>\n                        <select class=\"form-control select-doctor cstm-opt\">\n                            <option selected=\"\" disabled=\"\" value=\"\">CONSULTING DOCTOR </option>\n                            <option value=\"\"> Dr. Gagandeep Sethi</option>\n                        </select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t\n\t</div>\n</div>\n<!-- cstm table -->\n<div class=\"stock-tab\">\n\t<div class=\"col-lg-12\">\n\t\t<table cellpadding=\"20px\" class=\"table cstm-table\" style=\"position: relative;\">\n    \t<thead class=\"table-head\" style=\"position: absolute;\">\n\t\t  \t<tr>\n\t\t\t    <th class=\"text-center\"><h5>Category</h5></th>\n                <th class=\"text-center\"><h5>Test Name/Details</h5></th>\n                <th class=\"text-center\"><h5>Rate</h5></th>\n                <th class=\"text-center\"><h5>Disc(%)</h5></th>\n                <th class=\"text-center\"><h5>Amount</h5></th>\n                <th class=\"text-center\"><h5>Action</h5></th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t</table>\n\t\t<div class=\"table-scroll-outside table-two\" style=\"margin-top: 50px;\">\n\t\t\t<table>\n\t\t\t\t<tbody class=\"tbod-max-w my-tbdy\">\n\t\t\t\t\t<tr class=\"table-row\" *ngFor=\"let tr of totalTr;let i = index;\">\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select  class=\"form-control\" class=\"form-control txtfield\" [(ngModel)]=\"reqData.opt[i]\">\n\t\t\t\t\t\t\t\t<option selected=\"\" value=\"\" disabled=\"\">Pathology</option>\t\n\t\t\t\t\t\t\t\t<option value=\"Tab\">Pathology</option>\n\t\t\t\t\t\t\t\t<option value=\"Cap\">X-Ray</option>\n\t\t\t\t\t\t\t\t<option value=\"Syr\">Ultrasound</option>\n\t\t\t\t\t\t\t\t<option value=\"Sus\">ECG</option>\n\t\t\t\t\t\t\t\t<option value=\"Emu\">TMT</option>\n\t\t\t\t\t\t\t\t<option value=\"Sol\">Echo</option>\n\t\t\t\t\t\t\t\t<option value=\"Inj\">Doppler Studies</option>\n\t\t\t\t\t\t\t\t<option value=\"Mou\">EEg</option>\n\t\t\t\t\t\t\t\t<option value=\"Pow\">Nerve Test</option>\n\t\t\t\t\t\t\t\t<option value=\"Cre\">Uroflowmetry</option>\n\t\t\t\t\t\t\t\t<option value=\"Gel\">Audiometry</option>\n\t\t\t\t\t\t\t\t<option value=\"Dro\">Bone Densitometry</option>\n\t\t\t\t\t\t\t\t<option value=\"Aer\">Eye Tests </option>\n\t\t\t\t\t\t\t\t<option value=\"Lot\">Lung Tests</option>\n\t\t\t\t\t\t\t\t<option value=\"Oin\">Others</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Urine Routine\" [(ngModel)]=\"reqData.product[i]\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<!-- <td  class=\"text-center\">\n\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" [(ngModel)]=\"reqData.pack1[i]\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;X&nbsp;&nbsp;</span>\n\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" [(ngModel)]=\"reqData.pack2[i]\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td> -->\n\t\t\t\t\t\t<td  class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">          \n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"99.50\" [(ngModel)]=\"reqData.mrp[i]\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td  class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">          \n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"5\" [(ngModel)]=\"reqData.mrp[i]\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td  class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">          \n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"113.34\" [(ngModel)]=\"reqData.mrp[i]\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td  class=\"text-center\">\n\t\t\t\t\t\t\t<span class=\"min icon-2\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-minus\" (click)=\"removeRow(i)\"> &nbsp;&nbsp;&nbsp;&nbsp;</i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"add icon-2\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-plus\" (click)=\"addRow()\" *ngIf=\"i==totalTr.length-1\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t  \t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\t\n</div>\n\n<!-- ends -->\n\n<!-- <div class=\"stock-tab\">\n\t<div class=\"col-lg-10 col-lg-offset-1 cstm-div\">\n\t\t<table cellpadding=\"20px\" class=\"table cstm-table\">\n            <thead class=\"table-head\">\n              <tr>\n                <th class=\"th-back brdr-right\"><h5>Type</h5></th>\n                <th class=\"th-back brdr-right prdct\"><h5>Product</h5></th>\n                <th class=\"th-back brdr-right\"><h5>Pack <small class=\"sn-txt\">(1x10)</small></h5></th>\n                <th class=\"th-back brdr-right\"><h5>M.R.P</h5></th>\n                <th class=\"th-back brdr-right\"><h5>QTY</h5></th>\n                <th class=\"th-back brdr-right\"><h5>P.Rate</h5></th>\n                <th class=\"th-back brdr-right\"><h5>CGST</h5></th>\n                <th class=\"th-back brdr-right\"><h5>SGST</h5></th>\n                <th class=\"th-back brdr-right\"><h5>Disc</h5></th>\n                <th class=\"th-back brdr-right\"><h5>Amount</h5></th>\n                <th class=\"th-back brdr-right\"><h5>Batch</h5></th>\n                <th class=\"th-back brdr-right\"><h5>Exp <small class=\"sn-txt\">(MM/YY)</small></h5></th>\n                <th class=\"th-back brdr-right\"><h5>Action</h5></th>\n              </tr>\n           </thead>\n            <tbody class=\"tbod-max-w cstm-tbd\">\n\t\t\t\t<tr class=\"\" *ngFor=\"let tr of totalTr;let i = index;\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<select  class=\"form-control txtfield\" [(ngModel)]=\"reqData.opt[i]\">\n\t\t\t\t\t\t\t<option selected=\"\" value=\"\" disabled=\"\">Type</option>\n\t                  \t\t<option>TAB</option>\n\t                  \t\t<option>CAP</option>\n\t                  \t\t<option>SYR</option>\n\t                  \t\t<option>SUS</option>\n\t                  \t\t<option>EMUL</option>\n\t                  \t\t<option>SOL</option>\n\t                  \t\t<option>INJ</option>\n\t                  \t\t<option>CRE</option>\n\t                  \t\t<option>OINT</option>\n\t                  \t\t<option>GEL</option>\n\t                  \t\t<option>LOT</option>\n\t                  \t\t<option>DROP</option>\n\t                  \t\t<option>UNIT</option>\n\t                  \t\t<option>ITEM</option>\n\t                  \t\t<option>STRP</option>\n\t                  \t\t<option>PCS</option>\n\t                  \t\t<option>BOX</option>\n\t                  \t\t<option>MISC</option>\n\t                    </select>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"prdct\">\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Product1\" [(ngModel)]=\"reqData.product[i]\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div two-inputs\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"1\" [(ngModel)]=\"reqData.pack1[i]\" class=\"\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"2\" [(ngModel)]=\"reqData.pack2[i]\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"99.50\" (blur)=\"getTotalRecord(i)\" [(ngModel)]=\"reqData.mrp[i]\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"10\" [(ngModel)]=\"reqData.quantity[i]\" (blur)=\"getTotalRecord(i)\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"70.50\" disabled=\"\" [(ngModel)]=\"reqData.rate[i]\" (blur)=\"getTotalRecord(i)\"  value=\"reqData.rate[i]\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"6\" [(ngModel)]=\"reqData.cgst[i]\" (blur)=\"getTotalRecord(i)\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"6\" [(ngModel)]=\"reqData.sgst[i]\" (blur)=\"getTotalRecord(i)\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"5\" [(ngModel)]=\"reqData.discount[i]\" (blur)=\"getTotalRecord(i)\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"705.0\" disabled=\"\" [(ngModel)]=\"reqData.amount[i]\" (blur)=\"getTotalRecord(i)\" class=\"\" value=\"reqData.amount[i]\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"B2334\" [(ngModel)]=\"reqData.batch[i]\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div two-inputs\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"mm\" [(ngModel)]=\"reqData.month[i]\" class=\"\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"yy\" [(ngModel)]=\"reqData.year[i]\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"ad-remove\">\n\t\t\t\t\t\t<i class=\"fa fa-minus\" (click)=\"removeRow(i)\"></i>\n\t\t\t\t\t\t<i class=\"fa fa-plus\" (click)=\"addRow()\" *ngIf=\"i==totalTr.length-1\"></i>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n          </tbody>\n        </table>\n\t</div>\n</div> -->\n<div class=\"footer-cstm-1\">\n\t<div class=\"col-lg-10 col-lg-offset-1\">\n\t  <table class=\"table table-bordered\">\n\t    <thead>\n\t      <tr class=\"foot-data\">\n\t        <th class=\"text-center\">Total Items</th>\n\t        <th class=\"text-center\">Sub Total</th>\n\t        <th class=\"text-center\">GST</th>\n\t        <th class=\"text-center\">Grand Total</th>\n\t      \n\t      </tr>\n\t    </thead>\n\t    <tbody>\n\t      <tr>\n\t        <td class=\"text-center\">5</td>\n\t        <td class=\"text-center\">2933.43</td>\n\t        <td class=\"text-center\">0</td>\n\t        <td class=\"text-center\">2933</td>\n\t    \n\t      </tr>\n\t      <tr>\n\t        <td class=\"text-center\" colspan=\"4\">\n\t        \t<div  class=\"dashboard-btns new-reg\">\n\t\t\t\t<button  class=\"btn btn-custom btn-1\" (click)='savePurchaseDetails()'>PRINT</button>\n\t\t\t\t</div>\n\t        </td>\n\t       \n\t        <td class=\"text-center\">\n\t        \t<h5>{{reqData.amount[i]}}</h5>\n\t\t\t</td>\n\t      </tr>\n\t    </tbody>\n\t  </table>\n\t</div>\n</div>\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"stck-prchse\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content modal-lg modal-cstm\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title text-center\">Return Purchase</h3>\n        </div>\n        <div class=\"modal-body\">\n\t        <div class=\"col-lg-3 col-lg-offset-1 text-right\">\n\t         \t<b class=\"bill-no\">Bill Number</b>\n\t        </div>\n\t        <div class=\"col-lg-4\">\n\t         \t<div class=\"form-group\">\n\t         \t\t<input type=\"text\" name=\"\" class=\"form-control\">\n\t         \t</div>\n\t        </div>\n\t        <div class=\"col-lg-4\">\n\t         \t<button class=\"btn btn-custom\">\n\t\t\t\t\t\t<div> Search </div>\n\t\t\t\t\t</button>\n\t        </div>\n\t        <div class=\"stock-tab\">\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<div class=\"hd-two text-center\">\n\t\t\t\t\t\t<div>Return</div>\n\t\t\t\t\t\t<div>Item</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Type</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Product Name</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Pack</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>M.R.P</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<div>Return</div>\n\t\t\t\t\t\t<div>QTY</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>P.Rate</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>CGST</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>SGST</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Disc</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Account</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Batch</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Exp</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<div class=\"table tab-stock tab-stock-2\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr class=\"mg-top\" *ngFor=\"let tr of totalTr;let i = index;\">\n\t\t\t\t\t\t<td width=\"88px\">\n\t\t\t\t\t\t\t<label class=\"cstm-chk\">\n\t\t\t\t\t\t\t  <input type=\"checkbox\">\n\t\t\t\t\t\t\t  <span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select  class=\"form-control txtfield\" [(ngModel)]=\"reqData.opt[i]\">\n\t\t                  \t\t<option selected=\"\" value=\"\">TAB</option>\n\t\t                  \t\t<option>CAP</option>\n\t\t                  \t\t<option>SYR</option>\n\t\t                  \t\t<option>SUS</option>\n\t\t                  \t\t<option>EMUL</option>\n\t\t                  \t\t<option>SOL</option>\n\t\t                  \t\t<option>INJ</option>\n\t\t                  \t\t<option>CRE</option>\n\t\t                  \t\t<option>OINT</option>\n\t\t                  \t\t<option>GEL</option>\n\t\t                  \t\t<option>LOT</option>\n\t\t                  \t\t<option>DROP</option>\n\t\t                  \t\t<option>UNIT</option>\n\t\t                  \t\t<option>ITEM</option>\n\t\t                  \t\t<option>STRP</option>\n\t\t                  \t\t<option>PCS</option>\n\t\t                  \t\t<option>BOX</option>\n\t\t                  \t\t<option>MISC</option>\n\t\t                    </select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"136px\">\n\t\t\t\t\t\t\t<div class=\"pro-trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Product1\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"1x10\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"99.50\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"10\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"70.50\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"5\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"705.0\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"B2334\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6/23\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"mg-top\" *ngFor=\"let tr of totalTr;let i = index;\">\n\t\t\t\t\t\t<td width=\"88px\">\n\t\t\t\t\t\t\t<label class=\"cstm-chk\">\n\t\t\t\t\t\t\t  <input type=\"checkbox\">\n\t\t\t\t\t\t\t  <span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select  class=\"form-control txtfield\" [(ngModel)]=\"reqData.opt[i]\">\n\t\t                  \t\t<option selected=\"\" value=\"\">TAB</option>\n\t\t                  \t\t<option>CAP</option>\n\t\t                  \t\t<option>SYR</option>\n\t\t                  \t\t<option>SUS</option>\n\t\t                  \t\t<option>EMUL</option>\n\t\t                  \t\t<option>SOL</option>\n\t\t                  \t\t<option>INJ</option>\n\t\t                  \t\t<option>CRE</option>\n\t\t                  \t\t<option>OINT</option>\n\t\t                  \t\t<option>GEL</option>\n\t\t                  \t\t<option>LOT</option>\n\t\t                  \t\t<option>DROP</option>\n\t\t                  \t\t<option>UNIT</option>\n\t\t                  \t\t<option>ITEM</option>\n\t\t                  \t\t<option>STRP</option>\n\t\t                  \t\t<option>PCS</option>\n\t\t                  \t\t<option>BOX</option>\n\t\t                  \t\t<option>MISC</option>\n\t\t                    </select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"136px\">\n\t\t\t\t\t\t\t<div class=\"pro-trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Product1\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"1x10\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"99.50\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"10\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"70.50\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"5\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"705.0\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"B2334\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6/23\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"mg-top\" *ngFor=\"let tr of totalTr;let i = index;\">\n\t\t\t\t\t\t<td width=\"88px\">\n\t\t\t\t\t\t\t<label class=\"cstm-chk\">\n\t\t\t\t\t\t\t  <input type=\"checkbox\">\n\t\t\t\t\t\t\t  <span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select  class=\"form-control txtfield\" [(ngModel)]=\"reqData.opt[i]\">\n\t\t                  \t\t<option selected=\"\" value=\"\">TAB</option>\n\t\t                  \t\t<option>CAP</option>\n\t\t                  \t\t<option>SYR</option>\n\t\t                  \t\t<option>SUS</option>\n\t\t                  \t\t<option>EMUL</option>\n\t\t                  \t\t<option>SOL</option>\n\t\t                  \t\t<option>INJ</option>\n\t\t                  \t\t<option>CRE</option>\n\t\t                  \t\t<option>OINT</option>\n\t\t                  \t\t<option>GEL</option>\n\t\t                  \t\t<option>LOT</option>\n\t\t                  \t\t<option>DROP</option>\n\t\t                  \t\t<option>UNIT</option>\n\t\t                  \t\t<option>ITEM</option>\n\t\t                  \t\t<option>STRP</option>\n\t\t                  \t\t<option>PCS</option>\n\t\t                  \t\t<option>BOX</option>\n\t\t                  \t\t<option>MISC</option>\n\t\t                    </select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"136px\">\n\t\t\t\t\t\t\t<div class=\"pro-trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Product1\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"1x10\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"99.50\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"10\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"70.50\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"5\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"705.0\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"B2334\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6/23\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t<tr class=\"mg-top\" *ngFor=\"let tr of totalTr;let i = index;\">\n\t\t\t\t\t\t<td width=\"88px\">\n\t\t\t\t\t\t\t<label class=\"cstm-chk\">\n\t\t\t\t\t\t\t  <input type=\"checkbox\">\n\t\t\t\t\t\t\t  <span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select  class=\"form-control txtfield\" [(ngModel)]=\"reqData.opt[i]\">\n\t\t                  \t\t<option selected=\"\" value=\"\">TAB</option>\n\t\t                  \t\t<option>CAP</option>\n\t\t                  \t\t<option>SYR</option>\n\t\t                  \t\t<option>SUS</option>\n\t\t                  \t\t<option>EMUL</option>\n\t\t                  \t\t<option>SOL</option>\n\t\t                  \t\t<option>INJ</option>\n\t\t                  \t\t<option>CRE</option>\n\t\t                  \t\t<option>OINT</option>\n\t\t                  \t\t<option>GEL</option>\n\t\t                  \t\t<option>LOT</option>\n\t\t                  \t\t<option>DROP</option>\n\t\t                  \t\t<option>UNIT</option>\n\t\t                  \t\t<option>ITEM</option>\n\t\t                  \t\t<option>STRP</option>\n\t\t                  \t\t<option>PCS</option>\n\t\t                  \t\t<option>BOX</option>\n\t\t                  \t\t<option>MISC</option>\n\t\t                    </select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"136px\">\n\t\t\t\t\t\t\t<div class=\"pro-trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Product1\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"1x10\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"99.50\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"10\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"70.50\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"5\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"705.0\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"B2334\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6/23\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr class=\"mg-top\" *ngFor=\"let tr of totalTr;let i = index;\">\n\t\t\t\t\t\t<td width=\"88px\">\n\t\t\t\t\t\t\t<label class=\"cstm-chk\">\n\t\t\t\t\t\t\t  <input type=\"checkbox\">\n\t\t\t\t\t\t\t  <span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<select  class=\"form-control txtfield\" [(ngModel)]=\"reqData.opt[i]\">\n\t\t                  \t\t<option selected=\"\" value=\"\">TAB</option>\n\t\t                  \t\t<option>CAP</option>\n\t\t                  \t\t<option>SYR</option>\n\t\t                  \t\t<option>SUS</option>\n\t\t                  \t\t<option>EMUL</option>\n\t\t                  \t\t<option>SOL</option>\n\t\t                  \t\t<option>INJ</option>\n\t\t                  \t\t<option>CRE</option>\n\t\t                  \t\t<option>OINT</option>\n\t\t                  \t\t<option>GEL</option>\n\t\t                  \t\t<option>LOT</option>\n\t\t                  \t\t<option>DROP</option>\n\t\t                  \t\t<option>UNIT</option>\n\t\t                  \t\t<option>ITEM</option>\n\t\t                  \t\t<option>STRP</option>\n\t\t                  \t\t<option>PCS</option>\n\t\t                  \t\t<option>BOX</option>\n\t\t                  \t\t<option>MISC</option>\n\t\t                    </select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"136px\">\n\t\t\t\t\t\t\t<div class=\"pro-trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Product1\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"1x10\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"99.50\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"10\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"70.50\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"5\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"705.0\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"B2334\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6/23\" class=\"cstm-put\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>\n        <div class=\"modal-footer\">\n         <div class=\"col-lg-6\">\n         \t<div class=\"row\">\n         \t\t<div class=\"col-lg-6\">\n         \t\t\t<h3 class=\"mg-top\">Total Refund Amount</h3>\n         \t\t</div>\n         \t\t<div class=\"col-lg-6 text-left\">\n         \t\t\t<button class=\"btn data-div\" readonly=\"\" disabled=\"\">\n\t\t\t\t\t\t<div> 1126.0</div>\n\t\t\t\t\t</button>\n         \t\t</div>\n         \t</div>\n         </div>\n         <div class=\"col-lg-6\">\n         \t<button class=\"btn btn-custom\">\n\t\t\t\t<div> Update </div>\n\t\t\t</button>\n         </div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>\n      \n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-six-layout/diagnosticpurchase/diagnosticpurchase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticpurchaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiagnosticpurchaseComponent = /** @class */ (function () {
    function DiagnosticpurchaseComponent(formBuilder, toastr) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    DiagnosticpurchaseComponent.prototype.ngOnInit = function () {
        //akshay
        this.reqData = {};
        this.reqData.opt = [];
        this.reqData.opt[0] = "";
        this.reqData.product = [];
        this.reqData.product[0] = "";
        this.reqData.pack1 = [];
        this.reqData.pack1[0] = "";
        this.reqData.pack2 = [];
        this.reqData.pack2[0] = "";
        this.reqData.quantity = [];
        this.reqData.quantity[0] = "";
        this.reqData.mrp = [];
        this.reqData.mrp[0] = "";
        this.reqData.rate = [];
        this.reqData.rate[0] = "";
        this.reqData.cgst = [];
        this.reqData.cgst[0] = "";
        this.reqData.sgst = [];
        this.reqData.sgst[0] = "";
        this.reqData.discount = [];
        this.reqData.discount[0] = "";
        this.reqData.amount = [];
        this.reqData.amount[0] = "";
        this.reqData.batch = [];
        this.reqData.batch[0] = "";
        this.reqData.month = [];
        this.reqData.month[0] = "";
        this.reqData.year = [];
        this.reqData.year[0] = "";
        this.totalTr = [1];
        this.reqData.expiry = [];
        this.stockPurchase = this.formBuilder.group({
            'billNumber': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*')])],
            'partyName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z ]*')])],
            'invoiceNumber': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*')])]
        });
    };
    DiagnosticpurchaseComponent.prototype.addRow = function () {
        this.totalTr.push(1);
        this.reqData.opt[this.totalTr.length - 1] = "";
        this.reqData.product[this.totalTr.length - 1] = "";
    };
    DiagnosticpurchaseComponent.prototype.removeRow = function (i) {
        if (this.totalTr.length == 1) {
            this.totalTr = [];
            this.totalTr.push(1);
            this.reqData.opt[0] = "";
            this.reqData.product[0] = "";
            this.reqData.pack1[0] = "";
            this.reqData.pack2[0] = "";
            this.reqData.quantity[0] = "";
            this.reqData.mrp[0] = "";
            this.reqData.rate[0] = "";
            this.reqData.cgst[0] = "";
            this.reqData.sgst[0] = "";
            this.reqData.discount[0] = "";
            this.reqData.amount[0] = "";
            this.reqData.batch[0] = "";
            this.reqData.month[0] = "";
            this.reqData.year[0] = "";
        }
        else {
            this.totalTr.splice(i, 1);
            this.reqData.opt.splice(i, 1); // = ""
            this.reqData.product.splice(i, 1); // = ""
            this.reqData.pack1.splice(i, 1); // = ""
            this.reqData.pack2.splice(i, 1); // = ""
            this.reqData.quantity.splice(i, 1); // = ""
            this.reqData.mrp.splice(i, 1); // = ""
            this.reqData.rate.splice(i, 1); // = ""
            this.reqData.cgst.splice(i, 1); // = ""
            this.reqData.sgst.splice(i, 1); // = ""
            this.reqData.discount.splice(i, 1); // = ""
            this.reqData.amount.splice(i, 1); // = ""
            this.reqData.batch.splice(i, 1); // = ""
            this.reqData.month.splice(i, 1); // = ""
            this.reqData.year.splice(i, 1); // = ""
        }
    };
    DiagnosticpurchaseComponent.prototype.savePurchaseDetails = function () {
        this.totalAmount = 0;
        this.totalCgst = 0;
        this.totalSgst = 0;
        this.totalDiscount = 0;
        this.totalQuantity = 0;
        this.totalMrp = 0;
        this.totalRate = 0;
        this.totalNetAmount = 0;
        this.totalPRate = 0;
        this.newTotalDiscount = 0;
        this.newTotalCgst = 0;
        this.newATotalSgst = 0;
        this.reqData.expiry = [];
        var thisYear = new Date().getFullYear().toString().substr(-2);
        var thisMonth = new Date().getMonth() + 1;
        for (var i = 0; i < this.reqData.opt.length; i++) {
            if (this.reqData.opt == '' || this.reqData.opt == null || this.reqData.opt == undefined) {
                this.toastr.warning('Invalid Type', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.product.length; i++) {
            if (this.reqData.product[i] == '' || this.reqData.product[i] == null || this.reqData.product[i] == undefined) {
                this.toastr.warning('Invalid Product', 'Warning');
                return;
            }
            else if (this.reqData.product[i].trim().length < 1) {
                this.toastr.warning('Invalid Product', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.pack1.length; i++) {
            if (this.reqData.pack1[i] < 1 || this.reqData.pack1 == '' || this.reqData.pack1 == null || this.reqData.pack1 == undefined) {
                this.toastr.warning('Invalid pack', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.pack2.length; i++) {
            if (this.reqData.pack2[i] < 1 || this.reqData.pack2 == '' || this.reqData.pack2 == null || this.reqData.pack2 == undefined) {
                this.toastr.warning('Invalid pack', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.mrp.length; i++) {
            if (this.reqData.mrp[i] < 1 || this.reqData.mrp == '' || this.reqData.mrp == null || this.reqData.mrp == undefined) {
                this.toastr.warning('Invalid mrp', 'Warning');
                return;
            }
            else {
                this.totalMrp += this.reqData.mrp[i];
            }
        }
        for (var i = 0; i < this.reqData.quantity.length; i++) {
            if (this.reqData.quantity[i] < 1 || this.reqData.quantity == '' || this.reqData.quantity == null || this.reqData.quantity == undefined) {
                this.toastr.warning('Invalid quantity', 'Warning');
                return;
            }
            else {
                this.totalQuantity += this.reqData.quantity[i];
            }
        }
        for (var i = 0; i < this.reqData.rate.length; i++) {
            if (this.reqData.rate[i] < 1 || this.reqData.rate == '' || this.reqData.rate == null || this.reqData.rate == undefined) {
                this.toastr.warning('Invalid purchase rate', 'Warning');
                return;
            }
            else {
                this.totalRate += this.reqData.rate[i];
            }
        }
        // for (var i = 0; i < this.reqData.cgst.length; i++) {
        //   if(this.reqData.cgst[i]<1 || this.reqData.cgst=='' ||this.reqData.cgst==null || this.reqData.cgst==undefined)
        //   {
        //     this.toastr.warning('Invalid cgst', 'Warning')
        //     return
        //   }else
        //   {
        //     this.totalCgst += this.reqData.cgst[i]
        //   }
        // }
        // for (var i = 0; i < this.reqData.sgst.length; i++) {
        //   if(this.reqData.sgst[i]<1 || this.reqData.sgst=='' ||this.reqData.sgst==null || this.reqData.sgst==undefined)
        //   {
        //     this.toastr.warning('Invalid sgst', 'Warning')
        //     return
        //   }else
        //   {
        //     this.totalSgst += this.reqData.sgst[i]
        //   }
        // }
        // for (var i = 0; i < this.reqData.discount.length; i++) {
        //   if(this.reqData.discount[i]<0 || this.reqData.discount=='' ||this.reqData.discount==null || this.reqData.discount==undefined)
        //   {
        //     this.toastr.warning('Invalid discount', 'Warning')
        //     return
        //   }else{
        //     this.totalDiscount += this.reqData.discount[i]
        //   }
        // }
        for (var i = 0; i < this.reqData.amount.length; i++) {
            if (this.reqData.amount[i] < 1 || this.reqData.amount == '' || this.reqData.amount == null || this.reqData.amount == undefined) {
                this.toastr.warning('Invalid Amount', 'Warning');
                return;
            }
            else {
                this.totalAmount += this.reqData.amount[i];
            }
        }
        for (var i = 0; i < this.reqData.batch.length; i++) {
            if (this.reqData.batch[i] == '' || this.reqData.batch[i] == null || this.reqData.batch[i] == undefined) {
                this.toastr.warning('Invalid batch', 'Warning');
                return;
            }
            else if (this.reqData.batch[i].trim().length < 1) {
                this.toastr.warning('Invalid batch', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.month.length; i++) {
            var currentYear = new Date().getFullYear().toString().substr(-2);
            var currentMonth = new Date().getMonth() + 1;
            var expiry = currentYear.toString() + currentMonth.toString();
            var enteredExpiry = this.reqData.year[i].toString() + this.reqData.month[i].toString();
            this.reqData.expiry.push(parseInt(enteredExpiry));
            if (parseInt(enteredExpiry) < parseInt(expiry)) {
                this.toastr.warning('Invalid expiry', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.month.length; i++) {
            if (this.reqData.month[i] > 12 || this.reqData.month[i] <= 0 || this.reqData.month == '' || this.reqData.month == null || this.reqData.month == undefined) {
                this.toastr.warning('Invalid month', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.year.length; i++) {
            if (this.reqData.year[i] < thisYear || this.reqData.year == '' || this.reqData.year == null || this.reqData.year == undefined) {
                this.toastr.warning('Invalid year', 'Warning');
                return;
            }
        }
        console.log(this.reqData);
    };
    DiagnosticpurchaseComponent.prototype.getTotalRecord = function (i) {
        this.totalPRate = 0;
        this.newTotalCgst = 0;
        this.newATotalSgst = 0;
        this.newTotalDiscount = 0;
        this.totalNetAmount = 0;
        this.reqData.amount[i] = this.reqData.rate[i] + (((this.reqData.cgst[i] + this.reqData.sgst[i] - this.reqData.discount[i]) * this.reqData.rate[i]) / 100);
        this.reqData.amount[i] = this.reqData.amount[i] * this.reqData.quantity[i];
        for (var j = 0; j < this.reqData.rate.length; j++) {
            if (this.reqData.rate[j]) {
                this.totalPRate += this.reqData.rate[j];
            }
        }
        for (var j = 0; j < this.reqData.cgst.length; j++) {
            if (this.reqData.cgst[j]) {
                this.newTotalCgst += this.reqData.cgst[j];
            }
        }
        for (var j = 0; j < this.reqData.sgst.length; j++) {
            if (this.reqData.sgst[j]) {
                if (this.reqData.sgst[j]) {
                    this.newATotalSgst += this.reqData.sgst[j];
                }
            }
        }
        for (var j = 0; j < this.reqData.discount.length; j++) {
            if (this.reqData.discount[j]) {
                this.newTotalDiscount += this.reqData.discount[j];
            }
        }
        for (var j = 0; j < this.reqData.amount.length; j++) {
            if (this.reqData.amount[j]) {
                this.totalNetAmount += this.reqData.amount[j];
            }
        }
    };
    DiagnosticpurchaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-diagnosticpurchase',
            template: __webpack_require__("../../../../../src/app/header-six-layout/diagnosticpurchase/diagnosticpurchase.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-six-layout/diagnosticpurchase/diagnosticpurchase.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], DiagnosticpurchaseComponent);
    return DiagnosticpurchaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-six-layout/diagnosticpurchase/diagnosticpurchase.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticpurchaseModule", function() { return DiagnosticpurchaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diagnosticpurchase_routing_module__ = __webpack_require__("../../../../../src/app/header-six-layout/diagnosticpurchase/diagnosticpurchase-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diagnosticpurchase_component__ = __webpack_require__("../../../../../src/app/header-six-layout/diagnosticpurchase/diagnosticpurchase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DiagnosticpurchaseModule = /** @class */ (function () {
    function DiagnosticpurchaseModule() {
    }
    DiagnosticpurchaseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__diagnosticpurchase_routing_module__["a" /* DiagnosticpurchaseRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSortModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__diagnosticpurchase_component__["a" /* DiagnosticpurchaseComponent */]]
        })
    ], DiagnosticpurchaseModule);
    return DiagnosticpurchaseModule;
}());



/***/ })

});
//# sourceMappingURL=diagnosticpurchase.module.chunk.js.map