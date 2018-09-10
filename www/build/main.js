webpackJsonp([2],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarproductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_producto__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_producto__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BuscarproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscarproductoPage = /** @class */ (function () {
    function BuscarproductoPage(navCtrl, navParams, _productoservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._productoservice = _productoservice;
        this.producto = new __WEBPACK_IMPORTED_MODULE_2__models_producto__["a" /* Producto */];
        this.opcionesfuncion();
    }
    BuscarproductoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuscarproductoPage');
    };
    BuscarproductoPage.prototype.opcionesfuncion = function () {
        var _this = this;
        this._productoservice.traeopcion('color').subscribe(function (data) {
            _this.color = data.opcionproducto;
            console.log(_this.color);
        });
        this._productoservice.traeopcion('categoria').subscribe(function (data) {
            _this.categoria = data.opcionproducto;
        });
        this._productoservice.traeopcion('tamano').subscribe(function (data) {
            _this.tamano = data.opcionproducto;
        });
        this._productoservice.traeopcion('talla').subscribe(function (data) {
            _this.talla = data.opcionproducto;
        });
    };
    BuscarproductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buscarproducto',template:/*ion-inline-start:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/pages/buscarproducto/buscarproducto.html"*/'<!--\n  Generated template for the BuscarproductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Buscar producto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n  <ion-card>\n    <ion-card-content>\n  <form #loginform="ngForm" (ngSubmit)="buscarfuncion()" [@animacion]=estatustagle>\n    <ion-list >\n\n\n\n    <ion-item>\n        <ion-label>Categoria</ion-label>\n        <ion-select name="categoria" [(ngModel)]="producto.categoria" interface="action-sheet">\n          <ion-option *ngFor="let opcionproducto of categoria"  value= \'{{opcionproducto.clave}} {{opcionproducto.valor}}\'> {{opcionproducto.clave}} {{opcionproducto.valor}} </ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n          <ion-label>Color</ion-label>\n          <ion-select name="color" [(ngModel)]="producto.color" interface="action-sheet">\n            <ion-option *ngFor="let opcionproducto of color"  value= \'{{opcionproducto.clave}} {{opcionproducto.valor}}\'> {{opcionproducto.clave}} {{opcionproducto.valor}} </ion-option>\n\n          </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label>Tamaño</ion-label>\n            <ion-select name="Tamano" [(ngModel)]="producto.tamano" interface="action-sheet">\n              <ion-option *ngFor="let opcionproducto of tamano"  value= \'{{opcionproducto.clave}} {{opcionproducto.valor}}\' > {{opcionproducto.clave}} {{opcionproducto.valor}} </ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label>Talla</ion-label>\n              <ion-select name="talla" [(ngModel)]="producto.talla" interface="action-sheet">\n                  <ion-option *ngFor="let opcionproducto of talla"  value=\'{{opcionproducto.clave}}\'> {{opcionproducto.valor}} </ion-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Activo</ion-label>\n                <ion-toggle name="estatus" color="secondary" [(ngModel)]="producto.estatus"></ion-toggle>\n           </ion-item>\n\n    </ion-list>\n\n\n\n\n      <ion-label fixed></ion-label>\n       <ion-row center>\n      <button ion-button full round type="submit"  >Buscar</button>\n    </ion-row>\n\n  </form>\n</ion-card-content>\n\n</ion-card>\n\n<mostrarproducto></mostrarproducto>;\n</ion-content>\n'/*ion-inline-end:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/pages/buscarproducto/buscarproducto.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('animacion', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 0 }), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }), Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_producto__["a" /* productoservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_producto__["a" /* productoservice */]) === "function" && _c || Object])
    ], BuscarproductoPage);
    return BuscarproductoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=buscarproducto.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_producto__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_producto__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buscarproducto_buscarproducto__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductoPage = /** @class */ (function () {
    function ProductoPage(navCtrl, navParams, alertctrl, _productoservice, _loginservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertctrl = alertctrl;
        this._productoservice = _productoservice;
        this._loginservice = _loginservice;
        this.estatustagle = 'active';
        this.producto = new __WEBPACK_IMPORTED_MODULE_2__models_producto__["a" /* Producto */];
        this.titulo = this._productoservice.productomaestro.titulo;
        this.producto = this._productoservice.productomaestro.producto;
        console.log(this.estatustagle);
        this.opcionesfuncion();
        this.producto.creadoel = Date.now();
        this.producto.editadoel = Date.now();
        this.producto.creadopor = _loginservice.usuarioconectado.user.email;
    }
    ProductoPage.prototype.opcionesfuncion = function () {
        var _this = this;
        this._productoservice.traeopcion('color').subscribe(function (data) {
            _this.color = data.opcionproducto;
            console.log(_this.color);
        });
        this._productoservice.traeopcion('categoria').subscribe(function (data) {
            _this.categoria = data.opcionproducto;
        });
        this._productoservice.traeopcion('tamano').subscribe(function (data) {
            _this.tamano = data.opcionproducto;
        });
        this._productoservice.traeopcion('talla').subscribe(function (data) {
            _this.talla = data.opcionproducto;
        });
    };
    ProductoPage.prototype.nuevo = function (fab) {
        var _this = this;
        // this.navCtrl.setRoot(this.navCtrl.getActive().component)ç
        if (fab != null) {
            fab.close();
        }
        console.log(this.estatustagle);
        this.estatustagle = this.estatustagle === 'active' ? 'inactive' : 'active';
        this.producto.codigo = "(Autogenerado)";
        this.producto.categoria = "";
        this.producto.color = "";
        this.producto.tamano = "";
        this.producto.observaciones = "";
        this.producto.creadoel = Date.now();
        this.producto.creadopor = this._loginservice.usuarioconectado.user.email;
        this.producto.editadoel = Date.now();
        this.producto.estatus = true;
        this.producto.talla = "";
        setTimeout(function () {
            _this.estatustagle = _this.estatustagle === 'active' ? 'inactive' : 'active';
        }, 200);
        console.log(this.estatustagle);
    };
    ProductoPage.prototype.grabarfuncion = function () {
        var _this = this;
        this._productoservice.grabarproducto(this.producto).subscribe(function (data) {
            var codigo = data.producto.codigo;
            _this.producto = data.producto;
            _this.nuevo(null);
            _this.alerta('producto guardado con exito, codigo : ' + codigo);
            console.log(data);
        }, function (error) {
            var errormensaje = error;
            if (errormensaje.error.message != null) {
                _this.alerta(errormensaje.error.message);
            }
            else {
                _this.alerta('Error al conectar servidor api');
            }
        });
    };
    ProductoPage.prototype.openbuscar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__buscarproducto_buscarproducto__["a" /* BuscarproductoPage */]);
    };
    ProductoPage.prototype.alerta = function (mensaje) {
        var alertita = this.alertctrl.create({
            title: 'Alerta',
            message: mensaje,
            buttons: ['OK']
        });
        alertita.present();
    };
    ProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-producto',template:/*ion-inline-start:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/pages/producto/producto.html"*/'<!--\n  Generated template for the ProductoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{titulo}}</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding >\n\n  <ion-fab #fab top right edge>\n     <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n     <ion-fab-list>\n         <button ion-fab color="dark" (click)=\'openbuscar()\'><ion-icon name="search"></ion-icon></button>\n         <button ion-fab color="dark" (click)=\'nuevo(fab)\'><ion-icon name="add"></ion-icon></button>\n         <button ion-fab color="dark"><ion-icon name="create"></ion-icon></button>\n         <button ion-fab color="dark" ><ion-icon name="copy"></ion-icon></button>\n     </ion-fab-list>\n  </ion-fab>\n<div class="flip-container" >\n  <div class="flipper " >\n  <form #loginform="ngForm" (ngSubmit)="grabarfuncion()" [@animacion]=estatustagle>\n    <ion-list >\n\n    <ion-item>\n      <ion-label floating>Codigo</ion-label>\n      <ion-input disabled="true" type="text"  name="codigo" [(ngModel)]="producto.codigo" ></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n        <ion-label>Categoria</ion-label>\n        <ion-select name="categoria" [(ngModel)]="producto.categoria" interface="action-sheet">\n          <ion-option *ngFor="let opcionproducto of categoria"  value= \'{{opcionproducto.clave}} {{opcionproducto.valor}}\'> {{opcionproducto.clave}} {{opcionproducto.valor}} </ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n          <ion-label>Color</ion-label>\n          <ion-select name="color" [(ngModel)]="producto.color" interface="action-sheet">\n            <ion-option *ngFor="let opcionproducto of color"  value= \'{{opcionproducto.clave}} {{opcionproducto.valor}}\'> {{opcionproducto.clave}} {{opcionproducto.valor}} </ion-option>\n\n          </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label>Tamaño</ion-label>\n            <ion-select name="Tamano" [(ngModel)]="producto.tamano" interface="action-sheet">\n              <ion-option *ngFor="let opcionproducto of tamano"  value= \'{{opcionproducto.clave}} {{opcionproducto.valor}}\' > {{opcionproducto.clave}} {{opcionproducto.valor}} </ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label>Talla</ion-label>\n              <ion-select name="talla" [(ngModel)]="producto.talla" interface="action-sheet">\n                  <ion-option *ngFor="let opcionproducto of talla"  value=\'{{opcionproducto.clave}}\'> {{opcionproducto.valor}} </ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Observaciones</ion-label>\n              <ion-input type="text"  name="observacion" [(ngModel)]="producto.observacion"  ></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Activo</ion-label>\n                <ion-toggle name="estatus" color="secondary" [(ngModel)]="producto.estatus"></ion-toggle>\n           </ion-item>\n\n    </ion-list>\n    <ion-card>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n          <ion-col col-6><ion-img width="100" height="100" src="../../assets/imgs/colgador.jpg"></ion-img></ion-col>\n          <ion-col col-6>{{producto.creadopor}}\n            <br><br>\n            {{producto.creadoel | date }}\n            <br>\n            {{producto.editadoel | date}}\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n\n</ion-card-content>\n\n</ion-card>\n      <ion-label fixed></ion-label>\n       <ion-row center>\n      <button ion-button full round type="submit"  >Guardar</button>\n    </ion-row>\n\n  </form>\n  </div>\n</div>\n</ion-content>\n\n\n\n\n\n  <ion-card-header>\n    Card Header\n  </ion-card-header>\n\n  <ion-card-content>\n    <!-- Add card content here! -->\n\n\n`\n'/*ion-inline-end:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/pages/producto/producto.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('animacion', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }), Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }), Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 0 }), Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }), Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('100ms')),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('100ms'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_producto__["a" /* productoservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_producto__["a" /* productoservice */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_login__["a" /* loginservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_login__["a" /* loginservice */]) === "function" && _e || Object])
    ], ProductoPage);
    return ProductoPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=producto.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/buscarproducto/buscarproducto.module": [
		693,
		1
	],
	"../pages/producto/producto.module": [
		694,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Producto; });
