webpackJsonp(["tutorial.module"],{

/***/ "../../../../../src/app/header-one-layout/tutorial/document.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div mat-dialog-content>\n    <div style=\"position: relative;\">\n      <span class=\"fa fa-times\" style=\"position: absolute;top:5px;right:5px;\"></span>\n      <pdf-viewer src=\"{{data.url}}{{data.pdf}}\" [original-size]=\"true\" style=\"display: block;\">\n      </pdf-viewer>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-one-layout/tutorial/tutorial-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial_component__ = __webpack_require__("../../../../../src/app/header-one-layout/tutorial/tutorial.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__tutorial_component__["b" /* TutorialComponent */]
    }];
var TutorialRoutingModule = /** @class */ (function () {
    function TutorialRoutingModule() {
    }
    TutorialRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TutorialRoutingModule);
    return TutorialRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/tutorial/tutorial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tb-1{\r\n\tmargin-bottom: 0px;\r\n}\r\n.evn{\r\n\tbackground-color:#eff3ef;\r\n}\r\n.grin{\r\n\tcolor:#38af13;\r\n}\r\n.red-u{\r\n\tcolor:#ff0000;\r\n}\r\n.tb-1 h4{\r\n\tmargin: 0px;\r\n}\r\n.wrap-canavas{\r\n\tfloat: none;\r\n\twidth:100%;\r\n}\r\n.clr-blue{\r\n\tcolor:#00b0f0;\r\n\tfont-weight: bold;\r\n\tcursor: pointer;\r\n}\r\n.blu-2{\r\n\tcolor:#1639bf;\r\n}\r\n.footer-cstm-an{\r\n\tposition: fixed;\r\n    float: left;\r\n    width: 100%;\r\n    bottom: 0;\r\n    background:#00b0f0;\r\n    color:#fff;\r\n    z-index: 99;\r\n    border-top: 1px solid #d6d6d6;\r\n    padding-top: 8px;\r\n}\r\n.cus-content-wrapper{\r\n\tpadding-top: 0px;\r\n}\r\n.wrap-height{\r\n\tmin-height:480px;\r\n\tpadding:0px 8px;\r\n\tborder-left: 1px solid #dcdcdc;\r\n\tborder-right:1px solid #dcdcdc;\r\n}\r\n.cstm-ul-new li a{\r\n\tbackground-color:transparent;\r\n\tcolor:#000;\r\n\tpadding:10px 87px;\r\n\tcursor: pointer;\r\n\tborder-radius: 0px;\r\n\tborder-bottom: 2px solid transparent; \r\n}\r\n.cstm-ul-new li.active a{\r\n\tbackground-color: #e0e0e0;\r\n    color: #000;\r\n\tborder-bottom: 2px solid #00b0f0;\r\n}\r\n.wrap-height{\r\n\tmin-height:200px;\r\n\tmax-height: 200px;\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n}\r\n.tb-2 tr td{\r\n\tpadding: 10px;\r\n}\r\n.cus-sidebar-wrapper .cus-sidebar{\r\n\theight: initial!important;\r\n}\r\n.tb-1{\r\n\tmargin-bottom: 0px;\r\n}\r\n.evn{\r\n\tbackground-color:#eff3ef;\r\n}\r\n.grin{\r\n\tcolor:#38af13;\r\n}\r\n.red-u{\r\n\tcolor:#ff0000;\r\n}\r\n.tb-1 h4{\r\n\tmargin: 0px;\r\n}\r\n.wrap-canavas{\r\n\tfloat: none;\r\n\twidth:100%;\r\n}\r\n.clr-blue{\r\n\tcolor:#00b0f0;\r\n\tfont-weight: bold;\r\n}\r\n.blu-2{\r\n\tcolor:#1639bf;\r\n}\r\n.cus-content-wrapper{\r\n\tpadding-top: 0px;\r\n}\r\n.wrap-height{\r\n\tmin-height:250px;\r\n\tmax-height: 250px;\r\n\tpadding:0px 8px;\r\n\tborder-left: 1px solid #dcdcdc;\r\n\tborder-right:1px solid #dcdcdc;\r\n\toverflow-x: hidden;\r\n}\r\n.mt-table h3{\r\n\tmargin-top: 0px;\r\n}\r\n.cstm-tr{\r\n\tbackground-color: #000;\r\n\tcolor:#fff;\r\n\ttext-align: center;\r\n\tmargin: 0px;\r\n    padding: 15px;\r\n}\r\n.cstm-tr-2{\r\n\tbackground-color:#d7e4e3;\r\n}\r\n.cstm-tr-2 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-2 td:last-child {\r\n border-right: none;\r\n}\r\n.cstm-tr-3{\r\n\tborder-bottom:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td{\r\n\tborder-right:1px solid #bbb; \r\n}\r\n.cstm-tr-3 td:last-child {\r\n border-right: none;\r\n}\r\n.cus-sidebar-wrapper .cus-sidebar{\r\n\theight: initial;\r\n}\r\n.cstm-mg{\r\n\tmargin-top: 5px;\r\n}\r\n.analytics-sec{\r\n\tmargin:12px 0px;\r\n}\r\n.li-cstm a{\r\n\ttext-align: center!important;\r\n    background: #000!important;\r\n    color: #fff!important;\r\n    font-size: 16px!important;\r\n    font-weight: inherit!important;\r\n    padding: 15px!important;\r\n}\r\n.side-bar-cstm{\r\n\tz-index: 99;\r\n}\r\n.res-tab-2{\r\n\tmax-height: 200px;\r\n}\r\n.cstm-ul-new li{\r\n\twidth: 50%;\r\n}\r\n.cstm-ul-new li a{\r\n\tbackground-color:transparent;\r\n\tcolor:#000;\r\n\tpadding:10px 108px;\r\n\tcursor: pointer;\r\n\tborder-radius: 0px;\r\n\tborder-bottom: 2px solid transparent; \r\n}\r\n.cstm-ul-new li.active a{\r\n\tbackground-color: #e0e0e0;\r\n    color: #000;\r\n\tborder-bottom: 2px solid #00b0f0;\r\n}\r\n.tab-new{\r\n    padding: 0px 8px;\r\n    border-left: 1px solid #dcdcdc;\r\n    border-right: 1px solid #dcdcdc;\r\n    overflow-x: hidden;\r\n}\r\n.clr-blue{\r\n    color: #00b0f0;\r\n    font-weight: bold;\r\n}\r\n.brder-cstm{\r\n\tpadding-bottom: 1px;\r\n    margin-bottom: 6px;\r\n    border-bottom: 1px solid #a7a7a7;\r\n    position: relative;\r\n}\r\n.brder-cstm::after{\r\n\tcontent: \"\";\r\n    position: absolute;\r\n    height: 6px;\r\n    width: 12px;\r\n    background-color: #ffffff;\r\n    top: 41px;\r\n    right: -3px;\r\n\t \r\n}\r\n.cus-sidebar ul{\r\n\tborder:1px solid #a7a7a7;\r\n}\r\n.csrs{\r\n\tcursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-one-layout/tutorial/tutorial.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader-box\" *ngIf=\"loading\">\n   <img src=\"./assets/imgs/load.gif\" />\n</div>\n<div class=\"analytics-sec\">\n   <div class=\"ipd-deatil-sec\">\n      <div class=\"ipd-body\">\n         <div class=\"cus-sidebar-wrapper side-bar-cstm\">\n            <div class=\"cus-sidebar\">\n               <h4 class=\"cstm-tr\">Category</h4>\n               <ul *ngFor = \"let list of getCategoryArray; let i = index\">\n                  <li class=\"{{getClass(i)}}\" (click) = \"showByCategory(list.category, i)\"> <a>{{list.category}}</a> </li>\n               </ul>\n            </div>\n         </div>\n         <div class=\"cus-content-wrapper\">\n            <div class=\"cus-content\">\n               <div class=\"\">\n                  <div class=\"row\">\n                     <h3 class=\"text-center mg-top-btn\">TUTORIALS</h3>\n                  </div>\n                  <div class=\"col-lg-12\">\n                     <ul class=\"nav nav-tabs cstm-ul-new\">\n                        <li class=\"active text-center\"><a data-toggle=\"tab\" href=\"#home-cstm\">Videos</a></li>\n                        <li class=\"text-center\"><a data-toggle=\"tab\" href=\"#menu1-cstm\">Pdf</a></li>\n                     </ul>\n                     <div class=\"tab-content\">\n                       \n                           <div id=\"home-cstm\" class=\"tab-pane fade in active\">\n                              <div class=\"row\" >\n                                 <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\" *ngFor = \"let list of filteredData\">\n                                    <div class=\"video-wrap\">\n                                       <video  controls controlsList=\"nodownload\" >\n                                          <source src=\"{{tutorialData}}{{list.fileName}}\"  type=\"video/mp4\">\n                                             Your browser does not support the video tag.\n                                          </video>\n                                          <div class=\"txt-video\">\n                                             <h4>{{list.caption}}</h4>\n                                             <p>{{list.description}}</p>\n                                          </div>\n                                       </div>\n                                    </div>\n                                 </div>\n                              </div>\n\n                           <div id=\"menu1-cstm\" class=\"tab-pane fade\">\n                              <div *ngFor = \"let list of pdfData\">\n                                 <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\n                                    <div (click)=\"openDialogDocument(list)\">\n                                       <div class=\"video-wrap\">\n                                          <div class=\"text-center img-pdf\">\n                                             <img src=\"./assets/imgs/capture.jpg\"/>\n                                          </div>\n                                          <div class=\"txt-video\">\n                                             <h4><b>{{list.caption}}</b>\n                                             </h4>\n                                             <p>\n                                                {{list.description}}\n                                             </p>\n                                          </div>\n                                       </div>\n                                    </div>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n<!-- </div> -->"

/***/ }),

