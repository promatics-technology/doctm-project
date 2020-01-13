webpackJsonp(["salesbook.module"],{

/***/ "../../../../../src/app/header-five-layout/salesbook/number-to-words.ts":
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

/***/ "../../../../../src/app/header-five-layout/salesbook/salesbook-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesbookRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__salesbook_component__ = __webpack_require__("../../../../../src/app/header-five-layout/salesbook/salesbook.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__salesbook_component__["a" /* SalesbookComponent */]
    }
];
var SalesbookRoutingModule = /** @class */ (function () {
    function SalesbookRoutingModule() {
    }
    SalesbookRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], SalesbookRoutingModule);
    return SalesbookRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/salesbook/salesbook.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cstm-row {\r\n    margin-top: 20px;\r\n}\r\n\r\n.cstm-row button {\r\n    margin-top: 38px;\r\n}\r\n\r\n.cstm-hdr {\r\n    margin-top: 15px;\r\n}\r\n\r\n.tbl-head {\r\n    margin-bottom: 2px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.tbl-head tr {\r\n    border-top: 2px solid #00B0F0;\r\n    border-left: 2px solid #00B0F0;\r\n    border-right: 2px solid #00B0F0;\r\n}\r\n\r\n.tbl-head tr th {\r\n    background-color: #DCDCDC;\r\n    border-color: #00B0F0;\r\n}\r\n\r\n.table-bordered>tbody>tr>td {\r\n    border: 1px solid #00B0F0;\r\n}\r\n\r\n.tbl-cntrol {\r\n    min-height: 100px;\r\n    max-height: 300px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.tbl-cntrol .tbl-data {\r\n    min-width: 882px;\r\n}\r\n\r\n.btn-wrap {\r\n    margin-top: 20px;\r\n}\r\n\r\n.btn-grin {\r\n    background-color: rgb(161, 210, 83);\r\n}\r\n\r\n.btn-grin-2 {\r\n    height: 55px;\r\n    padding: 20px 30px;\r\n}\r\n\r\n.btn-wrap button {\r\n    margin-right: 10px;\r\n}\r\n\r\n.btn-red-1 {\r\n    background-color: #FF0000;\r\n}\r\n\r\n.btn-ornge {\r\n    background-color: #E36C09;\r\n}\r\n\r\n.new-thd th {\r\n    color: #fff;\r\n    background-color: #000;\r\n    border: 1px solid #fff;\r\n}\r\n\r\n.new-tbdy td {\r\n    background-color: #dae5f1 !important;\r\n    border: 1px solid #fff !important;\r\n}\r\n\r\n.new-tbdy tr:hover {\r\n    background-color: #b8d9fd !important;\r\n}\r\n\r\n.new-tbdy tr:hover td {\r\n    background-color: #b8d9fd !important;\r\n}\r\n\r\nth.selected {\r\n    background-color: #00b0f0 !important;\r\n}\r\n\r\n@media only screen and (min-width:992px) {\r\n    .cstm-footer {\r\n        position: fixed;\r\n        bottom: 10px;\r\n    }\r\n}\r\n\r\n.btn-go button {\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    min-width: 140px;\r\n}\r\n\r\n.btn-go button:hover {\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    background: #98C74F;\r\n    border-color: #98C74F;\r\n    color: #fff;\r\n\r\n}\r\n\r\n.mr-top input {\r\n    margin-top:10px;\r\n}\r\n\r\n.srch-cstm button {\r\n    margin-top: 10px;\r\n    padding: 4px 20px;\r\n    min-width: 140px;\r\n}\r\n\r\n.dashboard-header-logo img.img-responsive{\r\n    margin-top: 10px;\r\n}\r\n\r\n.btn-wrap{\r\n    margin-top: 20px;\r\n}\r\n\r\n.btn-grin{\r\n    background-color:rgb(161, 210, 83);\r\n}\r\n\r\n.cstm-txt input{\r\n    background-color:#76923C;\r\n    color:#fff;\r\n}\r\n\r\n.cstm-txt input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color:#fff;\r\n}\r\n\r\n.cstm-txt input::-moz-placeholder { /* Firefox 19+ */\r\n  color:#fff;\r\n}\r\n\r\n.cstm-txt input:-ms-input-placeholder { /* IE 10+ */\r\n  color:#fff;\r\n}\r\n\r\n.cstm-txt input:-moz-placeholder { /* Firefox 18- */\r\n  color:#fff;\r\n}\r\n\r\n.vr-mid{\r\n    vertical-align: middle;\r\n}\r\n\r\n.ex-txt{\r\n    color:#000;\r\n}\r\n\r\n.btn-grin-2{\r\n    padding:20px 30px;  \r\n}\r\n\r\n.btn-custom{\r\n    -webkit-transition:300ms;\r\n    transition:300ms;\r\n}\r\n\r\n.btn-custom:hover .ex-txt{\r\n    -webkit-transition:300ms;\r\n    transition:300ms;\r\n    color: #fff;\r\n}\r\n\r\n.cstm-row{\r\n    margin-top: 15px;\r\n}\r\n\r\n.cstm-row button{\r\n    padding:3px 30px;\r\n}\r\n\r\n.btn-wrap{\r\n    margin-top: 20px;\r\n}\r\n\r\n.btn-grin{\r\n    background-color:rgb(161, 210, 83);\r\n}\r\n\r\n.cstm-txt input{\r\n    background-color:#76923C;\r\n    color:#fff;\r\n}\r\n\r\n.cstm-txt input::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color:#fff;\r\n}\r\n\r\n.cstm-txt input::-moz-placeholder { /* Firefox 19+ */\r\n  color:#fff;\r\n}\r\n\r\n.cstm-txt input:-ms-input-placeholder { /* IE 10+ */\r\n  color:#fff;\r\n}\r\n\r\n.cstm-txt input:-moz-placeholder { /* Firefox 18- */\r\n  color:#fff;\r\n}\r\n\r\n.vr-mid{\r\n    vertical-align: middle;\r\n}\r\n\r\n.ex-txt{\r\n    color:#000;\r\n}\r\n\r\n.btn-grin-2{\r\n    padding:20px 30px;  \r\n}\r\n\r\n.btn-custom{\r\n    -webkit-transition:300ms;\r\n    transition:300ms;\r\n}\r\n\r\n.btn-custom:hover .ex-txt{\r\n    -webkit-transition:300ms;\r\n    transition:300ms;\r\n    color: #fff;\r\n}\r\n\r\ndiv.ad-remove i.fa-minus{\r\n    color:#f00;\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\ndiv.ad-remove i.fa-plus{\r\n    color:#92d050;\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.ad-remove{\r\n    margin-right: 30px;\r\n}\r\n\r\n.txt{\r\n        margin-top: 15px;\r\n    margin-left: 18px;\r\n}\r\n\r\n.cstm-drpdown-cnsulted-doc {\r\n   \r\n    position: relative;\r\n}\r\n\r\n.smrt-ass-dropdown {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n\r\n.cstm-drpdown-cnsulted-doc select {\r\n   font-size: 13px;\r\n    color: #fff;\r\n    width: 100%;\r\n    position: relative;\r\n    cursor: pointer;\r\n    padding: 8px;\r\n    background-color: #01b0f0;\r\n    border-radius: 5px;\r\n    border: none;\r\n}\r\n\r\n.cstm-drpdown-cnsulted-doc option {\r\n    border-bottom: 1px #ccc dashed;\r\n    padding: 8px 7px;\r\n    -webkit-transition: .3s all;\r\n    transition: .3s all;\r\n    display: block;\r\n    color: #00b0f0;\r\n    border-radius: 0;\r\n    background-color: #fff;\r\n    font-size: 20px;\r\n}\r\n\r\n.cstm-caret-big {\r\n    display: inline-block;\r\n    width: 0;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    height: 0;\r\n    margin-left: 4px;\r\n    color: #000;\r\n    top: 10px;\r\n    background-color: #01b0f0;\r\n    z-index: 1;\r\n    right: 5px;\r\n    margin-bottom: 9px;\r\n    vertical-align: middle;\r\n    border-top: 10px dashed;\r\n    border-right: 10px solid transparent;\r\n    border-left: 10px solid transparent;\r\n}\r\n\r\n/*.stock-tab{\r\n    float: left;\r\n    width:100%;\r\n    padding:5px 0px; \r\n    padding-bottom: 0px;\r\n}\r\n.hd-one{\r\n    display: inline-block;\r\n    padding:10px 25.5px;\r\n    border:1px solid #000;\r\n    background: #DAE5F1;\r\n}\r\n/*.tab-stock{\r\n    margin-top: 15px;\r\n}*/\r\n\r\n.tab-stock table tr td div.trans-input input{\r\n    width:97%;\r\n    padding:6px 8px; \r\n}\r\n\r\n.tab-stock table tr td div.pro-trans-input input{\r\n    width:98%;\r\n    padding:6px 8px; \r\n}\r\n\r\n.tab-stock table tr td select{\r\n    width: 82px;\r\n    height: 36px;\r\n    border-radius: 0px;\r\n    margin-right: 3px;\r\n}\r\n\r\n.tab-stock{\r\n    min-height:190px;\r\n    max-height: 190px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n\r\ntr.mg-top{\r\n    margin-top:5px;\r\n    display: block;\r\n}\r\n\r\ntd.ad-remove i.fa-minus{\r\n    color:#f00;\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\ntd.ad-remove i.fa-plus{\r\n    color:#92d050;\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.footer-cstm-1{\r\n    padding:15px 0px; \r\n}\r\n\r\ntr.foot-data{\r\n    background:#EAF1DD;\r\n}\r\n\r\n#view-sales-order-modal .modal-body{\r\n    float: left;\r\n    width:100%;\r\n}\r\n\r\n#view-sales-order-modal .modal-header h3{\r\n    color:#002060;\r\n}\r\n\r\n#view-sales-order-modal .modal-body button{\r\n    background:#92D050;\r\n    color:#fff;\r\n    padding: 3px 18px;\r\n    font-size: 16px;\r\n    min-width: 100px;\r\n}\r\n\r\nb.bill-no{\r\n    font-size: 18px;\r\n}\r\n\r\n#view-sales-order-modal .modal-content{\r\n    background-color: #f2f2f2;\r\n    border-radius:20px; \r\n}\r\n\r\n#view-sales-order-modal .modal-dialog{\r\n    display:table;\r\n}\r\n\r\ndiv.hd-two{\r\n    background-color: #FDE9D8;\r\n    display:inline-block;\r\n    padding:8px 39.3px;\r\n    border: 1px solid #ffc0c0; \r\n    min-height: 53px;\r\n    max-height: 53px;\r\n    vertical-align:middle;\r\n    text-align: center;\r\n}\r\n\r\n@media (min-width: 992px){\r\n.modal-lg.modal-cstm {\r\n    width: 1185px;\r\n    }\r\n}\r\n\r\n.tab-stock-2 table tr td select{\r\n    width:67px;\r\n}\r\n\r\n/* The container */\r\n\r\n.cstm-chk {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n/* Hide the browser's default checkbox */\r\n\r\n.cstm-chk input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n\r\n/* Create a custom checkbox */\r\n\r\n.checkmark {\r\n    position: absolute;\r\n    top: -6.5px;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #fff;\r\n}\r\n\r\n/* On mouse-over, add a grey background color */\r\n\r\n.cstm-chk:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n\r\n/* When the checkbox is checked, add a blue background */\r\n\r\n.cstm-chk input:checked ~ .checkmark {\r\n    background-color: #fff;\r\n}\r\n\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n/* Show the checkmark when checked */\r\n\r\n.cstm-chk input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n\r\n/* Style the checkmark/indicator */\r\n\r\n.cstm-chk .checkmark:after {\r\n    left: 9px;\r\n    top: 3px;\r\n    width: 6px;\r\n    height: 16px;\r\n    border: solid #000;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n\r\n#view-sales-order-modal button.close{\r\n    opacity: 1;\r\n    font-size: 30px;\r\n}\r\n\r\n/*ctsm table sorting ------------------------- -------------*/\r\n\r\n.ipdbook {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 30px 0;\r\n}\r\n\r\n.table-row {\r\n    background: -webkit-linear-gradient(top, #d6f8ff 0%, #a3ecff 72%);\r\n}\r\n\r\n.table {\r\n    border: 1px solid #eee;\r\n}\r\n\r\n.history {\r\n    background-color: transparent;\r\n}\r\n\r\n.table-row td, .table-head th {\r\n    border-top: none;\r\n    padding: 8px 0px;\r\n}\r\n\r\n.select-duration {\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.select-duration h3 {\r\n    margin: 0;\r\n}\r\n\r\n.ok-btn {\r\n    background-color: transparent;\r\n    border: 1px solid #002160;\r\n    width: 50px;\r\n}\r\n\r\n/*tbody.my-tbdy {\r\n    display: block;\r\n    height: 250px;\r\n    overflow: auto;\r\n}*/\r\n\r\nthead.table-head, tbody.my-tbdy tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n    /* even columns width , fix width of table too*/\r\n}\r\n\r\nthead.table-head {\r\n    width: calc( 100% - 1em) ;\r\n}\r\n\r\n.table-scroll-outside{\r\n    min-height: 300px;\r\n    max-height: 300px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.table-scroll-outside table tbody{\r\n    display: block;\r\n}\r\n\r\n.btn-custom {\r\n    color: #002160;\r\n    position: relative;\r\n    padding: 6.5px 17px;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n}\r\n\r\n.ipdbook {\r\n    padding: 0px;\r\n}\r\n\r\n.select-duration{\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.my-tbdy td{\r\n    vertical-align: middle;\r\n}\r\n\r\n.table-head tr th{\r\n    border-right:1px solid #fff;\r\n    background-color: #000;\r\n    color:#fff;\r\n}\r\n\r\n.table-head tr th h4{\r\n    font-size: 12px;\r\n}\r\n\r\n.my-tbdy tr td{\r\n    border-right:1px solid #fff;\r\n    background-color:#DAE5F1!important;\r\n    color:#000;\r\n    border-bottom:1px solid #fff;\r\n}\r\n\r\n.cstm-table{\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.cstm-input input{\r\n    width:40%;\r\n    display: inline-block;\r\n}\r\n\r\n.cstm-input-2 input{\r\n    display: inline-block;\r\n    width:98%;\r\n}\r\n\r\n.foot-btm{\r\n    position: fixed; \r\n    bottom: 0;\r\n}\r\n\r\n.min i{\r\n    color:#ff0000;\r\n    font-size:22px;\r\n    cursor: pointer; \r\n}\r\n\r\n.add i{\r\n    color:#00B050;\r\n    font-size:22px;\r\n    cursor: pointer; \r\n}\r\n\r\n.chk-2{\r\n    top: -20.5px;\r\n}\r\n\r\n.mg-top{\r\n    margin-top: 0px;\r\n}\r\n\r\n.tble-new{\r\n    width:100%!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-five-layout/salesbook/salesbook.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr\">\n    <div class=\"\">\n            <div class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12\">\n                <div class=\"dashboard-header-logo\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\">\n                    <img _ngcontent-c3=\"\" class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerLink=\"/header-five-layout/dashboard-pharmacy\">\n    \t\t\t</div>\n                <div style=\"margin-bottom: 8px;\">\n                    <div _ngcontent-c3=\"\" class=\"dshbrd-btn\">\n                        <button class=\"btn btn-custom\" routerLink=\"/header-five-layout/dashboard-pharmacy\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\"> Dashboard </button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12\">\n                <div class=\"select-duration\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                            <div class=\"row\">  \n                                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                    <div class=\"row\">\n                                        <label class=\" col-md-3 col-sm-3 col-xs-12 text-right txt-lft\" style=\"font-size: 20px;\">From:</label>\n                                        <div class=\"col-md-9  col-sm-9 col-xs-12\">\n                                        <angular2-date-picker [(ngModel)]=\"fromDate\" [settings]=\"settings\"></angular2-date-picker>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                            <div class=\"row\">  \n                                <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                    <div class=\"row\">\n                                        <label class=\" col-md-3 col-sm-3 col-xs-12 text-right txt-lft\" style=\"font-size: 20px;\">To:</label>\n                                        <div class=\"col-md-9  col-sm-9 col-xs-12\">\n                                            <angular2-date-picker [(ngModel)]=\"toDate\" [settings]=\"settings\"></angular2-date-picker>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12\">\n                <div class=\"select-duration btn-go\">\n                    <button class=\"btn ok-btn\" type=\"button\" (click)='viaDate()'> Go </button>\n                </div>\n            </div>\n            <div class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12\">\n                <!-- <div class=\"col-lg-12\"> -->\n                <div class=\"form-group mr-top\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchInput\" placeholder=\"Search by Patient name, Receipt Number\" (keyup)=\"onKey($event)\">\n                </div>\n                <!-- </div> -->\n            </div>\n            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 cstm-input srch-cstm\">\n                <button class=\"btn btn-custom\" (click)=\"SearchByPartyNameOrBill()\">Search </button>\n            </div>\n        </div>\n    </div>\n    <br>\n    <div class=\"stock-tab\" style=\"float: left; width:100%;\">\n        <div class=\"col-lg-12\">\n            <div style=\"max-height: 10px; max-height: 380px; overflow-y: scroll;\">\n                <table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\" *ngIf=\"sortedData.length>0\">\n                    <thead class=\"new-thd\">\n                        <tr>\n                            <th mat-sort-header=\"date\" width=\"10%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\"><h4 style=\"width: 100%; text-align: center;\">Date</h4>\n                            </th>\n                            <th mat-sort-header=\"invoice\" width=\"12%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\"><h4 style=\"width: 100%; text-align: center;\">Receipt Number</h4>\n                            </th>\n                            <th mat-sort-header=\"patient\" width=\"10%\" class=\"{{getTableHeaderClass(7)}} text-center\" (click)=\"setTableHeaderClass(7)\"><h4 style=\"width: 100%; text-align: center;\">Patient Name</h4>\n                            </th>\n                            <th mat-sort-header=\"amount\" width=\"10%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\"><h4 style=\"width: 100%; text-align: center;\">Sales Amount</h4>\n                            </th>\n                            <th mat-sort-header=\"cost\" width=\"10%\" class=\"{{getTableHeaderClass(4)}} text-center\" (click)=\"setTableHeaderClass(4)\"><h4 style=\"width: 100%; text-align: center;\">Cost</h4>\n                            </th>\n                            <th mat-sort-header=\"gross\" width=\"10%\" class=\"{{getTableHeaderClass(5)}} text-center\" (click)=\"setTableHeaderClass(5)\"><h4 style=\"width: 100%; text-align: center;\">Gross Profit</h4>\n                            </th>\n                            <th mat-sort-header=\"profit\" width=\"10%\" class=\"{{getTableHeaderClass(6)}} text-center\" (click)=\"setTableHeaderClass(6)\"><h4 style=\"width: 100%; text-align: center;\">Profit %</h4>\n                            </th>\n                            <th width=\"10%\" class=\"text-center\"><h4>Action</h4></th>\n                        </tr>\n                    </thead>\n                    <tbody class=\"new-tbdy\">\n                        <tr *ngFor=\"let item of salesBookArray;let i = index\">\n                            <td width=\"10%\" class=\"text-center\">{{getTimeFiveAndHalfHoursBefore(item.createdAt) | date:'d MMM yy ,h:mm a'}}</td>\n                            <td width=\"12%\" class=\"text-center\">{{item.id}}</td>\n                            <td width=\"10%\" class=\"text-center\">\n                                <span *ngIf=\"item.walkin_patient\">{{item.patient_name}}</span>\n                                <span *ngIf=\"!item.walkin_patient\">{{item.dispensed_patient_id.registration.pateintName}}</span>\n                            </td>\n                            <td width=\"10%\" class=\"text-center\">{{getData(item.total_amount)}}</td>\n                            <td width=\"10%\" class=\"text-center\">{{getData(item.cost_amount)}}</td>\n                            <td width=\"10%\" class=\"text-center\">{{getData(item.total_amount-item.cost_amount)}}</td>\n                            <td width=\"10%\" class=\"text-center\">{{getData(((item.total_amount-item.cost_amount)*100)/item.cost_amount)}}</td>\n                            <td  width=\"10%\" class=\"text-center\">\n                                <button class=\"btn btn-info\" (click)=\"viewData(item,i)\">View</button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"col-lg-12\" *ngIf=\"sortedData.length<1\">\n                    <h3 class=\"text-center\">No data found ...</h3>\n                </div> \n            </div>\n     \n        </div>\n        <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12 cstm-footer text-center\">\n            <div class=\"btn-wrap\">\n                <button class=\"btn btn-custom btn-ornge\">\n                    <div> Total Orders</div>\n                    <div>{{salesBookArray.length}}</div>\n                </button>\n                <button class=\"btn btn-custom btn-grin\">\n                    <div> Total Sale</div>\n                    <div>{{getData(totalAmount)}}</div>\n                </button>\n                <button class=\"btn btn-custom\">\n                    <div>Total Cost</div>\n                    <div> {{getData(totalCostPrice)}}</div>\n                </button>\n                <button class=\"btn btn-custom btn-red-1\">\n                    <div>Gross Profit</div>\n                    <div> {{getData(totalCost)}} </div>\n                </button>\n                <button class=\"btn btn-custom btn-ornge\">\n                    <div> Profit %</div>\n                    <div> {{getData(((totalAmount-totalCostPrice)*100)/totalCostPrice)}}</div>\n                </button>\n                <button class=\"btn btn-custom btn-grin btn-grin-2\" (click)=\"exportPdf()\">\n                    <div> EXPORT </div>\n                </button>\n            </div>\n        </div>\n    </div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"view-sales-order-modal\" role=\"dialog\">\n    <div class=\"modal-dialog\" *ngIf=\"returnPurchaseArray.opt.length>0\">\n      <div class=\"modal-content modal-lg modal-cstm\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h3 class=\"modal-title text-center\">{{patientNameNew}}</h3>\n          <h4 class=\"modal-title text-center\">Receipt No - {{salesBookArray[this.selectedIndex].id}}</h4>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"stock-tab\">\n                <div class=\"col-lg-12\">\n                    <div class=\"table tab-stock tab-stock-2\">\n                        <table>\n                            <thead class=\"table-head tble-new\">\n                                <tr>\n                                    <th class=\"text-center\"><h4>Type</h4></th>\n                                    <th class=\"text-center\"><h4>Product Name</h4></th>\n                                    <th class=\"text-center\"><h4>Pack</h4></th>\n                                    <th class=\"text-center\"><h4>M.R.P</h4></th>\n                                    <th class=\"text-center\"><h4>QTY</h4></th>\n                                    <th class=\"text-center\"><h4>Disc%</h4></th>\n                                    <th class=\"text-center\"><h4>Amount</h4></th>\n                                    <th class=\"text-center\"><h4>Batch</h4></th>\n                                </tr>\n                            </thead>\n                        </table>\n                        <table>\n                            <tr class=\"mg-top\" *ngFor=\"let tr of returnPurchaseArray.opt;let i = index;\">\n                                <td>\n                                    <div class=\"trans-input\">\n                                        <input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.opt[i]}}\" readonly=\"\">\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"pro-trans-input\">\n                                        <input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.product[i]}}\" readonly=\"\">\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"trans-input\">\n                                        <input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.pack1[i]}} x {{returnPurchaseArray.pack2[i]}}\" readonly=\"\">\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"trans-input\">\n                                        <input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.mrp[i]}}\" readonly=\"\">\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"trans-input\">\n                                        <input type=\"number\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.quantity[i]}}\" readonly=\"\">\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"trans-input\">\n                                        <input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.discount[i]}}\" readonly=\"\">\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"trans-input\">\n                                        <input type=\"text\" placeholder=\"0\" class=\"cstm-put\" value=\"{{returnPurchaseArray.amount[i]}}\"  readonly=\"\">\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"trans-input\">\n                                        <input type=\"text\" placeholder=\"\" class=\"cstm-put\" value=\"{{returnPurchaseArray.batch[i]}}\" readonly=\"\">\n                                    </div>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n         <div class=\"col-lg-12 text-center\">\n            <div class=\"row\">\n                <div class=\"col-lg-3 text-right\">\n                        <h3 class=\"mg-top\">Total Amount</h3>\n                    </div>\n                    <div class=\"col-lg-3 text-left\">\n                        <button class=\"btn data-div\" readonly=\"\" disabled=\"\">\n                            <div>{{patientAmount}}</div>\n                        </button>\n                    </div>\n              \n            </div>\n         </div>\n         <div class=\"text-center\">\n               <button class=\"btn btn-custom\" data-dismiss=\"modal\" (click)=\"exportPdfDetail()\">\n                    <div> PRINT </div>\n                </button>\n         </div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>      \n    </div>\n</div>    \n\n<!-- show the pdf -->\n<div class=\"modal fade\" id=\"pdfmodal1\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content modal-lg modal-cstm\">\n        <div class=\"modal-body\">\n            <div class=\"modal-body\"><div class=\"\" id=\"receiptPdf1\" >\n                <table width=\"700\" style=\"border:1px solid #4d4d4d; border-right:1px solid #4d4d4d;\">\n                    <tr style=\"border-bottom: 1px solid #4d4d4d;\">\n                        <td style=\"text-align: left;\" colspan=\"2\">\n\n                            <h3 style=\"margin-top: 10px; padding-left:15px; font-weight: lighter;\">GST Invoice </h3>\n\n                        </td>\n                        <td style=\"text-align:right;\" colspan=\"2\">\n\n                            <h5 style=\"padding-right:15px; font-weight: lighter;\">GSTIN: {{gstinNumber}}</h5>\n\n                        </td>\n                    </tr>\n                    <tr  style=\"border-bottom: 1px solid #4d4d4d;\">\n                        <td style=\"padding-left: 10px; padding-top: 10px; padding-bottom: 10px; border-right: 1px solid #4d4d4d;\">\n                            <h3 style=\"text-transform: uppercase;text-align:left; margin-top: 0px \">\n                                {{pharmacyName}}\n                            </h3>\n                            <h5 style=\"text-transform: uppercase;text-align:left; \">\n                                {{address}}\n                            </h5>\n                            <h5>Phone: {{phone}}</h5>\n                            <h5>DL. No.: {{drugLicense}}</h5>\n                        </td>\n                        <td style=\"padding-left: 10px; padding-top: 10px; padding-bottom: 10px;\">\n                            <h5 style=\"text-transform: uppercase;text-align:left; margin-top: 0px;\">\n                                Inv No\n                            </h5>\n                            <h5 style=\"text-transform: uppercase;text-align:left; \">\n                                Patient Name:\n                            </h5>\n                            <h5 style=\"text-transform: uppercase;text-align:left; \">\n                                P .mob\n                            </h5>\n                            <h5 style=\"text-transform: uppercase;text-align:left;\">Dr. name</h5>\n                            <h5 style=\"text-transform: uppercase;text-align:left;\">time</h5>\n                        </td>\n\n                        <td colspan=\"1\" style=\"padding-left: 10px; padding-top: 10px; padding-bottom: 10px;border-right: 1px solid #4d4d4d;\">\n                            <h4 style=\"text-transform: uppercase;text-align:left; margin-top: 0px;\">\n                                : {{invoiceNo}}\n                            </h4>\n                            <h5 style=\"text-transform: uppercase;text-align:left; \">\n                                : {{patientNameNew}}\n                            </h5>\n                            <h5 style=\"text-transform: uppercase;text-align:left; \">\n                                : {{patient_mobile}}\n                            </h5>\n                            <h5 style=\"text-transform: uppercase;text-align:left;\" *ngIf=\"docName\">: {{getDoctorName(docName)}}</h5>\n                            <h5 style=\"text-transform: uppercase;text-align:left;\" *ngIf=\"!docName\">: Self</h5>\n                            <h5 style=\"text-transform: uppercase;text-align:left;\">: {{oldDate | date:'mediumDate' }} {{today | date:'shortTime' }}</h5>\n                        </td>\n                    </tr>\n                </table>\n                <table width=\"700\" style=\"border:1px solid #4d4d4d; border-right:1px solid #4d4d4d; border-top: transparent;\">\n                    <tr>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Sr.</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Type</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Product Name</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Pack</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Batch</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">QTY.</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">MRP</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Disc. %</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d; border-bottom: 1px solid #4d4d4d; font-weight: bold; background-color: grey;\">Amount</td>\n                    </tr>\n                    <tr *ngFor=\"let list of totalTr;let i=index;\">\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{i+1}}</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{returnPurchaseArray.opt[i]}}</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{returnPurchaseArray.product[i]}}</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{returnPurchaseArray.pack1[i]}} x {{returnPurchaseArray.pack2[i]}}</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{returnPurchaseArray.batch[i]}}</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{returnPurchaseArray.quantity[i]}}</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{returnPurchaseArray.mrp[i]}}</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{returnPurchaseArray.discount[i]}}</td>\n                        <td style=\"padding:5px; text-align:center; border-right:1px solid #4d4d4d;\">{{returnPurchaseArray.amount[i]}}</td>\n                    </tr>\n                </table>\n                <table width=\"700\" style=\"border:1px solid #4d4d4d; border-top:transparent;border-bottom: transparent;\" >\n                    <tr  style=\"\">\n                        <td style=\"padding-left: 10px; padding-top: 1px; padding-bottom: 1px;\" width=\"500px;\">\n                            <h4 style=\"text-transform: uppercase;text-align:left; float: left; width:50%; margin-top:-45px;\">\n                                TOTAL ITEMS\n                            </h4>\n                            <h4 style=\"text-transform: uppercase;text-align:right;  float: right; width:50%;margin-top:-45px;\" *ngIf=\"returnPurchaseArray.opt\">\n                                {{returnPurchaseArray.opt.length}}\n                            </h4>\n                        </td>\n                        <td style=\"padding-right: 10px; padding-top: 1px; padding-bottom: 1px;\" width=\"200px;\">\n                            <table width=\"450px\">\n                                <tr  style=\"\">\n                                    <td style=\"padding-right: 10px; width:80%; padding-top: 1px; padding-bottom: 1px;\">\n                                        <h4 style=\"text-transform: uppercase;text-align:right; \">\n                                            SUB TOTAL\n                                        </h4>\n                                    </td>\n                                    <td style=\"padding-right: 10px; width:20%; padding-top: 1px; padding-bottom: 1px;\">\n                                        <h4 style=\"text-transform: uppercase;text-align:right; \">\n                                            {{subTotal}}\n                                        </h4>\n                                    </td>\n                                </tr>\n                                <tr  style=\"\">\n                                    <td style=\"padding-right: 10px; width:80%; padding-top: 1px; padding-bottom: 1px;\">\n                                        <h4 style=\"text-transform: uppercase;text-align:right; \">\n                                            RETURN\n                                        </h4>\n                                    </td>\n                                    <td style=\"padding-right: 10px; width:20%; padding-top: 1px; padding-bottom: 1px;\">\n                                        <h4 style=\"text-transform: uppercase;text-align:right; \">\n                                            0\n                                        </h4>\n                                    </td>\n                                </tr>\n                                <tr  style=\"\">\n                                    <td style=\"padding-right: 10px; width:80%; padding-top: 1px; padding-bottom: 1px;\">\n                                        <h4 style=\"text-transform: uppercase;text-align:right; \">\n                                            GRAND TOTAL\n                                        </h4>\n                                    </td>\n                                    <td style=\"padding-right: 10px; width:20%; padding-top: 1px; padding-bottom: 1px;\">\n                                        <h4 style=\"text-transform: uppercase;text-align:right; \">\n                                            {{partyTotal}}\n                                        </h4>\n                                    </td>\n                                </tr>\n                                \n                            </table>\n                        </td>\n                    </tr>\n                </table>\n                <table width=\"700\" style=\"border:1px solid #4d4d4d; border-right:1px solid #4d4d4d;border-top:transparent;\">\n                    <tr  style=\"border-top:1px solid #4d4d4d; border-bottom:1px solid #4d4d4d;\">\n                        <td  style=\"padding-left: 10px; padding-top: 10px; padding-bottom: 10px;\">\n                            <h4 style=\"text-transform: titlecase;text-align:left; \">\n                                 {{partyTotal|showInWords}} Only\n                            </h4>\n                        </td>\n                    </tr>\n                </table>\n                <table width=\"700\" style=\"border:1px solid #4d4d4d; border-right:1px solid #4d4d4d;border-top:transparent;\">\n                    <tr  style=\"\">\n                        <td  style=\"width:70%;padding-left: 10px; padding-top: 10px; padding-bottom: 10px; padding-right: 1px;\">\n                            <h4>\n                                <h4><b>Terms & Conditions</b></h4>\n                                <p  style=\"font-size: 14px; margin:8px 0px; \"  *ngIf=\"pharmacyData.dataSmartPharmacy.term1\">{{pharmacyData.dataSmartPharmacy.term1}}</p>\n                                <p  style=\"font-size: 14px; margin:8px 0px; \"  *ngIf=\"pharmacyData.dataSmartPharmacy.term2\">{{pharmacyData.dataSmartPharmacy.term2}}</p>\n                                <p  style=\"font-size: 14px; margin:8px 0px; \"  *ngIf=\"pharmacyData.dataSmartPharmacy.term3\">{{pharmacyData.dataSmartPharmacy.term3}}</p>\n                                <p  style=\"font-size: 14px; margin:8px 0px; \"  *ngIf=\"pharmacyData.dataSmartPharmacy.term4\">{{pharmacyData.dataSmartPharmacy.term4}}</p>\n                            </h4>\n                        </td>\n                        <td style=\"width:30%;text-align: right;\">\n                            <div style=\"margin-top: 100px;padding-right: 10px;\">For {{pharmacyName}}</div>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>      \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-five-layout/salesbook/salesbook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesbookComponent; });
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




var SalesbookComponent = /** @class */ (function () {
    function SalesbookComponent(UserService, toastr, datePipe) {
        this.UserService = UserService;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.toDate = new Date();
        this.fromDate = new Date();
        this.today = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
        this.newDate = new Date();
    }
    SalesbookComponent.prototype.ngOnInit = function () {
        this.dataDoctors = [];
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails']);
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
        var dd = this.fromDate.getDate();
        this.fromDate.setDate(1);
        this.fromDate.setMonth(this.fromDate.getMonth() - 1);
        this.fromDate.setDate(this.fromDate.getDate() + dd);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.salesBookArray = [];
        this.sortedData = [];
        this.totalBill = 0;
        this.returnPurchaseArray = {};
        this.returnPurchaseArray.opt = [];
        this.viaDate();
    };
    SalesbookComponent.prototype.viaDate = function () {
        var _this = this;
        if (new Date(this.toDate).setHours(0, 0, 0, 0) >= new Date(this.newDate).setHours(0, 0, 0, 0)) {
            this.toastr.warning("Invalid date selected", "Warning");
            return;
        }
        var object = {
            id: this.pharmacyData.dataSmartPharmacy._id,
            start_date: this.fromDate,
            end_date: this.toDate
        };
        this.loading = true;
        this.salesBookArray = [];
        this.totalBill = 0;
        this.headerClicked = 0;
        this.searchInput = null;
        this.totalAmount = 0;
        this.totalCost = 0;
        this.totalCostPrice = 0;
        this.UserService.SalesEntryBySmartPharmacy(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.toastr.success(data.message, "Success");
                _this.salesBookArray = data.data;
                for (var i = 0; i < _this.salesBookArray.length; i++) {
                    _this.totalAmount += _this.salesBookArray[i].total_amount;
                    _this.totalCostPrice += _this.salesBookArray[i].cost_amount;
                    _this.totalCost += _this.salesBookArray[i].total_amount - _this.salesBookArray[i].cost_amount;
                    if (_this.salesBookArray[i].walkin_patient) {
                        _this.salesBookArray[i].patient = _this.salesBookArray[i].patient_name;
                    }
                    else {
                        _this.salesBookArray[i].patient = _this.salesBookArray[i].dispensed_patient_id.registration.pateintName;
                    }
                }
                _this.sortedData = _this.salesBookArray.slice();
            }
            else if (data.response == false) {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    SalesbookComponent.prototype.SearchByPartyNameOrBill = function () {
        var _this = this;
        if (this.searchInput == null || this.searchInput == '' || this.searchInput == undefined || this.searchInput == 0 ||
            this.searchInput.toString().trim().length < 1) {
            this.toastr.warning("Invalid search input", "Warning");
        }
        else {
            var object = {
                id: this.pharmacyData.dataSmartPharmacy._id,
                search: this.searchInput
            };
            this.loading = true;
            this.salesBookArray = [];
            this.totalBill = 0;
            this.headerClicked = 0;
            this.totalCostPrice = 0;
            this.totalAmount = 0;
            this.totalCost = 0;
            this.UserService.SalesEntryBySmartPharmacyById(object).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.toastr.success(data.message, "Success");
                    _this.salesBookArray = data.data;
                    for (var i = 0; i < _this.salesBookArray.length; i++) {
                        _this.totalAmount += _this.salesBookArray[i].total_amount;
                        _this.totalCostPrice += _this.salesBookArray[i].cost_amount;
                        _this.totalCost += _this.salesBookArray[i].total_amount - _this.salesBookArray[i].cost_amount;
                        if (_this.salesBookArray[i].walkin_patient) {
                            _this.salesBookArray[i].patient = _this.salesBookArray[i].patient_name;
                        }
                        else {
                            _this.salesBookArray[i].patient = _this.salesBookArray[i].dispensed_patient_id.registration.pateintName;
                        }
                    }
                    _this.sortedData = _this.salesBookArray.slice();
                }
                else if (data.response == false) {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    SalesbookComponent.prototype.onKey = function (event) {
        if (event.keyCode == 13) {
            this.SearchByPartyNameOrBill();
        }
    };
    SalesbookComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    SalesbookComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    SalesbookComponent.prototype.sortData = function (sort) {
        var data = this.salesBookArray.slice();
        if (!sort.active || sort.direction === '') {
            this.salesBookArray = data;
            return;
        }
        this.salesBookArray = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'date': return compare(a.createdAt, b.createdAt, isAsc);
                case 'invoice': return compare(a.id, b.id, isAsc);
                case 'amount': return compare(a.total_amount, b.total_amount, isAsc);
                case 'cost': return compare(a.cost_amount, b.cost_amount, isAsc);
                case 'gross': return compare(a.total_amount - a.cost_amount, b.total_amount - a.cost_amount, isAsc);
                case 'profit': return compare(((a.total_amount - a.cost_amount) * a.cost_amount) / 100, ((b.total_amount - b.cost_amount) * b.cost_amount) / 100, isAsc);
                case 'patient': return compare(a.patient, b.patient, isAsc);
                default: return 0;
            }
        });
    };
    SalesbookComponent.prototype.search = function () {
        var _this = this;
        this.searchInput = this.searchInput.toLowerCase();
        if (this.searchInput && this.searchInput.trim() != '') {
            this.showData = this.databackup.filter(function (item) {
                var b = item.invoice;
                return (b.indexOf(_this.searchInput) > -1);
            });
        }
    };
    SalesbookComponent.prototype.getTimeFiveAndHalfHoursBefore = function (date) {
        // return (new Date(date).setMinutes ( new Date(date).getMinutes() - 330 ))
        return date;
    };
    SalesbookComponent.prototype.exportPdf = function () {
        var option = '';
        if (this.searchInput == null || this.searchInput == '' || this.searchInput == undefined) {
            option = ' (' + this.datePipe.transform(this.fromDate, 'dd-MM-yyyy') + " to " + this.datePipe.transform(this.toDate, 'dd-MM-yyyy') + ")";
        }
        var head = [
            { title: '#', dataKey: "id" },
            { title: 'Date' + option, dataKey: "createdAt" },
            { title: 'Invoice Number', dataKey: "invoice" },
            { title: 'Patient Name', dataKey: "patient" },
            { title: 'Sales Amount', dataKey: "salesAmount" },
            { title: 'Cost Amount', dataKey: "costAmount" },
            { title: 'Gross Profit', dataKey: "grossProfit" },
            { title: 'Profit %', dataKey: "profit" },
        ];
        var csvData = [];
        for (var i = 0; i < this.salesBookArray.length; i++) {
            var ob;
            ob = {};
            ob.id = i + 1;
            ob.createdAt = this.getTimeFiveAndHalfHoursBefore(this.salesBookArray[i].createdAt);
            ob.createdAt = this.datePipe.transform(ob.createdAt, 'dd-MM-yyyy, h:mm a');
            //ob.date = this.salesBookArray[i].createdAt.split('T')
            ob.invoice = this.salesBookArray[i].id;
            ob.patient = this.salesBookArray[i].patient;
            ob.salesAmount = this.getData(this.salesBookArray[i].total_amount);
            ob.costAmount = this.getData(this.salesBookArray[i].cost_amount);
            ob.grossProfit = this.getData(this.salesBookArray[i].total_amount - this.salesBookArray[i].cost_amount);
            ob.profit = this.getData(((this.salesBookArray[i].total_amount - this.salesBookArray[i].cost_amount) * 100) / this.salesBookArray[i].cost_amount);
            csvData.push(ob);
        }
        csvData.push({
            id: 'Total',
            createdAt: '',
            invoice: '',
            patient: '',
            salesAmount: this.getData(this.totalAmount),
            costAmount: this.getData(this.totalCostPrice),
            grossProfit: this.getData(this.totalCost),
            profit: this.getData(((this.totalAmount - this.totalCostPrice) * 100) / this.totalCostPrice)
        });
        var todayDate = new Date().toJSON().toString().substr(0, 10);
        var from = new Date(this.fromDate).toJSON().toString().substr(0, 10);
        var to = new Date(this.toDate).toJSON().toString().substr(0, 10);
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
        doc.save('SalesBook' + "(" + todayDate + ")");
    };
    SalesbookComponent.prototype.exportPdfDetail = function () {
        this.invoiceNo = this.salesBookArray[this.selectedIndex].id;
        this.oldDate = new Date(this.getTimeFiveAndHalfHoursBefore(this.salesBookArray[this.selectedIndex].createdAt));
        this.subTotal = Math.ceil(this.salesBookArray[this.selectedIndex].total_amount);
        this.partyTotal = Math.ceil(this.subTotal);
        if (this.salesBookArray[this.selectedIndex].walkin_patient) {
            this.patientNameNew = this.salesBookArray[this.selectedIndex].patient;
            this.patient_mobile = this.salesBookArray[this.selectedIndex].patient_mobile;
            this.docName = null;
        }
        else {
            this.patientNameNew = this.salesBookArray[this.selectedIndex].dispensed_patient_id.registration.pateintName;
            this.patient_mobile = this.salesBookArray[this.selectedIndex].dispensed_patient_id.registration.pateintPhone;
            this.docName = this.salesBookArray[this.selectedIndex].dispensed_patient_id.doctor_id;
        }
        $('#receiptPdf1').printThis({
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
        // var head = [
        //     { title: 'Date', dataKey: "createdAt"},
        //     { title: 'Invoice', dataKey: "invoice"},
        //     { title: 'Patient Name', dataKey: "patient"},
        //     { title: 'Type', dataKey : "type"},
        //     { title: 'Product Name', dataKey : "product"},
        //     { title: 'Pack', dataKey : "pack"},
        //     { title: 'M.R.P', dataKey : "mrp"},
        //     { title: 'QTY', dataKey : "qty"},
        //     { title: 'Disc%', dataKey : "discount"},
        //     { title: 'Amount', dataKey : "amount"},
        //     { title: 'Batch', dataKey : "batch"}
        // ]
        // var csvData = []
        // for (var i = 0; i < this.returnPurchaseArray.opt.length; i++) {
        //     var ob ;
        //     ob = {}
        //     ob.createdAt = this.getTimeFiveAndHalfHoursBefore(this.salesBookArray[this.selectedIndex].createdAt)
        //     ob.createdAt = this.datePipe.transform(ob.createdAt, 'dd-MM-yyyy, h:mm a');
        //     ob.invoice = this.salesBookArray[this.selectedIndex].id
        //     ob.patient = this.salesBookArray[this.selectedIndex].patient
        //     ob.patient = this.salesBookArray[this.selectedIndex].patient  
        //     ob.type = this.returnPurchaseArray.opt[i]
        //     ob.product = this.returnPurchaseArray.product[i]
        //     ob.pack = this.returnPurchaseArray.pack1[i] +"x"+ this.returnPurchaseArray.pack2[i]
        //     ob.mrp = this.returnPurchaseArray.mrp[i]
        //     ob.qty = this.returnPurchaseArray.quantity[i]
        //     ob.discount = this.returnPurchaseArray.discount[i]
        //     if(this.returnPurchaseArray.discount[i] ==null || this.returnPurchaseArray.discount[i] == '' || this.returnPurchaseArray.discount[i] == undefined){
        //         ob.discount = 0
        //     }
        //     ob.amount = this.returnPurchaseArray.amount[i]
        //     ob.batch = this.returnPurchaseArray.batch[i]
        //     csvData.push(ob)
        // }
        // var todayDate = new Date().toJSON().toString().substr(0,10)
        // var from = new Date(this.fromDate).toJSON().toString().substr(0,10)
        // var to = new Date(this.toDate).toJSON().toString().substr(0,10)
        // var doc = new jsPDF('p', 'pt');
        // doc.autoTable(head, csvData, {
        //     theme: 'grid',
        //     styles: {
        //         overflow: 'linebreak',
        //     },
        //     margin: 5,
        //     fontSize:8,
        //     tableWidth: 'auto',
        //     showHeader: 'everyPage'
        // });
        // doc.save('SalesBook'+"OfInvoice"+this.salesBookArray[this.selectedIndex].id);
    };
    SalesbookComponent.prototype.getData = function (data) {
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
    SalesbookComponent.prototype.viewData = function (item, index) {
        this.patientAmount = item.total_amount;
        this.returnPurchaseArray = item.medicines[0];
        this.selectedIndex = index;
        $("#view-sales-order-modal").modal("show");
    };
    SalesbookComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.dataDoctors.length; i++) {
            if (this.dataDoctors[i]._id == id) {
                return (this.dataDoctors[i].first_name);
            }
        }
    };
    SalesbookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-salesbook',
            template: __webpack_require__("../../../../../src/app/header-five-layout/salesbook/salesbook.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-five-layout/salesbook/salesbook.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], SalesbookComponent);
    return SalesbookComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-five-layout/salesbook/salesbook.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesbookModule", function() { return SalesbookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__salesbook_routing_module__ = __webpack_require__("../../../../../src/app/header-five-layout/salesbook/salesbook-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__salesbook_component__ = __webpack_require__("../../../../../src/app/header-five-layout/salesbook/salesbook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__number_to_words__ = __webpack_require__("../../../../../src/app/header-five-layout/salesbook/number-to-words.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SalesbookModule = /** @class */ (function () {
    function SalesbookModule() {
    }
    SalesbookModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__salesbook_routing_module__["a" /* SalesbookRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatSortModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__salesbook_component__["a" /* SalesbookComponent */], __WEBPACK_IMPORTED_MODULE_8__number_to_words__["a" /* NumberToWords */]]
        })
    ], SalesbookModule);
    return SalesbookModule;
}());



/***/ })

});
//# sourceMappingURL=salesbook.module.chunk.js.map