var Producto = /** @class */ (function () {
    function Producto(codigo, categoria, color, tamano, observaciones, creadoel, creadopor, editadoel, estatus, talla, foto, estadistica) {
    }
    return Producto;
}());

//# sourceMappingURL=producto.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productoservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_producto__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_opcionproducto__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_productomaestro__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var productoservice = /** @class */ (function () {
    function productoservice(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].url;
        this.producto = new __WEBPACK_IMPORTED_MODULE_3__models_producto__["a" /* Producto */]("", "", "", "", "", "01/01/2017", "", "01/01/2017", true, "", "", 0);
        this.producto.codigo = "(Autogenerado)";
        this.producto.estatus = true;
        this.opcionproducto = new __WEBPACK_IMPORTED_MODULE_4__models_opcionproducto__["a" /* opcionProducto */];
        this.productomaestro = new __WEBPACK_IMPORTED_MODULE_5__models_productomaestro__["a" /* Productomaestro */]("", "", this.producto);
        this.productomaestro.accion = "nuevo";
        this.productomaestro.titulo = "Producto Nuevo";
        this.productomaestro.producto = this.producto;
    }
    productoservice.prototype.traeopcion = function (tipo) {
        return this.http.post(this.url + '/getopcionesp', {
            tipo: tipo
        });
    };
    productoservice.prototype.grabarproducto = function (producto) {
        return this.http.post(this.url + '//crearproducto', producto);
    };
    productoservice = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], productoservice);
    return productoservice;
}());

