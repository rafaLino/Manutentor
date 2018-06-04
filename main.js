(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n    Slide Menu\r\n= = = = = = = = =\r\n*/\r\n.side-menu__container {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    pointer-events: none;\r\n    z-index: 25;\r\n  }\r\n.side-menu__container-active {\r\n    pointer-events: auto;\r\n  }\r\n.side-menu__container::before {\r\n    content: '';\r\n    cursor: pointer;\r\n    position: absolute;\r\n    display: block;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #0c1066;\r\n    opacity: 0;\r\n    transition: opacity 300ms linear;\r\n    will-change: opacity;\r\n  }\r\n.side-menu__container-active::before {\r\n    opacity: 0.3;\r\n  }\r\n.slide-menu {\r\n    box-sizing: border-box;\r\n    -webkit-transform: translateX(-103%);\r\n            transform: translateX(-103%);\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 10;\r\n    height: 100%;\r\n    width: 90%;\r\n    max-width: 26rem;\r\n    background-color: white;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n    -ms-grid-rows: 2fr 4fr 1fr;\r\n        grid-template-rows: 2fr 4fr 1fr;\r\n    grid-gap: 1rem;\r\n    transition: -webkit-transform 300ms linear;\r\n    transition: transform 300ms linear;\r\n    transition: transform 300ms linear, -webkit-transform 300ms linear;\r\n    will-change: transform;\r\n  }\r\n.slide-menu-active {\r\n    -webkit-transform: none;\r\n            transform: none;\r\n  }\r\n.menu-header {\r\n    background: linear-gradient(to right, #00FF9B, #5f84fb);\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 1fr 4fr;\r\n        grid-template-rows: 1fr 4fr;\r\n    -ms-grid-columns: 1fr 4fr;\r\n        grid-template-columns: 1fr 4fr;\r\n        grid-template-areas: \"greeting greeting\" \"image details\";\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    align-content: center;\r\n    color: white;\r\n    box-shadow: 0 0.5rem 2rem rgba(0, 0, 255, 0.2);\r\n  }\r\n.greeting__text {\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-column-span: 2;\r\n    grid-area: greeting;\r\n    font-size: 1.25rem;\r\n    letter-spacing: 0.15rem;\r\n    text-transform: uppercase;\r\n    margin-top: 1rem;\r\n    -ms-grid-column-align: center;\r\n        justify-self: center;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n  }\r\n.account-details {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 2;\r\n    grid-area: details;\r\n    display: flex;\r\n    flex-flow: column;\r\n    margin-left: 1rem;\r\n    align-self: center;\r\n  }\r\n.name__text {\r\n    font-size: 1.15rem;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n.email__text {\r\n    font-size: 0.9rem;\r\n    letter-spacing: 0.1rem;\r\n  }\r\n.menu-body {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    width: 100%;\r\n  }\r\n.profile-image__container {\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: image;\r\n    margin-right: 0.5rem;\r\n    border-radius: 50%;\r\n    height: 4rem;\r\n    width: 4rem;\r\n    overflow: hidden;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: white;\r\n    align-self: center;\r\n    margin-left: 2rem;\r\n  }\r\n.profile__image {\r\n    max-width: 4rem;\r\n  }\r\n/*Header*/\r\n.main__header {\r\n    width: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr 0.25fr;\r\n        grid-template-columns: 1fr 1fr 0.25fr;\r\n    -ms-grid-rows: 1fr;\r\n        grid-template-rows: 1fr;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n    height: 4rem;\r\n    margin: 0;\r\n    align-items: center;\r\n    transition: background-color 500ms linear;\r\n    -webkit-animation: 1s ease-in-out 0ms 1 fadein;\r\n            animation: 1s ease-in-out 0ms 1 fadein;\r\n  }\r\n.main__header-dark {\r\n    background-color: #2B244D;\r\n    color: white;\r\n  }\r\n.toggle-button__container {\r\n    cursor: pointer;\r\n    position: relative;\r\n    margin: 0 0.5rem;\r\n  }\r\n.mode-toggle__input {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n  }\r\n.mode-toggle__bg {\r\n    height: 1rem;\r\n    width: 2rem;\r\n    border-radius: 0.5rem;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    display: inline-block;\r\n    transition: background-color 300ms linear;\r\n  }\r\n.mode-toggle__circle {\r\n    height: 1.30rem;\r\n    width: 1.30rem;\r\n    background-color: #2B244D;\r\n    position: absolute;\r\n    top: -0.2rem;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 rgba(0, 0, 255, 0.5);\r\n    transition: left 300ms linear;\r\n    left: 0.1rem;\r\n  }\r\n.mode-toggle__circle-checked {\r\n    background-color: white;\r\n    left: 1.75rem;\r\n  }\r\n.mode-toggle__bg-checked {\r\n    background-color: #FF0070;\r\n  }\r\n.mode-toggle__text {\r\n    font-size: 0.75rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1rem;\r\n  }\r\n/*Content*/\r\n.left__section {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-rows: 1fr;\r\n        grid-template-rows: 1fr;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n    max-width: 5rem;\r\n  }\r\n.date__text {\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1rem;\r\n    display: inline;\r\n    margin: 0.5rem 0;\r\n  }\r\n/*SVGs*/\r\n.hamburger__icon {\r\n    position: relative;\r\n    z-index: 35;\r\n    height: 1rem;\r\n    padding: 0.5rem 1.5rem;\r\n    margin-right: 1rem;\r\n    cursor: pointer;\r\n  }\r\n.logo__icon {\r\n    height: 2rem;\r\n    margin-left: 1rem;\r\n  }\r\n.logo__text {\r\n    fill: #2B244D;\r\n  }\r\n.logo__text-dark {\r\n    fill: #ffff;\r\n  }\r\n.hamburger__icon__fill {\r\n    fill: #2B244D;\r\n  }\r\n.hamburger__icon__fill-dark {\r\n    fill: #ffff;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced -->\r\n<app-alert></app-alert>\r\n<main class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _directive_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/alert/alert.component */ "./src/app/directive/alert/alert.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _components_notfoud_notfoud_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/notfoud/notfoud.component */ "./src/app/components/notfoud/notfoud.component.ts");
/* harmony import */ var _guard_authguard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guard/authguard.service */ "./src/app/guard/authguard.service.ts");
/* harmony import */ var _components_login_login_manutentor_login_manutentor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login-manutentor/login-manutentor.component */ "./src/app/components/login/login-manutentor/login-manutentor.component.ts");
/* harmony import */ var _modules_fitter_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/fitter.module */ "./src/app/modules/fitter.module.ts");
/* harmony import */ var _modules_client_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/client.module */ "./src/app/modules/client.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _directive_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_login_login_manutentor_login_manutentor_component__WEBPACK_IMPORTED_MODULE_13__["LoginManutentorComponent"],
                _components_notfoud_notfoud_component__WEBPACK_IMPORTED_MODULE_11__["NotfoudComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'loginManutentor', component: _components_login_login_manutentor_login_manutentor_component__WEBPACK_IMPORTED_MODULE_13__["LoginManutentorComponent"] },
                    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '**', redirectTo: 'notfound', pathMatch: 'full' }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _modules_client_module__WEBPACK_IMPORTED_MODULE_15__["ClientModule"],
                _modules_fitter_module__WEBPACK_IMPORTED_MODULE_14__["FitterModule"]
            ],
            providers: [
                _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
                _services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"],
                _guard_authguard_service__WEBPACK_IMPORTED_MODULE_12__["AuthguardService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/client/alert-modal/alertModal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/client/alert-modal/alertModal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- MODAL ALERTA -->\r\n\r\n<mz-modal #alertModal [fixedFooter]=\"true\" [bottomSheet]=\"false\" [options]=\"Options\">\r\n  <mz-modal-header>\r\n    <button mz-button [flat]=\"true\" mz-modal-close class=\"right\">\r\n      <i class=\"material-icons\">close</i>\r\n    </button>\r\n    <!-- <button [hidden]='active' (click)=\"voltar()\" class=\"btn btn-small btn-waves left\">\r\n      <i class=\"material-icons\">close</i>Voltar \r\n    </button> -->\r\n    <h5>Confirmação do Serviço</h5>\r\n  </mz-modal-header>\r\n  <mz-modal-content>\r\n    <mz-collection [hidden]='!active'>\r\n      <mz-collection-item *ngFor=\"let servico of servicos\" (click)='seleciona(servico);'>\r\n        <p>\r\n          {{servico?.offer?.fitter?.name}}\r\n          <br> {{servico?.offer?.description}}\r\n          <br> {{servico?.comments}}\r\n          <br> {{servico?.approximateTime}}\r\n          <br> {{servico?.value}}\r\n        </p>\r\n\r\n        <a href=\"#!\" mz-secondary-content>\r\n          <i mz-icon-mdi [icon]=\"'send'\"></i>\r\n        </a>\r\n      </mz-collection-item>\r\n    </mz-collection>\r\n    <div class=\"col m10 s12\" [hidden]='active'>\r\n      <div class=\"col m10 s12\">\r\n        <input value=\"{{currentService?.approximateTime}}\">\r\n      </div>\r\n      <div class=\"col m10 s12\">\r\n        <input value=\"{{currentService?.value}}\">\r\n      </div>\r\n      <div class=\"col m10 s12\">\r\n        <input value=\"{{currentService?.comments}}\">\r\n      </div>\r\n      <div class=\"col m10 s12\">\r\n        <input value=\"{{currentService?.address}}\">\r\n      </div>\r\n      <div class=\"col m10 s12\">\r\n        <input value=\"{{currentService?.number}}\">\r\n      </div>\r\n      <div class=\"col m10 s12\">\r\n        <input value=\"{{currentService?.region}}\">\r\n      </div>\r\n      <div class=\"col m10 s12\">\r\n        <input value=\"{{currentService?.city}}\">\r\n      </div>\r\n      <div class=\"col m10 s12\">\r\n        <input value=\"{{currentService?.cep}}\">\r\n      </div>\r\n      <div class=\"col m10 s12\">\r\n        <input value=\"{{currentService?.state}}\">\r\n      </div>\r\n    </div>\r\n  </mz-modal-content>\r\n  <mz-modal-footer [hidden]='active'>\r\n    <button mz-button [flat]=\"true\" mz-modal-close>Cancelar</button>\r\n    <button mz-button [flat]=\"true\" (click)=\"confirmar()\">Confirmar</button>\r\n    <mz-spinner [hidden]=\"!loading\" [color]=\"'blue'\" [size]=\"'small'\">\r\n      </mz-spinner>\r\n  </mz-modal-footer>\r\n</mz-modal>"

/***/ }),

