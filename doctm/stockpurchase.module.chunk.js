webpackJsonp(["stockpurchase.module"],{

/***/ "../../../../../src/app/header-five-layout/stockpurchase/stockpurchase-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockpurchaseRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stockpurchase_component__ = __webpack_require__("../../../../../src/app/header-five-layout/stockpurchase/stockpurchase.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__stockpurchase_component__["a" /* StockpurchaseComponent */]
    }
];
var StockpurchaseRoutingModule = /** @class */ (function () {
    function StockpurchaseRoutingModule() {
    }
    StockpurchaseRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], StockpurchaseRoutingModule);
    return StockpurchaseRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/stockpurchase/stockpurchase.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cstm-hdr {\r\n    padding: 15px 10px;\r\n    float: left;\r\n    width: 100%;\r\n    padding-bottom: 0px;\r\n}\r\n.cstm-input input {\r\n    /*border-color:rgba(56, 94, 138, 1);*/\r\n    margin-top: 50px;\r\n}\r\n.cstm-input button {\r\n    margin-top: 40px;\r\n    padding: 11.5px 17px;\r\n}\r\n.stock-tab {\r\n    float: left;\r\n    width: 100%;\r\n    padding-bottom: 0px;\r\n}\r\n.hd-one {\r\n    display: inline-block;\r\n    padding: 10px 25.5px;\r\n    border: 1px solid #000;\r\n    background: #DAE5F1;\r\n}\r\n.tab-stock {\r\n    margin-top: 55px;\r\n}\r\n.tab-stock table tr td div.trans-input input {\r\n    width: 97%;\r\n    padding: 6px 0px;\r\n}\r\n.tab-stock table tr td div.pro-trans-input input {\r\n    width: 98%;\r\n    padding: 6px 0px;\r\n}\r\n.tab-stock table tr td select {\r\n    width: 82px;\r\n    height: 36px;\r\n    border-radius: 0px;\r\n    margin-right: 3px;\r\n}\r\n.tab-stock {\r\n    min-height: 190px;\r\n    max-height: 190px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\ntr.mg-top {\r\n    margin-top: 5px;\r\n    display: block;\r\n}\r\ntd.ad-remove i.fa-minus {\r\n    color: #f00;\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n    font-size: 20px;\r\n}\r\ntd.ad-remove i.fa-plus {\r\n    color: #92d050;\r\n    cursor: pointer;\r\n    margin-left: 10px;\r\n    font-size: 20px;\r\n}\r\n.footer-cstm-1 {\r\n    padding: 15px 0px;\r\n}\r\ntr.foot-data {\r\n    background: #EAF1DD;\r\n}\r\n#stck-prchse .modal-body {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n#stck-prchse .modal-header h3 {\r\n    color: #002060;\r\n}\r\n#stck-prchse .modal-body button {\r\n    background: #92D050;\r\n    color: #fff;\r\n    padding: 3px 18px;\r\n    font-size: 16px;\r\n    min-width: 100px;\r\n}\r\nb.bill-no {\r\n    font-size: 18px;\r\n}\r\n#stck-prchse .modal-content {\r\n    background-color: #f2f2f2;\r\n    border-radius: 20px;\r\n}\r\n#stck-prchse .modal-dialog {\r\n    display: table;\r\n}\r\ndiv.hd-two {\r\n    background-color: #FDE9D8;\r\n    display: inline-block;\r\n    padding: 8px 21.3px;\r\n    border: 1px solid #ffc0c0;\r\n    min-height: 53px;\r\n    max-height: 53px;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n}\r\n@media (min-width: 992px) {\r\n    .modal-lg.modal-cstm {\r\n        width: 1185px;\r\n    }\r\n}\r\n.tab-stock-2 table tr td select {\r\n    width: 67px;\r\n}\r\n/* The container */\r\n.cstm-chk {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.cstm-chk input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n    position: absolute;\r\n    top: -6.5px;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #d6d6d6;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.cstm-chk:hover input~.checkmark {\r\n    background-color: #ccc;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.cstm-chk input:checked~.checkmark {\r\n    background-color: #fff;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.cstm-chk input:checked~.checkmark:after {\r\n    display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.cstm-chk .checkmark:after {\r\n    left: 9px;\r\n    top: 3px;\r\n    width: 6px;\r\n    height: 16px;\r\n    border: solid #000;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n.mg-top {\r\n    margin-top: 8px;\r\n}\r\n.data-div {\r\n    color: #000;\r\n    position: relative;\r\n    padding: 8px 30px;\r\n    border-radius: 4px;\r\n    font-size: 18px;\r\n    min-width: 150px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    background-color: #fff;\r\n    border: 1px solid #002060;\r\n    -webkit-transition: all 0.3s ease 0s;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n#stck-prchse button.close {\r\n    opacity: 1;\r\n    font-size: 30px;\r\n}\r\n/*ctsm table sorting ------------------------- -------------*/\r\n.ipdbook {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 30px 0;\r\n}\r\n.table-row {\r\n    background: -webkit-linear-gradient(top, #d6f8ff 0%, #a3ecff 72%);\r\n}\r\n.table {\r\n    border: 1px solid #eee;\r\n}\r\n.history {\r\n    background-color: transparent;\r\n}\r\n.table-row td, .table-head th {\r\n    border-top: none;\r\n    padding: 8px 0px;\r\n}\r\n.select-duration {\r\n    padding-bottom: 30px;\r\n}\r\n.select-duration h3 {\r\n    margin: 0;\r\n}\r\n.ok-btn {\r\n    background-color: transparent;\r\n    border: 1px solid #002160;\r\n    width: 50px;\r\n}\r\nthead.table-head, tbody.my-tbdy tr {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n    /* even columns width , fix width of table too*/\r\n}\r\nthead.table-head {\r\n    width: calc( 100% - 1em);\r\n}\r\n.table-scroll-outside {\r\n    min-height: 260px;\r\n    max-height: 260px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n}\r\n.table-scroll-outside table tbody {\r\n    display: block;\r\n}\r\n.btn-custom {\r\n    color: #002160;\r\n    position: relative;\r\n    padding: 13.5px 17px;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n}\r\n.ipdbook {\r\n    padding: 0px;\r\n}\r\n.select-duration {\r\n    padding-bottom: 15px;\r\n}\r\n.my-tbdy td {\r\n    vertical-align: middle;\r\n}\r\n.table-head tr th {\r\n    border-right: 1px solid #fff;\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.table-head tr th h4 {\r\n    font-size: 12px;\r\n}\r\n.my-tbdy tr td {\r\n    border-right: 1px solid #fff;\r\n    background-color: #DAE5F1!important;\r\n    color: #000;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n.cstm-table {\r\n    margin-bottom: 0px;\r\n}\r\n.cstm-input3 input {\r\n    border-color: rgba(56, 94, 138, 1);\r\n    margin-top: 40px;\r\n}\r\n.cstm-input input {\r\n    width: 37%;\r\n    display: inline-block;\r\n}\r\n.cstm-input-2 input {\r\n    display: inline-block;\r\n    width: 98%;\r\n}\r\n.foot-btm {\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n.min i {\r\n    color: #ff0000;\r\n    font-size: 22px;\r\n    cursor: pointer;\r\n}\r\n.add i {\r\n    color: #00B050;\r\n    font-size: 22px;\r\n    cursor: pointer;\r\n}\r\n.chk-2 {\r\n    top: -20.5px;\r\n}\r\n.mg-top {\r\n    margin-top: 0px;\r\n}\r\n.cstm-left {\r\n    margin-left: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-five-layout/stockpurchase/stockpurchase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr\">\n\t<div class=\"\">\n\t\t<div  class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12\">\n\t\t\t<div  class=\"dashboard-header-logo\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\">\n\t\t\t\t<img _ngcontent-c3=\"\" class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerLink=\"/header-five-layout/dashboard-pharmacy\">\n\t\t\t</div>\n\t\t\t<div >\n\t\t\t\t<div _ngcontent-c3=\"\" class=\"dshbrd-btn\">\n\t\t\t\t\t<button  class=\"btn btn-custom\" routerLink=\"/header-five-layout/dashboard-pharmacy\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\"> Dashboad  </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<form [formGroup]=\"stockPurchase\">\n\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\">\n\t\t\t\t<div class=\"form-group cstm-input3\">\n\t\t\t\t    <input type=\"text\" class=\"form-control input-lg\" [(ngModel)]=\"reqData.partyName\" placeholder=\"Party name\" required=\"\" pattern=\"[a-zA-z0-9 ]+\" [formControl]=\"stockPurchase.controls['partyName']\" [matAutocomplete]=\"auto1\" (keyup)=\"FindPartySuggestion($event.target.value)\" (blur)=\"FindPartyName()\">\n\t\t\t\t    <mat-autocomplete #auto1=\"matAutocomplete\" style=\"width:100%\">\n\t\t\t\t\t  <mat-option *ngFor=\"let option of partyNameSuggestion\" [value]=\"option\">\n\t\t\t\t\t\t{{option}}\n\t\t\t\t\t  </mat-option>\n\t\t\t\t\t</mat-autocomplete>\t\t\n\t\t\t\t</div>\n\t\t\t\t <p style=\"color: #FF0000\" *ngIf=\"!stockPurchase.controls['partyName'].valid  && ( stockPurchase.controls['partyName'].touched)\">Invalid Party Name !!!</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\n\t\t\t\t<div class=\"row mg-none\">\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 in-dt\" style=\"margin-top: 48px;\">\n\t\t\t\t\t\t<div class=\"form-group cstm-input3\">\n\t\t\t\t\t    \t<!-- <input type=\"number\" class=\"form-control input-lg\" [(ngModel)]=\"reqData.invoiceNumber\" placeholder=\"Invoice No.\" required=\"\" pattern=\"[0-9]+\" [formControl]=\"stockPurchase.controls['invoiceNumber']\"> -->\n\t\t\t\t\t    \t<angular2-date-picker [(ngModel)]=\"reqData.invoiceDate\" [formControl]=\"stockPurchase.controls['invoiceDate']\" [settings]=\"settings\"></angular2-date-picker>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t <p style=\"color: #FF0000\" *ngIf=\"!stockPurchase.controls['invoiceDate'].valid  && ( stockPurchase.controls['invoiceDate'].touched)\">Invalid Invoice Date !!!</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n\t\t\t\t\t\t<div class=\"form-group cstm-input3\">\n\t\t\t\t\t    \t<input type=\"number\" class=\"form-control input-lg\" [(ngModel)]=\"reqData.billNumber\" placeholder=\"Bill Number\" required=\"\" pattern=\"[0-9]+\" [formControl]=\"stockPurchase.controls['billNumber']\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t <p style=\"color: #FF0000\" *ngIf=\"!stockPurchase.controls['billNumber'].valid  && ( stockPurchase.controls['billNumber'].touched)\">Invalid Bill Number !!!</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 cstm-input\">\n\t\t\t<button class=\"btn btn-custom\" data-toggle=\"modal\" data-target=\"#stck-prchse\" [disabled]=\"partyNameNotFound\" id=\"btn_stck-p\">Return Purchase </button>\n\t\t</div>\n\t</div>\n</div>\n<!-- cstm table -->\n<div class=\"stock-tab\">\n\t<div class=\"col-lg-12\">\n\t\t<table cellpadding=\"20px\" class=\"table cstm-table\" style=\"position: relative;\">\n    \t<thead class=\"table-head tb-pharmacy\" style=\"position: absolute;\">\n\t\t  \t<tr>\n\t\t\t    <th class=\"text-center\" width=\"60px\"><h5>Type</h5></th>\n                <th class=\"text-center\" width=\"180px\"><h5>Product</h5></th>\n                <th class=\"text-center\" width=\"85px\"><h5>Batch</h5></th>\n                <th class=\"text-center\" width=\"95px\"><h5>Exp</h5></th>\n                <th class=\"text-center\" width=\"120px\"><h5>Pack</h5></th>\n                <th class=\"text-center\" width=\"80px\"><h5>M.R.P</h5></th>\n                <th class=\"text-center\" width=\"80px\"><h5>QTY</h5></th>\n                <th class=\"text-center\" width=\"80px\"><h5>P.Rate</h5></th>\n                <th class=\"text-center\" width=\"65px\"><h5>CGST(%)</h5></th>\n                <th class=\"text-center\" width=\"65px\"><h5>SGST(%)</h5></th>\n                <th class=\"text-center\" width=\"70px\"><h5>Disc(%)</h5></th>\n                <th class=\"text-center\" width=\"80px\"><h5>Amount</h5></th>\n                \n                <th class=\"text-center\" width=\"60px\"><h5>Action</h5></th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t</table>\n\t\t<div class=\"table-scroll-outside table-two\" style=\"margin-top: 50px;\">\n\t\t\t<table>\n\t\t\t\t<tbody class=\"tbod-max-w my-tbdy\">\n\t\t\t\t\t<tr class=\"table-row\" *ngFor=\"let tr of totalTr;let i = index;\">\n\t\t\t\t\t\t<td width=\"60px\">\n\t\t\t\t\t\t\t<select  class=\"form-control\" class=\"form-control txtfield\" [(ngModel)]=\"reqData.opt[i]\">\n\t\t\t\t\t\t\t\t<option selected=\"\" value=\"\" disabled=\"\">Type</option>\t\n\t\t\t\t\t\t\t\t<option value=\"Tablet\">Tab</option>\n\t\t\t\t\t\t\t\t<option value=\"Capsule\">Cap</option>\n\t\t\t\t\t\t\t\t<option value=\"Syrup\">Syr</option>\n\t\t\t\t\t\t\t\t<option value=\"Suspension\">Sus</option>\n\t\t\t\t\t\t\t\t<option value=\"Emulsion\">Emu</option>\n\t\t\t\t\t\t\t\t<option value=\"Solution\">Sol</option>\n\t\t\t\t\t\t\t\t<option value=\"Injection\">Inj</option>\n\t\t\t\t\t\t\t\t<option value=\"MouthWash\">Mou</option>\n\t\t\t\t\t\t\t\t<option value=\"Powder\">Pow</option>\n\t\t\t\t\t\t\t\t<option value=\"Cream\">Cre</option>\n\t\t\t\t\t\t\t\t<option value=\"Gel\">Gel</option>\n\t\t\t\t\t\t\t\t<option value=\"Drops\">Dro</option>\n\t\t\t\t\t\t\t\t<option value=\"Aerosols\">Aer</option>\n\t\t\t\t\t\t\t\t<option value=\"Lotion\">Lot</option>\n\t\t\t\t\t\t\t\t<option value=\"Ointment\">Oin</option>\n\t\t\t\t\t\t\t\t<option value=\"Unit\">Unit</option>\n\t\t\t\t\t\t\t\t<option value=\"Box\">Box</option>\n\t\t\t\t\t\t\t\t<option value=\"Misc\">Misc</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"180px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Product\" [(ngModel)]=\"reqData.product[i]\" (keyup)=\"onTextChangeOfMedName(reqData.opt[i],$event.target.value)\" [matAutocomplete]=\"auto\">\n\t\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\" style=\"width:100%\">\n\t\t\t\t\t\t\t\t  <mat-option *ngFor=\"let option of productNameSuggestion\" [value]=\"option\">\n\t\t\t\t\t\t\t\t\t{{option}}\n\t\t\t\t\t\t\t\t  </mat-option>\n\t\t\t\t\t\t\t\t</mat-autocomplete>\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"85px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"\"  [(ngModel)]=\"reqData.batch[i]\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"95px\" class=\"text-center\">\n\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\"  pattern=\"/^-?\\d+\\.?\\d*$/\" onKeyPress=\"if(this.value.length==2) return false;\" [(ngModel)]=\"reqData.month[i]\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>\n\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\"   pattern=\"/^-?\\d+\\.?\\d*$/\" onKeyPress=\"if(this.value.length==2) return false;\" [(ngModel)]=\"reqData.year[i]\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"120px\" class=\"text-center\">\n\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" onKeyPress=\"if(this.value.length==2) return false;\" [(ngModel)]=\"reqData.pack1[i]\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span>&nbsp;&nbsp;X&nbsp;&nbsp;</span>\n\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\"  pattern=\"/^-?\\d+\\.?\\d*$/\" onKeyPress=\"if(this.value.length==2) return false;\" [(ngModel)]=\"reqData.pack2[i]\">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">          \n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"reqData.mrp[i]\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"reqData.quantity[i]\" (blur)=\"getTotalRecord(i)\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"reqData.rate[i]\" (blur)=\"getTotalRecord(i)\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"65px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"\"  pattern=\"/^-?\\d+\\.?\\d*$/\" onKeyPress=\"if(this.value.length==3) return false;\" [(ngModel)]=\"reqData.cgst[i]\" (blur)=\"getTotalRecord(i)\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"65px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"\" onKeyPress=\"if(this.value.length==3) return false;\" [(ngModel)]=\"reqData.sgst[i]\" (blur)=\"getTotalRecord(i)\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"70px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"\" onKeyPress=\"if(this.value.length==3) return false;\" [(ngModel)]=\"reqData.discount[i]\" (blur)=\"getTotalRecord(i)\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"reqData.amount[i]\" (blur)=\"getTotalRecord(i)\"  disabled=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t<td width=\"60px\" class=\"text-center\">\n\t\t\t\t\t\t\t<span class=\"min icon-2\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-minus\" (click)=\"removeRow(i)\"> &nbsp;&nbsp;&nbsp;&nbsp;</i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"add icon-2\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-plus\" (click)=\"addRow()\" *ngIf=\"i==totalTr.length-1\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t  \t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>\n\t\n</div>\n\n<!-- ends -->\n\n<!-- <div class=\"stock-tab\">\n\t<div class=\"col-lg-10 col-lg-offset-1 cstm-div\">\n\t\t<table cellpadding=\"20px\" class=\"table cstm-table\">\n            <thead class=\"table-head\">\n              <tr>\n                <th class=\"th-back brdr-right\"><h5>Type</h5></th>\n                <th class=\"th-back brdr-right prdct\"><h5>Product</h5></th>\n                <th class=\"th-back brdr-right\"><h5>Pack <small class=\"sn-txt\">(1x10)</small></h5></th>\n                <th class=\"th-back brdr-right\"><h5>M.R.P</h5></th>\n                <th class=\"th-back brdr-right\"><h5>QTY</h5></th>\n                <th class=\"th-back brdr-right\"><h5>P.Rate</h5></th>\n                <th class=\"th-back brdr-right\"><h5>CGST</h5></th>\n                <th class=\"th-back brdr-right\"><h5>SGST</h5></th>\n                <th class=\"th-back brdr-right\"><h5>Disc</h5></th>\n                <th class=\"th-back brdr-right\"><h5>Amount</h5></th>\n                <th class=\"th-back brdr-right\"><h5>Batch</h5></th>\n                <th class=\"th-back brdr-right\"><h5>Exp <small class=\"sn-txt\">(MM/YY)</small></h5></th>\n                <th class=\"th-back brdr-right\"><h5>Action</h5></th>\n              </tr>\n           </thead>\n            <tbody class=\"tbod-max-w cstm-tbd\">\n\t\t\t\t<tr class=\"\" *ngFor=\"let tr of totalTr;let i = index;\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<select  class=\"form-control txtfield\" [(ngModel)]=\"reqData.opt[i]\">\n\t\t\t\t\t\t\t<option selected=\"\" value=\"\" disabled=\"\">Type</option>\n\t                  \t\t<option>TAB</option>\n\t                  \t\t<option>CAP</option>\n\t                  \t\t<option>SYR</option>\n\t                  \t\t<option>SUS</option>\n\t                  \t\t<option>EMUL</option>\n\t                  \t\t<option>SOL</option>\n\t                  \t\t<option>INJ</option>\n\t                  \t\t<option>CRE</option>\n\t                  \t\t<option>OINT</option>\n\t                  \t\t<option>GEL</option>\n\t                  \t\t<option>LOT</option>\n\t                  \t\t<option>DROP</option>\n\t                  \t\t<option>UNIT</option>\n\t                  \t\t<option>ITEM</option>\n\t                  \t\t<option>STRP</option>\n\t                  \t\t<option>PCS</option>\n\t                  \t\t<option>BOX</option>\n\t                  \t\t<option>MISC</option>\n\t                    </select>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"prdct\">\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Product1\" [(ngModel)]=\"reqData.product[i]\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div two-inputs\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"1\" [(ngModel)]=\"reqData.pack1[i]\" class=\"\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"2\" [(ngModel)]=\"reqData.pack2[i]\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"99.50\" (blur)=\"getTotalRecord(i)\" [(ngModel)]=\"reqData.mrp[i]\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"10\" [(ngModel)]=\"reqData.quantity[i]\" (blur)=\"getTotalRecord(i)\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"70.50\" disabled=\"\" [(ngModel)]=\"reqData.rate[i]\" (blur)=\"getTotalRecord(i)\"  value=\"reqData.rate[i]\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"6\" [(ngModel)]=\"reqData.cgst[i]\" (blur)=\"getTotalRecord(i)\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"6\" [(ngModel)]=\"reqData.sgst[i]\" (blur)=\"getTotalRecord(i)\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"5\" [(ngModel)]=\"reqData.discount[i]\" (blur)=\"getTotalRecord(i)\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"705.0\" disabled=\"\" [(ngModel)]=\"reqData.amount[i]\" (blur)=\"getTotalRecord(i)\" class=\"\" value=\"reqData.amount[i]\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"B2334\" [(ngModel)]=\"reqData.batch[i]\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class=\"txt-div two-inputs\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"mm\" [(ngModel)]=\"reqData.month[i]\" class=\"\">\n\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"yy\" [(ngModel)]=\"reqData.year[i]\" class=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td class=\"ad-remove\">\n\t\t\t\t\t\t<i class=\"fa fa-minus\" (click)=\"removeRow(i)\"></i>\n\t\t\t\t\t\t<i class=\"fa fa-plus\" (click)=\"addRow()\" *ngIf=\"i==totalTr.length-1\"></i>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n          </tbody>\n        </table>\n\t</div>\n</div> -->\n<div class=\"footer-cstm-1\" style=\"float: left;width:100%;\">\n\t<div class=\"col-lg-10\">\n\t  <table class=\"table table-bordered\">\n\t    <thead>\n\t      <tr class=\"foot-data\">\n\t        <th class=\"text-center\">TOTAL ITEMS</th>\n\t        <th class=\"text-center\">SUBTOTAL</th>\n\t        <th class=\"text-center\">CREDIT NOTE /RETURN</th>\n\t        <th class=\"text-center\">NET TOTAL</th>\n\t        <th class=\"text-center\">PARTY TOTAL</th>\n\t      </tr>\n\t    </thead>\n\t    <tbody>\n\t      <tr>\n\t        <td class=\"text-center\">{{totalTr.length}}</td>\n\t        <td class=\"text-center\">{{totalNetAmount}}</td>\n\t        <td class=\"text-center\">\n\t        \t<div class=\"row\">\n\t        \t\t<div class=\"col-lg-4 col-lg-offset-4 cstm-left\">\n\t        \t\t\t<input type=\"number\" name=\"\" class=\"form-control\" [(ngModel)]=\"returnEditable\" (blur)=\"calculateReturn()\">\n\t        \t\t</div>\n\t        \t\t<div *ngIf=\"billFetched\">\n\t        \t\t\tAgainst bill Number: {{billNumberSearch}}\n\t        \t\t</div>\n\t        \t</div>\n\t        </td>\n\t        <td class=\"text-center\">{{totalNetAmount}}</td>\n\t        \n\t        <td class=\"text-center\">{{partyTotal}}</td>\n\t      </tr>\n\t    </tbody>\n\t  </table>\n\t</div>\n\t<div class=\"col-lg-2 col-xs-12 text-center\">\n\t\t<div  class=\"dashboard-btns new-reg\">\n\t\t\t<button  class=\"btn btn-custom btn-1\" [disabled]=\"!stockPurchase.valid\" (click)='savePurchaseDetails()'><span\n\t\t\t\t>Add</span><br> <span>To</span><br> Stock</button>\n\t\t</div>\n\t</div>\n</div>\n  <!-- Modal -->\n<div class=\"modal fade\" id=\"stck-prchse\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content modal-lg modal-cstm\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"resetReturn()\">&times;</button>\n          <h3 class=\"modal-title text-center\">Return Purchase</h3>\n        </div>\n        <div class=\"modal-body\">\n\t        <div class=\"col-lg-3 col-lg-offset-1 text-right\">\n\t         \t<b class=\"bill-no\">Bill Number</b>\n\t        </div>\n\t        <div class=\"col-lg-4\">\n\t         \t<div class=\"form-group\">\n\t         \t\t<input type=\"number\" name=\"\" class=\"form-control\" [(ngModel)]=\"billNumberSearch\" (keyup)=\"onKey($event,'bill')\">\n\t         \t</div>\n\t        </div>\n\t        <div class=\"col-lg-4\">\n\t         \t<button class=\"btn btn-custom\" (click)=\"fetchBill()\">\n\t\t\t\t\t<div> Search </div>\n\t\t\t\t</button>\n\t        </div>\n\t        <div class=\"stock-tab\" *ngIf=\"billFetched\">\n\t\t\t\t<div class=\"col-lg-12\">\n<!-- \t\t\t\t\t<div class=\"hd-two text-center\">\n\t\t\t\t\t\t<div>Return</div>\n\t\t\t\t\t\t<div>Item</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Type</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Product Name</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Pack</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>M.R.P</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<div>Return</div>\n\t\t\t\t\t\t<div>QTY</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>P.Rate</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>CGST</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>SGST</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Disc</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Account</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Batch</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"hd-two\">\n\t\t\t\t\t\t<span>Exp</span>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<table cellpadding=\"20px\" class=\"table cstm-table\" style=\"position: relative;\">\n    \t<thead class=\"table-head\" style=\"position: absolute;\">\n\t\t  \t<tr>\n\t\t\t    <th class=\"text-center\" width=\"60px\"><h5>Return Item</h5></th>\n\t\t\t    <th class=\"text-center\"><h5>Type</h5></th>\n                <th class=\"text-center\"  width=\"136px\" ><h5>Product Name</h5></th>\n                <th class=\"text-center\" ><h5>Pack</h5></th>\n                <th class=\"text-center\" ><h5>M.R.P</h5></th>\n                <th class=\"text-center\" ><h5> Return QTY</h5></th>\n                <th class=\"text-center\" ><h5>P.Rate</h5></th>\n                <th class=\"text-center\"><h5>CGST(%)</h5></th>\n                <th class=\"text-center\" ><h5>SGST(%)</h5></th>\n                <th class=\"text-center\"><h5>Disc(%)</h5></th>\n                <th class=\"text-center\" ><h5>Amount</h5></th>\n                <th class=\"text-center\"><h5>Batch</h5></th>\n                <th class=\"text-center\"><h5>Exp</h5></th>                \n\t\t\t</tr>\n\t\t</thead>\n\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<div class=\"table tab-stock tab-stock-2\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tr class=\"mg-top\" *ngFor=\"let tr of returnPurchaseArray;let i = index;\">\n\t\t\t\t\t\t\t\t<td width=\"60px\">\n\t\t\t\t\t\t\t\t\t<label class=\"cstm-chk\">\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"returnStatus[i]\" [checked]=\"returnStatus[i]\" (change)=\"getTotalReturn(i)\">\n\t\t\t\t\t\t\t\t\t  <span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Tablet\" class=\"cstm-put\" value=\"{{tr.type}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td width=\"136px\">\n\t\t\t\t\t\t\t\t\t<div class=\"pro-trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Product1\" class=\"cstm-put\" value=\"{{tr.product}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"1x10\" class=\"cstm-put\" value=\"{{tr.pack_units}} x {{tr.pack_quantity}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"99.50\" class=\"cstm-put\" value=\"{{tr.mrp}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"\" class=\"cstm-put\" value=\"{{tr.qty}}\" [(ngModel)]=\"returnQty[i]\" max=\"{{tr.qty}}\" (blur)=\"getTotalReturn(i)\" disabled=\"{{getReturnStatus(i)}}\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"70.50\" class=\"cstm-put\" value=\"{{tr.p_rate}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"0\" class=\"cstm-put\" value=\"{{tr.cgst}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"0\" class=\"cstm-put\" value=\"{{tr.sgst}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"0\" class=\"cstm-put\" value=\"{{tr.discount}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td *ngIf=\"returnStatus[i]\">\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"0\" class=\"cstm-put\" value=\"{{tr.new_amount}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td *ngIf=\"!returnStatus[i]\">\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"0\" class=\"cstm-put\" value=\"{{tr.amount}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"B2334\" class=\"cstm-put\" value=\"{{tr.batch}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"trans-input\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"6/23\" class=\"cstm-put\" value=\"{{tr.month}} / {{tr.year}}\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>\n        <div class=\"modal-footer\" *ngIf=\"billFetched\">\n         <div class=\"col-lg-6\">\n         \t<div class=\"row\">\n         \t\t<div class=\"col-lg-6\">\n         \t\t\t<h3 class=\"mg-top\">Total Refund Amount</h3>\n         \t\t</div>\n         \t\t<div class=\"col-lg-6 text-left\">\n         \t\t\t<button class=\"btn data-div\" readonly=\"\" disabled=\"\">\n\t\t\t\t\t\t<div> {{quantityReturn}}</div>\n\t\t\t\t\t</button>\n         \t\t</div>\n         \t</div>\n         </div>\n         <div class=\"col-lg-6\">\n         \t<button class=\"btn btn-custom\" (click)=\"openConfirmationButton()\">\n\t\t\t\t<div> Update </div>\n\t\t\t</button>\n         </div>\n        </div>\n        <div class=\"clearfix\"></div>\n      </div>      \n    </div>\n</div>\n<!-- updateReturnAmount -->"

/***/ }),