//# sourceMappingURL=producto.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    url: 'http://0.0.0.0:3977/api'
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(nombre, email, password, role) {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lara Gala</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n<login></login>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(358);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_producto__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_producto_producto__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_buscarproducto_buscarproducto__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_mostrarproducto_mostrarproducto__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__(691);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_producto_producto__["a" /* ProductoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_buscarproducto_buscarproducto__["a" /* BuscarproductoPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_mostrarproducto_mostrarproducto__["a" /* MostrarproductoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/buscarproducto/buscarproducto.module#BuscarproductoPageModule', name: 'BuscarproductoPage', segment: 'buscarproducto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/producto/producto.module#ProductoPageModule', name: 'ProductoPage', segment: 'producto', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_producto_producto__["a" /* ProductoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_buscarproducto_buscarproducto__["a" /* BuscarproductoPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_mostrarproducto_mostrarproducto__["a" /* MostrarproductoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login__["a" /* LoginComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__services_login__["a" /* loginservice */],
                __WEBPACK_IMPORTED_MODULE_5__services_producto__["a" /* productoservice */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return opcionProducto; });
var opcionProducto = /** @class */ (function () {
    function opcionProducto(tipo, valor, clave) {
    }
    return opcionProducto;
}());

//# sourceMappingURL=opcionproducto.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Productomaestro; });
var Productomaestro = /** @class */ (function () {
    function Productomaestro(accion, titulo, producto) {
    }
    return Productomaestro;
}());