/***/ "./src/app/components/client/alert-modal/alertModal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/client/alert-modal/alertModal.component.ts ***!
  \***********************************************************************/
/*! exports provided: AlertModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModalComponent", function() { return AlertModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var ng2_materialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-materialize */ "./node_modules/ng2-materialize/dist/index.js");
/* harmony import */ var ng2_materialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_materialize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/status.enum */ "./src/app/components/shared/status.enum.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _services_fitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/fitter.service */ "./src/app/services/fitter.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlertModalComponent = /** @class */ (function (_super) {
    __extends(AlertModalComponent, _super);
    function AlertModalComponent(fbuilder, srvService, svcFitter) {
        var _this = _super.call(this) || this;
        _this.fbuilder = fbuilder;
        _this.srvService = srvService;
        _this.svcFitter = svcFitter;
        _this.active = true;
        return _this;
    }
    AlertModalComponent.prototype.ngOnInit = function () {
        this.servicos = this.dataBiding;
    };
    AlertModalComponent.prototype.seleciona = function (service) {
        this.active = false;
        this.currentService = service;
    };
    AlertModalComponent.prototype.voltar = function () {
        this.active = true;
    };
    AlertModalComponent.prototype.confirmar = function () {
        var _this = this;
        var id, serviceData;
        id = this.currentService.id;
        this.currentService.status = _shared_status_enum__WEBPACK_IMPORTED_MODULE_3__["Status"].Executando;
        this.currentService.serviceTypeId = this.currentService.offer.sType;
        serviceData = JSON.stringify(this.currentService);
        this.loading = true;
        this.srvService.confirm(id, serviceData).subscribe(function (res) {
            _this.loading = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlertModalComponent.prototype, "dataBiding", void 0);
    AlertModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./alertModal.component.html */ "./src/app/components/client/alert-modal/alertModal.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"],
            _services_fitter_service__WEBPACK_IMPORTED_MODULE_5__["FitterService"]])
    ], AlertModalComponent);
    return AlertModalComponent;
}(ng2_materialize__WEBPACK_IMPORTED_MODULE_1__["MzBaseModal"]));



/***/ }),

/***/ "./src/app/components/client/home/home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/client/home/home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-container{\r\n    position: relative;\r\n    width: 50%;\r\n    max-width: 300px;\r\n}\r\n\r\n\r\n.overlay {\r\n    position: absolute; \r\n    bottom: 0; \r\n    background: rgb(0, 0, 0);\r\n    background: rgba(0, 0, 0, 0.5); /* Black see-through */\r\n    color: #f1f1f1; \r\n    width: 100%;\r\n    transition: .5s ease;\r\n    opacity:0;\r\n    color: white;\r\n    font-size: 20px;\r\n    padding: 115px;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n.endereco{\r\n      border: 1px solid grey;\r\n      border-radius: 4px;\r\n      box-shadow: 1px 2px 1px black;\r\n  }"

/***/ }),

/***/ "./src/app/components/client/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/client/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pai\" class=\"col m7 s7\" align=\"center\">\r\n  <div class=\"row\">\r\n    <div class=\"col offset-m2 m7 s12\">\r\n      <h1 class=\"h2\">O que podemos consertar para você?</h1>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"Send();\">\r\n    <div class=\"row\">\r\n      <div class=\" col offset-m2 m5 s12\">\r\n        <select id=\"options-select\" class=\"browser-default col m8\" formControlName=\"ServiceTypeId\" (change)=\"onTypeChanged($event)\">\r\n          <option value=\"\" disabled selected>--Selecione--</option>\r\n          <option *ngFor='let type of typeServices' [value]='type.id'>{{type.description}}</option>\r\n        </select>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"input-field col offset-m2 m7 s12\">\r\n        <mz-textarea-container>\r\n          <textarea mz-textarea [label]=\"'Descrição'\" [placeholder]=\"'Descreva seu Problema'\" class=\"materialize-textarea\" id=\"Description\"\r\n            formControlName=\"Description\" length=\"250\"></textarea>\r\n          <!-- <label for=\"Description\">Descreva seu Problema</label> -->\r\n        </mz-textarea-container>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col offset-m2 m4 s7\">\r\n        <button class=\"btn btn-small blue darken-2 \" mz-button (click)=\"bottomSheetModal.open()\">Insira uma foto</button>\r\n      </div>\r\n      <div class=\"col m4 s5\">\r\n        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"waves-effect waves-light btn teal accent-4 white-text\">Enviar Pedido</button>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col offset-m1 m4 s5\">\r\n        <mz-switch-container>\r\n          <input mz-switch id=\"switch-id\" [off]=\"''\" [on]=\"'Minha Casa'\" [value]='minhacasa' [checked]='true' (change)=\"Mudou($event)\"\r\n            type=\"checkbox\">\r\n        </mz-switch-container>\r\n      </div>\r\n    </div>\r\n    <!-- ENDERECO -->\r\n    <div class=\"row\">\r\n      <div class=\"col offset-m2 m7 s7 endereco\" [hidden]=\"minhacasa\">\r\n        <div class=\"row\">\r\n          <div class=\"input-field col m8 s8\">\r\n            <input id=\"Address\" formControlName=\"Address\" autocomplete=\"off\" type=\"text\" class=\"validate\">\r\n            <label for=\"Address\">Endereço</label>\r\n          </div>\r\n          <div class=\"input-field col m2 s3\">\r\n            <input id=\"Number\" formControlName=\"Number\" autocomplete=\"off\" type=\"text\" class=\"validate\">\r\n            <label for=\"Number\">Número</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"input-field col m3 s6\">\r\n            <input id=\"Region\" formControlName=\"Region\" autocomplete=\"off\" type=\"text\" class=\"validate\">\r\n            <label for=\"Region\">Bairro</label>\r\n          </div>\r\n          <div class=\"input-field col m3 s3\">\r\n            <input id=\"city\" formControlName=\"City\" autocomplete=\"off\" type=\"text\" class=\"validate\">\r\n            <label for=\"city\">Cidade</label>\r\n          </div>\r\n          <div class=\"input-field col m2 s2\">\r\n            <input id=\"state\" formControlName=\"State\" autocomplete=\"off\" type=\"text\" class=\"validate\">\r\n            <label for=\"state\">UF</label>\r\n          </div>\r\n          <div class=\"input-field col m3 s4\">\r\n            <input id=\"CEP\" formControlName=\"CEP\" autocomplete=\"off\" type=\"text\" class=\"validate\">\r\n            <label for=\"CEP\">CEP</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col offset-m2 m7 s12\">\r\n    <app-tabela-fitter #tabela (formEvent)=\"receiveForm($event)\"></app-tabela-fitter>\r\n  </div>\r\n</div>\r\n\r\n<!-- MODAL FOTO -->\r\n<mz-modal #bottomSheetModal [fixedFooter]=\"true\" [options]=\"modalOptions\">\r\n  <mz-modal-header>\r\n    <div class=\"row\">\r\n      <button mz-button [flat]=\"true\" mz-modal-close class=\"right\">\r\n        <i class=\"material-icons\">close</i>\r\n      </button>\r\n      <h5>Adicione Fotos</h5>\r\n\r\n    </div>\r\n  </mz-modal-header>\r\n  <mz-modal-content>\r\n    <div class=\"img-container\">\r\n      <img src=\"../../../../assets/addimage.png\" alt=\"\" class=\"responsive-img\" width=\"200px\" height=\"200px\" (mouseover)=\"hover=true\"\r\n        (mouseleave)=\"hover=false\" (click)=\"fileInput.click()\">\r\n    </div>\r\n    <input #fileInput type=\"file\" name=\"Images\" style=\"display: none;\">\r\n  </mz-modal-content>\r\n  <mz-modal-footer>\r\n    <button mz-button class=\"btn-floating btn-large left waves-effect waves-light red\">\r\n      <i class=\"material-icons\">add</i>\r\n    </button>\r\n    <button mz-button [flat]=\"true\" class=\"btn btn-large waves-effect waves-light green white-text\" mz-modal-close>Ok</button>\r\n  </mz-modal-footer>\r\n</mz-modal>"