/***/ "../../../../../src/app/header-one-layout/tutorial/tutorial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TutorialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_service__ = __webpack_require__("../../../../../src/app/providers/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var TutorialComponent = /** @class */ (function () {
    function TutorialComponent(toastr, dialog, domSanitizer, userService) {
        this.toastr = toastr;
        this.dialog = dialog;
        this.domSanitizer = domSanitizer;
        this.userService = userService;
    }
    TutorialComponent.prototype.ngOnInit = function () {
        this.pdfData = [];
        this.videoData = [];
        this.newVideoArray = [];
        this.allData = [];
        this.tutorialData = __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* environment */].tutorialData;
        this.getData();
        this.getCategory();
        this.showByCategory('Smart Assistant', 0);
    };
    TutorialComponent.prototype.getData = function () {
        var _this = this;
        this.loading = true;
        this.userService.GetUploadTutorials().subscribe(function (data) {
            console.log(data);
            if (data.response) {
                _this.allData = data.data;
                if (_this.allData) {
                    for (var i = 0; i < data.data.length; i++) {
                        if (data.data[i].fileName) {
                            if (data.data[i].fileName.split('.')[1] == 'pdf') {
                                _this.pdfData.push(data.data[i]);
                            }
                            else if (data.data[i].fileName.split('.')[1] == 'mp4' || data.data[i].fileName.split('.')[1] == 'mkv') {
                                _this.videoData.push(data.data[i]);
                            }
                        }
                    }
                    _this.filteredData = _this.videoData;
                    _this.pdfFilteredData = _this.pdfData;
                    console.log(_this.filteredData);
                    console.log(_this.pdfFilteredData);
                }
                _this.toastr.success(data.message, 'Success', { timeOut: 3000, closeButton: true });
            }
            else {
                _this.toastr.error(data.message, 'Error', { timeOut: 3000, closeButton: true });
            }
            _this.loading = false;
        }, function (err) {
            console.log(err);
        });
    };
    TutorialComponent.prototype.openDialogDocument = function (list) {
        console.log(list);
        var object = {
            pdf: list.fileName,
            url: this.tutorialData
        };
        var dialogRef = this.dialog.open(DocumentDialog, {
            width: '850px', height: '500px',
            data: object
        });
    };
    TutorialComponent.prototype.getCategory = function () {
        var _this = this;
        this.userService.GetTutorialsCategories().subscribe(function (data) {
            console.log(data);
            _this.getCategoryArray = data.data;
        }, function (err) {
            console.log(err);
        });
    };
    TutorialComponent.prototype.showByCategory = function (name, i) {
        console.log(name);
        console.log(i);
        // var newd 
        // newd= []
        // for (var i = 0; i < this.videoData.length; i++) {
        // 	if(name==this.videoData[i].category){
        // 		console.log(name,this.videoData[i].category)
        // 		console.log(this.videoData[i]);
        // 		this.videoData = this.videoData
        // 		console.log(this.videoData)
        // 	}
        // }
        this.activateTab = i;
        var newArray = this.videoData.filter(function (el) {
            return el.category == name;
        });
        this.filteredData = newArray;
        // var newArray1 = this.pdfData.filter(function (el) {
        //   return el.category==name
        // });
        // this.pdfFilteredData=newArray1;
    };
    TutorialComponent.prototype.getClass = function (i) {
        if (i == this.activateTab) {
            return 'active';
        }
        else if (i < this.activateTab) {
            return 'completed';
        }
    };
    TutorialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__("../../../../../src/app/header-one-layout/tutorial/tutorial.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header-one-layout/tutorial/tutorial.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_0__providers_user_service__["a" /* UserService */]])
    ], TutorialComponent);
    return TutorialComponent;
}());

