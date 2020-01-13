webpackJsonp(["purchasebook.module"],{

/***/ "../../../../../src/app/header-five-layout/purchasebook/purchasebook-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchasebookRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchasebook_component__ = __webpack_require__("../../../../../src/app/header-five-layout/purchasebook/purchasebook.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__purchasebook_component__["a" /* PurchasebookComponent */]
    }
];
var PurchasebookRoutingModule = /** @class */ (function () {
    function PurchasebookRoutingModule() {
    }
    PurchasebookRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PurchasebookRoutingModule);
    return PurchasebookRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/purchasebook/purchasebook.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cstm-row{\r\n\tmargin-top: 20px;\r\n}\r\n.cstm-row button{\r\n\tmargin-top:38px;\r\n}\r\n.cstm-hdr{\r\n\tmargin-top: 15px;\r\n}\r\n.tbl-head{\r\n\tmargin-bottom:2px;\r\n\tmargin-top:20px;\r\n}\r\n.tbl-head tr {\r\n\tborder-top:2px solid #00B0F0;\r\n\tborder-left:2px solid #00B0F0;\r\n\tborder-right:2px solid #00B0F0;\r\n}\r\n.tbl-head tr th{\r\n\tbackground-color:#DCDCDC;\r\n\tborder-color:#00B0F0;\r\n}\r\n.table-bordered > tbody > tr > td{\r\n    border: 1px solid #00B0F0;\r\n}\r\n.tbl-cntrol{\r\n\tmin-height:100px;\r\n\tmax-height: 400px;\r\n\toverflow-x: hidden;\r\n\toverflow-y: scroll;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n\tmin-width: 882px;\r\n}\r\n.btn-wrap{\r\n\tmargin-top: 20px;\r\n}\r\n.btn-grin{\r\n\tbackground-color:rgb(161, 210, 83);\r\n}\r\n.mr-top input{\r\n    margin-top:18px;\r\n}\r\n.srch-cstm button{\r\n\tmargin-top: 20px;\r\n\tpadding: 4px 20px;\r\n    min-width: 140px;\r\n}\r\n.btn-go button{\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    min-width:140px;\r\n}\r\n.btn-go button:hover{\r\n    -webkit-transition: 300ms;\r\n    transition: 300ms;\r\n    background: #98C74F;\r\n    border-color: #98C74F;\r\n    color:#fff;\r\n}\r\n.fix-footer{\r\n\tposition: fixed;\r\n\tbottom: 15px;\r\n}\r\n.tbl-cntrol .tbl-data{\r\n    min-width: 1107px;\r\n}\r\n.new-thd th{\r\n\tcolor:#fff;\r\n\tbackground-color: #000;\r\n\tborder:1px solid #fff;\r\n}\r\n.new-tbdy td{\r\n\tbackground-color: #dae5f1!important;\r\n\tborder:1px solid #fff!important;\r\n}\r\n.new-tbdy tr:hover{\r\n    background-color:#b8d9fd!important;    \r\n}\r\n.new-tbdy tr:hover td{\r\n    background-color:#b8d9fd!important;\r\n}\r\nth.selected{\r\n    background-color: #00b0f0!important;\r\n}\r\n@media (min-width: 992px){\r\n.modal-lg.modal-cstm {\r\n    width: 1185px;\r\n\t}\r\n}\r\n.tab-stock-2 table tr td select{\r\n\twidth:67px;\r\n}\r\n.btn-custom {\r\n    color: #002160;\r\n    position: relative;\r\n    padding: 6.5px 17px;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n}\r\n.cstm-table{\r\n    margin-bottom: 0px;\r\n}\r\n.tab-stock table tr td div.trans-input input{\r\n\twidth:97%;\r\n\tpadding:6px 0px; \r\n}\r\n.tab-stock table tr td div.pro-trans-input input{\r\n\twidth:98%;\r\n\tpadding:6px 0px; \r\n}\r\n.tab-stock table tr td select{\r\n\twidth: 82px;\r\n    height: 36px;\r\n    border-radius: 0px;\r\n    margin-right: 3px;\r\n}\r\n.tab-stock{\r\n\tmin-height:190px;\r\n\tmax-height: 190px;\r\n\toverflow-x: hidden;\r\n\toverflow-y: scroll;\r\n}\r\n.modal-tble{\r\n\tdisplay: table;\r\n}\r\n/*.cstm-width{\r\n\twidth: 1155px;\r\n}*/\r\n.cstm-width{\r\n   width: 1240px;\r\n}\r\n/*cstm*/\r\n.table-head tr th {\r\n    border-right: 1px solid #fff;\r\n    background-color: #000;\r\n    color: #fff;\r\n}\r\n.cstm-2 input{\r\n\tdisplay: inline;\r\n\twidth:36%!important;\r\n}\r\n.txtfield {\r\n    height: 31px;\r\n}\r\n.my-tbdy tr td{\r\n    border-right: 1px solid #fff;\r\n    background-color: #DAE5F1!important;\r\n    color: #000;\r\n    border-bottom: 1px solid #fff;\r\n}\r\n/* The container */\r\n.cstm-chk {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 35px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 22px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.cstm-chk input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n    position: absolute;\r\n    top: -6.5px;\r\n    left: 15px;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #d6d6d6;\r\n}\r\n/* On mouse-over, add a grey background color */\r\n.cstm-chk:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.cstm-chk input:checked ~ .checkmark {\r\n    background-color: #fff;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.cstm-chk input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n/* Style the checkmark/indicator */\r\n.cstm-chk .checkmark:after {\r\n    left: 9px;\r\n    top: 3px;\r\n    width: 6px;\r\n    height: 16px;\r\n    border: solid #000;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n.mg-top{\r\n\tmargin-top: 8px;\r\n}\r\nbutton.close{\r\n    font-size:40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-five-layout/purchasebook/purchasebook.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr\" style=\"float:left;width:100%;\">\n\t<div class=\"\">\n\t\t<div  class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12 cstm-col-mg\">\n\t\t\t<div  class=\"dashboard-header-logo\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\">\n\t\t\t\t<img _ngcontent-c3=\"\" class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerLink=\"/header-five-layout/dashboard-pharmacy\">\n\t\t\t</div>\n\t\t\t<div >\n\t\t\t\t<div _ngcontent-c3=\"\" class=\"dshbrd-btn\">\n\t\t\t\t\t<button  class=\"btn btn-custom\" routerLink=\"/header-five-layout/dashboard-pharmacy\" tabindex=\"0\" ng-reflect-router-link=\"/header-five-layout/dashboard-\"> Dashboard</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-8 col-md-8 col-sm-10 col-xs-12 \">\n      \t\t<div class=\"select-duration\">\n      \t\t\t<div class=\"row\">\n      \t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\n      \t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n\t      \t\t\t\t\t\t<div class=\"row\">\n\t      \t\t\t\t\t\t\t<label class=\" col-md-3 col-sm-3 col-xs-12 text-right txt-lft\" style=\"font-size: 20px\">From:</label>\n\t      \t\t\t\t\t\t<div class=\"col-md-9  col-sm-9 col-xs-12\">\n\t      \t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"fromDate\" [settings]=\"settings\"></angular2-date-picker>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t\t</div>\n\t      \t\t\t\t\t</div>\n      \t\t\t\t\t</div>\n      \t\t\t\t</div>\n      \t\t\t\t<div class=\"col-md-6 col-sm-6 col-xs-12\">\n      \t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t<div class=\"col-md-12 col-sm-12 col-xs-12\">\n      \t\t\t\t\t\t\t<div class=\"row\">\n      \t\t\t\t\t\t\t\t<label class=\" col-md-3 col-sm-3 col-xs-12 text-right txt-lft\" style=\"font-size: 20px\">To:</label>\n\t\t      \t\t\t\t\t\t<div class=\"col-md-9  col-sm-9 col-xs-12\">\n\t\t      \t\t\t\t\t\t\t<angular2-date-picker [(ngModel)]=\"toDate\" [settings]=\"settings\"></angular2-date-picker>\n\t\t      \t\t\t\t\t\t</div>\n      \t\t\t\t\t\t\t</div>\n\t      \t\t\t\t\t</div>\n      \t\t\t\t\t</div>\n      \t\t\t\t</div>\n      \t\t\t</div>\n      \t\t</div>\n      \t</div>\n      \t<div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 \">\n      \t\t<div class=\"select-duration btn-go\">\n\t\t\t\t<button class=\"btn ok-btn\" type=\"button\" (click)='viaDate()'> Go </button>\n      \t\t</div>\n      \t</div>\n      \t<div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12 \">\n      \t\t<!-- <div class=\"col-lg-12\"> -->\n\t\t\t\t<div class=\"form-group mr-top\">\n\t\t\t\t    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchInput\" placeholder=\"Search by Party name, Bill number\" (keyup)=\"onKey($event)\">\n\t\t\t\t</div>\n\t\t\t<!-- </div> -->\n      \t</div>\n\t\t<div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-12 cstm-input srch-cstm\">\n\t\t\t<button class=\"btn btn-custom\" (click)=\"SearchByPartyNameOrBill()\">Search </button>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"stock-tab\" style=\"float:left;width:100%;\">\n\t<div class=\"col-lg-12\">\n\t\t<div class=\"tbl-cntrol\">\t\n\t\t\t<table class=\"table table-bordered\" matSort (matSortChange)=\"sortData($event)\" *ngIf=\"sortedData.length>0\">\n\t\t\t\t<thead class=\"new-thd\">\n\t\t\t      <tr>\n\t\t\t        <th mat-sort-header=\"createdAt\" width=\"20%\" class=\"{{getTableHeaderClass(1)}} text-center\" (click)=\"setTableHeaderClass(1)\"><h4 style=\"width: 100%;text-align: center;\">Date</h4></th>\n\t\t\t        <th mat-sort-header=\"bill_no\" width=\"20%\" class=\"{{getTableHeaderClass(2)}} text-center\" (click)=\"setTableHeaderClass(2)\"><h4 style=\"width: 100%;text-align: center;\">Bill Number</h4></th>\n\t\t\t        <th mat-sort-header=\"party_name\" width=\"20%\" class=\"{{getTableHeaderClass(3)}} text-center\" (click)=\"setTableHeaderClass(3)\"><h4 style=\"width: 100%;text-align: center;\">Party Name</h4></th>\n\t\t\t        <th mat-sort-header=\"amount\" width=\"20%\" class=\"{{getTableHeaderClass(4)}} text-center\" (click)=\"setTableHeaderClass(4)\"><h4 style=\"width: 100%;text-align: center;\">Bill Value</h4></th>\n\t\t\t        <th width=\"20%\" class=\"text-center\"><h4>Action</h4></th>\n\t\t\t      </tr>\n\t\t    \t</thead>\n\t\t    \t<tbody class=\"new-tbdy\">\n\t\t\t      <tr *ngFor=\"let item of sortedData\">\n\t\t\t        <td width=\"20%\" class=\"text-center\">{{getTimeFiveAndHalfHoursBefore(item.stock[0].createdAt) | date:'d MMM yy ,h:mm a'}}</td>\n\t\t\t        <td width=\"20%\" class=\"text-center\">{{item.stock[0].bill_no}}</td>\n\t\t\t        <td width=\"20%\" class=\"text-center\">{{item.party_name}}</td>\n\t\t\t        <td  width=\"20%\" class=\"text-center\">{{item.amount}}</td>\n\t\t\t        <td  width=\"20%\" class=\"text-center\">\n\t\t\t        \t<button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"viewReturnData(item.stock,item)\">View/Return</button>\n\t\t\t        </td>\n\t\t\t      </tr>\n\t\t    \t</tbody>\n\t\t\t</table>\n\t\t\t<div class=\"col-lg-12\" *ngIf=\"sortedData.length<1\">\n                <h3 class=\"text-center\">No data found ...</h3>\n            </div> \n\t\t</div>\n\t</div>\n\n\n\t<div class=\"col-lg-8 col-lg-offset-2 fix-footer\">\n\t\t<div class=\"row btn-wrap\">\n\t\t\t<div class=\"col-lg-5 col-md-5 col-sm-4 col-xs-12 txt-cnt\">\n\t\t\t\t<button class=\"btn btn-custom btn-grin\">\n\t\t\t\t\t<div> Total Number of Purchases: {{stockPurchaseArray.length}} </div>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12 txt-cnt text-center\">\n\t\t\t\t<button class=\"btn btn-custom\">\n\t\t\t\t\t<div>Total Bill Value: {{totalBill.toFixed(2)}} </div>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12 txt-cnt text-right\" *ngIf=\"stockPurchaseArray.length>0\">\n\t\t\t\t<button class=\"btn btn-custom btn-grin\" (click)=\"exportPdf()\">\n\t\t\t\t\t<div> Export </div>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\t<div class=\"modal-dialog modal-tble\">\n\t  <div class=\"modal-content cstm-width pop_tab\">\n\t    <div class=\"modal-header\">\n\t      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t      <h3 class=\"modal-title text-center\">{{returnPartyName}}</h3>\n\t      <h4 class=\"modal-title text-center\">Bill No - {{returnBillNo}}</h4>\n\t    </div>\n\t\t<div class=\"modal-body\">\n\t\t\t<div class=\"table-responsive\">\n\t\t\t\t<table cellpadding=\"20px\" class=\"table cstm-table\" style=\"position: relative;\">\n\t\t    \t\t<thead class=\"table-head\" style=\"position: absolute;\">\n\t\t\t\t  \t<tr>\n\t\t\t\t  \t\t<th class=\"text-center\" width=\"60px\">Return Item</th>\n\t\t\t\t\t    <th class=\"text-center\" width=\"60px\"><h5>Type</h5></th>\n\t\t                <th class=\"text-center\" width=\"150px\"><h5>Product</h5></th>\n\t\t                <th class=\"text-center\" width=\"85px\"><h5>Batch</h5></th>\n\t\t                <th class=\"text-center\" width=\"110px\"><h5>Exp</h5></th>\n\t\t                <th class=\"text-center\" width=\"120px\"><h5>Pack</h5></th>\n\t\t                <th class=\"text-center\" width=\"80px\"><h5>M.R.P</h5></th>\n\t\t                <th class=\"text-center\" width=\"80px\"><h5>QTY</h5></th>\n\t\t                <th class=\"text-center\" width=\"80px\"><h5>Return QTY</h5></th>\n\t\t                <th class=\"text-center\" width=\"80px\"><h5>P.Rate</h5></th>\n\t\t                <th class=\"text-center\" width=\"65px\"><h5>CGST(%)</h5></th>\n\t\t                <th class=\"text-center\" width=\"65px\"><h5>SGST(%)</h5></th>\n\t\t                <th class=\"text-center\" width=\"70px\"><h5>Disc(%)</h5></th>\n\t\t                <th class=\"text-center\" width=\"80px\"><h5>Amount</h5></th>\n\t\t                <th class=\"text-center\" width=\"80px\"><h5>New Amount</h5></th>\n\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"table-scroll-outside table-two\" style=\"margin-top: 60px;\">\n\t\t\t\t\t<table>\n\t\t\t\t\t<tbody class=\"tbod-max-w my-tbdy tbdy_book\">\n\t\t\t\t\t\t<tr class=\"table-row\" *ngFor=\"let tr of totalTr;let i = index;\">\n\t\t\t\t\t\t<td width=\"60px\">\n\t\t\t\t\t\t\t<label class=\"cstm-chk\">\n\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"returnStatus[i]\" [checked]=\"returnStatus[i]\" (change)=\"getTotalReturn(i)\">\n\t\t\t\t\t\t\t  <span class=\"checkmark\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td width=\"60px\">\n\t\t\t\t\t\t\t<select  class=\"form-control\" class=\"form-control txtfield\" [(ngModel)]=\"reqData.opt[i]\" disabled=\"\">\\\n\t\t\t\t\t\t\t\t<option selected=\"\" value=\"\" disabled=\"\">Type</option>\t\n\t\t\t\t\t\t\t\t<option value=\"Tablet\">Tab</option>\n\t\t\t\t\t\t\t\t<option value=\"Capsule\">Cap</option>\n\t\t\t\t\t\t\t\t<option value=\"Syrup\">Syr</option>\n\t\t\t\t\t\t\t\t<option value=\"Suspension\">Sus</option>\n\t\t\t\t\t\t\t\t<option value=\"Emulsion\">Emu</option>\n\t\t\t\t\t\t\t\t<option value=\"Solution\">Sol</option>\n\t\t\t\t\t\t\t\t<option value=\"Injection\">Inj</option>\n\t\t\t\t\t\t\t\t<option value=\"MouthWash\">Mou</option>\n\t\t\t\t\t\t\t\t<option value=\"Powder\">Pow</option>\n\t\t\t\t\t\t\t\t<option value=\"Cream\">Cre</option>\n\t\t\t\t\t\t\t\t<option value=\"Gel\">Gel</option>\n\t\t\t\t\t\t\t\t<option value=\"Drops\">Dro</option>\n\t\t\t\t\t\t\t\t<option value=\"Aerosols\">Aer</option>\n\t\t\t\t\t\t\t\t<option value=\"Lotion\">Lot</option>\n\t\t\t\t\t\t\t\t<option value=\"Ointment\">Oin</option>\n\t\t\t\t\t\t\t\t<option value=\"Unit\">Unit</option>\n\t\t\t\t\t\t\t\t<option value=\"Box\">Box</option>\n\t\t\t\t\t\t\t\t<option value=\"Misc\">Misc</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t<td width=\"150px\" class=\"text-center\">\n\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Product\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\" [(ngModel)]=\"reqData.product[i]\" (keyup)=\"onTextChangeOfMedName(reqData.opt[i],$event.target.value)\" [matAutocomplete]=\"auto\" disabled=\"\">\n\t\t\t\t\t\t\t\t<mat-autocomplete #auto=\"matAutocomplete\" style=\"width:100%\">\n\t\t\t\t\t\t\t\t  <mat-option *ngFor=\"let option of productNameSuggestion\" [value]=\"option\">\n\t\t\t\t\t\t\t\t\t{{option}}\n\t\t\t\t\t\t\t\t  </mat-option>\n\t\t\t\t\t\t\t\t</mat-autocomplete>\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width=\"85px\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" readonly=\"\"  [(ngModel)]=\"reqData.batch[i]\" disabled=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t<td width=\"110px\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2\">\n\t\t\t\t\t\t\t\t\t<input style=\"padding:6px;\" type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" [(ngModel)]=\"reqData.month[i]\" disabled=\"\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>\n\t\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2\">\n\t\t\t\t\t\t\t\t\t<input style=\"padding:6px;\" type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" [(ngModel)]=\"reqData.year[i]\" disabled=\"\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td width=\"120px\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2\">\n\t\t\t\t\t\t\t\t\t<input style=\"padding:6px;\"type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" [(ngModel)]=\"reqData.pack1[i]\" disabled=\"\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<span>&nbsp;&nbsp;X&nbsp;&nbsp;</span>\n\t\t\t\t\t\t\t\t<span class=\"cstm-input cstm-2\">\n\t\t\t\t\t\t\t\t\t<input style=\"padding:6px;\" type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" [(ngModel)]=\"reqData.pack2[i]\" disabled=\"\">\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<div class=\"cstm-input-2\">          \n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\" [(ngModel)]=\"reqData.mrp[i]\" disabled=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"\" placeholder=\"\" value=\"{{returnPurchaseArray[i].qty}}\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\" [(ngModel)]=\"reqData.quantity[i]\" (blur)=\"getTotalRecord(i)\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\" [(ngModel)]=\"reqData.rate[i]\" (blur)=\"getTotalRecord(i)\" disabled=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t<td width=\"65px\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\" [(ngModel)]=\"reqData.cgst[i]\" (blur)=\"getTotalRecord(i)\" disabled=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t<td width=\"65px\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\"  [(ngModel)]=\"reqData.sgst[i]\" (blur)=\"getTotalRecord(i)\" disabled=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t<td width=\"70px\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\" [(ngModel)]=\"reqData.discount[i]\" (blur)=\"getTotalRecord(i)\" disabled=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"\" placeholder=\"\" value=\"{{returnPurchaseArray[i].amount}}\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t<td width=\"80px\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<div class=\"cstm-input-2\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" name=\"\" class=\"form-control\" readonly=\"\" disabled=\"{{getReturnStatus(i)}}\" placeholder=\"\" [(ngModel)]=\"reqData.amount[i]\" (blur)=\"getTotalRecord(i)\"  disabled=\"\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t  \t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"modal-footer\" >\n\t        <div class=\"col-lg-12\">\n\t        \t<div class=\"row\">\n\t         \t\t<div class=\"col-lg-3\">\n\t         \t\t\t<h3 class=\"mg-top\">Total Amount</h3>\n\t         \t\t</div>\n\t         \t\t<div class=\"col-lg-3 text-left\">\n\t         \t\t\t<button class=\"btn data-div\" readonly=\"\" disabled=\"\">\n\t\t\t\t\t\t\t<div>{{totalAmountOriginal}}</div>\n\t\t\t\t\t\t</button>\n\t         \t\t</div>\n\t         \t\t<div class=\"col-lg-3\">\n\t         \t\t\t<h3 class=\"mg-top\">Total Refund Amount</h3>\n\t         \t\t</div>\n\t         \t\t<div class=\"col-lg-3 text-left\">\n\t         \t\t\t<button class=\"btn data-div\" readonly=\"\" disabled=\"\">\n\t\t\t\t\t\t\t<div>{{totalRefundAmount}}</div>\n\t\t\t\t\t\t</button>\n\t         \t\t</div>\n\t         \t</div>\n\t        </div>\n\t        <div class=\"text-center\">\n\t         \t<button class=\"btn btn-custom\" (click)=\"openConfirmation()\">\n\t\t\t\t\t<div> Return </div>\n\t\t\t\t</button>\n\t        </div>\n        </div>\n\t  </div>\n\t</div>\n</div>\n\n<!-- \"getRetunDetails()\"  -->"

/***/ }),