/***/ }),

/***/ "./src/app/components/client/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/client/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_type_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/type-service.service */ "./src/app/services/type-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_offer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/offer.service */ "./src/app/services/offer.service.ts");
/* harmony import */ var ng2_materialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-materialize */ "./node_modules/ng2-materialize/dist/index.js");
/* harmony import */ var ng2_materialize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_materialize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tabela_fitter_tabela_fitter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tabela-fitter/tabela-fitter.component */ "./src/app/components/client/tabela-fitter/tabela-fitter.component.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _alert_modal_alertModal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alert-modal/alertModal.component */ "./src/app/components/client/alert-modal/alertModal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeComponent = /** @class */ (function () {
    function HomeComponent(svcTypeService, svcOffer, servico, fb, route, activeRoute, modalAlert) {
        this.svcTypeService = svcTypeService;
        this.svcOffer = svcOffer;
        this.servico = servico;
        this.fb = fb;
        this.route = route;
        this.activeRoute = activeRoute;
        this.modalAlert = modalAlert;
        this.minhacasa = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            ClientId: this.currentUser.id,
            FitterId: [this.fitterId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ServiceTypeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Address: '',
            Number: '',
            Region: '',
            City: '',
            CEP: '',
            State: ''
        });
        this.svcTypeService.getList()
            .subscribe(function (types) {
            _this.typeServices = types;
        });
        this.loadServico(this.currentUser.id);
    };
    HomeComponent.prototype.loadServico = function (id) {
        var _this = this;
        this.servico.getByClient(id).subscribe(function (res) {
            if (res.length > 0) {
                _this.modalAlert.open(_alert_modal_alertModal_component__WEBPACK_IMPORTED_MODULE_8__["AlertModalComponent"], { dataBiding: res });
            }
        });
    };
    HomeComponent.prototype.Send = function () {
        if (this.minhacasa)
            this.preencheEndereco();
        var data = JSON.stringify(this.form.value);
        this.svcOffer.post(data);
        console.log(data.toString());
    };
    HomeComponent.prototype.receiveForm = function ($event) {
        this.form.patchValue({ FitterId: $event });
    };
    HomeComponent.prototype.Mudou = function ($event) {
        if (!$event.target.checked) {
            this.clearEndereco();
        }
        this.minhacasa = $event.target.checked;
    };
    HomeComponent.prototype.preencheEndereco = function () {
        this.form.patchValue({
            Address: this.currentUser.address,
            Number: this.currentUser.number,
            Region: this.currentUser.region,
            City: this.currentUser.city,
            CEP: this.currentUser.cep,
            State: this.currentUser.state
        });
    };
    HomeComponent.prototype.clearEndereco = function () {
        this.form.patchValue({
            Address: '',
            Number: '',
            Region: '',
            City: '',
            CEP: '',
            State: '',
        });
    };
    HomeComponent.prototype.onTypeChanged = function ($event) {
        $event.preventDefault();
        this.tabela.changeList($event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_tabela_fitter_tabela_fitter_component__WEBPACK_IMPORTED_MODULE_6__["TabelaFitterComponent"]),
        __metadata("design:type", _tabela_fitter_tabela_fitter_component__WEBPACK_IMPORTED_MODULE_6__["TabelaFitterComponent"])
    ], HomeComponent.prototype, "tabela", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/client/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/client/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_type_service_service__WEBPACK_IMPORTED_MODULE_1__["TypeServiceService"],
            _services_offer_service__WEBPACK_IMPORTED_MODULE_4__["OfferService"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ng2_materialize__WEBPACK_IMPORTED_MODULE_5__["MzModalService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/client/servico/servico.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/client/servico/servico.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/client/servico/servico.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/client/servico/servico.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/client/servico/servico.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/client/servico/servico.component.ts ***!
  \****************************************************************/
/*! exports provided: ServicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoComponent", function() { return ServicoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicoComponent = /** @class */ (function () {
    function ServicoComponent() {
    }
    ServicoComponent.prototype.ngOnInit = function () {
    };
    ServicoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servico',
            template: __webpack_require__(/*! ./servico.component.html */ "./src/app/components/client/servico/servico.component.html"),
            styles: [__webpack_require__(/*! ./servico.component.css */ "./src/app/components/client/servico/servico.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicoComponent);
    return ServicoComponent;
}());



/***/ }),

/***/ "./src/app/components/client/tabela-fitter/tabela-fitter-resolver.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/client/tabela-fitter/tabela-fitter-resolver.service.ts ***!
  \***********************************************************************************/
/*! exports provided: TabelaFitterResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabelaFitterResolverService", function() { return TabelaFitterResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_fitter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/fitter.service */ "./src/app/services/fitter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabelaFitterResolverService = /** @class */ (function () {
    function TabelaFitterResolverService(fitterService) {
        this.fitterService = fitterService;
    }
    TabelaFitterResolverService.prototype.resolve = function (route, state) {
        return this.fitterService.getList().map(function (fitters) { return fitters; });
    };
    TabelaFitterResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_fitter_service__WEBPACK_IMPORTED_MODULE_1__["FitterService"]])
    ], TabelaFitterResolverService);
    return TabelaFitterResolverService;
}());



/***/ }),

/***/ "./src/app/components/client/tabela-fitter/tabela-fitter.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/client/tabela-fitter/tabela-fitter.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tabela{\r\n    cursor:pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/client/tabela-fitter/tabela-fitter.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/client/tabela-fitter/tabela-fitter.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <table id=\"tabela\" class=\"highlight centered\">\r\n     <thead>\r\n       <tr>\r\n         <th scope=\"col\">Disponível</th>\r\n         <th scope=\"col\">Manutentor</th>\r\n         <th scope=\"col\">Avaliação</th>\r\n       </tr>\r\n     </thead>\r\n     <tbody>\r\n       <loading style=\"margin: 15%,0,0,50%;\" [hidden]='!loading'></loading>\r\n       <tr [hidden]='loading' *ngFor='let fitter of fitterList'>\r\n         <td>\r\n           <span *ngIf='fitter.availability; then verdadeiro else falso'></span>\r\n           <ng-template #verdadeiro><i class=\"material-icons\" style=\"color: green\">fiber_manual_record</i></ng-template>\r\n           <ng-template #falso><i class=\"material-icons\" style=\"color: red\">fiber_manual_record</i></ng-template>\r\n         </td>\r\n         <td  (click)='seleciona(fitter)'>{{fitter.name}}</td>\r\n         <td>\r\n           <pm-star [rating]='fitter.averageRating'>\r\n         </pm-star>\r\n         </td>\r\n         </tr>\r\n     </tbody>\r\n   </table>"

