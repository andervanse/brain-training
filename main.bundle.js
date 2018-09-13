webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nmain {    \r\n    position: relative;\r\n    width: 340px;\r\n    height: 300px;\r\n\tborder: 1px dotted gray;\r\n\tborder-radius: 5%;\r\n\ttext-align: center;\r\n\tmargin: 0px;\r\n}\r\n\r\n.countdown-number {\r\n\tfont-size: 38px;\r\n\tcolor: #db4646;\r\n}\r\n\r\n.word {\r\n\ttop: 5px;\r\n    height: 20%;    \r\n    background-color: #ffffff;\r\n    border-radius: 20%;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;  \r\n\tmargin: auto; \r\n\tfont-size: 58px; \r\n}\r\n\r\n.center {\r\n    top: 20px;\r\n    margin: 10px;    \r\n}\r\n\r\n.result {\r\n\tfont-size:22px;\r\n\tcolor: #2f6627;\r\n}\r\n\r\n\r\nbutton {\r\n\tborder-radius:28px;\r\n\tborder: none;\r\n\toutline: none;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tfont-family:Arial;\r\n\tfont-size:22px;\r\n\tpadding:16px 31px;\r\n\ttext-decoration:none;\r\n    width: 120px;\r\n    text-align: center;\r\n}\r\n\r\nbutton[name=\"btnVerdadeiro\"] {\r\n\tbackground-color:#45b4c7;\r\n\tcolor:#ffffff;\r\n    text-shadow:0px 1px 0px #256dd9;\r\n}\r\n\r\nbutton[name=\"btnVerdadeiro\"]:hover {\r\n\tbackground-color:#2a89bd;\r\n}\r\n\r\nbutton[name=\"btnFalso\"] {\r\n\tbackground-color:#e65757;\r\n\tcolor:#ffffff;\r\n    text-shadow:0px 1px 0px #e62e2e;\r\n}\r\n\r\nbutton[name=\"btnFalso\"]:hover {\r\n\tbackground-color:#db4646;\r\n}\r\n\r\nbutton[name=\"btnStart\"] {\r\n\tbackground-color:#44c767;\r\n\tborder:1px solid #18ab29;\r\n\tcolor:#ffffff;\r\n\ttext-shadow:0px 1px 0px #2f6627;\r\n}\r\n\r\nbutton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n.bottom {\r\n\tposition: relative;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <div>\n    <p class=\"countdown-number\">{{ countdownNumber }}</p>\n  </div>\n  <div>\n    <p *ngIf=\"!isBntStartVisible\" class=\"word\" [ngStyle]=\"{'color': randomColor?.color}\">{{ randomName?.name }}</p>\n  </div>\n  <br/>\n  <br/>\n  <div class=\"center\">\n    <button *ngIf=\"!isBntStartVisible\" name=\"btnVerdadeiro\" (click)=\"onTrue()\">V</button>\n\n    <button *ngIf=\"!isBntStartVisible\" name=\"btnFalso\" (click)=\"onFalse()\">F</button>\n\n    <div *ngIf=\"isBntStartVisible\" class=\"bottom\">\n      <button name=\"btnStart\" (click)=\"onStart()\">Iniciar</button>\n      <p class=\"result\">\n        Acertos: {{ getTotalCorrect() }} | Erros: {{ getTotalWrong() }}\n      </p>\n    </div>\n  </div>\n\n\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_countdown_service__ = __webpack_require__("../../../../../src/app/services/countdown.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(countdownService) {
        this.countdownService = countdownService;
        this.title = 'Brain Training';
        this.colors = ['green', 'yellow', 'blue'];
        this.names = ['green', 'yellow', 'blue'];
        this.score = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isBntStartVisible = true;
        this.countdownService.tick.subscribe(function (tickNumber) { return _this.countdownNumber = tickNumber; });
        this.countdownService.finish.subscribe(function (tickNumber) {
            _this.isBntStartVisible = true;
        });
    };
    AppComponent.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    AppComponent.prototype.generateRandom = function () {
        var rColorIdx = this.getRandomInt(this.colors.length);
        var rNameIdx = this.getRandomInt(this.names.length);
        this.randomColor = { index: rColorIdx, color: this.colors[rColorIdx] };
        this.randomName = { index: rNameIdx, name: this.names[rNameIdx] };
    };
    AppComponent.prototype.onStart = function () {
        this.isBntStartVisible = false;
        this.generateRandom();
        this.score = [];
        this.countdownNumber = 10;
        this.countdownService.start(1000, this.countdownNumber);
    };
    AppComponent.prototype.onTrue = function () {
        this.score.push(this.randomColor.index === this.randomName.index);
        this.generateRandom();
    };
    AppComponent.prototype.onFalse = function () {
        this.score.push(!(this.randomColor.index === this.randomName.index));
        this.generateRandom();
    };
    AppComponent.prototype.getTotalCorrect = function () {
        return this.score.filter(function (x) { return x; }).length;
    };
    AppComponent.prototype.getTotalWrong = function () {
        return this.score.filter(function (x) { return !x; }).length;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_countdown_service__["a" /* CountdownService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_countdown_service__["a" /* CountdownService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_countdown_service__["a" /* CountdownService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/countdown.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountdownService; });

var CountdownService = (function () {
    function CountdownService() {
        this.tick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    CountdownService.prototype.start = function (interval, tickNumber) {
        var _this = this;
        var x = setInterval(function () {
            tickNumber--;
            _this.tick.emit(tickNumber);
            if (tickNumber <= 0) {
                clearInterval(x);
                _this.finish.emit(tickNumber);
            }
        }, interval);
    };
    return CountdownService;
}());

//# sourceMappingURL=countdown.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map