//////////////////////
var DocumentDialog = /** @class */ (function () {
    function DocumentDialog(domSanitizer, dialogRef, data) {
        this.domSanitizer = domSanitizer;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DocumentDialog.prototype.getSafeContent = function (data) {
        console.log(data);
        return this.domSanitizer.bypassSecurityTrustHtml("https://docs.google.com/gview?url=" + data);
    };
    DocumentDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'document',
            template: __webpack_require__("../../../../../src/app/header-one-layout/tutorial/document.html"),
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */], Object])
    ], DocumentDialog);
    return DocumentDialog;
}());



/***/ }),

/***/ "../../../../../src/app/header-one-layout/tutorial/tutorial.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialModule", function() { return TutorialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial_component__ = __webpack_require__("../../../../../src/app/header-one-layout/tutorial/tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tutorial_routing_module__ = __webpack_require__("../../../../../src/app/header-one-layout/tutorial/tutorial-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';



var TutorialModule = /** @class */ (function () {
    function TutorialModule() {
    }
    TutorialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__tutorial_routing_module__["a" /* TutorialRoutingModule */],
                // FormsModule,
                // ReactiveFormsModule,
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tutorial_component__["b" /* TutorialComponent */], __WEBPACK_IMPORTED_MODULE_5_ng2_pdf_viewer__["a" /* PdfViewerComponent */], __WEBPACK_IMPORTED_MODULE_2__tutorial_component__["a" /* DocumentDialog */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__tutorial_component__["a" /* DocumentDialog */]]
        })
    ], TutorialModule);
    return TutorialModule;
}());



/***/ })

});
//# sourceMappingURL=tutorial.module.chunk.js.map