webpackJsonp(["diagnosticsprogress.module"],{

/***/ "../../../../../src/app/header-six-layout/diagnosticsprogress/diagnosticsprogress-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticsprogressRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diagnosticsprogress_component__ = __webpack_require__("../../../../../src/app/header-six-layout/diagnosticsprogress/diagnosticsprogress.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__diagnosticsprogress_component__["a" /* DiagnosticsprogressComponent */]
    }
];
var DiagnosticsprogressRoutingModule = /** @class */ (function () {
    function DiagnosticsprogressRoutingModule() {
    }
    DiagnosticsprogressRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DiagnosticsprogressRoutingModule);
    return DiagnosticsprogressRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-six-layout/diagnosticsprogress/diagnosticsprogress.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cstm-row{\n    margin-top: 20px;\n}\n.cstm-row button{\n    margin-top:38px;\n}\n.cstm-hdr{\n    margin-top: 15px;\n}\n.tbl-head{\n    margin-bottom:2px;\n    margin-top:20px;\n}\n.tbl-head tr {\n    border-top:1px solid #fff!important;\n    border-left:1px solid #fff!important;\n    border-right:1px solid #fff!important;\n}\n.tbl-head tr th{\n    background-color:#A1D253!important;\n    border-color:#fff;\n    color: black;\n}\n.table-bordered > tbody > tr > td{\n    border: 1px solid #fff;\n}\n.tbl-cntrol{\n    min-height:300px;\n    max-height: 300px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n.tbl-cntrol .tbl-data{\n    min-width: 882px;\n}\n.btn-wrap{\n    margin-top: 20px;\n}\n.btn-grin{\n    background-color:rgb(161, 210, 83);\n}\n.btn-grin-2{\n    padding:20px 30px; \n}\n.btn-wrap button{\n    margin-right: 10px;\n}\n.btn-red-1{\n    background-color: #FF0000;\n}\n.btn-ornge{\n    background-color: #E36C09;\n}\n.table{\n    margin-bottom:5px;\n    font-size: 17px;\n}\n.cstm-th tr th{\n    background-color: #A1D253;\n    color: black;\n    border:1px solid #fff;\n}\n.cstm-caret {\n    display: inline-block;\n    width: 0;\n    cursor: pointer;\n    position: absolute;\n    height: 0;\n    margin-left: 4px;\n    color: #000;\n    top: 70.5px;\n    background-color: #01b0f0;\n    z-index: 9;\n    right: 20px;\n    margin-bottom: 9px;\n    vertical-align: middle;\n    border-top: 12px dashed;\n    border-right: 10px solid transparent;\n    border-left: 10px solid transparent;\n}\n.cstm-caret-big {\n    display: inline-block;\n    width: 0;\n    cursor: pointer;\n    position: absolute;\n    height: 0;\n    margin-left: 4px;\n    color: #000;\n    top: 22px;\n    background-color: #01b0f0;\n    z-index: 1;\n    right: 5px;\n    margin-bottom: 9px;\n    vertical-align: middle;\n    border-top: 17px dashed;\n    border-right: 14px solid transparent;\n    border-left: 14px solid transparent;\n}\n.cstm-crt-wrap {\n    position: relative;\n}\n.regis-modal-body .select-opt .disabled {\n    color: #ddd;\n}\n.select-doctor{\n    background-color: #01b0f0;\n    margin-top: 55px;\n    color: #fff;\n    margin-bottom: 15px;\n}\n.new-thd th {\n    color: #fff;\n    background-color: #A1D253;\n    border: 1px solid #fff;\n    color: black;\n}\n.new-thd {\n    color: #fff;\n    background-color: #A1D253;\n    border: 1px solid #fff;\n    color: black;\n}\n.tbl-cntrol{\n    min-height:100px;\n    max-height: 380px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n.tbl-cntrol .tbl-data{\n    min-width: 880px;\n}\nth.selected{\n    background-color: #00b0f0!important;\n}\n.cstm-name{\n    background-color: #01B0F0;\n    color: white;\n}\n.cstm-blue{\n    background-color: #4978C6;\n    color: white;\n}\ntr td , tr th {\n    vertical-align: center;\n    vertical-align: middle;\n}\n.tfoot td{\n    padding:15px 0px; \n}\n.fix-footer{\n    position: fixed;\n    bottom:0;\n    margin-bottom: 10px;\n}\n.fontsmall{\n    font-size: 50%;\n    color: black;\n}\n/*#01B0F0*/\n.mg-top{\n    margin-top:5px;\n    display: block;\n    text-align: center;\n}\nh3.dt{\n    color:#416bb1;\n    text-align: center;\n}\nh3.dt > span{\n    color:#000;\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-six-layout/diagnosticsprogress/diagnosticsprogress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n    <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"cstm-hdr container-fluid\">\n\t<div class=\"row\">\n\t\t<div  class=\"col-lg-2\">\n\t\t\t<div  class=\"dashboard-header-logo\">\n\t\t\t\t<img _ngcontent-c3=\"\" class=\"img-responsive\" src=\"./assets/imgs/logoDoctm.png\" routerLink=\"/header-six-layout/dashboard-diagnostic\">\n\t\t\t</div>\n\t\t\t<div >\n\t\t\t\t<div _ngcontent-c3=\"\" class=\"dshbrd-btn\">\n\t\t\t\t\t<button  class=\"btn btn-custom\" routerLink=\"/header-six-layout/dashboard-diagnostic\" tabindex=\"0\"> Dashboard </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg-9\">\n\t\t\t <h3 class=\"dt\">\n                {{day}} {{month}} , {{year}}\n                <small>\n                    {{hoursIST}}:{{getMin()}}\n                </small>\n            </h3>\n\t\t</div>\n\t\t<div class=\"stock-tab\">\n\t\t\t<div class=\"col-lg-10 col-lg-offset-1\">\n\t\t\t\t<div class=\"\">\n\t\t\t\t\t<table class=\"table table-bordered \">\n\t\t\t\t\t\t<thead class=\"new-thd\">\n\t\t\t\t\t\t\t  <colgroup span=\"2\"></colgroup>\n\t\t\t\t\t\t\t  <colgroup span=\"2\"></colgroup>\n\t\t\t\t\t\t\t    <tr class=\"text-center\">\n\t\t\t\t\t\t\t\t    <th width=\"14%\" rowspan=\"2\" class=\"new-thd\" style=\"text-align: center;\">Doctor Name</th>\n\t\t\t\t\t\t\t\t    <th colspan=\"5\" scope=\"colgroup\" class=\"text-center\">Progress Parameters</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr >\n\t\t\t\t\t\t\t\t<th  class=\"text-center\"  width=\"10%\" scope=\"col\">Prescriptions</th>\n\t\t\t\t\t\t\t\t<th  class=\"text-center\"  width=\"10%\" scope=\"col\">Sale Orders</th>\n\t\t\t\t\t\t\t\t<th   class=\"text-center\" width=\"10%\" scope=\"col\">Sales Amount</th>\n\t\t\t\t\t\t\t\t<th  class=\"text-center\" width=\"10%\" scope=\"col\">Conversion (%)</th>\n\t\t\t\t\t\t\t\t<th  class=\"text-center\"  width=\"10%\" scope=\"col\">Sales/prescription (Rs)</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\t\n\t\t\t\t\t\t<tbody class=\"new-tbdy\">\n\t\t\t\t\t\t\t<tr *ngFor=\"let op of dataArray\">\n\t\t\t\t\t\t\t\t<td width=\"14%\" class=\"text-center cstm-name\">{{getDoctorName(op._id)}}</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.total_sales.length}}\n\t\t\t\t\t\t\t\t <small class='fontsmall'>({{getData(checkIsNan(getPercentage(op.total_sales.length,totalPrescriptions)))}}%)</small></td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.true_sales.length}}\n\t\t\t\t\t\t\t\t <small class='fontsmall'>({{getData(checkIsNan(getPercentage(op.true_sales.length,totalSales)))}}%)</small></td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.total_sales_amount}}\n\t\t\t\t\t\t\t\t <small class='fontsmall'>({{getData(checkIsNan(getPercentage(op.total_sales_amount,totalSalesDoctorPlusWalkin)))}}%)</small></td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.conversion}}%</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{op.sales_per_pres}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td width=\"14%\" class=\"text-center cstm-name\">Other Sales</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">N.A</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{otherSales.length}} \n\t\t\t\t\t\t\t\t<small class='fontsmall'>({{getData(checkIsNan(getPercentage(otherSales.length,totalSales)))}}%)</small></td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{checkIsNan(totalSalesWalkin)}} <small class='fontsmall'>({{getData(checkIsNan(getPercentage(totalSalesWalkin,totalSalesDoctorPlusWalkin)))}}%)</small></td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">N.A</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center cstm-name\">{{getData(checkIsNan(totalSalesWalkin/otherSales.length))}}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\t\t\t\t\n\t\t\t\t\t\t<tfoot class=\"tfoot\">\n\t\t\t\t\t\t\t<th width=\"14%\" class=\"text-center new-thd\">Diagnostics Aggregates</th>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{totalPrescriptions}}</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{totalSales}}</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">\n\t\t\t\t\t\t\t\t\t{{checkIsNan(totalSalesDoctorPlusWalkin)}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{checkIsNan(totalConversion)}}%</td>\n\t\t\t\t\t\t\t\t<td width=\"10%\" class=\"text-center new-thd\">{{checkIsNan(totalSalesPerPres)}}</td>\n\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"col-lg-8 col-lg-offset-2 fix-footer\">\n\t\t\t\t<div class=\"row btn-wrap\">\n\t\t\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t\t\t<button class=\"btn btn-custom\">\n\t\t\t\t\t\t\t<div>Sales: {{getData(totalSalesDoctorPlusWalkin)}}</div>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 text-center\" >\n\t\t\t\t\t\t<button class=\"btn btn-custom btn-grin\" (click)=\"exportPdf()\">\n\t\t\t\t\t\t\t<div> Export </div>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-4 text-center\">\n\t\t\t\t\t\t<button class=\"btn btn-custom\" (click)=\"SendEmailToAdminDoctorForDiagnosticsProgressToday()\">\n\t\t\t\t\t\t\t<div>Share</div>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-six-layout/diagnosticsprogress/diagnosticsprogress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticsprogressComponent; });
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



var DiagnosticsprogressComponent = /** @class */ (function () {
    function DiagnosticsprogressComponent(userService, toastr) {
        this.userService = userService;
        this.toastr = toastr;
        this.today = new Date();
    }
    DiagnosticsprogressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.diagnosticsData = JSON.parse(localStorage['smartDiagnosticsDetails']);
        this.dataArray = [];
        this.totalPrescriptions = 0;
        this.totalSales = 0;
        this.totalSalesAmount = 0;
        this.totalConversion = 0;
        this.totalSalesPerPres = 0;
        this.totalSalesWalkin = 0;
        this.totalSalesDoctorPlusWalkin = 0;
        this.otherSales = [];
        this.totalProfit = 0;
        this.getDocData();
        this.otherSalesPercent = 0;
        this.totalSalesOtherPercent = 0;
        this.totalSalesPerPresPercent = 0;
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
    DiagnosticsprogressComponent.prototype.getTableHeaderClass = function (id) {
        if (this.headerClicked == id) {
            return 'selected';
        }
        else {
            return '';
        }
    };
    DiagnosticsprogressComponent.prototype.setTableHeaderClass = function (id) {
        this.headerClicked = id;
    };
    DiagnosticsprogressComponent.prototype.getData = function (data) {
        if (data % 1 != 0) {
            return data.toFixed(2);
        }
        else {
            return data;
        }
    };
    DiagnosticsprogressComponent.prototype.getDoctorName = function (id) {
        for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
            if (this.diagnosticsData.doctorsRegisteredForSmartClinic[i]._id == id) {
                return (this.diagnosticsData.doctorsRegisteredForSmartClinic[i].first_name);
            }
        }
    };
    DiagnosticsprogressComponent.prototype.getDocData = function () {
        var _this = this;
        this.totalProfit = 0;
        var ob = {
            smart_diagnostics_id: this.diagnosticsData.dataSmartDiagnostics._id
        };
        this.loading = true;
        this.userService.DiagnosticsProgressToday(ob).subscribe(function (data) {
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
                        if (_this.dataArray[i].total_sales[j].diagnostics) {
                            _this.dataArray[i].total_sales_amount = _this.dataArray[i].total_sales_amount + _this.dataArray[i].total_sales[j].investigation_cost;
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
                    // this.totalProfit = this.totalProfit + (data.data1[i].total_amount - data.data1[i].cost_amount)
                    _this.totalSalesWalkin = _this.totalSalesWalkin + data.data1[i].total_amount;
                }
                _this.totalSalesDoctorPlusWalkin = _this.getData(_this.totalSalesAmount + _this.totalSalesWalkin);
                if (_this.diagnosticsData.doctorsRegisteredForSmartClinic.length > _this.dataArray.length) {
                    for (var i = 0; i < _this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
                        var boolean = false;
                        for (var j = 0; j < _this.dataArray.length; j++) {
                            if (_this.diagnosticsData.doctorsRegisteredForSmartClinic[i]._id.toString() == _this.dataArray[j]._id.toString()) {
                                boolean = true;
                                break;
                            }
                        }
                        if (boolean == false) {
                            _this.dataArray.push({
                                _id: _this.diagnosticsData.doctorsRegisteredForSmartClinic[i]._id,
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
    DiagnosticsprogressComponent.prototype.exportPdf = function () {
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
            Doctor: "Diagnostics Aggregates",
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
        doc.save('Diagnostics-Progress-Today' + "(" + date + ")");
    };
    DiagnosticsprogressComponent.prototype.checkIsNan = function (data) {
        if (isNaN(data)) {
            return 0;
        }
        else {
            return data;
        }
    };
    DiagnosticsprogressComponent.prototype.getPercentage = function (data, total) {
        return ((data * 100) / total);
    };
    DiagnosticsprogressComponent.prototype.SendEmailToAdminDoctorForDiagnosticsProgressToday = function () {
        var _this = this;
        for (var i = 0; i < this.dataArray.length; i++) {
            this.dataArray[i].drName = this.getDoctorName(this.dataArray[i]._id);
        }
        var clinic_name, email;
        for (var i = 0; i < this.diagnosticsData.doctorsRegisteredForSmartClinic.length; i++) {
            if (this.diagnosticsData.doctorsRegisteredForSmartClinic[i].type_of_doctor == 'admin_doctor') {
                clinic_name = this.diagnosticsData.doctorsRegisteredForSmartClinic[i].clinic_details.clinic_name;
                email = this.diagnosticsData.doctorsRegisteredForSmartClinic[i].email;
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
            // totalProfit: this.totalProfit,
            totalSalesWalkin: this.totalSalesWalkin,
            totalSalesPerPresPercent: this.totalSalesPerPresPercent,
            clinic_name: clinic_name,
            email: email
        };
        console.log(ob);
        this.loading = true;
        this.userService.SendEmailToAdminDoctorForDiagnosticsProgressToday(ob).subscribe(function (data) {
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
    DiagnosticsprogressComponent.prototype.getCurrentTime = function () {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
        this.hoursIST = ISTTime.getHours();
        this.minutesIST = ISTTime.getMinutes();
    };
    DiagnosticsprogressComponent.prototype.getMin = function () {
        if (this.minutesIST < 10) {
            return "0" + this.minutesIST;
        }
        else {
            return this.minutesIST;
        }
    };
    DiagnosticsprogressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-diagnosticsprogress',
            template: __webpack_require__("../../../../../src/app/header-six-layout/diagnosticsprogress/diagnosticsprogress.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-six-layout/diagnosticsprogress/diagnosticsprogress.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], DiagnosticsprogressComponent);
    return DiagnosticsprogressComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header-six-layout/diagnosticsprogress/diagnosticsprogress.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticsprogressModule", function() { return DiagnosticsprogressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diagnosticsprogress_routing_module__ = __webpack_require__("../../../../../src/app/header-six-layout/diagnosticsprogress/diagnosticsprogress-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diagnosticsprogress_component__ = __webpack_require__("../../../../../src/app/header-six-layout/diagnosticsprogress/diagnosticsprogress.component.ts");
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








var DiagnosticsprogressModule = /** @class */ (function () {
    function DiagnosticsprogressModule() {
    }
    DiagnosticsprogressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__diagnosticsprogress_routing_module__["a" /* DiagnosticsprogressRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__diagnosticsprogress_component__["a" /* DiagnosticsprogressComponent */]]
        })
    ], DiagnosticsprogressModule);
    return DiagnosticsprogressModule;
}());



/***/ })

});
//# sourceMappingURL=diagnosticsprogress.module.chunk.js.map