/***/ "../../../../../src/app/header-five-layout/stockpurchase/stockpurchase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockpurchaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirmation_popup_custom_dialog_custom_dialog_component__ = __webpack_require__("../../../../../src/app/confirmation-popup/custom-dialog/custom-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StockpurchaseComponent = /** @class */ (function () {
    function StockpurchaseComponent(formBuilder, toastr, userService, dialog) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.dialog = dialog;
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
    }
    StockpurchaseComponent.prototype.ngOnInit = function () {
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails']);
        //akshay
        this.reqData = {};
        this.reqData.opt = [];
        this.reqData.opt[0] = "";
        this.reqData.product = [];
        this.reqData.product[0] = "";
        this.reqData.pack1 = [];
        this.reqData.pack1[0] = "1";
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
        this.returnQty = [];
        this.returnStatus = [];
        this.quantityReturn = 0;
        this.returnEditable = 0;
        this.billFetched = false;
        this.reqData.invoiceDate = new Date();
        this.stockPurchase = this.formBuilder.group({
            'billNumber': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[0-9]*')])],
            'partyName': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].pattern('^[^ ]+[a-zA-Z0-9 ]*')])],
            'invoiceDate': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["n" /* Validators */].required])],
        });
        this.stockToReturn = [];
        this.totalNetAmount = 0;
        this.partyTotal = 0;
        this.partyNameNotFound = true;
    };
    StockpurchaseComponent.prototype.addRow = function () {
        this.totalTr.push(1);
        this.reqData.opt[this.totalTr.length - 1] = "";
        this.reqData.product[this.totalTr.length - 1] = "";
        this.reqData.pack1[this.totalTr.length - 1] = "1";
        this.reqData.pack2[this.totalTr.length - 1] = "";
        this.reqData.quantity[this.totalTr.length - 1] = "";
        this.reqData.mrp[this.totalTr.length - 1] = "";
        this.reqData.rate[this.totalTr.length - 1] = "";
        this.reqData.cgst[this.totalTr.length - 1] = "";
        this.reqData.sgst[this.totalTr.length - 1] = "";
        this.reqData.discount[this.totalTr.length - 1] = "";
        this.reqData.amount[this.totalTr.length - 1] = "";
        this.reqData.batch[this.totalTr.length - 1] = "";
        this.reqData.month[this.totalTr.length - 1] = "";
        this.reqData.year[this.totalTr.length - 1] = "";
    };
    StockpurchaseComponent.prototype.removeRow = function (i) {
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
    StockpurchaseComponent.prototype.savePurchaseDetails = function () {
        var _this = this;
        this.partyTotal = 0;
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
            this.reqData.pack1[i] = 1;
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
            if (this.reqData.quantity[i] < 0 || this.reqData.quantity[i] == '' || this.reqData.quantity[i] == null || this.reqData.quantity[i] == undefined) {
                this.toastr.warning('Invalid quantity', 'Warning');
                return;
            }
            else {
                this.totalQuantity += this.reqData.quantity[i];
            }
        }
        for (var i = 0; i < this.reqData.rate.length; i++) {
            if (this.reqData.rate[i] < 1 || this.reqData.rate[i] == '' || this.reqData.rate[i] == null || this.reqData.rate[i] == undefined) {
                this.toastr.warning('Invalid purchase rate', 'Warning');
                return;
            }
            else {
                this.totalRate += this.reqData.rate[i];
            }
        }
        for (var i = 0; i < this.reqData.cgst.length; i++) {
            if (this.reqData.cgst[i] < 0) {
                this.toastr.warning('Invalid cgst', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.sgst.length; i++) {
            if (this.reqData.sgst[i] < 0) {
                this.toastr.warning('Invalid sgst', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.discount.length; i++) {
            if (this.reqData.discount[i] < 0 || this.reqData.discount[i] > 100) {
                this.toastr.warning('Invalid discount', 'Warning');
                return;
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
        for (var i = 0; i < this.reqData.month.length; i++) {
            if (this.reqData.month[i] > 12 || this.reqData.month[i] <= 0 || this.reqData.month[i] == '' || this.reqData.month[i] == null || this.reqData.month[i] == undefined) {
                this.toastr.warning('Invalid month', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.year.length; i++) {
            if (this.reqData.year[i] < thisYear || this.reqData.year[i] == '' || this.reqData.year[i] == null || this.reqData.year[i] == undefined) {
                this.toastr.warning('Invalid year', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.reqData.month.length; i++) {
            var currentYear = new Date().getFullYear().toString().substr(-2);
            var currentMonth = new Date().getMonth() + 1;
            if (currentMonth < 10) {
                var expiry = currentYear.toString() + "0" + currentMonth.toString();
            }
            else {
                var expiry = currentYear.toString() + currentMonth.toString();
            }
            var enteredExpiry = "";
            var date1MonthLater = new Date();
            date1MonthLater.setDate(new Date().getDate() + 30);
            var yearAfter1Month = new Date(date1MonthLater).getFullYear().toString().substr(-2);
            var monthAfter1Month = new Date(date1MonthLater).getMonth() + 1;
            if (monthAfter1Month < 10) {
                var expiryAfter1month = yearAfter1Month.toString() + "0" + monthAfter1Month.toString();
            }
            else {
                var expiryAfter1month = yearAfter1Month.toString() + monthAfter1Month.toString();
            }
            var calculatedExpiry;
            if (this.reqData.month[i] == 12) {
                var yearCal = this.reqData.year[i] + 1;
                calculatedExpiry = yearCal.toString() + "01";
            }
            else {
                if (this.reqData.month[i] < 10) {
                    calculatedExpiry = this.reqData.year[i].toString() + "0" + this.reqData.month[i].toString();
                }
                else {
                    calculatedExpiry = this.reqData.year[i].toString() + this.reqData.month[i].toString();
                }
            }
            if (this.reqData.month[i] < 10) {
                enteredExpiry = this.reqData.year[i].toString() + "0" + this.reqData.month[i].toString();
            }
            else {
                enteredExpiry = this.reqData.year[i].toString() + this.reqData.month[i].toString();
            }
            this.reqData.expiry.push(parseInt(enteredExpiry));
            if (parseInt(enteredExpiry) < parseInt(expiry)) {
                this.toastr.warning('Invalid expiry', 'Warning');
                return;
            }
            else if (parseInt(calculatedExpiry) == parseInt(expiryAfter1month)) {
                this.toastr.info('Medicine will be expired after a month', 'Warning');
            }
        }
        this.reqData.smart_pharmacy_id = this.pharmacyData.dataSmartPharmacy._id;
        this.totalNetAmount = this.totalNetAmount - this.returnEditable;
        this.partyTotal = Math.ceil(this.totalNetAmount);
        this.reqData.stockToReturn = this.stockToReturn;
        console.log(this.reqData);
        this.loading = true;
        this.userService.CreateStockPurchase(this.reqData).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
            if (data.response == true) {
                _this.ngOnInit();
                _this.toastr.success(data.message, "Success");
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    StockpurchaseComponent.prototype.getTotalRecord = function (i) {
        this.totalPRate = 0;
        this.newTotalCgst = 0;
        this.newATotalSgst = 0;
        this.newTotalDiscount = 0;
        this.totalNetAmount = 0;
        var rate;
        var cgst;
        var sgst;
        var discount;
        if (this.reqData.rate[i] == undefined || this.reqData.rate[i] == "") {
            rate = 0;
        }
        else {
            rate = this.reqData.rate[i];
        }
        if (this.reqData.cgst[i] == undefined || this.reqData.cgst[i] == "" || this.reqData.cgst[i] < 0 || this.reqData.cgst[i] > 100) {
            this.reqData.cgst[i] = 0;
            cgst = 0;
        }
        else {
            cgst = this.reqData.cgst[i];
        }
        if (this.reqData.sgst[i] == undefined || this.reqData.sgst[i] == "" || this.reqData.sgst[i] < 0 || this.reqData.sgst[i] > 100) {
            this.reqData.sgst[i] = 0;
            sgst = 0;
        }
        else {
            sgst = this.reqData.sgst[i];
        }
        if (this.reqData.discount[i] == undefined || this.reqData.discount[i] == "" || this.reqData.discount[i] < 0 || this.reqData.discount[i] > 100) {
            this.reqData.discount[i] = 0;
            discount = 0;
        }
        else {
            discount = this.reqData.discount[i];
        }
        // this.reqData.amount[i] = rate + ((this.reqData.quantity[i] * (((cgst+sgst-discount)/100)*rate)))
        rate = rate * this.reqData.quantity[i];
        this.reqData.amount[i] = rate + (((cgst + sgst - discount) / 100) * rate);
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
        this.totalNetAmount = this.totalNetAmount - this.returnEditable;
        this.partyTotal = Math.ceil(this.totalNetAmount);
    };
    StockpurchaseComponent.prototype.onTextChangeOfMedName = function (type, observation) {
        var _this = this;
        if (type != "") {
            var object = {
                type: type,
                observation: observation
            };
            this.userService.onTextChangeOfMedName(object).subscribe(function (data) {
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
    StockpurchaseComponent.prototype.fetchBill = function () {
        var _this = this;
        if (this.reqData.partyName == '' || this.reqData.partyName == null || this.reqData.partyName == undefined || this.reqData.partyName.trim().length == 0) {
            this.toastr.warning('Please fill party name', 'Warning');
            return;
        }
        if (this.billNumberSearch != null && this.billNumberSearch != '' && !isNaN(this.billNumberSearch)) {
            this.loading = true;
            this.returnQty = [];
            this.returnStatus = [];
            this.returnPurchaseArray = [];
            this.billFetched = false;
            this.quantityReturn = 0;
            var ob = {
                billNumber: this.billNumberSearch,
                partyName: this.reqData.partyName,
                id: this.pharmacyData.dataSmartPharmacy._id
            };
            this.userService.FetchBill(ob).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.billFetched = true;
                    _this.returnPurchaseArray = data.data;
                    _this.returnStatus = [];
                    _this.returnQty = [];
                    for (var i = 0; i < _this.returnPurchaseArray.length; i++) {
                        _this.returnStatus.push(false);
                        _this.returnQty.push(_this.returnPurchaseArray[i].qty);
                        _this.returnPurchaseArray[i].new_amount = _this.returnPurchaseArray[i].amount;
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
    StockpurchaseComponent.prototype.getReturnStatus = function (i) {
        if (this.returnStatus[i] == true) {
            return false;
        }
        else {
            return true;
        }
    };
    StockpurchaseComponent.prototype.resetReturn = function () {
        this.returnQty = [];
        this.returnStatus = [];
        this.returnPurchaseArray = [];
        this.billNumberSearch = null;
        this.billFetched = false;
        this.quantityReturn = 0;
    };
    StockpurchaseComponent.prototype.getTotalReturn = function (index) {
        for (var i = 0; i < this.returnPurchaseArray.length; i++) {
            if (this.returnPurchaseArray[i].qty < this.returnQty[i]) {
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
        this.stockToReturn = [];
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray[i].amount / this.returnPurchaseArray[i].qty);
                this.quantityReturn = this.quantityReturn + calculatedAmount;
                this.returnPurchaseArray[i].qtyReturn = this.returnQty[i];
                this.stockToReturn.push(this.returnPurchaseArray[i]);
            }
        }
        this.returnPurchaseArray[index].new_amount = this.returnPurchaseArray[index].amount - this.returnQty[index] * (this.returnPurchaseArray[index].amount / this.returnPurchaseArray[index].qty);
    };
    StockpurchaseComponent.prototype.updateReturnAmount = function () {
        this.returnEditable = 0;
        for (var i = 0; i < this.returnPurchaseArray.length; i++) {
            if (this.returnPurchaseArray[i].qty < this.returnQty[i]) {
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
        this.stockToReturn = [];
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                calculatedAmount = this.returnQty[i] * (this.returnPurchaseArray[i].amount / this.returnPurchaseArray[i].qty);
                this.quantityReturn = this.quantityReturn + calculatedAmount;
                this.returnPurchaseArray[i].qtyReturn = this.returnQty[i];
                this.stockToReturn.push(this.returnPurchaseArray[i]);
            }
        }
        this.returnEditable = this.quantityReturn;
        // this.partyTotal = this.totalNetAmount - this.returnEditable //Object.assign({},this.quantityReturn)
        this.totalNetAmount = this.totalNetAmount - this.returnEditable;
        this.partyTotal = Math.ceil(this.totalNetAmount);
        $("#stck-prchse").modal("hide");
    };
    StockpurchaseComponent.prototype.calculateReturn = function () {
        this.partyTotal = 0;
        this.partyTotal = this.totalNetAmount - this.returnEditable;
    };
    StockpurchaseComponent.prototype.FindPartySuggestion = function (data) {
        var _this = this;
        var object = {
            id: this.pharmacyData.dataSmartPharmacy._id,
            data: data
        };
        this.userService.FindPartySuggestion(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.partyNameSuggestion = [];
                _this.partyNameSuggestion = data.data;
            }
        }, function (err) {
            console.log(err);
        });
    };
    StockpurchaseComponent.prototype.onKey = function (event, type) {
        if (event.keyCode == 13) {
            if (type == 'bill') {
                this.fetchBill();
            }
        }
    };
    StockpurchaseComponent.prototype.FindPartyName = function () {
        var _this = this;
        var object = {
            id: this.pharmacyData.dataSmartPharmacy._id,
            party_name: this.reqData.partyName
        };
        this.userService.FindPartyName(object).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.partyNameNotFound = false;
            }
            else {
                _this.partyNameNotFound = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    StockpurchaseComponent.prototype.openConfirmationButton = function (activity) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__confirmation_popup_custom_dialog_custom_dialog_component__["a" /* CustomDialogComponent */], {
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
    StockpurchaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stockpurchase',
            template: __webpack_require__("../../../../../src/app/header-five-layout/stockpurchase/stockpurchase.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-five-layout/stockpurchase/stockpurchase.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */]])
    ], StockpurchaseComponent);
    return StockpurchaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/stockpurchase/stockpurchase.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockpurchaseModule", function() { return StockpurchaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stockpurchase_routing_module__ = __webpack_require__("../../../../../src/app/header-five-layout/stockpurchase/stockpurchase-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stockpurchase_component__ = __webpack_require__("../../../../../src/app/header-five-layout/stockpurchase/stockpurchase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var StockpurchaseModule = /** @class */ (function () {
    function StockpurchaseModule() {
    }
    StockpurchaseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__stockpurchase_routing_module__["a" /* StockpurchaseRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__stockpurchase_component__["a" /* StockpurchaseComponent */]]
        })
    ], StockpurchaseModule);
    return StockpurchaseModule;
}());



/***/ })

});
//# sourceMappingURL=stockpurchase.module.chunk.js.map