/***/ }),

/***/ "./src/app/components/client/tabela-fitter/tabela-fitter.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/client/tabela-fitter/tabela-fitter.component.ts ***!
  \****************************************************************************/
/*! exports provided: TabelaFitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabelaFitterComponent", function() { return TabelaFitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_fitter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/fitter.service */ "./src/app/services/fitter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabelaFitterComponent = /** @class */ (function () {
    function TabelaFitterComponent(svcFitter, route) {
        this.svcFitter = svcFitter;
        this.route = route;
        this.loading = true;
        this.formEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TabelaFitterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.svcFitter.getList()
            .subscribe(function (fitters) {
            _this.fitterList = fitters;
            _this.loading = false;
        });
    };
    TabelaFitterComponent.prototype.changeList = function (id) {
        var _this = this;
        this.loading = true;
        this.svcFitter.getByServiceType(id)
            .subscribe(function (fitters) {
            _this.fitterList = fitters;
            _this.loading = false;
        });
    };
    TabelaFitterComponent.prototype.seleciona = function (fitter) {
        if (!fitter.availability)
            alert("Manutentor Indisponível");
        else
            this.formEvent.emit(fitter.id);
    };
    TabelaFitterComponent.prototype.onRatingClicked = function (message) {
        console.log(message);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TabelaFitterComponent.prototype, "formEvent", void 0);
    TabelaFitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabela-fitter',
            template: __webpack_require__(/*! ./tabela-fitter.component.html */ "./src/app/components/client/tabela-fitter/tabela-fitter.component.html"),
            styles: [__webpack_require__(/*! ./tabela-fitter.component.css */ "./src/app/components/client/tabela-fitter/tabela-fitter.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fitter_service__WEBPACK_IMPORTED_MODULE_1__["FitterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TabelaFitterComponent);
    return TabelaFitterComponent;
}());



/***/ }),

/***/ "./src/app/components/fitter/home/homeFitter.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/fitter/home/homeFitter.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\r\n    border:1px solid black;\r\n    border-radius: 5px;\r\n}\r\n\r\ntd{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/fitter/home/homeFitter.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/fitter/home/homeFitter.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pai\" class=\"col m10 s12 l10\">\r\n  <div class=\"row\">\r\n    <div class=\"col m10 s12\">\r\n      <table class=\"highlight centered\">\r\n        <thead>\r\n          <tr>\r\n            <th>Serviço</th>\r\n            <th>Descrição</th>\r\n            <th>Endereço</th>\r\n            <!-- <th>\r\n              <button mz-button (click)=\"sidenav.opened = !sidenav.opened\" id=\"sidenav-btn\">\r\n                Open\r\n              </button>\r\n            </th> -->\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <mz-spinner [hidden]=\"!loading\" [color]=\"'blue'\" [size]=\"'small'\">\r\n          </mz-spinner>\r\n          <tr class=\"collection-item avatar\" *ngFor='let oferta of ofertas' (click)=\"SelecionaOferta(oferta, bottomSheetModal);\">\r\n            <td>{{oferta.serviceType.description}}</td>\r\n            <td>{{oferta.description}}</td>\r\n            <td>\r\n              <p>\r\n                {{oferta.address}}, {{oferta.number}} {{oferta.region}} {{oferta.city}}, {{oferta.state}}\r\n                <br> {{oferta.cep}}\r\n              </p>\r\n            </td>\r\n            <td *ngIf=\"oferta.status==5\">Aguardando Aprovação</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" style=\"margin-top:25%;\">\r\n    <div class=\"col m10 s12\">\r\n      <mz-spinner [hidden]=\"!loadingserv\" [color]=\"'blue'\" [size]=\"'small'\">\r\n      </mz-spinner>\r\n\r\n      <span *ngIf=\"!servico\">\r\n        <i class=\"material-icons \">error_outline</i> Você não está em nenhum serviço atualmente</span>\r\n      <ul class=\"collection with-header\">\r\n        <li class=\"collection-item\" *ngIf='!servico'>\r\n          <span>{{servico?.serviceType}}</span>\r\n          <p>{{servico?.status}}\r\n            <br> {{servico?.value}}\r\n            <br> {{servico?.comments}}\r\n          </p>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <mz-sidenav #sidenav [id]=\"'sidenav-demo'\" [collapseButtonId]=\"'sidenav-btn'\" [fixed]=\"true\" [draggable]=\"false\">\r\n  <mz-sidenav-header>\r\n    Sidenav header\r\n  </mz-sidenav-header>\r\n  <mz-sidenav-subheader>Link Subheader</mz-sidenav-subheader>\r\n  <mz-sidenav-link>\r\n    <a href=\"#\">First Link</a>\r\n  </mz-sidenav-link>\r\n  <mz-sidenav-divider></mz-sidenav-divider>\r\n  <mz-sidenav-link [active]=\"true\">\r\n    <a href=\"#\">Active Link</a>\r\n  </mz-sidenav-link>\r\n  <mz-sidenav-divider></mz-sidenav-divider>\r\n  <mz-sidenav-link>\r\n    <a href=\"#\" class=\"waves-effect\">Second Link With Waves</a>\r\n  </mz-sidenav-link>\r\n</mz-sidenav> -->\r\n\r\n\r\n\r\n\r\n<mz-modal #bottomSheetModal [fixedFooter]=\"true\" [bottomSheet]=\"false\" [options]=\"modalOptions\">\r\n  <mz-modal-header>\r\n    <h4>Oferta</h4>\r\n  </mz-modal-header>\r\n  <mz-modal-content style=\"background-color: azure;\">\r\n    <div class=\"row\">\r\n      <!-- PRIMEIRA COLUNA -->\r\n      <form [formGroup]=\"form\">\r\n        <div class=\"col m5 s12\">\r\n          <div class=\"row\">\r\n            <div class=\"col m2 s12\">\r\n              <label for=\"serviceType\">Tipo de Serviço</label>\r\n              <input type=\"text\" value=\"{{ofertaServico?.serviceType?.description}}\" class=\"form-control\" readonly>\r\n            </div>\r\n            <div class=\"col m5 s12\">\r\n              <label for=\"description\">Descrição do Problema</label>\r\n              <input type=\"text\" value=\"{{ofertaServico?.description}}\" class=\"form-control\" readonly>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col m3 s12\">\r\n              <label>Nome do Solicitante</label>\r\n              <input type=\"text\" value=\"{{client?.name}}\" class=\"form-control\" readonly>\r\n            </div>\r\n            <div class=\"col m1 s2\">\r\n              <label>Gênero</label>\r\n              <input type=\"text\" value=\"{{client?.genre}}\" class=\"form-control\" readonly>\r\n            </div>\r\n            <div class=\"col m3 s6\">\r\n              <label>Telefone para contato </label>\r\n              <input type=\"text\" value=\"{{client?.cellPhone}}\" class=\"form-control\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col m3 s6\">\r\n              <label>Endereço</label>\r\n              <input type=\"text\" formControlName=\"Address\" value=\"{{ofertaServico?.address}}\" class=\"form-control\" readonly>\r\n            </div>\r\n            <div class=\"col m1 s6\">\r\n              <label>Nº</label>\r\n              <input type=\"text\" formControlName=\"Number\" value=\"{{ofertaServico?.number}}\" class=\"form-control\" readonly>\r\n            </div>\r\n            <div class=\"col m3 s6\">\r\n              <label>Bairro</label>\r\n              <input type=\"text\" formControlName=\"Region\" value=\"{{ofertaServico?.region}}\" class=\"form-control\" readonly>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col m2 s6\">\r\n              <label>Cidade</label>\r\n              <input type=\"text\" formControlName=\"City\" value=\"{{ofertaServico?.city}}\" class=\"form-control\" readonly>\r\n            </div>\r\n            <div class=\"col m1 s6\">\r\n              <label>Estado</label>\r\n              <input type=\"text\" formControlName=\"State\" value=\"{{ofertaServico?.state}}\" class=\"form-control\" readonly>\r\n            </div>\r\n            <div class=\"col m2 s6\">\r\n              <label>CEP</label>\r\n              <input type=\"text\" formControlName=\"CEP\" value=\"{{ofertaServico?.cep}}\" class=\"form-control\" readonly>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- fim primeira-->\r\n\r\n        <!-- SEGUNDA COLUNA -->\r\n        <div class=\"col m6 s12 border\">\r\n\r\n          <div class=\"input-field col m12 s12\">\r\n            <i class=\"material-icons prefix\">mode_edit</i>\r\n            <textarea id=\"icon_prefix2\" formControlName=\"Comments\" class=\"materialize-textarea\"></textarea>\r\n            <label for=\"icon_prefix2\">Comentário</label>\r\n          </div>\r\n          <div class=\"input-field col m2 s6\">\r\n            <input type=\"number\" formControlName=\"Value\" min=\"0\" step=\"0.1\" id=\"valor\">\r\n            <label for=\"Value\">Valor</label>\r\n          </div>\r\n          <div class=\"input-field col m6 s6\">\r\n            <input mz-input mz-validation type=\"text\" placeholder=\"__:__ (hora/minuto)\" formControlName=\"ApproximateTime\" id=\"tempo\">\r\n            <label for=\"ApproximateTime\">Tempo Estimado</label>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </mz-modal-content>\r\n  <mz-modal-footer>\r\n    <button mz-button [flat]=\"true\" mz-modal-close>Cancelar</button>\r\n    <button mz-button type=\"button\" [flat]=\"true\" [disabled]=\"!form.valid\" (click)=\"Salvar();\">Enviar</button>\r\n    <img *ngIf=\"loadingForm\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n    />\r\n  </mz-modal-footer>\r\n</mz-modal>"