//# sourceMappingURL=productomaestro.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Userconectado; });
var Userconectado = /** @class */ (function () {
    function Userconectado(conectado, user) {
    }
    return Userconectado;
}());

//# sourceMappingURL=userconectado.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_producto_producto__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(alertCtrl, platform, statusBar, splashScreen, _loginservice) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this._loginservice = _loginservice;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */] },
            { title: 'Producto', component: __WEBPACK_IMPORTED_MODULE_5__pages_producto_producto__["a" /* ProductoPage */] },
        ];
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.mostrarmenu = true;
        console.log('hola' + this.mostrarmenu);
        this._loginservice.cast.subscribe(function (conectado) { return _this.mostrarmenu = conectado; });
        console.log('hola' + this.mostrarmenu);
        console.log();
    };
    MyApp.prototype.showConfirm = function () {
        var _this = this;
        console.log('hola' + this.mostrarmenu);
        console.log(this._loginservice.usuarioconectado);
        var confirm = this.alertCtrl.create({
            title: 'Confirmar',
            message: '¿Seguro desea Salir?',
            buttons: [
                {
                    text: 'Si',
                    handler: function () {
                        _this._loginservice.salir();
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/app/app.html"*/'<ion-menu [content]="content" *ngIf="mostrarmenu">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button ion-item (click)="showConfirm()">\n        Salir\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__services_login__["a" /* loginservice */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastCtrl, alertctrl, _loginservice) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.alertctrl = alertctrl;
        this._loginservice = _loginservice;
        this.guardarenlocal = true;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '');
        this.estatustagle = 'inactive';
        setTimeout(function () {
            _this.estatustagle = 'active';
        }, 200);
        this.guardarenlocal = true;
        this._loginservice.conectado_fun().subscribe(function (usuarioconectado) {
            if (!usuarioconectado.conectado) {
                _this.mostrarlogin = true;
            }
            else {
                _this.mostrarlogin = false;
                _this.user = usuarioconectado.user;
                _this.presentToast('Bienvenid@ nuevamente ' + _this.user.nombre);
            }
            ;
        });
    }
    LoginComponent.prototype.loginfuncion = function () {
        var _this = this;
        this._loginservice.signup(this.user).subscribe(function (data) {
            _this.user = data.message;
            _this._loginservice.guardarconeccion(_this.guardarenlocal, _this.user);
            _this.presentToast('Bienvenid@ nuevamente ' + _this.user.nombre);
        }, function (error) {
            var errormensaje = error;
            if (errormensaje.error.message != null) {
                _this.alerta(errormensaje.error.message);
            }
            else {
                _this.alerta('Error al conectar servidor api');
            }
        });
    };
    LoginComponent.prototype.presentToast = function (mensaje) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 1500,
            position: 'middle'
        });
        this.estatustagle = this.estatustagle === 'active' ? 'inactive' : 'active';
        toast.onDidDismiss(function () {
            _this.mostrarlogin = false;
        });
        toast.present();
    };
    LoginComponent.prototype.alerta = function (mensaje) {
        var alertita = this.alertctrl.create({
            title: 'Alerta',
            message: mensaje,
            buttons: ['OK']
        });
        alertita.present();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/components/login/login.html"*/'\n <ion-content padding *ngIf="mostrarlogin" [@animacion]=estatustagle>\n   <ion-grid>\n     <ion-row>\n     <ion-col ><ion-img  src="../../assets/imgs/logolg.png"></ion-img></ion-col>\n       <ion-col col-6><ion-img width="100" height="100" src="../../assets/imgs/colgador.jpg"></ion-img></ion-col>\n   </ion-row>\n   </ion-grid>\n   <ion-card >\n     <ion-card-content>\n <div>\n  <h3 class="gray">Login</h3>\n </div>\n<form #loginform="ngForm" (ngSubmit)="loginfuncion()">\n  <ion-list>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" #email="ngModel" name="email" [(ngModel)]="user.email" ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" #password="ngModel" name="password" [(ngModel)]="user.password"  ></ion-input>\n  </ion-item>\n  <br>\n  <ion-item>\n    <ion-label >¿Mantenerse logueado?</ion-label>\n    <ion-checkbox name="guardar"    [(ngModel)]="guardarenlocal" color="dark" checked="true"></ion-checkbox>\n  </ion-item>\n\n  </ion-list>\n\n    <ion-label fixed></ion-label>\n     <ion-row center>\n    <button ion-button full round type="submit">entrar</button>\n  </ion-row>\n</form>\n  </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/components/login/login.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* trigger */])('animacion', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }), Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }), Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 0 }), Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }), Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('300ms')),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('300ms'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_login__["a" /* loginservice */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostrarproductoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MostrarproductoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MostrarproductoComponent = /** @class */ (function () {
    function MostrarproductoComponent() {
        console.log('Hello MostrarproductoComponent Component');
        this.text = 'Hello World';
    }
    MostrarproductoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mostrarproducto',template:/*ion-inline-start:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/components/mostrarproducto/mostrarproducto.html"*/'<!-- Generated template for the MostrarproductoComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/rodolfoleiva/Documents/prg/laraapp2/src/components/mostrarproducto/mostrarproducto.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MostrarproductoComponent);
    return MostrarproductoComponent;
}());

