webpackJsonp(["pharmacyprogress.module"],{

/***/ "../../../../../src/app/header-five-layout/pharmacyprogress/pharmacyprogress-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmacyprogressRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pharmacyprogress_component__ = __webpack_require__("../../../../../src/app/header-five-layout/pharmacyprogress/pharmacyprogress.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pharmacyprogress_component__["a" /* PharmacyprogressComponent */]
    }];
var PharmacyprogressRoutingModule = /** @class */ (function () {
    function PharmacyprogressRoutingModule() {
    }
    PharmacyprogressRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PharmacyprogressRoutingModule);
    return PharmacyprogressRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/pharmacyprogress/pharmacyprogress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cstm-row{\n\tmargin-top: 20px;\n}\n.cstm-row button{\n\tmargin-top:38px;\n}\n.cstm-hdr{\n\tmargin-top: 15px;\n}\n.tbl-head{\n\tmargin-bottom:2px;\n\tmargin-top:20px;\n}\n.tbl-head tr {\n\tborder-top:1px solid #fff!important;\n\tborder-left:1px solid #fff!important;\n\tborder-right:1px solid #fff!important;\n}\n.tbl-head tr th{\n\tbackground-color:#A1D253!important;\n\tborder-color:#fff;\n\tcolor: black;\n}\n.table-bordered > tbody > tr > td{\n    border: 1px solid #fff;\n}\n.tbl-cntrol{\n\tmin-height:300px;\n\tmax-height: 300px;\n\toverflow-x: hidden;\n\toverflow-y: scroll;\n}\n.tbl-cntrol .tbl-data{\n\tmin-width: 882px;\n}\n.btn-wrap{\n\tmargin-top: 20px;\n}\n.btn-grin{\n\tbackground-color:rgb(161, 210, 83);\n}\n.btn-grin-2{\n\tpadding:20px 30px; \n}\n.btn-wrap button{\n\tmargin-right: 10px;\n}\n.btn-red-1{\n\tbackground-color: #FF0000;\n}\n.btn-ornge{\n\tbackground-color: #E36C09;\n}\n.table{\n\tmargin-bottom:5px;\n    font-size: 17px;\n}\n.cstm-th tr th{\n\tbackground-color: #A1D253;\n\tcolor: black;\n\tborder:1px solid #fff;\n}\n.cstm-caret {\n    display: inline-block;\n    width: 0;\n    cursor: pointer;\n    position: absolute;\n    height: 0;\n    margin-left: 4px;\n    color: #000;\n    top: 70.5px;\n    background-color: #01b0f0;\n    z-index: 9;\n    right: 20px;\n    margin-bottom: 9px;\n    vertical-align: middle;\n    border-top: 12px dashed;\n    border-right: 10px solid transparent;\n    border-left: 10px solid transparent;\n}\n.cstm-caret-big {\n    display: inline-block;\n    width: 0;\n    cursor: pointer;\n    position: absolute;\n    height: 0;\n    margin-left: 4px;\n    color: #000;\n    top: 22px;\n    background-color: #01b0f0;\n    z-index: 1;\n    right: 5px;\n    margin-bottom: 9px;\n    vertical-align: middle;\n    border-top: 17px dashed;\n    border-right: 14px solid transparent;\n    border-left: 14px solid transparent;\n}\n.cstm-crt-wrap {\n    position: relative;\n}\n.regis-modal-body .select-opt .disabled {\n    color: #ddd;\n}\n.select-doctor{\n    background-color: #01b0f0;\n    margin-top: 55px;\n    color: #fff;\n    margin-bottom: 15px;\n}\n.new-thd th {\n    color: #fff;\n    background-color: #A1D253;\n    border: 1px solid #fff;\n    color: black;\n}\n.new-thd {\n    color: #fff;\n    background-color: #A1D253;\n    border: 1px solid #fff;\n    color: black;\n}\n.tbl-cntrol{\n    min-height:100px;\n    max-height: 380px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n.tbl-cntrol .tbl-data{\n    min-width: 880px;\n}\nth.selected{\n    background-color: #00b0f0!important;\n}\n.cstm-name{\n    background-color: #01B0F0;\n    color: white;\n}\n.cstm-blue{\n    background-color: #4978C6;\n    color: white;\n}\ntr td , tr th {\n    vertical-align: center;\n    vertical-align: middle;\n}\n.tfoot td{\n    padding:15px 0px; \n}\n.fix-footer{\n    position: fixed;\n    bottom:0;\n    margin-bottom: 10px;\n}\n.fontsmall{\n    font-size: 50%;\n    color: black;\n}\n/*#01B0F0*/\nh3.dt{\n    color:#416bb1;\n    text-align: center;\n}\nh3.dt > span{\n    color:#000;\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-five-layout/pharmacyprogress/pharmacyprogress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr\">\n\t<div class=\"\">\n\t\t<div  class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12\">\n\t\t\t<div  class=\"dashboard-header-logo\">\n\t\t\t\t<img _ngcontent-c3=\"\" class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerLink=\"/header-five-layout/dashboard-pharmacy\">\n\t\t\t</div>\n\t\t\t<div >\n\t\t\t\t<div _ngcontent-c3=\"\" class=\"dshbrd-btn\">\n\t\t\t\t\t<button  class=\"btn btn-custom\" routerLink=\"/header-five-layout/dashboard-pharmacy\" tabindex=\"0\"> Dashboard </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12\">\n\t\t\t <h3 class=\"dt\">\n                {{day}} {{month}} , {{year}}\n                <small>\n                    {{hoursIST}}:{{getMin()}}\n                </small>\n            </h3>\n\t\t</div>\n\t\t<div class=\"\">\n\t\t\t<div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12\">\n\t\t\t\t<div class=\"tab_progress\">\n\t\t\t\t\t<table class=\"table table-bordered \">\n\t\t\t\t\t\t<thead class=\"new-thd\">\n\t\t\t\t\t\t\t  <colgroup span=\"2\"></colgroup>\n\t\t\t\t\t\t\t  <colgroup span=\"2\"></colgroup>\n\t\t\t\t\t\t\t    <tr class=\"text-center\">\n\t\t\t\t\t\t\t\t    <th width=\"14%\" rowspan=\"2\" class=\"new-thd\" style=\"text-align: center;\">Doctor Name</th>\n\t\t\t\t\t\t\t\t    <th colspan=\"5\" scope=\"colgroup\" class=\"text-center\">Progress Parameters</th>\n\t\t\t\t\t\t\t\t </tr>\n\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t<th  class=\"text-center\"  width=\"10%\" scope=\"col\">Prescriptions</th>\n\t\t\t\t\t\t\t\t<th  class=\"text-center\"  width=\"10%\" scope=\"col\">Sale Orders</th>\n\t\t\t\t\t\t\t\t<th   class=\"text-center\" width=\"10%\" scope=\"col\">Sales Amount (Rs)</th>\n\t\t\t\t\t\t\t\t<th  class=\"text-center\" width=\"10%\" scope=\"col\">Conversion</th>\n\t\t\t\t\t\t\t\t<th  class=\"text-center\"  width=\"10%\" scope=\"col\">Sales/prescription (Rs)</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody class=\"new-tbdy\">\n\t\t\t\t\t\t\t<tr *ngFor=\"let op of dataArray\">\n\t\t\t\t\t\t\t\t<td width=\"14%\" class=\"text-center cstm-name\">{{getDoctorName(op._id)}}</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.total_sales.length}}\n\t\t\t\t\t\t\t\t <small class='fontsmall'>({{getData(checkIsNan(getPercentage(op.total_sales.length,totalPrescriptions)))}}%)</small></td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.true_sales.length}}\n\t\t\t\t\t\t\t\t <small class='fontsmall'>({{getData(checkIsNan(getPercentage(op.true_sales.length,totalSales)))}}%)</small></td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.total_sales_amount}}\n\t\t\t\t\t\t\t\t <small class='fontsmall'>({{getData(checkIsNan(getPercentage(op.total_sales_amount,totalSalesDoctorPlusWalkin)))}}%)</small></td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.conversion}}%</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.sales_per_pres}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td width=\"14%\" class=\"text-center cstm-name\">Other Sales</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">N.A</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{otherSales.length}} \n\t\t\t\t\t\t\t\t<small class='fontsmall'>({{getData(checkIsNan(getPercentage(otherSales.length,totalSales)))}}%)</small></td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{checkIsNan(totalSalesWalkin)}} <small class='fontsmall'>({{getData(checkIsNan(getPercentage(totalSalesWalkin,totalSalesDoctorPlusWalkin)))}}%)</small></td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">N.A</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{getData(checkIsNan(totalSalesWalkin/otherSales.length))}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t<tfoot class=\"tfoot\">\n\t\t\t\t\t\t\t<th width=\"14%\" class=\"text-center new-thd\">Pharmacy Aggregates</th>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{totalPrescriptions}}</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{totalSales}}</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">\n\t\t\t\t\t\t\t\t\t{{checkIsNan(totalSalesDoctorPlusWalkin)}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{checkIsNan(totalConversion)}}%</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{checkIsNan(totalSalesPerPres)}}</td>\n\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 fix-footer\">\n\t\t\t\t<div class=\"row btn-wrap\">\n\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 text-center\">\n\t\t\t\t\t\t<button class=\"btn btn-custom btn-grin\">\n\t\t\t\t\t\t\t<div> Sales: {{getData(totalSalesDoctorPlusWalkin)}}</div>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 text-center\">\n\t\t\t\t\t\t<button class=\"btn btn-custom\">\n\t\t\t\t\t\t\t<div>Profit: {{getData(totalProfit)}}</div>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 text-center\" >\n\t\t\t\t\t\t<button class=\"btn btn-custom btn-grin\" (click)=\"exportPdf()\">\n\t\t\t\t\t\t\t<div> Export </div>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 text-center\">\n\t\t\t\t\t\t<button class=\"btn btn-custom\" (click)=\"SendEmailToAdminDoctorForPharmacyProgressToday()\">\n\t\t\t\t\t\t\t<div>Share</div>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-five-layout/pharmacyprogress/pharmacyprogress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmacyprogressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
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



var PharmacyprogressComponent = /** @class */ (function () {
    function PharmacyprogressComponent(userService, toastr) {
        this.userService = userService;
        this.toastr = toastr;
    }
    PharmacyprogressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pharmacyData = JSON.parse(localStorage['smartPharmacyDetails']);
        this.dataArray = [];
        this.otherSales = [];
        this.totalPrescriptions = 0;
        this.totalSales = 0;
        this.totalSalesAmount = 0;
        this.totalConversion = 0;
        this.totalSalesPerPres = 0;
        this.totalSalesWalkin = 0;
        this.totalProfit = 0;
        this.totalSalesDoctorPlusWalkin = 0;
        this.otherSalesPercent = 0;
        this.totalSalesOtherPercent = 0;
        this.totalSalesPerPresPercent = 0;
        this.getDocData();
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        this.hoursIST = ISTTime.getHours();
        this.minutesIST = ISTTime.getMinutes();
        setInterval(function () {
            _this.getCurrentTime();
        }, 60000);
        var options = {
            month: 'short'
        };
        var today = new Date();
        this.month = today.toLocaleDateString("en-IN", options);
        this.day = new Date().getDate();
        this.year = new Date().getFullYear();
        this.numericMonth = new Date().getMonth() + 1;
    };
    PharmacyprogressComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    PharmacyprogressComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    PharmacyprogressComponent.prototype.getData = function (data) {
        if (data % 1 != 0) {
            // console.log(data)
            return data.toFixed(2);
        }
        else {
            return data;
        }
    };
    PharmacyprogressComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.pharmacyData.doctorsRegisteredForSmartClinic.length; i++) {
            if (this.pharmacyData.doctorsRegisteredForSmartClinic[i]._id == id) {
                return (this.pharmacyData.doctorsRegisteredForSmartClinic[i].first_name);
            }
        }
    };
    PharmacyprogressComponent.prototype.getDocData = function () {
        var _this = this;
        var ob = {
            smart_pharmacy_id: this.pharmacyData.dataSmartPharmacy._id
        };
        this.loading = true;
        this.userService.PharmacyProgressToday(ob).subscribe(function (data) {
            console.log(data);
            if (data.response == true) {
                _this.dataArray = data.data;
                _this.otherSales = data.data1;
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.dataArray[i].true_sales = [];
                    _this.dataArray[i].false_sales = [];
                    _this.dataArray[i].total_sales_amount = 0;
                    _this.dataArray[i].sales_per_pres = 0;
                    for (var j = 0; j < _this.dataArray[i].total_sales.length; j++) {
                        if (_this.dataArray[i].total_sales[j].pharmacy) {
                            _this.dataArray[i].total_sales_amount = _this.dataArray[i].total_sales_amount + _this.dataArray[i].total_sales[j].pharmacy_sales;
                            _this.totalProfit = _this.totalProfit + (_this.dataArray[i].total_sales[j].pharmacy_sales - _this.dataArray[i].total_sales[j].pharmacy_cost);
                            _this.dataArray[i].true_sales.push(_this.dataArray[i].total_sales[j]);
                        }
                        else {
                            _this.dataArray[i].false_sales.push(_this.dataArray[i].total_sales[j]);
                        }
                    }
                    _this.dataArray[i].conversion = _this.getData((_this.dataArray[i].true_sales.length * 100) / _this.dataArray[i].total_sales.length);
                    if (_this.dataArray[i].true_sales.length > 0) {
                        _this.dataArray[i].sales_per_pres = parseFloat(_this.getData(_this.dataArray[i].total_sales_amount / _this.dataArray[i].true_sales.length));
                    }
                }
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.totalPrescriptions = _this.totalPrescriptions + _this.dataArray[i].total_sales.length;
                    _this.totalSales = _this.totalSales + _this.dataArray[i].true_sales.length;
                    _this.totalSalesAmount = _this.totalSalesAmount + _this.dataArray[i].total_sales_amount;
                }
                _this.totalConversion = _this.getData((_this.totalSales * 100) / _this.totalPrescriptions);
                // this.totalSalesPerPres = this.totalSalesPerPres + parseFloat(this.getData(this.totalSalesAmount / this.totalSales))
                //calculate amount for walkin patients//
                for (var i = 0; i < data.data1.length; i++) {
                    _this.totalProfit = _this.totalProfit + (data.data1[i].total_amount - data.data1[i].cost_amount);
                    _this.totalSalesWalkin = _this.totalSalesWalkin + data.data1[i].total_amount;
                }
                _this.totalSalesDoctorPlusWalkin = _this.getData(_this.totalSalesAmount + _this.totalSalesWalkin);
                if (_this.pharmacyData.doctorsRegisteredForSmartClinic.length > _this.dataArray.length) {
                    for (var i = 0; i < _this.pharmacyData.doctorsRegisteredForSmartClinic.length; i++) {
                        var boolean = false;
                        for (var j = 0; j < _this.dataArray.length; j++) {
                            if (_this.pharmacyData.doctorsRegisteredForSmartClinic[i]._id.toString() == _this.dataArray[j]._id.toString()) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            _this.dataArray.push({
                                _id: _this.pharmacyData.doctorsRegisteredForSmartClinic[i]._id,
                                total_sales: [],
                                true_sales: [],
                                total_sales_amount: 0,
                                conversion: 0,
                                sales_per_pres: 0
                            });
                        }
                    }
                }
                _this.totalSales = _this.totalSales + _this.otherSales.length;
                for (var i = 0; i < _this.dataArray.length; i++) {
                    _this.dataArray[i].totalPrescriptionsPercent = _this.getData(_this.checkIsNan(_this.getPercentage(_this.dataArray[i].total_sales.length, _this.totalPrescriptions)));
                    _this.dataArray[i].trueSalesPercent = _this.getData(_this.checkIsNan(_this.getPercentage(_this.dataArray[i].true_sales.length, _this.totalSales)));
                    _this.dataArray[i].trueSalesAmtPercent = _this.getData(_this.checkIsNan(_this.getPercentage(_this.dataArray[i].total_sales_amount, _this.totalSalesDoctorPlusWalkin)));
                }
                _this.otherSalesPercent = _this.getData(_this.checkIsNan(_this.getPercentage(_this.otherSales.length, _this.totalSales)));
                _this.totalSalesOtherPercent = _this.getData(_this.checkIsNan(_this.getPercentage(_this.totalSalesWalkin, _this.totalSalesDoctorPlusWalkin)));
                _this.totalSalesPerPresPercent = _this.getData(_this.checkIsNan(_this.totalSalesWalkin / _this.otherSales.length));
                _this.totalSalesPerPres = parseFloat(_this.getData(_this.totalSalesDoctorPlusWalkin / _this.totalSales));
                console.log(_this.dataArray);
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    PharmacyprogressComponent.prototype.exportPdf = function () {
        var head = [
            { title: 'Doctor Name', dataKey: "Doctor" },
            { title: 'Prescriptions', dataKey: "Prescriptions" },
            { title: 'Sales Orders', dataKey: "SalesOrders" },
            { title: 'Sales Amount', dataKey: "SalesAmount" },
            { title: 'Conversion', dataKey: "Conversion" },
            { title: 'Sales/prescription (Rs)', dataKey: "salesPerPrescription" }
        ];
        var csvData = [];
        var totalDuration;
        var dates = [];
        for (var i = 0; i < this.dataArray.length; i++) {
            var ob;
            ob = {};
            ob.id = i + 1;
            //var date = this.stockValuation[i].createdAt.split('T')
            //ob.updateAt = date[0] + " " +date[1].substr(0,5)
            ob.Doctor = this.getDoctorName(this.dataArray[i]._id);
            ob.Prescriptions = this.dataArray[i].total_sales.length;
            ob.SalesOrders = this.dataArray[i].true_sales.length;
            ob.SalesAmount = this.dataArray[i].total_sales_amount;
            ob.Conversion = this.dataArray[i].conversion + "%";
            ob.salesPerPrescription = this.dataArray[i].sales_per_pres;
            csvData.push(ob);
        }
        csvData.push({
            Doctor: "Other Sales",
            Prescriptions: "N.A",
            SalesOrders: this.otherSales.length,
            SalesAmount: this.checkIsNan(this.totalSalesWalkin),
            Conversion: "N.A",
            salesPerPrescription: this.checkIsNan(this.getData(this.totalSalesWalkin / this.otherSales.length))
        });
        csvData.push({
            Doctor: "Pharmacy Aggregates",
            Prescriptions: this.totalPrescriptions,
            SalesOrders: this.totalSales,
            SalesAmount: this.checkIsNan(this.totalSalesDoctorPlusWalkin),
            Conversion: this.checkIsNan(this.totalConversion) + "%",
            salesPerPrescription: this.checkIsNan(this.totalSalesPerPres)
        });
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
        doc.save('Progress-Today' + "(" + date + ")");
    };
    PharmacyprogressComponent.prototype.checkIsNan = function (data) {
        if (isNaN(data)) {
            return 0;
        }
        else {
            return data;
        }
    };
    PharmacyprogressComponent.prototype.getPercentage = function (data, total) {
        return ((data * 100) / total);
    };
    PharmacyprogressComponent.prototype.SendEmailToAdminDoctorForPharmacyProgressToday = function () {
        var _this = this;
        for (var i = 0; i < this.dataArray.length; i++) {
            this.dataArray[i].drName = this.getDoctorName(this.dataArray[i]._id);
        }
        var clinic_name, email;
        for (var i = 0; i < this.pharmacyData.doctorsRegisteredForSmartClinic.length; i++) {
            if (this.pharmacyData.doctorsRegisteredForSmartClinic[i].type_of_doctor == 'admin_doctor') {
                clinic_name = this.pharmacyData.doctorsRegisteredForSmartClinic[i].clinic_details.clinic_name;
                email = this.pharmacyData.doctorsRegisteredForSmartClinic[i].email;
                break;
            }
        }
        var ob = {
            totalPrescriptions: this.totalPrescriptions,
            totalSales: this.totalSales,
            totalSalesDoctorPlusWalkin: this.totalSalesDoctorPlusWalkin,
            totalConversion: this.totalConversion,
            totalSalesPerPres: this.totalSalesPerPres,
            dataArray: this.dataArray,
            otherSales: this.otherSales,
            otherSalesPercent: this.otherSalesPercent,
            totalSalesOtherPercent: this.totalSalesOtherPercent,
            totalProfit: this.totalProfit,
            totalSalesWalkin: this.totalSalesWalkin,
            totalSalesPerPresPercent: this.totalSalesPerPresPercent,
            clinic_name: clinic_name,
            email: email
        };
        console.log(ob);
        this.loading = true;
        this.userService.SendEmailToAdminDoctorForPharmacyProgressToday(ob).subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.toastr.success(data.message, "Success");
            }
            else {
                _this.toastr.error(data.message, "Error");
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    PharmacyprogressComponent.prototype.getCurrentTime = function () {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        this.hoursIST = ISTTime.getHours();
        this.minutesIST = ISTTime.getMinutes();
    };
    PharmacyprogressComponent.prototype.getMin = function () {
        if (this.minutesIST < 10) {
            return "0" + this.minutesIST;
        }
        else {
            return this.minutesIST;
        }
    };
    PharmacyprogressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pharmacyprogress',
            template: __webpack_require__("../../../../../src/app/header-five-layout/pharmacyprogress/pharmacyprogress.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-five-layout/pharmacyprogress/pharmacyprogress.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], PharmacyprogressComponent);
    return PharmacyprogressComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-five-layout/pharmacyprogress/pharmacyprogress.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacyprogressModule", function() { return PharmacyprogressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pharmacyprogress_routing_module__ = __webpack_require__("../../../../../src/app/header-five-layout/pharmacyprogress/pharmacyprogress-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pharmacyprogress_component__ = __webpack_require__("../../../../../src/app/header-five-layout/pharmacyprogress/pharmacyprogress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PharmacyprogressModule = /** @class */ (function () {
    function PharmacyprogressModule() {
    }
    PharmacyprogressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__pharmacyprogress_routing_module__["a" /* PharmacyprogressRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__pharmacyprogress_component__["a" /* PharmacyprogressComponent */]]
        })
    ], PharmacyprogressModule);
    return PharmacyprogressModule;
}());



/***/ })

});
//# sourceMappingURL=pharmacyprogress.module.chunk.js.map