/***/ }),

/***/ "./src/app/components/fitter/home/homeFitter.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/fitter/home/homeFitter.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeFitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFitterComponent", function() { return HomeFitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_offer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/offer.service */ "./src/app/services/offer.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _shared_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/status.enum */ "./src/app/components/shared/status.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeFitterComponent = /** @class */ (function () {
    function HomeFitterComponent(offerService, 
        //private fitterservice: FitterService,
        clientService, formBuilder, svc) {
        this.offerService = offerService;
        this.clientService = clientService;
        this.formBuilder = formBuilder;
        this.svc = svc;
        this.loading = true;
        this.loadingserv = true;
        this.loadingForm = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeFitterComponent.prototype.ngOnInit = function () {
        this.loadOffer();
        this.loadService();
        this.form = this.formBuilder.group({
            OfferId: '',
            ServiceTypeId: '',
            FitterId: this.currentUser.id,
            ApproximateTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(\d{0,23}):?(\d{0,59})$/),
                ]),
            ],
            Value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Comments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Address: '',
            Number: '',
            Region: '',
            City: '',
            CEP: '',
            State: '',
        });
    };
    HomeFitterComponent.prototype.loadOffer = function () {
        var _this = this;
        this.offerService.getList(this.currentUser.id)
            .subscribe(function (offers) {
            _this.ofertas = offers;
            _this.loading = false;
        });
    };
    HomeFitterComponent.prototype.loadService = function () {
        var _this = this;
        var id = this.currentUser.id;
        this.svc.getByFitter(id)
            .subscribe(function (currentServico) {
            _this.servico = currentServico;
            _this.loadingserv = false;
        });
    };
    HomeFitterComponent.prototype.SelecionaOferta = function (oferta, modal) {
        var _this = this;
        if (oferta.status == _shared_status_enum__WEBPACK_IMPORTED_MODULE_5__["Status"].Aguardando) {
            alert("aguardando aprovação");
            return;
        }
        this.ofertaServico = oferta;
        this.modal = modal;
        this.clientService.get(this.ofertaServico.clientId).subscribe(function (cliente) {
            _this.client = cliente;
        });
        this.preencheForm();
        modal.open();
    };
    HomeFitterComponent.prototype.preencheForm = function () {
        this.form.patchValue({
            OfferId: this.ofertaServico.id,
            ClientId: this.ofertaServico.clientId,
            ServiceTypeId: this.ofertaServico.serviceType.id,
            Address: this.ofertaServico.address,
            Number: this.ofertaServico.number,
            Region: this.ofertaServico.region,
            City: this.ofertaServico.city,
            CEP: this.ofertaServico.cep,
            State: this.ofertaServico.state
        });
    };
    HomeFitterComponent.prototype.Salvar = function () {
        var _this = this;
        var data = JSON.stringify(this.form.value);
        this.loadingForm = true;
        console.log(data);
        this.svc.post(data).subscribe(function (res) {
            _this.loadingForm = false;
            console.log(res);
            _this.loadOffer();
            _this.modal.close();
        });
        //console.log(data.toString());
    };
    HomeFitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./homeFitter.component.html */ "./src/app/components/fitter/home/homeFitter.component.html"),
            styles: [__webpack_require__(/*! ./homeFitter.component.css */ "./src/app/components/fitter/home/homeFitter.component.css")]
        }),
        __metadata("design:paramtypes", [_services_offer_service__WEBPACK_IMPORTED_MODULE_1__["OfferService"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]])
    ], HomeFitterComponent);
    return HomeFitterComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login-manutentor/login-manutentor.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/login/login-manutentor/login-manutentor.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pai {\r\n\tbackground: linear-gradient(135deg, #083457, #010F1C);\r\n\t/*background-image: url(../img/back9.jpg);\r\n\tbackground-repeat: no-repeat;*/\r\n\tbackground-size: cover;\r\n\twidth: 100%;\r\n\theight: 992px;\r\n}\r\na {\r\n\tcolor: #007bff;\r\n}\r\na.link {\r\n\tfont-size: 12px;\r\n\tmargin: auto 0;\r\n}\r\n#login{\r\n\tmargin-top: 180px;\r\n\tmargin-bottom: 100px;\r\n\twidth: 300px;\r\n\tcolor: #010F1C;\r\n\tborder-style: solid;\r\n\tborder-width: 1px;\r\n\tborder-color: #BABABA!important;\r\n\tborder-radius: 15px;\r\n\topacity:0.90;\r\n\tbackground: white;\r\n\t/*background: linear-gradient(135deg, #010F1C, #083457);*/\r\n\tfont-size: 24px;\r\n\tfont-weight: bold;\r\n\tbox-shadow: 0px 0px 50px #FFF;\r\n}\r\n/* #exampleInputEmail1{\r\n\r\n\twidth: 220px;\r\n} */\r\n#avancar {\r\n\tborder-radius: 8px;\r\n\tborder-color: #083457;\r\n\tcolor: white;\r\n\tmargin-top: 15px;\r\n\tpadding-left: 25px;\r\n\tpadding-right: 25px;\r\n}\r\n#NaoRegistrado{\r\n\r\n\tfont-size: 14px;\r\n\tmargin-top: 25px;\r\n}\r\n#cadastrar{\r\n\tcolor: white;\r\n\tpadding-left: 30px;\r\n\tpadding-right: 30px;\r\n\tborder-radius: 8px;\r\n}\r\n.input-class{\r\n  /* width: 160px; */\r\n  border: none;\r\n  border-radius: 5px;\r\n  transition: all 300ms ease-in-out;\r\n  margin: 10px auto;\r\n  display: block;\r\n  background: #f6f6f6;\r\n  box-shadow: 0px 0px 2px #999 inset;\r\n  font-size: 20px;\r\n}\r\n.input-class:focus {\r\n  box-shadow: 0 0 5px #6db5f1;\r\n  width: 250px;\r\n}\r\n.input-class::-webkit-input-placeholder { /* Chrome, Safari, Opera */\r\n  color: #6db5f1;\r\n  font-style: italic;\r\n\r\n}\r\n.input-class:-moz-placeholder { /* Firefox 18- */\r\n  color: #6db5f1;\r\n  font-style: italic;\r\n  opacity: 1;\r\n}\r\n.input-class::-moz-placeholder {  /* Firefox 19+ */\r\n  color: #6db5f1;\r\n  font-style: italic;\r\n  opacity: 1;\r\n}\r\n.input-class:-ms-input-placeholder { /* IE10+ */\r\n  color: #6db5f1;\r\n  font-style: italic;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login-manutentor/login-manutentor.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/login/login-manutentor/login-manutentor.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col m6 s12\" align=\"center\" width=\"120px\">\r\n  <form class=\"col m6 s4\" [formGroup]=\"LoginForm\" (ngSubmit)=\"Login();\" role=\"form\">\r\n    <div class=\"row\">\r\n      <h1 class=\"h1 Color-Cerulean\">Bem Vindo Manutentor</h1>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"input-field col offset-m4 m6 s11\">\r\n        <input formControlName=\"Email\" id=\"email\" type=\"text\" class=\"col m8 validate\">\r\n        <label for=\"email\">Email</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"input-field col offset-m4 m6 s11\">\r\n        <input formControlName=\"Password\" id=\"password\" type=\"password\" class=\"col m8 validate\" autocomplete=\"off\">\r\n        <label for=\"password\">Senha</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button id=\"entrar\" class=\"btn btn-large waves-effect waves-light teal lighten-2\" type=\"submit\">\r\n          <span class=\"Color-White\">Entrar\r\n         <i *ngIf='!loading' class=\"material-icons right\">send</i>\r\n         </span>\r\n        </button>\r\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n    \r\n</div>\r\n<div class=\"row\">\r\n  <a routerLink=\"/login\" class=\"waves-effect waves-teal btn-flat row blue-text text-darken-4\">Voltar</a>\r\n</div>\r\n</form>\r\n</div>\r\n<footer class=\"range-field\">\r\n  <div class=\"footer-copyright center-align\">\r\n    <div class=\"col offset-m3 m5\">\r\n      <span>Manutentor© 2018 </span>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/login/login-manutentor/login-manutentor.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/login/login-manutentor/login-manutentor.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LoginManutentorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginManutentorComponent", function() { return LoginManutentorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginManutentorComponent = /** @class */ (function () {
    function LoginManutentorComponent(fb, service, alertService, router, route, location) {
        this.fb = fb;
        this.service = service;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.Title = 'Manutentor';
        this.loading = false;
    }
    LoginManutentorComponent.prototype.ngOnInit = function () {
        this.LogOut();
        this.LoginForm = this.fb.group({
            Email: '',
            Password: ''
        });
    };
    LoginManutentorComponent.prototype.Login = function () {
        var _this = this;
        var data = JSON.stringify(this.LoginForm.value);
        this.loading = true;
        this.service.LoginFitter(data)
            .subscribe(function (resp) {
            if (resp.id > 0)
                _this.router.navigate(['manutentor']);
            else
                _this.alertService.error("Usuário e/ou senha não encontrado");
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginManutentorComponent.prototype.LogOut = function () {
        this.service.LogOut();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginManutentorComponent.prototype.back = function () {
        this.router.navigate(['login']);
    };
    LoginManutentorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login-manutentor.component.html */ "./src/app/components/login/login-manutentor/login-manutentor.component.html"),
            styles: [__webpack_require__(/*! ./login-manutentor.component.css */ "./src/app/components/login/login-manutentor/login-manutentor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], LoginManutentorComponent);
    return LoginManutentorComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#entrar:active{\r\n    background-color: #73CFF2;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "     <div class=\"col m6 s12\" align=\"center\" width=\"120px\">\r\n     <form class=\"col m6 s4\" [formGroup]=\"LoginForm\" (ngSubmit)=\"Login();\" role=\"form\" >\r\n       <div class=\"row\">\r\n        <h1 class=\"h1 Color-Cerulean\">Manutentor</h1>\r\n       </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col offset-m4 m6 s11\">\r\n              <input formControlName=\"Email\" id=\"email\" type=\"text\" class=\"col m8 validate\">\r\n              <label for=\"email\">Email</label>\r\n            </div>\r\n          </div>\r\n            <div class=\"row\">\r\n              <div class=\"input-field col offset-m4 m6 s11\">\r\n                <input formControlName=\"Password\" id=\"password\" type=\"password\" class=\"col m8 validate\" autocomplete=\"off\">\r\n                <label for=\"password\">Senha</label>\r\n              </div>\r\n            </div>\r\n          <div class=\"row\">\r\n            <button id=\"entrar\" class=\"btn btn-large waves-effect waves-light teal lighten-2\" type=\"submit\">\r\n              <span class=\"Color-White\">Entrar\r\n             <i *ngIf='!loading' class=\"material-icons right\">send</i>\r\n             </span>\r\n            </button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n          </div>\r\n          <div class=\"row\">\r\n            <a routerLink=\"/loginManutentor\" class=\"row blue-text text-darken-4\">Você é um Manutentor?</a>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col offset-m3 m3 s4\">\r\n                  <span class=\"Color-PrussianBlue\">Não é cadastrado? </span>\r\n              </div>   \r\n              <div class=\"col m3 s3\">\r\n              <button id=\"cadastrar\" type=\"button\" class=\"btn waves-effect waves-light Color-PrussianBlue\">\r\n                    <span class=\"Color-White\">Cadastre-se</span>\r\n              </button>\r\n          </div>        \r\n          </div>\r\n      </form>\r\n    </div>\r\n    <footer class=\"range-field\">\r\n        <div class=\"footer-copyright center-align\">\r\n          <div class=\"col offset-m3 m5\">\r\n          <span>Manutentor© 2018 </span>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, service, alertService, router, route, location) {
        this.fb = fb;
        this.service = service;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.Title = 'Manutentor';
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.LogOut();
        this.LoginForm = this.fb.group({
            Email: '',
            Password: ''
        });
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        var data = JSON.stringify(this.LoginForm.value);
        this.loading = true;
        this.service.LoginClient(data)
            .subscribe(function (resp) {
            if (resp.id > 0)
                _this.router.navigate(['home']);
            else
                _this.alertService.error("Usuário e/ou senha não encontrado");
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.LogOut = function () {
        this.service.LogOut();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/notfoud/notfoud.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/notfoud/notfoud.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 100%;\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/notfoud/notfoud.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/notfoud/notfoud.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../assets/404.jpg\" class=\"img-fluid\" alt=\"404\">\n"

/***/ }),

/***/ "./src/app/components/notfoud/notfoud.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/notfoud/notfoud.component.ts ***!
  \*********************************************************/
/*! exports provided: NotfoudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoudComponent", function() { return NotfoudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoudComponent = /** @class */ (function () {
    function NotfoudComponent() {
    }
    NotfoudComponent.prototype.ngOnInit = function () {
    };
    NotfoudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./notfoud.component.html */ "./src/app/components/notfoud/notfoud.component.html"),
            styles: [__webpack_require__(/*! ./notfoud.component.css */ "./src/app/components/notfoud/notfoud.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoudComponent);
    return NotfoudComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/convert-to-spaces.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/shared/convert-to-spaces.pipe.ts ***!
  \*************************************************************/
/*! exports provided: ConvertToSpacesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToSpacesPipe", function() { return ConvertToSpacesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConvertToSpacesPipe = /** @class */ (function () {
    function ConvertToSpacesPipe() {
    }
    ConvertToSpacesPipe.prototype.transform = function (value, character) {
        return value.replace(character, ' ');
    };
    ConvertToSpacesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'convertToSpaces'
        })
    ], ConvertToSpacesPipe);
    return ConvertToSpacesPipe;
}());



/***/ }),

/***/ "./src/app/components/shared/loading.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/shared/loading.component.ts ***!
  \********************************************************/
/*! exports provided: loadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingComponent", function() { return loadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var loadingComponent = /** @class */ (function () {
    function loadingComponent() {
    }
    loadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loading',
            template: " <div class=\"preloader-wrapper small active\">\n    <div class=\"spinner-layer spinner-green-only\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div><div class=\"gap-patch\">\n        <div class=\"circle\"></div>\n      </div><div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>"
        })
    ], loadingComponent);
    return loadingComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/shared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _star_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star.component */ "./src/app/components/shared/star.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading.component */ "./src/app/components/shared/loading.component.ts");
/* harmony import */ var _convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./convert-to-spaces.pipe */ "./src/app/components/shared/convert-to-spaces.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _star_component__WEBPACK_IMPORTED_MODULE_2__["StarComponent"],
                _loading_component__WEBPACK_IMPORTED_MODULE_4__["loadingComponent"],
                _convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_5__["ConvertToSpacesPipe"]
            ],
            exports: [
                _star_component__WEBPACK_IMPORTED_MODULE_2__["StarComponent"],
                _loading_component__WEBPACK_IMPORTED_MODULE_4__["loadingComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/components/shared/star.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/shared/star.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n    overflow: hidden;\n}\ndiv {\n    cursor: pointer;\n}\n.iconIMG {\n    width: 24px;\n    height: 24px;\n}"

/***/ }),

/***/ "./src/app/components/shared/star.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/shared/star.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" \r\n[style.width.px]=\"starWidth\"\r\n[title]=\"rating\"\r\n(click)=\"onClick()\">\r\n    <div style=\"min-width: 140px;\">\r\n            <img class=\"iconIMG\" src=\"../../../assets/star.png\" >\r\n            <img class=\"iconIMG\" src=\"../../../assets/star.png\" >\r\n            <img class=\"iconIMG\" src=\"../../../assets/star.png\" >\r\n            <img class=\"iconIMG\" src=\"../../../assets/star.png\" >\r\n            <img class=\"iconIMG\" src=\"../../../assets/star.png\" >\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/star.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/shared/star.component.ts ***!
  \*****************************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 136 / 5;
    };
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("The rating " + this.rating + " was clicked!");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-star',
            template: __webpack_require__(/*! ./star.component.html */ "./src/app/components/shared/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/components/shared/star.component.css")]
        })
    ], StarComponent);
    return StarComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/status.enum.ts":