//# sourceMappingURL=mostrarproducto.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loginservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_userconectado__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var loginservice = /** @class */ (function () {
    function loginservice(http, storage) {
        this.http = http;
        this.storage = storage;
        this.conectado = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.cast = this.conectado.asObservable();
        this.url = __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].url;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '');
        this.user.nombre = "";
        this.usuarioconectado = new __WEBPACK_IMPORTED_MODULE_4__models_userconectado__["a" /* Userconectado */](false, __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]);
    }
    loginservice.prototype.signup = function (user_to_login) {
        return this.http.post(this.url + '/login', {
            email: user_to_login.email,
            password: user_to_login.password
        });
    };
    loginservice.prototype.conectado_fun = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"].create(function (usuarioconectado) {
            if (!_this.usuarioconectado.conectado) {
                _this.storage.get('user').then(function (val) {
                    if (val != null) {
                        _this.usuarioconectado.user = val;
                        _this.usuarioconectado.conectado = true;
                        _this.conectado.next(_this.usuarioconectado.conectado);
                        console.log(_this.conectado._value);
                        usuarioconectado.next(_this.usuarioconectado);
                    }
                    else {
                        _this.usuarioconectado.conectado = false;
                        _this.conectado.next(_this.usuarioconectado.conectado);
                        console.log('this.conectado');
                        usuarioconectado.next(_this.usuarioconectado);
                    }
                });
            }
            else {
                usuarioconectado.next(_this.usuarioconectado);
                _this.conectado.next(_this.usuarioconectado.conectado);
            }
        });
    };
    loginservice.prototype.salir = function () {
        this.conectado.next(false);
        this.storage.clear('user').then(function (val) {
            console.log('borrado', val);
            window.location.reload();
        });
    };
    loginservice.prototype.guardarconeccion = function (guardarlocal, user) {
        console.log('pase');
        if (guardarlocal) {
            this.storage.set('user', user);
        }
        this.usuarioconectado.conectado = true;
        this.usuarioconectado.user = user;
        this.conectado.next(true);
    };
    loginservice = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], loginservice);
    return loginservice;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[353]);
//# sourceMappingURL=main.js.map