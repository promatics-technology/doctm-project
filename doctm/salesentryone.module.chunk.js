webpackJsonp(["salesentryone.module"],{

/***/ "../../../../../src/app/header-five-layout/salesentryone/number-to-words.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberToWords; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberToWords = /** @class */ (function () {
    function NumberToWords() {
        this.a = [
            '',
            'One ',
            'Two ',
            'Three ',
            'Four ',
            'Five ',
            'Six ',
            'Seven ',
            'Eight ',
            'Nine ',
            'Ten ',
            'Eleven ',
            'Twelve ',
            'Thirteen ',
            'Fourteen ',
            'Fifteen ',
            'Sixteen ',
            'Seventeen ',
            'Eighteen ',
            'Nineteen '
        ];
        this.b = [
            '',
            '',
            'Twenty',
            'Thirty',
            'Forty',
            'Fifty',
            'Sixty',
            'Seventy',
            'Eighty',
            'Ninety'
        ];
    }
    NumberToWords.prototype.transform = function (value, args) {
        if (value) {
            var num = Number(value);
            if (num) {
                if ((num = num.toString()).length > 9) {
                    return 'We are not the Iron Bank, you can lower down the stakes :)';
                }
                var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
                if (!n) {
                    return '';
                }
                var str = '';
                str += (Number(n[1]) !== 0) ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) + 'Crore ' : '';
                str += (Number(n[2]) !== 0) ? (this.a[Number(n[2])] || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) + 'Lakh ' : '';
                str += (Number(n[3]) !== 0) ? (this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) + 'Thousand ' : '';
                str += (Number(n[4]) !== 0) ? (this.a[Number(n[4])] || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) + 'Hundred ' : '';
                str += (Number(n[5]) !== 0) ? ((str !== '') ? '' : '') +
                    (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' +
                        this.a[n[5][1]]) + '' : '';
                return str;
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    };
    NumberToWords = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'showInWords'
        })
    ], NumberToWords);
    return NumberToWords;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/salesentryone/salesentryone-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesentryoneRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__salesentryone_component__ = __webpack_require__("../../../../../src/app/header-five-layout/salesentryone/salesentryone.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__salesentryone_component__["a" /* SalesentryoneComponent */]
    }
];
var SalesentryoneRoutingModule = /** @class */ (function () {
    function SalesentryoneRoutingModule() {
    }
    SalesentryoneRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], SalesentryoneRoutingModule);
    return SalesentryoneRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/salesentryone/salesentryone.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard-header-logo img.img-responsive{\n\tmargin-top: 10px;\n}\n.btn-wrap{\n\tmargin-top: 20px;\n}\n.btn-grin{\n\tbackground-color:rgb(161, 210, 83);\n}\n.cstm-txt input{\n\tbackground-color:#76923C;\n\tcolor:#fff;\n}\n.cstm-txt input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color:#fff;\n}\n.cstm-txt input::-moz-placeholder { /* Firefox 19+ */\n  color:#fff;\n}\n.cstm-txt input:-ms-input-placeholder { /* IE 10+ */\n  color:#fff;\n}\n.cstm-txt input:-moz-placeholder { /* Firefox 18- */\n  color:#fff;\n}\n.vr-mid{\n\tvertical-align: middle;\n}\n.ex-txt{\n\tcolor:#000;\n}\n.btn-grin-2{\n\tpadding:20px 30px;  \n}\n.btn-custom{\n\t-webkit-transition:300ms;\n\ttransition:300ms;\n}\n.btn-custom:hover .ex-txt{\n\t-webkit-transition:300ms;\n\ttransition:300ms;\n\tcolor: #fff;\n}\n.cstm-row{\n\tmargin-top: 15px;\n}\n.cstm-row button{\n\tpadding:3px 30px;\n}\n.btn-wrap{\n\tmargin-top: 20px;\n}\n.btn-grin{\n\tbackground-color:rgb(161, 210, 83);\n}\n.cstm-txt input{\n\tbackground-color:#76923C;\n\tcolor:#fff;\n}\n.cstm-txt input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color:#fff;\n}\n.cstm-txt input::-moz-placeholder { /* Firefox 19+ */\n  color:#fff;\n}\n.cstm-txt input:-ms-input-placeholder { /* IE 10+ */\n  color:#fff;\n}\n.cstm-txt input:-moz-placeholder { /* Firefox 18- */\n  color:#fff;\n}\n.vr-mid{\n\tvertical-align: middle;\n}\n.ex-txt{\n\tcolor:#000;\n}\n.btn-grin-2{\n\tpadding:20px 30px;  \n}\n.btn-custom{\n\t-webkit-transition:300ms;\n\ttransition:300ms;\n}\n.btn-custom:hover .ex-txt{\n\t-webkit-transition:300ms;\n\ttransition:300ms;\n\tcolor: #fff;\n}\ndiv.ad-remove i.fa-minus{\n\tcolor:#f00;\n\tcursor: pointer;\n\tmargin-left: 10px;\n\tfont-size: 20px;\n}\ndiv.ad-remove i.fa-plus{\n\tcolor:#92d050;\n\tcursor: pointer;\n\tmargin-left: 10px;\n\tfont-size: 20px;\n}\n.ad-remove{\n\tmargin-right: 30px;\n}\n.txt{\n\t    margin-top: 15px;\n    margin-left: 18px;\n}\n.cstm-drpdown-cnsulted-doc {\n   \n    position: relative;\n}\n.smrt-ass-dropdown {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n.cstm-drpdown-cnsulted-doc select {\n   font-size: 13px;\n    color: #fff;\n    width: 100%;\n    position: relative;\n    cursor: pointer;\n    padding: 8px;\n    background-color: #01b0f0;\n    border-radius: 5px;\n    border: none;\n}\n.cstm-drpdown-cnsulted-doc option {\n    border-bottom: 1px #ccc dashed;\n    padding: 8px 7px;\n    -webkit-transition: .3s all;\n    transition: .3s all;\n    display: block;\n    color: #00b0f0;\n    border-radius: 0;\n    background-color: #fff;\n    font-size: 20px;\n}\n.cstm-caret-big-pharmacy {\n    display: inline-block;\n    width: 0;\n    cursor: pointer;\n    position: absolute;\n    height: 0;\n    margin-left: 4px;\n    color: #000;\n    top: 10px;\n    margin-top:3px;\n    background-color: #01b0f0;\n    z-index: 1;\n    right: 5px;\n    margin-bottom: 9px;\n    vertical-align: middle;\n    border-top: 10px dashed;\n    border-right: 10px solid transparent;\n    border-left: 10px solid transparent;\n}\n/*.stock-tab{\n\tfloat: left;\n\twidth:100%;\n\tpadding:5px 0px; \n\tpadding-bottom: 0px;\n}\n.hd-one{\n\tdisplay: inline-block;\n\tpadding:10px 25.5px;\n\tborder:1px solid #000;\n\tbackground: #DAE5F1;\n}\n/*.tab-stock{\n\tmargin-top: 15px;\n}*/\n.tab-stock table tr td div.trans-input input{\n\twidth:97%;\n\tpadding:6px 8px; \n}\n.tab-stock table tr td div.pro-trans-input input{\n\twidth:98%;\n\tpadding:6px 8px; \n}\n.tab-stock table tr td select{\n\twidth: 82px;\n    height: 36px;\n    border-radius: 0px;\n    margin-right: 3px;\n}\n.tab-stock{\n\tmin-height:190px;\n\tmax-height: 190px;\n\toverflow-x: hidden;\n\toverflow-y: scroll;\n}\ntr.mg-top{\n\tmargin-top:5px;\n\tdisplay: block;\n}\ntd.ad-remove i.fa-minus{\n\tcolor:#f00;\n\tcursor: pointer;\n\tmargin-left: 10px;\n\tfont-size: 20px;\n}\ntd.ad-remove i.fa-plus{\n\tcolor:#92d050;\n\tcursor: pointer;\n\tmargin-left: 10px;\n\tfont-size: 20px;\n}\n.footer-cstm-1{\n\tpadding:15px 0px; \n}\ntr.foot-data{\n\tbackground:#EAF1DD;\n}\n#stck-prchse .modal-body{\n\tfloat: left;\n\twidth:100%;\n}\n#stck-prchse .modal-header h3{\n\tcolor:#002060;\n}\n#stck-prchse .modal-body button{\n\tbackground:#92D050;\n\tcolor:#fff;\n\tpadding: 3px 18px;\n\tfont-size: 16px;\n\tmin-width: 100px;\n}\nb.bill-no{\n\tfont-size: 18px;\n}\n#stck-prchse .modal-content{\n\tbackground-color: #f2f2f2;\n\tborder-radius:20px; \n}\n#stck-prchse .modal-dialog{\n\tdisplay:table;\n}\ndiv.hd-two{\n\tbackground-color: #FDE9D8;\n\tdisplay:inline-block;\n\tpadding:8px 39.3px;\n\tborder: 1px solid #ffc0c0; \n\tmin-height: 53px;\n\tmax-height: 53px;\n\tvertical-align:middle;\n    text-align: center;\n}\n@media (min-width: 992px){\n.modal-lg.modal-cstm {\n    width: 1185px;\n\t}\n}\n.tab-stock-2 table tr td select{\n\twidth:67px;\n}\n/* The container */\n.cstm-chk {\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 22px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n/* Hide the browser's default checkbox */\n.cstm-chk input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n/* Create a custom checkbox */\n.checkmark {\n    position: absolute;\n    top: -6.5px;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #fff;\n}\n/* On mouse-over, add a grey background color */\n.cstm-chk:hover input ~ .checkmark {\n    background-color: #ccc;\n}\n/* When the checkbox is checked, add a blue background */\n.cstm-chk input:checked ~ .checkmark {\n    background-color: #fff;\n}\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n/* Show the checkmark when checked */\n.cstm-chk input:checked ~ .checkmark:after {\n    display: block;\n}\n/* Style the checkmark/indicator */\n.cstm-chk .checkmark:after {\n    left: 9px;\n    top: 3px;\n    width: 6px;\n    height: 16px;\n    border: solid #000;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n#stck-prchse button.close{\n\topacity: 1;\n\tfont-size: 30px;\n}\n/*ctsm table sorting ------------------------- -------------*/\n.ipdbook {\n    float: left;\n    width: 100%;\n    padding: 30px 0;\n}\n.table-row {\n    background: -webkit-linear-gradient(top, #d6f8ff 0%, #a3ecff 72%);\n}\n.table {\n    border: 1px solid #eee;\n}\n.history {\n    background-color: transparent;\n}\n.table-row td, .table-head th {\n    border-top: none;\n    padding: 8px 0px;\n}\n.select-duration {\n    padding-bottom: 30px;\n}\n.select-duration h3 {\n    margin: 0;\n}\n.ok-btn {\n    background-color: transparent;\n    border: 1px solid #002160;\n    width: 50px;\n}\n/*tbody.my-tbdy {\n    display: block;\n    height: 250px;\n    overflow: auto;\n}*/\nthead.table-head, tbody.my-tbdy tr {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n    /* even columns width , fix width of table too*/\n}\nthead.table-head {\n    width: calc( 100% - 1em) ;\n}\n.table-scroll-outside{\n    min-height: 300px;\n    max-height: 300px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n.table-scroll-outside table tbody{\n\tdisplay: block;\n}\n.btn-custom {\n    color: #002160;\n    position: relative;\n    padding: 6.5px 17px;\n    border-radius: 4px;\n    font-size: 14px;\n}\n.ipdbook {\n    padding: 0px;\n}\n.select-duration{\n    padding-bottom: 15px;\n}\n.my-tbdy td{\n\tvertical-align: middle;\n}\n.table-head tr th{\n\tborder-right:1px solid #fff;\n\tbackground-color: #000;\n\tcolor:#fff;\n}\n.table-head tr th h4{\n    font-size: 12px;\n}\n.my-tbdy tr td{\n\tborder-right:1px solid #fff;\n\tbackground-color:#DAE5F1!important;\n\tcolor:#000;\n\tborder-bottom:1px solid #fff;\n}\n.cstm-table{\n\tmargin-bottom: 0px;\n}\n.cstm-input input{\n\twidth:40%;\n\tdisplay: inline-block;\n}\n.cstm-input-2 input{\n\tdisplay: inline-block;\n\twidth:98%;\n}\n.foot-btm{\n\tposition: fixed; \n\tbottom: 0;\n}\n.min i{\n\tcolor:#ff0000;\n\tfont-size:22px;\n\tcursor: pointer; \n}\n.add i{\n\tcolor:#00B050;\n\tfont-size:22px;\n\tcursor: pointer; \n}\n.chk-2{\n\ttop: -20.5px;\n}\n.mg-top{\n    margin-top: 0px;\n}\n.cstm-input-new{\n    position: relative;\n}\n.cstm-input-new small.one, .cstm-input-new small.two{\n    position: absolute;\n}\nsmall.one{\n    top:5px;\n    right:10px;\n}\nsmall.two{\n    right: 4px;\n    top: 18px;\n    width: 40px;\n    text-align: center;\n    color: green;\n}\n.cstm-input-new input{\n    display: inline-block;\n    width: 50%;\n    padding-right: 5px;\n    padding-left: 5px;\n\n}\n.cstm-input-new span{\n    display: inline-block;\n}\n.tble-new{\n    width:100%!important;\n}\nsmall.three{\n        /* right: 31px; */\n    top: 18px;\n    /* width: 40px; */\n    text-align: center;\n    color: red;\n    position: absolute;\n    right: 1px;\n    font-size: 11px;\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-five-layout/salesentryone/salesentryone.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr\">\n\t<div class=\"\">\n\t\t<div  class=\"col-lg-2\">\n\t\t\t<div  class=\"dashboard-header-logo\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\">\n\t\t\t\t<img  _ngcontent-c3=\"\" class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerLink=\"/header-five-layout/dashboard-pharmacy\">\n\t\t\t</div>\n\t\t\t<div >\n\t\t\t\t<div  _ngcontent-c3=\"\" class=\"dshbrd-btn\">\n\t\t\t\t\t<button  class=\"btn btn-custom\" routerLink=\"/header-five-layout/dashboard-pharmacy\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\"> Cancel </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-10\">\n\t\t\t<div class=\"row cstm-row my-cstm-cl\">\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    <input class=\"form-control\" [(ngModel)]=\"reqData.patientMobile\" placeholder=\"Mobile Number\" type=\"text\" pattern=\"[0-9.]+\" maxLength=\"10\" [ngModelOptions]=\"{standalone: true}\" (blur)=\"findPatientAppointmentByPhone($event.target.value)\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"reqData.patientName\" placeholder=\"Patient Name\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"SearchPatientNameReg($event.target.value)\" [matAutocomplete]=\"autoPatNameReg\"/>\n                        <mat-autocomplete #autoPatNameReg=\"matAutocomplete\" >\n                          <mat-option *ngFor=\"let patient of patientListReg\" [value]=\"patient.name\">\n                            {{patient.name}}\n                          </mat-option>\n                        </mat-autocomplete>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-4 col-xs-12 text-center\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<h3 class=\"mg-top\"><label>{{today | date:'mediumDate' }}</label></h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-5 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t<div class=\"cstm-drpdown-cnsulted-doc\">\n\t\t\t\t\t\t <span  class=\"cstm-caret-big-pharmacy\"></span>\n\t\t\t\t\t\t<select [(ngModel)]=\"reqData.doctorName\">\n\t\t\t\t\t\t\t<option value=\"\" disabled=\"\">Select Doctor</option>\t\n\t\t\t\t\t\t\t<option selected=\"\" value=\"undefined\" >Other</option>\t\n\t\t\t\t\t\t\t<option *ngFor=\"let doctor of dataDoctors\" value=\"{{doctor._id}}\">{{doctor.first_name}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t<div class=\"cstm-drpdown-cnsulted-doc\">\n                        <span  class=\"cstm-caret-big-pharmacy\"></span>\n                        <select [(ngModel)]=\"payment_mode\">\n                            <option disabled=\"\" selected=\"\" value=\"\">Payment mode</option>\n                            <option value=\"Cash\">Cash </option>\n                            <option value=\"Online\">Online </option>    \n                        </select>\n                    </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-xs-12 cstm-input\">\n\t\t\t\t\t<button  class=\"btn btn-custom btn-block\" routerlink=\"/header-five-layout/dashboard-pharmacy\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\" data-toggle=\"modal\" data-target=\"#stck-prchse\">Return Sale</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\n\t</div>\n<!-- table  strt-->\n<div class=\"stock-tab\" style=\"float:left; width:100%;\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"new-wrap\">\n\t\t\t<table cellpadding=\"20px\" class=\"table cstm-table\" style=\"position: relative;\">\n\t    \t<thead class=\"table-head tb-pharmacy\" style=\"position: absolute;\">\n\t\t\t  \t<tr>\n\t\t\t\t  \t<th class=\"text-center\" width=\"100px\"><h4>Type</h4></th>\n\t\t\t\t    <th class=\"text-center\" width=\"200px\"><h4>Product Name</h4></th>\n\t\t\t\t    <th class=\"text-center\" width=\"150px\"><h4>Pack</h4></th>\n\t\t\t\t    <th class=\"text-center\" width=\"100px\"><h4>Batch</h4></th>\n\t\t\t\t    <th class=\"text-center\" width=\"90px\"><h4>Order QTY</h4></th>\n\t\t\t\t    <th class=\"text-center\" width=\"90px\"><h4>M.R.P./P</h4></th>\n\t\t\t\t    <th class=\"text-center\" width=\"90px\"><h4>Disc(%)</h4></th>\n\t\t\t\t    <th class=\"text-center\" width=\"90px\"><h4>Amount</h4></th>\n\t\t\t\t    <th class=\"text-center\" width=\"100px\"><h4>Action</h4></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t</table>\n\t\t<div class=\"table-scroll-outside\" style=\"margin-top: 50px;\">\n\t\t\t<table>\n\t\t\t\t<tbody class=\"tbod-max-w my-tbdy\">\n\t\t\t\t\t<tr class=\"table-row\" *ngFor=\"let tr of totalTr;let i = index;\">\n\t\t\t\t\t\t<td width=\"100px\">\n\t\t\t\t\t\t\t<select  class=\"form-control\" [(ngModel)]=\"reqData.opt[i]\">\n\t\t\t\t\t\t\t<option selected=\"\" value=\"\" disabled=\"\">Type</option>\t\n\t\t\t\t\t\t\t<option value=\"Tablet\">Tab</option>\n\t\t\t\t\t\t\t<option value=\"Capsule\">Cap</option>\n\t\t\t\t\t\t\t<option value=\"Syrup\">Syr</option>\n\t\t\t\t\t\t\t<option value=\"Suspension\">Sus</option>\n\t\t\t\t\t\t\t<option value=\"Emulsion\">Emu</option>\n\t\t\t\t\t\t\t<option value=\"Solution\">Sol</option>\n\t\t\t\t\t\t\t<option value=\"Injection\">Inj</option>\n\t\t\t\t\t\t\t<option value=\"MouthWash\">Mou</option>\n\t\t\t\t\t\t\t<option value=\"Powder\">Pow</option>\n\t\t\t\t\t\t\t<option value=\"Cream\">Cre</option>\n\t\t\t\t\t\t\t<option value=\"Gel\">Gel</option>\n\t\t\t\t\t\t\t<option value=\"Drops\">Dro</option>\n\t\t\t\t\t\t\t<option value=\"Aerosols\">Aer</option>\n\t\t\t\t\t\t\t<option value=\"Lotion\">Lot</option>\n\t\t\t\t\t\t\t<option value=\"Ointment\">Oin</option>\n\t\t\t\t\t\t\t<option value=\"Unit\">Unit</option>\n\t\t\t\t\t\t\t<option value=\"Box\">Box</option>\n\t\t\t\t\t\t\t<option value=\"Misc\">Misc</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"200px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Product\" [(ngModel)]=\"reqData.product[i]\" value=\"patientData.precription.tempMedicationArray[0].name\" (keyup)=\"onTextChangeOfMedName(reqData.opt[i],$event.target.value)\" [matAutocomplete]=\"auto\" (blur)=\"findSingleMedicinesFromStock(i,reqData.opt[i],$event.target.value)\">\n\t\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\" style=\"width:100%\" (optionSelected)='findSingleMedicinesFromStock(i,reqData.opt[i],reqData.product[i])'>\n\t\t\t\t\t\t\t\t  <mat-option *ngFor=\"let option of productNameSuggestion\" [value]=\"option\">\n\t\t\t\t\t\t\t\t\t{{option}}\n\t\t\t\t\t\t\t\t  </mat-option>\n\t\t\t\t\t\t\t\t</mat-autocomplete>\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"150px\" class=\"text-center\">\n\t\t\t\t\t\t\t<span class=\"cstm-input\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"\" [(ngModel)]=\"reqData.pack1[i]\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;X&nbsp;&nbsp;</span>\n\t\t\t\t\t\t\t<span class=\"cstm-input\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"\" [(ngModel)]=\"reqData.pack2[i]\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"100px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"\" readonly=\"\" disabled=\"\" [(ngModel)]=\"reqData.batch[i]\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"90px\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-new\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"reqData.quantity[i]\" (blur)=\"getTotalRecord(i)\">\n\t\t\t\t\t\t\t\t<!-- <span>{{reqData.medicineStock[i].total_stock}}</span> -->\n\t\t\t\t\t\t\t\t<small class=\"one\" *ngIf=\"reqData.medicineStock[i].total_stock>=1\"><b>Stock</b></small>\t\n\t\t\t\t\t\t\t\t<small class=\"two\" *ngIf=\"reqData.medicineStock[i].total_stock>=1\" ><b>{{reqData.medicineStock[i].total_stock}}</b></small>\n\t\t\t\t\t\t\t\t<small class=\"three\" *ngIf=\"reqData.medicineStock[i].total_stock==0 && reqData.product[i]!=''\" >Not in stock</small>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"90px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"reqData.mrp[i]\" readonly=\"\" disabled=\"\" (blur)=\"getTotalRecord(i)\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"90px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"reqData.discount[i]\" (blur)=\"getTotalRecord(i)\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"90px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"reqData.amount[i]\" (blur)=\"getTotalRecord(i)\" readonly=\"\" disabled=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"100px\" class=\"text-center\">\n\t\t\t\t\t\t\t<span class=\"min\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-minus\" (click)=\"removeRow(i)\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"add\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-plus\" (click)=\"addRow()\" *ngIf=\"i==totalTr.length-1\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t  \t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n\t\n\t<div class=\"col-lg-10 col-lg-offset-1 foot-btm\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-10 col-md-10 col-xs-12 col-xs-12\">\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<table class=\"table table-bordered\">\n\t\t\t\t\t    <thead>\n\t\t\t\t\t      <tr style=\"background:#EAF1DD;\">\n\t\t\t\t\t        <th class=\"text-center\">TOTAL ITEMS</th>\n\t\t\t\t\t        <th class=\"text-center\">SUB TOTAL</th>\n\t\t\t\t\t        <th class=\"text-center\">RETURN</th>\n\t\t\t\t\t        <th class=\"text-center\">GRAND TOTAL</th>\n\t\t\t\t\t      </tr>\n\t\t\t\t\t    </thead>\n\t\t\t\t\t    <tbody>\n\t\t\t\t\t    \t<tr>\n\t\t\t\t\t    \t\t<td class=\"text-center\" *ngIf=\"totalTr\">{{totalTr.length}}</td>\n\t\t\t\t\t    \t\t<td class=\"text-center\">{{totalNetAmount}}</td>\n\t\t\t\t\t    \t\t<td class=\"text-center\">{{returnEditable}}</td>\n\t\t\t\t\t    \t\t<td class=\"text-center\">{{partyTotal}}</td>\n\t\t\t\t\t    \t</tr>\n\t\t\t\t\t    </tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2 col-md-2 col-xs-12 col-xs-12 text-center\">\n\t\t\t\t<button class=\"btn btn-custom btn-grin btn-grin-2\" (click)='saveSalesDetails()'>\n\t\t\t\t\t<div> PRINT </div>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"stck-prchse\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content modal-lg modal-cstm\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"resetReturn()\">&times;</button>\n          <h3 class=\"modal-title text-center\">Return Sale</h3>\n        </div>\n        <div class=\"modal-body\">\n\t        <div class=\"col-lg-3 col-lg-offset-1 text-right\">\n\t         \t<b class=\"bill-no\">Receipt Number</b>\n\t        </div>\n\t        <div class=\"col-lg-4\">\n\t         \t<div class=\"form-group\">\n\t         \t\t<input type=\"number\" name=\"\" class=\"form-control\" [(ngModel)]=\"receiptNumberSearch\" (keyup)=\"onKey($event,'bill')\">\n\t         \t</div>\n\t        </div>\n\t        <div class=\"col-lg-4\">\n\t         \t<button class=\"btn btn-custom\" (click)=\"fetchBill()\">\n\t\t\t\t\t<div> Search </div>\n\t\t\t\t</button>\n\t        </div>\n\t        <div class=\"stock-tab\" *ngIf=\"billFetched\">\n\t        \t<div class=\"col-lg-12 text-center\">\n\t        \t\t<h3>{{receiptPatient}}</h3>\n\t        \t</div>\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<div class=\"table tab-stock tab-stock-2\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<thead class=\"table-head tble-new\">\n\t\t\t\t\t\t\t  \t<tr>\n\t\t\t\t\t\t\t\t  \t<th  class=\"text-center\"  width=\"120px\"><h4>Return item</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Type</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Product Name</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Pack</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>M.R.P</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Return QTY</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Disc%</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Amount</h4></th>\n\t\t\t\t\t\t\t\t    <th  class=\"text-center\"><h4>Batch</h4></th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr class=\"mg-top\" *ngFor=\"let tr of returnPurchaseArray.opt;let i = index;\">\n\t\t\t\t\t\t\t\t<td width=\"120px\">\n\t\t\t\t\t\t\t\t\t<label class=\"cstm-chk\">\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"returnStatus[i]\" [checked]=\"returnStatus[i]\" (change)=\"getTotalReturn()\">\n\t\t\t\t\t\t\t\t\t  <span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.opt[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"pro-trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.product[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.pack1[i]}} x {{returnPurchaseArray.pack2[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.mrp[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"\" class=\"cstm-put\" [(ngModel)]=\"returnQty[i]\" max=\"{{returnPurchaseArray.quantity[i]}}\" (blur)=\"getTotalReturn()\" disabled=\"{{getReturnStatus(i)}}\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.discount[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"0\" class=\"cstm-put\" value=\"{{returnPurchaseArray.amount[i]}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.batch[i]}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>\n        <div class=\"modal-footer\" *ngIf=\"billFetched\">\n         <div class=\"col-lg-6\">\n         \t<div class=\"row\">\n         \t\t<div class=\"col-lg-6\">\n         \t\t\t<h3 class=\"mg-top\">Total Refund Amount</h3>\n         \t\t</div>\n         \t\t<div class=\"col-lg-6 text-left\">\n         \t\t\t<button class=\"btn data-div\" readonly=\"\" disabled=\"\">\n\t\t\t\t\t\t<div> {{quantityReturn}}</div>\n\t\t\t\t\t</button>\n         \t\t</div>\n         \t</div>\n         </div>\n         <div class=\"col-lg-6\">\n         \t<button class=\"btn btn-custom\" (click)=\"openConfirmation()\">\n\t\t\t\t<div> Update </div>\n\t\t\t</button>\n\t\t\t<!-- updateReturnAmount -->\n         </div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>      \n    </div>\n</div>\n<!-- show the pdf -->\n<div class=\"modal fade\" id=\"pdfmodal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content modal-lg modal-cstm\">\n        <div class=\"modal-body\">\n        \t<div class=\"\" id=\"receiptPdf\" >\n\t\t\t\t<table width=\"700\" style=\"border:1px solid #4d4d4d; border-right:1px solid #4d4d4d;\">\n\t\t\t\t\t<tr style=\"border-bottom: 1px solid #4d4d4d;\">\n                        <td style=\"text-align: left;\" colspan=\"2\">\n\n                            <h3 style=\"margin-top: 10px; padding-left:15px; font-weight: lighter;\">GST Invoice </h3>\n\n                        </td>\n                        <td style=\"text-align:right;\" colspan=\"2\">\n\n                            <h5 style=\"padding-right:15px; font-weight: lighter;\">GSTIN: {{gstinNumber}}</h5>\n\n                        </td>\n                    </tr>\n\t\t\t\t\t<tr  style=\"border-bottom: 1px solid #4d4d4d;\">\n\t\t\t\t\t\t<td style=\"padding-left: 10px; padding-top: 10px; padding-bottom: 10px; border-right: 1px solid #4d4d4d;\">\n\t\t\t\t\t\t\t<h3 style=\"text-transform: uppercase;text-align:left; margin-top: 0px \">\n\t\t\t\t\t\t\t\t{{pharmacyName}}\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<h5 style=\"text-transform: uppercase;text-align:left; \">\n\t\t\t\t\t\t\t\t{{address}}\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5>Phone: {{phone}}</h5>\n\t\t\t\t\t\t\t<h5>DL. No.: {{drugLicense}}</h5>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td style=\"padding-left: 10px; padding-top: 10px; padding-bottom: 10px;\">\n\t\t\t\t\t\t\t<h5 style=\"text-transform: uppercase;text-align:left; margin-top: 0px;\">\n\t\t\t\t\t\t\t\tInv No\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5 style=\"text-transform: uppercase;text-align:left; \">\n\t\t\t\t\t\t\t\tPatient Name:\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5 style=\"text-transform: uppercase;text-align:left; \">\n\t\t\t\t\t\t\t\tP .mob\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5 style=\"text-transform: uppercase;text-align:left;\">Dr. name</h5>\n\t\t\t\t\t\t\t<h5 style=\"text-transform: uppercase;text-align:left;\">time</h5>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td colspan=\"1\" style=\"padding-left: 10px; padding-top: 10px; padding-bottom: 10px;border-right: 1px solid #4d4d4d;\">\n\t\t\t\t\t\t\t<h4 style=\"text-transform: uppercase;text-align:left; margin-top: 0px;\">\n\t\t\t\t\t\t\t\t: {{savedInvoiceId}}\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<h5 style=\"text-transform: uppercase;text-align:left; \">\n\t\t\t\t\t\t\t\t: {{reqData.patientName}}\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5 style=\"text-transform: uppercase;text-align:left; \">\n\t\t\t\t\t\t\t\t: {{reqData.patientMobile}}\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<h5 style=\"text-transform: uppercase;text-align:left;\" *ngIf=\"doctorName\">: {{getDoctorName(reqData.doctorName)}}</h5>\n\t\t\t\t\t\t\t<h5 style=\"text-transform: uppercase;text-align:left;\" *ngIf=\"!doctorName\">: Self</h5>\n\t\t\t\t\t\t\t<h5 style=\"text-transform: uppercase;text-align:left;\">: {{today | date:'mediumDate' }} {{today | date:'shortTime' }}</h5>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<table width=\"700\" style=\"border:1px solid #4d4d4d; border-right:1px solid #4d4d4d; border-top: transparent;\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Sr.</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Type</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Product Name</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Pack</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Batch</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">QTY.</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">MRP</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Disc. %</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Amount</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngFor=\"let list of totalTr;let i=index;\">\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{i+1}}</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{reqData.opt[i]}}</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{reqData.product[i]}}</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{reqData.pack1[i]}} x {{reqData.pack2[i]}}</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{reqData.batch[i]}}</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{reqData.quantity[i]}}</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{reqData.mrp[i]}}</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{reqData.discount[i]}}</td>\n\t\t\t\t\t\t<td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{reqData.amount[i]}}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<table width=\"700\" style=\"border:1px solid #4d4d4d; border-top:transparent;border-bottom: transparent;\" >\n\t\t\t\t\t<tr  style=\"\">\n\t\t\t\t\t\t<td style=\"padding-left: 10px; padding-top: 1px; padding-bottom: 1px;\" width=\"500px;\">\n\t\t\t\t\t\t\t<h4 style=\"text-transform: uppercase;text-align:left; float: left; width:50%; margin-top:-45px;\">\n\t\t\t\t\t\t\t\tTOTAL ITEMS\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<h4 style=\"text-transform: uppercase;text-align:right;  float: right; width:50%;margin-top:-45px;\" *ngIf=\"totalTr\">\n\t\t\t\t\t\t\t\t{{totalTr.length}}\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td style=\"padding-right: 10px; padding-top: 1px; padding-bottom: 1px;\" width=\"200px;\">\n\t\t\t\t\t\t\t<table width=\"450px\">\n\t\t\t\t\t\t\t\t<tr  style=\"\">\n\t\t\t\t\t\t\t\t\t<td style=\"padding-right: 10px; width:80%; padding-top: 1px; padding-bottom: 1px;\">\n\t\t\t\t\t\t\t\t\t\t<h4 style=\"text-transform: uppercase;text-align:right; \">\n\t\t\t\t\t\t\t\t\t\t\tSUB TOTAL\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td style=\"padding-right: 10px; width:20%; padding-top: 1px; padding-bottom: 1px;\">\n\t\t\t\t\t\t\t\t\t\t<h4 style=\"text-transform: uppercase;text-align:right; \">\n\t\t\t\t\t\t\t\t\t\t\t{{totalNetAmount}}\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr  style=\"\">\n\t\t\t\t\t\t\t\t\t<td style=\"padding-right: 10px; width:80%; padding-top: 1px; padding-bottom: 1px;\">\n\t\t\t\t\t\t\t\t\t\t<h4 style=\"text-transform: uppercase;text-align:right; \">\n\t\t\t\t\t\t\t\t\t\t\tRETURN\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td style=\"padding-right: 10px; width:20%; padding-top: 1px; padding-bottom: 1px;\">\n\t\t\t\t\t\t\t\t\t\t<h4 style=\"text-transform: uppercase;text-align:right; \">\n\t\t\t\t\t\t\t\t\t\t\t{{returnEditable}}\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr  style=\"\">\n\t\t\t\t\t\t\t\t\t<td style=\"padding-right: 10px; width:80%; padding-top: 1px; padding-bottom: 1px;\">\n\t\t\t\t\t\t\t\t\t\t<h4 style=\"text-transform: uppercase;text-align:right; \">\n\t\t\t\t\t\t\t\t\t\t\tGRAND TOTAL\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td style=\"padding-right: 10px; width:20%; padding-top: 1px; padding-bottom: 1px;\">\n\t\t\t\t\t\t\t\t\t\t<h4 style=\"text-transform: uppercase;text-align:right; \">\n\t\t\t\t\t\t\t\t\t\t\t{{partyTotal}}\n\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<table width=\"700\" style=\"border:1px solid #4d4d4d; border-right:1px solid #4d4d4d;border-top:transparent;\">\n\t\t\t\t\t<tr  style=\"border-top:1px solid #4d4d4d; border-bottom:1px solid #4d4d4d;\">\n\t\t\t\t\t\t<td  style=\"padding-left: 10px; padding-top: 10px; padding-bottom: 10px;\">\n\t\t\t\t\t\t\t<h4 style=\"text-transform: titlecase;text-align:left; \">\n\t\t\t\t\t\t\t\t {{partyTotal|showInWords}} Only\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t\t<table width=\"700\" style=\"border:1px solid #4d4d4d; border-right:1px solid #4d4d4d;border-top:transparent;\">\n\t\t\t\t\t<tr  style=\"\">\n\t\t\t\t\t\t<td  style=\"width:70%;padding-left: 10px; padding-top: 10px; padding-bottom: 10px; padding-right: 1px;\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<h4><b>Terms & Conditions</b></h4>\n\t\t\t\t\t\t\t\t<p  style=\"font-size: 14px; margin:8px 0px; \"  *ngIf=\"pharmacyData.dataSmartPharmacy.term1\">{{pharmacyData.dataSmartPharmacy.term1}}</p>\n\t\t\t\t\t\t\t\t<p  style=\"font-size: 14px; margin:8px 0px; \"  *ngIf=\"pharmacyData.dataSmartPharmacy.term2\">{{pharmacyData.dataSmartPharmacy.term2}}</p>\n\t\t\t\t\t\t\t\t<p  style=\"font-size: 14px; margin:8px 0px; \"  *ngIf=\"pharmacyData.dataSmartPharmacy.term3\">{{pharmacyData.dataSmartPharmacy.term3}}</p>\n\t\t\t\t\t\t\t\t<p  style=\"font-size: 14px; margin:8px 0px; \"  *ngIf=\"pharmacyData.dataSmartPharmacy.term4\">{{pharmacyData.dataSmartPharmacy.term4}}</p>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td style=\"width:30%;text-align: right;\">\n\t\t\t\t\t\t\t<div style=\"margin-top: 100px;padding-right: 10px;\">For {{pharmacyName}}</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>      \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-five-layout/salesentryone/salesentryone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesentryoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirmation_popup_custom_dialog_custom_dialog_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/custom-dialog/custom-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SalesentryoneComponent = /** @class */ (function () {
    function SalesentryoneComponent(formBuilder, toastr, userService, router, dialog) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.today = new Date();
        this.newMedicine = [];
    }
    SalesentryoneComponent.prototype.ngOnInit = function () {
        this.dataDoctors = [];
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails']);
        // this.patientData = JSON.parse(localStorage['patientDataForPharmacy'])
        // console.log(this.patientData)
        console.log(this.pharmacyData);
        if (this.pharmacyData.dataSmartPharmacy.address_filled) {
            this.pharmacyName = this.pharmacyData.dataSmartPharmacy.pharmacy_name;
            this.address = this.pharmacyData.dataSmartPharmacy.pharmacy_address;
            this.phone = this.pharmacyData.dataSmartPharmacy.pharmacy_phone;
            this.drugLicense = this.pharmacyData.dataSmartPharmacy.pharmacy_license;
            this.gstinNumber = this.pharmacyData.dataSmartPharmacy.pharmacy_gst_no;
            this.conditionOne = this.pharmacyData.dataSmartPharmacy.term1;
            this.conditionTwo = this.pharmacyData.dataSmartPharmacy.term2;
            this.conditionThree = this.pharmacyData.dataSmartPharmacy.term3;
            this.conditionFour = this.pharmacyData.dataSmartPharmacy.term4;
        }
        this.dataDoctors = this.pharmacyData.doctorsRegisteredForSmartClinic;
        console.log(this.dataDoctors);
        // this.reqData = {}
        // this.reqData.opt = []
        //  this.reqData.opt[0] = ""
        //  this.totalTr = [1]
        //Akshay
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
        this.reqData.discount = [];
        this.reqData.discount[0] = "";
        this.reqData.amount = [];
        this.reqData.amount[0] = "";
        this.reqData.batch = [];
        this.reqData.batch[0] = "";
        this.reqData.medicineStock = [];
        this.reqData.medicineStock[0] = {};
        this.reqData.medicineStock[0].total_stock = 0;
        this.totalTr = [1];
        this.returnQty = [];
        this.returnStatus = [];
        this.returnPurchaseArray = [];
        this.billFetched = false;
        this.receiptNumberSearch = [];
        this.returnEditable = 0;
        this.partyTotal = 0;
        this.cost_amount = 0;
        this.payment_mode = "Cash";
        this.stockToReturn = [];
        this.reqData.doctorName = undefined;
    };
    SalesentryoneComponent.prototype.addRow = function () {
        this.totalTr.push(1);
        this.reqData.opt[this.totalTr.length - 1] = "";
        this.reqData.product[this.totalTr.length - 1] = "";
        this.reqData.pack1[this.totalTr.length - 1] = "";
        this.reqData.pack2[this.totalTr.length - 1] = "";
        this.reqData.quantity[this.totalTr.length - 1] = "";
        this.reqData.mrp[this.totalTr.length - 1] = "";
        this.reqData.discount[this.totalTr.length - 1] = "";
        this.reqData.amount[this.totalTr.length - 1] = "";
        this.reqData.batch[this.totalTr.length - 1] = "";
        this.reqData.medicineStock[this.totalTr.length - 1] = {};
        this.reqData.medicineStock[this.totalTr.length - 1].total_stock = 0;
    };
    SalesentryoneComponent.prototype.removeRow = function (i) {
        if (this.totalTr.length == 1) {
            this.totalTr = [];
            this.totalTr.push(1);
            this.reqData.opt[0] = "";
            this.reqData.product[0] = "";
            this.reqData.pack1[0] = "";
            this.reqData.pack2[0] = "";
            this.reqData.quantity[0] = "";
            this.reqData.mrp[0] = "";
            this.reqData.discount[0] = "";
            this.reqData.amount[0] = "";
            this.reqData.batch[0] = "";
            this.reqData.medicineStock[0] = {};
            this.reqData.medicineStock[0].total_stock = 0;
        }
        else {
            this.totalTr.splice(i, 1);
            this.reqData.opt.splice(i, 1); // = ""
            this.reqData.product.splice(i, 1); // = ""
            this.reqData.pack1.splice(i, 1); // = ""
            this.reqData.pack2.splice(i, 1); // = ""
            this.reqData.quantity.splice(i, 1); // = ""
            this.reqData.mrp.splice(i, 1); // = ""
            this.reqData.discount.splice(i, 1); // = ""
            this.reqData.amount.splice(i, 1); // = ""
            this.reqData.batch.splice(i, 1); // = ""
            this.reqData.medicineStock.splice(i, 1); // = ""
        }
        this.patientListReg = [];
        this.patientListReg1 = [];
    };
    SalesentryoneComponent.prototype.getTotalRecord = function (i) {
        this.totalPRate = 0;
        this.newTotalDiscount = 0;
        this.totalNetAmount = 0;
        var discount;
        var rate;
        var cgst;
        var sgst;
        // if (this.reqData.cgst[i] == undefined || this.reqData.cgst[i] == "" || this.reqData.cgst[i]<0 || this.reqData.cgst[i]>100) {
        //     this.reqData.cgst[i] = 0
        //     cgst = 0
        // } else {
        //     cgst = this.reqData.cgst[i]
        // }
        // if (this.reqData.sgst[i] == undefined || this.reqData.sgst[i] == "" || this.reqData.sgst[i]<0 || this.reqData.sgst[i]>100) {
        //     this.reqData.sgst[i] = 0
        //     sgst = 0
        // } else {
        //     sgst = this.reqData.sgst[i]
        // }
        if (this.reqData.discount[i] == undefined || this.reqData.discount[i] == "" || this.reqData.discount[i] < 0 || this.reqData.discount[i] > 100
            || this.reqData.discount[i] == '-0') {
            this.reqData.discount[i] = 0;
            discount = 0;
        }
        else {
            discount = this.reqData.discount[i];
        }
        //this.reqData.amount[i] = rate + ((this.reqData.quantity[i] * (((cgst+sgst-discount)/100)*rate)))
        // mrp = mrp * this.reqData.quantity[i]
        this.reqData.amount[i] = (this.reqData.mrp[i] / (this.reqData.pack1[i] * this.reqData.pack2[i])) * this.reqData.quantity[i];
        this.reqData.amount[i] = this.reqData.amount[i] - ((discount / 100) * this.reqData.amount[i]);
        for (var j = 0; j < this.reqData.mrp.length; j++) {
            if (this.reqData.mrp[j]) {
                this.totalPRate += Math.ceil(this.reqData.mrp[j]);
            }
        }
        for (var j = 0; j < this.reqData.discount.length; j++) {
            if (this.reqData.discount[j]) {
                this.newTotalDiscount += Math.ceil(this.reqData.discount[j]);
            }
        }
        for (var j = 0; j < this.reqData.amount.length; j++) {
            if (this.reqData.amount[j]) {
                this.totalNetAmount += Math.ceil(this.reqData.amount[j]);
            }
        }
        this.partyTotal = Math.ceil(this.totalNetAmount - this.returnEditable);
    };
    SalesentryoneComponent.prototype.onTextChangeOfMedName = function (type, observation) {
        var _this = this;
        if (type != "") {
            var object = {
                type: type,
                observation: observation,
                smart_pharmacy_id: this.pharmacyData.dataSmartPharmacy._id,
            };
            this.userService.FindProductSuggestionFromStock(object).subscribe(function (data) {
                console.log(data);
                if (data.response == true) {
                    _this.productNameSuggestion = [];
                    _this.productNameSuggestion = data.data;
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    // fetchBill(){
    // 	if(this.reqData.patientName==''|| this.reqData.patientName==null || this.reqData.patientName==undefined){
    // 		this.toastr.warning('Please fill patient name', 'Warning')
    //             return
    // 	} else if (this.reqData.patientName.trim().length < 1) {
    //             this.toastr.warning('Please fill patient name', 'Warning')
    //             return
    //     }
    // 	if(this.reqData.patientMobile==''|| this.reqData.patientMobile==null || this.reqData.patientMobile==undefined){
    // 		this.toastr.warning('Please fill patient mobile number', 'Warning')
    //             return
    // 	}
    // if(this.reqData.patientName==''|| this.reqData.patientName==null || this.reqData.patientName==undefined){
    //         this.toastr.warning('Please fill patient name', 'Warning')
    //             return
    //     } else if (this.reqData.patientName.trim().length < 1) {
    //             this.toastr.warning('Please fill patient name', 'Warning')
    //             return
    //     }
    //     if(this.reqData.patreqData.ientMobile==''|| this.reqData.patientMobile==null || this.reqData.patientMobile==undefined){
    //         this.toastr.warning('Please fill patient mobile number', 'Warning')
    //             return
    //     }
    // 	for (var i = 0; i < this.reqData.opt.length; i++) {
    //         if (this.reqData.opt[i] == '' || this.reqData.opt[i] == null || this.reqData.opt[i] == undefined) {
    //             this.toastr.warning('Invalid Type', 'Warning')
    //             return
    //         }
    //     }        
    //     for (var i = 0; i < this.reqData.product.length; i++) {
    //         if (this.reqData.product[i] == '' || this.reqData.product[i] == null || this.reqData.product[i] == undefined) {
    //             this.toastr.warning('Invalid Product', 'Warning')
    //             return
    //         } else if (this.reqData.product[i].trim().length < 1) {
    //             this.toastr.warning('Invalid Product', 'Warning')
    //             return
    //         }
    //     }       
    //     for (var i = 0; i < this.reqData.pack1.length; i++) {
    //         if (this.reqData.pack1[i] < 1 || this.reqData.pack1[i] == '' || this.reqData.pack1[i] == null || this.reqData.pack1[i] == undefined) {
    //             this.toastr.warning('Invalid pack units', 'Warning')
    //             return
    //         }
    //     }
    //     for (var i = 0; i < this.reqData.pack2.length; i++) {
    //         if (this.reqData.pack2[i] < 1 || this.reqData.pack2[i] == '' || this.reqData.pack2[i] == null || this.reqData.pack2[i] == undefined) {
    //             this.toastr.warning('Invalid pack quantity', 'Warning')
    //             return
    //         }
    //     }
    //     for (var i = 0; i < this.reqData.batch.length; i++) {
    //         if (this.reqData.batch[i] == '' || this.reqData.batch[i] == null || this.reqData.batch[i] == undefined) {
    //             this.toastr.warning('Invalid batch', 'Warning')
    //             return
    //         } else if (this.reqData.batch[i].trim().length < 1) {
    //             this.toastr.warning('Invalid batch', 'Warning')
    //             return
    //         }
    //     }
    //     for (var i = 0; i < this.reqData.quantity.length; i++) {
    //         if (this.reqData.quantity[i] == '' || this.reqData.quantity[i] == null || this.reqData.quantity[i] == undefined) {
    //             this.toastr.warning('Invalid quantity', 'Warning')
    //             return
    //         }
    //     }
    //     for (var i = 0; i < this.reqData.mrp.length; i++) {
    //         if (this.reqData.mrp[i] == '' || this.reqData.mrp[i] == null || this.reqData.mrp[i] == undefined) {
    //             this.toastr.warning('Invalid MRP', 'Warning')
    //             return
    //         }
    //     }
    //     for (var i = 0; i < this.reqData.discount.length; i++) {
    //       if(this.reqData.discount[i]<0 || this.reqData.discount[i]>100)
    //       {
    //         this.toastr.warning('Invalid discount', 'Warning')
    //         return
    //       }
    //     }
    // }
    SalesentryoneComponent.prototype.fetchBill = function () {
        var _this = this;
        this.returnQty = [];
        this.returnStatus = [];
        this.returnPurchaseArray = [];
        this.billFetched = false;
        this.quantityReturn = 0;
        if (this.receiptNumberSearch != null && this.receiptNumberSearch != '' && !isNaN(this.receiptNumberSearch)) {
            this.loading = true;
            var ob = {
                smart_pharmacy_id: this.pharmacyData.dataSmartPharmacy._id,
                id: this.receiptNumberSearch
            };
            this.userService.FetchReceipt(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    if (data.data.walkin_patient) {
                        _this.receiptPatient = data.data.patient_name;
                    }
                    else {
                        _this.receiptPatient = data.data.dispensed_patient_id.registration.pateintName;
                    }
                    _this.billFetched = true;
                    _this.returnPurchaseArray = data.data.medicines[0];
                    _this.returnStatus = [];
                    _this.returnQty = [];
                    for (var i = 0; i < _this.returnPurchaseArray.quantity.length; i++) {
                        _this.returnStatus.push(false);
                        _this.returnQty.push(_this.returnPurchaseArray.quantity[i]);
                    }
                    _this.toastr.success(data.message, "Success");
                }
                else {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    SalesentryoneComponent.prototype.calculateReturn = function () {
        this.partyTotal = this.totalNetAmount - this.returnEditable;
    };
    // findMedicinesFromStock() {
    //     this.loading = true   
    //     let object = {
    //         id: this.pharmacyData.dataSmartPharmacy._id,
    //         medication: this.patientData.precription.tempMedicationArray
    //     }
    //     this.userService.FindMedicinesFromStock(object).subscribe(data => {
    //         console.log(data)
    //         this.loading = false
    //         if (data.response == true) {
    //             this.reqData.medicineStock = []
    //             for (var i = 0; i < data.data.length; i++) {
    //                 if(data.data[i].data != null){
    //                     this.reqData.medicineStock[data.data[i].i] = data.data[i]
    //                     this.reqData.pack1[data.data[i].i] = data.data[i].data.pack_units
    //                     this.reqData.pack2[data.data[i].i] = data.data[i].data.pack_quantity
    //                     this.reqData.batch[data.data[i].i] = data.data[i].data.batch
    //                     this.reqData.mrp[data.data[i].i] = data.data[i].data.mrp
    //                 }else{
    //                     this.reqData.pack1[data.data[i].i] = null
    //                     this.reqData.pack2[data.data[i].i] = null
    //                     this.reqData.batch[data.data[i].i] = null
    //                     this.reqData.mrp[data.data[i].i] = null
    //                     this.reqData.medicineStock[data.data[i].i] = null
    //                 }
    //             }
    //         }
    //     }, err => {
    //         console.log(err);
    //     })   
    // }
    SalesentryoneComponent.prototype.findSingleMedicinesFromStock = function (index, type, medication) {
        var _this = this;
        this.reqData.medicineStock[index] = {};
        this.reqData.medicineStock[index].total_stock = 0;
        this.reqData.pack1[index] = null;
        this.reqData.pack2[index] = null;
        this.reqData.batch[index] = null;
        this.reqData.mrp[index] = null;
        if (type != "") {
            // this.loading = true   
            var object = {
                id: this.pharmacyData.dataSmartPharmacy._id,
                type: type,
                medication: medication
            };
            this.userService.FindSingleMedicinesFromStock(object).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.reqData.medicineStock[index].data = data.data;
                    _this.reqData.medicineStock[index].i = index;
                    _this.reqData.medicineStock[index].total_stock = data.data1[0].total;
                    _this.reqData.pack1[index] = data.data.pack_units;
                    _this.reqData.pack2[index] = data.data.pack_quantity;
                    _this.reqData.batch[index] = data.data.batch;
                    _this.reqData.mrp[index] = data.data.mrp;
                    _this.reqData.product[index] = data.data.product;
                }
                else {
                    // this.toastr.error(data.message,"Error")
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    SalesentryoneComponent.prototype.resetReturn = function () {
        this.returnQty = [];
        this.returnStatus = [];
        this.returnPurchaseArray = [];
        this.receiptNumberSearch = null;
        this.billFetched = false;
        this.quantityReturn = 0;
    };
    SalesentryoneComponent.prototype.onKey = function (event, type) {
        if (event.keyCode == 13) {
            if (type == 'bill') {
                this.fetchBill();
            }
        }
    };
    SalesentryoneComponent.prototype.saveSalesDetails = function () {
        var _this = this;
        this.returnEditable = 0;
        this.quantityReturn = 0;
        var calculatedAmount = 0;
        this.returnPurchaseArray.qtyReturn = [];
        this.stockToReturn = [];
        var medicines = [];
        medicines.push({
            amount: [],
            batch: [],
            discount: [],
            expiry: [],
            medicineStock: [],
            mrp: [],
            opt: [],
            pack1: [],
            pack2: [],
            product: [],
            quantity: []
        });
        var return_total_amount = 0;
        var return_cost_amount = 0;
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray.amount[i] / this.returnPurchaseArray.quantity[i]);
                this.quantityReturn = this.quantityReturn + calculatedAmount;
                this.returnPurchaseArray.qtyReturn.push(this.returnQty[i]);
                this.stockToReturn.push({
                    stock_id: this.returnPurchaseArray.medicineStock[i].data.id,
                    qtyReturn: this.returnQty[i],
                    new_amount: this.returnPurchaseArray.amountReturn[i]
                });
                return_total_amount += this.returnPurchaseArray.amount[i] - this.returnPurchaseArray.amountReturn[i];
                medicines[0].batch.push(this.returnPurchaseArray.batch[i]);
                medicines[0].discount.push(this.returnPurchaseArray.discount[i]);
                medicines[0].mrp.push(this.returnPurchaseArray.mrp[i]);
                medicines[0].opt.push(this.returnPurchaseArray.opt[i]);
                medicines[0].pack1.push(this.returnPurchaseArray.pack1[i]);
                medicines[0].pack2.push(this.returnPurchaseArray.pack2[i]);
                medicines[0].product.push(this.returnPurchaseArray.product[i]);
                medicines[0].quantity.push(this.returnPurchaseArray.quantity[i] - this.returnQty[i]);
                medicines[0].amount.push(this.returnPurchaseArray.amount[i] - this.returnPurchaseArray.amountReturn[i]);
                medicines[0].medicineStock.push({
                    i: this.returnPurchaseArray.medicineStock[i].i,
                    data: {
                        amount: this.returnPurchaseArray.medicineStock[i].data.amount,
                        batch: this.returnPurchaseArray.medicineStock[i].data.batch,
                        bill_no: this.returnPurchaseArray.medicineStock[i].data.bill_no,
                        cgst: this.returnPurchaseArray.medicineStock[i].data.cgst,
                        createAt: this.returnPurchaseArray.medicineStock[i].data.createAt,
                        createdAt: this.returnPurchaseArray.medicineStock[i].data.createdAt,
                        discount: this.returnPurchaseArray.medicineStock[i].data.discount,
                        expiry: this.returnPurchaseArray.medicineStock[i].data.expiry,
                        id: this.returnPurchaseArray.medicineStock[i].data.id,
                        invoice_date: this.returnPurchaseArray.medicineStock[i].data.invoice_date,
                        month: this.returnPurchaseArray.medicineStock[i].data.month,
                        mrp: this.returnPurchaseArray.medicineStock[i].data.mrp,
                        p_rate: this.returnPurchaseArray.medicineStock[i].data.p_rate,
                        pack_quantity: this.returnPurchaseArray.medicineStock[i].data.pack_quantity,
                        pack_units: this.returnPurchaseArray.medicineStock[i].data.pack_units,
                        party_name: this.returnPurchaseArray.medicineStock[i].data.party_name,
                        product: this.returnPurchaseArray.medicineStock[i].data.product,
                        qty: this.returnPurchaseArray.medicineStock[i].data.qty,
                        sgst: this.returnPurchaseArray.medicineStock[i].data.sgst,
                        smart_pharmacy_id: this.returnPurchaseArray.medicineStock[i].data.smart_pharmacy_id,
                        sold_stock: this.returnPurchaseArray.medicineStock[i].data.sold_stock - this.returnPurchaseArray.qtyReturn[i],
                        current_stock: this.returnPurchaseArray.medicineStock[i].data.current_stock + this.returnPurchaseArray.qtyReturn[i],
                        total_stock: this.returnPurchaseArray.medicineStock[i].data.total_stock,
                        type: this.returnPurchaseArray.medicineStock[i].data.type,
                        updateAt: this.returnPurchaseArray.medicineStock[i].data.updateAt,
                        updatedAt: this.returnPurchaseArray.medicineStock[i].data.updatedAt,
                        year: this.returnPurchaseArray.medicineStock[i].data.year,
                        __v: this.returnPurchaseArray.medicineStock[i].data.__v,
                        _id: this.returnPurchaseArray.medicineStock[i].data._id
                    }
                });
            }
        }
        for (var ii = 0; ii < medicines[0].medicineStock.length; ii++) {
            return_cost_amount += (medicines[0].medicineStock[ii].data.amount * medicines[0].quantity[ii]) / (medicines[0].medicineStock[ii].data.pack_units * medicines[0].medicineStock[ii].data.pack_quantity * medicines[0].medicineStock[ii].data.qty);
        }
        this.returnEditable = this.quantityReturn;
        this.partyTotal = this.totalNetAmount - this.returnEditable;
        this.reqData.expiry = [];
        var thisYear = new Date().getFullYear().toString().substr(-2);
        var thisMonth = new Date().getMonth() + 1;
        if (this.reqData.patientMobile == '' || this.reqData.patientMobile == null || this.reqData.patientMobile == undefined) {
            this.toastr.warning('Please fill patient mobile number', 'Warning');
            return;
        }
        else if (this.reqData.patientMobile.length != 10 || isNaN(this.reqData.patientMobile)) {
            this.toastr.warning('Please enter valid mobile number', 'Warning');
            return;
        }
        if (this.reqData.patientName == '' || this.reqData.patientName == null || this.reqData.patientName == undefined) {
            this.toastr.warning('Please fill patient name', 'Warning');
            return;
        }
        else if (this.reqData.patientName.trim().length < 1) {
            this.toastr.warning('Please fill patient name', 'Warning');
            return;
        }
        for (var i = 0; i < this.reqData.opt.length; i++) {
            if (this.reqData.opt[i] == '' || this.reqData.opt[i] == null || this.reqData.opt[i] == undefined) {
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
            if (this.reqData.pack1[i] < 1 || this.reqData.pack1[i] == '' || this.reqData.pack1[i] == null || this.reqData.pack1[i] == undefined) {
                this.toastr.warning('Invalid pack', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.pack2.length; i++) {
            if (this.reqData.pack2[i] < 1 || this.reqData.pack2[i] == '' || this.reqData.pack2[i] == null || this.reqData.pack2[i] == undefined) {
                this.toastr.warning('Invalid pack', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.mrp.length; i++) {
            if (this.reqData.mrp[i] < 1 || this.reqData.mrp[i] == '' || this.reqData.mrp[i] == null || this.reqData.mrp[i] == undefined) {
                this.toastr.warning('Invalid mrp', 'Warning');
                return;
            }
            else {
                this.totalMrp += this.reqData.mrp[i];
            }
        }
        for (var i = 0; i < this.reqData.quantity.length; i++) {
            if (this.reqData.quantity[i] < 1 || this.reqData.quantity[i] == '' || this.reqData.quantity[i] == null || this.reqData.quantity[i] == undefined) {
                this.toastr.warning('Invalid quantity', 'Warning');
                return;
            }
            else {
                this.totalQuantity += this.reqData.quantity[i];
            }
        }
        for (var i = 0; i < this.reqData.amount.length; i++) {
            if (this.reqData.amount[i] < 1 || this.reqData.amount[i] == '' || this.reqData.amount[i] == null || this.reqData.amount[i] == undefined) {
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
        this.cost_amount = 0;
        for (var ii = 0; ii < this.reqData.medicineStock.length; ii++) {
            this.cost_amount += (this.reqData.medicineStock[ii].data.amount * this.reqData.quantity[ii]) /
                (this.reqData.medicineStock[ii].data.pack_units * this.reqData.medicineStock[ii].data.pack_quantity * this.reqData.medicineStock[ii].data.qty);
            // console.log(this.reqData.medicineStock[ii].data.amount, this.reqData.quantity[ii])
            // console.log()
        }
        var ob = {
            smart_pharmacy_id: this.pharmacyData.dataSmartPharmacy._id,
            // dispensed_patient_id:this.patientData._id,
            medicines: this.reqData,
            total_amount: this.totalNetAmount,
            cost_amount: this.cost_amount,
            payment_mode: this.payment_mode,
            stockToReturn: this.stockToReturn,
            patient_name: this.reqData.patientName,
            patient_mobile: this.reqData.patientMobile,
            doctor_id: this.reqData.doctorName,
            return_id: this.receiptNumberSearch,
            updateSalesMedicines: medicines,
            return_total_amount: return_total_amount,
            return_cost_amount: return_cost_amount
        };
        console.log(ob);
        this.loading = true;
        this.userService.CreateSalesEntryWalkin(ob).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
            if (data.response == true) {
                _this.toastr.success(data.message, "Success");
                _this.savedInvoiceId = data.data.id;
                _this.today = new Date();
                setTimeout(function () {
                    $('#receiptPdf').printThis({
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
                    // setTimeout(() => {
                    _this.router.navigate(['/header-five-layout/dashboard-pharmacy']);
                    // }, 3000);
                }, 1000);
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    SalesentryoneComponent.prototype.getReturnStatus = function (i) {
        if (this.returnStatus[i] == true) {
            return false;
        }
        else {
            return true;
        }
    };
    SalesentryoneComponent.prototype.getTotalReturn = function () {
        for (var i = 0; i < this.returnPurchaseArray.quantity.length; i++) {
            if (this.returnPurchaseArray.quantity[i] < this.returnQty[i]) {
                this.toastr.warning("Return quantity can't exceed actual quantity", "Warning");
                return;
            }
            else if (this.returnQty[i] < 1 || this.returnQty[i] == null || this.returnQty[i] == '' || this.returnQty[i] == undefined) {
                this.toastr.warning("Minimum return quantity can be 1", "Warning");
                return;
            }
        }
        this.quantityReturn = 0;
        var calculatedAmount = 0;
        this.returnPurchaseArray.qtyReturn = [];
        this.returnPurchaseArray.amountReturn = [];
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray.amount[i] / this.returnPurchaseArray.quantity[i]);
                this.quantityReturn = this.quantityReturn + calculatedAmount;
                this.returnPurchaseArray.amountReturn.push(calculatedAmount);
                this.returnPurchaseArray.qtyReturn.push(this.returnQty[i]);
            }
        }
    };
    SalesentryoneComponent.prototype.updateReturnAmount = function () {
        for (var i = 0; i < this.returnPurchaseArray.quantity.length; i++) {
            if (this.returnPurchaseArray.quantity[i] < this.returnQty[i]) {
                this.toastr.warning("Return quantity can't exceed actual quantity", "Warning");
                return;
            }
            else if (this.returnQty[i] < 1 || this.returnQty[i] == null || this.returnQty[i] == '' || this.returnQty[i] == undefined) {
                this.toastr.warning("Minimum return quantity can be 1", "Warning");
                return;
            }
        }
        this.returnEditable = 0;
        this.quantityReturn = 0;
        var calculatedAmount = 0;
        this.returnPurchaseArray.qtyReturn = [];
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray.amount[i] / this.returnPurchaseArray.quantity[i]);
                this.quantityReturn = this.quantityReturn + calculatedAmount;
                this.returnPurchaseArray.qtyReturn.push(this.returnQty[i]);
            }
        }
        this.returnEditable = this.quantityReturn;
        this.partyTotal = this.totalNetAmount - this.returnEditable;
        $("#stck-prchse").modal("hide");
    };
    SalesentryoneComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i]._id == id) {
                return (this.dataDoctors[i].first_name);
            }
        }
    };
    SalesentryoneComponent.prototype.openConfirmation = function (activity) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__confirmation_popup_custom_dialog_custom_dialog_component__["a" /* CustomDialogComponent */], {
            data: {
                header: "Confirmation",
                body: "Are you sure you want return this product ?"
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (result == "yes") {
                _this.updateReturnAmount();
                // $("#dischargeModal").modal("show");
                // $('textarea').autoResize();
            }
            else {
                console.log("error or No Thanks button clicked");
            }
        });
    };
    SalesentryoneComponent.prototype.findPatientAppointmentByPhone = function (data) {
        var _this = this;
        if (this.reqData.patientMobile.length < 10) {
            this.toastr.warning("Please fill atleast 10 digits number", "Warning");
            return;
        }
        if (!isNaN(data)) {
            data = data.trim();
            var object = void 0;
            object = {};
            object.clinic_id = this.dataDoctors[0].doctm_clinic_id;
            object.mobile = data;
            this.userService.GetPatientDetail(object).subscribe(function (data2) {
                console.log(data2);
                if (data2.response == true) {
                    if (data2.data.length == 1) {
                        _this.reqData.patientName = data2.data[0].name;
                    }
                    else {
                        _this.patientListReg = data2.data;
                        _this.patientListReg1 = data2.data;
                        console.log(_this.patientListReg);
                    }
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.toastr.warning("Invalid phone number", "Warning");
        }
    };
    SalesentryoneComponent.prototype.SearchPatientNameReg = function (data) {
        data = data.toLowerCase();
        if (data && data.trim() != '') {
            this.patientListReg = this.patientListReg1.filter(function (item) {
                var b = item.name.toLowerCase();
                return (b.indexOf(data) > -1);
            });
        }
        if (data == '') {
            this.patientListReg = this.patientListReg1;
        }
    };
    SalesentryoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-salesentryone',
            template: __webpack_require__("../../../../../src/app/header-five-layout/salesentryone/salesentryone.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-five-layout/salesentryone/salesentryone.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatDialog */]])
    ], SalesentryoneComponent);
    return SalesentryoneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/salesentryone/salesentryone.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesentryoneModule", function() { return SalesentryoneModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__salesentryone_routing_module__ = __webpack_require__("../../../../../src/app/header-five-layout/salesentryone/salesentryone-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__salesentryone_component__ = __webpack_require__("../../../../../src/app/header-five-layout/salesentryone/salesentryone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__number_to_words__ = __webpack_require__("../../../../../src/app/header-five-layout/salesentryone/number-to-words.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SalesentryoneModule = /** @class */ (function () {
    function SalesentryoneModule() {
    }
    SalesentryoneModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__salesentryone_routing_module__["a" /* SalesentryoneRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__["c" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__salesentryone_component__["a" /* SalesentryoneComponent */], __WEBPACK_IMPORTED_MODULE_8__number_to_words__["a" /* NumberToWords */]]
        })
    ], SalesentryoneModule);
    return SalesentryoneModule;
}());



/***/ })

});
//# sourceMappingURL=salesentryone.module.chunk.js.map