/***/ "../../../../../src/app/header-five-layout/purchasebook/purchasebook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchasebookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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






var PurchasebookComponent = /** @class */ (function () {
    function PurchasebookComponent(UserService, toastr, datePipe, dialog) {
        this.UserService = UserService;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.toDate = new Date();
        this.fromDate = new Date();
        this.newDate = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: false,
            format: 'dd-MMM-yyyy',
            defaultOpen: false
        };
        this.returnStatus = [];
        this.returnQty = [];
    }
    PurchasebookComponent.prototype.ngOnInit = function () {
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails']);
        var dd = this.fromDate.getDate();
        this.fromDate.setDate(1);
        this.fromDate.setMonth(this.fromDate.getMonth() - 1);
        this.fromDate.setDate(this.fromDate.getDate() + dd);
        this.newDate.setDate(this.newDate.getDate() + 1);
        this.stockPurchaseArray = [];
        this.totalBill = 0;
        this.viaDate();
        this.returnPurchaseArray = [];
    };
    PurchasebookComponent.prototype.viaDate = function () {
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
        this.stockPurchaseArray = [];
        this.sortedData = [];
        this.totalBill = 0;
        this.headerClicked = 0;
        this.checkQty = 0;
        this.searchInput = null;
        this.UserService.GetStockPurchaseBetweenTwoDates(object).subscribe(function (data) {
            console.log(data);
            _this.loading = false;
            if (data.response == true) {
                _this.toastr.success(data.message, "Success");
                _this.stockPurchaseArray = data.data;
                for (var i = 0; i < _this.stockPurchaseArray.length; i++) {
                    _this.stockPurchaseArray[i].amount = 0;
                    for (var ii = 0; ii < _this.stockPurchaseArray[i].stock.length; ii++) {
                        _this.totalBill = _this.totalBill + _this.stockPurchaseArray[i].stock[ii].amount;
                        // if(this.totalBill % 1 != 0){
                        // this.totalBill = parseFloat(this.totalBill.toFixed(2))
                        // }
                        _this.stockPurchaseArray[i].amount += _this.stockPurchaseArray[i].stock[ii].amount;
                    }
                    if (_this.stockPurchaseArray[i].amount % 1 != 0) {
                        _this.stockPurchaseArray[i].amount = parseFloat(_this.stockPurchaseArray[i].amount.toFixed(2));
                    }
                }
                _this.sortedData = data.data.sort(function (a, b) {
                    return compare(a.stock[0].createdAt, b.stock[0].createdAt, false);
                });
                _this.sortedData = _this.stockPurchaseArray.slice();
            }
            else if (data.response == false) {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    PurchasebookComponent.prototype.exportPdf = function () {
        var option = '';
        if (this.searchInput == null || this.searchInput == '' || this.searchInput == undefined) {
            option = ' (' + this.datePipe.transform(this.fromDate, 'dd-MM-yyyy') + " to " + this.datePipe.transform(this.toDate, 'dd-MM-yyyy') + ")";
        }
        var head = [
            { title: '#', dataKey: "id" },
            { title: 'Date' + option, dataKey: "createdAt" },
            { title: 'Bill No.', dataKey: "bill_no" },
            { title: 'Party Name', dataKey: "party_name" },
            { title: 'Bill Value', dataKey: "amount" }
        ];
        var csvData = [];
        var totalDuration;
        var dates = [];
        for (var i = 0; i < this.stockPurchaseArray.length; i++) {
            var ob;
            ob = {};
            ob.id = i + 1;
            //let date = this._date.transform(this.invocie.date, 'dd.MM.yyyy HH:mm:ss')
            //var date = this.stockPurchaseArray[i].stock[0].createdAt.split('T')
            ob.createdAt = this.getTimeFiveAndHalfHoursBefore(this.stockPurchaseArray[i].stock[0].createdAt);
            ob.createdAt = this.datePipe.transform(ob.createdAt, 'dd-MM-yyyy, h:mm a');
            ob.bill_no = this.stockPurchaseArray[i].stock[0].bill_no;
            ob.party_name = this.stockPurchaseArray[i].stock[0].party_name;
            ob.amount = this.stockPurchaseArray[i].amount;
            if (ob.amount % 1 != 0) {
                ob.amount = ob.amount.toFixed(2);
            }
            csvData.push(ob);
        }
        csvData.push({
            id: "Total",
            createdAt: "",
            bill_no: "",
            party_name: "",
            amount: this.totalBill.toFixed(2)
        });
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
        doc.save('StockPurchase' + "(" + from + " to " + to + ")");
    };
    PurchasebookComponent.prototype.SearchByPartyNameOrBill = function () {
        var _this = this;
        if (this.searchInput == null || this.searchInput == '' || this.searchInput == undefined || this.searchInput.trim().length == 0) {
            this.toastr.warning("Invalid search input", "Warning");
        }
        else {
            var object = {
                id: this.pharmacyData.dataSmartPharmacy._id,
                search: this.searchInput
            };
            this.loading = true;
            this.stockPurchaseArray = [];
            this.sortedData = [];
            this.totalBill = 0;
            this.headerClicked = 0;
            this.returnQty = [];
            this.UserService.SearchByPartyNameOrBill(object).subscribe(function (data) {
                console.log(data);
                _this.loading = false;
                if (data.response == true) {
                    _this.toastr.success(data.message, "Success");
                    _this.stockPurchaseArray = data.data;
                    for (var i = 0; i < _this.stockPurchaseArray.length; i++) {
                        _this.stockPurchaseArray[i].amount = 0;
                        for (var ii = 0; ii < _this.stockPurchaseArray[i].stock.length; ii++) {
                            _this.totalBill = _this.totalBill + _this.stockPurchaseArray[i].stock[ii].amount;
                            // if(this.totalBill % 1 != 0){
                            // this.totalBill = parseFloat(this.totalBill.toFixed(2))
                            // }
                            _this.stockPurchaseArray[i].amount += _this.stockPurchaseArray[i].stock[ii].amount;
                        }
                        if (_this.stockPurchaseArray[i].amount % 1 != 0) {
                            _this.stockPurchaseArray[i].amount = parseFloat(_this.stockPurchaseArray[i].amount.toFixed(2));
                        }
                    }
                    _this.sortedData = data.data.sort(function (a, b) {
                        return compare(a.stock[0].createdAt, b.stock[0].createdAt, false);
                    });
                    _this.sortedData = _this.stockPurchaseArray.slice();
                }
                else if (data.response == false) {
                    _this.toastr.error(data.message, "Error");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    PurchasebookComponent.prototype.getTimeFiveAndHalfHoursBefore = function (date) {
        // return (new Date(date).setMinutes ( new Date(date).getMinutes() - 330 ))
        return date;
    };
    PurchasebookComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    PurchasebookComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    PurchasebookComponent.prototype.onKey = function (event) {
        if (event.keyCode == 13) {
            this.SearchByPartyNameOrBill();
        }
    };
    PurchasebookComponent.prototype.sortData = function (sort) {
        var data = this.sortedData.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'createdAt': return compare(a.stock[0].createdAt, b.stock[0].createdAt, isAsc);
                case 'bill_no': return compare(a.stock[0].bill_no, b.stock[0].bill_no, isAsc);
                case 'party_name': return compare(a.party_name, b.party_name, isAsc);
                case 'amount': return compare(a.amount, b.amount, isAsc);
                default: return 0;
            }
        });
    };
    PurchasebookComponent.prototype.viewReturnData = function (item, data) {
        console.log(data);
        this.totalAmountOriginal = data.amount;
        this.totalRefundAmount = 0;
        this.returnPartyName = data.party_name;
        this.returnBillNo = data.stock[0].bill_no;
        this.totalTr = item;
        this.returnPurchaseArray = item;
        this.reqData = {};
        this.returnStatus = [];
        this.reqData.opt = [];
        this.reqData.product = [];
        this.reqData.pack1 = [];
        this.reqData.pack2 = [];
        this.reqData.quantity = [];
        this.reqData.mrp = [];
        this.reqData.rate = [];
        this.reqData.cgst = [];
        this.reqData.sgst = [];
        this.reqData.discount = [];
        this.reqData.amount = [];
        this.reqData.batch = [];
        this.reqData.month = [];
        this.reqData.year = [];
        this.reqData.id = [];
        for (var i = 0; i < item.length; i++) {
            this.returnStatus.push(false);
            this.reqData.id.push(item[i].id);
            this.reqData.opt.push(item[i].type);
            this.reqData.product.push(item[i].product);
            this.reqData.pack1.push(item[i].pack_units);
            this.reqData.pack2.push(item[i].pack_quantity);
            var amount = (item[i].amount / item[i].qty) * Math.trunc(item[i].current_stock / (item[i].pack_units * item[i].pack_quantity));
            // this.reqData.amount.push(amount)
            item[i].qty = Math.trunc(item[i].current_stock / (item[i].pack_units * item[i].pack_quantity));
            // this.reqData.quantity.push(item[i].qty)
            this.reqData.mrp.push(item[i].mrp);
            this.reqData.rate.push(item[i].p_rate);
            this.reqData.cgst.push(item[i].cgst);
            this.reqData.sgst.push(item[i].sgst);
            this.reqData.discount.push(item[i].discount);
            this.reqData.batch.push(item[i].batch);
            this.reqData.month.push(item[i].month);
            this.reqData.year.push(item[i].year);
            this.returnQty.push(item[i].qty);
        }
    };
    PurchasebookComponent.prototype.getTotalRecord = function (i) {
        if (this.returnPurchaseArray[i].qty < this.reqData.quantity[i]) {
            this.toastr.warning("Return quantity can't exceed actual quantity", "Warning");
            return;
        }
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
        if (this.reqData.cgst[i] == undefined || this.reqData.cgst[i] == "") {
            cgst = 0;
        }
        else {
            cgst = this.reqData.cgst[i];
        }
        if (this.reqData.sgst[i] == undefined || this.reqData.sgst[i] == "") {
            sgst = 0;
        }
        else {
            sgst = this.reqData.sgst[i];
        }
        if (this.reqData.discount[i] == undefined || this.reqData.discount[i] == "") {
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
        this.totalRefundAmount = 0;
        for (var ii = 0; ii < this.returnStatus.length; ii++) {
            if (this.returnStatus[ii] == true) {
                this.totalRefundAmount = this.totalRefundAmount + this.reqData.amount[ii];
            }
        }
        // this.totalNetAmount = this.totalNetAmount - this.returnEditable
        // this.partyTotal = Math.ceil(this.totalNetAmount)
    };
    PurchasebookComponent.prototype.onTextChangeOfMedName = function (type, observation) {
        var _this = this;
        if (type != "") {
            var object = {
                type: type,
                observation: observation
            };
            this.UserService.onTextChangeOfMedName(object).subscribe(function (data) {
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
    PurchasebookComponent.prototype.getRetunDetails = function () {
        var _this = this;
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
        this.returnQty = [];
        this.reqData.expiry = [];
        this.stockToReturn = {};
        this.stockToReturn.opt = [];
        this.stockToReturn.product = [];
        this.stockToReturn.pack1 = [];
        this.stockToReturn.pack2 = [];
        this.stockToReturn.quantity = [];
        this.stockToReturn.mrp = [];
        this.stockToReturn.rate = [];
        this.stockToReturn.cgst = [];
        this.stockToReturn.sgst = [];
        this.stockToReturn.discount = [];
        this.stockToReturn.amount = [];
        this.stockToReturn.batch = [];
        this.stockToReturn.month = [];
        this.stockToReturn.year = [];
        this.stockToReturn.id = [];
        this.stockToReturn.expiry = [];
        var originalreturnPurchaseArray = [];
        this.totalRefundAmount = 0;
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                this.stockToReturn.opt.push(this.reqData.opt[i]);
                this.stockToReturn.product.push(this.reqData.product[i]);
                this.stockToReturn.pack1.push(this.reqData.pack1[i]);
                this.stockToReturn.pack2.push(this.reqData.pack2[i]);
                this.stockToReturn.mrp.push(this.reqData.mrp[i]);
                this.stockToReturn.rate.push(this.reqData.rate[i]);
                this.stockToReturn.cgst.push(this.reqData.cgst[i]);
                this.stockToReturn.sgst.push(this.reqData.sgst[i]);
                this.stockToReturn.discount.push(this.reqData.discount[i]);
                this.stockToReturn.batch.push(this.reqData.batch[i]);
                this.stockToReturn.month.push(this.reqData.month[i]);
                this.stockToReturn.year.push(this.reqData.year[i]);
                this.stockToReturn.id.push(this.reqData.id[i]);
                this.stockToReturn.quantity.push(this.reqData.quantity[i]);
                this.stockToReturn.amount.push(this.reqData.amount[i]);
                this.stockToReturn.expiry.push(this.reqData.expiry[i]);
                originalreturnPurchaseArray.push(this.returnPurchaseArray[i]);
                this.totalRefundAmount = this.totalRefundAmount + this.reqData.amount[i];
            }
        }
        if (this.stockToReturn.opt.length < 1) {
            this.toastr.warning("Select something to return", "Warning");
            return;
        }
        var thisYear = new Date().getFullYear().toString().substr(-2);
        var thisMonth = new Date().getMonth() + 1;
        for (var i = 0; i < this.stockToReturn.opt.length; i++) {
            if (this.stockToReturn.opt[i] == '' || this.stockToReturn.opt[i] == null || this.stockToReturn.opt[i] == undefined) {
                this.toastr.warning('Invalid Type', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.stockToReturn.product.length; i++) {
            if (this.stockToReturn.product[i] == '' || this.stockToReturn.product[i] == null || this.stockToReturn.product[i] == undefined) {
                this.toastr.warning('Invalid Product', 'Warning');
                return;
            }
            else if (this.stockToReturn.product[i].trim().length < 1) {
                this.toastr.warning('Invalid Product', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.stockToReturn.pack1.length; i++) {
            if (this.stockToReturn.pack1[i] < 1 || this.stockToReturn.pack1[i] == '' || this.stockToReturn.pack1[i] == null || this.stockToReturn.pack1[i] == undefined) {
                this.toastr.warning('Invalid pack', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.stockToReturn.pack2.length; i++) {
            if (this.stockToReturn.pack2[i] < 1 || this.stockToReturn.pack2[i] == '' || this.stockToReturn.pack2[i] == null || this.stockToReturn.pack2[i] == undefined) {
                this.toastr.warning('Invalid pack', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.stockToReturn.mrp.length; i++) {
            if (this.stockToReturn.mrp[i] < 1 || this.stockToReturn.mrp[i] == '' || this.stockToReturn.mrp[i] == null || this.stockToReturn.mrp[i] == undefined) {
                this.toastr.warning('Invalid mrp', 'Warning');
                return;
            }
            else {
                this.totalMrp += this.stockToReturn.mrp[i];
            }
        }
        for (var i = 0; i < this.stockToReturn.quantity.length; i++) {
            if (this.stockToReturn.quantity[i] < 1 || this.stockToReturn.quantity[i] == '' || this.stockToReturn.quantity[i] == null || this.stockToReturn.quantity[i] == undefined) {
                this.toastr.warning('Invalid quantity', 'Warning');
                return;
            }
            else {
                this.totalQuantity += this.stockToReturn.quantity[i];
            }
        }
        for (var i = 0; i < this.stockToReturn.rate.length; i++) {
            if (this.stockToReturn.rate[i] < 1 || this.stockToReturn.rate[i] == '' || this.stockToReturn.rate[i] == null || this.stockToReturn.rate[i] == undefined) {
                this.toastr.warning('Invalid purchase rate', 'Warning');
                return;
            }
            else {
                this.totalRate += this.stockToReturn.rate[i];
            }
        }
        for (var i = 0; i < this.stockToReturn.amount.length; i++) {
            if (this.stockToReturn.amount[i] < 1 || this.stockToReturn.amount[i] == '' || this.stockToReturn.amount[i] == null || this.stockToReturn.amount[i] == undefined) {
                this.toastr.warning('Invalid Amount', 'Warning');
                return;
            }
            else {
                this.totalAmount += this.stockToReturn.amount[i];
            }
        }
        for (var i = 0; i < this.stockToReturn.batch.length; i++) {
            if (this.stockToReturn.batch[i] == '' || this.stockToReturn.batch[i] == null || this.stockToReturn.batch[i] == undefined) {
                this.toastr.warning('Invalid batch', 'Warning');
                return;
            }
            else if (this.stockToReturn.batch[i].trim().length < 1) {
                this.toastr.warning('Invalid batch', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.stockToReturn.month.length; i++) {
            if (this.stockToReturn.month[i] > 12 || this.stockToReturn.month[i] <= 0 || this.stockToReturn.month[i] == '' || this.stockToReturn.month[i] == null || this.stockToReturn.month[i] == undefined) {
                this.toastr.warning('Invalid month', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.stockToReturn.year.length; i++) {
            if (this.stockToReturn.year[i] < thisYear || this.stockToReturn.year[i] == '' || this.stockToReturn.year[i] == null || this.stockToReturn.year[i] == undefined) {
                this.toastr.warning('Invalid year', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.totalTr.length; i++) {
            if (this.totalTr[i].qty < this.stockToReturn.quantity[i]) {
                this.toastr.warning('Return quantity cant exceed actual quantity', 'Warning');
                return;
            }
        }
        for (var i = 0; i < this.stockToReturn.month.length; i++) {
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
            if (this.stockToReturn.month[i] == 12) {
                var yearCal = this.stockToReturn.year[i] + 1;
                calculatedExpiry = yearCal.toString() + "01";
            }
            else {
                if (this.stockToReturn.month[i] < 10) {
                    calculatedExpiry = this.stockToReturn.year[i].toString() + "0" + this.stockToReturn.month[i].toString();
                }
                else {
                    calculatedExpiry = this.stockToReturn.year[i].toString() + this.stockToReturn.month[i].toString();
                }
            }
            if (this.stockToReturn.month[i] < 10) {
                enteredExpiry = this.stockToReturn.year[i].toString() + "0" + this.stockToReturn.month[i].toString();
            }
            else {
                enteredExpiry = this.stockToReturn.year[i].toString() + this.stockToReturn.month[i].toString();
            }
            this.stockToReturn.expiry.push(parseInt(enteredExpiry));
            if (parseInt(enteredExpiry) < parseInt(expiry)) {
                this.toastr.warning('Invalid expiry', 'Warning');
                return;
            }
            else if (parseInt(calculatedExpiry) == parseInt(expiryAfter1month)) {
                this.toastr.info('Medicine will be expired after a month', 'Warning');
            }
        }
        console.log(originalreturnPurchaseArray);
        for (var i = 0; i < originalreturnPurchaseArray.length; i++) {
            if (originalreturnPurchaseArray[i].qty < this.stockToReturn.quantity[i]) {
                this.toastr.warning("Return quantity can't exceed actual quantity", "Warning");
                return;
            }
        }
        console.log(this.stockToReturn);
        this.loading = true;
        this.UserService.UpdateStockPurchase(this.stockToReturn).subscribe(function (data) {
            _this.loading = false;
            console.log(data);
            if (data.response == true) {
                $("#myModal").modal("hide");
                _this.toastr.success(data.message, "Success");
                _this.ngOnInit();
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
        }, function (err) {
            console.log(err);
        });
    };
    PurchasebookComponent.prototype.openConfirmation = function (activity) {
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
                _this.getRetunDetails();
                // $("#dischargeModal").modal("show");
                // $('textarea').autoResize();
            }
            else {
                console.log("error or No Thanks button clicked");
            }
        });
    };
    PurchasebookComponent.prototype.getReturnStatus = function (i) {
        if (this.returnStatus[i] == true) {
            return false;
        }
        else {
            return true;
        }
    };
    PurchasebookComponent.prototype.getTotalReturn = function (index) {
        if (this.returnPurchaseArray[index].qty < this.reqData.quantity[index]) {
            this.toastr.warning("Return quantity can't exceed actual quantity", "Warning");
            return;
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
        this.totalRefundAmount = 0;
        for (var i = 0; i < this.returnStatus.length; i++) {
            if (this.returnStatus[i] == true) {
                this.totalRefundAmount = this.totalRefundAmount + this.reqData.amount[i];
            }
        }
    };
    PurchasebookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-purchasebook',
            template: __webpack_require__("../../../../../src/app/header-five-layout/purchasebook/purchasebook.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-five-layout/purchasebook/purchasebook.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */]])
    ], PurchasebookComponent);
    return PurchasebookComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/header-five-layout/purchasebook/purchasebook.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasebookModule", function() { return PurchasebookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchasebook_routing_module__ = __webpack_require__("../../../../../src/app/header-five-layout/purchasebook/purchasebook-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__purchasebook_component__ = __webpack_require__("../../../../../src/app/header-five-layout/purchasebook/purchasebook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PurchasebookModule = /** @class */ (function () {
    function PurchasebookModule() {
    }
    PurchasebookModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__purchasebook_routing_module__["a" /* PurchasebookRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__["c" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__purchasebook_component__["a" /* PurchasebookComponent */]]
        })
    ], PurchasebookModule);
    return PurchasebookModule;
}());



/***/ })

});
//# sourceMappingURL=purchasebook.module.chunk.js.map