/*!**************************************************!*\
  !*** ./src/app/components/shared/status.enum.ts ***!
  \**************************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status;
(function (Status) {
    Status[Status["Aberto"] = 1] = "Aberto";
    Status[Status["Executando"] = 2] = "Executando";
    Status[Status["Bloqueado"] = 3] = "Bloqueado";
    Status[Status["Finalizado"] = 4] = "Finalizado";
    Status[Status["Aguardando"] = 5] = "Aguardando";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/app/directive/alert/alert.component.css":
/*!*****************************************************!*\
  !*** ./src/app/directive/alert/alert.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/directive/alert/alert.component.html":
/*!******************************************************!*\
  !*** ./src/app/directive/alert/alert.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{ message.text}}</div>\n"

/***/ }),

/***/ "./src/app/directive/alert/alert.component.ts":
/*!****************************************************!*\
  !*** ./src/app/directive/alert/alert.component.ts ***!
  \****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/directive/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/directive/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/guard/authguard.service.ts":
/*!********************************************!*\
  !*** ./src/app/guard/authguard.service.ts ***!
  \********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthguardService = /** @class */ (function () {
    function AuthguardService(route) {
        this.route = route;
    }
    AuthguardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.route.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthguardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/modules/client.module.ts":
/*!******************************************!*\
  !*** ./src/app/modules/client.module.ts ***!
  \******************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _components_client_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/client/home/home.component */ "./src/app/components/client/home/home.component.ts");
/* harmony import */ var _services_fitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/fitter.service */ "./src/app/services/fitter.service.ts");
/* harmony import */ var _services_type_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/type-service.service */ "./src/app/services/type-service.service.ts");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _components_client_tabela_fitter_tabela_fitter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/client/tabela-fitter/tabela-fitter.component */ "./src/app/components/client/tabela-fitter/tabela-fitter.component.ts");
/* harmony import */ var _components_client_tabela_fitter_tabela_fitter_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/client/tabela-fitter/tabela-fitter-resolver.service */ "./src/app/components/client/tabela-fitter/tabela-fitter-resolver.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _components_client_servico_servico_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/client/servico/servico.component */ "./src/app/components/client/servico/servico.component.ts");
/* harmony import */ var _services_offer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/offer.service */ "./src/app/services/offer.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_materialize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-materialize */ "./node_modules/ng2-materialize/dist/index.js");
/* harmony import */ var ng2_materialize__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_materialize__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_client_alert_modal_alertModal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/client/alert-modal/alertModal.component */ "./src/app/components/client/alert-modal/alertModal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'home', component: _components_client_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] /*, resolve: {fitter: TabelaFitterResolverService}*/ },
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzModalModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzButtonModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzSelectModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzTextareaModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzSidenavModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzIconMdiModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzIconModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzCollapsibleModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzSwitchModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzCollectionModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzSpinnerModule"]
            ],
            exports: [
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzModalModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzButtonModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzSelectModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzTextareaModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzSidenavModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzIconMdiModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzIconModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzCollapsibleModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzSwitchModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzCollectionModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzSpinnerModule"]
            ],
            declarations: [_components_client_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_client_tabela_fitter_tabela_fitter_component__WEBPACK_IMPORTED_MODULE_7__["TabelaFitterComponent"], _components_client_servico_servico_component__WEBPACK_IMPORTED_MODULE_10__["ServicoComponent"], _components_client_alert_modal_alertModal_component__WEBPACK_IMPORTED_MODULE_14__["AlertModalComponent"]],
            providers: [
                _services_fitter_service__WEBPACK_IMPORTED_MODULE_4__["FitterService"],
                _services_type_service_service__WEBPACK_IMPORTED_MODULE_5__["TypeServiceService"],
                _components_client_tabela_fitter_tabela_fitter_resolver_service__WEBPACK_IMPORTED_MODULE_8__["TabelaFitterResolverService"],
                _services_offer_service__WEBPACK_IMPORTED_MODULE_11__["OfferService"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_13__["MzModalService"]
            ],
            entryComponents: [
                _components_client_alert_modal_alertModal_component__WEBPACK_IMPORTED_MODULE_14__["AlertModalComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/modules/fitter.module.ts":
/*!******************************************!*\
  !*** ./src/app/modules/fitter.module.ts ***!
  \******************************************/
/*! exports provided: FitterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitterModule", function() { return FitterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_fitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/fitter.service */ "./src/app/services/fitter.service.ts");
/* harmony import */ var _services_offer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/offer.service */ "./src/app/services/offer.service.ts");
/* harmony import */ var _components_fitter_home_homeFitter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/fitter/home/homeFitter.component */ "./src/app/components/fitter/home/homeFitter.component.ts");
/* harmony import */ var ng2_materialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-materialize */ "./node_modules/ng2-materialize/dist/index.js");
/* harmony import */ var ng2_materialize__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_materialize__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var FitterModule = /** @class */ (function () {
    function FitterModule() {
    }
    FitterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'manutentor', component: _components_fitter_home_homeFitter_component__WEBPACK_IMPORTED_MODULE_5__["HomeFitterComponent"] }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_6__["MzModalModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_6__["MzButtonModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_6__["MzSpinnerModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_6__["MzSidenavModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_6__["MzValidationModule"],
                ng2_materialize__WEBPACK_IMPORTED_MODULE_6__["MzInputModule"]
            ],
            declarations: [_components_fitter_home_homeFitter_component__WEBPACK_IMPORTED_MODULE_5__["HomeFitterComponent"]],
            providers: [
                _services_offer_service__WEBPACK_IMPORTED_MODULE_4__["OfferService"],
                _services_fitter_service__WEBPACK_IMPORTED_MODULE_3__["FitterService"],
                _services_client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"],
                _services_service_service__WEBPACK_IMPORTED_MODULE_8__["ServiceService"]
            ]
        })
    ], FitterModule);
    return FitterModule;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keepAfterNavigationChange = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClientService = /** @class */ (function () {
    function ClientService(_http) {
        this._http = _http;
        //private api = 'http://localhost:6336/api/Client';
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].api + 'Client';
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.headers = _headers.append('Content-Type', 'application/json');
    }
    ClientService.prototype.getList = function () {
        return this._http.get(this.api, { headers: this.headers })
            .catch(this.handleError);
    };
    ClientService.prototype.get = function (id) {
        return this._http.get(this.api + "/" + id, { headers: this.headers })
            .catch(this.handleError);
    };
    ClientService.prototype.post = function (client) {
        return this._http.post(this.api, client, { headers: this.headers })
            .catch(this.handleError);
    };
    ClientService.prototype.put = function (id, client) {
        return this._http.put(this.api + "/" + id, client, { headers: this.headers })
            .catch(this.handleError);
    };
    ClientService.prototype.delete = function (id) {
        this._http.delete(this.api + "/" + id, { headers: this.headers })
            .catch(this.handleError);
    };
    ClientService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errorMessage);
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/fitter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/fitter.service.ts ***!
  \********************************************/
/*! exports provided: FitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitterService", function() { return FitterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FitterService = /** @class */ (function () {
    function FitterService(_http) {
        this._http = _http;
        //private api = 'http://localhost:6336/api/Fitter';
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].api + 'Fitter';
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers = _headers.append('Content-Type', 'application/json');
    }
    FitterService.prototype.getList = function () {
        return this._http.get(this.api, { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.get = function (id) {
        return this._http.get(this.api + "/" + id, { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.post = function (fitter) {
        return this._http.post(this.api, fitter, { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.put = function (id, fitter) {
        return this._http.put(this.api + "/" + id, fitter, { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.delete = function (id) {
        this._http.delete(this.api + "/" + id, { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.getByDisponibilidade = function () {
        return this._http.get(this.api + "/disponivel", { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.getByDisponibilidadeByServiceType = function (id) {
        return this._http.get(this.api + "/" + id + "/disponivel", { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.getByServiceType = function (id) {
        return this._http.get(this.api + "/" + id + "/tipoServico", { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.getByCidade = function (cidade) {
        return this._http.get(this.api + "/" + cidade + "/servico", { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.setDisponibilidade = function (id) {
        this._http.put(this.api + "/" + id + "/servico", id, { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.getRatingList = function () {
        return this._http.get(this.api + "/rating", { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.getRating = function (id) {
        return this._http.get(this.api + "/" + id + "/rating", { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.postRating = function (id, comments) {
        return this._http.post(this.api + "/" + id + "/rating", comments, { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.putRating = function (id, comments) {
        return this._http.put(this.api + "/" + id + "/rating", comments, { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.deleteRating = function (id) {
        this._http.delete(this.api + "/" + id + "/rating", { headers: this.headers })
            .catch(this.handleError);
    };
    FitterService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    };
    FitterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FitterService);
    return FitterService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
        //private api = 'http://localhost:6336/api/Login';
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].api + 'Login';
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers = _headers.append('Content-Type', 'application/json');
    }
    LoginService.prototype.LoginClient = function (data) {
        return this._http.post(this.api, data, { headers: this.headers })
            .map(function (user) {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        })
            .catch(this.handleError);
    };
    LoginService.prototype.LoginFitter = function (data) {
        return this._http.post(this.api + "/Fitter", data, { headers: this.headers })
            .map(function (user) {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        })
            .catch(this.handleError);
    };
    LoginService.prototype.LogOut = function () {
        localStorage.removeItem('currentUser');
    };
    LoginService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.log(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/offer.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/offer.service.ts ***!
  \*******************************************/
/*! exports provided: OfferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferService", function() { return OfferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OfferService = /** @class */ (function () {
    function OfferService(_http) {
        this._http = _http;
        //private api = 'http://localhost:6336/api/Offer';
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].api + "Offer";
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers = _headers.append('Content-Type', 'application/json');
    }
    OfferService.prototype.getList = function (id) {
        return this._http.get(this.api + "/" + id + "/fitter", { headers: this.headers })
            .catch(this.handleError);
    };
    OfferService.prototype.get = function (id) {
        return this._http.get(this.api + "/" + id, { headers: this.headers })
            .catch(this.handleError);
    };
    OfferService.prototype.delete = function (id) {
        this._http.delete(this.api + "/" + id, { headers: this.headers })
            .catch(this.handleError);
    };
    OfferService.prototype.post = function (offer) {
        this._http.post(this.api + "/", offer, { headers: this.headers }).subscribe(function (res) { return console.log(res.toString()); });
    };
    OfferService.prototype.put = function (id, offer) {
        return this._http.put(this.api + "/" + id, offer, { headers: this.headers })
            .catch(this.handleError);
    };
    OfferService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    };
    OfferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OfferService);
    return OfferService;
}());



/***/ }),

/***/ "./src/app/services/service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ServiceService = /** @class */ (function () {
    function ServiceService(_http) {
        this._http = _http;
        //private api = 'http://localhost:6336/api/Service/';
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].api + 'Service';
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers = _headers.append('Content-Type', 'application/json');
    }
    ServiceService.prototype.getList = function () {
        return this._http.get(this.api, { headers: this.headers })
            .catch(this.handleError);
    };
    ServiceService.prototype.get = function (id) {
        return this._http.get(this.api + "/" + id, { headers: this.headers })
            .catch(this.handleError);
    };
    ServiceService.prototype.delete = function (id) {
        this._http.delete(this.api + "/" + id, { headers: this.headers })
            .catch(this.handleError);
    };
    ServiceService.prototype.post = function (service) {
        return this._http.post(this.api, service, { headers: this.headers })
            .catch(this.handleError);
    };
    ServiceService.prototype.put = function (id, service) {
        return this._http.put(this.api + "/" + id, service, { headers: this.headers })
            .catch(this.handleError);
    };
    ServiceService.prototype.confirm = function (id, service) {
        return this._http.put(this.api + "/" + id + "/confirm", service, { headers: this.headers })
            .catch(this.handleError);
    };
    ServiceService.prototype.getByStatusId = function (id) {
        return this._http.get(this.api + "/" + id + "/status", { headers: this.headers })
            .catch(this.handleError);
    };
    ServiceService.prototype.getByStatus = function (id) {
        return this._http.get(this.api + "/status/" + id, { headers: this.headers })
            .catch(this.handleError);
    };
    ServiceService.prototype.getByClient = function (id) {
        return this._http.get(this.api + "/" + id + "/client", { headers: this.headers })
            .catch(this.handleError);
    };
    ServiceService.prototype.getByFitter = function (id) {
        return this._http.get(this.api + "/" + id + "/fitter", { headers: this.headers })
            .catch(this.handleError);
    };
    ServiceService.prototype.setStatus = function (id, status) {
        return this._http.put(this.api + "/" + id + "/status", status, { headers: this.headers })
            .catch(this.handleError);
    };
    ServiceService.prototype.getImage = function (id) {
        return this._http.get(this.api + "/" + id + "/image", { headers: this.headers })
            .catch(this.handleError);
    };
    ServiceService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    };
    ServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/services/type-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/type-service.service.ts ***!
  \**************************************************/
/*! exports provided: TypeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeServiceService", function() { return TypeServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TypeServiceService = /** @class */ (function () {
    function TypeServiceService(_http) {
        this._http = _http;
        //private api = 'http://localhost:6336/api/ServiceType/';
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].api + 'ServiceType';
        var _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers = _headers.append('Content-Type', 'application/json');
    }
    TypeServiceService.prototype.getList = function () {
        return this._http.get(this.api, { headers: this.headers })
            .catch(this.handleError);
    };
    TypeServiceService.prototype.get = function (id) {
        return this._http.get(this.api + "/" + id, { headers: this.headers })
            .catch(this.handleError);
    };
    TypeServiceService.prototype.delete = function (id) {
        this._http.delete(this.api + "/" + id, { headers: this.headers })
            .catch(this.handleError);
    };
    TypeServiceService.prototype.post = function (type) {
        return this._http.post(this.api, type, { headers: this.headers })
            .catch(this.handleError);
    };
    TypeServiceService.prototype.put = function (id, type) {
        return this._http.put(this.api + "/" + id + "}", type, { headers: this.headers })
            .catch(this.handleError);
    };
    TypeServiceService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    };
    TypeServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TypeServiceService);
    return TypeServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api: 'http://localhost:6336/api/'
    //api: 'http://fatectg.azurewebsites.net/api/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rafael Lino\Documents\GitHub\Manutentor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map